const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const heroSection = document.querySelector(".hero");
const heroVisual = document.querySelector(".hero-visual");
const heroCards = Array.from(document.querySelectorAll(".hero-visual .float-card"));
const heroCarouselPrev = document.querySelector(".hero-carousel-prev");
const heroCarouselNext = document.querySelector(".hero-carousel-next");
const heroCarouselDots = Array.from(document.querySelectorAll(".hero-carousel-dots button"));
const heroSignalCanvas = document.querySelector("#hero-signal-canvas");
const contactModal = document.querySelector("#contact-modal");
const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");
const contactModeButtons = document.querySelectorAll(".js-contact-mode");
const contactModePanels = document.querySelectorAll("[data-mode-panel]");
const contactAudience = document.querySelector("#contact-audience");
const contactModalKicker = document.querySelector("#contact-modal-kicker");
const contactModalTitle = document.querySelector("#contact-modal-title");
const contactModalCopy = document.querySelector("#contact-modal-copy");
const contactSubmitButton = document.querySelector("#contact-submit-button");
const openContactButtons = document.querySelectorAll(".js-open-contact");
const closeContactButtons = document.querySelectorAll(".js-close-contact");
const specialtyModal = document.querySelector("#specialty-modal");
const openSpecialtyButtons = document.querySelectorAll(".js-open-specialty");
const closeSpecialtyButtons = document.querySelectorAll(".js-close-specialty");
const specialtyLabel = document.querySelector("#specialty-modal-label");
const specialtyTitle = document.querySelector("#specialty-modal-title");
const specialtyLead = document.querySelector("#specialty-modal-lead");
const specialtyRoleList = document.querySelector("#specialty-role-list");
const specialtySide = document.querySelector("#specialty-modal-side");
const specialtyBadges = document.querySelector("#specialty-badges");
const legalModal = document.querySelector("#legal-modal");
const legalModalTitle = document.querySelector("#legal-modal-title");
const legalModalContent = document.querySelector("#legal-modal-content");
const openLegalButtons = document.querySelectorAll(".js-open-legal");
const closeLegalButtons = document.querySelectorAll(".js-close-legal");
const cookieBanner = document.querySelector("#cookie-banner");
const acceptCookiesButton = document.querySelector("#accept-cookies");
const rejectCookiesButton = document.querySelector("#reject-cookies");
const cookieSettingsButton = document.querySelector("#cookie-settings");

