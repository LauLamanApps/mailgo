import {
  MailgoConfig,
  MailgoTranslations,
  MailgoTranslation,
  MailgoI18n,
} from "mailgo";

// i18n for mailgo
import * as i18n from "../i18n/i18n.json";

// mailgo scss
const mailgoCSS: string = require("./mailgo.scss").toString();

// default lang
const DEFAULT_LANG: string = "en";

// links
const MAILTO: string = "mailto:";
const TEL: string = "tel:";
const CALLTO: string = "callto:";

// mailgo types
const MAIL_TYPE: string = "mail";
const TEL_TYPE: string = "tel";

// default href for links
const DEFAULT_BTN_HREF: string = "javascript:void(0);";

// useful html tags
const spanHTMLTag: string = "span";
const aHTMLTag: string = "a";
const pHTMLTag: string = "p";

// global mailgo config object
let config: MailgoConfig;

// default language
let lang: string = DEFAULT_LANG;

// modals global object
let modalMailto: HTMLElement, modalTel: HTMLElement;

// mailgo variables
let url: URL,
  mail: string = "",
  encEmail: string = "",
  cc: string = "",
  bcc: string = "",
  subject: string = "",
  bodyMail: string = "";

// mailgo tel variables
let tel: string = "",
  msg: string = "",
  telegramUsername: string = "",
  skypeUsername: string = "";

// the DOM elements
let title: HTMLElement,
  titleTel: HTMLElement,
  detailCc: HTMLElement,
  detailBcc: HTMLElement,
  detailSubject: HTMLElement,
  detailBody: HTMLElement,
  ccValue: HTMLElement,
  bccValue: HTMLElement,
  subjectValue: HTMLElement,
  bodyValue: HTMLElement,
  activatedLink: HTMLElement;

// mailgo buttons (actions)
let gmail: HTMLLinkElement,
  outlook: HTMLLinkElement,
  open: HTMLLinkElement,
  telegram: HTMLLinkElement,
  wa: HTMLLinkElement,
  skype: HTMLLinkElement,
  call: HTMLLinkElement,
  copyMail: HTMLLinkElement,
  copyTel: HTMLLinkElement;

/**
 * mailgoInit
 * the function that creates the mailgo elements in DOM
 */
