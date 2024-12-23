import React, {useEffect} from 'react'

import { Helmet } from 'react-helmet'

import BlogPostCard2 from '../components/blog-post-card2'
import GalleryCard3 from '../components/gallery-card3'
import './home.css'

const Home = (props) => {

  useEffect(() => {
    window.location.hash = '#homeHeader';
  }, []);

  
  return (
    <div className="home-container">
      <Helmet>
        <title>Aras Hot Chicken</title>
        <meta property="og:title" content="Aras Hot Chicken" />
      </Helmet>
      <div id="homeHeader" className="home-header">
        <header data-thq="thq-navbar" className="home-navbar-interactive navbar-silly-wrapper">
          <img
            alt="pastedImage"
            src="/external/pastedimage-047-400h.png"
            className="home-pasted-image logo-goofy-spacing"
          />
          <div data-thq="thq-navbar-nav" className="home-desktop-menu">
            <nav className="home-links">
            <a href="#aboutUs" className="home-nav6">
            <span className="home-text">About Us</span>
            <br></br>
            </a>
            <a href="#updateUs" className="home-nav2">
            Updates
            </a>
            <a href="#menu" className="home-nav3">
            Menu
            </a>
            <a href="#gallery" className="home-nav4">
            Gallery
            </a>
            <a href="#reviews" className="home-nav4"> 
            <span className="home-text03">Reviews</span>
            <br></br>
            </a>
            <a href="#contactUs" className="home-nav5">
            <span className="home-text02">Contact Us</span>
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
                    <span className="home-text04">Order Now</span>
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
                    className="home-dropdown1 list-item"
                  >
                    <a
                      href="https://aras-hot-chicken.square.site/"
                      target="_self"
                      rel="noreferrer noopener"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="home-dropdown-toggle2"
                      >
                        <span className="home-text06">Pickup</span>
                      </div>
                    </a>
                  </li>
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
                        <span className="home-text05">GrubHub</span>
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
                        <span className="home-text06">UberEats</span>
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
                        <span className="home-text07">
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
          <div data-thq="thq-burger-menu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon2">
              <path d="M64 192h896v192h-896zM64 448h896v192h-896zM64 704h896v192h-896z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="home-mobile-menu">
            <div className="home-nav">
              <div className="home-top">
                <span className="home-logo">
                  <span>ARAS HOT CHICKEN</span>
                  <br></br>
                </span>
                <div data-thq="thq-close-menu" className="home-close-menu">
                  <svg viewBox="0 0 1024 1024" className="home-icon4">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <div className="home-buttons1">
                <a href="#updateUs" className="home-updates button">
                  <span>
                    <span>Updates</span>
                    <br></br>
                  </span>
                </a>
              </div>
              <div className="home-buttons2">
                <a href="#aboutUs" className="home-about-us-mobile button">
                  <span>
                    <span>About Us</span>
                    <br></br>
                  </span>
                </a>
              </div>
              <div className="home-buttons3">
                <a href="#menu" className="home-menu button">
                  <span>
                    <span className="home-text18">Menu</span>
                    <br></br>
                  </span>
                </a>
              </div>
              <div className="home-buttons4">
                <a href="#gallery" className="home-gallery button">
                  <span>
                    <span className="home-text21">Gallery</span>
                    <br></br>
                  </span>
                </a>
              </div>
              <div className="home-buttons5">
                <a href="#gallery" className="home-contact-us button">
                  <span>
                    <span className="home-text24">Contact Us</span>
                    <br></br>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </header>
      </div>
      <div className="home-hero">
        <div className="home-container03">
          <h1 className="home-hero-heading heading1">
            <span className="home-text26">Ara&apos;s Hot Chicken</span>
            <br></br>
          </h1>
          <div className="home-order-now-button">
      <a href="https://aras-hot-chicken.square.site/" target="_self" rel="noopener noreferrer" className="home-button-link">
        <button className="home-order-button">
          Order Now
        </button>
      </a>
    </div>
          <span className="home-hero-sub-heading">
            &quot;The Purrfect Bite Everytime&quot;
          </span>
          <div className="home-btn-group"></div>
        </div>
      </div>
      <div className="home-pricing"></div>
      <div id="updateUs" className="home-update-us">
        <div className="home-update-us1">
          <h1 className="home-gallery-heading heading2">Updates</h1>
          <div className="home-blog">
          <div className="home-container05">
              <BlogPostCard2
                label="General"
                title="Open on the Holidays!"
                imageSrc="https://t3.ftcdn.net/jpg/03/79/71/46/360_F_379714679_q3jwi2mpNDu5F6IaA8xustwEEJIN7ojn.jpg"
                profileSrc="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
                description="We are open our regular hours during the holidays!"
                rootClassName="rootClassName"
              ></BlogPostCard2>
            </div>
          <div className="home-container04">
              <BlogPostCard2
                label="Ara's Online Ordering"
                title="Order takeout online!"
                imageSrc="https://upload.wikimedia.org/wikipedia/commons/2/27/Square%2C_Inc_-_Square_Logo.jpg"
                profileSrc="https://images.unsplash.com/photo-1611232658409-0d98127f237f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
                description="Enjoy the convenience of online ordering with Ara's. Now offering takeout options through our Square-powered site! Order now at https://aras-hot-chicken.square.site/"
                rootClassName="rootClassName3"
              ></BlogPostCard2>
            </div>

          </div>
        </div>
      </div>
      <div className="home-pricing1"></div>
      <div id="aboutUs" className="home-details">
        <div className="home-details1">
          <div className="home-container06">
            <span className="home-text28 sectionTitle">
              <span>AbouT US</span>
              <br></br>
            </span>
            <h2 className="home-details-heading heading2">
              Experience the Perfect Blend of Flavor and Crispiness
            </h2>
            <span className="home-details-sub-heading">
              Ara&apos;s Hot Chicken is a Bangladeshi family-owned and operated
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
      <div className="home-pricing2"></div>
      <div className="home-menu1">
        <div id="menu" className="home-container07">
          <h2 className="home-details-heading1 heading2">Menu</h2>
          <div className="home-container08">
            <div className="home-container09">
              <img
                alt="pastedImage"
                src="/external/arasMenuVertical-3-11-1.png"
                className="home-pasted-image1"
              />
            </div>
            <div className="home-container10">
              <img
                alt="pastedImage"
                src="/external/arasHotChicken-3-11.png"
                className="home-pasted-image2"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="home-pricing3"></div>
      <div id="gallery" className="home-gallery1">
        <div className="home-gallery2">
          <h1 className="home-gallery-heading1 heading2">Gallery</h1>
          <span className="home-gallery-sub-heading">
            Explore our mouthwatering menu items
          </span>
          <div className="home-container11">
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
              imageSrc="https://images.squarespace-cdn.com/content/v1/5cca784792441b9dfd02ed1a/614859cb-6c5e-4fc9-a454-8f878992b473/280335684_694627025201560_4716038788568007643_n.jpg?format=1500w"
              rootClassName="rootClassName11"
            ></GalleryCard3>
          </div>
        </div>
      </div>
      <div className="home-pricing4"></div>
      <div className="home-reviews-section">
  <h1>Customer Reviews</h1>
  <div className="home-review-carousel">
    <div className="home-review-track">
      {/* 25 Review Cards */}
      <div className="home-review-card">"The best chicken I've ever had!" - John Doe</div>
      <div className="home-review-card">"Amazing flavors and crispy!" - Jane Smith</div>
      <div className="home-review-card">"Highly recommend the spicy option!" - Alex Johnson</div>
      <div className="home-review-card">"Quick service and delicious food!" - Emily Brown</div>
      <div className="home-review-card">"Perfect for a family dinner!" - Chris Wilson</div>
      <div className="home-review-card">"Best chicken sandwich I've tried!" - Sarah Parker</div>
      <div className="home-review-card">"Loved the spicy sauce!" - Michael Lee</div>
      <div className="home-review-card">"A must-visit for chicken lovers!" - Rachel Adams</div>
      <div className="home-review-card">"Fantastic customer service!" - Laura Bennett</div>
      <div className="home-review-card">"Great value for the price!" - Henry Wilson</div>
      <div className="home-review-card">"The wings are to die for!" - Megan White</div>
      <div className="home-review-card">"Best place for spicy chicken!" - Tom Harris</div>
      <div className="home-review-card">"Incredible sides and sauces!" - Lisa Thompson</div>
      <div className="home-review-card">"My go-to spot for lunch!" - Brian Davis</div>
      <div className="home-review-card">"Five stars all around!" - Jessica Taylor</div>
      <div className="home-review-card">"Perfectly cooked chicken every time!" - David Evans</div>
      <div className="home-review-card">"Highly recommended!" - Samantha King</div>
      <div className="home-review-card">"The chicken is always fresh!" - Chris Baker</div>
      <div className="home-review-card">"Great for families!" - Anna Clark</div>
      <div className="home-review-card">"Delicious and fast service!" - James Rodriguez</div>
      <div className="home-review-card">"Best Nashville hot chicken around!" - Emma Lewis</div>
      <div className="home-review-card">"The spice levels are perfect!" - Jack Martinez</div>
      <div className="home-review-card">"The food is always on point!" - Olivia Perez</div>
      <div className="home-review-card">"Highly recommend the hot chicken sandwich!" - Ethan Young</div>
      <div className="home-review-card">"A local gem!" - Isabella Walker</div>

      {/* Duplicate the review cards for continuous scrolling */}
      <div className="home-review-card">"The best chicken I've ever had!" - John Doe</div>
      <div className="home-review-card">"Amazing flavors and crispy!" - Jane Smith</div>
      <div className="home-review-card">"Highly recommend the spicy option!" - Alex Johnson</div>
      <div className="home-review-card">"Quick service and delicious food!" - Emily Brown</div>
      <div className="home-review-card">"Perfect for a family dinner!" - Chris Wilson</div>
      <div className="home-review-card">"Best chicken sandwich I've tried!" - Sarah Parker</div>
      <div className="home-review-card">"Loved the spicy sauce!" - Michael Lee</div>
      <div className="home-review-card">"A must-visit for chicken lovers!" - Rachel Adams</div>
      <div className="home-review-card">"Fantastic customer service!" - Laura Bennett</div>
      <div className="home-review-card">"Great value for the price!" - Henry Wilson</div>
      <div className="home-review-card">"The wings are to die for!" - Megan White</div>
      <div className="home-review-card">"Best place for spicy chicken!" - Tom Harris</div>
      <div className="home-review-card">"Incredible sides and sauces!" - Lisa Thompson</div>
      <div className="home-review-card">"My go-to spot for lunch!" - Brian Davis</div>
      <div className="home-review-card">"Five stars all around!" - Jessica Taylor</div>
      <div className="home-review-card">"Perfectly cooked chicken every time!" - David Evans</div>
      <div className="home-review-card">"Highly recommended!" - Samantha King</div>
      <div className="home-review-card">"The chicken is always fresh!" - Chris Baker</div>
      <div className="home-review-card">"Great for families!" - Anna Clark</div>
      <div className="home-review-card">"Delicious and fast service!" - James Rodriguez</div>
      <div className="home-review-card">"Best Nashville hot chicken around!" - Emma Lewis</div>
      <div className="home-review-card">"The spice levels are perfect!" - Jack Martinez</div>
      <div className="home-review-card">"The food is always on point!" - Olivia Perez</div>
      <div className="home-review-card">"Highly recommend the hot chicken sandwich!" - Ethan Young</div>
      <div className="home-review-card">"A local gem!" - Isabella Walker</div>
    </div>
  </div>
</div>

      <div id="contactUs" className="home-details2">
        <div className="home-details3">
          <div className="home-container12">
            <h1 className="home-gallery-heading2 heading2">Contact Us</h1>
            <iframe
              src="https://www.google.com/maps/embed/v1/view?key=AIzaSyAqjXxc7kbyMa2DFrDz3vYgsuytiW6RaSI&amp;center=40.4996314,-74.4269753&amp;zoom=20"
              className="home-iframe"
            ></iframe>
            <div className="home-container13">
              <div className="home-container14">
                <h1 className="home-text31">
                  <span>Phone Number</span>
                  <br></br>
                </h1>
                <a href="tel:(732) 447-2571" className="home-link3 button">
                  Call Now
                </a>
                <span className="home-text34">
                  <br></br>
                  <span>(732) 447-2571</span>
                  <br></br>
                </span>
                <span className="home-text38">
                  <span className="home-text39">Email</span>
                  <span>: arashotchicken@gmail.com</span>
                  <br></br>
                </span>
              </div>
              <div className="home-container15">
                <h1 className="home-text42">
                  <span>Address</span>
                  <br></br>
                </h1>
                <a
                  href="https://www.google.com/maps/dir//Ara%27s+Hot+Chicken/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c3c7ae9b777497:0x6f8d2cd0af2ca9c7!2m2!1d-74.4269379!2d40.4996027"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link4 button"
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
              <div className="home-container16">
                <h1 className="home-text55">
                  <span>Business Hours</span>
                  <br></br>
                </h1>
                <span className="home-text58">
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
                  <span>Fri: 12:00 – 10:00 PM</span>
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
      <div className="home-pricing5"></div>
      <div className="home-footer">
        <footer className="home-footer1">
          <div className="home-container17">
            <div className="home-container18">
              <nav className="home-nav1 home-nav1">
                <a href="#homeHeader">Home</a>
                <a href="#updateUs" className="home-nav61">
                  Updates
                </a>
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
            <span>Text</span>
          </div>
          <div className="home-separator"></div>
          <div className="home-container19">
            <div className="home-container20">
              <div className="home-container21">
                <div className="home-container22">
                  <span className="home-text80">
                    <span className="home-text81">
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
        <div className="home-icon-group">
          <a
            href="https://www.instagram.com/arashotchicken/"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link5"
          >
            <svg viewBox="0 0 877.7142857142857 1024" className="home-icon6">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home
