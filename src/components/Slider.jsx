import React, { useEffect, useState } from "react";

const Slider = () => {
  const [slideURL, setslideURL] = useState("");

  useEffect(() => {
    setslideURL("https://bzgrup.com/img/sl1.jpg");
  }, []);

  return (
    <React.Fragment>
      <div className="slider">
        <div id="app">
          <div class="title">
            <div class="title-inner">
              <div class="cafe">
                <div class="cafe-inner">Title1</div>
              </div>
              <div class="mozart">
                <div class="mozart-inner">Title2 bla</div>
              </div>
            </div>
          </div>

          <div class="image">
            <img
              src="https://bzgrup.com/img/sl3.jpg"
              alt=""
            />
          </div>
        </div>

      </div>
    </React.Fragment>
  );
};

export default Slider;
