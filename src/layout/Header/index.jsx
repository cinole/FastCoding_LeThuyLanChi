import Logo from '@/assets/images/logo.png'
import menus from './menus'
import './style.scss'

const Header = () => {
  // const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="header navbar navbar-expand-md w-100 mt-sm-4 ms-2 justify-content-start">
      {/* <nav className="navbar navbar-dark bg-dark navbar-expand-lg fixed-top">
        <a href="#" className="navbar-brand">
          My Website
        </a>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav ml-auto">
            <li className="navbar-item">
              <a href="#" className="nav-link">
                Homepage
              </a>
            </li>
            <li className="navbar-item">
              <a href="#" className="nav-link">
                Blog
              </a>
            </li>
            <li className="navbar-item">
              <a href="#" className="nav-link">
                About Me
              </a>
            </li>
            <li className="navbar-item">
              <a href="#" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav> */}
      <a className="header__logo navbar-brand text-center" href="#">
        <img src={Logo} alt="" />
      </a>
      <button
        className="navbar-toggler ms-auto me-4"
        data-toggle="collapse"
        data-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav ms-auto ms-sm-0 me-sm-auto header__nav gap-sm-5 ps-sm-5">
          {menus.map((menu) => (
            <li
              key={menu.key}
              data-menuanchor={menu.path}
              className="navbar-item text-uppercase fw-bold"
            >
              <a className="nav-link" href={`#${menu.path}`}>
                {menu.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Header
