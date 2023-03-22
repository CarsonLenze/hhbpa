import { NextUIProvider, createTheme } from "@nextui-org/react";

const theme = createTheme({
  type: "light",
  theme: {
    colors: {
      link: "#fff"
    }
  }
})

function App({ Component, pageProps }) {
  return (
    <>
      <NextUIProvider theme={theme}>
        <Component {...pageProps} />
      </NextUIProvider>
    </>
  );
}

export default App;