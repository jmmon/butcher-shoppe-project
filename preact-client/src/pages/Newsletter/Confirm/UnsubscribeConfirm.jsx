import React from "react";
import Confirm from "./Confirm";

export default function UnsubscribeConfirm({path, setVisitedRoutes}) {
	React.useEffect(() => {
		setVisitedRoutes((prev) => ([...prev, path]));
	},[])
	return <Confirm isUnsubscribe />;
}
