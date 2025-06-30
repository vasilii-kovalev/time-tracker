import {
	type FC,
	Suspense,
} from "react";
import {
	Route,
	Routes,
} from "react-router";

import {
	ErrorNotFoundPage,
} from "@/pages/error-not-found/page";

const ApplicationRoutes: FC = () => {
	return (
		<Suspense
			fallback={null}
		>
			<Routes>
				<Route
					element={<ErrorNotFoundPage/>}
					path="*"
				/>
			</Routes>
		</Suspense>
	);
};

export {
	ApplicationRoutes,
};
