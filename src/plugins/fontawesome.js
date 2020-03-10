import Vue from 'vue'

import {
    library
} from '@fortawesome/fontawesome-svg-core'
import {
    faEnvelope,
} from '@fortawesome/free-regular-svg-icons'
import {
    faFlickr
} from '@fortawesome/free-brands-svg-icons'

import {
    FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'

library.add(faEnvelope, faFlickr)

Vue.component('font-awesome-icon', FontAwesomeIcon)