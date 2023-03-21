import { useEffect } from "react"
import { useSelector } from "react-redux"
import { data } from "../../dummyData/data"
import { menuDataType,onlyTitleType} from "../../dummyData/dataType"
import { RootState } from "../../store"
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

const OnlyTitle = () => {
	const number = useSelector((state:RootState)=>state.number)
	const filteredData = data.filter(item => item.number === number)[0]
	const menuData:menuDataType = filteredData.menu.menuData

	return(
		<>
			{
				(menuData as Array<onlyTitleType>).map(item => <Title key={uuidv4()}>{item}</Title>)
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