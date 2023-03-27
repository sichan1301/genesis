import { useDispatch, useSelector } from "react-redux"
import { data } from "../../dummyData/data"
import { colorType, menuDataType } from "../../dummyData/dataType"
import { UPDATE, RootState } from "../../store/store"
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from "react";
import { IColorHistory } from "../../store/stateType";

const Color = () => {
	const [targetIndex,setTargetIndex] = useState(0)
	const step = useSelector((state:RootState)=>state.step)
	const history = useSelector((state:RootState)=>state.history)
	const dispatch = useDispatch()
	const filteredData = data.filter(item => item.number === step)[0]
	const menuData:menuDataType = filteredData.menu.menuData
	const menuType = filteredData.menu.type
	const title = filteredData.title

	const handleClick = (item:string) => {
		dispatch(UPDATE({menuType,step,item,title}))
	}

	return(
		<>
			{(menuData as Array<colorType>).map(item => (
				<SelectBox key={uuidv4()}>
					<Title>{item.title}</Title>
					<SubMenuDiv>
						{item.subMenu.map((item:string,idx:number) => <SubTitle onClick ={()=>handleClick(item)} key={uuidv4()} targetIndex = {idx===targetIndex}>{item}</SubTitle>)}
					</SubMenuDiv>
				</SelectBox>
			))}
		</>        
	)
}

export default Color 

interface ISubTitleProps {
	targetIndex:boolean
}

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

const SubTitle = styled.p<ISubTitleProps>`
	font-size:12px;
	border:${props => props.targetIndex ? `5px solid black` : `0.5px solid grey`};
	height:30px;
	line-height: 30px;
	padding:5px;
	margin-right:5px;
	cursor:pointer;
`