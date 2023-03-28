import { useDispatch, useSelector } from "react-redux"
import { data } from "../../dummyData/data"
import { colorType, menuDataType } from "../../dummyData/dataType"
import { UPDATE, RootState } from "../../store/store"
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";

const Color = () => {
	const step = useSelector((state:RootState)=>state.step)

	const [categoryIndex, setCategoryIndex] = useState(0)
	const [subMenuIndex, setSubMenuIndex] = useState(0)
	const dispatch = useDispatch()
	const filteredData = data[step]
	const menuData:menuDataType = filteredData.menu.menuData
	const menuType = filteredData.menu.type
	const title = filteredData.title

	const handleClick = (categoryIdx: number, subMenuIdx:number) => {
		const data = menuData[categoryIdx] as colorType;
		setCategoryIndex(categoryIdx);
		setSubMenuIndex(subMenuIdx);
		dispatch(UPDATE({menuType,step:step+1,item: data.subMenu[subMenuIdx], menuTitle: data.title ,title}))
	}

	return(
		<>
			{(menuData as colorType[]).map((category, categoryIdx) => (
				<SelectBox key={uuidv4()}>
					<Title>{category.title}</Title>
					<SubMenuDiv>
						{category.subMenu.map((subMenu, subMenuIdx) => <SubTitle onClick ={()=>handleClick(categoryIdx, subMenuIdx)} key={uuidv4()} targetIndex = { categoryIdx === categoryIndex && subMenuIdx===subMenuIndex}>{subMenu}</SubTitle>)}
					</SubMenuDiv>
				</SelectBox>
			))}
		</>        
	)
}

export default Color 

const SelectBox = styled.div`
	margin-bottom:12px;
`

const Title = styled.p`
	font-size:16px;
`
const SubMenuDiv = styled.div`
	display: flex;
	flex-wrap:wrap;
`

interface ISubTitleProps {
	targetIndex:boolean
}

const SubTitle = styled.p<ISubTitleProps>`
	font-size:12px;
	border:${props => props.targetIndex ? `3px solid black` : `0.5px solid grey`};
	height:30px;
	line-height: 30px;
	padding:5px;
	margin-right:5px;
	cursor:pointer;
`