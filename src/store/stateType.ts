import { menuType } from "../dummyData/dataType"
import { onlyTitleType,recommendType,optionType,hasSubTitleType,colorType } from "../dummyData/dataType"


export interface IState{
	number:number,
	history: historyType[],
	tenHistory:IOptionHistory[]
}

export type historyType = (IOnlyTitleHistory | IColorHistory | IHasSubTitleHistory |  IRecommendHistory | IOptionHistory)


export interface IOnlyTitleHistory {
	menuType:menuType.onlyTitleType,
	number:number,
	text:onlyTitleType
}

export interface IRecommendHistory {
	menuType:menuType.recommend,
	number:number,
	item:recommendType
}

export interface IOptionHistory {
	menuType:menuType.option,
	number:number,
	newItem:optionType
}

export interface IHasSubTitleHistory {
	menuType:menuType.hasSubTitleType,
	number:number,
	item:hasSubTitleType
}

export interface IColorHistory {
	menuType:menuType.color,
	number:number,
	item:string[] //subMenu
}
