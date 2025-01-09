const { Web3 } = require('web3');
const fs = require('fs');
const path = require('path');

// Connect to the Ethereum network
const web3 = new Web3('http://127.0.0.1:8545/'); // Replace with your Ethereum node or provider URL

// Load ABI
const abiPath = path.join(__dirname, 'MyContractAbi.json'); // Update with the actual ABI file path
const abi = JSON.parse(fs.readFileSync(abiPath, 'utf8'));

// Contract address (update with the deployed address of your contract)
const contractAddressPath = path.join(__dirname, 'MyContractAddress.txt');
const contractAddress = fs.readFileSync(contractAddressPath, 'utf8').trim();

// Create contract instance
const txMakerV2 = new web3.eth.Contract(abi, contractAddress);

// Interaction functions
const interactWithContract = async () => {
    try {
        // Get available accounts
        const accounts = await web3.eth.getAccounts();
        const owner = accounts[0]; // Replace with your owner's account if needed

        console.log('Connected account:', owner);

        // Function 1: Check contract balance
        const balance = await txMakerV2.methods.getBalance().call();
        console.log('Contract balance:', web3.utils.fromWei(balance, 'ether'), 'ETH');

        // Function 2: Send Ether to the contract
        const sendEther = async (amountInEther) => {
            const value = web3.utils.toWei(amountInEther, 'ether');
            await web3.eth.sendTransaction({
                from: owner,
                to: contractAddress,
                value,
                gas: 200000,
            });
            console.log(`${amountInEther} ETH sent to the contract.`);
        };

        // await sendEther('32.87'); // Sends 0.1 ETH to the contract

        // Function 3: Withdraw all Ether (onlyOwner)
        const withdrawAllEther = async () => {
            const gasEstimate = await txMakerV2.methods.withdrawAll().estimateGas({ from: owner });
            const receipt = await txMakerV2.methods.withdrawAll().send({
                from: owner,
                gas: gasEstimate,
            });
            console.log('Withdrawal successful:', receipt.transactionHash);
        };

        // await withdrawAllEther();

    } catch (error) {
        console.error('Error interacting with contract:', error);
    }
};

// Execute the interaction
interactWithContract();
