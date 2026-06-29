document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.querySelector('.navbar');
    const modal = document.getElementById("myModal");
    const toggleTriggers = document.querySelectorAll(".toggle-trigger");
    let scrollToTopBtn = document.getElementById("scrollToTopBtn");
    
    

    window.addEventListener('scroll', function() {
        navbar.classList.toggle('scrolled', window.scrollY > 30);
    });
    
    function toggleModal(event) {
        event.preventDefault();
        modal.style.display = modal.style.display === "block" ? "none" : "block";
    }

    document.querySelectorAll('.mail-a, .close, .dugme').forEach(function(element) {
        element.addEventListener('click', toggleModal);
    });
    
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    





    
    if (scrollToTopBtn) {
        scrollToTopBtn.onclick = function() {
            scrollToTop();
        };
    }

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const prdbtn = document.querySelector(".prdbtn");
    if (prdbtn) {
        prdbtn.addEventListener("click", function() {
            window.location.href = "products";
        });
    }

    document.querySelectorAll(".btn11, .btn12, .btn13").forEach(function(btn) {
        if (btn) {
            btn.addEventListener("click", function() {
                const productId = btn.classList.contains('btn11') ? 'product1' :
                                    btn.classList.contains('btn12') ? 'product9' :
                                    'product3';
                window.location.href = productId;
            });
        }
    }); 
    function slugify(text) {
        return text
          .toString()
          .toLowerCase()
          .replace(/\s+/g, '-')           // Replace spaces with -
          .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
          .replace(/\-\-+/g, '-')         // Replace multiple - with single -
          .replace(/^-+/, '')             // Trim - from start of text
          .replace(/-+$/, '');            // Trim - from end of text
      }
  
      document.addEventListener('DOMContentLoaded', (event) => {
        const titleInput = document.querySelector('#title');
        const slugInput = document.querySelector('#slug');
        
        if (titleInput && slugInput) {
          titleInput.addEventListener('input', function() {
            slugInput.value = slugify(this.value);
          });
        }
      });
      
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

/* ===== Validacija formi sa porukama na srpskom =====
   Primenjuje se na sve Formspree forme (modal + kontakt). */
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

   

/* ===== Card colour swatches: click switches the card image (no nav) ===== */
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.card-swatches').forEach(function (group) {
        var card = group.closest('.product-card1');
        var img = card ? card.querySelector('.ph img') : null;
        if (!img) return;
        group.querySelectorAll('.card-swatch').forEach(function (sw) {
            sw.addEventListener('click', function (e) {
                e.preventDefault();
                e.stopPropagation();
                var src = sw.getAttribute('data-img');
                if (!src) return;
                img.style.transition = 'opacity .2s ease';
                img.style.opacity = '0';
                setTimeout(function () { img.src = src; img.style.opacity = '1'; }, 150);
                group.querySelectorAll('.card-swatch').forEach(function (s) { s.classList.remove('is-active'); });
                sw.classList.add('is-active');
            });
        });
    });
});
