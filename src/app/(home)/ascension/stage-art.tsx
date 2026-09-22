/**
 * 五个阶段的纸片场景（纯 SVG 绘制，剪纸风格，随阶段逐级"精装"）。
 *
 * 注意：五个场景会同时挂在 DOM 里（靠 opacity 交叉淡入），
 * 因此所有 gradient / pattern / filter 的 id 都必须带场景前缀，避免互相覆盖。
 */

type LayerProps = { opacity: number }

const svgClass = 'pointer-events-none absolute inset-0 h-full w-full'
const fade = { transition: 'opacity 700ms ease' }

/* ============================================================
 * 阶段 1 · 起点：牛皮纸、草地、木牌
 * ============================================================ */
export function SoilLand({ opacity }: LayerProps) {
	return (
		<svg style={{ opacity, ...fade }} className={svgClass} viewBox='0 0 1440 900' preserveAspectRatio='xMidYMax slice' aria-hidden='true'>
			<defs>
				<linearGradient id='s1-ground' x1='0' y1='0' x2='0' y2='1'>
					<stop offset='0' stopColor='#c9a877' />
					<stop offset='1' stopColor='#a5824f' />
				</linearGradient>
				<linearGradient id='s1-hill' x1='0' y1='0' x2='0' y2='1'>
					<stop offset='0' stopColor='#b89361' />
					<stop offset='1' stopColor='#8f6f42' />
				</linearGradient>
			</defs>

			{/* 云（纸片） */}
			<g fill='#fbf8f2' opacity='0.95'>
				<path d='M180 150 C 180 122 210 106 236 118 C 246 96 282 96 292 122 C 316 120 330 140 322 158 L 186 158 C 180 158 178 154 180 150 Z' />
				<path d='M1050 118 C 1050 94 1076 80 1098 90 C 1108 70 1140 70 1148 94 C 1168 92 1180 110 1172 126 L 1056 126 C 1050 126 1048 122 1050 118 Z' />
			</g>

			{/* 远山（纸片层） */}
			<path d='M0 640 Q 260 566 520 620 T 1040 606 T 1440 636 L 1440 900 L 0 900 Z' fill='url(#s1-hill)' opacity='0.75' />

			{/* 近处地面：撕边纸片 */}
			<path d='M0 706 Q 200 672 420 692 T 860 682 T 1280 700 T 1440 690 L 1440 900 L 0 900 Z' fill='url(#s1-ground)' />

			{/* 草簇 */}
			<g stroke='#6f8f47' strokeWidth='5' strokeLinecap='round' fill='none'>
				<path d='M300 764 v-40 M300 764 l-16 -26 M300 764 l18 -24' />
				<path d='M360 786 v-34 M360 786 l-14 -22 M360 786 l15 -20' />
				<path d='M980 776 v-38 M980 776 l-15 -24 M980 776 l16 -22' />
				<path d='M1180 792 v-30 M1180 792 l-13 -20 M1180 792 l14 -18' />
			</g>
			<g stroke='#87a95c' strokeWidth='4' strokeLinecap='round' fill='none' opacity='0.9'>
				<path d='M340 748 v-24 M340 748 l-10 -16 M340 748 l11 -14' />
				<path d='M1040 764 v-26 M1040 764 l-11 -17 M1040 764 l12 -15' />
			</g>

			{/* 小石头 */}
			<g fill='#8d6b45' opacity='0.7'>
				<ellipse cx='470' cy='800' rx='18' ry='9' />
				<ellipse cx='700' cy='828' rx='14' ry='7' />
				<ellipse cx='1120' cy='836' rx='16' ry='8' />
			</g>

			{/* 木牌 */}
			<g>
				<path d='M246 700 L 262 700 L 268 508 L 252 508 Z' fill='#8a5f38' />
				<path d='M170 470 L 350 470 L 362 520 L 158 520 Z' fill='#a3763f' />
				<path d='M170 470 L 350 470 L 362 520 L 158 520 Z' fill='none' stroke='#6f4a24' strokeWidth='4' />
				<path d='M186 500 L 330 500' stroke='#6f4a24' strokeWidth='6' strokeLinecap='round' opacity='0.65' />
				{/* 站在牌上的小鸟 */}
				<g fill='#4a3a2a'>
					<ellipse cx='392' cy='452' rx='15' ry='12' />
					<path d='M406 448 l14 -6 -14 -6 Z' />
					<path d='M388 464 l-4 14 M396 464 l4 14' stroke='#4a3a2a' strokeWidth='3' strokeLinecap='round' />
				</g>
			</g>

			{/* 小雏菊 */}
			<g fill='#fdfaf2'>
				<circle cx='640' cy='790' r='9' />
				<circle cx='1260' cy='754' r='8' />
			</g>
			<g fill='#e8b64a'>
				<circle cx='640' cy='790' r='4' />
				<circle cx='1260' cy='754' r='3.5' />
			</g>

			{/* 远处的飞鸟（留白处点缀） */}
			<g stroke='#8b7355' strokeWidth='3' fill='none' strokeLinecap='round' opacity='0.7'>
				<path d='M700 250 q 14 -12 28 0 q 14 -12 28 0' />
				<path d='M780 292 q 10 -9 20 0 q 10 -9 20 0' />
				<path d='M420 300 q 9 -8 18 0 q 9 -8 18 0' />
			</g>
			{/* 淡淡的墨线草图感 */}
			<g stroke='#8b7355' strokeWidth='2' fill='none' opacity='0.18'>
				<path d='M120 560 q 180 -40 360 -6' />
				<path d='M900 588 q 220 -36 420 -4' />
			</g>
		</svg>
	)
}

