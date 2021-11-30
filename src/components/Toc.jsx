import TocItem from "./TocItem"
import slugger from "github-slugger"
import styles from "./Toc.scss"
import classNames from "classnames"
const Toc = ({ docs, noPadding = false, reduceIndent = false, tocSlugs = slugger() }) => {
  return (<ol className={classNames({ "reduce-indent": reduceIndent, "no-padding": noPadding })}>
    {docs.map((item, index) =>
      <TocItem key={index} item={item} slugs={tocSlugs} reduceIndent={reduceIndent} />)}
    <style jsx>{styles}</style>
  </ol>)
}

export default Toc
