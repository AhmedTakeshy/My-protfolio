"use client"
import { useState } from "react";
import { caseStudies } from "./caseStudies.data";
import CaseStudyCard from "./CaseStudyCard";
import CaseStudyModal from "./CaseStudyModal";

export default function CaseStudies() {
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const openStudy = caseStudies.find((s) => s.slug === openSlug) ?? null;

  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <p className="eyebrow mb-3">01 — Work</p>
        <h2 className="mb-12 text-[32px] lg:text-[40px] font-semibold text-ink max-w-xl">
          Systems I&apos;ve architected and shipped.
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {caseStudies.map((study, i) => (
            <CaseStudyCard
              key={study.slug}
              study={study}
              featured={i === 0}
              onOpen={() => setOpenSlug(study.slug)}
            />
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
