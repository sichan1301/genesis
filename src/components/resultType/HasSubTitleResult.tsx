import { IHasSubTitleHistory } from "../../store/stateType";

type HasSubTitleResultProps = {
  item:IHasSubTitleHistory
}
const HasSubTitleResult = ({item}:HasSubTitleResultProps) => {

  return( 
    <div>
      <p>{item.item.title}</p>
      <p>{item.item.subTitle}</p>
    </div> 
  )
}


export default HasSubTitleResult