<script>

import { store } from "./../store.js";

export default {
    props: {
        cardObj: Object,
    },
    data() {
        return {
            store
        }
    },
    created() {
        
    }, 
    computed: {
        image () {
            return this.cardObj.image
            
        },
        type() {
            return this.cardObj.type
            ?this.cardObj.type
            : "Human";
        },
        status() {
            return this.cardObj.status
        }
    }

}
</script>

<template>
<div class="card mb-2">
    <img :src="image"/>
    <div class="card-body">
        <h4>{{ cardObj.name }}</h4>
        <p>{{ type }}</p>
        <p>{{ status }}</p>
    </div>
</div>
</template>

<style lang="scss" scoped>
</style>