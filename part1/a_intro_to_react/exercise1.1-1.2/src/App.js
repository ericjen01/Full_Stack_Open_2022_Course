/*---------------------------------------------------------SOLUTION 3:----------------------------*/

const App = () => {
	const course = "Half Stack Applicaiton Development";
	const parts = [
		{ name: "fundamentals fo react", exercises: 10 },
		{ name: "using props to pass data", exercises: 7 },
		{ name: "state of a component", exercises: 14 },
	];

	return (
		<>
			<Header courseName={course} />
			<Content courseContent={parts} />
			<Total totalCredits={parts[0].exercises + parts[1].exercises + parts[2].exercises} />
		</>
	);
};

const Header = (input) => <h1>Course Name: {input.courseName}</h1>;
const Content = (input) => (
	<>
		<Part article={input.courseContent[0]} />
		<Part article={input.courseContent[1]} />
		<Part article={input.courseContent[2]} />
	</>
);
const Part = (input) => (
	<p>
		Course Decription: {input.article.name}, Credits: {input.article.exercises}
	</p>
);
const Total = (input) => <p>Total credits upon completion: {input.totalCredits}</p>;

export default App;
/*---------------------------------------------------------SOLUTION 2:-------------------------------
const App = () => {
	const course = "half stack app dev";
	const parts = [
		{
			name: "fundamentasl of react",
			exercises: 10,
		},
		{
			name: "using props to pass data",
			exercises: 7,
		},
		{
			name: "state of a component",
			exercises: 14,
		},
	];

	return (
		<>
			<Header courseName={course} />
			<Content courseParts={parts} />
			<Total totalCredits={parts[0].exercises + parts[1].exercises + parts[2].exercises} />
		</>
	);
};

const Header = (input) => <h1>{input.courseName}</h1>;
const Content = (input) => (
	<>
		<p>
			{input.courseParts[0].name} {input.courseParts[0].exercises}
		</p>
		<p>
			{input.courseParts[1].name} {input.courseParts[1].exercises}
		</p>
		<p>
			{input.courseParts[2].name} {input.courseParts[2].exercises}
		</p>
	</>
);
const Total = (input) => <p> Total Number of Credits: {input.totalCredits}</p>;

export default App;
*/

/*---------------------------------------------------------SOLUTION 1:-------------------------------

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
*/
