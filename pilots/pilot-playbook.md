# Pilot Install Playbook

**Goal (Days 31–60):** Complete **two** pilot installs at discount or cost-plus in exchange for case studies, photos (with permission), and referrals.  
**Ideal pilots:** Realtor’s own property, trusted listing staging, or a warm $1M+ homeowner who accepts pilot terms.

---

## Pilot commercial terms

| Term | Default |
|------|---------|
| Discount | 20–30% off Package B list, **or** cost-plus (hardware + labor at agreed rate) |
| In exchange | Signed photo/case-study release, 2 intros, honest 14-day feedback |
| Concierge | 90 days included (Standard) |
| Scope lock | Package B preferred (A alone if Wi‑Fi-only pain; avoid Package C on pilots) |
| Change orders | Still billed — pilots are not open-ended |

Use SOW from `delivery/sow-template.md` with **Pilot** checkbox and release attached.

---

## Pilot selection criteria

Accept a pilot if:

- [ ] Home ≥ ~4,000 sq ft or clear luxury positioning  
- [ ] Owner available for handoff training (45–60 min)  
- [ ] Willing to sign case-study / photo release  
- [ ] Cable paths / rack location feasible within 2–3 install days  
- [ ] Not a life-safety / alarm takeover (refer licensed alarm vendor)

Reject or defer if: full custom AI demanded day one, unreachable owner, or unscoped whole-home rewire with no survey.

---

## Execution timeline (per pilot)

| Day | Activity |
|-----|----------|
| −7 | Paid or waived survey; BOM ordered; low-voltage scheduled |
| 0–1 | Rack, UDM, switch, AP mounts, VLAN baseline |
| 1–2 | HA host, device onboarding (cap 25), dashboards |
| 2 | Client handoff + credentials envelope |
| +1–14 | Concierge watch; log every ticket |
| +14 | Pilot retrospective (below) |
| +21 | Case study draft for client approval |

---

## Metrics to capture (required)

| Metric | How |
|--------|-----|
| Coverage | UniFi heat / client experience notes per floor + outdoor |
| Device count under HA | Export / count at handoff and day 14 |
| Time-to-install | Hours: survey, cabling, network, HA, handoff |
| Support tickets (14 days) | Count + categories from support log |
| Hardware cost vs quote | Actual vs estimate |
| Labor hours vs quote | Actual vs estimate |
| NPS / satisfaction | One question: 0–10 “Would you refer us?” |

Store numbers in `pilots/pricing-refinement-log.md`.

---

## Pilot retrospective (30 min)

Answer:

1. What blew the timeline?  
2. What should be fixed-price vs T&M?  
3. AP count right for sq ft?  
4. Device onboarding: 25 enough?  
5. What confused the client at handoff?  
6. Price move for full-rate Package B?

Update rate card bands only after **both** pilots are logged.

---

## Pilot tracker

| # | Client / code name | Package | Survey date | Install dates | Day-14 review | Case study | Status |
|---|--------------------|---------|-------------|---------------|--------------|------------|--------|
| 1 | | B | | | | | Not started |
| 2 | | B | | | | | Not started |

---

## After both pilots

- [ ] Refine Packages A/B pricing in `sales/rate-card.md` if needed  
- [ ] Update VLAN / HA checklists from real friction  
- [ ] Ask realtor for 2–3 listing/buyer consultations  
- [ ] Capture approved case studies / photos for marketing  
- [ ] **Build marketing webpage** for advertising (hold public ads until pilots are done and messaging is proven)  
- [ ] Move CRM target to first **full-price** Package B/C
