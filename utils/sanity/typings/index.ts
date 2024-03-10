import { Product, Size, Taxon, Taxonomy, Variant } from "@typings/models";

export interface SanityTaxonomy extends Omit<Taxonomy, "name" | "taxons"> {
  name: string;
  label: string;
  taxons: SanityTaxon[];
}

export interface SanityTaxon extends Omit<Taxon, "name" | "products"> {
  name: string;
  label: string;
  products: SanityProduct[];
}

export interface SanityProduct extends Omit<Product, "name" | "description" | "slug" | "variants"> {
  name: string;
  description: string;
  slug: Record<string, any>;
  variants: SanityVariant[];
}

export interface SanityVariant extends Omit<Variant, "name" | "size"> {
  name: string;
  size: SanitySize;
}

export interface SanitySize extends Omit<Size, "name"> {
  name: string;
}
