import { createSlice, configureStore } from "@reduxjs/toolkit";
import { hasSubTitleType, menuType, packageType } from "./dummyData/dataType";


interface IState{
	number:number,
	history: historyType
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
	item:packageType
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
		history:[]
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

			if(action.payload.number !== 10){                       
				const numberFilteredIndex = state.history.findIndex(item => item.number === action.payload.number)
				if(numberFilteredIndex !== -1){
					state.history.splice(numberFilteredIndex,1,action.payload)
				}else{
					state.history.push(action.payload)
				}
			}
			else{
				const tenFilteredHistory =  (state.history as Array<IPackageHistory>).filter(item => item.number === 10)
				if(tenFilteredHistory.length === 0){
					state.history.push(action.payload)
					// const itemTitleFilteredIndex = tenFilteredHistory.filter(item=>item.item.title !== action.payload.item.title)
				}else{
					(state.history as Array<IPackageHistory>).filter(item=> item.item.title !== action.payload.item.title)
				}
			}
				state.history.sort((a,b)=> a.number > b.number ? 1 : -1 )
			}
	}
})


export const store = configureStore({
	reducer: genesis.reducer
})

export type RootState = ReturnType<typeof store.getState>;
export const {NEXT,PREV,HISTORY} = genesis.actions
export default genesis