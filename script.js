document.getElementById("bookingForm").addEventListener("submit", function(e){
  e.preventDefault();

  const type = document.getElementById("type").value;
  const name = document.getElementById("name").value;
  const date = document.getElementById("date").value;
  const message = document.getElementById("message").value;

  const text = `Booking Request:
Service: ${type}
Name: ${name}
Date: ${date}
Details: ${message}`;

  const phone = "211900000000"; // change this
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, "_blank");

  // Show confirmation message
  alert("Your booking has been prepared and sent to WhatsApp. Please tap Send in WhatsApp to confirm your booking.");

  // Optional: reset form
  document.getElementById("bookingForm").reset();
});
