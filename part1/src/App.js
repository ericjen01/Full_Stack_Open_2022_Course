const Hello = (props) => {
	return (
		<div>
			<p>
				Hello {props.name}, you are {props.age} old
			</p>
		</div>
	);
};

const Footer = () => {
	return <div>greeting app is created by eric jen</div>;
};

const App = () => {
	const name = "peter";
	const age = 10;
	return (
		<div>
			<h1>Greetings</h1>
			<Hello name="Takeda" age="15" />
			<Hello name={name} age={age} />
			<Footer />
		</div>
	);
};

export default App;
