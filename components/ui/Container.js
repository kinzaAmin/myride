import React from "react";

const Container = ( {children ,style="lg:px-10 md:px:5"})=> {
    return (
      <>
        <div className={`container mx-auto ${style}`}>{children}</div>
      </>
    );
};
export default Container;