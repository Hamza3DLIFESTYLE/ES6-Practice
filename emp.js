const employee_data_arry = [];
const emp_s = () => {
    let EmpId = document.getElementById("empId").value;
    let EmpName = document.getElementById("empName").value;
    let DepName = document.getElementById("depName").value;
    let Dateofjoin = document.getElementById("dOfj").value;
    let status = document.getElementById("status").value;
    employee_data_object = {
        employeeId: EmpId,
        employeename: EmpName,
        departmentname: DepName,
        dateofjoin: Dateofjoin,
        status: status,
    }
    employee_data_arry.push(employee_data_object);
    // console.log(employee_data_arry[0]);
    const table_d = document.querySelector("#empRtable tbody");
    const empd_row = document.createElement("tr");
    empd_row.innerHTML = "";
    employee_data_arry.forEach(empdd => {
        empd_row.innerHTML = `
        <td>${empdd.employeeId}</td>
        <td>${empdd.employeename}</td>
        <td>${empdd.departmentname}</td>
        <td>${empdd.dateofjoin}</td>
        <td><span class=${empdd.status=='Active'? "'badge bg-success'":
        empdd.status=='In-Active' ? "'badge bg-secondary'":
        empdd.status=='Fired' ?"'badge bg-warning text-dark'":
        empdd.status=='Quit'?"'badge bg-info text-dark'":"'badge bg-light text-dark'"}>${empdd.status}</span></td>
        `
    });
    table_d.appendChild(empd_row);
}