import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export default function ViewStudent(){
    let params = useParams();
    let [student, setStudent] = useState({})
    useEffect(()=>{
        console.log(params);
        fetch(`http://localhost:3100/students/${params.studentId}`,{
            method: "GET"
        }).then(response=>{
            response.json().then(studentData=>{
                setStudent(studentData);
            });
        })
    },[params.studentId]);
    return <>
    <h1>View Student</h1>
        <ul>
            <li>Name: {student.name}</li>
            <li>Gender: {student.gender}</li>
            <li>Email: {student.email}</li>
            <li>Mobile: {student.mobile}</li>
        </ul>
    </>;
}