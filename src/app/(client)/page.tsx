import { pages } from '../../lib/pagesItems'

import MainComponent from '@/src/components/Main'
import NotFoundComponent from '@/src/components/NotFoundComponent'
import VideoGallery from '@/src/components/VideoGallery'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function Main() {
	// const page = await fetchPageBySlug('home')
	const page = pages.find(p => p.slug === 'home')
	console.log('page', page)

	if (!page) {
		return (
			<MainComponent>
				<NotFoundComponent />
			</MainComponent>
		)
	}

	return (
		<MainComponent>
			{page?.media.length > 0 && <VideoGallery media={page.media} />}
			{/* {page?.media.length > 0 && <VideoGalleryStableFade media={page.media} />} */}
		</MainComponent>
	)
}
