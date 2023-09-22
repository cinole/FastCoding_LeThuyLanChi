import Logo from '@/assets/images/logo.png'
import menus from './menus'
import './style.scss'

const Header = () => {
  // const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav id="navbar-example" className="header navbar mt-4 justify-content-start">
      <a className="header__logo text-center" href="#">
        <img src={Logo} alt="" />
      </a>
      <ul className="nav nav-pills header__nav gap-5" role="tablist">
        {menus.map((menu) => (
          <li key={menu.key} className="nav-item text-uppercase fw-bold ">
            <a className="nav-link text-black" href={menu.path}>
              {menu.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Header
