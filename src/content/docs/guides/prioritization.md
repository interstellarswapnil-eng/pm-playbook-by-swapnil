---
title: Prioritization (when everything is “top priority”)
description: "How to prioritize your backlog without politics using WSJF. Includes a real scored example and the exact conversation to have with stakeholders who always want their feature first."
keywords: "product prioritization, WSJF, backlog prioritization, prioritization frameworks, how to prioritize features, product backlog"
---

## 1) Opening — why prioritization is political by default

Prioritization is political by default because most orgs don’t have a shared definition of value.

Engineering sees tech debt and reliability risk. Sales sees the deal in front of them. Compliance sees the regulator with a stopwatch. Support sees the backlog of angry users. Leadership sees a quarterly narrative. None of them are wrong. But if you don’t create an objective frame, the loudest voice wins, and you’ll call it “alignment.”

The real failure mode isn’t that people have opinions. It’s that they argue from different scorecards. So the meeting becomes a debate about *whose pain matters more*, not *what outcome we’re trying to drive*.

My rule: if you want prioritization to feel less political, you have to make the tradeoffs visible. Not in a perfect model. In a simple, defensible one. Something you can explain on a whiteboard. Something you can repeat next month when half the room changes.

And the goal is not to “be fair.” The goal is to ship the highest-value work with the least regret.

## 2) WSJF in plain English (with a real scored backlog)

WSJF (Weighted Shortest Job First) sounds like consulting jargon. It’s not. It’s a way to answer one question:

> **What gives us the most value per unit of time?**

You score each item on:

- **Cost of Delay** (how expensive it is to not do it)
- divided by
- **Job Size** (how much time/effort it takes)

Cost of Delay is usually broken into three buckets:
- **User/Business value** (revenue, retention, adoption)
- **Time criticality** (deadlines, seasonal windows)
- **Risk reduction / opportunity enablement** (compliance, platform unlocks, future optionality)

Keep it simple: score each 1–10. Don’t pretend it’s precise. It’s a forcing function.

### Example: four items competing for the same sprint

Let’s say you’ve got one sprint. The team can realistically do one “medium” item, or two “small” items.

Your backlog contenders:

1) **Compliance feature:** Implement new regulatory validation rules that go live next month.
2) **Sales-requested integration:** Add a CRM integration requested by Sales for a big prospect.
3) **Performance fix:** Reduce p95 API latency on a core endpoint.
4) **New user onboarding flow:** Improve activation by simplifying the first-run experience.

Here’s a realistic WSJF table (scores 1–10; size in story points as a proxy).

| Item | User/Business Value | Time Criticality | Risk Reduction / Enablement | Cost of Delay (sum) | Job Size | WSJF (CoD / Size) |
|------|----------------------|------------------|------------------------------|---------------------|----------|-------------------|
| (1) Compliance feature | 6 | 10 | 10 | 26 | 5 | **5.2** |
| (2) Sales integration | 8 | 6 | 3 | 17 | 8 | 2.1 |
| (3) Performance fix | 7 | 5 | 6 | 18 | 13 | 1.4 |
| (4) Onboarding flow | 9 | 4 | 2 | 15 | 8 | 1.9 |

Now the uncomfortable truth: **the compliance feature wins**.

Even though nobody is yelling about it in Slack.

Why? Because its cost of delay is huge:
- it has a real deadline (time criticality)
- the downside risk is massive (risk reduction)
- it might not feel “exciting,” but it prevents a future incident that will destroy your roadmap anyway

This is what good prioritization does: it makes the invisible work visible.

And if Sales pushes back—good. Now you have a rational conversation:
- “If we miss compliance, what happens?”
- “If we delay the integration by two sprints, what happens?”

Most orgs can tolerate delayed features. Most cannot tolerate regulatory failure.

## 3) Handling the stakeholder who always wants to be #1

There’s a stakeholder archetype who always wants their item at the top. They’ll say it’s urgent. They’ll say it’s strategic. They’ll say “the CEO asked.”

Don’t fight them with authority. Fight the problem with a shared scoring model.

The exact move that works is this:

> **“Help me understand what outcome you’re trying to drive, and let’s score it together.”**

Then shut up.

When you do this, one of two things happens:
1) They reveal a legitimate outcome you hadn’t understood (great — you adjust).
2) They realize they’re arguing from preference, not outcome (also great — the heat drops).

If they keep pushing, get specific:
- “Which metric moves if we do this?”
- “What’s the cost if we don’t do it this sprint?”
- “What’s the smallest version that proves the value?”

And if you’re feeling brave, ask the one question that exposes political work:

- “If we ship this, what decision gets easier next?”

If there’s no decision, it’s probably noise.

## 4) What to document so the decision survives the next reorg

Prioritization doesn’t fail when you pick the wrong thing. It fails when you can’t explain *why* you picked it three months later.

Document these four things, every time:

1) **The options considered** (what you didn’t choose)
2) **The scoring** (even if it’s rough)
3) **The assumptions** (what would change your mind)
4) **The decision owner** (who can override, and why)

Keep it lightweight. A single page. A comment in the epic. A decision record.

Because here’s what happens in real life:
- a new leader joins
- they ask “why aren’t we doing X?”
- nobody remembers
- the backlog gets reshuffled
- you lose a quarter to re-litigating decisions

A good artifact doesn’t prevent politics. It prevents amnesia.

## 5) Three anti-patterns (with consequences)

### Anti-pattern #1: “We prioritize by whoever screams loudest.”

Consequence: your roadmap becomes a reward system for bad behavior. Thoughtful stakeholders stop engaging. Loud stakeholders learn they can bully.

### Anti-pattern #2: Mixing “must-do” compliance with “nice-to-have” growth features in the same debate

Consequence: you waste time arguing about things that aren’t comparable. Separate the buckets. First, handle non-negotiables (compliance, stability). Then allocate remaining capacity.

### Anti-pattern #3: Scoring in secret

Consequence: people don’t trust the model, so they attack the outcome. Score together, in the room. Let stakeholders disagree with the inputs. That’s where the learning is.

Prioritization will never be perfectly objective. But it can be **fair, transparent, and repeatable**. That’s how you ship in the real world.
