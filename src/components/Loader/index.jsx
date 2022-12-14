import React, { useContext } from "react";
import { CircleLoader } from "react-spinners";
import { Theme } from "../../contexts/Theme";

const Loader = () => {

    const { themeColor } = useContext(Theme);

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100vw",
                height: "calc(100vh - 50px)",
            }}
        >
            <CircleLoader color={themeColor === "dark" ? "white" : "black"} size= {30}/>
        </div>
    );
};

export default Loader;