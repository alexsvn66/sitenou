export function TokenDisclaimer() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-5 sm:px-6 lg:px-8" id="buy">
      <div className="ornate-frame relative overflow-hidden rounded-2xl border border-[#b99943]/55 bg-[#07130e]/94 p-5 shadow-[0_26px_90px_rgba(0,0,0,0.52),0_0_44px_rgba(213,180,95,0.13),inset_0_0_34px_rgba(215,255,69,0.055)] sm:p-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_8%_50%,rgba(213,180,95,0.16),transparent_12rem),linear-gradient(90deg,rgba(215,255,69,0.07),transparent_42%,rgba(213,180,95,0.08))]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#b99943]/80 to-transparent" />
        <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="grid h-16 w-16 shrink-0 place-items-center rounded-xl border border-[#b99943]/75 bg-[#020604] font-mono text-3xl font-black text-[#d7ff45] shadow-[0_0_24px_rgba(213,180,95,0.18),inset_0_0_18px_rgba(213,180,95,0.08)]">
            !
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#d9c77a]">
              Risk Notice
            </p>
            <p className="mt-2 max-w-5xl text-base font-semibold leading-7 text-[#e8e1ca] sm:text-lg">
              <span className="font-black text-[#d7ff45]">$GRIMMI</span>{" "}
              is a community meme token for entertainment, memes, and
              community participation. Crypto assets are risky and can lose all
              value.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
