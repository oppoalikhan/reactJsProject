import React from "react";

var Date = new Date();
var Year = Date.getFullYear();
function Footer(){
    return <p>@Copyright {Year}</p>;
}

export default Footer;