/* ============================================================
 * 阶段 2 · 学徒：一条蜿蜒向前的路（流线型主视觉）
 * ============================================================ */
export function StoneRoad({ opacity }: LayerProps) {
	// 路的中心线：从近处宽、逐渐收窄到远处消失点
	const path = 'M 520 900 C 560 800 760 760 900 700 C 1040 640 1010 560 880 520 C 760 484 700 440 760 396 C 806 362 900 350 980 330'
	const stoneRects = [
		{ x: 700, y: 844, w: 186, h: 30, r: -6 },
		{ x: 806, y: 786, w: 164, h: 28, r: -12 },
		{ x: 906, y: 720, w: 142, h: 26, r: -18 },
		{ x: 982, y: 656, w: 120, h: 24, r: -24 },
		{ x: 986, y: 588, w: 100, h: 22, r: -30 },
		{ x: 912, y: 530, w: 86, h: 20, r: -28 },
		{ x: 826, y: 470, w: 72, h: 18, r: -18 },
		{ x: 800, y: 414, w: 60, h: 16, r: -6 },
		{ x: 852, y: 370, w: 48, h: 14, r: 8 }
	]
	const markers = [
		{ x: 560, y: 700, scale: 1.15, label: 'I' },
		{ x: 1010, y: 560, scale: 0.95, label: 'II' },
		{ x: 690, y: 470, scale: 0.8, label: 'III' }
	]

	return (
		<svg style={{ opacity, ...fade }} className={svgClass} viewBox='0 0 1440 900' preserveAspectRatio='xMidYMax slice' aria-hidden='true'>
			<defs>
				<linearGradient id='s2-hill' x1='0' y1='0' x2='0' y2='1'>
					<stop offset='0' stopColor='#e7dcc3' />
					<stop offset='1' stopColor='#cdbf9f' />
				</linearGradient>
				<linearGradient id='s2-road' x1='0' y1='0' x2='0' y2='1'>
					<stop offset='0' stopColor='#efe6d2' />
					<stop offset='1' stopColor='#cbbd9c' />
				</linearGradient>
				<linearGradient id='s2-grass' x1='0' y1='0' x2='0' y2='1'>
					<stop offset='0' stopColor='#9fb469' />
					<stop offset='1' stopColor='#7c9450' />
				</linearGradient>
			</defs>

			{/* 远景丘陵 */}
			<path d='M0 620 Q 300 552 620 600 T 1180 578 T 1440 606 L 1440 900 L 0 900 Z' fill='url(#s2-hill)' opacity='0.9' />

			{/* 路面（宽纸带，流线型） */}
			<path d={path} fill='none' stroke='#b8a888' strokeWidth='128' strokeLinecap='round' opacity='0.55' />
			<path d={path} fill='none' stroke='url(#s2-road)' strokeWidth='112' strokeLinecap='round' />
			{/* 路面高光（纸片的受光边） */}
			<path d={path} fill='none' stroke='#fbf6ea' strokeWidth='16' strokeLinecap='round' opacity='0.75' transform='translate(-26 0)' />

			{/* 路的中央石板 */}
			<g fill='#d8c9a6' stroke='#b3a17c' strokeWidth='3'>
				{stoneRects.map((s, i) => (
					<rect key={i} x={s.x} y={s.y} width={s.w} height={s.h} rx={s.h / 2} transform={`rotate(${s.r} ${s.x + s.w / 2} ${s.y + s.h / 2})`} />
				))}
			</g>

			{/* 两侧草地纸片 */}
			<path d='M0 786 Q 180 742 380 776 T 760 792 L 720 900 L 0 900 Z' fill='url(#s2-grass)' opacity='0.92' />
			<path d='M1440 764 Q 1240 726 1040 762 T 660 782 L 700 900 L 1440 900 Z' fill='url(#s2-grass)' opacity='0.92' />

			{/* 路标（里程碑 I / II / III） */}
			{markers.map((m, i) => (
				<g key={i} transform={`translate(${m.x} ${m.y}) scale(${m.scale})`}>
					<path d='M-5 0 L 5 0 L 6 -96 L -6 -96 Z' fill='#8a6a42' />
					<path d='M-26 -96 L 30 -96 L 38 -58 L -32 -58 Z' fill='#f4ead2' stroke='#a98b5c' strokeWidth='3' />
					<text x='3' y='-71' textAnchor='middle' fontSize='24' fontWeight='700' fill='#7b5f35' fontFamily='Georgia, serif'>
						{m.label}
					</text>
					<path d='M0 -96 L 0 -118' stroke='#8a6a42' strokeWidth='4' strokeLinecap='round' />
					<path d='M0 -118 L 26 -110 L 0 -102 Z' fill='#c8503f' />
				</g>
			))}

			{/* 小路尽头的塔（目标） */}
			<g opacity='0.95'>
				<path d='M906 268 L 986 268 L 986 356 L 906 356 Z' fill='#e3d8bd' stroke='#b8a888' strokeWidth='3' />
				<path d='M896 268 L 946 206 L 996 268 Z' fill='#b4744a' />
				<path d='M946 206 L 946 176' stroke='#8a6a42' strokeWidth='4' strokeLinecap='round' />
				<path d='M946 176 L 972 184 L 946 192 Z' fill='#c8503f' />
				<path d='M928 300 h20 v28 h-20 Z' fill='#a98b5c' />
				<path d='M950 96 L 942 78 L 946 80 L 950 70 L 954 80 L 958 78 Z' fill='#e8b64a' opacity='0.9' />
			</g>

			{/* 路灯 */}
			<g transform='translate(1180 636)'>
				<path d='M0 0 L 0 -150' stroke='#6f5a3c' strokeWidth='8' strokeLinecap='round' />
				<path d='M0 -150 C 0 -170 16 -178 26 -170' fill='none' stroke='#6f5a3c' strokeWidth='8' strokeLinecap='round' />
				<path d='M14 -170 L 44 -170 L 40 -140 L 18 -140 Z' fill='#f6d98a' stroke='#a98b5c' strokeWidth='3' />
				<circle cx='29' cy='-155' r='34' fill='#f6d98a' opacity='0.28' />
			</g>

			{/* 小树 */}
			<g>
				<path d='M300 726 L 306 642' stroke='#7a5c38' strokeWidth='7' strokeLinecap='round' />
				<path d='M304 640 C 266 640 248 610 266 584 C 250 566 266 536 296 540 C 302 512 342 508 356 532 C 386 528 400 556 384 578 C 402 600 384 634 350 636 C 344 646 320 650 304 640 Z' fill='#7f9e58' />
				<path d='M1230 700 L 1238 620' stroke='#7a5c38' strokeWidth='7' strokeLinecap='round' />
				<path d='M1234 618 C 1200 618 1182 592 1198 570 C 1186 550 1204 526 1230 532 C 1240 508 1272 508 1282 530 C 1306 534 1312 562 1296 578 C 1306 600 1288 622 1260 620 C 1252 628 1240 626 1234 618 Z' fill='#8aa862' />
			</g>
		</svg>
	)
}

