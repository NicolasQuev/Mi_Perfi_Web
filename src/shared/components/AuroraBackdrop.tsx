/**
 * Fixed decorative background: technical grid, drifting aurora blobs and a
 * vignette. Rendered once by the root layout and never interactive.
 */
export function AuroraBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 grid-backdrop opacity-40" />

      <div className="absolute -left-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-accent-violet/25 blur-[120px] will-change-transform animate-aurora-drift" />
      <div className="absolute -right-32 top-1/4 h-[28rem] w-[28rem] rounded-full bg-accent-cyan/20 blur-[120px] will-change-transform animate-aurora-drift [animation-delay:-6s]" />
      <div className="absolute bottom-0 left-1/3 h-[26rem] w-[26rem] rounded-full bg-accent-fuchsia/15 blur-[120px] will-change-transform animate-aurora-drift [animation-delay:-12s]" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,var(--color-surface-base)_100%)]" />
    </div>
  );
}
