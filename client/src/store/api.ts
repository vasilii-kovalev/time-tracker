import {
	createApi,
	fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

enum ApiTagType {
	CURRENT_USER = "CURRENT_USER",
}

const api = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: "/api",
	}),
	endpoints: () => {
		return {};
	},
	invalidationBehavior: "immediately",
	reducerPath: "api",
	tagTypes: Object.values(ApiTagType),
});

export {
	api,
	ApiTagType,
};
