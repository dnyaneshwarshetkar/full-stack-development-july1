import { Outlet } from "react-router-dom";
export default function Container(){
    return <><header>
        <ul>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/add-student">Add Student</a>
            </li>
            <li>
                <a href="/student-list">Student List</a>
            </li>
            <li>
                <a href="student-view/3">View Student</a>
            </li>
        </ul>
    </header>
    <Outlet></Outlet></>;
}