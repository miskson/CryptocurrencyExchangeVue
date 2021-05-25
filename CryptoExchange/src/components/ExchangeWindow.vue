<template>
        <div class="wrapper">
            <div class="exchange-window">
                <h2 class="exchange-window__title">Exchange:</h2>
                <div class="exchange-window__inputs">
                    <div class="exchange-window__inputs-wrapper">
                        <div class="exchange-window__from-inputs">

                            <h2 class="exchange-window__from-title">Sell: {{fromCurrency}}</h2>
                            <select class="exchange-window__from-currency-select" v-model="fromCurrency">
                                <option v-for="currency in currencies" v-bind:value="currency">{{currency}}</option>
                            </select>
                            <input type="number" placeholder="to Sell" v-model="amount">
                            
                        </div>

                        <img class = "exchange-window__img" src="../assets/img/sync64.png" alt="<- exchange ->">

                        <div class="exchange-window__to-inputs">

                            <h2 class="exchange-window__to-title">Buy: {{toCurrency}}</h2>
                            <select class="exchange-window__to-currency-select" v-model="toCurrency">
                                <option v-for="currency in currencies" v-bind:value="currency">{{currency}}</option>
                            </select>
                            <input type="number" readonly placeholder="to Buy" v-model="onInput" id="smh">

                        </div>
                    </div>
                </div>

                <div class="exchange-window__button">
                    <button  v-bind:disabled="isButtonDisabled">Exchange</button>
                </div>

                <div class="exchange-window__currency">
                    <h3>Currency:</h3>
                    <p>1BTC = 2 378 UAH</p>
                    <p>1ETH = 587 EUR</p>
                    <p>1EUR = 34 UAH</p>
                </div>
                <div class="exchange-window__reserve">
                    <h3>Reserve:</h3>
                    <p>4 BTC</p>
                    <p>30 000 UAH</p>
                    <p>18 ETH</p>
                </div>
            </div>
        </div>

</template>


<script>
export default {
    data() {
        return {
            amount: 0,
            isButtonDisabled: true,
            currencies: ['UAH','USD','EUR','BTC', 'ETH'],
            fromCurrency: 'UAH',
            toCurrency: 'USD',

            UAH: {
                toUsd: 27.46,
                toEur: 34,
                toEth: 71518.75,
                toBtc: 1072776.08
            },

            USD: {
                toEur: 1.22,
                toUah: 0.03641,
                toEth: 2607.04,
                toBtc: 39070.94
            },

            EUR: {
                toUsd: 0.82,
                toUah: 0.03,
                toEth: 2101.09,
                toBtc: 31478.89
            },

            ETH: {
                toUsd: 2566.83,
                toEur: 2101.09,
                toUah: 71518.75,
                toBtc: 0.07
            },

            BTC: {
                toUsd: 38456.7,
                toEur: 31478.89,
                toUah: 1055910.82,
                toEth: 14.98,
            },
        }
    },

    methods: {
        disableButton: function () {
            this.isButtonDisabled = true;
            console.log("button disabled");
        },

        enableButton: function () {
            this.isButtonDisabled = false;
            console.log("button enabled");
        },

        toUsd: function () {
            if (this.fromCurrency === "UAH") {
                return (this.amount / (this.UAH.toUsd)).toFixed(2);
            }
            if (this.fromCurrency === "EUR") {
                return (this.amount / (this.EUR.toUsd)).toFixed(2);
            }
            if (this.fromCurrency === "ETH") {
                return (this.amount * (this.ETH.toUsd)).toFixed(2);
            }
            if (this.fromCurrency === "BTC") {
                return (this.amount * (this.BTC.toUsd)).toFixed(2);
            }
        },

        toEur: function () {
           if (this.fromCurrency === "UAH") {
                return (this.amount / (this.UAH.toEur)).toFixed(2);
            }
            if (this.fromCurrency === "USD") {
                return (this.amount / (this.USD.toEur)).toFixed(2);
            }
            if (this.fromCurrency === "ETH") {
                return (this.amount * (this.ETH.toEur)).toFixed(2);
            }
            if (this.fromCurrency === "BTC") {
                return (this.amount * (this.BTC.toEur)).toFixed(2);
            }
        },

        toBtc: function () {
           if (this.fromCurrency === "UAH") {
                return (this.amount / (this.UAH.toBtc));
            }
            if (this.fromCurrency === "USD") {
                return (this.amount / (this.USD.toBtc));
            }
            if (this.fromCurrency === "ETH") {
                return (this.amount * (this.ETH.toBtc));
            }
            if (this.fromCurrency === "EUR") {
                return (this.amount / (this.EUR.toBtc));
            }
        },

        toEth: function () {
           if (this.fromCurrency === "UAH") {
                return (this.amount / (this.UAH.toEth));
            }
            if (this.fromCurrency === "USD") {
                return (this.amount / (this.USD.toEth));
            }
            if (this.fromCurrency === "BTC") {
                return (this.amount * (this.BTC.toEth));
            }
            if (this.fromCurrency === "EUR") {
                return (this.amount / (this.EUR.toEth));
            }
        },

        toUah: function () {
           if (this.fromCurrency === "ETH") {
                return (this.amount * (this.ETH.toUah));
            }
            if (this.fromCurrency === "USD") {
                return (this.amount / (this.USD.toUah)).toFixed(2);
            }
            if (this.fromCurrency === "BTC") {
                return (this.amount * (this.BTC.toUah));
            }
            if (this.fromCurrency === "EUR") {
                return (this.amount / (this.EUR.toUah)).toFixed(2);
            }
        }
    },

    computed: {

        validteInput: function () {
            if (this.amount <= 0) {
                return false;
            } else {
                return true;
            }
        },

        onInput: function () {
            if(this.validteInput) {
                console.log("VALID INPUT");
                this.enableButton();
                return this.exchanger;
            } else {
                this.disableButton();
                console.log("INVALID INPUT");
            }
        },

        exchanger: function () {
            if (this.toCurrency === this.fromCurrency) {
                this.disableButton();
                return this.amount * 1;
            }
            if (this.toCurrency === "USD") {
                return this.toUsd();
            }
            if (this.toCurrency === "EUR") {
                return this.toEur();
            }
            if (this.toCurrency === "BTC") {
                return this.toBtc();
            }
            if (this.toCurrency === "ETH") {
                return this.toEth();
            }
            if (this.toCurrency === "UAH") {
                return this.toUah();
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
    }
            
    .exchange-window__from-inputs h2,
    .exchange-window__to-inputs h2 {
        color: white;
        font-size: 25px;
    }

    .exchange-window__from-currency-select,
    .exchange-window__to-currency-select {
        font-size: 20px;
        height: 33px;
    }

    .exchange-window__from-inputs input,
    .exchange-window__to-inputs input {
        max-width: 200px;
        min-width: 100px;
        font-size: 25px;
        margin: 5px 10px 5px 10px;
    }


    .exchange-window__button {
        text-align: center;
        grid-column: 2;
        grid-row: 3;
    }

    .exchange-window__button button {
        font-size: 30px;
        padding: 10px;
        margin: 10px;
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

     .exchange-window__currency {
        grid-column: 1;
    }

    .exchange-window__reserve {
        grid-column: 3;
    }

    .exchange-window__currency, .exchange-window__reserve {
        border: 3px solid #1f212b;
        padding: 5px;
        text-align: center;
        font-size: 30px;
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
