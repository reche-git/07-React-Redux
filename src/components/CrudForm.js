import React, { useEffect, useState } from "react";
import Icon from "../assets/icon.png";

const initialForm = {
  name: "",
  year: "",
  id: null,
};

export const CrudForm = ({
  createData,
  updateData,
  dataToEdit,
  setDataToEdit,
}) => {
  const [form, setForm] = useState({ initialForm });

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initialForm);
    }
  }, [dataToEdit]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.year) {
      alert("Data Incomplete");
      return;
    }

    if (form.id === null) {
      createData(form);
    } else {
      updateData(form);
    }
    handleReset();
  };

  const handleReset = (e) => {
    setForm(initialForm);
    setDataToEdit(null);
  };

  return (
    <div className="text-center pt-3 pb-2 m-2">
      <img src={Icon} alt="icon" className="icon-img" />
      <h3 className="mb-4">{dataToEdit ? `Edit "${form.name}"` : "Library List"}</h3>
      <form onSubmit={handleSubmit} className="input-group">
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          value={form.name || ""}
          className="form-control rounded-5 me-2"
          maxLength="12"
        />
        <input
          type="number"
          name="year"
          placeholder="Year"
          onChange={handleChange}
          value={form.year || ""}
          className="form-control rounded-5 me-2"
        />
        <input
          type="submit"
          value="Send"
          className="btn btn-outline-info rounded-5"
        />

        <br />
        <input
          type="reset"
          value="Clean"
          onClick={handleReset}
          className="btn btn-outline-info rounded-5 ms-1"
        />
      </form>
    </div>
  );
};
