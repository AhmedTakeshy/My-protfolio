"use client"
import Image from "next/image";
import type { CaseStudy } from "./caseStudies.data";

export default function CaseStudyCard({
  study,
  featured = false,
  onOpen,
}: {
  study: CaseStudy;
  featured?: boolean;
  onOpen: () => void;
}) {
  return (
    <button
      onClick={onOpen}
      className={`group text-left w-full rounded-lg border border-border bg-surface overflow-hidden hover:border-accent transition-colors focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 ${featured ? "sm:col-span-2" : ""}`}
      aria-haspopup="dialog"
    >
      <div className={`relative bg-bg ${featured ? "aspect-[16/8]" : "aspect-[16/10]"}`}>
        <Image
          src={study.images[0].src}
          alt={study.images[0].alt}
          fill
          className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
          sizes={featured ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
        />
        {featured && (
          <span className="absolute px-2.5 py-1 text-xs font-mono tracking-widest uppercase rounded-md top-4 left-4 bg-accent text-bg">
            Flagship
          </span>
        )}
      </div>
      <div className="p-5 lg:p-6">
        <h3 className="mb-1 text-lg font-semibold text-ink">{study.name}</h3>
        <p className="mb-3 text-sm text-muted">{study.role}</p>
        <div className="flex flex-wrap gap-1.5">
          {study.tech.slice(0, 4).map((t) => (
            <span key={t} className="px-2 py-0.5 text-xs border rounded border-border text-muted font-mono">
              {t}
            </span>
          ))}
        </div>
      </div>
    </button>
  );
}
