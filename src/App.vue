<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

const fetchData = () => fetch('http://127.0.0.1:3000/user')
  .then(response => response.json())
  .then(data => console.log(data));


</script>

<template>
  <RouterView />
</template>

<style scoped></style>