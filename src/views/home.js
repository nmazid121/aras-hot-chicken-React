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
          <div className="order-now-container">
  <button className="order-now-button">
    Order Now
  </button>
  <div className="order-dropdown-menu">
    <a href="https://aras-hot-chicken.square.site/" target="_blank" rel="noopener noreferrer" className="order-dropdown-item">Pickup</a>
    <a href="https://www.grubhub.com/restaurant/aras-hot-chicken-323-raritan-ave-highland-park/5610600" target="_blank" rel="noopener noreferrer" className="order-dropdown-item">Grubhub</a>
    <a href="https://www.doordash.com/store/ara's-hot-chicken-highland-park-25116380/" target="_blank" rel="noopener noreferrer" className="order-dropdown-item">DoorDash</a>
    <a href="https://www.ubereats.com/store/aras-hot-chicken/49TfWelISeq7DOtELwOBBA?diningMode=DELIVERY&amp;ps=1&amp;sc=SEARCH_SUGGESTION" target="_blank" rel="noopener noreferrer" className="order-dropdown-item">UberEats</a>
  </div>
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
          <div className="home-container05">
              <BlogPostCard2
                label="Rutgers"
                title="Rutgers Student Discount"
                imageSrc="https://t3.ftcdn.net/jpg/03/79/71/46/360_F_379714679_q3jwi2mpNDu5F6IaA8xustwEEJIN7ojn.jpg"
                profileSrc="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
                description="All Rutgers Students and Alumni get 10% off their order on Wednesdays and Thursdays with valid ID!"
                rootClassName="rootClassName"
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

    <div className="home-review-card">"Some of the best fried chicken I have EVER had!!!! It’s juicy, packed with flavor, the spices are perfect, just the right amount of breading, just the right amount of crunch, the loaded fries were amazing, and their house sauce compliments everything perfectly!! The owners are super awesome people as well!!! 😁" - <strong>Chad Parker</strong></div>
    <div className="home-review-card">"ABSOLUTELY DELICIOUS FRIED CHICKEN & WAFFLES! The waffle was thick and cake-like. It was PERFECT! The chicken tenders were well seasoned, tender, and juicy! The corn bread was very good too!" - <strong>Jennifer</strong></div>
    <div className="home-review-card">"A cozy and cute café in Edison where you can have these amazing burgers and decide your spice level. The Nashville fries are great." - <strong>Asim Hussain (The Reviewer)</strong></div>
    <div className="home-review-card">"The owner was so sweet! Restaurant and bathroom were very clean. AC was nice and cold on a hot summer day. We tried the Mac and cheese which was super creamy and delicious. We had the medium spice chicken which was perfect." - <strong>Samantha Williams</strong></div>
    <div className="home-review-card">"Fresh made-to-order fried chicken with great flavor: piping/steaming hot and juicy dark meat. The wings are giant, the same size as a thigh piece!" - <strong>Kin Cheung</strong></div>
    <div className="home-review-card">"They always provide great customer service by being very attentive. The food is fresh and flavorful, without the greasiness of other places. I always get the hottest chicken sammy, which isn't as spicy as you might think." - <strong>Dre X</strong></div>
    <div className="home-review-card">"Had the loaded fries, extra spicy. Extremely amazing! Mr. Sherry served me, and he was kind and clearly made my fries with love." - <strong>Paul P</strong></div>
    <div className="home-review-card">"The food was very delicious. Everything is cooked fresh and the chicken is very juicy and well-seasoned. The wait is a little long since everything is made fresh, but otherwise it’s a nice quaint family-owned place with great chicken and fries." - <strong>Scheheryar Rizwan</strong></div>
    <div className="home-review-card">"The fried chicken combines just the right amount of crispiness and spice to go with the special sauce. The loaded fries are unbelievably good with the cut-up pieces of chicken and special sauce drizzled over them." - <strong>Youie2k</strong></div>
    <div className="home-review-card">"Food was delicious. The chicken sandwich was fresh, catered to your preferred level of spice. The staff was super friendly. The restaurant is named after a cat and there are pictures posted on the wall." - <strong>Victoria Anderson</strong></div>
    <div className="home-review-card">"Best chicken I’ve had since I visited Nashville. Have tried so many places around NY and NJ but nothing as good as this. I usually don’t write reviews but I had to for this place. My first time getting food from there and will definitely be back." - <strong>Besi Daci</strong></div>
    <div className="home-review-card">"Omg the food was so goood! I really enjoy how fresh and good it is. I got loaded fries, a hot chicken sandwich, and cornbread 😜." - <strong>Danica</strong></div>
    <div className="home-review-card">"O.M.G. That spicy chicken sandwich SLAPS. I needed this in my life today. Just wish I took a pic before I inhaled it. Ara’s house sauce is banging… and the best thing… the very best thing… the pictures of the manager on the wall." - <strong>Robert Finnegan</strong></div>
    <div className="home-review-card">"Great spot! Food is amazing, decor is cute, and staff is friendly. What more could you ask for? We tried the wings, sammies, Mac & cheese, and coleslaw. Will be back for sure." - <strong>Rebecca! W.</strong></div>
    <div className="home-review-card">"Friendly yet calm atmosphere especially during the hot days. Food was on point but wish the chicken sandwich was a bit hotter than what the kind gal behind the counter stated it to be (not point-deducting)." - <strong>Doc Rads</strong></div>
    <div className="home-review-card">"Delicious food, friendly owner, heartwarming atmosphere. Absolute recommendation!" - <strong>Sereas</strong></div>
    <div className="home-review-card">"The chicken here is AWESOME! 🐔 🔥 🔥 🔥 The seasoning and spice level is perfect, and the side dishes are great too." - <strong>Irina Ari</strong></div>
    <div className="home-review-card">"Wonderful place to have some family time together with quality food. They are very friendly. The foods are so delicious and clean served. I have been there a few times from NY just to get the food. I wish they have a branch in NY too." - <strong>Afreen Mahbub</strong></div>
    <div className="home-review-card">"Came here all the way from Connecticut to hear the hype of this food and let me tell you it did NOT DISAPPOINT. Truly an actual spicy Nashville-style chicken so beware before you order the hottest." - <strong>Syeda Rithu</strong></div>
    <div className="home-review-card">"Kind folks, good food, affordable prices. I enjoy picking up a chicken Sammy every couple of weeks when I feel like getting spicy. And there's a very cute photo wall of the manager (it's a cat.)" - <strong>Ron Cacace</strong></div>
    <div className="home-review-card">"Loved this place - 11/10. Guy who took my order, Nabhan, has excellent customer service. The food here is going to blow your mind." - <strong>Ayan Sayyed</strong></div>
    <div className="home-review-card">"This is their first week and are obviously still under a soft opening so be mindful of that but the food is good and they have a lot of potential." - <strong>Ayaz Hyder</strong></div>
    <div className="home-review-card">"The fried chicken here is absolutely delicious!! The crunchiness on the outside, coupled with the ultra juiciness of the meat, is not something you find at other restaurants." - <strong>Z</strong></div>
    <div className="home-review-card">"Chicken is always fresh and perfectly seasoned. Fish and chips are tasty! Order is always good!" - <strong>Johnathan Oliveira</strong></div>
    <div className="home-review-card">"I LOVE this chicken order. Absolute LOVE. Nothing beats this place. BEST food BEST customer service BEST speeds. I Am In Love!!" - <strong>Jeff Chen</strong></div>
    <div className="home-review-card">"Just tried a chicken sandwich. Delicious. Very fresh and good ingredients. Can't wait to try some other items on the menu." - <strong>Tanvi Neill</strong></div>
    <div className="home-review-card">"Loved the Nashville Hot Bucket. Fresh and piping hot. Meat is soft and juicy. And the crispness on the outside is perfect. Tastes amazing!" - <strong>سید عباد الرحمٰن Ebad Syed</strong></div>
    <div className="home-review-card">"The 'Chicken Sammies' was so incredibly delicious. Would 100% without a doubt buy it again. The staff were also very nice and accommodating." - <strong>Ines Lasfar</strong></div>
    <div className="home-review-card">"Really good chicken sandwich. Made fresh. Pass on the mac and cheese. Just focus on the hot chicken sandwich." - <strong>Frank Greenagel II</strong></div>
    <div className="home-review-card">"Stepping into Ara's Hot Chicken in Highland Park is like embarking on a culinary adventure where spice meets sophistication." - <strong>Alec Choi</strong></div>
    <div className="home-review-card">"Love this place and the food!! I like this place 10000x better than Smashville just because it’s not oily and heavy." - <strong>Life is amazing</strong></div>
    <div className="home-review-card">"We went with our family for chicken, and we got Chicken Sammies (sandwiches), loaded fries, and wings. The food was amazing -- the chicken was fresh." - <strong>Sara Hossain</strong></div>
    <div className="home-review-card">"Some of the best chicken tenders I’ve ever eaten. Up there with the best of Nashville. Served with thick white bread and pickles." - <strong>Olly</strong></div>
    <div className="home-review-card">"Food was seasoned well, & the portions are also good, great halal southern-style place. Would come again." - <strong>John Haroon</strong></div>
    <div className="home-review-card">"Was not expecting anything when I ordered lunch from here, but man I am glad I ordered from here." - <strong>Abd Yousuf</strong></div>
    <div className="home-review-card">"I tried this place for the first time and had a wonderful experience. I had the Chicken Sammy sandwich. The chicken was perfectly cooked." - <strong>Ahmed Abu Mazen</strong></div>
    <div className="home-review-card">"Food is very good quality chicken!! So juicy and fresh!! The employees are very nice and understanding." - <strong>Brandon Lee</strong></div>
    <div className="home-review-card">"Very nice place in a quiet neighborhood. Had the chicken sandwich, samosas, and a milkshake. The chicken was nice, crisp, juicy." - <strong>Ahsan Khan</strong></div>
    <div className="home-review-card">"The BEST chicken I've had in my life! It's so juicy and full of flavor!" - <strong>Cat Warrington</strong></div>
    <div className="home-review-card">"This chicken… is the best fried chicken I have ever put in my mouth. The perfect amount of spice with the sweetness of the bun." - <strong>Brandon Cavalli</strong></div>
    <div className="home-review-card">"Lofi ambience! General manager keeps everything well maintained. As for food, I had the fried chicken and it was seasoned very well." - <strong>Syed Muhtasim</strong></div>
    <div className="home-review-card">"Got the three tenders meal. Lovely family-run restaurant, very friendly, and lovely people!" - <strong>Damien Yee</strong></div>
    <div className="home-review-card">"What is there not to like? Staff are wonderful and kind. Chicken is very well seasoned, cooked nice, hot, and crunchy." - <strong>Ray</strong></div>
    <div className="home-review-card">"Pretty good! Next time I think I'll try the slightly spicier one though. Gouda mac was awesome, and people there were friendly." - <strong>Matthew O</strong></div>
    <div className="home-review-card">"The chicken was awesome, same with the tenders. I really like the flavor and found the hot and extra hot to be the perfect spice levels!!" - <strong>B J</strong></div>
    <div className="home-review-card">"Few things make me happier than a trip to Ara’s. The loaded fries are so good, the staff are so kind." - <strong>Quinn Michaels</strong></div>
    <div className="home-review-card">"Very good chicken and fried cauliflower. I loved the house sauce and mac and cheese. We will definitely be back." - <strong>Samantha</strong></div>
    <div className="home-review-card">"Very friendly and helpful owners, food is amazing, actually does remind me of hot chicken I've had in Nashville." - <strong>Jimmy LeBron</strong></div>
    <div className="home-review-card">"Great, lovely place, and the chicken tasted delicious. Love their mascot. Ordered the tenders and loaded fries." - <strong>W N</strong></div>
    <div className="home-review-card">"BY FAR THE BEST HOT CHICKEN EVER. Drove all the way from Long Island, and it did not disappoint." - <strong>Farah J.</strong></div>

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
