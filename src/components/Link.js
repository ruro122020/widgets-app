import React from "react";

function Link({ href, className, children }) {
  const onClick = (event) => {
    //restores the ctrl + click = opens new tab feature
    //metaKey is for Mac
    //ctrlKey is for windows
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();
    //prevents a request from being made everytime the pathname changes
    window.history.pushState({}, "", href);

    //communicates to the route component that the URL has changed
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };
  return (
    <a onClick={onClick} className={className} href={href}>
      {children}
    </a>
  );
}

export default Link;
