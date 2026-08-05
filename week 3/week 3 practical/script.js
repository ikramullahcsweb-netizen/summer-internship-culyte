const fetchBtn = document.getElementById("fetchBtn");
const statusDiv = document.getElementById("status");
const cardContainer = document.getElementById("cardContainer");

async function fetchMultipleUsers() {
  statusDiv.innerText = "Loading multiple users...";
  statusDiv.style.color = "#ffa500";
  cardContainer.innerHTML = "";

  try {
    const response = await fetch("https://dummyjson.com/users?limit=5");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    const users = data?.users;

    if (!users || users.length === 0) {
      statusDiv.style.color = "#ff6b6b";
      statusDiv.innerText = "No users found.";
      return;
    }
    statusDiv.style.color = "#4ecca3";
    statusDiv.innerText = `Successfully loaded ${users.length} users!`;

    users.forEach((user) => {
      const firstName = user?.firstName ?? "Unknown";
      const lastName = user?.lastName ?? "";
      const email = user?.email ?? "N/A";
      const city = user?.address?.city ?? "N/A";
      const company = user?.company?.name ?? "Independent";

      const card = document.createElement("div");
      card.classList.add("user-card");
      card.innerHTML = `
            <h3>${firstName} ${lastName}</h3>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>City:</strong> ${city}</p>
            <p><strong>Company:</strong> ${company}</p>
        `;

      cardContainer.appendChild(card);
    });
  } catch (error) {
    console.error("Fetch error:", error);
    statusDiv.style.color = "#ff6b6b";
    statusDiv.innerText = `Failed to load data: ${error.message}`;
  }
}
fetchBtn.addEventListener("click", fetchMultipleUsers);