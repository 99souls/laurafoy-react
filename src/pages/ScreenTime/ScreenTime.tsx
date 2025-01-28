import CaseStudyBody from '../../components/CaseStudyBody/CaseStudyBody';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';
import screen_time from './../../assets/CaseStudies/screen_time.png';

interface ScreenTimeProps {}

const ScreenTime: React.FC<ScreenTimeProps> = () => {
  return (
    <>
      <NavBar />
      <div className='caseStudyContentContainer'>
        <CaseStudyBody
          title='SCREEN TIME INFOGRAPHIC'
          subtitle='An infographic illustrating the effects of screen time and downtime that I designed during the first year of my Interaction Design degree for a module titled ‘Imaging and Data Visualisation’.'
          bodyCopy='The brief for this project was to design an infographic/data visualisation focusing on a subject specific to the world around us. After some consideration, I decided to design an infographic that about the negative effects of screen time. I felt that it was especially pertinent during covid times because we as a society were spending far more time staring at screens than ever before.'
          imageSource={screen_time}
        />
      </div>
      <Footer />
    </>
  );
};

export default ScreenTime;
