import React from 'react';

const useNotification = (title, options) => {
  if (!('Notification' in window)) {
    return;
  }

  const fireNotif = () => {
    if (Notification.permission !== 'granted') {
      if (Notification.permission !== 'denied') {
        Notification.requestPermission().then(permission => {
          if (permission === 'granted') {
            new Notification(title, options);
          } else {
            return;
          }
        });
      } else {
        return;
      }
    } else {
      new Notification(title, options);
    }
  };

  return fireNotif;
};

function Notification() {
  const triggerNotif = useNotification('Can I steel your kimchi');
  return (
    <div>
      <h2>UseNotification</h2>
      <button onClick={triggerNotif}>어디보자</button>
    </div>
  );
}

export default Notification;
