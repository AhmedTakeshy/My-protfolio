"use client"
import { useEffect, useState } from "react";
import { onCLS, onINP, onLCP, onTTFB, type Metric } from "web-vitals";

type MetricKey = "LCP" | "INP" | "CLS" | "TTFB";

const METRIC_INFO: Record<MetricKey, { label: string; description: string; format: (v: number) => string }> = {
  LCP: {
    label: "LCP",
    description: "How fast the main content appeared",
    format: (v) => `${(v / 1000).toFixed(2)}s`,
  },
  INP: {
    label: "INP",
    description: "How fast the page responds to your clicks",
    format: (v) => `${Math.round(v)}ms`,
  },
  CLS: {
    label: "CLS",
    description: "How much the layout jumped around",
    format: (v) => v.toFixed(3),
  },
  TTFB: {
    label: "TTFB",
    description: "How fast the server responded",
    format: (v) => `${Math.round(v)}ms`,
  },
};

const ORDER: MetricKey[] = ["LCP", "INP", "CLS", "TTFB"];

const RATING_LABEL: Record<Metric["rating"], string> = {
  good: "good",
  "needs-improvement": "needs work",
  poor: "poor",
};

export default function LiveMetrics() {
  const [metrics, setMetrics] = useState<Partial<Record<MetricKey, Metric>>>({});

  useEffect(() => {
    const handle = (metric: Metric) => {
      setMetrics((prev) => ({ ...prev, [metric.name]: metric }));
    };
    // reportAllChanges: values update live in front of the visitor instead of
    // only finalizing on tab-hide, since the whole point is to watch them move.
    onLCP(handle, { reportAllChanges: true });
    onINP(handle, { reportAllChanges: true });
    onCLS(handle, { reportAllChanges: true });
    onTTFB(handle, { reportAllChanges: true });
  }, []);

  return (
    <section className="section" id="live">
      <div className="container mx-auto">
        <p className="eyebrow mb-3">01 — Live</p>
        <h2 className="mb-4 text-[32px] lg:text-[40px] font-semibold text-ink max-w-xl">
          Not a claim. This page&apos;s real numbers, right now.
        </h2>
        <p className="mb-12 max-w-lg text-muted">
          Core Web Vitals, measured by your own browser on this exact page load —
          the same metrics Google uses to judge real user experience. No fixture
          data, no hand-picked run.
        </p>
        <div className="grid gap-px overflow-hidden border rounded-lg sm:grid-cols-2 lg:grid-cols-4 border-border bg-border">
          {ORDER.map((key) => {
            const info = METRIC_INFO[key];
            const metric = metrics[key];
            const waitingForInteraction = key === "INP" && !metric;
            return (
              <div key={key} className="p-6 lg:p-8 bg-surface">
                <h3 className="mb-3 font-mono text-xs tracking-widest uppercase text-accent">
                  {info.label}
                </h3>
                <p className="mb-1 font-mono text-3xl text-ink">
                  {metric ? info.format(metric.value) : "—"}
                </p>
                <p className="mb-3 text-xs text-muted">
                  {waitingForInteraction ? "waiting for a click or keypress" : info.description}
                </p>
                {metric && (
                  <span
                    className={`font-mono text-xs ${metric.rating === "good" ? "text-accent" : "text-muted"}`}
                  >
                    {RATING_LABEL[metric.rating]}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