/* ============================================================
 * 阶段 3 · 骑士建造者：城堡、铁灰与铁匠铺
 * ============================================================ */
export function CastleKeep({ opacity }: LayerProps) {
	const crenels = Array.from({ length: 11 }, (_, i) => 120 + i * 66)
	return (
		<svg style={{ opacity, ...fade }} className={svgClass} viewBox='0 0 1440 900' preserveAspectRatio='xMidYMax slice' aria-hidden='true'>
			<defs>
				<linearGradient id='s3-stone' x1='0' y1='0' x2='0' y2='1'>
					<stop offset='0' stopColor='#a9a49a' />
					<stop offset='1' stopColor='#7e7a72' />
				</linearGradient>
				<linearGradient id='s3-wall' x1='0' y1='0' x2='0' y2='1'>
					<stop offset='0' stopColor='#8e8a82' />
					<stop offset='1' stopColor='#6b6862' />
				</linearGradient>
				<linearGradient id='s3-steel' x1='0' y1='0' x2='1' y2='1'>
					<stop offset='0' stopColor='#dbe3ee' />
					<stop offset='1' stopColor='#98a4b3' />
				</linearGradient>
			</defs>

			{/* 天空与云：给石堡一点纵深 */}
			<g fill='#fbfaf6' opacity='0.9'>
				<path d='M200 150 C 200 126 226 112 248 122 C 258 102 290 102 298 124 C 318 122 330 140 322 156 L 206 156 C 200 156 198 154 200 150 Z' />
				<path d='M1140 118 C 1140 96 1164 84 1184 92 C 1193 74 1222 74 1230 94 C 1248 92 1259 108 1252 122 L 1146 122 C 1140 122 1138 120 1140 118 Z' />
			</g>
			<g stroke='#8a857e' strokeWidth='3' fill='none' strokeLinecap='round' opacity='0.55'>
				<path d='M900 176 q 12 -10 24 0 q 12 -10 24 0' />
				<path d='M980 210 q 10 -8 20 0 q 10 -8 20 0' />
			</g>
			{/* 地平线雾带 */}
			<rect x='0' y='452' width='1440' height='34' fill='#c9c5bd' opacity='0.35' />

			{/* 城墙主体 */}
			<path d='M0 470 L 1440 470 L 1440 900 L 0 900 Z' fill='url(#s3-wall)' opacity='0.35' />
			<path d='M0 486 L 1440 486 L 1440 700 L 0 700 Z' fill='url(#s3-wall)' />
			{/* 垛口 */}
			<g fill='#7d7a73'>
				{crenels.map((x, i) => (
					<rect key={i} x={x} y={438} width={38} height={52} rx={3} />
				))}
			</g>
			{/* 砖缝 */}
			<g stroke='#5f5c56' strokeWidth='2' opacity='0.45'>
				<path d='M0 546 H1440 M0 610 H1440 M0 664 H1440' />
			</g>

			{/* 城门楼 */}
			<g>
				<rect x='596' y='352' width='248' height='334' rx='6' fill='#767470' />
				<g fill='#8b8881'>
					<rect x='596' y='318' width='40' height='40' />
					<rect x='676' y='318' width='40' height='40' />
					<rect x='756' y='318' width='40' height='40' />
					<rect x='820' y='318' width='24' height='40' />
				</g>
				{/* 拱门 */}
				<path d='M650 686 L 650 560 C 650 522 682 494 720 494 C 758 494 790 522 790 560 L 790 686 Z' fill='#3a3733' />
				<path d='M650 686 L 650 560 C 650 522 682 494 720 494 C 758 494 790 522 790 560 L 790 686 Z' fill='none' stroke='#9a958c' strokeWidth='8' />
				{/* 闸门栅栏 */}
				<g stroke='#b8b2a8' strokeWidth='6' opacity='0.75'>
					<path d='M668 686 L 668 542 M694 686 L 694 520 M720 686 L 720 512 M746 686 L 746 520 M772 686 L 772 542' />
				</g>
				{/* 城垛上的旗帜 */}
				<path d='M720 318 L 720 250' stroke='#4f4a44' strokeWidth='6' strokeLinecap='round' />
				<path d='M722 252 L 796 266 L 722 300 Z' fill='#b02a31' />
				<path d='M722 252 L 796 266 L 722 300 Z' fill='none' stroke='#e3b757' strokeWidth='3' />
			</g>

			{/* 两侧圆塔 */}
			{[
				{ x: 250 },
				{ x: 1190 }
			].map((t, i) => (
				<g key={i}>
					<rect x={t.x} y='330' width='120' height='360' rx='10' fill='#84817a' />
					<path d={`M${t.x - 18} 330 L ${t.x + 60} 236 L ${t.x + 138} 330 Z`} fill='#a8563f' />
					<path d={`M${t.x - 18} 330 L ${t.x + 60} 236 L ${t.x + 138} 330 Z`} fill='none' stroke='#7d3a2a' strokeWidth='5' />
					<rect x={t.x + 44} y='392' width='30' height='52' rx='15' fill='#3a3733' />
					<rect x={t.x + 44} y='480' width='30' height='52' rx='15' fill='#3a3733' />
					<path d={`M${t.x + 60} 236 L ${t.x + 60} 186`} stroke='#4f4a44' strokeWidth='5' strokeLinecap='round' />
					<path d={`M${t.x + 62} 188 L ${t.x + 122} 200 L ${t.x + 62} 228 Z`} fill='#b02a31' stroke='#e3b757' strokeWidth='2.5' />
				</g>
			))}

			{/* 铁匠铺：铁砧 + 锤子 + 火星（放在左侧，避免被角色遮住） */}
			<g transform='translate(210 654)'>
				<path d='M-30 60 L 70 60 L 56 88 L -16 88 Z' fill='#5f5a52' />
				<path d='M-52 22 L 92 22 L 74 48 L -34 48 Z' fill='#8d97a5' />
				<path d='M-52 22 L 92 22 L 74 48 L -34 48 Z' fill='none' stroke='#5f6a78' strokeWidth='4' />
				<path d='M196 14 L 168 -60' stroke='#7a5c38' strokeWidth='12' strokeLinecap='round' />
				<path d='M156 -76 L 190 -60 L 168 -34 Z' fill='#9aa6b6' stroke='#5f6a78' strokeWidth='3' />
				<g fill='#f0a83c'>
					<circle cx='110' cy='6' r='5' />
					<circle cx='132' cy='-14' r='4' />
					<circle cx='96' cy='-22' r='3.5' />
					<circle cx='148' cy='-34' r='3' />
				</g>
			</g>
		</svg>
	)
}

