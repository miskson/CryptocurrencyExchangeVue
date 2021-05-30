import VueRouter from 'vue-router'

import ExchangeWindow from '../components/ExchangeWindow'
import SuccessWindow from '../components/SuccessWindow'


export default new VueRouter({
    routes: [
        {   
            path: '/cryptoExchangeMain',
            component: ExchangeWindow
        },
        {
            path: '/successWindow',
            component: SuccessWindow
        }
    ]
})
