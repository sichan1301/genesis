import { useDispatch, useSelector } from "react-redux"
import { RootState,NEXT,PREV } from "../store/store"
import { data } from "../dummyData/data"
import { menuType } from "../dummyData/dataType"
import Color from "./selectType/Color"
import Option from "./selectType/SelectableOption"
import { useCallback } from "react"
import Recommend from "./selectType/Option"
import Title from "./selectType/Title"


const Select = () => {
	const step = useSelector((state:RootState)=>state.step)
	const dispatch = useDispatch()
	const numberFilteredData = data.filter(item => item.number === step)[0]
	const nextButton = step===10 ? "견적보기": "다음" 
	const dataType = numberFilteredData.menu.type
	
	const filterDataType = useCallback(() =>{
		switch(dataType){
			case menuType.titleType:
				return <Title />
			case menuType.color:
				return <Color />
			case menuType.option:
				return <Recommend />
			case menuType.selectableOption:
				return <Option />
			default:
				break;	
		}
	},[dataType])

	return(
		<>
			<p>{step}.{numberFilteredData.title}</p>
			{filterDataType()}
			<button onClick = {() => dispatch(PREV())}>이전</button>
			<button onClick = {() => dispatch(NEXT())}>{nextButton}</button>
		</>
	)
}


export default Select