"use client";

import { useState } from "react";

export default function NewAirplanesPage() {
  const [formData, setFormData] = useState({
    title: "",
    manufacturer: "",
    aircraftModel: "",
    engineType: "",
    year: "",
    price: "",
    hoursFlown: "",
    description: "",
    images: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange =(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true)

    try{
      const token=localStorage.getItem("token");

      const response=await fetch("http://localhost:5000/api/airplanes", {
        method:"POST",
        headers:{
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body:JSON.stringify({
          ...FormData,
          year:parseInt(formData.year),
          price:parseFloat(formData.price),
          hoursFlown:parseInt(formData.hoursFlown),
          images:formData.images.split(",").map((img) => img.trim()),
        }),
        });

        if (!response.ok) throw new Error("Failed to create airplane");
      

    }
    catch(err){
      console.error("Error creating airplane:", err);
      setError("Failed to create airplane. Please try again.");
    }
    finally {
      setLoading(false);
    }
  }

  return(
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">📝 List a New Airplane</h1>
      {success && <p className="text-green-600 mb-4">{success}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        {[
          ["title", "Title"],
          ["manufacturer", "Manufacturer"],
          ["aircraftModel", "Aircraft Model"],
          ["engineType", "Engine Type"],
          ["year", "Year (e.g., 2020)"],
          ["price", "Price (USD)"],
          ["hoursFlown", "Hours Flown"],
        ].map(([name, label]) => (
          <div key={name}>
            <label className="block font-semibold">{label}</label>
            <input
              required
              type="text"
              name={name}
              value={(formData as any)[name]}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
        ))}

        <div>
          <label className="block font-semibold">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block font-semibold">Image URLs (comma separated)</label>
          <input
            type="text"
            name="images"
            value={formData.images}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="https://img1.jpg, https://img2.jpg"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit Airplane"}
        </button>
      </form>
    </main>
  )


}
