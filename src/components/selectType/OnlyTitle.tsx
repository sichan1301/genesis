import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { data } from "../../dummyData/data"
import { menuDataType,onlyTitleType} from "../../dummyData/dataType"
import { RootState } from "../../store/store"
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { HISTORY } from "../../store/store"

const OnlyTitle = () => {
	const number = useSelector((state:RootState)=>state.number)
	const filteredData = data.filter(item => item.number === number)[0]
	const menuData:menuDataType = filteredData.menu.menuData
	const menuType = filteredData.menu.type
	const dispatch = useDispatch()
	
	return(
		<>
			{
				(menuData as Array<onlyTitleType>).map(item => 
					<Title onClick ={()=>{dispatch(HISTORY({menuType,number,text:item}))}} key={uuidv4()}>{item}</Title>)
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