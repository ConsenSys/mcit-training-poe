var Proof = artifacts.require("./Proof.sol");

contract("Proof", function(accounts){
	it("Store File Details", async function() {
		let Proof_Instance = await Proof.deployed();
		await Proof_Instance.set("ConsenSys", "1D4B63C24FD8F5BF14E407B6CE5E5121242361AA218B31DEEE52C2AFE3B9F606");

        let fileDetails = await Proof_Instance.get.call("1D4B63C24FD8F5BF14E407B6CE5E5121242361AA218B31DEEE52C2AFE3B9F606");

		assert.equal("ConsenSys", fileDetails[1]);
    });
})
