import { useState, useEffect, useMemo } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';
import { AgCharts } from 'ag-charts-react';
import { ModuleRegistry, AllEnterpriseModule } from 'ag-charts-enterprise';
import * as topojson from 'topojson-client';
import { People, ChatSquareText, FileText, CheckCircle, ArrowRight, CurrencyDollar, Globe } from 'react-bootstrap-icons';

// Register all AG Charts Enterprise modules (includes Map series)
ModuleRegistry.registerModules([AllEnterpriseModule]);

import PageHeading from '../components/PageHeading';
import KpiCard from '../components/KpiCard';

import salesData from '../data/salesData.json';
import './SalesReportPage.scss';

// Register ChartJS components for other page charts
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend);

const SalesReportPage = () => {
  useEffect(() => {
    document.title = 'Sales Report — Dashboards | Lusi Design';
  }, []);

  const [mapOptions, setMapOptions] = useState(null);

  useEffect(() => {
    fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json')
      .then((res) => res.json())
      .then((data) => {
        // Convert topojson to geojson features
        const countries = topojson.feature(data, data.objects.countries).features;

        // Filter for all African countries (inactive ones will be greyed out)
        const africaCountryNames = ['Benin', 'Burkina Faso', 'Cabo Verde', 'Cape Verde', "Côte d'Ivoire", 'Gambia', 'Ghana', 'Guinea', 'Guinea-Bissau', 'Liberia', 'Mali', 'Mauritania', 'Niger', 'Nigeria', 'Senegal', 'Sierra Leone', 'Togo', 'Angola', 'Cameroon', 'Central African Rep.', 'Central African Republic', 'Chad', 'Congo', 'Dem. Rep. Congo', 'Democratic Republic of the Congo', 'Eq. Guinea', 'Equatorial Guinea', 'Gabon', 'São Tomé and Principe', 'São Tomé and Príncipe', 'Sudan', 'S. Sudan', 'Burundi', 'Comoros', 'Djibouti', 'Eritrea', 'Ethiopia', 'Kenya', 'Malawi', 'Mauritius', 'Mozambique', 'Rwanda', 'Seychelles', 'Somalia', 'Somaliland', 'Tanzania', 'Uganda', 'Zambia', 'Zimbabwe'];

        const africaCountries = countries.filter((d) => africaCountryNames.includes(d.properties.name));

        const geoJsonTopology = {
          type: 'FeatureCollection',
          features: africaCountries,
        };

        const salesMap = {
          Nigeria: 255000,
          Ghana: 82000,
          "Côte d'Ivoire": 48000,
          Senegal: 29000,
          Cameroon: 20500,
        };

        const chartData = africaCountries.map((d) => {
          const countryName = d.properties.name;
          return {
            country: countryName,
            sales: salesMap[countryName] || 0,
          };
        });

        setMapOptions({
          topology: geoJsonTopology,
          series: [
            {
              type: 'map-shape',
              data: chartData,
              idKey: 'country',
              topologyIdKey: 'name',
              colorKey: 'sales',
              colorName: 'Sales',
              colorScale: {
                type: 'linear',
                domain: [0, 25000, 50000, 100000, 150000],
                range: ['#e5e7eb', '#dbeafe', '#60a5fa', '#2563eb', '#1d4ed8'],
              },
              highlightStyle: {
                item: {
                  fill: '#fbbf24',
                  stroke: '#d97706',
                },
              },
              tooltip: {
                renderer: (params) => {
                  const val = params.datum[params.colorKey];
                  const name = params.datum[params.idKey];
                  return {
                    content: `${name}: ${val > 0 ? '$' + val.toLocaleString() : 'No Sales'}`,
                  };
                },
              },
            },
          ],
          background: {
            visible: false,
          },
        });
      })
      .catch((err) => {
        console.error('Failed to load Africa map:', err);
      });
  }, []);

  // Funnel calculations
  const funnelPercentages = useMemo(() => {
    const { leads, contacted, interested, paying } = salesData.funnel;
    return {
      leadsToContacted: Math.round((contacted / leads) * 100),
      contactedToInterested: Math.round((interested / contacted) * 100),
      interestedToPaying: Math.round((paying / interested) * 100),
      overall: Math.round((paying / leads) * 100),
    };
  }, []);

  // Chart: Sales Split (Internal vs Marketers)
  const salesSplitData = useMemo(() => {
    return {
      labels: salesData.salesSplit.months,
      datasets: [
        {
          label: 'Internal Sales',
          data: salesData.salesSplit.internal,
          backgroundColor: 'hsl(220, 55%, 50%)',
          borderRadius: 4,
        },
        {
          label: 'Affiliate Marketers',
          data: salesData.salesSplit.marketers,
          backgroundColor: 'rgb(237, 108, 2)',
          borderRadius: 4,
        },
      ],
    };
  }, []);

  const salesSplitOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        align: 'end',
        labels: {
          usePointStyle: true,
          boxWidth: 8,
          font: { family: 'Inter, sans-serif', size: 11 },
        },
      },
    },
    scales: {
      x: { grid: { display: false } },
      y: {
        grid: { color: 'rgba(240, 240, 240, 0.8)' },
        title: { display: true, text: 'Revenue ($)', font: { size: 11 } },
      },
    },
  };

  // Sparkline Chart Configs
  const sparklineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
    scales: {
      x: { display: false },
      y: { display: false },
    },
    elements: {
      point: { radius: 0 },
    },
  };

  const aovSparkData = useMemo(() => {
    return {
      labels: salesData.performance.aov.history.map((_, i) => i),
      datasets: [
        {
          data: salesData.performance.aov.history,
          borderColor: 'hsl(220, 55%, 50%)',
          borderWidth: 2,
          tension: 0.3,
          fill: false,
        },
      ],
    };
  }, []);

  const cltvSparkData = useMemo(() => {
    return {
      labels: salesData.performance.cltv.history.map((_, i) => i),
      datasets: [
        {
          data: salesData.performance.cltv.history,
          borderColor: 'rgb(46, 125, 50)',
          borderWidth: 2,
          tension: 0.3,
          fill: false,
        },
      ],
    };
  }, []);

  // Interactive Africa map handlers are managed automatically by chartjs-chart-geo

  return (
    <div id="salesReportPage" className="SalesReportPage">
      <PageHeading title="Sales Report" />

      {/* KPI Cards Row */}
      <div className="KPI-grid">
        <KpiCard
          title="Total Leads"
          value={salesData.kpi.totalLeads.value.toLocaleString()}
          trend={
            <span className="KPI-trend positive">
              <ArrowRight /> {salesData.kpi.totalLeads.change}
            </span>
          }
          icon={<People />}
          iconVariant="default"
        />

        <KpiCard
          title="Contacted Leads"
          value={salesData.kpi.contactedLeads.value.toLocaleString()}
          trend={
            <span className="KPI-trend positive">
              <CheckCircle /> {salesData.kpi.contactedLeads.change}
            </span>
          }
          icon={<ChatSquareText />}
          iconVariant="success"
        />

        <KpiCard title="Proforma Invoices" value={salesData.kpi.proformaInvoices.count.toLocaleString()} trend={<span className="KPI-trend balanced">Value: ${salesData.kpi.proformaInvoices.value.toLocaleString()}</span>} icon={<FileText />} iconVariant="warning" />

        <KpiCard title="Invoices" value={salesData.kpi.invoices.count.toLocaleString()} trend={<span className="KPI-trend positive">Collected: ${salesData.kpi.invoices.value.toLocaleString()}</span>} icon={<CheckCircle />} iconVariant="success" />
      </div>

      {/* Sales Pipeline Funnel Card */}
      <div className="Funnel-card">
        <div className="Funnel-header">
          <h3>Sales Funnel Pipeline</h3>
          <span className="Funnel-subtitle">Lead conversion drop-offs and success rates</span>
        </div>
        <div className="Funnel-steps">
          <div className="Funnel-step">
            <span className="Step-label">Leads</span>
            <span className="Step-count">{salesData.funnel.leads.toLocaleString()}</span>
            <span className="Step-conversion">100% Volume</span>
          </div>

          <div className="Funnel-arrow">
            <ArrowRight />
            <span className="Arrow-rate">{funnelPercentages.leadsToContacted}%</span>
          </div>

          <div className="Funnel-step">
            <span className="Step-label">Contacted</span>
            <span className="Step-count">{salesData.funnel.contacted.toLocaleString()}</span>
            <span className="Step-conversion">Converted</span>
          </div>

          <div className="Funnel-arrow">
            <ArrowRight />
            <span className="Arrow-rate">{funnelPercentages.contactedToInterested}%</span>
          </div>

          <div className="Funnel-step">
            <span className="Step-label">Interested</span>
            <span className="Step-count">{salesData.funnel.interested.toLocaleString()}</span>
            <span className="Step-conversion">Qualified</span>
          </div>

          <div className="Funnel-arrow">
            <ArrowRight />
            <span className="Arrow-rate">{funnelPercentages.interestedToPaying}%</span>
          </div>

          <div className="Funnel-step" style={{ borderColor: 'var(--clr-success)' }}>
            <span className="Step-label" style={{ color: 'var(--clr-success)' }}>
              Paying Customers
            </span>
            <span className="Step-count">{salesData.funnel.paying.toLocaleString()}</span>
            <span className="Step-conversion" style={{ background: 'var(--clr-success-light)', color: 'var(--clr-success)' }}>
              {funnelPercentages.overall}% Overall
            </span>
          </div>
        </div>
      </div>

      {/* Charts & Interactive Section */}
      <div className="Charts-grid">
        {/* Sales Total Split */}
        <div className="Chart-card-wrapper double">
          <div className="Chart-card">
            <div className="Chart-header">
              <div>
                <h3>Sales Total</h3>
                <span className="Chart-subtitle">Revenue split: Internal Sales Team vs. Outside Affiliate Marketers</span>
              </div>
            </div>
            <div className="Chart-container">
              <Bar data={salesSplitData} options={salesSplitOptions} />
            </div>
          </div>
        </div>

        {/* Performance metrics (AOV & CLTV) */}
        <div className="Chart-card-wrapper">
          <div className="Chart-card">
            <div className="Chart-header">
              <div>
                <h3>Sales Performance Indicators</h3>
                <span className="Chart-subtitle">Key margins and transaction metrics</span>
              </div>
            </div>
            <div className="Performance-card-content">
              {/* Average Order Value */}
              <div className="Perf-stat-box">
                <span className="Perf-label">Average Order Value (AOV)</span>
                <div className="Perf-value-row">
                  <span className="Perf-value">${salesData.performance.aov.current.toLocaleString()}</span>
                  <span className="Perf-change positive">{salesData.performance.aov.change}</span>
                </div>
                <div className="Sparkline-container">
                  <Line data={aovSparkData} options={sparklineOptions} />
                </div>
              </div>

              {/* Customer Lifetime Value */}
              <div className="Perf-stat-box">
                <span className="Perf-label">Customer Lifetime Value (CLTV)</span>
                <div className="Perf-value-row">
                  <span className="Perf-value">${salesData.performance.cltv.current.toLocaleString()}</span>
                  <span className="Perf-change positive">{salesData.performance.cltv.change}</span>
                </div>
                <div className="Sparkline-container">
                  <Line data={cltvSparkData} options={sparklineOptions} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* West Africa Regional Sales Map Row */}
      <div className="Charts-grid">
        <div className="Chart-card-wrapper triple">
          <div className="Chart-card">
            <div className="Chart-header">
              <div>
                <h3>Sales by Country</h3>
                <span className="Chart-subtitle">Aquaculture equipment and feed demand distribution in West Africa</span>
              </div>
            </div>
            <div className="Map-card-wrapper" style={{ height: '380px', position: 'relative' }}>
              {!mapOptions && <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'var(--grey-500)', fontSize: '13px', fontWeight: '500' }}>Loading Africa Map...</div>}
              {mapOptions && <AgCharts options={mapOptions} style={{ height: '100%' }} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesReportPage;
