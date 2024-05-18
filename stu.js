let std_array = [];
const cancel_form = () => {
    let close = document.getElementById("formClose");
    close.style.display = ("none");

}
const student_result = () => {
    const std_id = document.getElementById("stuId").value;
    const std_name = document.getElementById("stuName").value;
    const paper_n = document.getElementById("papName").value;
    const marks_o = document.getElementById("marksOb").value;
    const grade_std = document.getElementById("grade").value;
    const stu_res = document.getElementById("papRes").value;

    std_obj = {
        std_id_1: parseInt(std_id),
        std_name_2: std_name,
        paper_n_3: paper_n,
        marks_o_4: marks_o,
        grade_std_5: grade_std,
        stu_res_6: stu_res,
    }
    std_array.push(std_obj); // push date from abject to array
    const std_table = document.querySelector("#stdTable tbody");
    const std_row = document.createElement("tr");
    std_row.setAttribute("id", "rows")
    std_row.innerHTML = "";
    std_array.forEach(std_d => {
        std_row.innerHTML = `
        <td>${std_d.std_id_1}</td>
        <td>${std_d.std_name_2}</td>
        <td>${std_d.paper_n_3}</td>
        <td>${std_d.marks_o_4}</td>
        <td>${std_d.grade_std_5}</td>
        <td><span class=${std_d.stu_res_6 == 'Passed'? "'badge bg-success'":
        std_d.stu_res_6 == 'Failed' ?  "'badge bg-danger'":
        std_d.stu_res_6 == 'Average'? "'badge bg-secondary'": "'badge bg-info text-dark'"}>${std_d.stu_res_6}</span></td>
        <td>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="Rec_update(${std_d.std_id_1})">
        Edit
      </button>
        <button class="btn btn-danger" onclick="delete_record(${std_d.std_id_1})">Delete</button></td>
        `
    });
    std_table.appendChild(std_row);
}


const delete_record = (id) => {

    console.log(typeof(id), typeof(std_array[0].std_id_1));
    const new_std_array = std_array.filter(std_d => std_d.std_id_1 !== id);

    console.log(new_std_array.length);
    // alert(id);

    const std_table = document.querySelector("#stdTable tbody");
    std_table.innerHTML = ""
        // const std_row = document.getElementById("rows");
        // std_row.innerHTML = ""
    var newRow = document.createElement("tr");
    var th_row = document.createElement("tr");

    // Set the innerHTML of the new row to your new_th string

    const new_th = `
    <th scope="col">Student ID</th>
    <th scope="col">Student Name</th>
    <th scope="col">Name of Paper Taken</th>
    <th scope="col">Marks Obtained</th>
    <th scope="col">Grading</th>
    <th scope="col">Paper Result</th>`
    newRow.innerHTML  =  new_th;
    new_std_array.forEach(std_d => {
        const cell1 = document.createElement("td");
        const cell2 = document.createElement("td");
        const cell3 = document.createElement("td");
        const cell4 = document.createElement("td");
        const cell5 = document.createElement("td");
        const cell6 = document.createElement("td");
        const cell7 = document.createElement("td");
        const cell8 = document.createElement("td");

        cell1.textContent = `${std_d.std_id_1}`
        cell2.textContent = `${std_d.std_name_2}`
        cell3.textContent = `${std_d.paper_n_3}`
        cell4.textContent = `${std_d.marks_o_4}`
        cell5.textContent = `${std_d.grade_std_5}`
        cell6.textContent = `${std_d.stu_res_6}`
        cell7.textContent = `<span class=${std_d.stu_res_6 == 'Passed'? "'badge bg-success'":
        std_d.stu_res_6 == 'Failed' ?  "'badge bg-danger'":
        std_d.stu_res_6 == 'Average'? "'badge bg-secondary'": "'badge bg-info text-dark'"}>${std_d.stu_res_6}</span>`
        cell8.textContent = `
        <button class="btn btn-primary">Edit</button>
        <button class="btn btn-danger" onclick="delete_record(${std_d.std_id_1})">Delete</button>`
        const rowz = [cell1, cell2, cell3, cell4, cell5, cell6, cell8]
        rowz.forEach(function(cell) {
            // Append each cell to the row
            newRow.appendChild(cell);
        });
        std_table.appendChild(th_row);
        std_table.appendChild(newRow);





        //     std_row.innerHTML = `
        //     <td>${std_d.std_id_1}</td>
        //     <td>${std_d.std_name_2}</td>
        //     <td>${std_d.paper_n_3}</td>
        //     <td>${std_d.marks_o_4}</td>
        //     <td>${std_d.grade_std_5}</td>
        //     <td>${std_d.stu_res_6}</td>
        //     <td><span class=${std_d.stu_res_6 == 'Passed'? "'badge bg-success'":
        // std_d.stu_res_6 == 'Failed' ? "'badge bg-danger'" :
        //     std_d.stu_res_6 == 'Average'? "'badge bg-secondary'": "'badge bg-info text-dark'"}>${std_d.stu_res_6}</span></td>
        //     <td>
        //     <button class="btn btn-primary">Edit</button>
        //     <button class="btn btn-danger" onclick="delete_record(${std_d.std_id_1})">Delete</button></td>
        //     `
        // });
        // std_table.appendChild(std_row);

        // var newRow = document.createElement("tr");

        // // Assuming data is an array containing the content for each cell in the row
        // data.forEach(function(cellData) {
        //     // Create a new cell element
        //     var cell = document.createElement("td");

        //     // Assign the content to the cell
        //     cell.textContent = cellData;

        //     // Append the cell to the row
        //     newRow.appendChild(cell);
    });

    // Append the new row to the existing row
    // row.appendChild(newRow);
}
const Rec_update = (id) => {
    const data = std_array[id - 1];
    console.log([id - 1]);
    document.getElementById("stuId1").value = data.std_id_1;
    document.getElementById("stuName2").value = data.std_name_2;
    document.getElementById("papName3").value = data.paper_n_3;
    document.getElementById("marksOb4").value = data.marks_o_4;
    document.getElementById("grade5").value = data.grade_std_5;
    document.getElementById("papRes6").value = data.stu_res_6;
}

