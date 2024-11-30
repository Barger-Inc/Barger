import { mockCollections } from "@/app/(admin)/content/mock"
import { redirect } from "next/navigation"

export async function GET() {
  // TODO: get first collection from API
  const firstCollectionId = mockCollections[0].id

  redirect(`/content/${firstCollectionId}/planned`)
}
