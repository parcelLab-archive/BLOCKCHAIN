pragma solidity ^0.4.17;

import "./Ownable.sol";

// import "./SafeMath.sol";

contract CallingContract is Ownable {
    Call[] public calls;

    // using SafeMath for uint;

    // ownership of contract asd

    uint public callingFee = 0.001 ether;

    function withdraw() external onlyOwner {
        owner.transfer(this.balance);
    }

    function setCallingFee(uint _fee) external onlyOwner {
        callingFee = _fee;
    }

    // content
    
    struct Call {
        string description;
        address caller;
        uint createdDate;
    }

    function callIt(string _description) public payable returns (uint callID) {
        // require(msg.value == callingFee);

        callID = calls.length++;
        Call storage call = calls[callID];
        call.description = _description;
        call.caller = msg.sender;
        call.createdDate = now;
    }

}
