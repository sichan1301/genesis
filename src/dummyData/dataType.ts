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
	package
}

export type menuDataType = (onlyTitleType[] | hasSubTitleType[] | colorType[] | packageType[] )

export type onlyTitleType = string

export type colorType = {
	title:string,
	subMenu:string[],
}

export type packageType = {
	title:string,
	option:string[],
	selected?:boolean		
}

export type hasSubTitleType = {
	title:string,
	subTitle:string
}