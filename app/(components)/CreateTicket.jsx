"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const CreateTicket = () => {
  const router = useRouter();
  const startingFormData = {
    title: "test",
    description: "test",
    priority: 1,
    status: "in-progress",
    category: "Hardware Problem",
    progress: 0,
  };
  const handleChange = (e) => {
    let property = e.target.name;
    let value = e.target.value;
    setFormData((prevState) => {
      let newState = { ...prevState, [property]: value };
      return newState;
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:3000/api/Tickets", {
      method: "POST",
      body: JSON.stringify({ formData }),
      "content-type": "application/json",
    });
    console.log(JSON.stringify({ formData }));
    console.log(res.status, res.ok);
    if (!res.ok) {
      throw new Error("Could not submit ticket");
    } else {
      //router.refresh();
      router.push("/");
      router.refresh();
    }
  };
  const [formData, setFormData] = useState(startingFormData);
  return (
    <div className="flex justify-center bg-red-400">
      <form
        className="flex flex-col gap-3 w-1/2"
        method="post"
        onSubmit={handleSubmit}
      >
        <h4>Create Ticket</h4>
        <label>Title</label>
        <input
          type="text"
          required={true}
          onChange={handleChange}
          value={formData.title}
          name="title"
        />
        <label>Description</label>
        <textarea
          required={true}
          onChange={handleChange}
          value={formData.description}
          name="description"
        />
        <label>Category</label>

        <select
          value={formData.category}
          onChange={handleChange}
          name="category"
        >
          <option value="Hardware Problem">Hardware Problem</option>
          <option value="Software Problem">Software Problem</option>
          <option value="Miscellaneous">Miscellaneous</option>
        </select>

        <label>Priority</label>
        <div className="flex space-x-1">
          <input
            type="radio"
            value="1"
            checked={formData.priority == "1"}
            onChange={handleChange}
            name="priority"
          ></input>
          <label>1</label>

          <input
            type="radio"
            value="2"
            checked={formData.priority == "2"}
            onChange={handleChange}
            name="priority"
          ></input>
          <label>2</label>
          <input
            type="radio"
            value="3"
            onChange={handleChange}
            checked={formData.priority == "3"}
            name="priority"
          ></input>
          <label>3</label>
          <input
            type="radio"
            value="4"
            checked={formData.priority == "4"}
            onChange={handleChange}
            name="priority"
          ></input>
          <label>4</label>

          <input
            type="radio"
            value="5"
            checked={formData.priority == "5"}
            onChange={handleChange}
            name="priority"
          ></input>
          <label>5</label>
        </div>
        <label>Progress</label>
        <input
          onChange={handleChange}
          type="range"
          min="0"
          max="100"
          value={formData.progress}
        />
        <label>Status</label>
        <select onChange={handleChange} value={formData.status}>
          <option value="Not Started">Not Started</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
        <div className="flex justify-start">
          <button type="submit" className="bg-slate-400 w-full">
            Create Ticket
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTicket;
