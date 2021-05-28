<template>
        <div class="wrapper">
            <div class="exchange-window">
                <h2 class="exchange-window__title">Exchange:</h2>
                <div class="exchange-window__inputs">
                    <div class="exchange-window__inputs-wrapper">
                        <div class="exchange-window__from-inputs" v-bind:class="{blocked__inputs: smallerr.active}">

                            <h2 class="exchange-window__from-title">Sell: {{fromCurrency.name}}</h2>
                            <select class="exchange-window__from-currency-select" v-model="fromCurrency">
                                <option v-for="currency in currencies" v-bind:value="currency" v-bind:key="currency.name">{{currency.name}}</option>
                            </select>
                            <!--@input="onInput"-->
                            <input type="number" placeholder="Currency to sell" v-model="amount">
                            <small class="exchange-window__error" v-if="smallerr.active">{{smallerr.message}}</small>
                        </div>
                        <img class = "exchange-window__img" src="../assets/img/sync64.png" alt="<- exchange ->">

                        <div class="exchange-window__to-inputs" v-bind:class="{blocked__inputs: smallerr.active2}">

                            <h2 class="exchange-window__to-title">Buy: {{toCurrency.name}}</h2>
                            <select class="exchange-window__to-currency-select" v-model="toCurrency" @change="onChange">
                                <option v-for="currency in currencies" v-bind:value="currency"  v-bind:key="currency.name">{{currency.name}}</option>
                            </select>
                            <input type="number" readonly placeholder="Currency to buy" v-model="onInput">
                            <small class="exchange-window__error" v-if="smallerr.active2">{{smallerr.message}}</small>
                        </div>
                    </div>
                </div>

                <div class="exchange-window__button" v-bind:class="{button__inactive: button.disabled}">
                    <button  v-bind:disabled="button.disabled">{{button.message}}</button>
                </div>

                <div class="exchange-window__currency">
                    <h3>Currency:</h3>
                    <p>1{{toCurrency.name}} = {{fromCurrency[opname]}}{{fromCurrency.name}}</p>
                    
                </div>
                <div class="exchange-window__reserve">
                    <h3>Reserve:</h3>
                    <p>{{toCurrency.reserve}} {{toCurrency.name}}</p>
                </div>
            </div>
        </div>

</template>


