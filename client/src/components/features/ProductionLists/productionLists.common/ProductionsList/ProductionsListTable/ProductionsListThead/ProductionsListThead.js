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

import '../../../../../../../styles/global.scss';
import './ProductionsListThead.scss';

const ProductionsListThead = ({ sortColumn }) => {
  const thClass = 'text-center';
  return (
    <thead>
      <tr className="production-list">
        <th
          role="button"
          className={`${thClass}`}
          onClick={e => {
            e.preventDefault();
            sortColumn('orderNumber');
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
            sortColumn('productionTerm', 'productionTerm');
          }}>
          <GiCalendar />
        </th>
        <th
          className={`${thClass}`}
          onClick={e => {
            e.preventDefault();
            sortColumn('finalPayment', 'boolean');
          }}>
          <GiReceiveMoney />
        </th>
        <th
          className={`${thClass} production-list-th`}
          onClick={e => {
            e.preventDefault();
            sortColumn('type', 'string');
          }}>
          Typ
        </th>
        <th
          className={`${thClass}`}
          role="button"
          onClick={e => {
            e.preventDefault();
            sortColumn('colorOutside', 'string');
          }}>
          <IoMdColorPalette />
        </th>
        <th
          className={`${thClass}`}
          role="button"
          onClick={e => {
            e.preventDefault();
            sortColumn('colorInside', 'string');
          }}>
          <IoIosColorPalette />
        </th>
        <th
          className={`${thClass}`}
          role="button"
          onClick={e => {
            e.preventDefault();
            sortColumn('core', 'string');
          }}>
          <MdLayers />
        </th>
        <th
          className={`${thClass}`}
          role="button"
          onClick={e => {
            e.preventDefault();
            sortColumn('thickness');
          }}>
          <AiOutlineColumnHeight />
        </th>
        <th
          className={`${thClass}`}
          role="button"
          onClick={e => {
            e.preventDefault();
            sortColumn('m2');
          }}>
          m<sup>2</sup>
        </th>
        <th
          className={`${thClass}`}
          onClick={e => {
            e.preventDefault();
            sortColumn('m2');
          }}>
          m
        </th>
        <th
          className={`${thClass}`}
          role="button"
          onClick={e => {
            e.preventDefault();
            sortColumn('csa', 'string');
          }}>
          <FaUserTie />
        </th>
        <th className={`${thClass} noprint`}>
          <IoMdSettings />
        </th>
      </tr>
    </thead>
  );
};

export default ProductionsListThead;
