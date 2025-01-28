import CaseStudyBody from '../../components/CaseStudyBody/CaseStudyBody';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';
import times_new_roman from './../../assets/CaseStudies/times_new_roman.png';

interface TimesNewRomanProps {}

const TimesNewRoman: React.FC<TimesNewRomanProps> = () => {
  return (
    <>
      <NavBar />
      <div className='caseStudyContentContainer'>
        <CaseStudyBody
          title='TIMES NEW ROMAN TYPE SPECIMEN'
          subtitle='A design project showcasing a classic typeface that I undertook during the first year of my Interaction Design Degree at Belfast School of Art for a module on the History of Design.'
          bodyCopy='The brief for this project was to design a Type Specimen for screen. We were given a choice of 6 different typefaces and I chose Times New Roman, arguably one of the most basic and disregarded fonts there is. I thought it would be an interesting challenge to see what designs someone with bold design sensibilities like myself could come up with for such a classic and serious font.'
          imageSource={times_new_roman}
        />
      </div>
      <Footer />
    </>
  );
};

export default TimesNewRoman;
