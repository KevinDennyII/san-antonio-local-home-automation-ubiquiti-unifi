# VLAN Design Template — Luxury UniFi Homes

**Controller:** UniFi Network on UDM Pro  
**Principle:** Isolate IoT and cameras; Home Assistant on Trusted with controlled access to IoT.

---

## Standard networks

| Name | VLAN ID | Subnet (example) | Purpose | Wi‑Fi SSID |
|------|---------|------------------|---------|------------|
| Trusted | 10 | 10.10.10.0/24 | Phones, PCs, HA, admin | `Estate` |
| IoT | 20 | 10.10.20.0/24 | Bulbs, plugs, speakers, sensors | `Estate-IoT` |
| Guests | 30 | 10.10.30.0/24 | Visitors | `Estate-Guest` |
| Cameras | 40 | 10.10.40.0/24 | UniFi Protect / NVRs | (usually wired) |
| Management | 50 | 10.10.50.0/24 | APs, switches (optional) | (none) |

Adjust VLAN IDs/subnets per site; keep the **roles** identical across clients for supportability.

---

## Firewall / traffic rules (intent)

| Source | Destination | Action | Notes |
|--------|-------------|--------|-------|
| Guests | Trusted / IoT / Cameras | Deny | Internet only |
| IoT | Trusted | Deny | Block lateral movement |
| IoT | Internet | Allow (restrict later) | Many devices need cloud; document |
| Trusted | IoT | Allow | Phones/HA control path |
| Cameras | Trusted / IoT | Deny | Cameras stay in their lane |
| Trusted | Cameras | Allow | Viewing / Protect UI |
| HA (Trusted) | IoT | Allow | Integrations |
| HA (Trusted) | Cameras | Allow | If streaming into HA |
| Any | HA admin UI from WAN | Deny | Use Tailscale/WireGuard only |

**Defaults:**

- [ ] UPnP **disabled** (especially toward IoT)  
- [ ] Guest isolation enabled  
- [ ] WPA3 where client devices allow; WPA2/WPA3 mixed if needed  
- [ ] mDNS / IGMP as required for discovery (document if reflector used between Trusted↔IoT)  
- [ ] UniFi Teleport or Tailscale for admin remote — not port 8123 forwarded  

---

## SSIDs

| SSID | Network | Band | Notes |
|------|---------|------|-------|
| Estate | Trusted | 5/6 GHz preferred | Family devices |
| Estate-IoT | IoT | 2.4 GHz enabled | IoT friendliness |
| Estate-Guest | Guests | All | Password or guest portal; schedule optional |

---

## Device placement cheat sheet

| Device type | Network |
|-------------|---------|
| Home Assistant host | Trusted (reserved DHCP or static) |
| UniFi APs / switches | Management or Trusted |
| Phones / laptops / tablets | Trusted |
| Zigbee/Matter hubs (if Ethernet) | IoT (or Trusted if HA is the radio host) |
| Wi‑Fi bulbs, plugs, speakers | IoT |
| Cameras | Cameras |
| Printers | Trusted or IoT (prefer Trusted if scan-to-PC) |
| Work VPN machines | Trusted |

---

## IP reservations (fill per site)

| Host | MAC | IP | Network |
|------|-----|-----|---------|
| homeassistant | | 10.10.10.x | Trusted |
| udm-pro | | | |
| | | | |

---

## Commissioning checklist

- [ ] All VLANs created and wired to switch ports / AP groups  
- [ ] Rules tested: guest phone cannot ping HA; trusted can control IoT light  
- [ ] Protect (if any) recording path verified on Cameras VLAN  
- [ ] Documented in client handoff network page  
- [ ] Admin MFA enabled on UniFi account  

---

## Site deviations

Record any exception (mesh hop, flat network temporary, etc.):

| Exception | Why | Removable by |
|-----------|-----|--------------|
| | | |
