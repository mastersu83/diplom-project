import React from "react";
import { setErrorText } from "../redux/actions/authAction";
import { useDispatch } from "react-redux";

const Alert = ({ errorText }) => {
  const dispatch = useDispatch();
  const [needLogin, setNeedLogin] = React.useState(false);

  React.useEffect(() => {
    if (errorText.length) {
      setNeedLogin(true);
      setTimeout(() => {
        setNeedLogin(false);
        setTimeout(() => {
          dispatch(setErrorText(""));
        }, 300);
      }, 2000);
    }
  }, [errorText]);
  return (
    <div className={`alert ${needLogin ? "alert__open" : ""}`}>
      <span>{errorText}</span>
    </div>
  );
};

export default Alert;
