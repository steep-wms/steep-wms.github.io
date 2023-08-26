import clsx from "clsx"

interface TilesProps {
  masks: boolean
  gap: boolean
}

const Tiles = ({ masks = false, gap = true }: TilesProps) => {
  const n = 2

  let tiles = []
  for (let y = 0; y < n; ++y) {
    for (let x = 0; x < n; ++x) {
      tiles.push(
        <svg
          viewBox={`0 0 ${650 / n} ${650 / n}`}
          key={`${x}_${y}_mask`}
          className="h-full w-full"
        >
          <foreignObject
            width={650}
            height={650}
            y={-y * (650 / n)}
            x={-x * (650 / n)}
          >
            {!masks ? (
              <img
                alt="Tile"
                src={`${process.env.basePath}/images/home/tiles.jpg`}
                width={650}
                height={650}
                loading="lazy"
              />
            ) : (
              <picture>
                <source
                  srcSet={`${process.env.basePath}/images/home/masks.webp`}
                  type="image/webp"
                  width={650}
                  height={650}
                />
                <img
                  alt="Tile"
                  src={`${process.env.basePath}/images/home/masks.jpg`}
                  width={650}
                  height={650}
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
    <div className={clsx("grid grid-cols-2", { "gap-1": gap })}>{tiles}</div>
  )
}

export default Tiles
