import DataTable from '../components/Tables/DataTable';
import { SAMPLE_USERS } from '../utils/constants';

const Tables = () => {
  const columns = [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
    { key: 'role', label: 'Role' },
    { key: 'status', label: 'Status' },
    { key: 'lastLogin', label: 'Last Login' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Tables
        </h1>
        <div className="text-sm text-gray-600 dark:text-gray-400">
          Manage your data with interactive tables
        </div>
      </div>

      <DataTable 
        data={SAMPLE_USERS} 
        columns={columns} 
        title="User Management"
      />
    </div>
  );
};

export default Tables;