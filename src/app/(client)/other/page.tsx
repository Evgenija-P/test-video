import { pages } from '../../../lib/pagesItems'

import MainComponent from '@/src/components/Main'
import NotFoundComponent from '@/src/components/NotFoundComponent'
import VideoGalleryNext from '@/src/components/VideoGalleryNext'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function Fashion() {
	// const page = await fetchPageBySlug('home')
	const page = pages.find(p => p.slug === 'other')
	console.log('page other', page)

	if (!page) {
		return (
			<MainComponent>
				<NotFoundComponent />
			</MainComponent>
		)
	}

	const videos = page.media.filter(m => m.type === 'video').map(m => m.url)

	return (
		<MainComponent>
			{page?.media.length > 0 && <VideoGalleryNext {...videos} />}
			{/* {page?.media.length > 0 && <VideoGalleryStableFade media={page.media} />} */}
		</MainComponent>
	)
}
