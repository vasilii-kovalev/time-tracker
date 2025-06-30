import {
	type FC,
	Fragment,
} from "react";
import {
	useSelector,
} from "react-redux";

import {
	selectIsPageSpinnerVisible,
} from "@/features/page-spinner/store/selectors";

const PageSpinner: FC = () => {
	const isVisible = useSelector(selectIsPageSpinnerVisible);

	if (isVisible) {
		return (
			<Fragment>
				Loading...
			</Fragment>
		);
	}

	return null;
};

export {
	PageSpinner,
};
