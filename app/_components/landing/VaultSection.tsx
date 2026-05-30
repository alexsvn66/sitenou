import Image from "next/image";

const vaultCards = [
  {
    title: "ANTI-GURU",
    copy: "No leaders. No masters. We follow chaos, not cults. Question everything. Trust no one.",
    image: "/grimmi/why-anti.png",
    alt: "Glowing green anti-guru rune carved into a dark cave wall",
    position: "object-center",
  },
  {
    title: "VAULT KEEPER",
    copy: "Grimmi guards the lost, the abandoned, and the memeconomy. The vault is for the people.",
    image: "/grimmi/why-vault.png",
    alt: "Glowing goblin vault door inside a dark emerald cave treasury",
    position: "object-center",
  },
  {
    title: "MEME COLLECTOR",
    copy: "He collects the best memes from across the chain. Every meme has a home in the vault.",
    image: "/grimmi/why-meme.png",
    alt: "Treasure chest filled with goblin meme-face collectible tokens",
    position: "object-[50%_54%]",
  },
  {
    title: "COMMUNITY GOBLIN",
    copy: "Grimmi lives for the community. Built by goblins. Powered by chaos. Stronger together.",
    image: "/grimmi/why-community.png",
    alt: "Goblin tribe silhouettes gathered beneath a glowing green moon",
    position: "object-center",
  },
] as const;

export function VaultSection() {
  return (
    <section
      className="relative mx-auto max-w-7xl px-5 pb-10 pt-4 sm:px-6 sm:pb-12 lg:px-8"
      id="vault"
    >
      <style>{`
        main > div.relative.z-10 > section:has(+ section#vault) {
          display: none;
        }
      `}</style>

      <div className="absolute inset-x-0 top-4 h-[28rem] bg-[radial-gradient(ellipse_at_50%_45%,rgba(215,255,69,0.13),transparent_68%)] blur-3xl" />
      <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-[#25351e] to-transparent" />

      <div className="relative mb-6 text-center">
        <div className="mx-auto flex max-w-3xl items-center gap-3 sm:gap-5">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#8e7530] to-[#d7ff45]" />
          <span className="hidden h-1.5 w-1.5 rotate-45 bg-[#b99943] shadow-[0_0_9px_rgba(215,255,69,0.55)] sm:block" />
          <h2 className="font-serif text-3xl font-black uppercase tracking-[0.17em] text-[#cadb62] drop-shadow-[0_0_18px_rgba(215,255,69,0.24)] sm:text-4xl">
            WHY GRIMMI?
          </h2>
          <span className="hidden h-1.5 w-1.5 rotate-45 bg-[#b99943] shadow-[0_0_9px_rgba(215,255,69,0.55)] sm:block" />
          <span className="h-px flex-1 bg-gradient-to-l from-transparent via-[#8e7530] to-[#d7ff45]" />
        </div>
      </div>

      <div className="relative grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {vaultCards.map((card) => (
          <article
            className="group relative flex min-h-[21.75rem] min-w-0 flex-col overflow-hidden rounded-[0.9rem] border border-[#766731]/90 bg-[#050d09] shadow-[0_24px_78px_rgba(0,0,0,0.58),0_0_28px_rgba(215,255,69,0.08),inset_0_0_34px_rgba(124,255,107,0.055)] transition duration-300 hover:-translate-y-1.5 hover:border-[#d7ff45]/76 hover:shadow-[0_34px_96px_rgba(0,0,0,0.68),0_0_54px_rgba(215,255,69,0.18),inset_0_0_42px_rgba(215,255,69,0.075)]"
            key={card.title}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(215,255,69,0.11),transparent_36%),linear-gradient(180deg,rgba(10,30,20,0.7),rgba(2,6,4,0.98))]" />
            <span className="absolute left-3 top-3 z-20 h-5 w-5 border-l border-t border-[#d7ff45]/48" />
            <span className="absolute right-3 top-3 z-20 h-5 w-5 border-r border-t border-[#b99943]/70" />
            <span className="absolute bottom-3 left-3 z-20 h-5 w-5 border-b border-l border-[#b99943]/70" />
            <span className="absolute bottom-3 right-3 z-20 h-5 w-5 border-b border-r border-[#d7ff45]/48" />

            <div className="relative h-[9.9rem] overflow-hidden border-b border-[#6c612e]/70 bg-[#020604]">
              <Image
                alt={card.alt}
                className={`object-cover ${card.position} scale-[1.03] transition duration-500 group-hover:scale-[1.08]`}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                src={card.image}
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_24%,rgba(215,255,69,0.06),transparent_8rem),linear-gradient(180deg,rgba(2,6,4,0)_0%,rgba(2,6,4,0.16)_45%,#06110d_100%)]" />
              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#d7ff45]/42 to-transparent" />
            </div>

            <div className="relative flex flex-1 flex-col px-5 pb-6 pt-4 text-center">
              <h3 className="text-lg font-black uppercase leading-tight tracking-wide text-[#cddc61] drop-shadow-[0_0_12px_rgba(215,255,69,0.2)]">
                {card.title}
              </h3>
              <div className="mx-auto mt-3 flex w-24 items-center gap-2">
                <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#b99943] to-[#d7ff45]" />
                <span className="h-1.5 w-1.5 rotate-45 bg-[#d7ff45] shadow-[0_0_10px_rgba(215,255,69,0.75)]" />
                <span className="h-px flex-1 bg-gradient-to-l from-transparent via-[#b99943] to-[#d7ff45]" />
              </div>
              <p className="mt-3 flex-1 text-sm font-semibold leading-6 text-[#eee8d1]">
                {card.copy}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