const edit_val = () => {
    const st_Id = document.getElementById("stuId1").value;
    const st_Na = document.getElementById("stuName2").value;
    const pa_Na = document.getElementById("papName3").value;
    const mar_p = document.getElementById("marksOb4").value;
    const gra_p = document.getElementById("grade5").value;
    const p_res = document.getElementById("papRes6").value;
    // console.log(st_Id, st_Na, pa_Na, mar_p, gra_p, p_res);
    std_array[st_Id - 1].std_name_2 = st_Na;
    std_array[st_Id - 1].paper_n_3 = pa_Na;
    std_array[st_Id - 1].marks_o_4 = mar_p;
    std_array[st_Id - 1].grade_std_5 = gra_p;
    std_array[st_Id - 1].stu_res_6 = p_res;
    console.log(std_array);
    const std_table = document.querySelector("#stdTable tbody");
    const std_row = document.getElementById("rows");
    std_row.innerHTML = ""
    std_array.forEach(std_d => {
        std_row.innerHTML = `
        <td>${std_d.std_id_1}</td>
        <td>${std_d.std_name_2}</td>
        <td>${std_d.paper_n_3}</td>
        <td>${std_d.marks_o_4}</td>
        <td>${std_d.grade_std_5}</td>
        <td>${std_d.stu_res_6}</td>
        <td><span class=${std_d.stu_res_6 == 'Passed'? "'badge bg-success'":
        std_d.stu_res_6 == 'Failed' ?  "'badge bg-danger'":
        std_d.stu_res_6 == 'Average'? "'badge bg-secondary'": "'badge bg-info text-dark'"}>${std_d.stu_res_6}</span></td>
        <td>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="Rec_update(${std_d.std_id_1})">
        Edit
      </button>
        <button class="btn btn-danger" onclick="delete_record(${std_d.std_id_1})">Delete</button></td>
        `
    });
    std_table.appendChild(std_row);


}