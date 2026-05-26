import Link from "next/link";

const navItems = [
  { label: "Lore", href: "#lore" },
  { label: "Vault", href: "#vault" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Community", href: "#community" },
  { label: "Buy", href: "#buy" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-[#29432e]/80 bg-[#020604]/76 shadow-[0_14px_50px_rgba(0,0,0,0.42)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <span className="min-w-0">
            <span className="goblin-title block font-serif text-3xl font-black uppercase leading-none tracking-tight sm:text-4xl">
              GRIMMI
            </span>
            <span className="hidden text-[0.62rem] font-black uppercase tracking-[0.22em] text-[#cddc7d] sm:block">
              The Last Wallet Goblin
            </span>
          </span>
        </Link>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-1 lg:flex"
        >
          {navItems.map((item) => (
            <a
              className="rounded-md px-4 py-2 text-sm font-black text-[#f3eed8] transition hover:bg-[#06110d] hover:text-[#d7ff45] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d7ff45]"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          className="ornate-frame hidden h-12 shrink-0 items-center justify-center rounded-md border border-[#d7ff45] bg-[#0a150d] px-6 text-sm font-black text-[#d7ff45] shadow-[0_0_24px_rgba(215,255,69,0.26),inset_0_0_18px_rgba(215,255,69,0.08)] transition hover:-translate-y-0.5 hover:bg-[#d7ff45] hover:text-[#020604] hover:shadow-[0_0_34px_rgba(215,255,69,0.5)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d7ff45] sm:inline-flex"
          href="#buy"
        >
          Buy $GRIMMI
        </a>
      </div>

      <nav
        aria-label="Mobile navigation"
        className="mx-auto flex max-w-7xl gap-1 overflow-x-auto px-5 pb-3 sm:px-6 lg:hidden"
      >
        {navItems.map((item) => (
          <a
            className="min-w-fit rounded-md border border-[#29432e] bg-[#06110d] px-3 py-2 text-center text-xs font-bold text-[#c4cbbd] transition hover:border-[#d7ff45]/60 hover:text-[#d7ff45]"
            href={item.href}
            key={item.href}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
