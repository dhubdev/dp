import {  Collection, setDocumentWithMerge } from "$lib/modules";
import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  const data = await request.json()

  const result = await setDocumentWithMerge({
    collectionId: Collection.INVESTMENT,
    wheres: [
      {
        key: "email",
        op: "==",
        value: data.email
      }
    ],
    data,
    docId: data.email
  })
  return new Response(JSON.stringify({ ...result, message: "We've received your message, we will reachout to you shortly!" }), { status: 200 })
}