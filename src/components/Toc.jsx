import TocItem from "./TocItem"
import GithubSlugger from "github-slugger"
import styles from "./Toc.scss"
import classNames from "classnames"

const Toc = ({ docs, noPadding = false, reduceIndent = false, tocSlugger = new GithubSlugger() }) => {
  return (<ol className={classNames({ "reduce-indent": reduceIndent, "no-padding": noPadding })}>
    {docs.map((item, index) =>
      <TocItem key={index} item={item} slugger={tocSlugger} reduceIndent={reduceIndent} />)}
    <style jsx>{styles}</style>
  </ol>)
}

export default Toc
