import Image from "next/image";

import { Button } from "./Button";

const trustBadges = ["DEXTOOLS", "DEXSCREENER", "RUG CHECK VERIFIED"];

const runeOrnaments = [
  {
    className:
      "left-[3%] top-[18%] h-16 w-16 rotate-12 text-3xl opacity-25 sm:h-20 sm:w-20 sm:text-4xl",
    label: "G",
  },
  {
    className:
      "bottom-[18%] left-[42%] h-12 w-12 -rotate-12 text-2xl opacity-20 sm:h-16 sm:w-16 sm:text-3xl",
    label: "$",
  },
  {
    className:
      "right-[7%] top-[18%] h-14 w-14 rotate-45 text-2xl opacity-30 sm:h-18 sm:w-18 sm:text-3xl",
    label: "V",
  },
];

const coinOrnaments = [
  "bottom-[9%] left-[7%] h-10 w-10",
  "bottom-[15%] left-[52%] h-7 w-7",
  "right-[31%] top-[14%] h-8 w-8",
  "bottom-[28%] right-[8%] h-12 w-12",
];

export function HeroSection() {
  return (
    <section className="relative isolate w-full overflow-hidden border-b border-[#2b412d] bg-[#020604]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_34%,rgba(215,255,69,0.24),transparent_24rem),radial-gradient(circle_at_82%_62%,rgba(202,158,56,0.2),transparent_18rem),radial-gradient(circle_at_21%_24%,rgba(215,255,69,0.12),transparent_21rem),linear-gradient(180deg,#030806_0%,#06110d_48%,#020604_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(105deg,#020604_0%,rgba(2,6,4,0.96)_28%,rgba(2,6,4,0.68)_48%,rgba(2,6,4,0.22)_73%,rgba(2,6,4,0.82)_100%)]" />
      <div className="absolute inset-0 opacity-80 bg-[linear-gradient(115deg,rgba(215,255,69,0.055)_0_1px,transparent_1px_112px),linear-gradient(72deg,rgba(213,180,95,0.045)_0_1px,transparent_1px_148px)]" />

      <div className="absolute inset-y-0 right-0 hidden w-[70%] lg:block">
        <Image
          alt="Grimmi holding a glowing key before the Goblin Vault"
          className="object-cover object-[54%_50%]"
          fill
          priority
          sizes="70vw"
          src="/grimmi/hero-art.png"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_54%_38%,rgba(215,255,69,0.16),transparent_22rem),linear-gradient(90deg,#020604_0%,rgba(2,6,4,0.9)_13%,rgba(2,6,4,0.24)_39%,rgba(2,6,4,0.08)_71%,rgba(2,6,4,0.72)_100%),linear-gradient(180deg,rgba(2,6,4,0.04)_0%,rgba(2,6,4,0)_55%,#020604_100%)]" />
      </div>

      <div className="absolute inset-x-0 bottom-0 h-44 bg-[radial-gradient(ellipse_at_50%_100%,rgba(215,255,69,0.15),transparent_36%),linear-gradient(180deg,transparent,#020604_82%)]" />
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d7ff45]/65 to-transparent" />
      <div className="absolute left-1/2 top-12 h-80 w-[42rem] -translate-x-1/2 rounded-full bg-[#d7ff45]/10 blur-3xl" />
      <div className="absolute bottom-12 right-1/3 h-48 w-[36rem] rounded-full bg-[#d7ff45]/10 blur-3xl" />
      <div className="absolute bottom-4 left-0 right-0 h-24 bg-[linear-gradient(90deg,transparent,rgba(215,255,69,0.08),transparent)] blur-2xl" />

      {runeOrnaments.map((ornament) => (
        <span
          aria-hidden="true"
          className={`pointer-events-none absolute hidden place-items-center rounded-full border border-[#d7ff45]/30 bg-[#06110d]/34 font-serif font-black text-[#d7ff45] shadow-[0_0_30px_rgba(215,255,69,0.12),inset_0_0_22px_rgba(215,255,69,0.08)] backdrop-blur-sm md:grid ${ornament.className}`}
          key={ornament.label}
        >
          {ornament.label}
        </span>
      ))}

      {coinOrnaments.map((className) => (
        <span
          aria-hidden="true"
          className={`pointer-events-none absolute hidden rounded-full border border-[#b99943]/45 bg-[#1a1509]/40 shadow-[0_0_18px_rgba(213,180,95,0.18),inset_0_0_14px_rgba(213,180,95,0.16)] after:absolute after:inset-2 after:rounded-full after:border after:border-[#d7ff45]/20 lg:block ${className}`}
          key={className}
        />
      ))}

      <div className="relative mx-auto grid min-h-[calc(100svh-5.6rem)] max-w-[94rem] gap-8 px-5 py-8 sm:px-6 sm:py-10 lg:grid-cols-[0.84fr_1.16fr] lg:items-center lg:px-8 lg:py-12">
        <div className="relative z-10 max-w-2xl">
          <div className="absolute -left-10 top-6 h-64 w-64 rounded-full bg-[#d7ff45]/10 blur-3xl" />
          <p className="relative text-xs font-black uppercase tracking-[0.34em] text-[#d7ff45] drop-shadow-[0_0_16px_rgba(215,255,69,0.34)]">
            THE LAST WALLET GOBLIN
          </p>
          <h1 className="goblin-title relative mt-4 font-serif text-[4.8rem] font-black uppercase leading-[0.8] tracking-tight sm:text-[6.8rem] lg:text-[8.9rem] xl:text-[10.6rem]">
            GRIMMI
          </h1>
          <p className="relative mt-3 max-w-2xl font-serif text-3xl italic leading-tight text-[#f7f1d5] drop-shadow-[0_0_16px_rgba(255,255,255,0.16)] sm:text-4xl">
            The Last Wallet Goblin
          </p>
          <div className="relative my-5 flex max-w-lg items-center gap-3">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#9d8235] to-[#d7ff45]" />
            <span className="h-1.5 w-1.5 rotate-45 bg-[#d7ff45] shadow-[0_0_14px_rgba(215,255,69,0.8)]" />
            <span className="h-px flex-1 bg-gradient-to-l from-transparent via-[#9d8235] to-[#d7ff45]" />
          </div>
          <p className="relative max-w-xl font-serif text-xl italic leading-8 text-[#d7ff45] drop-shadow-[0_0_16px_rgba(215,255,69,0.28)]">
            No promises. No kings. Just goblins.
          </p>
          <p className="relative mt-5 max-w-xl text-base font-semibold leading-8 text-[#e9e3cc] sm:text-lg">
            Born in the forgotten corners of the chain. Built for memes,
            chaos, and community.
          </p>

          <div className="relative mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#buy">
              <span className="grid h-7 w-7 place-items-center rounded-full border border-[#020604]/25 bg-[#020604]/10 text-xs">
                G
              </span>
              Buy $GRIMMI
            </Button>
            <Button href="#lore" variant="secondary">
              <span className="h-4 w-4 rounded-sm border border-[#d7ff45]/55 shadow-[0_0_12px_rgba(215,255,69,0.2)]" />
              Read the Lore
            </Button>
          </div>

          <div className="relative mt-6 max-w-xl overflow-hidden rounded-full border border-[#8a7431]/80 bg-[#06110d]/78 px-4 py-3 font-mono text-[0.68rem] font-bold text-[#d8d1b7] shadow-[0_0_26px_rgba(0,0,0,0.4),0_0_22px_rgba(215,255,69,0.09),inset_0_0_22px_rgba(215,255,69,0.06)] backdrop-blur-md">
            <div className="absolute inset-0 bg-gradient-to-r from-[#d7ff45]/8 via-transparent to-[#d5b45f]/10" />
            <div className="relative flex items-center gap-3">
              <span className="text-[#d7ff45]">CA:</span>
              <span className="min-w-0 flex-1 truncate">
                0xGrimmiGoblin000000000000000000000
              </span>
              <span
                aria-hidden="true"
                className="relative h-5 w-5 shrink-0 rounded-sm border border-[#d7ff45]/75 shadow-[0_0_14px_rgba(215,255,69,0.46)] before:absolute before:-right-1 before:-top-1 before:h-5 before:w-5 before:rounded-sm before:border before:border-[#d7ff45]/35"
              />
            </div>
          </div>

          <div className="relative mt-6 max-w-xl">
            <p className="text-center text-[0.64rem] font-black uppercase tracking-[0.28em] text-[#83917d] sm:text-left">
              Trusted & Liquid
            </p>
            <div className="mt-3 flex flex-wrap gap-3">
              {trustBadges.map((badge) => (
                <span
                  className="inline-flex items-center gap-2 rounded-md border border-[#3d593e] bg-[#06110d]/74 px-3 py-2 text-[0.68rem] font-black uppercase tracking-wide text-[#f0f0dc] shadow-[0_0_18px_rgba(0,0,0,0.25),inset_0_0_18px_rgba(215,255,69,0.045)] backdrop-blur-sm"
                  key={badge}
                >
                  <span className="h-2 w-2 rounded-full bg-[#d7ff45] shadow-[0_0_10px_rgba(215,255,69,0.8)]" />
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="relative z-10 min-h-[28rem] overflow-hidden rounded-lg border border-[#43573d] bg-[#06110d] shadow-[0_28px_90px_rgba(0,0,0,0.5),0_0_46px_rgba(215,255,69,0.12),inset_0_0_34px_rgba(215,255,69,0.06)] lg:hidden">
          <Image
            alt="Grimmi holding a glowing key before the Goblin Vault"
            className="object-cover object-[54%_50%]"
            fill
            priority
            sizes="100vw"
            src="/grimmi/hero-art.png"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_54%_38%,rgba(215,255,69,0.14),transparent_18rem),linear-gradient(180deg,rgba(2,6,4,0)_48%,rgba(2,6,4,0.9)_100%)]" />
        </div>

        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 hidden w-[58%] lg:block">
          <div className="absolute right-[9%] top-[12%] rounded-md border border-[#d7ff45]/60 bg-[#06110d]/68 px-5 py-2 text-sm font-black uppercase tracking-[0.18em] text-[#d7ff45] shadow-[0_0_28px_rgba(215,255,69,0.26),inset_0_0_18px_rgba(215,255,69,0.08)] backdrop-blur-md">
            GOBLIN VAULT
          </div>
          <div className="absolute bottom-[13%] right-[8%] max-w-[13rem] rounded-md border border-[#8a7431]/75 bg-[#130f0a]/78 px-5 py-4 font-serif text-xl italic leading-7 text-[#d2bc72] shadow-[0_0_30px_rgba(0,0,0,0.45),inset_0_0_18px_rgba(213,180,95,0.05)] backdrop-blur-sm">
            <span className="absolute -left-2 top-4 h-3 w-3 rotate-45 border border-[#8a7431]/70 bg-[#130f0a]" />
            No kings.
            <br />
            No promises.
            <br />
            Just goblins.
          </div>
        </div>
      </div>
    </section>
  );
}
