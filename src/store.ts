import { createSlice, configureStore } from "@reduxjs/toolkit";
import { hasSubTitleType, menuType, packageType } from "./dummyData/dataType";


interface IState{
	number:number,
	history: historyType
}

export type historyType = IOnlytitleHistory[] | IPackageHistory[] 

export interface IOnlytitleHistory {
	menuType:menuType.onlyTitleType,
	number:number,
	text:string,
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
			
			const filteredIndex = state.history.findIndex(item => item === action.payload)  
			
			switch(action.payload.menuType){
				case menuType.onlyTitleType:         
					if(filteredIndex !== -1){
						state.history.splice(filteredIndex,1,action.payload)
					}else{
						state.history.push(action.payload)
					}
					break;

				case menuType.hasSubTitleType:   
					if(filteredIndex !== -1){
						state.history.splice(filteredIndex,1,action.payload)
					}else{
						state.history.push(action.payload)
					}
					break;

				case menuType.package:
					if(action.payload.number === 9){  
						if(filteredIndex !== -1){
							state.history.splice(filteredIndex,1,action.payload)
						}else{
							state.history.push(action.payload)
						}
					}else{    // 10번일 때 중복 허용

					}
				}
			}
		}
	}
)


export const store = configureStore({
	reducer: genesis.reducer
})

export type RootState = ReturnType<typeof store.getState>;

export const {NEXT,PREV,HISTORY} = genesis.actions

export default genesis