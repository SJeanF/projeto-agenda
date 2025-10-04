import { useDispatch, useSelector } from "react-redux";
import * as S from "./styles";
import { useEffect } from "react";
import { deactiveNotification } from "../../redux/notificationPopUpReducer/notificationPopUpSlice";

const NotificationPopUp = () => {
  const notificationInfos = useSelector((state) => state.notification);

  const dispatch = useDispatch();

  useEffect(() => {
    if (notificationInfos.active) {
      setTimeout(() => {
        dispatch(deactiveNotification());
      }, 1500);
    }
  }, [notificationInfos, dispatch]);

  return (
    <S.Notification $isActive={notificationInfos.active}>
      <S.Message>{notificationInfos.message}</S.Message>
    </S.Notification>
  );
};

export default NotificationPopUp;
