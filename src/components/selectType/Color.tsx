import { useEffect } from "react"
import { useSelector } from "react-redux"
import { data } from "../../dummyData/data"
import { colorType, menuDataType } from "../../dummyData/dataType"
import { RootState } from "../../store"

const Color = () => {

	const number = useSelector((state:RootState)=>state.number)
	const filteredData = data.filter(item => item.number === number)[0]
	const menuData:menuDataType = filteredData.menu.menuData

	const displayMenu = () => {
		return (menuData as Array<colorType>).map(item => (<>
			<p>{item.title}</p>
			<div>
				{item.subMenu.map(item => <span>{item}</span>)}
			</div>
		</>))
	}

	return(
		<>
			{displayMenu()}
		</>        
	)
}

export default Color 