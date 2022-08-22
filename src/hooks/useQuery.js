import { useNavigate, useLocation } from 'react-router';
import queryString from 'query-string';
import { convertAllPropertyToEnNumber } from 'utils/default';

const useQuery = () => {
  const navigate = useNavigate();
  const { search, pathname } = useLocation();

  const query = convertAllPropertyToEnNumber(queryString.parse(search));
  const setQuery = (newQuery) => navigate(pathname + '?' + queryString.stringify(newQuery));
  const resetQuery = () => navigate(pathname + '?' + queryString.stringify({ limit: query.limit || 10 }));
  const handlePagination = (page, limit) =>
    navigate(pathname + '?' + queryString.stringify({ ...query, page: page || 1, limit: limit || 10 }));

  return {
    query,
    setQuery,
    resetQuery,
    page: query.page || 1,
    limit: query.limit || 10,
    handlePagination,
    search: search,
    pathname: pathname,
    pathnameArray: pathname.split('/'),
    pathnameLastPart: pathname.split('/').at(-1),
  };
};

export default useQuery;
