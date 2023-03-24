
import { useDispatch, useSelector } from "react-redux"
import { data } from "../../dummyData/data"
import { menuDataType, optionType } from "../../dummyData/dataType"
import { RootState, OPTION_UPDATE } from "../../store/store"
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

const Option = () => {
	const step = useSelector((state:RootState)=>state.step)
	const filteredData = data.filter(item => item.number === step)[0]
	const menuData:menuDataType = filteredData.menu.menuData
	const menuType = filteredData.menu.type
	const title = filteredData.title
	const dispatch = useDispatch()

	const handleClick = (item:optionType) => {
		if(item.selected !== null){
			item.selected = !item.selected
		}
		const newItem = {...item}
		dispatch(OPTION_UPDATE({menuType,step,newItem,title}))
	}

	return(
		<>
			{
				(menuData as Array<optionType>).map(item => (
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

export default Option 

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