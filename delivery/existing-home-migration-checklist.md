# Existing-Home Migration Checklist

For pilot clients **already living in the home** with existing internet, possibly existing access points, and possibly Alexa/Siri. Goal: move them onto UniFi + local Home Assistant with minimal disruption.

Pairs with [`../sales/pilot-offer.md`](../sales/pilot-offer.md) and [`vlan-design-template.md`](vlan-design-template.md).

---

## 1. Discovery (before ordering)

- [ ] ISP + plan; modem/ONT model; can it go **bridge mode**?
- [ ] Current router/APs (brand, model) — note anything on banned/flagged lists (e.g. certain Linksys/consumer imports) for the security talking point
- [ ] Existing APs: UniFi-adoptable? Reuse, or replace?
- [ ] **AP count plan** (wired vs mesh) and **PoE budget**:
  - [ ] Gateway model (UDM Pro / SE / Pro Max / newer) — how many built-in PoE ports?
  - [ ] Need a **separate PoE switch**? (Rule: 3+ wired APs → usually yes; even 2 APs may need one if gateway has little/no PoE)
- [ ] Wi‑Fi pain points / dead zones
- [ ] Existing smart devices list (brand + protocol: Wi‑Fi / Zigbee / Z‑Wave / Matter / cloud-only)
- [ ] Existing voice: Alexa? Siri/HomeKit? Google? Keep as bridge or retire?
- [ ] Interest in UniFi add-ons: cameras, video doorbell, landline (UniFi Talk), media/photo storage
- [ ] Where the UDM Pro + HA host will live (closet, office, rack, shelf)
- [ ] Wiring partner needed? (attic/wall runs) or all wireless/reuse?

---

## 2. Confirm scope (protect the ~$5,000 band)

- [ ] Core pilot (~$5,000; $4k–$5.5k wiggle): UDM Pro + rack plan + U6/U7 APs/mesh + Home Assistant + FutureProofHomes Satellite1 voice + up to 20 devices
- [ ] Land price in writing (case-study discount? larger home uptick?)
- [ ] Written confirmation via `sow-template.md` (mark **Pilot**)
- [ ] Cameras / doorbell / landline / storage: still undecided — out of scope for now

---

## 3. Cutover plan (minimize downtime)

Client is living there — plan for a short outage window.

- [ ] Schedule cutover window (tell client internet drops ~30–60 min)
- [ ] Pre-stage UDM Pro config as much as possible before swap
- [ ] Modem to bridge mode; UDM Pro as gateway
- [ ] Bring up VLANs: **Trusted / IoT / Guest / Cameras**
- [ ] Migrate/adopt existing UniFi APs, or install new AP(s) for coverage
- [ ] Recreate Wi‑Fi SSIDs (keep same SSID/password if client wants devices to reconnect automatically — decide per home)
- [ ] Verify internet + roaming on each floor before removing old gear
- [ ] Old router: retire or leave powered off (label, don't discard until stable 1 week)

---

## 4. UniFi ecosystem (as scoped)

- [ ] Console tour: everything from the UDM Pro
- [ ] Protect cameras / video doorbell (if in scope) on Cameras VLAN + local NVR storage
- [ ] UniFi Talk landline (if in scope)
- [ ] Media / video / photo local storage configured

---

## 5. Home Assistant

- [ ] HA host on Trusted VLAN (reserved IP)
- [ ] Onboard existing devices (up to 20 in pilot); move IoT to IoT SSID/VLAN
- [ ] Dashboards: lights, climate, locks, cameras, doorbell
- [ ] Backups + remote support tunnel (no port-forwarding)
- [ ] Local voice per [`voice-standard.md`](voice-standard.md)

---

## 6. Existing Alexa / Siri decision

| Client wants | Do this |
|--------------|---------|
| Keep Alexa/Siri for convenience | Set up HA bridge; expose only chosen entities; label cloud vs local |
| Go fully private | Retire cloud voice; FutureProofHomes/Atom Echo only |
| Undecided | Default to local voice working first; add bridge later if asked |

**Always:** critical automations (lights, locks) stay local and do not depend on Alexa/Siri.

---

## 7. Verify + handoff

- [ ] Kill-the-cloud test: disconnect WAN briefly — confirm local lights + local voice still work (the "Amazon outage" proof)
- [ ] Every planned device controllable from HA dashboard
- [ ] Guest Wi‑Fi isolated from Trusted
- [ ] Client handoff doc + recovery codes (`client-handoff.md`)
- [ ] 30-min training
- [ ] Ask for testimonial + referral; log actuals in `../pilots/pricing-refinement-log.md`

---

## Talking point during cutover

> "We're moving you off consumer gear onto UniFi — business-grade, properly segmented, and not on the banned-equipment lists. When we're done, one console runs your Wi‑Fi, cameras, and doorbell, and Home Assistant runs your home locally, even if the internet or Amazon has a bad day."
