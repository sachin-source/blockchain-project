export interface Poll extends PollForm{
	id : number; //12
	results : number[]; // [0,0,0,0,0,0,1]
	voted : boolean;
};

export interface PollForm {
	question : string; // which days of the week you like the most
	options : string[]; // ["sunday", "monday"......]
	thumbnail : string; // https://sachin.png
};

export interface Voter {
	id : string; // 0xsdfgsdffdllweq (hash value)
	voted : number[]; // [12]
}

export interface PollVote {
	id : number; // 0xsdfgsdffdllweq (hash value)
	vote : number; // [12]
}