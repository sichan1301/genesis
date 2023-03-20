import { useDispatch, useSelector } from "react-redux"
import { RootState,NEXT,PREV } from "../store"
import { data } from "../dummyData/data"
import { menuType } from "../dummyData/dataType"
import JustTitle from "./selectType/OnlyTitle"
import Color from "./selectType/Color"
import Package from "./selectType/Package"
import HasSubTitle from "./selectType/HasSubTitle"


const Select = () => {
	const number = useSelector((state:RootState)=>state.number)
	const dispatch = useDispatch()
	const numberFilteredData = data.filter(item => item.number === number)[0]

	const filterDataType = () =>{
		switch(numberFilteredData.menu.type){
			case menuType.onlyTitleType:
				return <JustTitle />
			case menuType.hasSubTitleType:
				return <HasSubTitle />
			case menuType.color:
				return <Color />
			case menuType.package:
				return <Package />
			default:
				break;	
		}
	}

	return(
		<>
			<p>{number}.{numberFilteredData.title}</p>
			{filterDataType()}
			<button onClick = {() => dispatch(PREV())}>이전</button>
			<button onClick = {() => dispatch(NEXT())}>다음</button>
		</>
	)
}


export default Select