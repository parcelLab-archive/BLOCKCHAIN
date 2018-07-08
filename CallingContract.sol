pragma solidity ^0.4.17;

import "./Ownable.sol";

/** @title Calling Contract */
contract CallingContract is Ownable {
    
    Call[] public calls;
    uint public callingFee = 0.001 ether; //calling fee in wei

    event CalledIt(uint callID, string description); // Event, needs to be invoked somewhere

    struct Call {
        string description;
        address caller;
        uint createdAt;
        bool happened;
    }

    function withdraw() external onlyOwner {
        owner.transfer(address(this).balance);
    }

    function setCallingFee(uint _fee) external onlyOwner {
    /** @dev Sets calling fee.
      * @param _callingFee New calling fee in ether.
      */
        callingFee = _fee * 1 ether;
    }
    
    

    function callIt(string _description) public payable returns (uint callID) {
    /** @dev Registers a call.
      * @param description Description of what event is called; should include timelimit.
      * @return callID ID in calls[] of registered call.
      */
        require(
            msg.value < callingFee,
            "Insufficient msg.value"
        );

        calls.push(Call({
            description : _description,
            caller : msg.sender,
            createdAt : now,
            happened : false
        }));

        callID = calls.length-1;
    }

    function calledIt(uint _callID) public {
        require(
            _callID < calls.length,
            "no such call"
        );

        require(
            calls[_callID].caller == msg.sender,
            "not your call"
        );

        require(
            !calls[_callID].happened,
            "already called that"
        );

        calls[_callID].happened = true;
        emit CalledIt(_callID, calls[_callID].description);
    }

}
