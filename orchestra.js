var API = require('./manage.js');

var myFunc = function(err,data){
    if(err){
        console.log(err);
        return;
    }
    console.log(data); 
}

API.networkChooser(API.Network.GANACHE);
//API.networkChooser(API.Network.ROPSTEN);


// API.contractCreation(function(err, _data) {
//     data = _data;
    
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(_data);
// }, require('./build/contracts/MainContract.json'),
// Buffer.from('ab67bad5030af8fb7f04ff2f8b1f08f2fe57a9a76293ab4db5846a0cd8e7c96d','hex'),
// '0xF15372bcF1FdD963Ea5514Dc96432Da8e795A8de');

API.createNewContract(function(err, _data) {
    data = _data;
    
    if(err){
        console.log(err);
        return;
    }
    console.log(_data);
},'0xDeDbB36387f42FEB764056d1D52391F0A6B15D04'//contract address
,require('./build/contracts/MainContract.json'),
Buffer.from('ab67bad5030af8fb7f04ff2f8b1f08f2fe57a9a76293ab4db5846a0cd8e7c96d','hex'),
'0xF15372bcF1FdD963Ea5514Dc96432Da8e795A8de');

// API.contractInformation(function(err,_data){
//     data = _data;
    
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(_data.contractAddress);
// },'0x2b6d1d868222812f03738372b6858025d551fc4902c6accddc5dd7343bbdb7eb');//txhash

// API.setUser(function(err,_data){
//     data = _data;

//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(data);
// }, '0xDeDbB36387f42FEB764056d1D52391F0A6B15D04',//contractaddress
// require('./build/contracts/MainContract.json'),
// Buffer.from('963ab7abd8e8d09dc70ec543d8683bba2ff90a052ea4f5082357ef174200e480','hex'),
// '0x2584fAA73D2e0EC7757a861973741dFCFBA88738');

// API.setUserbyAdmin(function(err,_data){
//     data = _data;

//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(data);
// }, '0xDeDbB36387f42FEB764056d1D52391F0A6B15D04',//contractaddress
// require('./build/contracts/MainContract.json'),
// Buffer.from('ab67bad5030af8fb7f04ff2f8b1f08f2fe57a9a76293ab4db5846a0cd8e7c96d','hex'),
// '0xF15372bcF1FdD963Ea5514Dc96432Da8e795A8de');

// API.getUser(function(err,_data){
//     data= _data;
    
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(data);
// }, '0xDeDbB36387f42FEB764056d1D52391F0A6B15D04',//contractaddress
// require('./build/contracts/MainContract.json'));

// API.getBalanceofAccount(function(err,_data){
//     data= _data;
    
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(data);
// }, '0xDeDbB36387f42FEB764056d1D52391F0A6B15D04',//accountaddress
// require('./build/contracts/MainContract.json'));

// API.getBalance(function(err,_data){
//     data= _data;
    
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(data);
// }, '0xDeDbB36387f42FEB764056d1D52391F0A6B15D04',//contractaddress
// require('./build/contracts/MainContract.json'));

// API.name(function(err,_data){
//     data = _data;

//     if(err){
//         console.log(err);
//         returnl; 
//     }
//     console.log(data);
// },'0xDeDbB36387f42FEB764056d1D52391F0A6B15D04',//contractaddress
// require('./build/contracts/MainContract.json'));

// API.symbol(function(err,_data){
//     data = _data;

//     if(err){
//         console.log(err);
//         return; 
//     }
//     console.log(data);
// },'0xDeDbB36387f42FEB764056d1D52391F0A6B15D04',//contractaddress
// require('./build/contracts/MainContract.json'));

// API.decimals(function(err,_data){
//     data = _data;

//     if(err){
//         console.log(err);
//         returnl; 
//     }
//     console.log(data);
// },'0xDeDbB36387f42FEB764056d1D52391F0A6B15D04',//contractaddress
// require('./build/contracts/MainContract.json'));

// API.burn(function(err,_data){
//     data = _data;

//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(data);
// }, '0xDeDbB36387f42FEB764056d1D52391F0A6B15D04',//contractaddress
// require('./build/contracts/MainContract.json'),
// Buffer.from('ab67bad5030af8fb7f04ff2f8b1f08f2fe57a9a76293ab4db5846a0cd8e7c96d','hex'),
// '0xF15372bcF1FdD963Ea5514Dc96432Da8e795A8de');

// API.totalSupply(function(err,_data){
//     data = _data;

//     if(err){
//         console.log(err);
//         return; 
//     }
//     var int_deger = parseInt(_data);
//     console.log(int_deger);
// },'0xDeDbB36387f42FEB764056d1D52391F0A6B15D04',//contractaddress
// require('./build/contracts/MainContract.json'));

// API.transfer(function(err,_data){
//     data = _data;

//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(data);
// }, '0xDeDbB36387f42FEB764056d1D52391F0A6B15D04',//contractaddress
// require('./build/contracts/MainContract.json'),
// Buffer.from('ab67bad5030af8fb7f04ff2f8b1f08f2fe57a9a76293ab4db5846a0cd8e7c96d','hex'),
// '0xF15372bcF1FdD963Ea5514Dc96432Da8e795A8de');

// API.owner(function(err,_data){
//     data = _data;

//     if(err){
//         console.log(err);
//         return; 
//     }
    
//     console.log(data);
// },'0xDeDbB36387f42FEB764056d1D52391F0A6B15D04',//contractaddress
// require('./build/contracts/MainContract.json'));


// API.isOwner(function(err,_data){
//     data = _data;

//     if(err){
//         console.log(err);
//         return; 
//     }
    
//     console.log(data);
// },'0xDeDbB36387f42FEB764056d1D52391F0A6B15D04',//contractaddress
// require('./build/contracts/MainContract.json'));

