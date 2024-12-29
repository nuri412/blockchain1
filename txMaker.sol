// SPDX-License-Identifier: MIT
pragma solidity ^0.8.14;

contract MyContr{
    // Event to log received Ether
    event Received(address sender, uint amount);

    // The receive function is called when the contract is sent Ether with no data
    receive() external payable {
        emit Received(msg.sender, msg.value);
    }

    // Fallback function is used when the contract is sent Ether with data or no matching function exists
    fallback() external payable {
        emit Received(msg.sender, msg.value);
    }
    function withdraw(address payable to, uint amount) external {
        to.call{value: amount}("");
    }

    function getBalance() external view returns(uint) {
        return address(this).balance;
    }
}

contract EthSender{
// Function to send Ether to a specific address
    function sendEther(address payable _to) public payable {
        require(msg.value > 0, "Must send some Ether");
        (bool sent, ) = _to.call{value: msg.value}("");
        require(sent, "Failed to send Ether");
    }

}