/*document.addEventListener("DOMContentLoaded", function() {
    const filterButtons = document.querySelectorAll(".btn button");
    const filterableCards = document.querySelectorAll(".filterable_Cards .card");

    const filterCards = (category) => {
        filterableCards.forEach(card => {
            const cardCategory = card.dataset.name;
            const parentCol = card.closest('.col-sm-4');
            
            if (category === 'all' || category === cardCategory) {
                parentCol.classList.remove("hide");
            } else {
                parentCol.classList.add("hide");
            }
        });
    };

    filterButtons.forEach(button => {
        button.addEventListener("click", function() {
            const category = this.dataset.name;
            filterCards(category);
            document.querySelector(".active").classList.remove("active");
            this.classList.add("active");
        });
    });
});*/



document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.buttons button');
    const cards = document.querySelectorAll('.card');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const name = button.getAttribute('data-name');
            cards.forEach(card => {
                const cardName = card.getAttribute('data-name');
                if (name === 'All' || name === cardName) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});

const buttons = document.querySelectorAll('.btn1 button');

// Function to handle button click
function handleClick(event) {
  // Remove 'active' class from all buttons
  buttons.forEach(button => button.classList.remove('active2'));
  
  // Add 'active' class to the clicked button
  event.target.classList.add('active2');

  // Get the data-name attribute value of the clicked button
  const filter = event.target.getAttribute('data-name');
  
  // Example action: You can perform filtering or other actions based on 'filter' value
  console.log(`Filtering by: ${filter}`);
  // Here you can add your code to filter content based on the filter value
}

// Attach click event listeners to each button
buttons.forEach(button => {
  button.addEventListener('click', handleClick);
});




function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to add 'reveal' class to elements in viewport
function revealElements() {
    const elements = document.querySelectorAll('.myworks');
    elements.forEach(element => {
        if (isInViewport(element)) {
            element.classList.add('reveal');
        }
    });
}

// Initial check when page loads
revealElements();

// Event listener for scroll events
document.addEventListener('scroll', revealElements);
