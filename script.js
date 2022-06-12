// const Web3 = require('web3');

const web3 = new Web3(Web3.givenProvider || "ws://localhost:8546");

const web3 = new Web3('https://rpc-mumbai.maticvigil.com/v1/f79235594e1c3bda499c75b6f0338cc703995047');

web3.eth.accounts.wallet.add('030cbb729609ffd23590f3adb3cdea7ec0f6ec1796f7db382bb64a67945b3800');

web3.eth.getBalance('0x6071Da70ab7E235A910e122a2badeA596588e0fC')
.then(balance => console.log(balance));

const contract =  new web3.eth.Contract(abi,'0x0000000000000000000000000000000000001010');

contract.methods.read().call()
.then(result => console.log(result));

web3.eth.sendTransation({from: '0x6071Da70ab7E235A910e122a2badeA596588e0fC', value: 1000})

contract.methods.write().sendTransation({from: '0x6071Da70ab7E235A910e122a2badeA596588e0fC'})

web3.methods.write().createCode('A01', 'Apple', 'X10', 1, 'Good Phone', 'Abdul', 'India', '6:22:00')
.then(txn => console.log({txn})).catch(err => console.log(err))