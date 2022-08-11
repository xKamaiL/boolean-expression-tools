import type { IPinItem } from './index';
import { IOType, PinType } from './index';

export const pinList: IPinItem[] = [
	{
		to: 'hex0',
		pin: ['PIN_U21', 'PIN_V21', 'PIN_W22', 'PIN_W21', 'PIN_Y22', 'PIN_Y21', 'PIN_AA22'],
		type: PinType.VectorDownTo,
		io: IOType.Output
	},
	{
		to: 'hex1',
		pin: ['PIN_AA20', 'PIN_AB20', 'PIN_AA19', 'PIN_AA18', 'PIN_AB18', 'PIN_AA17', 'PIN_U22'],
		type: PinType.VectorDownTo,
		io: IOType.Output
	},
	{
		to: 'hex2',
		pin: ['PIN_Y19', 'PIN_AB17', 'PIN_AA10', 'PIN_Y14', 'PIN_V14', 'PIN_AB22', 'PIN_AB21'],
		type: PinType.VectorDownTo,
		io: IOType.Output
	},
	{
		to: 'hex3',
		pin: ['PIN_Y16', 'PIN_W16', 'PIN_Y17', 'PIN_V16', 'PIN_U17', 'PIN_V18', 'PIN_V19'],
		type: PinType.VectorDownTo,
		io: IOType.Output
	},
	{
		to: 'hex4',
		pin: ['PIN_U20', 'PIN_Y20', 'PIN_V20', 'PIN_U16', 'PIN_U15', 'PIN_Y15', 'PIN_P9'],
		type: PinType.VectorDownTo,
		io: IOType.Output
	},
	{
		to: 'hex5',
		pin: ['PIN_N9', 'PIN_M8', 'PIN_T14', 'PIN_P14', 'PIN_C1', 'PIN_C2', 'PIN_W19'],
		type: PinType.VectorDownTo,
		io: IOType.Output
	},
	{
		to: 'ledr0',
		pin: ['PIN_AA2'],
		type: PinType.Bit,
		io: IOType.Output
	},
	{
		to: 'ledr1',
		pin: ['PIN_AA1'],
		type: PinType.Bit,
		io: IOType.Output
	},
	{
		to: 'ledr2',
		pin: ['PIN_W2'],
		type: PinType.Bit,
		io: IOType.Output
	},
	{
		to: 'ledr3',
		pin: ['PIN_Y3'],
		type: PinType.Bit,
		io: IOType.Output
	},
	{
		to: 'ledr4',
		pin: ['PIN_N2'],
		type: PinType.Bit,
		io: IOType.Output
	},
	{
		to: 'ledr5',
		pin: ['PIN_N1'],
		type: PinType.Bit,
		io: IOType.Output
	},
	{
		to: 'ledr6',
		pin: ['PIN_U2'],
		type: PinType.Bit,
		io: IOType.Output
	},
	{
		to: 'ledr7',
		pin: ['PIN_U1'],
		type: PinType.Bit,
		io: IOType.Output
	},
	{
		to: 'ledr8',
		pin: ['PIN_L2'],
		type: PinType.Bit,
		io: IOType.Output
	},
	{
		to: 'ledr9',
		pin: ['PIN_L1'],
		type: PinType.Bit,
		io: IOType.Output
	},
	{
		to: 'sw0',
		pin: ['PIN_U13'],
		type: PinType.Bit,
		io: IOType.Input
	},
	{
		to: 'sw1',
		pin: ['PIN_V13'],
		type: PinType.Bit,
		io: IOType.Input
	},
	{
		to: 'sw2',
		pin: ['PIN_T13'],
		type: PinType.Bit,
		io: IOType.Input
	},
	{
		to: 'sw3',
		pin: ['PIN_T12'],
		type: PinType.Bit,
		io: IOType.Input
	},
	{
		to: 'sw4',
		pin: ['PIN_AA15'],
		type: PinType.Bit,
		io: IOType.Input
	},
	{
		to: 'sw5',
		pin: ['PIN_AB15'],
		type: PinType.Bit,
		io: IOType.Input
	},
	{
		to: 'sw6',
		pin: ['PIN_AA14'],
		type: PinType.Bit,
		io: IOType.Input
	},
	{
		to: 'sw7',
		pin: ['PIN_AA13'],
		type: PinType.Bit,
		io: IOType.Input
	},
	{
		to: 'sw8',
		pin: ['PIN_AB13'],
		type: PinType.Bit,
		io: IOType.Input
	},
	{
		to: 'sw9',
		pin: ['PIN_AB12'],
		type: PinType.Bit,
		io: IOType.Input
	}
];
