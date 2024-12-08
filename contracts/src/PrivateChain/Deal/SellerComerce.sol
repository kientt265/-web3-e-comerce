// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

contract SellerComerce {
    uint cerSellerId = 10000;
    mapping (address => Seller) public sellers;
    mapping (string => uint ) public quantityPerItem;
    mapping (address => mapping (string => uint8)) ratingPerTypeItems;

    struct Seller{
        string shopName;
        string typeItemsNameSell;
        string email;
        uint cerSellerId;
        address addressWallet;
        string[] idTypeItems;
        uint8 rating;
    }

    function createSeller(string memory _shopName, string memory _typeItemsNameSell, string memory _email) public {
        string[] memory emptyArray;
        sellers[msg.sender] = Seller(_shopName, _typeItemsNameSell, _email,  cerSellerId, msg.sender, emptyArray, 0 );
    }

    function uploadItems(string memory _hashItems, uint _quantityPerItem) public {
        sellers[msg.sender].idTypeItems.push(_hashItems);
        quantityPerItem[_hashItems] = _quantityPerItem;
        ratingPerTypeItems[msg.sender][_hashItems] = 0;
    }
    function addQuantifyItems(string memory _hashItems, uint _addQuantityItems) public {
        for(uint i = 0; i < sellers[msg.sender].idTypeItems.length; i++) {
            if(keccak256(abi.encodePacked(sellers[msg.sender].idTypeItems[i])) == keccak256(abi.encodePacked(_hashItems))){
                quantityPerItem[_hashItems] += _addQuantityItems;
            }
        }
    }

}