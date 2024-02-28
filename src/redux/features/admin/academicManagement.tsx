import { TResponseRedux } from "../../../types";
import { TAcademicSemester } from "../../../types/academicManagement.type";
import { baseAPi } from "../../api/baseApi";

const academicManagementApi = baseAPi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSemesters: builder.query({
      query: () => ({
        url: "/academic-semesters",
        method: "GET",
      }),
      transformResponse: (response: TResponseRedux<TAcademicSemester[]>) => {
        return { data: response.data, meta: response.meta };
      },
    }),
    addAcademicSemesters: builder.mutation({
      query: (data) => ({
        url: "/academic-semesters/create-academic-semester",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetAllSemestersQuery, useAddAcademicSemestersMutation } =
  academicManagementApi;
