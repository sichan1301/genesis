import { useSelector } from "react-redux"
import { menuType } from "../../dummyData/dataType"
import { IPackageHistory, RootState } from "../../store"
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from "react";


const PackageResult = () => {
  const history = useSelector((state:RootState) => state.history)
  const filteredHistory = (history as Array<IPackageHistory>).filter(item =>item.menuType === menuType.package)

  return(
    <>
      {
				filteredHistory.map(item =><div key={uuidv4()}> 
          <p>{item.number}.{item.item.title}</p>
            <ul>
              {item.item.option.map(item => <li key={uuidv4()}>{item}</li>)}
            </ul>
          </div>
        )
			}
    </>
  )
}


export default PackageResult