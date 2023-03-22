import { useSelector } from "react-redux";
import { IOnlyTitleHistory, RootState } from "../../store";
import { v4 as uuidv4 } from 'uuid';
import { menuType } from "../../dummyData/dataType";

const OnlyTitleResult = () => {
	const history = useSelector((state:RootState)=>state.history)
	const filteredHistory = (history as Array<IOnlyTitleHistory>).filter(item => item.menuType === menuType.onlyTitleType)

  return(
    <>
    	{
				filteredHistory.map(item => <p key={uuidv4()}>{item.number}.{item.text}</p>)
			}
    </>
  )
}


export default OnlyTitleResult