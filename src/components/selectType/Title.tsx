import { useDispatch, useSelector } from "react-redux"
import { data } from "../../dummyData/data"
import { menuDataType,titleType} from "../../dummyData/dataType"
import { RootState } from "../../store/store"
import styled,{css} from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { UPDATE } from "../../store/store"
import { ITitleHistory } from "../../store/stateType";
import { useEffect, useState } from "react";

const Title = () => {

	const [targetIndex,setTargetIndex] = useState(0)

	const step = useSelector((state:RootState)=>state.step)
	const history = useSelector((state:RootState)=>state.history)
	const dispatch = useDispatch()
	
	const filteredData = data.filter(item => item.number === step+1)  //해당 넘버 데이터

	const menuData:menuDataType = filteredData[0].menu.menuData
	const menuType = filteredData[0].menu.type
	const title = filteredData[0].title

	const handleClick = (item:titleType) => {
		dispatch(UPDATE({menuType,step:step+1,item,title}))
	}
	
	useEffect(()=>{
		const filteredIndex = menuData.findIndex(item=> item.title === (history as ITitleHistory[])[step].item.title) 
		setTargetIndex(filteredIndex)
	},[history,step])

	return(
		<>
			{(menuData as titleType[]).map((item,idx) => 
				<SelectBox onClick ={()=>handleClick(item)} key={uuidv4()} targetIndex = {idx === targetIndex}>
					<TitleP>{item.title}</TitleP> 
					<SubTitle>{item?.subTitle}</SubTitle>
				</SelectBox>)
			}
		</>        
	)
}

export default Title 

interface ISelectBoxProps {
	targetIndex:boolean
}

const SelectBox = styled.div<ISelectBoxProps>`
	border:${props => props.targetIndex ? `3px solid black` : `1px solid grey`};
	width:300px;
	cursor:pointer;
	margin-bottom:10px;
`

const TitleP = styled.p`
	padding:10px;
	font-size:16px;
`
	
const SubTitle = styled.p`
	font-size:12px;
`
