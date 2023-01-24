const form = document.getElementById('job-form');
const jobList = document.getElementById('job-list');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const title = document.getElementById("job-title").value;
  const description = document.getElementById("job-description").value;

  // Send a POST request to the server to save the job listing
  // Once the listing is saved, call the addJobListing function
  addJobListing(title, description);
});
function addJobListing(title, description) {
  const newJob = document.createElement('li');
  newJob.innerHTML = `
    <h3>${title}</h3>
    <p>${description}</p>
  `;
  jobList.appendChild(newJob);
}


const lightModeBtn = document.getElementById('light-mode-btn');
const darkModeBtn = document.getElementById('dark-mode-btn');

lightModeBtn.addEventListener('click', function() {
  document.body.classList.remove('dark-mode');
});

darkModeBtn.addEventListener('click', function() {
  document.body.classList
});