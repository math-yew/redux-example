import axios from 'axios';

export function getClothes() {
  return axios.get('http://practiceapi.devmounta.in/products')
  .then(res=> res.data)
}

export function getItem(name) {
  return axios.get(`https://practiceapi.devmountain.com/api/animals/${name}`)
  .then(res=> res.data)
}
