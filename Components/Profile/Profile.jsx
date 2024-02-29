import React, { useState } from "react";

//INTERNAL IMPORT
import { ProfileMain, SideBar } from "../index";

const Profile = ({
  setActive,
  getAllERC20TokenListed,
  getUserERC20Tokens,
  address,
  fee,
  createERC20,
  balance,
  widthdrawFund,
  donateFund,
  getAllDonation,
  mainBalance,
  setTransfer,
  nativeToken,
}) => {
  const [open, setOpen] = useState("Dashbord");
  return (
    <div class="dashboard-area bg-color area-padding-3">
      <div class="container">
        <div class="row">
          <SideBar
            address={address}
            setOpen={setOpen}
            open={open}
            setActive={setActive}
            setTransfer={setTransfer}
          />
          <ProfileMain
            nativeToken={nativeToken}
            mainBalance={mainBalance}
            getAllDonation={getAllDonation}
            donateFund={donateFund}
            widthdrawFund={widthdrawFund}
            balance={balance}
            createERC20={createERC20}
            setOpen={setOpen}
            open={open}
            fee={fee}
            address={address}
            getAllERC20TokenListed={getAllERC20TokenListed}
            getUserERC20Tokens={getUserERC20Tokens}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
