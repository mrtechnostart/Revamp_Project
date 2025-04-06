// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract EWasteManagement {
    address public owner;

    struct RepairRequest {
        uint256 id;
        string deviceName;
        string deviceIssue;
        string description;
        uint16 purchaseYear;
        address userAddress;
        bool isPaid;
        uint256 amountPaid;
        uint256 timestamp;
    }

    RepairRequest[] public repairRequests;

    mapping(uint256 => address) public requestToUser;
    mapping(address => uint256[]) public userRequests;

    event RequestCreated(
        uint256 indexed requestId,
        string deviceName,
        string deviceIssue,
        string description,
        uint16 purchaseYear,
        address indexed userAddress
    );

    event PaymentSent(
        uint256 indexed requestId,
        address indexed userAddress,
        uint256 amount
    );

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }

    function createRequest(
        string memory _deviceName,
        string memory _deviceIssue,
        string memory _description,
        uint16 _purchaseYear
    ) public {
        uint256 requestId = repairRequests.length;

        RepairRequest memory newRequest = RepairRequest({
            id: requestId,
            deviceName: _deviceName,
            deviceIssue: _deviceIssue,
            description: _description,
            purchaseYear: _purchaseYear,
            userAddress: msg.sender,
            isPaid: false,
            amountPaid: 0,
            timestamp: block.timestamp
        });

        repairRequests.push(newRequest);
        requestToUser[requestId] = msg.sender;
        userRequests[msg.sender].push(requestId);

        emit RequestCreated(
            requestId,
            _deviceName,
            _deviceIssue,
            _description,
            _purchaseYear,
            msg.sender
        );
    }

    function payUser(uint256 _requestId) public payable onlyOwner {
        require(_requestId < repairRequests.length, "Request does not exist");

        RepairRequest storage request = repairRequests[_requestId];
        require(!request.isPaid, "Payment already sent");
        require(msg.value > 0, "Payment amount must be greater than 0");

        address payable user = payable(request.userAddress);
        user.transfer(msg.value);

        request.isPaid = true;
        request.amountPaid = msg.value;

        emit PaymentSent(_requestId, request.userAddress, msg.value);
    }

    function getAllRequests() public view returns (RepairRequest[] memory) {
        return repairRequests;
    }

    function getUserRequests(address _user) public view returns (RepairRequest[] memory) {
        uint256[] memory requestIds = userRequests[_user];
        RepairRequest[] memory requests = new RepairRequest[](requestIds.length);

        for (uint256 i = 0; i < requestIds.length; i++) {
            requests[i] = repairRequests[requestIds[i]];
        }

        return requests;
    }

    function getMyRequests() public view returns (RepairRequest[] memory) {
        return getUserRequests(msg.sender);
    }

    // 🔍 Helper to get latest request ID for a user
    function getLatestRequestId(address _user) public view returns (uint256) {
        require(userRequests[_user].length > 0, "User has no requests");
        return userRequests[_user][userRequests[_user].length - 1];
    }
}
