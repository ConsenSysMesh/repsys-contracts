contract owned{
  function owned() {
    owner = msg.sender;
  }

  function newowner(address addr) onlyowner {
    owner = addr;
  }

  modifier onlyowner() {
    if(msg.sender==owner) _
  }

  address public owner;
}
