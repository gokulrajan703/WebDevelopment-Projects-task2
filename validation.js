document.getElementById('contactForm').addEventListener('submit', function (event) {
    // Prevent form submission
    event.preventDefault();
  
    // Clear previous error messages
    document.getElementById('nameError').textContent = '';
    document.getElementById('ageError').textContent = '';
    document.getElementById('genderError').textContent = '';
    document.getElementById('phoneError').textContent = '';
    document.getElementById('qualificationError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('messageError').textContent = '';
  
    // Form validation logic
    let isValid = true;
  
    // Name validation
    const name = document.getElementById('name').value.trim();
    if (name === '') {
      document.getElementById('nameError').textContent = 'Name is required.';
      isValid = false;
    } else if (name.length < 3) {
      document.getElementById('nameError').textContent = 'Name must be at least 3 characters.';
      isValid = false;
    }
  
    // Age validation
    const age = document.getElementById('age').value.trim();
    if (age === '') {
      document.getElementById('ageError').textContent = 'Age is required.';
      isValid = false;
    } else if (age <= 0) {
      document.getElementById('ageError').textContent = 'Enter a valid age.';
      isValid = false;
    }
  
    // Gender validation
    const gender = document.getElementById('gender').value;
    if (gender === '') {
      document.getElementById('genderError').textContent = 'Gender is required.';
      isValid = false;
    }
  
    // Phone number validation
    const phone = document.getElementById('phoneno').value.trim();
    const phonePattern = /^[0-9]{10}$/;
    if (phone === '') {
      document.getElementById('phoneError').textContent = 'Phone number is required.';
      isValid = false;
    } else if (!phonePattern.test(phone)) {
      document.getElementById('phoneError').textContent = 'Enter a valid 10-digit phone number.';
      isValid = false;
    }
  
    // Qualification validation
    const qualification = document.getElementById('qualification').value.trim();
    if (qualification === '') {
      document.getElementById('qualificationError').textContent = 'Qualification is required.';
      isValid = false;
    }
  
    // Email validation
    const email = document.getElementById('email').value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
      document.getElementById('emailError').textContent = 'Email is required.';
      isValid = false;
    } else if (!emailPattern.test(email)) {
      document.getElementById('emailError').textContent = 'Enter a valid email address.';
      isValid = false;
    }
  
    // Message validation
    const message = document.getElementById('message').value.trim();
    if (message === '') {
      document.getElementById('messageError').textContent = 'Message is required.';
      isValid = false;
    } else if (message.length < 10) {
      document.getElementById('messageError').textContent = 'Message must be at least 10 characters.';
      isValid = false;
    }
  
    // If all fields are valid, submit the form (here, log the values for demo purposes)
    if (isValid) {
      alert('Form submitted successfully!');
      console.log({ name, age, gender, phone, qualification, email, message });
    }
  });
  