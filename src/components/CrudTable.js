import React from "react";
import { CrudTableRow } from "./CrudTableRow";

export const CrudTable = ({ data, setDataToEdit, deleteData }) => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <table className="table text-white mb-0">
        <thead>
          <tr>
            <th scope="col">Top</th>
            <th scope="col">Name</th>
            <th scope="col">Year</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((el) => (
              <CrudTableRow
                key={el.id}
                el={el}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
              />
            ))
          ) : (
            <tr>
              <td className="align-middle text-warning" colSpan="4">I'm feeling empty, give me some data!</td>
              {/* {console.log(res)} */}
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
