import CaseStudyBody from '../../components/CaseStudyBody/CaseStudyBody';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';
import lines from './../../assets/CaseStudies/lines.png';

interface LinesProps {}

const Lines: React.FC<LinesProps> = () => {
  return (
    <>
      <NavBar />
      <div className='caseStudyContentContainer'>
        <CaseStudyBody
          title='LINES OF ARCHITECTURE'
          subtitle='A design project exploring the transition from function to aesthetic in the use of geometric lines in architecture through a series of 9 iterations.'
          bodyCopy='During the first year of my Interaction Design degree, we were asked to explore either point, line, or plane through a series of narrative iterations. I chose to focus on line, specifically the geometric shapes that often appear in modern architecture, not just in commercial buildings, but increasingly as a stylistic feature in contemporary homes. These are all line work recreations of architectural images sourced from various places, but primarily Pinterest. Each one traced in Adobe Illustrator to emphasise the linear forms within the structures.  The first building is the Central Bank of Ireland in Dublin; an example of Brutalist architecture, the third building is the Sita building in Letterkenny and the last few buildings are modern homes. These 9 images represent a transition from function to aesthetic in the use of geometric lines in architecture.'
          imageSource={lines}
        />
      </div>
      <Footer />
    </>
  );
};

export default Lines;