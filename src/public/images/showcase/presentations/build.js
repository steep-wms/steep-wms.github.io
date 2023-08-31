#!/usr/bin/env node
import child_process from "node:child_process"
import fs from "node:fs"
import { promisify } from "node:util"

const exec = promisify(child_process.exec)

const pdfs = [
  {
    url: "https://files.speakerdeck.com/presentations/555ed4f4ace84540b9043c29dce30433/2023-06-15_Agile_A_Scalable_AI_Training_Platform_for_Remote_Sensing_Data.pdf",
    output: "wuerz-2023",
    nSlides: 15,
  },
  {
    url: "https://files.speakerdeck.com/presentations/229b96ba5a954a2d8ea16145e3b3b729/2022-05-12_Berlin.pdf",
    output: "wuerz-2022",
    nSlides: 37,
  },
  {
    url: "https://files.speakerdeck.com/presentations/bce29341f24641379c6cc5889da20a91/Capability-based_scheduling_of_scientific_workflows_in_the_cloud.pdf",
    output: "kraemer-2020",
    nSlides: 72,
  },
]

for (let pdf of pdfs) {
  console.log(pdf.url)

  await exec(
    `pdftocairo -png -f 1 -l ${pdf.nSlides} -r 300 "${pdf.url}" "${pdf.output}"`,
  )

  for (let i = 1; i <= pdf.nSlides; ++i) {
    let n
    if (fs.existsSync(`${pdf.output}-${i}.png`)) {
      n = `${pdf.output}-${i}`
    } else if (fs.existsSync(`${pdf.output}-0${i}.png`)) {
      n = `${pdf.output}-0${i}`
    } else {
      throw new Error(`Could not find page ${i} of ${pdf.url}`)
    }

    await exec(`convert "${n}.png" -resize 720x "${n}.png"`)

    await exec(
      `/usr/local/opt/mozjpeg/bin/cjpeg -quality 45 "${n}.png" > "${n}.jpg"`,
    )

    await exec(`avifenc --min 32 --max 37 "${n}.png" "${n}.avif"`)

    await exec(`rm "${n}.png"`)
  }
}
