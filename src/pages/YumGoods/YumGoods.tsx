import CaseStudyBody from '../../components/CaseStudyBody/CaseStudyBody';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';
import yum_goods from './../../assets/CaseStudies/yum_goods.png';
import yum_goods_2 from './../../assets/CaseStudies/yum_goods_2.png';

interface YumGoodsProps {}

const YumGoods: React.FC<YumGoodsProps> = () => {
  return (
    <>
      <NavBar />
      <div className='caseStudyContentContainer'>
        <CaseStudyBody
          title='YUM GOODS'
          subtitle='A responsive and aesthetic home page design for an online retailer specialising in homeware and gifts handmade by artists from around the world.'
          bodyCopy='The brief for this project came from Briefbox. It was to design a simple logo and a responsive homepage theme for an e-commerce homeware-gift store called Yum Goods. I endevoured to create a design that has a Pinteresty, progressive, minimalistic and retro vibe as requested but with a fresh and artistic flair, while ensuring that the UI of the webpage remained accessible.'
          imageSource={yum_goods}
          secondImageSource={yum_goods_2}
        />
      </div>
      <Footer />
    </>
  );
};

export default YumGoods;
