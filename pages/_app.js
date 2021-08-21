import "bootstrap/dist/css/bootstrap.min.css"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faHeart } from "@fortawesome/free-solid-svg-icons"

library.add(faHeart)

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
