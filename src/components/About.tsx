export default function About() {
  return (
    <section className="section" id="about">
      <div className="container mx-auto">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <div>
            <p className="eyebrow mb-3">04 — About</p>
            <h2 className="text-[32px] lg:text-[40px] font-semibold text-ink leading-[1.1]">
              Self-taught. <br />Systems-minded.
            </h2>
          </div>
          <div>
            <p className="mb-6 text-lg text-ink/90">
              I&apos;m a self-taught frontend engineer with 6+ years building
              production React and Next.js applications. I care most about
              the parts of a product other engineers avoid: the architecture
              underneath the UI — how a codebase splits into modules, how a
              design system stays consistent across teams, how a CI pipeline
              stays fast as a team grows.
            </p>
            <p className="mb-10 text-lg text-ink/90">
              I work well both independently and inside a team, and I&apos;m
              detail-oriented to a fault — I&apos;d rather ship one thing
              done properly than five things half-finished. My background is
              a Business Administration degree and two web development
              bootcamps, not a CS program — what I bring instead is 6+ years
              of production ownership and the artifacts to show for it.
            </p>
            <div className="flex flex-wrap gap-x-10 gap-y-4 font-mono text-sm text-muted">
              <span><span className="text-ink">6+</span> years in production</span>
              <span><span className="text-ink">6</span> modules architected</span>
              <span><span className="text-ink">90%</span> CI/CD time cut</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
