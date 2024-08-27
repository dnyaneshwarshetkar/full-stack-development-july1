export default function ViewStudent(){
    let student = {
        name: "John",
        gender: "Male",
        email: "john@gmail.com",
        mobile: "+918923456789"
    }
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