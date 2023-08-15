const LayOut = ({ children }) => {
	return (
		<div className="layout">
			<div id="header">
				<h1> Redux Example </h1>
			</div>
			<main>
				{children}
			</main>
		</div>
	)
}

export default LayOut