import type { iProgram, iService } from "../interface"

export enum Constants {
  CATEGORIES = "categories",
  EMAIL = "email",
  ACTION = "action",
  MAXSCROLLITEMS = 12,
  TAGS = "tags",
  TAXONOMY = "taxonomy",
  FILE = "file"
}

export enum FormFields {
  TITLE = "title",
  SLUG = "slug",
  DESCRIPTION = "description",
  CATEGORY = "category",
  TAGS = "tags",
  STATUS = "status",
  CREATEDAT = "createdAt",
  UPDATEDAT = "updatedAt",
  FILE = "file"
}

export enum Collection {
  USERS = 'users',
  BLOGS = 'blogs',
  CHECKOUT = 'checkout',
  NEWSLETTER = 'newsletter',
  CONTACT = 'contact',
  GETINVOLVED = 'get-involved',
  INVESTMENT = 'investment'
}

export enum Actions {
  ADD = "add",
  REMOVE = "remove"
}


export enum Status {
  ERROR = "error",
  SUCCESS = "success"
}

export enum Events {
  SELECTED = "selected"
}

export const checkboxClasses = "border-primary ring-offset-background focus-visible:ring-ring data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground peer box-content h-4 w-4 shrink-0 rounded-sm border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-50"


export const sublineClasses = "text-xl md:text-3xl font-bold text-center"

export const highlightClasses = "p-4 bg-primary/50 py-4 border-l-primary border-l-4 flex flex-col gap-4"
export const highlightBlueClasses = "p-4 bg-blue-500/50 py-4 border-l-blue-500 border-l-4 flex flex-col gap-4"
export const highlightGreenClasses = "p-4 bg-green-500/50 py-4 border-l-green-500 border-l-4 flex flex-col gap-4"
export const highlightPinkClasses = "p-4 bg-pink-500/50 py-4 border-l-pink-500 border-l-4 flex flex-col gap-4"
export const highlightAlternateClasses = "p-4 bg-alternate/50 py-4 border-l-alternate border-l-4 flex flex-col gap-4"
export const highlightLimeClasses = "p-4 bg-lime-500/50 py-4 border-l-lime-500 border-l-4 flex flex-col gap-4"
export const highlightRedClasses = "p-4 bg-red-500/50 py-4 border-l-red-500 border-l-4 flex flex-col gap-4"
export const highlighVioletClasses = "p-4 bg-violet-500/50 py-4 border-l-violet-500 border-l-4 flex flex-col gap-4"

export const titleClasses = "text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-primary dark:text-alternate"

export const services: iService[] = [
  {
    name: "Renovation",
    subline: "Transform your space into the home of your dreams with expert renovation services that bring your vision to life, from minor touch-ups to complete overhauls.",
    href: "/services/renovation",
    cta: "Learn more",
    image: "/services/renovation_1920x1080.webp"
  },
  {
    name: "Lettings / Renting",
    subline: "Searching for the ideal rental property? Look no further.",
    href: "/services/lettings",
    cta: "Learn more",
    image: "/services/lettings_1240x826.webp"
  },
  {
    name: "Sales",
    subline: "Ready to sell? Our expert team handles everything to market your property, attract buyers, and secure the best deal.",
    href: "/services/sales",
    cta: "Learn more",
    image: "/services/sales_612x408.webp"
  }, 
  {
    name: "Cleaning",
    subline: "Tailored cleanup solutions for properties, from large commercial sites to smaller residential units, customized to meet each project's unique needs.",
    href: "https://cleaning.dhubgroup.com",
    cta: "Learn more",
    image: "/services/void-property-cleaning_1655x1080.webp",
    target: "_blank"
  }
] 
export const highlightList = [
  highlightClasses,
  highlightAlternateClasses,
  highlighVioletClasses,
  highlightBlueClasses,
  highlightGreenClasses,
  highlightLimeClasses,
  highlightRedClasses,
  highlightPinkClasses,
];

export const removeRingClasses = 'focus-visible:ring-0 focus-visible:ring-offset-0'