export const contractAdr = "0xD24EC197635f9c03ab0A39dE6f932da6e3420c03"
export const contractABI = [
    'function createDeal(string memory _productId, uint _amount) payable',
    'function completeDeal(uint _dealId)',
    'function getDealId(address _addressUser) view returns(uint)',
    'event DealState(uint dealId, address buyer, string productId, uint amount, uint value, bool isCompleted)',
    'event DealConfirmed(uint dealId)',
    'event NewQuantityProduct(string productID, uint price, uint quantity)',
    'function createSeller(string memory _shopName, string memory _email)',
    'function uploadItems(string memory _productID, uint _quantityPerItem, uint _pricePerProduct)',
    'function getDetailProduct(string memory _productID) view returns(uint, uint)',
    'function SignUp(string memory _name, uint8 _age, string memory _email)',
    'event NewUser(address _address)',
    'event NewProduct(string  _productID, uint _quantityPerItem, uint _pricePerProduct)'
      ]