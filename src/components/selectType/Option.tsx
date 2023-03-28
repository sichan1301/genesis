import { useDispatch, useSelector } from "react-redux"
import { data } from "../../dummyData/data"
import { menuDataType, optionType } from "../../dummyData/dataType"
import { UPDATE, RootState } from "../../store/store"
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from "react";
import { IOptionHistory } from "../../store/stateType";

const Option = () => {
	const [targetIndex,setTargetIndex] = useState(0)

	const step = useSelector((state:RootState)=>state.step)
	const history = useSelector((state:RootState)=>state.history)
	const dispatch = useDispatch()

	const filteredData = data.filter(item => item.number === step+1)[0]
	const menuData:menuDataType = filteredData.menu.menuData
	const menuType = filteredData.menu.type
	const title = filteredData.title

	const handleClick = (item:optionType) => {
		dispatch(UPDATE({menuType,step:step+1,item,title}))
	}

	const handleSelect = () =>{
		const filteredIndex = menuData.findIndex(item=> item.title === (history as IOptionHistory[])[step].item.title) 
		setTargetIndex(filteredIndex)
		
	}
	useEffect(()=>{
		handleSelect()
	},[history])

	return(
		<>
			{
				(menuData as Array<optionType>).map((item,idx) => (
					<SelectBox onClick = {()=>{handleClick(item)}} key={uuidv4()} targetIndex = {idx===targetIndex}>
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

interface ISelectBoxProps {
	targetIndex: boolean
}

const SelectBox = styled.div<ISelectBoxProps>`
	margin-bottom:10px;
	border:${props => props.targetIndex ? '3px solid black' : '1px solid grey'};	
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