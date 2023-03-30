import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createAction,
  deleteAction,
  noAction,
  readAllAction,
  updateAction,
} from "../actions/crudActions";
import { helpHttp } from "../helpers/helpHttp";
import { CrudForm } from "./CrudForm";
import { CrudTable } from "./CrudTable";
import { Loader } from "./Loader";
import { Message } from "./Message";

export const CrudApi = () => {
  // const [db, setDb] = useState(null);
  // const [state, dispatch] = useReducer(crudReducer, crudInitialState);

  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { db } = state.crud;

  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  let api = helpHttp();
  let url = "http://localhost:5000/libraries";

  useEffect(() => {
    let api = helpHttp();
    let url = "http://localhost:5000/libraries";
    setLoading(true);

    api.get(url).then((res) => {
      // console.log(res);
      if (!res.err) {
        // setDb(res);
        dispatch(readAllAction(res));
        setError(null);
      } else {
        // setDb(null);
        dispatch(noAction(res));
        setError(res);
      }

      setLoading(false);
    });
  }, [dispatch]);

  const createData = (data) => {
    data.id = Date.now();
    // console.log(data);

    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.post(url, options).then((res) => {
      // console.log(res);
      if (!res.err) {
        // setDb([...db, res]);
        dispatch(createAction(res));
      } else {
        setError(res);
      }
    });
  };

  const updateData = (data) => {
    let endpoint = `${url}/${data.id}`;
    // console.log(endpoint);

    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.put(endpoint, options).then((res) => {
      // console.log(res);
      if (!res.err) {
        // let newData = db.map((el) => (el.id === data.id ? data : el));
        // setDb(newData);
        dispatch(updateAction(res));
      } else {
        setError(res);
      }
    });
  };

  const deleteData = (id) => {
    let isDelete = window.confirm(`Delete Data with id '${id}'?`);

    if (isDelete) {
      let endpoint = `${url}/${id}`;
      let options = {
        headers: { "content-type": "application/json" },
      };

      api.del(endpoint, options).then((res) => {
        // console.log(res);
        if (!res.err) {
          // let newData = db.filter((el) => el.id !== id);
          // setDb(newData);
          dispatch(deleteAction(id));
        } else {
          setError(res);
        }
      });
    } else {
      return;
    }
  };

  return (
    <div className="gradient-custom-2 rounded-3">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-12 col-xl-10">
            <h2>CRUD API</h2>
            <div className="card mask-custom w-75 m-auto">
              <div className="card-body p-4 text-white">
                <article>
                  <CrudForm
                    createData={createData}
                    updateData={updateData}
                    dataToEdit={dataToEdit}
                    setDataToEdit={setDataToEdit}
                  />
                  {loading && <Loader />}
                  {error && (
                    <Message
                      msg={`Error ${error.status}: ${error.statusText}`}
                      bgColor="#dc3545"
                    />
                  )}
                  {db && (
                    <CrudTable
                      data={db}
                      deleteData={deleteData}
                      setDataToEdit={setDataToEdit}
                    />
                  )}
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
