import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { menuType } from "../dummyData/dataType"
import {  PREV, RootState } from "../store"
import ColorResult from "./resultType/ColorResult"
import HasSubTitleResult from "./resultType/HasSubTitleResult"
import OnlyTitleResult from "./resultType/OnlyTitleResult"
import PackageResult from "./resultType/PackageResult"

const Result = () => {
	const history = useSelector((state:RootState) => state.history)
	const number = useSelector((state:RootState) => state.number)
	const dispatch = useDispatch()

	// const filteredHistory = () => { 
	// 	history.map(item => {
	// 		switch(item.menuType){
	// 			case IOnlyTitleHistory:
	// 				return <OnlyTitleResult />
	// 				break;
	// 			case IColorHistory:
	// 				return <ColorResult />
	// 				break;
	// 			case IHasSubTitleHistory:
	// 				return <HasSubTitleResult />
	// 				break;
	// 			case IPackageHistory:
	// 				return <PackageResult />
	// 				break;
	// 			default:
	// 				break;	
	// 		}
	// 	})
	// }

	return (
		<>
			<h1>result</h1>
			{/* {
				filteredHistory()
			} */}

			<OnlyTitleResult />
			<ColorResult />
			<HasSubTitleResult />
			<PackageResult />

			<button onClick = {() => dispatch(PREV())}>이전</button>
		</>
	)
}

export default Result 