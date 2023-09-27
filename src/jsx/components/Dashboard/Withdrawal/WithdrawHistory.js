import React, { Fragment } from "react";

import SimpleDataTable from "../../table/SimpleDataTable";

const WithdrawHistory = () => {
  return (
    <div>
      <Fragment>
        <div className="row">
          <SimpleDataTable title="WITHDRAW HISTORY"  />
        </div>
      </Fragment>
    </div>
  );
};

export default WithdrawHistory;
