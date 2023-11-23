import { defineStore } from "pinia"

type SelectState = {
  selectTab: string 
  selectKind: 'expenses' | 'income' | undefined
  selectTabSta: string | undefined
  selectKindSta: 'expenses' | 'income' | undefined
}
export const useSelectStore = defineStore<string, SelectState, {}, MeActions>('select', {
  state: () => ({
    selectTab: '本月',
    selectKind: 'expenses',
    selectTabSta: '本月',
    selectKindSta: 'expenses'
  }),
  actions: {
    changeSelect(select: keyof SelectState,value: string){
      this[select] = value
    }
  }
})