import { useState, useContext } from "react";
import NotificationModal from "./components/NotificationModal";
import ControlledForm from "./components/ControlledForm";
import UncontrolledForm from "./components/UncontrolledForm";
import CrashComponent from "./components/CrashComponent";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { ThemeContext } from "./components/ThemeContext";

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [crashApp, setCrashApp] = useState(false);

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`app-container ${theme}`}>
      <h1>DAY 3 - Notification & User Settings App</h1>

      <button onClick={toggleTheme}>Toggle Theme</button>
      <br /><br />

      <button onClick={() => setShowModal(true)}>Show Notification</button>

      {showModal && <NotificationModal onClose={() => setShowModal(false)} />}

      <hr />

      <ControlledForm />

      <hr />

      <UncontrolledForm />

      <hr />

      <ErrorBoundary>
        {crashApp && <CrashComponent />}
      </ErrorBoundary>

      <button onClick={() => setCrashApp(true)}>Crash App</button>
    </div>
  );
}
