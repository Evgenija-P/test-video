'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function VideoMaterial({ src }: { src: string }) {
	const mesh = useRef<THREE.Mesh>(null)
	const video = useRef<HTMLVideoElement | null>(null)

	useEffect(() => {
		const vid = document.createElement('video')
		vid.src = src
		vid.crossOrigin = 'Anonymous'
		vid.loop = true
		vid.muted = true
		vid.playsInline = true
		vid.autoplay = true
		vid.play()

		video.current = vid

		const texture = new THREE.VideoTexture(vid)
		texture.minFilter = THREE.LinearFilter
		texture.magFilter = THREE.LinearFilter
		texture.format = THREE.RGBAFormat

		if (mesh.current && mesh.current.material instanceof THREE.MeshBasicMaterial) {
			mesh.current.material.map = texture
		}
	}, [src])

	return (
		<mesh ref={mesh}>
			<planeGeometry args={[3, 4]} />
			<meshBasicMaterial toneMapped={false} />
		</mesh>
	)
}
