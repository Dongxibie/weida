'use client'

type LayerProps = { opacity: number }

const frame = 'pointer-events-none absolute inset-0 h-full w-full'
const fade = { transition: 'opacity 700ms ease' }

/** 第一阶段：泥土地、野草、木牌 —— 起点 */
export function SoilLand({ opacity }: LayerProps) {
	return (
		<svg style={{ opacity, ...fade }} className={frame} viewBox='0 0 1440 900' preserveAspectRatio='xMidYMax slice' aria-hidden='true'>
			<defs>
				<linearGradient id='soilGround' x1='0' y1='0' x2='0' y2='1'>
					<stop offset='0' stopColor='#9c7b52' />
					<stop offset='1' stopColor='#6f5232' />
				</linearGradient>
			</defs>
			<path d='M0 700 Q 240 660 480 690 T 960 680 T 1440 700 L1440 900 L0 900 Z' fill='url(#soilGround)' opacity='0.9' />
			<g stroke='#4e3a22' strokeWidth='3' opacity='0.5' fill='none'>
				<path d='M120 760 q 40 -30 80 -8' />
				<path d='M420 800 q 50 -26 96 -6' />
				<path d='M1080 790 q 46 -28 92 -6' />
			</g>
			<g stroke='#5d7a3a' strokeWidth='4' strokeLinecap='round' opacity='0.7'>
				<path d='M300 762 v-34 M300 762 l-14 -22 M300 762 l16 -20' />
				<path d='M360 780 v-28 M360 780 l-12 -18 M360 780 l13 -16' />
				<path d='M1010 774 v-30 M1010 774 l-13 -20 M1010 774 l15 -18' />
				<path d='M1180 786 v-26 M1180 786 l-11 -17 M1180 786 l12 -15' />
			</g>
			<g opacity='0.95'>
				<rect x='168' y='470' width='24' height='250' rx='6' fill='#7b5636' />
				<rect x='90' y='452' width='190' height='62' rx='10' fill='#9a6f45' />
				<rect x='90' y='452' width='190' height='62' rx='10' fill='none' stroke='#6b4a2c' strokeWidth='3' />
				<path d='M108 484 h150' stroke='#6b4a2c' strokeWidth='5' strokeLinecap='round' opacity='0.6' />
			</g>
		</svg>
	)
}

/** 第二阶段：石板路、石砌建筑 */
export function StonePath({ opacity }: LayerProps) {
	return (
		<svg style={{ opacity, ...fade }} className={frame} viewBox='0 0 1440 900' preserveAspectRatio='xMidYMax slice' aria-hidden='true'>
			<defs>
				<pattern id='cobble' width='96' height='64' patternUnits='userSpaceOnUse'>
					<rect width='96' height='64' fill='#a9a49b' />
					<rect x='4' y='4' width='40' height='24' rx='8' fill='#918c83' />
					<rect x='50' y='4' width='42' height='24' rx='8' fill='#9d988f' />
					<rect x='4' y='32' width='44' height='26' rx='8' fill='#9d988f' />
					<rect x='54' y='32' width='38' height='26' rx='8' fill='#8c8780' />
				</pattern>
			</defs>
			<path d='M0 700 Q 300 672 600 692 T 1200 686 T 1440 700 L1440 900 L0 900 Z' fill='url(#cobble)' opacity='0.85' />
			<g opacity='0.75' fill='#8a857c'>
				<rect x='960' y='470' width='240' height='232' rx='8' />
				<path d='M940 476 L1080 372 L1220 476 Z' fill='#7a756d' />
				<rect x='1050' y='600' width='60' height='102' rx='6' fill='#6b6660' />
				<rect x='990' y='520' width='52' height='46' rx='6' fill='#c9d8e2' />
				<rect x='1120' y='520' width='52' height='46' rx='6' fill='#c9d8e2' />
			</g>
			<g stroke='#6f6a63' strokeWidth='3' fill='none' opacity='0.5'>
				<path d='M200 776 q 60 -20 120 -4' />
				<path d='M520 792 q 70 -22 140 -2' />
			</g>
		</svg>
	)
}

/** 第三阶段：城堡、骑士、金属 */
export function CastleKeep({ opacity }: LayerProps) {
	return (
		<svg style={{ opacity, ...fade }} className={frame} viewBox='0 0 1440 900' preserveAspectRatio='xMidYMax slice' aria-hidden='true'>
			<defs>
				<pattern id='brick' width='120' height='72' patternUnits='userSpaceOnUse'>
					<rect width='120' height='72' fill='#5f646b' />
					<rect x='3' y='3' width='54' height='28' rx='3' fill='#6d727a' />
					<rect x='63' y='3' width='54' height='28' rx='3' fill='#656a72' />
					<rect x='3' y='39' width='84' height='28' rx='3' fill='#6a6f77' />
					<rect x='93' y='39' width='24' height='28' rx='3' fill='#5a5f66' />
				</pattern>
				<linearGradient id='steel' x1='0' y1='0' x2='1' y2='1'>
					<stop offset='0' stopColor='#c8d2dc' />
					<stop offset='1' stopColor='#8e9aa6' />
				</linearGradient>
			</defs>
			<path d='M0 706 Q 320 682 640 698 T 1280 690 T 1440 706 L1440 900 L0 900 Z' fill='url(#brick)' opacity='0.85' />
			<g fill='#555a62' opacity='0.85'>
				<rect x='0' y='404' width='560' height='300' />
				<rect x='60' y='380' width='70' height='40' />
				<rect x='200' y='380' width='70' height='40' />
				<rect x='340' y='380' width='70' height='40' />
				<rect x='470' y='380' width='70' height='40' />
			</g>
			<g opacity='0.9'>
				<rect x='600' y='300' width='150' height='406' fill='#4f545c' />
				<path d='M600 300 L675 220 L750 300 Z' fill='#6a5f52' />
				<rect x='640' y='392' width='18' height='70' rx='9' fill='#2f3339' />
				<rect x='692' y='392' width='18' height='70' rx='9' fill='#2f3339' />
			</g>
			<g opacity='0.9'>
				<path d='M1180 560 l70 -22 70 22 v70 q0 62 -70 92 -70 -30 -70 -92 z' fill='url(#steel)' stroke='#6b7683' strokeWidth='4' />
				<path d='M1230 600 v92' stroke='#5f6a76' strokeWidth='8' strokeLinecap='round' />
				<path d='M1210 826 l40 -180 40 180 z' fill='url(#steel)' opacity='0.9' />
			</g>
		</svg>
	)
}

