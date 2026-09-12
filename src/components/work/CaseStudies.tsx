"use client"
import { useState } from "react";
import { caseStudies } from "./caseStudies.data";
import CaseStudyCard from "./CaseStudyCard";
import CaseStudyModal from "./CaseStudyModal";
import ScrollReveal from "@/components/ScrollReveal";

export default function CaseStudies() {
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const openStudy = caseStudies.find((s) => s.slug === openSlug) ?? null;

  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <p className="eyebrow mb-3">02 — Work</p>
        <h2 className="mb-12 text-[32px] lg:text-[40px] font-semibold text-ink max-w-xl">
          Systems I&apos;ve architected and shipped.
        </h2>
        <div className="grid gap-6 sm:grid-cols-2" style={{ perspective: "1200px" }}>
          {caseStudies.map((study, i) => (
            <ScrollReveal key={study.slug} delayMs={i * 100} className={i === 0 ? "sm:col-span-2" : ""}>
              <CaseStudyCard
                study={study}
                featured={i === 0}
                onOpen={() => setOpenSlug(study.slug)}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>

      {openStudy && (
        <CaseStudyModal
          study={openStudy}
          open={!!openStudy}
          onOpenChange={(v) => setOpenSlug(v ? openStudy.slug : null)}
        />
      )}
    </section>
  );
};