const legalContent = {
  privacy: {
    title: "Privacy Notice",
    html: `
      <p><strong>Stafflytics Ltd</strong><br />6, 3 Moorland Road<br />Leeds<br />LS6 1AL</p>
      <p>
        Email: <a href="mailto:recruitment@stafflytics.uk">recruitment@stafflytics.uk</a><br />
        Website: <a href="https://stafflytics.uk/">https://stafflytics.uk/</a><br />
        ICO Data Registration Reference ZC161467
      </p>

      <h3>1. Who We Are</h3>
      <p>Stafflytics Ltd is a recruitment consultancy providing permanent recruitment services throughout the United Kingdom.</p>
      <p>
        For the purposes of UK data protection law, Stafflytics Ltd is the Data Controller responsible for the personal
        information described in this notice.
      </p>

      <h3>2. The Information We Collect</h3>
      <p>We may collect and process the following personal information:</p>
      <h4>Candidates</h4>
      <ul>
        <li>Name</li>
        <li>Telephone number</li>
        <li>Email address</li>
        <li>CV and employment history</li>
        <li>Qualifications and professional experience</li>
        <li>Salary expectations</li>
        <li>References</li>
        <li>Right-to-work information where relevant</li>
        <li>Notes relating to recruitment opportunities and communications</li>
      </ul>
      <h4>Clients and Business Contacts</h4>
      <ul>
        <li>Name</li>
        <li>Job title</li>
        <li>Business email address</li>
        <li>Business telephone number</li>
        <li>Recruitment requirements</li>
        <li>Correspondence and communications</li>
      </ul>
      <h4>Website Enquiries</h4>
      <ul>
        <li>Information submitted through contact forms</li>
        <li>Email correspondence</li>
        <li>Technical information generated through website use where applicable</li>
      </ul>

      <h3>3. How We Collect Information</h3>
      <p>
        We collect information directly from individuals, from CV submissions, job applications, professional networking
        platforms, referrals, client enquiries and communications through our website.
      </p>

      <h3>4. Why We Process Personal Information</h3>
      <p>We process personal information to:</p>
      <ul>
        <li>Provide recruitment services</li>
        <li>Introduce candidates to prospective employers</li>
        <li>Assess candidate suitability for vacancies</li>
        <li>Communicate with candidates and clients</li>
        <li>Manage business relationships</li>
        <li>Comply with legal and regulatory obligations</li>
        <li>Maintain business records</li>
      </ul>

      <h3>5. Lawful Bases for Processing</h3>
      <p>We process personal information under one or more of the following lawful bases:</p>
      <ul>
        <li>Contract</li>
        <li>Steps taken prior to entering into a contract</li>
        <li>Legitimate interests</li>
        <li>Legal obligations</li>
        <li>Consent where required by law</li>
      </ul>

      <h3>6. Sharing Personal Information</h3>
      <p>We may share personal information with:</p>
      <ul>
        <li>Prospective employers and clients for recruitment purposes</li>
        <li>Professional advisers</li>
        <li>Software and technology providers that support our business operations</li>
        <li>Regulators, law enforcement agencies or other authorities where legally required</li>
      </ul>
      <p>We do not sell personal information to third parties.</p>

      <h3>7. International Transfers</h3>
      <p>
        Stafflytics Ltd uses third-party software providers, including Less Annoying CRM, Google Workspace and website
        service providers, which may process or store personal information outside the United Kingdom, including in the
        United States.
      </p>
      <p>
        Where international transfers occur, appropriate safeguards are implemented in accordance with UK GDPR
        requirements, including the UK Extension to the EU-US Data Privacy Framework, Standard Contractual Clauses or
        other legally recognised transfer mechanisms where applicable.
      </p>

      <h3>8. Data Security</h3>
      <p>
        We take appropriate technical and organisational measures to protect personal information from unauthorised
        access, loss, misuse or disclosure.
      </p>

      <h3>9. Data Retention</h3>
      <p>
        Personal information is retained only for as long as necessary for the purposes for which it was collected and
        to comply with legal, regulatory and business requirements.
      </p>
      <p>
        Candidate records are typically retained for up to 2 years following the last meaningful contact, such as an
        application, interview, placement activity or direct communication regarding employment opportunities.
      </p>
      <p>Client and business records may be retained for up to 6 years following the end of the business relationship.</p>
      <p>
        Website enquiry records may be retained for up to 2 years following the last communication. Financial records
        are retained in accordance with applicable legal and tax requirements.
      </p>

      <h3>10. Your Rights</h3>
      <p>Under UK GDPR, individuals have the right to:</p>
      <ul>
        <li>Access their personal information</li>
        <li>Request correction of inaccurate information</li>
        <li>Request erasure of personal information</li>
        <li>Restrict processing</li>
        <li>Object to processing</li>
        <li>Request transfer of their personal information where applicable</li>
        <li>Withdraw consent where processing is based on consent</li>
      </ul>
      <p>Requests can be made by contacting <a href="mailto:recruitment@stafflytics.uk">recruitment@stafflytics.uk</a>.</p>

      <h3>11. Complaints</h3>
      <p>If you have concerns about how your personal information is handled, please contact us in the first instance.</p>
      <p>You also have the right to lodge a complaint with the Information Commissioner's Office (ICO).</p>

      <h3>12. Changes to This Privacy Notice</h3>
      <p>We may update this Privacy Notice from time to time. The latest version will always be available on our website.</p>
    `,
  },
  cookies: {
    title: "Cookie Policy",
    html: `
      <p><strong>Version:</strong> 1.0<br /><strong>Last Updated:</strong> 5th June 2026<br /><strong>Owner:</strong> Stafflytics Ltd</p>

      <h3>1. Introduction</h3>
      <p>This Cookie Policy explains how Stafflytics Ltd uses cookies and similar technologies when you visit our website.</p>
      <p>This policy should be read alongside our Privacy Notice.</p>

      <h3>2. What Are Cookies?</h3>
      <p>Cookies are small text files stored on your device when you visit a website.</p>
      <p>They help websites function correctly, improve security and provide information about how visitors use a website.</p>

      <h3>3. Cookies We Use</h3>
      <h4>Strictly Necessary Cookies</h4>
      <p>We use essential cookies that are required for the operation, security and performance of our website.</p>
      <p>These cookies may be provided by services such as Cloudflare and are necessary for the website to function correctly.</p>
      <p>Because these cookies are essential, they do not require your consent.</p>

      <h4>Analytics Cookies</h4>
      <p>
        We use Google Analytics to understand how visitors interact with our website and to help improve website
        performance and user experience.
      </p>
      <p>Google Analytics may collect information including:</p>
      <ul>
        <li>Pages visited</li>
        <li>Time spent on pages</li>
        <li>Device and browser information</li>
        <li>Approximate geographic location</li>
        <li>Website traffic sources</li>
      </ul>
      <p>Google Analytics cookies will only be placed on your device if you provide consent through our cookie banner.</p>

      <h3>4. Third-Party Services</h3>
      <p>Our website uses third-party service providers, including:</p>
      <ul>
        <li>Cloudflare (website security and performance)</li>
        <li>Web3Forms (contact form processing)</li>
        <li>Google Analytics (website analytics)</li>
      </ul>
      <p>These providers may process information in accordance with their own privacy policies.</p>

      <h3>5. Managing Your Cookie Preferences</h3>
      <p>
        When you first visit our website, you will be presented with a cookie banner allowing you to accept or reject
        non-essential cookies.
      </p>
      <p>You can change your cookie preferences at any time through the cookie settings available on our website.</p>
      <p>You may also manage cookies through your browser settings.</p>
      <p>Please note that disabling essential cookies may affect the operation of the website.</p>

      <h3>6. International Transfers</h3>
      <p>
        Some of our service providers may process information outside the United Kingdom, including in the United States.
      </p>
      <p>
        Where international transfers occur, appropriate safeguards are implemented in accordance with applicable data
        protection legislation.
      </p>

      <h3>7. Changes to This Policy</h3>
      <p>We may update this Cookie Policy from time to time.</p>
      <p>Any changes will be published on this page and will take effect immediately upon publication.</p>

      <h3>8. Contact</h3>
      <p>
        If you have any questions regarding this Cookie Policy, please contact:
        <a href="mailto:recruitment@stafflytics.uk">recruitment@stafflytics.uk</a>
      </p>
    `,
  },
  terms: {
    title: "Website Terms and Conditions",
    html: `
      <p><strong>Last Updated:</strong> June 2026</p>

      <h3>1. Introduction</h3>
      <p>Welcome to the Stafflytics website.</p>
      <p>
        By accessing or using this website, you agree to comply with these Terms &amp; Conditions. If you do not agree
        with any part of these terms, please do not use this website.
      </p>

      <h3>2. About Us</h3>
      <p>
        This website is owned and operated by Stafflytics Ltd. Stafflytics Ltd is a company registered in England and
        Wales with company number 17182201.
      </p>
      <p><strong>Registered Office:</strong><br />6, 3 Moorland Road<br />Leeds<br />LS6 1AL<br />United Kingdom</p>
      <p>References to "Stafflytics", "we", "our" and "us" refer to Stafflytics Ltd.</p>

      <h3>3. Use of this Website</h3>
      <p>You may use this website for lawful purposes only.</p>
      <p>You agree not to:</p>
      <ul>
        <li>Use the website in any way that breaches applicable laws or regulations;</li>
        <li>Attempt to gain unauthorised access to any part of the website or its systems;</li>
        <li>Introduce viruses, malware or other harmful material;</li>
        <li>Interfere with the security or operation of the website;</li>
        <li>Use website content for unlawful, misleading or fraudulent purposes.</li>
      </ul>

      <h3>4. Recruitment Services</h3>
      <p>
        Information provided on this website regarding vacancies, recruitment opportunities, salary information, market
        insights or employment trends is for general information purposes only.
      </p>
      <p>
        The publication of a vacancy or recruitment-related content does not guarantee the availability of any role,
        interview or employment opportunity.
      </p>
      <p>Stafflytics Ltd reserves the right to amend, withdraw, suspend or close vacancies at any time without notice.</p>
      <p>Nothing on this website constitutes an offer of employment.</p>

      <h3>5. Website Content</h3>
      <p>The information provided on this website is for general information purposes only.</p>
      <p>
        Whilst we make reasonable efforts to keep information accurate and up to date, we make no warranties or
        guarantees regarding its completeness, accuracy or reliability.
      </p>
      <p>
        The information on this website is provided for general guidance only and should not be relied upon as
        professional, legal or employment advice.
      </p>

      <h3>6. Intellectual Property</h3>
      <p>
        All content on this website, including text, graphics, branding, logos, designs, layouts and other materials, is
        owned by or licensed to Stafflytics Ltd unless otherwise stated.
      </p>
      <p>You may view, download and print content for your own personal or business use.</p>
      <p>
        You may not reproduce, distribute, modify, republish or commercially exploit any content without prior written
        permission from Stafflytics Ltd.
      </p>

      <h3>7. Privacy and Cookies</h3>
      <p>Your use of this website is also subject to our Privacy Notice and Cookie Policy.</p>
      <p>
        By using this website, you acknowledge that personal information may be processed in accordance with those
        policies.
      </p>

      <h3>8. Third-Party Links</h3>
      <p>This website may contain links to third-party websites.</p>
      <p>
        Such links are provided for convenience only. Stafflytics Ltd has no control over and accepts no responsibility
        for the content, availability, privacy practices or security of third-party websites.
      </p>

      <h3>9. Limitation of Liability</h3>
      <p>
        To the fullest extent permitted by law, Stafflytics Ltd shall not be liable for any loss, damage, cost or expense
        arising directly or indirectly from the use of, or inability to use, this website.
      </p>
      <p>
        Nothing in these Terms &amp; Conditions excludes or limits liability which cannot legally be excluded under the
        laws of England and Wales.
      </p>

      <h3>10. Website Availability</h3>
      <p>We do not guarantee that this website will always be available, secure, uninterrupted or free from errors.</p>
      <p>We reserve the right to update, modify, suspend or withdraw any part of the website at any time without notice.</p>

      <h3>11. Changes to These Terms</h3>
      <p>We may revise these Terms &amp; Conditions from time to time.</p>
      <p>Any updates will be published on this page and will take effect immediately upon publication.</p>

      <h3>12. Governing Law</h3>
      <p>These Terms &amp; Conditions are governed by and construed in accordance with the laws of England and Wales.</p>
      <p>
        Any dispute arising from the use of this website shall be subject to the exclusive jurisdiction of the courts of
        England and Wales.
      </p>

      <h3>13. Contact Us</h3>
      <p>
        If you have any questions regarding these Terms &amp; Conditions, please contact:
        <a href="mailto:recruitment@stafflytics.uk">recruitment@stafflytics.uk</a>
      </p>
    `,
  },
};

