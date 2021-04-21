import axios from 'axios'

const getProductsData = (productId: Number) =>{
  return axios({
      url: `https://fakestoreapi.com/products/1${productId}`,
      method: 'GET',
  })
  .then(resp => resp.data)
}
  
const api = {
  getProductsData
}

export default api