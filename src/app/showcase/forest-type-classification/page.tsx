import ForestClassificationWorkflow from "../../../assets/forest-classification-workflow.svg?drawio"
import Card from "@/components/Card"
import Container from "@/components/Container"
import Link from "@/components/LinkFix"
import { robotoBold } from "@/components/lib/roboto-bold"

const ForestTypeClassification = () => {
  return (
    <Container type="lg" className="mt-32 mb-32">
      <Link
        href="/showcase"
        className="text-gray-600 hover:no-underline hover:text-gray-700"
      >
        &larr; Showcase
      </Link>
      <div className="grid [grid-template-columns:minmax(0,1fr)_10rem] gap-8 mt-6">
        <h1 className={`${robotoBold.variable} text-4xl font-bold`}>
          How we used Steep to improve our training pipeline for AI-based forest
          type classification
        </h1>
      </div>
      <div className="grid [grid-template-columns:minmax(0,1fr)_10rem] gap-8 mt-4">
        <div className="prose">
          <p className="lead">
            Steep can help train a neural network in an efficient,
            comprehensible, and flexible way. Our AI model can be used to
            respond to climate change.
          </p>
          <picture>
            <source
              srcSet={`${process.env.basePath}/images/showcase/projects/forest-type-classification/satellite-image.avif`}
              type="image/avif"
              width={1376}
              height={690}
            />
            <img
              src={`${process.env.basePath}/images/showcase/projects/forest-type-classification/satellite-image.jpg`}
              width={1376}
              height={690}
              loading="lazy"
              alt="Classified satellite image"
            />
          </picture>
          <p>
            Climate change is no longer something we can address in the future.
            It has arrived in the present. Its effects can be felt in many
            places: sea levels are rising, extreme weather events happen more
            often, and entire ecosystems are changing. Comprehensive monitoring
            is important to be able to respond to these transformations. We need
            to know where and how extreme things change. This enables us to
            identify trends early and respond appropriately.
          </p>
          <p>
            One tool for monitoring is artificial intelligence (AI). It is able
            to recognize patterns on large amounts of data and derive knowledge.
            The problem is that training an AI is very complex. Large amounts of
            data have to be analyzed, a lot of compute time has to be spent, and
            in the end, training processes have to be well documented so they
            remain comprehensible. This is where Steep can help.
          </p>
          <p>
            In this article, we demonstrate how we have used Steep to train a
            neural network for forest type classification on satellite imagery.
            Our training data were pairs of known forest areas and matching
            satellite images. Our aim was that the final model should have
            learned how forests look like, so it would later be able to perform
            semantic segmentation on new images. For training, we wrote a
            workflow in Steep.
          </p>
        </div>
        <div>
          <div className="flex flex-col items-center gap-3">
            <Link
              href="/about/#team"
              className="w-16 rounded-full overflow-hidden"
            >
              <img
                src={`${process.env.basePath}/images/about/hendrik-wuerz-200x200.jpg`}
                width={200}
                height={200}
                alt="Hendrik M. Würz"
              />
            </Link>
            <span className="prose">
              by <Link href="/about/#team">Hendrik M. Würz</Link>
            </span>
          </div>
        </div>
      </div>
      <div className="py-8">
        <ForestClassificationWorkflow />
      </div>
      <div className="grid [grid-template-columns:minmax(0,1fr)_10rem] gap-8 mt-4">
        <div className="prose">
          <p>
            We started by searching for relevant satellite imagery from{" "}
            <Link href="https://sentinel.esa.int/web/sentinel/missions/sentinel-2">
              Sentinel 2
            </Link>{" "}
            in the{" "}
            <Link href="https://scihub.copernicus.eu/">
              Copernicus Open Access Hub
            </Link>
            . Criteria were cloud coverage and a bounding box of the relevant
            area. The parameters were passed to the workflow. This way, we could
            esily change them to train on another region. The identified
            satellite images were downloaded and processed in parallel. Instead
            of Sentinel 2, by replacing the download service, other data sources
            could be used, such as{" "}
            <Link href="https://landsat.gsfc.nasa.gov/">Landsat</Link> data or
            high-resolution images from{" "}
            <Link href="https://www.planet.com/">Planet</Link>. For each image,
            its extent was extracted and corresponding ground truth data was
            fetched from an external API and rasterized. The subsequent{" "}
            <em>Split</em> service created tiles from the generated ground truth
            image, ensuring the resolution required by the AI model.
          </p>
          <p>
            Additionally, every downloaded image was filtered to remove unneeded
            frequency bands, converted to PNG and cropped into tiles, similar to
            the ground truth image. The <em>Combine</em> service copied the
            pairs of ground truth and satellite images into a common directory.
            The final <em>TensorFlow</em> service took this directory together
            with a model definition and learned how different forest types look
            in satellite images.
          </p>
          <div className="border border-gray-200 rounded-lg px-16 py-8 not-prose grid [grid-template-columns:4rem_1fr] items-center gap-4">
            <Link href="/about/#team" className="rounded-full overflow-hidden">
              <img
                src={`${process.env.basePath}/images/about/hendrik-wuerz-200x200.jpg`}
                width={200}
                height={200}
                alt="Hendrik M. Würz"
                className="w-full h-full"
              />
            </Link>
            <span className="italic text-lg leading-7">
              “Steep automatically parallelized the calculations, which saved us
              valuable time.”{" "}
              <span className="ml-4 text-gray-600">
                &mdash; Hendrik M. Würz
              </span>
            </span>
          </div>
          <p>
            During the development of our AI model, we executed the workflow
            several times with slight modifications. For example, we tested
            which frequency bands were important, what influence seasons had on
            the classification, or which AI model performed best. All of these
            tests were managed by Steep and we could directly compare the
            accuracies of the trained networks with each other.
          </p>
          <p>
            Another benefit was that Steep automatically allocated all required
            resources for us. For preprocessing, no expensive GPU is needed, so
            Steep scheduled these steps on low-cost CPU machines. The training,
            on the other hand, was executed on graphics cards. We often started
            the workflow several times to try out different configurations
            simultaneously. Steep automatically parallelized the calculations,
            which saved us valuable time.
          </p>
          <p>
            We published our results in two papers, where you can find more
            background information regarding the infrastructure, our findings on
            the different AI models, and the resulting quality of the AI:
          </p>
          <p className="border-l-4 border-gray-300 pl-4">
            Kocon, K., Krämer, M., and Würz, H. M.:{" "}
            <em>
              Comparison of CNN-based segmentation models for forest type
              classification
            </em>
            , AGILE GIScience Ser., 3, 42,{" "}
            <Link href="https://doi.org/10.5194/agile-giss-3-42-2022">
              https://doi.org/10.5194/agile-giss-3-42-2022
            </Link>
            , 2022.
          </p>
          <p className="border-l-4 border-gray-300 pl-4">
            Würz, H. M., Kocon, K., Pedretscher, B., Klien, E., and Eggeling,
            E.: <em>A Scalable AI Training Platform for Remote Sensing Data</em>
            , AGILE GIScience Ser., 4, 53,{" "}
            <Link href="https://doi.org/10.5194/agile-giss-4-53-2023">
              https://doi.org/10.5194/agile-giss-4-53-2023
            </Link>
            , 2023.
          </p>
          <p className="text-gray-600">
            (Parts of this article were taken from the second paper.)
          </p>
        </div>
      </div>
      <hr className="border-gray-200 my-14" />
      <div className="flex gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-2 not-prose">
          <Link href="/showcase">
            <Card className="hover:bg-gray-100 min-h-full">
              <h3 className="mt-1 mb-2 text-lg font-normal">&larr; Showcase</h3>
              <p className="text-sm text-gray-700">
                Go back and see more of what we’ve created with Steep
              </p>
            </Card>
          </Link>
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
        </div>
      </div>
    </Container>
  )
}

export default ForestTypeClassification
