import BtnScrollDwn from '../Buttons/BtnScrollDwn';

function Header() {
    return (
        <header>
            <div className='bg-header-image bg-cover bg-center h-screen flex justify-center'>
                <div className='self-end mb-16 cursor-pointe'>
                    <BtnScrollDwn to='ENDECKEN'>Jetzt entdecken!</BtnScrollDwn>
                </div>
            </div>
        </header>
    );
}

export default Header;
