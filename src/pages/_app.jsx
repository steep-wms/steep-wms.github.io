import "../css/main.scss";

export default function MyApp({ Component, pageProps }) {
  // add client-side libraries
  if (typeof window !== 'undefined') {
    require("bootstrap/js/dist/collapse");
  }

  return <Component {...pageProps} />
}
