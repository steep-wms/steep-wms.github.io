import clsx from "clsx"

interface TilesProps {
  n: number
  src: string
  avifsrc?: string
  masks: boolean
  gap: boolean
  imageSize?: number
}

const Tiles = ({
  n,
  src,
  avifsrc = undefined,
  gap = true,
  imageSize = 500,
}: TilesProps) => {
  let tiles = []
  for (let y = 0; y < n; ++y) {
    for (let x = 0; x < n; ++x) {
      tiles.push(
        <svg
          viewBox={`0 0 ${imageSize / n} ${imageSize / n}`}
          key={`${x}_${y}_mask`}
          className="h-full w-full"
        >
          <foreignObject
            width={imageSize}
            height={imageSize}
            y={-y * (imageSize / n)}
            x={-x * (imageSize / n)}
          >
            {avifsrc === undefined ? (
              <img
                alt="Tile"
                src={src}
                width={imageSize}
                height={imageSize}
                loading="lazy"
              />
            ) : (
              <picture>
                <source
                  srcSet={avifsrc}
                  type="image/avif"
                  width={imageSize}
                  height={imageSize}
                />
                <img
                  alt="Tile"
                  src={src}
                  width={imageSize}
                  height={imageSize}
                  loading="lazy"
                />
              </picture>
            )}
          </foreignObject>
        </svg>,
      )
    }
  }

  return (
    <div className={clsx(`grid grid-cols-${n}`, { "gap-1": gap })}>{tiles}</div>
  )
}

export default Tiles
