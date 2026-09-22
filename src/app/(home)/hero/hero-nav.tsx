'use client'

import { useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'motion/react'
import { ArrowRight, Menu, X } from 'lucide-react'

const NAV_LINKS = [
	{ label: '首页', href: '/' },
	{ label: '进阶', href: '/#ascension' },
	{ label: '文章', href: '/blog' },
	{ label: '项目', href: '/projects' },
	{ label: '关于', href: '/about' }
]

const GITHUB_URL = 'https://github.com/Dongxibie'

export default function HeroNav() {
	const [menuOpen, setMenuOpen] = useState(false)

	return (
		<>
			<motion.div
				initial={{ y: -20, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
				className='pointer-events-none fixed top-[30px] right-0 left-0 z-50 flex justify-center px-4'>
				<div className='pointer-events-auto w-full max-w-[1280px] transition-all duration-300'>
					<div className='flex w-full items-center justify-between gap-4 px-4 py-2 sm:gap-8 sm:px-6'>
						<Link href='/' className='font-fustat flex items-center gap-2 text-[22px] font-extrabold tracking-tight text-black'>
							<img src='/images/avatar.png' alt='' className='h-7 w-7 rounded-full object-cover' />
							奥地利哈士奇
						</Link>

						<div className='hidden items-center gap-8 md:flex'>
							{NAV_LINKS.map(item => (
								<Link key={item.href} href={item.href} className='text-[14px] font-medium text-black/60 transition-colors hover:text-black'>
									{item.label}
								</Link>
							))}
						</div>

						<div className='flex items-center gap-2'>
							<a
								href={GITHUB_URL}
								target='_blank'
								rel='noreferrer'
								className='group hidden h-9 items-center gap-2 rounded-[12px] border border-black/10 bg-black/5 px-5 text-[14px] font-semibold text-black transition-all hover:bg-black/10 hover:shadow-md sm:flex'>
								GitHub
								<ArrowRight className='h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5' />
							</a>
							<button
								type='button'
								aria-label='打开菜单'
								onClick={() => setMenuOpen(true)}
								className='flex h-9 w-9 items-center justify-center rounded-[12px] border border-black/10 bg-black/5 md:hidden'>
								<Menu className='h-4 w-4 text-black' />
							</button>
						</div>
					</div>
				</div>
			</motion.div>

			<AnimatePresence>
				{menuOpen && (
					<>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							onClick={() => setMenuOpen(false)}
							className='fixed inset-0 z-[60] bg-black/20 md:hidden'
						/>
						<motion.aside
							initial={{ x: 260 }}
							animate={{ x: 0 }}
							exit={{ x: 260 }}
							transition={{ type: 'spring', damping: 24, stiffness: 220 }}
							className='fixed top-0 right-0 z-[61] h-full w-[260px] border-l border-black/10 bg-white/95 backdrop-blur-[40px] md:hidden'>
							<div className='flex items-center justify-between px-6 py-5'>
								<span className='font-fustat text-[16px] font-bold text-black'>导航</span>
								<button type='button' aria-label='关闭菜单' onClick={() => setMenuOpen(false)} className='flex h-8 w-8 items-center justify-center rounded-full bg-black/5'>
									<X className='h-4 w-4 text-black' />
								</button>
							</div>
							<nav className='flex flex-col px-3'>
								{NAV_LINKS.map(item => (
									<Link
										key={item.href}
										href={item.href}
										onClick={() => setMenuOpen(false)}
										className='rounded-xl px-3 py-3 text-[15px] font-medium text-black/70 transition-colors hover:bg-black/5 hover:text-black'>
										{item.label}
									</Link>
								))}
								<a href={GITHUB_URL} target='_blank' rel='noreferrer' className='mt-2 rounded-xl px-3 py-3 text-[15px] font-medium text-[#0084FF]'>
									GitHub
								</a>
							</nav>
						</motion.aside>
					</>
				)}
			</AnimatePresence>
		</>
	)
}
