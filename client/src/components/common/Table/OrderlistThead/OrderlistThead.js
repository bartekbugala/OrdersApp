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

const OrderlistThead = ({ tableTitle }) => {
  return (
    <thead>
      <tr>
        <th colSpan="14">{tableTitle}</th>
      </tr>
      <tr>
        <th className="text-center">Nr</th>
        <th className="text-center">Kontrahent</th>
        <th className="text-center">
          <GiPayMoney />
        </th>
        <th className="text-center">
          <GiCalendar />
        </th>
        <th className="text-center">
          <GiReceiveMoney />
        </th>
        <th className="text-center">Typ</th>
        <th className="text-center">
          <IoMdColorPalette />
        </th>
        <th className="text-center">
          <IoIosColorPalette />
        </th>
        <th className="text-center">
          <MdLayers />
        </th>
        <th className="text-center">
          <AiOutlineColumnHeight />
        </th>
        <th className="text-center">
          m<sup>2</sup>
        </th>
        <th className="text-center">m</th>
        <th className="text-center">
          <FaUserTie />
        </th>
        <th className="text-center noprint">
          <IoMdSettings />
        </th>
      </tr>
    </thead>
  );
};

export default OrderlistThead;
