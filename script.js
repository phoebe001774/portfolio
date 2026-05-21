<script>
const form = document.querySelector("form");

form.addEventListener("submit", async function(e) {
  e.preventDefault();

  const data = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value
  };

  const response = await fetch("https://formspree.io/f/xvzykgkw", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  if (response.ok) {
    alert("Message sent successfully!");
    form.reset();
  } else {
    alert("Failed to send message.");
  }
});
</script>
