import React from "react";

function ExtensionSetup() {
  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "50px auto",
        padding: "20px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <div
        style={{
          background: "#ffffff",
          borderRadius: "12px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          padding: "30px",
          transition: "transform 0.3s",
        }}
      >
        <h1 style={{ color: "#1a73e8", fontSize: "2rem", marginBottom: "20px" }}>
          🚀 Setup AI Email Writer Assistant
        </h1>

        <p style={{ fontSize: "1.1rem", marginBottom: "25px", color: "#333" }}>
          Quickly integrate the <strong>AI Email Writer Assistant</strong> into Gmail. Follow the steps below to manually install the extension and start generating professional email replies with ease.
        </p>

        <ol style={{ lineHeight: "2", marginTop: "10px", paddingLeft: "20px" }}>
          <li style={{ marginBottom: "20px" }}>
            <strong>Download the Extension:</strong>{" "}
            <a href="/email-writer-extension.zip" download>
              <button
                style={{
                  padding: "10px 18px",
                  background: "#34a853",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontWeight: "bold",
                  marginLeft: "10px",
                }}
              >
                ⬇️ Download ZIP
              </button>
            </a>
          </li>

          <li style={{ marginBottom: "20px" }}>
            <strong>Extract the Files:</strong> Unzip the downloaded folder. You should see:
            <div
              style={{
                background: "#f5f5f5",
                padding: "8px 12px",
                marginTop: "5px",
                borderRadius: "6px",
                display: "inline-block",
                fontFamily: "monospace",
              }}
            >
              manifest.json, content.js, content.css, icons/
            </div>
          </li>

          <li style={{ marginBottom: "20px" }}>
            <strong>Open Chrome Extensions Page:</strong> Go to{" "}
            <code style={{ background: "#f5f5f5", padding: "2px 6px", borderRadius: "4px" }}>
              chrome://extensions/
            </code>
          </li>

          <li style={{ marginBottom: "20px" }}>
            <strong>Enable Developer Mode:</strong> Toggle the switch in the top-right corner.
          </li>

          <li style={{ marginBottom: "20px" }}>
            <strong>Load Unpacked Extension:</strong> Click <strong>“Load unpacked”</strong> and select the extracted folder.
          </li>

          <li style={{ marginBottom: "20px" }}>
            <strong>Start Using:</strong> Open{" "}
            <a href="https://mail.google.com" target="_blank" rel="noreferrer" style={{ color: "#1a73e8" }}>
              Gmail
            </a>{" "}
            and compose a message. You will see a <strong>AI Reply</strong> button in the toolbar. Click it to generate professional email responses instantly.
          </li>
        </ol>

        <div
          style={{
            marginTop: "30px",
            padding: "20px",
            background: "#e8f0fe",
            borderLeft: "5px solid #1a73e8",
            borderRadius: "8px",
          }}
        >
          <h3 style={{ marginBottom: "10px", color: "#1a73e8" }}>💡 Notes & Tips</h3>
          <ul style={{ lineHeight: "1.8", color: "#333" }}>
            <li>The extension works only on <strong>Chrome</strong> or Chromium-based browsers (Edge, Brave, etc.).</li>
            <li>Once installed, the extension remains active even after restarting Chrome.</li>
            <li>When updating the extension, remove the old version first and load the new ZIP.</li>
            <li>Make sure Gmail is open in the same browser profile where the extension is installed.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ExtensionSetup;
