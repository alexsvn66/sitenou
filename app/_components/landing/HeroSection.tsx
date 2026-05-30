"use client";

import Image from "next/image";

const contractAddress = "0xGrimmiGoblin000000000000000000000";

const trustBadges = [
  { icon: "D", label: "DEXTOOLS" },
  { icon: "DS", label: "DEXSCREENER" },
  { icon: "RV", label: "RUG CHECK VERIFIED" },
];

const fantasyFrameClipPath =
  "polygon(0.72rem 0, calc(100% - 0.72rem) 0, 100% 0.72rem, 100% calc(100% - 0.72rem), calc(100% - 0.72rem) 100%, 0.72rem 100%, 0 calc(100% - 0.72rem), 0 0.72rem)";

const badgeFrameClipPath =
  "polygon(0.45rem 0, calc(100% - 0.45rem) 0, 100% 0.45rem, 100% calc(100% - 0.45rem), calc(100% - 0.45rem) 100%, 0.45rem 100%, 0 calc(100% - 0.45rem), 0 0.45rem)";

function FrameOrnaments({ bright = false }: { bright?: boolean }) {
  const borderColor = bright ? "border-[#fff18a]" : "border-[#c9a64b]";
  const jewelColor = bright ? "bg-[#afdc2f]" : "bg-[#36551d]";

  return (
    <>
      <span
        aria-hidden="true"
        className={`absolute left-[0.24rem] top-[0.24rem] h-2.5 w-2.5 border-l border-t ${borderColor}`}
      />
      <span
        aria-hidden="true"
        className={`absolute right-[0.24rem] top-[0.24rem] h-2.5 w-2.5 border-r border-t ${borderColor}`}
      />
      <span
        aria-hidden="true"
        className={`absolute bottom-[0.24rem] left-[0.24rem] h-2.5 w-2.5 border-b border-l ${borderColor}`}
      />
      <span
        aria-hidden="true"
        className={`absolute bottom-[0.24rem] right-[0.24rem] h-2.5 w-2.5 border-b border-r ${borderColor}`}
      />
      {bright ? (
        <>
          <span
            aria-hidden="true"
            className={`absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-[#f5ce52] ${jewelColor} shadow-[0_0_9px_rgba(215,255,69,0.62)]`}
          />
          <span
            aria-hidden="true"
            className={`absolute bottom-0 left-1/2 h-2.5 w-2.5 -translate-x-1/2 translate-y-1/2 rotate-45 border border-[#f5ce52] ${jewelColor} shadow-[0_0_9px_rgba(215,255,69,0.52)]`}
          />
        </>
      ) : null}
    </>
  );
}

function CoinEmblem({
  compact = false,
  lore = false,
}: {
  compact?: boolean;
  lore?: boolean;
}) {
  return (
    <span
      aria-hidden="true"
      className={`relative grid shrink-0 place-items-center rounded-full border border-[#d3ad4d] bg-[#071008] shadow-[0_0_12px_rgba(215,255,69,0.18),inset_0_0_12px_rgba(215,255,69,0.12)] ${
        compact ? "h-7 w-7" : "aspect-square h-[64%]"
      }`}
    >
      <span className="absolute inset-[0.16rem] rounded-full border border-[#667d2f]/90" />
      <span className="absolute inset-[0.3rem] rounded-full border border-[#d3ad4d]/45" />
      <span
        className={`relative font-serif font-black leading-none text-[#d7ff45] [text-shadow:0_0_7px_rgba(215,255,69,0.42)] ${
          compact ? "text-[0.68rem]" : "text-[0.82em]"
        }`}
      >
        {lore ? ">" : "G"}
      </span>
    </span>
  );
}

function CopyIcon() {
  return (
    <span aria-hidden="true" className="relative block h-[0.8em] w-[0.8em]">
      <span className="absolute bottom-0 left-0 h-[72%] w-[72%] rounded-[0.12rem] border border-[#d7ff45]/95" />
      <span className="absolute right-0 top-0 h-[72%] w-[72%] rounded-[0.12rem] border border-[#f4f7b0]/85 bg-[#07130e]" />
    </span>
  );
}

