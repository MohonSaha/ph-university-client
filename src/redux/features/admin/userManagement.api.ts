import { baseAPi } from "../../api/baseApi";

const userManagementApi = baseAPi.injectEndpoints({
  endpoints: (builder) => ({
    // getAllSemesters: builder.query({
    //   query: (agrs) => {
    //     const params = new URLSearchParams();

    //     if (agrs) {
    //       agrs.forEach((item: TQueryParam) => {
    //         params.append(item.name, item.value as string);
    //       });
    //     }

    //     return {
    //       url: "/academic-semesters",
    //       method: "GET",
    //       params: params,
    //     };
    //   },
    //   transformResponse: (response: TResponseRedux<TAcademicSemester[]>) => {
    //     return { data: response.data, meta: response.meta };
    //   },
    // }),
    addstudent: builder.mutation({
      query: (data) => ({
        url: "/users/create-student",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useAddstudentMutation } = userManagementApi;
