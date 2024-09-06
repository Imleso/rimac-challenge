import "./buttonCircule.scss";

interface ButtonCirculeProps {
  isActive: boolean;
}

const ButtonCircule = ({ isActive = true}: ButtonCirculeProps) => {
  return (
    <>
      {isActive && (
        <button className="buttonCircule-active">
          <svg
            width="5"
            height="8"
            viewBox="0 0 5 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.553173 3.99995L3.80942 0.746826L4.69067 1.62808L2.32192 3.99995L4.69067 6.37183L3.80942 7.25308L0.553173 3.99995Z"
              fill="#4F4FFF"
            />
          </svg>
        </button>
      )}
      {!isActive && (
        <button className="buttonCircule">
          <svg
            width="6"
            height="8"
            viewBox="0 0 6 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.97146 7.90369L0.0639648 3.99994L3.97146 0.0961914L5.02897 1.15369L2.18647 3.99994L5.02897 6.84619L3.97146 7.90369Z"
              fill="#A9AFD9"
            />
          </svg>
        </button>
      )}
    </>
  );
};

export default ButtonCircule;
