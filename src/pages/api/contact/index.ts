import { Collection, setDocumentWithMerge } from "$lib/modules";
import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  const entries = await request.json()
  const json: Record<string, any> = {}
  json[entries.email] = entries
  
  const result = await setDocumentWithMerge({
    collectionId: Collection.CONTACT as string,
    docId: "data",
    data: json
  })
  return new Response(JSON.stringify({ ...result, message: "We've received your message and appreciate you reaching out to us." }), { status: 200 })
}