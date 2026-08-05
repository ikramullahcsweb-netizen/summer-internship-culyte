const user = { name: "Ali" };
user.name = "Sara";
console.log(user)
let count = 0;
count = count + 1;

if (true) {
  let x = 10;
  console.log("Inside block, x =", x);
}

function normalFn(a, b) {
  return a + b;
}
const arrowFn = (a, b) => a + b;

const handleSearch = (query, users) => {
  return users.filter((u) => u.name.toLowerCase().includes(query.toLowerCase()));
};

const userObj = { name: "Ikram", role: "admin", email: "x@y.com" };
const { name, role } = userObj;
const { name: userName } = userObj;

const response = { data: { data: { user: { name: "Ali" } } } };
const {
  data: {
    data: { user: nestedUser },
  },
} = response;
console.log("Nested destructured user:", nestedUser.name);

const students = [{ id: 1, name: "Ali" }];
const newStudent = { id: 2, name: "Sara" };
const updatedStudents = [...students, newStudent];

const form = { name: "", email: "" };
const updatedForm = { ...form, name: "Ali" };

const fullUser = { id: 1, password: "secret123", name: "Ali" };
const { password, ...safeUserData } = fullUser;

const [first, ...rest] = [1, 2, 3, 4];

const tplName = "Ikram";
const tplRole = "admin";
console.log(`Welcome ${tplName}! Access level: ${tplRole === "admin" ? "Full" : "Limited"}`);

function counter() {
  let closureCount = 0;
  return function () {
    closureCount++;
    return closureCount;
  };
}
const increment = counter();
console.log(increment());
console.log(increment());

const employees = [
  { id: 1, name: "Ali", dept: "IT", salary: 55000, active: true },
  { id: 2, name: "Sara", dept: "HR", salary: 48000, active: true },
  { id: 3, name: "Zain", dept: "IT", salary: 62000, active: false },
  { id: 4, name: "Mina", dept: "Finance", salary: 51000, active: true },
];

const activeEmployees = employees.filter((e) => e.active);
const summary = employees.map(({ name, salary }) => ({ name, salary }));

function findByName(arr, query) {
  return arr.find((e) => e.name.toLowerCase() === query.toLowerCase());
}

const byDept = employees.reduce((acc, e) => {
  acc[e.dept] = acc[e.dept] || [];
  acc[e.dept].push(e.name);
  return acc;
}, {});

const avgSalary = employees.reduce((sum, e) => sum + e.salary, 0) / employees.length;
const anyInactive = employees.some((e) => !e.active);
const allAboveMinWage = employees.every((e) => e.salary >= 40000);

console.log("Active employees:", activeEmployees);
console.log("Summary:", summary);
console.log("Find 'sara':", findByName(employees, "sara"));
console.log("Grouped by dept:", byDept);
console.log("Average salary:", avgSalary);
console.log("Any inactive?", anyInactive);
console.log("All above min wage?", allAboveMinWage);