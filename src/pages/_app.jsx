import "../css/main.scss";
import CodeLanguageContext from "../components/lib/code-language-context";
import AutoScrollingContext from "../components/lib/AutoScrollingContext";
import NavBarContext from "../components/lib/NavBarContext";

export default ({ Component, pageProps }) => (
  <AutoScrollingContext.Provider>
    <NavBarContext.Provider>
      <Component {...pageProps} />
    </NavBarContext.Provider>
  </AutoScrollingContext.Provider>
);
