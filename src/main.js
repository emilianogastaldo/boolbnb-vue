import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
// import vue3Collapse from "vue3Collapse";
import { library } from '@fortawesome/fontawesome-svg-core'

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faMugSaucer } from '@fortawesome/free-solid-svg-icons'
import { faPersonSwimming } from '@fortawesome/free-solid-svg-icons'
import { faWifi } from '@fortawesome/free-solid-svg-icons'
import { faKitchenSet } from '@fortawesome/free-solid-svg-icons'
import { faSquareParking } from '@fortawesome/free-solid-svg-icons'
import { faSpa } from '@fortawesome/free-solid-svg-icons'
import { faBanSmoking } from '@fortawesome/free-solid-svg-icons'
import { faSnowflake } from '@fortawesome/free-solid-svg-icons'
import { faJugDetergent } from '@fortawesome/free-solid-svg-icons'
import { faTv } from '@fortawesome/free-solid-svg-icons'
import { faFire } from '@fortawesome/free-solid-svg-icons'
import { faToiletPaper } from '@fortawesome/free-solid-svg-icons'
import { faPumpSoap } from '@fortawesome/free-solid-svg-icons'
import { faVault } from '@fortawesome/free-solid-svg-icons'
import { faFireExtinguisher } from '@fortawesome/free-solid-svg-icons'
import { faWheelchair } from '@fortawesome/free-solid-svg-icons'
import { faVanShuttle } from '@fortawesome/free-solid-svg-icons'
import { faCakeCandles } from '@fortawesome/free-solid-svg-icons'
import { faMartiniGlassEmpty } from '@fortawesome/free-solid-svg-icons'
import { faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons'
import { faMosquitoNet } from '@fortawesome/free-solid-svg-icons'
import { faFan } from '@fortawesome/free-solid-svg-icons'
import { faComputer } from '@fortawesome/free-solid-svg-icons'
import { faFileLines } from '@fortawesome/free-regular-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faKitMedical } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faCrown } from '@fortawesome/free-solid-svg-icons'
import { faFilter } from '@fortawesome/free-solid-svg-icons'
import App from './App.vue'
import AppLoader from './components/AppLoader.vue';
import router from './assets/router/index.js';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faMugSaucer,
    faPersonSwimming,
    faWifi,
    faKitchenSet,
    faSquareParking,
    faSpa,
    faBanSmoking,
    faSnowflake,
    faJugDetergent,
    faTv,
    faFire,
    faToiletPaper,
    faPumpSoap,
    faVault,
    faFireExtinguisher,
    faWheelchair,
    faVanShuttle,
    faCakeCandles,
    faMartiniGlassEmpty,
    faUmbrellaBeach,
    faMosquitoNet,
    faFan,
    faComputer,
    faFileLines,
    faKitMedical,
    faMagnifyingGlass,
    faHouse,
    faHeart,
    faChevronRight,
    faChevronLeft,
    faSquareFacebook,
    faYoutube,
    faXTwitter,
    faInstagram,
    faArrowLeft,
    faArrowRight,
    faUser,
    faRightToBracket,
    faCrown,
    faFilter
);
createApp(App)
    .component('AppLoader', AppLoader)
    .component('FontAwesomeIcon', FontAwesomeIcon)
    // .component("vue3-collapse", vue3Collapse)
    .use(router)
    .mount('#app')
