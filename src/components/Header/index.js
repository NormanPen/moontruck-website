
import BtnLink from "../Buttons/BtnLink";

function Header() {
    return (
      <header>
        <div className="bg-header-image bg-cover bg-center h-screen flex justify-center">


        <div className="self-end mb-16">

        <BtnLink to="/updates">UPDATES ERHALTEN</BtnLink>
        </div>



        </div>



      </header>
    );
  }

  export default Header;
