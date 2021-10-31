import TocItem from "./TocItem"
import slugger from "github-slugger"
import styles from "./Toc.nscss"

const Toc = ({ docs, tocSlugs = slugger() }) => {
  return (<ol>
    {docs.map((item, index) =>
      <TocItem key={index} item={item} slugs={tocSlugs} />)}
    <style jsx>{styles}</style>
  </ol>)
}

export default Toc
