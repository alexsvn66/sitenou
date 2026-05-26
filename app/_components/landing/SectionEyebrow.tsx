import type { ReactNode } from "react";

type SectionEyebrowProps = {
  children: ReactNode;
};

export function SectionEyebrow({ children }: SectionEyebrowProps) {
  return (
    <p className="text-xs font-black uppercase tracking-[0.24em] text-[#d7ff45]">
      {children}
    </p>
  );
}
