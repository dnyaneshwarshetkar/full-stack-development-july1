import {useState} from "react";

export default function AddStudent(){
    let [student, setStudent] = useState({
        name: "John Doe",
        email: "",
        mobile: "",
        gender: "Male"
    });

    function setData(e){
       setStudent({...student, [e.target.name]:  e.target.value});
    }
    function saveStudent(e){
        e.preventDefault();
        fetch("http://localhost:3100/students", {
            method: "POST",
            body: JSON.stringify(student)
        }).then(response=>{
            response.json().then(data=>{
                console.log(data);
                alert("Student Created Successfully");
            })
        })
    }
    return <>
        <h1>Add Student</h1>
        <form onSubmit={saveStudent}>
            <div>
                <label>Name</label>
                <input type="text" id="name" name="name" placeholder="Enter name"
                value={student.name} onChange={setData} />
            </div>
            <div>
            <div>
                <label>Gender</label>
                <select id="gender" name="gender" value={student.gender}  onChange={setData}>
                    <option value=""> Select Gender</option>
                    <option value="Male"> Male</option>
                    <option value="Female"> Female</option>
                </select>
            </div>
            </div>

            <div>
            <div>
                <label>Mobile</label>
                <input type="text" id="mobile" name="mobile" placeholder="Enter mobilr" value={student.mobile}  onChange={setData}/>
            </div>
            </div>

            <div>
            <div>
                <label>Email</label>
                <input type="text" id="email" name="email" placeholder="Enter Email" value={student.email}  onChange={setData} />
            </div>
            </div>
            <button type="submit"> Save Student </button>
        </form>
    </>;
}