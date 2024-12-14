<script setup>

// const fetchData = () => fetch('http://127.0.0.1:3000/user')
//   .then(response => response.json())
//   .then(data => console.log(data));


</script>

<template>
  <el-affix position="top" :offset="0">
    <Header />
  </el-affix>
  <RouterView />
</template>

<style scoped></style>