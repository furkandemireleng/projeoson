var Tx = require('ethereumjs-tx').Transaction
var Web3 = require('web3')
var JSONFile = require('./build/contracts/MainContract.json');
var JSONFileSub= require('./build/contracts/SubToken.json');

let account;
let privateKey;
var web3;


const ACCOUNT_GANACHE = '0xF15372bcF1FdD963Ea5514Dc96432Da8e795A8de';
const PRIVATEKEY_GANACHE = Buffer.from('ab67bad5030af8fb7f04ff2f8b1f08f2fe57a9a76293ab4db5846a0cd8e7c96d','hex');

const ACCOUNT_ROPSTEN = '0xC41F7b463afA880CFda9A07a7713fC052984191C';
const PRIVATEKEY_ROPSTEN = Buffer.from('966DB6B3BDDBA4D7539EEF98073E135F01524A6746A89ED965F2FACB271FD336','hex');

const Network = {
    GANACHE : 'http://127.0.0.1:8545',
    ROPSTEN : 'https://ropsten.infura.io/v3/1a9bb467fd9e4f6c809eac78f730f565',
};

function networkChooser(NetworkName){
    switch(NetworkName){
        case Network.GANACHE:
            web3 = new Web3(Network.GANACHE);
            account = ACCOUNT_GANACHE;
            privateKey = PRIVATEKEY_GANACHE;
            break;
        case Network.ROPSTEN:
            web3 = new Web3(Network.ROPSTEN);
            account = ACCOUNT_ROPSTEN;
            privateKey = PRIVATEKEY_ROPSTEN;
            break;
        default:
            return;
    }
}

var contractCreation = function(cb, _jsonFile = JSONFile, _privateKey=privateKey, _account=account){
    var abi = JSONFile.abi;
    var bytecode = JSONFile.bytecode;
    
    contract = new web3.eth.Contract(abi);

    var contractPayload = contract.deploy({
        data :bytecode,
        arguments : []//create a  new asset
      }).encodeABI();
    
    
    web3.eth.getTransactionCount(account, (err,txCount) => {
        if(!err){
            txObject ={
                nonce: web3.utils.toHex(txCount), //value : 0x0
                value: 0x0,
                gasLimit: web3.utils.toHex('6721975'),//6.721.975 210.0000
                gasPrice: web3.utils.toHex(web3.utils.toWei('80','gwei')),
                data: contractPayload
            }
        }
        else {
            cb(err);
            return;
        }

        //cb(txObject)
        //2 sign transaction with my private key
        //tx = new Tx(txObject);
        tx = new Tx(txObject,{chain :'ropsten'});
        tx.sign(privateKey);

        serializedTransaction =tx.serialize();
        raw = '0x'+ serializedTransaction.toString('hex');

        //3 broadcast the transaction to ropsten
        web3.eth.sendSignedTransaction(raw, (err,txHash) => {
            cb(txHash);
        
            if(err){
                cb(err);
                return;
            }
        })
        
    }) 
}
var createNewContractFunction = function(cb,_jsonFile = JSONFileSub, _privateKey=privateKey, _account=account){
    var abi = JSONFile.abi;
    var subAbi = JSONFileSub.abi;
    //var bytecode = JSONFileSub.bytecode;

    contract = new web3.eth.Contract(abi);
    contractSub = new web3.eth.Contract(subAbi);

    web3.eth.getTransactionCount(account, (err,txCount) => {

        if(err){
            console.log(err);
            return;
        } 
        
        var createNewContractData = contract.methods.createNewContract("FurkanToken", "FT", 18, 99).encodeABI();
    
        txObject ={
            to:contractSub,
            nonce: web3.utils.toHex(txCount), //value : 0x0
            value: 0x0,//3 ether
            gasLimit: web3.utils.toHex('2100000'),
            gasPrice: web3.utils.toHex(web3.utils.toWei('70','gwei')),
            data: createNewContractData
        }
        //console.log(txObject);
        //2 sign transaction with my private key
    
        tx = new Tx(txObject,{chain :'ropsten'});
        tx.sign(privateKey);

        serializedTransaction =tx.serialize();
        raw = '0x'+ serializedTransaction.toString('hex');

        //3 broadcast the transaction to ropsten
        web3.eth.sendSignedTransaction(raw, (err,txHash) => {
            cb(err,txHash);
            // if(err){
            //     console.log('your err is : ',err);
            //     return;
            // }
            
        })
        
    }) 
}
var transferFunction = function(cb,_contractAddress = contractAddress , _jsonFile = JSONFile, _privateKey=privateKey, _account=account){
    
    var abi = JSONFile.abi;
    
    contract = new web3.eth.Contract(abi);

   
    web3.eth.getTransactionCount(account, (err,txCount) => {
        
        var transferData = contract.methods.transfer(_contractAddress, _account, '0x2584fAA73D2e0EC7757a861973741dFCFBA88738', 10).encodeABI();
        if(err){
            cb(err);
            return;
        }
        txObject ={
            to:_contractAddress,
            nonce: web3.utils.toHex(txCount), //value : 0x0
            value: 0x0,//3 ether
            gasLimit: web3.utils.toHex('2100000'),
            gasPrice: web3.utils.toHex(web3.utils.toWei('70','gwei')),
            data: transferData
        }
        //console.log(txObject);
        //2 sign transaction with my private key
    
        tx = new Tx(txObject,{chain :'ropsten'});
        tx.sign(privateKey);

        serializedTransaction =tx.serialize();
        raw = '0x'+ serializedTransaction.toString('hex');

        //3 broadcast the transaction to ropsten
        web3.eth.sendSignedTransaction(raw, (err,txHash) => {
            cb(err,txHash);
            // if(err){
            //     console.log('your err is : ',err);
            //     return;
            // }
            
        })
        
    }) 

}


