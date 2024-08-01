import { defineStore } from "pinia"
import { ref, computed } from "vue"
export const useCounterStore = defineStore("counter", () => {
  const count = ref(0)
  const name = ref("Eduardo")
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, name, doubleCount, increment }
})

// How to use in .Vue file
import { useCounterStore } from "@/stores/counter"
import { storeToRefs } from "pinia"

const CounterStore = useCounterStore()
// `name` and `doubleCount` are reactive refs
// This will also extract refs for properties added by plugins
// but skip any action or non reactive (non ref/reactive) property
const { name, doubleCount } = storeToRefs(CounterStore)
// the increment action can just be destructured
const { increment } = CounterStore
