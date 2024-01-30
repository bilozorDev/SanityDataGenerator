import React, { useEffect } from "react";

const Output = (props) => {
  const { extractedObject = {} } = props;
  const newObj = new Object(extractedObject);
  
  const map = {
    _type: newObj.name,
  };
  const doMagic = () => {
    newObj.fields.map((item) => {
      console.log("item", item);
      map[item.name] = item.type;
      console.log("you are here", map[item.name])
    });
    console.log("map", map)
  };
  
  return (
    <div className="mt-16">
      <button
        onClick={doMagic}
        type="button"
        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Button text
      </button>
      <p>Output:</p>
    </div>
  );
};

export default Output;
