import React from "react";

const IndividualTeamMember = ({ memberData }) => {
  const { avatar, id, name } = memberData;
  return (
    <div>
      <div className="mt-3 space-y-4">
        <div className="checkbox-container">
          <img src={avatar} className="team-avater" alt="person-pic" />
          <p className="label">{name}</p>
        </div>
      </div>
    </div>
  );
};

export default IndividualTeamMember;
