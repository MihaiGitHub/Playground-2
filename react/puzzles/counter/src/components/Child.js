import { useState } from "react";
import { Modal } from "./Modal";

const Child = ({ counter, incCounter }) => {
  return (
    <label>
      Counter: {counter}
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        Launch demo modal
      </button>
      <Modal counter={counter} incCounter={incCounter} />
    </label>
  );
};

export default Child;
