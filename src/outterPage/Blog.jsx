import React from 'react'
import BlogItem from './BlogItem';
import BlogImg1 from './../components/images/blogI1.jpg'
import BlogImg2 from "./../components/images/blogI2.jpg";
import BlogImg3 from "./../components/images/blogI3.jpg";
import BlogImg4 from "./../components/images/blogI4.jpg";
import BlogImg5 from "./../components/images/blogI5.jpg";
import BlogImg6 from "./../components/images/blogI6.jpg";
import Footer from '../pages/Footer';
import Container from '../components/Container';

const Blog = () => {
  return (
    <div data-aos="fade-up">
      {/* <div className="bg-[url('/blogT.jpg')] bg-cover bg-center py-[50px]"></div> */}
      <Container>
        <div className='mt-[30px] mb-[30px]'>
          <h3 className="text-[30px] font-semibold leading-[38px] text-[#194A33]">
            Lastest Blogs
          </h3>
        </div>
      </Container>
      <BlogItem
        src={BlogImg1}
        name="Kimberley's Kyusu"
        itemTitle="Amethyst Gaba Oolong (Mei Leaf)"
        itemPera="I'm sure that it will come as no shock to any of you that I'm
            writing a tasting sessions post for yet another tea from Mei Leaf. I
            didn't plan on this when I..."
      />
      <BlogItem
        src={BlogImg2}
        name="Tea Happiness"
        itemTitle="Tea Gifts for Every Type of Tea Lover"
        itemPera="It's that special time of year! If you're wondering what to get your favorite tea lover for the holidays, I've compiled a list of suggestions from the..."
      />
      <BlogItem
        src={BlogImg3}
        name=" Oh, How Civilized"
        itemTitle="See black tea health benefits and get step-by-step instructions on how to make this tea properly from a Tea Sommelier."
      />
      <BlogItem
        src={BlogImg4}
        name="Tea For Me Please"
        itemTitle="Tezumi Matsuba Sencha"
        itemPera="Tezumi's Matsuba Sencha was crisp and clean with a pleasant minerality. It was an enjoyable tea that would be a great intro to single cultivar Japanese greens."
      />
      <BlogItem
        src={BlogImg5}
        name="Life is Better with Tea"
        itemTitle="How To Brew Tea Perfectly Every Time"
        itemPera="Brewing tea is a guide for beginners and experienced tea makers alike. Learn how to make tea properly and brew the best cup of loose leaf tea every time."
      />
      <BlogItem
        src={BlogImg6}
        name="The Tea Cup of Life"
        itemTitle="Chai Frappuccino Recipe"
        itemPera="A spiced, creamy and frozen drink is perfect to sip during in-between weather days. This easy Chai Frappuccino recipe checks all of those boxes. The coolness..."
      />
      <div className="mt-[100px]">
        <Footer />
      </div>
    </div>
  );
}

export default Blog