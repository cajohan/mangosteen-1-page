import { defineComponent, PropType } from 'vue';
import s from './ItemPage.module.scss';
import { RouterView } from 'vue-router';
import { MainLayout } from '../layouts/MainLayout';
import { Icon } from '../shared/Icon';
export const ItemPage = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
  },
  setup: (props, context) => {
    return () => (
      <RouterView />
    )
  }
})