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
          subtitle='A responsive and visually engaging homepage design for an online retailer that specialises in handmade homeware and gifts from artists around the world.'
          bodyCopy='This project came from a Briefbox brief to design a simple logo and a responsive homepage theme for an online homeware-gift store called Yum Goods. They were after something Pinterest-inspired, progressive and minimalistic, with a retro touch. I aimed to bring this to life with a warm and artistic feel, while ensuring the design stayed clear, accessible and easy to navigate.'
          imageSource={yum_goods}
          secondImageSource={yum_goods_2}
        />
      </div>
      <Footer />
    </>
  );
};

export default YumGoods;
