import { Switch, withStyles } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import { useGlobalContext } from "../../context";

function ModeSwitcher() {

    // Get global context for dark mode state
    const {darkMode, setDarkMode} = useGlobalContext()

    // Mode switcher from Material UI
    const ModeSwitch = withStyles({
        switchBase: {
          color: grey[50],
          "&$checked": {
            color: grey[900],
          },
          "&$checked + $track": {
            backgroundColor: grey[500],
          },
        },
        checked: {},
        track: {},
      })(Switch);

    // Return the swithcer component
    return (
        <div
        style={{ position: "absolute", top: 0, right: 15, paddingTop: 10 }}
      >
        <span>{darkMode ? "Dark" : "Light"} Mode</span>
        <ModeSwitch
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
        />
      </div>
    )
}

export default ModeSwitcher
