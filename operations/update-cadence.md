# Update Cadence — UniFi & Home Assistant

Keep luxury homes stable: **predictable updates**, not “update everything Friday night.”

---

## Monthly (all Concierge tiers)

| Week | Action |
|------|--------|
| Week 1 | Review UniFi release notes; check controller / UDM / AP / switch pending updates |
| Week 1 | Review HA release notes (core + OS) |
| Week 2 | Apply **non-urgent** UniFi device updates in maintenance window (APs first in small batches if nervous site) |
| Week 2–3 | Apply HA OS / Core updates after backup verified |
| Week 4 | Confirm backups green; note any deferred updates |

---

## UniFi rules

- [ ] Backup UniFi settings before major upgrades  
- [ ] Do not upgrade UDM and all APs simultaneously on first pilot-like sites — gateway first, then APs  
- [ ] Skip EA / release-candidate channels on client sites (stable only)  
- [ ] Document version numbers in client `site-notes.md`  

---

## Home Assistant rules

- [ ] Verify backup completed **before** update  
- [ ] Update Core only when tunnel access confirmed  
- [ ] After update: smoke-test lights, climate, locks, Assist (if any)  
- [ ] HACS custom items: update only if changelog reviewed; defer if package C LLM busy  
- [ ] Major breaking changes → schedule with client; do not surprise  

---

## Package C / LLM hosts

- [ ] Treat LLM host updates separately from HA  
- [ ] Pin working model versions; change models only with client approval  
- [ ] Re-test Assist pipeline after either HA or LLM update  

---

## Quarterly (Estate tier; optional Standard)

- [ ] Wi‑Fi health: sticky clients, DFS events, coverage complaints  
- [ ] VLAN rule audit (no accidental “allow all”)  
- [ ] User account audit (remove old guest admin)  
- [ ] Disk space on HA and Protect NVR  

---

## Security exceptions

Critical CVE on UDM/HA: patch as soon as practical with same-day notice; SLA severity P1/P2 as appropriate.
