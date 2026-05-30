import Image from "next/image";

const storyImage =
  "/grimmi/fb057caa-c14b-4fed-b838-2b593f033224.png";

export function StorySection() {
  return (
    <section
      className="relative mx-auto max-w-[92rem] px-4 pb-6 pt-8 sm:px-6 sm:pb-8 sm:pt-10 lg:px-8"
      id="lore"
    >
      <div className="pointer-events-none absolute inset-x-[9%] top-[8%] h-[82%] bg-[radial-gradient(ellipse_at_50%_50%,rgba(215,255,69,0.16),rgba(178,130,42,0.09)_38%,transparent_72%)] blur-3xl" />

      <figure className="relative overflow-hidden rounded-[1.15rem] border border-[#b39448]/90 bg-[#020604] p-[3px] shadow-[0_28px_90px_rgba(0,0,0,0.72),0_0_34px_rgba(215,255,69,0.15),inset_0_0_0_1px_rgba(238,209,119,0.14)] sm:p-1">
        <Image
          alt="Goblin Story banner with Grimmi in a dark fantasy cave, an account of the Goblin Vault, and a carved goblin stone relief"
          className="block h-auto w-full rounded-[0.92rem] object-contain object-center"
          height={724}
          quality={100}
          sizes="(min-width: 1536px) 1408px, calc(100vw - 2rem)"
          src={storyImage}
          width={2172}
        />

        <figcaption className="relative mx-1 mb-1 mt-1 rounded-[0.85rem] border border-[#8f7438]/70 bg-[#03100a]/95 px-5 py-6 text-center shadow-[inset_0_0_24px_rgba(215,255,69,0.045)] sm:mx-1.5 sm:mb-1.5 sm:px-7 sm:py-7 lg:sr-only">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#d9b75d]" />
            <span className="h-1.5 w-1.5 rotate-45 border border-[#efcf73]/90 bg-[#243312]" />
            <p className="font-serif text-[0.66rem] font-black uppercase tracking-[0.32em] text-[#e6cf84]">
              The Past
            </p>
            <span className="h-1.5 w-1.5 rotate-45 border border-[#efcf73]/90 bg-[#243312]" />
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#d9b75d]" />
          </div>

          <h2
            className="mt-4 bg-gradient-to-b from-[#f1f19b] via-[#d8ed67] to-[#9fb843] bg-clip-text font-serif text-[clamp(2rem,8vw,3.5rem)] font-black uppercase leading-[0.94] tracking-[0.035em] text-transparent"
            style={{
              fontFamily: "Georgia, Garamond, 'Times New Roman', serif",
              textShadow:
                "0 1px 0 rgba(95,113,42,0.88), 0 2px 0 rgba(0,0,0,0.94), 0 0 10px rgba(215,255,69,0.26)",
            }}
          >
            A Goblin&rsquo;s Story
          </h2>

          <span className="mx-auto mt-4 block h-px w-[72%] bg-gradient-to-r from-transparent via-[#c49a43]/78 to-transparent" />

          <p
            className="mx-auto mt-4 max-w-[42rem] text-[0.94rem] font-semibold leading-[1.72] tracking-[0.012em] text-[#f0e8ce] sm:text-base"
            style={{
              fontFamily: "Georgia, Garamond, 'Times New Roman', serif",
              textShadow: "0 1px 1px rgba(0,0,0,0.96)",
            }}
          >
            In a forgotten corner of the blockchain, where failed transactions
            gathered like dust, Grimmi guarded lost wallets, broken promises,
            and abandoned memes. While fake kings rose and vanished, he stayed
            in the shadows, collecting what the chain left behind. Then one
            night, beneath the glow of a forgotten vault, he chose not to chase
            a crown &mdash; he opened a refuge instead.
          </p>

          <p
            className="mt-4 font-serif text-[1.24rem] font-black leading-tight tracking-[0.025em] text-[#d9ef63] sm:text-[1.45rem]"
            style={{
              fontFamily: "Georgia, Garamond, 'Times New Roman', serif",
              textShadow:
                "0 1px 0 rgba(0,0,0,0.96), 0 0 9px rgba(215,255,69,0.34)",
            }}
          >
            He opened the Goblin Vault.
          </p>
        </figcaption>
      </figure>
    </section>
  );
}
