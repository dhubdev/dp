import { atom } from "nanostores";
import type { iBlog, iTaxonomy } from "../interface";

export const blogs = atom<iBlog[]>([])
export const taxonomyStore = atom<iTaxonomy | undefined>()