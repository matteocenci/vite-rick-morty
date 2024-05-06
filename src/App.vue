<script>
import axios from "axios";
import AppHeader from './components/AppHeader.vue';


export default {
  created() {
    axios.get("https://rickandmortyapi.com/api/character", {
    })
    .then((resp) => {
      console.log(resp);
      this.cardsArray = resp.data.data;
    })
  },
  components: {
    AppHeader
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
</template>

<style scoped>

</style>
