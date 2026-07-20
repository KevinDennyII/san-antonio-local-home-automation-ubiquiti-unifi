# Pilot Offer — Private Network & Local Smart Home

**Status:** Active pilot (our "first go"). This is the offer we sell now; the larger A/B/C estate packages come later once pilots prove out.

**Pilot price:** **$5,000 typical** (wiggle room **$4,000–$5,500**). Turnkey: we buy the equipment, a wiring partner handles physical runs if needed, and **you (Provider) do all configuration.**

**Wiggle guidance (internal):**
- **$5,000** — default / list for a normal existing-home pilot  
- **$4,000–$4,500** — early case-study homes (photos, referral, feedback) or simple coverage (few APs, light wiring, gateway PoE enough)  
- **$5,500** — larger home, more APs/mesh, **dedicated PoE switch required**, harder cutover, or 2 Satellite1 speakers

### PoE rule of thumb (from install reality)

UniFi access points need **Power over Ethernet (PoE)**. Keep this in mind on every pilot:

- **AP count drives the switch.** Depending on how many APs (and which models), you will often need a **separate UniFi PoE switch** — not just the Dream Machine.
- **The UDM Pro family has little or no PoE to spare.** Classic UDM Pro / Pro Max: **no PoE** (plan a PoE switch). UDM SE / some newer “UDMP2”-class units: **a few PoE ports, but not many** — fine for 1–2 APs, not a whole multi-AP home.
- **Pilot default:** if you’re installing **3+ wired APs** (or cameras later), budget a small **8-port PoE switch** in the rack next to the UDM. That cost is part of why the price has wiggle room toward **$5,500**.
- Mesh units that are wireless backhaul still need power at the remote location (injector or PoE if you can run cable).

Do **not** put PoE switch jargon on the realtor one-pager — fold it into “coverage needs / home size” when you quote.

**Who it's for:** People **already in their homes** with existing internet and possibly existing access points. We migrate them into the UniFi ecosystem and stand up fully local Home Assistant with private voice.

---

## The pitch (why they switch)

1. **Security-first control.** Everyday routers (Linksys and similar) often have known configuration exploits. You want a system you control, built with security first — **Ubiquiti UniFi is that.** Better, more convenient, efficient, and more secure than typical consumer Wi‑Fi.
2. **Banned / flagged consumer gear.** Move off equipment that shows up on government/enterprise banned or flagged lists; UniFi is a cleaner alternative.
3. **One ecosystem (ready for later).** Networking runs from the UniFi console in the **UDM Pro** — with room to add cameras, video doorbell, landline, and media storage later (not in the flat pilot yet).
4. **Closed local automation.** Home Assistant is private home automation that runs on your network. **If Amazon or a cloud provider has a giant outage, your home still works.**
5. **Private voice.** FutureProofHomes Satellite1 speaker(s) with local wake words — private voice on their network.
6. **No middleman.** They're not under the thumb of a vendor who can easily access their data or get hacked with ease.

---

## What's included in the ~$5,000 pilot (confirmed scope)

This is exactly what we install and configure in the pilot. Cameras, doorbells, landline, and storage are **not decided yet** — see "Not in the pilot yet" below.

### 1. UniFi foundation (migration)
- Install and configure **UDM Pro** as the new gateway/console
- **Plan rack / placement** for the UDM Pro (where it lives, power, cooling, mounting)
- Migrate existing internet handoff; keep or adopt existing APs where compatible
- **U6 or U7 APs**, plus **U6/U7 mesh** where a wired run isn't practical, for whole-home coverage
- Network segmentation: **Trusted / IoT / Guest / Cameras** VLANs (see `delivery/vlan-design-template.md`)
- WPA3, guest Wi‑Fi, UPnP off, admin MFA

### 2. Home Assistant (local automation)
- Dedicated Home Assistant host on the Trusted VLAN
- Discovery + onboarding of existing smart devices (up to **20** in pilot scope)
- Core dashboards: lights, climate, locks
- Encrypted remote support tunnel (Tailscale/WireGuard) — HA never exposed to the open internet
- Automated backups

### 3. Private voice
- **FutureProofHomes Satellite1** speaker(s) as the local voice
- Home Assistant Assist voice pipeline configured with **their own local wake word(s)**

