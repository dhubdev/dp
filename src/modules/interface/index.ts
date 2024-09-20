import type { OutputData } from "@editorjs/editorjs";

export type TStatus = "success" | "error"

export type TAction = "add" | "remove" | "added" | "removed"

export type TTaxonomy = "category" | "tag"

export interface iStatus {
  message: string;
  status: TStatus;
  data?: Record<string, any>;
}

export interface iDocument {
  collectionId: string;
  docId: string;
  data: Record<string, any>
}

export interface iOrderBy {
  key: string;
  direction: "asc" | "desc"
}

export interface iQuery {
  collectionId: string;
  wheres: iWhere[];
  data?: Record<string, any>;
  docId?: string;
  orderBys?: iOrderBy[]
}


export interface iWhere {
  key: string;
  op: "<" | "<=" | "==" | ">" | ">=" | "!=" | "array-contains" | "array-contains-any" | "in" | "not-in"
  value: any
}
export type FormatToken = 'YYYY' | 'MM' | 'MMM' | 'DD' | 'HH' | 'mm' | 'ss';

export type TField = "tags" | "status" | "description" | "category" | "caption"

export interface iAuthor {
  name: string;
  imageUrl: string;
  id: string
}

export interface iBlog {
  id: string;
  title: string;
  slug: string;
  caption: string;
  description: OutputData;
  coverImage: string;
  category: string;
  tags: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  lastUpdate: string;
  author: iAuthor
}


export interface iItem {
  label: string;
  value: string;
}

export interface iDetail {
  label: TField;
  data: string[]
}

export interface iTaxonomy {
  categories: Record<string, any>
  tags: Record<string, any>
}

export interface iImage {
  success: number;
  file: {
    url?: string;
    message?: string;
  }
}

export interface iProgram {
  title: string;
  squareImg: string;
  rectangleImg: string;
  caption: string;
  content: string;
}

export interface iNavLink {
  href: string;
  name: string;
  icon?: any
}

export interface iSlider {
  name: string;
  subline: string;
  href: string;
  image: string;
  cta: string;
  content?: any;
}

export type TType = "popular" | "new" | "discounted"
export type TTag = "rent" | "sell"

export interface iListing {
  images: string[];
  oldPrice: string;
  price: string;
  name: string;
  address: string;
  beds: string;
  bath: string;
  details: Record<string, any>;
  type: TType;
  tags: TTag[]
}

export interface iService extends iSlider {}