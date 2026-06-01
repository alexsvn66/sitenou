export function StorySection() {
  return (
    <section
      className="relative mx-auto max-w-[92rem] px-4 pb-7 pt-8 sm:px-6 sm:pb-10 sm:pt-11 lg:px-8"
      id="lore"
    >
      <div className="pointer-events-none absolute inset-x-[4%] top-[2%] h-[94%] bg-[radial-gradient(ellipse_at_50%_50%,rgba(190,222,63,0.16),rgba(139,103,31,0.08)_45%,transparent_74%)] blur-3xl" />

      <article
        aria-labelledby="story-title"
        className="relative isolate overflow-hidden rounded-[1.65rem] border border-[#8c712b] bg-[#020503] p-[2px] shadow-[0_30px_90px_rgba(0,0,0,0.78),0_0_30px_rgba(204,241,71,0.12),inset_0_0_0_1px_rgba(227,190,86,0.2)] sm:p-[3px]"
      >
        <div className="pointer-events-none absolute inset-[7px] rounded-[1.25rem] border border-[#c7a142]/35" />

        <div className="relative overflow-hidden rounded-[1.42rem] border border-[#1b2d1d] bg-[radial-gradient(ellipse_at_50%_52%,rgba(15,51,32,0.68),rgba(1,13,10,0.96)_66%),linear-gradient(180deg,#03130d_0%,#010805_100%)] px-5 py-9 text-center shadow-[inset_0_0_56px_rgba(0,0,0,0.74),inset_0_0_110px_rgba(19,61,35,0.2)] sm:px-10 sm:py-12 lg:px-16 lg:py-14">
          <div className="pointer-events-none absolute inset-x-[7%] top-[36%] h-px bg-gradient-to-r from-transparent via-[#9b7a31]/34 to-transparent" />
          <div className="pointer-events-none absolute inset-x-[16%] bottom-[-18%] h-[48%] rounded-full bg-[#b9e742]/5 blur-3xl" />

          <div className="relative flex items-center justify-center gap-2.5 sm:gap-4">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#d2a847] sm:w-24" />
            <span className="h-2 w-2 rotate-45 border-2 border-[#b39234] bg-[#162719]" />
            <p className="font-serif text-[0.66rem] font-black uppercase tracking-[0.34em] text-[#f0d986] [text-shadow:0_1px_0_rgba(0,0,0,0.95),0_0_7px_rgba(219,190,88,0.25)] sm:text-sm">
              The Past
            </p>
            <span className="h-2 w-2 rotate-45 border-2 border-[#b39234] bg-[#162719]" />
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#d2a847] sm:w-24" />
          </div>

          <h2
            className="relative mt-5 bg-gradient-to-b from-[#effb99] via-[#c6d95d] to-[#788b2c] bg-clip-text font-serif text-[clamp(2.55rem,7.6vw,7.15rem)] font-black uppercase leading-[0.92] tracking-[0.025em] text-transparent sm:mt-7 sm:whitespace-nowrap"
            id="story-title"
            style={{
              fontFamily: "Georgia, Garamond, 'Times New Roman', serif",
              textShadow:
                "0 1px 0 rgba(220,237,116,0.82), 0 3px 0 rgba(52,64,20,0.94), 0 5px 7px rgba(0,0,0,0.98), 0 0 16px rgba(199,231,77,0.22)",
            }}
          >
            A Goblin&rsquo;s Story
          </h2>

          <span className="relative mx-auto mt-6 block h-px w-[82%] bg-gradient-to-r from-transparent via-[#aa8135]/72 to-transparent sm:mt-8" />

          <p
            className="relative mx-auto mt-4 max-w-[82rem] text-[clamp(0.98rem,1.6vw,1.42rem)] font-bold leading-[1.75] tracking-[0.008em] text-[#f0ead3] sm:mt-5"
            style={{
              fontFamily: "Georgia, Garamond, 'Times New Roman', serif",
              textShadow:
                "0 1px 0 rgba(255,255,255,0.12), 0 2px 2px rgba(0,0,0,0.96)",
            }}
          >
            In a forgotten corner of the blockchain, where lost wallets and
            broken memes drifted through the dark, Grimmi kept watch in silence.
            He gathered abandoned tokens, stray communities, and ideas no one
            believed in. While others chased hype and hollow crowns, he built a
            hidden refuge beneath the chain &mdash; a vault for chaos, culture,
            and loyal goblins. From that refuge, a tribe was born around memes,
            mischief, and the promise of a place that remembers what the chain
            leaves behind.
          </p>

          <p
            className="relative mt-5 font-serif text-[clamp(1.52rem,3.4vw,3.15rem)] font-black leading-tight tracking-[0.015em] text-[#d9ec55] [text-shadow:0_1px_0_rgba(232,255,106,0.58),0_3px_0_rgba(63,77,18,0.94),0_0_14px_rgba(202,247,69,0.42)] sm:mt-7"
            style={{
              fontFamily: "Georgia, Garamond, 'Times New Roman', serif",
            }}
          >
            He opened the Goblin Vault.
          </p>
        </div>
      </article>
    </section>
  );
}
