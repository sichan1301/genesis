import { useSelector } from "react-redux"
import { menuType } from "../../dummyData/dataType"
import { RootState } from "../../store/store"
import { IOptionHistory } from "../../store/stateType"
import { v4 as uuidv4 } from 'uuid';
import { data } from "../../dummyData/data";

const OptionResult = () => {
  const tenHistory = useSelector((state:RootState) => state.tenHistory)
  const filteredHistory = (tenHistory as Array<IOptionHistory>).filter(item =>item.menuType === menuType.option)
  const title = data.filter(item =>item.number===10)[0].title
  return(
    <>
      <h2>{title}</h2>
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