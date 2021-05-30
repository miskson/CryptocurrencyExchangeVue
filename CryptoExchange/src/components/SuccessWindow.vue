<template>
  <div class="message-window">
        <div class="inner-wrapper">
            <h1 class="message-window__title">Info:</h1>
            <div class="message-window__info">
                <h1 class="message-window__second-title">Operation success!</h1>
                <br>
                <h3>
                    You've successfully exchanged:
                </h3>
                <p>
                    <span>{{this.$store.state.lastTransactionInfo.currencySold}} {{this.$store.state.lastTransactionInfo.exchangedFrom}}</span>
                    to
                    <span>{{this.$store.state.lastTransactionInfo.currencyBought}} {{this.$store.state.lastTransactionInfo.exchangedTo}}</span>
                </p>
                <br>
                <h3>operation id: <span>{{this.$store.state.transactionId}}</span></h3>
            </div>
            <div class="message-window__button">
                <button @click="returnToMain">Close</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            returnToMain: function () {
                this.$router.push('/cryptoExchangeMain');
            }
        }
    }
</script>

<style scoped>
    .message-window {
        min-height: 100%;
        padding: 1em;
        margin: 0 auto;
        margin: 1em ;
        border: 5px solid #1f212b;
        color: white;
        text-shadow: 1px 1px 2px solid black;
        background-color: #1f212b27;
    }

    .inner-wrapper {
        display: block;
        background-color: #1f212b;
        width: fit-content;
        margin: 0 auto;
        padding: 20px;
        border: 10px double mediumseagreen;

    }

    .message-window__title {
        text-align: center;
        font-size: 50px;
    }

    .message-window__second-title {
        font-size: 60px;
        color: mediumseagreen;
    }

    .message-window__info {
        text-align: center;
        font-size: 40px;
    }
    .message-window__info h3 {
        margin: 20px;
    }
    .message-window__info span {
        font-weight: bold;
        color: #eddc67;
    }

    .message-window__button {
        text-align: center;
    }

    .message-window__button button {
        font-size: 40px;
        padding: 10px;
        margin: 20px;
        background-color: mediumseagreen;
        color: white;
        text-shadow: 1px 2px 2px black;
        box-shadow: 2px 4px 4px black;
        border-radius: 5px;
        transition: 0.1s;
    }
        
    .message-window__button button:active {
        background-color: mediumspringgreen;
        box-shadow: 2px 4px 4px mediumseagreen;
    }

     
    @media screen and (max-width: 400px) and (min-width: 0px) {
        body {
            background-color: #1f212b;;
        }

        .site-header__title {
            font-size: 20px;
        }
        .site-header__Id {
            font-size: 12px;
        }

        .message-window {
            border: none;
            background-color: #1f212b;
            font-size: 5px;
            margin: 0 auto;
        }

        .inner-wrapper {
            padding: 0;
            width: 100%;
            border: none;
        }
    }
</style>
