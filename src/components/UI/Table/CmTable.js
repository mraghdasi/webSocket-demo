import { Table } from 'antd';
import { separator, tableRowIndex } from 'utils/default';

const CmTable = ({ loading, className, current, pageSize, columns, count, dataSource, ...props }) => {
  //status
  console.log(current, pageSize);
  const defaultColumns = [
    {
      title: 'ردیف',
      width: 16,
      render: (_text, _record, index) => tableRowIndex(index, current, pageSize),
    },
  ];

  const tableColumns = [
    ...defaultColumns,
    ...columns.map((col) => ({
      ...col,
      dataIndex: col.key,
    })),
  ];

  return (
    <div className='grid mb-4'>
      <div className='flex items-center mb-1'>
        <div className='flex gap-x-3 '>{!!count && count > 0 && <span className='text-xs text-gray-400'>{'تعداد کل :' + separator(count)}</span>}</div>
      </div>

      <div className='overflow-x-auto'>
        <Table rowKey='id' bordered loading={loading} size='small' pagination={false} className={`${className}`} columns={tableColumns} dataSource={dataSource} {...props} />
      </div>
    </div>
  );
};

export default CmTable;
