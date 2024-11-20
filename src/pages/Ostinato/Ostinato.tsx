import blue_accordion from '../../assets/ostinato/blue_accordion.png';
import slide_1 from '../../assets/ostinato/carouseImages/slide_1.png';
import slide_2 from '../../assets/ostinato/carouseImages/slide_2.png';
import slide_3 from '../../assets/ostinato/carouseImages/slide_3.png';
import slide_4 from '../../assets/ostinato/carouseImages/slide_4.png';
import slide_5 from '../../assets/ostinato/carouseImages/slide_5.png';
import slide_6 from '../../assets/ostinato/carouseImages/slide_6.png';
import slide_7 from '../../assets/ostinato/carouseImages/slide_7.png';
import green_clarinet from '../../assets/ostinato/green_clarinet.png';
import ostinato_logo from '../../assets/ostinato/ostinato_logo.svg';
import plum_drum from '../../assets/ostinato/plum_drum.png';
import yellow_piano from '../../assets/ostinato/yellow_piano.png';
import Carousel from '../../components/Accordion/Carousel';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';
import './styles.css';

const carouselImages = [
  slide_1,
  slide_2,
  slide_3,
  slide_4,
  slide_5,
  slide_6,
  slide_7,
];

const Ostinato = () => {
  return (
    <>
      <NavBar />
      <div className='ostinatoWrapper'>
        <div className='ostinatoHeader'>
          <div className='containerMargin'>
            <img
              src={ostinato_logo}
              alt='Ostinato Logo'
              className='ostinatoLogo'
            />
            <p className='ostinatoSubtitle'>
              For my final year project I designed an app that uses AI
              technology to reimagine music education.
            </p>
          </div>
        </div>
        <div className='ostinatoContainer'>
          <section className='topContentRow'>
            <div className='flex justifyCenter blueAccordionImage'>
              <img
                src={blue_accordion}
                alt='Blue Accordion'
                className='ostinatoImages'
              />
            </div>
            <div className='flex justifyCenter yellowPianoImage'>
              <img
                src={yellow_piano}
                alt='Yellow Piano'
                className='hideForMobile'
              />
            </div>
            <div className='flex column ostinatoSectionGap topContentText'>
              <h2>THE PROBLEM</h2>
              <p>I aimed to tackle two main challenges in music education:</p>
              <p>
                <strong>Limited Access</strong> - Not everyone has equal access
                to quality music education due to factors such as age, economic
                status, geographic location etc.
              </p>
              <p>
                <strong>Maintaining Motivation</strong> - For musicians of any
                circumstance, maintaining one's proficiency and the motivation
                to keep playing and practicing can pose a serious challenge.
              </p>
              <p>
                Ostinato is designed to help learners feel encouraged, supported
                and motivated on their musical journeys.
              </p>
            </div>
          </section>

          <section className='flex row ostinatoGap ostinatoSection'>
            <div className='flex columnHalf ostinatoSectionGap'>
              <div className='ostinatoTextGap'>
                <div className='ostinatoSectionGap'>
                  <h2>THE SOLUTION</h2>
                  <p>
                    It’s an app for learning, practising and mastering any
                    instrument with help from an AI tutor, who provides
                    personalised feedback on your playing, supports notation and
                    audio input, and adapts to your playing style. With curated
                    content and a vibrant community, users can continually
                    discover, learn and grow. Ostinato also facilitates better
                    collaboration and resource-sharing among classes and
                    ensembles.
                  </p>
                </div>
                <div className='ostinatoSectionGap'>
                  <h2>TARGET MARKET</h2>
                  <p>
                    Ostinato is designed for anyone with an interest in music
                    and a willingness to learn, regardless of age, skill level,
                    or any other factors. While this might seem broad, the
                    reality is that music learners come in many forms, each with
                    their own unique needs and frustrations. My goal has been
                    create a space where all music learners can thrive.
                  </p>
                </div>
                <div className='ostinatoSectionGap'>
                  <h2>PLATFORM</h2>
                  <p>
                    Ostinato is a mobile application optimised for tablet
                    screens, but with potential for multi-platform
                    compatibility.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <Carousel slides={carouselImages} />
            </div>
          </section>

          <section className='flex row ostinatoGap ostinatoSection'>
            <img
              src={green_clarinet}
              alt='Green Clarinet'
              className='hideForMobile'
            />
            <div className='flex column ostinatoSectionGap'>
              <h2>WHY THIS IDEA?</h2>
              <p>
                As a musician who enjoys both listening to music and playing
                different instruments, I am quite familiar with the challenges
                of music learning. From tackling new pieces to staying motivated
                during plateau periods, these experiences have inspired me to
                design something that helps learners overcome these hurdles
                effectively.
              </p>
              <p>
                I spent a year on placement at Synergy Learning, gaining
                experience designing for learning management systems (LMS). This
                prepared me well for crafting a learning-centred experience.
              </p>
              <p>
                A lecture on speculative design helped me think bigger and merge
                my personal passion with the knowledge I gained from my work
                placement. It sparked the notion: ‘What if there was an AI that
                could teach you music just like a real life tutor would?’
              </p>
              <p>
                Through initial research, I learned of the challenges, but also
                the positive impact of music learning and believed that this
                idea could be a game changer, giving anyone the ability to
                easily pick up an instrument and learn how to play.
              </p>
            </div>
            <img
              src={plum_drum}
              alt='Plum drum'
              className='hideForMobile'
            />
          </section>
        </div>
        <div className='ostinatoBanner'>
          <div className='ostinatoBannerTextContainer'>
            <h1 className='fs-96'>IT'S A PROCESS...</h1>
            <p>
              Designing Ostinato has been a long, continuously iterative
              process. For me, there was no clean finish at the end of each
              idyllic design phase, instead I had to manage working on different
              phases concurrently in order to fine tune every aspect.
            </p>
          </div>
        </div>
        <div className='ostinatoContainer'></div>
        <Footer />
      </div>
    </>
  );
};

export default Ostinato;
