import { useDispatch, useSelector } from "react-redux"
import { data } from "../../dummyData/data"
import { colorType, menuDataType } from "../../dummyData/dataType"
import { RootState } from "../../store"
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

const Color = () => {
	const number = useSelector((state:RootState)=>state.number)
	const filteredData = data.filter(item => item.number === number)[0]
	const menuData:menuDataType = filteredData.menu.menuData

	return(
		<>
			{(menuData as Array<colorType>).map(item => (
				<SelectBox key={uuidv4()}>
					<Title>{item.title}</Title>
					<SubMenuDiv>
						{item.subMenu.map(item => <SubTitle key={uuidv4()}>{item}</SubTitle>)}
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

const SubTitle = styled.p`
	font-size:12px;
	border:0.5px solid grey;
	height:30px;
	line-height: 30px;
	padding:5px;
	margin-right:5px;
	cursor:pointer;
`