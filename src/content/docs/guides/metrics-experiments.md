---
title: Metrics & experiments (that don’t lie)
description: "How to build a metric tree, design real experiments, and avoid the trap of shipping features and calling it a test. For PMs who want data to mean something."
keywords: "product metrics, north star metric, A/B testing for PMs, experiment design, product KPIs, leading indicators, guardrail metrics"
---

## 1) Opening — why most PMs measure the wrong things

Most PMs aren’t bad at metrics. They’re just measuring the wrong thing because the system around them rewards it.

If you get praised for “shipping,” you’ll measure output. If you get grilled on dashboards in QBRs, you’ll pick whatever moves fastest. If leadership wants certainty, you’ll over-index on vanity metrics that look stable. And if your team is under pressure, you’ll quietly avoid metrics that might tell an uncomfortable truth.

Here’s the problem: **the easiest metrics to move are usually the least connected to value**. Clicks. Page views. Time on page. “Engagement.” These numbers can go up while customers get no better outcome. Sometimes they go up because you made the product worse (more confusion means more time spent).

What to do instead is boring but powerful: **anchor everything to an outcome metric**, then work backwards to a small set of input metrics you can actually influence, plus guardrails that prevent you from “winning” by breaking something important. You don’t need more charts. You need a metric tree you can defend in a meeting.

And one more opinion: if you can’t explain *why* a metric matters in one sentence, you don’t own it. You’re just reporting it.

## 2) The metric tree — North Star, inputs, guardrails (with a worked example)

A metric tree is just a way to stop lying to yourself.

- **North Star metric**: the outcome that represents real customer value (and ideally business value too).
- **Input metrics**: leading indicators you can move with product changes.
- **Guardrails**: metrics that catch unintended damage (conversion drops elsewhere, performance regressions, support load, churn).

Let’s make this concrete with a prop-tech platform.

### Worked example: prop-tech platform

**North Star: Occupancy rate**

Occupancy rate is the outcome you care about. It’s what customers ultimately pay you for: properties getting filled.

But occupancy rate is slow to move. It’s influenced by seasonality, supply mix, pricing, location, and a hundred other variables. If you only stare at occupancy, you’ll either do nothing (because you can’t prove impact) or you’ll take credit for noise.

So you pick inputs.

**Input metric #1: Listing quality score**

Define it clearly. Not “looks good.” Something like:
- photo completeness
- description completeness
- amenity accuracy
- response time expectations set

If listings are higher quality, they’re more likely to convert. This is a lever product can influence via UX, nudges, templates, and validation.

**Input metric #2: Search-to-contact rate**

This measures whether search results and listing pages actually help users take the next step. It’s closer to product behavior. It’s also fast feedback.

Now guardrails.

**Guardrail: Session drop rate**

If you make the listing page “better” but it gets heavier, slower, or more confusing, users may bounce more. You might see search-to-contact go up for power users while overall sessions drop. That’s not a win. That’s selective success.

So your tree looks like:

- **North Star:** Occupancy rate
  - **Inputs:** Listing quality score, Search-to-contact rate
  - **Guardrail:** Session drop rate

This is not the only valid tree. But it’s defendable. It’s testable. And it prevents the classic PM sin: celebrating a local maximum.

## 3) How to design an actual experiment

An experiment is not “we shipped a thing and watched the dashboard.” An experiment is a decision-making tool.

### Hypothesis format

Use this, every time:

> **If** we change *X* for *Y users*, **then** *primary metric* will improve by *Z*, **because** *reason*, **without** harming *guardrails*.

It forces specificity.

### Pick a primary metric

One. Not five.

In our prop-tech example, say we’re testing a new property listing layout.

**Goal:** improve occupancy rate. But that’s too slow for an A/B decision in a week.

So for the experiment, the **primary metric** might be:
- **Search-to-contact rate** (leading indicator), measured within-session.

And you keep your guardrails:
- **Session drop rate** must not increase beyond a threshold.
- (Optional) page load time, support tickets, cancellation rate.

### Minimum detectable effect (MDE), explained like a human

MDE is the smallest improvement you care about *and* can reliably detect.

If search-to-contact is 8% today, and you’d only celebrate if it becomes 8.2%, don’t run an experiment unless you have enough traffic to detect that.

A simple way to set MDE:
- Ask: “What lift would make this worth rolling out?”
- Pick a number you would actually act on.

Example:
- Baseline search-to-contact: **8.0%**
- MDE: **+0.8 percentage points** (to **8.8%**) — meaningful enough to ship.

If the result is +0.1pp, that’s basically noise in most systems. Don’t let people bully you into calling it a win.

### Duration and ramp

Don’t blast 100% of users on day one.

A practical ramp plan:
- Day 1: 5% treatment (sanity check instrumentation + guardrails)
- Day 2–3: 25%
- Day 4+: 50% (or 100% if risk is low)

Duration depends on traffic and cycles. For prop-tech, behavior can vary by weekday/weekend. I like at least **one full weekly cycle** when possible. If leadership demands faster, you can shorten it, but be explicit that confidence drops.

## 4) Three common traps (with consequences)

### (a) Shipping a feature and calling it an experiment

Consequence: you learn nothing.

If you don’t have a hypothesis, a primary metric, clean tracking, and a comparison group, you’re not experimenting. You’re just narrating.

The worst part is cultural: teams start believing experiments are performative. Then real experimentation dies.

### (b) Optimising an input metric while breaking a guardrail

Consequence: you create hidden damage.

Example: your new listing layout increases search-to-contact by making the CTA louder. Great. But it also increases session drop rate because the page is slower or more confusing. You may be pushing users into contacting without understanding the property details, leading to lower-quality leads, more cancellations, and lower long-term occupancy.

Guardrails exist to stop “growth” that’s actually churn in disguise.

### (c) Ending experiments too early because leadership is impatient

Consequence: you ship noise.

Early data is volatile. It’s especially volatile after launches because of novelty, uneven rollout, and tracking bugs.

If you stop after 24–48 hours because the chart looks good, you’re basically doing product astrology.

If someone is pushing you to end early, ask one question:

> “What decision would we make differently if we ran this for one more cycle?”

If the answer is “we’d have higher confidence,” that’s the point.

## 5) Checklist — Before you call this an experiment, check these 6 things

1. **Hypothesis is written** (If/then/because) and has a measurable target.
2. **One primary metric** is chosen, and it maps to value (not vanity).
3. **Guardrails are defined** with explicit thresholds (what counts as ‘harm’).
4. **Instrumentation is verified** (events fire, buckets are correct, dashboards match raw counts).
5. **MDE is set** to a lift you’d actually ship for, and the test has enough traffic/time to detect it.
6. **Ramp + duration are decided upfront**, including what would trigger a rollback.
