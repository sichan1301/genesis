import { IColorHistory } from "../../store/stateType";

type ColorResultProps = {
  item:IColorHistory
}

const ColorResult = ({item}:ColorResultProps) => {
  return (
    <>
      <h2>{item.title}</h2>
      <p>{item.item}</p>
    </>
  )
}

export default ColorResult