import React from 'react';
import './WelcomePage.css'; // Импортиране на стиловия файл

function WelcomePage() {
    return (
        <section className="welcome-page">
            <header id="box">
                <div id="navigation">
                    <h1 className="home">
                        <a href="#">Top Recipes</a>
                    </h1>
                    <nav>
                        <div id="guest">
                            <a href="/login">Login</a>
                            <a href="/register">Register</a>
                        </div>
                        <div id="user">
                            <a href="/create-recipe">Create Recipe</a>
                            <a href="/logout">Logout</a>
                        </div>
                        <a href="/recipes">All Recipes</a>
                    </nav>
                </div>
            </header>
            <main>
                <h2>Welcome to the World of Recipes!</h2>
                <p>Discover new recipes, share your creations, and explore the culinary delights of others.</p>
                <div className="actions">
                    <button className="btn btn-primary" onClick={() => window.location.href = '/login'}>Login</button>
                    <button className="btn btn-secondary" onClick={() => window.location.href = '/register'}>Register</button>
                    <button className="btn btn-success" onClick={() => window.location.href = '/recipes'}>Browse Recipes</button>
                </div>
            </main>
        </section>
    );
}

export default WelcomePage;
