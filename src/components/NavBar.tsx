'use client'

import { pages } from '../lib/pagesItems'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavBar = () => {
	const pathName = usePathname()

	const isActive = (url: string) => pathName === `/${url}`

	const navItems = pages
		.filter(p => {
			if (!p.isPublish || p.isFooter) return false

			return !p.isFooter && p.number > 0
		})
		.filter(p => p.slug !== '/')
		.sort((a, b) => {
			if (a.number !== b.number) {
				return a.number - b.number
			}
			return a.title.localeCompare(b.title)
		})

	return (
		<nav className='w-full flex flex-wrap items-center gap-x-8 xl:gap-x-12 gap-y-3 xl:min-w-78 justify-center xl:w-fit  xl:justify-start mx-auto'>
			{navItems.map(item => (
				<Link
					key={item.title}
					href={item.slug}
					className={`tracking-5 xl:text-lg hover:text-nav leading-none transform duration-300 ${
						isActive(item.slug) ? 'text-nav' : ''
					}`}
					onClick={e => e.stopPropagation()}
				>
					{item.title}
				</Link>
			))}
		</nav>
	)
}

export default NavBar
