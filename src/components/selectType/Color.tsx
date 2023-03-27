import { useDispatch, useSelector } from "react-redux"
import { data } from "../../dummyData/data"
import { colorType, menuDataType } from "../../dummyData/dataType"
import { UPDATE, RootState } from "../../store/store"
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from "react";
import { IColorHistory } from "../../store/stateType";

const Color = () => {
	const [targetIndex,setTargetIndex] = useState<number | null>(0)
	const [secondTargetIndex, setSecondTargetIndex] = useState<number | null>(0)
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

	useEffect(()=>{

		const firstFilteredIndex = menuData[0].title === history[step-1].title && (menuData as colorType[])[0].subMenu.findIndex((item:string) => item === history[step-1].item)
		const secondFilteredIndex = menuData[1].title === history[step-1].title && (menuData as colorType[])[1].subMenu.findIndex((item:string) => item === history[step-1].item && menuData[1].title === history[step-1].title)
		const firstIndex = firstFilteredIndex !== -1 ? firstFilteredIndex: null 
		const secondIndex = firstFilteredIndex === -1 ? secondFilteredIndex : null

		// console.log(filteredIndex)

		// setTargetIndex(firstIndex)
		// setSecondTargetIndex(secondIndex)
		console.log(firstFilteredIndex)

	},[history])

	return(
		<>
			{/* {(menuData as Array<colorType>).map(item => (
				<SelectBox key={uuidv4()}>
					<Title>{item.title}</Title>
					<SubMenuDiv>
						{item.subMenu.map((item:string,idx:number) => <SubTitle onClick ={()=>handleClick(item)} key={uuidv4()} targetIndex = {idx===targetIndex}>{item}</SubTitle>)}
					</SubMenuDiv>
				</SelectBox>
			))}
			 */}
			{
				<>
					<SelectBox key={uuidv4()}>
						<Title>{menuData[0].title}</Title>
						<SubMenuDiv>
							{(menuData as colorType[])[0].subMenu.map((item:string,idx:number) => <SubTitle onClick ={()=>handleClick(item)} key={uuidv4()} targetIndex = {idx===targetIndex}>{item}</SubTitle>)}
						</SubMenuDiv>
					</SelectBox>

				{	
					menuData[1] &&
					<SelectBox key={uuidv4()}>
					<Title>{menuData[1].title}</Title>
					<SubMenuDiv>
						{(menuData as colorType[])[1].subMenu.map((item:string,idx:number) => <SubTitle2 onClick ={()=>handleClick(item)} key={uuidv4()} targetIndex2 = {idx===secondTargetIndex}>{item}</SubTitle2>)}
					</SubMenuDiv>
					</SelectBox>
				}
				</>
			}
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
	border:${props => props.targetIndex ? `5px solid black` : `0.5px solid grey`};
	height:30px;
	line-height: 30px;
	padding:5px;
	margin-right:5px;
	cursor:pointer;
`

interface ISubTitle2Props {
	targetIndex2:boolean
}

const SubTitle2
 = styled.p<ISubTitle2Props>`
	font-size:12px;
	border:${props => props.targetIndex2 ? `5px solid black` : `0.5px solid grey`};
	height:30px;
	line-height: 30px;
	padding:5px;
	margin-right:5px;
	cursor:pointer;
`