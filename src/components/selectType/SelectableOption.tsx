
import { useDispatch, useSelector } from "react-redux"
import { data } from "../../dummyData/data"
import { menuDataType, optionType, selectableOptionType } from "../../dummyData/dataType"
import { RootState, UPDATE } from "../../store/store"
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from "react";
import { ISelectableOptionHistory } from "../../store/stateType";
import { menuType } from "../../dummyData/dataType";

const SelectableOption = () => {
	const [targetIndex,setTargetIndex] = useState(0)

	const step = useSelector((state:RootState)=>state.step)
	const history = useSelector((state:RootState)=>state.history)
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

	useEffect(()=>{
		const filteredHistory = history.filter(item=> item.step === 10)    //history에서 10번인 놈들 추출
		const filteredTitle = filteredHistory.map(item => item.newItem?.title) //그놈들의 title들 배열로 추출 (undefined포함)

		console.log(filteredTitle.map(titleItem => menuData.findIndex(item =>item.title === titleItem)))

		console.log(filteredTitle);
		// menuData.findIndex(item=> filteredTitle((titleItem:string) => titleItem === item.title))

		
		// setTargetIndex(filteredIndex)
	},[history])

	return(
		<>
			{
				(menuData as Array<selectableOptionType>).map((item,idx) => (
					<SelectBox onClick = {()=>handleClick(item)} key={uuidv4()} targetIndex = {idx === targetIndex}>
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

interface ISelectBox {
	targetIndex:boolean
}

const SelectBox = styled.div<ISelectBox>`
	margin-bottom:10px;
	border:${props => props.targetIndex ? `5px solid black` : `0.5px solid grey`};
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