import { useState, useEffect } from "react";
import { toast } from "react-toastify";

import userSlice from "../../features/userSlice";
import { useDispatch } from "react-redux";

import { idSLCT } from "../../features/userSlice";
import { useSelector } from "react-redux";
import { changeName } from "../../features/userSlice";

const EditNameForm = () => {
  const [isOpen, setOpening] = useState(false);
  const [formValues, setFormValues] = useState({ firstName: "", lastName: "" });
  const { firstName, lastName } = formValues;

  const dispatch = useDispatch();

  const user = useSelector(idSLCT);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setOpening(false); 
    changeName(firstName, lastName, user.token, dispatch);
  };

  const handleChangeInput = (e) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value });
  };

  useEffect(() => {
    setFormValues({ firstName: user.firstName, lastName: user.lastname });
  }, [user]);

  return (
    <main className="formName">
      {isOpen ? (
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              value={firstName}
              onChange={handleChangeInput}
              id="firstName"
            ></input>
            <input
              type="text"
              value={lastName}
              onChange={handleChangeInput}
              id="lastName"
            ></input>
          </div>
          <button className="modifBtn">Modifier</button>
        </form>
      ) : (
        <button
          className="editBtn"
          onClick={() => {
            setOpening(true);
          }}
        >
          Edit name
        </button>
      )}
    </main>
  );
};

export default EditNameForm;
