import React, { useContext } from "react";
import LoadingContext from "../context/Loading";

const Loading: React.FC = () => {
  const { isLoading } = useContext<any>(LoadingContext);
  return (
    <>
      {isLoading && (
        <div className="loading_banner">
          <div className="loader">Loading...</div>
        </div>
      )}
    </>
  );
};

export default Loading;
