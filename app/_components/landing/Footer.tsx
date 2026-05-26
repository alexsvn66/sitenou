export function Footer() {
  return (
    <footer className="mx-auto max-w-7xl px-5 pb-8 pt-5 sm:px-6 lg:px-8">
      <div className="ornate-frame grimmi-panel flex flex-col gap-5 px-6 py-7 text-sm text-[#a8b398] lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="goblin-title font-serif text-3xl font-black uppercase">
            GRIMMI
          </p>
          <p className="mt-1 text-[0.62rem] font-black uppercase tracking-[0.22em] text-[#7d8f76]">
            The Last Wallet Goblin
          </p>
        </div>
        <div className="text-center">
          <p className="font-serif text-2xl italic text-[#d7ff45]">
            No promises. No kings. Just goblins.
          </p>
          <p className="mt-2 text-xs text-[#7d8f76]">
            Copyright 2026 GRIMMI. All rights reserved.
          </p>
        </div>
        <div className="flex gap-3 lg:justify-end">
          {["X", "TG", "DEX", "MEME"].map((item) => (
            <a
              className="grid h-10 w-10 place-items-center rounded-full border border-[#344c37] bg-[#06110d] text-[0.62rem] font-black text-[#f3eed8] transition hover:border-[#d7ff45] hover:text-[#d7ff45]"
              href="#community"
              key={item}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
