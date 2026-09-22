/**
 * 代码绘制的哈士奇国王（剪纸/纸片风格，纯 SVG，无位图素材）。
 *
 * 设计说明：
 * - 分层剪纸：每层用不带模糊的硬投影（feDropShadow stdDeviation=0）做出"纸片叠层"的厚度感
 * - 随阶段成长：幼犬（大头短腿 + 头顶嫩芽）→ 学徒（工具带 + 书卷）
 *   → 骑士（胸甲 + 护肩）→ 建筑师（加冕小冠 + 披风）→ 国王（满冠 + 权杖 + 徽章）
 * - 全部由代码生成：任意缩放都清晰，没有位图抠图的硬边与白边
 * - 图层顺序：披风 → 尾巴 → 后腿 → 躯干 → 前爪 → 装备 → 毛领 → 头部 → 王冠 → 权杖
 */

export type HuskyProps = {
	/** 1-5，对应进阶之路的五个阶段 */
	stage: number
	className?: string
}

const DEFS = (
	<defs>
		<filter id='hPaper' x='-25%' y='-20%' width='150%' height='150%'>
			<feDropShadow dx='0' dy='5' stdDeviation='0' floodColor='#2f2016' floodOpacity='0.16' />
		</filter>
		<filter id='hPaperSoft' x='-25%' y='-20%' width='150%' height='150%'>
			<feDropShadow dx='0' dy='3' stdDeviation='0' floodColor='#2f2016' floodOpacity='0.12' />
		</filter>
		<linearGradient id='hGold' x1='0' y1='0' x2='0.6' y2='1'>
			<stop offset='0' stopColor='#f7dc94' />
			<stop offset='0.45' stopColor='#e3b757' />
			<stop offset='1' stopColor='#b3862a' />
		</linearGradient>
		<linearGradient id='hCape' x1='0' y1='0' x2='0' y2='1'>
			<stop offset='0' stopColor='#b02a31' />
			<stop offset='1' stopColor='#701117' />
		</linearGradient>
		<linearGradient id='hArmor' x1='0' y1='0' x2='0' y2='1'>
			<stop offset='0' stopColor='#48536a' />
			<stop offset='1' stopColor='#232a38' />
		</linearGradient>
		<linearGradient id='hFur' x1='0' y1='0' x2='0' y2='1'>
			<stop offset='0' stopColor='#9aa4b3' />
			<stop offset='1' stopColor='#6b7482' />
		</linearGradient>
		<linearGradient id='hFurDeep' x1='0' y1='0' x2='0' y2='1'>
			<stop offset='0' stopColor='#7f8a9a' />
			<stop offset='1' stopColor='#565f6d' />
		</linearGradient>
		<linearGradient id='hSteel' x1='0' y1='0' x2='0' y2='1'>
			<stop offset='0' stopColor='#dbe3ee' />
			<stop offset='1' stopColor='#9aa6b6' />
		</linearGradient>
		<linearGradient id='hParchment' x1='0' y1='0' x2='0' y2='1'>
			<stop offset='0' stopColor='#f0e2c4' />
			<stop offset='1' stopColor='#d9c39a' />
		</linearGradient>
	</defs>
)

