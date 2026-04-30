import productVial from "@/assets/product-vial.jpg";

export type Category = "Research" | "Cognitive" | "Recovery" | "Longevity" | "Metabolic";

export interface Product {
  id: string;
  slug: string;
  name: string;
  code: string;
  category: Category;
  purity: string;
  size: string;
  price: number;
  image: string;
  short: string;
  description: string;
  molecularFormula: string;
  molecularWeight: string;
  casNumber: string;
  storage: string;
  coaUrl?: string;
}

export const products: Product[] = [
  {
    id: "p-001", slug: "bac-water-30ml", name: "BAC Water", code: "RNV-001",
    category: "Research", purity: "Sterile", size: "30ml", price: 7.50, image: productVial,
    short: "Bacteriostatic water for peptide reconstitution in laboratory settings.",
    description: "Bacteriostatic water (0.9% benzyl alcohol in sterile water) used for the reconstitution and dilution of lyophilised research peptides. Suitable for laboratory use only.",
    molecularFormula: "H₂O",
    molecularWeight: "18.02 g/mol",
    casNumber: "7732-18-5",
    storage: "Store at room temperature. Do not freeze. Keep sterile.",
  },
  {
    id: "p-002", slug: "bpc-157-10mg", name: "BPC-157", code: "RNV-002",
    category: "Recovery", purity: ">99%", size: "10mg", price: 25.00, image: productVial,
    short: "Pentadecapeptide widely studied in tissue repair research.",
    description: "BPC-157 is a synthetic pentadecapeptide derived from a protective protein found in gastric juice. Used in laboratory research investigating cellular repair pathways and connective tissue models.",
    molecularFormula: "C62H98N16O22",
    molecularWeight: "1419.55 g/mol",
    casNumber: "137525-51-0",
    storage: "Store lyophilised at -20 °C, protected from light.",
    coaUrl: "#",
  },
  {
    id: "p-003", slug: "bpc-157-tb-500-blend", name: "BPC-157 & TB-500", code: "RNV-003",
    category: "Recovery", purity: ">99%", size: "10mg / 5mg", price: 45.00, image: productVial,
    short: "Research peptide blend combining BPC-157 and TB-500.",
    description: "A research blend combining BPC-157 (10mg) and TB-500 (5mg). Both peptides are studied in tissue repair, actin regulation, and cell migration research.",
    molecularFormula: "C62H98N16O22 / C77H131N23O33",
    molecularWeight: "1419.55 / 1888.12 g/mol",
    casNumber: "137525-51-0 / 77591-33-4",
    storage: "Store lyophilised at -20 °C, protected from light.",
    coaUrl: "#",
  },
  {
    id: "p-004", slug: "cjc-1295-no-dac-2mg", name: "CJC-1295 no DAC", code: "RNV-004",
    category: "Metabolic", purity: ">99%", size: "2mg", price: 18.00, image: productVial,
    short: "GHRH analogue studied in growth hormone secretion research.",
    description: "CJC-1295 without DAC is a synthetic analogue of growth hormone releasing hormone (GHRH) studied in laboratory research on pulsatile GH secretion pathways.",
    molecularFormula: "C149H246N44O42S",
    molecularWeight: "3367.93 g/mol",
    casNumber: "863288-34-0",
    storage: "Store lyophilised at -20 °C.",
    coaUrl: "#",
  },
  {
    id: "p-005", slug: "dsip-2mg", name: "DSIP", code: "RNV-005",
    category: "Cognitive", purity: ">99%", size: "2mg", price: 18.00, image: productVial,
    short: "Delta sleep-inducing peptide studied in sleep and stress research.",
    description: "DSIP (Delta Sleep-Inducing Peptide) is a neuropeptide studied for its role in sleep regulation and stress response pathways in laboratory models.",
    molecularFormula: "C35H48N10O15",
    molecularWeight: "848.82 g/mol",
    casNumber: "62568-57-4",
    storage: "Store lyophilised at -20 °C.",
    coaUrl: "#",
  },
  {
    id: "p-006", slug: "epithalon-10mg", name: "Epithalon", code: "RNV-006",
    category: "Longevity", purity: ">99%", size: "10mg", price: 15.00, image: productVial,
    short: "Tetrapeptide studied in telomere and longevity research.",
    description: "Epithalon is a synthetic tetrapeptide investigated in research focused on telomerase activity and cellular ageing models.",
    molecularFormula: "C14H22N4O9",
    molecularWeight: "390.35 g/mol",
    casNumber: "307297-39-8",
    storage: "Store lyophilised at -20 °C.",
    coaUrl: "#",
  },
  {
    id: "p-007", slug: "ghk-cu-50mg", name: "GHK-Cu", code: "RNV-007",
    category: "Longevity", purity: ">99%", size: "50mg", price: 30.00, image: productVial,
    short: "Copper tripeptide examined in regenerative research.",
    description: "GHK-Cu is a naturally occurring copper-binding tripeptide used extensively in cellular and dermal research models.",
    molecularFormula: "C14H24CuN6O4",
    molecularWeight: "403.93 g/mol",
    casNumber: "89030-95-5",
    storage: "Store lyophilised at -20 °C, protected from light.",
    coaUrl: "#",
  },
  {
    id: "p-008", slug: "ipamorelin-2mg", name: "Ipamorelin", code: "RNV-008",
    category: "Metabolic", purity: ">99%", size: "2mg", price: 35.00, image: productVial,
    short: "Selective growth hormone secretagogue for metabolic research.",
    description: "Ipamorelin is a pentapeptide growth hormone secretagogue studied for its selective GH-releasing properties in metabolic research models.",
    molecularFormula: "C38H49N9O5",
    molecularWeight: "711.86 g/mol",
    casNumber: "170851-70-4",
    storage: "Store lyophilised at -20 °C.",
    coaUrl: "#",
  },
  {
    id: "p-009", slug: "kisspeptin-2mg", name: "Kisspeptin", code: "RNV-009",
    category: "Research", purity: ">99%", size: "2mg", price: 25.00, image: productVial,
    short: "Neuropeptide studied in reproductive and endocrine research.",
    description: "Kisspeptin is a neuropeptide involved in the regulation of the reproductive system via the hypothalamic-pituitary axis, studied in endocrine research models.",
    molecularFormula: "C63H83N15O14S",
    molecularWeight: "1302.49 g/mol",
    casNumber: "374683-15-5",
    storage: "Store lyophilised at -20 °C.",
    coaUrl: "#",
  },
  {
    id: "p-010", slug: "kpv-10mg", name: "KPV", code: "RNV-010",
    category: "Recovery", purity: ">99%", size: "10mg", price: 25.00, image: productVial,
    short: "Anti-inflammatory tripeptide studied in intestinal research.",
    description: "KPV is a tripeptide derived from the C-terminal region of alpha-MSH, studied for its anti-inflammatory properties in intestinal and cellular research models.",
    molecularFormula: "C17H29N5O5",
    molecularWeight: "383.44 g/mol",
    casNumber: "84674-34-0",
    storage: "Store lyophilised at -20 °C.",
    coaUrl: "#",
  },
  {
    id: "p-011", slug: "mots-c-5mg", name: "MOTS-C", code: "RNV-011",
    category: "Longevity", purity: ">99%", size: "5mg", price: 24.00, image: productVial,
    short: "Mitochondrial-derived peptide studied in metabolic longevity research.",
    description: "MOTS-C is a 21-amino-acid mitochondrial-derived peptide investigated for its role in metabolic regulation and cellular energy homeostasis in ageing research.",
    molecularFormula: "C76H135N25O21",
    molecularWeight: "1834.08 g/mol",
    casNumber: "1627580-64-6",
    storage: "Store lyophilised at -20 °C.",
    coaUrl: "#",
  },
  {
    id: "p-012", slug: "pt-141-10mg", name: "PT-141", code: "RNV-012",
    category: "Research", purity: ">99%", size: "10mg", price: 18.00, image: productVial,
    short: "Melanocortin receptor agonist studied in behavioural research.",
    description: "PT-141 (Bremelanotide) is a synthetic melanocortin receptor agonist studied in research related to melanocortin pathways and behavioural models.",
    molecularFormula: "C50H68N14O10",
    molecularWeight: "1025.18 g/mol",
    casNumber: "189691-06-3",
    storage: "Store lyophilised at -20 °C.",
    coaUrl: "#",
  },
  {
    id: "p-013", slug: "selank-10mg", name: "Selank", code: "RNV-013",
    category: "Cognitive", purity: ">99%", size: "10mg", price: 20.00, image: productVial,
    short: "Anxiolytic peptide studied in behavioural research.",
    description: "Selank is a synthetic heptapeptide derived from tuftsin, used in laboratory research exploring anxiolytic and nootropic mechanisms.",
    molecularFormula: "C33H57N11O9",
    molecularWeight: "751.87 g/mol",
    casNumber: "129954-34-3",
    storage: "Store lyophilised at -20 °C.",
    coaUrl: "#",
  },
  {
    id: "p-014", slug: "semax-10mg", name: "Semax", code: "RNV-014",
    category: "Cognitive", purity: ">99%", size: "10mg", price: 20.00, image: productVial,
    short: "Heptapeptide investigated in neuroprotection studies.",
    description: "Semax is a synthetic heptapeptide analogue of ACTH(4-10), widely used in research focused on neurotrophic and cognitive pathways.",
    molecularFormula: "C37H51N9O10S",
    molecularWeight: "813.93 g/mol",
    casNumber: "80714-61-0",
    storage: "Store lyophilised at -20 °C.",
    coaUrl: "#",
  },
  {
    id: "p-015", slug: "ss-31-5mg", name: "SS-31", code: "RNV-015",
    category: "Longevity", purity: ">99%", size: "5mg", price: 20.00, image: productVial,
    short: "Mitochondria-targeted antioxidant peptide for longevity research.",
    description: "SS-31 (Elamipretide) is a mitochondria-targeted antioxidant tetrapeptide studied for its role in cellular energy production and oxidative stress in longevity models.",
    molecularFormula: "C32H52N10O6",
    molecularWeight: "640.84 g/mol",
    casNumber: "736992-21-5",
    storage: "Store lyophilised at -20 °C.",
    coaUrl: "#",
  },
  {
    id: "p-016", slug: "tb-500-5mg", name: "TB-500", code: "RNV-016",
    category: "Recovery", purity: ">99%", size: "5mg", price: 35.00, image: productVial,
    short: "Synthetic fragment of Thymosin Beta-4 used in repair research.",
    description: "TB-500 is a synthetic version of the active region of Thymosin Beta-4, studied for its role in actin regulation and cell migration models.",
    molecularFormula: "C77H131N23O33",
    molecularWeight: "1888.12 g/mol",
    casNumber: "77591-33-4",
    storage: "Store lyophilised at -20 °C.",
    coaUrl: "#",
  },
  {
    id: "p-017", slug: "tesamorelin-2mg", name: "Tesamorelin", code: "RNV-017",
    category: "Metabolic", purity: ">99%", size: "2mg", price: 50.00, image: productVial,
    short: "Synthetic GHRH analogue studied in metabolic research.",
    description: "Tesamorelin is a synthetic analogue of growth hormone releasing hormone (GHRH) studied in metabolic research, particularly in visceral adiposity and GH secretion models.",
    molecularFormula: "C221H366N72O67S",
    molecularWeight: "5135.86 g/mol",
    casNumber: "218949-48-9",
    storage: "Store lyophilised at -20 °C.",
    coaUrl: "#",
  },
  {
    id: "p-018", slug: "thymalin-10mg", name: "Thymalin", code: "RNV-018",
    category: "Recovery", purity: ">99%", size: "10mg", price: 18.00, image: productVial,
    short: "Thymus-derived polypeptide studied in immunological research.",
    description: "Thymalin is a polypeptide preparation derived from the thymus gland, studied for its immunomodulatory properties in laboratory models.",
    molecularFormula: "Polypeptide complex",
    molecularWeight: "~6000 g/mol",
    casNumber: "71932-18-8",
    storage: "Store lyophilised at -20 °C, protected from light.",
    coaUrl: "#",
  },
  {
    id: "p-019", slug: "thymosin-alpha-1-5mg", name: "Thymosin Alpha 1", code: "RNV-019",
    category: "Recovery", purity: ">99%", size: "5mg", price: 25.00, image: productVial,
    short: "Immune-modulating peptide studied in immunology research.",
    description: "Thymosin Alpha 1 is a 28-amino-acid peptide derived from thymosin fraction 5, studied for its immunomodulatory properties in laboratory models.",
    molecularFormula: "C129H215N33O55",
    molecularWeight: "3108.36 g/mol",
    casNumber: "62304-98-7",
    storage: "Store lyophilised at -20 °C.",
    coaUrl: "#",
  },
];

export const categories: Category[] = ["Research", "Cognitive", "Recovery", "Longevity", "Metabolic"];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
