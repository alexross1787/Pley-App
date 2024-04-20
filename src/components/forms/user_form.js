import { useState } from "react";
import { createNewUser } from "../../store/user";
import Navbar from "../navbar";
import Footer from "../footer";
import "../styles.css/footer.css"

export default function UserForm() {
    const [userId, setUserId] = useState(''); 
    const [username, setUsername] = useState(''); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [profileInfo, setProfileInfo] = useState('');

    const handleSubmit = () => {
        dispatchEvent(createNewUser()).then((id) =>{
            {username, email, password, profileInfo}
        })
    }
    return (
        <div>
            <Navbar />
        <div className="container form-body">
            <div className="row justify-content-center align-items-center">
        <form id="userForm" onSubmit={(e) => e.preventDefault()}>
            <input value={userId} onChange={(e) => setUserId(e.target.value)} type="number" placeholder="User ID" className="form-label" id="userId" required></input>

            <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Username" className="form-label" id="username" required></input>

            <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" className="form-label" id="email" required></input>

            <input value={password} onChange={(e) => setPassword(e.target.value)} type="text" placeholder="Password" className="form-label" id="password" required></input>

            <input value={profileInfo} onChange={(e) => setProfileInfo(e.target.value)} type="text" placeholder="Profile Information" className="form-label" id="profileInfo" required></input>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
        </div>
        <Footer />
        </div>
    )
}