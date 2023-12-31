/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum Day {
	Monday,
	Tuesday,
	Wednesday,
	Thursday,
	Friday,
	Saturday,
	Sunday,
}

function isWeekend(whatDay: Day): boolean {
	return whatDay === Day.Saturday || whatDay === Day.Sunday
}

isWeekend(Day.Saturday)
