import '@fortawesome/fontawesome-free/css/all.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'vueperslides/dist/vueperslides.css'
import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import {VueperSlides, VueperSlide} from 'vueperslides';

Vue.use(Vuetify);
Vue.use(VueperSlides, VueperSlide);

export default new Vuetify({
    icons: {
        iconfont: 'fa' || 'md'
    }
});
