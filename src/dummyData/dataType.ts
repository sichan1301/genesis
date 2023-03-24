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
	recommend,
	option
}

export type menuDataType = ( titleType | colorType | recommendType | optionType )[]

export type titleType = {
	title:string,
	subTitle?:string
}

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


// export type onlyTitleType = {
// 	title:string,
// 	subTitle?:string
// }

// export interface optionType {	// color / recommand
// 	title:string,
// 	option:string[]
// }

// export interface selectableOptionType extends optionType {
// 	selected: boolean,
// }