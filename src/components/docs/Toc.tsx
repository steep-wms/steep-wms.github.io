import { slug } from "github-slugger"

interface Chapter {
  readonly type: "chapter"
  readonly title: string
  readonly slug: string
  readonly pages: Page[]
}

interface Page {
  readonly type: "page"
  readonly title: string
  readonly slug: string
  readonly sections?: Section[]
}

interface Section {
  readonly type: "section"
  readonly title: string
  readonly slug: string
}

type DraftSection =
  | string
  | (Omit<Section, "type" | "slug"> & { slug?: string })
type DraftPage = Omit<Page, "type" | "slug" | "sections"> & {
  slug?: string
  readonly sections?: DraftSection[]
}
type DraftChapter = Omit<Chapter, "type" | "slug" | "pages"> & {
  readonly pages: DraftPage[]
}

const toc: DraftChapter[] = [
  {
    title: "Introduction",
    pages: [
      { title: "Get started" },
      {
        title: "How does Steep work?",
        sections: [
          "Workflow scheduling",
          "Software architecture",
          "Processing services",
        ],
      },
      {
        title: "Example workflows",
        sections: [
          "Running two services in parallel",
          "Chaining two services",
          "Splitting and joining results",
          "Processing a dynamic number of results in parallel",
          "Feeding results back into the workflow (cycles/loops)",
        ],
      },
      { title: "Tutorial: Segment aerial images" },
    ],
  },
  // [
  //   "Data models",
  //   ["Workflows", "Retry policy defaults"],
  //   "Variables",
  //   [
  //     "Actions",
  //     "Execute actions",
  //     "For-each actions",
  //     "Parameters",
  //     "Output parameters",
  //   ],
  //   ["Process chains", "Process chain status"],
  //   ["Executables", "Arguments", "Argument variables"],
  //   ["Submissions", "Submission status"],
  //   [
  //     "Service metadata",
  //     "Runtime environments",
  //     "Service parameters",
  //     "Runtime arguments",
  //   ],
  //   "Retry policies",
  //   "Timeout policies",
  //   "Creation policies",
  //   "Durations",
  //   "Agents",
  //   ["VMs", "VM status"],
  //   ["Setups", "Volumes"],
  //   "Pool agent parameters",
  // ],
  {
    title: "Full-text search",
    pages: [
      { title: "Query language" },
      { title: "Search examples" },
      { title: "Search results" },
      { title: "Matches" },
    ],
  },
  // [
  //   "HTTP endpoints",
  //   "GET information",
  //   "GET health",
  //   "GET submissions",
  //   "GET submission by ID",
  //   "PUT submission",
  //   "POST workflow",
  //   "GET process chains",
  //   "GET process chain by ID",
  //   "GET process chain logs",
  //   "GET process chain runs",
  //   "GET process chain run by run number",
  //   "HEAD process chain logs",
  //   "PUT process chain",
  //   "GET agents",
  //   "GET agent by ID",
  //   "GET VMs",
  //   "GET VM by ID",
  //   "GET plugins",
  //   "GET plugin by name",
  //   "GET services",
  //   "GET service by ID",
  //   "GET setups",
  //   "GET setup by ID",
  //   "GET search",
  //   "GET Prometheus metrics",
  // ],
  // "Web-based user interface",
  // [
  //   "Configuration",
  //   [
  //     "steep.yaml",
  //     "General configuration",
  //     "Cluster settings",
  //     "HTTP configuration",
  //     "Controller configuration",
  //     "Scheduler configuration",
  //     "Agent configuration",
  //     "Runtime settings",
  //     "Database connection",
  //     "Cloud connection",
  //     "OpenStack cloud driver",
  //     "SSH connection to VMs",
  //     "Log configuration",
  //     "Garbage collector configuration",
  //     "Cache configuration",
  //   ],
  //   "setups.yaml",
  //   "services/services.yaml",
  //   "plugins/common.yaml",
  //   [
  //     "Advanced configuration topics",
  //     [
  //       "Provisioning scripts",
  //       "Global variables",
  //       "Environment variables",
  //       "Configuration values",
  //       "Read local files",
  //       "Upload local files to remote",
  //     ],
  //     "Using YAML anchors",
  //     "Using a template engine",
  //   ],
  // ],
  {
    title: "Extending Steep through plugins",
    pages: [
      { title: "Initializers" },
      { title: "Output adapters" },
      { title: "Process chain adapters" },
      { title: "Process chain consistency checkers" },
      { title: "Custom runtime environments" },
      { title: "Progress estimators" },
      { title: "Parameter injection" },
    ],
  },
]

function makeToc() {
  let result: Chapter[] = []

  for (let chapter of toc) {
    let pages: Page[] = []
    for (let p of chapter.pages) {
      let sections: Section[] | undefined = undefined
      if (p.sections !== undefined) {
        sections = []
        for (let s of p.sections) {
          let title
          let sectionSlug
          if (typeof s === "string") {
            title = s
            sectionSlug = slug(title)
          } else {
            title = s.title
            sectionSlug = s.slug ?? slug(title)
          }
          sections.push({ title, type: "section", slug: sectionSlug })
        }
      }

      let pageSlug = slug(p.title)
      pages.push({
        ...p,
        type: "page",
        slug: p.slug ?? pageSlug,
        sections,
      })
    }

    let chapterSlug = slug(chapter.title)
    result.push({
      ...chapter,
      type: "chapter",
      slug: chapterSlug,
      pages,
    })
  }

  return result
}

function makeIndex(indexedToc: Chapter[]) {
  let result: Record<string, Chapter | Page | Section> = {}

  function add(e: Chapter | Page | Section) {
    if (result[e.slug] !== undefined) {
      throw new Error(`Duplicate slug: ${e.slug}`)
    }
    result[e.slug] = e
  }

  for (let chapter of indexedToc) {
    for (let p of chapter.pages) {
      if (p.sections !== undefined) {
        for (let s of p.sections) {
          add(s)
        }
      }
      add(p)
    }
    add(chapter)
  }

  return result
}

export const Toc = makeToc()
export const Index = makeIndex(Toc)
