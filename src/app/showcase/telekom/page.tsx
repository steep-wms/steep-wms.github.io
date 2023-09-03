import TelekomDataflow from "../../../assets/telekom-dataflow.svg?drawio"
import Link from "@/components/LinkFix"
import Facts from "@/components/showcase/projects/Facts"
import ProjectAuthor from "@/components/showcase/projects/ProjectAuthor"
import ProjectGrid from "@/components/showcase/projects/ProjectGrid"
import ProjectLayout from "@/components/showcase/projects/ProjectLayout"
import { Metadata } from "next"

export const metadata: Metadata = {
  title:
    "How Telekom made their fibre planning processes 75% faster with Steep",
}

const Telekom = () => {
  return (
    <ProjectLayout
      title="How Telekom made their fibre planning processes 75% faster with Steep"
      moreShowcases={["forest-type-classification"]}
    >
      <ProjectGrid>
        <div className="prose row-start-2 lg:row-start-1">
          <p className="lead">
            We’ve been working together with Deutsche Telekom to build a Big
            Data processing platform supporting the fibre roll-out in Germany.
          </p>
          <picture>
            <source
              srcSet={`${process.env.basePath}/images/showcase/projects/telekom/t-cars.avif`}
              type="image/avif"
              width={1440}
              height={675}
            />
            <source
              srcSet={`${process.env.basePath}/images/showcase/projects/telekom/t-cars.jpg`}
              type="image/jpeg"
              width={1440}
              height={675}
            />
            {/*
              Fallback img should not have src to avoid loading it.
              See https://github.com/facebook/react/issues/22684
            */}
            <img fetchPriority="high" alt="T-Car fleet" />
          </picture>
          <p>
            Broadband Internet access has become an essential part of our daily
            lives and is a key factor for economic growth. However, compared to
            other industrial countries, the relative share of{" "}
            <em>Fibre to the Home (FTTH)</em> subscriptions in Germany is still
            very low. Deutsche Telekom, the largest telecommunications provider
            in Europe, is therefore working on speeding up the fibre roll-out in
            Germany by automating planning processes and reducing communcation
            overhead. Their aim is to connect more than 3 million households per
            year to FTTH.
          </p>
          <p>
            To this end, they are collecting large amounts of data with
            specialized mobile mapping vehicles. These <em>T-Cars</em> record
            360° panorama images and 3D point clouds, which can be used to
            digitally perform planning of fibre optic lines and distribution
            cabinets, as well as to communicate the plans in a virtual
            environment to stakeholders.
          </p>
          <p>
            However, these large amounts of data have to be processed first.
            That’s why Telekom asked us in 2017 to help them build a cloud-based
            geospatial data infrastructure (GDI). Today, Steep is one of the
            core components of their GDI processing hundreds of gigabytes of
            data per day on a huge number of virtual machines.
          </p>
          <div className="my-8">
            <TelekomDataflow />
          </div>
          <p>
            We’ve built several core workflows in the GDI. The most central one
            processes the panorama images and point clouds collected by the
            T-Car. The data is typically delivered in ZIP files. Steep downloads
            and extracts them to virtual machines. It then starts several
            services including an <em>image anonyization service</em> that blurs
            people and cars. An{" "}
            <em>AI-based point cloud classification service</em>, developed by
            our friends from{" "}
            <Link href="https://www.ipm.fraunhofer.de/">Fraunhofer IPM</Link>,
            identifies objects in the recorded data such as buildings, trees, or
            cars. It is also able to detect different types of surfaces such as
            asphalt, gravel, or grass. This information can later be used to
            automatically determine optimal routes for fibre optic lines.
          </p>
          <p>
            Steep then applies a <em>panorama tiling service</em> as well as the
            well-known{" "}
            <em>
              <Link href="https://github.com/potree/PotreeConverter">
                Potree converter
              </Link>
            </em>{" "}
            to prepare the data for web-based visualization in a tool called{" "}
            <em>Fibre3D</em>, which we’ve developed for Deutsche Telekom.
          </p>
          <div className="grid grid-cols-2 gap-4 not-prose my-8">
            <picture>
              <source
                srcSet={`${process.env.basePath}/images/showcase/projects/telekom/screenshot1.avif`}
                type="image/avif"
                width={720}
                height={405}
              />
              <img
                srcSet={`${process.env.basePath}/images/showcase/projects/telekom/screenshot1.jpg`}
                width={720}
                height={405}
                alt="Screenshot 1"
                loading="lazy"
              />
            </picture>
            <picture>
              <source
                srcSet={`${process.env.basePath}/images/showcase/projects/telekom/screenshot2.avif`}
                type="image/avif"
                width={720}
                height={405}
              />
              <img
                srcSet={`${process.env.basePath}/images/showcase/projects/telekom/screenshot2.jpg`}
                width={720}
                height={405}
                alt="Screenshot 2"
                loading="lazy"
              />
            </picture>
            <picture>
              <source
                srcSet={`${process.env.basePath}/images/showcase/projects/telekom/screenshot3.avif`}
                type="image/avif"
                width={720}
                height={405}
              />
              <img
                srcSet={`${process.env.basePath}/images/showcase/projects/telekom/screenshot3.jpg`}
                width={720}
                height={405}
                alt="Screenshot 3"
                loading="lazy"
              />
            </picture>
            <picture>
              <source
                srcSet={`${process.env.basePath}/images/showcase/projects/telekom/screenshot4.avif`}
                type="image/avif"
                width={720}
                height={405}
              />
              <img
                srcSet={`${process.env.basePath}/images/showcase/projects/telekom/screenshot4.jpg`}
                width={720}
                height={405}
                alt="Screenshot 4"
                loading="lazy"
              />
            </picture>
          </div>
          <p>
            Fibre3D is an interactive web application that planners from the
            Telekom can use to explore the processed data. The application
            offers two views: one where the planners navigate through the
            panorama images and a 3D view where they move freely through the
            point cloud. Among many other features, the application allows them
            to place fibre optical distribution cabinets as well as to make
            measurements in 3D (e.g. to determine the distance between a placed
            cabinet and the curb). The planners also use the application to
            present their plans to stakeholders from municipalities, which
            reduces the need for on-site visits and, therefore, saves a lot of
            time during planning and approval processes. More information about
            Fibre3D can be found on{" "}
            <Link href="https://www.igd.fraunhofer.de/en/media-center/press-releases/fibre3d-visual-support-for-fibre-optic-expansion.html">
              our institute’s website
            </Link>
            .
          </p>
          {/* TODO insert quote here */}
          <p>
            As one of the core components of the GDI of Deutsche Telekom, Steep
            helps process huge amounts of data in a timely manner. The services
            from the workflow described above are executed on hundreds of
            virtual machines in parallel. Steep’s unique feature of being able
            to automatically acquire compute resources on demand and to release
            them when they are no longer needed saves Telekom a lot of money.
            Also, due to its capability-based scheduling algorithm, Steep
            acquires machines with only those resources (in terms of CPU, RAM,
            or GPU) actually needed.
          </p>
          <p>
            We’ve started our collaboration with Deutsche Telekom in 2017. Since
            then, with the help of the GDI and Steep, they’ve been able to plan
            more than 10 million households and connect more than 6 million of
            them to FTTH. Before, planning and approval processes took several
            months. Now they are on average about 75% faster and can be finished
            within a few weeks.
          </p>
          <div className="lg:hidden mt-8">
            <Facts />
          </div>
        </div>
        <div className="row-start-1 mt-6 lg:mt-0">
          <ProjectAuthor
            name="Michel Krämer"
            imgSrc={`${process.env.basePath}/images/about/michel-kraemer-2019-09-256x256.jpg`}
            imgWidth={256}
            imgHeight={256}
          />
          <div className="hidden lg:block sticky top-20 mt-8">
            <Facts />
          </div>
        </div>
      </ProjectGrid>
    </ProjectLayout>
  )
}

export default Telekom
