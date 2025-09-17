import React, { useState } from "react";

interface formData {
  name: string;
  email: string;
}

const UseForm: React.FC = () => {
  const [formData, setFormData] = useState<formData>({ name: "", email: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "name") {
      setFormData({
        name: value,
        email: formData.email,
      });
    } else if (name === "email") {
      setFormData({
        name: formData.name,
        email: value,
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`ข้อมูลที่กรอก:\nชื่อ: ${formData.name}\nอีเมล: ${formData.email}`);
  };

  const handleClear = () => {
    setFormData({ name: "", email: "" });
  };
  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
      <h2>User Form Excercise</h2>
      <form onSubmit={handleSubmit}>        
        <div style={{ marginBottom: "10px" }}>
          <label>ชื่อ: </label>
          <input type="text"name="name"value={formData.name}onChange={handleChange}placeholder="กรอกชื่อ"style={{ width: "100%", padding: "8px" }}/>
        </div>

        
        <div style={{ marginBottom: "10px" }}>
          <label>อีเมล: </label>
          <input type="email"name="email"value={formData.email}onChange={handleChange}placeholder="กรอกอีเมล"style={{ width: "100%", padding: "8px" }}/>
        </div>

        <div
          style={{margin: "15px 0",background: "#f0f8ff",padding: "10px",borderRadius: "8px",
          }}
        >
          <p>
            <h3>ข้อมูลที่กรอก:</h3>
          </p>
          <p>ชื่อ: {formData.name || "กรอกข้อมูล"}</p>
          <p>อีเมล: {formData.email || "กรอกข้อมูล"}</p>
        </div>

        
        <button type="submit"style={{background: "green",color: "black",padding: "8px 15px",marginRight: "10px",border: "none",borderRadius: "5px",cursor: "pointer"}}>Submit</button>
        <button type="button" onClick={handleClear} style={{background: "red",color: "black",padding: "8px 15px",border: "none",borderRadius: "5px",cursor: "pointer"}}>Clear</button>
      </form>
    </div>
  );
};
export default UseForm;
