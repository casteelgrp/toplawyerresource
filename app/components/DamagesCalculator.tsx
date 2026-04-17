'use client';

import { useState } from 'react';

const multiplierNotes: Record<string, string> = {
  '1.5': 'Typical for minor injuries that fully resolve within a few months',
  '2.5': 'Typical range for moderate injuries with documented treatment',
  '3.5': 'Used when surgery, significant disability, or long recovery is involved',
  '5.0': 'Reserved for catastrophic, permanent, or life-altering injuries',
};

export default function DamagesCalculator() {
  const [medical, setMedical] = useState(15000);
  const [wages, setWages] = useState(5000);
  const [multiplier, setMultiplier] = useState(2.5);

  const econ = medical + wages;
  const pain = econ * multiplier;
  const total = econ + pain;
  const econPct = total > 0 ? (econ / total) * 100 : 0;
  const painPct = 100 - econPct;

  const fmt = (n: number) => '$' + Math.round(n).toLocaleString();

  return (
    <div className="not-prose my-8 rounded-lg border border-border p-6">
      <h3 className="mb-1 text-base font-medium">Damages multiplier estimator</h3>
      <p className="mb-5 text-sm text-muted-foreground">See how economic damages and injury severity combine to estimate total claim value.</p>

      <div className="space-y-4 mb-6">
        <div className="flex flex-wrap items-center gap-3">
          <label className="text-sm text-muted-foreground w-48">Total medical bills</label>
          <input type="range" min={0} max={500000} step={1000}
            value={medical} onChange={e => setMedical(Number(e.target.value))}
            className="flex-1 min-w-32" />
          <span className="text-sm font-medium w-24 text-right">{fmt(medical)}</span>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <label className="text-sm text-muted-foreground w-48">Lost wages</label>
          <input type="range" min={0} max={250000} step={1000}
            value={wages} onChange={e => setWages(Number(e.target.value))}
            className="flex-1 min-w-32" />
          <span className="text-sm font-medium w-24 text-right">{fmt(wages)}</span>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <label className="text-sm text-muted-foreground w-48">Injury severity</label>
          <select value={multiplier} onChange={e => setMultiplier(Number(e.target.value))}
            className="text-sm border border-border rounded-md px-2 py-1 bg-background">
            <option value={1.5}>1.5x — Minor soft tissue</option>
            <option value={2.5}>2.5x — Moderate (fracture, herniation)</option>
            <option value={3.5}>3.5x — Serious (surgery required)</option>
            <option value={5.0}>5.0x — Catastrophic / permanent</option>
          </select>
        </div>
        <p className="text-xs text-muted-foreground italic">{multiplierNotes[String(multiplier)]}</p>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-5">
        {[
          { label: 'Economic damages', val: fmt(econ) },
          { label: 'Pain & suffering est.', val: fmt(pain) },
          { label: 'Total claim value', val: fmt(total), highlight: true },
        ].map(card => (
          <div key={card.label} className="bg-muted rounded-md p-3">
            <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">{card.label}</div>
            <div className={`text-lg font-medium ${card.highlight ? 'text-green-600 dark:text-green-400' : ''}`}>
              {card.val}
            </div>
          </div>
        ))}
      </div>

      <div className="h-8 rounded-md overflow-hidden flex mb-3 bg-muted">
        <div style={{ width: `${econPct}%` }} className="bg-blue-500 flex items-center justify-center text-xs font-medium text-white transition-all duration-300 overflow-hidden whitespace-nowrap">
          {econPct > 12 ? 'Economic' : ''}
        </div>
        <div style={{ width: `${painPct}%` }} className="bg-amber-500 flex items-center justify-center text-xs font-medium text-white transition-all duration-300 overflow-hidden whitespace-nowrap">
          {painPct > 12 ? 'Pain & suffering' : ''}
        </div>
      </div>

      <div className="flex flex-wrap gap-4 text-xs text-muted-foreground mb-4">
        <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-blue-500 inline-block"></span>Economic damages (medical + wages)</span>
        <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block"></span>Pain & suffering (non-economic)</span>
      </div>

      <p className="text-xs text-muted-foreground border-t border-border pt-3 leading-relaxed">
        This illustrates the standard multiplier method used by insurance companies to estimate non-economic damages. Actual settlement value depends on liability strength, available coverage, jurisdiction, and insurer negotiation tactics. Insurance companies will argue for the lowest multiplier possible — an attorney can counter this. This is not a guarantee of settlement value.
      </p>
    </div>
  );
}
