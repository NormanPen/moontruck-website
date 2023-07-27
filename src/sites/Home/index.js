import Header from '../../components/Header';
import TeaserMain from '../../components/TeaserMain';
import TeaserSec from '../../components/TeaserSec';
import TeaserTrd from '../../components/TeaserTrd';
import ImageSlider from '../../components/ImageSlider';
import VideoPlayer from '../../components/VideoPlayer';

import teaserImgMain from '../../images/truck1.png';
import teaserImgSec from '../../images/truck2.png';
import teaserImgTrd from '../../images/truck_small1.png';
import videoFile from '../../videos/video1.mp4';

function Home() {
    const images = [
        'https://www.tesla.com/xNVh4yUEc3B9/10_Desktop.jpg',
        'https://www.tesla.com/xNVh4yUEc3B9/07_Desktop.jpg',
        'https://www.tesla.com/xNVh4yUEc3B9/08_Desktop.jpg',
        'https://www.tesla.com/xNVh4yUEc3B9/09_Desktop.jpg',
        'https://www.tesla.com/xNVh4yUEc3B9/10_Desktop.jpg',
    ];

    return (
        <>
            <Header />

            <TeaserMain heading='EXOSKELETT' imgsrc={teaserImgMain}>
                Der Cybertruck ist mit einer hochfesten Außenschale versehen,
                die maximale Langlebigkeit und Robustheit mit optimalem
                Insassenschutz kombiniert. Vom nahezu undurchdringlichen
                Außenskelett bis zu den einzelnen Komponenten, die alle auf
                höchste Robustheit und Verschleißfestigkeit ausgelegt sind, von
                der ultraharten 30X kaltgewalzten Edelstahlhaut bis hin zum
                Tesla-Panzerglas.
            </TeaserMain>

            <TeaserSec
                heading='ULTRAHARTER 30X KALTGEWALZTER EDELSTAHL'
                imgsrc={teaserImgSec}
            >
                Wenn es etwas Besseres gäbe, würden wir es nutzen. Dellen,
                Schäden und Langzeitkorrosion sind beim Cybertruck kein Thema
                mehr. Mit seiner ultrafesten, einfarbigen Karosserie bietet der
                Cybertruck ein schlag- und stoßfestes Außenskelett der
                Sonderklasse und seinen Insassen maximalen Schutz.
            </TeaserSec>

            <ImageSlider>
                {images.map((imageUrl, i) => (
                    <img key={i} src={imageUrl} />
                ))}
            </ImageSlider>

            <VideoPlayer heading='LEISTUNG UND EFFIZIENZ' videoFile={videoFile}>
                Eine neue Klasse von Stärke, Geschwindigkeit und Vielseitigkeit
                — nur möglich dank vollelektrischem Design. Der kraftvolle
                Antriebsstrang und der niedrige Schwerpunkt sorgen für
                hervorragende Traktion und Drehmomentsteuerung und ermöglichen
                eine Beschleunigung von 0 auf 60 mph in nur 2,9 Sekunden und bis
                zu 500 Meilen Reichweite.
            </VideoPlayer>

            <TeaserTrd heading='Updates' imgsrc={teaserImgTrd}>
                Bald erhältlich. Bleib auf dem laufenden und sichere dir deine
                Moontruck
            </TeaserTrd>
        </>
    );
}

export default Home;
