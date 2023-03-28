
import { useDispatch, useSelector } from "react-redux"
import { data } from "../../dummyData/data"
import { menuDataType, optionType, selectableOptionType } from "../../dummyData/dataType"
import { RootState, UPDATE } from "../../store/store"
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from "react";

const SelectableOption = () => {
	const [targetIndex,setTargetIndex] = useState<number[]>([])

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

	const handleSelect = () => {
		const filteredHistory = history.filter(item=> item.step === 10)      //history에서 10번인 놈들 추출
		const filteredTitle = filteredHistory.map(item => item.newItem?.title)   //그놈들의 title들 배열로 추출 (undefined포함)
		const filteredIndex = filteredTitle.map(titleItem => menuData.findIndex(item =>item.title === titleItem))   // history에 있는 값들의 menuData 인덱스 
		const newTargetIndex = [...filteredIndex]
		setTargetIndex(newTargetIndex)   
	}

	useEffect(()=>{
		handleSelect()
	},[history])

	return(
		<>
			{
				(menuData as Array<selectableOptionType>).map((item,idx) => (
					<SelectBox onClick = {()=>handleClick(item)} key={uuidv4()} targetIndex = {targetIndex.some(item=> item === idx)}>
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
	border:${props => props.targetIndex ? `3px solid black` : `0.5px solid grey`};
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