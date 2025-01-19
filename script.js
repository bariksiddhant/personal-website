document.addEventListener("DOMContentLoaded", function() {
    // Get elements for the heart popup, modal, and close button
    const heartPopup = document.getElementById("heart-popup");
    const modal = document.getElementById("photoModal");
    const closeModal = document.getElementById("closeModal");

    // Ensure the heart icon is clickable
    heartPopup.addEventListener("click", () => {
        console.log("Heart clicked!"); // This should log when you click the heart
        modal.style.display = "block";  // Display the modal when the heart is clicked
    });

    // Close the modal when the "X" button is clicked
    closeModal.addEventListener("click", () => {
        console.log("Close button clicked!"); // Log for debugging
        modal.style.display = "none";  // Hide the modal when the "X" button is clicked
    });

    // Close the modal if the user clicks outside of the modal image
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            console.log("Clicked outside the modal!"); // Log for debugging
            modal.style.display = "none";  // Hide the modal if clicked outside the image
        }
    });
});
