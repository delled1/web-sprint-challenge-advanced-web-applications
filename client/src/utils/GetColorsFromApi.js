import {axiosWithAuth} from "./AxiosWithAuth"

export const getColorsFromApi = () => {
    return axiosWithAuth().get('/colors')
    .then(res => res)
    .catch(err => err)
  }