import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children?: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ArgusDashboard ErrorBoundary caught an error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      return (
        <div style={{ padding: "20px", color: "#ff6b6b", background: "rgba(0,0,0,0.5)", borderRadius: "8px", margin: "10px" }}>
          <h2 style={{ fontSize: "16px", marginBottom: "8px" }}>⚠️ Error del Widget</h2>
          <p style={{ fontSize: "12px", opacity: 0.8 }}>Un componente falló al renderizar.</p>
          <pre style={{ fontSize: "10px", marginTop: "10px", whiteSpace: "pre-wrap", opacity: 0.6 }}>{this.state.error?.message}</pre>
        </div>
      );
    }

    return this.props.children;
  }
}
