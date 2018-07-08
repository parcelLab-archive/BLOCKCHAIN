pragma solidity ^0.4.17;

import "./Ownable.sol";

/** @title Calling Contract */
contract CallingContract is Ownable {
    Call[] public calls;

    uint public callingFee = 0.001 ether;

    event SomeoneCalledIt(callID); // Event, needs to be invoked somewhere

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
    /** @dev Registers a call.
      * @param description Description of what event is called; should include timelimit.
      * @return callID ID in calls[] of registered call.
      */
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
