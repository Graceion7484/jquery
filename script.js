"use strict";

/*  JavaScript 7th Edition
    Chapter 12
    Chapter case

    Bonsai Expressions FAQ 
    Author: Grace Georgalos
    Date:   

    Filename: js12.js
*/

"use strict";

/*  JavaScript 7th Edition
    Chapter 12
    Chapter case

    Bonsai Expressions FAQ 
    Author: Grace Georgalos
    Date:   

    Filename: js12.js
*/

// Run once the page is loaded and ready
$( () => {

    // Animate the h1 heading
    $("section > h1").css({
        fontSize: 0,
        opacity: 0
    })
    .animate({
        fontSize: "2.3em",
        opacity: 1
    }, 600);

    // Reveal the questions when the page opens
    $("dl#faq")
    .hide()
    .effect("clip", {
        mode: "show",
        direction: "horizontal"
    }, 600);
   
    // Add click events to each question in the FAQ
    $("dl#faq dt").on("click", e => {

        // Toggle the answer visibility
        let question = $(e.target);
        let answer = $(question.next());
        
        if (answer.is(":visible")) {
            answer.slideUp(600);
        } else {
            answer.slideDown(600);
        }

        // Optionally toggle a class for styling
        question.toggleClass("active");
    });
});











