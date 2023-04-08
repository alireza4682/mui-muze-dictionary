import Form from "./components/form.component";
import CardContainer from "./components/cardContainer.component";
import Mode from "./components/mode.component";

function App() {
  return (
    <div style={{}}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Mode />
        <Form />
        <CardContainer />
      </div>
    </div>
  );
}

export default App;
