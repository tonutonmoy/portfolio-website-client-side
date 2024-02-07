import github from "../../assets/logos/291716_github_logo_social network_social_icon.png";

const Github = () => {
  return (
    <div className="top-[50%] fixed right-0 mb-4 mr-4 z-10">
      <div>
        <a
          title="Follow me on Twitter"
          href="https://github.com/tonutonmoy"
          target="_blank"
          rel="noreferrer"
          className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
        >
          <img
            className="object-cover object-center w-full h-full rounded-full"
            src={github}
            alt="Twitter Logo"
          />
        </a>
      </div>
    </div>
  );
};

export default Github;
