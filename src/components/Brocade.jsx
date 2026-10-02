// Dải hoa văn lấy cảm hứng từ cạp váy Mường: hình thoi bậc thang dệt từ ô vuông,
// nửa hình thoi ở hai mép nối với ô kế bên thành lưới chéo.
const TILE = [
  'yyyyyyyyyyyyyyy',
  '...............',
  'c......r......c',
  '.c....rcr....c.',
  '..c..rcycr..c..',
  '.c....rcr....c.',
  'c......r......c',
  '...............',
  'yyyyyyyyyyyyyyy',
]

const FILL = { y: 'var(--ochre)', r: 'var(--brocade-red)', c: 'var(--paper)' }
const CELL = 4

export default function Brocade({ id, className = '' }) {
  const width = TILE[0].length * CELL
  const height = TILE.length * CELL
  const patternId = `brocade-${id}`

  return (
    <svg
      className={`brocade ${className}`}
      width="100%"
      height={height}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <pattern id={patternId} width={width} height={height} patternUnits="userSpaceOnUse">
          <rect width={width} height={height} style={{ fill: 'var(--forest-deep)' }} />
          {TILE.flatMap((row, y) =>
            [...row].map((cell, x) =>
              FILL[cell] ? (
                <rect
                  key={`${x}-${y}`}
                  x={x * CELL}
                  y={y * CELL}
                  width={CELL}
                  height={CELL}
                  style={{ fill: FILL[cell] }}
                />
              ) : null,
            ),
          )}
        </pattern>
      </defs>
      <rect width="100%" height={height} fill={`url(#${patternId})`} />
    </svg>
  )
}
