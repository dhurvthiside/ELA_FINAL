import React from "react";

const TopLogo = () => {
  return (
    <div
      className="flex justify-center items-center h-40 w-screen"
      style={{
        backgroundColor: "#57443b",
        marginLeft: "calc(-50vw + 50%)",
        maxWidth: "100vw",
      }}
    >
      <img
        src="https://res.cloudinary.com/dsihyrpw7/image/upload/v1738422744/logo1_qpprpu.png"
        alt="Logo"
        className="h-40 w-auto"
      />
    </div>
  );
};

export default TopLogo;