/* ============================================================
 * 阶段 4 · 王国建筑师：英式巴比伦宫殿（蓝釉砖 + 描金 + 拱门）
 * ============================================================ */
export function MarblePalace({ opacity }: LayerProps) {
	const glazeCrenels = Array.from({ length: 15 }, (_, i) => 336 + i * 52)
	const rosettes = Array.from({ length: 9 }, (_, i) => 366 + i * 90)

	return (
		<svg style={{ opacity, ...fade }} className={svgClass} viewBox='0 0 1440 900' preserveAspectRatio='xMidYMax slice' aria-hidden='true'>
			<defs>
				<linearGradient id='s4-glaze' x1='0' y1='0' x2='0' y2='1'>
					<stop offset='0' stopColor='#2c62ad' />
					<stop offset='1' stopColor='#173a72' />
				</linearGradient>
				<linearGradient id='s4-marble' x1='0' y1='0' x2='0' y2='1'>
					<stop offset='0' stopColor='#f7f3ea' />
					<stop offset='1' stopColor='#ded3bd' />
				</linearGradient>
				<linearGradient id='s4-gold' x1='0' y1='0' x2='0.6' y2='1'>
					<stop offset='0' stopColor='#f7dc94' />
					<stop offset='0.5' stopColor='#e3b757' />
					<stop offset='1' stopColor='#b3862a' />
				</linearGradient>
			</defs>

			{/* 天空与云 */}
			<g fill='#fdfcf9' opacity='0.95'>
				<path d='M180 128 C 180 104 206 90 228 100 C 238 80 270 80 278 102 C 298 100 310 118 302 134 L 186 134 C 180 134 178 132 180 128 Z' />
				<path d='M1120 96 C 1120 74 1144 62 1164 70 C 1173 52 1202 52 1210 72 C 1228 70 1239 86 1232 100 L 1126 100 C 1120 100 1118 98 1120 96 Z' />
				<path d='M660 150 C 660 134 678 124 694 130 C 701 116 722 116 728 131 C 741 130 749 142 744 152 L 664 152 C 660 152 659 151 660 150 Z' />
			</g>

			{/* 台基 */}
			<path d='M60 760 L 1380 760 L 1440 830 L 0 830 Z' fill='#efe7d6' />
			<path d='M0 830 L 1440 830 L 1440 900 L 0 900 Z' fill='url(#s4-marble)' />

			{/* 两侧翼楼（蓝釉砖 + 金带 + 拱窗） */}
			{[
				{ x: 120, w: 300 },
				{ x: 1020, w: 300 }
			].map((wing, i) => (
				<g key={i}>
					<rect x={wing.x} y='318' width={wing.w} height='442' fill='url(#s4-glaze)' />
					{/* 侧翼压暗，制造纵深 */}
					<rect x={wing.x} y='318' width={wing.w} height='442' fill='#0b1c38' opacity='0.32' />
					<rect x={wing.x} y='318' width={wing.w} height='26' fill='url(#s4-gold)' />
					<rect x={wing.x} y='452' width={wing.w} height='14' fill='url(#s4-gold)' opacity='0.85' />
					<rect x={wing.x} y='612' width={wing.w} height='14' fill='url(#s4-gold)' opacity='0.85' />
					{/* 拱窗 */}
					{[0, 1, 2].map(k => (
						<g key={k} transform={`translate(${wing.x + 42 + k * 92} 512)`}>
							<path d='M0 96 L 0 34 C 0 10 18 -4 32 -4 C 46 -4 64 10 64 34 L 64 96 Z' fill='#0f254a' />
							<path d='M0 96 L 0 34 C 0 10 18 -4 32 -4 C 46 -4 64 10 64 34 L 64 96 Z' fill='none' stroke='url(#s4-gold)' strokeWidth='4' />
							<path d='M32 4 L 32 96' stroke='#e3b757' strokeWidth='2' opacity='0.7' />
						</g>
					))}
					{/* 顶部垛口 */}
					<g fill={i === 0 ? '#24548f' : '#24548f'}>
						{[0, 1, 2, 3, 4, 5].map(k => (
							<rect key={k} x={wing.x + 8 + k * 50} y='286' width='30' height='34' rx={2} />
						))}
					</g>
				</g>
			))}

			{/* 中央主体 */}
			<g>
				{/* 蓝釉墙身 */}
				<rect x='466' y='230' width='508' height='530' fill='url(#s4-glaze)' />
				{/* 顶部垛口 */}
				<g fill='#24548f'>
					{glazeCrenels.map((x, i) => (
						<rect key={i} x={x} y='196' width='34' height='36' rx={2} />
					))}
				</g>
				{/* 金腰带 ×3 */}
				<rect x='466' y='230' width='508' height='24' fill='url(#s4-gold)' />
				<rect x='466' y='330' width='508' height='12' fill='url(#s4-gold)' opacity='0.85' />
				<rect x='466' y='368' width='508' height='12' fill='url(#s4-gold)' opacity='0.85' />
				{/* 釉砖金玫瑰饰带 */}
				<g fill='url(#s4-gold)' opacity='0.95'>
					{rosettes.map((x, i) => (
						<g key={i} transform={`translate(${x} 300)`}>
							<circle r='9' />
							<circle r='3.4' fill='#173a72' />
						</g>
					))}
				</g>

				{/* 双联伊什塔尔拱门 */}
				{[0, 1].map(k => (
					<g key={k} transform={`translate(${556 + k * 176} 470)`}>
						<path d='M0 250 L 0 96 C 0 46 34 8 76 8 C 118 8 152 46 152 96 L 152 250 Z' fill='#0d1f3f' />
						<path d='M0 250 L 0 96 C 0 46 34 8 76 8 C 118 8 152 46 152 96 L 152 250 Z' fill='none' stroke='url(#s4-gold)' strokeWidth='9' />
						<path d='M12 250 L 12 100 C 12 56 40 24 76 24 C 112 24 140 56 140 100 L 140 250' fill='none' stroke='#e3b757' strokeWidth='3' opacity='0.85' />
						{/* 门内暖光 */}
						<path d='M22 250 L 22 104 C 22 62 46 34 76 34 C 106 34 130 62 130 104 L 130 250 Z' fill='#c98a3c' opacity='0.35' />
					</g>
				))}

				{/* 立柱（英式：凹槽柱身 + 金柱头） */}
				{[480, 640, 800, 960].map((x, i) => (
					<g key={i}>
						<rect x={x - 14} y='430' width='28' height='330' fill='#f2ead8' />
						<g stroke='#d8ceb6' strokeWidth='2'>
							<path d={`M${x - 6} 430 L ${x - 6} 760`} />
							<path d={`M${x + 6} 430 L ${x + 6} 760`} />
						</g>
						<rect x={x - 22} y='416' width='44' height='22' rx='4' fill='url(#s4-gold)' />
						<rect x={x - 20} y='760' width='40' height='18' rx='4' fill='url(#s4-gold)' />
						<path d={`M${x - 22} 416 q 22 -18 44 0`} fill='url(#s4-gold)' />
					</g>
				))}

				{/* 檐下花环 */}
				<g stroke='#7f9e58' strokeWidth='7' fill='none' opacity='0.95'>
					<path d='M494 412 q 146 -34 292 0' />
				</g>
				<g fill='#c8503f'>
					<circle cx='560' cy='392' r='6' />
					<circle cx='640' cy='384' r='6' />
					<circle cx='720' cy='382' r='6' />
					<circle cx='800' cy='384' r='6' />
					<circle cx='880' cy='392' r='6' />
				</g>

				{/* 顶部金三角山花 + 王冠徽记 */}
				<path d='M604 196 L 720 96 L 836 196 Z' fill='url(#s4-gold)' />
				<path d='M604 196 L 720 96 L 836 196 Z' fill='none' stroke='#b3862a' strokeWidth='4' />
				<g transform='translate(720 158)'>
					<path d='M-34 12 L -34 -6 L -18 4 L 0 -14 L 18 4 L 34 -6 L 34 12 Z' fill='#b7202b' />
					<path d='M-34 12 L 34 12' stroke='#701117' strokeWidth='4' />
					<circle cx='0' cy='-22' r='5' fill='#b7202b' />
				</g>
				{/* 金顶饰 */}
				<path d='M720 96 L 720 64' stroke='url(#s4-gold)' strokeWidth='7' strokeLinecap='round' />
				<circle cx='720' cy='56' r='9' fill='url(#s4-gold)' />

				{/* 台阶：可见踏面与踢面，读起来是楼梯 */}
				{Array.from({ length: 4 }, (_, i) => {
					const top = 686 + i * 26
					const half = 150 + i * 24
					return (
						<g key={i}>
							<path d={`M${720 - half} ${top} L ${720 + half} ${top} L ${720 + half + 18} ${top + 12} L ${720 - half - 18} ${top + 12} Z`} fill='#f8f3e8' />
							<path
								d={`M${720 - half - 18} ${top + 12} L ${720 + half + 18} ${top + 12} L ${720 + half + 18} ${top + 27} L ${720 - half - 18} ${top + 27} Z`}
								fill='#dccfb4'
							/>
						</g>
					)
				})}
				{/* 台阶上的红毯 */}
				<path d='M660 686 L 780 686 L 800 800 L 640 800 Z' fill='#a8232a' opacity='0.9' />
				<path d='M660 686 L 780 686 L 800 800 L 640 800 Z' fill='none' stroke='#e3b757' strokeWidth='4' />

				{/* 石狮（纸片剪影） */}
				{[
					{ x: 402, s: 1.5 },
					{ x: 1038, s: -1.5 }
				].map((l, i) => (
					<g key={i} transform={`translate(${l.x} 706) scale(${l.s} ${Math.abs(l.s)})`}>
						<rect x='-30' y='-8' width='72' height='14' rx='3' fill='#e0d6c0' />
						<path d='M-22 -8 C -30 -34 -14 -52 8 -52 C 30 -52 44 -34 36 -8 Z' fill='#cdbf9f' />
						<circle cx='8' cy='-60' r='19' fill='#d8cca9' />
						<g fill='#b8a888'>
							<circle cx='2' cy='-64' r='3' />
							<circle cx='14' cy='-64' r='3' />
						</g>
						<path d='M-6 -74 q 14 -12 28 0' fill='none' stroke='#b8a888' strokeWidth='3' />
					</g>
				))}
			</g>
		</svg>
	)
}

