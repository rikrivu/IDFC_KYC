import './PieChart.scss';
import { useCallback, useEffect, useRef, useState } from 'react';

// 3rd Party Libraries
import Chartjs from 'chart.js';

// Local Imports
import { chartConfig } from './pieChartConfig';

function PieChart (props: { value: number }) {

  const chartContainer = useRef(null);
  const [chartInstance, setChartInstance] = useState<Chart | null>(null);

  const updateDataset = useCallback((newData: [number, number]) => {
    if (chartInstance?.data?.datasets) {
      chartInstance.data.datasets[0].data = newData;
      chartInstance.update();
    }
  }, [chartInstance]);

  // Create new Chart Instance when Chart Container Ref is available in DOM
  useEffect(() => {
    if (chartContainer?.current) {
      const newChartInstance = new Chartjs(chartContainer.current!, chartConfig);
      setChartInstance(newChartInstance);
    }
  }, [chartContainer]);

  // Update Chart Dataset of Chart Instance every time the current chart instance or props.value changes
  useEffect(() => {
    updateDataset([props.value, 100 - props.value])
  }, [updateDataset, props.value])     

  return (
    <div className="chart-container">
      <canvas id="pieChart" ref={chartContainer}></canvas>
    </div>
  );
}

export default PieChart;