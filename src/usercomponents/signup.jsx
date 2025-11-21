import './signup.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Signup() {
    const [name, setname] = useState('');
    const [gender, setgender] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [confirmpassword, setconfirmpassword] = useState('');
    const [mobile, setmobile] = useState('');
    const [showForm, setShowForm] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.toLowerCase());
    const validatePassword = (password) =>
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/.test(password);
    const validateMobile = (mobile) => /^\d{11}$/.test(mobile);

    const redirectsubmit = async (e) => {
        e.preventDefault();
        setShowForm(true);

        if (!name || !gender || !email || !password || !confirmpassword || !mobile) {
            alert("Please fill in all fields");
            return;
        }

        if (password !== confirmpassword) {
            alert("Passwords do not match");
            return;
        }

        if (!validateEmail(email)) {
            alert("Please enter a valid email address");
            return;
        }

        if (!validatePassword(password)) {
            alert("Password must be at least 8 characters and include uppercase, lowercase, number, and special character.");
            return;
        }

        if (!validateMobile(mobile)) {
            alert("Phone number must be exactly 11 digits.");
            return;
        }

        const formData = new FormData();
        formData.append("name", name);
        formData.append("gender", gender);
        formData.append("email", email);
        formData.append("password", password);
        formData.append("confirmpassword", confirmpassword);
        formData.append("mobile", mobile);

        try {
            const res = await fetch('http://localhost:3000/signup', {
                method: 'POST',
                body: formData
            });
            if (res.ok) {
                alert('Account created successfully!');
                window.location.href = '/login';
            } else {
                alert('Failed to create account');
            }
        } catch (err) {
            console.error(err);
            alert('Server error');
        }
    };

    return (
        <div className="signup-overlays">
            <form className="signup-forms" onSubmit={redirectsubmit}>
                <h2>Registration Form</h2>

                <div className="form-row">
                    <div className="signupinput-group">
                        <label>Full Name</label>
                        <input type="text" onChange={(e) => setname(e.target.value)} required />
                    </div>

                    <div className="signupinput-group">
                        <label>Gender</label>
                        <select onChange={(e) => setgender(e.target.value)} required>
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                </div>

                <div className="form-row">
                    <div className="signupinput-group">
                        <label>Phone Number</label>
                        <input
                            type="text"
                            maxLength="11"
                            onChange={(e) => {
                                const value = e.target.value.replace(/\D/g, "");
                                setmobile(value);
                            }}
                            value={mobile}
                            required
                        />
                    </div>

                    <div className="signupinput-group">
                        <label>Email</label>
                        <input type="email" onChange={(e) => setemail(e.target.value)} required />
                    </div>
                </div>

                <div className="form-row">
                    <div className="signupinput-group">
                        <label>Password</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            onChange={(e) => setpassword(e.target.value)}
                            required
                        />
                    </div>

                    <div className="signupinput-group">
                        <label>Confirm Password</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            onChange={(e) => setconfirmpassword(e.target.value)}
                            required
                        />
                    </div>
                </div>

                <label>
                    <input type="checkbox" onChange={() => setShowPassword(!showPassword)} />
                    Show Password
                </label>

                <button type="submit">Submit</button>
                <Link to="/login">Already have an account?</Link>
            </form>
        </div>
    );
}

export default Signup;
