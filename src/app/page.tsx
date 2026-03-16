import React from 'react';

const HomePage = () => {
    return (
        <div className="grid grid-cols-12">
            <header className="col-span-12">
                <h1>Welcome to My Homepage</h1>
            </header>
            <aside className="col-span-3">
                <nav>
                    <ul>
                        <li>Profile</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </aside>
            <main className="col-span-9">
                <section>
                    <h2>Research Interest</h2>
                    <p>Description of research interests.</p>
                </section>
                <section>
                    <h2>News</h2>
                    <p>Latest updates and news.</p>
                </section>
                <section>
                    <h2>Publications</h2>
                    <p>List of publications.</p>
                </section>
                <section>
                    <h2>Internship</h2>
                    <p>Details of internships undertaken.</p>
                </section>
                <section>
                    <h2>Awards</h2>
                    <p>List of awards received.</p>
                </section>
            </main>
        </div>
    );
};

export default HomePage;