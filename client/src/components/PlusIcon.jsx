import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import "../styles.css";

export default function PlusIcon() {
    const [showDropDown, setShowDropDown] = useState(false);
  return (
    <div>
      <div className="icon-container">
        <AiOutlinePlus />
      </div>
    </div>
  );
}
