import React from 'react';
import AddRowButton from '../../Buttons/AddRowButton/AddRowButton';

const OrderlistTrAdd = ({ handleChange, newProduction }) => (

    <tr className="new-production noprint">
        <td className="form-td">
            <input
                name="orderNumber"
                onChange={handleChange}
                value={newProduction.orderNumber}
            />
        </td>
        <td className="form-td">
            <input
                name="clientName"
                onChange={handleChange}
                value={newProduction.clientName}
            />
        </td>
        <td className="form-td">
            <input
                name="downpayment"
                onChange={handleChange}
                value={newProduction.downpayment}
            />
        </td>
        <td className="form-td">
            <input
                name="productionTerm"
                onChange={handleChange}
                value={newProduction.productionTerm}
            />
        </td>
        <td className="form-td">
            <input
                name="finalpayment"
                onChange={handleChange}
                type="checkbox"
                value={newProduction.finalpayment}
            />
        </td>
        <td className="form-td">
            <input
                name="type"
                onChange={handleChange}
                value={newProduction.type}
            />
        </td>
        <td className="form-td">
            <input
                name="color"
                onChange={handleChange}
                value={newProduction.color}
            />
        </td>
        <td className="form-td">
            <input
                name="core"
                onChange={handleChange}
                value={newProduction.core}
            />
        </td>
        <td className="form-td">
            <input
                name="thickness"
                onChange={handleChange}
                value={newProduction.thickness}
            />
        </td>
        <td className="form-td">
            <input
                name="m2"
                onChange={handleChange}
                value={newProduction.m2}
            />
        </td>
        <td className="form-td"></td>
        <td className="form-td">
            <input
                name="csa"
                onChange={handleChange}
                value={newProduction.csa}
            />
        </td>
        <td className="form-btn">
            <AddRowButton type="submit" />
        </td>
    </tr>
);

export default OrderlistTrAdd;