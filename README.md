# Steep WMS Website

This repository contains the source code of the website of the Steep Workflow
Management System:

<https://steep-wms.github.io/>

You can find the sources in the `src` directory. The website will be built
directly into the repository's root directory so GitHub Pages can serve it
correctly.

If you make changes to the source, rebuild the website and commit both the
modified sources and the built artefacts together. Push the commit and wait
for GitHub Pages to update.

Build the website:

    cd src
    npm i
    npm run build

Run website in development mode:

    npm run dev

Update GitHub pages:

    npm run deploy
    git add -A
    git commit
    git push
