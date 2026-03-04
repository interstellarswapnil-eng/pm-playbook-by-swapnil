---
title: Stakeholder management (as information architecture)
---

## 1) Opening — it’s not relationship management

Stakeholder management is not relationship management. It’s **information architecture**.

Yes, be a decent human. Yes, build trust. But trust doesn’t come from being friendly in meetings. Trust comes from people getting the information they need, in the format they can use, at the moment they need it.

Most stakeholder problems look like “politics,” but the root cause is usually simpler:
- People don’t know what’s happening.
- They don’t know what changed.
- They don’t know how decisions are made.
- They don’t know when they’ll find out.

So they escalate. They micromanage. They drop “quick pings.” They pull you into meetings that exist only because the system has no reliable outputs.

Your job is to design the system.

## 2) The stakeholder map — who needs what, how often

Start with a stakeholder map. Not a fancy diagram. A practical list.

For each stakeholder type, capture:
- **What do they care about?**
- **What decisions do they make?**
- **What input do they need from you?**
- **How often do they need updates?**
- **What format will they actually read?**

Here’s a real example with five stakeholder types:

### 1) Engineering lead
- Cares about: scope clarity, dependencies, quality, team health
- Decisions: sequencing, tradeoffs, technical approach
- Needs: clear problem/requirements, priorities, risk calls
- Frequency: daily/weekly
- Format: short async notes + a crisp backlog

### 2) Business sponsor
- Cares about: outcomes, timelines, risk, spend
- Decisions: funding, priority calls, escalation paths
- Needs: “what’s shipping, what changed, what’s blocked, what do you need”
- Frequency: weekly + monthly roadmap reviews
- Format: a one-page update, no jargon

### 3) End user (or user proxy)
- Cares about: workflow pain, time saved, reliability
- Decisions: adoption, feedback, “does this actually help”
- Needs: prototypes, pilots, follow-up loops
- Frequency: per research cadence (bi-weekly is a good default)
- Format: interviews, quick surveys, targeted betas

### 4) Compliance / risk
- Cares about: adherence, auditability, controls
- Decisions: go/no-go, required changes
- Needs: explicit requirements, evidence, sign-off moments
- Frequency: milestone-based + early involvement
- Format: documented requirements + a clear review checklist

### 5) External integration partner
- Cares about: stability, contracts, interface clarity, timelines
- Decisions: API readiness, certification, mutual deadlines
- Needs: specs, versioning, change notifications
- Frequency: scheduled check-ins + written change logs
- Format: written docs + change notices; minimal meetings

The point of this map is simple: you stop treating everyone the same. And you stop letting “urgent pings” define your communication strategy.

## 3) The weekly async update that actually gets read

The format works because it’s predictable:

- **Shipped**
- **In progress**
- **Next**
- **Risks / asks**

But most PMs turn it into status theatre. They write paragraphs. They hide problems. They inflate progress. Then stakeholders stop trusting it.

Here’s how to write each section so it stays useful:

### Shipped
- Keep it concrete.
- Tie it to user value.
- Include the link (release notes, PR, doc).

Bad:
- “Improved onboarding.”

Better:
- “Shipped guided onboarding v1 for new workspaces; reduced setup steps from 7 → 4 (pilot users).”

### In progress
- Say what’s actually happening.
- Name dependencies.
- Include a confidence signal.

Example:
- “PEPPOL validation rules implementation in progress; blocked on compliance review of identifier schemes (review scheduled Thu). Confidence: medium.”

### Next
- This is not a promise. It’s the best current plan.
- If it’s conditional, say so.

Example:
- “Next: rollout to 25% of eligible EU tenants, assuming no increase in rejection rate.”

### Risks / asks
- This is the most important section.
- If you don’t ask for help here, stakeholders will invent their own help (usually in the form of meetings).

Example:
- “Ask: need sponsor decision on whether we support BIS v3.0 at launch or v3.1 only (tradeoff: timeline vs coverage).”

One rule: **write for scanning**. If someone can’t get the story in 20 seconds, you’ve lost.

## 4) Two senior stakeholders want opposite things — use ROAM

When two senior stakeholders want opposite things, it feels like politics. It’s usually a missing decision framework.

ROAM helps:
- **R**esolved
- **O**wned
- **A**ccepted
- **M**itigated

Use it like this:

1) Make the conflict explicit in writing.
2) Turn it into a set of risks/tradeoffs.
3) ROAM each item.

Example:
- Sponsor wants a big launch now.
- Compliance wants extra review time.

ROAM the risks:
- “Compliance sign-off timing” → **Owned** by Compliance lead, with a due date.
- “Revenue impact if delayed” → **Accepted** by sponsor (explicitly), or you change scope.
- “Partial rollout to low-risk segments” → **Mitigated** with phased ramp.

The trick is that ROAM forces clarity: who owns what, what’s accepted, what’s mitigated. It stops endless debate.

## 5) The one thing most PMs skip: who decides what

Most PMs avoid documenting decision rights because it feels political.

Ironically, not documenting it creates more politics.

Write down:
- what decisions the PM owns
- what decisions the engineering lead owns
- what decisions require sponsor sign-off
- what decisions require compliance sign-off

Then socialize it in a calm way:

> “To move faster and reduce surprises, I’m documenting decision rights for this area. This isn’t about power — it’s about clarity. Here’s how we’ll make calls going forward.”

Put it in the PRD. Put it in the project space. Repeat it when new people join.

Stakeholder management is not about being liked. It’s about building a system where the right people get the right information, reliably, so the work can ship.
