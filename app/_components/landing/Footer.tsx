const links = ["X", "TG", "DEX", "MEME"];

export function Footer() {
  return (
    <footer className="mx-auto max-w-7xl px-5 pb-8 pt-5 sm:px-6 lg:px-8">
      <div className="ornate-frame relative overflow-hidden rounded-2xl border border-[#344c37] bg-[#06110d]/90 px-6 py-7 text-sm text-[#a8b398] shadow-[0_28px_96px_rgba(0,0,0,0.56),inset_0_0_40px_rgba(124,255,107,0.055)] backdrop-blur-sm">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d7ff45]/75 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(215,255,69,0.13),transparent_20rem),linear-gradient(90deg,rgba(213,180,95,0.05),transparent,rgba(215,255,69,0.04))]" />
        <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-xl border border-[#d7ff45]/42 bg-[#020604] font-serif text-2xl font-black text-[#d7ff45] shadow-[0_0_22px_rgba(215,255,69,0.16),inset_0_0_16px_rgba(215,255,69,0.06)]">
              G
            </span>
            <div>
              <p className="font-serif text-3xl font-black uppercase text-[#d7ff45] drop-shadow-[0_0_18px_rgba(215,255,69,0.24)]">
                GRIMMI
              </p>
              <p className="mt-1 text-[0.62rem] font-black uppercase tracking-[0.22em] text-[#8ea184]">
                The Last Wallet Goblin
              </p>
            </div>
          </div>

          <div className="max-w-xl lg:text-center">
            <p className="font-serif text-2xl italic text-[#d7ff45] drop-shadow-[0_0_14px_rgba(215,255,69,0.25)]">
              No promises. No kings. Just goblins.
            </p>
            <p className="mt-2 text-xs font-semibold leading-5 text-[#8ea184]">
              Community entertainment only. Crypto assets are risky and can
              lose all value.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 lg:justify-end">
            {links.map((item) => (
              <a
                className="grid h-11 min-w-11 place-items-center rounded-full border border-[#344c37] bg-[#06110d] px-3 text-[0.62rem] font-black text-[#f3eed8] shadow-[inset_0_0_14px_rgba(215,255,69,0.045)] transition hover:-translate-y-1 hover:border-[#d7ff45] hover:text-[#d7ff45] hover:shadow-[0_0_24px_rgba(215,255,69,0.2)]"
                href="#"
                key={item}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
