import Logo from '@/assets/images/logo.png'
import './style.scss'

const Index = () => {
  return (
    <div className="footer p-5">
      <div className="d-flex flex-wrap justify-content-between gap-4">
        <div className='d-flex flex-column justify-content-between gap-5'>
          <div className="d-flex justify-content-between gap-5">
            <img src={Logo} alt="" />
            <div className="list-options d-flex flex-wrap align-items-start text-uppercase">
              <div className="ps-2">FINDA</div>
              <div className="ps-2">STORE</div>
              <div className="ps-2">SIZING</div>
              <div className="ps-2">CARE</div>
              <div className="ps-2">WATCH</div>
            </div>
          </div>
          <div className="socials d-flex justify-content-between gap-5">
            <span className='font-secondary text-uppercase'>© tanner goods portland ore 2016</span>
            <div className="list-socials d-flex flex-wrap align-items-center">
              <div className="ps-2">facebook</div>
              <div className="ps-2">pinterest</div>
              <div className="ps-2">twitter</div>
              <div className="ps-2">instagram</div>
            </div>
          </div>
        </div>
        <div className='wp-address text-start me-5'>
          <span className=''>Sebazzo Ltd, Unit 3F2</span>
          <br />
          Zetland House <br />
          5-25 Scrutton Street <br />
          London FC2A 4HJ
        </div>
        <div className='wp-contact text-start mb-4'>
          <label className='text-uppercase' htmlFor="email">Email Newsletters</label>
          <p className='my-3'>Sign up for new TANNER GOODS content, updates, surveys & offers</p>
          <div className="d-flex align-items-center gap-1">
            <input type="text" />
            <button className="d-flex justify-content-center align-items-center"><span></span></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index