### 4. Handoff
- Client handoff doc + recovery codes (see `delivery/client-handoff.md`)
- 30 minutes of "how to run your house" training

---

## Not in the pilot yet (still figuring out)

We have **not decided** whether we purchase/install these, so they are excluded from the ~$5,000 pilot for now. The UniFi console is ready for them when we do decide:

- UniFi Protect **cameras**
- **Video doorbell**
- **UniFi Talk** landline / VoIP
- Local **media / video / photo storage** (NVR drives)
- M5Stack **Atom Echo** extra mic satellites (cheap add for more rooms)

When we settle on how we handle these (who buys, what we mark up), move them into the offer or quote them per home.

---

## Reference equipment (pilot BOM)

Adjust per home; goal is to keep hardware affordable so config value carries the price.

| Item | Role | Indicative cost |
|------|------|-----------------|
| UniFi Dream Machine Pro (or SE / newer Pro-class) | Gateway + console | ~$380–$500 |
| UniFi AP (U6/U7) ×1–2 (if needed) | Coverage; reuse existing where possible | ~$100–$180 ea |
| U6/U7 mesh unit (if needed) | Coverage where no wired run | ~$100–$180 ea |
| UniFi PoE switch (8-port Lite/Pro) | **Often required** — UDM has few/no PoE ports; powers APs | ~$100–$300 |
| Rack / mount / cabling misc | UDM + switch placement + runs by wiring partner | ~$50–$350 |
| Home Assistant host (mini PC — see `delivery/ha-host-hardware.md`) | Local automation host; **not** a Raspberry Pi | ~$180–$400 |
| FutureProofHomes Satellite1.1 ×1–2 | Private voice speaker | ~$135 ea |

**Typical hardware subtotal (confirmed scope):** ~$1,000–$1,800 (higher when a PoE switch + more APs are needed).

*Not included above (undecided): cameras, doorbell, landline, NVR storage, Atom Echo mics.*

---

## Pilot economics (be honest with yourself)

| Line | Pilot estimate |
|------|----------------|
| Pilot price (typical) | **$5,000** ($4,000–$5,500 band) |
| Equipment (confirmed scope) | ~$1,000–$1,800 |
| Wiring partner (if used) | ~$0–$500 |
| **Left for your config time at $5K** | **~$2,700–$4,000** |

Confirmed pilot = **UDM Pro + APs/mesh + Home Assistant + Satellite1 voice**. Cameras, doorbell, landline, and storage are intentionally **out of scope until we decide how we handle them** — that keeps the ~$5,000 band predictable.

**Why $5,000 with wiggle:** fair for your hours after gear; still feels like a pilot vs later estate pricing. Use the low end for true case-study partners only. Log actuals in `pilots/pricing-refinement-log.md`.

---

## Scope guardrails (protect the flat price)

- Included device onboarding: **20** devices. Beyond that = add-on.
- Cloud-only devices: supported as **limited support**, disclosed up front.
- Undecided / out of scope for now: cameras, video doorbell, UniFi Talk landline, NVR storage, Atom Echo mics, extra Satellite1 units beyond 2, whole-home rewire.
- Alarm/life-safety monitoring stays with licensed vendors.
- Custom automation beyond the core dashboards: hourly (set your rate).

---

## Pilot flow

1. Quick walkthrough / needs call (existing internet, APs, devices?)
2. Confirm ~$5,000 scope (and where you land in the $4k–$5.5k band) in writing (use `delivery/sow-template.md`, mark **Pilot**)
3. Order equipment
4. Wiring partner runs cable if needed
5. **You** configure UniFi → Home Assistant → FutureProofHomes Satellite1 voice (local wake words)
6. Handoff + training + ask for a testimonial/referral

---

## What to say in one breath

> "Everyday consumer routers like Linksys often have known weak spots. We upgrade your home to Ubiquiti UniFi — a more secure, reliable setup you actually control. Then we set up Home Assistant as a private, closed home-automation system that runs on your network: lights, climate, and routines under your roof, not Amazon’s cloud — with an optional private voice speaker and your own wake word. Essential automations can keep working even during an internet or cloud outage. The pilot is typically about $5,000, and we handle the equipment, setup, and configuration. Cameras and a video doorbell can be added later once we scope them."