<script>
export default {
    data() {
        return {
            amount: '',
            exchanged: '',
            button: {
                disabled: true,
                message: "Input value"
            },

            smallerr: {
                active: false,
                active2:false,
                message: '',
            },
            
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
                    toUsd: 2566.83,
                    toEur: 2101.09,
                    toUah: 71518.75,
                    toBtc: 0.07,
                    reserve: 18
                },

                BTC: {
                    name: 'BTC',
                    toBtc: 1,
                    toUsd: 38456.7,
                    toEur: 31478.89,
                    toUah: 1055910.82,
                    toEth: 14.98,
                    reserve: 4
                }
            },

            fromCurrency: {
                name: 'UAH',
                toUah: 1,
                toUsd: 27.46,
                toEur: 34,
                toEth: 71518.75,
                toBtc: 1072776.08,
                reserve: 30000
            },

            toCurrency: {
                name: 'USD',
                toUsd: 1,
                toEur: 1.22,
                toUah: 0.03641,
                toEth: 2607.04,
                toBtc: 39070.94,
                reserve: 40000
            },

            opname: "toUsd",
        }
    },

    methods: {
        disableButton: function () {
            this.button.disabled = true;
            this.button.message = "Input value";
            console.log("button disabled");
        },

        enableButton: function () {
            this.button.disabled = false;
            this.button.message = "Exchange";
            console.log("button enabled");
        },

        onChange: function () {
            if (this.toCurrency.name === "USD") {
                this.opname = 'toUsd';
            }
            if (this.toCurrency.name === "EUR") {
                this.opname = 'toEur';
            }
            if (this.toCurrency.name === "BTC") {
                this.opname = 'toBtc';
            }
            if (this.toCurrency.name === "ETH") {
                this.opname = 'toEth';
            }
            if (this.toCurrency.name === "UAH") {
                this.opname = 'toUah';
            }
        },

        toUsd: function () {
            if (this.fromCurrency.name === "UAH" || this.fromCurrency.name === "EUR") {
                return (this.amount / (this.fromCurrency).toUsd).toFixed(2);
            }
            if (this.fromCurrency.name === "ETH" || this.fromCurrency.name === "BTC") {
                return (this.amount * (this.fromCurrency).toUsd).toFixed(2);
            }
        },

        toEur: function () {
            if (this.fromCurrency.name === "UAH" || this.fromCurrency.name === "USD") {
                return (this.amount / (this.fromCurrency).toEur).toFixed(2);
            }
            if (this.fromCurrency.name === "ETH" || this.fromCurrency.name === "BTC") {
                return (this.amount * (this.fromCurrency).toEur).toFixed(2);
            }
        },

        toUah: function () {
            if (this.fromCurrency.name === "USD" || this.fromCurrency.name === "EUR") {
                return (this.amount / (this.fromCurrency).toUah).toFixed(2);
            }
            if (this.fromCurrency.name === "BTC" || this.fromCurrency.name === "ETH") {
                return (this.amount * (this.fromCurrency).toUah).toFixed(2);
            }
        },
        
        toBtc: function () {
            if (this.fromCurrency.name === "UAH" || this.fromCurrency.name === "USD" || this.fromCurrency.name === "EUR") {
                return (this.amount / (this.fromCurrency).toBtc);
            }
            if (this.fromCurrency.name === "ETH") {
                return (this.amount * (this.fromCurrency).toBtc).toFixed(2);
            }
        },
        
        toEth: function () {
            if (this.fromCurrency.name === "UAH" || this.fromCurrency.name === "USD" || this.fromCurrency.name === "EUR") {
                return (this.amount / (this.fromCurrency).toEth);
            }
            if (this.fromCurrency.name === "BTC") {
                return (this.amount * (this.fromCurrency).toEth).toFixed(2);
            }
        },
    },

    watch: {
        exchanged:function (newExchanged, oldExchanged) {
            if (this.exchanged > this.toCurrency.reserve) {
                this.disableButton();
                this.smallerr.active2 = true;
                this.smallerr.message = "Exchanged amount is more than reserve contains."
            } else {
                this.smallerr.active2 = false;
            }
        },
    },

    computed: {
        validateInput: function () {
            if (this.amount === '' || this.amount == 0) {
                this.smallerr.message = '';
                this.smallerr.active = false;
                this.exchanged = '';
                return false;
            }
            else if (this.amount < 0 || isNaN(this.amount)) {
                this.smallerr.message = "Invalid value of currency.";
                this.smallerr.active = true;
                return false;
            } else {
                return true;
            }
        },

        onInput: function () {
            if(this.validateInput) {
                this.enableButton();
                this.exchanged = this.exchanger;
                return this.exchanged;
            } else {
                this.disableButton();
            }
        },
        
        exchanger: function () {
            if (this.toCurrency.name === this.fromCurrency.name) {
                this.disableButton();
                this.smallerr.message = "Cannot exchange equalent currencies.";
                this.smallerr.active = true;
                return this.amount;
            } else {
                this.smallerr.active = false;
                return this[this.opname]();
            }
        }
    }
}
</script>

