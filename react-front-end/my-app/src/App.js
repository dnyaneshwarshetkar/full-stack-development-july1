import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from './components/container/Container';
import AddStudent from './components/add-student/AddStudent';
import Home from './components/home/Home';
import ViewStudent from './components/view-student/ViewStudent';
import StudentList from './components/student-list/StudentList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Container/>}>
          <Route index element={<Home/>}></Route>
          <Route path="add-student" element={<AddStudent/>}></Route>
          <Route path="student-list" element={<StudentList/>}></Route>
          <Route path="student-view/:studentId" element={<ViewStudent/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
