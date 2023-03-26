import { useDispatch, useSelector } from "react-redux"
import { data } from "../../dummyData/data"
import { menuDataType,titleType} from "../../dummyData/dataType"
import { RootState } from "../../store/store"
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { UPDATE } from "../../store/store"
import { ITitleHistory } from "../../store/stateType";
import { useEffect } from "react";

const Title = () => {
	// const selected = useState("black")
	const step = useSelector((state:RootState)=>state.step)
	const history = useSelector((state:RootState)=>state.history)
	const dispatch = useDispatch()
	
	const filteredData = data.filter(item => item.number === step)  //해당 넘버 데이터

	const menuData:menuDataType = filteredData[0].menu.menuData
	const menuType = filteredData[0].menu.type
	const title = filteredData[0].title

	const handleClick = (item:titleType) => {
		dispatch(UPDATE({menuType,step,item,title}))
	}

	const filterIndex = () => {
		var filteredIndex = menuData.findIndex(item=> item.title === (history as ITitleHistory[])[step-1].item.title)  
		console.log(menuData[filteredIndex])       // history에 있는 값과 일치하는 데이터
	}

	useEffect(()=>{
		filterIndex() 
	},[history])
	
	return(
		<>
			{
				(menuData as titleType[]).map(item => 
					<SelectBox onClick ={()=>handleClick(item)} key={uuidv4()}>
					<TitleP>{item.title}</TitleP> 
					<SubTitle>{item?.subTitle}</SubTitle>
					</SelectBox>)
			}
		</>        
	)
}

export default Title 

const SelectBox = styled.div`
	border:1px solid grey;	
	width:300px;
	cursor:pointer;
	margin-bottom:10px;
`

const TitleP = styled.p`
	font-size:16px;
`
	
const SubTitle = styled.p`
	font-size:12px;
`
