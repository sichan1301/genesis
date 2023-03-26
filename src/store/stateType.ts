import { menuType, selectableOptionType, titleType,optionType } from "../dummyData/dataType"


export interface IState{
	number:number,
	history: historyType[],
}

export type historyType = (ITitleHistory | IColorHistory | IOptionHistory | ISelectableOptionHistory)

export interface ITitleHistory {
	menuType:menuType.titleType,
	title:string,
	step:number,
	item:titleType
}

export interface IColorHistory {
	menuType:menuType.color,
	title:string,
	step:number,
	item:string //subMenu
}

export interface IOptionHistory {
	menuType:menuType.option,
	title:string,
	step:number,
	item:optionType
}

export interface ISelectableOptionHistory {
	menuType:menuType.selectableOption,
	title:string,
	step:number,
	newItem:selectableOptionType
}	