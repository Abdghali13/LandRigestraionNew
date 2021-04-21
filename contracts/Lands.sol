// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <0.7.0;

contract Lands {
    struct Land {
        address municipal;
        uint256 id;
        uint256 from;
        uint256 to;
        uint256 ammount;
    }
    mapping(uint256 => Land) public lands;
    mapping(address => Land) public landsByAddress;
    uint256 public landsCounter;

    // mapping (address => mapping (uint => Land)) public landsByAddress;

    constructor() public {
        landsCounter = 0;
    }

    function registerLand(
        address _municipal,
        uint256 _id,
        uint256 _from,
        uint256 _to,
        uint256 _ammount
    ) public {
        landsCounter++;
        lands[landsCounter] = Land(_municipal, _id, _from, _to, _ammount);

        landsByAddress[_municipal] = Land(
            _municipal,
            _id,
            _from,
            _to,
            _ammount
        );
        //  landsByAddress[_municipal][landsCounter] = Land(_municipal, _id, _from, _to, _ammount);
    }

    function getContractByAddress(address _municipal)
        public
        view
        returns (
            address,
            uint256,
            uint256,
            uint256,
            uint256
        )
    {
        // for (uint256 i = 1; i < landsCounter; i++) {
        //     if (lands[i].municipal == _municipal) {
                return (
                    landsByAddress[_municipal].municipal,
                    landsByAddress[_municipal].id,
                    landsByAddress[_municipal].from,
                    landsByAddress[_municipal].to,
                    landsByAddress[_municipal].ammount
                );
        //     }
        // }
    }
}
