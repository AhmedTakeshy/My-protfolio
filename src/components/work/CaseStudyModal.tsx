"use client"
import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import Link from "next/link";
import { IoClose, IoChevronBack, IoChevronForward } from "react-icons/io5";
import { FiExternalLink } from "react-icons/fi";
import type { CaseStudy } from "./caseStudies.data";

export default function CaseStudyModal({
  study,
  open,
  onOpenChange,
}: {
  study: CaseStudy;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [slide, setSlide] = useState(0);
  const hasMultiple = study.images.length > 1;

  function next() {
    setSlide((s) => (s + 1) % study.images.length);
  }
  function prev() {
    setSlide((s) => (s - 1 + study.images.length) % study.images.length);
  }

  return (
    <Dialog.Root open={open} onOpenChange={(v) => { setSlide(0); onOpenChange(v); }}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[70] bg-bg/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=open]:fade-in data-[state=closed]:animate-out data-[state=closed]:fade-out" />
        <Dialog.Content
          className="fixed z-[71] inset-4 md:inset-x-auto md:inset-y-8 md:left-1/2 md:-translate-x-1/2 md:max-w-3xl md:w-full max-h-[92vh] overflow-y-auto bg-surface border border-border rounded-lg focus:outline-none data-[state=open]:animate-in data-[state=open]:fade-in data-[state=open]:zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out"
        >
          <div className="sticky top-0 z-10 flex items-center justify-between px-5 py-4 border-b bg-surface border-border">
            <Dialog.Title className="text-lg font-semibold text-ink">{study.name}</Dialog.Title>
            <Dialog.Close asChild>
              <button
                aria-label="Close"
                className="flex items-center justify-center w-8 h-8 text-muted hover:text-ink transition-colors rounded-full border border-border"
              >
                <IoClose />
              </button>
            </Dialog.Close>
          </div>

          {/* Screenshot carousel */}
          <div className="relative bg-bg">
            <div className="relative aspect-[16/10]">
              <Image
                src={study.images[slide].src}
                alt={study.images[slide].alt}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
            {hasMultiple && (
              <>
                <button
                  onClick={prev}
                  aria-label="Previous screenshot"
                  className="absolute -translate-y-1/2 left-3 top-1/2 flex items-center justify-center w-9 h-9 rounded-full bg-surface/90 border border-border text-ink hover:text-accent transition-colors"
                >
                  <IoChevronBack />
                </button>
                <button
                  onClick={next}
                  aria-label="Next screenshot"
                  className="absolute -translate-y-1/2 right-3 top-1/2 flex items-center justify-center w-9 h-9 rounded-full bg-surface/90 border border-border text-ink hover:text-accent transition-colors"
                >
                  <IoChevronForward />
                </button>
                <div className="absolute flex gap-1.5 -translate-x-1/2 bottom-3 left-1/2">
                  {study.images.map((_, i) => (
                    <button
                      key={i}
                      aria-label={`Go to screenshot ${i + 1}`}
                      onClick={() => setSlide(i)}
                      className={`h-1.5 rounded-full transition-all ${i === slide ? "w-5 bg-accent" : "w-1.5 bg-border"}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          <div className="p-6 space-y-6">
            <p className="font-mono text-xs tracking-widest uppercase text-accent">{study.role}</p>

            <div>
              <h3 className="mb-2 font-mono text-xs tracking-widest uppercase text-muted">Problem</h3>
              <p className="text-ink/90">{study.problem}</p>
            </div>
            <div>
              <h3 className="mb-2 font-mono text-xs tracking-widest uppercase text-muted">Architecture</h3>
              <p className="text-ink/90">{study.architecture}</p>
            </div>
            <div>
              <h3 className="mb-2 font-mono text-xs tracking-widest uppercase text-muted">Impact</h3>
              <ul className="grid gap-2 sm:grid-cols-2">
                {study.impact.map((line) => (
                  <li key={line} className="px-3 py-2 font-mono text-sm border rounded-md border-border text-ink/90">
                    {line}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-wrap gap-2">
              {study.tech.map((t) => (
                <span key={t} className="px-2.5 py-1 text-xs border rounded-md border-border text-muted font-mono">
                  {t}
                </span>
              ))}
            </div>
            {study.liveUrl && (
              <Link
                href={study.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 btn-link"
              >
                Visit live site <FiExternalLink />
              </Link>
            )}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