var contract_info = function(cb,_txHash=txHash){
    web3.eth.getTransactionReceipt(_txHash).then(function(data){
        cb(undefined, data);//datayi aldik
    }).catch(function(err){
        cb(err, undefined);//error'u aldik
    });
}
var balanceofFunction = function(cb,_contractAddress = contractAddress, _jsonFile = JSONFile){
    var abi = JSONFile.abi;

    var contract = new web3.eth.Contract(abi,_contractAddress);

    contract.methods.balanceOf(_contractAddress,_account).call().then(function(_data){
        cb(undefined,_data);
    }).catch(function(err){
        cb(err,undefined)
    
    });
}


var nameFunction = function(cb,_contractAddress = contractAddress, _jsonFile = JSONFile){
    var abi = JSONFile.abi;

    var contract = new web3.eth.Contract(abi,_contractAddress);

    contract.methods.name(_contractAddress).call().then(function(_data){
        cb(undefined,_data);
    }).catch(function(err){
        cb(err,undefined)
    
    });
}
var symbolFunction = function(cb,_contractAddress = contractAddress, _jsonFile = JSONFile){
    var abi = JSONFile.abi;

    var contract = new web3.eth.Contract(abi,_contractAddress);

    contract.methods.symbol().call().then(function(_data){
        cb(undefined,_data);
    }).catch(function(err){
        cb(err,undefined)
    
    });
}
var decimalFunction = function(cb,_contractAddress = contractAddress, _jsonFile = JSONFile){
    var abi = JSONFile.abi;

    var contract = new web3.eth.Contract(abi,_contractAddress);

    contract.methods.decimals().call().then(function(_data){
        cb(undefined,_data);
    }).catch(function(err){
        cb(err,undefined)
    
    });
}

var totalSupplyFunction = function(cb,_contractAddress = contractAddress, _jsonFile = JSONFile){
    var abi = JSONFile.abi;

    var contract = new web3.eth.Contract(abi,_contractAddress);

    contract.methods.totalSupply().call().then(function(_data){
        cb(undefined,_data);
    }).catch(function(err){
        cb(err,undefined)
    
    });
}


module.exports.Network = Network;
module.exports.networkChooser = networkChooser;

module.exports.contractCreation = contractCreation;
module.exports.createNewContract = createNewContractFunction;

module.exports.contractInformation = contract_info;
module.exports.transfer = transferFunction;

module.exports.balanceOf = balanceofFunction;

module.exports.name =nameFunction;
module.exports.symbol =symbolFunction;
module.exports.decimals =decimalFunction;
module.exports.totalSupply =totalSupplyFunction;
