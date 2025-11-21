import './login.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Login() {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [showForm, setShowForm] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.toLowerCase());
    // const validatePassword = (password) =>
    //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
    const validatePassword = (password) =>
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/.test(password);

    const navigate = useNavigate();

    const redirectsubmit = async (e) => {
        e.preventDefault();
        setShowForm(true);

        if (!email || !password) {
            alert("Please fill in all fields");
            return;
        }

        if (!validateEmail(email)) {
            alert("Please enter a valid email address");
            return;
        }

        if (!validatePassword(password)) {
            alert("Password doesnot match");
            return;
        }

        const formData = new FormData();
        formData.append("email", email);
        formData.append("password", password);
        try {
            const res = await fetch('http://localhost:3000/login', {
                method: 'POST',
                body: formData,
                credentials: 'include'
            });
            if (res.ok) {
                const data = await res.json();
                sessionStorage.setItem("userEmail", data.email);
                sessionStorage.setItem("userRole", data.role);

                alert('Login successfully!');
                // window.location.href = '/';
                if (data.role === "admin") {
                    navigate('/home');
                } else {
                    navigate('/');
                }

                // navigate('/');
            } else {
                alert('User not Found.Failed to login account');
            }
        } catch (err) {
            console.error(err);
            alert('Server error');
        }
    };

    return (
        <>
            <div className="loginmodal-overlays">
                <form className="loginmodal-forms" onSubmit={redirectsubmit}>
                    <h2>Login Form</h2>

                    <div className="loginform-row">
                        <div className="logininput-group">
                            <label>Email</label>
                            <input type="email" onChange={(e) => setemail(e.target.value)} required />
                        </div>
                    </div>

                    <div className="loginform-row">
                        <div className="logininput-group">
                            <label>Password</label>
                            <input
                                type={showPassword ? "text" : "password"}
                                onChange={(e) => setpassword(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <label>
                        <input type="checkbox" onChange={() => setShowPassword(!showPassword)} />
                        Show Password
                    </label>

                    <button type="submit">Submit</button>
                    <Link to="/signup">Doesn't have an account?</Link>
                </form>
            </div>
        </>
    )
}
export default Login