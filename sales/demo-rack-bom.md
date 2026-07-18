# Demo Rack — Bill of Materials & Build Guide

**Purpose:** Portable / office show-home rack for 5-minute “wow” demos with the realtor and luxury clients.  
**Location:** Office, apartment, or small staging closet — not a full estate install.

---

## Hardware BOM (order list)

| Qty | Item | Role | Notes |
|-----|------|------|-------|
| 1 | UniFi Dream Machine Pro | Gateway / controller | Core of every Package A+ story |
| 1 | UniFi PoE switch (8–16 port Lite/Pro) | Power APs + demo cams | Match PoE budget to APs |
| 2 | U6 or U7 access points | Wi‑Fi demo | Ceiling/wall mounts; show wired backhaul |
| 1 | Short patch kit + rack shelf / wall board | Clean presentation | Labeled cables |
| 1 | Mini PC or NUC (16GB+ RAM, SSD) | Home Assistant OS host | Dedicated — do not dual-purpose as daily laptop |
| 1 | Small UPS (optional but recommended) | Clean power story | 15–30 min runtime |
| 1–2 | UniFi Protect camera(s) (optional) | Camera VLAN story | Or use cheap RTSP cam for HA only |
| 4–8 | Demo smart devices | HA control | Prefer local: Zigbee bulbs, Matter plug, thermostat or lock trainer |
| 1 | Zigbee/Thread stick (SkyConnect / ZBT-*) | Local radio | Avoid cloud-only demo devices when possible |
| 1 | Tablet / iPad on stand | Dashboard + Assist | Kiosk or HA companion |
| 1 | Speaker for Assist (optional) | Voice | HA voice satellite or compatible speaker |

**Spares kit (stock):** 1× AP, short Cat6 patch set, spare PoE injector, USB stick with HA backup.

**Estimated demo investment:** ~$2,000–$4,500 depending on UDM Pro vs used gear and camera count.

---

## Network layout (demo)

| Network / VLAN | Purpose | Demo talking point |
|----------------|---------|-------------------|
| Trusted | Phones, HA, admin | “Your family’s devices” |
| IoT | Bulbs, plugs, sensors | Isolated from trusted |
| Guests | Visitor SSID | Captive or simple guest Wi‑Fi |
| Cameras | Protect / RTSP | Cameras cannot browse your laptops |

Firewall: IoT cannot initiate to Trusted; HA can reach IoT for control.

---

## Home Assistant demo content (minimum)

- Dashboard: Lights, plugs, climate (or fake climate entity), cameras  
- One automation: “Goodnight” — lights off + guest Wi‑Fi reminder  
- Assist: turn on/off a named light by voice  
- Backup visible in settings (shows professionalism)  
- Tailscale (or WireGuard) installed — *mention* remote support without port-forwarding HA  

---

## Physical setup checklist

- [ ] Rack/board labeled: WAN · UDM · Switch · APs · HA  
- [ ] SSID names match luxury language (e.g. `Estate`, `Estate-IoT`, `Estate-Guest`) — not defaults  
- [ ] Tablet brightness high; dashboard in dark/light theme matching brand  
- [ ] One QR or short URL to one-pager / rate card  
- [ ] Power strip managed; no cable spaghetti in client view  
- [ ] 5-minute script rehearsed (see `sales-script-5min.md`)

---

## Realtor staging tips

- Keep the rack **visible but tidy** during consultations  
- Let the realtor run the first 30 seconds (“this is who I bring in for estate Wi‑Fi and private AI”)  
- You take over for VLAN + HA + privacy contrast vs Alexa-only  
- End with: paid survey CTA and leave rate card
