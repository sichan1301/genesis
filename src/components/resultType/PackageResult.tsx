import { useSelector } from "react-redux"
import { menuType } from "../../dummyData/dataType"
import { IPackageHistory, RootState } from "../../store"
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from "react";


const PackageResult = () => {
  const history = useSelector((state:RootState) => state.history)
  const filteredHistory = (history as Array<IPackageHistory>).filter(item =>item.menuType === menuType.package)

  useEffect(()=>{
    console.log(filteredHistory);
  },[])

  return(
    <>
      {
				filteredHistory.map(item =><> 
          <p key={uuidv4()}>{item.number}.{item.item.title}</p>
            <ul>
              {item.item.option.map(item => <li key={uuidv4()}>{item}</li>)}
            </ul>
          </>
        )
			}
    </>
  )
}


export default PackageResult