import { use } from "react";
import ApiDetailsShow from "./ApiShow"
export default function AllApi({ fetchApi }) {
  const apis = use(fetchApi);
  const arrApis = apis.foods;

  return (
    <div className="card">
      <h3>All Api Data : {apis.length}</h3>
     {
        arrApis.map( arrApi => <ApiDetailsShow arrApi={arrApi}></ApiDetailsShow>)
    }
    </div>
  );
}
