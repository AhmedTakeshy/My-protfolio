
export default function Footer() {
  return (
    <p className="flex justify-center relative z-[51] py-6 text-sm font-mono text-muted border-t border-border">
      © {new Date().getFullYear()} Ahmed Abdelsamie. All rights reserved.
    </p>
  );
};

