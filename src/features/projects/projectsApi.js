import { apiSlice } from "../api/apiSlice";

const projectApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getProjects: build.query({
      query: () => "/projects",
    }),
  }),
  overrideExisting: false,
});

export const { useGetProjectsQuery } = projectApi;
