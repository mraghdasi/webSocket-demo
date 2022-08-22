import { Pagination } from 'antd';

const CmPagination = ({ responsive, total = 0, current = 1, onPaginationHandler, pageSize = 10, ...props }) => {
  const onChangeHandler = (page, pageSize) => {
    onPaginationHandler(page, pageSize);
  };

  if (total < 10) return null;

  return (
    <div className='direction-rtl'>
      <Pagination
        showLessItems={true}
        pageSizeOptions={[10, 20, 30, 50]}
        pageSize={pageSize}
        responsive={responsive}
        defaultCurrent={1}
        current={current}
        onChange={onChangeHandler}
        total={total}
        showSizeChanger={total > 10}
        size='small'
        {...props}
      />
    </div>
  );
};

export default CmPagination;
