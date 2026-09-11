"use client"
// Client component so `new Date()` resolves in the visitor's browser instead
// of at static-prerender time -- Next.js 16's cacheComponents correctly
// rejects a non-deterministic value baked into a statically prerendered page.
export default function Footer() {
  return (
    <p className="flex justify-center relative z-[51] py-6 text-sm font-mono text-muted border-t border-border">
      © {new Date().getFullYear()} Ahmed Abdelsamie. All rights reserved.
    </p>
  );
};

