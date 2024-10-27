import initTranslations from "@/app/i18n"
import { Settings } from "@/features/settings/settings"
import TranslationsProvider from "@/shared/providers/translations-provider"

type Props = {
	params: {
		locale: string
	}
}

export default async function Page({ params: { locale } }: Props) {
	const { t, resources } = await initTranslations(locale, [''])
  return <div>
		Settings Page
		<div>
			{t('HELLO')}
		</div>
		<TranslationsProvider locale={locale} namespaces={['']} resources={resources}>
			<Settings/>
		</TranslationsProvider>
		</div>
}
