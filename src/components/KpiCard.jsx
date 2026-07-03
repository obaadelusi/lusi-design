/* eslint-disable react/prop-types */
import { Card, CardBody } from "./Cards";
import "./KpiCard.scss";

const KpiCard = ({ title, value, trend, icon, iconVariant }) => {
  return (
    <Card className="KPI-card">
      <CardBody>
        <div className="KPI-info">
          <span className="KPI-title">{title}</span>
          <h3 className="KPI-value">{value}</h3>
          {trend}
        </div>
        {icon && (
          <div className={`KPI-icon-box ${iconVariant || "default"}`}>
            {icon}
          </div>
        )}
      </CardBody>
    </Card>
  );
};

export default KpiCard;
