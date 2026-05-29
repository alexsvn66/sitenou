import Image from "next/image";

export function StorySection() {
  return (
    <section
      className="relative mx-auto max-w-7xl px-5 pb-3 pt-6 sm:px-6 sm:pb-5 sm:pt-8 lg:px-8"
      id="lore"
    >
      <div className="absolute inset-x-0 top-10 h-56 bg-[radial-gradient(ellipse_at_50%_50%,rgba(215,255,69,0.12),transparent_68%)] blur-3xl" />

      <div className="relative overflow-hidden rounded-xl border border-[#516335]/90 bg-[#06110d]/88 shadow-[0_28px_100px_rgba(0,0,0,0.62),0_0_48px_rgba(215,255,69,0.12),inset_0_0_42px_rgba(124,255,107,0.055)] backdrop-blur-md">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_40%,rgba(215,255,69,0.14),transparent_17rem),radial-gradient(circle_at_84%_38%,rgba(213,180,95,0.13),transparent_15rem),linear-gradient(115deg,rgba(215,255,69,0.04)_0_1px,transparent_1px_88px)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d7ff45]/80 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#b99943]/75 to-transparent" />

        <div className="relative grid lg:grid-cols-[0.4fr_0.42fr_0.18fr]">
          <div className="relative min-h-60 overflow-hidden border-b border-[#344c37] bg-[#020604] lg:h-[19rem] lg:min-h-0 lg:border-b-0 lg:border-r">
            <Image
              alt="Hooded Grimmi overlooking the forgotten chain"
              className="scale-[1.04] object-cover object-[46%_48%]"
              fill
              sizes="(min-width: 1024px) 38vw, 100vw"
              src="/grimmi/lore-left.png"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_58%_24%,rgba(215,255,69,0.12),transparent_10rem),linear-gradient(90deg,rgba(2,6,4,0.04),rgba(2,6,4,0.34)),linear-gradient(180deg,transparent,rgba(2,6,4,0.62)_100%)]" />
          </div>

          <div className="relative p-6 sm:p-7 lg:p-8">
            <div className="flex items-center gap-4">
              <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#b99943] to-[#d7ff45]" />
              <p className="text-xs font-black uppercase tracking-[0.28em] text-[#d7ff45]">
                THE PAST
              </p>
              <span className="h-px flex-1 bg-gradient-to-l from-transparent via-[#b99943] to-[#d7ff45]" />
            </div>

            <h2 className="mt-3 font-serif text-4xl font-black uppercase leading-tight text-[#cdea51] drop-shadow-[0_0_20px_rgba(215,255,69,0.28)] sm:text-[2.8rem]">
              A Goblin&apos;s Story
            </h2>

            <p className="mt-4 text-base font-semibold leading-7 text-[#e8e1ca]">
              In a forgotten corner of the blockchain, where failed
              transactions gather like dust, Grimmi guarded lost wallets,
              broken promises, and abandoned memes. He watched fake kings rise
              and vanish. He did not become a king.
            </p>

            <p className="mt-3 font-serif text-xl font-black leading-8 text-[#d7ff45] drop-shadow-[0_0_14px_rgba(215,255,69,0.28)]">
              He opened the Goblin Vault.
            </p>
          </div>

          <div className="relative hidden overflow-hidden bg-[#020604] lg:block">
            <Image
              alt="Carved goblin mark in cave stone"
              className="scale-110 object-cover object-[52%_50%]"
              fill
              sizes="20vw"
              src="/grimmi/lore-right.png"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_52%_42%,rgba(215,255,69,0.11),transparent_9rem),linear-gradient(90deg,rgba(2,6,4,0.3),rgba(2,6,4,0.66)),linear-gradient(180deg,transparent,#020604_100%)]" />
            <div className="absolute inset-5 rounded-xl border border-[#b99943]/28 shadow-[inset_0_0_28px_rgba(213,180,95,0.06)]" />
          </div>
        </div>
      </div>
    </section>
  );
}
