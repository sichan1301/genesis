import { menuType, titleType } from "../dummyData/dataType"
import { recommendType,optionType,colorType } from "../dummyData/dataType"


export interface IState{
	number:number,
	history: historyType[],
}

export type historyType = (IOnlyTitleHistory | IColorHistory |  IRecommendHistory | IOptionHistory)

export interface IOnlyTitleHistory {
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

export interface IRecommendHistory {
	menuType:menuType.recommend,
	title:string,
	step:number,
	item:recommendType
}

export interface IOptionHistory {
	menuType:menuType.option,
	title:string,
	step:number,
	newItem:optionType
}