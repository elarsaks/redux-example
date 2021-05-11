import React from 'react';
import Head from 'next/head';
import LayOut from '../components/LayOut'
import { wrapper } from '../redux/store'
import '../styles/App.scss'

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