const mailgoInit = (): void => {
  // translations
  let {
    translations,
  }: { translations: MailgoTranslations } = i18n as MailgoI18n;

  // if a default language is defined use it
  if (config?.lang && i18n.languages.includes(config.lang)) {
    lang = config.lang;
  }

  // if is defined <html lang=""> use it!
  if (!config?.forceLang) {
    // keep the lang from html
    let htmlLang: string = document.documentElement.lang;

    // if there are translations...
    if (i18n.languages.includes(htmlLang)) {
      lang = document.documentElement.lang;
    }
  }

  // strings
  let defaultStrings: MailgoTranslation = translations[DEFAULT_LANG];
  let strings: MailgoTranslation = translations[lang];

  // mailgo mail
  {
    // modal
    modalMailto = createElement() as HTMLElement;
    modalMailto.style.display = "none";
    modalMailto.id = "mailgo";
    modalMailto.classList.add("m-modal");
    modalMailto.setAttribute("role", "dialog");
    modalMailto.setAttribute("tabindex", "-1");
    modalMailto.setAttribute("aria-labelledby", "m-title");

    // if dark is in config
    if (config?.dark) {
      enableDarkMode(MAIL_TYPE);
    } else {
      disableDarkMode(MAIL_TYPE);
    }

    // background
    let modalBackground: HTMLElement = createElement();
    modalBackground.className = "m-modal-back";
    modalMailto.appendChild(modalBackground);

    // modal content
    let modalContent: HTMLElement = createElement();
    modalContent.className = "m-modal-content";
    modalMailto.appendChild(modalContent);

    // title (email address)
    title = createElement("strong");
    title.id = "m-title";
    title.className = "m-title";
    modalContent.appendChild(title);

    // details
    let details: HTMLElement = createElement();
    details.id = "m-details";
    details.className = "m-details";

    detailCc = createElement(pHTMLTag);
    detailCc.id = "m-cc";
    let ccSpan: HTMLElement = createElement(spanHTMLTag);
    ccSpan.className = "w-500";
    ccSpan.appendChild(createTextNode(strings.cc_ || defaultStrings.cc_));
    ccValue = createElement(spanHTMLTag);
    ccValue.id = "m-cc-value";
    detailCc.appendChild(ccSpan);
    detailCc.appendChild(ccValue);
    details.appendChild(detailCc);

    detailBcc = createElement(pHTMLTag);
    detailBcc.id = "m-bcc";
    let bccSpan: HTMLElement = createElement(spanHTMLTag);
    bccSpan.className = "w-500";
    bccSpan.appendChild(createTextNode(strings.bcc_ || defaultStrings.bcc_));
    bccValue = createElement(spanHTMLTag);
    bccValue.id = "m-bcc-value";
    detailBcc.appendChild(bccSpan);
    detailBcc.appendChild(bccValue);
    details.appendChild(detailBcc);

    detailSubject = createElement(pHTMLTag);
    detailSubject.id = "m-subject";
    let subjectSpan: HTMLElement = createElement(spanHTMLTag);
    subjectSpan.className = "w-500";
    subjectSpan.appendChild(
      createTextNode(strings.subject_ || defaultStrings.subject_)
    );
    subjectValue = createElement(spanHTMLTag);
    subjectValue.id = "m-subject-value";
    detailSubject.appendChild(subjectSpan);
    detailSubject.appendChild(subjectValue);
    details.appendChild(detailSubject);

    detailBody = createElement(pHTMLTag);
    detailBody.id = "m-body";
    let bodySpan: HTMLElement = createElement(spanHTMLTag);
    bodySpan.className = "w-500";
    bodySpan.appendChild(createTextNode(strings.body_ || defaultStrings.body_));
    bodyValue = createElement(spanHTMLTag);
    bodyValue.id = "m-body-value";
    detailBody.appendChild(bodySpan);
    detailBody.appendChild(bodyValue);
    details.appendChild(detailBody);

    modalContent.appendChild(details);

    // Gmail
    gmail = createElement(aHTMLTag) as HTMLLinkElement;
    gmail.id = "m-gmail";
    gmail.href = DEFAULT_BTN_HREF;
    gmail.classList.add("m-open");
    gmail.classList.add("m-gmail");
    gmail.appendChild(
      createTextNode(strings.open_in_ || defaultStrings.open_in_)
    );
    let gmailSpan: HTMLElement = createElement(spanHTMLTag);
    gmailSpan.className = "w-500";
    gmailSpan.appendChild(
      createTextNode(strings.gmail || defaultStrings.gmail)
    );
    gmail.appendChild(gmailSpan);

    modalContent.appendChild(gmail);

    // Outlook
    outlook = createElement(aHTMLTag) as HTMLLinkElement;
    outlook.id = "m-outlook";
    outlook.href = DEFAULT_BTN_HREF;
    outlook.classList.add("m-open");
    outlook.classList.add("m-outlook");
    outlook.appendChild(
      createTextNode(strings.open_in_ || defaultStrings.open_in_)
    );
    let outlookSpan: HTMLElement = createElement(spanHTMLTag);
    outlookSpan.className = "w-500";
    outlookSpan.appendChild(
      createTextNode(strings.outlook || defaultStrings.outlook)
    );
    outlook.appendChild(outlookSpan);

    modalContent.appendChild(outlook);

    // open default
    open = createElement(aHTMLTag) as HTMLLinkElement;
    open.id = "m-open";
    open.href = DEFAULT_BTN_HREF;
    open.classList.add("m-open");
    open.classList.add("m-default");
    let openSpan: HTMLElement = createElement(spanHTMLTag);
    openSpan.className = "w-500";
    openSpan.appendChild(createTextNode(strings.open || defaultStrings.open));
    open.appendChild(openSpan);
    open.appendChild(
      createTextNode(strings._default || defaultStrings._default)
    );

    modalContent.appendChild(open);

    // copy
    copyMail = createElement(aHTMLTag) as HTMLLinkElement;
    copyMail.id = "m-copy";
    copyMail.href = DEFAULT_BTN_HREF;
    copyMail.classList.add("m-copy");
    copyMail.classList.add("w-500");
    copyMail.appendChild(createTextNode(strings.copy || defaultStrings.copy));

    modalContent.appendChild(copyMail);

    modalContent.appendChild(byElement());

    // add the modal at the end of the body
    document.body.appendChild(modalMailto);

    // every click outside the modal will hide the modal
    modalBackground.addEventListener("click", hideMailgo);
  }
  // mailgo tel
  {
    // modal
    modalTel = createElement() as HTMLElement;
    modalTel.style.display = "none";
    modalTel.id = "mailgo-tel";
    modalTel.classList.add("m-modal");
    modalTel.setAttribute("role", "dialog");
    modalTel.setAttribute("tabindex", "-1");
    modalTel.setAttribute("aria-labelledby", "m-tel-title");

    // if dark is in config
    if (config?.dark) {
      enableDarkMode(TEL_TYPE);
    } else {
      disableDarkMode(TEL_TYPE);
    }

    // background
    let modalBackground: HTMLElement = createElement();
    modalBackground.className = "m-modal-back";
    modalTel.appendChild(modalBackground);

    // modal content
    let modalContent: HTMLElement = createElement();
    modalContent.className = "m-modal-content";
    modalTel.appendChild(modalContent);

    // title (telephone number)
    titleTel = createElement("strong");
    titleTel.id = "m-tel-title";
    titleTel.className = "m-title";
    modalContent.appendChild(titleTel);

    // Telegram
    telegram = createElement(aHTMLTag) as HTMLLinkElement;
    telegram.id = "m-tg";
    telegram.href = DEFAULT_BTN_HREF;
    telegram.classList.add("m-open");
    telegram.classList.add("m-tg");

    // by default not display
    telegram.style.display = "none";

    telegram.appendChild(
      createTextNode(strings.open_in_ || defaultStrings.open_in_)
    );
    let telegramSpan: HTMLElement = createElement(spanHTMLTag);
    telegramSpan.className = "w-500";
    telegramSpan.appendChild(
      createTextNode(strings.telegram || defaultStrings.telegram)
    );
    telegram.appendChild(telegramSpan);

    modalContent.appendChild(telegram);

    // WhatsApp
    wa = createElement(aHTMLTag) as HTMLLinkElement;
    wa.id = "m-wa";
    wa.href = DEFAULT_BTN_HREF;
    wa.classList.add("m-open");
    wa.classList.add("m-wa");
    wa.appendChild(createTextNode(strings.open_in_ || defaultStrings.open_in_));
    let waSpan: HTMLElement = createElement(spanHTMLTag);
    waSpan.className = "w-500";
    waSpan.appendChild(
      createTextNode(strings.whatsapp || defaultStrings.whatsapp)
    );
    wa.appendChild(waSpan);

    modalContent.appendChild(wa);

    // Skype
    skype = createElement(aHTMLTag) as HTMLLinkElement;
    skype.id = "m-skype";
    skype.href = DEFAULT_BTN_HREF;
    skype.classList.add("m-open");
    skype.classList.add("m-skype");
    skype.appendChild(
      createTextNode(strings.open_in_ || defaultStrings.open_in_)
    );
    let skypeSpan: HTMLElement = createElement(spanHTMLTag);
    skypeSpan.className = "w-500";
    skypeSpan.appendChild(
      createTextNode(strings.skype || defaultStrings.skype)
    );
    skype.appendChild(skypeSpan);

    modalContent.appendChild(skype);

    // call default
    call = createElement(aHTMLTag) as HTMLLinkElement;
    call.id = "m-call";
    call.href = DEFAULT_BTN_HREF;
    call.classList.add("m-open");
    call.classList.add("m-default");
    let callSpan: HTMLElement = createElement(spanHTMLTag);
    callSpan.className = "w-500";
    callSpan.appendChild(createTextNode(strings.call || defaultStrings.call));
    call.appendChild(callSpan);
    call.appendChild(
      createTextNode(strings._as_default || defaultStrings._as_default)
    );

    modalContent.appendChild(call);

    // copy
    copyTel = createElement(aHTMLTag) as HTMLLinkElement;
    copyTel.id = "m-tel-copy";
    copyTel.href = DEFAULT_BTN_HREF;
    copyTel.classList.add("m-copy");
    copyTel.classList.add("w-500");
    copyTel.appendChild(createTextNode(strings.copy || defaultStrings.copy));

    modalContent.appendChild(copyTel);

    modalContent.appendChild(byElement());

    // add the modal at the end of the body
    document.body.appendChild(modalTel);

    // every click outside the modal will hide the modal
    modalBackground.addEventListener("click", hideMailgo);
  }

  // event listener on body, if the element is mailgo-compatible the mailgo modal will be rendered
  document.addEventListener("click", mailgoCheckRender);
};

