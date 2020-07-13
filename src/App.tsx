import React from "react";

function App() {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				height: "100vh",
			}}
		>
			<h1 style={{ fontSize: 8 * 20 }}>Valaxor</h1>

			<div style={{ display: "flex" }}>
				<a href="http://twitter.valaxor.com" style={{ margin: "0 16px" }}>
					Twitter
				</a>

				<a href="http://twitch.valaxor.com" style={{ margin: "0 16px" }}>
					Twitch
				</a>

				<a href="http://randomizer.valaxor.com" style={{ margin: "0 16px" }}>
					Randomizer
				</a>
			</div>

			<p>
				Website is a WIP, mostly to redirect to the{" "}
				<a href="http://randomizer.valaxor.com">Randomizer website</a>.
			</p>
		</div>
	);
}

export default App;
