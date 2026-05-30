import Image from "next/image";

import { Button } from "./Button";

const captionStarters = [
  "No promises. No kings. Just goblins.",
  "Grimmi does not chase crowns. He guards the vault.",
  "Born from failed transactions and abandoned memes.",
  "The last wallet goblin opened the vault.",
  "Built for memes, chaos, and community.",
  "If the chain forgot you, the vault remembers.",
] as const;

function VaultCorners() {
  return (
    <>
      <span className="pointer-events-none absolute left-3 top-3 h-5 w-5 border-l border-t border-[#e5c56b]/72" />
      <span className="pointer-events-none absolute right-3 top-3 h-5 w-5 border-r border-t border-[#e5c56b]/72" />
      <span className="pointer-events-none absolute bottom-3 left-3 h-5 w-5 border-b border-l border-[#b99b52]/54" />
      <span className="pointer-events-none absolute bottom-3 right-3 h-5 w-5 border-b border-r border-[#b99b52]/54" />
    </>
  );
}

function VaultPreviewImage({ alt, src }: { alt: string; src: string }) {
  return (
    <div className="relative h-[13rem] overflow-hidden border-b border-[#8a7338]/74 bg-[#020604]">
      <Image
        alt={alt}
        className="object-cover object-center transition duration-500 group-hover:scale-[1.04]"
        fill
        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
        src={src}
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,4,0.04)_34%,rgba(2,6,4,0.22)_72%,rgba(2,6,4,0.92)_100%)]" />
      <div className="pointer-events-none absolute inset-x-5 bottom-3 h-px bg-gradient-to-r from-transparent via-[#d7ff45]/56 to-transparent shadow-[0_0_12px_rgba(215,255,69,0.42)]" />
    </div>
  );
}

const memeKitCards = [
  {
    index: "01",
    title: "GOBLIN ASSETS",
    copy: "Logo marks, goblin emblems, vault symbols, and transparent PNGs for creators.",
    image: "/grimmi/meme-kit-assets.png",
    alt: "Glowing emerald GRIMMI G medallion inside a gold goblin vault",
  },
  {
    index: "02",
    title: "MEME TEMPLATES",
    copy: "Ready-to-use meme layouts for X posts, Telegram raids, and community replies.",
    image: "/grimmi/meme-kit-templates.png",
    alt: "Collection of glowing goblin reaction meme cards inside a vault",
  },
  {
    index: "03",
    title: "CAPTION VAULT",
    copy: "Copy-paste lines for posts, replies, raids, and lore drops.",
    image: "/grimmi/meme-kit-caption-vault.png",
    alt: "Glowing green goblin lore scroll displayed inside a gold vault",
  },
  {
    index: "04",
    title: "COMMUNITY CHALLENGES",
    copy: "Weekly meme quests, tribe votes, and featured creator drops.",
    image: "/grimmi/meme-kit-community-challenges.png",
    alt: "Emerald goblin community quest board with numbered challenge medallions",
  },
] as const;