const specialtyContent = {
  revenue: {
    label: "Growth-Critical Hires",
    title: "Important hires who can create momentum quickly.",
    lead:
      "We support businesses looking for people who can add energy, ownership, and measurable progress in roles that matter to growth.",
    roles: [
      "People who can build confidence with customers, partners, colleagues, or stakeholders.",
      "Roles where pace, credibility, and ownership make a visible difference to business performance.",
      "Hires who can strengthen relationships, improve conversion, or help create new opportunities.",
      "Experienced contributors who bring sharper execution to teams that need momentum.",
    ],
    side:
      "Most clients come to us when the hire needs to make an impact quickly, but still needs the right judgement, character, and long-term fit.",
    badges: ["Growth", "Client Care", "Ownership", "Momentum", "Impact"],
  },
  operations: {
    label: "Core Team Roles",
    title: "Reliable hires who keep teams moving.",
    lead:
      "These searches focus on people who bring consistency, communication, and calm execution into teams where getting the basics right really matters.",
    roles: [
      "Roles that keep communication clear, standards consistent, and daily work moving properly.",
      "People who can improve team rhythm, reduce friction, and make the business easier to run.",
      "Candidate profiles where reliability, service mindset, and practical judgement are essential.",
      "Team members and managers who bring structure without making the experience feel heavy.",
    ],
    side:
      "Clients usually want people they can trust with the detail: steady, capable hires who raise standards and make work feel more controlled.",
    badges: ["Reliability", "Service", "Standards", "Coordination", "Management"],
  },
  specialist: {
    label: "Tailored Search",
    title: "Focused searches where precision matters most.",
    lead:
      "Some hires need a narrower search, stronger qualification, and more careful judgement. We help clients approach those conversations with confidence.",
    roles: [
      "Searches where the right blend of experience, judgement, and communication style matters.",
      "Hard-to-find hires where a selective approach protects both candidate quality and client time.",
      "Roles that require careful qualification because a simple keyword match is not enough.",
      "Senior or sensitive hires where credibility, discretion, and fit need to be tested properly.",
    ],
    side:
      "The strongest briefs here usually need more than a keyword match. They need context, qualification, and a clear understanding of what success looks like.",
    badges: ["Precision", "Senior Hires", "Discretion", "Fit", "Hard-to-Find"],
  },
};

