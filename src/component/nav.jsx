function selectElementByClass(className) {
    return document.querySelector(`.${className}`);
  }
  
  const sections = [
    selectElementByClass("home"),
    selectElementByClass("about"),
    selectElementByClass("services"),
    selectElementByClass("downloads"),
    selectElementByClass("contact")
  ];
  
  const navItems = {
    home: selectElementByClass("homeNavItem"),
    about: selectElementByClass("aboutNavItem"),
    services: selectElementByClass("servicesNavItem"),
    downloads: selectElementByClass("downloadsNavItem"),
    contact: selectElementByClass("contactNavItem")
  };
  
  // intersection observer setup
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.7
  };
  
  function observerCallback(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // get the nav item corresponding to the id of the section
        // that is currently in view
        const navItem = navItems[entry.target.id];
        // add 'active' class on the navItem
        navItem.classList.add("active");
        // remove 'active' class from any navItem that is not
        // same as 'navItem' defined above
        Object.values(navItems).forEach((item) => {
          if (item != navItem) {
            item.classList.remove("active");
          }
        });
      }
    });
    return( 
        <>
        <nav>
        <a href="#home" class="logo navItem">Logo</a>
        <div class="navMenu">
          <a href="#home" class="homeNavItem navItem">Home</a>
          <a href="#about" class="aboutNavItem navItem">About</a>
          <a href="#services" class="servicesNavItem navItem">Services</a>
          <a href="#downloads" class="downloadsNavItem navItem">Downloads</a>
          <a href="#contact" class="contactNavItem navItem">Contact</a>
        </div>
      </nav>
    
    <main>
      <section class="home" id="home">
        <h1>
          Home
        </h1>
      </section>
      <section class="about" id="about">
        <h1>
          About
        </h1>
      </section>
      <section class="services" id="services">
        <h1>
          Services
        </h1>
      </section>
      <section class="downloads" id="downloads">
        <h1>
          Downloads
        </h1>
      </section>
      <section class="contact" id="contact">
        <h1>
          Contact
        </h1>
      </section>
    </main>
    </>
    )
  }
  
  const observer = new IntersectionObserver(observerCallback, observerOptions);
  
  sections.forEach((sec) => observer.observe(sec));

 

