import { useSelector } from "react-redux"
import { menuType } from "../../dummyData/dataType"
import { RootState } from "../../store/store"
import { IOptionHistory } from "../../store/stateType"
import { v4 as uuidv4 } from 'uuid';

const OptionResult = () => {
  const tenHistory = useSelector((state:RootState) => state.tenHistory)
  const filteredHistory = (tenHistory as Array<IOptionHistory>).filter(item =>item.menuType === menuType.option)

  return(
    <>
      {
				filteredHistory.map(item =>
        <div key={uuidv4()}> 
          <h2>{item.title}</h2>
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