/**
 * mailgoRender
 * function to render a mailgo (mail or tel)
 */
export function mailgoRender(
  type: string = MAIL_TYPE,
  mailgoElement: HTMLLinkElement
): void {
  // mailgo mail
  if (type === MAIL_TYPE) {
    // if the element href=^"mailto:"
    if (
      mailgoElement.href &&
      mailgoElement.href.toLowerCase().startsWith(MAILTO)
    ) {
      mail = decodeURIComponent(
        mailgoElement.href.split("?")[0].split(MAILTO)[1].trim()
      );

      url = new URL(mailgoElement.href);
      let urlParams: URLSearchParams = url.searchParams;

      // optional parameters for the email
      cc = urlParams.get("cc");
      bcc = urlParams.get("bcc");
      subject = urlParams.get("subject");
      bodyMail = urlParams.get("body");
    } else {
      // if the element href="#mailgo" or class="mailgo"
      // mail = data-address + @ + data-domain
      mail =
        mailgoElement.getAttribute("data-address") +
        "@" +
        mailgoElement.getAttribute("data-domain");

      url = new URL(MAILTO + encodeURIComponent(mail));

      // cc = data-cc-address + @ + data-cc-domain
      cc =
        mailgoElement.getAttribute("data-cc-address") +
        "@" +
        mailgoElement.getAttribute("data-cc-domain");

      // bcc = data-bcc-address + @ + data-bcc-domain
      bcc =
        mailgoElement.getAttribute("data-bcc-address") +
        "@" +
        mailgoElement.getAttribute("data-bcc-domain");

      // subject = data-subject
      subject = mailgoElement.getAttribute("data-subject");

      // body = data-body
      bodyMail = mailgoElement.getAttribute("data-body");
    }

    if (
      typeof config?.validateEmail === "undefined" ||
      config?.validateEmail === true
    ) {
      // validate the email address
      if (!validateEmails(mail.split(","))) return;

      // if cc, bcc are not valid cc, bcc = ""
      if (cc && !validateEmails(cc.split(","))) cc = "";
      if (bcc && !validateEmails(bcc.split(","))) bcc = "";
    }

    // the title of the modal (email address)
    title.innerHTML = mail.split(",").join("<br/>");

    // add the details if provided
    cc
      ? ((detailCc.style.display = "block"),
        (ccValue.innerHTML = cc.split(",").join("<br/>")))
      : (detailCc.style.display = "none");

    bcc
      ? ((detailBcc.style.display = "block"),
        (bccValue.innerHTML = bcc.split(",").join("<br/>")))
      : (detailBcc.style.display = "none");

    subject
      ? ((detailSubject.style.display = "block"),
        (subjectValue.textContent = subject))
      : (detailSubject.style.display = "none");

    bodyMail
      ? ((detailBody.style.display = "block"),
        (bodyValue.textContent = bodyMail))
      : (detailBody.style.display = "none");

    // add the actions
    gmail.addEventListener("click", openGmail);

    outlook.addEventListener("click", openOutlook);

    encEmail = encodeEmail(mail);
    open.addEventListener("click", openDefault);

    copyMail.addEventListener("click", () => copy(mail));
  }
  // mailgo tel
  else if (type === TEL_TYPE) {
    if (
      mailgoElement.href &&
      mailgoElement.href.toLowerCase().startsWith(TEL)
    ) {
      tel = decodeURIComponent(
        mailgoElement.href.split("?")[0].split(TEL)[1].trim()
      );
    } else if (
      mailgoElement.href &&
      mailgoElement.href.toLowerCase().startsWith(CALLTO)
    ) {
      tel = decodeURIComponent(
        mailgoElement.href.split("?")[0].split(CALLTO)[1].trim()
      );
    } else if (mailgoElement.hasAttribute("data-tel")) {
      tel = mailgoElement.getAttribute("data-tel");
      msg = mailgoElement.getAttribute("data-msg");
    }

    // validate the phone number
    if (!validateTel(tel)) return;

    // Telegram username
    if (mailgoElement.hasAttribute("data-telegram")) {
      telegramUsername = mailgoElement.getAttribute("data-telegram");
    } else {
      telegramUsername = null;
    }

    // Telegram username
    if (mailgoElement.hasAttribute("data-skype")) {
      skypeUsername = mailgoElement.getAttribute("data-skype");
    }

    // the title of the modal (tel)
    titleTel.innerHTML = tel;

    // add the actions to buttons
    wa.addEventListener("click", openWhatsApp);

    // telegram must be shown only if data-telegram is provided
    if (telegramUsername) {
      document.getElementById("m-tg").style.display = "block";
      telegram.addEventListener("click", openTelegram);
    } else {
      document.getElementById("m-tg").style.display = "none";
    }

    skype.addEventListener("click", openSkype);

    call.addEventListener("click", callDefault);

    copyTel.addEventListener("click", () => copy(tel));
  }

  // if config.dark is set to true then all the modals will be in dark mode
  if (!config?.dark) {
    // if the element contains dark as class enable dark mode
    if (mailgoElement.classList.contains("dark")) {
      enableDarkMode(type);
    } else {
      disableDarkMode(type);
    }
  }

  // show the mailgo
  showMailgo(type);

  // add listener keyDown
  document.addEventListener("keydown", mailgoKeydown);
}

