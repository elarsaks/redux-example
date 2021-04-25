import axios from 'axios'

const getProductsData = (productId: Number) => {
  return axios({
    method: 'GET',
    url: `https://fakestoreapi.com/products/${productId}`,
    headers: {
      'Access-Control-Allow-Origin': '*',
      //  'Cache-Control': 'max-age=3600'
    },
  })
    .then(resp => resp.data)
}

const saveProductData = (productId: Number) => {
  return axios({
    method: 'PUT',
    url: `https://fakestoreapi.com/products/${productId}`,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  })
    .then(resp => resp.data)
}


const api = {
  getProductsData,
  saveProductData
}

export default api