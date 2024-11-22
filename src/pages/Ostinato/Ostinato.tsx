import blue_accordion from '../../assets/ostinato/blue_accordion.png';
import card_sorting from '../../assets/ostinato/card_sorting.png';
import slide_1 from '../../assets/ostinato/carouseImages/slide_1.png';
import slide_2 from '../../assets/ostinato/carouseImages/slide_2.png';
import slide_3 from '../../assets/ostinato/carouseImages/slide_3.png';
import slide_4 from '../../assets/ostinato/carouseImages/slide_4.png';
import slide_5 from '../../assets/ostinato/carouseImages/slide_5.png';
import slide_6 from '../../assets/ostinato/carouseImages/slide_6.png';
import slide_7 from '../../assets/ostinato/carouseImages/slide_7.png';
import competitor_analysis from '../../assets/ostinato/competitor_analysis.png';
import empathy_maps from '../../assets/ostinato/empathy_maps.png';
import green_clarinet from '../../assets/ostinato/green_clarinet.png';
import ostinato_colours from '../../assets/ostinato/ostinato_colours.png';
import ostinato_leaflets from '../../assets/ostinato/ostinato_leaflets.png';
import ostinato_logo_png from '../../assets/ostinato/ostinato_logo.png';
import ostinato_logo from '../../assets/ostinato/ostinato_logo.svg';
import ostinato_notoid from '../../assets/ostinato/ostinato_notoid.png';
import ostinato_poster_mockup from '../../assets/ostinato/ostinato_poster_mockup.png';
import ostinato_tshirt from '../../assets/ostinato/ostinato_tshirt.png';
import ostinato_type from '../../assets/ostinato/ostinato_type.png';
import ostinato_values from '../../assets/ostinato/ostinato_values.png';
import plum_drum from '../../assets/ostinato/plum_drum.png';
import survey from '../../assets/ostinato/survey.png';
import user_flow from '../../assets/ostinato/user_flow.png';
import user_journeys from '../../assets/ostinato/user_journeys.png';
import user_personas from '../../assets/ostinato/user_personas.png';
import yellow_piano from '../../assets/ostinato/yellow_piano.png';
import brand_guidelines from './../../assets/docs/ostinato_brand.pdf';
import launch_strategy from './../../assets/docs/ostinato_launch.pdf';
import green_guitar from './../../assets/ostinato/green_guitar.png';
import ostinato_hifi from './../../assets/ostinato/ostinato_hifi.png';
import ostinato_lofi from './../../assets/ostinato/ostinato_lofi.png';
import ostinato_outcome from './../../assets/ostinato/ostinato_outcome.png';
import ui_sketches from './../../assets/ostinato/ostinato_uisketches.png';
import yellow_cello from './../../assets/ostinato/yellow_cello.png';

