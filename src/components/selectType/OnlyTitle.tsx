import { useDispatch, useSelector } from "react-redux"
import { data } from "../../dummyData/data"
import { menuDataType,titleType} from "../../dummyData/dataType"
import { RootState } from "../../store/store"
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { UPDATE } from "../../store/store"

const OnlyTitle = () => {
	const step = useSelector((state:RootState)=>state.step)
	const dispatch = useDispatch()
	
	const filteredData = data.filter(item => item.number === step)[0]
	const menuData:menuDataType = filteredData.menu.menuData
	const menuType = filteredData.menu.type
	const title = filteredData.title
	
	const handleClick = (item:titleType) => {
		dispatch(UPDATE({menuType,step,item,title}))
	}
	
	return(
		<>
			{
				(menuData as titleType[]).map(item => 
					<SelectBox onClick ={()=>handleClick(item)} key={uuidv4()}>
					<Title>{item.title}</Title> 
					<SubTitle>{item?.subTitle}</SubTitle>
				</SelectBox>)
					
			}
		</>        
	)
}

export default OnlyTitle 

const SelectBox = styled.div`
	border:1px solid grey;	
	width:300px;
	cursor:pointer;
	margin-bottom:10px;
`

const Title = styled.p`
	font-size:16px;
`
	
const SubTitle = styled.p`
	font-size:12px;
`
