import type { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <p>token: {pageProps?.iap?.jwt}</p>
      <p>email: {pageProps?.iap?.email}</p>
      <Component {...pageProps} />
    </>
  );
}

App.getInitialProps = async(ctx) =>  {
  let iap
  const headers = ctx?.ctx?.req?.headers

  if (headers) {
    console.log(headers)
    iap  = {
      jwt: headers['x-goog-iap-jwt-assertion'],
      email: headers['x-goog-authenticated``-user-email'],
    }
  }

  return { pageProps: { iap } }
}
export default App