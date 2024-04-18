import ForestClassificationWorkflow from "../../../assets/forest-classification-workflow.svg?drawio"
import Link from "@/components/LinkFix"
import ProjectAuthor from "@/components/showcase/projects/ProjectAuthor"
import ProjectGrid from "@/components/showcase/projects/ProjectGrid"
import ProjectLayout from "@/components/showcase/projects/ProjectLayout"
import ProjectQuote from "@/components/showcase/projects/ProjectQuote"
import { Metadata } from "next"

export const metadata: Metadata = {
  title:
    "How we used Steep to improve our training pipeline for AI-based forest type classification",
}

const ForestTypeClassification = () => {
  return (
    <ProjectLayout
      title="How we used Steep to improve our training pipeline for AI-based forest type classification"
      moreShowcases={["telekom"]}
    >
      <ProjectGrid>
        <div className="prose row-start-2 lg:row-start-1">
          <p className="lead">
            Steep can help train a neural network in an efficient,
            comprehensible, and flexible way. Our AI model can be used to
            respond to climate change.
          </p>
          <picture>
            <source
              srcSet={`${process.env.__NEXT_ROUTER_BASEPATH}/images/showcase/projects/forest-type-classification/satellite-image.avif`}
              type="image/avif"
              width={1376}
              height={690}
            />
            <source
              srcSet={`${process.env.__NEXT_ROUTER_BASEPATH}/images/showcase/projects/forest-type-classification/satellite-image.jpg`}
              type="image/jpeg"
              width={1376}
              height={690}
            />
            {/*
              Fallback img should not have src to avoid loading it.
              See https://github.com/facebook/react/issues/22684
            */}
            <img fetchPriority="high" alt="Classified satellite image" />
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
        <div className="row-start-1 mt-6 lg:mt-0">
          <ProjectAuthor
            name="Hendrik M. Würz"
            imgSrc={`${process.env.__NEXT_ROUTER_BASEPATH}/images/about/hendrik-wuerz-200x200.jpg`}
            imgWidth={200}
            imgHeight={200}
          />
        </div>
      </ProjectGrid>
      <div className="my-8 max-w-4xl">
        <ForestClassificationWorkflow />
      </div>
      <ProjectGrid>
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
          <ProjectQuote
            authorName="Hendrik M. Würz"
            authorImgSrc={`${process.env.__NEXT_ROUTER_BASEPATH}/images/about/hendrik-wuerz-200x200.jpg`}
            authorImgWidth={200}
            authorImgHeight={200}
            quote="Steep automatically parallelized the calculations, which saved us valuable time."
          />
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
      </ProjectGrid>
    </ProjectLayout>
  )
}

export default ForestTypeClassification
