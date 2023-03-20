import { useEffect } from "react"
import { useSelector } from "react-redux"
import { data } from "../../dummyData/data"
import { menuDataType, packageType } from "../../dummyData/dataType"
import { RootState } from "../../store"

const Package = () => {
	const number = useSelector((state:RootState)=>state.number)
	const filteredData = data.filter(item => item.number === number)[0]
	const menuData:menuDataType = filteredData.menu.menuData

	const displayMenu = () => {
		return (menuData as Array<packageType>).map(item => (<>
			<p>{item.title}</p>
			<ul>
				{item.option.map(item =><li>{item}</li>)}
			</ul>
		</>))
	}

	return(
		<>
			{displayMenu()}
		</>        
	)
}

export default Package 