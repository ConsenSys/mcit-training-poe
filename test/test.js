// This file written in JS.

var Proof = artifacts.require("./Proof.sol");

contract("Proof", function(accounts){
	// This is the first test case.
	it("Store File Details", async function() {
		// The proof should be deployed to do the test.
		let Proof_Instance = await Proof.deployed();
		// The second parameter is a hash of file.
		await Proof_Instance.set("ConsenSys", "1D4B63C24FD8F5BF14E407B6CE5E5121242361AA218B31DEEE52C2AFE3B9F606");

		// Calling the function to read info.
        let fileDetails = await Proof_Instance.get.call("1D4B63C24FD8F5BF14E407B6CE5E5121242361AA218B31DEEE52C2AFE3B9F606");

		// Print the fileDetails in log.
		assert.equal("ConsenSys", fileDetails[1]);
    });
})