function ContractBar({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`relative flex items-center overflow-hidden rounded-full border border-[#88a445]/95 bg-[linear-gradient(90deg,rgba(3,13,9,0.99),rgba(6,20,13,0.98),rgba(2,9,6,0.99))] shadow-[0_5px_16px_rgba(0,0,0,0.52),0_0_14px_rgba(215,255,69,0.11),inset_0_1px_0_rgba(215,255,69,0.13),inset_0_-1px_0_rgba(193,160,61,0.24)] ${
        compact
          ? "h-9 gap-2 pl-3 pr-1"
          : "h-full gap-[clamp(0.28rem,0.62vw,0.72rem)] pl-[clamp(0.52rem,1.1vw,1.25rem)] pr-[clamp(0.16rem,0.34vw,0.4rem)]"
      }`}
    >
      <span
        aria-hidden="true"
        className="absolute left-1 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-[#d7b949] bg-[#314819]"
      />
      <span
        aria-hidden="true"
        className="absolute right-1 top-1/2 h-2 w-2 translate-x-1/2 -translate-y-1/2 rotate-45 border border-[#d7b949] bg-[#314819]"
      />
      <span
        className={`relative shrink-0 border border-[#a98d3d]/90 bg-[linear-gradient(180deg,#132414,#08130c)] font-serif font-black uppercase tracking-[0.13em] text-[#d7ff45] shadow-[inset_0_0_9px_rgba(215,255,69,0.07)] ${
          compact
            ? "rounded px-1.5 py-0.5 text-[0.54rem]"
            : "rounded-[clamp(0.16rem,0.26vw,0.3rem)] px-[clamp(0.28rem,0.48vw,0.56rem)] py-[0.12em] text-[clamp(0.42rem,0.62vw,0.72rem)]"
        }`}
      >
        CA:
      </span>
      <span
        className={`min-w-0 flex-1 truncate font-mono font-bold text-[#fff9e2] ${
          compact
            ? "text-[0.54rem] tracking-[0.025em]"
            : "text-[clamp(0.42rem,0.66vw,0.78rem)] tracking-[0.04em]"
        }`}
      >
        {contractAddress}
      </span>
      <span
        aria-hidden="true"
        className={`relative grid shrink-0 place-items-center rounded-full border border-[#a5bc48]/90 bg-[#0a1a11] text-[#d7ff45] shadow-[0_0_12px_rgba(215,255,69,0.17),inset_0_0_10px_rgba(215,255,69,0.08)] transition duration-200 hover:border-[#efff78] hover:bg-[#112715] hover:shadow-[0_0_18px_rgba(215,255,69,0.34)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d7ff45] ${compact ? "h-7 w-7 text-sm" : "aspect-square h-[82%] text-[clamp(0.7rem,0.9vw,1rem)]"}`}
      >
        <span className="absolute inset-[0.16rem] rounded-full border border-[#d3ad4d]/35" />
        <CopyIcon />
      </span>
    </div>
  );
}

