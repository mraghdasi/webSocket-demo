import { EyeOutlined } from '@ant-design/icons';
import { Modal, Tooltip } from 'antd';
import { instance } from 'api';
import CmTablePageList from 'components/UI/TablePageList/CmTablePageList';
import React, { useState } from 'react';
import { convertPersianNumberToEnglish, separator } from 'utils/default';
import queryString from 'query-string';
import CmShowInfo from 'components/UI/ShowInfo/CmShowInfo';

const OrderHistory = () => {
  //states
  const [loading, setLoading] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);
  const [fullData, setFullData] = useState(null);
  const [list, setList] = useState(null);

  //functions
  const getList = async (query) => {
    setLoading(true);

    await instance
      .get(`https://dev.exdev.ir/v1/trades?${queryString.stringify(query)}`, {
        headers: { 'x-auth-token': 'adb2c2a9-d5da-494c-bb53-dc0d8066dd90', 'Content-Type': 'application/json' },
      })
      .then(({ data }) => {
        setList(data);
      })
      .catch((err) => console.log(err));

    setLoading(false);
  };

  //constants
  const columns = [
    {
      title: 'تاریخ سفارش',
      render: (_text, record) => convertPersianNumberToEnglish(new Date(record?.order?.createdAt)?.toLocaleDateString('fa-IR')),
    },
    {
      title: 'شماره سفارش',
      render: (_text, record) => record?.orderId,
    },
    {
      title: 'عنوان سفارش',
      render: (_text, record) => record?.order?.coin,
    },
    {
      title: 'مقدار سفارش',
      render: (_text, record) => record?.amount,
    },
    {
      title: 'مبلغ سفارش',
      render: (_text, record) => separator(record?.price),
    },
    {
      title: 'نوع سفارش',
      render: (_text, record) => (record?.order?.type === 'buy' ? 'خرید' : 'فروش'),
    },
    {
      title: 'عملیات',
      key: 'operation',
      render: (_text, record) => (
        <Tooltip title='جزئیات'>
          <EyeOutlined onClick={() => getFullData(record)} className='mx-[5px] text-t-primary-color inline-block' />
        </Tooltip>
      ),
    },
  ];

  const getFullData = (data) => {
    setIsShowModal(true);
    setFullData(data);
  };

  const onCloseModalHandler = () => {
    setIsShowModal(false);
    setFullData(null);
  };

  return (
    <>
      <h1 className='my-10'>تاریخچه سفارشات</h1>

      <Modal width={800} title='جزئیات تاریخچه سفارشات' onCancel={onCloseModalHandler} visible={isShowModal} footer={null}>
        <div className='grid grid-cols-1 md:grid-cols-2'>
          <CmShowInfo right='شماره سفارش' left={fullData?.orderId} />

          <CmShowInfo right='تاریخ سفارش' left={convertPersianNumberToEnglish(new Date(fullData?.order?.createdAt)?.toLocaleDateString('fa-IR'))} />

          <CmShowInfo right='عنوان سفارش' left={fullData?.order?.coin} />

          <CmShowInfo right='مقدار سفارش' left={fullData?.amount} />

          <CmShowInfo right='مبلغ سفارش' left={fullData?.price} />

          <CmShowInfo right='نوع سفارش' left={fullData?.order?.type === 'buy' ? 'خرید' : 'فروش'} />

          <CmShowInfo right='آی پی کاربر' left={fullData?.client?.ip} />

          <CmShowInfo right='آی دی کاربر' left={fullData?.client?.userId} />
        </div>
      </Modal>

      <CmTablePageList columns={columns} getList={getList} loading={loading} list={list} />
    </>
  );
};

export default OrderHistory;
