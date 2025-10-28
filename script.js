// Employee data
const employees = [
  { id: "EMP101", name: "Priya Sharma", dept: "IT", role: "Software Engineer", email: "priya@ibm.com", location: "Bangalore", img: "https://randomuser.me/api/portraits/women/44.jpg" },
  { id: "EMP102", name: "Arjun Patel", dept: "Finance", role: "Account Manager", email: "arjun@ibm.com", location: "Pune", img: "https://randomuser.me/api/portraits/men/45.jpg" },
  { id: "EMP103", name: "Divya Nair", dept: "HR", role: "HR Executive", email: "divya@ibm.com", location: "Hyderabad", img: "https://randomuser.me/api/portraits/women/40.jpg" },
  { id: "EMP104", name: "Rahul Mehta", dept: "IT", role: "Frontend Developer", email: "rahul@ibm.com", location: "Chennai", img: "https://randomuser.me/api/portraits/men/46.jpg" },
  { id: "EMP105", name: "Sneha Kapoor", dept: "Marketing", role: "Marketing Lead", email: "sneha@ibm.com", location: "Delhi", img: "https://randomuser.me/api/portraits/women/41.jpg" },
  { id: "EMP106", name: "Karan Verma", dept: "Finance", role: "Financial Analyst", email: "karan@ibm.com", location: "Mumbai", img: "https://randomuser.me/api/portraits/men/47.jpg" }
];

const employeeList = document.getElementById("employeeList");
const searchBar = document.getElementById("searchBar");
const deptFilter = document.getElementById("deptFilter");

// Function to display employees
function displayEmployees(data) {
  employeeList.innerHTML = "";

  if (data.length === 0) {
    employeeList.innerHTML = "<p>No results found...</p>";
    return;
  }

  data.forEach(emp => {
    const card = document.createElement("div");
    card.classList.add("employee-card");
    card.innerHTML = `
      <img src="${emp.img}" alt="${emp.name}">
      <h3>${emp.name}</h3>
      <p><b>ID:</b> ${emp.id}</p>
      <p><b>Department:</b> ${emp.dept}</p>
      <p><b>Role:</b> ${emp.role}</p>
      <p><b>Email:</b> ${emp.email}</p>
      <p><b>Location:</b> ${emp.location}</p>
    `;
    employeeList.appendChild(card);
  });
}

// Search and Filter Functionality
function filterEmployees() {
  const searchText = searchBar.value.toLowerCase();
  const dept = deptFilter.value;

  const filtered = employees.filter(emp => {
    const matchesSearch =
      emp.name.toLowerCase().includes(searchText) ||
      emp.id.toLowerCase().includes(searchText) ||
      emp.dept.toLowerCase().includes(searchText);
    const matchesDept = dept === "all" || emp.dept === dept;
    return matchesSearch && matchesDept;
  });

  displayEmployees(filtered);
}

searchBar.addEventListener("input", filterEmployees);
deptFilter.addEventListener("change", filterEmployees);

// Initial Display
displayEmployees(employees);
