function handleSubmit(event) {
    event.preventDefault();

    document.getElementById("msg").innerText =
        "Message sent successfully!";

    return false;
}
