import { AxiosResponse } from "axios";
import { http } from "./Http";


export let mePromise:Promise<AxiosResponse<{
  resource: {
    id: number 
  }
}>> | undefined

export const refreshMe = () => {
  mePromise = http.get<{ resource:{id:number}}>('/me')
  console.log("mePromise: ",mePromise)
  return mePromise
}

export const fetchMe = refreshMe