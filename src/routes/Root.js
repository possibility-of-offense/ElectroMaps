import React from "react";

// Own Dependencies
import attributes from "./styles/Root.module.css";
import AdditionalInfoListItem from "../components/ui/AdditionalInfoListItem";
import additionalInfo from "../assets/images/copied-images/additionalInfo.jpg";
import bannerImage from "../assets/images/ev.jpg";
import car from "../assets/images/copied-images/car.jpg";
import contactLess from "../assets/images/copied-images/contactless.jpg";
import contactLessCharger from "../assets/images/copied-images/contactLessCharger.png";
import customer from "../assets/images/copied-images/customer.jpg";
import Header from "../components/generic/Header";
import map from "../assets/images/copied-images/map.png";
import numberOfStations from "../assets/images/copied-images/number-of-stations.jpg";
import pioneers from "../assets/images/copied-images/pioneers.jpg";
import road from "../assets/images/copied-images/road.jpg";
import shop from "../assets/images/copied-images/shop.jpg";
import ShopBoxItem from "../components/ui/ShopBoxItem";

// Shop assets
import charger from "../assets/images/copied-images/charger.png";
import walbox from "../assets/images/copied-images/walbox.png";
import cable from "../assets/images/copied-images/cable.png";
import NumberOfStations from "../components/ui/NumberOfStations";
import CustomerBox from "../components/ui/CustomerBox";

function Root(props) {
  return (
    <div>
      <Header />
      <section
        className={attributes.homeBanner}
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <div>
          <h1>
            <span>Find</span>
            <span className={attributes["skewBorder"]}></span>
          </h1>
          <h1>
            <span>Charge</span>
            <span className={attributes["skewBorder"]}></span>
          </h1>
          <h1>
            <span>Go</span>
            <span className={attributes["skewBorder"]}></span>
          </h1>
          <p>Go anywhere with the Electromaps app.</p>
        </div>
      </section>
      <section
        className={`${attributes.additionalInfo} center-flex background-image`}
        style={{ backgroundImage: `url(${additionalInfo})` }}
      >
        <div className="container-landscape-middle">
          <div>
            <AdditionalInfoListItem
              title="Find"
              content="Find a charge point that suits your needs, when you need it. Search among more than 290.000 public charge points."
            />
            <AdditionalInfoListItem
              title="Charge"
              content="Activate thousands of chargers directly from within the app or with the Electropass. Easy."
            />
            <AdditionalInfoListItem
              title="Go"
              content="We build the most seamless charging experience, so you can worry about things that really matter. Go anywhere."
            />
          </div>
          <div>
            <img alt="Map App" title="Map App" src={map} />
            <img alt="Map App" title="Map App" src={map} />
          </div>
        </div>
      </section>
      <section
        className={`${attributes.shop} center-flex background-image`}
        style={{ backgroundImage: `url(${shop})` }}
      >
        <div className="container-landscape-middle">
          <h2>Electropass, chargers, cables & more: we got it all.</h2>
          <div>
            <ShopBoxItem alt="charger" title="charger" src={charger} />
            <ShopBoxItem alt="walbox" title="walbox" src={walbox} />
            <ShopBoxItem alt="cable" title="cable" src={cable} />
          </div>
          <div className={attributes.buttonWrapper}>
            <button className={attributes.button}>Check out the shop</button>
          </div>
        </div>
      </section>

      <section
        className={`${attributes.contactLessCharging} center-flex background-image`}
        style={{ backgroundImage: `url(${contactLess})` }}
      >
        <div className="container-landscape-middle">
          <div>
            <h2>Conctactless charing</h2>
            <p>
              At Electromaps, we are obsessed with providing an intuitive and
              seamless experience. When you use the Electropass, our keytag with
              an RFID chip, activating a charging session only takes a few
              seconds.
            </p>
            <button className={attributes.button}>Learn more</button>
          </div>
          <div>
            <img
              alt="Contactless Charger"
              title="Contactless Charger"
              src={contactLessCharger}
            />
          </div>
        </div>
      </section>
      <section
        className={`${attributes.numberOfStations} center-flex background-image`}
        style={{ backgroundImage: `url(${numberOfStations})` }}
      >
        <div className="container-landscape-middle center-flex">
          <NumberOfStations number="296.495" />
          <p>Want to discover more data about charging stations?</p>
          <button className={attributes.button}>Discover</button>
        </div>
      </section>
      <section
        className={`${attributes.pioneers} center-flex background-image`}
        style={{ backgroundImage: `url(${pioneers})` }}
      >
        <div className="container-landscape-middle center-flex">
          <div>
            <h2>We are Pioneers</h2>
            <p>
              Our founders got inspired back in 2009 when the very first charge
              station was installed close to their home. They envisioned that,
              in the future, people would need to easily find their ways to a
              charge station and pay for a charging session.
            </p>
          </div>
          <div>
            <img alt="road" title="road" src={road} />
          </div>
        </div>
      </section>
      <section
        className={`${attributes.reviews} center-flex background-image`}
        style={{ backgroundImage: `url(${car})` }}
      >
        <div className="container-landscape-middle center-flex">
          <h2>What our customers say about us</h2>
          <div className={attributes.reviewsGrid}>
            <CustomerBox
              user={{ userImage: customer, userName: "Daniel Sanchez" }}
              review="A fundamentally useful app for EV drivers."
            />
            <CustomerBox
              user={{ userImage: customer, userName: "Jimmy Ocampo" }}
              review="Genius. And the great thing is that you can publish your trips and reviews."
            />
            <CustomerBox
              user={{ userImage: customer, userName: "Marina" }}
              review="Very useful, and works really well. Recommended for all EV owners."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Root;
