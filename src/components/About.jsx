import { useState } from "react";

function About(){
    return(
        <div className="bg-gray-50 text-gray-800">
            {/* {Hero Section} */}
            <section className="bg-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold mb-4">About Us</h1>
                    <p className="text-lg max-w-2xl max-auto">
                        We are a team dedicated to building meaningful experience and delivering great value.
                    </p>
                </div>
            </section>

            {/* {Who we are and what we do} */}

            <section className="py-16">
                <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div >
                        <img 
                        src=""
                         alt="Our team"
                         className="rounded-lg shadow-lg w-full object-cover" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
                        <p className="mb-6">
                            Founded in 2025 we are trying to grow in a dynamic company that values inovation , collaberation and exellence.
                        </p>
                        <h2 className="text-3xl font-bold mb-4">What We Do</h2>
                        <ul className="list-disc list-inside space-y-2">
                            <li>Custom web and mobile applications</li>
                            <li>User-centred design and UX research</li>
                            <li>End-to-end project delivery</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* {Vision and mission} */}

            <section className="bg-gray-100 py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-12">Our vision & mission</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-lg shadow">
                            <div className="text-5xl mb-4 text-blue-500">Some goal emote*</div>
                             <h3 className="text-2xl font-semibold mb-2">Vision</h3>
                             <p>
                                To be the most trusted partner for digital transformation and innovation.
                             </p>
                        </div>
                         <div className="bg-white p-8 rounded-lg shadow">
                            <div className="text-5xl mb-4 text-blue-500">Some mission emote*</div>
                             <h3 className="text-2xl font-semibold mb-2">Vision</h3>
                             <p>
                                To deliver exceptional solutions that empower our clients and create lasting impact.
                             </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* {Call to action} */}

            <section className="bg-blue-600 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">Join us on our jurney</h2>
                    <p className="mb-6">
                        Whether you are a partner, client, or team member, we would love to hear from you.
                    </p>
                    <a href="{contact}"
                       className="inline-block bg-white text-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition"
                    >
                        Contact Us
                    </a>
                </div>
            </section>


        </div>
    );
}

export default About