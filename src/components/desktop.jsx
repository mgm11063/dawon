import React, { useState, useCallback } from "react";
import {
  GlobalStyle,
  ThemeProvider,
  List,
  Frame,
  ProgressBar,
  TaskBar,
} from "@react95/core";
import Janne_pixelated from "../janne_pixelated.png";
import socialMedia from "./socialMedia";
import Shortcuts from "./desktopIcons";
import * as S from "./layoutStyling";
import "./styles.scss";
import {
  Progman37,
  Mspaint,
  User,
  CdMusic,
  Progman34,
  Mail,
} from "@react95/icons";
import Portfolio from "./portfolio";
import CV from "./cv";
import Tunes from "./tunes";

function Desktop() {
  /* Mobile detection */
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

  const [items] = useState([]);

  /* About Modal */
  const [showAboutModal, setShowAboutModal] = useState(true);
  const handleOpenAboutModal = useCallback(() => {
    setShowAboutModal(true);
  }, []);
  const handleCloseAboutModal = useCallback(() => {
    setShowAboutModal(false);
  }, []);

  /* Skills Modal */
  const [showSkillsModal, setShowSkillsModal] = useState(false);
  const handleOpenSkillsModal = useCallback(() => {
    setShowSkillsModal(true);
  }, []);
  const handleCloseSkillsModal = useCallback(() => {
    setShowSkillsModal(false);
  }, []);

  /* Photo Modal */
  const [showPhotoModal, setShowPhotoModal] = useState(false);
  const handleOpenPhotoModal = useCallback(() => {
    setShowPhotoModal(true);
  }, []);
  const handleClosePhotoModal = useCallback(() => {
    setShowPhotoModal(false);
  }, []);

  /* Vaporwave Modal 1 */
  const [showVaporwaveModal1, setShowVaporwaveModal1] = useState(false);
  const handleOpenVaporwaveModal1 = useCallback(() => {
    setShowVaporwaveModal1(true);
  }, []);
  const handleCloseVaporwaveModal1 = useCallback(() => {
    setShowVaporwaveModal1(false);
  }, []);

  /* Portfolio Shortcut */
  const closePortfolio = () => {
    togglePortfolio(false);
  };

  const openPortfolio = () => {
    togglePortfolio(true);
  };
  const [explorerOpened, togglePortfolio] = useState(false);

  /* CV Shortcut */

  const closeCV = () => {
    toggleCV(false);
  };

  const openCV = () => {
    toggleCV(true);
  };

  const [cvOpened, toggleCV] = useState(false);

  /* Tunes Shortcut */

  const closeTunes = () => {
    toggleTunes(false);
  };

  const openTunes = () => {
    toggleTunes(true);
  };

  const [tunesOpened, toggleTunes] = useState(false);

  return (
    <ThemeProvider theme="millenium">
      <GlobalStyle></GlobalStyle>
      {showAboutModal && (
        <S.layoutMain
          isMobile={isMobile}
          icon={<Progman37 variant="32x32_4" />}
          title={"OurStory.txt"}
          closeModal={handleCloseAboutModal}
          menu={[
            {
              name: "Options",
              list: (
                <List>
                  <List.Item onClick={handleCloseAboutModal}>Close</List.Item>
                </List>
              ),
            },
          ]}
        >
          <S.layoutMainContent bg="white" boxShadow="out">
            <S.textModal>
              <h1>HELLO DAWON (⩌⩊⩌) </h1>
              <p>
                Hey bae it's already been 100 days since we met, it seems like the journey we've been together has gone by so fast.
                I can't deny it, but we had a hard time personally and I think a lot of things happened to us.
              </p>
              <p>
                안녕 자기야 벌써 우리가 만난지 100일이라는 시간이나 지났어, 우리가 함께한 여정들이 너무나도 빠르게 지나간거 같아.<br/>
                부정할 수 없겠지만 서로 개인적으로 힘든일도 있었고 굉장히 많은 일들이 우리에게 일어났던거 같아.
              </p>
              
              <p>
              But as you know, we've grown even more through many journeys.
              Especially in my case, I felt a sense of shame and pressure on myself when I met you, but now they have grown to the point where they can't break me.
              </p>
              
              <p>
                하지만 너도 알다 싶이 우리는 많은 여정을 거치면서 더욱 성장했어 특히 나 같은경우에는 다원이를 만나면서<br/>
                스스로에 대해 자괴감과 압박감을 느끼기도 했지만 이제는 그런 압박들이 나를 망가트릴 수 없을 정도로 성장했어.
              </p>
              <p>
                Thank you so much for being my girlfriend, and it doesn't matter how many days we've been together,<br/>
                I hope we can develop each other I love you, Baaaaeee~
              </p>
              <p>
                나랑 만나줘서 너무 고맙고, 함께한 시간이 중요시되는 관계보다는 서로를 위해 노력할 수 있는 관계가 되도록 만들어보자 자기야!
                <br/>
                사랑해 :)
              </p>

              <br/>
              <span>
                
                Design by chris / it for you{" "}
                <a
                  href="##"
                >
                  Bae
                </a>
              </span>
            </S.textModal>
          </S.layoutMainContent>
        </S.layoutMain>
      )}
      {showSkillsModal && (
        <S.layoutMain
          isMobile={isMobile}
          title={"Skills.txt"}
          closeModal={handleCloseSkillsModal}
          icon={<Mspaint variant="32x32_4" />}
          menu={[
            {
              name: "Options",
              list: (
                <List>
                  <List.Item onClick={handleCloseSkillsModal}>Close</List.Item>
                </List>
              ),
            },
          ]}
        >
          <S.layoutMainContent bg="white" boxShadow="in">
            <S.textModal>
              <p>
                {" "}
                <h1>Some of my skills</h1>I disagree with quantifying skills
                with numbers, percentages etc. - are skills really something
                people can measure? However, here is a rough estimate of my
                latest skills.
                <h2>Design tools</h2>
                <h3>Figma</h3>
                <ProgressBar width={250} percent={90} />
                <h3>Adobe CC</h3>
                <ProgressBar width={250} percent={85} />
                <h3>Sketch, InVision</h3>
                <ProgressBar width={250} percent={85} />
                <h3>WCAG 2.1</h3>
                <ProgressBar width={250} percent={75} />
                <br />
                <h2>Dev tools</h2>
                <h3>Storybook(JS)</h3>
                <ProgressBar width={250} percent={75} />
                <h3>HTML, CSS, SASS</h3>
                <ProgressBar width={250} percent={75} />
                <h3>Wordpress (PHP/Themes)</h3>
                <ProgressBar width={250} percent={70} />
                <h3>Git</h3>
                <ProgressBar width={250} percent={60} />
                <h3>Raspberry Pi & Arduino</h3>
                <ProgressBar width={250} percent={30} />
                <h3>React</h3>
                <ProgressBar width={250} percent={30} />
                <h3>Vue</h3>
                <ProgressBar width={250} percent={15} />
                <br />
                <h2>Other Skills</h2>
                <ul>
                  <li>Agile methods</li>
                  <li>Product development</li>
                  <li>Project management</li>
                  <li>Design systems</li>
                  <li>User interviews</li>
                  <li>User testing</li>
                  <li>Wireframing and prototyping</li>
                  <li>Visual design</li>
                  <li>Research</li>
                  <li>Copywriting and social media</li>
                  <li>Content creation</li>
                  <li>Workshops</li>
                  <li>Facilitation</li>
                  <li>Concept creation</li>
                </ul>
              </p>
            </S.textModal>
          </S.layoutMainContent>
        </S.layoutMain>
      )}
      {showPhotoModal && (
        <S.layoutMain
          isMobile={isMobile}
          title={"janne_compressed_for_web.jpeg"}
          closeModal={handleClosePhotoModal}
          icon={<User variant="32x32_4" />}
          menu={[
            {
              name: "Options",
              list: (
                <List>
                  <List.Item onClick={handleClosePhotoModal}>Close</List.Item>
                </List>
              ),
            },
          ]}
        >
          <Frame
            boxShadow="none"
            style={{
              margin: "auto",
            }}
          >
            <img
              src={Janne_pixelated}
              aria-hidden
              alt="Janne as a pixelated image"
              class="full-width-image"
            ></img>
          </Frame>
          <div class="image-text">
            <p>janne_compressed_for_web.jpeg</p>
          </div>
        </S.layoutMain>
      )}
      {showVaporwaveModal1 && (
        <S.layoutMain
          isMobile={isMobile}
          closeModal={handleCloseVaporwaveModal1}
          height="100%"
          icon={<CdMusic variant="32x32_4" />}
          width={340}
          menu={[
            {
              name: "Options",
              list: (
                <List>
                  <List.Item onClick={handleCloseVaporwaveModal1}>
                    Close
                  </List.Item>
                </List>
              ),
            },
          ]}
          title="My_Alter_Ego.doc"
        >
          <S.textModal>
            <h1>A Vaporwave Album</h1>
            <p>
              In 2018 I took part in a workshop in Lithuania at the Vilnius Art
              Academy in producing a Vaporwave Album with participants coming in
              from around Europe.
            </p>
            <p>
              Over the course of the weekend we produced music videos, songs and
              more. I produced two songs for the album and a music video. The
              album can be found on streaming services.
            </p>
            <a href="https://open.spotify.com/album/0pCqTDsI4zOZXZJnxx2yPT?si=JW5qpLJJQsO3eK2m65FQBQ">
              The album on Spotify
            </a>
            <p></p>
            <br></br>
            <div>
              <iframe
                src="https://www.youtube.com/embed/7SyxEF-QG_M"
                frameborder="0"
                width="100%"
                title="A Song from a Vaporwave Album"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </S.textModal>
        </S.layoutMain>
      )}
      <TaskBar
        list={
          <List>
            {/* <List.Item
              as="a"
              href="mailto:janne.ilkka@gmail.com"
              icon={<Mail variant="32x32_4" />}
              target="_blank"
            >
              Email me
            </List.Item> */}
            <List.Divider />
            {/* <List.Item icon={<Progman34 variant="32x32_4" />}>
              Socials
              <List>
                {socialMedia.map(({ icon, name, url }) => (
                  <List.Item
                    as="a"
                    href={url}
                    icon={icon}
                    key={name}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {name}
                  </List.Item>
                ))}
              </List>
            </List.Item> */}
            <List.Item
              icon={<Mspaint variant="32x32_4" />}
              onClick={() => openPortfolio()}
            >
              Gallery
            </List.Item>
            <List.Item  onClick={() => openTunes()} icon={<CdMusic variant="32x32_4" />}>
              Tunes
              {/* <List>
                <List.Item
                  onClick={handleOpenVaporwaveModal1}
                  icon={<CdMusic variant="32x32_4" />}
                >
                  Janne's Vaporwave Story from 2018
                </List.Item>
              </List> */}
            </List.Item>
            {/* <List.Item
              icon={<User variant="32x32_4" />}
              onClick={handleOpenPhotoModal}
            >
              Janne
            </List.Item> */}
            
            <List.Divider />
            <List.Item
              icon={<Progman37 variant="32x32_4" />}
              onClick={handleOpenAboutModal}
            >
              OurStory
            </List.Item>
          </List>
        }
      />
      <React.Fragment>
        <Shortcuts
          openPortfolio={openPortfolio}
          openCV={openCV}
          openTunes={openTunes}
        />
        {explorerOpened && (
          <Portfolio
            items={items}
            closePortfolio={closePortfolio}
            isMobile={isMobile}
          />
        )}
        {cvOpened && <CV items={items} closeCV={closeCV} isMobile={isMobile} />}
        {tunesOpened && (
          <Tunes items={items} closeTunes={closeTunes} isMobile={isMobile} />
        )}
      </React.Fragment>
    </ThemeProvider>
  );
}

export default Desktop;
