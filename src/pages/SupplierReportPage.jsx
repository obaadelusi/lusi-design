import { useEffect } from "react";
import PageHeading from "../components/PageHeading";
import { Card, CardBody } from "../components/Cards";

const SupplierReportPage = () => {
  useEffect(() => {
    document.title = "Supplier Report — Dashboards | Lusi Design";
  }, []);

  return (
    <div id="supplierReportPage" className="SupplierReportPage">
      <PageHeading title="Supplier Report" />
      <div className="Page__container">
        <Card>
          <CardBody>
            <h3 style={{ margin: "0 0 8px 0" }}>Supplier Management</h3>
            <p style={{ color: "var(--grey-600)", margin: 0 }}>
              This section tracks raw material suppliers, hormone spawning batches, feed manufacturers, and procurement logistics. (Report interface is currently under construction).
            </p>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default SupplierReportPage;
