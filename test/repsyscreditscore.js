contract('RepSysCreditScore', function(accounts) {
  it("should store a crediscore", function(done) {
    var csContract = RepSysCreditScore.deployed();
    var cs={
      address : accounts[1],
      letter  : 'A+',
      number  : 1450,
      expire  : 12345678,
      ipfsHash: 'Quemchi'
    }

    csContract.setScore(cs.address,cs.letter,cs.number,cs.expire,cs.ipfsHash)
    .then(function(tx) {
      return csContract.getScoreLetter.call(cs.address);
    }).then(function (letter){
      assert.equal(web3.toAscii(letter), cs.letter, "stored letter mismatch");
      return csContract.getScoreNumber.call(cs.address);
    }).then(function (number){
      assert.equal(number, cs.number, "stored number mismatch");
      return csContract.getScoreExpire.call(cs.address);
    }).then(function (expire){
      assert.equal(expire, cs.expire, "stored expire mismatch");
      return csContract.getScoreIpfsHash.call(cs.address);
    }).then(function (ipfsHash){

      assert.equal(web3.toAscii(ipfsHash), cs.ipfsHash, "stored ipfsHash mismatch");
    }).then(done).catch(done);
  });


  it("should allow only owners", function(done) {
    var csContract;
    //console.log(accounts[0]);
    //console.log(accounts[1]);
    RepSysCreditScore.new({from: accounts[0]})
    .then(function(_csContract){
      csContract = _csContract;
      return csContract.owner.call();
    })
    .then(function(_owner){
      //console.log(_owner);
      return csContract.newowner(accounts[1]);
    })
    .then(function(tx) {
      return csContract.setScore(accounts[2],"Z",6789,12345678,"Quemchi",{from: accounts[1]});
    })
    .then(function(tx2){
      return csContract.getScoreNumber.call(accounts[2]);
    })
    .then(function(_number){
      assert.equal('6789',_number.toString(),"number dont match");
      //console.log(tx);
    }).then(done).catch(done);

  });

});
