//Views
import QuizPage from "./views/QuizPage";

//UI
import Navbar from "./Layouts/NavBar";
import Footer from "./Layouts/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <div id="rangeSpacerTop"></div>
      <QuizPage />
      <div id="rangeSpacerBot"></div>
      <Footer />
    </div>
  );
}

export default App;
