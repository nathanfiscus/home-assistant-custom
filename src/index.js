/* eslint-disable import/default */

import React from "react";
import {render} from "react-dom";
import {AppContainer} from "react-hot-loader";
import configureStore, {history} from "./store/configureStore";
import Root from "./internals/Root";
import "typeface-roboto";

require("./favicon.ico");

const store = configureStore();

render(
	<AppContainer>
		<Root store={store} history={history}/>
	</AppContainer>,
	document.getElementById("app")
);

if (module.hot) {
	module.hot.accept("./internals/Root", () => {
		const NewRoot = require("./internals/Root").default;
		render(
			<AppContainer>
				<NewRoot store={store} history={history}/>
			</AppContainer>,
			document.getElementById("app")
		);
	});
}
