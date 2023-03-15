import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { userUpdateAction } from "../redux/actions/user_actions";
import store from "../redux/store";

type Props = {};
const Update = (props: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  let {
    loading: userLoading,
    success: userSuccess,
    userInfo: userUserInfo,
    error: userError,
  } = useSelector((store: any) => store.userUpdate);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (name && username && email) {
      dispatch(userUpdateAction({ name, username, email }) as any);
    }
  };

  useEffect(() => {
    if (userSuccess) {
      setName("");
      setUsername("");
      setEmail("");
    }
  }, []);

  return (
    <section>
      <div className="flex flex-col mt-24">
        <div className="mx-auto w-96">
          <Link to={"/"} className="float-left flex flex-row space-x-0">
            <IoIosArrowBack className="text-3xl hover:text-4xl" /> &nbsp;{" "}
            <span className="text-xl">Back</span>
          </Link>
        </div>
        <h1 className="mx-auto text-2xl mb-5 hover:text-4xl">Update User</h1>
        <form onSubmit={handleSubmit} className="mx-auto">
          {userLoading && <div>Loading...</div>}
          {/* {userSuccess && (
            <div>
              {userUserInfo?.message ? userUserInfo?.message : userUserInfo}
            </div>
          )} */}
          {userSuccess && "successfull"}
          {userSuccess && navigate("/")}
          {userError && <div>{userError}</div>}
          <div className="flex flex-col space-y-3">
            <div className="">
              <input
                className="border-slate-600 border-2 hover:border-4 rounded-lg p-1 w-96"
                type="text"
                placeholder="Enter name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="">
              <input
                className="border-slate-600 border-2 hover:border-4 rounded-lg p-1 w-96"
                type="text"
                placeholder="Enter username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="">
              <input
                className="border-slate-600 border-2 hover:border-4 rounded-lg p-1 w-96"
                type="text"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="">
              <button
                className="bg-blue-800 text-center border-2 hover:bg-blue-600 rounded-lg p-2 text-white w-96"
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};
export default Update;
