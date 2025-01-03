import Card from "../../Card"
import Link from "next/link"

export interface MoreShowcasesProps {
  showcases: ("telekom" | "forest-type-classification")[]
}

const MoreShowcases = ({ showcases }: MoreShowcasesProps) => {
  return (
    <>
      <hr className="my-14 border-gray-200" />
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 2xl:grid-cols-3">
        <Link href="/showcase">
          <Card className="min-h-full hover:bg-gray-100">
            <h3 className="mb-2 mt-1 text-lg font-normal">&larr; Showcase</h3>
            <p className="text-sm text-gray-700">
              Go back and see more of what we’ve created with Steep
            </p>
          </Card>
        </Link>
        {showcases.includes("telekom") && (
          <Link href="/showcase/telekom">
            <Card className="min-h-full hover:bg-gray-100">
              <h3 className="mb-2 mt-1 flex items-center gap-2 text-lg font-normal">
                <div className="w-5">
                  <img
                    src={`${process.env.__NEXT_ROUTER_BASEPATH}/images/showcase/projects/telekom/telekom.svg`}
                    alt="Telekom Logo"
                    width={1000}
                    height={1000}
                  />
                </div>{" "}
                Deutsche Telekom
              </h3>
              <p className="text-sm text-gray-700">
                Read about our cloud-based platform supporting the fibre
                roll-out in Germany
              </p>
            </Card>
          </Link>
        )}
        {showcases.includes("forest-type-classification") && (
          <Link href="/showcase/forest-type-classification">
            <Card className="min-h-full hover:bg-gray-100">
              <h3 className="mb-2 mt-1 flex items-center gap-2 text-lg font-normal">
                Forest type classification
              </h3>
              <p className="text-sm text-gray-700">
                Read about how Steep has improved our AI training pipeline for
                forest type classification
              </p>
            </Card>
          </Link>
        )}
      </div>
    </>
  )
}

export default MoreShowcases
