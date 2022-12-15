import { useState } from "react"

const KeyboardClipboard = () => {
  const [inputvalue, setInputvalue] = useState("");
  // console.log(inputvalue);

  const handleKeyDown = (e) => {
    e.target.value = e.target.value.toUpperCase()
    e.keyCode === 13 && alert('Entera basildi');
  }

  const handleAreaPaste = (e) => {
    e.preventDefault()
    e.target.value += e.clipboardData.getData("text").toLowerCase();
    e.target.style.border = '3px solid red';
    e.target.style.backgroundColor = 'lightgreen';
  }

  const handleAreaChange = (e) => {
    if(!e.target.value) {
      e.target.style.border = "1px solid black";
      e.target.style.backgroundColor = "coral"
    }
  }
  return (
    <div className="container text-center">
      <h2>CLIPBOARD EVENTS </h2>
      <input
      onKeyDown={handleKeyDown}
      onChange={(e) => setInputvalue(e.target.value)}
      value={inputvalue}
      type="text"
      />
      <p onCopy={() => alert("Kopyalandı")} className="text-start m-4">
        {inputvalue}
      </p>

      <textarea
        name="area"
        id="area"
        cols="30"
        rows="10"
        onPaste={handleAreaPaste}
        onChange={handleAreaChange}
      ></textarea>
    </div>
  )
}

export default KeyboardClipboard