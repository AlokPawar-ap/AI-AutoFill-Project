import { useState } from "react";

function App() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    college: ""
  });

  return (
    <div style={{padding:"30px"}}>

      <h1>AI AutoFill Form</h1>

      <input
        placeholder="Full Name"
        value={formData.name}
      />

      <br /><br />

      <input
        placeholder="Email"
        value={formData.email}
      />

      <br /><br />

      <input
        placeholder="Phone"
        value={formData.phone}
      />

      <br /><br />

      <input
        placeholder="Address"
        value={formData.address}
      />

      <br /><br />

      <input
        placeholder="College"
        value={formData.college}
      />

      <br /><br />

      <button>
        Auto Fill
      </button>

    </div>
  );
}

export default App;