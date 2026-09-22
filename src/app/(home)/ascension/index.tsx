'use client'

import { useEffect, useRef, useState } from 'react'
import Husky from './husky'
import { CastleKeep, MarblePalace, SoilLand, StoneRoad, ThroneHall } from './stage-art'
import { Frame, PaperDefs, PaperTexture } from './frame'

type Stage = {
	roman: string
	title: string
	en: string
	desc: string
	material: string
	tags: string[]
}

const STAGES: Stage[] = [
	{
		roman: 'I',
		title: '起点',
		en: 'The Curious Pup',
		desc: '第一行代码。什么都不懂，但什么都想试 —— 打开编辑器的那天，就是旅程开始的那天。',
		material: '牛皮纸 · 野草 · 木牌',
		tags: ['好奇心', '第一行代码']
	},
	{
		roman: 'II',
		title: '学徒',
		en: 'The Apprentice',
		desc: '开始有章法地写：语法、框架、版本管理。工具一件件背上身，脚下也终于有了第一条路。',
		material: '羊皮纸 · 墨线 · 里程碑',
		tags: ['基础语法', 'Git', '框架']
	},
	{
		roman: 'III',
		title: '骑士建造者',
		en: 'The Knight Builder',
		desc: '能一个人把东西做出来，并且真的让它上线、被人打开。开始为自己的作品负责。',
		material: '灰石纸 · 铁灰 · 描金',
		tags: ['独立开发', '部署上线', '调试']
	},
	{
		roman: 'IV',
		title: '王国建筑师',
		en: 'The Kingdom Architect',
		desc: '不只写功能，开始设计结构与秩序：分层、边界、可维护。代码从「能跑」走向「经得起时间」。',
		material: '蓝釉砖 · 金箔 · 大理石',
		tags: ['架构设计', '工程规范', '可维护性']
	},
	{
		roman: 'V',
		title: '哈士奇国王',
		en: 'The Husky King',
		desc: '戴上王冠的那一刻不是终点 —— 是终于有能力守护自己建造的东西。',
		material: '织锦红 · 满金 · 王座厅',
		tags: ['长期主义', '数字王国']
	}
]

/** 纸片质感逐级递进：牛皮纸 → 羊皮纸 → 灰石纸 → 蓝釉 + 金箔 → 满金织锦 */
const BACKGROUNDS = ['#e9e1d0', '#f1e9d8', '#e2dfd7', '#dbe3ef', '#5f1418']
const CHARACTER_SCALE = [0.66, 0.74, 0.83, 0.92, 1]
const CHARACTER_FILTERS = [
	'saturate(0.4) brightness(1.02)',
	'saturate(0.6)',
	'saturate(0.78)',
	'saturate(0.9)',
	'saturate(1)'
]
const WARMTH = [0.04, 0.1, 0.2, 0.44, 0.9]
const COOL = [0.3, 0.22, 0.16, 0.08, 0.03]
const FRAME_LEVEL = [0, 1, 2, 3, 4]

const TRANSITION = '800ms cubic-bezier(0.16, 1, 0.3, 1)'

