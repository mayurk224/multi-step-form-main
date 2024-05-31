const steps = [
  {
    id: 1,
    step: "step1",
    title: "Your info",
  },
  {
    id: 2,
    step: "step2",
    title: "Select plan",
  },
  {
    id: 3,
    step: "step3",
    title: "Add-ons",
  },
  {
    id: 4,
    step: "step4",
    title: "Summary",
  },
];

const stepsContainer = document.getElementById("stepsContainer");
let currentStep = 1;

steps.forEach((step) => {
  const block = document.createElement("div");
  block.className = "block";

  const num = document.createElement("div");
  num.className = "num";
  if (step.id === currentStep) {
    num.classList.add("active"); // Add active class if id matches current step
  }
  const numSpan = document.createElement("span");
  numSpan.textContent = step.id;
  num.appendChild(numSpan);

  const details = document.createElement("div");
  details.className = "details";
  const stepP = document.createElement("p");
  stepP.textContent = `STEP ${step.id}`;
  const stepH3 = document.createElement("h3");
  stepH3.textContent = step.title;

  details.appendChild(stepP);
  details.appendChild(stepH3);

  block.appendChild(num);
  block.appendChild(details);

  stepsContainer.appendChild(block);
});

const nextButton = document.getElementById('nxtbtn');
nextButton.addEventListener('click', () => {
    const form = document.getElementById('form1');
    const inputs = form.querySelectorAll('input');
    let isEmpty = false;

    inputs.forEach(input => {
        if (input.value.trim() === '') {
            const errorLabel = input.parentElement.querySelector('label[for="error"]');
            errorLabel.style.display = "block";
            isEmpty = true;
        } else {
            const errorLabel = input.parentElement.querySelector('label[for="error"]');
            errorLabel.style.display = "none";
        }
    });

    if (isEmpty) {
        // Prevent proceeding to the next step if any field is empty
        return;
    }

    // If all input fields are filled, continue to the next step
    const activeStep = document.querySelector('.num.active');
    if (activeStep) {
        activeStep.classList.remove('active');
    }

    currentStep = currentStep < steps.length ? currentStep + 1 : currentStep;
    const nextStep = document.querySelector(`.block:nth-child(${currentStep}) .num`);
    if (nextStep) {
        nextStep.classList.add('active');
    }

    // Show "Go Back" button if not on step 1
    if (currentStep !== 1) {
        prevButton.style.display = 'flex';
        prevButton.style.transition = 'all ease-in-out 0.3s'
    } else {
        prevButton.style.display = 'none';
        prevButton.style.transition = 'all ease-in-out 0.3s'
    }

    // Adjust footer justify content based on current step
    if (currentStep === 1) {
        document.querySelector('.footer').style.justifyContent = 'flex-end';
    } else {
        document.querySelector('.footer').style.justifyContent = 'space-between';
        document.querySelector('.footer').style.flexDirection = 'row-reverse';
    }
});


const prevButton = document.getElementById("prvbtn");
prevButton.style.display = currentStep === 1 ? "none" : "block"; // Initially hide if step 1 is active
prevButton.addEventListener("click", () => {
  const activeStep = document.querySelector(".num.active");
  if (activeStep) {
    activeStep.classList.remove("active");
  }

  currentStep = currentStep > 1 ? currentStep - 1 : currentStep;
  const prevStep = document.querySelector(
    `.block:nth-child(${currentStep}) .num`
  );
  if (prevStep) {
    prevStep.classList.add("active");
  }

  // Hide "Go Back" button if on step 1
  if (currentStep === 1) {
    prevButton.style.display = "none";
    prevButton.style.transition = 'all ease-in-out 0.3s'
  }
});

const headings = [
  {
    id: 1,
    title: "Personal info",
    subtitle: "Please provide your name, email address, and phone number.",
  },
  {
    id: 2,
    title: "Select your plan",
    subtitle: "You have the option of monthly or yearly billing.",
  },
  {
    id: 3,
    title: "Pick add-ons",
    subtitle: "Add-ons help enhance your gaming experience.",
  },
  {
    id: 4,
    title: "Finishing up",
    subtitle: "Double-check everything looks OK before confirming.",
  },
  {
    id: 5,
    title: "Thank you!",
    subtitle:
      "Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.",
  },
];
