import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { data } from "../../dummyData/data"
import { menuDataType, packageType } from "../../dummyData/dataType"
import { HISTORY, RootState, TENHISTORY } from "../../store"
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

const Package = () => {
	const number = useSelector((state:RootState)=>state.number)
	const filteredData = data.filter(item => item.number === number)[0]
	const menuData:menuDataType = filteredData.menu.menuData
	const menuType = filteredData.menu.type
	const dispatch = useDispatch()

	const handleClick = (item:packageType) => {
		if(item.selected !== null){
			item.selected = !item.selected
		}
		const newItem = {...item}
		console.log(newItem.selected)
		dispatch(TENHISTORY({menuType,number,newItem}))
	}

	return(
		<>
			{
				(menuData as Array<packageType>).map(item => (
					<SelectBox onClick = {()=>handleClick(item)} key={uuidv4()}>
						<Title>{item.title}</Title>
						<OptionUl>
							{item.option.map(item =><Option key={uuidv4()}>{item}</Option>)}
						</OptionUl>
					</SelectBox>
				))
			}
		</>        
	)
}

export default Package 

const SelectBox = styled.div`
	margin-bottom:10px;
	border:1px solid grey;	
	width:400px;
	padding:10px;
	cursor:pointer;
`

const Title = styled.p`
	font-size:16px;
	margin:0;
`
const OptionUl = styled.ul`
	margin:0;
`
const Option = styled.li`
	font-size:12px;

`