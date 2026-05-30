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
    <header className="sticky top-0 z-30 border-b border-[#314d2d]/80 bg-[#020604]/86 shadow-[0_18px_60px_rgba(0,0,0,0.66),inset_0_-1px_0_rgba(215,255,69,0.18)] backdrop-blur-2xl">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(215,255,69,0.09),transparent_24%,transparent_72%,rgba(213,180,95,0.08)),radial-gradient(ellipse_at_50%_0%,rgba(215,255,69,0.12),transparent_34rem)]" />
      <div className="absolute inset-x-3 bottom-0 h-px bg-gradient-to-r from-transparent via-[#d7ff45]/85 to-transparent" />
      <span className="pointer-events-none absolute left-4 top-2 hidden h-8 w-8 border-l border-t border-[#d7ff45]/32 md:block" />
      <span className="pointer-events-none absolute right-4 top-2 hidden h-8 w-8 border-r border-t border-[#d7ff45]/32 md:block" />

      <div className="relative mx-auto flex min-h-20 max-w-[92rem] items-center justify-between gap-4 px-5 py-3 sm:px-7 lg:px-10">
        <Link
          aria-label="GRIMMI home"
          className="group flex min-w-0 items-center gap-3"
          href="/"
        >
          <span className="relative hidden h-12 w-12 shrink-0 place-items-center rounded-lg border border-[#d7ff45]/55 bg-[#07130e]/90 font-serif text-2xl font-black text-[#d7ff45] shadow-[0_0_28px_rgba(215,255,69,0.28),inset_0_0_18px_rgba(215,255,69,0.09)] sm:grid">
            <span className="absolute inset-1 rounded-md border border-[#b99943]/28" />
            G
          </span>
          <span className="min-w-0">
            <span
              className="block font-serif text-3xl font-black uppercase leading-none text-[#cdea51] drop-shadow-[0_0_18px_rgba(215,255,69,0.35)] transition group-hover:text-[#efff78] sm:text-4xl"
              style={{
                textShadow:
                  "0 0 18px rgba(215,255,69,0.32), 0 2px 0 rgba(2,6,4,0.8)",
              }}
            >
              GRIMMI
            </span>
            <span className="hidden text-[0.6rem] font-black uppercase tracking-[0.25em] text-[#c4d691] sm:block">
              THE LAST WALLET GOBLIN
            </span>
          </span>
        </Link>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-1 rounded-full border border-[#2f4d32]/85 bg-[#020604]/45 px-2 py-2 shadow-[0_0_28px_rgba(0,0,0,0.26),inset_0_0_22px_rgba(215,255,69,0.04)] lg:flex"
        >
          {navItems.map((item) => (
            <a
              className="rounded-full border border-transparent px-5 py-2 text-sm font-black text-[#f1ead0] transition hover:-translate-y-0.5 hover:border-[#d7ff45]/45 hover:bg-[#0a1a11]/90 hover:text-[#d7ff45] hover:shadow-[0_0_24px_rgba(215,255,69,0.18),inset_0_0_14px_rgba(215,255,69,0.06)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d7ff45]"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          className="relative inline-flex h-12 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-[#d7ff45] bg-[#06110d]/82 px-5 text-xs font-black uppercase tracking-wide text-[#efff78] shadow-[0_0_30px_rgba(215,255,69,0.38),inset_0_0_22px_rgba(215,255,69,0.1)] transition hover:-translate-y-1 hover:bg-[#d7ff45] hover:text-[#020604] hover:shadow-[0_0_52px_rgba(215,255,69,0.76),0_16px_42px_rgba(0,0,0,0.48)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d7ff45] sm:h-[3.25rem] sm:px-7 sm:text-sm"
          href="#buy"
        >
          <span className="absolute inset-x-3 top-1 h-px bg-gradient-to-r from-transparent via-[#efff78]/80 to-transparent" />
          Buy $GRIMMI
        </a>
      </div>

      <nav
        aria-label="Mobile navigation"
        className="relative mx-auto flex max-w-[92rem] gap-1 px-4 pb-3 sm:gap-2 sm:px-7 lg:hidden"
      >
        {navItems.map((item) => (
          <a
            className="min-w-0 flex-1 rounded-full border border-[#2b432e] bg-[#06110d]/82 px-1.5 py-2 text-center text-[0.66rem] font-bold text-[#cdd7bd] shadow-[inset_0_0_12px_rgba(215,255,69,0.04)] transition hover:border-[#d7ff45]/60 hover:text-[#d7ff45] sm:min-w-fit sm:flex-none sm:px-3 sm:text-xs"
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
