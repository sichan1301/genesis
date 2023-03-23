export type dataType = {
	category:string,
	number:number,
	title:string,
	menu:{
		type:menuType,
		menuData:menuDataType
	}
}

export enum menuType {
	onlyTitleType,
	hasSubTitleType,
	color,
	recommend,
	option
}

export type menuDataType = (onlyTitleType | hasSubTitleType | colorType | recommendType | optionType )[]

export type onlyTitleType = string

export type colorType = {
	title:string,
	subMenu:string[],
}

export type recommendType = {
	title:string,
	option:string[],
}

export type optionType = {
	title:string,
	option:string[],
	selected:boolean		
}

export type hasSubTitleType = {
	title:string,
	subTitle:string
}