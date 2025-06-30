import {
	type FC,
	StrictMode,
} from "react";
import {
	ErrorBoundary,
} from "react-error-boundary";
import {
	Provider,
} from "react-redux";
import {
	BrowserRouter,
} from "react-router";

import {
	PageSpinner,
} from "@/components/page-spinner/page-spinner";
import {
	ErrorUnknownPage,
} from "@/pages/error-unknown/page";
import {
	ApplicationRoutes,
} from "@/routes/routes";
import {
	store,
} from "@/store/store";

const Application: FC = () => {
	return (
		<StrictMode>
			<BrowserRouter>
				<Provider
					store={store}
				>
					<main>
						<ErrorBoundary
							fallback={<ErrorUnknownPage/>}
						>
							<ApplicationRoutes/>
							<PageSpinner/>
						</ErrorBoundary>
					</main>
				</Provider>
			</BrowserRouter>
		</StrictMode>
	);
};

export {
	Application,
};
