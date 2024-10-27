type Props = {
  params: {
    locale: string
  }
}

export default async function Page({ params: { locale } }: Props) {
  return <div>Settings Page</div>
}
