import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { menuType } from "../dummyData/dataType"
import { historyType } from "../store"
import {  PREV, RootState } from "../store"
import ColorResult from "./resultType/ColorResult"
import HasSubTitleResult from "./resultType/HasSubTitleResult"
import OnlyTitleResult from "./resultType/OnlyTitleResult"
import OptionResult from "./resultType/OptionResult"
import RecommendResult from "./resultType/RecommendResult"

const Result = () => {
	const history = useSelector((state:RootState) => state.history)
	const number = useSelector((state:RootState) => state.number)
	const dispatch = useDispatch()
	console.log(history);

	return (
		<>
			<h1>result</h1>
			
			{/* {
				history.map((item:any) => {
					switch(item.menuType){
						case menuType.onlyTitleType:
							return <OnlyTitleResult />
						case menuType.color:
							return <ColorResult />
						case menuType.hasSubTitleType:
							return <HasSubTitleResult />
						case menuType.package:
							return <PackageResult />
					}
				})
			} */}

			<OnlyTitleResult />
			<ColorResult />
			<HasSubTitleResult />
			<RecommendResult />
			<OptionResult />

			<button onClick = {() => dispatch(PREV())}>이전</button>
		</>
	)
}

export default Result 