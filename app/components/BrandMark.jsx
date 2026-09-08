"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";

const BrandMark = ({ size = 40 }) => {
  return (
    <span
      className="relative shrink-0 overflow-hidden border border-gold/50"
      style={{ width: size, height: size }}
    >
      <Image
        src={assets.profile_img}
        alt="Erlis Bunjaku"
        className="h-full w-full object-cover object-[center_18%]"
      />
    </span>
  );
};

export default BrandMark;
