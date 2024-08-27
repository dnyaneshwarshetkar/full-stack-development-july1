export default function AddStudent(){
    return <>
        <h1>Add Student</h1>
        <form>
            <div>
                <label>Name</label>
                <input type="text" id="name" name="name" placeholder="Enter name" />
            </div>
            <div>
            <div>
                <label>Gender</label>
                <select id="gender" name="gender">
                    <option value=""> Select Gender</option>
                    <option value="Male"> Male</option>
                    <option value="Female"> Female</option>
                </select>
            </div>
            </div>

            <div>
            <div>
                <label>Mobile</label>
                <input type="text" id="mobile" name="mobile" placeholder="Enter mobilr" />
            </div>
            </div>

            <div>
            <div>
                <label>Email</label>
                <input type="text" id="email" name="email" placeholder="Enter Email" />
            </div>
            </div>
            <button type="submit"> Save Student </button>
        </form>
    </>;
}