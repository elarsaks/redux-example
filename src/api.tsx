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
  
const api = {
  getProductsData
}

export default api