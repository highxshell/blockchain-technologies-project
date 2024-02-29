import React from "react";

const Welcome = () => {
  return (
    <div class="welcome-area bg-color-4 fix area-padding-2">
      <div class="container">
        <div class="row d-flex flex-wrap align-items-center">
          <div class="col-xl-6 col-lg-6 col-md-12">
            <div class="row">
              <div class="col-xl-6 col-lg-6 col-md-6">
                <div
                  class="well-services first-well wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div class="services-img">
                    <a class="big-icon" href="#">
                      <img src="img/icon/t1.png" alt="" />
                    </a>
                  </div>
                  <div class="main-wel">
                    <div class="wel-content">
                      <h4>Latest Technology</h4>
                      <p>
                        Stay abreast of the most recent trends and
                        breakthroughs, from layer 2 solutions to novel consensus
                        algorithms, shaping the future of decentralized
                        applications and digital economies.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  class="well-services second-well wow fadeInUp"
                  data-wow-delay="0.7s"
                >
                  <div class="services-img">
                    <a class="big-icon" href="#">
                      <img src="img/icon/t2.png" alt="" />
                    </a>
                  </div>
                  <div class="main-wel">
                    <div class="wel-content">
                      <h4>Certik Certified</h4>
                      <p>
                        Whether you're an investor, developer, or blockchain
                        enthusiast, trust in CertiK Certified as your beacon for
                        blockchain security excellence.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6">
                <div
                  class="well-services three-well wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <div class="services-img">
                    <a class="big-icon" href="#">
                      <img src="img/icon/t3.png" alt="" />
                    </a>
                  </div>
                  <div class="main-wel">
                    <div class="wel-content">
                      <h4>Mining Plateform</h4>
                      <p>
                        Explore a curated selection of mining platforms, pools,
                        and hardware solutions driving the distributed consensus
                        that underpins blockchain technology.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  class="well-services four-well wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <div class="services-img">
                    <a class="big-icon" href="#">
                      <img src="img/icon/t4.png" alt="" />
                    </a>
                  </div>
                  <div class="main-wel">
                    <div class="wel-content">
                      <h4>Metaverse Blockchain</h4>
                      <p>
                        Whether you're a gamer, developer, investor, or
                        visionary, join us as we navigate the frontier of the
                        metaverse blockchain, where digital realms and
                        decentralized technologies converge to redefine the
                        future of human interaction and expression.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6 col-md-12">
            <div class="well-service-text ">
              <div class="top-text-title">Ultimate Metaverse</div>
              <h2 class="main-title">
                {" "}
                <span class="color-text-bold"> Blockchain</span> provide you
                best services
              </h2>
              <p>
                Whether you're a blockchain enthusiast, entrepreneur, investor,
                or industry professional, join us as we navigate the
                ever-evolving blockchain ecosystem and uncover the opportunities
                and challenges on the horizon.
              </p>
              <a class="service-btn coin-btn" href="/">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
