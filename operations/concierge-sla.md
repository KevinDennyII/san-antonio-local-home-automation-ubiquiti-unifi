# Concierge — SLAs & Service Description

**Product:** Concierge Network & Automation (monthly retainer)  
**Default:** 90 days Standard included with new installs, then opt-in.

---

## Tiers

| | Essential — $150/mo | Standard — $250/mo | Estate — $400/mo |
|--|---------------------|--------------------|------------------|
| Typical package | A | B | C / camera-heavy |
| Monitoring | UniFi up/down + WAN | + HA reachable via tunnel | + camera NVR disk / Protect health |
| Firmware cadence | UniFi monthly review | UniFi + HA monthly | Same + coordinated camera firmware |
| New-device credits | 0 (T&M) | 2 / month | 5 / month |
| Wi‑Fi health check | — | Semi-annual remote | Quarterly (remote; on-site if needed billable travel) |
| Support channel | Email | Email + phone | Priority phone / text business hours |
| Business hours | Mon–Fri 9:00–17:00 America/Chicago | Same | Same + after-hours best-effort for outages |

Unused device credits do not roll over beyond **one** month.

---

## Response time SLA (business hours)

| Severity | Examples | Essential | Standard | Estate |
|----------|----------|-----------|----------|--------|
| P1 — Outage | No internet whole home, HA down for all users, UDM offline | 8 business hours | 4 business hours | 2 business hours |
| P2 — Degraded | One floor Wi‑Fi weak, single critical lock integration broken | 2 business days | 1 business day | 8 business hours |
| P3 — Request | Add device, dashboard tweak, guest password rotate | 5 business days | 3 business days | 2 business days |

**P1 after-hours (Estate):** Best-effort same evening; not a guaranteed NOC.  
**On-site:** Scheduled; trip fee may apply outside Concierge remote scope (see rate card / SOW).

---

## Included vs not included

### Included
- Review UniFi alerts; apply approved firmware during maintenance windows  
- Home Assistant core updates (monthly cadence — see `update-cadence.md`)  
- Backup verification  
- Device onboarding within monthly credits  
- Advisory on local-friendly vs cloud-only purchases  

### Not included (quote / change order)
- New cable runs or extra APs  
- Whole-home redesign  
- Alarm central-station or life-safety licensing  
- Unlimited custom automations (use hourly rate)  
- ISP outages (we help diagnose demarc; carrier must fix)  

---

## Maintenance windows

| Window | Default |
|--------|---------|
| Preferred | Tue–Thu 10:00–15:00 America/Chicago |
| Client notice | 24 hours for non-emergency updates |
| Emergency | Security patches ASAP with notice after |

---

## Onboarding Concierge

- [ ] Client selects tier at handoff or day 80 reminder  
- [ ] Billing method on file  
- [ ] Support mailbox + phone in client handoff  
- [ ] Monitoring checks enabled (UDM + HA tunnel)  
- [ ] Ticket process explained (`support-ticket-process.md`)  

---

## Cancellation

30 days written notice. No refund of partial month. Provider removes admin access within 10 business days after final month unless client requests credential handoff-only.
