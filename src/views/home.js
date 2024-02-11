import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet'

import GalleryCard3 from '../components/gallery-card3'
import './home.css'

const Home = (props) => {

  const [isMenuVisible, setMenuVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  const closeMenu = () => {
    setMenuVisible(false);
  };
 
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 991) {
        setMenuVisible(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <div className="home-container">
      <Helmet>
        <title>Aras Hot Chicken</title>
        <meta property="og:title" content="Aras Hot Chicken" />
      </Helmet>
      <div id="homeHeader" className="home-header">
        <header data-thq="thq-navbar" className="home-navbar-interactive">
          <img
            alt="pastedImage"
            src="/external/pastedimage-047-400w.png"
            className="home-pasted-image"
          />
          <div data-thq="thq-navbar-nav" className="home-desktop-menu">
            <nav className="home-links">
              <a href="#aboutUs" className="home-nav2">
                About Us
              </a>
              <a href="#menu" className="home-nav3">
                Menu
              </a>
              <a href="#gallery" className="home-nav4">
                Gallery
              </a>
              <a href="#contactUs" className="home-nav5">
                <span className="home-text">Contact Us</span>
                <br></br>
              </a>
            </nav>
            <div className="home-buttons">
              <div
                data-thq="thq-dropdown"
                className="home-thq-dropdown list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="home-dropdown-toggle"
                >
                  <div
                    data-thq="thq-dropdown-arrow"
                    className="home-dropdown-arrow"
                  ></div>
                  <div className="home-container01">
                    <span className="home-text02">Order Now</span>
                  </div>
                  <div className="home-container02">
                    <svg viewBox="0 0 1024 1024" className="home-icon">
                      <path d="M426 726v-428l214 214z"></path>
                    </svg>
                  </div>
                </div>
                <ul data-thq="thq-dropdown-list" className="home-dropdown-list">
                  <li
                    data-thq="thq-dropdown"
                    className="home-dropdown list-item"
                  >
                    <a
                      href="https://www.grubhub.com/restaurant/aras-hot-chicken-323-raritan-ave-highland-park/5610600"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="home-dropdown-toggle1"
                      >
                        <span className="home-text03">GrubHub</span>
                      </div>
                    </a>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="home-dropdown1 list-item"
                  >
                    <a
                      href="https://www.ubereats.com/store/aras-hot-chicken/49TfWelISeq7DOtELwOBBA?diningMode=DELIVERY&amp;ps=1&amp;sc=SEARCH_SUGGESTION"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="home-dropdown-toggle2"
                      >
                        <span className="home-text04">UberEats</span>
                      </div>
                    </a>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="home-dropdown2 list-item"
                  >
                    <a
                      href="https://www.doordash.com/store/ara's-hot-chicken-highland-park-25116380/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="home-dropdown-toggle3"
                      >
                        <span className="home-text05">
                          <span>DoorDash</span>
                          <br></br>
                        </span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div data-thq="thq-burger-menu" className="home-burger-menu" onClick={toggleMenu}>
            <svg viewBox="0 0 1024 1024" className="home-icon02">
              <path d="M64 192h896v192h-896zM64 448h896v192h-896zM64 704h896v192h-896z"></path>
            </svg>
          </div>
          {windowWidth <= 991 && isMenuVisible && (
          <div data-thq="thq-mobile-menu" className="home-mobile-menu">
            <div className="home-nav">
              <div className="home-top">
                <span className="home-logo">
                  <span>ARAS HOT CHICKEN</span>
                  <br></br>
                </span>
                <div data-thq="thq-close-menu" className="home-close-menu" onClick={closeMenu}>
                  <svg viewBox="0 0 1024 1024" className="home-icon04">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <div className="home-buttons1">
                <button className="home-about-us-mobile button">
                  <span>
                    <span>About Us</span>
                    <br></br>
                  </span>
                </button>
              </div>
              <div className="home-buttons2">
                <button className="home-menu button">
                  <span>
                    <span className="home-text13">Menu</span>
                    <br></br>
                  </span>
                </button>
              </div>
              <div className="home-buttons3">
                <button className="home-gallery button">
                  <span>
                    <span className="home-text16">Gallery</span>
                    <br></br>
                  </span>
                </button>
              </div>
            </div>
            <div>
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon06">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon08">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg viewBox="0 0 602.2582857142856 1024" className="home-icon10">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
          )}
        </header>
      </div>
      <div className="home-hero">
        <div className="home-container03">
          <h1 className="home-hero-heading heading1">
            <span className="home-text18">Ara&apos;s Hot Chicken</span>
            <br></br>
          </h1>
          <span className="home-hero-sub-heading">
            &quot;The Purrfect Bite Everytime&quot;
          </span>
          <div className="home-btn-group"></div>
        </div>
      </div>
      <div id="aboutUs" className="home-details">
        <div className="home-details1">
          <div className="home-container04">
            <span className="home-text20 sectionTitle">
              <span>AbouT US</span>
              <br></br>
            </span>
            <h2 className="home-details-heading heading2">
              Experience the Perfect Blend of Flavor and Crispiness
            </h2>
            <span className="home-details-sub-heading">
              Ara&apos;s Hot Chicken is a Bangladeshi family owned and operated
              Nashville hot chicken shop in Highland Park, New Jersey. Please
              check our website frequently for updates, as well as our Instagram
              @arashotchicken. We put lots of love into our food. Let us know
              how we can improve or if there were any issues with your order,
              Insha&apos;Allah, we can make it right. ❤
            </span>
          </div>
          <img
            alt="image"
            src="https://images.squarespace-cdn.com/content/v1/5cca784792441b9dfd02ed1a/4074866a-5038-4e6c-8a31-329107779d92/280079794_340910348137719_8460199196130335429_n.jpg"
            className="home-details-image"
          />
        </div>
      </div>
      <div className="home-pricing"></div>
      <div className="home-menu1">
        <div id="menu" className="home-container05">
          <h2 className="home-details-heading1 heading2">Menu</h2>
          <div className="home-container06">
            <div className="home-container07">
              <img
                alt="pastedImage"
                src="/external/pastedimage-ou9p-700w.png"
                className="home-pasted-image1"
              />
            </div>
            <div className="home-container08">
              <img
                alt="pastedImage"
                src="/external/pastedimage-2vgc-600h.png"
                className="home-pasted-image2"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="home-pricing1"></div>
      <div id="gallery" className="home-gallery1">
        <div className="home-gallery2">
          <h1 className="home-gallery-heading heading2">Gallery</h1>
          <span className="home-gallery-sub-heading">
            Explore our mouthwatering menu items
          </span>
          <div className="home-container09">
            <GalleryCard3
              imageSrc="https://images.squarespace-cdn.com/content/v1/5cca784792441b9dfd02ed1a/b020b444-2b0a-461c-89c4-54d20dba3a2c/278508076_565011555022952_6514155776771354127_n.jpg"
              rootClassName="rootClassName"
            ></GalleryCard3>
            <GalleryCard3
              imageSrc="https://media-cdn.grubhub.com/image/upload/d_search:browse-images:default.jpg/w_150,q_auto:low,fl_lossy,dpr_2.0,c_fill,f_auto,h_130/vyuyf4fop6yoamdwy38w"
              rootClassName="rootClassName3"
            ></GalleryCard3>
            <GalleryCard3
              imageSrc="https://media-cdn.grubhub.com/image/upload/d_search:browse-images:default.jpg/w_150,q_auto:low,fl_lossy,dpr_2.0,c_fill,f_auto,h_130/yhydvanmiqod37n8ug9p"
              rootClassName="rootClassName2"
            ></GalleryCard3>
            <GalleryCard3
              imageSrc="https://images.squarespace-cdn.com/content/v1/5cca784792441b9dfd02ed1a/9e6b2dba-de6e-4b8b-9197-2247d5d1e1f6/280154677_670371410699744_7330714879611317867_n.jpg"
              rootClassName="rootClassName1"
            ></GalleryCard3>
            <GalleryCard3
              imageSrc="https://img.cdn4dd.com/p/fit=cover,width=1200,height=1200,format=auto,quality=90/media/photosV2/0432beb7-7183-47d7-85ab-90bf46428fb1-retina-large.jpg"
              rootClassName="rootClassName4"
            ></GalleryCard3>
            <GalleryCard3
              imageSrc="https://media-cdn.grubhub.com/image/upload/d_search:browse-images:default.jpg/w_150,q_auto:low,fl_lossy,dpr_2.0,c_fill,f_auto,h_130/cjlzxmrof8s4bbqkpvzb"
              rootClassName="rootClassName5"
            ></GalleryCard3>
            <GalleryCard3
              imageSrc="https://lh3.googleusercontent.com/p/AF1QipMETHjTdcsurhmUtCQJU-EB-iqbd3VUHDLpZILx=s1360-w1360-h1020"
              rootClassName="rootClassName6"
            ></GalleryCard3>
            <GalleryCard3
              imageSrc="https://lh3.googleusercontent.com/p/AF1QipOMI3OalbKzRPW9qA2fk5_PoWXVmhZxzXkLi21Q=s1360-w1360-h1020"
              rootClassName="rootClassName7"
            ></GalleryCard3>
            <GalleryCard3
              imageSrc="https://lh3.googleusercontent.com/p/AF1QipMaYQ25nPj9uv0US47-3EN4_1r8FOAULCW0QMjG=s1360-w1360-h1020"
              rootClassName="rootClassName8"
            ></GalleryCard3>
            <GalleryCard3
              imageSrc="https://lh3.googleusercontent.com/p/AF1QipPztg7PUQkqE-C7t3OM32bD_wzmdjstgt0pk06T=s1360-w1360-h1020"
              rootClassName="rootClassName9"
            ></GalleryCard3>
            <GalleryCard3
              imageSrc="https://lh3.googleusercontent.com/p/AF1QipPhB2Vu_Uk_j6QUZWx87djcdXA8BqDth8wZw00V=s1360-w1360-h1020"
              rootClassName="rootClassName10"
            ></GalleryCard3>
            <GalleryCard3
              imageSrc="https://lh3.googleusercontent.com/p/AF1QipNbwkAmKtd5Goz9A6OI5AoCMt6NedMIJoifBmLv=s1360-w1360-h1020"
              rootClassName="rootClassName11"
            ></GalleryCard3>
          </div>
        </div>
      </div>
      <div className="home-pricing2"></div>
      <div id="contactUs" className="home-details2">
        <div className="home-details3">
          <div className="home-container10">
            <h1 className="home-gallery-heading1 heading2">Contact Us</h1>
            <iframe
              src="https://www.google.com/maps/embed/v1/view?key=AIzaSyAqjXxc7kbyMa2DFrDz3vYgsuytiW6RaSI&amp;center=40.4996314,-74.4269753&amp;zoom=20"
              className="home-iframe"
            ></iframe>
            <div className="home-container11">
              <div className="home-container12">
                <h1 className="home-text23">
                  <span>Phone Number</span>
                  <br></br>
                </h1>
                <button type="button" className="home-button button">
                  Call Now
                </button>
                <span className="home-text26">
                  <br></br>
                  <span>(732) 447-2571</span>
                  <br></br>
                </span>
              </div>
              <div className="home-container13">
                <h1 className="home-text30">
                  <span>Address</span>
                  <br></br>
                </h1>
                <a
                  href="https://www.google.com/maps/dir//Ara%27s+Hot+Chicken/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c3c7ae9b777497:0x6f8d2cd0af2ca9c7!2m2!1d-74.4269379!2d40.4996027"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link3 button"
                >
                  Get Directions
                </a>
                <span>
                  <br></br>
                  <span>323 Raritan Avenue</span>
                  <br></br>
                  <br></br>
                  <span>Highland Park, NJ 08904</span>
                  <br></br>
                  <br></br>
                  <span>USA</span>
                  <br></br>
                </span>
              </div>
              <div className="home-container14">
                <h1 className="home-text43">
                  <span>Business Hours</span>
                  <br></br>
                </h1>
                <span className="home-text46">
                  <br></br>
                  <span>Mon: Closed</span>
                  <br></br>
                  <br></br>
                  <span>Tue: 12:00 – 8:00 PM</span>
                  <br></br>
                  <br></br>
                  <span>Wed: 12:00 – 8:00 PM</span>
                  <br></br>
                  <br></br>
                  <span>Thu: 12:00 – 8:00 PM</span>
                  <br></br>
                  <br></br>
                  <span>Fri: 3:00 – 10:00 PM</span>
                  <br></br>
                  <br></br>
                  <span>Sat: 12:00 – 9:00 PM</span>
                  <br></br>
                  <br></br>
                  <span>Sun: 12:00 – 8:00 PM</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-pricing3"></div>
      <div className="home-footer">
        <footer className="home-footer1">
          <div className="home-container15">
            <nav className="home-nav1 home-nav1">
              <a href="#homeHeader">Home</a>
              <a href="#aboutUs" className="home-nav21">
                About Us
              </a>
              <a href="#menu" className="home-nav31">
                Menu
              </a>
              <a href="#gallery" className="home-nav41">
                Gallery
              </a>
              <a href="#contactUs" className="home-nav51">
                Contact Us
              </a>
            </nav>
          </div>
          <div className="home-separator"></div>
          <div className="home-container16">
            <div className="home-container17">
              <div className="home-container18">
                <div className="home-container19">
                  <span className="home-text67">
                    <span className="home-text68">
                      © 2023 Aras Hot Chicken, All Rights Reserved.
                    </span>
                    <br></br>
                    <span>By Nabhan Mazid</span>
                    <br></br>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div className="home-icon-group1">
          <a
            href="https://www.instagram.com/arashotchicken/"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link4"
          >
            <svg viewBox="0 0 877.7142857142857 1024" className="home-icon12">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home
