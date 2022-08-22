const CmShowInfo = ({ isItemCenter, right, left, className, full, nowrap = true, notNormal = true, marginLeft, vertical }) => {
  return (
    <div className={`${className} ${isItemCenter && 'items-center'} mb-2 ${!vertical && 'md:flex'}  ${full && 'col-span-full w-full'} items-start`}>
      <p className={`mb-0 ${notNormal ? 'ml-2 text-gray-400' : `${marginLeft}`} ${nowrap && 'whitespace-nowrap'} min-w-[120px] `}>{right + ' : '}</p>
      <p className='text-t-text-color'>{!left && left !== 0 ? 'ثبت نشده' : left}</p>
    </div>
  );
};

export default CmShowInfo;
