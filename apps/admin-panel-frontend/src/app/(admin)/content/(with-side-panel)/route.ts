import { redirect } from "next/navigation"

export async function GET() {
  // TODO: get first collection from API
  const firstCollectionId = 1

  redirect(`/content/${firstCollectionId}`)
}
