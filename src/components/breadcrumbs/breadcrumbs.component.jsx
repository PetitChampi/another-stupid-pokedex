import "./breadcrumbs.styles.scss";

import ConditionalWrapper from "../conditionalWrapper/conditionalWrapper.component";

import { Link } from "react-router-dom";

function Breadcrumbs({ pathList }) {
  return (
    <div className="breadcrumbs">
      {
        pathList.map((item, index, list) => {
          return (
            <ConditionalWrapper
              key={item.name}
              condition={item.path}
              wrapper={children => <Link to={item.path}>{children}</Link>}
            >
              <span className={`breadcrumbs_text ${item.path && "breadcrumbs_link"}`}>{item.name}</span>
              <span>{(index !== list.length - 1) && " / "}</span>
            </ConditionalWrapper>
          );
        })
      }
    </div>
  );
}

export default Breadcrumbs;