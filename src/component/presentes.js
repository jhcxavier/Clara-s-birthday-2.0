import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

const Presentes = (props) => {
  const { store } = useContext(Context);
  const [password, setPassword] = useState("");
  const [validation, setValidation] = useState(false);
  //   let next = "";

  return (
    <div className="card-group justify-content-around">
      {store.flipImages.map((e, index) => {
        return (
          <div key={index} className="flip-box">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <img
                  src={e.image}
                  alt="Clara"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <div className="flip-box-back">
                <h3 className="mt-2">{e.title}</h3>
                <p className="m-2">{e.message}</p>
                <p>
                  <strong>Senha:</strong>
                </p>
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <br />

                {/* <i className="fas fa-arrow-right ml-2" /> */}
                <button
                  type="button"
                  className="btn btn-outline-primary btn-sm mt-2"
                  onClick={() => {
                    console.log("props", props);
                    console.log("history", props.history);
                    if (password === "test") {
                      props.history.push("/primeiro");
                      // props.history.push("/");
                    } else {
                      setValidation(!validation);
                    }
                  }}
                >
                  Entrar
                </button>
                {validation && <p>Senha Incorreta</p>}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default withRouter(Presentes);

Presentes.propTypes = {
  history: PropTypes.object,
};
