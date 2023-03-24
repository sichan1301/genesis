import { useDispatch, useSelector } from "react-redux"
import { RootState,NEXT,PREV } from "../store/store"
import { data } from "../dummyData/data"
import { menuType } from "../dummyData/dataType"
import OnlyTitle from "./selectType/OnlyTitle"
import Color from "./selectType/Color"
import Option from "./selectType/Option"
import { useCallback } from "react"
import Recommend from "./selectType/Recommend"


const Select = () => {
	const step = useSelector((state:RootState)=>state.step)
	const dispatch = useDispatch()
	const numberFilteredData = data.filter(item => item.number === step)[0]
	const nextButton = step===10 ? "견적보기": "다음" 
	const dataType = numberFilteredData.menu.type
	
	const filterDataType = useCallback(() =>{
		switch(dataType){
			case menuType.titleType:
				return <OnlyTitle />
			case menuType.color:
				return <Color />
			case menuType.recommend:
				return <Recommend />
			case menuType.option:
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