export function MemeKitSection() {
  return (
    <section
      className="relative mx-auto max-w-7xl px-4 pb-20 pt-12 sm:px-6 sm:pb-24 sm:pt-16 lg:px-8"
      id="meme-kit"
    >
      <div className="pointer-events-none absolute inset-x-[4%] top-[2%] h-[80%] bg-[radial-gradient(ellipse_at_50%_30%,rgba(215,255,69,0.16),rgba(170,126,39,0.06)_42%,transparent_74%)] blur-3xl" />
      <div className="pointer-events-none absolute inset-x-[12%] top-16 h-px bg-gradient-to-r from-transparent via-[#d7ff45]/38 to-transparent" />
      <div className="pointer-events-none absolute inset-x-[8%] bottom-6 h-px bg-gradient-to-r from-transparent via-[#b99943]/48 to-transparent" />

      <header className="relative mx-auto max-w-4xl text-center">
        <div className="flex items-center justify-center gap-3 sm:gap-4">
          <span className="h-px w-[clamp(2.8rem,12vw,8rem)] bg-gradient-to-r from-transparent via-[#9f7c34] to-[#e0bd5e]" />
          <span className="h-1.5 w-1.5 rotate-45 border border-[#efcf73]/90 bg-[#243312] shadow-[0_0_8px_rgba(215,255,69,0.34)]" />
          <p
            className="font-serif text-[0.68rem] font-black uppercase tracking-[0.34em] text-[#e6cf84] sm:text-xs"
            style={{ textShadow: "0 1px 0 rgba(0,0,0,0.95)" }}
          >
            Creator Vault
          </p>
          <span className="h-1.5 w-1.5 rotate-45 border border-[#efcf73]/90 bg-[#243312] shadow-[0_0_8px_rgba(215,255,69,0.34)]" />
          <span className="h-px w-[clamp(2.8rem,12vw,8rem)] bg-gradient-to-l from-transparent via-[#9f7c34] to-[#e0bd5e]" />
        </div>

        <h2
          className="mt-4 bg-gradient-to-b from-[#fff5b6] via-[#e6f678] to-[#bedb54] bg-clip-text font-serif text-[clamp(2.55rem,12vw,3rem)] font-black uppercase leading-[0.9] tracking-[0.07em] text-transparent sm:text-[clamp(3rem,7vw,5.8rem)]"
          style={{
            fontFamily: "Georgia, Garamond, 'Times New Roman', serif",
            textShadow:
              "0 1px 0 rgba(0,0,0,0.88), 0 0 8px rgba(215,255,69,0.24), 0 0 18px rgba(142,184,55,0.1)",
          }}
        >
          Grimmi Meme Kit
        </h2>

        <p
          className="mx-auto mt-5 max-w-3xl text-sm font-semibold leading-7 tracking-[0.025em] text-[#f4ecd3] sm:text-base"
          style={{
            fontFamily: "Georgia, Garamond, 'Times New Roman', serif",
            textShadow: "0 1px 0 rgba(0,0,0,0.92)",
          }}
        >
          Tools for goblins who want to spread the lore. Templates, captions,
          stickers, and chaos drops are being forged inside the vault.
        </p>

        <div className="mt-5 flex items-center justify-center gap-2 text-[0.62rem] font-black uppercase tracking-[0.22em] text-[#d7ff45]">
          <span className="h-2 w-2 rounded-full bg-[#d7ff45] shadow-[0_0_14px_rgba(215,255,69,0.9)]" />
          Creator Pack Forging
        </div>
      </header>

      <div className="relative mt-9 grid gap-4 sm:grid-cols-2 lg:mt-11 xl:grid-cols-4">
        {memeKitCards.map((card) => (
          <article
            className="group relative min-w-0 overflow-hidden rounded-[0.95rem] border border-[#786337]/92 bg-[#04100b] shadow-[0_22px_64px_rgba(0,0,0,0.62),0_0_25px_rgba(215,255,69,0.075),inset_0_0_34px_rgba(215,255,69,0.038)] transition duration-300 hover:-translate-y-1 hover:border-[#d7ff45]/72 hover:shadow-[0_30px_80px_rgba(0,0,0,0.7),0_0_30px_rgba(215,255,69,0.15),inset_0_0_36px_rgba(215,255,69,0.055)]"
            key={card.title}
          >
            <VaultCorners />
            <VaultPreviewImage alt={card.alt} src={card.image} />
            <div className="relative px-5 pb-6 pt-5">
              <p className="font-serif text-[0.64rem] font-black uppercase tracking-[0.28em] text-[#e5c56b]">
                Vault File {card.index}
              </p>
              <h3
                className="mt-2 min-h-[3rem] font-serif text-[1.24rem] font-black uppercase leading-[1.12] tracking-[0.045em] text-[#e9f486]"
                style={{
                  fontFamily: "Georgia, Garamond, 'Times New Roman', serif",
                  textShadow:
                    "0 1px 0 rgba(0,0,0,0.88), 0 0 6px rgba(215,255,69,0.2)",
                }}
              >
                {card.title}
              </h3>
              <span className="mt-3 block h-px w-full bg-gradient-to-r from-[#9c7a39]/82 via-[#d7ff45]/24 to-transparent" />
              <p className="mt-4 text-sm font-semibold leading-6 text-[#eee8d1]">
                {card.copy}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="relative mt-5 overflow-hidden rounded-[0.95rem] border border-[#8b7138]/86 bg-[#04100b]/96 p-5 shadow-[0_22px_64px_rgba(0,0,0,0.58),0_0_28px_rgba(215,255,69,0.08),inset_0_0_36px_rgba(215,255,69,0.045)] sm:p-7">
        <VaultCorners />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_0%,rgba(215,255,69,0.1),transparent_20rem),linear-gradient(120deg,transparent,rgba(213,180,95,0.045),transparent)]" />
        <div className="relative flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-serif text-[0.68rem] font-black uppercase tracking-[0.3em] text-[#e5c56b]">
              Copy-Paste Lore
            </p>
            <h3 className="mt-2 font-serif text-2xl font-black uppercase tracking-[0.1em] text-[#dfff57] sm:text-3xl">
              Caption Starters
            </h3>
          </div>
          <p className="text-[0.62rem] font-black uppercase tracking-[0.2em] text-[#c8d89a]">
            Vault Notes // 06 Lines
          </p>
        </div>

        <ul className="relative mt-5 grid gap-2.5 md:grid-cols-2">
          {captionStarters.map((caption, index) => (
            <li
              className="flex min-h-14 items-center gap-3 rounded-md border border-[#59652e]/72 bg-[#07160f]/88 px-3 py-3 shadow-[inset_0_0_14px_rgba(215,255,69,0.035)] transition duration-200 hover:border-[#d7ff45]/58 hover:bg-[#0a1d13]"
              key={caption}
            >
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-[#b99943]/74 bg-[#06100c] text-[0.58rem] font-black text-[#d7ff45]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="font-serif text-sm font-semibold leading-5 text-[#f5ecd2]">
                {caption}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative mt-7 text-center">
        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <Button href="#">Open Meme Kit</Button>
          <Button href="#" variant="secondary">
            Submit A Meme
          </Button>
        </div>
        <p className="mt-4 text-[0.68rem] font-black uppercase tracking-[0.2em] text-[#d7d0b8]">
          Full downloadable creator pack coming soon.
        </p>
      </div>
    </section>
  );
}
