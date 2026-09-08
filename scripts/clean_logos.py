from PIL import Image
from pathlib import Path
from collections import deque

assets = Path(r"C:\Users\Erion\OneDrive\Desktop\erlis-bunjakuu\assets")


def is_bg(r, g, b, mode="dark", threshold=40):
    if mode == "dark":
        return min(r, g, b) <= threshold and max(r, g, b) <= threshold + 25
    brightness = (r + g + b) / 3
    return brightness >= threshold and abs(r - g) < 18 and abs(g - b) < 18


def flood_clear(src: Path, dest: Path, mode="dark", threshold=40) -> None:
    img = Image.open(src).convert("RGBA")
    w, h = img.size
    pixels = img.load()
    visited = [[False] * w for _ in range(h)]
    q = deque()

    # start from all border pixels that look like background
    for x in range(w):
        for y in (0, h - 1):
            r, g, b, a = pixels[x, y]
            if is_bg(r, g, b, mode, threshold):
                q.append((x, y))
                visited[y][x] = True
    for y in range(h):
        for x in (0, w - 1):
            if visited[y][x]:
                continue
            r, g, b, a = pixels[x, y]
            if is_bg(r, g, b, mode, threshold):
                q.append((x, y))
                visited[y][x] = True

    while q:
        x, y = q.popleft()
        r, g, b, a = pixels[x, y]
        pixels[x, y] = (r, g, b, 0)
        for nx, ny in ((x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)):
            if 0 <= nx < w and 0 <= ny < h and not visited[ny][nx]:
                nr, ng, nb, na = pixels[nx, ny]
                if is_bg(nr, ng, nb, mode, threshold):
                    visited[ny][nx] = True
                    q.append((nx, ny))

    img.save(dest)
    # report transparent ratio
    data = list(img.getdata())
    transparent = sum(1 for p in data if p[3] == 0)
    print(f"{dest.name}: {transparent}/{len(data)} transparent ({transparent/len(data):.1%})")


def crop_content(src: Path, dest: Path, pad: int = 8) -> None:
    img = Image.open(src).convert("RGBA")
    bbox = img.getbbox()
    if not bbox:
        img.save(dest)
        return
    l, t, r, b = bbox
    l = max(0, l - pad)
    t = max(0, t - pad)
    r = min(img.width, r + pad)
    b = min(img.height, b + pad)
    cropped = img.crop((l, t, r, b))
    cropped.save(dest)
    print(f"cropped {dest.name} -> {cropped.size}")


# GitHub: remove outer black (keep octocat black fill which is enclosed)
flood_clear(assets / "github.png", assets / "github-clean.png", mode="dark", threshold=45)
# If github has white outer bg instead:
# try light if almost nothing transparent
img = Image.open(assets / "github-clean.png")
data = list(img.getdata())
if sum(1 for p in data if p[3] == 0) / len(data) < 0.05:
    flood_clear(assets / "github.png", assets / "github-clean.png", mode="light", threshold=235)

flood_clear(assets / "postman.png", assets / "postman-clean.png", mode="dark", threshold=40)
img = Image.open(assets / "postman-clean.png")
data = list(img.getdata())
if sum(1 for p in data if p[3] == 0) / len(data) < 0.05:
    flood_clear(assets / "postman.png", assets / "postman-clean.png", mode="light", threshold=235)

flood_clear(assets / "databricks.png", assets / "databricks-clean.png", mode="dark", threshold=42)
crop_content(assets / "databricks-clean.png", assets / "databricks-clean.png", pad=12)

# For tools tiles, also make a square icon crop of databricks (icon only - top portion)
db = Image.open(assets / "databricks-clean.png").convert("RGBA")
# crop roughly the top icon area if wide
if db.width > db.height * 1.2:
    # find non-transparent bbox and prefer upper half for icon
    bbox = db.getbbox()
    if bbox:
        l, t, r, b = bbox
        mid = t + int((b - t) * 0.58)
        icon = db.crop((l, t, r, mid))
        # make square canvas
        side = max(icon.width, icon.height)
        canvas = Image.new("RGBA", (side, side), (0, 0, 0, 0))
        canvas.paste(icon, ((side - icon.width) // 2, (side - icon.height) // 2), icon)
        canvas.save(assets / "databricks-icon.png")
        print(f"databricks-icon.png {canvas.size}")
else:
    db.save(assets / "databricks-icon.png")

print("done")
