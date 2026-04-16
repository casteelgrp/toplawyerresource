"use client";

import { useState } from "react";

export default function UMCalculator() {
  const [damages, setDamages] = useState(25000);
  const [umLimit, setUmLimit] = useState(25000);
  const [stacked, setStacked] = useState(1);

  const pip = Math.min(10000 * 0.8, damages);
  const effectiveUM = umLimit * stacked;
  const remaining = Math.max(0, damages - pip);
  const umUsed = Math.min(effectiveUM, remaining);
  const gap = Math.max(0, damages - pip - effectiveUM);
  const total = pip + umUsed;

  const fmt = (n: number) => "$" + Math.round(n).toLocaleString();

  const pipPct = (pip / damages) * 100;
  const umPct = (umUsed / damages) * 100;
  const gapPct = (gap / damages) * 100;

  return (
    <div className="not-prose my-8 rounded-lg border border-gray-200 p-6">
      <h3 className="mb-1 text-base font-medium">
        Florida hit-and-run coverage calculator
      </h3>
      <p className="mb-5 text-sm text-gray-500">
        Estimate how PIP and UM coverage apply to your damages.
      </p>

      <div className="space-y-4 mb-6">
        <div className="flex flex-wrap items-center gap-3">
          <label className="text-sm text-gray-500 w-48">
            Total estimated damages
          </label>
          <input
            type="range"
            min={5000}
            max={150000}
            step={1000}
            value={damages}
            onChange={(e) => setDamages(Number(e.target.value))}
            className="flex-1 min-w-32"
          />
          <span className="text-sm font-medium w-24 text-right">
            {fmt(damages)}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <label className="text-sm text-gray-500 w-48">
            Your UM coverage limit
          </label>
          <select
            value={umLimit}
            onChange={(e) => setUmLimit(Number(e.target.value))}
            className="text-sm border border-gray-200 rounded-md px-2 py-1 bg-white"
          >
            <option value={10000}>$10,000</option>
            <option value={25000}>$25,000</option>
            <option value={50000}>$50,000</option>
            <option value={100000}>$100,000</option>
          </select>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <label className="text-sm text-gray-500 w-48">
            Stacked vehicles
          </label>
          <select
            value={stacked}
            onChange={(e) => setStacked(Number(e.target.value))}
            className="text-sm border border-gray-200 rounded-md px-2 py-1 bg-white"
          >
            <option value={1}>1 vehicle (no stacking)</option>
            <option value={2}>2 vehicles</option>
            <option value={3}>3 vehicles</option>
            <option value={4}>4 vehicles</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
        {[
          { label: "PIP covers", val: fmt(pip), highlight: "" },
          { label: "Effective UM", val: fmt(effectiveUM), highlight: "" },
          { label: "Total available", val: fmt(total), highlight: "" },
          {
            label: "Out of pocket",
            val: fmt(gap),
            highlight: gap > 0 ? "danger" : "success",
          },
        ].map((card) => (
          <div key={card.label} className="bg-gray-50 rounded-md p-3">
            <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">
              {card.label}
            </div>
            <div
              className={`text-lg font-medium ${
                card.highlight === "danger"
                  ? "text-red-600"
                  : card.highlight === "success"
                    ? "text-green-600"
                    : ""
              }`}
            >
              {card.val}
            </div>
          </div>
        ))}
      </div>

      <div className="h-7 rounded-md overflow-hidden flex mb-3 bg-gray-100">
        <div
          style={{ width: `${pipPct}%` }}
          className="bg-blue-500 flex items-center justify-center text-xs font-medium text-white transition-all duration-300 overflow-hidden whitespace-nowrap"
        >
          {pipPct > 8 ? "PIP" : ""}
        </div>
        <div
          style={{ width: `${umPct}%` }}
          className="bg-green-500 flex items-center justify-center text-xs font-medium text-white transition-all duration-300 overflow-hidden whitespace-nowrap"
        >
          {umPct > 8 ? "UM" : ""}
        </div>
        <div
          style={{ width: `${gapPct}%` }}
          className="bg-red-500 flex items-center justify-center text-xs font-medium text-white transition-all duration-300 overflow-hidden whitespace-nowrap"
        >
          {gapPct > 8 ? "Uncovered" : ""}
        </div>
      </div>

      <div className="flex flex-wrap gap-4 text-xs text-gray-500 mb-5">
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-500 inline-block" />
          PIP ($10,000 Florida standard, 80% payout)
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-green-500 inline-block" />
          UM coverage
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block" />
          Uncovered
        </span>
      </div>

      <p className="text-xs text-gray-500 border-t border-gray-200 pt-3 leading-relaxed">
        This is a simplified estimate. PIP pays 80% of medical expenses up to
        your limit. Actual UM recovery depends on meeting Florida&apos;s serious
        injury threshold, your policy terms, and whether physical contact
        occurred with the hit-and-run vehicle. Consult an attorney for advice
        specific to your situation.
      </p>
    </div>
  );
}
