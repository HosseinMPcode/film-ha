import "./../styles/App.css";
import Header from "./Header";
import Movies from "./Movies";
import Actors from "./Actors";
import Footer from "./Footer";
import ActressInfo from "./ActressInfo";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import MovieDetails from "./MovieDetails";
const movies = [
  {
    details:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است. طراحان گرافیک از این متن به عنوان عنصری برای پر کردن فضا استفاده می‌کنند. این متن استاندارد صنعت چاپ و حروف‌چینی است که از زمان‌های قدیم تا به امروز مورد استفاده قرار گرفته است. هدف از استفاده لورم ایپسوم ایجاد یک متن ساده و بدون معنی است تا تمرکز بیننده ",
    name: "venom",
    img: "./images/venom.jpg",
  },
  {
    details:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است. طراحان گرافیک از این متن به عنوان عنصری برای پر کردن فضا استفاده می‌کنند. این متن استاندارد صنعت چاپ و حروف‌چینی است که از زمان‌های قدیم تا به امروز مورد استفاده قرار گرفته است. هدف از استفاده لورم ایپسوم ایجاد یک متن ساده و بدون معنی است تا تمرکز بیننده ",
    name: "spiderMan",
    img: "./images/spiderMan.jpg",
  },
  {
    details:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است. طراحان گرافیک از این متن به عنوان عنصری برای پر کردن فضا استفاده می‌کنند. این متن استاندارد صنعت چاپ و حروف‌چینی است که از زمان‌های قدیم تا به امروز مورد استفاده قرار گرفته است. هدف از استفاده لورم ایپسوم ایجاد یک متن ساده و بدون معنی است تا تمرکز بیننده ",
    name: "blade runner",
    img: "./images/bladeRunner.jpg",
  },
  {
    details:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است. طراحان گرافیک از این متن به عنوان عنصری برای پر کردن فضا استفاده می‌کنند. این متن استاندارد صنعت چاپ و حروف‌چینی است که از زمان‌های قدیم تا به امروز مورد استفاده قرار گرفته است. هدف از استفاده لورم ایپسوم ایجاد یک متن ساده و بدون معنی است تا تمرکز بیننده ",
    name: "sponge Bob",
    img: "./images/spongeBob.jpg",
  },
  {
    details:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است. طراحان گرافیک از این متن به عنوان عنصری برای پر کردن فضا استفاده می‌کنند. این متن استاندارد صنعت چاپ و حروف‌چینی است که از زمان‌های قدیم تا به امروز مورد استفاده قرار گرفته است. هدف از استفاده لورم ایپسوم ایجاد یک متن ساده و بدون معنی است تا تمرکز بیننده ",
    name: "johny English",
    img: "./images/johnyEnglish.jpg",
  },
];
const actors = [
  { name: "actor1", img: "./images/actor1.jpg", rName: "بازیگر شماره ۱" },
  { name: "actor2", img: "./images/actor2.jpg", rName: "بازیگر شماره ۲" },
  { name: "actor5", img: "./images/actor5.jpg", rName: "بازیگر شماره ۳" },
  { name: "actor6", img: "./images/actor6.jpg", rName: "بازیگر شماره ۴" },
];
function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Movies movies={movies} />
                <Actors actors={actors} />
              </>
            }
          />
          {/* <Route
            path={actorName}
            element={<ActressInfo actor={selectedActor} />}
          /> */}
          <Route
            path="/actor1"
            element={
              <ActressInfo
                actor={actors.find((actor) => actor.name === "actor1")}
              />
            }
          />
          <Route
            path="/actor2"
            element={
              <ActressInfo
                actor={actors.find((actor) => actor.name === "actor2")}
              />
            }
          />
          <Route
            path="/actor5"
            element={
              <ActressInfo
                actor={actors.find((actor) => actor.name === "actor5")}
              />
            }
          />
          <Route
            path="/actor6"
            element={
              <ActressInfo
                actor={actors.find((actor) => actor.name === "actor6")}
              />
            }
          />

          <Route
            path="/venom"
            element={
              <MovieDetails
                nextMovie={movies.find((movie) => movie.name === "spiderMan")}
                actors={actors}
                movie={movies.find((movie) => movie.name === "venom")}
              />
            }
          />
          <Route
            path="/spiderMan"
            element={
              <MovieDetails
                nextMovie={movies.find((movie) => movie.name === "venom")}
                actors={actors}
                movie={movies.find((movie) => movie.name === "spiderMan")}
              />
            }
          />
          <Route
            path="/blade runner"
            element={
              <MovieDetails
                nextMovie={movies.find((movie) => movie.name === "sponge Bob")}
                actors={actors}
                movie={movies.find((movie) => movie.name === "blade runner")}
              />
            }
          />
          <Route
            path="/sponge Bob"
            element={
              <MovieDetails
                nextMovie={movies.find(
                  (movie) => movie.name === "blade runner"
                )}
                actors={actors}
                movie={movies.find((movie) => movie.name === "sponge Bob")}
              />
            }
          />
          <Route
            path="/johny English"
            element={
              <MovieDetails
                nextMovie={movies.find((movie) => movie.name === "sponge Bob")}
                actors={actors}
                movie={movies.find((movie) => movie.name === "johny English")}
              />
            }
          />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
