import { IRecommendHistory } from "../../store/stateType";
import { v4 as uuidv4 } from 'uuid';
import { data } from "../../dummyData/data";
import { useEffect } from "react";

type RecommendResultProps = {
  item?:IRecommendHistory
}

const RecommendResult = ({item}:RecommendResultProps) => {
  const title = data.filter(item => item.number === 9)[0].title
  
  return(
    <div>
    {
      item ? <><h2>{item.title}</h2><ul>{item.item.option.map(item => <li key={uuidv4()}>{item}</li>)} </ul></>:<h2>{title}</h2>
    }
    </div>
  )
}


export default RecommendResult