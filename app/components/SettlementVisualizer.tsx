"use client";

import { useState } from "react";

export default function SettlementVisualizer() {
  const [gross, setGross] = useState(100000);
  const [liens, setLiens] = useState(15000);
  const [feePct, setFeePct] = useState(0.333);

  const fees = gross * feePct;
  const availableAfterFees = Math.max(0, gross - fees);
  const liensApplied = Math.min(liens, availableAfterFees);
  const net = Math.max(0, gross - fees - liens);
  const lienExcess = liens > availableAfterFees;

  const fmt = (n: number) =>
    "$" + Math.max(0, Math.round(n)).toLocaleString();

  const feesPct = (fees / gross) * 100;
  const liensPct = (liensApplied / gross) * 100;
  const netPct = (net / gross) * 100;

  return (
    <div className="not-prose my-8 rounded-lg border border-gray-200 p-6">
      <h3 className="mb-1 text-base font-medium">
        Settlement distribution estimator
      </h3>
      <p className="mb-5 text-sm text-gray-500">
        See how a gross settlement splits into attorney fees, medical liens, and
        your estimated take-home.
      </p>

      <div className="space-y-4 mb-6">
        <div className="flex flex-wrap items-center gap-3">
          <label className="text-sm text-gray-500 w-52">
            Gross settlement amount
          </label>
          <input
            type="range"
            min={10000}
            max={500000}
            step={5000}
            value={gross}
            onChange={(e) => setGross(Number(e.target.value))}
            className="flex-1 min-w-32"
          />
          <span className="text-sm font-medium w-24 text-right">
            {fmt(gross)}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <label className="text-sm text-gray-500 w-52">
            Outstanding medical liens
          </label>
          <input
            type="range"
            min={0}
            max={200000}
            step={1000}
            value={liens}
            onChange={(e) => setLiens(Number(e.target.value))}
            className="flex-1 min-w-32"
          />
          <span className="text-sm font-medium w-24 text-right">
            {fmt(liens)}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <label className="text-sm text-gray-500 w-52">
            Attorney fee phase
          </label>
          <select
            value={feePct}
            onChange={(e) => setFeePct(Number(e.target.value))}
            className="text-sm border border-gray-200 rounded-md px-2 py-1 bg-white"
          >
            <option value={0.333}>Pre-suit (33.3%)</option>
            <option value={0.4}>Litigation / trial (40%)</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
        {[
          { label: "Gross settlement", val: fmt(gross), highlight: false },
          { label: "Attorney fees", val: fmt(fees), highlight: false },
          { label: "Medical liens", val: fmt(liensApplied), highlight: false },
          { label: "Est. net to client", val: fmt(net), highlight: true },
        ].map((card) => (
          <div key={card.label} className="bg-gray-50 rounded-md p-3">
            <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">
              {card.label}
            </div>
            <div
              className={`text-lg font-medium ${card.highlight ? "text-green-600" : ""}`}
            >
              {card.val}
            </div>
          </div>
        ))}
      </div>

      <div className="h-8 rounded-md overflow-hidden flex mb-3 bg-gray-100">
        <div
          style={{ width: `${feesPct}%` }}
          className="bg-amber-500 flex items-center justify-center text-xs font-medium text-white transition-all duration-300 overflow-hidden whitespace-nowrap"
        >
          {feesPct > 8 ? "Fees" : ""}
        </div>
        <div
          style={{ width: `${liensPct}%` }}
          className="bg-red-500 flex items-center justify-center text-xs font-medium text-white transition-all duration-300 overflow-hidden whitespace-nowrap"
        >
          {liensPct > 8 ? "Liens" : ""}
        </div>
        <div
          style={{ width: `${netPct}%` }}
          className="bg-green-500 flex items-center justify-center text-xs font-medium text-white transition-all duration-300 overflow-hidden whitespace-nowrap"
        >
          {netPct > 8 ? "Net to you" : ""}
        </div>
      </div>

      <div className="flex flex-wrap gap-4 text-xs text-gray-500 mb-4">
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
          Attorney fees
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block" />
          Medical liens
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-green-500 inline-block" />
          Net to client
        </span>
      </div>

      {lienExcess && (
        <p className="text-xs text-red-600 mb-3">
          Medical liens exceed the amount remaining after attorney fees &mdash;
          lien negotiation would be essential in this scenario.
        </p>
      )}

      <p className="text-xs text-gray-500 border-t border-gray-200 pt-3 leading-relaxed">
        This is a simplified educational estimate. Actual disbursements also
        include court costs, expert witness fees, filing fees, and case expenses
        &mdash; which reduce the net-to-client amount further. Medical liens are
        often negotiable and may be reduced by your attorney. Always review the
        closing statement with your attorney before signing.
      </p>
    </div>
  );
}
