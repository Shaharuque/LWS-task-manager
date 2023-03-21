import { apiSlice } from "../api/apiSlice";

const tasksApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getTasks: build.query({
      query: () => "/tasks",
    }),
  }),
  overrideExisting: false,
});

export const { useGetTasksQuery } = tasksApi;
