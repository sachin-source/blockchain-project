export interface Poll {
	id : number; //12
	question : string; // which days of the week you like the most
	results : number[]; // [0,0,0,0,0,0,1]
	options : string[]; // ["sunday", "monday"......]
	thumbnail : string; // https://sachin.png
};

export interface Voter {
	id : string; // 0xsdfgsdffdllweq (hash value)
	voted : number[]; // [12]
}