// actions
const openGmail = (): void => {
  // Gmail url
  let gmailUrl: string =
    "https://mail.google.com/mail/u/0/?view=cm&source=mailto&to=" +
    encodeURIComponent(mail);

  // the details if provided
  if (cc) gmailUrl = gmailUrl.concat("&cc=" + encodeURIComponent(cc));
  if (bcc) gmailUrl = gmailUrl.concat("&bcc=" + encodeURIComponent(bcc));
  if (subject) gmailUrl = gmailUrl.concat("&subject=" + subject);
  if (bodyMail) gmailUrl = gmailUrl.concat("&body=" + bodyMail);

  // open the link
  window.open(gmailUrl, "_blank");

  // hide the modal
  hideMailgo();
};

const openOutlook = (): void => {
  // Outlook url
  let outlookUrl: string =
    "https://outlook.live.com/owa/?path=/mail/action/compose&to=" +
    encodeURIComponent(mail);

  // the details if provided
  if (subject) outlookUrl = outlookUrl.concat("&subject=" + subject);
  if (bodyMail) outlookUrl = outlookUrl.concat("&body=" + bodyMail);

  // open the link
  window.open(outlookUrl, "_blank");

  // hide the modal
  hideMailgo();
};

const openDefault = (): void => {
  mailToEncoded(encEmail);
  hideMailgo();
};

