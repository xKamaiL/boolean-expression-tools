export interface IPinItem {
	to: string;
	type: PinType;
	pin: string[];
	io: IOType;
}

export enum PinType {
	Bit,
	VectorTo,
	VectorDownTo
}

export enum IOType {
	Input,
	Output
}
