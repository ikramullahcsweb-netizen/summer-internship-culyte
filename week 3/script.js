
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