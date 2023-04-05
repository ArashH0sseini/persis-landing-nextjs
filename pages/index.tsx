import type { NextPage } from 'next'
import Head from 'next/head'
import EventDate from '../components/EventDate'
import Header from '../components/Header'
import Loacation from '../components/Loacation'
import Panel from '../components/Panel'
import PriceList from '../components/PriceList'
import JoinEvent from '../components/JoinEvent'
import Sponsors from '../components/Sponsors'
import Workshops from '../components/Workshops'
import Footer from '../components/Footer'
import { useRecoilValue } from "recoil";
import { menuState } from "../atoms/menuAtom";
import HamberMenu from '../components/HamberMenu'
import AboutPersis from '../components/AboutPersis'
import WhyThisWorkshop from '../components/WhyThisWorkshop'
import Blog from '../components/Blog/Blog'
import { sanityClient, urlFor } from "../sanity";
import { Post } from "../typing";

interface Props {
  posts: [Post];
}

const Home = ({ posts }: Props) => {
  const open = useRecoilValue(menuState);

  return (
    <div className=" text-white z-0 relative bg-hero-pattern">
      <Head>
        <title>بازخورد</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {open ? <HamberMenu /> : null}
      <Header />
      <div className='max-w-7xl m-auto'>
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
  )
}

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
