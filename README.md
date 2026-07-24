# ColdProof

**Cold-chain assurance infrastructure — proof of safe delivery.**

ColdProof gives pharmaceutical companies, logistics operators and healthcare
organisations a verifiable record of every condition and handover across the
cold chain. It monitors temperature, opening events and custody changes
throughout the journey, creating evidence of *whether a temperature-sensitive
shipment remained within its required conditions* — not simply that it arrived.

> **Every shipment. Every handover. Verifiable.**

This repository contains the marketing website: a premium, responsive,
single-page B2B site.

---

## Tech stack

- **Next.js 14** (App Router)
- **React 18** + **TypeScript**
- **Tailwind CSS** with a custom brand theme
- **next/font** for the Sora + Inter typefaces
- Lightweight CSS/SVG animation only — no heavyweight animation libraries

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

### Production build

```bash
npm run build
npm run start
```

## Project structure

```
app/
  layout.tsx        Root layout, fonts, metadata, no-JS reveal fallback
  page.tsx          Single-page composition of all sections
  globals.css       Brand tokens, component classes, reveal utilities
  icon.svg          Favicon (ColdProof mark)
components/
  Logo.tsx          Wordmark + mark (works in monochrome, small sizes)
  Navigation.tsx    Sticky nav with scroll-aware theming + mobile menu
  StatusBadge.tsx   Verified / alert / info / neutral condition indicator
  TemperatureGraph.tsx  SVG line chart with safe-range band + excursion markers
  CustodyTimeline.tsx   Chain-of-custody checkpoint timeline
  HeroDashboard.tsx     Animated shipment dashboard (confirmed ⇄ excursion)
  ShipmentComparison.tsx  Interactive CP-2048 vs CP-2049 demo + replay
  ContactForm.tsx   Pilot request form (demo only, nothing transmitted)
  Reveal.tsx        Progressive scroll-reveal wrapper
  SectionHeading.tsx    Shared section header
  sections/         Hero, Problem, Solution, HowItWorks, LiveDemo,
                    BusinessValue, ProductInterface, UseCases, Technology,
                    FinalCta, Footer
```

## Brand tokens

Defined in `tailwind.config.ts`:

| Token | Hex | Use |
| --- | --- | --- |
| `navy` | `#071A2B` | Trust, enterprise credibility |
| `ice` | `#DFF6FF` | Monitoring / data on dark surfaces |
| `cyan` | `#00B8D9` | Temperature & data accents |
| `mint` | `#7FE0C3` | Successful verification only |
| `alert` | `#FF6B35` | Warnings, excursions, review states only |
| `softwhite` | `#F7FAFC` | Light section backgrounds |
| `ink` | `#102332` | Body text |

Typography: **Sora** for headings, numbers and key messages; **Inter** for
body, navigation and interface text.

## Demo data

The temperature graphs, shipment comparison and dashboard use **sample data
only**. No real payment, medical or blockchain transaction takes place. The
contact form does not transmit or store submissions.

## Prototype status

ColdProof is currently being developed as a proof of concept. Product
functionality, integrations and commercial availability are under development.
Nothing in this project constitutes a claim of regulatory approval, medical
certification, validated pharmaceutical compliance, production readiness or
guaranteed product safety.
