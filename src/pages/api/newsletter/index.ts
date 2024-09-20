import { Collection, setDocumentWithMerge } from "$lib/modules";
import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  const entries = await request.json()
  
  const result = await setDocumentWithMerge({
    collectionId: Collection.NEWSLETTER as string,
    docId: entries.email,
    data: entries,
    wheres: []
  })
  return new Response(JSON.stringify({ ...result, message: "Successfully subscribed" }), { status: 200 })
}