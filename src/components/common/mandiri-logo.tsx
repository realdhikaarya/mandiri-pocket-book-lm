"use client";

import Image from "next/image";
import { HTMLAttributes } from "react";

interface MandiriLogoProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export default function MandiriLogo({
  className,
  ...props
}: MandiriLogoProps) {
  return (
    <div className={className} {...props}>
      <Image
        src="/images/bank-mandiri-logo.png"
        alt="PT. Bank Mandiri, Tbk. Logo"
        width={120}
        height={35}
        style={{
          width: 'auto',
          height: '100%',
          objectFit: 'contain'
        }}
      />
    </div>
  );
}
