from pathlib import Path
from PIL import Image

BASE = Path(r"C:\Users\Erion\OneDrive\Desktop\erlis-bunjakuu\assets")


def knockout(src, dest, mode="white", threshold=42, pad=8):
    img = Image.open(src).convert("RGBA")
    pixels = img.load()
    w, h = img.size
    min_x, min_y, max_x, max_y = w, h, 0, 0

    for y in range(h):
        for x in range(w):
            r, g, b, a = pixels[x, y]
            if mode == "white":
                drop = r >= 255 - threshold and g >= 255 - threshold and b >= 255 - threshold
            else:
                drop = r <= threshold and g <= threshold and b <= threshold
            if drop:
                pixels[x, y] = (r, g, b, 0)
            elif a > 8:
                min_x, min_y = min(min_x, x), min(min_y, y)
                max_x, max_y = max(max_x, x), max(max_y, y)

    if max_x > min_x and max_y > min_y:
        min_x = max(0, min_x - pad)
        min_y = max(0, min_y - pad)
        max_x = min(w - 1, max_x + pad)
        max_y = min(h - 1, max_y + pad)
        img = img.crop((min_x, min_y, max_x + 1, max_y + 1))

    img.save(dest)
    print(f"wrote {dest.name} {img.size}")


knockout(BASE / "github.png", BASE / "github.png", "white", 36)
knockout(BASE / "postman.png", BASE / "postman.png", "white", 36)
knockout(BASE / "databricks-src.png", BASE / "databricks.png", "black", 28)
