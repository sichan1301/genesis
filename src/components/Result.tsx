import { useDispatch, useSelector } from "react-redux"
import { menuType } from "../dummyData/dataType"
import { historyType } from "../store/stateType"
import {  PREV, RootState } from "../store/store"
import ColorResult from "./resultType/ColorResult"
import TitleResult from "./resultType/TitleResult"
import OptionResult from "./resultType/OptionResult"
import SelectableOptionResult from "./resultType/SelectableOptionResult"


const Result = () => {
	const history = useSelector((state:RootState) => state.history)
	const dispatch = useDispatch()

	return (
		<>
			<h1>result</h1>
			{
				history.map((item:any) => {		
					switch(item.menuType){
						case menuType.titleType:
							return <TitleResult item = {item} />
						case menuType.color:
							return <ColorResult item = {item} />
						case menuType.option:
							return <OptionResult item={item}/>
						default:
							return
						}
				}) 
			}

			<SelectableOptionResult />
			<button onClick = {() => dispatch(PREV())}>이전</button>
		</>
	)
}

export default Result 