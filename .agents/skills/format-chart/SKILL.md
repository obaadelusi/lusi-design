---
name: format-chart
description: Use this when creating or updating a chart.
---

# Chart.js Chart Format

## Chart Options

```js
const options = {
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
  },
  // ...other options
};
```
