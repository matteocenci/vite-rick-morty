<script>
import AppCard from "./AppCard.vue"
export default {
    components: {
        AppCard
    },

    created() {
        // console.log(this.cardsArray);
    },
    props: {
        cardsArray: Array
    }

}
</script>

<template>
    <div class="container">
        <div class="row row-cols-4">
            <div class="col" v-for="card in cardsArray">
                <AppCard :cardObj = "card"/>
                
            </div>
        </div>
    </div>


</template>

<style scoped lang="scss">
</style>