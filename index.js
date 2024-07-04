document.getElementById("homebtn").addEventListener("click", () => {
  document.getElementById("intro").innerHTML = `
   <section class="intro1" id="intro">
        <div>
          <p class="date">June 10 2024</p>
          <h4 class="heading">My Journey as a frontend developer</h4>
          <p class="description">
            I am a Frontend Developer who started learning Web Development in
            August 2023.
          </p>
        </div>
      </section>
  `;
});

document.getElementById("aboutbtn").addEventListener("click", () => {
  document.getElementById("intro").innerHTML = `
    <div class="content-container">
      <p class="date">June 10 2024</p>
      <h4 class="heading">My Journey as a Frontend Developer</h4>
      <p class="description">
        As a Frontend Developer, I began my journey in web development
in August 2023 after completing the CS50T course from Harvard
University. Through platforms like Scrimba and the CS50 Discord
community, I've honed my skills in React.js, JavaScript, APIs,
Bootstrap, Git, HTML, CSS, Firebase Authentication, and Cloud
Firestore. With each project, my passion for web development
grows, and I aspire to transition into a FullStack Developer. I
believe continuous learning is key to success in this dynamic
field.
 
      
      </p>
      <h5 class="skills-heading">Technical Skills:</h5>
      <ul class="skills-list">
        <li>React.js</li> 
        <li>API</li>
        <li>React-Router</li>
        <li>Git</li>
        <li>GitHub</li>
        <li>Firebase Authentication</li>
        <li>Cloud Firestore</li>
      </ul>
      <h5 class="contact-heading">Contact:</h5>
      <ul class="contact-list">
        <li>Email: <a href="mailto:ahmadsiddiquej3@gmail.com">ahmadsiddiquej3@gmail.com</a></li>
        <li>GitHub: <a href="https://github.com/Appile1" target="_blank">https://github.com/Appile1</a></li>
        <li>Portfolio: <a href="https://m-ahmad-siddique.netlify.app" target="_blank">https://m-ahmad-siddique.netlify.app</a></li>
        <li>Twitter: <a href="https://twitter.com/_Ahmad_Siddique" target="_blank">https://twitter.com/_Ahmad_Siddique</a></li>
      </ul>
    </div>`;
});