export default function Ascension() {
	const [active, setActive] = useState(0)
	const [visible, setVisible] = useState<number[]>([])
	const blocksRef = useRef<Array<HTMLDivElement | null>>([])

	useEffect(() => {
		const ratios = new Map<Element, number>()
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					ratios.set(entry.target, entry.isIntersecting ? entry.intersectionRatio : 0)
				})

				let bestIndex = 0
				let bestRatio = -1
				ratios.forEach((ratio, element) => {
					const index = Number((element as HTMLElement).dataset.stage)
					if (ratio > bestRatio) {
						bestRatio = ratio
						bestIndex = index
					}
				})
				if (bestRatio > 0) setActive(bestIndex)

				const shown = Array.from(ratios.entries())
					.filter(([, ratio]) => ratio > 0.35)
					.map(([element]) => Number((element as HTMLElement).dataset.stage))
				setVisible(shown.sort((a, b) => a - b))
			},
			{ rootMargin: '-12% 0px -12% 0px', threshold: [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9, 1] }
		)

		blocksRef.current.forEach(block => block && observer.observe(block))
		return () => observer.disconnect()
	}, [])

	return (
		<section id='ascension' className='relative bg-white'>
			{/* 区块标题 */}
			<div className='mx-auto w-full max-w-[1280px] px-6 pt-24 pb-10 text-center sm:px-12 lg:px-20'>
				<p className='text-[12px] font-semibold tracking-[0.3em] text-[#0084FF] uppercase'>The Ascension Journey</p>
				<h2 className='font-outfit mt-4 text-[34px] leading-[1.15] font-black tracking-[-2px] text-black sm:text-[44px] lg:text-[52px]'>
					哈士奇国王的进阶之路
				</h2>
				<p className='mx-auto mt-4 max-w-[560px] text-[16px] leading-relaxed text-black/55'>五个阶段，五张纸片 —— 从牛皮纸上的好奇，到织锦金箔里的笃定。</p>
			</div>

			<div className='relative'>
				{/* 粘性舞台 */}
				<div className='sticky top-0 h-screen w-full overflow-hidden'>
					<PaperDefs />

					<div className='absolute inset-0' style={{ backgroundColor: BACKGROUNDS[active], transition: `background-color ${TRANSITION}` }} />
					<div
						className='absolute inset-0 bg-[radial-gradient(circle_at_72%_30%,rgba(240,205,114,0.5),transparent_62%)]'
						style={{ opacity: WARMTH[active], transition: `opacity ${TRANSITION}` }}
					/>
					<div
						className='absolute inset-0 bg-[radial-gradient(circle_at_26%_84%,rgba(0,132,255,0.12),transparent_58%)]'
						style={{ opacity: COOL[active], transition: `opacity ${TRANSITION}` }}
					/>

					{/* 场景：牛皮纸 → 一条路 → 城堡 → 宫殿 → 王座厅 */}
					<SoilLand opacity={active === 0 ? 1 : 0} />
					<StoneRoad opacity={active === 1 ? 1 : 0} />
					<CastleKeep opacity={active === 2 ? 1 : 0} />
					<MarblePalace opacity={active === 3 ? 1 : 0} />
					<ThroneHall opacity={active === 4 ? 1 : 0} />

					{/* 角色：代码绘制的哈士奇，随阶段成长 */}
					<div className='absolute bottom-0 left-1/2 -translate-x-1/2 lg:right-[6%] lg:left-auto lg:translate-x-0'>
						<Husky
							stage={active + 1}
							className='h-[40vh] w-auto object-contain sm:h-[54vh] lg:h-[70vh]'
							// 用 CSS 变量承载过渡，SVG 内部元素随 stage 重新渲染
						/>
					</div>

					{/* 精装画框 + 纸纹 + 暗角 */}
					<div className='pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_42%,rgba(40,24,12,0.22)_100%)]' />
					<Frame level={FRAME_LEVEL[active]} />
					<PaperTexture strength={0.06} />

					{/* 阶段指示 */}
					<div className='absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center rounded-full border border-white/60 bg-white/70 px-5 py-3 shadow-[0_10px_30px_-16px_rgba(0,0,0,0.4)] backdrop-blur-[16px]'>
						{STAGES.map((stage, index) => (
							<div key={stage.roman} className='flex items-center'>
								<div className='flex items-center gap-2'>
									<span
										className={`h-2.5 rounded-full transition-all duration-500 ${
											index === active ? 'w-7 bg-[#c2963a]' : 'w-2.5 bg-black/20'
										}`}
									/>
									<span className={`hidden text-[11px] font-semibold transition-colors duration-500 sm:inline ${index === active ? 'text-black/80' : 'text-black/35'}`}>
										{stage.title}
									</span>
								</div>
								{index < STAGES.length - 1 && <span className='mx-3 h-px w-6 bg-black/10' />}
							</div>
						))}
					</div>
				</div>

				{/* 文本层：上移一屏，滚动覆盖在粘性舞台之上 */}
				<div className='relative -mt-[100vh]'>
					{STAGES.map((stage, index) => {
						const shown = visible.includes(index)
						return (
							<div
								key={stage.roman}
								id={`stage-${index + 1}`}
								data-stage={index}
								ref={el => void (blocksRef.current[index] = el)}
								className='flex h-screen items-end pb-32 lg:items-center lg:pb-0'>
								<div className='mx-auto w-full max-w-[1280px] px-6 sm:px-12 lg:px-20'>
									<article
										className={`max-w-[520px] rounded-[24px] border border-white/70 bg-linear-to-br from-white/85 to-white/60 p-7 shadow-[0_18px_48px_-24px_rgba(0,0,0,0.25)] backdrop-blur-[20px] transition-all duration-700 ${
											shown ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
										}`}>
										<div className='flex items-center gap-3'>
											<span className='font-outfit text-[13px] font-black tracking-[0.2em] text-[#c2963a]'>STAGE {stage.roman}</span>
											<span className='h-px flex-1 bg-black/10' />
											<span className='text-[11px] font-medium text-black/40'>{stage.material}</span>
										</div>

										<h3 className='font-outfit mt-4 text-[26px] font-black tracking-[-1.5px] text-black sm:text-[32px]'>
											{stage.title}
											<span className='ml-3 align-middle text-[13px] font-semibold tracking-normal text-black/40'>{stage.en}</span>
										</h3>

										<p className='mt-3 text-[15px] leading-relaxed text-black/65'>{stage.desc}</p>

										<div className='mt-5 flex flex-wrap gap-2'>
											{stage.tags.map(tag => (
												<span key={tag} className='rounded-full border border-black/5 bg-white/70 px-3 py-1 text-[11px] font-medium text-black/60'>
													{tag}
												</span>
											))}
										</div>

										{index === STAGES.length - 1 && (
											<div className='mt-6 border-t border-black/10 pt-5'>
												<p className='font-outfit text-[15px] leading-snug font-bold text-black'>From learning code to building digital kingdoms.</p>
												<p className='mt-1 text-[13px] font-medium text-black/55'>从学习代码，到建造数字王国。</p>
											</div>
										)}
									</article>
								</div>
							</div>
						)
					})}
				</div>
			</div>
		</section>
	)
}
