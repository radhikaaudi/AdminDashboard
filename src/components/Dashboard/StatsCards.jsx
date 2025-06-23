import { TrendingUp, TrendingDown } from 'lucide-react';
import Card from '../UI/Card';
import { STATS_DATA } from '../../utils/constants';
import { clsx } from 'clsx';

const StatsCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {STATS_DATA.map((stat, index) => (
        <Card key={index} className="p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                {stat.title}
              </p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {stat.value}
              </p>
            </div>
            <div className={clsx(
              'p-3 rounded-full',
              stat.color === 'primary' && 'bg-primary-100 dark:bg-primary-900',
              stat.color === 'success' && 'bg-success-100 dark:bg-success-900',
              stat.color === 'warning' && 'bg-warning-100 dark:bg-warning-900',
              stat.color === 'secondary' && 'bg-secondary-100 dark:bg-secondary-900'
            )}>
              <div className={clsx(
                'w-6 h-6 rounded',
                stat.color === 'primary' && 'bg-primary-500',
                stat.color === 'success' && 'bg-success-500',
                stat.color === 'warning' && 'bg-warning-500',
                stat.color === 'secondary' && 'bg-secondary-500'
              )} />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            {stat.trend === 'up' ? (
              <TrendingUp className="h-4 w-4 text-success-500" />
            ) : (
              <TrendingDown className="h-4 w-4 text-error-500" />
            )}
            <span className={clsx(
              'ml-2 text-sm font-medium',
              stat.trend === 'up' ? 'text-success-600' : 'text-error-600'
            )}>
              {stat.change}
            </span>
            <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
              vs last month
            </span>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default StatsCards;