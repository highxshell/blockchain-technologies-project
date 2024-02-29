import React from "react";

//INTERNAL IMPORT
import {
  Header,
  Footer,
  About,
  Brand,
  Faq,
  Feature,
  HeroSection,
  Information,
  Staking,
  Swap,
  Welcome,
} from "../Components/index";
import { useStateContext } from "../Context/index";

const index = () => {
  const {
    createERC20,
    getAllERC20TokenListed,
    getUserERC20Tokens,
    fee,
    address,
    nativeToken,
    transferNativeToken,
  } = useStateContext();

  return (
    <div>
      {/* <button onClick={() => createERC20()}>Create ERC20</button>*/}
      <Header />
      <main>
        <HeroSection />
        <About />
        <Brand />
        <Swap
          nativeToken={nativeToken}
          transferNativeToken={transferNativeToken}
        />
        <Welcome />
        {/* <Information />
        <Staking />
        <Feature /> */}
        <Faq />
      </main>
      <Footer />
    </div>
  );
};

export default index;
