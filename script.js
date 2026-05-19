const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const heroSection = document.querySelector(".hero");
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
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
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

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && contactModal?.classList.contains("is-open")) {
    toggleContactModal(false);
  }

  if (event.key === "Escape" && specialtyModal?.classList.contains("is-open")) {
    toggleSpecialtyModal(false);
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

if (contactForm && formStatus) {
  setContactMode("client");

  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    formStatus.textContent = "";
    formStatus.className = "form-status";

    const formData = new FormData(contactForm);
    const accessKey = String(formData.get("access_key") || "").trim();

    if (!accessKey || accessKey === "YOUR_WEB3FORMS_ACCESS_KEY") {
      formStatus.textContent = "Add your real Web3Forms access key in the form before sending enquiries.";
      formStatus.classList.add("is-error");
      return;
    }

    const submitButton = contactForm.querySelector('button[type="submit"]');
    const activeMode = contactAudience instanceof HTMLInputElement ? contactAudience.value : "client";
    if (submitButton instanceof HTMLButtonElement) {
      submitButton.disabled = true;
      submitButton.textContent = "Sending...";
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (response.ok && result.success) {
        formStatus.textContent = "Thanks. Your enquiry has been sent successfully.";
        formStatus.classList.add("is-success");
        contactForm.reset();
        setContactMode(activeMode);
        window.setTimeout(() => toggleContactModal(false), 1400);
      } else {
        formStatus.textContent = result.message || "Something went wrong while sending your enquiry.";
        formStatus.classList.add("is-error");
      }
    } catch (error) {
      formStatus.textContent = "The form could not reach Web3Forms. Check your connection and try again.";
      formStatus.classList.add("is-error");
    } finally {
      if (submitButton instanceof HTMLButtonElement) {
        submitButton.disabled = false;
        submitButton.textContent =
          activeMode === "candidate" ? "Send candidate enquiry" : "Send client enquiry";
      }
    }
  });
}
