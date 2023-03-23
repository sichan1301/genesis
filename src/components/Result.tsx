import { useDispatch, useSelector } from "react-redux"
import { menuType } from "../dummyData/dataType"
import { historyType } from "../store/stateType"
import {  PREV, RootState } from "../store/store"
import ColorResult from "./resultType/ColorResult"
import HasSubTitleResult from "./resultType/HasSubTitleResult"
import OnlyTitleResult from "./resultType/OnlyTitleResult"
import OptionResult from "./resultType/OptionResult"
import RecommendResult from "./resultType/RecommendResult"


const Result = () => {
	const history = useSelector((state:RootState) => state.history)
	const dispatch = useDispatch()
	console.log(history)
	return (
		<>
			<h1>result</h1>
			{
				history.map((item:historyType) => {		
					switch(item.menuType){
						case menuType.onlyTitleType:
							return <OnlyTitleResult item = {item} />
						case menuType.color:
							return <ColorResult item = {item} />
						case menuType.hasSubTitleType:
							return <HasSubTitleResult item={item}/>
						case menuType.recommend:
							return <RecommendResult item={item}/>
						default:
							break;
						}
				})
			}
			<OptionResult />

			<button onClick = {() => dispatch(PREV())}>이전</button>
		</>
	)
}

export default Result 