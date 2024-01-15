function firstNonRepeatedChar(str) {
 // Write your code here
	const freq = {}
	for(const ch of inputStr){
		freq[ch] = (freq[ch] || 0)+1
	}
	 for(const ch of inputStr){
		 if(freq[ch]===1){
			 return ch
		 }
	 }
	  return null;
}
// const input = prompt("Enter a string");
// alert(firstNonRepeatedChar(input)); 
