import { pages } from '../../../lib/pagesItems'

import MainComponent from '@/src/components/Main'
import NewVideoGallery from '@/src/components/NewVideoGallery'
import NotFoundComponent from '@/src/components/NotFoundComponent'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function Fashion() {
	const page = pages.find(p => p.slug === 'other')

	if (!page) {
		return (
			<MainComponent>
				<NotFoundComponent />
			</MainComponent>
		)
	}

	return (
		<MainComponent>
			{page?.media.length > 0 && <NewVideoGallery media={page.media} key={'other'} />}
		</MainComponent>
	)
}
