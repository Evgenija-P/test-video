'use client'

import { Canvas } from '@react-three/fiber'

import VideoMaterial from './VideoMaterial'

export default function VideoGalleryNext(videos: string[]) {
	return (
		<Canvas camera={{ position: [0, 0, 5] }} dpr={[1, 1.5]}>
			{videos.map((video, i) => (
				<group key={i} position={[i * 3.5, 0, 0]}>
					<VideoMaterial src={video} />
				</group>
			))}
		</Canvas>
	)
}
