import React from "react";

export const CrudTableRow = ({ el, setDataToEdit, deleteData }) => {
  let { name, year, id } = el;
  return (
    <tr className="fw-normal">
      <td className="align-middle">{id}°</td>
      <td className="align-middle">{name}</td>
      <td className="align-middle">{year}</td>
      <td className="text-center">
        <button
          className="btn btn-outline-success"
          onClick={() => setDataToEdit(el)}
        >
          Edit
        </button>
        <button
          className="btn btn-outline-info ms-3 "
          onClick={() => deleteData(id)}
        >
          <i className="fas fa-trash-alt"></i>
        </button>
      </td>
    </tr>
  );
};
