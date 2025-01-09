const solc = require('solc');
const fs = require('fs');
const path = require('path');

// Path to the Solidity file
const filePath = path.resolve(__dirname, 'contracts', 'txMakerV2.sol');
const fileName = 'txMakerV2.sol';

// Read the Solidity file
const source = fs.readFileSync(filePath, 'utf8');

// Compile the Solidity file
const input = {
    language: 'Solidity',
    sources: {
        [fileName]: {
            content: source,
        },
    },
    settings: {
        outputSelection: {
            '*': {
                '*': ['abi', 'evm.bytecode'],
            },
        },
    },
};

const compiledCode = JSON.parse(solc.compile(JSON.stringify(input)));

// Check available contracts
console.log('Available contracts:', Object.keys(compiledCode.contracts[fileName]));

// Access specific contracts
const contractNames = Object.keys(compiledCode.contracts[fileName]);

// Access "MyContr" contract
const myContrName = "txMakerV2";
if (!compiledCode.contracts[fileName][myContrName]) {
    throw new Error(`Contract ${myContrName} not found in ${fileName}`);
}
const myContrBytecode = compiledCode.contracts[fileName][myContrName].evm.bytecode.object;
const myContrAbi = compiledCode.contracts[fileName][myContrName].abi;

const bytecodePath = path.join(__dirname, 'MyContractBytecode.bin');
fs.writeFileSync(bytecodePath, myContrBytecode);

const abiPath = path.join(__dirname, 'MyContractAbi.json');
fs.writeFileSync(abiPath, JSON.stringify(myContrAbi, null, '\t'));

// Output ABI and Bytecode
console.log(`MyContr Bytecode:`, myContrBytecode);
console.log(`MyContr ABI:`, myContrAbi);
