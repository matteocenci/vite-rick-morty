<script>
import axios from "axios";
import AppHeader from './components/AppHeader.vue';
import CardList from './components/CardList.vue';


export default {
  created() {
    axios.get("https://rickandmortyapi.com/api/character", {
    })
    .then((resp) => {
      this.cardsArray = resp.data.results;
      // console.log(this.cardsArray);
    })
  },
  components: {
    AppHeader,
    CardList
  },
  data() {
    return{
      cardsArray: []

    }
  }
}
</script>

<template>
  <AppHeader />
  <CardList v-if="cardsArray.length" :cardsArray = "cardsArray"/>
</template>

<style scoped>

</style>
