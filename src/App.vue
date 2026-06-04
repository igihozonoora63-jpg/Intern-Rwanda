<script setup>
import { RouterView, useRouter} from 'vue-router'
import Navbar from './components/navbar.vue';
import Footer from './components/footer.vue';
import {computed} from 'vue';

const route = useRouter();
const hideLayout = computed(() =>
  ['StudentDashboard', 'CompanyDashboard'].includes(route.name)
)

</script>

<template>
  
  <Navbar v-if="!hideLayout"/>
  <RouterView/>
      <Footer v-if="!hideLayout"/>
   
</template>

<style scoped></style>
