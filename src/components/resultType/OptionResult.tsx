import { useSelector } from "react-redux"
import { menuType } from "../../dummyData/dataType"
import { RootState } from "../../store/store"
import { IOptionHistory } from "../../store/stateType"
import { v4 as uuidv4 } from 'uuid';


const OptionResult = () => {
  const history = useSelector((state:RootState) => state.history)
  const filteredHistory = (history as Array<IOptionHistory>).filter(item =>item.menuType === menuType.option)

  return(
    <>
      <h2>옵션 선택</h2>
      {
				filteredHistory.map(item =>
        <div key={uuidv4()}> 
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