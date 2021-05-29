import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        amount: 0,
        exchanged: 0,
        currencies: {
                UAH : {
                    name: 'UAH',
                    toUah: 1,
                    toUsd: 27.46,
                    toEur: 34,
                    toEth: 71518.75,
                    toBtc: 1072776.08,
                    reserve: 30000
                },

                USD: {
                    name: 'USD',
                    toUsd: 1,
                    toEur: 1.22,
                    toUah: 0.03641,
                    toEth: 2607.04,
                    toBtc: 39070.94,
                    reserve: 40000
                },

                EUR: {
                    name: 'EUR',
                    toEur: 1,
                    toUsd: 0.82,
                    toUah: 0.03,
                    toEth: 2101.09,
                    toBtc: 31478.89,
                    reserve: 30000
                },

                ETH: {
                    name: 'ETH',
                    toEth: 1,
                    toUsd: 0.00038,
                    toEur:0.00047,
                    toUah:0.000015,
                    toBtc:14.98,
                    reserve: 18
                },

                BTC: {
                    name: 'BTC',
                    toBtc: 1,
                    toUsd:0.000028,
                    toEur:0.000034,
                    toUah:0.000001,
                    toEth:0.07,
                    reserve: 4
                }
            },
    },
    
    mutations: {
       
    }
    
})
