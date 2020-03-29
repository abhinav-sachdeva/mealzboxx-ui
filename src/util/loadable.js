import React, { lazy, Suspense } from 'react';
import Loader from "../components/shared/Loader"
const loadable = (importFunc, { fallback = null } = { fallback: Loader }) => {
	const LazyComponent = lazy(importFunc);

	return props => (
		<Suspense fallback={<Loader />}>
			<LazyComponent {...props} />
		</Suspense>
	);
};

export default loadable;