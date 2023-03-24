import { useDispatch, useSelector } from "react-redux"
import { menuType } from "../dummyData/dataType"
import { historyType } from "../store/stateType"
import {  PREV, RootState } from "../store/store"
import ColorResult from "./resultType/ColorResult"
import OnlyTitleResult from "./resultType/OnlyTitleResult"
import OptionResult from "./resultType/OptionResult"
import RecommendResult from "./resultType/RecommendResult"


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
							return <OnlyTitleResult item = {item} />
						case menuType.color:
							return <ColorResult item = {item} />
						case menuType.recommend:
							return <RecommendResult item={item}/>
						default:
							return
						}
				}) 
			}

			<OptionResult />
			<button onClick = {() => dispatch(PREV())}>이전</button>
		</>
	)
}

export default Result 