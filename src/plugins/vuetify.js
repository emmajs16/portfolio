import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
    themes: {
      light: {
        primary: '#F5CAC3',
        secondary: '#F7EDE2',
        accent: '#84A59D',
        error: '#F28482',
      },
    },
  },
});
