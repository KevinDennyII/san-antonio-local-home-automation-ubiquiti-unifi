# Home Assistant Baseline

Standard build for Package B/C installs. Keep sites similar so Concierge support stays fast.

---

## Hardware

| Item | Spec |
|------|------|
| Host | **Premium mini PC** (see [`../ha-host-hardware.md`](../ha-host-hardware.md)) — default Intel N150 class, 16 GB RAM, 512 GB NVMe. Not a Raspberry Pi. |
| RAM | 16GB minimum; 32GB if Package C LLM colocated (usually separate host) |
| Storage | 256GB+ NVMe SSD (512GB preferred) |
| Radios | Home Assistant Connect / SkyConnect (Zigbee/Thread) as needed |
| Network | Static or DHCP reservation on **Trusted** VLAN (Ethernet only) |

---

## Install checklist

- [ ] HA OS installed; onboarding complete  
- [ ] Owner Home Assistant user + Provider admin user (separate)  
- [ ] MFA / strong passwords; recovery codes printed for client envelope  
- [ ] Automatic backups enabled (local + encrypted offsite or NAS)  
- [ ] Tailscale or WireGuard on HA host / companion path documented  
- [ ] **Do not** port-forward 8123 to WAN  
- [ ] Mobile app for primary residents  
- [ ] Time zone America/Chicago; location set for sun/weather  

---

## HACS policy

| Allowed | Not allowed without change order |
|---------|----------------------------------|
| Widely used, maintained integrations needed for devices on SOW | Random themes/plugins “for fun” |
| Documented in site notes | Unmaintained custom components |

- [ ] HACS installed only if required  
- [ ] List custom items in `site-notes.md` for this client  

---

## Default dashboards (lovelace)

1. **Home** — presence summary, climate, alarms/locks status, weather  
2. **Lights** — by floor/area  
3. **Climate** — thermostats / zones  
4. **Security** — locks, garage, cameras (if any)  
5. **Outdoor** — irrigation, landscape, pool equipment if in scope  

Use Areas matching real rooms. Avoid dumping 80 entities on one page.

---

## Default automations (safe starters)

Only enable what the client wants at handoff:

| Automation | Trigger | Action |
|------------|---------|--------|
| Goodnight | Button / voice / time | Lights off selected areas; optional lock reminder notification |
| Away lights | Everyone leaves (person entities) | Optional scene — confirm with client |
| Notify lock | Lock jammed / unlocked unexpectedly | Notify owners |
| Backup reminder | Weekly | Provider checks via Concierge (not noisy to client) |

---

## Notifications

- [ ] Companion app notify for owners  
- [ ] Critical: locks, water leak (if sensors), HA offline (via Uptime Kuma or UniFi + Tailscale check on Provider side)  

---

## Presence

- [ ] Person entities for household  
- [ ] Device trackers: phones via companion app (preferred)  
- [ ] Optional BLE — only if surveyed  

---

## Energy (if meters / CT clamps exist)

- [ ] Energy dashboard configured  
- [ ] Otherwise mark “phase 2” in handoff  

---

## Voice standard (all installs, including pilot)

Local voice is standard on every Home Assistant install, not just Package C.

- [ ] Assist pipeline configured **local-first** (local wake word)  
- [ ] **FutureProofHomes Satellite1** in primary rooms (voice + music + presence)  
- [ ] **M5Stack Atom Echo** mic satellites in secondary rooms  
- [ ] Alexa / Siri only as an optional, clearly labeled bridge — never a dependency  

Full device list, placement, and setup steps: [`../voice-standard.md`](../voice-standard.md)

---

## Package C additions (after 30-day gate)

- [ ] Local LLM host separate; API URL in HA secrets  
- [ ] Assist wired to local LLM for household Q&A  
- [ ] Household rules doc linked from dashboard  

---

## Baseline `configuration.yaml` stub

See [`ha-baseline/configuration.yaml`](ha-baseline/configuration.yaml) — copy to new sites and expand via UI/packages. Prefer UI for most entities; keep YAML for packages you standardize.

---

## Site folder convention (Provider internal)

```
clients/[code]/
  survey.md
  vlan.md
  bom.md
  ha-backup-note.md
  site-notes.md
```

Do not commit client secrets to public git.
