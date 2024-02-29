import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Faq = () => {
  return (
    <div class="service-area bg-color area-padding-2">
      <div class="container">
        <div class="row">
          <div class="col-xl-4 col-lg-4 col-md-6">
            <div class="single-service text-service services-title">
              <h2>
                Best <span class="color-text-bold">services</span> for clients
              </h2>
              <p>
                Explore a diverse array of services, including blockchain
                consulting, development, integration, and auditing, offered by
                leading industry experts and firms.
              </p>
              <a class="left-btn coin-btn" href="services.html">
                All Services
              </a>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-6">
            <div class="single-service wow fadeInUp" data-wow-delay="0.3s">
              <div class="service-icon">
                <img src="img/icon/s1.png" alt="" />
              </div>
              <div class="service-inner">
                <div class="service-content">
                  <h4>Nfts Product</h4>
                  <p>
                    Explore a diverse array of NFT products, including digital
                    art, collectibles, virtual real estate, and more, created
                    and traded on blockchain-powered platforms.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-6">
            <div
              class="single-service text-service wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div class="service-icon">
                <img src="img/icon/s2.png" alt="" />
              </div>
              <div class="service-inner">
                <div class="service-content">
                  <h4>Stacking</h4>
                  <p>
                    Whether you're a crypto investor, enthusiast, or
                    technologist, join us as we navigate the dynamic landscape
                    of staking in the blockchain ecosystem, empowering
                    individuals to stake their claim in the future of finance
                    and decentralization.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-6">
            <div class="single-service wow fadeInUp" data-wow-delay="0.7s">
              <div class="service-icon">
                <img src="img/icon/s3.png" alt="" />
              </div>
              <div class="service-inner">
                <div class="service-content">
                  <h4>Launchpad</h4>
                  <p>
                    Delve into in-depth analyses, reviews, and interviews with
                    project founders and industry experts, providing valuable
                    perspectives on the most promising projects and investment
                    opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-6">
            <div
              class="single-service text-service wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div class="service-icon">
                <img src="img/icon/s4.png" alt="" />
              </div>
              <div class="service-inner">
                <div class="service-content">
                  <h4>Ecommerce solutions</h4>
                  <p>
                    Explore innovative solutions that leverage blockchain's
                    transparency, security, and decentralization to enhance
                    trust, streamline transactions, and empower merchants and
                    consumers alike.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-6">
            <div class="single-service wow fadeInUp" data-wow-delay="0.5s">
              <div class="service-icon">
                <img src="img/icon/s5.png" alt="" />
              </div>
              <div class="service-inner">
                <div class="service-content">
                  <h4>Token release</h4>
                  <p>
                    Gain a deeper understanding of the factors influencing token
                    release schedules, allocation strategies, and market
                    dynamics through expert commentary, case studies, and
                    interviews with project teams.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