export default function Husky({ stage, className }: HuskyProps) {
	const isPuppy = stage <= 2
	const headScale = isPuppy ? 1.1 : stage === 3 ? 1.04 : 1
	// 幼犬：身体整体缩短并下移，显得头大身圆
	const bodyScaleY = isPuppy ? 0.86 : 1
	const bodyShiftY = isPuppy ? 44 : 0
	const headTransform = `translate(${180 * (1 - headScale)} ${168 * (1 - headScale)}) scale(${headScale})`

	return (
		<svg viewBox='0 0 360 540' className={className} role='img' aria-label={`哈士奇国王 · 阶段 ${stage}`}>
			{DEFS}

			{/* ================= 披风（阶段 4 起） ================= */}
			{stage >= 4 && (
				<g filter='url(#hPaper)'>
					<path d='M100 268 C 52 322 32 416 42 496 C 46 524 82 534 122 530 C 104 462 96 372 118 296 Z' fill='url(#hCape)' />
					<path d='M260 268 C 308 322 328 416 318 496 C 314 524 278 534 238 530 C 256 462 264 372 242 296 Z' fill='url(#hCape)' />
					<path d='M100 268 C 52 322 32 416 42 496' fill='none' stroke='#e3b757' strokeWidth='5' strokeLinecap='round' />
					<path d='M260 268 C 308 322 328 416 318 496' fill='none' stroke='#e3b757' strokeWidth='5' strokeLinecap='round' />
				</g>
			)}

			{/* ================= 尾巴（加粗，明确伸出体外） ================= */}
			<g filter='url(#hPaperSoft)'>
				<path d='M104 468 C 42 470 6 416 14 348 C 60 362 96 408 122 452 Z' fill='url(#hFurDeep)' />
				<path d='M14 348 C 16 326 34 314 54 322 C 40 334 26 344 14 348 Z' fill='#faf7f2' />
			</g>

			{/* ================= 躯干（幼犬阶段整体缩放） ================= */}
			<g transform={`translate(0 ${bodyShiftY}) scale(1 ${bodyScaleY})`}>
				{/* 后腿（坐姿大腿，贴在身体两侧偏下） */}
				<g filter='url(#hPaperSoft)'>
					<path d='M100 404 C 82 436 86 480 106 498 C 128 512 156 506 166 490 C 144 464 128 436 132 402 Z' fill='url(#hFurDeep)' />
					<path d='M260 404 C 278 436 274 480 254 498 C 232 512 204 506 194 490 C 216 464 232 436 228 402 Z' fill='url(#hFurDeep)' />
				</g>

				{/* 躯干：宽胸腔的桶形 */}
				<g filter='url(#hPaper)'>
					<path d='M116 252 C 88 330 78 440 108 486 C 136 510 224 510 252 486 C 282 440 272 330 244 252 Z' fill='url(#hFur)' />
					{/* 胸前白毛（宽） */}
					<path d='M138 246 C 118 326 118 442 146 480 C 170 498 190 498 214 480 C 242 442 242 326 222 246 Z' fill='#faf7f2' />
				</g>

				{/* 前爪（两条前腿） */}
				<g filter='url(#hPaperSoft)'>
					<path d='M146 392 C 136 428 136 478 150 496 C 162 508 178 508 182 496 C 186 462 184 428 180 392 Z' fill='#faf7f2' />
					<path d='M214 392 C 224 428 224 478 210 496 C 198 508 182 508 178 496 C 174 462 176 428 180 392 Z' fill='#faf7f2' />
				</g>

				{/* ---------------- 学徒：工具带 + 书卷 ---------------- */}
				{stage === 2 && (
					<g filter='url(#hPaperSoft)'>
						<path d='M130 316 L 232 352 L 226 372 L 124 336 Z' fill='#8b5a33' />
						<rect x='168' y='334' width='18' height='16' rx='4' fill='url(#hGold)' transform='rotate(20 177 342)' />
						<path d='M228 390 C 262 384 280 402 274 426 C 268 450 240 454 220 442 Z' fill='url(#hParchment)' />
						<path d='M228 390 C 262 384 280 402 274 426' fill='none' stroke='#bfa374' strokeWidth='3' />
						<path d='M236 408 h30 M236 420 h30' stroke='#bfa374' strokeWidth='3' strokeLinecap='round' />
					</g>
				)}

				{/* ---------------- 骑士：护肩 + 胸甲 ---------------- */}
				{stage >= 3 && (
					<g filter='url(#hPaper)'>
						<path d='M108 258 C 84 262 68 288 78 312 C 106 324 138 312 148 290 C 140 270 124 258 108 258 Z' fill='url(#hSteel)' />
						<path d='M252 258 C 276 262 292 288 282 312 C 254 324 222 312 212 290 C 220 270 236 258 252 258 Z' fill='url(#hSteel)' />
						<path d='M108 258 C 84 262 68 288 78 312' fill='none' stroke='#e3b757' strokeWidth='4' />
						<path d='M252 258 C 276 262 292 288 282 312' fill='none' stroke='#e3b757' strokeWidth='4' />
						<path d='M134 268 C 116 330 118 428 144 470 C 168 486 192 486 216 470 C 242 428 244 330 226 268 C 200 252 160 252 134 268 Z' fill='url(#hArmor)' />
						<path d='M134 268 C 116 330 118 428 144 470' fill='none' stroke='#e3b757' strokeWidth='4' />
						<path d='M226 268 C 244 330 242 428 216 470' fill='none' stroke='#e3b757' strokeWidth='4' />
						<path d='M140 306 C 160 322 200 322 220 306' fill='none' stroke='#e3b757' strokeWidth='3' opacity='0.8' />
						<circle cx='180' cy='344' r='17' fill='url(#hGold)' />
						<circle cx='180' cy='344' r='7.5' fill='#b7202b' />
					</g>
				)}

				{/* ---------------- 建筑师：腰带 ---------------- */}
				{stage >= 4 && (
					<g filter='url(#hPaperSoft)'>
						<path d='M124 386 C 156 404 204 404 236 386 L 234 410 C 202 428 158 428 126 410 Z' fill='#7c4a24' />
						<circle cx='180' cy='392' r='14' fill='url(#hGold)' />
						<circle cx='180' cy='392' r='6' fill='#8a3a12' />
					</g>
				)}

				{/* ---------------- 披风毛领（阶段 4 起，压在最上层） ---------------- */}
				{stage >= 4 && (
					<g filter='url(#hPaperSoft)'>
						<path
							d='M102 268 C 122 306 148 322 180 322 C 212 322 238 306 258 268 C 250 248 236 234 222 226 C 210 246 196 254 180 254 C 164 254 150 246 138 226 C 124 234 110 248 102 268 Z'
							fill='#faf7f2'
						/>
					</g>
				)}
			</g>

			{/* ================= 头部 ================= */}
			<g transform={headTransform}>
				<g filter='url(#hPaper)'>
					{/* 耳朵 */}
					<path d='M106 186 C 84 138 88 92 110 78 C 136 94 154 136 162 176 Z' fill='url(#hFur)' />
					<path d='M254 186 C 276 138 272 92 250 78 C 224 94 206 136 198 176 Z' fill='url(#hFur)' />
					<path d='M116 170 C 100 132 106 102 118 94 C 136 108 148 142 154 168 Z' fill='#e3a8a8' />
					<path d='M244 170 C 260 132 254 102 242 94 C 224 108 212 142 206 168 Z' fill='#e3a8a8' />

					{/* 头颅（白底） */}
					<ellipse cx='180' cy='168' rx='86' ry='80' fill='#faf7f2' />

					{/* 灰色头罩：顶部覆盖，向下收在双眼外侧 */}
					<path
						d='M180 88 C 128 88 96 124 96 168 C 96 184 100 198 106 208 C 120 186 140 176 160 178 C 170 164 190 164 200 178 C 220 176 240 186 254 208 C 260 198 264 184 264 168 C 264 124 232 88 180 88 Z'
						fill='url(#hFur)'
					/>
					{/* 双眼外侧的"眼罩"（哈士奇标志性花纹） */}
					<ellipse cx='146' cy='200' rx='32' ry='30' fill='url(#hFur)' transform='rotate(-8 146 200)' />
					<ellipse cx='214' cy='200' rx='32' ry='30' fill='url(#hFur)' transform='rotate(8 214 200)' />
					{/* 白色额线 */}
					<path d='M180 92 C 172 124 168 154 170 186 C 177 194 190 194 196 186 C 198 154 194 124 180 92 Z' fill='#faf7f2' />
					{/* 白色眉斑 */}
					<ellipse cx='142' cy='180' rx='10' ry='8' fill='#faf7f2' />
					<ellipse cx='218' cy='180' rx='10' ry='8' fill='#faf7f2' />

					{/* 眼睛 */}
					<ellipse cx='146' cy='204' rx='17' ry='19' fill='#2f6fb0' />
					<ellipse cx='214' cy='204' rx='17' ry='19' fill='#2f6fb0' />
					<ellipse cx='146' cy='204' rx='7.5' ry='11.5' fill='#15223a' />
					<ellipse cx='214' cy='204' rx='7.5' ry='11.5' fill='#15223a' />
					<circle cx='151' cy='197' r='5' fill='#ffffff' />
					<circle cx='219' cy='197' r='5' fill='#ffffff' />

					{/* 吻部（加大） */}
					<path d='M180 216 C 154 216 136 232 136 254 C 136 278 156 296 180 296 C 204 296 224 278 224 254 C 224 232 206 216 180 216 Z' fill='#faf7f2' />
					<path d='M180 230 C 170 230 163 238 163 246 C 163 254 171 260 180 260 C 189 260 197 254 197 246 C 197 238 190 230 180 230 Z' fill='#332f2c' />
					<path d='M180 260 L 180 272' stroke='#332f2c' strokeWidth='3.5' strokeLinecap='round' />
					<path d='M165 278 C 173 286 187 286 195 278' fill='none' stroke='#332f2c' strokeWidth='3.5' strokeLinecap='round' />

					{/* 脸颊绒毛 */}
					<path d='M94 206 C 84 226 88 250 102 264 C 106 246 110 228 116 216 Z' fill='#faf7f2' />
					<path d='M266 206 C 276 226 272 250 258 264 C 254 246 250 228 244 216 Z' fill='#faf7f2' />

					{/* 幼犬的头顶嫩芽 */}
					{isPuppy && (
						<g filter='url(#hPaperSoft)'>
							<path d='M180 94 C 178 82 178 74 180 66' stroke='#5d8a44' strokeWidth='4' strokeLinecap='round' fill='none' />
							<path d='M180 70 C 168 62 168 50 180 46 C 190 52 190 64 180 70 Z' fill='#6fa94f' />
							<path d='M182 74 C 194 68 202 72 204 82 C 194 86 184 82 182 74 Z' fill='#7fbb5c' />
						</g>
					)}
				</g>

				{/* ---------------- 王冠 ---------------- */}
				{stage >= 4 && (
					<g transform={stage === 4 ? 'translate(180 122) scale(0.72) translate(-180 -122)' : ''} filter='url(#hPaper)'>
						<path d='M118 122 L 242 122 L 238 98 L 122 98 Z' fill='url(#hGold)' />
						<path d='M122 98 L 130 64 L 146 98 Z' fill='url(#hGold)' />
						<path d='M150 98 L 164 56 L 178 98 Z' fill='url(#hGold)' />
						<path d='M182 98 L 196 56 L 210 98 Z' fill='url(#hGold)' />
						<path d='M214 98 L 230 64 L 238 98 Z' fill='url(#hGold)' />
						<circle cx='130' cy='84' r='4.5' fill='#b7202b' />
						<circle cx='164' cy='76' r='4.5' fill='#b7202b' />
						<circle cx='196' cy='76' r='4.5' fill='#b7202b' />
						<circle cx='230' cy='84' r='4.5' fill='#b7202b' />
						<circle cx='146' cy='112' r='7' fill='#2f6fb0' />
						<circle cx='180' cy='114' r='9' fill='#b7202b' />
						<circle cx='214' cy='112' r='7' fill='#2f6fb0' />
						<path d='M118 122 L 242 122' stroke='#b3862a' strokeWidth='6' strokeLinecap='round' />
					</g>
				)}
			</g>

			{/* ================= 权杖（阶段 5） ================= */}
			{stage === 5 && (
				<g filter='url(#hPaper)'>
					<path d='M292 182 L 308 182 L 308 512 L 292 512 Z' fill='url(#hGold)' />
					<path d='M283 320 h34' stroke='#b3862a' strokeWidth='8' strokeLinecap='round' />
					<circle cx='300' cy='162' r='25' fill='url(#hGold)' />
					<circle cx='300' cy='162' r='12' fill='#b7202b' />
					<path d='M300 120 L 310 138 L 300 132 L 290 138 Z' fill='url(#hGold)' />
					<path d='M258 402 C 268 392 286 396 290 410 C 292 424 280 438 268 438 C 256 434 250 414 258 402 Z' fill='#faf7f2' />
				</g>
			)}
		</svg>
	)
}
