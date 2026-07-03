import { useEffect, useState, useMemo } from 'react';
import PageHeading from '../components/PageHeading';
import KpiCard from '../components/KpiCard';
import Chip from '../components/Chip';
import { Button } from '../components/Buttons';
import { ArrowUpRight, ArrowDownRight, ArrowRight } from 'react-bootstrap-icons';
import MonthSelector from '../components/MonthSelector';

// Chart.js imports
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend } from 'chart.js';
import { Line, Bar, Pie } from 'react-chartjs-2';

// TanStack Table imports
import { useReactTable, getCoreRowModel, getPaginationRowModel, getSortedRowModel, getFilteredRowModel, flexRender } from '@tanstack/react-table';

// Data imports
import overviewChartsData from '../data/overviewChartsData.json';
import overviewTableData from '../data/overviewTableData.json';

import './OverviewPage.scss';

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend);

const BusinessOverviewPage = () => {
  const [selectedRange, setSelectedRange] = useState('This month');

  useEffect(() => {
    document.title = 'Overview | Lusi Design';
  }, []);

  // Table states
  const [sorting, setSorting] = useState([]);
  const [globalFilter, setGlobalFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  // Chart 1: Line Graph - Price Trends
  const lineChartData = {
    labels: overviewChartsData.priceTrends.map((d) => d.month),
    datasets: [
      {
        label: 'Artemia ($/Can)',
        data: overviewChartsData.priceTrends.map((d) => d.artemia),
        borderColor: 'hsl(220, 55%, 50%)',
        backgroundColor: 'rgba(37, 99, 235, 0.1)',
        tension: 0.4,
        borderWidth: 3,
        pointBackgroundColor: 'hsl(220, 55%, 50%)',
        fill: false,
      },
      {
        label: 'Fish Meal ($/Bag)',
        data: overviewChartsData.priceTrends.map((d) => d.fishMeal),
        borderColor: 'rgb(46, 125, 50)',
        backgroundColor: 'rgba(46, 125, 50, 0.1)',
        tension: 0.4,
        borderWidth: 3,
        pointBackgroundColor: 'rgb(46, 125, 50)',
        fill: false,
      },
      {
        label: 'Catfish Jumbo ($/kg)',
        data: overviewChartsData.priceTrends.map((d) => d.catfishJumbo),
        borderColor: 'rgb(237, 108, 2)',
        backgroundColor: 'rgba(237, 108, 2, 0.1)',
        tension: 0.4,
        borderWidth: 3,
        pointBackgroundColor: 'rgb(237, 108, 2)',
        fill: false,
      },
    ],
  };

  const lineChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        align: 'center',
        labels: {
          usePointStyle: true,
          pointStyle: 'rect',
          boxWidth: 8,
          padding: 15,
          font: { family: 'Inter, sans-serif', size: 10 },
        },
      },
      tooltip: {
        padding: 12,
        backgroundColor: 'rgba(10, 10, 10, 0.9)',
        titleFont: { family: 'Inter, sans-serif', weight: 'bold' },
        bodyFont: { family: 'Inter, sans-serif' },
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { font: { family: 'Inter, sans-serif' } },
      },
      y: {
        grid: {
          color: 'rgba(240, 240, 240, 0.8)',
          drawBorder: false,
        },
        ticks: { font: { family: 'Inter, sans-serif' } },
      },
    },
  };

  // Chart 2: Pie Chart - Market Share
  const pieChartData = {
    labels: overviewChartsData.marketShare.map((d) => d.crop),
    datasets: [
      {
        data: overviewChartsData.marketShare.map((d) => d.percentage),
        backgroundColor: ['hsl(220, 55%, 50%)', 'rgb(46, 125, 50)', 'rgb(237, 108, 2)', 'rgb(2, 158, 242)', 'rgb(211, 49, 49)'],
        borderWidth: 2,
        borderColor: '#fff',
      },
    ],
  };

  const pieChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right',
        labels: {
          usePointStyle: true,
          pointStyle: 'circle',
          boxWidth: 8,
          padding: 15,
          font: { family: 'Inter, sans-serif', size: 10 },
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => ` ${context.label}: ${context.raw}%`,
        },
      },
    },
  };

  // Chart 3: Bar Chart - Monthly Volume
  const barChartData = {
    labels: overviewChartsData.monthlyVolumes.map((d) => d.month),
    datasets: [
      {
        label: 'Buy Volume (Tons)',
        data: overviewChartsData.monthlyVolumes.map((d) => d.buy),
        backgroundColor: 'hsl(220, 55%, 50%)',
        borderRadius: 6,
      },
      {
        label: 'Sell Volume (Tons)',
        data: overviewChartsData.monthlyVolumes.map((d) => d.sell),
        backgroundColor: 'rgb(2, 158, 242)',
        borderRadius: 6,
      },
    ],
  };

  const barChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        align: 'end',
        labels: {
          usePointStyle: true,
          pointStyle: 'circle',
          boxWidth: 8,
          font: { family: 'Inter, sans-serif', size: 12 },
        },
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { font: { family: 'Inter, sans-serif' } },
      },
      y: {
        grid: { color: 'rgba(240, 240, 240, 0.8)', drawBorder: false },
        ticks: { font: { family: 'Inter, sans-serif' } },
      },
    },
  };

  // Table Columns Definition
  const columns = useMemo(
    () => [
      {
        accessorKey: 'id',
        header: 'Contract ID',
        cell: (info) => <span className="font-medium">{info.getValue()}</span>,
      },
      {
        accessorKey: 'trader',
        header: 'Counterparty',
        cell: (info) => <span>{info.getValue()}</span>,
      },
      {
        accessorKey: 'commodity',
        header: 'Commodity',
        cell: (info) => <span>{info.getValue()}</span>,
      },
      {
        accessorKey: 'type',
        header: 'Type',
        cell: (info) => {
          const type = info.getValue();
          const isBuy = type === 'Buy';
          return (
            <span
              style={{
                color: isBuy ? 'var(--primary-clr)' : 'var(--clr-success)',
                fontWeight: '600',
              }}
            >
              {type}
            </span>
          );
        },
      },
      {
        accessorKey: 'quantity',
        header: 'Quantity',
        cell: (info) => <span>{info.getValue().toLocaleString()}</span>,
      },
      {
        accessorKey: 'pricePerTon',
        header: 'Unit Price',
        cell: (info) => <span>${info.getValue().toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>,
      },
      {
        accessorKey: 'totalValue',
        header: 'Total Value',
        cell: (info) => <span className="font-medium">${info.getValue().toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>,
      },
      {
        accessorKey: 'date',
        header: 'Trade Date',
        cell: (info) => <span>{info.getValue()}</span>,
      },
      {
        accessorKey: 'status',
        header: 'Status',
        cell: (info) => {
          const status = info.getValue();
          let chipColor = 'default';
          if (status === 'Completed') chipColor = 'success';
          if (status === 'Pending') chipColor = 'warning';
          if (status === 'Cancelled') chipColor = 'error';

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

  const filteredTableData = useMemo(() => {
    if (statusFilter === 'All') return overviewTableData;
    return overviewTableData.filter((item) => item.status === statusFilter);
  }, [statusFilter]);

  // TanStack Table Instance
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
        pageSize: 8,
      },
    },
  });

  return (
    <div className="OverviewPage">
      <div className="Overview-header-container">
        <PageHeading title="Overview" />
        <MonthSelector selected={selectedRange} onChange={setSelectedRange} />
      </div>

      {/* KPI Cards Grid */}
      <div className="KPI-grid">
        <KpiCard
          title="Total Trade Volume"
          value="84,500 Units"
          trend={
            <span className="KPI-trend positive">
              <ArrowUpRight /> +12.4% vs last month
            </span>
          }
        />

        <KpiCard
          title="Total Revenue"
          value="$1.24M"
          trend={
            <span className="KPI-trend positive">
              <ArrowUpRight /> +8.2% vs last month
            </span>
          }
        />

        <KpiCard
          title="Active Contracts"
          value="42 Deals"
          trend={
            <span className="KPI-trend negative">
              <ArrowDownRight /> -2.1% vs last month
            </span>
          }
        />

        <KpiCard
          title="Average Index"
          value="$324.50"
          trend={
            <span className="KPI-trend balanced">
              <ArrowRight /> 0.0% vs last week
            </span>
          }
        />
      </div>

      {/* Charts Grid */}
      <div className="Charts-grid">
        <div className="Chart-card-wrapper double">
          <div className="Chart-card">
            <div className="Chart-header">
              <div>
                <h3>Commodity Price Trends</h3>
                <span className="Chart-subtitle">Historical prices of feed, raw materials, and livestock</span>
              </div>
            </div>
            <div className="Chart-container">
              <Line data={lineChartData} options={lineChartOptions} />
            </div>
          </div>
        </div>

        <div className="Chart-card-wrapper">
          <div className="Chart-card">
            <div className="Chart-header">
              <div>
                <h3>Crop Distribution</h3>
                <span className="Chart-subtitle">Share of total trading volume</span>
              </div>
            </div>
            <div className="Chart-container">
              <Pie data={pieChartData} options={pieChartOptions} />
            </div>
          </div>
        </div>

        <div className="Chart-card-wrapper double">
          <div className="Chart-card">
            <div className="Chart-header">
              <div>
                <h3>Trading Volumes</h3>
                <span className="Chart-subtitle">Comparison of monthly buy and sell volume</span>
              </div>
            </div>
            <div className="Chart-container">
              <Bar data={barChartData} options={barChartOptions} />
            </div>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="Table-section">
        <div className="Table-header-wrapper">
          <div className="Table-title-box">
            <h3>Recent Trade Contracts</h3>
            <p>Overview of the latest aquaculture product and raw material contracts.</p>
          </div>
          <div className="Table-actions">
            <div className="Table-status-filters">
              <Button variant={statusFilter === 'All' ? 'fill' : 'outline'} color="secondary" size="small" onClick={() => setStatusFilter('All')}>
                All
              </Button>
              <Button variant={statusFilter === 'Completed' ? 'fill' : 'outline'} color="secondary" size="small" onClick={() => setStatusFilter('Completed')}>
                Completed
              </Button>
              <Button variant={statusFilter === 'Pending' ? 'fill' : 'outline'} color="secondary" size="small" onClick={() => setStatusFilter('Pending')}>
                Pending
              </Button>
              <Button variant={statusFilter === 'Cancelled' ? 'fill' : 'outline'} color="secondary" size="small" onClick={() => setStatusFilter('Cancelled')}>
                Cancelled
              </Button>
            </div>
            <input type="text" value={globalFilter ?? ''} onChange={(e) => setGlobalFilter(e.target.value)} className="Table-search-input" placeholder="Search contracts..." />
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

        {/* Pagination controls */}
        <div className="Pagination">
          <div className="Pagination-info">
            Showing Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
          </div>
          <div className="Pagination-buttons">
            <Button variant="outline" size="small" onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
              Previous
            </Button>
            <span>
              {table.getState().pagination.pageIndex + 1} / {table.getPageCount()}
            </span>
            <Button variant="outline" size="small" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessOverviewPage;
