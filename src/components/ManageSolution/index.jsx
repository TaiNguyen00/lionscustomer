import style from "./ManageSolution.module.scss";
import clsx from "clsx";

const ManageSolution = () => {
  const solution = [
    {
      title: "Giải pháp quản lý khách sạn hàng đầu",
      options: [
        { option: "Quản lý khách sạn của bạn ở mọi nơi." },
        { option: "Tối ưu hóa quy trình làm việc của bạn." },
        { option: "Quản lý khách sạn đã không bao giờ dễ dàng đến thế." },
        { option: "Sáng tạo để Quản lý Khách sạn hiệu quả." },
        {
          option: "Là đối tác của bạn trong việc xây dựng Khách sạn hoàn hảo.",
        },
      ],
    },
  ];
  return (
    <div className={clsx(style.manage_wrapper)}>
      <div className={clsx(style.wrapper_content)}>
        <div className={clsx(style.left_content)}>
          <div className={clsx(style.content)}>
            {solution.map((item) => (
              <>
                <h2>{item.title}</h2>
                <ul>
                  {item.options.map((option) => (
                    <>
                      <li>{option.option}</li>
                    </>
                  ))}
                </ul>
              </>
            ))}
          </div>
        </div>
        <div className={clsx(style.right_content)}></div>
      </div>
    </div>
  );
};

export default ManageSolution;
