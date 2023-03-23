import { IRecommendHistory } from "../../store/stateType";
import { v4 as uuidv4 } from 'uuid';

type RecommendResultProps = {
  item:IRecommendHistory
}

const RecommendResult = ({item}:RecommendResultProps) => {
  return(
    <div>
      <p>{item.item.title}</p>
      <ul>
        {item.item.option.map(item => <li key={uuidv4()}>{item}</li>)}
      </ul>
    </div>
  )
}


export default RecommendResult