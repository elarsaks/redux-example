import axios from 'axios'

const getProductsData = (productId: Number) => {
  return axios({
    method: 'GET',
    url: `https://fakestoreapi.com/products/${productId}`,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
  })
    .then(resp => resp.data)
    .catch(err => console.log(err))
}
  
const api = {
  getProductsData
}

export default api