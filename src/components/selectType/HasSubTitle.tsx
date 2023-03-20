import { useSelector } from "react-redux"
import { data } from "../../dummyData/data"
import { hasSubTitleType, menuDataType } from "../../dummyData/dataType"
import { RootState } from "../../store"

const HasSubTitle = () => {
	const number = useSelector((state:RootState)=>state.number)
	const filteredData = data.filter(item => item.number === number)[0]
	const menuData:menuDataType = filteredData.menu.menuData
	
	const displayMenu = () => {
		return(
			(menuData as hasSubTitleType).title.map(item => <h2>{item}</h2>)
		)
	}

	const displaySubMenu = () => {
		return(
			(menuData as hasSubTitleType).subTitle.map(item => <h4>{item}</h4>)
		)
	}

	return(
		<>
			{displayMenu()}
			{displaySubMenu()}
		</>        
	)
}


export default HasSubTitle