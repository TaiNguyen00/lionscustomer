import style from "./TeamContact.module.scss";
import clsx from "clsx";
const TeamContact = () => {
  return (
    <div className={clsx(style.contact_wrapper)}>
      <div className={clsx(style.wrapper_content)}>
        <div className={clsx(style.left_content)}>
          <div className={clsx(style.content)}>
            <h2>Đội ngũ sẵn sàng hỗ trợ tư vấn 24/7</h2>
            <p>Nhận sự hỗ trợ từ chúng tôi mọi lúc qua trò chuyện trực tiếp.</p>
          </div>
        </div>
        <div className={clsx(style.right_content)}>
          <div className={clsx(style.content)}></div>
        </div>
      </div>
    </div>
  );
};

export default TeamContact;
