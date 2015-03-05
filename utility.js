var Utility = function(sentence){

	this.countWords = function(){

		if(!sentence)
			return 0;

		return sentence.split(" ").length;
	}

}