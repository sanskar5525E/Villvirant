// Example: Custom event listener for button clicks
const learnMoreButton = document.getElementById('learn-more');

learnMoreButton.addEventListener('click', () => {
  // Animate the button
  learnMoreButton.style.transform = 'scale(1.2)';
  learnMoreButton.style.transition = 'transform 0.3s ease';

  setTimeout(() => {
    learnMoreButton.style.transform = 'scale(1)';
  }, 500);

  // Scroll to the contact section
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});

// Example: Fetch data from an API
async function fetchData() {
    try {
      const response = await fetch('https://api.example.com/data');
      const data = await response.json();
      console.log(data);
      // Use the fetched data to update your website
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  fetchData();