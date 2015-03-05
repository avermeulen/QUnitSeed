QUnit.test("Test the words are counted correctly", function (assert) {

	var utility = new Utility("This is just a basic qunit test");
	assert.equal(utility.countWords(), 7);
});

QUnit.test("Test the words are counted correctly - a demo failing", function (assert) {

	var utility = new Utility("This is just a basic qunit test");
	assert.equal(utility.countWords(), 6);
});

QUnit.test("Test the words are counted correctly when no sentence supplied", function (assert) {
	
	var utility = new Utility();

	assert.equal(utility.countWords(), 0);

});