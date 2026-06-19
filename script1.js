document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.querySelector('.navbar');
    const modal = document.getElementById("myModal");
    var modalToggle = document.querySelector('.mail-icon');
    var closeIcon = document.querySelector('.close-icon');
    

    window.addEventListener('scroll', function() {
        navbar.classList.toggle('scrolled', window.scrollY > 30);
    });

    // Function to toggle the modal
    if (modalToggle) {
        modalToggle.addEventListener('click', toggleModal);
    }
    if (closeIcon) {
        closeIcon.addEventListener('click', closeModal);
    }
});

// Function to toggle modal visibility
function toggleModal(event) {
    event.preventDefault(); // Prevent default link behavior
    var modal = document.getElementById('myModal');
    modal.style.display = modal.style.display === 'none' || modal.style.display === '' ? 'block' : 'none';
}

// Function to close the modal
function closeModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'none';
}

    // Smooth transition when clicking on small images
    var ProductImg = document.getElementById("ProductImg");
    var SmallImg = document.getElementsByClassName("small-img");

    // Function to handle click on small images
    function handleSmallImageClick(clickedSmallImg) {
        var tempSrc = ProductImg.src; // Store the src of the big image
        ProductImg.style.opacity = "0";
        setTimeout(function() {
            // Swap src between the big image and the clicked small image
            ProductImg.src = clickedSmallImg.src;
            clickedSmallImg.src = tempSrc;
            // Add a class to the clicked small image to make it big
            clickedSmallImg.classList.add("big-img");
            // Remove the "big-img" class from all other small images
            for (let j = 0; j < SmallImg.length; j++) {
                if (SmallImg[j] !== clickedSmallImg) {
                    SmallImg[j].classList.remove("big-img");
                }
            }
            ProductImg.style.opacity = "1";
        }, 300);
    }

    // Event listener for clicking on small images
    for (let i = 0; i < SmallImg.length; i++) {
        SmallImg[i].addEventListener('click', function() {
            handleSmallImageClick(this);
        });
    }

    function toggleExpand(event) {
        event.preventDefault(); // Prevent default anchor behavior

        // Check if the image is already expanded
        if (!ProductImg.classList.contains('expanded')) {
            // If the image is not expanded, toggle the expansion state
            const overlay = document.createElement('div');
            overlay.classList.add('overlay');
            ProductImg.classList.toggle('expanded');
            if (ProductImg.classList.contains('expanded')) {
                document.body.appendChild(overlay);
                document.body.classList.add('zoom-open');
                addNextArrow();
                addPreviousArrow();
                closeIcon.style.display = 'block'; // Show close icon only when expanded
            } else {
                document.querySelector('.overlay').remove();
                removeNextArrow();
                removePreviousArrow();
                closeIcon.style.display = 'none'; // Hide close icon when not expanded
            }
        } else {
            // Zoom in on the image instead of toggling expansion state
            ProductImg.classList.toggle('zoomed');

            // Adjust the transformation to center around the cursor position
            if (ProductImg.classList.contains('zoomed')) {
                const rect = ProductImg.getBoundingClientRect();
                const offsetX = event.clientX - rect.left;
                const offsetY = event.clientY - rect.top;
                const scale = 1.5; // Adjust the scale factor as needed
                const translateX = offsetX * (1 - scale);
                const translateY = offsetY * (1 - scale);
                ProductImg.style.transformOrigin = `${offsetX}px ${offsetY}px`;
                ProductImg.style.transform = `scale(${scale}) translate(${translateX}px, ${translateY}px)`;
            } else {
                ProductImg.style.transformOrigin = ''; // Reset transform origin
                ProductImg.style.transform = ''; // Reset transform
            }
        }
    }
    

    // Function to add next arrow icon
    function addNextArrow() {
        const arrow = document.createElement('div');
        arrow.classList.add('next-arrow');
        arrow.innerHTML = '<i class="fa fa-chevron-right"></i>';
        document.body.appendChild(arrow);

        // Event listener for clicking on the next arrow
        arrow.addEventListener('click', moveToNextPicture);
    }

    // Function to remove next arrow icon
    function removeNextArrow() {
        const arrow = document.querySelector('.next-arrow');
        if (arrow) {
            arrow.remove();
        }
    }
    let originalBigImageSrc = '';
    // Initialize current image index
let currentIndex = 0;

// Function to move to the next picture
function moveToNextPicture() {
    currentIndex = (currentIndex + 1) % SmallImg.length; // Calculate the index of the next image
    swapImages(currentIndex); // Swap images
}
function moveToPreviousPicture() {
        currentIndex = (currentIndex - 1 + SmallImg.length) % SmallImg.length; // Calculate the index of the previous image
        swapImages(currentIndex); // Swap images
    }
    // Function to swap images based on index
