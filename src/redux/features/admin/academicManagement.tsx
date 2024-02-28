import { TQueryParam, TResponseRedux } from "../../../types";
import { TAcademicSemester } from "../../../types/academicManagement.type";
import { baseAPi } from "../../api/baseApi";

const academicManagementApi = baseAPi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSemesters: builder.query({
      query: (agrs) => {
        const params = new URLSearchParams();

        if (agrs) {
          agrs.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: "/academic-semesters",
          method: "GET",
          params: params,
        };
      },
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
