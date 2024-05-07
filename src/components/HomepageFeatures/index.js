import React from "react";
import styles from "./styles.module.css";

// import { library } from "@fortawesome/fontawesome-svg-core";
// import { fab } from "@fortawesome/free-brands-svg-icons";

// Initialize Font Awesome library
// library.add(fab);

const FeatureList = [];

const MemberList = [
  {
    name: "The University of Alabama",
    logo: "https://brand.ua.edu/wp-content/themes/ua-theme/assets/img/ua-square-logo.png",
  },
  {
    name: "Utah State University",
    logo: "https://www.usu.edu/brand/toolkit/logo-library/images/athletics/INST_UState_AggieBlue_300Center.png",
  },
  {
    name: "University of Iowa",
    logo: "https://ciroh.ua.edu/wp-content/uploads/2023/03/Block-IOWA-GOLD-ffcd00-1024x512.png",
  },
  {
    name: "Tuskegee University",
    logo: "https://ciroh.ua.edu/wp-content/uploads/2023/03/tu_logo_OPTION-300x225.png",
  },
  {
    name: "The University of Alabama in Huntsville",
    logo: "https://www.uah.edu/images/administrative/communications/logo/uah-logo.svg",
  },

  {
    name: "University of Arizona",
    logo: "https://www.arizona.edu/sites/default/files/www_webheader-01.svg",
  },

  {
    name: "University of California San Diego",
    logo: "https://www.ucsd.edu/_resources/img/logo_UCSD.png",
  },
  {
    name: "Brigham Young University",
    logo: "https://brightspotcdn.byu.edu/e1/53/a51276944fd180271d6b46d74082/1-primary-200w.svg",
  },

  {
    name: "University of Minnesota Twin Cities",
    logo: "https://ciroh.ua.edu/wp-content/uploads/2023/03/UMN_M-wdmk-stack-D2D-maroon-blk-300x237.png",
  },
  {
    name: "University of Saskatchewan",
    logo: "https://ciroh.ua.edu/wp-content/uploads/2023/03/usask_usask_colour-300x67.png",
  },

  {
    name: "University of Hawai‘i at Mānoa",
    logo: "https://ciroh.ua.edu/wp-content/uploads/2023/03/bottom-300x151.png",
  },
  {
    name: "University of Vermont",
    logo: "https://www.uvm.edu/sites/all/themes/uvmbase/images/uvmlogo-dark.svg",
  },
  {
    name: "Scripps Institution of Oceanography",
    logo: "https://s2020.s3.amazonaws.com/media/logo-scripps-ucsd-dark.png",
  },

  {
    name: "Colorado School of Mines",
    logo: "https://brand.mines.edu/wp-content/uploads/sites/425/2023/04/Mines-Logo-150-years.png",
  },
];

const Member = ({ idx, name, logo }) => (
  <div className="col col--4">
    <div className="avatar">
      <div className="avatar__intro">
        <div
          key={idx}
          className="avatar__name"
          style={{ marginBottom: 15, paddingLeft: 15 }}
        >
          <img
            src={logo}
            alt={name}
            style={{ maxWidth: "50%", maxHeight: "100px" }}
          />
        </div>
      </div>
    </div>
  </div>
);

const Card = ({ title, image, description, link }) => (
  <div className="col col--4">
    <div className="card">
      <div className="card__image" style={{ textAlign: "center" }}>
        <img
          src={image}
          alt="Image alt text"
          title="Logo Title Text 1"
          style={{ width: "65%" }}
        />
      </div>
      <div className="card__header" style={{ textAlign: "center" }}>
        <h3>{title}</h3>
      </div>
      <div className="card__body">
        <p>{description}</p>
      </div>
      <div className="card__footer">
        <a href={link} className="button button--info button--block">
          Learn More
        </a>
      </div>
    </div>
  </div>
);

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <Card
            title="Documentation"
            image="img/documentation.png"
            description="Dive into our comprehensive documentation to access in-depth information about various CIROH products, including but not limited to NextGen, Snow model, Tethys, and more."
            link="/docs/products/intro"
          />
          <Card
            title="Cloud Services"
            image="img/cloud.png"
            description="Explore our array of cloud services and offerings, where you can delve into the specifics of CIROH-AWS cloud. Learn how to gain access to this cloud infrastructure and uncover insights into working seamlessly with the 2i2c cloud services."
            link="/docs/services/intro"
          />
          <Card
            title="Training"
            image="img/tutorial.png"
            description="Elevate your expertise through our training programs. Delve into our tutorials and educational resources, covering topics such as the NextGen framework, Data Science model, and more."
            link="/docs/education/"
          />
        </div>

        <div className="row" style={{ paddingTop: 30 }}>
          <div
            className="flex-container alert alert--info"
            style={{ display: "flex" }}
          >
            <div>
              <img
                src="img/docuhub-logo.png"
                style={{ maxWidth: "40%" }}
                alt="Logo"
              />
            </div>
            <div style={{ "padding-top": "5px", "margin-left": "-175px" }}>
              <strong>CONTRIBUTE</strong>
              <br />
              Are you finding value in our <strong>CIROH DocuHub</strong>{" "}
              website? Would you like to{" "}
              <strong>
                contribute by adding product/project documentation, tutorials,
                training data, conference presentations or more?
              </strong>
              <span>
                {" "}
                Explore how you can contribute to improve our platform.{" "}
              </span>
              <br />
              <br />
              <a className="button button--info" href="/Contribute">
                How to Contribute?
              </a>
            </div>
          </div>
        </div>

        <div className="row" style={{ paddingTop: 30 }}>
          <div className="hero shadow--lw">
            <div className="container-fluid">
              <h1 className="hero__title">Our Proud Consortium Members</h1>
              {/* <h5>Not all heroes wear capes</h5> */}
              <br />
              <div className=" row">
                {MemberList.map((member, idx) => (
                  <Member
                    key={idx}
                    idx={idx}
                    name={member.name}
                    logo={member.logo}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="row" style={{ paddingTop: 30 }}>
          <div className="col col--4" style={{ textAlign: "center" }}>
            <img alt="noaaImage" src="img/noaalogo.png" />
          </div>
          <div className="col col--4" style={{ textAlign: "center" }}>
            <img alt="awiImage" src="img/awi.png" style={{ marginTop: 125 }} />
          </div>
          <div className="col col--4" style={{ textAlign: "center" }}>
            <img
              alt="cirohImage"
              src="img/cirohlogo-trans.png"
              style={{ height: 275, width: 275, marginTop: 15 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
