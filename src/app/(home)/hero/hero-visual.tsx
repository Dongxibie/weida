'use client'

import { motion } from 'motion/react'
import { Check, FileText, PenLine } from 'lucide-react'

type Badge = {
	title: string
	subtitle: string
	icon: React.ReactNode
	beadClass: string
	ringClass: string
	shadow: string
	positionClass: string
	float: { y: number[]; x: number[]; duration: number }
	hoverRotate: number
}

const BADGES: Badge[] = [
	{
		title: '写点东西',
		subtitle: '技术笔记',
		icon: <PenLine className='h-4 w-4 text-white' />,
		beadClass: 'bg-linear-to-br from-[#0084FF] to-[#0066CC]',
		ringClass: 'ring-[#0084FF]/10',
		shadow: 'shadow-[0_12px_32px_-4px_rgba(0,132,255,0.12)]',
		positionClass: 'absolute top-[18%] -right-4 sm:-right-10 md:-right-14',
		float: { y: [0, -8, 0], x: [0, 2, 0], duration: 5 },
		hoverRotate: 1
	},
	{
		title: '做点项目',
		subtitle: '边学边做',
		icon: <FileText className='h-4 w-4 text-white' />,
		beadClass: 'bg-linear-to-br from-[#10B981] to-[#059669]',
		ringClass: 'ring-[#10B981]/10',
		shadow: 'shadow-[0_12px_32px_-4px_rgba(16,185,129,0.12)]',
		positionClass: 'absolute top-[48%] -left-6 sm:-left-12 md:-left-16',
		float: { y: [0, 8, 0], x: [0, -2, 0], duration: 5.5 },
		hoverRotate: -1
	},
	{
		title: '记下每天',
		subtitle: '慢慢积累',
		icon: <Check className='h-4 w-4 text-white' strokeWidth={3} />,
		beadClass: 'bg-linear-to-br from-[#9333EA] to-[#7E22CE]',
		ringClass: 'ring-[#9333EA]/10',
		shadow: 'shadow-[0_12px_32px_-4px_rgba(147,51,234,0.12)]',
		positionClass: 'absolute bottom-[18%] -right-4 sm:-right-8 md:-right-12',
		float: { y: [0, -10, 0], x: [0, -1, 0], duration: 4.8 },
		hoverRotate: 1.5
	}
]

export default function HeroVisual() {
	return (
		<div className='pointer-events-none relative flex w-full items-center justify-center py-10 lg:justify-end'>
			{/* 氛围光晕 */}
			<div className='absolute top-[30%] left-[20%] -z-10 h-[420px] w-[420px] animate-pulse rounded-full bg-sky-400/15 blur-[110px] duration-[7000ms]' />

			{/* 轨道装饰环 */}
			<svg
				className='absolute top-1/2 left-1/2 -z-10 h-[620px] w-[620px] -translate-x-1/2 -translate-y-[52%] opacity-35'
				viewBox='0 0 620 620'
				fill='none'
				aria-hidden='true'>
				<defs>
					<linearGradient id='orbitSky' x1='0' y1='0' x2='620' y2='620' gradientUnits='userSpaceOnUse'>
						<stop stopColor='#60B1FF' />
						<stop offset='1' stopColor='#319AFF' />
					</linearGradient>
				</defs>
				<circle cx='310' cy='310' r='300' stroke='url(#orbitSky)' strokeWidth='1' strokeDasharray='6 10' />
				<circle cx='310' cy='310' r='228' stroke='url(#orbitSky)' strokeWidth='1' strokeDasharray='2 8' opacity='0.8' />
				<circle cx='310' cy='10' r='4' fill='#319AFF' />
				<circle cx='310' cy='610' r='3' fill='#60B1FF' />
			</svg>

			{/* 角色主视觉 */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
				className='relative w-full max-w-[600px] select-none'>
				<img
					src='/images/husky-king.png'
					alt='奥地利哈士奇'
					className='mx-auto block h-auto w-full max-w-[560px]'
					style={{ filter: 'brightness(1.02) contrast(1.04) drop-shadow(0 24px 48px rgba(0,132,255,0.12))' }}
				/>
			</motion.div>

			{BADGES.map((badge, index) => (
				<motion.div
					key={badge.title}
					initial={{ opacity: 0, scale: 0.85 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ type: 'spring', damping: 20, stiffness: 100, delay: 0.6 + index * 0.2 }}
					className={`hidden sm:block ${badge.positionClass}`}>
					<motion.div
						animate={{ y: badge.float.y, x: badge.float.x }}
						transition={{ duration: badge.float.duration, ease: 'easeInOut', repeat: Infinity }}
						whileHover={{ scale: 1.05, rotate: badge.hoverRotate }}
						className={`pointer-events-auto flex items-center gap-3 rounded-[20px] border border-white/70 bg-linear-to-br from-white/75 to-white/45 px-5 py-3 ring-1 ${badge.ringClass} ${badge.shadow} backdrop-blur-[20px]`}>
						<span className={`flex h-8 w-8 items-center justify-center rounded-xl ${badge.beadClass} shadow-[0_4px_12px_rgba(0,0,0,0.12)]`}>
							{badge.icon}
						</span>
						<span className='flex flex-col text-left leading-tight'>
							<span className='text-[13px] font-black tracking-tight text-neutral-900'>{badge.title}</span>
							<span className='mt-0.5 text-[10px] font-semibold text-neutral-500'>{badge.subtitle}</span>
						</span>
					</motion.div>
				</motion.div>
			))}
		</div>
	)
}
