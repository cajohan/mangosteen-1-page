import { ref } from "vue"

export const userBool = (initialvalue: boolean) => {
  const bool = ref(initialvalue)
  return {
    ref: bool,
    toggle: () => bool.value = !bool.value,
    on: () => bool.value = true,
    off: () => bool.value = false
  }
}