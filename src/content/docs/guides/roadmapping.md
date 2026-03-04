---
title: Roadmapping (without accidentally lying)
---

## 1) Opening — alignment vs false promises

A roadmap can do one of two things:

1) Create alignment.
2) Create false promises.

Most roadmaps do the second one because they try to satisfy two incompatible audiences at once: the people who need direction, and the people who want certainty.

Direction is healthy. Certainty is often fake.

If you put a date next to a complex initiative without doing capacity math, dependency mapping, and risk accounting, you’re not communicating. You’re gambling with trust. And the worst part is that the roadmap becomes a weapon: stakeholders treat it like a contract, teams treat it like a threat, and PMs spend their time explaining “it’s not really a commitment” to a slide that looks exactly like a commitment.

The fix is not a prettier timeline. The fix is a roadmap that is honest about **horizon**, **confidence**, and **decision points**.

## 2) Now / Next / Later (with a monolith-to-microservices example)

Now/Next/Later is my default because it matches reality.

- **NOW** = committed work. Teams are staffed. Scope is bounded. You can defend it.
- **NEXT** = directional. Likely, but still subject to learning and dependencies.
- **LATER** = options. Things you want to explore, not things you’ve promised.

Let’s use a real scenario: a platform migrating from a monolith to microservices.

This kind of program is where roadmaps go to die, because everything is coupled and every dependency is somebody else’s “small thing.”

### NOW (committed)

What belongs in NOW for a migration:

- **Strangler entry point**: introduce an API gateway / routing layer that can direct traffic to new services.
- **Extract one service with clear boundaries**: e.g., “Billing service” or “User profile service.”
- **Observability baseline**: distributed tracing, service-level dashboards, error budgets.

These are committed because they unblock everything else and you can staff them.

How you describe NOW:
- “This is what we are doing.”
- “This is why it matters.”
- “This is what success looks like.”

### NEXT (directional)

NEXT is where people get tempted to over-promise. Don’t.

For the migration, NEXT might include:

- **Extract Notifications service** (depends on eventing backbone)
- **Introduce asynchronous workflows** for long-running jobs
- **Deprecate monolith modules** once service parity is achieved

You believe these are next, but you’re honest about dependencies:
- “Next, assuming the gateway and tracing land cleanly.”
- “Next, once we stabilize the event bus.”

### LATER (options)

LATER is a parking lot for strategic possibilities:

- Multi-region resiliency
- Full domain-driven redesign of core business logic
- Replatforming data layer

These are not promises. They’re options you want to keep visible.

The power move: you explicitly label LATER as **options**, not commitments. This reduces the future disappointment tax.

## 3) “When will feature X be ready?” — how to answer without lying

You will get asked this question. Constantly.

If you answer with a date you can’t defend, you’ve created a future incident.

Here’s language I use (and it works because it’s honest and calm):

> “I can’t give you a reliable date yet without making something up. What I *can* tell you is what needs to be true for it to ship, what we’re doing now to get there, and when we’ll have enough information to give a confident window.”

Then you give:
- a **window** (not a date),
- the **dependencies**,
- and the **next decision point**.

Example:

> “For Feature X, the earliest realistic window is late Q2, assuming the gateway rollout and the first service extraction stabilize without major regressions. We’ll know by end of next sprint whether the eventing work is on track — that’s the point where I can confirm or adjust the window.”

If someone pushes for a date, you can say:

> “If I give you a date today, it will be high-confidence fiction. I’d rather protect your planning by giving you a window and updating it as we learn.”

This is how you build trust. Not by being optimistic.

## 4) Managing a roadmap across distributed teams (timezones, multiple squads)

Distributed teams break roadmaps in predictable ways:

- **Asynchronous misalignment**: decisions get made in one timezone and discovered later in another.
- **Dependency drift**: team A assumes team B will deliver an API “soon,” but “soon” means different things.
- **Status theatre**: updates become performance instead of truth.

What works:

1) **Single source of truth**: one roadmap view that everyone agrees is “the thing.”
2) **Explicit dependency owners**: every dependency has a named owner and a check-in cadence.
3) **Written decisions**: when a tradeoff happens, write it down. Otherwise it will be re-litigated.
4) **Time-zone friendly rituals**: fewer meetings, more written updates.

And the key: treat the roadmap like a living system. If it’s not updated, it’s not a roadmap. It’s a museum exhibit.

## 5) The review cadence that keeps stakeholders calm

Most stakeholder anxiety comes from surprises.

So the cadence is less about “governance” and more about predictable information flow.

Here’s what I’ve seen work consistently:

- **Weekly async update** (short, consistent format): shipped / in progress / next / risks / asks.
- **Bi-weekly delivery review** with Eng + Design: scope, dependencies, risk.
- **Monthly roadmap review** with key stakeholders: what changed, why it changed, what we learned.

In the monthly review, explicitly highlight:
- what moved from NEXT to NOW
- what moved out (and why)
- what risks increased

If you do this well, the “roadmap panic” decreases because people can predict how they’ll get information.

A roadmap isn’t a promise. It’s a communication tool. Use it to tell the truth early, so you don’t have to explain failures late.
