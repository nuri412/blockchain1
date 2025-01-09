# Sample Hardhat Project
Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Lock.js
```
***************************************************************************************************************
                                                                                                            
&       &   &*&         &*&*&*&*&*&*   &*&*&*&*&   &*&*&*&   &*&*&*&*   &       &  &*&*&*&*&   &*&*&-_
&       &   &*&             *&         &*          &     &   &       *  &       &  &*          &*     *
&       &   &*&             *&         &*          &     &   &          &       &  &*          &*    _*
&*&*&*&*&   &*&             *&         &*&*&*&*&   &*&*&*&   &          &*&*&*&*&  &*&*&*&*&   &*&*-_
&       &   &*&             *&         &*          &     &   &          &       &  &*          &*   *&
&       &   &*&             *&         &*          &     &   &      _*  &       &  &*          &*    *&
&       &   &*&             *&         &*&*&*&*&   &     &   &*&*&*&*   &       &  &*&*&*&*&   &*     &*


***************************************************************************************************************


OVERWIEW

*****************************************

TxMakerV2 is a Solidity smart contract designed to manage Ether securely. It includes functionality for receiving Ether, checking the contract balance, and allowing the contract owner to withdraw all Ether. This project also includes Web3.js scripts for deploying and interacting with the contract.


*****************************************

FEATURES

---- Smart Contract

> Receive Ether: Accept Ether via direct transfers or with data.

> Withdraw All Ether: Allow only the owner to withdraw all Ether in the contract.

> Check Balance: Query the current balance of the contract.

----- Web3.js Scripts

> Compile: Compiles the solidity code.

> Deploy: Deploy the TxMakerV2 contract to the blockchain (Hardhat Testnet).

> Interact: Perform actions such as checking the balance, sending Ether, and withdrawing Ether.


*****************************************

LICENSE

This project is licensed under the MIT License. See the LICENSE file for details.