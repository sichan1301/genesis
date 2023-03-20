import { createSlice, configureStore } from "@reduxjs/toolkit";

const genesis = createSlice({
	name:"genesisReducer",

	initialState:{
		number:1,
		history:[]
	},
	
	reducers:{
		NEXT:(state) =>{
			if(state.number === 10){
				return
			}
			state.number = state.number + 1 
		},
		PREV:(state) =>{
			if(state.number === 1){
				return
			}
			state.number = state.number -1
		},

		HISTORY:(state,action) => {

		}
	}
})


export const store = configureStore({
	reducer: genesis.reducer
})

export type RootState = ReturnType<typeof store.getState>;

export const {NEXT,PREV,HISTORY} = genesis.actions

export default genesis