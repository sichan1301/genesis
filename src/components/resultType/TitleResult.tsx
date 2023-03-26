import { ITitleHistory } from "../../store/stateType";

type TitleResultProps = {
  item: ITitleHistory
}
const TitleResult = ({item}:TitleResultProps) => {
  return (
    <>
      <h2>{item.title}</h2>
      <p>{item.item.title}</p>
      <p>{item.item?.subTitle}</p>
    </>
  )
}


export default TitleResult