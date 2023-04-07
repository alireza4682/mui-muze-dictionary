import Form from "./components/form.component";
import CardContainer from "./components/cardContainer.component";
import Mode from "./components/mode.component";

function App() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "",
        }}
      >
        <Form />
        <CardContainer />
        <Mode />
      </div>
    </div>
  );
}

export default App;
