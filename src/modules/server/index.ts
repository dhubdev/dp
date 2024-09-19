import type { iBlog, iStatus, iTaxonomy } from "../interface";
import { clerkClient } from "@clerk/astro/server"
import type { User } from "@clerk/astro/server";
import type { AstroGlobal } from "astro/dist/@types/astro";
import type { AstroComponentFactory } from "astro/dist/runtime/server";

const baseurl = import.meta.env.PUBLIC_BASE_URL;

export const getTaxonomy = async () => {
  const response = await fetch(`${baseurl}/api/blogs/taxonomy`);
  const { status, data, message } = (await response.json()) as iStatus;

  let taxonomy: iTaxonomy = {
    categories: {},
    tags: {},
  };

  if (status === "success") {
    taxonomy = data as iTaxonomy;
  }

  return taxonomy
}

export const getBlog = async (id: string) => {
  const response = await fetch(`${baseurl}/api/blogs/${id}`);
  const { status, data, message } = (await response.json()) as iStatus

  const blog = data as iBlog
  return blog
}

export const getBlogs = async () => {
  const url = `${baseurl}/api/blogs`
  const response = await fetch(url)
  const { data } = await response.json() as iStatus
  const blogs = data as iBlog[]
  return blogs
}

export const getUser = async (Astro: Readonly<AstroGlobal<Record<string, any>, AstroComponentFactory, Record<string, string | undefined>>>) => {
  const auth = Astro.locals.auth()
  const user = await clerkClient(Astro).users.getUser(auth.userId as string) as User
  return user
}