import { createSlice, configureStore } from "@reduxjs/toolkit";
import { hasSubTitleType, menuType, packageType } from "./dummyData/dataType";


interface IState{
	number:number,
	history: historyType,
	tenHistory:IPackageHistory[]
}

export type historyType = IOnlyTitleHistory[] | IColorHistory[] | IHasSubTitleHistory[] |  IPackageHistory[] 

export interface IOnlyTitleHistory {
	menuType:menuType.onlyTitleType,
	number:number,
	text:string
}

export interface IPackageHistory {
	menuType:menuType.package,
	number:number,
	newItem:packageType
}

export interface IHasSubTitleHistory {
	menuType:menuType.hasSubTitleType,
	number:number,
	item:hasSubTitleType
}

export interface IColorHistory {
	menuType:menuType.color,
	number:number,
	text:string
}

const genesis = createSlice({
	name:"genesisReducer",
	
	initialState:{
		number:1,
		history:[],
		tenHistory:[]
	},
	
	reducers:{
		NEXT:(state) =>{
			state.number = state.number + 1 
		},
		PREV:(state) =>{
			if(state.number === 1){
				return
			}
			state.number = state.number -1
		},

		HISTORY:(state:IState,action) => {
			const numberFilteredIndex = state.history.findIndex(item => item.number === action.payload.number)
		
			if(action.payload.number !== 10){                       
				if(numberFilteredIndex !== -1){
					state.history.splice(numberFilteredIndex,1,action.payload)
				}else{
					state.history.push(action.payload)
				}
			}
				// state.history.sort((a,b)=> a.number > b.number ? 1 : -1 )
			},
			
			TENHISTORY:(state,action) =>{
				if(action.payload.number === 10){
					if(action.payload.newItem.selected === true){
						(state.tenHistory as Array<packageType>).push(action.payload)
					}else{
						const filteredIndex = state.tenHistory.findIndex((item:IPackageHistory) => item.newItem.title === action.payload.newItem.title)
						state.tenHistory.splice(filteredIndex,1)
					}
				}
				
			}
			
	}
})


export const store = configureStore({
	reducer: genesis.reducer
})

export type RootState = ReturnType<typeof store.getState>;
export const {NEXT,PREV,HISTORY,TENHISTORY} = genesis.actions
export default genesis