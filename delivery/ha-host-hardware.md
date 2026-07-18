# Home Assistant Host — Hardware Standard

**Principle:** For this premium service we use a **solid mini PC**, not a Raspberry Pi. Pi is fine for hobbyists; our clients get something quiet, reliable, and professional-looking that sits next to the UniFi gear without looking DIY.

**Install method:** Home Assistant OS on bare metal (USB flash install). Ethernet only — no Wi‑Fi for the hub. Zigbee/Thread via USB stick (SkyConnect / Connect ZBT) as needed.

---

## Spec floor (every client)

| Spec | Minimum | Preferred |
|------|---------|-----------|
| CPU | Intel N100 or newer (N150 ideal) | N150 / N305 or Intel Core / AMD Ryzen if growing into local AI |
| RAM | 16 GB | 16–32 GB |
| Storage | 256 GB NVMe SSD | 512 GB NVMe |
| Network | 1× Gigabit Ethernet | 2.5GbE preferred |
| Noise | Quiet fan or fanless | Fanless if in living space / open closet |
| Form | Mini PC / NUC / business Micro | VESA-mountable or shelf-clean |

---

## Recommended options (2026)

### Tier A — Standard premium (default for ~$5k pilot)

Quiet, efficient, enough headroom for HA + add-ons + voice pipeline. Roughly **$180–$280**.

| Option | Why | Notes |
|--------|-----|-------|
| **GMKtec G3 Plus** (Intel N150) | Strong all-round HA pick; low power; expandable RAM/SSD | Great default “buy and image” box |
| **Beelink EQ14 / Mini S13** (N150) | Proven HAOS platform; dual LAN on some EQ models | Stick to 16 GB / 512 GB configs |
| **Beelink S12 Pro** (N100) | Cheaper, still solid if stock is good | Fine fallback; prefer N150 when price is close |

**Buy config:** 16 GB RAM · 512 GB NVMe · Ethernet · skip relying on Wi‑Fi.

---

### Tier B — Premium silent / nicer chassis

When the box is visible or the homeowner cares about silence/look. Roughly **$250–$450**.

| Option | Why | Notes |
|--------|-----|-------|
| **MINIX Z150-0dB** (N150, fanless) | Premium fanless feel; polished “appliance” look | Excellent for open closets / offices |
| **Minisforum UN100C / fanless N100–N150** | Silent 24/7; clean living-space install | Prefer fanless only if thermals stay cool in the rack space |
| **Intel NUC 13/14 Pro** (i3/i5) | Most “business PC” brand recognition | Higher cost; very professional; 3-year Intel warranty vibe |

---

### Tier C — Business Micro (looks most “IT / estate”)

Refurbished or new **Dell OptiPlex Micro**, **Lenovo ThinkCentre Tiny**, **HP EliteDesk Mini** (8th–12th gen or newer, 16 GB+, NVMe). Roughly **$150–$350** used/refurb; more new.

| Why | Notes |
|-----|-------|
| Looks like enterprise kit next to UniFi | Clients recognize Dell/Lenovo/HP |
| VESA mount behind a monitor or on rack shelf | Easy to hide |
| Often quieter than toy mini PCs | Verify Ethernet + UEFI; disable Secure Boot for HAOS |

**Best when:** rack/closet aesthetics matter and you want zero “gaming mini PC” vibe.

---

### Tier D — Future local AI (Package C / later)

Only when running a real local LLM on the same host (or a second box). Roughly **$500–$800+**.

| Option | Why |
|--------|-----|
| **Beelink SER8** (Ryzen 7 8845HS, 32 GB) | HA + small/medium local models on one box |
| **Minisforum UM890 / similar Ryzen AI mini** | More headroom for Frigate + LLM |

For the **pilot**, keep HA on Tier A/B and treat LLM as a separate decision later.

---

## What we skip for this service

| Skip | Why |
|------|-----|
| **Raspberry Pi** | SD wear, USB power drama, “hobby” look — fine for personal labs, not our premium SKU |
| **Home Assistant Green** | Official & easy, but limited headroom and appliance look; OK as emergency loaner only |
| **Underpowered sticks / 4–8 GB RAM** | Feels slow once add-ons + voice + dashboards stack up |

---

## Install checklist (any mini PC)

- [ ] UEFI boot enabled; **Secure Boot disabled**
- [ ] Flash **Home Assistant OS** (x86-64) to internal NVMe
- [ ] Wired to **Trusted** VLAN / Estate SSID network (Ethernet)
- [ ] Reserved DHCP / static IP documented
- [ ] USB Zigbee/Thread stick if needed (not Wi‑Fi for radios)
- [ ] Label chassis: `HA · [Client code] · Do not power off`
- [ ] First backup after onboarding

---

## Pilot BOM suggestion

**Default buy for client installs:** Tier A — **GMKtec G3 Plus or Beelink N150** with **16 GB / 512 GB**.  
**Upgrade if visible/silent:** Tier B **MINIX fanless** or **Intel NUC Pro**.  
**Upgrade if “looks like IT”:** Tier C **Dell/Lenovo/HP Micro**.

Update per-site cost in `sales/pilot-offer.md` BOM (~$200–$400 for Tier A/B with SSD).
