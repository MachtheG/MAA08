"use client";

import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageProvider";
import type { Dictionary } from "@/i18n/dictionaries";

type Method = "mpesa" | "crypto";
type DonateCopy = Dictionary["ui"]["donate"];

const amounts = [200, 500, 1000, 2500, 5000];

export function DonateWidget() {
  const { t } = useLanguage();
  const d = t.ui.donate;
  const [method, setMethod] = useState<Method>("mpesa");
  const [amount, setAmount] = useState<number>(500);
  const [custom, setCustom] = useState("");
  const value = custom ? Number(custom) : amount;

  const tabs: { id: Method; label: string }[] = [
    { id: "mpesa", label: d.mpesa },
    { id: "crypto", label: d.crypto },
  ];

  return (
    <div className="ruling overflow-hidden rounded-page bg-page text-ink-900">
      {/* Method tabs */}
      <div className="grid grid-cols-2 bg-page-alt p-1.5" role="tablist" aria-label={d.methodAria}>
        {tabs.map((m) => (
          <button
            key={m.id}
            role="tab"
            aria-selected={method === m.id}
            onClick={() => setMethod(m.id)}
            className={`min-h-12 rounded-control px-2 text-base font-bold transition-colors sm:px-4 ${
              method === m.id ? "bg-ink-900 text-sand-50" : "text-ink-700 hover:bg-ink-900/8"
            }`}
          >
            {m.label}
          </button>
        ))}
      </div>

      <div className="p-5 sm:p-8 lg:p-10">
        {/* Amount selector */}
        <p className="font-display text-lead text-ink-900">{d.chooseAmount}</p>
        <div className="mt-4 grid grid-cols-3 gap-2 sm:grid-cols-5">
          {amounts.map((a) => (
            <button
              key={a}
              type="button"
              onClick={() => {
                setAmount(a);
                setCustom("");
              }}
              aria-pressed={!custom && amount === a}
              className={`min-h-12 rounded-control border-[1.5px] px-2 font-bold tabular transition-colors ${
                !custom && amount === a
                  ? "border-flag-green-dark bg-flag-green-dark text-sand-50"
                  : "border-ink-900 text-ink-900 hover:bg-ink-900/8"
              }`}
            >
              {a.toLocaleString()}
            </button>
          ))}
          <input
            type="number"
            min={1}
            inputMode="numeric"
            value={custom}
            onChange={(e) => setCustom(e.target.value)}
            placeholder={d.other}
            aria-label={d.customAria}
            className="col-span-3 min-h-12 w-full rounded-control border-[1.5px] border-ink-900 bg-page px-3.5 font-bold tabular sm:col-span-5"
          />
        </div>

        {/* Method-specific UI */}
        <div className="mt-8">
          {method === "mpesa" && <MpesaPanel amount={value} d={d} />}
          {method === "crypto" && <CryptoPanel amount={value} d={d} />}
        </div>

        {/* Backend flag */}
        <div role="note" className="mt-8 grid grid-cols-[1.5rem_minmax(0,1fr)] gap-3 bg-page-deep px-4 py-4 text-small text-ink-700">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true" className="text-flag-red">
            <path d="M11 3 20 19H2L11 3Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
            <path d="M11 9v4.5M11 15.5v1.5" stroke="currentColor" strokeWidth="2" />
          </svg>
          <p>
            <strong className="text-ink-800">{d.notLiveTitle}</strong> {d.notLiveBody}
          </p>
        </div>
      </div>
    </div>
  );
}

function MpesaPanel({ amount, d }: { amount: number; d: DonateCopy }) {
  return (
    <div>
      <dl className="grid gap-4 bg-page-alt p-5 sm:grid-cols-2">
        <div>
          <dt className="text-small font-bold text-ink-700">{d.mpesaPaybill}</dt>
          <dd className="mt-1 tabular text-ink-900">Paybill Business No: 008008</dd>
        </div>
        <div>
          <dt className="text-small font-bold text-ink-700">{d.mpesaAccount}</dt>
          <dd className="mt-1 tabular text-ink-900">Account Reference: MA-008</dd>
        </div>
      </dl>

      <label htmlFor="mpesa-phone" className="mb-2 mt-6 block font-bold text-ink-900">
        {d.mpesaPhone}
      </label>
      <input
        id="mpesa-phone"
        type="tel"
        placeholder={d.mpesaPlaceholder}
        className="min-h-12 w-full rounded-control border-[1.5px] border-ink-900 bg-page px-3.5 tabular"
      />

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <button
          type="button"
          className="min-h-14 rounded-control bg-flag-red px-4 py-3 text-[1.0625rem] leading-snug font-bold text-sand-50 tabular transition-[background-color,transform] duration-(--duration-quick) hover:bg-[color-mix(in_oklab,var(--color-flag-red)_84%,var(--color-ink-900))] active:scale-[0.98]"
        >
          {d.stkPush} · KES {amount.toLocaleString()}
        </button>
        <button
          type="button"
          className="min-h-14 rounded-control border-2 border-ink-900 px-4 py-3 font-bold leading-snug text-ink-900 transition-[background-color,color,transform] duration-(--duration-quick) hover:bg-ink-900 hover:text-sand-50 active:scale-[0.98]"
        >
          {d.mpesaPrompt}
        </button>
      </div>
      <p className="mt-3 text-small text-ink-700">{d.stkNote}</p>
    </div>
  );
}

function CryptoPanel({ amount, d }: { amount: number; d: DonateCopy }) {
  return (
    <div>
      <label htmlFor="crypto-address" className="mb-2 block font-bold text-ink-900">
        {d.cryptoAddress}
      </label>
      <input
        id="crypto-address"
        type="text"
        placeholder="0x... or 1... or bc1..."
        readOnly
        value="[Campaign wallet address to be configured]"
        className="min-h-12 w-full rounded-control border-[1.5px] border-ink-500 bg-page-alt px-3.5 text-small text-ink-700"
      />
      <button
        type="button"
        className="mt-4 min-h-14 w-full rounded-control border-2 border-ink-900 px-6 font-bold text-ink-900 tabular transition-[background-color,color,transform] duration-(--duration-quick) hover:bg-ink-900 hover:text-sand-50 active:scale-[0.98]"
      >
        Send Crypto · KES {amount.toLocaleString()}
      </button>
      <p className="mt-3 text-small text-ink-700">{d.cryptoNote}</p>
    </div>
  );
}
