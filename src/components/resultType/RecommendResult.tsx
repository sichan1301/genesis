import { useSelector } from "react-redux"
import { menuType } from "../../dummyData/dataType"
import { IRecommendHistory, RootState } from "../../store"
import { v4 as uuidv4 } from 'uuid';


const RecommendResult = () => {
  const history = useSelector((state:RootState) => state.history)
  const tenHistory = useSelector((state:RootState) => state.tenHistory)
  const newHistory = history.concat(tenHistory)
  console.log(newHistory);
  
  const filteredHistory = (newHistory as Array<IRecommendHistory>).filter(item =>item.menuType === menuType.recommend)

  return(
    <>
      {
				filteredHistory.map(item =><div key={uuidv4()}> 
          <p>{item.number}.{item.item.title}</p>
            <ul>
              {item.item.option.map(item => <li key={uuidv4()}>{item}</li>)}
            </ul>
          </div>
        )
			}
    </>
  )
}


export default RecommendResult