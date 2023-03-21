import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { PREV, RootState } from "../store"
import HasSubTitleResult from "./resultType/HasSubTitleResult"
import OnlyTitleResult from "./resultType/OnlyTitleResult"
import PackageResult from "./resultType/PackageResult"

const Result = () => {
	const history = useSelector((state:RootState)=>state.history)
	const dispatch = useDispatch()
	
	return (
		<>
			<h1>result</h1>
			<OnlyTitleResult />
			<HasSubTitleResult />
			<PackageResult />
			<button onClick = {() => dispatch(PREV())}>이전</button>
		</>
	)
}

export default Result 