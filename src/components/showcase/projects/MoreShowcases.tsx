import Card from "../../Card"
import Link from "../../LinkFix"

export interface MoreShowcasesProps {
  showcases: ("telekom" | "forest-type-classification")[]
}

const MoreShowcases = ({ showcases }: MoreShowcasesProps) => {
  return (
    <>
      <hr className="border-gray-200 my-14" />
      <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-2">
        <Link href="/showcase">
          <Card className="hover:bg-gray-100 min-h-full">
            <h3 className="mt-1 mb-2 text-lg font-normal">&larr; Showcase</h3>
            <p className="text-sm text-gray-700">
              Go back and see more of what we’ve created with Steep
            </p>
          </Card>
        </Link>
        {showcases.includes("telekom") && (
          <Link href="/showcase/telekom">
            <Card className="hover:bg-gray-100 min-h-full">
              <h3 className="mt-1 mb-2 text-lg font-normal flex items-center gap-2">
                <div className="w-5">
                  <img
                    src={`${process.env.basePath}/images/showcase/projects/telekom/telekom.svg`}
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
            <Card className="hover:bg-gray-100 min-h-full">
              <h3 className="mt-1 mb-2 text-lg font-normal flex items-center gap-2">
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
