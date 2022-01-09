import { Provider } from "next-auth/client";
import '../assets/css/style.css'
import { useEffect } from "react";
 
import 'bootstrap/dist/css/bootstrap.min.css'
if (typeof window !== "undefined") {
  window.onload = () => {
    require("../assets/js/jquery.min.js")
    require("../assets/js/popper.min.js")
    // require("../assets/js/bootstrap.min.js")
    require("../assets/js/waypoints.min.js")
    require("../assets/js/jquery.easing.min.js")
    require("../assets/js/owl.carousel.min.js")
    require("../assets/js/jquery.animatedheadline.min.js")
    require("../assets/js/jquery.counterup.min.js")
    require("../assets/js/wow.min.js")
    require("../assets/js/default/date-clock.js")
    require("../assets/js/default/dark-mode-switch.js")
    require("../assets/js/default/active.js")
  }
}

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <Provider session={session}>
      <Component {...pageProps} />
    </Provider>
  )
}
