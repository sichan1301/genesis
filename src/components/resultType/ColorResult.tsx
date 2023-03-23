import { IColorHistory } from "../../store/stateType";

type ColorResultProps = {
  item:IColorHistory
}

const ColorResult = ({item}:ColorResultProps) => {
  return <p>{item.item}</p>
}

export default ColorResult