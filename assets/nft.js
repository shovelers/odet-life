import ContractABI from "./MyNFT.js"

var provider = "https://polygon-mumbai.g.alchemy.com/v2/7IxYoiFAb82CcSAg-M553cRUfCCu7zjn";
var web3Provider = new Web3.providers.HttpProvider(provider);
var web3 = new Web3(web3Provider);

const contract = new web3.eth.Contract(ContractABI, "0xdA341CEB180cAca6C6457093d846c4086c3CB064");

contract.methods.tokenURI(3).call().then((result) => {
  console.log("tokenURI: ",result);
});