import React from "react";
import { useGetTeamMembersQuery } from "../../features/team/teamApi";
import IndividualTeamMember from "./IndividualTeamMember/IndividualTeamMember";

const TeamMembers = () => {
  const {
    data: teamMembers,
    isSuccess: teamMemberSuccess,
    isError: teamMemberError,
  } = useGetTeamMembersQuery();
  return (
    <div className="mt-8">
      <h3 className="text-xl font-bold">Team Members</h3>
      {teamMembers?.map((each) => (
        <IndividualTeamMember
          key={each.id}
          memberData={each}
        ></IndividualTeamMember>
      ))}
    </div>
  );
};

export default TeamMembers;
