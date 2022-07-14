/*--------------------------SOLUTION FOR EXERCISE 1.5:----------------------------*/
const App = () => {
	const course = {
		name: "Half Stack Applicaiton Development",
		parts: [
			{
				name: "fundamentals fo react",
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
		],
	};

	return (
		<>
			<Header courseName={course.name} />
			<Content courseContent={course.parts} />
			<Total totalCredits={course.parts} />
		</>
	);
};

const Header = (input) => <h1>Course Name: {input.courseName}</h1>;

const Content = (input) => (
	<>
		<Part article={input.courseContent[0].name} credit={input.courseContent[0].exercises} />
		<Part article={input.courseContent[1].name} credit={input.courseContent[1].exercises} />
		<Part article={input.courseContent[2].name} credit={input.courseContent[2].exercises} />
	</>
);

const Part = (input) => (
	<p>
		Course Decription: {input.article}, Credits: {input.credit}
	</p>
);

const Total = (input) => {
	let sum = input.totalCredits[0].exercises + input.totalCredits[1].exercises + input.totalCredits[2].exercises;
	return <p>Total Credits: {sum}</p>;
};

export default App;

/*--------------------------SOLUTION FOR EXERCISE 1.4:----------------------------
const App = () => {
	const course = "Half Stack Applicaiton Development";
	const parts = [
		{
			name: "fundamentals fo react",
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
			<Content courseContent={parts} />
			<Total totalCredits={parts} />
		</>
	);
};

const Header = (input) => <h1>Course Name: {input.courseName}</h1>;

const Content = (input) => (
	<>
		<Part article={input.courseContent[0].name} credit={input.courseContent[0].exercises} />
		<Part article={input.courseContent[1].name} credit={input.courseContent[1].exercises} />
		<Part article={input.courseContent[2].name} credit={input.courseContent[2].exercises} />
	</>
);

const Part = (input) => (
	<p>
		Course Decription: {input.article}, Credits: {input.credit}
	</p>
);

const Total = (input) => {
	let sum = input.totalCredits[0].exercises + input.totalCredits[1].exercises + input.totalCredits[2].exercises;
	return <p>Total Credits: {sum}</p>;
};

export default App;*/

/*--------------------------SOLUTION FOR EXERCISE 1.4 (still need to pass entire array into Content and Total):----------------------------
const App = () => {
	const course = "Half Stack Applicaiton Development";
	const parts = [
		{
			name: "fundamentals fo react",
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
			<Content courseContent={parts[0]} />
			<Content courseContent={parts[1]} />
			<Content courseContent={parts[2]} />
			<Total totalCredits={parts[0].exercises + parts[1].exercises + parts[2].exercises} />
		</>
	);
};

const Header = (input) => <h1>Course Name: {input.courseName}</h1>;

const Content = (input) => (
	<>
		<Part article={input.courseContent.name} credit={input.courseContent.exercises} />
	</>
);

const Part = (input) => (
	<p>
		Course Decription: {input.article}, Credits: {input.credit}
	</p>
);

const Total = (input) => <p>Total credits upon completion: {input.totalCredits}</p>;

export default App;

*/

/*---------------------------------------------------------SOLUTION FOR EXERCISE 1.3:----------------------------
const App = () => {
	const course = "Half Stack Applicaiton Development";
	const part1 = {
		name: "fundamentals fo react",
		exercises: 10,
	};
	const part2 = {
		name: "using props to pass data",
		exercises: 7,
	};
	const part3 = {
		name: "state of a component",
		exercises: 14,
	};

	return (
		<>
			<Header courseName={course} />
			<Content courseContent={part1} />
			<Content courseContent={part2} />
			<Content courseContent={part3} />
			<Total totalCredits={part1.exercises + part2.exercises + part3.exercises} />
		</>
	);
};

const Header = (input) => <h1>Course Name: {input.courseName}</h1>;

const Content = (input) => (
	<>
		<Part article={input.courseContent.name} credit={input.courseContent.exercises} />
	</>
);

const Part = (input) => (
	<p>
		Course Decription: {input.article}, Credits: {input.credit}
	</p>
);

const Total = (input) => <p>Total credits upon completion: {input.totalCredits}</p>;

export default App;

*/
