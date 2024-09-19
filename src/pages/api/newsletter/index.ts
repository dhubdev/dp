import { Collection, setDocumentWithMerge } from "$lib/modules";
import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  const entries = await request.json()
  const json: Record<string, any> = {}
  json[entries.email] = true
  
  const result = await setDocumentWithMerge({
    collectionId: Collection.NEWSLETTER as string,
    docId: "data",
    data: json
  })
  return new Response(JSON.stringify({ ...result, message: "Successfully subscribed" }), { status: 200 })
}