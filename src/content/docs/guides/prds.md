---
title: Writing PRDs engineers will actually use
---

## 1) Opening — why most PRDs fail

Most PRDs fail for one boring reason: they document **solutions**, not **problems**.

They start with a UI. A workflow. A set of screens. Then they try to reverse‑engineer “the why” after the fact. That’s how you end up with a PRD that looks complete, gets polite nods in review, and still creates chaos in delivery. Engineers build what you wrote. Stakeholders argue about what you meant. QA tests whatever they can infer. And you, the PM, spend the sprint translating between three interpretations of the same document.

If you remember only one thing, remember this question:

> **What problem are we solving, and how will we know we solved it?**

Before you write a single requirement, you should be able to answer that in plain language. If you can’t, you don’t have a PRD. You have a guess wearing a document’s clothing.

I’m opinionated here: a PRD is not a ceremony. It’s a tool for reducing ambiguity. If it doesn’t reduce ambiguity, it’s paperwork.

## 2) The structure that actually works (and why each section exists)

I’ll walk through a structure that works in the real world because every section has a job. No fluff.

To keep it concrete, we’ll use a real-ish example throughout:

**Feature:** An **e‑invoicing integration** that makes a platform compliant with the **EU PEPPOL** network.

This isn’t a “nice to have.” Compliance features are hard because the constraints are external, the consequences are real, and the stakeholders have sharp opinions.

### Summary (1 paragraph)

**Why it exists:** so anyone can understand what this is in 30 seconds.

Example:

> We will add PEPPOL-compliant e‑invoicing to enable customers in the EU to send and receive invoices through the PEPPOL network. This unblocks regulated customers, reduces manual invoice handling, and prevents compliance risk.

If your summary contains implementation detail, you’re already drifting.

### Problem statement

**Why it exists:** because teams build better solutions when the problem is clear, bounded, and testable.

Bad problem statement:

> Customers need a PEPPOL button.

Good problem statement:

> EU customers can’t legally exchange invoices with certain public-sector and enterprise buyers without using PEPPOL. Today they export PDFs and manually re-enter invoice data into external portals, causing delays, rejections, and compliance exposure.

Notice what changed: it’s about **pain**, **constraint**, and **consequence**.

### Personas / who this is for

**Why it exists:** because “the user” is not a person. Different roles optimize for different outcomes.

In our example, your primary personas might be:

- **Accountants**: care about correctness, audit trails, and “does this match the regulation.”
- **Finance Ops teams**: care about throughput, exceptions handling, and integration reliability.
- (Secondary) **IT/Admins**: care about configuration, security, and connectivity to existing ERP systems.

The goal isn’t a giant persona novel. It’s to answer: *whose life gets better, and how?*

### Success metrics

**Why it exists:** because without success metrics you can’t prioritize tradeoffs, and you can’t end debates.

For PEPPOL compliance, success metrics should include both outcome and quality:

- **Adoption:** % of eligible EU customers enabled for PEPPOL within X weeks
- **Operational:** invoice rejection rate via PEPPOL (target: below X%)
- **Speed:** median invoice processing time (reduce by Y%)
- **Quality:** % of invoices passing validation on first submission

And you should include a “don’t break” guardrail:

- **Support load:** no sustained increase in invoice-related tickets per 100 invoices

If you can’t measure it precisely yet, write a proxy and state the limitation. Don’t pretend.

### Scope (in-scope / out-of-scope)

**Why it exists:** because most delivery pain is scope confusion, not engineering difficulty.

For PEPPOL compliance, in-scope might be:

- Generating PEPPOL-compliant invoice documents (specific formats)
- Registering sender/receiver identifiers where required
- Validation rules and clear error messages
- Basic admin configuration (country, identifiers, endpoint)

Out-of-scope might be:

- Full ERP integrations beyond the minimal PEPPOL connector
- Automated tax advisory logic (“tell me the right VAT rate”)
- Supporting every country’s edge-case requirements on day one

You’re not being restrictive. You’re being honest.

### Requirements

**Why it exists:** because this is the contract between intent and implementation.

For this feature, requirements should be testable and tied to outcomes. Examples below in section 4.

### User journeys (happy path + edge cases)

**Why it exists:** because requirements alone don’t reveal workflow gaps.

Example journeys:

- Admin enables PEPPOL → config validated → test invoice sent → production enabled
- Invoice fails validation → user sees actionable error → retries successfully
- Receiver identifier missing → system blocks send with clear next steps

