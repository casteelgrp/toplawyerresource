"use client";

import type { ReactNode } from "react";

export function HeroCTAPrimary({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      style={{ transition: "all 0.2s ease" }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.backgroundColor = "#60a5fa";
        (e.currentTarget as HTMLElement).style.transform = "scale(1.03)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(55,138,221,0.4)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.backgroundColor = "#3b82f6";
        (e.currentTarget as HTMLElement).style.transform = "scale(1)";
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
      }}
      className="px-7 py-3.5 rounded-lg bg-blue-500 text-white font-medium text-base"
    >
      {children}
    </a>
  );
}

export function HeroCTASecondary({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      style={{ transition: "all 0.2s ease" }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.1)";
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.4)";
        (e.currentTarget as HTMLElement).style.color = "#ffffff";
        (e.currentTarget as HTMLElement).style.transform = "scale(1.03)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.15)";
        (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.75)";
        (e.currentTarget as HTMLElement).style.transform = "scale(1)";
      }}
      className="px-7 py-3.5 rounded-lg border border-white/15 text-white/75 font-medium text-base"
    >
      {children}
    </a>
  );
}

export function HelpStepCard({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      style={{ transition: "all 0.2s ease" }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 32px rgba(0,0,0,0.3)";
        (e.currentTarget as HTMLElement).style.backgroundColor = "#0d2035";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
        (e.currentTarget as HTMLElement).style.backgroundColor = "#0a1628";
      }}
      className="relative bg-[#0a1628] rounded-xl p-8 overflow-hidden block no-underline"
    >
      {children}
    </a>
  );
}
