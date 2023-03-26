import { IOptionHistory } from "../../store/stateType";
import { v4 as uuidv4 } from 'uuid';
import { data } from "../../dummyData/data";

type OptionResultProps = {
  item:IOptionHistory
}

const OptionResult = ({item}:OptionResultProps) => {
  const title = data[8].title
  
  return(
    <>
       <>
        <h2>{title}</h2>
        <p>{item.item.title}</p>
        <ul>{item.item.option && item.item.option.map(item => <li key={uuidv4()}>{item}</li>)} </ul>
      </>
        
    </>
  )
}


export default OptionResult