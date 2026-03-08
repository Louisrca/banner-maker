export function inactivityTimeout(callback?: () => void) {
  let timer: ReturnType<typeof setTimeout>;
  const IDLE_TIMEOUT = 30000;

  const resetTimer = () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      console.log(
        "User has been inactive for 30 seconds. Refreshing the page.",
      );
      callback?.();
    }, IDLE_TIMEOUT);
  };

  window.onload = resetTimer;
  document.onmousemove = resetTimer;
  document.onmousedown = resetTimer;
  document.onscroll = resetTimer;
}
