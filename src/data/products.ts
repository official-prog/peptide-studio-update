import productVial from "@/assets/product-vial.jpg";

export type Category = "Research" | "Cognitive" | "Recovery" | "Longevity" | "Metabolic";

export interface Product {
  id: string;
  slug: string;
  name: string;
  code: string;
  category: Category;
  purity: string; // e.g. ">99%"
  size: string;  // e.g. "10mg"
  price: number; // GBP
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
    id: "p-001", slug: "bpc-157-10mg", name: "BPC-157", code: "RNV-001",
    category: "Recovery", purity: ">99%", size: "10mg", price: 39.99, image: productVial,
    short: "Pentadecapeptide widely studied in tissue repair research.",
    description:
      "BPC-157 is a synthetic pentadecapeptide derived from a protective protein found in gastric juice. Used in laboratory research investigating cellular repair pathways and connective tissue models.",
    molecularFormula: "C62H98N16O22",
    molecularWeight: "1419.55 g/mol",
    casNumber: "137525-51-0",
    storage: "Store lyophilised at -20 °C, protected from light.",
    coaUrl: "#",
  },
  {
    id: "p-002", slug: "tb-500-5mg", name: "TB-500", code: "RNV-002",
    category: "Recovery", purity: ">99%", size: "5mg", price: 44.99, image: productVial,
    short: "Synthetic fragment of Thymosin Beta-4 used in repair research.",
    description: "TB-500 is a synthetic version of the active region of Thymosin Beta-4, studied for its role in actin regulation and cell migration models.",
    molecularFormula: "C77H131N23O33",
    molecularWeight: "1888.12 g/mol",
    casNumber: "77591-33-4",
    storage: "Store lyophilised at -20 °C.",
    coaUrl: "#",
  },
  {
    id: "p-003", slug: "semax-10mg", name: "Semax", code: "RNV-003",
    category: "Cognitive", purity: ">99%", size: "10mg", price: 54.99, image: productVial,
    short: "Heptapeptide investigated in neuroprotection studies.",
    description: "Semax is a synthetic heptapeptide analogue of ACTH(4-10), widely used in research focused on neurotrophic and cognitive pathways.",
    molecularFormula: "C37H51N9O10S",
    molecularWeight: "813.93 g/mol",
    casNumber: "80714-61-0",
    storage: "Store lyophilised at -20 °C.",
    coaUrl: "#",
  },
  {
    id: "p-004", slug: "selank-10mg", name: "Selank", code: "RNV-004",
    category: "Cognitive", purity: ">99%", size: "10mg", price: 49.99, image: productVial,
    short: "Anxiolytic peptide studied in behavioural research.",
    description: "Selank is a synthetic peptide derived from tuftsin, used in laboratory research exploring anxiolytic mechanisms.",
    molecularFormula: "C33H57N11O9",
    molecularWeight: "751.87 g/mol",
    casNumber: "129954-34-3",
    storage: "Store lyophilised at -20 °C.",
    coaUrl: "#",
  },
  {
    id: "p-005", slug: "ghk-cu-50mg", name: "GHK-Cu", code: "RNV-005",
    category: "Longevity", purity: ">99%", size: "50mg", price: 34.99, image: productVial,
    short: "Copper tripeptide examined in regenerative research.",
    description: "GHK-Cu is a naturally occurring copper-binding tripeptide used extensively in cellular and dermal research models.",
    molecularFormula: "C14H24CuN6O4",
    molecularWeight: "403.93 g/mol",
    casNumber: "89030-95-5",
    storage: "Store lyophilised at -20 °C, protected from light.",
    coaUrl: "#",
  },
  {
    id: "p-006", slug: "epitalon-10mg", name: "Epitalon", code: "RNV-006",
    category: "Longevity", purity: ">99%", size: "10mg", price: 42.99, image: productVial,
    short: "Tetrapeptide studied in telomere and longevity research.",
    description: "Epitalon is a synthetic tetrapeptide investigated in research focused on telomerase activity and cellular ageing.",
    molecularFormula: "C14H22N4O9",
    molecularWeight: "390.35 g/mol",
    casNumber: "307297-39-8",
    storage: "Store lyophilised at -20 °C.",
    coaUrl: "#",
  },
  {
    id: "p-007", slug: "tirzepatide-10mg", name: "Tirzepatide", code: "RNV-007",
    category: "Metabolic", purity: ">99%", size: "10mg", price: 129.99, image: productVial,
    short: "Dual GIP/GLP-1 receptor agonist for metabolic research.",
    description: "Tirzepatide is a 39-amino-acid synthetic peptide with dual agonist activity at GIP and GLP-1 receptors, used in metabolic research.",
    molecularFormula: "C225H348N48O68",
    molecularWeight: "4813.45 g/mol",
    casNumber: "2023788-19-2",
    storage: "Store lyophilised at -20 °C.",
    coaUrl: "#",
  },
  {
    id: "p-008", slug: "retatrutide-10mg", name: "Retatrutide", code: "RNV-008",
    category: "Metabolic", purity: ">99%", size: "10mg", price: 149.99, image: productVial,
    short: "Triple agonist peptide investigated in metabolic models.",
    description: "Retatrutide is a triple GIP/GLP-1/glucagon receptor agonist used in laboratory metabolic research.",
    molecularFormula: "C221H343N51O64",
    molecularWeight: "4731.33 g/mol",
    casNumber: "2381089-83-2",
    storage: "Store lyophilised at -20 °C.",
    coaUrl: "#",
  },
];

export const categories: Category[] = ["Cognitive", "Recovery", "Longevity", "Metabolic"];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
