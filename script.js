const contractAddress = "0x4F72E5488493E4e7449017018897093C324D89c9"; // REPLACE WITH YOUR ADDRESS
const adminWalletAddress = "0x6071Da70ab7E235A910e122a2badeA596588e0fC"; // REPLACE WITH YOUR ADDRESS
const adminPrivateKey = "030cbb729609ffd23590f3adb3cdea7ec0f6ec1796f7db382bb64a67945b3800"; // REPLACE WITH YOUR PRIVATE KEY

// DO NOT TOUCH ABI
const ABI = [
  {
    constant: false,
    inputs: [
      {
        name: "_code",
        type: "string",
      },
      {
        name: "_hashedEmailRetailer",
        type: "string",
      },
    ],
    name: "addRetailerToCode",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: true,
    stateMutability: "payable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_code",
        type: "string",
      },
      {
        name: "_oldCustomer",
        type: "string",
      },
      {
        name: "_newCustomer",
        type: "string",
      },
    ],
    name: "changeOwner",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: true,
    stateMutability: "payable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_code",
        type: "string",
      },
      {
        name: "_brand",
        type: "string",
      },
      {
        name: "_model",
        type: "string",
      },
      {
        name: "_status",
        type: "uint256",
      },
      {
        name: "_description",
        type: "string",
      },
      {
        name: "_manufactuerName",
        type: "string",
      },
      {
        name: "_manufactuerLocation",
        type: "string",
      },
      {
        name: "_manufactuerTimestamp",
        type: "string",
      },
    ],
    name: "createCode",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: true,
    stateMutability: "payable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_hashedEmail",
        type: "string",
      },
      {
        name: "_name",
        type: "string",
      },
      {
        name: "_phone",
        type: "string",
      },
    ],
    name: "createCustomer",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: true,
    stateMutability: "payable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_hashedEmail",
        type: "string",
      },
      {
        name: "_retailerName",
        type: "string",
      },
      {
        name: "_retailerLocation",
        type: "string",
      },
    ],
    name: "createRetailer",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: true,
    stateMutability: "payable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_code",
        type: "string",
      },
      {
        name: "_retailer",
        type: "string",
      },
      {
        name: "_customer",
        type: "string",
      },
    ],
    name: "initialOwner",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: true,
    stateMutability: "payable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_code",
        type: "string",
      },
      {
        name: "_customer",
        type: "string",
      },
    ],
    name: "reportStolen",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: true,
    stateMutability: "payable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_customer",
        type: "string",
      },
    ],
    name: "getCodes",
    outputs: [
      {
        name: "",
        type: "string[]",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_code",
        type: "string",
      },
    ],
    name: "getCustomerDetails",
    outputs: [
      {
        name: "",
        type: "string",
      },
      {
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_code",
        type: "string",
      },
    ],
    name: "getNotOwnedCodeDetails",
    outputs: [
      {
        name: "",
        type: "string",
      },
      {
        name: "",
        type: "string",
      },
      {
        name: "",
        type: "uint256",
      },
      {
        name: "",
        type: "string",
      },
      {
        name: "",
        type: "string",
      },
      {
        name: "",
        type: "string",
      },
      {
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_code",
        type: "string",
      },
    ],
    name: "getOwnedCodeDetails",
    outputs: [
      {
        name: "",
        type: "string",
      },
      {
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_code",
        type: "string",
      },
    ],
    name: "getRetailerDetails",
    outputs: [
      {
        name: "",
        type: "string",
      },
      {
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
];

const web3 = new Web3(Web3.givenProvider || "ws://localhost:8546");
let userWallet = "";

// Connect metamask to browser, basically injecting web3 to browser.
window.ethereum
  .request({ method: "eth_requestAccounts" })
  .then((account) => (userWallet = account[0]))
  .catch((err) => {
    console.error(err);
  });

web3.eth.accounts.wallet.add(adminPrivateKey);

const contract = new web3.eth.Contract(ABI, contractAddress);

// Define function like this to make Contract calls
const contractCaller = async () => {
  try {
    // get method instance
    const method = contract.methods.createRetailer("A01", "Apple", "X10");

    // estimate gas (only for write functions, not required for view functions)
    const gasEstimate = await method.estimateGas({
      from: adminWalletAddress,
    });

    // send transaction (.send() for write functions, .call() for view functions)
    const receipt = await method.send({
      from: adminWalletAddress,
      gas: gasEstimate,
    });

    // transaction receipt
    console.log({ receipt });
  } catch (err) {
    console.log({ err });
  }
};

contractCaller();