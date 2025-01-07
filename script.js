console.log('Hello!');
const employeeContainer = document.getElementById('employeeContainer');
const empFilterCheckbox = document.getElementById('empFilterCheckbox');

const employeeData = [
  { id: 1, name: 'Alice', experienceInYears: 2 },

  { id: 2, name: 'Bob', experienceInYears: 9 },

  { id: 3, name: 'Charlie', experienceInYears: 4 },

  { id: 4, name: 'John', experienceInYears: 19 },
];
function showEmp(isChecked) {
  const filterData = isChecked
    ? employeeData.filter((emp) => emp.experienceInYears > 5)
    : employeeData;
  const showEmployeeHtml = filterData.map(
    (emp) =>
      `<strong>ID:</strong> ${emp.id} <br>
<strong>Name:</strong> ${emp.name} <br>
<strong>Experience in years:</strong> ${emp.experienceInYears} <br>
<hr/>
`
  );
  employeeContainer.innerHTML = showEmployeeHtml.join('');
}
showEmp(false);
empFilterCheckbox.addEventListener('change', () => {
  showEmp(empFilterCheckbox.checked);
});
