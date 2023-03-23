import { useCallback, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { menuType } from "../dummyData/dataType"
import { historyType,historyTypee } from "./store/stateType"
import {  PREV, RootState } from "./store/store"
import ColorResult from "./resultType/ColorResult"
import HasSubTitleResult from "./resultType/HasSubTitleResult"
import OnlyTitleResult from "./resultType/OnlyTitleResult"
import OptionResult from "./resultType/OptionResult"
import RecommendResult from "./resultType/RecommendResult"

const Result = () => {
	const history = useSelector((state:RootState) => state.history)
	const tenHistory = useSelector((state:RootState) => state.tenHistory)
  const newHistory = history.concat(tenHistory)

	const dispatch = useDispatch()
	
	const filteredResult = () => {
		history.map((item:historyTypee) => {
			switch(item.menuType){
				case menuType.onlyTitleType:
					return <OnlyTitleResult />
				case menuType.color:
					return <ColorResult />
				case menuType.hasSubTitleType:
					return <HasSubTitleResult />
				case menuType.recommend:
					return <RecommendResult />
				case menuType.option:
					return <OptionResult />
				default:
					break;
				}
		})
		}

	return (
		<>
			<h1>result</h1>
			{filteredResult()}
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