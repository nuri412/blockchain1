// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract txMakerV2 {
    // Owner address
    address public owner;

    // Event to log received Ether
    event Received(address indexed sender, uint amount);

    // Event to log withdrawals
    event Withdrawn(address indexed owner, uint amount);

    // Constructor to set the owner
    constructor() {
        owner = msg.sender;
    }

    // Modifier to restrict access to owner-only functions
    modifier onlyOwner() {
        require(msg.sender == owner, "Caller is not the owner");
        _;
    }

    // The receive function to accept Ether with no data
    receive() external payable {
        emit Received(msg.sender, msg.value);
    }

    // Fallback function to accept Ether with data
    fallback() external payable {
        emit Received(msg.sender, msg.value);
    }

    // Function for the owner to withdraw all Ether
    function withdrawAll() external onlyOwner {
        uint balance = address(this).balance;
        require(balance > 0, "No Ether available for withdrawal");

        (bool success, ) = owner.call{value: balance}("");
        require(success, "Withdrawal failed");

        emit Withdrawn(owner, balance);
    }

    // Function to get the contract balance
    function getBalance() external view returns (uint) {
        return address(this).balance;
    }
}
