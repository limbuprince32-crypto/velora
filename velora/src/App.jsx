import Navbar from "./components/Navbar";
import MovieContent from "./components/MovieContent";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { MoviesProvider } from "./context/MovieContext";

const App = () => {
  return (
    <MoviesProvider>
      <div className="min-h-screen text-white">
        <Navbar />
        <main>
          <MovieContent />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </MoviesProvider>
  );
};

export default App;
