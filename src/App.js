import { Route, Routes } from "react-router-dom";
import Header from "./containers/Header";
import NotFound from "./pages/404.js/404";
import BlogPost from "./pages/BlogPost/BlogPost";
import BlogPosts from "./pages/BlogPosts/BlogPosts";
import Home from "./pages/Home/Home";
import Job from "./pages/Job/Job";
import Jobs from "./pages/Jobs/Jobs";
import About from "./pages/About";
import Contact from "./pages/Contact/index";
import { Provider } from "react-redux";
import store from "./redux/reducer";
import Footer from "./containers/footer";

function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="jobs" element={<Jobs />} />

          <Route path="job" element={<Job />} />

          <Route path="blog-posts" element={<BlogPosts />} />

          <Route path="blog-post" element={<BlogPost />} />

          <Route path="about" element={<About />} />

          <Route path="contact" element={<Contact />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Provider>
    </>
  );
}

export default App;
