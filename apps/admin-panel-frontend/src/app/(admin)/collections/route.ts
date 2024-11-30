import { mockCollections } from "@/app/(admin)/content/mock"
import { redirect } from "next/navigation"

export async function GET() {
  const firstCollectionId = mockCollections[0].id

  redirect(`/collections/${firstCollectionId}`)
}
