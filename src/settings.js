module.exports = {
  calledItContractAddress: '0x7e26024f100dbbc9781f14e2d4e5cba49a3f9081',
  contractInterface: [{ 'constant': false, 'inputs': [{ 'name': '_fee', 'type': 'uint256' }], 'name': 'setCallingFee', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' }, { 'constant': false, 'inputs': [], 'name': 'withdraw', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' }, { 'constant': false, 'inputs': [{ 'name': '_description', 'type': 'string' }], 'name': 'callIt', 'outputs': [{ 'name': 'callID', 'type': 'uint256' }], 'payable': true, 'stateMutability': 'payable', 'type': 'function' }, { 'constant': true, 'inputs': [], 'name': 'owner', 'outputs': [{ 'name': '', 'type': 'address' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': true, 'inputs': [{ 'name': '', 'type': 'uint256' }], 'name': 'calls', 'outputs': [{ 'name': 'description', 'type': 'string' }, { 'name': 'caller', 'type': 'address' }, { 'name': 'createdDate', 'type': 'uint256' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': false, 'inputs': [{ 'name': 'newOwner', 'type': 'address' }], 'name': 'transferOwnership', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' }, { 'anonymous': false, 'inputs': [{ 'indexed': true, 'name': 'previousOwner', 'type': 'address' }, { 'indexed': true, 'name': 'newOwner', 'type': 'address' }], 'name': 'OwnershipTransferred', 'type': 'event' }]
}