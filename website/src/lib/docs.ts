import { readFileSync, existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { marked } from 'marked';

const marker = path.join('sales', 'notion-pilot-one-pager.md');

/** Resolve where markdown lives (synced content/ on Netlify, or repo root locally). */
function findDocsRoot(): string {
  const here = path.dirname(fileURLToPath(import.meta.url));
  const candidates = [
    // Preferred: website/content after sync-content prebuild
    path.join(process.cwd(), 'content'),
    path.resolve(here, '../../content'),
    // Repo root when cwd is website/
    path.resolve(process.cwd(), '..'),
    // Repo root when cwd is already the repo
    process.cwd(),
    // website/src/lib → repo root
    path.resolve(here, '../../..'),
  ];

  for (const dir of candidates) {
    if (existsSync(path.join(dir, marker))) return dir;
  }

  // Walk upward from cwd
  let dir = process.cwd();
  for (let i = 0; i < 8; i++) {
    if (existsSync(path.join(dir, marker))) return dir;
    if (existsSync(path.join(dir, 'content', marker))) return path.join(dir, 'content');
    const parent = path.dirname(dir);
    if (parent === dir) break;
    dir = parent;
  }

  throw new Error(
    `Could not locate docs (looked for ${marker}). cwd=${process.cwd()} import.meta.url=${import.meta.url}`,
  );
}

export const repoRoot = findDocsRoot();

export type DocEntry = {
  slug: string;
  title: string;
  section: string;
  description: string;
  file: string;
  shareable?: boolean;
};

/** Catalog of repo docs exposed on the site */
export const docsCatalog: DocEntry[] = [
  {
    slug: 'pilot-plan',
    title: 'Pilot plan (share with realtor)',
    section: 'Share',
    description: 'Short partner brief — Notion one-pager content.',
    file: 'sales/notion-pilot-one-pager.md',
    shareable: true,
  },
  {
    slug: 'pilot-offer',
    title: 'Pilot offer (internal)',
    section: 'Sales',
    description: 'Full scope, BOM, PoE notes, economics, one-breath pitch.',
    file: 'sales/pilot-offer.md',
  },
  {
    slug: 'rate-card',
    title: 'Rate card',
    section: 'Sales',
    description: 'Pilot pricing and later estate packages.',
    file: 'sales/rate-card.md',
  },
  {
    slug: 'one-pager',
    title: 'Marketing one-pager',
    section: 'Sales',
    description: 'Leave-behind messaging and problem/offer framing.',
    file: 'sales/one-pager.md',
  },
  {
    slug: 'sales-script',
    title: '5-minute sales script',
    section: 'Sales',
    description: 'Demo walkthrough script and objection handles.',
    file: 'sales/sales-script-5min.md',
  },
  {
    slug: 'faq',
    title: 'FAQ',
    section: 'Sales',
    description: 'HOA, builders, privacy, and security answers.',
    file: 'sales/faq-hoa-builders.md',
  },
  {
    slug: 'demo-rack',
    title: 'Demo rack BOM',
    section: 'Sales',
    description: 'Show-home / office demo hardware list.',
    file: 'sales/demo-rack-bom.md',
  },
  {
    slug: 'marketing-later',
    title: 'Marketing website (later)',
    section: 'Sales',
    description: 'Hold public ads until pilots are done.',
    file: 'sales/marketing-website-later.md',
  },
  {
    slug: 'ha-host',
    title: 'HA mini PC standard',
    section: 'Delivery',
    description: 'Premium mini PC options for Home Assistant.',
    file: 'delivery/ha-host-hardware.md',
  },
  {
    slug: 'voice-standard',
    title: 'Voice standard',
    section: 'Delivery',
    description: 'FutureProofHomes Satellite1 + Atom Echo.',
    file: 'delivery/voice-standard.md',
  },
  {
    slug: 'migration',
    title: 'Existing-home migration',
    section: 'Delivery',
    description: 'Cutover checklist for homes already occupied.',
    file: 'delivery/existing-home-migration-checklist.md',
  },
  {
    slug: 'survey',
    title: 'Site survey checklist',
    section: 'Delivery',
    description: 'Discovery before quoting.',
    file: 'delivery/site-survey-checklist.md',
  },
  {
    slug: 'vlan',
    title: 'VLAN design template',
    section: 'Delivery',
    description: 'Trusted / IoT / Guest / Cameras standard.',
    file: 'delivery/vlan-design-template.md',
  },
  {
    slug: 'ha-baseline',
    title: 'Home Assistant baseline',
    section: 'Delivery',
    description: 'Install and dashboard standards.',
    file: 'delivery/ha-baseline/README.md',
  },
  {
    slug: 'handoff',
    title: 'Client handoff',
    section: 'Delivery',
    description: 'How to run your house — leave-behind.',
    file: 'delivery/client-handoff.md',
  },
  {
    slug: 'sow',
    title: 'Statement of work',
    section: 'Delivery',
    description: 'SOW template for signed pilots.',
    file: 'delivery/sow-template.md',
  },
  {
    slug: 'referral',
    title: 'Realtor referral agreement',
    section: 'Legal',
    description: 'Channel partner terms template.',
    file: 'legal/realtor-referral-agreement.md',
  },
  {
    slug: 'concierge',
    title: 'Concierge SLA',
    section: 'Operations',
    description: 'Retainer tiers and response times.',
    file: 'operations/concierge-sla.md',
  },
  {
    slug: 'updates',
    title: 'Update cadence',
    section: 'Operations',
    description: 'UniFi and HA maintenance rhythm.',
    file: 'operations/update-cadence.md',
  },
  {
    slug: 'support',
    title: 'Support tickets',
    section: 'Operations',
    description: 'Ticket process and severity guide.',
    file: 'operations/support-ticket-process.md',
  },
  {
    slug: 'pilot-playbook',
    title: 'Pilot playbook',
    section: 'Pilots',
    description: 'How to run the first installs.',
    file: 'pilots/pilot-playbook.md',
  },
  {
    slug: 'case-study',
    title: 'Case study template',
    section: 'Pilots',
    description: 'Marketing case study + release.',
    file: 'pilots/case-study-template.md',
  },
  {
    slug: 'pricing-log',
    title: 'Pricing refinement log',
    section: 'Pilots',
    description: 'Track actuals vs quote.',
    file: 'pilots/pricing-refinement-log.md',
  },
  {
    slug: 'crm',
    title: 'CRM stages',
    section: 'Pipeline',
    description: 'Lead → Concierge pipeline.',
    file: 'pipeline/crm-stages.md',
  },
  {
    slug: 'capacity',
    title: 'Year-1 capacity',
    section: 'Pipeline',
    description: 'Install throughput and kill switches.',
    file: 'pipeline/year1-capacity.md',
  },
  {
    slug: 'low-voltage',
    title: 'Low-voltage sub brief',
    section: 'Pipeline',
    description: 'Cabling partner scope and QC.',
    file: 'pipeline/low-voltage-subcontractor-brief.md',
  },
];

export function getDoc(slug: string): DocEntry | undefined {
  return docsCatalog.find((d) => d.slug === slug);
}

export function readDocMarkdown(entry: DocEntry): string {
  const full = path.join(repoRoot, entry.file);
  if (!existsSync(full)) {
    return `# Missing file\n\nCould not find \`${entry.file}\`.`;
  }
  return readFileSync(full, 'utf8');
}

export function renderDocHtml(entry: DocEntry): string {
  const md = readDocMarkdown(entry);
  return marked.parse(md, { async: false }) as string;
}

export function docsBySection(): Record<string, DocEntry[]> {
  return docsCatalog.reduce(
    (acc, doc) => {
      (acc[doc.section] ||= []).push(doc);
      return acc;
    },
    {} as Record<string, DocEntry[]>,
  );
}
