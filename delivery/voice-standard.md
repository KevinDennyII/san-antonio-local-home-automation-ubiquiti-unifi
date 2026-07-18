# Voice Standard — FutureProofHomes Satellite1 + Atom Echo

Our **official local smart-speaker standard** for Home Assistant installs. Keep every home on the same voice stack so setup and support are repeatable.

**Principle:** Voice stays **local**. No always-on cloud microphone required. Alexa/Siri are optional bridges only, never the brain.

---

## Devices

| Device | Role | Indicative cost | Use when |
|--------|------|-----------------|----------|
| **FutureProofHomes Satellite1.1 Smart Speaker** | Primary local voice + room audio + presence/temp/humidity/light sensors | ~$135 | Main living rooms, kitchen, primary bedroom — anywhere they also want music + good mic |
| **FutureProofHomes Satellite1 Dev Kit** | Same brains, DIY enclosure | ~$135 | Only if you're comfortable assembling; prefer pre-assembled for client homes |
| **M5Stack Atom Echo** | Tiny, cheap extra mic satellite | ~$13 | Secondary rooms, hallways, offices — coverage on a budget |

**Optional add-on:** LD2450 mmWave sensor slots into Satellite1 for human presence detection (room-based automations).

---

## Why this stack

- **Private by design:** Satellite1 runs the Home Assistant voice pipeline with on-device wake word; commands stay on the network.
- **Real speaker:** 20–25W amp, woofer + tweeter — doubles as a Music Assistant multi-room speaker, so it replaces an Echo/HomePod, not just adds a mic.
- **Sensors built in:** temp, humidity, light, optional presence — powers automations without extra hardware.
- **Open / ESPHome:** firmware is open source and OTA-updatable; no vendor lock-in.
- **Atom Echo fills gaps cheaply:** for ~$13 you cover extra rooms with a mic-only satellite.

---

## Placement plan (per home)

| Room type | Recommend |
|-----------|-----------|
| Great room / kitchen / primary bedroom | Satellite1.1 (voice + music + presence) |
| Secondary bedrooms, office, hallway | Atom Echo (mic-only) |
| Bathrooms / wet areas | Skip or Atom Echo well away from water |
| Outdoor | Not rated — skip |

Pilot default: **1–2 Satellite1** + **2–4 Atom Echo**.

---

## Setup checklist

### Home Assistant side
- [ ] HA Assist configured with a local wake word
- [ ] Local speech-to-text / text-to-speech pipeline selected (local first; note if any cloud TTS used)
- [ ] Music Assistant installed if client wants multi-room audio
- [ ] Voice devices on **Trusted** or **IoT** VLAN per site (document which; must reach HA)

### Satellite1
- [ ] Power via included 30W USB-C PD adapter
- [ ] Device appears in HA as "Satellite1"; adopt it
- [ ] Update ESPHome firmware OTA to current stable
- [ ] Assign area; enable temp/humidity/light sensors
- [ ] (Optional) install LD2450 mmWave; tune presence zones
- [ ] Test wake word + a real command (lights) + a music request
- [ ] Set hardware mute expectations with client (privacy button)

### Atom Echo
- [ ] Flash HA voice-assistant firmware (ESPHome / HA voice satellite)
- [ ] Adopt in HA; assign area
- [ ] Test wake word + command
- [ ] Note: mic-only, no speaker music — set client expectations

---

## Alexa / Siri bridge (optional, only if client asks)

- [ ] Explain: bridge = convenience, not the brain; those still use their vendor cloud
- [ ] Expose only chosen HA entities to the bridge
- [ ] Label clearly in handoff which commands are local vs cloud
- [ ] Never make Alexa/Siri a dependency for critical automations (lights/locks stay local)

---

## Client talking point

> "These speakers listen and think on your own network. Ask for lights or music and it never has to phone Amazon or Apple. If the internet or a cloud goes down, your voice control still works."

---

## Support notes (for Concierge)

- Firmware: OTA update Satellite1 during monthly HA maintenance window (see `operations/update-cadence.md`).
- Keep a spare Atom Echo in the truck kit — cheap insurance.
- If wake word gets flaky after an HA update, re-test the Assist pipeline before touching hardware.