<style>
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    
    .exchange-window__from-inputs,
    .exchange-window__to-inputs,
    .blocked__inputs, .button__inactive button,
    .exchange-window__button button {
        transition: 0.1s;
    }

    .wrapper {
        border: 1px solid white;
        min-width: 100%;
        min-height: 88%;
        margin: 0 auto;
    }

    .exchange-window {
        display: grid;
        grid-template-columns: 1fr 3fr 1fr;
        min-height: 100%;
        grid-gap: 1em;
        padding: 1em;
        margin: 0 auto;
        margin: 1em ;
        border: 5px solid #1f212b;
        background-color: #1f212b27;
    }

    .exchange-window__title {
        color: black;
        grid-column: 2;
        grid-row: 1;
        text-align: center;
        font-size: 50px;
    }

    .exchange-window__inputs {
        text-align: center;
        grid-column: 2;
        grid-row: 2;
    }

    .exchange-window__inputs-wrapper {
        display: flex;
        flex-direction: row;
        justify-items: center;
        justify-content: space-around;
        padding: 15px;
    }

    .exchange-window__from-inputs,
    .exchange-window__to-inputs {
        background-color: #1f212b;
        border: 10px double #eddc67;
        padding: 15px 10px 15px 10px;
        margin: 10px;
        transition: 0.1s;
        height: fit-content;
    }

    .blocked__inputs {
        border: 10px double red;
    }
            
    .exchange-window__from-inputs h2,
    .exchange-window__to-inputs h2 {
        color: white;
        font-size: 25px;
    }

    .exchange-window__from-currency-select,
    .exchange-window__to-currency-select {
        font-size: 25px;
        height: 43px;

    }

    .exchange-window__from-inputs input,
    .exchange-window__to-inputs input {
        max-width: 200px;
        min-width: 100px;
        font-size: 25px;
        margin: 5px 10px 5px 10px;
        padding: 8px;
    }


    .exchange-window__button {
        text-align: center;
        grid-column: 2;
        grid-row: 3;
    }

    .exchange-window__button button {
        font-size: 30px;
        padding: 10px;
        margin: 20px;
        background-color: mediumseagreen;
        color: white;
        text-shadow: 1px 2px 2px black;
        box-shadow: 2px 4px 4px black;
        border-radius: 5px;
    }
        
    .exchange-window__button button:active {
        background-color: mediumspringgreen;
        box-shadow: 2px 4px 4px mediumseagreen;
    }

    .button__inactive button{
        background-color: dimgray;
    }

    .exchange-window__currency {
        grid-column: 1;
    }

    .exchange-window__reserve {
        grid-column: 3;
    }

    .exchange-window__currency, .exchange-window__reserve {
        border: 3px solid #1f212b;
        padding: 5px;
        height: fit-content;
        text-align: center;
        font-size: 25px;
        grid-row: 4;
    }

    .exchange-window__currency h3 ,.exchange-window__reserve h3 {
        background-color: #1f212b;
        color: white;
        font-size: 26px;
        font-weight: 300;
        padding: 5px;
        margin: 5px;
    }
    
    .exchange-window__img {
        display: block;
        align-self: center;
        height: auto;
        max-width: 100%;
        margin: 10px;
    }

    .exchange-window__error {
        display: block;
        color: red;
        font-size: 15px;
        padding: 10px 0 0 0;
    }

    @media screen and (max-width:1526px) and (min-width:1025px){
        .exchange-window {
            display: grid;
        }

        .exchange-window__inputs {
            grid-column: 1/4;
            grid-row: 2;
        }

        .exchange-window__inputs-wrapper {
            justify-content: center;
        }
    }

    
    @media screen and (max-width:1024px) and (min-width: 766px) {
        .exchange-window {
            display: grid;
        }

        .exchange-window__inputs {
            grid-column: 1/4;
            grid-row: 2;
        }

        .exchange-window__inputs-wrapper {
            display: flex;
            flex-wrap: wrap;
            flex-direction: column;
        }

        .exchange-window__from-inputs,
        .exchange-window__to-inputs {
            min-width: 50%;
            margin: 0 auto;
        }
                
        .exchange-window__currency {
            font-size: 16px;
            grid-column: 1;
            grid-row: 3;
        }

        .exchange-window__reserve {
            grid-column: 3;
            grid-row: 3;
        }
    }

    @media screen and (max-width: 765px) and (min-width: 350px) {
        .site-header__title {
            font-size: 25px;
        }

        .site-header__Id {
            font-size: 12px;
        }
    
        .exchange-window__inputs {
            grid-column: 1/4;
            grid-row: 2;
        }

        .exchange-window__inputs-wrapper {
            display: flex;
            flex-wrap: wrap;
            flex-direction: column;
        }

        .exchange-window__from-inputs,
        .exchange-window__to-inputs {
            margin: 0 auto;
        }

        .exchange-window__from-inputs input,
        .exchange-window__to-inputs input {
            font-size: 20px;
            width: 60%;
            height: 40px;
        }

        .exchange-window__from-currency-select,
        .exchange-window__to-currency-select {
            font-size: 20px;
            height: 40px;
        }

        .exchange-window__currency {
            grid-column: 2;
            grid-row: 4;
        }

        .exchange-window__reserve {
            grid-column: 2;
            grid-row: 5;
        }
    }
    
    @media screen and (max-width: 350px) and (min-width: 0px) {
        body {
            background-color:  #1f212b27;
        }

        .site-header__title {
            font-size: 20px;
        }
        .site-header__Id {
            font-size: 12px;
        }

        .exchange-window {
            border: none;
            background-color: transparent;
            margin: 0 auto;
        }

        .exchange-window__inputs {
            grid-column: 1/4;
            grid-row: 2;
        }

        .exchange-window__inputs-wrapper {
            display: flex;
            flex-wrap: wrap;
            flex-direction: column;
        }

        .exchange-window__from-inputs,
        .exchange-window__to-inputs {
            margin: 0 auto;
        }

        .exchange-window__from-inputs input,
        .exchange-window__to-inputs input {
            font-size: 16px;
            width: 10%;
            height: 30px;
        }

        .exchange-window__from-currency-select,
        .exchange-window__to-currency-select {
            font-size: 16px;
            height: 30px;
        }
        
        .exchange-window__currency {
            grid-column: 2;
            grid-row: 4;
        }

        .exchange-window__reserve {
            grid-column: 2;
            grid-row: 5;
        }
    }
</style>
