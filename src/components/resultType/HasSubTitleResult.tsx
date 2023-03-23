import { useEffect } from "react"
import { useSelector } from "react-redux"
import { hasSubTitleType, menuType } from "../../dummyData/dataType"
import { v4 as uuidv4 } from 'uuid';
import { IHasSubTitleHistory, RootState } from "../../store"

const HasSubTitleResult = () => {
  const history = useSelector((state:RootState) => state.history)
  const tenHistory = useSelector((state:RootState) => state.tenHistory)
  const newHistory = history.concat(tenHistory)
	const filteredHistory = (newHistory as Array<IHasSubTitleHistory>).filter(item => item.menuType === menuType.hasSubTitleType)

  console.log(filteredHistory);

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