import { useSelector } from "react-redux"
import { data } from "../../dummyData/data"
import { hasSubTitleType, menuDataType } from "../../dummyData/dataType"
import { RootState } from "../../store"
import styled from 'styled-components';

const HasSubTitle = () => {
	const number = useSelector((state:RootState)=>state.number)
	const filteredData = data.filter(item => item.number === number)[0]
	const menuData:menuDataType = filteredData.menu.menuData
	
	return(
		<>
			{
				(menuData as Array<hasSubTitleType>).map(item => <SelectBox><Title>{item.title}</Title> <SubTitle>{item.subTitle}</SubTitle></SelectBox>)
			}
		</>        
	)
}


export default HasSubTitle

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
