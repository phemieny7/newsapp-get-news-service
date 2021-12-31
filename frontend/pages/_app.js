import '../assets/css/style.css'
 
import 'bootstrap/dist/css/bootstrap.min.css'
if (typeof window !== "undefined") {
 require("../assets/js/jquery.min.js")
 require("../assets/js/popper.js")
 require("../assets/js/waypoints.min.js")
 require("../assets/js/jquery.easing.min.js")
//  require("../assets/js/owl.carousel.min.js")
 require("../assets/js/jquery.animatedheadline.min.js")
 require('owl.carousel/dist/assets/owl.carousel.css');  
 require('owl.carousel');
 require("../assets/js/jquery.counterup.min.js")
 require("../assets/js/wow.min.js")
 require("../assets/js/default/date-clock.js")
 require("../assets/js/default/dark-mode-switch.js")
 require("../assets/js/default/active.js")
}

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
