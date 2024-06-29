import { baseApi } from "../../api/baseApi";

const skillsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createSkill: builder.mutation({
      query: (userInfo) => ({
        url: "/skills/createSkill",
        method: "POST",
        body: userInfo,
      }),
    }),
    getSkills: builder.query({
      query: () => ({
        url: "/skills/getSkills",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetSkillsQuery, useCreateSkillMutation } = skillsApi;
