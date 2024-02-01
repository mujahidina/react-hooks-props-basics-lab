import React from "react";

function About({bio, github, linkedin }) {
  
  function Links({github, linkedin}){
    return (
       <>
        <h3>Links</h3>
        <a href={github}>{github}</a>
        <a href={linkedin}>{linkedin}</a>
       </>
    );
   }
  return (
    <div id="about">
      <h2>About Me</h2>
      {bio && <p>{bio}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={github} linkedin={linkedin} />
    </div>
    
  );
 
}

export default About;
