# react-useDocumentVisibility

React hook that:

1. Determines if the browser tab is currently active.
2. Tracks how many times the tab has become inactive since the component's initialization.
3. Provides a function to subscribe to changes in the activity of the current tab.

## Installation

Via package manager:

```
npm i @milya505/react-usedocumentvisibility
```

## Usage

---

```jsx
import React from "react";
import { useDocumentVisibility } from "@milya505/react-usedocumentvisibility";

const LeaveTabCounter = () => {
  const { count, visible, onVisibilityChange } = useDocumentVisibility();

  useEffect(() => {
    onVisibilityChange((isVisible) => {
      console.log("first handler", isVisible);
    });

    const unsubscribeSecondHandler = onVisibilityChange((isVisible) => {
      console.log("second handler", isVisible);
    });

    setTimeout(() => unsubscribeSecondHandler(), 5000);
  }, []);

  return (
    <div>
      <span>
        Вы покинули страницу: {count} раз Вкладка активна?{" "}
        {visible ? "да" : "нет"}
      </span>
    </div>
  );
};
```
