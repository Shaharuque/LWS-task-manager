import { apiSlice } from "../api/apiSlice";

const teamApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getTeamMembers: build.query({
      query: () => "/team",
    }),
  }),
  overrideExisting: false,
});

export const { useGetTeamMembersQuery } = teamApi;
