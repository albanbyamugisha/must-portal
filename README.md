cat > README.md << 'EOF'

# MUST Online Application Portal (Login and Create Account)

**Name:** Byamugisha Alban
**Registration number:** 2025/BSE/062/PS
**Programme:** Bachelor of Science in Software Engineering (BSE)
**Course unit:** Internet and Web Design
**Type of work:** Individual assignment

## About the project

This is my redesign of the two main screens of the Mbarara University of Science and Technology (MUST) online application portal: the Login screen and the Create Account screen. I followed how the real portal works, but I came up with my own design.

## What I followed from the MUST portal

- Login with an email address and a password.
- Create Account asks for a surname, other names, a phone number with a country code, and an email address.
- No password is typed at sign up, because the portal sends a temporary password.
- A helper for applicants who have no email address.
- The university name and crest.
- The four application steps: create an account, log in, fill in and submit the form, then pay the fee at the bank.
- The admissions email address from the official application guide.

## My own design ideas

- A split screen layout: a navy brand panel on the left and the form on the right.
- The application steps shown next to the forms so applicants know what comes next.
- A navy and amber colour scheme, with Poppins and Inter fonts.
- A show/hide button on the password field.
- Form checking with JavaScript and clear error messages under each field.
- A responsive layout that stacks into one column on phones.

## HTML5 practices used

- Semantic elements: header, nav, main, section, aside, footer.
- Meta tags: charset, viewport, description, author and Open Graph tags.
- Every image has alt text and width and height.
- Every input has a label linked with matching for and id.
- Descriptive link text, mailto link and a link that opens in a new tab.
- Ordered list for the application steps.

## Project structure

    must-portal/
    ├── index.html        (login screen)
    ├── signup.html       (create account screen)
    ├── css/style.css     (styles for both pages)
    ├── js/script.js      (form checking for both pages)
    ├── images/           (MUST crest)
    └── README.md

## How to run it

Download or clone the repository and open `index.html` in a web browser. No installation is needed.

## Note

This is a front end design only. There is no server behind the forms, so no accounts are really created.
EOF
