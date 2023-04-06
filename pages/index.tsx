import type { NextPage } from "next";
import Head from "next/head";
import EventDate from "../components/Event/EventDate";
import Header from "../components/Layout/Header";
import Loacation from "../components/Event/EventLoacation";
import Panel from "../components/WorkShop/WorkshopSpeakers";
import PriceList from "../components/Event/EventPrice";
import JoinEvent from "../components/Event/EventContact";
import Sponsors from "../components/Event/EventSponsors";
import Workshops from "../components/WorkShop/Workshops";
import Footer from "../components/Layout/Footer";
import { useRecoilValue } from "recoil";
import { menuState } from "../atoms/menuAtom";
import HamberMenu from "../components/Layout/HamberMenu";
import AboutPersis from "../components/Description/AboutPersis";
import WhyThisWorkshop from "../components/Description/WhyThisWorkshop";
import Blog from "../components/Blog/BlogSection";
import { sanityClient } from "../sanity";
import Navbar from "../components/Layout/Navbar";

const Home = () => {
  const open = useRecoilValue(menuState);

  return (
    <div className=" text-white z-0 relative bg-hero-pattern">
      <Head>
        <title>بازخورد</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {open ? <HamberMenu /> : null}
      <Navbar />
      <Header />
      <div className="max-w-7xl m-auto">
        <section id="about">
          <AboutPersis />
        </section>

        <Panel />
        <Workshops />

        <section id="why">
          <WhyThisWorkshop />
        </section>

        <PriceList />
        <EventDate />
        <Loacation />
        {/* <Sponsors /> */}

        <section id="blog">
          <Blog />
        </section>

        <section id="contact">
          <JoinEvent />
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const query = `*[_type == "post"]{
    _id,
    title,
    author-> {
      name,
      image
    },
    description,
    mainImage,
    slug
  }`;

  const posts = await sanityClient.fetch(query);

  return {
    props: {
      posts,
    },
  };
};
