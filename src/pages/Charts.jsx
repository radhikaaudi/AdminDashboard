import BarChart from '../components/Charts/BarChart';
import LineChart from '../components/Charts/LineChart';
import PieChart from '../components/Charts/PieChart';
import DoughnutChart from '../components/Charts/DoughnutChart';
import Card from '../components/UI/Card';

const Charts = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Charts
        </h1>
        <div className="text-sm text-gray-600 dark:text-gray-400">
          Visualize your data with interactive charts
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <BarChart title="Sales Performance" />
        </Card>
        <Card className="p-6">
          <LineChart title="Growth Trends" />
        </Card>
        <Card className="p-6">
          <PieChart title="Traffic Sources" />
        </Card>
        <Card className="p-6">
          <DoughnutChart title="Project Status" />
        </Card>
      </div>
    </div>
  );
};

export default Charts;