const openTelegram = (): void => {
  // Telegram url
  let tgUrl: string = "https://t.me/" + telegramUsername;

  // open the url
  window.open(tgUrl, "_blank");

  // hide the modal
  hideMailgo();
};

const openSkype = (): void => {
  let skype: string = skypeUsername !== "" ? skypeUsername : tel;

  // Telegram url
  let skypeUrl: string = "skype:" + skype;

  // open the url
  window.open(skypeUrl, "_blank");

  // hide the modal
  hideMailgo();
};

const openWhatsApp = (): void => {
  // WhatsApp url
  let waUrl: string = "https://wa.me/" + tel;

  // the details if provided
  if (msg) waUrl + "?text=" + msg;

  // open the url
  window.open(waUrl, "_blank");

  // hide the modal
  hideMailgo();
};

const callDefault = () => {
  let callUrl: string = "tel:" + tel;
  window.open(callUrl);
  hideMailgo();
};

const copy = (content: string): void => {
  copyToClipboard(content);
  let activeCopy: HTMLElement;
  // the correct copyButton (mail or tel)
  mailgoIsShowing(MAIL_TYPE) ? (activeCopy = copyMail) : (activeCopy = copyTel);
  activeCopy.textContent = "copied";
  setTimeout(() => {
    activeCopy.textContent = "copy";
    // hide after the timeout
    hideMailgo();
  }, 999);
};

