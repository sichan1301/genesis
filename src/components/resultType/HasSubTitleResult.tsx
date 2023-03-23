import { useSelector } from "react-redux"
import { menuType } from "../../dummyData/dataType"
import { v4 as uuidv4 } from 'uuid';
import { RootState } from "../../store/store"
import { IHasSubTitleHistory } from "../../store/stateType";

const HasSubTitleResult = () => {
  const history = useSelector((state:RootState) => state.history)
	const filteredHistory = (history as Array<IHasSubTitleHistory>).filter(item => item.menuType === menuType.hasSubTitleType)

  return( 
    <>
      {
        filteredHistory.map(item => (
          <div key={uuidv4()}>
            <p>{item.item.title}</p>
            <p>{item.item.subTitle}</p>
          </div>
        ))
      }
    </>
  )
}


export default HasSubTitleResult