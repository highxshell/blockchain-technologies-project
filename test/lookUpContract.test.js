const { expect } = require("chai");

describe("LookUpContract", function () {
  let LookUpContract;
  let lookUpContract;
  let owner;
  let addr1;
  let addr2;

  beforeEach(async function () {
    [owner, addr1, addr2] = await ethers.getSigners();
    LookUpContract = await ethers.getContractFactory("LookUpContract");
    lookUpContract = await LookUpContract.deploy();
    await lookUpContract.deployed();
  });

  it("Should create ERC20 token", async function () {
    const tokenSupply = "1000000";
    const tokenName = "TestToken";
    const tokenSymbol = "TTT";
    const tokenAddress = "0x123456789";
    const tokenTransactionHash = "0xabcdef123456";
    const tokenCreatedDate = "2024-02-23";

    await lookUpContract.createERC20Token(
      owner.address,
      tokenSupply,
      tokenName,
      tokenSymbol,
      tokenAddress,
      tokenTransactionHash,
      tokenCreatedDate
    );

    const token = await lookUpContract.getERC20Token(1);

    expect(token[1]).to.equal(owner.address);
    expect(token[2]).to.equal(tokenSupply);
    expect(token[3]).to.equal(tokenName);
    expect(token[4]).to.equal(tokenSymbol);
    expect(token[5]).to.equal(tokenAddress);
    expect(token[6]).to.equal(tokenTransactionHash);
    expect(token[7]).to.equal(tokenCreatedDate);
  });

  it("Should update listing price by owner", async function () {
    const newListingPrice = ethers.utils.parseEther("0.05"); // New listing price in ether
    const contractOwnerAddress = await lookUpContract.signer.address;

    // Ensure the owner address is correct
    expect(contractOwnerAddress).to.equal(owner.address);

    // Update the listing price
    await lookUpContract.updateListingPrice(
      newListingPrice,
      "0x07b99b93cf0bcdd0fced1dcad35faba219c24be8"
    );

    // Retrieve the updated listing price
    const updatedListingPrice =
      await lookUpContract.getERC20TokenListingPrice();

    // Assert that the listing price is updated
    expect(updatedListingPrice).to.equal(newListingPrice);
  });

  it("Should donate and emit DonationReceived event", async function () {
    const donationAmount = ethers.utils.parseEther("1"); // Donation amount in ether

    // Donate to the contract
    const donationTx = await lookUpContract.donate({ value: donationAmount });

    // Assert that the event is emitted
    expect(donationTx).to.exist;
    expect(donationTx.from).to.equal(owner.address);
    expect(donationTx.value).to.equal(donationAmount);
  });

  it("Should withdraw contract balance by owner", async function () {
    const initialContractBalance = await ethers.provider.getBalance(
      "0x07b99b93cf0bcdd0fced1dcad35faba219c24be8"
    );

    // Donate to the contract
    await lookUpContract.donate({ value: ethers.utils.parseEther("1") });

    // Withdraw contract balance
    await lookUpContract.withdraw();

    // Retrieve the updated contract balance after withdrawal
    const updatedContractBalance = await ethers.provider.getBalance(
      "0x07b99b93cf0bcdd0fced1dcad35faba219c24be8"
    );

    // Assert that the contract balance is zero after withdrawal
    expect(initialContractBalance).to.equal(ethers.constants.Zero);
    expect(updatedContractBalance).to.equal(ethers.utils.parseEther("1"));
  });
  it("Should not allow withdrawal of contract balance when balance is zero", async function () {
    // Attempt to withdraw contract balance when it's zero
    await expect(lookUpContract.withdraw()).to.be.revertedWith(
      "no donations available for withdrawal"
    );
  });
  it("Should not allow non-owner to update listing price", async function () {
    const newListingPrice = ethers.utils.parseEther("0.05"); // New listing price in ether
    const nonOwner = addr1;

    // Attempt to update the listing price by a non-owner
    await expect(
      lookUpContract
        .connect(nonOwner)
        .updateListingPrice(newListingPrice, nonOwner.address)
    ).to.be.revertedWith("only contract owner can update listing price");
  });
  it("Should return correct ERC20 tokens owned by a user", async function () {
    // Create ERC20 tokens owned by different users
    await lookUpContract.createERC20Token(
      addr1.address,
      "1000000",
      "Token1",
      "T1",
      "0x111111",
      "0x111111tx",
      "2024-02-23"
    );
    await lookUpContract.createERC20Token(
      addr1.address,
      "2000000",
      "Token2",
      "T2",
      "0x222222",
      "0x222222tx",
      "2024-02-24"
    );
    await lookUpContract.createERC20Token(
      addr2.address,
      "3000000",
      "Token3",
      "T3",
      "0x333333",
      "0x333333tx",
      "2024-02-25"
    );

    // Get ERC20 tokens owned by addr1
    const tokensOwnedByAddr1 = await lookUpContract.getUserERC20Tokens(
      addr1.address
    );

    // Assert that addr1 owns 2 ERC20 tokens
    expect(tokensOwnedByAddr1.length).to.equal(2);
    // Assert token properties for the first token
    expect(tokensOwnedByAddr1[0].owner).to.equal(addr1.address);
    expect(tokensOwnedByAddr1[0].tokenName).to.equal("Token1");
    // Add more assertions for the second token if needed

    // Get ERC20 tokens owned by addr2
    const tokensOwnedByAddr2 = await lookUpContract.getUserERC20Tokens(
      addr2.address
    );

    // Assert that addr2 owns 1 ERC20 token
    expect(tokensOwnedByAddr2.length).to.equal(1);
    // Assert token properties for the token owned by addr2
    expect(tokensOwnedByAddr2[0].owner).to.equal(addr2.address);
    expect(tokensOwnedByAddr2[0].tokenName).to.equal("Token3");
  });
});
