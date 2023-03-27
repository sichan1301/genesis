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
	titleType,
	color,
	option,
	selectableOption
}

export type menuDataType = ( titleType | colorType | optionType | selectableOptionType)[]

export type titleType = {
	title:string,
	subTitle?:string,
}

export type colorType = {
	title:string,
	subMenu:string[],
}

export type optionType = {
	title:string,
	option:string[],
}

export interface selectableOptionType extends optionType {
	selected: boolean
}