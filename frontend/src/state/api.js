import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:5000/" }),
  reducerPath: "api",
  tagTypes: [
    "Login",
    "DBConnection",
    "DBDiagram",
    "ReportSelection",
    "SqlGeneration",
    "DataVisualization",
    "Account",
  ],
  endpoints: (build) => ({
    login: build.mutation({
      query: (credentials) => ({
        url: "auth/login",
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: ["Login"],
    }),
    getDBConnection: build.query({
      query: () => "db/connection",
      providesTags: ["DBConnection"],
    }),
    getDBDiagram: build.query({
      query: () => "db/diagram",
      providesTags: ["DBDiagram"],
    }),
    getReportSelection: build.query({
      query: () => "calc_similarity",
      providesTags: ["ReportSelection"],
    }),
    getSqlGeneration: build.query({
      query: () => "sql/generation",
      providesTags: ["SqlGeneration"],
    }),
    getDataVisualization: build.query({
      query: () => "data/visualization",
      providesTags: ["DataVisualization"],
    }),
    getAccount: build.query({
      query: (id) => `account/${id}`,
      providesTags: ["Account"],
    }),
  }),
});

export const {
  useLoginMutation,
  useGetDBConnectionQuery,
  useGetDBDiagramQuery,
  useGetReportSelectionQuery,
  useGetSqlGenerationQuery,
  useGetDataVisualizationQuery,
  useGetAccountQuery,
} = api;
