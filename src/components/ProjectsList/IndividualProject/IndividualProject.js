import React, { useState } from "react";

const IndividualProject = ({ project }) => {
  const [checkBox, setCheckBox] = useState(false);
  const { colorClass, id, projectName } = project;

  const handleCheck = (id) => {
    setCheckBox(!checkBox);
  };
  console.log("checked or not", checkBox, id);

  return (
    <div className="mt-3 space-y-4">
      <div className="checkbox-container">
        <input
          defaultChecked={false}
          type="checkbox"
          className={colorClass}
          onChange={() => handleCheck(id)}
        />
        <p className="label">{projectName}</p>
      </div>
    </div>
  );
};

export default IndividualProject;
