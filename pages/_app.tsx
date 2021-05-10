import React from 'react';
import Head from 'next/head';
import LayOut from '../components/LayOut'
import '../styles/App.scss'
import { wrapper } from '../redux/store'

const WrappedApp = ({ Component, pageProps }) => {
  return (
    <div>
      <Head>
        <link rel="shortcut icon" href="../favicon.ico" />
      </Head>
      <LayOut>
        <Component {...pageProps} />
      </LayOut>
    </div>
  )
}

export default wrapper.withRedux(WrappedApp)