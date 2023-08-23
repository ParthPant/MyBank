import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const InfoAlert = ({ message }) => {
  return (
    <div className="alert alert-info">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="stroke-current shrink-0 w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>
      <span>{message}</span>
    </div>
  );
};

const SuccessAlert = ({ message, path }) => {
  let navigate = useNavigate();
  return (
    <div className="toast toast-top toast-center">
              <div class="bg-green-100 border border-green-400 text-green-900 px-10 py-5 rounded relative" role="alert">
  <strong class="font-bold"></strong>
  <span class="block sm:inline">{message} has been successfully added !</span>
  <button onClick={() => {navigate(`${path}`, {replace:true})}}><span class="absolute top-0 bottom-0 right-0 px-4 py-3">
    <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
  </span></button>
</div></div>
  );
};

const ErrorAlert = ({ path }) => {
  
    let navigate = useNavigate();
  return (
    <div className="toast toast-top toast-center">
              <div class="bg-green-100 border border-green-400 text-green-900 px-10 py-5 rounded relative" role="alert">
  <strong class="font-bold"> OOOps!</strong>
  <span class="block sm:inline">Internal Server Error !</span>
  <button onClick={() => {navigate(`${path}`, {replace:true})}}><span class="absolute top-0 bottom-0 right-0 px-4 py-3">
    <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
  </span></button>
</div></div>
  );
};

export {
  InfoAlert,
  SuccessAlert,
  ErrorAlert
}
