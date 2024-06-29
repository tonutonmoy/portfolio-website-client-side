import { baseApi } from "../../api/baseApi";

const projectsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createProject: builder.mutation({
      query: (userInfo) => ({
        url: "/projects/createProject",
        method: "POST",
        body: userInfo,
      }),
    }),
    getProjects: builder.query({
      query: () => ({
        url: "/projects/getProjects",
        method: "GET",
      }),
    }),
    getSingleProjects: builder.query({
      query: (id) => ({
        url: `/projects/getSingleProject/${id}`,
        method: "GET",
      }),
    }),
    updateProjects: builder.mutation({
      query: (data) => {
        // console.log(userInfo);
        return {
          url: `/projects/updateSingleProject/${data?.id}`,
          method: "PUT",
          body: data?.info,
        };
      },
    }),
    deleteProject: builder.mutation({
      query: (id) => ({
        url: `/projects/deleteProject/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useCreateProjectMutation,
  useGetSingleProjectsQuery,
  useGetProjectsQuery,
  useUpdateProjectsMutation,
  useDeleteProjectMutation,
} = projectsApi;