// function that returns if an element is a mailgo
export function isMailgo(
  element: HTMLElement,
  type: string = MAIL_TYPE
): boolean {
  let href: string = (element as HTMLLinkElement).href;

  // mailgo type mail
  if (type === MAIL_TYPE) {
    return (
      // first case: it is an <a> element with "mailto:..." in href and no no-mailgo in classList
      (href &&
        href.toLowerCase().startsWith(MAILTO) &&
        !element.classList.contains("no-mailgo")) ||
      (element.hasAttribute("data-address") &&
        // second case: the href=#mailgo
        ((href && element.getAttribute("href").toLowerCase() === "#mailgo") ||
          // third case: the classList contains mailgo
          (element.classList && element.classList.contains("mailgo"))))
    );
  }

  // mailgo type tel
  if (type === TEL_TYPE) {
    return (
      // first case: it is an <a> element with "tel:..." or "callto:..." in href and no no-mailgo in classList
      (href &&
        (href.toLowerCase().startsWith(TEL) ||
          href.toLowerCase().startsWith(CALLTO)) &&
        !element.classList.contains("no-mailgo")) ||
      (element.hasAttribute("data-tel") &&
        // second case: the href=#mailgo
        href &&
        element.getAttribute("href").toLowerCase() === "#mailgo") ||
      // third case: the classList contains mailgo
      (element.classList && element.classList.contains("mailgo"))
    );
  }

  return false;
}

/**
 * mailgoCheckRender
 * function to check if an element is mailgo-enabled or not referencing to
 * mail:
 * document.querySelectorAll(
 *   'a[href^="mailto:" i]:not(.no-mailgo), a[href="#mailgo"], a.mailgo'
 * );
 * tel:
 * document.querySelectorAll(
 *   'a[href^="tel:" i]:not(.no-mailgo), a[href="#mailgo"], a.mailgo'
 * );
 * or
 * document.querySelectorAll(
 *   'a[href^="callto:" i]:not(.no-mailgo), a[href="#mailgo"], a.mailgo'
 * );
 */
