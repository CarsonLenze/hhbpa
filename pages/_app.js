import { NextUIProvider, createTheme } from "@nextui-org/react";
import "@/styles/globals.css";
import Head from 'next/head'

const theme = createTheme({
  type: 'light',
  theme: {
    colors: {
      link: "#fff"
    }
  }
})

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />
        <title>Hamilton Hights BPA</title>
      </Head>
      <NextUIProvider theme={theme}>
        <Component {...pageProps} />
      </NextUIProvider>
    </>
  );
}

export default App;