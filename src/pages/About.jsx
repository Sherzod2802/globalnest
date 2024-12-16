import React from "react";

function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">About Our Company</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
        <p className="mb-4">
          Founded with a vision to create innovative mobile solutions, our
          company has been at the forefront of mobile app development.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p>
          To deliver cutting-edge mobile applications that enhance user
          experiences and solve complex problems through technology.
        </p>
      </section>
    </div>
  );
}

export default About;
