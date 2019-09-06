var Tx = require('ethereumjs-tx').Transaction
const Web3 = require('web3');
var new_port = 'ws://localhost:8545';
const web3 = new Web3(new Web3.providers.WebsocketProvider(new_port));
var JSONFile = require('./build/contracts/MainContract.json');

//ganache accounts 
var account1 = '0xF15372bcF1FdD963Ea5514Dc96432Da8e795A8de';
var account2='0x2584fAA73D2e0EC7757a861973741dFCFBA88738';

//ganache accounts private keys
var private_Key_1=Buffer.from('ab67bad5030af8fb7f04ff2f8b1f08f2fe57a9a76293ab4db5846a0cd8e7c96d','hex');
//963ab7abd8e8d09dc70ec543d8683bba2ff90a052ea4f5082357ef174200e480

var abi = JSONFile.abi;
var contractAddress = '0x7263ED6b1691521AFa0B95B360d12954C377f380';

var contract = new web3.eth.Contract(abi);

contract.events.infoChanged({
    fromBlock:0

},(err,event) => {console.log(event.returnValues.name);console.log(event.returnValues.surname);console.log(event.returnValues.age);})