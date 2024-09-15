import { useState } from "react";
// import { useHistory } from "react-router-dom";
// import axios from "axios";

const Register = () => {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [mobino, setMobileno] = useState("");
  const [desi, setDesig] = useState("");
  const [gen, setGend] = useState("");
  const [course, setCourse] = useState("");
  // const [password, setPassword] = useState("");
  
  return (
    <div>
      <h2>Register</h2>
      <label>
        <b>Name</b>
      </label>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setname(e.target.value)}
      />
      <label>
        <b>Email</b>
      </label>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label>
        <b>Mobile No</b>
      </label>
      <input
        type="number"
        placeholder="Mobileno"
        value={mobino}
        onChange={(e) => setMobileno(e.target.value)}
      />
      <label htmlFor="designation">Designation:</label>
      <select
        id="designation"
        value={desi}
        onChange={(e) => setDesig(e.target.value)}
      >
        <option value="" disabled>
          Select designation
        </option>
        <option value="HR">HR</option>
        <option value="Manager">Manager</option>
        <option value="Sales">Sales</option>
      </select>
      <label htmlFor="gender">Gender:</label>
      <select id="gender" value={gen} onChange={(e) => setGend(e.target.value)}>
        <option value="" disabled>
          Select gender
        </option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>
      <label htmlFor="course">Course:</label>
      <select id="course" value={course} onChange={(e) => setCourse(e.target.value)}>
        <option value="" disabled>
          Select course
        </option>
        <option value="MCA">MCA</option>
        <option value="BCA">BCA</option>
        <option value="BSC">BSC</option>
      </select>
      <button onClick={""}>Register</button>
      {/* {error && <p>{error}</p>} */}
      <p>
        Already have an account? <a href="/">Login here</a>
      </p>
    </div>
  );
};

export default Register;

      //   const [error, setError] = useState("");
      //   const history = useHistory();
    
      //   const handleRegister = async () => {
      //     try {
      //       const response = await axios.post("/api/register", {
      //         userName,
      //         password,
      //       });
      //       if (response.data.success) {
      //         history.push("/");
      //       } else {
      //         setError(response.data.message);
      //       }
      //     } catch (err) {
      //       setError("Server error. Please try again later.");
      //     }
      //   };