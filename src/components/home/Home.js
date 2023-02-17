import Search from "./Search";
import Quicksearch from "./Quicksearch";
import "./home.css";

const Home = () => {
  return (
    <div className="home_page">
      <div className="home_upper">
        <div className="content_wrapper">
          <h1>Zomato</h1>
          <p>Discover the best food & drinks in Delhi NCR</p>
          <Search />
        </div>
      </div>
      <div className="home_down">
        <Quicksearch />
      </div>
    </div>
  );
};

export default Home;
