<template>
    <!-- add functionality here-->
    <header class="site-header"> 
        <h1 class="site-header__title">Crypto<span>Exchange</span></h1>
        <span class="site-header__Id">Check ID: <span>id</span></span>
    </header>
</template>

<!--SCRIPTS TO BE ADDED HERE-->
<script>

</script>

<style>
    .site-header {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        background-color: #1f212b;
        color: white;
        padding: 15px;
    }

    .site-header__title {
        font-size: 50px;
        font-weight: 700;
    }

    .site-header span {
        color: #eddc67;
    }
    
    .site-header__Id {
        text-align: center;
        font-size: 20px;
        color: dimgray;
    }
</style>