export function PageShell({
  statement,
  gradient,
  intro,
  children,
}: {
  statement: string;
  gradient: string;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-14 md:py-20">
      <h1
        className={`text-statement-gradient animate-fade-in-up w-fit pb-1 text-3xl font-semibold tracking-tight md:text-4xl ${gradient}`}
      >
        {statement}
      </h1>
      {intro && (
        <p className="animate-fade-in-up mt-5 max-w-[65ch] text-base leading-relaxed text-muted-foreground [animation-delay:80ms]">
          {intro}
        </p>
      )}
      <div className="animate-fade-in-up mt-10 [animation-delay:160ms]">
        {children}
      </div>
    </div>
  );
}
