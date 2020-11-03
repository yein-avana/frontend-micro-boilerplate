import React from "react";

function App() {
  const [state, setState] = React.useState(0);

  React.useEffect(() => {
    console.log("object");
  }, []);

  return (
    <div className="App">
      Counter:
      <h1 style={{ fontSize: "3rem" }}>{state}</h1>
      <button onClick={() => setState((prev) => prev + 1)}>+</button>
    </div>
  );
}

export default App;
