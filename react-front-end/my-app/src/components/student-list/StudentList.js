import { useEffect, useState } from "react";

export default function StudentList(){
    const [studentList, setStudentList] = useState([{name:"JOhn", email: "", mobile:"",gender:""}]);

    useEffect(()=>{
       fetch("http://localhost:3100/students", {
        method: "GET"
       }).then((data)=>{
           data.json().then(dataList=>{
            setStudentList(dataList);
           })
       })
    }, [studentList]);
    return <>
    <h1>Student List</h1>
    <table>
        <thead>
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Manage</th>
        </tr>
        </thead>
        <tbody>
        {studentList.map((singleStudent)=>{
            return  <tr key={singleStudent._id}>
            <td>{singleStudent._id}</td>
            <td>{singleStudent.name}</td>
            <td>{singleStudent.gender}</td>
            <td>{singleStudent.email}</td>
            <td>{singleStudent.mobile}</td>
            <td><a href={"/student-view/"+singleStudent._id}>View Student</a></td>
        </tr>
        })
        }
     </tbody>
    </table>
    </>
    
    ;
}