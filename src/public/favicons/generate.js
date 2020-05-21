const favicons = require("favicons")
const fs = require("fs")

const config = {
  path: "/favicons/",
  appName: "Steep Workflow Management System",
  appShortName: "Steep",
  developerName: "Fraunhofer IGD",
  start_url: "../",
  logging: true,
  icons: {
    android: false,
    appleIcon: false,
    appleStartup: false,
    coast: false,
    firefox: false,
    windows: false,
    yandex: false
  }
}

favicons("../../assets/steep-icon.svg", config, (error, response) => {
  if (error) {
    console.error(error.message)
    return
  }

  for (let f of response.files) {
    console.log(`Write ${f.name} ...`)
    fs.writeFileSync(f.name, f.contents, "utf-8")
  }

  for (let f of response.images) {
    console.log(`Write ${f.name} ...`)
    fs.writeFileSync(f.name, f.contents)
  }

  console.log("---------------------------------------------------------------")
  console.log("INSERT THE FOLLOWING INTO YOUR Header.jsx")
  console.log("---------------------------------------------------------------")
  for (let s of response.html) {
    s = s.replace(/>$/m, "/>")
    console.log(s)
  }
})
