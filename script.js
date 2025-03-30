const contact = document.getElementById('contact');
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


function submitForm() {
  
  const name = document.querySelector('input[name="name"]');
  const email = document.querySelector('input[name="email"]');
  const message = document.querySelector('textarea[name="message"]');
  
 
  if (name.value.trim() === '' || email.value.trim() === '' || message.value.trim() === '') {
    alert('Please fill in all the fields before submitting.');
    return;
  }
  if (!validateEmail(email.value)) {
    alert('Please enter a valid email address.');
    return;
  }
  
  document.querySelector('.form-wrap').style.display = 'none';
  var thankYouMessage = document.createElement('div');
  thankYouMessage.classList.add('thank-you-message');
  thankYouMessage.innerHTML = '<h4>Thank you for contacting us! We will get in touch with you soon.</h4>';
  

  thankYouMessage.style.fontSize = '20px';
  thankYouMessage.style.backgroundColor = 'black';
  thankYouMessage.style.textAlign = 'center';
  thankYouMessage.style.padding = '10px';
  thankYouMessage.style.border = 'solid white 2px';
  thankYouMessage.style.borderRadius = '10px';
  thankYouMessage.style.color = 'white';
  
  // Append the thank you message to the body (or another container)
  contact.appendChild(thankYouMessage);
}

function validateEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return emailPattern.test(email);
}



function typeWriter() {
  const title = document.querySelector('#title'); 
  const text = title.textContent;  
  title.textContent = ''; 

  let i = 0;
  const speed = 200; 

  
  function writeCharacter() {
    if (i < text.length) {
      title.textContent += text.charAt(i); 
      i++;
      setTimeout(writeCharacter, speed); 
    }
  }

  writeCharacter(); 
}


window.onload = typeWriter;