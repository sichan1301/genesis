import { useSelector } from "react-redux"
import { menuType } from "../../dummyData/dataType"
import { IPackageHistory, RootState } from "../../store"
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from "react";


const PackageResult = () => {
  const history = useSelector((state:RootState) => state.history)
  const tenHistory = useSelector((state:RootState) => state.tenHistory)
  const newHistory = history.concat(tenHistory)
  console.log(newHistory);
  
  const filteredHistory = (newHistory as Array<IPackageHistory>).filter(item =>item.menuType === menuType.package)

  return(
    <>
      {
				filteredHistory.map(item =><div key={uuidv4()}> 
          <p>{item.number}.{item.newItem.title}</p>
            <ul>
              {item.newItem.option.map(item => <li key={uuidv4()}>{item}</li>)}
            </ul>
          </div>
        )
			}
    </>
  )
}


export default PackageResult