const contactModeContent = {
  client: {
    kicker: "Book a hiring call",
    title: "Tell us about your hiring plans.",
    copy: "Share a few details about the role, team, and timeline, and one of our experienced recruitment consultants will get in touch.",
    subject: "New Stafflytics client enquiry",
    submit: "Send client enquiry",
  },
  candidate: {
    kicker: "Talk to Stafflytics",
    title: "Tell us about your next move.",
    copy: "Share a few details about your background and the kind of opportunity you are looking for, and one of our recruitment consultants will reach out.",
    subject: "New Stafflytics candidate enquiry",
    submit: "Send candidate enquiry",
  },
};

const setContactMode = (mode) => {
  if (!contactForm) {
    return;
  }

  const activeMode = mode === "candidate" ? "candidate" : "client";
  const modeContent = contactModeContent[activeMode];
  const subjectInput = contactForm.querySelector('input[name="subject"]');

  contactModeButtons.forEach((button) => {
    const isActive = button.getAttribute("data-mode") === activeMode;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });

  contactModePanels.forEach((panel) => {
    const isActive = panel.getAttribute("data-mode-panel") === activeMode;
    panel.classList.toggle("is-active", isActive);
    panel.hidden = !isActive;
  });

  contactForm.querySelectorAll("[data-mode-required]").forEach((field) => {
    const fieldMode = field.getAttribute("data-mode-required");
    const shouldRequire = fieldMode === activeMode;

    if (field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement) {
      field.required = shouldRequire;
      if (!shouldRequire) {
        field.setCustomValidity("");
      }
    }
  });

  if (contactAudience instanceof HTMLInputElement) {
    contactAudience.value = activeMode;
  }

  if (subjectInput instanceof HTMLInputElement) {
    subjectInput.value = modeContent.subject;
  }

  if (contactModalKicker) {
    contactModalKicker.textContent = modeContent.kicker;
  }

  if (contactModalTitle) {
    contactModalTitle.textContent = modeContent.title;
  }

  if (contactModalCopy) {
    contactModalCopy.textContent = modeContent.copy;
  }

  if (contactSubmitButton instanceof HTMLButtonElement) {
    contactSubmitButton.textContent = modeContent.submit;
  }

  if (formStatus) {
    formStatus.textContent = "";
    formStatus.className = "form-status";
  }
};

