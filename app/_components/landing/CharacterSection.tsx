import Image from "next/image";

const traits = [
  {
    glyph: "A",
    title: "Anti-guru",
    copy: "No leaders. No masters. We follow chaos, not cults. Question everything. Trust no one.",
    image: "/grimmi/trait-anti.png",
  },
  {
    glyph: "V",
    title: "Vault Keeper",
    copy: "Grimmi guards the lost, the abandoned, and the memeconomy. The vault is for the people.",
    image: "/grimmi/trait-vault.png",
  },
  {
    glyph: "#",
    title: "Meme Collector",
    copy: "He collects the best memes from across the chain. Every meme has a home in the vault.",
    image: "/grimmi/trait-meme.png",
  },
  {
    glyph: "G",
    title: "Community Goblin",
    copy: "Grimmi lives for the community. Built by goblins. Powered by chaos. Stronger together.",
    image: "/grimmi/trait-community.png",
  },
];

export function CharacterSection() {
  return (
    <section className="relative mx-auto max-w-7xl px-5 pb-8 pt-3 sm:px-6 sm:pb-12 lg:px-8">
      <div className="absolute inset-x-0 top-20 h-80 bg-[radial-gradient(ellipse_at_50%_45%,rgba(215,255,69,0.12),transparent_66%)] blur-3xl" />

      <div className="relative mb-6 text-center">
        <div className="mx-auto flex max-w-2xl items-center gap-4">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#b99943] to-[#d7ff45]" />
          <h2 className="font-serif text-3xl font-black uppercase tracking-[0.16em] text-[#d8d5a3] drop-shadow-[0_0_18px_rgba(215,255,69,0.2)] sm:text-4xl">
            Why Grimmi?
          </h2>
          <span className="h-px flex-1 bg-gradient-to-l from-transparent via-[#b99943] to-[#d7ff45]" />
        </div>
      </div>

      <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {traits.map((trait) => (
          <article
            className="group relative flex min-h-[28rem] flex-col overflow-hidden rounded-xl border border-[#6e622d]/90 bg-[#06110d]/92 shadow-[0_24px_84px_rgba(0,0,0,0.56),0_0_34px_rgba(215,255,69,0.09),inset_0_0_34px_rgba(124,255,107,0.055)] transition duration-300 hover:-translate-y-1.5 hover:border-[#d7ff45]/70 hover:shadow-[0_34px_104px_rgba(0,0,0,0.66),0_0_58px_rgba(215,255,69,0.18),inset_0_0_40px_rgba(215,255,69,0.07)]"
            key={trait.title}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(215,255,69,0.14),transparent_32%),linear-gradient(180deg,rgba(7,19,14,0.92),rgba(2,6,4,0.98))]" />
            <span className="absolute left-3 top-3 h-6 w-6 border-l border-t border-[#d7ff45]/45" />
            <span className="absolute right-3 top-3 h-6 w-6 border-r border-t border-[#b99943]/55" />
            <span className="absolute bottom-3 left-3 h-6 w-6 border-b border-l border-[#b99943]/55" />
            <span className="absolute bottom-3 right-3 h-6 w-6 border-b border-r border-[#d7ff45]/45" />

            <div className="relative h-44 overflow-hidden border-b border-[#504927]/80 bg-[#020604]">
              <Image
                alt={`${trait.title} visual`}
                className="scale-105 object-cover object-center transition duration-500 group-hover:scale-110"
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                src={trait.image}
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(215,255,69,0.14),transparent_9rem),linear-gradient(180deg,rgba(2,6,4,0.08)_0%,rgba(2,6,4,0.22)_44%,#06110d_100%)]" />
              <div className="absolute bottom-4 left-1/2 grid h-16 w-16 -translate-x-1/2 place-items-center rounded-lg border border-[#d7ff45]/55 bg-[#020604]/78 font-serif text-3xl font-black text-[#d7ff45] shadow-[0_0_28px_rgba(215,255,69,0.24),inset_0_0_18px_rgba(215,255,69,0.08)] backdrop-blur-sm">
                {trait.glyph}
              </div>
            </div>

            <div className="relative flex flex-1 flex-col px-5 pb-6 pt-5 text-center">
              <h3 className="text-xl font-black uppercase leading-tight tracking-wide text-[#d6d27c] drop-shadow-[0_0_12px_rgba(215,255,69,0.15)]">
                {trait.title}
              </h3>
              <div className="mx-auto mt-3 flex w-28 items-center gap-2">
                <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#b99943] to-[#d7ff45]" />
                <span className="h-1.5 w-1.5 rotate-45 bg-[#d7ff45] shadow-[0_0_10px_rgba(215,255,69,0.75)]" />
                <span className="h-px flex-1 bg-gradient-to-l from-transparent via-[#b99943] to-[#d7ff45]" />
              </div>
              <p className="mt-4 flex-1 text-sm font-semibold leading-6 text-[#e8e1ca]">
                {trait.copy}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
