import LinkButton from '../../components/Button/LinkButton';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';
import report from './../../assets/docs/report.pdf';
import badges from './../../assets/synergy/badges.png';
import bespoke_designs from './../../assets/synergy/bespoke_designs.png';
import circle_icons from './../../assets/synergy/circle_icons.png';
import hard_skills from './../../assets/synergy/hard_skills.png';
import login_img from './../../assets/synergy/login_img.png';
import support_icons from './../../assets/synergy/support_icons.png';
import ux_icon from './../../assets/synergy/ux_icon.png';
import './styles.css';
const Synergy = () => {
  return (
    <>
      <NavBar />
      <div className='synergyContentContainer'>
        <section className='header'>
          <h1 className='fs-80 fw-700 recent-grotesk'>
            SYNERGY LEARNING INTERNSHIP
          </h1>
          <p>
            As part of my Interaction Design degree, I had the privilege of
            spending a year on placement at Synergy Learning as a UX design
            intern. Synergy Learning are highly experienced Totara and Moodle
            partners that offer intuitive, accessible and engaging LMS solutions
            to an array of customers with varying needs.
          </p>
          <p>
            There, I was able to shadow, learn, contribute and gain valuable
            experience in different areas. My time at SL helped me hone my
            skills and better myself as a designer in major ways.
          </p>
        </section>
        <section className='flex row gap-48 alignCenter'>
          <img
            src={ux_icon}
            className='uxIcon'
            alt='Synergy Learning UX Icon'
          />
          <div className='flex column gap-20 '>
            <h2 className='recent-grotesk'>MY ROLE</h2>
            <p className='fs-16'>
              My role was a UX intern within the UX Circle, working alongside
              three frontend developers, a UX designer and a UX consultant - a
              small team with big responsibilities.
            </p>
            <p className='fs-16'>
              The LMS world was completely new to me. This was also my first
              ever full-time work experience. From the outset, I had set myself
              the goal of making a meaningful contribution during my time there.
              However, I realised quickly that this wasn’t something I could
              achieve straight away. I first needed to learn the ropes and get
              accustomed to various new software, applications and practices. I
              began by demonstrating my willingness to learn and adapt,
              gradually taking on various tasks and responsibilities that would
              enable me to add value to the team.
            </p>
          </div>
        </section>
        <section className='synergyTasks'>
          <h2>My Tasks</h2>
          <p className='pt-2'>
            Here are some of the tasks I undertook in my role:
          </p>
          <div className='synergyTopic'>
            <h3>VISUAL REVIEWS</h3>
            <p>
              A responsibility I was exposed to early was executing Visual
              Reviews (VRs). This is a QA test cycle uniquely undertaken by
              designers, which occurs after initial theme development. These
              involved checking that everything looked and operated correctly as
              per the concepts and UX requirements. Then raising any bugs and
              assigning them to developers to fix.
            </p>
            <p>
              I learned to create and execute test cycles in Jira, and became
              proficient with practice. My early VRs took longer to complete as
              I had to refer back to documentation and refine how I reported
              bugs.
            </p>
            <p>
              The waterfall development model used at Synergy Learning requires
              that certain tasks are completed before others can be started.
              This required flexibility in my scheduling of VRs to match up with
              when the themes were ready.
            </p>
          </div>

          <div className='synergyTopic'>
            <h3>BESPOKE DESIGN</h3>
            <p>
              Customers had two UX solution options depending on their needs,
              these were our Spark Theme and/or Bespoke Design/Development.
            </p>
            <p>
              The process for bespoke concept design typically involved a call
              with the customer to establish UX requirements. This would be
              followed by designing concepts against those requirements, inline
              with their branding. An internal review then takes place with
              members of the UX Circle before posting on Invision for the
              customer to review and leave feedback.
            </p>
            <p>
              The waterfall development model used at Synergy Learning requires
              that certain tasks are completed before others can be started.
              This required flexibility in my scheduling of VRs to match up with
              when the themes were ready.
            </p>
            <img
              src={bespoke_designs}
              alt='Various bespoke designs made for Synergy Learning'
            />
          </div>
          <div className='synergyTopic'>
            <h3>SL DESIGN SYSTEM</h3>
            <p>
              I worked to gain proficiency in Figma and used it to assist in
              updating the company’s Design System. Much of my time was spent
              building out complex variable components for different Spark and
              core LMS features that could be utilised in future bespoke concept
              designs, speeding up the design process exponentially. I loved
              working on the Design System, building out each feature or page,
              it was like solving a puzzle. I used my Moodle/Txp demo sites to
              examine the feature and all the possible variables like states and
              quantities before building it out, starting from atoms.
            </p>
          </div>
          <div className='synergyTopic'>
            <h3>SITE CONFIGS & CERTIFICATE TEMPLATES</h3>
            <p>
              There typically wasn’t typically much involvement from UX
              Designers in Spark Theme implementation when customers have opted
              not to have bespoke features. However, to gain more customer call
              experience, I shadowed Spark Theme requirement calls led by the UX
              Consultant and had tasks assigned from these. They included UAT,
              and occasionally live, site configurations for customers. This
              sometimes involved designing and setting up custom certificate
              templates and badge sets. Site configuration for a customer
              involves configuring all the desired features/add-ons, applying
              their branding and populating the site to give them an idea of how
              they could best utilise it. This was a great way to build
              experience working on projects and communicating both internally
              with PMs and externally with customers.
            </p>
          </div>
          <div className='synergyTopic'>
            <h3>ICONOGRAPHY</h3>
            <p>
              Acknowledging my passion for iconography and illustration, I was
              given opportunities to enhance some internal and customer facing
              spaces with vibrant icon sets. I designed a new set of icons to
              represent each circle in the 1Team Directory on our Confluence
              Site. I later got the opportunity to give our internal and
              customer support portals a much needed branding glow-up. This
              included working on a new login page illustration, new request
              type icons and some general CSS updates. The process here involved
              a lot of iteration and obtaining feedback from UX, Marketing and
              my mentor which helped me to deliver a satisfactory result.
            </p>
            <img
              src={circle_icons}
              alt='An array of icons created for Synergy Learning'
            />
            <p>
              I later got the opportunity to give our internal and customer
              support portals a much needed branding glow-up. This included
              working on a new login page illustration, new request type icons
              and some general CSS updates. The process here involved a lot of
              iteration and obtaining feedback from UX, Marketing and my mentor
              which helped me to deliver a satisfactory result.
            </p>
            <img
              src={support_icons}
              alt='Dashboard icons created for Synergy Learning'
            />
          </div>
          <div className='synergyTopic'>
            <h3>ASSET LIBRARY</h3>
            <p>
              Some customers had their own graphic designers and assets, while
              others did not. I proposed the idea of an asset library when
              working on a certificate template and default imagery for a
              customer site config. I saw that the process could be simplified
              where the assets themselves weren’t overly branded beyond colours
              and logo. Visual aesthetics are important in the perception of
              usability and I felt each customer should be able to have a
              visually engaging site for their learners. My suggestion was to
              have an asset library in Figma, not dissimilar to our Design
              System in structure, with different style options for imagery,
              badges and certificates etc. Colours could be easily customised to
              match the customers branding. I discussed this with consultancy
              first given their knowledge of customer needs to find out what
              customers would want/need in terms of assets. Once I understood
              that, I started the library with a few asset styles and badge
              sets.
            </p>
            <img
              src={badges}
              alt='Badges created for Synergy Learning customers'
            />
          </div>
        </section>
        <section className='synergyTasks'>
          <div className='synergyTopic'>
            <h2>SKILL IMPROVEMENTS</h2>
            <p>
              My course prepared well in terms of UX design before I joined
              Synergy Learning. I was competent in understanding design
              principles, accessibility, user research etc. However, in order to
              contribute meaningfully and perform my assigned tasks well,
              further skill improvement was necessary.
            </p>
          </div>
          <div className='synergyTopic'>
            <h3>HARD SKILLS</h3>
            <ul>
              <li>
                I became proficient in Figma, going from never really using it
                previously to being able to build out complex components and
                pages with ease.
              </li>
              <li>
                To complete my onboarding tasks, I undertook courses to become a
                Certified Administrator in both Totara and Moodle Academy. I
                continued to build knowledge and understanding of these
                platforms along with our Spark theme throughout the year.
              </li>
              <li>
                I learned how to use Jira, our project management software, to
                create and manage my tasks. Along with Asana, this helped me to
                stay on track, increase my productivity and communicate progress
                effectively.
              </li>
              <li>
                I learned how to set up Moodle/TXP demo sites on my system using
                Docker, a useful step closer to the skillset of a UX developer.
              </li>
              <li>
                I had the opportunity to enhance my CSS skills while working on
                the internal and customer support portal visual updates.
              </li>
              <li>
                Through exposure to different practices and approaches both on
                internal and customer projects, I was able to increase my UX
                knowledge as well.
              </li>
            </ul>
            <img
              src={hard_skills}
              alt='Hard skills learned at Synergy Learning'
            />
          </div>
          <div className='synergyTopic'>
            <h3>SOFT SKILLS</h3>
            <ul>
              <li>
                My communication skills improved as I learned how to effectively
                communicate with colleagues, particularly PMs, keeping them
                informed when things were on track but especially when they
                weren’t.
              </li>
              <li>
                I developed customer service skills in communicating with
                customers, using Asana and Invision but also on calls. Providing
                clear annotations on concepts and being able to give support for
                any queries or concerns became a big part of my role as I got
                more involved in customer projects.
              </li>
              <li>
                I have also gotten better at taking initiative and reaching out
                to others for clarity, assistance, feedback and opportunities to
                shadow and learn.
              </li>
              <li>
                I have made major improvements in my time management skills,
                becoming adept at setting realistic estimates and sticking to
                them. I also know how to effectively manage and prioritise
                different tasks now, which is crucial when working between
                multiple internal and customer related projects.
              </li>
              <li>
                I have grown more skilled at note taking in calls and writing
                documentation.
              </li>
              <li>
                All of the tasks I’ve worked on have increased my overall
                adaptability and problem solving skills as well.
              </li>
            </ul>
            <img
              src={login_img}
              alt='Login image for Synergy Learning'
            />
          </div>
        </section>
        <section className='synergyTopic'>
          <p>
            I am so grateful to have been a member of 1Team for the last year.
            I’ve learned so much and had the opportunity to do things I didn't
            fully believe myself capable of. I look forward to the future, and
            my final year, with a sense of self-belief and confidence instilled
            from my time with Synergy Learning.
          </p>
          <div className='flex justifyCenter pt-2'>
            <LinkButton destinationURL={report}>MY PLACEMENT REPORT</LinkButton>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Synergy;