Edge cases are where compliance products live. Don’t skip them.

### Open questions

**Why it exists:** because ambiguity doesn’t disappear when you ignore it.

Examples:

- Which PEPPOL BIS versions do we support at launch?
- Which identifier schemes are required per target country?
- Do we need archival and retention requirements for audits?

Open questions are not weakness. Hidden open questions are.

## 3) The most important section most PMs skip — Non-goals

Non-goals are where you buy speed.

When you don’t write non-goals, two things happen:
1) everyone assumes their favorite thing is included,
2) you get scope creep dressed up as “small asks.”

In the PEPPOL feature, if you don’t explicitly state non-goals, someone will eventually ask:
- “Can we also automatically reconcile invoice payments?”
- “Can we support credit notes in all countries?”
- “Can we build a full supplier master data system?”

Those aren’t stupid requests. They’re adjacent value. But if you accept them implicitly, your compliance feature turns into a multi-quarter finance suite.

A very real scope-creep story: you launch “PEPPOL compliance.” Then Sales sells it as “end-to-end e-invoicing automation.” Then customers ask why their downstream ERP sync isn’t included. Now you’re stuck: either build a whole integration platform or manage a disappointed customer relationship. Non-goals prevent accidental promises.

Write them down. Put them near the top. Make them visible.

## 4) How to write requirements engineers actually use

Engineers can build anything. What they need from you is clarity on **the desired outcome** and **the constraints**.

A requirement written as a solution is fragile:
- it bakes in your guess
- it limits better implementation options
- it becomes outdated when the UI changes

A requirement written as an outcome is durable.

### Three before/after examples

**Example 1**

Before (solution):
- “Add a dropdown for selecting PEPPOL identifier scheme.”

After (outcome):
- “The system must support selecting a PEPPOL identifier scheme valid for the configured country, and must block submission if the scheme/identifier combination fails validation.”

**Example 2**

Before (solution):
- “Show a red banner when the invoice fails.”

After (outcome):
- “When an invoice submission fails validation, the user must see a clear error message mapped to the failing rule, with guidance for correction, and must be able to retry after editing without losing invoice data.”

**Example 3**

Before (solution):
- “Store PEPPOL XML in S3.”

After (outcome):
- “The system must retain a tamper-evident copy of the submitted invoice payload and the network response for audit purposes for at least X days, accessible to authorized users.”

See the pattern: engineers can choose the best implementation. You’re defining what “correct” means.

## 5) PRD definition of done

I use three checks. They sound simple. They’re not.

### 1) A new engineer can explain the problem back to you

This is the fastest test for clarity.

Hand the PRD to an engineer who hasn’t been in the meetings. Give them 10 minutes. Ask them to explain:
- the user pain
- the constraint (PEPPOL compliance)
- what success looks like

If they start describing UI instead of the problem, your PRD is solution-first. Rewrite the opening.

### 2) Requirements can be turned into tickets without guesswork

This doesn’t mean you write the tickets yourself. It means the PRD provides enough precision that engineering can break it down.

A practical test: in a grooming session, do you spend your time discussing tradeoffs and sequencing, or are you explaining basic intent (“no, I meant invoices sent via network, not email”)? If it’s the latter, the PRD is missing constraints, edge cases, or definitions.

### 3) You can point to what’s explicitly not included

This is where mature PMs win.

In reviews, stakeholders will try to “just add one more thing.” When you have explicit non-goals and out-of-scope, you can respond calmly:
- “That’s a good idea.”
- “It’s not in scope for this release.”
- “Let’s log it for follow-up once compliance is shipped.”

Without that, every discussion becomes emotional negotiation.

## 6) What I’ve learned writing PRDs across 6 domains

A few honest lessons, earned the hard way:

1) **Fintech taught me that constraints are features.** Regulations, audit trails, controls — they’re not “edge cases.” They’re the product.

2) **Prop-tech taught me that markets are noisy.** Metrics swing with seasonality and inventory mix. If you don’t design experiments carefully, you’ll take credit for weather.

3) **Automotive taught me that complex systems punish ambiguity.** When ten teams integrate, a vague requirement doesn’t create a small bug. It creates a multi-team incident.

4) **AI platforms taught me to respect uncertainty.** Model behavior drifts. Data quality bites. You need guardrails, monitoring, and humility baked into the PRD — not bolted on later.

If you want a PRD that survives contact with reality: write problems, define success, declare non-goals, and give engineers outcomes—not UI instructions.