export function mailgoCheckRender(event: Event): boolean {
  // check if the id=mailgo exists in the body
  if (!document.contains(modalMailto) || !document.contains(modalTel))
    return false;

  // if a mailgo is already showing do nothing
  if (mailgoIsShowing(MAIL_TYPE) || mailgoIsShowing(TEL_TYPE)) return false;

  // the path of the event
  let path =
    (event.composedPath && event.composedPath()) ||
    composedPath(event.target as HTMLElement);

  if (path) {
    path.forEach((element: HTMLElement) => {
      if (element instanceof HTMLDocument || element instanceof Window)
        return false;

      // go in the event.path to find if the user has clicked on a mailgo element
      if (isMailgo(element, MAIL_TYPE)) {
        // stop the normal execution of the element click
        event.preventDefault();

        // render mailgo
        mailgoRender(MAIL_TYPE, element as HTMLLinkElement);

        return true;
      }
      if (isMailgo(element, TEL_TYPE)) {
        // stop the normal execution of the element click
        event.preventDefault();

        // render mailgo
        mailgoRender(TEL_TYPE, element as HTMLLinkElement);

        return true;
      }
    });
  }

  return false;
}

/**
 * mailgoKeydown
 * function to manage the keydown event when the modal is showing
 */
const mailgoKeydown = (keyboardEvent: KeyboardEvent): void => {
  // if mailgo is showing
  if (mailgoIsShowing(MAIL_TYPE)) {
    switch (keyboardEvent.keyCode) {
      case 27:
        // Escape
        hideMailgo();
        break;
      case 71:
        // g -> open GMail
        openGmail();
        break;
      case 79:
        // o -> open Outlook
        openOutlook();
        break;
      case 32:
      case 13:
        // spacebar or enter -> open default
        openDefault();
        break;
      case 67:
        // c -> copy
        copy(mail);
        break;
      default:
        return;
    }
  } else if (mailgoIsShowing(TEL_TYPE)) {
    switch (keyboardEvent.keyCode) {
      case 27:
        // Escape
        hideMailgo();
        break;
      case 84:
        // t -> open Telegram
        openTelegram();
        break;
      case 87:
        // w -> open WhatsApp
        openWhatsApp();
        break;
      case 32:
      case 13:
        // spacebar or enter -> call default
        callDefault();
        break;
      case 67:
        // c -> copy
        copy(tel);
        break;
      default:
        return;
    }
  }
  return;
};

// show the modal
const showMailgo = (type = MAIL_TYPE): void => {
  // show the correct modal
  setModalDisplay(type, "flex");
};

// hide the modal
const hideMailgo = (): void => {
  // hide all the modals
  setModalDisplay(MAIL_TYPE, "none");
  setModalDisplay(TEL_TYPE, "none");

  // remove listener keyDown
  document.removeEventListener("keydown", mailgoKeydown);
};

// is the mailgo modal hidden?
const mailgoIsShowing = (type = MAIL_TYPE): boolean => {
  return getModalDisplay(type) === "flex";
};

const byElement = (): HTMLLinkElement => {
  // by
  let by: HTMLLinkElement = createElement(aHTMLTag) as HTMLLinkElement;
  by.href = "https://mailgo.dev?ref=mailgo-modal";
  by.className = "m-by";
  by.target = "_blank";
  by.rel = "noopener noreferrer";
  by.appendChild(createTextNode("mailgo.dev"));

  return by;
};

// create element
const createElement = (element: string = "div"): HTMLElement =>
  document.createElement(element);

// create text node
const createTextNode = (element: string): Text =>
  document.createTextNode(element);

// decrypt email
const mailToEncoded = (encoded: string): string =>
  (window.location.href = MAILTO + atob(encoded));

// encode email
const encodeEmail = (email: string): string => btoa(email);

// get the correct HTMLElement from a type
const getModalHTMLElement = (type: string = MAIL_TYPE) =>
  type === TEL_TYPE ? modalTel : modalMailto;

// get display value
const getModalDisplay = (ref: string = MAIL_TYPE): string =>
  getModalHTMLElement(ref).style.display;

// set display value
const setModalDisplay = (ref: string = MAIL_TYPE, value: string): void => {
  let modal = getModalHTMLElement(ref);
  modal.style.display = value;

  if (value === "flex") {
    // "save" the activated link.
    activatedLink = document.activeElement as HTMLElement;
    modal.setAttribute("aria-hidden", "false");

    // Focus on the modal container.
    modal.setAttribute("tabindex", "0");
    modal.focus();
    setFocusLoop(modal);
  } else {
    modal.setAttribute("aria-hidden", "true");

    // focus back the activated link for getting back to the context.
    modal.setAttribute("tabindex", "-1");
    activatedLink.focus();
  }
};

