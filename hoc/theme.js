import { ThemeProvider } from "@/context/theme-provider";

function withDynamicThemeContext(Component) {
  function WithWrapped(props) {
    return (
      <ThemeProvider>
        <Component {...props} />
      </ThemeProvider>
    );
  }
  return WithWrapped;
}

export default withDynamicThemeContext;
