import React, {useEffect, useState} from "react";
import {Button, Header, Image, Modal} from "semantic-ui-react";
// import Radium from "radium";
import "./modalm.css";

const Modalm = ({
  name,
  header,
  website,
  image,
  deschead,
  descten,
  desctext,
  courses,
  achievements,
  extraCurriculum,
  about,
  resp,
  certificate,
}) => {
  const mediaMatch = window.matchMedia("(min-width: 768px)");
  const [matches, setMatches] = useState(mediaMatch.matches);

  useEffect(() => {
    const handler = (e) => setMatches({matches: e.matches});
    window.matchMedia("(min-width: 768px)").addListener(handler);
    return () => mediaMatch.removeListener(handler);
  });

  //  const componentDidMount = e =>{
  //     const handler = (e) => setMatches({matches:e.matches});
  //     window.matchMedia("(min-width: 768px)").addListener(handler);
  //  }

  var styles = {
    button: (matches) => ({
      backgroundColor: "#e6801e",
      border: "solid 1px #e6801e",
      color: "white",
      // fontWeight: "700",
      width: "max-content",
      padding: matches.matches ? "13px 22px" : "10px 13px",
      // marginRight: "4vw",
      textTransform: "uppercase",
      borderRdius: "6px",
      textAlign: "center",
      textDecoration: "none",
      // display: "block",
      marginTop: matches.matches ? "20px" : "8px",
      fontSize: "12px",
      cursor: "pointer",
      fontFamily: "Montserrat",
      textShadow: "rgba(0, 0, 0, 0.2) 0 3px 3px",
    }),
  };

  function changeBackground(e) {
    e.target.style.backgroundColor = "white";
    e.target.style.color = "black";
    e.target.style.transition = "ease-in 0.3s";
  }
  function defbg(e) {
    e.target.style.backgroundColor = "#e6801e";
    e.target.style.color = "white";
    e.target.style.transition = "ease-in 0.3s";
  }

  return (
    console.log(matches),
    (
      <Modal
        trigger={
          <Button
            className="butt"
            style={styles.button(matches)}
            onMouseOver={changeBackground}
            onMouseOut={defbg}>
            {name}
          </Button>
        }>
        <Modal.Header>
          {header && website ? (
            <div>
              {header}
              <a href={website} target="_blank" rel="noopener noreferrer">
                <span class="iconify" data-icon="eva:external-link-fill"></span>
              </a>
            </div>
          ) : (
            header
          )}
        </Modal.Header>
        <Modal.Content image scrolling>
          {image ? <Image wrapped size="medium" src={image} /> : null}

          <Modal.Description>
            {deschead ? <Header>{deschead}</Header> : null}

            {descten ? <em style={{color: "#e6801e"}}>{descten}</em> : null}

            {desctext ? <p style={{color: "#e6801e"}}>{desctext}</p> : null}

            {courses ? (
              <div>
                <h3>Main core subjects:</h3>
                <p>
                  {courses.map((course) => {
                    return (
                      <div>
                        <li
                          style={{
                            listStyleType: "circle",
                          }}>
                          {course.courseName}
                        </li>
                        {/* {course.grade ? (
                          <em
                            style={{
                              textAlign: "left",
                              paddingLeft: "20px",
                              fontWeight: "lighter",
                              color: "#e6801e",
                            }}>
                            Grade: {course.grade}
                          </em>
                        ) : null}
                        {course.score ? (
                          <em
                            style={{
                              textAlign: "left",
                              paddingLeft: "20px",
                              fontWeight: "lighter",
                              color: "#e6801e",
                            }}>
                            Score: {course.score}
                          </em>
                        ) : null} */}
                      </div>
                    );
                  })}
                </p>
                <br />
              </div>
            ) : null}
            {achievements ? (
              <div>
                <h3>Achievements:</h3>
                <p>
                  {achievements.map((achievement) => {
                    return (
                      <li style={{listStyleType: "none"}}>{achievement}</li>
                    );
                  })}
                </p>
                <br />
              </div>
            ) : null}
            {extraCurriculum ? (
              <>
                <div>
                  <h3>Extra Curriculum:</h3>
                  {extraCurriculum.map((pos) => {
                    return (
                      <Modalm
                        name={pos.name}
                        header={pos.header}
                        image={pos.illus}
                        about={pos.about}
                        resp={pos.resp}
                      />
                    );
                  })}
                </div>
                <br />
              </>
            ) : null}
            {about ? <p>{about}</p> : null}
            {resp ? (
              <div>
                {resp.map((r) => {
                  return (
                    <div>
                      <Header>{r.head}</Header>
                      <em style={{color: "#e6801e"}}>{r.tenure}</em>
                      {r.lis.map((rl) => {
                        return (
                          <li
                            style={{
                              listStyleType: "circle",
                            }}>
                            {rl}
                          </li>
                        );
                      })}
                      <br />
                    </div>
                  );
                })}
              </div>
            ) : null}
            {certificate ? (
              <div>
                <iframe
                  src={certificate}
                  frameborder="0"
                  width="800px"
                  height="600px"></iframe>
              </div>
            ) : null}
          </Modal.Description>
        </Modal.Content>
      </Modal>
    )
  );
};

export default Modalm;
