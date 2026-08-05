
// 1. Promises & Async/Await
const simulateApiCall = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ status: 200, data: "Server response success" });
    }, 1000);
  });
};

const runAsyncDemo = async () => {
  const result = await simulateApiCall();
  console.log("Async data:", result.data);
};
runAsyncDemo();


// 2. Fetch & HTTP Basics (GET / POST) — Using DummyJSON API
const fetchDataExample = async () => {
  try {
    const response = await fetch("https://dummyjson.com/users/1");
    if (!response.ok) throw new Error("HTTP error");
    const data = await response.json();
    console.log("GET Data (DummyJSON):", data);
  } catch (error) {
    console.error("Fetch error:", error);
  }
};
fetchDataExample();

const postDataExample = async () => {
  try {
    const response = await fetch("https://dummyjson.com/users/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstName: "Ikram", lastName: "Developer", age: 22 })
    });
    const result = await response.json();
    console.log("POST Response (DummyJSON):", result);
  } catch (error) {
    console.error("POST error:", error);
  }
};
postDataExample();


// 3. Error Handling (try / catch)
const riskyOperation = async () => {
  try {
    const response = await fetch("https://dummyjson.com/invalid-endpoint-url");
    if (!response.ok) throw new Error("Server failed");
  } catch (error) {
    console.log("Caught error safely:", error.message);
  }
};
riskyOperation();


// 4. Optional Chaining (?.) & Nullish Coalescing (??)
const userProfile = { id: 1, name: "Ikram" };
const userCity = userProfile?.address?.city ?? "Default City";
console.log("City:", userCity);


// Ek normal JS object
const student = { name: "Ali", marks: 80, active: true };
console.log("Original object:", student);
console.log("Type:", typeof student); // "object"

// 1. stringify — object ko text (string) mein convert karna
const jsonText = JSON.stringify(student);
console.log("Stringified:", jsonText);
// '{"name":"Ali","marks":80,"active":true}'
console.log("Type after stringify:", typeof jsonText); // "string"

// 2. parse — text ko wapis object mein convert karna
const backToObject = JSON.parse(jsonText);
console.log("Parsed back:", backToObject);
console.log("Type after parse:", typeof backToObject); // "object"
console.log("Access a field:", backToObject.name); // "Ali"


// 3. Pretty print — readable formatting ke liye (debugging mein useful)
const prettyJson = JSON.stringify(student, null, 2);
console.log("Pretty printed:\n", prettyJson);


// 4. Real use-case — localStorage sirf strings store karta hai
const userData = { id: 1, name: "Ikram", role: "admin" };

// Save karna
const savedString = JSON.stringify(userData);
console.log("Saved as string:", savedString);

// Wapis load karna
const loadedUser = JSON.parse(savedString);
console.log("Loaded user name:", loadedUser.name);