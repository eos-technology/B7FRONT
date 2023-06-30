import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { i18n } from "./plugins/i18n.js";
import globalComponents from "./plugins/global";
import mixing from "./plugins/mixing";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-next/dist/bootstrap-vue-next.css";
import "./assets/main.scss";
import PrimeVue from "primevue/config";
import VueApexCharts from "vue3-apexcharts";
import VueDragscroll from "vue-dragscroll";
import VueCountdown from "@chenfengyuan/vue-countdown";
import VueUploadComponent from "vue-upload-component";

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


app.component(VueCountdown.name, VueCountdown);
app.component("file-upload", VueUploadComponent);
app.mount("#app");
