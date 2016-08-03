module.exports = function(deployer) {

  deployer.deploy(RepSysCreditScore).then(function() {
    return RepSysCreditScore.deployed().newowner('0x1c826e094dbe0fae04633ce6b94bb89ad78bb557');
  }).then(function(tx){
    return RepSysCreditScore.deployed().owner.call();
  }).then(function(_owner){
    console.log("    RepSysCreditScore.owner:"+_owner);
  });

  deployer.deploy(RepSysPayment);
};
