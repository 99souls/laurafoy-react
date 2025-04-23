import CaseStudyBody from '../../components/CaseStudyBody/CaseStudyBody';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';
import manifesto from './../../assets/CaseStudies/manifesto.png';

interface ManifestoProps {}

const Manifesto: React.FC<ManifestoProps> = () => {
  return (
    <>
      <NavBar />
      <div className='caseStudyContentContainer'>
        <CaseStudyBody
          title='MANIFESTO'
          subtitle='My first graphic design project, showcasing the manifesto of my 19-year-old self.'
          bodyCopy='This was the first ever graphic design project I completed during the first year of my Interaction Design degree. The brief was simple but open-ended: design a visual manifesto that captured who I was at the time. It ended up being a great introduction, not only to layout and typography, but to using design as a tool for self-expression.
I started out by writing my manifesto, figuring out what values, thoughts, and creative ideals felt most important to me at the time. My lifelong love of film was definitely a big influence. From there, I started exploring how typography could help communicate tone and personality. I experimented with type scale, hierarchy, and font pairing, all while thinking about how to bring rhythm and structure to something so personal.
As the project progressed, I revisited and refined both the visual direction and the content itself. I dug deeper into design research and reflected on how my ideas could evolve, without losing the original spirit of the manifesto. It was the first time I really thought about design as an ongoing process of iteration, balancing creative instincts with thoughtful decision-making.
Looking back, it’s still a piece I’m proud of, not because it’s perfect (because it definitely isn’t), but because it captures where I started, both as a designer and as a newly fledged adult.'
          imageSource={manifesto}
        />
      </div>
      <Footer />
    </>
  );
};

export default Manifesto;