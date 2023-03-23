import { IOnlyTitleHistory } from "../../store/stateType";

type OnlyTitleResultProps = {
  item: IOnlyTitleHistory
}
const OnlyTitleResult = ({item}:OnlyTitleResultProps) => {
  return <p>{item.text}</p>
}


export default OnlyTitleResult