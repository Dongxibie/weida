'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { ChevronRight, Play } from 'lucide-react'
import HeroNav from './hero-nav'
import HeroVisual from './hero-visual'

export default function Hero() {
	return (
		<div className='relative min-h-screen w-full overflow-hidden bg-white'>
			{/* 背景氛围光 */}
			<div className='pointer-events-none absolute -top-32 -left-24 h-[520px] w-[520px] rounded-full bg-[#60B1FF]/20 blur-[120px]' />
			<div className='pointer-events-none absolute top-1/3 -right-16 h-[480px] w-[480px] rounded-full bg-[#319AFF]/20 blur-[120px]' />

			<HeroNav />

			<div className='relative mx-auto w-full max-w-[1280px] px-6 pt-[130px] pb-20 md:pt-[150px] sm:px-12 lg:px-20'>
				<div className='grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12'>
					{/* 左栏：文案与入口 */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
						className='flex max-w-[620px] flex-col items-start text-left lg:col-span-5 lg:pr-6'>
						<div className='flex w-fit items-center gap-3 rounded-full border border-black/5 bg-black/5 px-3 py-1.5 shadow-xs'>
							<img src='/images/avatar.png' alt='奥地利哈士奇' className='h-6 w-6 rounded-full border border-white object-cover' />
							<p className='text-[12px] text-black/80'>
								这里是 <strong className='font-semibold text-neutral-900'>技术笔记与项目</strong> 的自留地
							</p>
						</div>

						<h1 className='font-outfit mt-6 text-[36px] leading-[1.08] font-black tracking-[-3px] text-black select-none sm:text-[44px] lg:text-[60px]'>
							记录、创造，
							<br />
							和我的小王国。
						</h1>

						<p className='mt-5 max-w-[480px] text-[18px] leading-relaxed tracking-[-0.5px] text-black/60'>
							我是奥地利哈士奇，这里放我的技术笔记、项目，和正在学的东西 —— 关于 AI、Web 开发，以及一路上踩过的坑。
						</p>

						<div className='mt-8 flex flex-wrap items-center gap-6'>
							<motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
								<Link
									href='/projects'
									className='group flex w-fit items-center gap-4 rounded-[16px] bg-[#0084FF] py-2 pr-2 pl-6 text-sm font-bold text-white transition-colors hover:bg-[#0074E0]'
									style={{ boxShadow: 'inset 0px 4px 4px 0px rgba(255,255,255,0.35), 0 10px 25px -5px rgba(0,132,255,0.25)' }}>
									看看我的项目
									<span className='flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#0084FF] transition-transform group-hover:translate-x-0.5'>
										<ChevronRight className='h-4 w-4' />
									</span>
								</Link>
							</motion.div>

							<Link href='/blog' className='group flex items-center gap-2'>
								<span className='flex h-9 w-9 items-center justify-center rounded-full border border-blue-100 bg-blue-50 transition-colors group-hover:bg-blue-100'>
									<Play className='h-4 w-4 fill-[#0084FF] text-[#0084FF]' />
								</span>
								<span className='text-[14px] font-bold text-[#0084FF] transition-colors group-hover:text-[#0074E0]'>读读文章</span>
							</Link>
						</div>
					</motion.div>

					{/* 右栏：角色与浮动卡片 */}
					<div className='lg:col-span-7'>
						<HeroVisual />
					</div>
				</div>
			</div>
		</div>
	)
}
