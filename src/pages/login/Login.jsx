import React from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import "./login.scss";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const [error, setError] = React.useState(false);
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user);
                if (error) setError(false);
                setEmail("");
                setPassword("");
                navigate("/");
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(error);
                setError(true);
                // ..
            });
    };

    return (
        <div className="login">
            <form onSubmit={handleLogin}>
                <input
                    value={email ?? ""}
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email"
                />
                <input
                    value={password ?? ""}
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="password"
                ></input>
                <button type="submit">Save</button>
                {error ? <p>Wrong Email or Password</p> : null}
            </form>
        </div>
    );
};

export default Login;
