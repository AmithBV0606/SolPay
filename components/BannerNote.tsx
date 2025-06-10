export default function BannerNote() {
  return (
    <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-400 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-[max(-7rem,calc(50%-52rem))] -z-10 -translate-y-1/2 transform-gpu blur-2xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
          }}
          className="aspect-577/310 w-144.25 bg-linear-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>

      <div
        aria-hidden="true"
        className="absolute top-1/2 left-[max(45rem,calc(50%+8rem))] -z-10 -translate-y-1/2 transform-gpu blur-2xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
          }}
          className="aspect-577/310 w-144.25 bg-linear-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>

      <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
        <p className="text-gray-900">
          <strong className="text-xl font-bold">SolPay</strong>
          currently works only on{" "}
          <strong className="text-xl font-bold">Solana Devnet.</strong> You can
          send SOL tokens only to other Devnet wallet addresses. Transactions to{" "}
          <strong className="text-xl font-bold">Mainnet</strong> or real
          accounts are not supported.
        </p>
      </div>

      <div className="flex flex-1 justify-end"></div>
    </div>
  );
}