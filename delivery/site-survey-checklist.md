# Site Survey Checklist

**Fee:** $500–$1,500 (credited to install SOW within 90 days)  
**Output:** Package recommendation, AP plan, BOM sketch, risks/exclusions

---

## Pre-visit (remote)

- [ ] Floor plans or sketch requested  
- [ ] Approx sq ft, floors, construction (stone/stucco/metal — Wi‑Fi impact)  
- [ ] ISP and plan speed; modem/ONT location  
- [ ] Existing Wi‑Fi (eero, Google, ISP gateway, etc.)  
- [ ] Smart device brands list (or photos of apps)  
- [ ] Cameras / alarm vendor already in place?  
- [ ] Decision-maker attending survey?

---

## On-site — property

| Area | Notes |
|------|--------|
| Address / code name | |
| Sq ft / floors / ADU / casita | |
| Rack / closet / utility location | |
| Power + cooling at rack | |
| Cable paths (attic, crawl, conduit) | |
| Exterior walls / dead-spot reports | |
| Outdoor living / pool / gate | |
| HOA / aesthetic constraints for APs | |

---

## On-site — ISP & rack

- [ ] Document ISP handoff (modem bridge mode possible? VLAN tagged?)  
- [ ] Photo of current gear  
- [ ] Measure rack depth / wall space for UDM + **PoE switch** + HA + UPS  
- [ ] Note UPS need  
- [ ] **PoE decision:** gateway built-in PoE ports available: ___ · APs that need PoE: ___ · Separate PoE switch required? Y / N · Model: ________  
  *(Remember: UDM Pro / Pro Max often have **no** PoE; SE / some newer units have **a few** ports but not many — more APs = PoE switch.)* 

---

## On-site — Wi‑Fi plan

- [ ] Walk each floor and primary outdoor zones with phone Wi‑Fi analyzer or UniFi design notes  
- [ ] Draft AP count and locations (wired vs mesh exception)  
- [ ] Mark PoE switch port budget  
- [ ] Guest coverage requirements  

**AP plan sketch:** attach photo or file `surveys/[client]-ap-plan.*`

| AP # | Location | Model intent (U6/U7) | Backhaul (wired/mesh) |
|------|----------|----------------------|------------------------|
| 1 | | | |
| 2 | | | |
| 3 | | | |
| 4 | | | |
| 5 | | | |
| 6 | | | |

---

## On-site — device inventory

| # | Device / area | Protocol (Wi‑Fi/Zigbee/Matter/Cloud) | Keep? | Local-friendly? |
|---|----------------|--------------------------------------|-------|-----------------|
| 1 | | | | |
| 2 | | | | |
| … | | | | |

**Counts:** Total _____ · Included in Package B (25) _____ · Overage blocks needed _____

**Limited support (cloud-only) disclosed:** □ Yes — list: _______________

---

## Security & life-safety

- [ ] Locks / garage / gates — who holds codes today?  
- [ ] Alarm monitoring — licensed vendor stays in place (default)  
- [ ] Cameras — UniFi Protect vs existing NVR  

---

## Recommendation

| Field | Value |
|-------|--------|
| Recommended package | A / B / C (phase C after 30 days?) |
| Indicative price band | $ |
| Survey fee charged | $ |
| Cabling risk (L/M/H) | |
| Low-voltage sub needed | Y / N |
| Pilot candidate | Y / N |

**Client summary (3 bullets to email same day):**  
1.  
2.  
3.  

---

## Sign-off

Surveyor: _____________ Date: _______  
Client present: _____________  
Follow-up proposal due: _______
