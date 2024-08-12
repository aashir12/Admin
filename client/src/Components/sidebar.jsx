import React,{useState} from 'react'

const Sidebar = () => {
     const [col, setCol] = useState(true);
  return (
    <>
      <div className="coverlft ">
        <div className="logo">
          <img
            src="/images/logo.PNG"
            style={{
              width: "100%",
              borderBottom: "0.3px solid grey",
              paddingBottom: "10%",
              cursor: "pointer",
            }}
            onClick={() => {
              setCol(!col);
            }}
          />
        </div>
        <div
          className="lftCol"
          style={
            col === true
              ? { marginLeft: "0", transition: "0.5s" }
              : { marginLeft: "-250px", transition: "0.5s" }
          }
        >
          <div className="colTop">
            <h3 style={{ color: "rgb(250, 120, 47)" }}>
              <i
                className="fa-solid fa-database"
                style={{ paddingRight: "10%", paddingTop: "10%" }}
              ></i>
              My Projects
            </h3>
            <h3
              style={{
                borderBottom: "0.3px solid grey",
                paddingBottom: "10%",
              }}
            >
              <i
                className="fa-solid fa-table-cells-large"
                style={{ paddingRight: "10%", paddingTop: "10%" }}
              ></i>
              Sample Projects
            </h3>
            <h3>
              <i
                className="fa-brands fa-adn"
                style={{ paddingRight: "10%", paddingTop: "10%" }}
              ></i>
              Apps
            </h3>
            <h3>
              <i
                className="fa-solid fa-circle-play"
                style={{ paddingRight: "10%", paddingTop: "10%" }}
              ></i>
              Intro to Necleo
            </h3>
          </div>
          <div className="colBottom">
            <h3>
              <i
                className="fa-solid fa-circle-question"
                style={{ paddingRight: "10%", paddingTop: "10%" }}
              ></i>
              Help and Support
            </h3>
            <h3>
              <i
                className="fa-solid fa-comment-dots"
                style={{ paddingRight: "10%", paddingTop: "10%" }}
              ></i>
              Feedback
            </h3>
            <h3>
              <i
                className="fa-solid fa-circle-arrow-left"
                style={{ paddingRight: "10%", paddingTop: "10%" }}
                onClick={() => setCol(!col)}
              ></i>
              Collapse
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar