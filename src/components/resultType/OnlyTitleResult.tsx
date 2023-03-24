import { IOnlyTitleHistory } from "../../store/stateType";

type OnlyTitleResultProps = {
  item: IOnlyTitleHistory
}
const OnlyTitleResult = ({item}:OnlyTitleResultProps) => {
  return (
    <>
      <h2>{item.title}</h2>
      <p>{item.item.title}</p>
      <p>{item.item?.subTitle}</p>
    </>
  )
}


export default OnlyTitleResult