/* ============================================================
 * 阶段 5 · 哈士奇国王：王座厅（织锦红墙 + 金饰 + 圆顶华盖）
 * ============================================================ */
export function ThroneHall({ opacity }: LayerProps) {
	return (
		<svg style={{ opacity, ...fade }} className={svgClass} viewBox='0 0 1440 900' preserveAspectRatio='xMidYMax slice' aria-hidden='true'>
			<defs>
				<linearGradient id='s5-wall' x1='0' y1='0' x2='0' y2='1'>
					<stop offset='0' stopColor='#6d1a1f' />
					<stop offset='1' stopColor='#3a0e12' />
				</linearGradient>
				<linearGradient id='s5-gold' x1='0' y1='0' x2='0.4' y2='1'>
					<stop offset='0' stopColor='#f9e3a6' />
					<stop offset='0.5' stopColor='#e3b757' />
					<stop offset='1' stopColor='#a97c22' />
				</linearGradient>
				<linearGradient id='s5-velvet' x1='0' y1='0' x2='0' y2='1'>
					<stop offset='0' stopColor='#b0262d' />
					<stop offset='1' stopColor='#6d1216' />
				</linearGradient>
				<linearGradient id='s5-floor' x1='0' y1='0' x2='0' y2='1'>
					<stop offset='0' stopColor='#f6f1e6' />
					<stop offset='1' stopColor='#d9cfb8' />
				</linearGradient>
			</defs>

			{/* 墙：酒红 + 织锦纹 */}
			<rect width='1440' height='900' fill='url(#s5-wall)' />
			<rect width='1440' height='900' fill='url(#damask)' opacity='0.5' />

			{/* 两侧金柱 */}
			{[70, 250, 1190, 1370].map((x, i) => (
				<g key={i}>
					<rect x={x - 22} y='150' width='44' height='600' fill='url(#s5-gold)' />
					<g stroke='#a97c22' strokeWidth='2' opacity='0.5'>
						<path d={`M${x - 8} 150 L ${x - 8} 750 M${x + 8} 150 L ${x + 8} 750`} />
					</g>
					<rect x={x - 34} y='128' width='68' height='26' rx='5' fill='url(#s5-gold)' />
					<rect x={x - 32} y='750' width='64' height='22' rx='5' fill='url(#s5-gold)' />
				</g>
			))}

			{/* 两侧拱窗 + 红帷幔 */}
			{[400, 1040].map((x, i) => (
				<g key={i}>
					<path d={`M${x - 86} 560 L ${x - 86} 250 C ${x - 86} 176 ${x - 40} 130 ${x} 130 C ${x + 40} 130 ${x + 86} 176 ${x + 86} 250 L ${x + 86} 560 Z`} fill='#f6dfa8' opacity='0.35' />
					<path d={`M${x - 86} 560 L ${x - 86} 250 C ${x - 86} 176 ${x - 40} 130 ${x} 130 C ${x + 40} 130 ${x + 86} 176 ${x + 86} 250 L ${x + 86} 560 Z`} fill='none' stroke='url(#s5-gold)' strokeWidth='8' />
					<path d={`M${x - 60} 560 L ${x - 60} 250 C ${x - 60} 190 ${x - 26} 156 ${x} 156 C ${x + 26} 156 ${x + 60} 190 ${x + 60} 250 L ${x + 60} 560`} fill='none' stroke='#f9e3a6' strokeWidth='3' opacity='0.8' />
					{/* 帷幔 */}
					<path d={`M${x - 92} 150 C ${x - 60} 210 ${x - 70} 330 ${x - 88} 560 L ${x - 74} 560 C ${x - 56} 340 ${x - 48} 226 ${x - 78} 152 Z`} fill='url(#s5-velvet)' />
					<path d={`M${x + 92} 150 C ${x + 60} 210 ${x + 70} 330 ${x + 88} 560 L ${x + 74} 560 C ${x + 56} 340 ${x + 48} 226 ${x + 78} 152 Z`} fill='url(#s5-velvet)' />
					<circle cx={x - 82} cy='330' r='13' fill='url(#s5-gold)' />
					<circle cx={x + 82} cy='330' r='13' fill='url(#s5-gold)' />
				</g>
			))}

			{/* 华盖（baldachin） */}
			<g>
				<path d='M600 130 C 600 66 660 30 720 30 C 780 30 840 66 840 130 Z' fill='url(#s5-velvet)' />
				<path d='M600 130 C 600 66 660 30 720 30 C 780 30 840 66 840 130' fill='none' stroke='url(#s5-gold)' strokeWidth='7' />
				<path d='M604 132 L 836 132 L 836 156 L 604 156 Z' fill='url(#s5-gold)' />
				<g fill='url(#s5-gold)'>
					{[620, 660, 700, 740, 780, 820].map((x, i) => (
						<path key={i} d={`M${x} 156 l7 16 l-7 16 l-7 -16 Z`} />
					))}
				</g>
			</g>

			{/* 王座（整体上移，避免被台座挡住扶手） */}
			<g transform='translate(0 -48)'>
				<path d='M624 560 L 624 322 C 624 240 664 196 720 172 C 776 196 816 240 816 322 L 816 560 Z' fill='url(#s5-gold)' />
				<path d='M648 560 L 648 330 C 648 260 680 222 720 202 C 760 222 792 260 792 330 L 792 560 Z' fill='url(#s5-velvet)' />
				{/* 竖向绒面棱线 + 金扣 */}
				<g fill='none' stroke='url(#s5-gold)' strokeWidth='4' opacity='0.85'>
					<path d='M684 232 v328 M720 216 v344 M756 232 v328' />
				</g>
				<g fill='url(#s5-gold)'>
					<circle cx='684' cy='330' r='5' />
					<circle cx='720' cy='316' r='5' />
					<circle cx='756' cy='330' r='5' />
					<circle cx='684' cy='450' r='5' />
					<circle cx='720' cy='436' r='5' />
					<circle cx='756' cy='450' r='5' />
				</g>
				{/* 扶手 */}
				<path d='M600 430 C 600 398 620 384 640 392 L 640 560 L 600 560 Z' fill='url(#s5-gold)' />
				<path d='M840 430 C 840 398 820 384 800 392 L 800 560 L 840 560 Z' fill='url(#s5-gold)' />
				{/* 靠背上的王冠 */}
				<g transform='translate(720 268)'>
					<path d='M-40 14 L -40 -6 L -22 4 L 0 -18 L 22 4 L 40 -6 L 40 14 Z' fill='url(#s5-gold)' />
					<circle cx='0' cy='-26' r='6' fill='#b7202b' />
					<circle cx='-24' cy='0' r='4' fill='#b7202b' />
					<circle cx='24' cy='0' r='4' fill='#b7202b' />
				</g>
				{/* 座垫 */}
				<path d='M620 548 L 820 548 L 828 590 L 612 590 Z' fill='url(#s5-velvet)' />
				<path d='M620 548 L 820 548 L 828 590 L 612 590 Z' fill='none' stroke='url(#s5-gold)' strokeWidth='5' />
			</g>

			{/* 台座 */}
			<path d='M540 590 L 900 590 L 930 640 L 510 640 Z' fill='#e9dfc9' />
			<path d='M510 640 L 930 640 L 966 700 L 474 700 Z' fill='#f2ead8' />
			<path d='M474 700 L 966 700 L 1010 770 L 430 770 Z' fill='#e3d8bf' />
			<g stroke='url(#s5-gold)' strokeWidth='3' opacity='0.9' fill='none'>
				<path d='M540 590 L 900 590 M510 640 L 930 640 M474 700 L 966 700' />
			</g>

			{/* 地面 + 红毯 */}
			<path d='M0 770 L 1440 770 L 1440 900 L 0 900 Z' fill='url(#s5-floor)' />
			<g stroke='#c9bda2' strokeWidth='2' opacity='0.75'>
				<path d='M160 900 L 340 770 M520 900 L 600 770 M920 900 L 840 770 M1280 900 L 1100 770' />
			</g>
			<path d='M600 770 L 840 770 L 1020 900 L 420 900 Z' fill='url(#s5-velvet)' />
			<path d='M600 770 L 840 770 L 1020 900 L 420 900 Z' fill='none' stroke='url(#s5-gold)' strokeWidth='8' />
			<path d='M624 770 L 816 770 L 960 900 L 480 900 Z' fill='none' stroke='url(#s5-gold)' strokeWidth='3' opacity='0.8' />

			{/* 侧壁烛台（顶部留给华盖，不装吊灯） */}
			{[336, 1104].map((x, i) => (
				<g key={i} transform={`translate(${x} 316)`}>
					<path d='M0 0 L 0 38' stroke='url(#s5-gold)' strokeWidth='6' strokeLinecap='round' />
					<path d='M-24 38 C -24 24 -10 16 0 16 C 10 16 24 24 24 38 Z' fill='url(#s5-gold)' />
					<g fill='#f6dfa8'>
						<rect x='-17' y='-10' width='7' height='22' rx='3' />
						<rect x='-3' y='-16' width='7' height='28' rx='3' />
						<rect x='11' y='-10' width='7' height='22' rx='3' />
					</g>
					<circle cx='0' cy='-18' r='30' fill='#f6d98a' opacity='0.2' />
				</g>
			))}

			{/* 火盆 */}
			{[
				{ x: 210 },
				{ x: 1230 }
			].map((b, i) => (
				<g key={i} transform={`translate(${b.x} 700)`}>
					<path d='M-34 0 L 34 0 L 24 46 L -24 46 Z' fill='#7d6236' />
					<path d='M-40 -8 L 40 -8 L 34 4 L -34 4 Z' fill='url(#s5-gold)' />
					<path d='M-14 0 C -24 -22 -6 -40 0 -56 C 6 -40 24 -22 14 0 Z' fill='#f0a83c' />
					<path d='M-6 0 C -12 -14 0 -26 0 -36 C 2 -26 12 -14 6 0 Z' fill='#fbe08e' />
				</g>
			))}
		</svg>
	)
}
