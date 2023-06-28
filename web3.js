const { ProviderWrapper } = require("hardhat/plugins");
var Contract = require("web3-eth-contract");
const { Web3 } = require("web3");

var web3 = new Web3("http://127.0.0.1:8545/");

const address = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";

const abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "b",
        type: "uint256",
      },
    ],
    name: "sums",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

// const getAccounts = async () => {
//   const accounts = await web3.eth.getAccounts();
//   console.log(accounts);
// };

// getAccounts();

// web3.eth.getGasPrice().then(console.log); // Get GasPrice

// web3.eth.getBlockNumber().then(console.log);

const init = async () => {
  let contract = await new web3.eth.Contract(abi, address);

  const sum = await contract.methods.sums(2, 3).call();
  console.log(sum);
};

init();
