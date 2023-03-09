const toggleBtn = document.getElementById('toggle-btn');
// console.log(toggleBtn);

toggleBtn.addEventListener("click", function() {
    var body = document.querySelector('body');
    var headerText = document.querySelector('.main-catch-heading');
    var spanText = document.querySelector('span');
    var toolsHeader = document.querySelector('.tools-heading-text');
    var anchorTags = document.querySelector('.anchor1');
    var anchorTagsTwo = document.querySelector('.anchor2');
    var toggleIcon = document.querySelector('.toggle-icon');
    var contactLinksDom = document.getElementById('contacts');
    var toolsLogo = document.querySelector('.tools-logo-cont');
    var toggleText = document.querySelector('.toggle-btn-text');


    if (body.classList.contains('light')) {
        body.classList.remove('light');
        body.classList.add('dark');
        headerText.classList.add('main-catch-heading-dark');
        spanText.classList.add('span-dark');
        toolsHeader.classList.add('tools-heading-text-dark');
        anchorTags.classList.add('anchor-dark');
        anchorTagsTwo.classList.add('anchor-dark');
        toggleIcon.classList.add('toggle-btn-light');
        // toggleText.innerHTML = `<p class="toggle-btn-text">Light Mode</p>`
        contactLinksDom.innerHTML = `
        <div id="contacts" class="contact-links">
            <a href="https://github.com/aluyapeter">
                <i class="fa-brands fa-github icon-dark"></i>
            </a>
            <a href="https://twitter.com/perofrontend">
                <i class="fa-brands fa-twitter icon-dark"></i>
            </a>
            <a href="#">
                <i class="fa-brands fa-linkedin icon-dark"></i>
            </a>
            <a href="#">
                <i class="fa-solid fa-envelope icon-dark"></i>
            </a>
        </div>`
        toolsLogo.innerHTML = `
        <div class="tools-logo-cont">
                <div class="tools-logo-item">
                    <i class="fa-brands fa-sass icon-dark"></i><p>Sass</p>
                </div>
                <div class="tools-logo-item">
                    <i class="fa-brands fa-react icon-dark"></i><p>React</p>
                </div>
                <div class="tools-logo-item">
                    <i class="fa-brands fa-js icon-dark"></i><p>Javascript</p>
                </div>
                <div class="tools-logo-item">
                    <i class="fa-brands fa-bootstrap icon-dark"></i><p>Bootstrap</p>
                </div>    
            </div>`
    } else {
        body.classList.remove('dark');
        body.classList.add('light');
        headerText.classList.remove('main-catch-heading-dark');
        spanText.classList.remove('span-dark');
        toolsHeader.classList.remove('tools-heading-text-dark');
        toggleIcon.classList.remove('toggle-btn-light');
        anchorTags.classList.remove('anchor-dark');
        anchorTagsTwo.classList.remove('anchor-dark');
        // toggleText.innerHTML = `<p style="transition: all ease-in-out 0.8s;" class="toggle-btn-text">Dark Mode</p>`
        contactLinksDom.innerHTML = `
        <div id="contacts" class="contact-links">
            <a href="#">
                <i class="fa-brands fa-github icon"></i>
            </a>
            <a href="#">
                <i class="fa-brands fa-twitter icon"></i>
            </a>
            <a href="#">
                <i class="fa-brands fa-linkedin icon"></i>
            </a>
            <a href="#">
                <i class="fa-solid fa-envelope icon"></i>
            </a>
        </div>`;
        toolsLogo.innerHTML = `
        <div class="tools-logo-cont">
                <div class="tools-logo-item">
                    <i class="fa-brands fa-sass icon"></i><p>Sass</p>
                </div>
                <div class="tools-logo-item">
                    <i class="fa-brands fa-react icon"></i><p>React</p>
                </div>
                <div class="tools-logo-item">
                    <i class="fa-brands fa-js icon"></i><p>Javascript</p>
                </div>
                <div class="tools-logo-item">
                    <i class="fa-brands fa-bootstrap icon"></i><p>Bootstrap</p>
                </div>    
            </div>`
    }
})