if (navToggle && siteNav) {
  const closeNav = () => {
    siteNav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  };

  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeNav);
  });

  document.addEventListener("click", (event) => {
    if (
      siteNav.classList.contains("is-open") &&
      event.target instanceof Node &&
      !siteNav.contains(event.target) &&
      !navToggle.contains(event.target)
    ) {
      closeNav();
    }
  });
}

if (heroVisual && heroCards.length && heroCarouselPrev && heroCarouselNext) {
  let activeHeroCard = 0;
  let heroScrollFrame = 0;

  const updateHeroCarousel = (index) => {
    activeHeroCard = index;
    heroCarouselDots.forEach((dot, dotIndex) => {
      const isActive = dotIndex === activeHeroCard;
      dot.classList.toggle("is-active", isActive);
      dot.setAttribute("aria-current", String(isActive));
    });
  };

  const showHeroCard = (index) => {
    const nextIndex = (index + heroCards.length) % heroCards.length;
    const card = heroCards[nextIndex];
    const visualStyles = window.getComputedStyle(heroVisual);
    const scrollPadding = Number.parseFloat(visualStyles.paddingLeft) || 0;

    heroVisual.scrollTo({
      left: card.offsetLeft - scrollPadding,
      behavior: "smooth",
    });
    updateHeroCarousel(nextIndex);
  };

  heroCarouselPrev.addEventListener("click", () => showHeroCard(activeHeroCard - 1));
  heroCarouselNext.addEventListener("click", () => showHeroCard(activeHeroCard + 1));

  heroCarouselDots.forEach((dot, index) => {
    dot.addEventListener("click", () => showHeroCard(index));
  });

  heroVisual.addEventListener(
    "scroll",
    () => {
      window.cancelAnimationFrame(heroScrollFrame);
      heroScrollFrame = window.requestAnimationFrame(() => {
        const visualCenter = heroVisual.scrollLeft + heroVisual.clientWidth / 2;
        let closestIndex = 0;
        let closestDistance = Number.POSITIVE_INFINITY;

        heroCards.forEach((card, index) => {
          const cardCenter = card.offsetLeft + card.offsetWidth / 2;
          const distance = Math.abs(visualCenter - cardCenter);

          if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = index;
          }
        });

        updateHeroCarousel(closestIndex);
      });
    },
    { passive: true }
  );
}

