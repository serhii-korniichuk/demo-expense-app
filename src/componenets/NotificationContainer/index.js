import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeNotifications } from "../../redux/actions";
import { Notification, CloseButton } from "./style";

export const NotificationContainer = () => {
  const dispatch = useDispatch();
  const { notifications } = useSelector((state) => state);

  const removeNotification = (i) => {
    const newNotifications = [...notifications];
    newNotifications.splice(i, 1);
    dispatch(changeNotifications(newNotifications));
  };

  return (
    <>
      {notifications.map((notification, i) => {
        return (
          <Notification key={notification.key} top={i} type={notification.type}>
            {notification.type === "error" && (
              <i className="fas fa-exclamation-circle" />
            )}
            {notification.text}
            <CloseButton
              onClick={() => removeNotification(i)}
              type={notification.type}
            >
              <i className="fas fa-times" />
            </CloseButton>
          </Notification>
        );
      })}
    </>
  );
};
