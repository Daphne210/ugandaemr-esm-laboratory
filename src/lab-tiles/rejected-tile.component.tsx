import React from "react";
import { useTranslation } from "react-i18next";
import SummaryTile from "../summary-tiles/summary-tile.component";
import { useLabTestsStats } from "../summary-tiles/laboratory-summary.resource";

const RejectedTileComponent = () => {
  const { t } = useTranslation();

  const { data } = useLabTestsStats("");

  const filteredData = data?.filter(
    (item) => item?.fulfillerStatus === "DECLINED"
  );

  return (
    <SummaryTile
      label={t("orders", "Tests")}
      value={filteredData?.length}
      headerLabel={t("testsRejected", "Rejected")}
    />
  );
};

export default RejectedTileComponent;
