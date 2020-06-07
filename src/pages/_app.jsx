import styles from "css/main.scss?type=global"
import AutoScrollingContext from "components/lib/AutoScrollingContext"
import CodeLanguageContext from "components/lib/CodeLanguageContext"
import NavBarContext from "components/lib/NavBarContext"

export default ({ Component, pageProps }) => (
  <AutoScrollingContext.Provider>
    <CodeLanguageContext.Provider>
      <NavBarContext.Provider>
        <Component {...pageProps} />
        <style jsx>{styles}</style>
      </NavBarContext.Provider>
    </CodeLanguageContext.Provider>
  </AutoScrollingContext.Provider>
)