const toggleContactModal = (isOpen) => {
  if (!contactModal) {
    return;
  }

  contactModal.classList.toggle("is-open", isOpen);
  contactModal.setAttribute("aria-hidden", String(!isOpen));
  document.body.style.overflow = isOpen ? "hidden" : "";
};

const toggleSpecialtyModal = (isOpen) => {
  if (!specialtyModal) {
    return;
  }

  specialtyModal.classList.toggle("is-open", isOpen);
  specialtyModal.setAttribute("aria-hidden", String(!isOpen));
  document.body.style.overflow = isOpen ? "hidden" : "";
};

const toggleLegalModal = (isOpen, documentKey = "privacy") => {
  if (!legalModal || !legalModalTitle || !legalModalContent) {
    return;
  }

  if (isOpen) {
    const documentContent = legalContent[documentKey] || legalContent.privacy;
    legalModalTitle.textContent = documentContent.title;
    legalModalContent.innerHTML = documentContent.html || `<p>${documentContent.placeholder}</p>`;
  }

  legalModal.classList.toggle("is-open", isOpen);
  legalModal.setAttribute("aria-hidden", String(!isOpen));
  document.body.style.overflow = isOpen ? "hidden" : "";
};

openContactButtons.forEach((button) => {
  button.addEventListener("click", () => toggleContactModal(true));
});

closeContactButtons.forEach((button) => {
  button.addEventListener("click", () => toggleContactModal(false));
});

contactModeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const mode = button.getAttribute("data-mode") || "client";
    setContactMode(mode);
  });
});

openSpecialtyButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const key = button.getAttribute("data-specialty");
    const content = key ? specialtyContent[key] : null;

    if (!content || !specialtyLabel || !specialtyTitle || !specialtyLead || !specialtyRoleList || !specialtySide || !specialtyBadges) {
      return;
    }

    specialtyLabel.textContent = content.label;
    specialtyTitle.textContent = content.title;
    specialtyLead.textContent = content.lead;
    specialtySide.textContent = content.side;

    specialtyRoleList.innerHTML = "";
    content.roles.forEach((role) => {
      const item = document.createElement("li");
      item.textContent = role;
      specialtyRoleList.appendChild(item);
    });

    specialtyBadges.innerHTML = "";
    content.badges.forEach((badge) => {
      const item = document.createElement("span");
      item.textContent = badge;
      specialtyBadges.appendChild(item);
    });

    toggleSpecialtyModal(true);
  });
});

closeSpecialtyButtons.forEach((button) => {
  button.addEventListener("click", () => toggleSpecialtyModal(false));
});

openLegalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    toggleLegalModal(true, button.getAttribute("data-legal") || "privacy");
  });
});

closeLegalButtons.forEach((button) => {
  button.addEventListener("click", () => toggleLegalModal(false));
});

