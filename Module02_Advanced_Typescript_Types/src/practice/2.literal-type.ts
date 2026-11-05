// * Literal Type

type Status = "pending" | "approved" | "rejected";
let applicationStatus: Status;

applicationStatus = "approved";
applicationStatus = "pending";
applicationStatus = "rejected";

//! Error;
// applicationStatus = "completed"

// Number Literal
type DiceNumber = 1 | 2 | 3 | 4 | 5 | 6;
let dice: DiceNumber = 5;

// boolean literal;
type Active = true | false;

let isActive: Active = true;
isActive = false;
