import { useEffect } from "react"
import { useSelector } from "react-redux"
import { data } from "../../dummyData/data"
import { menuDataType,onlyTitleType} from "../../dummyData/dataType"
import styled from 'styled-components';

import { RootState } from "../../store"

const OnlyTitle = () => {
	const number = useSelector((state:RootState)=>state.number)
	const filteredData = data.filter(item => item.number === number)[0]
	const menuData:menuDataType = filteredData.menu.menuData

	return(
		<>
			{
				(menuData as Array<onlyTitleType>).map(item => <Title>{item}</Title>)
			}
		</>        
	)
}

export default OnlyTitle 

const Title = styled.p`
	width:400px;
	padding:10px;
	border:1px solid grey;
	cursor:pointer;
`