import { GlowCard } from "./GlowCard";

const traits = [
  {
    glyph: "A",
    title: "Anti-guru",
    copy: "No leaders. No masters. We follow chaos, not cults. Question everything.",
  },
  {
    glyph: "V",
    title: "Vault Keeper",
    copy: "Grimmi guards the lost, the abandoned, and the memeconomy. The vault is for the people.",
  },
  {
    glyph: "#",
    title: "Meme Collector",
    copy: "Every cursed post, every perfect reaction, every chain-born joke gets a home in the vault.",
  },
  {
    glyph: "G",
    title: "Community Goblin",
    copy: "Built by goblins. Powered by chaos. Stronger together when the candles go green.",
  },
];

export function CharacterSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-7 sm:px-6 sm:py-10 lg:px-8">
      <div className="ornate-divider">
        <h2 className="section-heading whitespace-nowrap">Why Grimmi?</h2>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {traits.map((trait) => (
          <GlowCard
            className="ornate-frame relative min-h-80 p-6 text-center"
            key={trait.title}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(215,255,69,0.16),transparent_42%),linear-gradient(180deg,rgba(215,255,69,0.045),transparent_48%)]" />
            <div className="absolute inset-x-8 top-5 h-px bg-gradient-to-r from-transparent via-[#8a7431] to-transparent" />
            <div className="relative mx-auto grid h-24 w-24 place-items-center rounded-lg border border-[#d7ff45]/45 bg-[#020604]/80 font-serif text-5xl font-black text-[#d7ff45] shadow-[0_0_32px_rgba(215,255,69,0.2),inset_0_0_26px_rgba(215,255,69,0.09)]">
              {trait.glyph}
            </div>
            <h3 className="relative mt-6 text-xl font-black uppercase tracking-wide text-[#c9e66a]">
              {trait.title}
            </h3>
            <p className="relative mt-4 leading-7 text-[#e3dfc8]">
              {trait.copy}
            </p>
            <div className="absolute bottom-5 left-1/2 h-8 w-8 -translate-x-1/2 rotate-45 rounded-sm border border-[#8a7431]/65 bg-[#06110d] shadow-[0_0_16px_rgba(215,255,69,0.08)]" />
          </GlowCard>
        ))}
      </div>
    </section>
  );
}
