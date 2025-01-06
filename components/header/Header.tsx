import Logo from '../Logo'
import AuthBtns from './AuthBtns'
import MobileMenu from './MobileMenu'
import NavMenu from './NavMenu'

const Header = () => {
  return (
    <header className='padding h-[4rem] md:h-[5.625rem] w-full mx-auto'>
        <div className="flex items-center justify-between h-full w-full">
            <Logo />
            <NavMenu />
            <AuthBtns />
            <MobileMenu />
        </div>
    </header>
  )
}

export default Header