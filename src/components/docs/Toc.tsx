import { slug } from "github-slugger"

export interface Chapter {
  readonly type: "chapter"
  readonly title: string
  readonly slug: string
  readonly pages: Page[]
}

export interface Page {
  readonly type: "page"
  readonly title: string
  readonly slug: string
  readonly chapter: string
  readonly sections?: Section[]
}

export interface Section {
  readonly type: "section"
  readonly title: string
  readonly slug: string
  readonly page: string
  readonly subsections?: Subsection[]
}

export interface Subsection {
  readonly type: "subsection"
  readonly title: string
  readonly slug: string
  readonly page: string
  readonly section: string
}

type DraftSubsection =
  | string
  | (Omit<Subsection, "type" | "slug" | "page"> & { slug?: string })
type DraftSection =
  | string
  | (Omit<Section, "type" | "slug" | "page" | "subsections"> & {
      readonly slug?: string
      readonly subsections?: DraftSubsection[]
    })
type DraftPage = Omit<Page, "type" | "slug" | "sections" | "chapter"> & {
  readonly slug?: string
  readonly sections?: DraftSection[]
}
type DraftChapter = Omit<Chapter, "type" | "slug" | "pages"> & {
  readonly pages: DraftPage[]
}

const toc: DraftChapter[] = [
  {
    title: "Introduction",
    pages: [
      { title: "Get started", slug: "" },
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
  {
    title: "Data models",
    pages: [
      {
        title: "Workflows",
        sections: [
          "Variables",
          {
            title: "Actions",
            subsections: [
              "Execute actions",
              "For-each actions",
              "Parameters",
              "Output parameters",
            ],
          },
          "Retry policy defaults",
        ],
      },
      {
        title: "Process chains",
        sections: [
          {
            title: "Executables",
            subsections: ["Arguments", "Argument variables"],
          },
          "Process chain status",
        ],
      },
      {
        title: "Submissions",
        sections: ["Submission status"],
      },
      {
        title: "Service metadata",
        sections: [
          "Runtime environments",
          "Service parameters",
          "Runtime arguments",
        ],
      },
      {
        title: "Timeouts and retries",
        sections: ["Timeout policies", "Retry policies", "Durations"],
      },
      {
        title: "Agents",
      },
      {
        title: "VMs",
        sections: ["VM status"],
      },
      {
        title: "Setups",
        sections: ["Volumes", "Creation policies"],
      },
      {
        title: "Full-text search",
        sections: [
          "Query language",
          "Search examples",
          "Search results",
          "Matches",
        ],
      },
    ],
  },
  {
    title: "Interfaces",
    pages: [
      {
        title: "HTTP endpoints",
        sections: [
          "GET information",
          "GET health",
          "GET submissions",
          "GET submission by ID",
          "PUT submission",
          "POST workflow",
          "GET process chains",
          "GET process chain by ID",
          "GET process chain logs",
          "GET process chain runs",
          "GET process chain run by run number",
          "HEAD process chain logs",
          "PUT process chain",
          "GET agents",
          "GET agent by ID",
          "GET VMs",
          "GET VM by ID",
          "GET plugins",
          "GET plugin by name",
          "GET services",
          "GET service by ID",
          "GET setups",
          "GET setup by ID",
          "GET search",
          "GET Prometheus metrics",
        ],
      },
      {
        title: "Web-based user interface",
      },
    ],
  },
  {
    title: "Configuration",
    pages: [
      {
        title: "steep.yaml",
        sections: [
          "General configuration",
          "Cluster settings",
          "HTTP configuration",
          "Controller configuration",
          "Scheduler configuration",
          "Agent configuration",
          "Runtime settings",
          "Database connection",
          "Cloud connection",
          "OpenStack cloud driver",
          "SSH connection to VMs",
          "Log configuration",
          "Garbage collector configuration",
          "Cache configuration",
          "Agent pool parameters",
        ],
      },
      {
        title: "setups.yaml",
      },
      {
        title: "services/services.yaml",
      },
      {
        title: "plugins/common.yaml",
      },
    ],
  },
  {
    title: "Advanced configuration topics",
    pages: [
      {
        title: "Provisioning scripts",
        sections: [
          "Global variables",
          "Environment variables",
          "Configuration values",
          "Read local files",
          "Upload local files to remote",
        ],
      },
      {
        title: "Using YAML anchors",
      },
      {
        title: "Using a template engine",
      },
    ],
  },
  {
    title: "Extending Steep through plugins",
    pages: [
      {
        title: "Overview",
        slug: "plugin-overview",
        sections: ["Parameter injection"],
      },
      { title: "Initializers" },
      { title: "Output adapters" },
      { title: "Process chain adapters" },
      { title: "Process chain consistency checkers" },
      { title: "Custom runtime environments" },
      { title: "Progress estimators" },
    ],
  },
]

function makeToc() {
  let result: Chapter[] = []

  for (let chapter of toc) {
    let chapterSlug = slug(chapter.title)

    let pages: Page[] = []
    for (let p of chapter.pages) {
      let pageSlug = p.slug ?? slug(p.title)

      let sections: Section[] | undefined = undefined
      if (p.sections !== undefined) {
        sections = []
        for (let s of p.sections) {
          let title
          let sectionSlug
          let subsections: Subsection[] | undefined = undefined
          if (typeof s === "string") {
            title = s
            sectionSlug = slug(title)
          } else {
            title = s.title
            sectionSlug = s.slug ?? slug(title)

            if (s.subsections !== undefined) {
              subsections = []
              for (let ss of s.subsections) {
                let title
                let subsectionSlug
                if (typeof ss === "string") {
                  title = ss
                  subsectionSlug = slug(title)
                } else {
                  title = ss.title
                  subsectionSlug = ss.slug ?? slug(title)
                }

                subsections.push({
                  title,
                  type: "subsection",
                  slug: subsectionSlug,
                  page: pageSlug,
                  section: sectionSlug,
                })
              }
            }
          }

          sections.push({
            title,
            type: "section",
            slug: sectionSlug,
            page: pageSlug,
            subsections,
          })
        }
      }

      pages.push({
        ...p,
        type: "page",
        slug: pageSlug,
        sections,
        chapter: chapterSlug,
      })
    }

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
  let result: Record<string, Chapter | Page | Section | Subsection> = {}

  function add(e: Chapter | Page | Section | Subsection) {
    if (result[e.slug] !== undefined) {
      throw new Error(`Duplicate slug: ${e.slug}`)
    }
    result[e.slug] = e
  }

  for (let chapter of indexedToc) {
    for (let p of chapter.pages) {
      if (p.sections !== undefined) {
        for (let s of p.sections) {
          if (s.subsections !== undefined) {
            for (let ss of s.subsections) {
              add(ss)
            }
          }
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
