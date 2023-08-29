import Container from "../Container"
import Publication from "./Publication"
import Link from "@/components/LinkFix"

const Publications = () => {
  return (
    <Container type="xl">
      <section id="publications" className="mb-32 prose">
        <h2 className="mb-4 text-center text-4xl">Publications</h2>
        <p className="lead text-center">
          Steep has appeared in a number of scientific publications.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-16">
          <Publication
            previewImages={[
              "wuerz-et-al-2023-1",
              "wuerz-et-al-2023-2",
              "wuerz-et-al-2023-3",
            ]}
            previewImageHeight={631}
            authors="Würz, H. M., Kocon, K., Pedretscher, B., Klien, E., &amp; Eggeling, E."
            year="2023"
            title="A Scalable AI Training Platform for Remote Sensing Data"
            pdf="https://agile-giss.copernicus.org/articles/4/53/2023/agile-giss-4-53-2023.pdf"
            citation={
              <>
                <i>AGILE: GIScience Series, 4</i>.{" "}
                <Link href="https://doi.org/10.5194/agile-giss-4-53-2023">
                  https://doi.org/10.5194/agile-giss-4-53-2023
                </Link>
              </>
            }
          />
          <Publication
            previewImages={[
              "kaster-wuerz-2022-01",
              "kaster-wuerz-2022-02",
              "kaster-wuerz-2022-03",
            ]}
            previewImageHeight={636}
            authors="Kaster, M., &amp; Würz, H. M."
            year="2022"
            title="Preprocessing of Terrain Data in the Cloud using a Workflow Management System"
            pdf="/publications/kaster-wuerz-2022-preprocessing-of-terrain-data-in-the-cloud-using-a-workflow-management-system.pdf"
            citation={
              <>
                <i>
                  Proceedings of the 11th International Conference on Data
                  Science, Technology and Applications - DATA
                </i>
                , 40&ndash;49.{" "}
                <Link href="https://doi.org/10.5220/0011145000003269">
                  https://doi.org/10.5220/0011145000003269
                </Link>
              </>
            }
          />
          <Publication
            previewImages={[
              "kraemer-2021-01",
              "kraemer-2021-02",
              "kraemer-2021-03",
            ]}
            previewImageHeight={582}
            authors="Krämer, M."
            year="2021"
            title="Efficient Scheduling of Scientific Workflow Actions in the Cloud Based on Required Capabilities"
            pdf="https://michelkraemer.com/publications/2021/Kraemer%20-%20Efficient%20Scheduling%20of%20Scientific%20Workflow%20Actions%20in%20the%20Cloud%20Based%20on%20Required%20Capabilities%20(accepted%20manuscript).pdf"
            citation={
              <>
                In S. Hammoudi, C. Quix, &amp; J. Bernardino (Eds.),{" "}
                <i>Data Management Technologies and Applications</i>.
                Communications in Computer and Information Science (Vol. 1446,
                pp. 32&ndash;55). Springer.{" "}
                <Link href="https://doi.org/10.1007/978-3-030-83014-4_2">
                  https://doi.org/10.1007/978-3-030-83014-4_2
                </Link>
              </>
            }
          />
          <Publication
            previewImages={[
              "kraemer-wuerz-altenhofen-2021-01",
              "kraemer-wuerz-altenhofen-2021-02",
              "kraemer-wuerz-altenhofen-2021-03",
            ]}
            previewImageHeight={598}
            authors="Krämer, M., Würz, H. M., &amp; Altenhofen, C."
            year="2021"
            title="Executing cyclic scientific workflows in the cloud"
            pdf="https://michelkraemer.com/publications/2021/Kraemer,%20Wuerz,%20Altenhofen%20-%20Executing%20cyclic%20scientific%20workflows%20in%20the%20cloud.pdf"
            citation={
              <>
                <i>Journal of Cloud Computing</i>, <i>10</i>(25), 1&ndash;26.{" "}
                <Link href="https://doi.org/10.1186/s13677-021-00229-7">
                  https://doi.org/10.1186/s13677-021-00229-7
                </Link>
              </>
            }
          />
          <Publication
            previewImages={[
              "kraemer-2020-01",
              "kraemer-2020-02",
              "kraemer-2020-03",
            ]}
            previewImageHeight={636}
            authors="Krämer, M."
            year="2020"
            title="Capability-based Scheduling of Scientific Workflows in the Cloud"
            pdf="https://michelkraemer.com/publications/2020/Kraemer%20-%20Capability-based%20Scheduling%20of%20Scientific%20Workflows%20in%20the%20Cloud.pdf"
            citation={
              <>
                <i>
                  Proceedings of the 9th International Conference on Data
                  Science, Technology, and Applications DATA
                </i>
                , 43&ndash;54.{" "}
                <Link href="https://doi.org/10.5220/0009805400430054">
                  https://doi.org/10.5220/0009805400430054
                </Link>
              </>
            }
          />
          <Publication
            previewImages={[
              "kraemer-2018-01",
              "kraemer-2018-02",
              "kraemer-2018-03",
            ]}
            previewImageHeight={636}
            authors="Krämer, M."
            year="2018"
            title="A Microservice Architecture for the Processing of Large Geospatial Data in the Cloud"
            pdf="https://michelkraemer.com/publications/2018/Kraemer,%20M.%20(2018).%20A%20Microservice%20Architecture%20for%20the%20Processing%20of%20Large%20Geospatial%20Data%20in%20the%20Cloud.pdf"
            citation={
              <>
                Doctoral dissertation. Technische Universität Darmstadt.{" "}
                <Link href="https://doi.org/10.13140/RG.2.2.30034.66248">
                  https://doi.org/10.13140/RG.2.2.30034.66248
                </Link>{" "}
              </>
            }
          />
          <Publication
            previewImages={[
              "boehm-et-al-2016-1",
              "boehm-et-al-2016-2",
              "boehm-et-al-2016-3",
            ]}
            previewImageHeight={637}
            authors="Böhm, J., Bredif, M., Gierlinger, T., Krämer, M. …"
            year="2016"
            title="The IQmulus Urban Showcase: Automatic Tree Classification and Identification in Huge Mobile Mapping Point Clouds"
            pdf="https://michelkraemer.com/publications/2016/Boehm,%20Bredif,%20Gierlinger,%20Kraemer,%20Lindenbergh,%20Liu,%20Michel,%20Sirmacek%20-%20The%20IQmulus%20Urban%20Showcase%20-%20Automatic%20Tree%20Classification%20and%20Identification%20in%20Huge%20Mobile%20Mapping%20Point%20Clouds.pdf"
            citation={
              <>
                <i>
                  ISPRS - International Archives of the Photogrammetry, Remote
                  Sensing and Spatial Information Sciences
                </i>
                , <i>XLI</i>-<i>B3</i>, 301&ndash;307.
                <Link href="https://doi.org/10.5194/isprs-archives-XLI-B3-301-2016">
                  https://doi.org/10.5194/isprs-archives-XLI-B3-301-2016
                </Link>
              </>
            }
          />
          <Publication
            previewImages={[
              "kraemer-senner-2015-01",
              "kraemer-senner-2015-02",
              "kraemer-senner-2015-03",
            ]}
            previewImageHeight={636}
            authors="Krämer, M., &amp; Senner, I."
            year="2015"
            title="A modular software architecture for processing of big geospatial data in the cloud"
            pdf="https://michelkraemer.com/publications/2015/Kraemer,%20Senner%20-%20A%20modular%20software%20architecture%20for%20processing%20of%20big%20geospatial%20data%20(accepted%20manuscript).pdf"
            citation={
              <>
                <i>Computers &amp; Graphics</i>, <i>49</i>, 69&ndash;81.{" "}
                <Link href="https://doi.org/10.1016/j.cag.2015.02.005">
                  https://doi.org/10.1016/j.cag.2015.02.005
                </Link>
              </>
            }
          />
        </div>
      </section>
    </Container>
  )
}

export default Publications
