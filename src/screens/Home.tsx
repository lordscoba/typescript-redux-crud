import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  userGetAction,
  userUpdateAction,
  userDeleteAction,
} from "../redux/actions/user_actions";

type Props = {};
const Home = (props: Props) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  let {
    loading: userLoading,
    success: userSuccess,
    userInfo: userUserInfo,
    // error: userError,
  } = useSelector((store: any) => store.userGet);

  // const dataFromLocalStorage = localStorage.getItem("userGet")
  //   ? JSON.parse(localStorage.getItem("userGet") || "")
  //   : null;

  // userUserInfo = dataFromLocalStorage;

  useEffect(() => {
    dispatch(userGetAction() as any);
  }, []);

  const handleUpdate = (id: any) => {
    dispatch(userUpdateAction(id) as any);
    dispatch(userGetAction() as any);
  };

  const deleteUser = (id: any) => {
    window.alert(
      "You are about to delete this user PARMANENTLY. Do you want to proceed?"
    );
    dispatch(userDeleteAction(id) as any);
    dispatch(userGetAction() as any);
  };

  return (
    <div>
      <div className="flex flex-col space-y-2">
        <div className="mx-auto mt-28 mb-5 pb-2">
          <Link
            to={"/create"}
            className="py-3 px-52 bg-amber-600 text-white rounded-2xl hover:bg-amber-400"
          >
            create
          </Link>
        </div>
        <div className="mx-auto mt-28 mb-5 pb-2">
          {userLoading && "Loading..."}
        </div>
        <div className="border border-stone-800 mt-20 mx-auto hover:border-2">
          <table>
            <thead className="">
              <tr className="">
                <th className="py-10">S/N</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>View</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody className="pb-4">
              {/* userUserInfo?.length > 0 && */}
              {userUserInfo?.length > 0 &&
                userUserInfo?.map((data: any, index: any) => {
                  const viewId: Number = data?.id;
                  return (
                    <tr key={index} className="">
                      <td className="py-4 px-10">{index + 1}</td>
                      <td className="px-10">{data?.name}</td>
                      <td className="px-10">{data?.username}</td>
                      <td className="px-10">{data?.email}</td>
                      <td className="px-10">
                        <Link
                          to={`/view/${viewId}`}
                          className="py-3 px-6 bg-lime-700 text-white rounded-2xl hover:bg-lime-400"
                        >
                          View
                        </Link>
                      </td>
                      <td className="px-10">
                        <Link
                          to={`/update/${viewId}`}
                          className="py-3 px-6 bg-zinc-800 text-white rounded-2xl hover:bg-gray-600"
                        >
                          Edit
                        </Link>
                      </td>
                      <td className="px-10">
                        <Link
                          to={`/delete/${viewId}`}
                          className="py-3 px-6 bg-amber-600 text-white rounded-2xl hover:bg-amber-400"
                        >
                          Delete
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              {/* <tr className="">
                <td className="py-4 px-10">1</td>
                <td className="px-10">Nwokoye Christopher</td>
                <td className="px-10">lordscoba</td>
                <td className="px-10">lordscoba2tm@gmail.com</td>
                <td className="px-10">
                  <Link
                    to={"/view/:id"}
                    className="py-3 px-6 bg-lime-700 text-white rounded-2xl hover:bg-lime-400"
                  >
                    View
                  </Link>
                </td>
                <td className="px-10">
                  <Link
                    to={"/update/:id"}
                    className="py-3 px-6 bg-zinc-800 text-white rounded-2xl hover:bg-gray-600"
                  >
                    Edit
                  </Link>
                </td>
                <td className="px-10">
                  <Link
                    to={"/delete"}
                    className="py-3 px-6 bg-amber-600 text-white rounded-2xl hover:bg-amber-400"
                  >
                    Delete
                  </Link>
                </td>
              </tr>
              <tr>
                <td className="py-4 px-10">2</td>
                <td className="px-10">Nwokoye Christopher</td>
                <td className="px-10">lordscoba</td>
                <td className="px-10">lordscoba2tm@gmail.com</td>
                <td className="px-10">
                  <Link
                    to={"/view"}
                    className="py-3 px-6 bg-lime-700 text-white rounded-2xl hover:bg-lime-400"
                  >
                    View
                  </Link>
                </td>
                <td className="px-10">
                  <Link
                    to={"/update"}
                    className="py-3 px-6 bg-zinc-800 text-white rounded-2xl hover:bg-gray-600"
                  >
                    Edit
                  </Link>
                </td>
                <td className="px-10">
                  <Link
                    to={"/delete"}
                    className="py-3 px-6 bg-amber-600 text-white rounded-2xl hover:bg-amber-400"
                  >
                    Delete
                  </Link>
                </td>
              </tr>
              <tr>
                <td className="pt-4 px-10 pb-10">3</td>
                <td className="px-10">Nwokoye Christopher</td>
                <td className="px-10">lordscoba</td>
                <td className="px-10">lordscoba2tm@gmail.com</td>
                <td className="px-10">
                  <Link
                    to={"/view"}
                    className="py-3 px-6 bg-lime-700 text-white rounded-2xl hover:bg-lime-400"
                  >
                    View
                  </Link>
                </td>
                <td className="px-10">
                  <Link
                    to={"/update"}
                    className="py-3 px-6 bg-zinc-800 text-white rounded-2xl hover:bg-gray-600"
                  >
                    Edit
                  </Link>
                </td>
                <td className="px-10">
                  <Link
                    to={"/delete"}
                    className="py-3 px-6 bg-amber-600 text-white rounded-2xl hover:bg-amber-400"
                  >
                    Delete
                  </Link>
                </td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
