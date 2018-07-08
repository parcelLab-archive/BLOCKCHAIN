pragma solidity ^0.4.17;

import "./Ownable.sol";

contract CallingContract is Ownable {
    Call[] public calls;


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
        require(
            msg.value == callingFee,
            "Wrong calling fee"
        );

        calls.push(Call({
            description : _description,
            caller : mgsg.sender,
            createdAt : now,
        }));
    }

}
