import { useSelector } from "react-redux"
import { IColor, RootState } from "../../store"
import { v4 as uuidv4 } from 'uuid';
import { menuType } from "../../dummyData/dataType";


const ColorResult = () => {
  const history = useSelector((state:RootState)=>state.history)
	const filteredHistory = (history as Array<IColor>).filter(item => item.menuType === menuType.color)
  return(
    <>
      {
        filteredHistory.map(item => <p key={uuidv4()}>{item.number}.{item.text}</p>)
      }
    </>
  )
}

export default ColorResult