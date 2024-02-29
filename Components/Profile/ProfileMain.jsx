import React from "react";

import { Table, TableTwo } from "../index";

const ProfileMain = ({
  getAllERC20TokenListed,
  getUserERC20Tokens,
  setOpen,
  open,
  fee,
  createERC20,
  address,
  balance,
  widthdrawFund,
  donateFund,
  getAllDonation,
  mainBalance,
  nativeToken,
}) => {
  const details = [
    {
      title: "Created",
      value: `#${getUserERC20Tokens?.length || 0}`,
    },
    {
      title: "ERC20s",
      value: `#${getAllERC20TokenListed?.length || 0}`,
    },
    {
      title: "Listing Fee",
      value: `${fee} sETH`,
    },
    {
      title: "Downers",
      value: `#${getAllDonation?.length || 0}`,
    },
    {
      title: `${nativeToken?.symbol} Token`,
      value: `${nativeToken?.balance}`,
    },
    {
      title: "Contract Balance",
      value: `${mainBalance == undefined ? "Only Owner See" : mainBalance}`,
    },
  ];

  const contractOwner = 0x07b99b93cf0bcdd0fced1dcad35faba219c24be8;

  return (
    <div class="col-xl-9 col-lg-9 col-md-8">
      <div class="row user-dasboard">
        <div class="col-xl-12 col-lg-12 col-md-12">
          <div class="user-top">
            <div class="user-balance">
              <span>Your balance</span>
              <div class="main-bal">{balance?.slice(1, 7)} sETH</div>
            </div>
            <div class="userboard-btn">
              <a class="user-btn coin-btn" onClick={() => donateFund()}>
                Donate 1 sETH
              </a>
              {address == contractOwner && (
                <a onClick={() => widthdrawFund()} class="user-btn color-btn">
                  Withdraw funds
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      <div class="row dashboard-content">
        {details.map((detail, i) => (
          <div key={i + 1} class="col-xl-4 col-lg-4 col-md-6">
            <div class="single-dash-head">
              <div class="dashboard-amount d-flex flex-wrap align-items-center">
                <div class="amount-content">
                  <span class="pro-name">{detail.title}</span>
                  <span class="pro-money">{detail.value}</span>
                </div>
                <div class="invest-tumb">
                  <img src={`img/icon/d${i + 1}.png`} alt="" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {open == "Dashbord" ? (
        <Table
          title="All Created ERC20 Tokens"
          tableData={getAllERC20TokenListed}
        />
      ) : open == "Your Token" ? (
        <Table title="Your Tokens" tableData={getUserERC20Tokens} />
      ) : open == "Donation" ? (
        <TableTwo title="All user donations" tableData={getAllDonation} />
      ) : (
        ""
      )}
    </div>
  );
};

export default ProfileMain;
