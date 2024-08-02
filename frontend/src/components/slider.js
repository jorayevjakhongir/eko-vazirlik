import React from "react";

export default function Slider() {
  return (
    <section className="slider-area">
      <div className="slide-controls owl-carousel">
        <div className="single-slide overlay-bg-2">
          <div className="slide-thumb shape-1">
            <div className="slide-content">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-10 col-sm-12">
                    <div className="slide-content-area">
                      <div className="single-slide-content text-center">
                        <div className="content-text">
                          <h1>
                            Adventure <span></span> In Wild Places
                          </h1>
                          <h2>
                            It's time for new <strong>Escapes, Thrills</strong>{" "}
                            <span></span> and <strong>Experiences</strong>
                          </h2>
                        </div>
                        <div className="find-adventure-form text-center">
                          <form action="#">
                            <select
                              className="form-select"
                              aria-label="Default select example"
                            >
                              <option selected>Select Adventure</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                            <select
                              className="form-select"
                              aria-label="Default select example"
                            >
                              <option selected>Select Destination</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                            <input type="date" name="date" />
                            <input
                              className="btn btn-theme"
                              type="submit"
                              value="Find Your Adventure"
                            />
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="single-slide overlay-bg-2">
          <div className="slide-thumb shape-1">
            <img src="img/slider/slide-2.jpg" alt="" />
            <div className="slide-content">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-10 col-sm-12">
                    <div className="slide-content-area">
                      <div className="single-slide-content text-center">
                        <div className="content-text">
                          <h1>
                            Adventure <span></span> In Wild Places
                          </h1>
                          <h2>
                            It's time for new <strong>Escapes, Thrills</strong>{" "}
                            <span></span> and <strong>Experiences</strong>
                          </h2>
                        </div>
                        <div className="find-adventure-form text-center">
                          <form action="#">
                            <select
                              className="form-select"
                              aria-label="Default select example"
                            >
                              <option selected>Select Adventure</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                            <select
                              className="form-select"
                              aria-label="Default select example"
                            >
                              <option selected>Select Destination</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                            <input type="date" name="date" />
                            <input
                              className="btn btn-theme"
                              type="submit"
                              value="Find Your Adventure"
                            />
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="single-slide overlay-bg-2">
          <div className="slide-thumb shape-1">
            <img src="img/slider/slide-3.jpg" alt="" />
            <div className="slide-content">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-10 col-sm-12">
                    <div className="slide-content-area">
                      <div className="single-slide-content text-center">
                        <div className="content-text">
                          <h1>
                            Adventure <span></span> In Wild Places
                          </h1>
                          <h2>
                            It's time for new <strong>Escapes, Thrills</strong>{" "}
                            <span></span> and <strong>Experiences</strong>
                          </h2>
                        </div>
                        <div className="find-adventure-form text-center">
                          <form action="#">
                            <select
                              className="form-select"
                              aria-label="Default select example"
                            >
                              <option selected>Select Adventure</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                            <select
                              className="form-select"
                              aria-label="Default select example"
                            >
                              <option selected>Select Destination</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                            <input type="date" name="date" />
                            <input
                              className="btn btn-theme"
                              type="submit"
                              value="Find Your Adventure"
                            />
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
