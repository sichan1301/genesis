import { useSelector } from "react-redux"
import { IColorHistory, RootState } from "../../store"
import { v4 as uuidv4 } from 'uuid';
import { menuType } from "../../dummyData/dataType";


const ColorResult = () => {
  const history = useSelector((state:RootState) => state.history)
  const tenHistory = useSelector((state:RootState) => state.tenHistory)
  const newHistory = history.concat(tenHistory)
	const filteredHistory = (newHistory as Array<IColorHistory>).filter(item => item.menuType === menuType.color)
  return(
    <>
      {
        filteredHistory.map(item => <p key={uuidv4()}>{item.text}</p>)
      }
    </>
  )
}

export default ColorResult