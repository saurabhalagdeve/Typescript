// alert("hello");

// let oursTuple: [number, boolean, string];

// oursTuple = [5, false, "Coding God was here"];

// oursTuple.push("Something new and wrong");

// alert(oursTuple);

// const graph: [number, number] = [55.2, 41.3];
// const [x, y] = graph;

// function multiply(a: number, b: number) {
//   return a * b;
// }

// console.log(multiply(2, 5));

// let firstName: string = "Dylan";
// let firstName = "Dylan";

// let v: any = true;
// v = "string"; // no error as it can be "any" type
// Math.round(v);
// console.log(typeof v);

// let value: string | undefined | null = null;
// console.log(typeof value);

// value = 'hello';
// console.log(typeof value);

// value = undefined;
// console.log(typeof value);

// type CarYear = number;
// type CarType = string;
// type CarModel = string;
// type Car = {
//   year: CarYear;
//   type: CarType;
//   model: CarModel;
// };

// const carYear: CarYear = 2001;
// const carType: CarType = "Toyota";
// const carModel: CarModel = "Corolla";
// const car: Car = {
//   year: carYear,
//   type: carType,
//   model: carModel,
// };

// console.log(car);

// enum CardinalDirections {
//   North = 1,
//   East,
//   South,
//   West,
// }

// console.log(CardinalDirections.North);

// console.log(CardinalDirections.East);

// console.log(CardinalDirections.South);

// console.log(CardinalDirections.West);

// alert("Hello");

// enum CardinalDirections {
//   North = 1,
//   East,
//   South,
//   West,
// }

// console.log(CardinalDirections.North);

// console.log(CardinalDirections.West);

// enum StatusCodes {
//   NotFound = 404,
//   Success = 200,
//   Accepted = 202,
//   BadRequest = 400,
// }

// console.log(StatusCodes.NotFound);

// console.log(StatusCodes.Success);

// enum CardinalDirections {
//   North = "North",
//   East = "East",
//   South = "South",
//   West = "West",
// }

// console.log(CardinalDirections.North);

// console.log(CardinalDirections.East);

// console.log(CardinalDirections.South);

// console.log(CardinalDirections.West);

// interface Rectangle {
//   height: number;
//   width: number;
// }

// const rectangle: Rectangle = {
//   height: 20,
//   width: 10,
// };

// console.log(rectangle);

// interface Rectangle {
//   height: number;
//   width: number;
// }

// const rectangles: Rectangle = {
//   height: 20,
//   width: 10,
// };

// console.log(rectangle);

// interface Rectangle {
//   height: number;
//   width: number;
// }

// interface ColoredRectangle extends Rectangle {
//   color: string;
// }

// const coloredRectangle: ColoredRectangle = {
//   height: 20,
//   width: 10,
//   color: "red",
// };

// console.log(coloredRectangle);

// let x: unknown = 'hello';
// console.log((x as string).length);
