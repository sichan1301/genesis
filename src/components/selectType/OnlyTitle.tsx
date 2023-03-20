import { useEffect } from "react"
import { useSelector } from "react-redux"
import { data } from "../../dummyData/data"
import { menuDataType,onlyTitleType} from "../../dummyData/dataType"

import { RootState } from "../../store"

const OnlyTitle = () => {
	const number = useSelector((state:RootState)=>state.number)
	const filteredData = data.filter(item => item.number === number)[0]
	const menuData:menuDataType = filteredData.menu.menuData

	const displayMenu = () => {
		return (menuData as Array<onlyTitleType>).map(item => <p>{item}</p>)
	}

	return(
		<>
			{displayMenu()}
		</>        
	)
}

export default OnlyTitle 