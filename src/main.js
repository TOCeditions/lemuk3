// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import DefaultLayout from '~/layouts/Default.vue'

UIkit.use(Icons);

// import 'node_modules/uikit/dist/css/uikit.min.css'
import '~/assets/style.scss';
import '~/assets/style.less';

export default function (Vue, { router, head, isClient }) {
  // head.htmlAttrs = { lang: 'pl' }
  Vue.component('Layout', DefaultLayout)
}
