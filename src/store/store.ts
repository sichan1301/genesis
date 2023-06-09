import { createSlice, configureStore } from "@reduxjs/toolkit";
import { menuType } from "../dummyData/dataType";
import { ISelectableOptionHistory } from "./stateType";


const genesis = createSlice({
	name:"genesisReducer",
	
	initialState:{
		step:0,
		history:[
			{menuType: menuType.titleType, step: 1, item:{title:'세단'}, title: '바디 타입'},
			{menuType: menuType.titleType, step: 2, item:{title:'가솔린 3.5 터보'}, title: '엔진 타입'},
			{menuType: menuType.titleType, step: 3, item:{title:'2WD'}, title: '구동 타입'},
			{menuType: menuType.titleType, step: 4, item:{title:'스탠다드 시트 (5인승)'}, title: '인승 타입'},
			{menuType: menuType.color, step: 5, menuTitle:"글로시 (유광)", item: '우유니 화이트', title: '외장 컬러'},
			{menuType: menuType.titleType, step: 6, item: {title: '19인치 다이아몬드 컷팅 휠', subTitle: '피렐리 타이어 (245/50R19)'}, title: '휠 & 타이어'},
			{menuType: menuType.color,	step: 7, menuTitle:"스탠다드 디자인",  item: "옵시디언 블랙 모노톤", title:"내장 컬러 및 재질"},
			{menuType: menuType.color, step: 8, menuTitle:"인서트 필름", item: '인서트 필름 (스탠다드 디자인)', title: '인테리어 옵션'},
			{menuType: menuType.option, step:9, item: {title:"",option:[]}, title: '추천 사양'},
			{menuType: menuType.selectableOption, step: 10, newItem: {title:"" , option:[], selected:false}, title: '옵션 선택'},
		]
	},
	
	reducers:{
		NEXT:(state) =>{
			if(state.step <=9){
				state.step = state.step + 1 
			}else{
				return
			}
		},

		PREV:(state) =>{
			if(state.step === 0){
				return
			}else{
				state.step = state.step -1
			}
		},

		UPDATE:(state,action) => {
			if(action.payload.step !== 10){
				const numberFilteredIndex = state.history.findIndex(item => item.step === action.payload.step)
				state.history.splice(numberFilteredIndex,1,action.payload)
			}else{
				if(action.payload.newItem.selected === true){
					if((state.history[9] as ISelectableOptionHistory)?.newItem.title === ""){
						state.history.splice(9,1)
					}
					state.history.push(action.payload)
				}else{
					const filteredIndex =  (state.history as ISelectableOptionHistory[]).findIndex((item:ISelectableOptionHistory) => item?.newItem?.title === action.payload.newItem.title) 
					state.history.splice(filteredIndex,1)
				}
			}
		}
		
	}}
)


export const store = configureStore({
	reducer: genesis.reducer
})

export type RootState = ReturnType<typeof store.getState>;
export const {NEXT,PREV,UPDATE} = genesis.actions
export default genesis