/** 第四阶段：大理石宫殿、金饰 */
export function MarblePalace({ opacity }: LayerProps) {
	return (
		<svg style={{ opacity, ...fade }} className={frame} viewBox='0 0 1440 900' preserveAspectRatio='xMidYMax slice' aria-hidden='true'>
			<defs>
				<linearGradient id='marbleGround' x1='0' y1='0' x2='0' y2='1'>
					<stop offset='0' stopColor='#fbf8f1' />
					<stop offset='1' stopColor='#e4dccd' />
				</linearGradient>
				<linearGradient id='gold' x1='0' y1='0' x2='1' y2='1'>
					<stop offset='0' stopColor='#e2b857' />
					<stop offset='1' stopColor='#b98c22' />
				</linearGradient>
			</defs>
			<path d='M0 700 L1440 700 L1440 900 L0 900 Z' fill='url(#marbleGround)' />
			<g stroke='#cfc4ae' strokeWidth='3' fill='none' opacity='0.75'>
				<path d='M60 838 q 160 -40 320 -6' />
				<path d='M420 866 q 200 -44 420 -8' />
				<path d='M980 842 q 180 -36 360 -4' />
			</g>
			<g>
				<rect x='150' y='180' width='76' height='526' rx='10' fill='url(#marbleGround)' stroke='#d8cdb8' strokeWidth='3' />
				<rect x='120' y='152' width='136' height='36' rx='8' fill='url(#gold)' />
				<rect x='120' y='690' width='136' height='30' rx='8' fill='url(#gold)' />
				<rect x='1214' y='180' width='76' height='526' rx='10' fill='url(#marbleGround)' stroke='#d8cdb8' strokeWidth='3' />
				<rect x='1184' y='152' width='136' height='36' rx='8' fill='url(#gold)' />
				<rect x='1184' y='690' width='136' height='30' rx='8' fill='url(#gold)' />
			</g>
			<path d='M226 180 q 494 -150 988 0' fill='none' stroke='url(#gold)' strokeWidth='12' />
			<g fill='url(#gold)' opacity='0.9'>
				<circle cx='510' cy='128' r='9' />
				<circle cx='720' cy='112' r='9' />
				<circle cx='930' cy='128' r='9' />
			</g>
		</svg>
	)
}

/** 第五阶段：王座厅，红墙、金饰、红毯与旗帜 */
export function ThroneHall({ opacity }: LayerProps) {
	return (
		<svg style={{ opacity, ...fade }} className={frame} viewBox='0 0 1440 900' preserveAspectRatio='xMidYMax slice' aria-hidden='true'>
			<defs>
				<linearGradient id='hallWall' x1='0' y1='0' x2='0' y2='1'>
					<stop offset='0' stopColor='#5c1a1d' />
					<stop offset='1' stopColor='#3c1013' />
				</linearGradient>
				<linearGradient id='royalGold' x1='0' y1='0' x2='1' y2='1'>
					<stop offset='0' stopColor='#f0cd72' />
					<stop offset='1' stopColor='#c2963a' />
				</linearGradient>
				<linearGradient id='carpet' x1='0' y1='0' x2='0' y2='1'>
					<stop offset='0' stopColor='#a01f24' />
					<stop offset='1' stopColor='#7d1418' />
				</linearGradient>
			</defs>
			<rect width='1440' height='900' fill='url(#hallWall)' />
			<path d='M0 760 L1440 760 L1440 900 L0 900 Z' fill='#f7f3ea' opacity='0.95' />
			<path d='M120 760 L1320 760 L1440 830 L0 830 Z' fill='#eae3d5' />
			<path d='M600 900 L560 760 L880 760 L840 900 Z' fill='url(#carpet)' />
			<path d='M600 900 L560 760 L880 760 L840 900 Z' fill='none' stroke='url(#royalGold)' strokeWidth='6' />
			<g opacity='0.95'>
				<rect x='250' y='120' width='14' height='470' fill='url(#royalGold)' />
				<path d='M264 150 h120 v210 l-60 -46 -60 46 z' fill='url(#carpet)' stroke='url(#royalGold)' strokeWidth='5' />
				<rect x='1176' y='120' width='14' height='470' fill='url(#royalGold)' />
				<path d='M1056 150 h120 v210 l-60 -46 -60 46 z' fill='url(#carpet)' stroke='url(#royalGold)' strokeWidth='5' />
			</g>
			<g transform='translate(720 470)'>
				<path d='M-96 290 L-96 40 q0 -70 96 -110 96 40 96 110 L96 290 Z' fill='url(#royalGold)' opacity='0.95' />
				<path d='M-70 290 L-70 60 q0 -52 70 -82 70 30 70 82 L70 290 Z' fill='url(#carpet)' />
				<circle cx='0' cy='-86' r='16' fill='url(#royalGold)' />
			</g>
		</svg>
	)
}
