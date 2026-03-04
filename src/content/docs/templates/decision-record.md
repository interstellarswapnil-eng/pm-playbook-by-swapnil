---
title: Product decision record
---

## How to use this template

Write a decision record when you’re making a choice that future-you (or a new team) will question later: build vs buy, scope cuts, platform bets, policy changes, or any decision with real tradeoffs.

Keep it short. One page. The goal is not documentation theatre — it’s to capture *why* you chose what you chose, so the decision doesn’t get re-litigated every time the org chart changes.

Most teams skip this because “we’ll remember.” You won’t. In six months, the people change, the context changes, and the only thing that remains is the outcome. A decision record protects you from hindsight bias.

It matters more six months later than today because today everyone still has context in their head. Later, they’ll only have opinions.

## Context

*(What’s happening, what problem are we solving, and what constraints matter? Keep this factual.)*

**Example (realistic):**

We process thousands of invoices per week. Supplier data is messy and inconsistent across customers. Today, Finance Ops manually selects the supplier for ~35% of invoices, which slows processing and introduces errors.

We need a reliable way to **auto-identify the correct supplier from invoice data** (name, VAT ID, address, bank info) to reduce manual effort and improve accuracy. Constraints: data privacy, model explainability for audit, and a timeline of 8 weeks for an internal pilot.

## Options considered

*(List the viable options you actually discussed. Don’t add fake options to make your favorite look good.)*

**Option A — Build in-house**
- Train/host our own model (or rules + ML hybrid) and maintain it.
- Pros: control, customization, no vendor lock-in.
- Cons: longer time-to-value, ongoing MLOps burden, higher operational risk.

**Option B — Use a third-party ML API**
- Use an external provider for entity resolution / supplier identification.
- Pros: faster pilot, proven models, less infra.
- Cons: cost at scale, data sharing concerns, dependency risk.

**Option C — Rules-only (short-term)**
- Deterministic matching based on VAT ID/bank account/name normalization.
- Pros: simplest, transparent, cheap.
- Cons: will miss many cases; brittle; won’t generalize.

## Decision

*(Write the decision in one sentence. Then add the “why” in 2–4 bullets.)*

**Example decision:**

We will use a **third-party ML API** for the 8-week pilot, backed by a rules-based fallback, and we will re-evaluate build-in-house after we hit stable volume and understand error modes.

Why:
- We need a working pilot quickly to validate impact on manual effort.
- The biggest risk right now is not model quality — it’s adoption and workflow fit.
- We can reduce vendor risk by limiting scope and keeping an internal fallback.

## Tradeoffs

*(Name what you are giving up. This is where the honesty lives.)*

**Example tradeoffs:**

- We accept higher per-invoice costs during the pilot in exchange for speed.
- We accept dependency risk on the API provider; mitigation is a fallback matcher + contract exit clause.
- We accept that some customers may not allow data sharing; we will exclude them from the pilot.

## Success criteria

*(How will we know this decision was correct? Use measurable outcomes.)*

**Example success criteria:**

- Reduce manual supplier selection from ~35% → **<15%** in the pilot cohort.
- Achieve **≥90% accuracy** on supplier identification where ground truth is available.
- No increase in invoice processing errors (guardrail: rejection rate stable).
- Pilot users report reduced time spent per invoice (qualitative confirmation).

## Follow-ups

*(What needs to happen next, who owns it, and by when?)*

**Example follow-ups:**

- [Owner: PM] Define pilot cohort + success dashboard by **Mar 15**.
- [Owner: Eng Lead] Implement API integration + fallback rules matcher by **Mar 29**.
- [Owner: Security/Compliance] Approve data-sharing approach + retention policy by **Mar 20**.
- [Owner: PM] Schedule a 30-day review: keep vendor / build hybrid / build in-house.
