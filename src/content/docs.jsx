import ScrollLink from "../components/ScrollLink"
import Sidebar from "../components/Sidebar"
import slugger from "github-slugger"
import "./docs.scss"

function TocItem({ item, slugs }) {
  let firstItem
  let rest

  if (Array.isArray(item)) {
    firstItem = item[0]
    rest = item.slice(1)
  } else {
    firstItem = item
    rest = []
  }

  let slug = slugs.slug(firstItem).toLowerCase()

  return (<>
    <li>
      <ScrollLink href={`#${slug}`}>{firstItem}</ScrollLink>
      {rest.length > 0 && (
        <ol>
          {rest.map((c, i) => <TocItem key={i} item={c} slugs={slugs} />)}
        </ol>
      )}
    </li>
  </>)
}

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

  let title = <>{n}{"\u2002"}{firstItem}</>
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

function Toc({ docs }) {
  const tocSlugs = slugger()
  return docs.map((item, index) =>
    <TocItem key={index} item={item} slugs={tocSlugs} />)
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
    "Agents",
    ["VMs",
      "VM status"
    ],
    "Setups",
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
      "SSH connection to VMs"
    ],
    "setups.yaml"
  //   "services/services.yaml",
  //   "plugins/commons.yaml"
  ]
  // ["Extending Steep through plugins",
  //   "Custom runtime environments",
  //   "Output adapters",
  //   "Process chain adapters",
  //   "Initializers"
  // ]
]

export default () => {
  const contentSlugs = slugger()
  const contents = DOCS.map((item, index) =>
    <ContentsItem key={index} item={item} n={index + 1} slugs={contentSlugs} />)

  return (
    <section className="docs">
      <h2>Documentation</h2>
      <p>
        In this section, we describe the individual features of Steep. The
        documentation always applies to the latest software version.
      </p>

      <h6>Table of contents</h6>

      <div className="table-of-contents">
        <ol>
          <Toc docs={DOCS} />
        </ol>
      </div>

      {contents}

      <Sidebar>
        <ol>
          <Toc docs={DOCS} />
        </ol>
      </Sidebar>
    </section>
  )
}
