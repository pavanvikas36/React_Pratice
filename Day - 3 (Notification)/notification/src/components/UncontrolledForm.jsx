import { useRef } from "react";

export default function UncontrolledForm() {
  const usernameRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`Username: ${usernameRef.current.value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Uncontrolled Form</h3>

      <input type="text" placeholder="Username" ref={usernameRef} /><br /><br />
      <input type="password" placeholder="Password" ref={passwordRef} /><br /><br />

      <button>Submit</button>
    </form>
  );
}
