import clsx from "clsx";
import styles from './Room.module.scss';
import cbd from '../../assets/images/8.png';
import cbrd from '../../assets/images/9.png';
import dor from '../../assets/images/10.png';
import phongchua from '../../assets/images/100.png';
import phongdang from '../../assets/images/101.png';
import phongsach from '../../assets/images/102.png';

const RoomInfo = () => {

    const roomData =
    {
        floor: "1",
        state: 'Chuẩn bị đến',
        condition: 'Phòng sạch',
        roomcode: '001',
        type: 'Thường'
    }



    // Hàm để hiển thị biểu tượng cho trường state và condition
    const renderStateIcon = () => {
        switch (roomData.state) {
            case 'Chuẩn bị đến':
                return <img src={cbd} alt="Chuẩn bị đến" />;
            case 'Đang ở':
                return <img src={dor} alt="Đang ở" />;
            case 'Chuẩn bị rời đi':
                return <img src={cbrd} alt="Chuẩn bị rời đi" />;
            default:
                return roomData.state;
        }
    };

    const renderConditionIcon = () => {
        switch (roomData.condition) {
            case 'Phòng sạch':
                return <img src={phongsach} alt="Phòng sạch" />;
            case 'Phòng chưa vệ sinh':
                return <img src={phongchua} alt="Phòng chưa vệ sinh" />;
            case 'Phòng đang vệ sinh':
                return <img src={phongdang} alt="Phòng đang vệ sinh" />;
            default:
                return roomData.condition;
        }
    };

    return (
        <div className={clsx(styles.container)} >
            <h2>Thông tin phòng</h2>
            <div className={clsx(styles.room)}>
                <div className={clsx(styles.row)}>
                    <p>{renderConditionIcon()}</p>
                    <p>{renderStateIcon()}</p>
                </div>
                <h3>{roomData.roomcode}</h3>
                <h3>{roomData.type}</h3>
            </div>
        </div >
    );
};

export default RoomInfo;