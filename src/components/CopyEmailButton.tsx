"use client";

import { useEffect, useState } from "react";

type CopyEmailButtonProps = {
  email: string;
  copyLabel: string;
  copiedLabel: string;
};

export default function CopyEmailButton({
  email,
  copyLabel,
  copiedLabel,
}: CopyEmailButtonProps) {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (!isCopied) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setIsCopied(false);
    }, 1800);

    return () => window.clearTimeout(timeoutId);
  }, [isCopied]);

  async function handleCopyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setIsCopied(true);
    } catch {
      setIsCopied(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopyEmail}
      aria-label={copyLabel}
      className="rounded-md border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-100 transition-all duration-200 hover:border-slate-600 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
    >
      {isCopied ? copiedLabel : copyLabel}
    </button>
  );
}
