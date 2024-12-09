import React, { useEffect, useRef, useState } from "react";
import "../Styles/Switch.css";

function Switch() {
  const [checked, setChecked] = useState(false);

  const ref = useRef(null);

  function handleChange() {
    console.log(ref.current.checked);
    setChecked(ref.current.checked);
    if (ref.current.checked) {
      document.body.classList.remove("is-light-mode");
      document.body.classList.add("is-dark-mode");
    } else {
      document.body.classList.remove("id-dark-mode");
      document.body.classList.add("is-light-mode");
    }
  }

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setChecked(true);
    }
  }, []);
  return (
    <div className="dark-mode">
      <p className="dark-mode-title">Dark Mode</p>
      <input type="checkbox" className="checkbox" onChange={handleChange} />
      <label className="switch" htmlFor="checkbox"></label>
    </div>
  );
}

export default Switch;
