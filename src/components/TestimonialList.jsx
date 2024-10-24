import React, { useEffect, useState } from "react";

import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { TestimonialCard } from "./TestimonialCard";
import "./TestimonialList.css"

const sample = {
    img: "https://randomuser.me/api/portraits/men/20.jpg",
    name: "John Doe",
    message: "This is a hard-coded sample",
    relation: "test",
}

export const TestimonialList = () => {
    const [testimonials, setTestimonials] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    }, []);

    const handleDelete = async (id) => {
    };

    if (loading) {
        return  (
            <div style={{ padding: "10vh", margin: "0 auto" }}>
                <h1 style = {{margin: "10vh" }} className="list-container">See what others have to say about me...</h1>

                <TestimonialCard testimonial={sample}/>
            </div>
        ); 
    }

    return (
        <div style={{ padding: "10vh", margin: "0 auto" }}>
            <h1 style = {{margin: "10vh" }} className="list-container">See what others have to say about me...</h1>

            <div className="testimonial-grid">
                {testimonials.map((testimonial, index) => (
                    <TestimonialCard key={index} testimonial={testimonial} onDelete={() => handleDelete(testimonial.id)} />
                ))}
            </div>
        </div>
    );
};
