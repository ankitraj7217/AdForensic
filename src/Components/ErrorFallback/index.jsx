const ErrorFallback = ({ error }) => {
  // Call resetErrorBoundary() to reset the error boundary and retry the render.

const _onResetClick = () => {
    window.location.reload();
}

  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
      <button onClick={_onResetClick}>Try Again!</button>
    </div>
  );
};

export default ErrorFallback;