if (cookieBanner && acceptCookiesButton && rejectCookiesButton) {
  try {
    if (window.localStorage.getItem("stafflytics-cookie-consent")) {
      cookieBanner.hidden = true;
    }
  } catch {
    cookieBanner.hidden = false;
  }

  acceptCookiesButton.addEventListener("click", () => {
    try {
      window.localStorage.setItem("stafflytics-cookie-consent", "accepted");
    } catch {
      // The banner still closes if browser storage is unavailable.
    }

    cookieBanner.hidden = true;
  });

  rejectCookiesButton.addEventListener("click", () => {
    try {
      window.localStorage.setItem("stafflytics-cookie-consent", "rejected");
    } catch {
      // The banner still closes if browser storage is unavailable.
    }

    cookieBanner.hidden = true;
  });

  cookieSettingsButton?.addEventListener("click", () => {
    cookieBanner.hidden = false;
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && contactModal?.classList.contains("is-open")) {
    toggleContactModal(false);
  }

  if (event.key === "Escape" && specialtyModal?.classList.contains("is-open")) {
    toggleSpecialtyModal(false);
  }

  if (event.key === "Escape" && legalModal?.classList.contains("is-open")) {
    toggleLegalModal(false);
  }
});

const revealItems = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

revealItems.forEach((item) => observer.observe(item));

