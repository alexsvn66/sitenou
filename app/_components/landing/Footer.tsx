import Image from "next/image";

const footerImage = "/grimmi/ce0477a1-98d6-4f2d-8f42-5d281c9813b7.png";

export function Footer() {
  return (
    <footer className="mx-auto max-w-7xl px-5 pb-8 pt-5 sm:px-6 lg:px-8">
      <div className="relative aspect-[1916/601] overflow-hidden rounded-[1.15rem] border border-[#92792f]/65 bg-[#020604] shadow-[0_22px_50px_rgba(0,0,0,0.62),0_0_28px_rgba(171,255,55,0.055)]">
        <Image
          alt="GRIMMI footer with goblin emblem, closing slogan, fantasy sigils, and copyright"
          className="object-cover object-center"
          fill
          sizes="(min-width: 1280px) 1216px, calc(100vw - 2.5rem)"
          src={footerImage}
        />
      </div>
    </footer>
  );
}
