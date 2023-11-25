const faqs = document.querySelectorAll(".question");
const btns = document.querySelectorAll(".faq-button button");

faqs.forEach((faq, index) => {
  faq.addEventListener("click", function (e) {
    const answer = e.target.nextElementSibling;
    answer.classList.toggle("active");

    btns[index].classList.toggle("active"); // Toggle the active class for the corresponding button
  });
});
