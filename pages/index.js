import Head from "next/head";

import About from "../component/About";
import Banner from "../component/Banner";
import Layout from "../component/Layout";
import Gallery from "../component/Gallery";
import Contact from "../component/Contact";
import Footer from "../component/Footer";

const Home = () => {
  return (
    <Layout>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="shortcut icon" href="/Circus.svg" type="image/x-icon" />
        <title>Home</title>
      </Head>
      <Banner />
      <About />
      <Gallery />
      <Contact />
      <Footer />
    </Layout>
  );
};
export default Home;
