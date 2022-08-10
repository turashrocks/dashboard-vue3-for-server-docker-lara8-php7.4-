<template>
     
<Menu/>

<div class="container-fluid">
  <div class="row">
  <Navigation/>

    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <router-view/>
    </main>
  </div>
</div>
 
</template>

<style scoped>

</style>

<script lang="ts">
import { defineComponent } from "vue";
import Navigation from "../components/Navigation.vue";
import Menu from "../components/Menu.vue";
import {onMounted, ref} from 'vue';
import axios from 'axios';
import {useRouter} from "vue-router";
import {useStore} from "vuex";

export default defineComponent({
  name: "Secure",
  components:{
    Navigation,
    Menu
  },
  setup(){
    onMounted(async()=>{
      const response = await axios.get('user');
      console.log(response)
    })
  }
})
</script>

