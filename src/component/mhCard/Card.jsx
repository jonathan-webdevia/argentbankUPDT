import iconchat from "../../assets/icon-chat.png";
import iconmoney from "../../assets/icon-money.png";
import iconsecurity from "../../assets/icon-security.png";

const ICON_BY_TYPE = {
  chat: iconchat,
  money: iconmoney,
  security: iconsecurity,
};

const TXT_BY_TYPE = {
  chat: [
    {
      title: "You are our #1 priority",
      txt: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
    },
  ],
  money: [
    {
      title: "More savings means higher rates",
      txt: "The more you save with us, the higher your interest rate will be!",
    },
  ],
  security: [
    {
      title: "Security you can trust",
      txt: "we use top line encryption to make sure your data and money is always safe.",
    },
  ],
};

const Card = ({ type }) => {
  return (
    <div className="feature-item">
      <img src={ICON_BY_TYPE[type]} alt="Chat Icon" className="feature-icon" />
      <h3 className="feature-item-title">{TXT_BY_TYPE[type][0].title}</h3>
      <p>{TXT_BY_TYPE[type][0].txt}</p>
    </div>
  );
};

export default Card;

/**
 * https://redux.js.org/api/combinereducers
 */
