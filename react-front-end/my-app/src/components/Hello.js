import "./Hello.css";
export default function Hello({friendName, gender,email, mobile}){
    return <h1 className="hello"> Hello, {friendName}, {gender},{email}, {mobile} </h1>;
}