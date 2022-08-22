import useQuery from 'hooks/useQuery';
import { useEffect } from 'react';
import CmPagination from '../Pagination/CmPagination';
import CmTable from '../Table/CmTable';

const CmTablePageList = ({ columns, getList, loading, list }) => {
  //hooks
  const { query, search, page, limit, handlePagination } = useQuery();

  //effect
  useEffect(() => {
    getList(query);
  }, [search]);

  return (
    <>
      <CmTable
        current={page}
        pageSize={limit}
        rowKey='_id'
        count={list?.meta?.total}
        refetch={() => getList(query)}
        dataSource={list?.data || []}
        columns={columns}
        loading={loading}
      />
      <CmPagination current={page} pageSize={limit} total={list?.meta?.total} onPaginationHandler={handlePagination} />
    </>
  );
};

export default CmTablePageList;
