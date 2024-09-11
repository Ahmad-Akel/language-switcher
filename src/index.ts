import { translations } from "./localization/index";
import "./styles.css";

const langButtons = document.querySelectorAll<HTMLButtonElement>(
  ".language-switcher button"
);
const appTitle = document.getElementById("app-title");
const formTitle = document.getElementById("form-title");
const nameLabel = document.getElementById("name-label");
const emailLabel = document.getElementById("email-label");
const submitButton = document.getElementById("submit-btn");

// Function to switch the language
function switchLanguage(language: "en" | "cz") {
  appTitle!.innerText = translations[language].appTitle;
  formTitle!.innerText = translations[language].signupForm.formTitle;
  nameLabel!.innerText = translations[language].signupForm.nameLabel;
  emailLabel!.innerText = translations[language].signupForm.emailLabel;
  submitButton!.innerText = translations[language].signupForm.submitButton;
}

// Add event listeners to the language buttons
langButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const selectedLang = (event.currentTarget as HTMLButtonElement).dataset
      .lang as "en" | "cz";
    switchLanguage(selectedLang);
  });
});
export {};
