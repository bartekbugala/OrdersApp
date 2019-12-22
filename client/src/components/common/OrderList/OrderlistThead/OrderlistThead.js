import React from 'react';

import { MdLayers } from 'react-icons/md';
import { GiCalendar, GiPayMoney, GiReceiveMoney } from 'react-icons/gi';
import {
  IoMdSettings,
  IoMdColorPalette,
  IoIosColorPalette
} from 'react-icons/io';
import { FaUserTie } from 'react-icons/fa';
import { AiOutlineColumnHeight } from 'react-icons/ai';

import '../../../../styles/global.scss';
import './OrderlistThead.scss';

const OrderlistThead = ({ sortColumn }) => {
  const thClass = 'text-center';
  return (
    <thead>
      <tr className="production-list">
        <th
          role="button"
          className={`${thClass}`}
          onClick={e => {
            e.preventDefault();
            sortColumn('orderNumber', 'number');
          }}>
          Nr
        </th>
        <th
          className={`${thClass}`}
          onClick={e => {
            e.preventDefault();
            sortColumn('clientName', 'string');
          }}>
          Kontrahent
        </th>
        <th
          className={`${thClass}`}
          onClick={e => {
            e.preventDefault();
            sortColumn('downpayment', 'date');
          }}>
          <GiPayMoney />
        </th>
        <th
          className={`${thClass}`}
          onClick={e => {
            e.preventDefault();
            sortColumn('productionTerm');
          }}>
          <GiCalendar />
        </th>
        <th
          className={`${thClass}`}
          onClick={e => {
            e.preventDefault();
            sortColumn('finalPayment');
          }}>
          <GiReceiveMoney />
        </th>
        <th
          className={`${thClass} production-list-th`}
          onClick={e => {
            e.preventDefault();
            sortColumn('type');
          }}>
          Typ
        </th>
        <th className={`${thClass}`}>
          <IoMdColorPalette />
        </th>
        <th className={`${thClass}`}>
          <IoIosColorPalette />
        </th>
        <th className={`${thClass}`}>
          <MdLayers />
        </th>
        <th className={`${thClass}`}>
          <AiOutlineColumnHeight />
        </th>
        <th className={`${thClass}`}>
          m<sup>2</sup>
        </th>
        <th className={`${thClass}`}>m</th>
        <th className={`${thClass}`}>
          <FaUserTie />
        </th>
        <th className={`${thClass} noprint`}>
          <IoMdSettings />
        </th>
      </tr>
    </thead>
  );
};

export default OrderlistThead;
