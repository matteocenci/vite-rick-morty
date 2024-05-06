<script>
export default {
    props: {
        
        cardObj: Object,
    },
    created() {
        console.log("cardobject");
        console.log(this.cardObj);
    }, 
    computed: {
        image () {
            return this.cardObj.image
            console.log();
        },
        type() {
            return this.cardObj.type
            ?this.cardObj.type
            : "Human";
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
    </div>
</div>
</template>

<style lang="scss" scoped>
</style>