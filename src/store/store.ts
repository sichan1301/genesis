import { createSlice, configureStore } from "@reduxjs/toolkit";
import { optionType } from "../dummyData/dataType";
import { IOptionHistory, IState } from "./stateType";


const genesis = createSlice({
	name:"genesisReducer",
	
	initialState:{
		number:1,
		history:[
			{menuType: 0, number: 1, text: '세단', title: '바디 타입'},
			{menuType: 0, number: 2, text: '가솔린 3.5 터보', title: '엔진 타입'},
			{menuType: 0, number: 3, text: '2WD', title: '구동 타입'},
			{menuType: 0, number: 4, text: '스탠다드 시트 (5인승)', title: '인승 타입'},
			{menuType: 2, number: 5, item: '우유니 화이트', title: '외장 컬러'},
			{menuType: 1, number: 6, item: {title: '19인치 다이아몬드 컷팅 휠', subTitle: '피렐리 타이어 (245/50R19)'}, title: '휠 & 타이어'},
			{menuType: 2,	number: 7, item: "인서트 필름 (스탠다드 디자인)", title:"내장 컬러 및 재질"},
			{menuType: 2, number: 8, item: '인서트 필름 (스탠다드 디자인)', title: '인테리어 옵션'}
		],
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

		HISTORY:(state,action) => {
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