if (heroSection && heroSignalCanvas instanceof HTMLCanvasElement) {
  const ctx = heroSignalCanvas.getContext("2d");
  const ripplePoints = [];
  const signalPoints = [];
  const mouseState = { x: 0, y: 0, active: false };
  let animationFrame = 0;
  let canvasWidth = 0;
  let canvasHeight = 0;
  let cellSize = 22;
  let columnCount = 0;
  let rowCount = 0;
  let isHeroVisible = true;
  let lastPointerX = 0;
  let lastPointerY = 0;
  let isDraggingSignal = false;
  let lastDragRippleTime = 0;

  const rebuildSignalField = () => {
    const rect = heroSection.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    canvasWidth = Math.max(1, Math.floor(rect.width));
    canvasHeight = Math.max(1, Math.floor(rect.height));
    heroSignalCanvas.width = Math.floor(canvasWidth * dpr);
    heroSignalCanvas.height = Math.floor(canvasHeight * dpr);
    heroSignalCanvas.style.width = `${canvasWidth}px`;
    heroSignalCanvas.style.height = `${canvasHeight}px`;

    if (!ctx) {
      return;
    }

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    cellSize = canvasWidth < 700 ? 20 : 22;
    columnCount = Math.ceil(canvasWidth / cellSize) + 2;
    rowCount = Math.ceil(canvasHeight / cellSize) + 2;
    signalPoints.length = 0;

    for (let row = 0; row < rowCount; row += 1) {
      for (let col = 0; col < columnCount; col += 1) {
        signalPoints.push({
          x: col * cellSize,
          y: row * cellSize,
          alpha: 0.04 + Math.random() * 0.08,
          speed: 0.14 + Math.random() * 0.2,
          drift: (Math.random() - 0.5) * 2,
          size: 1.2 + Math.random() * 1.4,
          phase: Math.random() * Math.PI * 2,
        });
      }
    }
  };

  const drawSignalField = (time) => {
    if (!ctx || !isHeroVisible) {
      animationFrame = 0;
      return;
    }

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.fillStyle = "rgba(250, 250, 250, 0.18)";
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    for (let index = ripplePoints.length - 1; index >= 0; index -= 1) {
      const ripple = ripplePoints[index];
      ripple.radius += ripple.speed;
      ripple.alpha *= 0.982;
      if (ripple.alpha < 0.025) {
        ripplePoints.splice(index, 1);
      }
    }

    signalPoints.forEach((point, index) => {
      const hoverBoost = mouseState.active
        ? Math.max(0, 1 - Math.hypot(point.x - mouseState.x, point.y - mouseState.y) / 140)
        : 0;

      let offsetX = Math.sin((time * 0.00022) + point.phase) * point.drift;
      let offsetY = Math.cos((time * 0.00016) + point.phase) * point.speed * 4;

      for (let rippleIndex = 0; rippleIndex < ripplePoints.length; rippleIndex += 1) {
        const ripple = ripplePoints[rippleIndex];
        const dx = point.x - ripple.x;
        const dy = point.y - ripple.y;
        const dist = Math.hypot(dx, dy);
        const band = Math.abs(dist - ripple.radius);

        if (band < 38 && dist > 0) {
          const force = (1 - band / 38) * ripple.alpha * 8;
          offsetX += (dx / dist) * force;
          offsetY += (dy / dist) * force;
        }
      }

      const x = point.x + offsetX;
      const y = point.y + offsetY;
      const alpha = Math.min(0.18, point.alpha + hoverBoost * 0.12);
      const isHighlighted = hoverBoost > 0.5 || Math.sin(time * 0.0007 + index * 0.2) > 0.975;

      ctx.beginPath();
      ctx.arc(x, y, point.size + hoverBoost * 1.8, 0, Math.PI * 2);
      ctx.fillStyle = isHighlighted
        ? `rgba(37, 99, 235, ${alpha + 0.1})`
        : `rgba(71, 85, 105, ${alpha})`;
      ctx.fill();

      if (index % 9 === 0 && signalPoints[index + 1]) {
        const nextPoint = signalPoints[index + 1];
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(nextPoint.x, nextPoint.y);
        ctx.strokeStyle = `rgba(37, 99, 235, ${0.025 + hoverBoost * 0.04})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    });

    if (mouseState.active) {
      const gradient = ctx.createRadialGradient(
        mouseState.x,
        mouseState.y,
        0,
        mouseState.x,
        mouseState.y,
        120
      );
      gradient.addColorStop(0, "rgba(56, 189, 248, 0.08)");
      gradient.addColorStop(0.45, "rgba(37, 99, 235, 0.035)");
      gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    }

    animationFrame = window.requestAnimationFrame(drawSignalField);
  };

  const addRipple = (x, y, strength = 0.55, speed = 6.5) => {
    ripplePoints.push({
      x,
      y,
      radius: 0,
      alpha: strength,
      speed,
    });
    ensureAnimation();
  };

  const setPointerPosition = (event) => {
    const rect = heroSection.getBoundingClientRect();
    const nextX = event.clientX - rect.left;
    const nextY = event.clientY - rect.top;

    if (Math.abs(nextX - lastPointerX) < 2 && Math.abs(nextY - lastPointerY) < 2) {
      return;
    }

    lastPointerX = nextX;
    lastPointerY = nextY;
    mouseState.x = nextX;
    mouseState.y = nextY;
    mouseState.active = true;

    if (isDraggingSignal) {
      const now = performance.now();
      if (now - lastDragRippleTime > 46) {
        addRipple(nextX, nextY, 0.24, 4.8);
        lastDragRippleTime = now;
      }
    }
  };

  const ensureAnimation = () => {
    if (!animationFrame && isHeroVisible) {
      animationFrame = window.requestAnimationFrame(drawSignalField);
    }
  };

  const heroVisibilityObserver = new IntersectionObserver(
    (entries) => {
      const entry = entries[0];
      isHeroVisible = Boolean(entry?.isIntersecting);

      if (isHeroVisible) {
        ensureAnimation();
      } else if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
        animationFrame = 0;
      }
    },
    { threshold: 0.02 }
  );

  rebuildSignalField();
  heroVisibilityObserver.observe(heroSection);
  ensureAnimation();

  heroSection.addEventListener("mousemove", setPointerPosition, { passive: true });
  heroSection.addEventListener("mouseenter", setPointerPosition, { passive: true });
  heroSection.addEventListener("mouseleave", () => {
    mouseState.active = false;
    isDraggingSignal = false;
  }, { passive: true });
  heroSection.addEventListener("mousedown", (event) => {
    if (event.button !== 0) {
      return;
    }

    const rect = heroSection.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    isDraggingSignal = true;
    lastDragRippleTime = performance.now();
    addRipple(x, y, 0.46, 5.8);
  });
  window.addEventListener("mouseup", () => {
    isDraggingSignal = false;
  }, { passive: true });
  heroSection.addEventListener("click", (event) => {
    const rect = heroSection.getBoundingClientRect();
    addRipple(event.clientX - rect.left, event.clientY - rect.top);
  }, { passive: true });
  window.addEventListener("resize", () => {
    window.cancelAnimationFrame(animationFrame);
    animationFrame = 0;
    rebuildSignalField();
    ensureAnimation();
  }, { passive: true });
}

if (contactForm) {
  setContactMode("client");
}
