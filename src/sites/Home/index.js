import Header from '../../components/Header';
import TeaserMain from '../../components/TeaserMain';
import TeaserSec from '../../components/TeaserSec';
import teaserImgMain from '../../images/truck1.png';
import teaserImgSec from '../../images/truck2.png';

function Home() {
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
        </>
    );
}

export default Home;