// set focus loop within modal
const setFocusLoop = (ref: HTMLElement): void => {
  let modal = ref;
  modal
    .querySelector(".m-modal-content a:last-of-type")
    .addEventListener("keydown", leaveLastLink);
  modal
    .querySelector(".m-modal-content a:first-of-type")
    .addEventListener("keydown", leaveFirstLink);
};

const leaveLastLink = (e: KeyboardEvent): void => {
  // going back to the first link to force looping
  if (e.code === "Tab" && e.shiftKey === false) {
    e.preventDefault();

    ((e.target as HTMLElement)
      .closest("div")
      .querySelector("a:first-of-type") as HTMLElement).focus();
  }
};

const leaveFirstLink = (e: KeyboardEvent): void => {
  // going back to the first link to force looping
  if (e.code === "Tab" && e.shiftKey === true) {
    e.preventDefault();
    ((e.target as HTMLElement)
      .closest("div")
      .querySelector("a:last-of-type") as HTMLElement).focus();
  }
};

// enable dark mode
const enableDarkMode = (type: string = MAIL_TYPE) =>
  getModalHTMLElement(type).classList.add("m-dark");

// disable dark mode
const disableDarkMode = (type: string = MAIL_TYPE) =>
  getModalHTMLElement(type).classList.remove("m-dark");

// custom composedPath if path or event.composedPath() are not defined
const composedPath = (
  el: HTMLElement
): (HTMLElement | Document | (Window & typeof globalThis))[] => {
  let path = [];

  while (el) {
    path.push(el);

    if (el.tagName === "HTML") {
      path.push(document);
      path.push(window);
      return path;
    }

    el = el.parentElement;
  }
};

// validate a single email with regex
const validateEmail = (email: string): boolean =>
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );

// validate an array of emails
const validateEmails = (arr: string[]): boolean => arr.every(validateEmail);

// validate a single tel with regex
const validateTel = (tel: string): boolean =>
  /^[+]{0,1}[\s0-9]{0,}[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(tel);

// copy of a string
const copyToClipboard = (str: string): boolean => {
  let el: HTMLInputElement = createElement("textarea") as HTMLInputElement;
  el.value = str;
  el.setAttribute("readonly", "");
  el.style.position = "absolute";
  el.style.left = "-9999px";
  document.body.appendChild(el);
  let selected: Range | boolean =
    document.getSelection().rangeCount > 0
      ? document.getSelection().getRangeAt(0)
      : false;
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
  if (selected) {
    document.getSelection().removeAllRanges();
    document.getSelection().addRange(selected);
    return true;
  }
  return false;
};

const mailgoStyle = (): void => {
  // mailgo style
  let mailgoCSSElement: HTMLStyleElement = createElement(
    "style"
  ) as HTMLStyleElement;
  mailgoCSSElement.id = "mailgo-style";
  mailgoCSSElement.type = "text/css";
  mailgoCSSElement.appendChild(createTextNode(mailgoCSS));
  document.head.appendChild(mailgoCSSElement);
};

// mailgo
function mailgo(mailgoConfig?: MailgoConfig): void {
  // set the global config
  config = mailgoConfig;

  // if the window is defined...
  if (window && typeof window !== "undefined") {
    // add the style for mailgo
    mailgoStyle();

    // if is set an initEvent add the listener
    if (config?.initEvent) {
      if (config?.listenerOptions) {
        // listener options specified
        document.addEventListener(
          config.initEvent,
          () => {
            mailgoInit();
          },
          config.listenerOptions
        );
      } else {
        // no listener options
        document.addEventListener(config.initEvent, () => {
          mailgoInit();
        });
      }
    } else {
      mailgoInit();
    }
  }
}

export default mailgo;
