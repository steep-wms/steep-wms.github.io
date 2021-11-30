import ScrollLink from "./ScrollLink"
import Toc from "./Toc"
import styles from "./TocItem.scss"

const TocItem = ({ item, reduceIndent = false, slugs }) => {
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
      {rest.length > 0 && <Toc docs={rest} tocSlugs={slugs} reduceIndent={reduceIndent} />}
      <style jsx>{styles}</style>
    </li>
  </>)
}

export default TocItem
