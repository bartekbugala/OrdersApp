import React from 'react';
import { MdLocalShipping, MdEdit, MdDelete } from 'react-icons/md';
import { GiFactory, GiCalendar, GiPayMoney } from 'react-icons/gi';
import { IoMdSettings, IoMdAddCircleOutline } from 'react-icons/io';
import { FaUserTie } from 'react-icons/fa';

class HomePage extends React.Component {
  render() {
    return (
      <section>
        <form>
          <table className="table table-bordered table-responsive-md table-striped text-center">
            <thead>
              <tr>
                <th className="text-center">Nr</th>
                <th className="text-center">
                  <GiPayMoney />
                </th>
                <th className="text-center">
                  <GiCalendar />
                </th>
                <th className="text-center">Kontrahent</th>
                <th className="text-center">
                  <FaUserTie />
                </th>
                <th className="text-center">Typ</th>
                <th className="text-center">Rdzeń</th>
                <th className="text-center">Kolor</th>
                <th className="text-center">
                  m<sup>2</sup>
                </th>
                <th className="text-center">
                  <IoMdSettings />
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="pt-3-half" contenteditable="false">
                  100
                </td>
                <td className="pt-3-half" contenteditable="false">
                  11.05.2019
                </td>
                <td className="pt-3-half" contenteditable="false">
                  14
                </td>
                <td className="pt-3-half" contenteditable="false">
                  Bud-Mar-Rem
                </td>
                <td className="pt-3-half" contenteditable="false">
                  BB
                </td>
                <td className="pt-3-half" contenteditable="false">
                  D
                </td>
                <td className="pt-3-half" contenteditable="false">
                  Wm
                </td>
                <td className="pt-3-half" contenteditable="false">
                  9002
                </td>
                <td className="pt-3-half" contenteditable="false">
                  12000
                </td>
                <td className="pt-3-half">
                  <button
                    type="button"
                    className="btn btn-warning btn-rounded btn-sm my-0">
                    <MdEdit />
                  </button>
                  <button
                    type="button"
                    className="btn btn-success btn-rounded btn-sm my-0 mx-1">
                    <GiFactory />
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary btn-rounded btn-sm my-0 mx-1">
                    <MdLocalShipping />
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger btn-rounded btn-sm my-0">
                    <MdDelete />
                  </button>
                </td>
              </tr>
              <tr>
                <td className="pt-3-half" contenteditable="true"></td>
                <td className="pt-3-half" contenteditable="true"></td>
                <td className="pt-3-half" contenteditable="true"></td>
                <td className="pt-3-half" contenteditable="true"></td>
                <td className="pt-3-half" contenteditable="true"></td>
                <td className="pt-3-half" contenteditable="true"></td>
                <td className="pt-3-half" contenteditable="true"></td>
                <td className="pt-3-half" contenteditable="true"></td>
                <td className="pt-3-half" contenteditable="true"></td>
                <td className="pt-3-half">
                  <span class="mb-3 mr-2">
                    <a role="button" class="text-success">
                      <IoMdAddCircleOutline />
                    </a>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </section>
    );
  }
}
export default HomePage;
