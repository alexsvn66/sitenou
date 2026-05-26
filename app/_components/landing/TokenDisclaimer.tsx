export function TokenDisclaimer() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-4 sm:px-6 lg:px-8" id="buy">
      <div className="ornate-frame rounded-lg border border-[#d7ff45]/35 bg-[#07130e]/92 p-5 shadow-[0_0_40px_rgba(215,255,69,0.14),inset_0_0_28px_rgba(215,255,69,0.05)] sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="grid h-16 w-16 shrink-0 place-items-center rounded-md border border-[#d7ff45]/50 bg-[#020604] font-mono text-3xl font-black text-[#d7ff45] shadow-[0_0_22px_rgba(215,255,69,0.16)]">
            !
          </div>
          <p className="max-w-5xl text-lg leading-8 text-[#e3dfc8]">
            <span className="font-black text-[#d7ff45]">$GRIMMI</span>{" "}
            is a community meme token for entertainment, memes, and community
            participation. Crypto assets are risky and can lose all value.
          </p>
        </div>
      </div>
    </section>
  );
}
