<h1 align="center"> NanFolio </h1>

## A Portfolio Template for Developers!

<h2 align="center">
  <img src="assets/devfolio.gif" alt="Devfolio" />
</h2>

My work heavily modifies and expands upon the original DevFolio template created by Anil Seervi. I have updated the layout, added a few sections and made a bunch of other changes.

## Updated Features

⚡️ Extended layout including Work Experience & Education sections\
⚡️ New buttons and modals\
⚡️ Well organized documentation\
⚡️ One Page Layout\
⚡️ Custom SCSS\
⚡️ Fully Responsive\
⚡️ Valid HTML5 & CSS3\

## Features

⚡️ Modern UI Design + Reveal Animations + Hover Effects\
⚡️ Well organized documentation\
⚡️ One Page Layout\
⚡️ Fully Responsive\
⚡️ Valid HTML5 & CSS3\
⚡️ Fast and SEO Optimized

To view a demo example, **[Click Here](https://devfolio.js.org)**\
To view a live example, **[Click Here](https://anilseervi.github.io/Portfolio/)**\
To view live example repo, **[Click Here](https://github.com/AnilSeervi/Portfolio/)**

## Getting Started 🚀

Here's a **Complete Guide** to walk you through the process of setting your own Portfolio Website with this minimal template on your local machine as well as hosting it on GitHub.

### Prerequisites 📋

You'll need [VSCode](https://code.visualstudio.com/) and [Git](https://git-scm.com/) installed on your computer.

You'll also need these two extensions [Live Preview](https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server) and [Live Sass Compiler](https://marketplace.visualstudio.com/items?itemName=glenn2223.live-sass) installed in your VSCode. You will be automatically promted to install these extensions once you open this project in VSCode.

---

## How To Use 🔧

In VSCode, Open the terminal(<kbd>Ctrl</kbd>+<kbd>\\</kbd> ) and clone the DevFolio Repo.

```bash
# Clone this repository
$ git clone https://github.com/AnilSeervi/DevFolio.git

# Go into the repository
$ cd DevFolio

# Remove current origin repository
$ git remote remove origin
```

And delete the [`.github`](./.github) folder as you don't need it.

Now Simply click on **Watch Sass** in the bottom status bar to watch all your `.scss` file chages and compile them to vanilla `.css`.
And also open `index.html`, right click inside the file and select _Show Preview_ to start a preview at `http://127.0.0.1:3000/`.

<h3 align="center">
OR
</h3>

Press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> or <kbd>F1</kbd> to Show Command Palette, Search for **Live Sass: Watch Sass** and turn it on. Also search for **Live Preview: Start Server** and turn it on. Doing this will watch all your Sass files for changes and will spin up a live server for you at `http://127.0.0.1:3000/`.

---

## Template Instructions

### Step 1 - STRUCTURE

Open [`index.html`](./index.html) and fill your information, there are 6 sections:

### Head Section

- Add a title to your Portfolio website within the `<title>` tag.
- Add some keywords and description to your Portfolio website as directed in the [`index.html`](./index.html) file.

```html
<!-- Title: add your Portfolio websites's title here -->
<title>[Your name here] | Developer</title>
<!-- Add some coding keywords below, Ex: (javascript, yourusername, etc) -->
<meta name="keywords" content="[username], [name], skill" />
<!-- Improve your SEO by adding a small descrption of you -->
<meta name="description" content="[Your name here] | Developer" />
```

- Remove google analytics tag before pushing it to GitHub.

### Hero Section

- On `.hero-title`, put your custom title.
- On `.hero-cta`, put your custom button cta.

```html
<!-- Hero Section -->
<div id="hero">
  <section class="container">
    <h1 class="hero-title">
      Hi, my name is <span class="text-color-main name">Your Name</span>
      <br />
      I'm the Unknown Developer.
    </h1>
    <p class="hero-cta">
      <a class="cta-btn cta-btn--hero" href="#about">Get in touch</a>
    </p>
  </section>
  <a href="#about" class="scroll-down-link" aria-label="scroll-down">
    <div class="scroll-down"></div>
  </a>
</div>
<!-- /END Hero Section -->
```

### About Section

- On `<img>` tag, fill the `src` attribute with your profile picture, your picture must be located inside [`assets/`](./assets) folder.
  - Recommended size for your profile image is (_450 x 450px_).
- On `<p>` tag with class-name `.about-wrapper__info-text`, include information about you, I recommend to use 2 paragraphs in order to work well and a maximum of 3 paragraphs.
- On last `<a>` tag, include your resume url on `href` attribute.

```html
<!-- About Section -->
<section id="about">
  <div class="container">
    <h2 class="section-title">About Me</h2>
    <div class="row about-wrapper">
      <div class="about-wrapper__image">
        <img class="img-fluid" src="./assets/profile.png" alt="Profile Image" />
      </div>
      <div class="about-wrapper__info">
        <p class="about-wrapper__info-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <p class="about-wrapper__info-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <span class="about-wrapper__cta">
          <a href="#" class="cta-btn cta-btn--resume">View Resume</a>
        </span>
      </div>
    </div>
  </div>
</section>
<!-- /END About Section -->
```

### Education Section

- On `<img>` tag, fill the `src` attribute with your profile picture, your picture must be located inside [`assets/`](./assets) folder.
  - Recommended size for your profile image is (_450 x 450px_).
- On `<p>` tag with class-name `.about-wrapper__info-text`, include information about you, I recommend to use 2 paragraphs in order to work well and a maximum of 3 paragraphs.
- On last `<a>` tag, include your resume url on `href` attribute.

```html
<!-- Education Section -->
<section id="education">
  <div class="container">
    <h2 class="section-title">Education</h2>
    <div class="row education-wrapper">
      <div class="education-wrapper__image">
        <img class="img-fluid" src="./assets/education.png" alt="Education Image" />
      </div>
      <div class="education-wrapper__info">
        <p class="education-wrapper__info-text">
          I'm currently pursuing a master's degree at Virginia Tech, focusing on Software Engineering, AI, and Human-Computer Interaction fields. My education journey is marked by a commitment to excellence and a passion for learning.
        </p>
      </div>
    </div>
  </div>
</section>
<!-- /END Education Section -->
```

### Projects Section

- Each project lives inside `row` class.
- On `<h3>` tag with class-name `.project-wrapper__text-title`, include your project title.
- On `<p>` tag with `loremp ipsum...` text, include your project information.
- On first `<a>` tag, put your project url on `href` attribute.
- On second `<a>` tag, put your project repository url on `href` attribute.

---

- Inside `<div>` tag with class-name `.project-wrapper__image`, put your project image url on the `src` of the `<img>` and put again your project url on `href` attribute of `<a>` tag.
- Recommended size for project image (_1366 x 767px_), your project image must live in [`assets/`](./assets) folder. You can remove the default images and replace them with yours.

```html
<!--Projects Section-->
    <section id="projects">
      <div class="container">
        <div class="project-wrapper">
          <h2 class="section-title dark-blue-text">Projects</h2>

        <!-- Each .row is a project -->
          <div class="row">
            <div class="project-wrapper__text">
              <h3 class="project-wrapper__text-title">Project Title</h3>
              <p class="project-wrapper__text-info">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div class="project-wrapper__text-btns">
                <a
                  href="#"
                  target="_blank"
                  class="cta-btn cta-btn--hero cta-btn--projects"
                  >See Live</a
                >
                <a href="#" target="_blank" class="cta-btn text-color-main"
                  >Source Code</a
                >
              </div>
            </div>

            <div class="project-wrapper__image">
              <a href="#" target="_blank">
                <div class="thumbnail rounded">
                  <img
                    src="./assets/project.png"
                    class="img-fluid"
                    alt="Project Image"
                  />
                </div>
              </a>
            </div>
          </div>
          ...
          </section>
<!-- /END Project -->
```

### Contact Section

- On `<p>` tag with class-name `.contact-wrapper__text`, include some custom call-to-action message.
- On `<a>` tag, put your email address on `href="mailto:` attribute.

```html
<!-- Contact Section -->
<section id="contact">
  <div class="container">
    <h2 class="section-title">Contact</h2>
    <div class="contact-wrapper">
      <p class="contact-wrapper__text">[Put your call to action here]</p>
      <a href="mailto:" class="cta-btn cta-btn--resume">Call to Action</a>
    </div>
  </div>
</section>
<!-- END Contact Section -->
```

### Footer Section

- Put your social media link on each `<a>` links.
- If you have more social-media accounts, see [Font Awesome Icons](https://fontawesome.com/icons) to put the corresponding additional social icon classNames.
- You can delete or add as many `<a>` links your want.

```html
<!-- Footer Section -->
<footer class="footer">
  ...
  <div class="social-links">
    <a href="#!" target="_blank">
      <i class="fa-brands fa-twitter"></i>
    </a>
    <a href="#!" target="_blank">
      <i class="fa-brands fa-instagram"></i>
    </a>
    <a href="#!" target="_blank">
      <i class="fa-brands fa-codepen"></i>
    </a>
    <a href="#!" target="_blank">
      <i class="fa-brands fa-linkedin"></i>
    </a>
    <a href="#!" target="_blank">
      <i class="fa-brands fa-github"></i>
    </a>
  </div>
  ...
</footer>
<!-- END Footer Section -->
```

### Step 2 - STYLES

Change the color theme of the website ( choose 2 colors to create a gradient ):

Go to [`style/base/_variables.scss`](./style/base/_variables.scss) and only change the values on these properties `$main-color` and `$secondary-color` to your prefered HEX color.

Save the `.scss` file so that the **Live Sass Compiler** extension compiles it to `.css`.

```scss
// Default values
$primary-color: #36d1dc;
$secondary-color: #5b86e5;
```

**NOTE**: I highly recommend to checkout gradients variations on [UI Gradient](https://uigradients.com/#Scooter)

---

- You can clear the README.md file and add you own readme to it.
- Also you don't need to push the [`style`](./style) folder, so you can add [`style`](./style) to [`.gitignore`](./.gitignore) file to ignore it while pushing it to the repo.
- Delete the file [`CNAME`](./CNAME) before you push it.

---

## Deployment 📦

- Head to your GitHub account and create a new repo. And set a new remote for our template repo.

  Note: remote URL will be different.

  ```bash
  # set a new remote
  $ git remote add origin https://github.com/user.repo.git
  ```

- Now commit all your changes with a commit message and push the code to your newly created repo.

  ```bash
  # commit changes
  $ git commit -m 'created my portfolio'
  # push the changes
  $ git push -u origin master
  ```

- Refresh your repo page and head to the settings tab. Now scroll down till you see GitHub Pages. In the Source section select the branch to be master and save it!
- Voilà your Portfolio should be live at `https://username.github.io/repoName/`

## Technologies used 🛠️

- [Sass](https://sass-lang.com/documentation) - CSS extension language
- [ScrollReveal.js](https://scrollrevealjs.org/) - JavaScript library
- [Tilt.js](https://gijsroge.github.io/tilt.js/) - JavaScript tiny parallax library

## Authors

- Author - **Nikhil Narra** - [https://github.com/niknarra](https://github.com/niknarra)
- Original Author - **Anil Seervi** - [https://github.com/AnilSeervi](https://github.com/AnilSeervi)

## Acknowledgments 🎁

I was immediately impressed when I came across the original portfolio design template by Anil Seervi. I built upon and extended on his work. Here is the link to his GitHub profile - https://github.com/AnilSeervi.

---

<h2 align="center">Feel free to fork and make it your own!</h2>
