require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess gloom system tragic name raise stereo erosion include private fringe gather'; 
let testAccounts = [
"0x8f192c2523e730130093e16711f724667add3746088a4e680b0e71692d29ceba",
"0x27d6603d4859e4c1f69d50c571bc37a33ee8d98aa601492d536d9d69b467be70",
"0x63dd786ab31e9a2c7d26b4f91bd5c5acb2feb3c97fdbf0c620fb73cd16bcb9b1",
"0x490cc29a9d83e8af20112e3ca7d19e943640a1a4b87c9d50d788991ae58b5f50",
"0x7ec59cf284e196bf953d9921905c3b233245bb9cfa470ec4701190273ef0958d",
"0xe6d6f279ada1510d861b6c102b82e4e7e203a52c69bc4487e59bf9d8addc132d",
"0x7eac8e38199261afc77a057f0df3eaf76a5c32bddb98efdadbc0a86fa9f1ae5c",
"0x3563af1643506d38d8da715fbd4df5ae4772d4558b48a33ca05c7e1862d3ed74",
"0x98b6a8ca213013a80cd5b143546bc3e6ac3da151ea12020933a54b6939810bed",
"0xdc6fc915144321e82884088cab8428cc89daec4dfcb867fc15e164ba21751137"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


