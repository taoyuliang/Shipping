<script setup>
import { ref, unref } from 'vue'
import AppLink from '@/components/AppLink.vue'
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()

const activeIndex = ref('0')
const showAdmin = ref(false)
const showSupplier = ref(true)
const handleSelect = (key, keyPath) => {
  console.log(key, keyPath)
}
const toggleShowAdmin = () => showAdmin.value = !unref(showAdmin)
const toggleshowSupplier = () => { route.query.user ? showSupplier.value = false : '' }
toggleshowSupplier()




</script>

<template>
  <el-menu @dblclick="toggleShowAdmin" :default-active="activeIndex" class="el-menu-demo" mode="horizontal"
    :ellipsis="false" @select="handleSelect">
    <el-menu-item index="0">
      <router-link to="/">
        <img style="width: 60px; height: 60px" src="@/assets/vue.svg" alt="Element logo" />
      </router-link>
    </el-menu-item>
    <div class="flex-grow" />
    <el-menu-item v-if="showSupplier" index="1">
      <router-link to="/login">
        供应商入口

      </router-link>
    </el-menu-item>
    <el-menu-item v-if="showAdmin" index="2">
      <AppLink to="http://localhost:3000/admin">
        管理员入口
      </AppLink>
    </el-menu-item>

    <!-- <el-sub-menu index="2">
      <template #title>Workspace</template>
<el-menu-item index="2-1">item one</el-menu-item>
<el-menu-item index="2-2">item two</el-menu-item>
<el-menu-item index="2-3">item three</el-menu-item>
<el-sub-menu index="2-4">
  <template #title>item four</template>
  <el-menu-item index="2-4-1">item one</el-menu-item>
  <el-menu-item index="2-4-2">item two</el-menu-item>
  <el-menu-item index="2-4-3">item three</el-menu-item>
</el-sub-menu>
</el-sub-menu> -->
  </el-menu>
</template>

<style scoped>
.flex-grow {
  flex-grow: 1;
}
</style>