import Carousel from '../../components/Accordion/Carousel';
import LinkButton from '../../components/Button/LinkButton';
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
        <div className='ostinatoContainer'>
          <section className='flex row ostinatoGap ostinatoSection'>
            <div className='flex column ostinatoSectionGap'>
              <h2>RESEARCH</h2>
              <p>
                I first had to understand the different needs and frustrations
                of music learners through user research. Initially, I conducted
                research to validate my idea. This involved scouring the web and
                the library for relevant articles, testimonies, survey findings,
                journals and studies.
              </p>
              <p>
                I then conducted a survey using google forms, posing pertinent
                questions aimed at understanding the experiences of
                musicians/learners and determining how to best serve their
                needs.
              </p>
              <p>
                This received over 100 insightful responses that have have been
                invaluable throughout this project, guiding my decisions from
                feature inclusion to visual design.
              </p>
            </div>
            <img
              src={survey}
              alt='Survey Image'
            />
          </section>
          <section className='flex column ostinatoGap'>
            <div className='paragraphImagePair'>
              <p>
                I meticulously analysed the data from the responses and
                identified the main archetypes of learners and created empathy
                maps for each.
              </p>
              <img
                className='ostinatoImages'
                src={empathy_maps}
                alt='Empathy Maps'
              />
            </div>
            <div className='paragraphImagePair'>
              <p>I then made user personas based on these empathy maps...</p>
              <img
                className='ostinatoImages'
                src={user_personas}
                alt='User Personas'
              />
            </div>
            <div className='paragraphImagePair'>
              <p>...which served as the foundation of my user journeys.</p>
              <img
                className='ostinatoImages'
                src={user_journeys}
                alt='User Journeys'
              />
            </div>
            <div className='paragraphImagePair'>
              <p>
                I also analysed competitors; their strengths, weaknesses, and
                how Ostinato could do better.
              </p>
              <img
                className='ostinatoImages'
                src={competitor_analysis}
                alt='Competitor Analysis'
              />
            </div>
            <div className='paragraphImagePair'>
              <p>
                With these insights, I identified features of the app and
                organised them through card sorting to determine the best
                interface layout. Then I created user flows to map out the
                step-by-step interactions users would have with the app,
                ensuring a seamless and intuitive user experience.
              </p>
              <div className='flex row ostinatoGap alignCenter'>
                <img
                  className='ostinatoImages force340 '
                  src={card_sorting}
                  alt='Card Sorting'
                />
                <img
                  className='ostinatoImages'
                  src={user_flow}
                  alt='User Flow'
                />
              </div>
            </div>
            <div className='flex justifyCenter'>
              <LinkButton destinationURL='https://laura-foy.notion.site/IXD503-Major-Project-97c460d407484e6b8b3d1b243c317be6?pvs=4'>
                MY RESEARCH BLOG
              </LinkButton>
            </div>
          </section>
          <section className='section flex column ostinatoGap ostinatoSection'>
            <div className='flex row ostinatoGap'>
              <div className='flex column ostinatoSectionGap'>
                <h2>BRANDING</h2>
                <p>
                  Getting the branding right involved a lot of iterating and
                  experimenting, which took time, but I think that being so
                  particular is ultimately what led to the best outcome.
                </p>
                <p>
                  ‘Ostinato’ emerged as the name due to its resonance with the
                  core purpose of the app. It’s a musical term for a short
                  melodic phrase, recurring often throughout a composition. The
                  Ostinato app reflects this by striving to make music a
                  consistent and persistent part of people’s lives, even in
                  small increments.
                </p>
                <p>
                  On a hunt for inspiration, I created multiple mood boards,
                  exploring different branding concepts. At one stage, while
                  drawing inspiration from punk design and its ‘anyone can do
                  it’ ideology, I inadvertently obscured Ostinato’s true purpose
                  by leaning a bit too heavily into the aesthetic.
                </p>
                <p>
                  However, through iterative refinement, I struck a balance,
                  retaining elements of punk design while infusing the brand
                  with its own personality.
                </p>
              </div>
              <img
                className='ostinatoImages'
                src={ostinato_poster_mockup}
                alt='Ostinato Poster Mockup'
              />
            </div>
          </section>
          <section className='section flex column ostinatoGap ostinatoSection'>
            <div className='paragraphImagePair'>
              <p>
                Before addressing visuals, I established the brand’s mission,
                vision and values, to help guide subsequent branding decisions.
              </p>
              <img
                className='ostinatoImages'
                src={ostinato_values}
                alt='Ostinato Values'
              />
            </div>
            <div className='paragraphImagePair'>
              <p>
                While initially trying to be more restrictive with colour
                choice, I eventually broadened my palette to reflect the
                energetic learning environment I envisioned. I continually
                refined my colour choices to ensure that my UI design was
                accessible.
              </p>
              <img
                className='ostinatoImages'
                src={ostinato_colours}
                alt='Ostinato Colours'
              />
            </div>
            <div className='paragraphImagePair'>
              <p>
                For typography, I chose a combination of ‘Recent Grotesk’ for a
                punk quality and ‘Larken’ for a touch of classical musicality.
              </p>
              <img
                className='ostinatoImages'
                src={ostinato_type}
                alt='Ostinato Types'
              />
            </div>
            <div className='paragraphImagePair'>
              <p>
                The logo underwent several iterations, with the final design
                being a revamp of a previous concept. I used Recent Grotesk but
                tilted the counters in the ‘O’s to mimic semibreve notes.
              </p>
              <img
                className='ostinatoImages'
                src={ostinato_logo_png}
                alt='Ostinato Logo'
              />
            </div>
            <div className='paragraphImagePair'>
              <p>
                This doesn’t happen too often but, admittedly, there are times
                where I can be a bit stubborn about certain design choices, this
                was one of them. From the outset, I was intent on giving the AI
                tutor a visual persona. For this purpose I designed a cute and
                playful mascot character named Notoid. However, after feedback
                and testing, I came to the revelation that the mascot didn’t fit
                with the overall tone of the brand, so I had to scrap it.
              </p>
              <img
                className='ostinatoImages'
                src={ostinato_notoid}
                alt='Ostinato Masoct Notoid'
              />
            </div>
            <div className='paragraphImagePair'>
              <p>
                I also devised a launch strategy, considering Ostinato’s
                branding across merchandise, social media and various means of
                advertising.
              </p>
              <div className='flex row ostinatoGap alignCenter'>
                <img
                  className='ostinatoImages'
                  src={ostinato_leaflets}
                  alt='Ostinato Leaflets'
                />
                <img
                  className='ostinatoImages hideForMobile'
                  src={ostinato_tshirt}
                  alt='Ostinato Tshirt Mockup'
                />
              </div>
            </div>
            <div className='flex row justifyCenter ostinatoGap'>
              <LinkButton destinationURL={launch_strategy}>
                LAUNCH STRATEGY
              </LinkButton>
              <LinkButton destinationURL={brand_guidelines}>
                BRAND GUIDELINES
              </LinkButton>
            </div>
          </section>
          <section className='section flex column ostinatoGap ostinatoSection'>
            <div className='flex row ostinatoGap'>
              <div className='flex column ostinatoSectionGap'>
                <h2>UI DESIGN</h2>
                <p>
                  Designing the UI for my prototype involved a lot of
                  back-and-forth between, finding inspiration, sketching, and
                  prototyping.
                </p>
                <p>
                  For inspiration, I created many mood boards on Pinterest and
                  Dribbble. Rhythm games and learning management systems (LMS)
                  influenced many aspects of the UI design. I also drew
                  inspiration from other different apps and platforms where
                  relevant.
                </p>
                <p>
                  I iteratively sketched out ideas based on my user flows until
                  I was satisfied. Then I moved to Figma.
                </p>
              </div>
              <img
                src={ui_sketches}
                alt='UI Sketches'
                className='ostinatoImages'
              />
            </div>
            <div className='paragraphImagePair'>
              <p>
                I started by creating low-fidelity mock-ups, but as I refined
                the branding, I started assembling a component library. This
                allowed me to swiftly produce high-fidelity screens with greater
                consistency. My initial focus was on establishing a structure
                based on my user flows. I then worked to enhance the content
                detail and refine the visuals, elevating my prototype to a
                higher-fidelity.
              </p>
              <div className='flex row ostinatoGap'>
                <img
                  src={ostinato_lofi}
                  alt='LOFI Ostinato Flow'
                  className='ostinatoImages force430'
                />
                <img
                  src={ostinato_hifi}
                  alt='HIFI Ostinato Flow'
                  className='ostinatoImages force430'
                />
              </div>
            </div>
            <div className='customGridOrientation ostinatoGap'>
              <img
                src={green_guitar}
                alt='Green guitar'
                className='ostinatoImages greenGuitarImage'
              />
              <div className='flex column ostinatoSectionGap gridTextWrapper'>
                <h2>Testing</h2>
                <p>
                  As a musician myself, Ostinato is something I myself would
                  use, I had to remain vigilant to ensure that my personal
                  preferences did not cloud my judgments on usability.
                </p>
                <p>
                  To help mitigate this, I actively sought constructive feedback
                  from weekly tutorials, fellow designers, developers and
                  potential users.
                </p>
                <p>
                  I also conducted usability testing with individuals of varying
                  levels of musical proficiency.
                </p>
                <p>
                  These insights helped me identify and address issues, leading
                  to significant improvements in my design work.
                </p>
              </div>
            </div>
            <div className='flex justifyCenter ostinatoGap'>
              <LinkButton destinationURL='https://www.figma.com/proto/IqLsexj0R37WpKkKySN4U9/Ostinato?page-id=4%3A32&node-id=483-5779&node-type=canvas&viewport=367%2C246%2C0.06&t=IdEj9TKLikvXWJiY-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=475%3A4801&show-proto-sidebar=1'>
                PROTOTYPE
              </LinkButton>
            </div>
          </section>
          <section className='section flex column ostinatoGap ostinatoSection'>
            <div className='flex row ostinatoGap'>
              <div className='flex column ostinatoSectionGap'>
                <h2>THE OUTCOME</h2>
                <p>
                  Ostinato has been a labour of passion, perseverance and
                  creativity—a testament to my love for music and design. My
                  goal was to design something that would break down barriers,
                  empower musicians of all levels to pursue music with joy and
                  confidence , while fostering a sense of community and
                  connection, ultimately making people’s lives more musical.
                  Despite challenges along the way, each obstacle was an
                  opportunity to learn, adapt, innovate and grow as a designer.
                  Through research, seeking feedback, usability testing and
                  embracing an iterative design process, Ostinato has become
                  something that I am sincerely proud of.
                </p>
              </div>
              <img
                className='ostinatoImages'
                src={yellow_cello}
                alt='Yellow Cello'
              />
            </div>
          </section>
          <section className='section flex column ostinatoGap ostinatoSection mw-900 mx-auto'>
            <img
              className='ostinatoImages'
              src={ostinato_outcome}
              alt='Ostinato Outcome'
            />
            <div className='section flex column ostinatoSectionGap'>
              <h2>THE FUTURE</h2>
              <p>
                Ostinato has been a labour of passion, perseverance and
                creativity—a testament to my love for music and design. My goal
                was to design something that would break down barriers, empower
                musicians of all levels to pursue music with joy and confidence
                , while fostering a sense of community and connection,
                ultimately making people’s lives more musical. Despite
                challenges along the way, each obstacle was an opportunity to
                learn, adapt, innovate and grow as a designer. Through research,
                seeking feedback, usability testing and embracing an iterative
                design process, Ostinato has become something that I am
                sincerely proud of.
              </p>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Ostinato;
