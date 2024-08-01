<script setup>
import { computed } from 'vue'
import { RouterLink, useLink } from 'vue-router'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps({ // return a  Proxy
  // add @ts-ignore if using TypeScript
  ...RouterLink.props,
  inactiveClass: String,
})
const { navigate, href, route, isActive, isExactActive } = useLink(props) // return each Object
// console.log('uselink:  ', isActive.value)
const isExternalLink = computed(() => {
  return typeof props.to === 'string' && props.to.startsWith('http')
})

const commonClass = 'inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out'
const activeClass = commonClass + 'border-indigo-500 text-gray-900 focus:border-indigo-700'
const inactiveClass = commonClass + 'text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300'

</script>

<template>
  <a v-if="isExternalLink" v-bind="$attrs" :href="to" target="_blank">
    <slot />
  </a>
  <router-link v-else v-bind="$props" custom v-slot="{ isActive, href, navigate }">
    <!-- above custom  is used to unwrap , and $props is vue-router thing-->
    <a v-bind="$attrs" :href="href" @click="navigate" :class="isActive ? activeClass : inactiveClass">
      <slot />
    </a>
  </router-link>
</template>


<style scoped>
/* if and only if use scoped style eg .icon, then data-v-xx will appear */
.icon {
  color: slateblue;
  font-size: 1.3em;
  margin-right: 0.5em;
}
</style>
