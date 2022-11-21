const BoxV2 = artifacts.require("BoxV2");
const MyProxyAdmin = artifacts.require("MyProxyAdmin");
//const MYPROXYADMIN_ADDRESS = {MyProxyAdmin address};
const MYPROXYADMIN_ADDRESS = "0x0A716EA4b418d571D4eb844Efd35282C8D9F492f";
//const MYPROXY_ADDRESS = {MyProxy address};
const MYPROXY_ADDRESS = "0x7FCD5D50849edA7f0419d5E3a753bf4F9CeBa49e";

module.exports = async (deployer) => {
    await deployer.deploy(BoxV2);
    const boxV2 = await BoxV2.deployed();

    console.log("Upgrading...");
    const myProxyAdmin = await MyProxyAdmin.at(MYPROXYADMIN_ADDRESS);
    await myProxyAdmin.upgrade(MYPROXY_ADDRESS, boxV2.address);
    console.log("Upgraded");
};