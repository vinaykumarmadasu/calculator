import React, { useState } from "react";

function Calculator() {
    const [input, setInput] = useState(""); // Stores the current input string
    const [result, setResult] = useState(""); // Stores the result after evaluation

    const handleButtonClick = (value) => {
        setInput(input + value);
        setResult(""); // Clear result when a new button is clicked
    };

    const handleEvaluate = () => {
        try {
            const evalResult = eval(input);

            if (input === "") {
                setResult("Error");
            } else if (evalResult === Infinity) {
                setResult("Infinity");
            } else if (isNaN(evalResult)) {
                setResult("NaN");
            } else {
                // Set result only without clearing input
                setResult(evalResult.toString());
            }
        } catch (error) {
            setResult("Error");
        }
    };

    const handleClear = () => {
        setInput("");
        setResult("");
    };

    return (
        <div className="calculator" style={{ width: "200px", margin: "auto", textAlign: "center" }}>
            <h1 style={{  whiteSpace: "nowrap"}}>React Calculator</h1>
            <input
                type="text"
                value={input}
                readOnly
                placeholder="Enter expression"
            />
            <div
                className="result"
                style={{
                    marginBottom: "15px",
                    padding: "10px",
                    fontSize: "1.2rem",
                    minHeight: "30px",
                    borderRadius: "5px"
                }}
            >
                {result}
            </div>
            <div className="buttons" style={{ display: "grid", gap: "10px", gridTemplateColumns: "repeat(4, 1fr)" }}>
                <button onClick={() => handleButtonClick("7")} style={{ padding: "15px" }}>7</button>
                <button onClick={() => handleButtonClick("8")} style={{ padding: "15px" }}>8</button>
                <button onClick={() => handleButtonClick("9")} style={{ padding: "15px" }}>9</button>
                <button onClick={() => handleButtonClick("+")} style={{ padding: "15px" }}>+</button>
                <button onClick={() => handleButtonClick("4")} style={{ padding: "15px" }}>4</button>
                <button onClick={() => handleButtonClick("5")} style={{ padding: "15px" }}>5</button>
                <button onClick={() => handleButtonClick("6")} style={{ padding: "15px" }}>6</button>
                <button onClick={() => handleButtonClick("-")} style={{ padding: "15px" }}>-</button>
                <button onClick={() => handleButtonClick("1")} style={{ padding: "15px" }}>1</button>
                <button onClick={() => handleButtonClick("2")} style={{ padding: "15px" }}>2</button>
                <button onClick={() => handleButtonClick("3")} style={{ padding: "15px" }}>3</button>
                <button onClick={() => handleButtonClick("*")} style={{ padding: "15px" }}>*</button>
                <button onClick={handleClear} style={{ padding: "15px" }}>C</button>
                <button onClick={() => handleButtonClick("0")} style={{ padding: "15px" }}>0</button>
                <button onClick={handleEvaluate} style={{ padding: "15px" }}>=</button>
                <button onClick={() => handleButtonClick("/")} style={{ padding: "15px" }}>/</button>
            </div>
        </div>
    );
}

export default Calculator;
