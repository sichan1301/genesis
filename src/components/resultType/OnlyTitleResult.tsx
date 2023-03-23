import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { IOnlyTitleHistory } from "../../store/stateType";
import { v4 as uuidv4 } from 'uuid';
import { menuType } from "../../dummyData/dataType";

const OnlyTitleResult = () => {
	const history = useSelector((state:RootState) => state.history)
	const filteredHistory = (history as Array<IOnlyTitleHistory>).filter(item => item.menuType === menuType.onlyTitleType)

  return(
    <>
    	{
				filteredHistory.map(item => <p key={uuidv4()}>{item.text}</p>)
			}
    </>
  )
}


export default OnlyTitleResult