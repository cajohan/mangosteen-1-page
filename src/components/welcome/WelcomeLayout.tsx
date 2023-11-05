import { defineComponent } from 'vue';
import s from './Welcome.module.scss'
import pig from '../../assets/icons/pig.svg'
import { RouterLink } from 'vue-router';

export const WelcomeLayout = defineComponent({
  setup: (props, context) => {
    const {slots} = context
    return () => (
      <div class={s.wrapper}>
        <div class={s.card}>
          {slots.icon?.()}
          {slots.title?.()}
        </div>
        <div class={s.actions}>
          {slots.buttons?.()}
        </div>
      </div>
    )
  }
})