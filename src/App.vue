<script>
import axios from "axios";
import { store } from "./store.js";
import AppHeader from './components/AppHeader.vue';
import AppSearchBar from './components/AppSearchBar.vue';
import CardList from './components/CardList.vue';


export default {
  created() {
    this.getCards();
  },
  components: {
    AppHeader,
    
    CardList
  },
  methods: {
    getCards() {
      console.log(this.store.selectedStatus);

      const paramsObj = {

      };

      if (this.store.selectedStatus !== "All") {
        paramsObj.status = this.store.selectedStatus;
        console.log(paramsObj.status);
        
      }

      axios.get("https://rickandmortyapi.com/api/character", {
        params: paramsObj
      }).then((resp) => {
        this.cardsArray = resp.data.results
      })
    }
  },
  data() {
    return{
      store,
      cardsArray: []

    }
  }
}
</script>

<template>
  <AppHeader @selection = "getCards" />
  
  <CardList v-if="cardsArray.length" :cardsArray = "cardsArray"/>
</template>

<style scoped>

</style>
