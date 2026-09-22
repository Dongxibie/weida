/**
 * 精装画框：纸纹 + 双线描金边框 + 四角卷草纹。
 *
 * 每一阶段的「华丽度」不同（level 0-4），纸片质感与金箔用量逐级递进：
 * 0 牛皮纸（无金）→ 1 羊皮纸描墨 → 2 描金细边 → 3 蓝金箔 + 卷草 → 4 满金 + 织锦纹
 */

/** 纸纹用 CSS 背景图承载（避免在 JSX 里写 feTurbulence 元素，也省掉实时滤镜开销） */
const PAPER_GRAIN =
	"url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='g'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/></filter><rect width='200' height='200' filter='url(%23g)'/></svg>\")"

const PAPER_FIBER =
	"url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='120'><filter id='f'><feTurbulence type='fractalNoise' baseFrequency='0.01 0.55' numOctaves='2' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/></filter><rect width='300' height='120' filter='url(%23f)'/></svg>\")"

export function PaperDefs() {
	return (
		<defs>
			{/* 织锦纹（阶段 4-5 的墙面底纹） */}
			<pattern id='damask' width='72' height='72' patternUnits='userSpaceOnUse'>
				<g fill='none' stroke='#e3b757' strokeWidth='1.1' opacity='0.5'>
					<path d='M36 6 C 46 18 46 30 36 42 C 26 30 26 18 36 6 Z' />
					<path d='M36 42 C 48 46 52 56 46 66 C 34 64 30 52 36 42 Z' />
					<path d='M36 42 C 24 46 20 56 26 66 C 38 64 42 52 36 42 Z' />
					<path d='M6 36 C 18 26 30 26 42 36 C 30 46 18 46 6 36 Z' />
					<path d='M66 36 C 54 26 42 26 30 36 C 42 46 54 46 66 36 Z' />
					<circle cx='36' cy='36' r='3.2' />
				</g>
			</pattern>
		</defs>
	)
}

/** 四角卷草纹 */
function CornerFlourish({ gold }: { gold: string }) {
	return (
		<g fill='none' stroke={gold} strokeLinecap='round'>
			<path d='M6 46 C 6 24 24 6 46 6' strokeWidth='3' />
			<path d='M14 46 C 14 30 30 14 46 14' strokeWidth='1.4' opacity='0.8' />
			<path d='M46 6 C 60 6 68 12 70 22 C 64 20 56 20 50 24' strokeWidth='2' fill='none' />
			<path d='M6 46 C 6 60 12 68 22 70 C 20 64 20 56 24 50' strokeWidth='2' fill='none' />
			<circle cx='24' cy='24' r='2.4' fill={gold} stroke='none' />
			<circle cx='58' cy='18' r='1.8' fill={gold} stroke='none' />
			<circle cx='18' cy='58' r='1.8' fill={gold} stroke='none' />
		</g>
	)
}

export function Frame({ level }: { level: number }) {
	const gold = level >= 3 ? '#e3b757' : level >= 2 ? '#c8a463' : level >= 1 ? '#9c8460' : '#8b7355'
	const inner = level >= 3 ? '#f0cd72' : gold
	const lineWidth = level >= 3 ? 3 : 2

	return (
		<svg className='pointer-events-none absolute inset-0 h-full w-full' viewBox='0 0 1440 900' preserveAspectRatio='none' aria-hidden='true'>
			{/* 内描金双线 */}
			<rect x='20' y='20' width='1400' height='860' fill='none' stroke={gold} strokeWidth={lineWidth} opacity={level >= 2 ? 0.95 : 0.7} />
			<rect x='30' y='30' width='1380' height='840' fill='none' stroke={inner} strokeWidth='1' opacity={level >= 2 ? 0.7 : 0.4} />

			{/* 四角卷草：华丽度越高越明显 */}
			<g opacity={level >= 2 ? 1 : 0.55}>
				<CornerFlourish gold={gold} />
				<g transform='translate(1440 0) scale(-1 1)'>
					<CornerFlourish gold={gold} />
				</g>
				<g transform='translate(0 900) scale(1 -1)'>
					<CornerFlourish gold={gold} />
				</g>
				<g transform='translate(1440 900) scale(-1 -1)'>
					<CornerFlourish gold={gold} />
				</g>
			</g>

			{/* 上下中央的装饰小菱（阶段 3 起） */}
			{level >= 3 && (
				<g fill={gold} opacity='0.9'>
					<path d='M720 14 l10 10 -10 10 -10 -10 Z' />
					<path d='M720 866 l10 10 -10 10 -10 -10 Z' />
				</g>
			)}
		</svg>
	)
}

/** 覆盖整幅画面的纸纹（放在场景之上、文字之下） */
export function PaperTexture({ strength = 0.06 }: { strength?: number }) {
	return (
		<>
			<div
				className='pointer-events-none absolute inset-0'
				style={{ backgroundImage: PAPER_GRAIN, backgroundSize: '200px 200px', opacity: strength, mixBlendMode: 'multiply' }}
			/>
			<div
				className='pointer-events-none absolute inset-0'
				style={{ backgroundImage: PAPER_FIBER, backgroundSize: '320px 140px', opacity: strength * 0.7, mixBlendMode: 'multiply' }}
			/>
		</>
	)
}
