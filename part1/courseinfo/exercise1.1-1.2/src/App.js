const App = () => {
	const course = "half stack app dev";
	const part1 = "fundamentals of react";
	const exercises1 = 10;
	const part2 = "using props to pass data";
	const exercises2 = 7;
	const part3 = "state of a component";
	const exercises3 = 14;

	return (
		<>
			<Header course={course} />
			<Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3} />
			<Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
		</>
	);
};

const Header = (props) => {
	return (
		<>
			<p>Course Name: {props.course}</p>
		</>
	);
};

const Content = (props) => {
	return (
		<>
			<p>Course Contents:</p>
			<Part part1={props.part1} exercises1={props.exercises1} />
			<Part part2={props.part2} exercises2={props.exercises2} />
			<Part part3={props.part3} exercises3={props.exercises3} />
		</>
	);
};

const Part = (props) => {
	return (
		<>
			<p>
				{props.part1} {props.exercises1}
				{props.part2} {props.exercises2}
				{props.part3} {props.exercises3}
			</p>
		</>
	);
};

const Total = (props) => {
	return <>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</>;
};

export default App;
