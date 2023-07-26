import header from "../../images/header.png";

function Header() {
    return (
      <header>
            <div>
            <img
					src={header}
					alt="Moontruck"
					className=" w-full"
				/>
            </div>
      </header>
    );
  }
  
  export default Header;
  