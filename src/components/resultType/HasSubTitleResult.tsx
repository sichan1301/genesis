import { IHasSubTitleHistory } from "../../store/stateType";

type HasSubTitleResultProps = {
  item:IHasSubTitleHistory
}
const HasSubTitleResult = ({item}:HasSubTitleResultProps) => {
  return( 
    <>
      <h2>{item.title}</h2>
      <p>{item.item.title}</p>
      <p>{item.item.subTitle}</p>
    </> 
  )
}


export default HasSubTitleResult