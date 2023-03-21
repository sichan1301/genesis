import { useDispatch } from "react-redux"
import { PREV } from "../store"
import ColorResult from "./resultType/ColorResult"
import HasSubTitleResult from "./resultType/HasSubTitleResult"
import OnlyTitleResult from "./resultType/OnlyTitleResult"
import PackageResult from "./resultType/PackageResult"

const Result = () => {
	const dispatch = useDispatch()
	
	return (
		<>
			<h1>result</h1>
			<OnlyTitleResult />
			<ColorResult />
			<HasSubTitleResult />
			<PackageResult />
			<button onClick = {() => dispatch(PREV())}>이전</button>
		</>
	)
}

export default Result 