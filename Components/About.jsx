import React from "react";

const About = () => {
  const features = [
    {
      title: "Decentralized System",
      description:
        " Explore the frontier of decentralized systems, where innovation thrives and trust is redefined. Delve into blockchain, peer-to-peer networks, and distributed ledger technology as we uncover how these groundbreaking concepts are reshaping industries and empowering individuals.",
    },
    {
      title: "Blockchain Wallet",
      description:
        "Embark on a journey through the realm of blockchain wallets, where security meets convenience and empowerment. Explore the diverse landscape of wallet solutions built on blockchain technology, offering users unparalleled control over their digital assets.",
    },
    {
      title: "Token Forge",
      description:
        "Step into the world of Web3 projects, where innovation intersects with decentralization to shape the future of the internet. Explore a vibrant landscape of projects harnessing blockchain technology, smart contracts, and decentralized protocols to redefine digital interactions.",
    },
  ];
  return (
    <div class="about-area bg-color-3 fix area-padding">
      <div class="container">
        <div class="row d-flex flex-wrap align-items-center">
          <div class="col-xl-6 col-lg-6 col-md-12">
            <div class="about-content">
              <div class="about-images wow fadeInLeft" data-wow-delay="0.7s">
                <img src="img/about/ab2.png" alt="" />
                <div class="rotmate-image rotateme">
                  <img src="img/about/circle.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6 col-md-12">
            <div class="about-all">
              <div class="about-inner">
                {features.map((feature, i) => (
                  <div
                    class="single-about wow fadeInUp"
                    data-wow-delay={`0.${i + 3}s`}
                  >
                    <span class="about-icon">0{i + 1}</span>
                    <div class="support-text">
                      <h4>
                        <a href="#">{feature.title}</a>
                      </h4>
                      <p>{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
