import React, { useState } from 'react';
import '../styles/WelcomePage.css';

function WelcomePage() {
    const [isGuest, setIsGuest] = useState(false); // Състояние за отметката guest


    const handleGuestToggle = () => {
        setIsGuest((prev) => !prev); // Превключваме състоянието
    };

    return (

        <section className="login-form">
            <header>
                <h2>Top Recipes from The Kitchen</h2>
                <h1 className="form-title">Login Form</h1>
            </header>
            <div className="tabs">
                <button className="active-tab">Login</button>
                <button>Signup</button>
            </div>
            <form>
                <label htmlFor="email">Email Address</label>
                <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    required
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    required
                />
                <div className="guest-checkbox">
                    <input
                        type="checkbox"
                        id="guest"
                        checked={isGuest}
                        onChange={handleGuestToggle}
                    />
                    <label htmlFor="guest">Login as Guest</label>
                </div>
                <a href="/forgot-password" className="forgot-link">
                    Forgot password?
                </a>
                <button type="submit" className="login-button">
                    {isGuest ? 'Continue as Guest' : 'Login'}
                </button>
            </form>
            <footer>
                <p>
                    Not a member? <a href="/register">Signup now</a>
                </p>
            </footer>
        </section>
    );
}

export default WelcomePage;
