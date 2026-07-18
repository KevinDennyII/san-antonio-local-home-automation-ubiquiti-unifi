# San Antonio Luxury Home — UniFi + Home Assistant

Private-network smart home infrastructure for San Antonio / Texas Hill Country luxury residences ($1M+, 5,000–10,000 sq ft).

**Offer:** Ubiquiti UniFi networking (UDM Pro console for Wi‑Fi, with room for cameras, doorbell, landline, and local media later), 100% local Home Assistant control, and private voice — with optional bridges to Alexa, Google Assistant, or Siri.

**One-liner:** *AI made hacking faster. You want a system you control, built with security first — Ubiquiti UniFi is that. Your home’s network and local AI stay under your roof; if the cloud goes down, your house keeps working.*

## Current focus: Pilot mode

We are in **pilot mode**. Our first offer is a **~$5,000 Private Network & Local Smart Home pilot** ($4,000–$5,500 wiggle) for people already in their homes: migrate them onto UniFi (off consumer/banned-list gear), stand up local Home Assistant, and install private voice (FutureProofHomes Satellite1). We buy the equipment, a partner handles wiring if needed, and all configuration is done in-house.

**Marketing website:** hold a big public advertise site until pilots are done — then use [sales/marketing-website-later.md](sales/marketing-website-later.md). **Right now** you can run the docs site in [`website/`](website/) for yourself and to share the Pilot plan link with your realtor.

```bash
cd website && npm install && npm run dev
```

- Share: `/pilot`  
- Full library: `/docs`  

Start here: [sales/pilot-offer.md](sales/pilot-offer.md) · client-facing brief: [sales/notion-pilot-one-pager.md](sales/notion-pilot-one-pager.md) · migration: [delivery/existing-home-migration-checklist.md](delivery/existing-home-migration-checklist.md) · voice: [delivery/voice-standard.md](delivery/voice-standard.md) · HA host: [delivery/ha-host-hardware.md](delivery/ha-host-hardware.md)

## Why clients switch

- **AI-era security:** hacking is faster and more efficient; consumer routers (Linksys, etc.) often have known configuration exploits — you want gear built for control and security. **Ubiquiti UniFi is that.**
- **Not banned-list consumer gear:** cleaner alternative to flagged/imported consumer Wi‑Fi brands.
- **Local resilience:** Home Assistant runs on-prem — a big Amazon/Google outage doesn't take the home down.
- **Private voice:** local speakers, not always-on cloud mics; keep Alexa/Siri only as an optional bridge.
- **One ecosystem later:** Wi‑Fi now; cameras, doorbell, landline, media when scoped.

## Business model

| Layer | What |
|-------|------|
| Pilot (now) | ~$5,000 Private Network & Local Smart Home ($4k–$5.5k wiggle) |
| Install packages (later) | A (Network), B (Private Smart Home), C (Private AI Estate) |
| Recurring | Concierge Network & Automation retainer |
| Channel | Realtor referral partner (not assumed equity) |

## Repo map

| Path | Purpose |
|------|---------|
| [legal/](legal/) | Realtor referral agreement template |
| [website/](website/) | Shareable Astro site (home, pilot plan, full docs) |
| [pilots/](pilots/) | Pilot playbook, case study template, pricing log |
| [delivery/](delivery/) | Survey, VLANs, HA baseline, SOW, client handoff |
| [operations/](operations/) | Concierge SLAs, updates, support process |
| [pipeline/](pipeline/) | CRM stages, year-1 capacity, low-voltage brief |

## 90-day focus

1. **Days 1–30:** Partner agreement, demo rack, sales assets, insurance/entity, UniFi supply.
2. **Days 31–60:** Two pilot installs, refine pricing, realtor introductions.
3. **Days 61–90:** First full-price Package B/C, Concierge default opt-in, CRM + capacity.

## Stack (default)

- Gateway/console: UniFi Dream Machine Pro (Wi‑Fi, Protect cameras, doorbell, UniFi Talk, media/NVR storage)
- Wi‑Fi: U7 / U6 APs (wired backhaul; mesh only as exception; reuse adoptable existing APs in pilots)
- Smart home: Home Assistant OS on dedicated hardware (100% local)
- Voice: FutureProofHomes Satellite1 + M5Stack Atom Echo (local Assist); Alexa/Siri optional bridge only
- Remote access: Tailscale or WireGuard (not open HA to the internet)
- AI: Assist first; local LLM only after network + HA stable 30 days
