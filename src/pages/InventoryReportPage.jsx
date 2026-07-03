/* eslint-disable react/prop-types */
import { useState, useMemo, useEffect } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend } from 'chart.js';
import { Doughnut, Bar, Line } from 'react-chartjs-2';
import { useReactTable, getCoreRowModel, getPaginationRowModel, getSortedRowModel, getFilteredRowModel, flexRender } from '@tanstack/react-table';
import { BoxSeam, ExclamationTriangle, CheckCircle, ArrowUpRight, ArrowDownRight, ArrowRight, ChevronLeft, ChevronRight, ListTask, XCircle, Calendar3 } from 'react-bootstrap-icons';

// Component imports
import PageHeading from '../components/PageHeading';
import KpiCard from '../components/KpiCard';
import { Button } from '../components/Buttons';
import Chip from '../components/Chip';

// Data import
import inventoryData from '../data/inventoryData.json';

import './InventoryReportPage.scss';

// Register ChartJS
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend);

const InventoryReportPage = () => {
  useEffect(() => {
    document.title = 'Inventory Report — Dashboards | Lusi Design';
  }, []);

  // Table States
  const [sorting, setSorting] = useState([]);
  const [globalFilter, setGlobalFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  // KPI Metrics calculation
  const metrics = useMemo(() => {
    const totalItems = inventoryData.length;
    const totalStockVal = inventoryData.reduce((acc, curr) => acc + curr.value, 0);
    const lowStockCount = inventoryData.filter((item) => item.status === 'Low Stock').length;
    const outOfStockCount = inventoryData.filter((item) => item.status === 'Out of Stock').length;
    const alertCount = lowStockCount + outOfStockCount;

    return {
      totalItems,
      totalStockVal,
      lowStockCount,
      outOfStockCount,
      alertCount,
    };
  }, []);

  // Filter Table Data
  const filteredTableData = useMemo(() => {
    if (statusFilter === 'All') return inventoryData;
    return inventoryData.filter((item) => item.status === statusFilter);
  }, [statusFilter]);

  // Chart 1: Doughnut Chart - Stock Value Share by Category
  const doughnutData = useMemo(() => {
    const categories = {};
    inventoryData.forEach((item) => {
      categories[item.category] = (categories[item.category] || 0) + item.value;
    });

    return {
      labels: Object.keys(categories),
      datasets: [
        {
          data: Object.values(categories),
          backgroundColor: ['hsl(220, 55%, 50%)', 'rgb(46, 125, 50)', 'rgb(237, 108, 2)', 'rgb(2, 158, 242)', 'rgb(211, 49, 49)'],
          borderWidth: 1,
          borderColor: 'var(--clr-bg-white)',
        },
      ],
    };
  }, []);

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right',
        labels: {
          usePointStyle: true,
          boxWidth: 8,
          font: { family: 'Inter, sans-serif', size: 11 },
          padding: 15,
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const val = context.raw;
            return ` Value: $${val.toLocaleString()}`;
          },
        },
      },
    },
  };

  // Progress bars: Feed & Raw Materials Levels
  const feedItems = useMemo(() => {
    return inventoryData
      .filter((item) => item.category === 'Fish Feed' || item.category === 'Raw Materials')
      .slice(0, 5)
      .map((item) => {
        const maxVal = item.reorderLevel * 2.5;
        const percentage = Math.min(Math.round((item.stockLevel / maxVal) * 100), 100);
        return {
          ...item,
          percentage,
          maxVal,
        };
      });
  }, []);

  // Chart 2: Line Chart - Live Fish Mortality Rates by Stage
  const mortalityData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
    datasets: [
      {
        label: 'Fry',
        data: [1.2, 2.1, 1.8, 4.5, 2.3, 1.1],
        borderColor: 'rgb(211, 49, 49)',
        backgroundColor: 'rgba(211, 49, 49, 0.1)',
        tension: 0.3,
        fill: false,
      },
      {
        label: 'Fingerling',
        data: [0.8, 1.1, 1.4, 1.9, 1.2, 0.7],
        borderColor: 'rgb(237, 108, 2)',
        backgroundColor: 'rgba(237, 108, 2, 0.1)',
        tension: 0.3,
        fill: false,
      },
      {
        label: 'Juvenile',
        data: [0.3, 0.4, 0.2, 0.6, 0.3, 0.2],
        borderColor: 'hsl(220, 55%, 50%)',
        backgroundColor: 'rgba(220, 55, 50, 0.1)',
        tension: 0.3,
        fill: false,
      },
    ],
  };

  const mortalityOptions = {
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
      tooltip: {
        callbacks: {
          label: function (context) {
            return ` Mortality: ${context.raw}%`;
          },
        },
      },
    },
    scales: {
      x: { grid: { display: false } },
      y: {
        grid: { color: 'rgba(240, 240, 240, 0.8)' },
        title: { display: true, text: 'Mortality Rate (%)', font: { size: 11 } },
      },
    },
  };

  // Chart 3: Stacked Bar Chart - Expiry Risk by Time Horizon
  const expiryData = {
    labels: ['< 30 Days', '30-60 Days', '60-90 Days', '90+ Days'],
    datasets: [
      {
        label: 'Feed Products',
        data: [3100, 5400, 12000, 22000],
        backgroundColor: 'hsl(220, 55%, 50%)',
        borderRadius: 4,
      },
      {
        label: 'Raw Materials',
        data: [1400, 2800, 3400, 10100],
        backgroundColor: 'rgb(237, 108, 2)',
        borderRadius: 4,
      },
    ],
  };

  const expiryOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        stacked: true,
        grid: { display: false },
      },
      y: {
        stacked: true,
        grid: { color: 'rgba(240, 240, 240, 0.8)' },
        title: { display: true, text: 'Value ($)', font: { size: 11 } },
      },
    },
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
  };

  // Chart 4: Horizontal Bar Chart - DSI by Category
  const dsiData = {
    labels: ['Live Fish', 'Fish Feed', 'Raw Materials', 'Test Kits'],
    datasets: [
      {
        label: 'Days Sales of Inventory (DSI)',
        data: [14, 28, 42, 65],
        backgroundColor: [
          'rgb(46, 125, 50)',
          'hsl(220, 55%, 50%)',
          'rgb(237, 108, 2)',
          'rgb(211, 49, 49)',
        ],
        borderRadius: 4,
        barThickness: 16,
      },
    ],
  };

  const dsiOptions = {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: function (context) {
            return ` ${context.raw} Days`;
          },
        },
      },
    },
    scales: {
      x: {
        grid: { color: 'rgba(240, 240, 240, 0.8)' },
        title: { display: true, text: 'Days', font: { size: 11 } },
      },
      y: { grid: { display: false } },
    },
  };

  // Table Columns definition
  const columns = useMemo(
    () => [
      {
        accessorKey: 'id',
        header: 'Item ID',
        cell: (info) => <span className="font-medium">{info.getValue()}</span>,
      },
      {
        accessorKey: 'name',
        header: 'Item Name',
        cell: (info) => <span>{info.getValue()}</span>,
      },
      {
        accessorKey: 'category',
        header: 'Category',
        cell: (info) => <span>{info.getValue()}</span>,
      },
      {
        accessorKey: 'stockLevel',
        header: 'Stock Level',
        cell: (info) => {
          const row = info.row.original;
          return (
            <span>
              {info.getValue().toLocaleString()} <span style={{ color: 'var(--grey-500)', fontSize: '12px' }}>{row.unit}</span>
            </span>
          );
        },
      },
      {
        accessorKey: 'reorderLevel',
        header: 'Reorder Point',
        cell: (info) => <span>{info.getValue().toLocaleString()}</span>,
      },
      {
        accessorKey: 'value',
        header: 'Stock Value',
        cell: (info) => <span>${info.getValue().toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>,
      },
      {
        accessorKey: 'status',
        header: 'Status',
        cell: (info) => {
          const status = info.getValue();
          let chipColor = 'default';
          if (status === 'In Stock') chipColor = 'success';
          if (status === 'Low Stock') chipColor = 'warning';
          if (status === 'Out of Stock') chipColor = 'error';

          return (
            <Chip color={chipColor} style="fill">
              <Chip.Text>{status}</Chip.Text>
            </Chip>
          );
        },
      },
    ],
    []
  );

  // Table Instance
  const table = useReactTable({
    data: filteredTableData,
    columns,
    state: {
      sorting,
      globalFilter,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    initialState: {
      pagination: {
        pageSize: 7,
      },
    },
  });

  return (
    <div className="InventoryReportPage">
      <PageHeading title="Inventory Report" />

      {/* KPI Cards Row */}
      <div className="KPI-grid">
        <KpiCard
          title="Unique Products"
          value={`${metrics.totalItems} items`}
          trend={
            <span className="KPI-trend balanced">
              <ArrowRight /> No change from yesterday
            </span>
          }
          icon={<ListTask />}
          iconVariant="default"
        />

        <KpiCard
          title="Total Stock Value"
          value={`$${metrics.totalStockVal.toLocaleString()}`}
          trend={
            <span className="KPI-trend positive">
              <ArrowUpRight /> +4.2% vs last week
            </span>
          }
          icon={<BoxSeam />}
          iconVariant="success"
        />

        <KpiCard
          title="Expiring Soon"
          value="3 products"
          trend={
            <span className="KPI-trend balanced">
              <ArrowRight /> Best before Aug 2026
            </span>
          }
          icon={<Calendar3 />}
          iconVariant="warning"
        />

        <KpiCard
          title="Low Stock Alerts"
          value={`${metrics.alertCount} Items`}
          trend={
            <span className={`KPI-trend ${metrics.alertCount > 0 ? 'negative' : 'positive'}`}>
              {metrics.alertCount > 0 ? (
                <>
                  <ArrowDownRight /> Urgent restock needed
                </>
              ) : (
                <>
                  <CheckCircle /> Healthy Levels
                </>
              )}
            </span>
          }
          icon={<ExclamationTriangle />}
          iconVariant={metrics.alertCount > 0 ? 'error' : 'success'}
        />
      </div>

      {/* Visual Charts row 1 */}
      <div className="Charts-grid">
        <div className="Chart-card-wrapper">
          <div className="Chart-card">
            <div className="Chart-header">
              <div>
                <h3>Stock Value Share</h3>
                <span className="Chart-subtitle">Asset allocation percentage by product categories</span>
              </div>
            </div>
            <div className="Chart-container">
              <Doughnut data={doughnutData} options={doughnutOptions} />
            </div>
          </div>
        </div>

        <div className="Chart-card-wrapper">
          <div className="Chart-card">
            <div className="Chart-header">
              <div>
                <h3>Expiry Risk & Shelf-Life Aging</h3>
                <span className="Chart-subtitle">Inventory value approaching expiration</span>
              </div>
            </div>
            <div className="Chart-container">
              <Bar data={expiryData} options={expiryOptions} />
            </div>
          </div>
        </div>

        <div className="Chart-card-wrapper">
          <div className="Chart-card">
            <div className="Chart-header">
              <div>
                <h3>Feed & Raw Materials Levels</h3>
                <span className="Chart-subtitle">Current stock levels vs capacity limit</span>
              </div>
            </div>
            <div className="Progress-list">
              {feedItems.map((item) => (
                <div key={item.id} className="Progress-item">
                  <div className="Progress-label">
                    <span className="Progress-name">{item.name}</span>
                    <span className="Progress-value">
                      {item.stockLevel} / {item.maxVal} {item.unit.split(' ')[0]}
                    </span>
                  </div>
                  <div className="Progress-bar-bg">
                    <div
                      className={`Progress-bar-fill ${item.status === 'Low Stock' ? 'low' : 'normal'}`}
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Visual Charts row 2 */}
      <div className="Charts-grid">
        <div className="Chart-card-wrapper">
          <div className="Chart-card">
            <div className="Chart-header">
              <div>
                <h3>Live Fish Stocking Density</h3>
                <span className="Chart-subtitle">Biomass distribution and tank utilization</span>
              </div>
            </div>
            <div className="Density-card-content">
              <div className="Density-stat-box">
                <span className="Density-stat-label">Total Biomass</span>
                <span className="Density-stat-value">45.2 Tons</span>
              </div>
              <div className="Density-stages">
                <div className="Stage-item">
                  <span className="Stage-name">Fry</span>
                  <span className="Stage-count">85,000 pcs</span>
                </div>
                <div className="Stage-item">
                  <span className="Stage-name">Fingerling</span>
                  <span className="Stage-count">42,000 pcs</span>
                </div>
                <div className="Stage-item">
                  <span className="Stage-name">Juvenile</span>
                  <span className="Stage-count">5,000 pcs</span>
                </div>
                <div className="Stage-item">
                  <span className="Stage-name">Market-Ready</span>
                  <span className="Stage-count">1,200 pcs</span>
                </div>
              </div>
              <div className="Density-capacity">
                <div className="Capacity-header">
                  <span>Pond/Tank Utilization</span>
                  <span>78%</span>
                </div>
                <div className="Capacity-bar-bg">
                  <div className="Capacity-bar-fill" style={{ width: '78%' }} />
                </div>
                <span className="Capacity-desc">14 of 18 active ponds</span>
              </div>
            </div>
          </div>
        </div>

        <div className="Chart-card-wrapper double">
          <div className="Chart-card">
            <div className="Chart-header">
              <div>
                <h3>Live Fish Mortality & Survival</h3>
                <span className="Chart-subtitle">Weekly mortality percentage trend by growth stage</span>
              </div>
            </div>
            <div className="Chart-container">
              <Line data={mortalityData} options={mortalityOptions} />
            </div>
          </div>
        </div>
      </div>

      {/* Visual Charts row 3 */}
      <div className="Charts-grid">
        <div className="Chart-card-wrapper triple">
          <div className="Chart-card">
            <div className="Chart-header">
              <div>
                <h3>Days Sales of Inventory (DSI)</h3>
                <span className="Chart-subtitle">Turnover time (days) by category (lower is faster)</span>
              </div>
            </div>
            <div className="Chart-container">
              <Bar data={dsiData} options={dsiOptions} />
            </div>
          </div>
        </div>
      </div>

      {/* Inventory List table */}
      <div className="Table-section">
        <div className="Table-header-wrapper">
          <div className="Table-title-box">
            <h3>Stock Inventory Status</h3>
            <p>Track reorder points, current physical counts, and total asset valuation.</p>
          </div>
          <div className="Table-actions">
            <div className="Table-status-filters">
              <Button variant={statusFilter === 'All' ? 'fill' : 'outline'} color="secondary" size="small" onClick={() => setStatusFilter('All')}>
                All
              </Button>
              <Button variant={statusFilter === 'In Stock' ? 'fill' : 'outline'} color="secondary" size="small" onClick={() => setStatusFilter('In Stock')}>
                In Stock
              </Button>
              <Button variant={statusFilter === 'Low Stock' ? 'fill' : 'outline'} color="secondary" size="small" onClick={() => setStatusFilter('Low Stock')}>
                Low Stock
              </Button>
              <Button variant={statusFilter === 'Out of Stock' ? 'fill' : 'outline'} color="secondary" size="small" onClick={() => setStatusFilter('Out of Stock')}>
                Out of Stock
              </Button>
            </div>
            <input type="text" value={globalFilter ?? ''} onChange={(e) => setGlobalFilter(e.target.value)} className="Table-search-input" placeholder="Search items..." />
          </div>
        </div>

        <div className="Table-container">
          <table className="Custom-table">
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th key={header.id} onClick={header.column.getToggleSortingHandler()}>
                      {flexRender(header.column.columnDef.header, header.getContext())}
                      <span className="sort-indicator">
                        {{
                          asc: ' 🔼',
                          desc: ' 🔽',
                        }[header.column.getIsSorted()] ?? ''}
                      </span>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className={cell.column.columnDef.cell === 'font-medium' ? 'font-medium' : ''}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Table pagination */}
        <div className="Pagination">
          <div className="Pagination-info">
            Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()} ({table.getFilteredRowModel().rows.length} total items)
          </div>
          <div className="Pagination-buttons">
            <Button variant="outline" size="small" onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
              <ChevronLeft /> Previous
            </Button>
            <span>
              {table.getState().pagination.pageIndex + 1} / {table.getPageCount()}
            </span>
            <Button variant="outline" size="small" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
              Next <ChevronRight />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryReportPage;
