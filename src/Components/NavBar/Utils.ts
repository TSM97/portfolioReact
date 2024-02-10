export const handleEmailButtonClick = () => {
  const recipient = "gtsamadias@hotmail.com"; // Specify the email address of the recipient
  const subject =
    "Invitation to Interview: [Job Title] Position at [Company Name]";
  const body = `"Upon reviewing your bio, it appears to be quite commendable, So.... / Upon reviewing your bio, it seems to be somewhat average, BUT!..."`;

  const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  window.location.href = mailtoLink;
};
