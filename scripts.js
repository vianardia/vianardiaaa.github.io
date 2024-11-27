function nextPage(pageNum, answerId) {
    const answerElement = document.getElementById(answerId);
    if (!answerElement) {
        console.error(`Element with ID ${answerId} not found.`);
        return; // Stop execution if the element is not found
    }
    
    const answer = answerElement.value;
    if (!answer) {
        alert('Jawab pertanyaannya dulu yaa sayang!');
        return;
    }

    const currentPage = document.getElementById(`page${pageNum}`);
    const nextPage = document.getElementById(`page${pageNum + 1}`);
    if (currentPage) {
        currentPage.classList.remove("active");
    }
    if (nextPage) {
        nextPage.classList.add("active");
    }
    showNotification();
}

function showNotification() {
    const notification = document.getElementById("notification");
    notification.classList.add("show");
    setTimeout(() => {
        notification.classList.remove("show");
    }, 2000); // Faster duration
}

function replay() {
    for (let i = 1; i <= 5; i++) {
        document.getElementById(`page${i}`).classList.remove("active");
    }
    document.getElementById("page1").classList.add("active");
}

function animateInput() {
    const input = document.getElementById("answer1");
    if (input && input.value.length > 0) {
        input.classList.add("input-animate");
    }
}

function showBirthdayMessage() {
    for (let i = 1; i <= 5; i++) {
        document.getElementById(`page${i}`).classList.remove("active");
    }
    const lastPage = document.getElementById("page6");
    lastPage.classList.add("active");

    // Show the final notification immediately
    const notification = document.getElementById("notification");
    notification.classList.add("show");
    setTimeout(() => {
        notification.classList.remove("show");
    }, 2000); // Faster duration

    // Show messages with animation
    const messages = document.querySelectorAll(".message");
    messages.forEach((message, index) => {
        setTimeout(() => {
            message.classList.add("show");
        }, index * 500); // Animation interval
    });
}

window.addEventListener("load", () => {
    document.getElementById("page1").classList.add("active");
});