function TrustBadge({
  compact = false,
  icon,
  label,
}: {
  compact?: boolean;
  icon: string;
  label: string;
}) {
  return (
    <span
      className={`relative flex items-center border border-[#a3873a]/95 bg-[#050d09] text-[#fff9e2] shadow-[0_4px_12px_rgba(0,0,0,0.46),inset_0_1px_0_rgba(215,255,69,0.1)] transition duration-200 hover:border-[#d1dc58] hover:shadow-[0_0_13px_rgba(215,255,69,0.17),0_4px_12px_rgba(0,0,0,0.46)] ${
        compact
          ? "min-w-0 justify-center gap-1 px-1 text-center text-[0.45rem] font-black uppercase leading-tight tracking-[0.04em]"
          : "h-full gap-[clamp(0.22rem,0.48vw,0.56rem)] px-[clamp(0.38rem,0.76vw,0.9rem)] font-serif text-[clamp(0.42rem,0.62vw,0.72rem)] font-black uppercase tracking-[0.1em]"
      }`}
      style={{ clipPath: badgeFrameClipPath }}
    >
      <span className="pointer-events-none absolute inset-px border border-[#435627]/75" />
      <span className="pointer-events-none absolute right-1 top-1 h-1.5 w-1.5 rotate-45 border border-[#d1af49]/85 bg-[#1d3214]" />
      <span
        className={`relative grid shrink-0 place-items-center border border-[#d1af49]/90 bg-[#0a1a11] font-serif font-black tracking-normal text-[#d7ff45] shadow-[inset_0_0_9px_rgba(215,255,69,0.12)] ${
          compact
            ? "h-4 w-4 text-[0.46rem]"
            : "aspect-square h-[66%] text-[0.76em]"
        }`}
        style={{ clipPath: badgeFrameClipPath }}
      >
        {icon}
      </span>
      <span className="relative">{label}</span>
    </span>
  );
}

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden border-b border-[#20331f] bg-[#020604]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_34%,rgba(215,255,69,0.18),transparent_30rem),linear-gradient(180deg,#020604_0%,#06120c_48%,#020604_100%)]" />

      <div className="relative mx-auto w-full max-w-[118rem]">
        <div className="relative aspect-[941/520] min-h-[32rem] overflow-hidden bg-[#020604] md:min-h-0">
          <Image
            alt=""
            className="object-cover object-center"
            fill
            preload
            quality={100}
            sizes="100vw"
            src="/images/grimmi/hero-reference-hd.png"
          />

          <div className="sr-only">
            <h1 id="hero-title">GRIMMI - The Last Wallet Goblin</h1>
            <p>The Last Wallet Goblin</p>
            <p>No promises. No kings. Just goblins.</p>
            <p>
              Born where failed transactions gather like dust, Grimmi guarded
              lost wallets, broken promises, and abandoned memes. He watched
              fake kings rise and vanish, then opened the Goblin Vault for
              everyone left behind.
            </p>
            <p>A meme-born vault keeper for the chain-forgotten.</p>
            <p>Contract address: {contractAddress}</p>
            <p>Trusted and liquid: DEXTools, DEXScreener, Rug Check Verified.</p>
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-[64%] bg-[linear-gradient(180deg,rgba(2,6,4,0.98),rgba(2,6,4,0.9)_64%,rgba(2,6,4,0))] md:hidden"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 hidden w-[57%] md:block"
            style={{
              background:
                "linear-gradient(90deg, rgba(2,6,4,0.995) 0%, rgba(3,9,6,0.985) 68%, rgba(3,9,6,0.88) 84%, rgba(3,9,6,0) 100%)",
            }}
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-[6.65%] top-[8.6%] hidden w-[43%] md:block"
            style={{
              WebkitFontSmoothing: "antialiased",
              textRendering: "geometricPrecision",
            }}
          >
            <div className="flex max-w-[32rem] items-center gap-[clamp(0.4rem,0.82vw,0.95rem)]">
              <span className="h-px w-[clamp(1.8rem,4vw,4.7rem)] bg-gradient-to-r from-transparent via-[#9f7c34] to-[#e0bd5e]" />
              <p
                className="whitespace-nowrap font-serif text-[clamp(0.45rem,0.69vw,0.8rem)] font-black uppercase tracking-[0.28em] text-[#efd77e]"
                style={{ textShadow: "0 1px 0 rgba(0,0,0,0.94)" }}
              >
                The Last Wallet Goblin
              </p>
              <span className="h-px flex-1 bg-gradient-to-r from-[#e0bd5e] to-transparent" />
            </div>
            <h1
              className="mt-[clamp(0.34rem,0.68vw,0.78rem)] font-serif text-[clamp(3.5rem,6.35vw,7.55rem)] font-black uppercase leading-[0.78] tracking-[-0.065em] text-[#e1f76d]"
              style={{
                fontFamily: "Georgia, Garamond, 'Times New Roman', serif",
                textShadow:
                  "0 1px 0 rgba(86,108,34,0.92), 0 2px 0 rgba(0,0,0,0.94), 0 0 8px rgba(215,255,69,0.28), 0 0 19px rgba(116,176,45,0.12)",
              }}
            >
              GRIMMI
            </h1>
            <p
              className="mt-[clamp(0.38rem,0.72vw,0.82rem)] font-serif text-[clamp(0.72rem,1.15vw,1.34rem)] font-bold italic leading-none tracking-[0.075em] text-[#fff5d6]"
              style={{
                fontFamily: "Georgia, Garamond, 'Times New Roman', serif",
                textShadow:
                  "0 1px 0 rgba(0,0,0,0.92), 0 0 6px rgba(215,255,69,0.1)",
              }}
            >
              The Last Wallet Goblin
            </p>
            <p
              className="mt-[clamp(0.76rem,1.45vw,1.7rem)] whitespace-nowrap font-serif text-[clamp(0.92rem,1.55vw,1.82rem)] font-black leading-[1.05] tracking-[0.012em] text-[#def36a]"
              style={{
                fontFamily: "Georgia, Garamond, 'Times New Roman', serif",
                textShadow:
                  "0 1px 0 rgba(0,0,0,0.94), 0 0 7px rgba(215,255,69,0.2)",
              }}
            >
              No promises. No kings. Just goblins.
            </p>
            <p
              className="mt-[clamp(0.58rem,1.08vw,1.25rem)] max-w-[39rem] text-[clamp(0.56rem,0.81vw,0.96rem)] font-semibold leading-[1.52] tracking-[0.012em] text-[#f6efd8]"
              style={{
                fontFamily: "Georgia, Garamond, 'Times New Roman', serif",
                textShadow: "0 1px 0 rgba(0,0,0,0.94)",
              }}
            >
              Born where failed transactions gather like dust, Grimmi guarded
              lost wallets, broken promises, and abandoned memes. He watched
              fake kings rise and vanish &mdash; then opened the Goblin Vault
              for everyone left behind.
            </p>
            <p
              className="mt-[clamp(0.34rem,0.64vw,0.74rem)] hidden font-serif text-[clamp(0.52rem,0.72vw,0.84rem)] font-bold italic tracking-[0.075em] text-[#d9c77a] xl:block"
              style={{
                fontFamily: "Georgia, Garamond, 'Times New Roman', serif",
                textShadow: "0 1px 0 rgba(0,0,0,0.94)",
              }}
            >
              A meme-born vault keeper for the chain-forgotten.
            </p>
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-5 top-[5.5%] md:hidden"
            style={{
              WebkitFontSmoothing: "antialiased",
              textRendering: "geometricPrecision",
            }}
          >
            <p className="font-serif text-[0.6rem] font-black uppercase tracking-[0.26em] text-[#efd77e]">
              The Last Wallet Goblin
            </p>
            <h1
              className="mt-2 font-serif text-[3.85rem] font-black uppercase leading-[0.8] tracking-[-0.075em] text-[#e1f76d]"
              style={{
                fontFamily: "Georgia, Garamond, 'Times New Roman', serif",
                textShadow:
                  "0 1px 0 rgba(86,108,34,0.92), 0 2px 0 rgba(0,0,0,0.94), 0 0 8px rgba(215,255,69,0.24)",
              }}
            >
              GRIMMI
            </h1>
            <p
              className="mt-2 font-serif text-sm font-bold italic tracking-[0.055em] text-[#fff5d6]"
              style={{ textShadow: "0 1px 0 rgba(0,0,0,0.92)" }}
            >
              The Last Wallet Goblin
            </p>
            <p
              className="mt-4 font-serif text-lg font-black leading-tight text-[#def36a]"
              style={{ textShadow: "0 1px 0 rgba(0,0,0,0.94)" }}
            >
              No promises. No kings. Just goblins.
            </p>
            <p
              className="mt-3 max-w-[23rem] font-serif text-xs font-semibold leading-[1.55] text-[#f6efd8]"
              style={{ textShadow: "0 1px 0 rgba(0,0,0,0.94)" }}
            >
              Born where failed transactions gather like dust, Grimmi guarded
              lost wallets, broken promises, and abandoned memes. He watched
              fake kings rise and vanish &mdash; then opened the Goblin Vault
              for everyone left behind.
            </p>
          </div>

          <div className="absolute inset-x-5 top-[64%] z-10 flex h-12 gap-2 md:hidden">
            <a
              className="relative flex flex-[1.08] items-center justify-center gap-1.5 bg-[#b48a28] px-2 font-serif text-[0.62rem] font-black uppercase tracking-[0.055em] text-[#071005] shadow-[0_0_19px_rgba(215,255,69,0.52),0_7px_18px_rgba(0,0,0,0.54)] transition duration-200 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_0_25px_rgba(215,255,69,0.7),0_9px_20px_rgba(0,0,0,0.56)] active:translate-y-0 active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#efff78]"
              href="#buy"
              style={{ clipPath: fantasyFrameClipPath }}
            >
              <span
                className="absolute inset-px bg-[linear-gradient(180deg,#efff78_0%,#d7ff45_48%,#acd62d_100%)]"
                style={{ clipPath: fantasyFrameClipPath }}
              />
              <span
                className="absolute inset-[0.22rem] border border-[#f7ffac]/70"
                style={{ clipPath: fantasyFrameClipPath }}
              />
              <span className="absolute inset-x-5 top-[16%] h-px bg-gradient-to-r from-transparent via-white/85 to-transparent" />
              <FrameOrnaments bright />
              <CoinEmblem compact />
              <span className="relative">Buy $GRIMMI</span>
            </a>
            <a
              className="relative flex flex-1 items-center justify-center gap-1.5 bg-[#957637] px-2 font-serif text-[0.57rem] font-black uppercase tracking-[0.05em] text-[#fff9e2] shadow-[0_7px_18px_rgba(0,0,0,0.56)] transition duration-200 hover:-translate-y-0.5 hover:brightness-110 hover:text-[#efff78] hover:shadow-[0_0_16px_rgba(215,255,69,0.24),0_9px_20px_rgba(0,0,0,0.56)] active:translate-y-0 active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d7ff45]"
              href="#lore"
              style={{ clipPath: fantasyFrameClipPath }}
            >
              <span
                className="absolute inset-px bg-[linear-gradient(180deg,rgba(15,31,21,0.99),rgba(3,10,7,0.99))]"
                style={{ clipPath: fantasyFrameClipPath }}
              />
              <span
                className="absolute inset-[0.22rem] border border-[#667a37]/55"
                style={{ clipPath: fantasyFrameClipPath }}
              />
              <FrameOrnaments />
              <CoinEmblem compact lore />
              <span className="relative">Read the Lore</span>
            </a>
          </div>

          <div className="absolute inset-x-5 top-[76.5%] z-10 md:hidden">
            <ContractBar compact />
          </div>

          <div
            aria-hidden="true"
            className="absolute inset-x-5 top-[86%] z-10 grid h-8 grid-cols-3 gap-1.5 md:hidden"
          >
            {trustBadges.map((badge) => (
              <TrustBadge compact key={badge.label} {...badge} />
            ))}
          </div>

          <div className="absolute left-[6.65%] top-[65.35%] hidden h-[9.15%] items-stretch gap-[clamp(0.7rem,1.45vw,1.7rem)] md:flex">
            <a
              aria-label="Buy GRIMMI"
              className="relative flex w-[clamp(9.15rem,19.15vw,22.5rem)] items-center justify-center gap-[clamp(0.35rem,0.72vw,0.85rem)] overflow-hidden rounded-[clamp(0.4rem,0.68vw,0.8rem)] border border-[#e4c04c] bg-[linear-gradient(180deg,#efff78_0%,#d7ff45_48%,#acd62d_100%)] px-[clamp(0.55rem,1.1vw,1.3rem)] font-serif text-[clamp(0.62rem,0.92vw,1.02rem)] font-black uppercase tracking-[0.075em] text-[#071005] shadow-[0_0_18px_rgba(215,255,69,0.52),0_8px_20px_rgba(0,0,0,0.52),inset_0_1px_0_rgba(255,255,208,0.95),inset_0_-3px_0_rgba(67,96,19,0.38)] transition duration-200 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_0_25px_rgba(215,255,69,0.7),0_10px_24px_rgba(0,0,0,0.56)] active:translate-y-0 active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#efff78]"
              href="#buy"
            >
              <span className="absolute inset-[clamp(0.14rem,0.22vw,0.26rem)] rounded-[clamp(0.26rem,0.48vw,0.58rem)] border border-[#f7ffac]/65" />
              <span className="absolute inset-x-4 top-[14%] h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />
              <span
                aria-hidden="true"
                className="relative grid aspect-square h-[52%] place-items-center rounded-full border border-[#69561d]/85 bg-[#25370c]/20 font-serif text-[0.85em] leading-none shadow-[inset_0_0_0_2px_rgba(226,255,107,0.42)]"
              >
                G
              </span>
              Buy $GRIMMI
            </a>
            <a
              aria-label="Read the GRIMMI lore"
              className="relative flex w-[clamp(8.25rem,17.35vw,20.4rem)] items-center justify-center gap-[clamp(0.35rem,0.7vw,0.82rem)] overflow-hidden rounded-[clamp(0.4rem,0.68vw,0.8rem)] border border-[#b4913e]/95 bg-[linear-gradient(180deg,rgba(12,27,18,0.98),rgba(3,10,7,0.98))] px-[clamp(0.55rem,1.05vw,1.22rem)] font-serif text-[clamp(0.58rem,0.86vw,0.96rem)] font-black uppercase tracking-[0.075em] text-[#fff9e2] shadow-[0_8px_20px_rgba(0,0,0,0.54),inset_0_1px_0_rgba(226,205,119,0.12),inset_0_0_14px_rgba(215,255,69,0.06)] transition duration-200 hover:-translate-y-0.5 hover:border-[#d7ff45] hover:bg-[#0a1a11] hover:text-[#efff78] hover:shadow-[0_0_17px_rgba(215,255,69,0.24),0_10px_24px_rgba(0,0,0,0.56)] active:translate-y-0 active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d7ff45]"
              href="#lore"
            >
              <span className="absolute inset-[clamp(0.14rem,0.22vw,0.26rem)] rounded-[clamp(0.26rem,0.48vw,0.58rem)] border border-[#6b7d39]/34" />
              <span
                aria-hidden="true"
                className="relative grid aspect-square h-[50%] place-items-center rounded-full border border-[#c8a84f]/75 bg-[#020705]/90 text-[0.86em] leading-none text-[#d7ff45] shadow-[inset_0_0_10px_rgba(215,255,69,0.1)]"
              >
                &gt;
              </span>
              Read the Lore
            </a>
          </div>

          <div className="absolute left-[6.65%] top-[79.45%] hidden h-[5.65%] w-[38.15%] items-center gap-[clamp(0.28rem,0.62vw,0.72rem)] overflow-hidden rounded-full border border-[#88a445]/95 bg-[linear-gradient(90deg,rgba(3,13,9,0.98),rgba(5,18,12,0.98),rgba(2,9,6,0.98))] pl-[clamp(0.52rem,1.1vw,1.25rem)] pr-[clamp(0.16rem,0.34vw,0.4rem)] shadow-[0_5px_16px_rgba(0,0,0,0.5),0_0_14px_rgba(215,255,69,0.11),inset_0_1px_0_rgba(215,255,69,0.11)] md:flex">
            <span className="shrink-0 rounded-[clamp(0.16rem,0.26vw,0.3rem)] border border-[#9b8638]/80 bg-[#0b180e] px-[clamp(0.28rem,0.48vw,0.56rem)] py-[0.12em] text-[clamp(0.42rem,0.62vw,0.72rem)] font-black uppercase tracking-[0.13em] text-[#d7ff45]">
              CA:
            </span>
            <span className="min-w-0 flex-1 truncate font-mono text-[clamp(0.42rem,0.66vw,0.78rem)] font-bold tracking-[0.04em] text-[#fff9e2]">
              {contractAddress}
            </span>
            <button
              aria-label="Copy contract address"
              className="grid aspect-square h-[82%] min-w-fit shrink-0 place-items-center rounded-full border border-[#a5bc48]/90 bg-[#0a1a11] px-[clamp(0.38rem,0.64vw,0.76rem)] text-[clamp(0.36rem,0.52vw,0.6rem)] font-black uppercase tracking-[0.06em] text-[#d7ff45] shadow-[0_0_12px_rgba(215,255,69,0.17),inset_0_0_10px_rgba(215,255,69,0.08)] transition duration-200 hover:border-[#efff78] hover:bg-[#112715] hover:shadow-[0_0_18px_rgba(215,255,69,0.34)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d7ff45]"
              title="Copy contract address"
              type="button"
            >
              <CopyIcon />
            </button>
          </div>

          <div
            aria-hidden="true"
            className="absolute left-[6.65%] top-[88.45%] hidden h-[4.6%] items-center gap-[clamp(0.28rem,0.6vw,0.72rem)] md:flex"
          >
            {trustBadges.map((badge) => (
              <span
                className="flex h-full items-center gap-[clamp(0.22rem,0.48vw,0.56rem)] rounded-[clamp(0.2rem,0.38vw,0.45rem)] border border-[#8b7738]/90 bg-[linear-gradient(180deg,rgba(10,24,16,0.98),rgba(3,10,7,0.98))] px-[clamp(0.35rem,0.7vw,0.82rem)] text-[clamp(0.42rem,0.62vw,0.72rem)] font-black uppercase tracking-[0.1em] text-[#fff9e2] shadow-[0_4px_12px_rgba(0,0,0,0.44),inset_0_1px_0_rgba(215,255,69,0.09)] transition duration-200 hover:border-[#c6d951] hover:shadow-[0_0_13px_rgba(215,255,69,0.16),0_4px_12px_rgba(0,0,0,0.44)]"
                key={badge.label}
              >
                <span className="grid aspect-square h-[58%] place-items-center rounded-[0.18rem] border border-[#d7ff45]/78 bg-[#0a1a11] text-[0.76em] tracking-normal text-[#d7ff45] shadow-[inset_0_0_8px_rgba(215,255,69,0.1)]">
                  {badge.icon}
                </span>
                {badge.label}
              </span>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
