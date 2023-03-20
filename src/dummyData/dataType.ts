
export type dataType = {
	type:selectType
	category:string,
	number:number,
	title:string,
	menu:menuType
}

type menuType = 
string[] | 
{
	title:string,
	subMenu?:string[],
	option?:string[]
} []

export enum selectType {
	justTitle,
	color,
	package
}

