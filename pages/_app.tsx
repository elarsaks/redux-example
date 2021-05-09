import React from 'react';
import '../styles/App.scss'
import { wrapper } from '../redux/store'

const WrappedApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(WrappedApp)