import GithubSlugger from "github-slugger"

interface Group {
  title: string
  pages: Page[]
}

interface Page {
  title: string
  sections?: string[]
}

const toc: Group[] = [
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

function makeIndex() {
  let result: Record<string, Group | Page> = {}
  let slugger = new GithubSlugger()
  for (let group of toc) {
    let titleSlug = slugger.slug(group.title)
    result[titleSlug] = group

    for (let p of group.pages) {
      let pageSlug = slugger.slug(p.title)
      result[pageSlug] = p
    }
  }
  return result
}

export const Toc = toc
export const Index = makeIndex()
