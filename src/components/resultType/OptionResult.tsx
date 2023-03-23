import { useSelector } from "react-redux"
import { menuType } from "../../dummyData/dataType"
import { RootState } from "../store/store"
import { IOptionHistory,IRecommendHistory } from "../store/stateType"
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from "react";


const OptionResult = () => {
  const history = useSelector((state:RootState) => state.history)
  const tenHistory = useSelector((state:RootState) => state.tenHistory)
  const newHistory = history.concat(tenHistory)

  const filteredHistory = (newHistory as Array<IOptionHistory>).filter(item =>item.menuType === menuType.option)

  return(
    <>
      {
				filteredHistory.map(item =><div key={uuidv4()}> 
          <p>{item.newItem.title}</p>
            <ul>
              {item.newItem.option.map(item => <li key={uuidv4()}>{item}</li>)}
            </ul>
          </div>
        )
			}
    </>
  )
}


export default OptionResult