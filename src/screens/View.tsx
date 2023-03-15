import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { userViewAction } from "../redux/actions/user_actions";
import { IoIosArrowBack } from "react-icons/io";
import store from "../redux/store";

type Props = {};
const View = (props: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation().pathname;
  const locationId = location.split("/")[2];
  let {
    loading: userLoading,
    success: userSuccess,
    userInfo: userUserInfo,
    error: userError,
  } = useSelector((store: any) => store.userView);

  useEffect(() => {
    dispatch(userViewAction(locationId) as any);
  }, [locationId]);
  return (
    <>
      <div className="flex flex-col mt-36">
        <div className="mx-auto w-96">
          <div>
            {userLoading && <div>Loading...</div>}
            {userSuccess && (
              <div>
                {userSuccess?.message ? userSuccess?.message : userSuccess}
              </div>
            )}
            {userError && <div>{userError}</div>}
          </div>
          <Link to={"/"} className="float-left flex flex-row space-x-0">
            <IoIosArrowBack className="text-3xl hover:text-4xl" /> &nbsp;{" "}
            <span className="text-xl">Back</span>
          </Link>
        </div>
        <h1 className="mx-auto text-4xl mb-3">User details</h1>
        <ul className="mx-auto w-96 space-x-0">
          <li className="w-full bg-slate-500 hover:bg-slate-300 text-white h-full text-2xl p-3 rounded-t-md">
            <span>Name: {userLoading ? "Loading..." : userUserInfo?.name}</span>
          </li>
          <li className="w-full bg-slate-600 hover:bg-slate-400 text-white h-full text-2xl p-3">
            <span>
              Username: {userLoading ? "Loading..." : userUserInfo?.username}
            </span>
          </li>
          <li className="w-full bg-slate-500 hover:bg-slate-300 text-white h-full text-2xl p-3 rounded-b-md">
            <span>
              Email: {userLoading ? "Loading..." : userUserInfo?.email}
            </span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default View;
