import { MediaItem } from '../components/VideoGalleryStableFade'

type NewPage = {
	title: string
	slug: string
	media: MediaItem[]
	isPublish: boolean
	isFooter: boolean
	number: number
}

export const pages: NewPage[] = [
	{
		title: 'Main',
		slug: '/',
		isPublish: true,
		isFooter: false,
		number: 1,
		media: [
			{ name: 'video1', type: 'video', url: '/videos/home/IMG_0501.mp4' },
			{ name: 'video2', type: 'video', url: '/videos/home/IMG_0520.mp4' },
			{
				name: 'video3',
				type: 'video',
				url: '/videos/home/IMG_1424-jkJCWu7HDh4xATzCTV0uMLlhWxZpuF.mov'
			},
			{
				name: 'video4',
				type: 'video',
				url: '/videos/home/IMG_1785-Mc26pqbFD35ZiMbXG44dbCKOm9uyX1.mov'
			},
			{ name: 'video5', type: 'video', url: '/videos/home/IMG_2024.mp4' },
			{ name: 'video6', type: 'video', url: '/videos/home/IMG_2190.mp4' },
			{ name: 'video7', type: 'video', url: '/videos/home/IMG_2738.mp4' },
			{ name: 'video8', type: 'video', url: '/videos/home/IMG_3104.mp4' },
			{ name: 'video9', type: 'video', url: '/videos/home/IMG_4630.mp4' },
			{ name: 'video10', type: 'video', url: '/videos/home/IMG_5477.mp4' },
			{
				name: 'video11',
				type: 'video',
				url: '/videos/home/IMG_5516 10.59.01 copy-12FL7yf5WgTIkBnWuvMD1vdPjwZhRD.mp4'
			},
			{ name: 'video12', type: 'video', url: '/videos/home/IMG_6305.mp4' },
			{ name: 'video13', type: 'video', url: '/videos/home/IMG_6462.mp4' },
			{ name: 'video14', type: 'video', url: '/videos/home/IMG_6463.mp4' },
			{ name: 'video15', type: 'video', url: '/videos/home/IMG_6614.mov' },
			{ name: 'video16', type: 'video', url: '/videos/home/IMG_7096.mp4' },
			{ name: 'video17', type: 'video', url: '/videos/home/IMG_7976.mp4' },
			{ name: 'video18', type: 'video', url: '/videos/home/IMG_8241.mp4' },
			{ name: 'video19', type: 'video', url: '/videos/home/IMG_8316.mp4' },
			{ name: 'video20', type: 'video', url: '/videos/home/IMG_9500.mp4' }
		]
	},
	{
		title: 'Gallery',
		slug: 'gallery',
		isPublish: true,
		isFooter: false,
		number: 2,
		media: [
			{ name: 'video1', type: 'video', url: '/videos/fashion/1763489944168-compressed1.mp4' },

			{
				name: 'video3',
				type: 'video',
				url: '/videos/fashion/IMG_1474-j0JcOPKNM8FKo3GcZRdsXVcw6KRT8B.mov'
			},
			{
				name: 'video4',
				type: 'video',
				url: '/videos/fashion/IMG_1728-pBprjAQXX1ziFmOGgHQG8SwuS8rrDa.mov'
			},
			{
				name: 'video5',
				type: 'video',
				url: '/videos/fashion/IMG_1735-W1SE8y788iXfWc4YpJS5eQ9l4IOZjp.mov'
			},
			{
				name: 'video6',
				type: 'video',
				url: '/videos/fashion/IMG_4371-hTdkw4mRNgkSnjWo87lwA7FIHDyPPD.mp4'
			},
			{
				name: 'video7',
				type: 'video',
				url: '/videos/fashion/IMG_4391-WeZeOHGQVXxzZPvXPQULEsFjaRfQeW.mov'
			},
			{
				name: 'video8',
				type: 'video',
				url: '/videos/fashion/IMG_4705-YgcdMmetobRyJ7aJtF9sZmMAuZ40Nv.mov'
			},
			{
				name: 'video10',
				type: 'video',
				url: '/videos/fashion/IMG_4709-PUrhMYeXJOVdDR6aVySHfHlSitaylm.mov'
			},
			{
				name: 'video12',
				type: 'video',
				url: '/videos/fashion/IMG_5841-j1QwHvz3lzKtFRTv0e5KpZWY6X5Dqw.mov'
			},
			{
				name: 'video13',
				type: 'video',
				url: '/videos/fashion/IMG_6098-t3M4RoYpcAnPHzFfgzY8ariB9tat3C.mov'
			},
			{
				name: 'video14',
				type: 'video',
				url: '/videos/fashion/IMG_6419-y6Na7NO21z02FLs3PQ7TsXQiii6DvI.mp4'
			},
			{
				name: 'video15',
				type: 'video',
				url: '/videos/fashion/IMG_7865-JdGVUqAv35KlIqIAnLlomC31RO7Kcp.mp4'
			},
			{
				name: 'video16',
				type: 'video',
				url: '/videos/fashion/IMG_7966-d3OdEZlSZemQUvPlOmVtaZuCGvMZxJ.mov'
			},
			{ name: 'video17', type: 'video', url: '/videos/fashion/1763489944168-compressed1.mp4' }
		]
	},
	{
		title: 'Other',
		slug: 'other',
		isPublish: true,
		isFooter: false,
		number: 3,
		media: [
			{ name: 'video1', type: 'video', url: '/videos/travel/1763546368368-IMG_0239a.mov' },
			{
				name: 'video2',
				type: 'video',
				url: '/videos/travel/199c842-3RZkLLsqIIqqIzZNQGPnuotbv0sYJ0.mp4'
			},
			{
				name: 'video3',
				type: 'video',
				url: '/videos/travel/IMG_0461-JIovElbnwOHSkofKTR3dlJzwSs6uea.mp4'
			},
			{
				name: 'video4',
				type: 'video',
				url: '/videos/travel/IMG_1316-3l7fJ7L6QqQT0Ql6wGoXQnabkfkCQN.mp4'
			},
			{
				name: 'video5',
				type: 'video',
				url: '/videos/travel/IMG_2447-JdsK0sWhAII41VqL3mmDJAM46lbcSJ.mp4'
			},
			{
				name: 'video6',
				type: 'video',
				url: '/videos/travel/IMG_2717-srqxVSQjObIClrkn6OcKm2SMxX9AL9.mp4'
			},
			{
				name: 'video7',
				type: 'video',
				url: '/videos/travel/IMG_3255-Cce5CGBABuJc0eapUTMIlU7Hshp8n6.mp4'
			},
			{
				name: 'video8',
				type: 'video',
				url: '/videos/travel/IMG_3549-6OroEtWn8vFpMOKLP5xkCzlq7qRXjT.mp4'
			},
			{
				name: 'video9',
				type: 'video',
				url: '/videos/travel/IMG_5316-V5vxzLs1guaqPTWOQ7kB98ZVpGUpwU.mp4'
			},
			{
				name: 'video10',
				type: 'video',
				url: '/videos/travel/IMG_5549-3YXmXMHtGerNaBleTcQuPWf8pjO39C.mp4'
			},
			{
				name: 'video11',
				type: 'video',
				url: '/videos/travel/IMG_6230-s9kDbqoY9hDTOEyBrHA46PReffCf4Y.mp4'
			},
			{
				name: 'video12',
				type: 'video',
				url: '/videos/travel/IMG_8673-JqZMEhYAtdCdJWmUMRVcKLlPGB3ymd.mp4'
			},
			{
				name: 'video13',
				type: 'video',
				url: '/videos/travel/IMG_9411-0tAdbW8I2B12s7l5FrPkPcZMEwdqeW.mp4'
			},
			{
				name: 'video14',
				type: 'video',
				url: '/videos/travel/IMG_9781-68kkbdXIDisXzibqTRiNGr0o3VHDyk.mp4'
			},
			{
				name: 'video15',
				type: 'video',
				url: '/videos/travel/a867a4a9-VIh5pQGIOCnpsbO2OTAHX001wc6U9r.mp4'
			}
		]
	}
]
