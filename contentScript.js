// Check if the URL contains 'youtube' in its hostname
if (window.location.hostname.includes('youtube')) {
  // Find the element with the ID 'secondary'
  const secondaryElement = document.getElementById('secondary');

  // If the element exists, set its display style to 'none'
  if (secondaryElement) {
    secondaryElement.style.display = 'none';
  }
}
