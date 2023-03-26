
import { useDispatch, useSelector } from "react-redux"
import { data } from "../../dummyData/data"
import { menuDataType, optionType, selectableOptionType } from "../../dummyData/dataType"
import { RootState, UPDATE } from "../../store/store"
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

const SelectableOption = () => {
	const step = useSelector((state:RootState)=>state.step)
	const filteredData = data[9]
	const menuData:menuDataType = filteredData.menu.menuData
	const menuType = filteredData.menu.type
	const title = filteredData.title
	const dispatch = useDispatch()

	const handleClick = (item:selectableOptionType) => {
		if(item.selected !== null){
			item.selected = !item.selected
		}
		const newItem = {...item}
		dispatch(UPDATE({menuType,step,newItem,title}))
	}

	return(
		<>
			{
				(menuData as Array<selectableOptionType>).map(item => (
					<SelectBox onClick = {()=>handleClick(item)} key={uuidv4()}>
						<Title>{item.title}</Title>
						<OptionUl>
							{item.option.map(item =><OptionLi key={uuidv4()}>{item}</OptionLi>)}
						</OptionUl>
					</SelectBox>
				))
			}
		</>        
	)
}

export default SelectableOption 

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
const OptionLi = styled.li`
	font-size:12px;

`