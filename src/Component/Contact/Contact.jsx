import HomeContact from "../Home/HomeContact/HomeContact";

const Contact = () => {
  const title = document.getElementById("title");

  title.innerText = "Contact";
  return <HomeContact contactProps="contact"></HomeContact>;
};

export default Contact;
