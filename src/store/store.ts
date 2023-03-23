import { createSlice, configureStore } from "@reduxjs/toolkit";
import { hasSubTitleType, menuType, optionType,recommendType,colorType } from "../dummyData/dataType";
import { IOptionHistory, IState } from "./stateType";


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
	                     
			if(numberFilteredIndex !== -1){
				state.history.splice(numberFilteredIndex,1,action.payload)
			}else{
				state.history.push(action.payload)
			}
			
				// state.history.sort((a,b)=> a.number > b.number ? 1 : -1 )
			},
			
		TENHISTORY:(state,action) =>{  
			if(action.payload.newItem.selected === true){
				(state.tenHistory as Array<optionType>).push(action.payload)
			}else{
				const filteredIndex = state.tenHistory.findIndex((item:IOptionHistory) => item.newItem.title === action.payload.newItem.title)
				state.tenHistory.splice(filteredIndex,1)
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