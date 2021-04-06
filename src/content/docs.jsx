import Sidebar from "components/Sidebar"
import Toc from "components/Toc"
import slugger from "github-slugger"
import styles from "./docs.scss?type=global"

function ContentsItem({ item, n, level = 0, slugs }) {
  let firstItem
  let rest

  if (Array.isArray(item)) {
    firstItem = item[0]
    rest = item.slice(1)
  } else {
    firstItem = item
    rest = []
  }

  // allow headings to break at slashes
  let title = firstItem.replace(/\//g, "/\u200b")

  // add heading number
  title = <>{n}{"\u2002"}{title}</>

  let slug = slugs.slug(firstItem).toLowerCase()
  let Component = require(`./docs/${slug}.mdx`).default

  if (level === 0) {
    title = <h3 id={slug}>{title}</h3>
  } else if (level === 1) {
    title = <h4 id={slug}>{title}</h4>
  } else if (level === 2) {
    title = <h5 id={slug}>{title}</h5>
  } else {
    title = <h6 id={slug}>{title}</h6>
  }

  return (<div className={`docs-section-${slug}`}>
    {title}
    <Component />
    {rest.map((c, i) => <ContentsItem key={i} item={c} n={`${n}.${i + 1}`}
      level={level + 1} slugs={slugs} />)}
  </div>)
}

const DOCS = [
  ["How does Steep work?",
    "Workflow scheduling",
    "Software architecture",
    "Processing services"
  ],
  ["Example workflows",
    "Running two services in parallel",
    "Chaining two services",
    "Splitting and joining results",
    "Processing a dynamic number of results in parallel",
    "Feeding results back into the workflow (cycles/loops)"
  ],
  ["Data models",
    "Workflows",
    "Variables",
    ["Actions",
      "Execute actions",
      "For-each actions",
      "Parameters",
      "Output parameters"
    ],
    ["Process chains",
      "Process chain status"
    ],
    ["Executables",
      "Arguments",
      "Argument variables"
    ],
    ["Submissions",
      "Submission status"
    ],
    ["Service metadata",
      "Runtime environments",
      "Service parameters",
      "Runtime arguments"
    ],
    "Retry policies",
    "Durations",
    "Agents",
    ["VMs",
      "VM status"
    ],
    ["Setups",
      "Volumes"
    ],
    "Pool agent parameters"
  ],
  ["HTTP endpoints",
    "GET information",
    "GET submissions",
    "GET submission by ID",
    "PUT submission",
    "POST workflow",
    "GET process chains",
    "GET process chain by ID",
    "GET process chain logs",
    "HEAD process chain logs",
    "PUT process chain",
    "GET agents",
    "GET agent by ID",
    "GET VMs",
    "GET VM by ID",
    "GET services",
    "GET service by ID",
    "GET Prometheus metrics"
  ],
  "Web-based user interface",
  ["Configuration",
    ["steep.yaml",
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
      "Log configuration"
    ],
    "setups.yaml",
    "services/services.yaml",
    "plugins/common.yaml",
    "Using YAML anchors"
  ],
  ["Extending Steep through plugins",
    "Initializers",
    "Output adapters",
    "Process chain adapters",
    "Custom runtime environments",
    "Progress estimators",
    "Precompiling plugins"
  ]
]

const Docs = () => {
  const contentSlugs = slugger()
  const contents = DOCS.map((item, index) =>
    <ContentsItem key={index} item={item} n={index + 1} slugs={contentSlugs} />)

  return (
    <section className="docs">
      <h2 id="documentation">Documentation</h2>
      <p>
        In this section, we describe the individual features of Steep. The
        documentation always applies to the latest software version.
      </p>

      <h6>Table of contents</h6>

      <div className="table-of-contents">
        <Toc docs={DOCS} />
      </div>

      {contents}

      <Sidebar>
        <ol>
          <Toc docs={DOCS} />
        </ol>
      </Sidebar>

      <style jsx>{styles}</style>
    </section>
  )
}

export default Docs
