import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import globalComponents from "./plugins/global";
import mixing from "./plugins/mixing";

import { i18n } from "./plugins/i18n.js";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-next/dist/bootstrap-vue-next.css";
import "./assets/main.scss";
import PrimeVue from "primevue/config";

import VueApexCharts from "vue3-apexcharts";

import VueDragscroll from "vue-dragscroll";
import VueCountdown from "@chenfengyuan/vue-countdown";
import VueUploadComponent from "vue-upload-component";

import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import { useToast } from "vue-toastification";

//theme
import "primevue/resources/themes/bootstrap4-light-purple/theme.css";

//core
import "primevue/resources/primevue.min.css";

const app = createApp(App);

app.use(router);
app.use(i18n);
app.use(globalComponents);
app.mixin(mixing);
app.use(VueDragscroll);
app.use(PrimeVue);
app.use(VueApexCharts);
app.use(Toast);
app.use(store)

app.component(VueCountdown.name, VueCountdown);
app.component("file-upload", VueUploadComponent);

app.config.globalProperties.mode = "dev";

const prodApi = "https://coffeswap.kodexpay.com";
const devApi = "http://127.0.0.1:3000";

app.config.globalProperties.apiUrl =
app.config.globalProperties.mode == "dev" ? devApi : prodApi;

app.config.warnHandler = () => null;

app.mount("#app");

import axios from "axios";
axios.defaults.baseURL = app.config.globalProperties.apiUrl;

const vuex = JSON.parse(localStorage.getItem("vuex"));
if (vuex) {
  if (vuex.auth) {
    if (vuex.auth.access_token) {
      axios.defaults.headers.common.Authorization =
        "Bearer " + vuex.auth.access_token;
    }
  }
}

window.openNotification = function (
  text = "Transacción ejecutada correctamente",
  variant = "success"
) {
  const toast = useToast();

  toast[variant](text, {
    position: "top-center",
    timeout: 5500,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    showCloseButtonOnHover: false,
    hideProgressBar: true,
    closeButton: "button",
    icon: false,
    rtl: false,
  });
};
