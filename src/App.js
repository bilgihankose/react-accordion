import questions from "./data";
import SingleQuestion from "./Components/SingleQuestion";

function App() {
  return (
    <main>
      <div className="container">
        <h3>Questions and Answers About Login</h3>
        <section className="info">
          {questions.map((question) => {
            return <SingleQuestion key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