function swapImages(index) {
    var tempSrc = ProductImg.src; // Store the src of the big image
    ProductImg.style.opacity = "0";
    setTimeout(function() {
        // Swap src between the big image and the clicked small image
        ProductImg.src = SmallImg[index].src;
        SmallImg[index].src = tempSrc;
        // Add a class to the clicked small image to make it big
        SmallImg[index].classList.add("big-img");
        // Remove the "big-img" class from all other small images
        for (let j = 0; j < SmallImg.length; j++) {
            if (j !== index) {
                SmallImg[j].classList.remove("big-img");
            }
        }
        ProductImg.style.opacity = "1";
    }, 300);
}
    // Function to add previous arrow icon
    function addPreviousArrow() {
        const arrow = document.createElement('div');
        arrow.classList.add('previous-arrow');
        arrow.innerHTML = '<i class="fa fa-chevron-left"></i>';
        document.body.appendChild(arrow);

        // Event listener for clicking on the previous arrow
        arrow.addEventListener('click', moveToPreviousPicture);
    }

    // Function to remove previous arrow icon
    function removePreviousArrow() {
        const arrow = document.querySelector('.previous-arrow');
        if (arrow) {
            arrow.remove();
        }
    }

    
    

    // Event listener for toggling expanded mode
    ProductImg.addEventListener('click', toggleExpand);

    closeIcon.addEventListener('click', function() {
        const overlay = document.querySelector('.overlay');
        if (overlay) overlay.remove(); // Remove overlay if exists
        
        // Reset transformation and scale
        ProductImg.style.transform = '';
        ProductImg.style.transformOrigin = '';
        
        // Set width and height to their original values
        ProductImg.style.width = ''; // This will remove the inline style, allowing the CSS to take effect
        ProductImg.style.height = ''; // This will remove the inline style, allowing the CSS to take effect
        
        document.body.classList.remove('zoom-open');
        ProductImg.classList.remove('expanded','zoomed');
        removeNextArrow();
        removePreviousArrow();
        closeIcon.style.display = 'none'; // Hide close icon again
    });
    var toggleTriggers = document.querySelectorAll(".toggle-trigger");

    // Loop through each toggle trigger
    toggleTriggers.forEach(function(trigger) {
        // Add click event listener to each toggle trigger
        trigger.addEventListener("click", function() {
            // Find the associated expandable content for this trigger
            var content = this.nextElementSibling;

            // Toggle expand/collapse for the associated content
            if (content.classList.contains("hidden")) {
                content.classList.remove("hidden");
                content.classList.add("visible");
                this.classList.add("expanded"); // Add expanded class to the h3
            } else {
                content.classList.remove("visible");
                content.classList.add("hidden");
                this.classList.remove("expanded"); // Remove expanded class from the h3
            }
        });
    });
  // Optional colour-picker (only present on some product pages).
  // Guarded so pages without it don't throw a null-reference error.
  const blackRadio = document.getElementById('black-bar');
  const whiteRadio = document.getElementById('white-bar');
  const blackOptions = document.getElementById('black-options');
  const whiteOptions = document.getElementById('white-options');

  if (blackRadio && whiteRadio && blackOptions && whiteOptions) {
    blackRadio.addEventListener('change', () => {
      blackOptions.classList.add('active');
      whiteOptions.classList.remove('active');
    });

    whiteRadio.addEventListener('change', () => {
      whiteOptions.classList.add('active');
      blackOptions.classList.remove('active');
    });
  }

/* ===== Validacija forme sa porukama na srpskom (Formspree modal) ===== */
document.addEventListener("DOMContentLoaded", function () {
    var rules = {
        name:    { re: /^[A-Za-zČčĆćŽžŠšĐđ][A-Za-zČčĆćŽžŠšĐđ \-']{1,39}$/, msg: "Unesite ispravno ime (samo slova, najmanje 2 karaktera)." },
        surname: { re: /^[A-Za-zČčĆćŽžŠšĐđ][A-Za-zČčĆćŽžŠšĐđ \-']{1,39}$/, msg: "Unesite ispravno prezime (samo slova, najmanje 2 karaktera)." },
        email:   { re: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, msg: "Unesite ispravnu email adresu (primer: ime@primer.com)." },
        phone:   { re: /^(\+381\s?|0)6\d([\s\/-]?\d){6,8}$/, msg: "Unesite ispravan broj telefona (primer: 065 1234567)." }
    };

    function check(field) {
        var val = field.value.trim();
        if (val === "") {
            field.setCustomValidity(field.required ? "Ovo polje je obavezno." : "");
            return;
        }
        var rule = rules[field.name];
        field.setCustomValidity(rule && !rule.re.test(val) ? rule.msg : "");
    }

    document.querySelectorAll('form[action*="formspree"]').forEach(function (form) {
        form.querySelectorAll('input[name], textarea[name]').forEach(function (field) {
            field.addEventListener("input", function () { check(field); });
            field.addEventListener("invalid", function () { check(field); });
        });
    });
});



/* ===== Colour swatches: click changes the main product image ===== */
document.addEventListener("DOMContentLoaded", function () {
    var swatches = document.querySelectorAll('.swatch');
    var mainImg = document.getElementById('ProductImg');
    if (!swatches.length || !mainImg) return;
    swatches.forEach(function (sw) {
        sw.addEventListener('click', function () {
            var src = sw.getAttribute('data-img');
            if (!src) return;
            mainImg.style.transition = 'opacity .2s ease';
            mainImg.style.opacity = '0';
            setTimeout(function () {
                mainImg.src = src;
                mainImg.style.opacity = '1';
            }, 180);
            swatches.forEach(function (s) { s.classList.remove('is-active'); });
            sw.classList.add('is-active');
        });
    });
});
