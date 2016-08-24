# RELEASES

- 0.1.0: RepSysPayment allow any payment above price


## Release procedure

We are using git flow. So the release procedure is

0. Find next version number: `git tag`
0. `git flow release start <version>`
0. Pump version in `package.json` and commit
0. Start and update consensysnet blockchain `geth ...`
0. Unlock deployer account
0. Deploy contracts on consensysnet: `truffle migrate --network consensysnet`
0. Check deployment with `truffle networks`
0. Update RepSysCreditScore and RepSysPayment contract sources in https://test.ether.camp/account/_contractAddress
