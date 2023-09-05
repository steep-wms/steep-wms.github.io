#!/usr/bin/env node
import child_process from "node:child_process"
import fs from "node:fs"
import { promisify } from "node:util"

const exec = promisify(child_process.exec)

const pdfs = [
  [
    "https://agile-giss.copernicus.org/articles/4/53/2023/agile-giss-4-53-2023.pdf",
    "wuerz-et-al-2023",
  ],
  [
    "../../../publications/kaster-wuerz-2022-preprocessing-of-terrain-data-in-the-cloud-using-a-workflow-management-system.pdf",
    "kaster-wuerz-2022",
  ],
  [
    "https://michelkraemer.com/publications/2021/Kraemer%20-%20Efficient%20Scheduling%20of%20Scientific%20Workflow%20Actions%20in%20the%20Cloud%20Based%20on%20Required%20Capabilities%20(accepted%20manuscript).pdf",
    "kraemer-2021",
  ],
  [
    "https://michelkraemer.com/publications/2021/Kraemer,%20Wuerz,%20Altenhofen%20-%20Executing%20cyclic%20scientific%20workflows%20in%20the%20cloud.pdf",
    "kraemer-wuerz-altenhofen-2021",
  ],
  [
    "https://michelkraemer.com/publications/2020/Kraemer%20-%20Capability-based%20Scheduling%20of%20Scientific%20Workflows%20in%20the%20Cloud.pdf",
    "kraemer-2020",
  ],
  [
    "https://michelkraemer.com/publications/2016/Boehm,%20Bredif,%20Gierlinger,%20Kraemer,%20Lindenbergh,%20Liu,%20Michel,%20Sirmacek%20-%20The%20IQmulus%20Urban%20Showcase%20-%20Automatic%20Tree%20Classification%20and%20Identification%20in%20Huge%20Mobile%20Mapping%20Point%20Clouds.pdf",
    "boehm-et-al-2016",
  ],
  [
    "https://michelkraemer.com/publications/2015/Kraemer,%20Senner%20-%20A%20modular%20software%20architecture%20for%20processing%20of%20big%20geospatial%20data%20(accepted%20manuscript).pdf",
    "kraemer-senner-2015",
  ],
]

for (let pdf of pdfs) {
  console.log(pdf[0])

  await exec(`pdftocairo -png -f 1 -l 3 -r 300 "${pdf[0]}" "${pdf[1]}"`)

  for (let i = 1; i <= 3; ++i) {
    let n
    if (fs.existsSync(`${pdf[1]}-${i}.png`)) {
      n = `${pdf[1]}-${i}`
    } else if (fs.existsSync(`${pdf[1]}-0${i}.png`)) {
      n = `${pdf[1]}-0${i}`
    } else {
      throw new Error(`Could not find page ${i} of ${pdf[0]}`)
    }

    await exec(`convert "${n}.png" -resize 450x "${n}.png"`)

    await exec(
      `/usr/local/opt/mozjpeg/bin/cjpeg -quality 60 "${n}.png" > "${n}.jpg"`,
    )

    await exec(`avifenc --min 37 --max 40 "${n}.png" "${n}.avif"`)

    await exec(`rm "${n}.png"`)
  }
}
