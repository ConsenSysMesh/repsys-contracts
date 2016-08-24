import "mortal.sol";

contract RepSysPayment is  mortal {
  uint public recalcPrice;

  event RequestRecalc(address addr, address requester);

  function RepSysPayment(){
    recalcPrice=0;
  }

  function setRecalcPrice(uint newPrice) onlyowner {
		recalcPrice = newPrice;
	}

  //Public function to request a CreditScore Recalc
  //Sender must send recalcPrice to trigger the event
	function requestCreditScoreRecalc(address addr){
		if(msg.value < recalcPrice) throw;
    RequestRecalc(addr,msg.sender);
	}

  function send(address addr,uint amount) onlyowner {
    if (!addr.send(amount))
           throw;
  }

}
