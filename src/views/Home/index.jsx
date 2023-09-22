import ImageSection1 from '@/assets/images/home-image1.png'
import ImageSection2 from '@/assets/images/home-image2.png'
import ImageSection3 from '@/assets/images/home-image3.png'
import CollectImage1 from '@/assets/images/collect-image1.png'
import CollectImage2 from '@/assets/images/collect-image2.png'
import CollectImage3 from '@/assets/images/collect-image3.png'
import CollectImage4 from '@/assets/images/collect-image4.png'
import CollectImage3Decor from '@/assets/images/collect-image3-decor.png'
import LogoGray from '@/assets/images/logo-gray.png'
import ArrowDown from '@/assets/images/arrow-long-down.png'
import GooText from '@/assets/images/goo.png'
import Item1 from '@/assets/images/collect-item1.png'
import Item2 from '@/assets/images/collect-item2.png'
import Item3 from '@/assets/images/collect-item3.png'
import Item4 from '@/assets/images/collect-item4.png'
import Item5 from '@/assets/images/collect-item5.png'
import Item6 from '@/assets/images/collect-item6.png'
import './style.scss'
import Footer from '@/layout/Footer'
// import PageScroll from 'react-page-scroll'
// import { FullPage, Slide } from 'react-full-page'

const Index = () => {
  return (
    <div className="home" data-bs-spy="scroll" data-bs-target="#navbar" data-bs-offset="0">
      {/* <FullPage controls>
        <Slide>
          <h1>Inner slide content</h1>
        </Slide>
        <Slide>
          <h1>Another slide content</h1>
        </Slide>
      </FullPage> */}
      <div id="#navy" className="section1 text-end">
        <img src={ImageSection1} alt="" />
        <div className="section1__content text-start">
          <p>Designed for utility</p>
          <h2 className="text-uppercase mt-5">Navy Salt & Pepper</h2>
        </div>
        <div className="section1__gear line-left text-main">Gear UP</div>
      </div>
      <div id="#voyager" className="section2 text-start">
        <img src={ImageSection2} alt="" />
        <div className="section2__content text-start">
          <p className="ms-auto">
            Whether you’re stomping around outdoors or traversing the city, our
            Voyager Daypack was designed to be adaptable <br /> in all
            enviroments. Compact, lightweight <br /> and a comfortable for
            people of all size. This silhouette is versatile enough
          </p>
          <div className="arrow bg-white text-center">
            <img src={ArrowDown} alt="" />
          </div>
        </div>
        <div className="section2__title text-white">VOYAGER DAYPACK</div>
        <div className="section2__sub text-white">NAVY SALT & PEPPER</div>
      </div>
      <div id="#drifter" className="section3 text-end">
        <img src={ImageSection3} alt="" />
        <div className="section3__content text-start">
          <p className="me-auto">
            Field-tested from the peaks of the Cascades down to the desert floor
            of Joshua Tree, the Wilderess Rucksack was build to put on some
            serous miles for years to come. A comfortable, dependable
            combination of 14oz Salt & Pepper canvas, premium wool felt, and
            Cambara English bridle leather.
          </p>
          <div className="arrow text-center">
            <img src={ArrowDown} alt="" />
          </div>
          <div className="title text-white">DRIFTER DOPP KIT</div>
          <div className="sub text-white">NAVY SALT & PEPPER</div>
        </div>
      </div>
      <div id="#collection" className="section4 text-center px-5">
        <h2 className="text-uppercase">Tanner Collections</h2>
        <div className="section4__under-title text-start line-left-black ms-auto me-5 px-1 mt-4">
          NAVY SALT & PEPPER
        </div>
        <div className="row1 position-relative mx-auto">
          <div className="section4__content detail1 text-start mt-5">
            <div className="num line-right-black">01</div>
            <img src={CollectImage1} alt="" />
            <div className="des mt-5">
              <h5 className="px-4">SPRUCE SALT & PEPPER</h5>
              <p className="mt-4 ms-auto">
                We designed our Nomad Duffle as a versatile yet rugged piece of
                luggage that&#39;s just as comfortable putdoors as it is in an
                overhead compartment
                <br />
                <span className="des-more d-block text-uppercase mt-3">
                  read more
                </span>
              </p>
            </div>
          </div>
          <div className="section4__content detail2">
            <div className="des text-start">
              <h5 className="">NOMAD DUFFLE</h5>
              <p className="mt-4">
                This bag can be carried by hand, worn as a backpack or slung
                over a shoulder depending on your traveling needs
                <br />
                <span className="des-more d-block text-uppercase mt-4">
                  read more
                </span>
              </p>
              <img className="mb-4 mt-4 ms-3" src={LogoGray} alt="" />
            </div>
            <img className="" src={CollectImage2} alt="" />
          </div>
        </div>
        <div className="row2 mx-auto">
          <div className="section4__content detail4 text-end">
            <div className="des ms-auto">
              <h5>FIELD CAMERA BAG</h5>
              <p className="mt-4 mb-0">
                Our field camera bag is constructed from 14oz Salt & Pepper
                canvas and Cambara Meridian English bridle leather. We&#39;ve
                put these bags through the ringer in testing and we think
                you&#39;ll approve of the result. Our Cammera Bag is fully lined
                and padded, and features an adjustable shoulder strap
                <br />
                <span className="des-more d-block text-uppercase mt-3">
                  read more
                </span>
              </p>
            </div>
            <div className="num ms-auto">03</div>
            <div className="position-relative">
              <img src={CollectImage4} alt="" />
              <img
                className="image-decor-left"
                src={CollectImage3Decor}
                alt=""
              />
              <img className="image-decor-bottom" src={GooText} alt="" />
            </div>
          </div>
          <div className="section4__content detail3">
            <div className="num ms-auto">02</div>
            <img src={CollectImage3} alt="" />
          </div>
        </div>
        <div className="list-items d-flex gap-4">
          {[Item1, Item2, Item3, Item4, Item5, Item6].map((i) => (
            <div key={i}>
              <img src={i} alt="" />
            </div>
          ))}
        </div>
      </div>
      <div id="#contact">
        <Footer />
      </div>
    </div>
  )
}
export default Index
