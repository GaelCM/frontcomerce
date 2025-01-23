/* eslint-disable @typescript-eslint/no-explicit-any */

export type Product = {
    id: number;
    documentId: string;
    productName: string;
    productCode: string;
    slug: string;
    isActive: boolean;
    Origen: string;
    createdAt: string; // ISO 8601 date string
    updatedAt: string; // ISO 8601 date string
    publishedAt: string; // ISO 8601 date string
    price: number;
    isTrend: boolean;
    productImage: ProductImage[]; // Ajustar si sabes el contenido exacto del array
    category: {
      id: number;
      documentId: string;
      categoryName: string;
      categoryID: string;
      slug: string;
      createdAt: string; // ISO 8601 date string
      updatedAt: string; // ISO 8601 date string
      publishedAt: string; // ISO 8601 date string
    };
  };

  type ProductImage = {
    id: number;
    documentId: string;
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: Record<string, any>; // Esto puede ser más específico si conoces la estructura exacta de `formats`
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: any | null; // Ajustar si conoces la estructura
    createdAt: string; // ISO 8601 date string
    updatedAt: string; // ISO 8601 date string
    publishedAt: string; // ISO 8601 date string
  };

  export type Category={
    id: number;
    documentId: string;
    categoryName: string;
    categoryID: string;
    slug: string;
    createdAt: string; // ISO 8601 date string
    updatedAt: string; // ISO 8601 date string
    publishedAt: string; // ISO 8601 date string
    categoryImage:ProductImage
  }