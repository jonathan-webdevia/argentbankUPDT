import "../../utils/style/accountCard.css";

const AccountCard = ({ title, amount, description }) => {
  return (
    <div className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{title}</h3>
        <h1 className="account-amount">$ {amount}</h1>
        <p className="account-amount-description">{description}</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </div>
  );
};

export default AccountCard;
