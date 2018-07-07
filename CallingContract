pragma solidity ^0.4.0;

contract CallingContract {
    Call[] public calls;
    
    function callIt(string _description) public returns (uint callID) {
        callID = calls.length++;
        Call storage call = calls[callID];
        call.description = _description;
        call.caller = msg.sender;
        call.createdDate = now;
    }
    
    
    struct Call {
        string description;
        address caller;
        uint createdDate;
    }
}
