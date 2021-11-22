import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    breakpoint: {
        thresholds: {
            xs: 0,
            sm: 426,
            md: 668,
            lg: 1000,
            xl: 1300
         }
    }
});
