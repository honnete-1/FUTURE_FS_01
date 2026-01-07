import './About.css';

export default function About() {
    return (
        <section className="section about-section" id="about">
            <div className="container">
                <h2 className="section-title">About Me<span className="dot">.</span></h2>

                <div className="about-intro">
                    <p className="about-slogan">My motto is simple: <strong>BCL</strong>.</p>
                </div>

                <div className="bcl-grid">
                    <div className="bcl-card" data-letter="B">
                        <h3>Build</h3>
                        <p>
                            I am a passionate builder. Basically, I am project driven and I strive to build solutions that enrich human lives.
                        </p>
                    </div>

                    <div className="bcl-card" data-letter="C">
                        <h3>Connect</h3>
                        <p>
                            I believe in a common saying: “no man is an island”. Therefore, I aim to network with people across various industries.
                        </p>
                    </div>

                    <div className="bcl-card" data-letter="L">
                        <h3>Learn</h3>
                        <p>
                            I am a curious explorer and lifelong learner who remains teachable. I enjoy learning new things on a daily basis. I love attending workshops, hackathons, and trainings to leverage my knowledge.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
