import "@/styles/globals.css";
import Layout from "@/components/layout";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
         <link href="https://fonts.googleapis.com/css2?family=Barlow&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}
