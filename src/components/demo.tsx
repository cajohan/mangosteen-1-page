import { defineComponent, PropType } from 'vue';
import s from './demo.module.scss';
export const demo = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
  },
  setup: (props, context) => {
    return () => (
      <div class={s.wrapper}></div>
    )
  }
})