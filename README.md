# cta_logger
A custom WordPress plugin that tracks and logs CTA clicks via AJAX, storing data in the backend and integrating with Google Analytics 4.

Overview
The CTA Logger Plugin is a custom WordPress plugin that tracks and logs clicks on marketing campaign CTAs. It captures user interactions, logs them in the WordPress backend, and integrates with Google Analytics 4 (GA4) for advanced tracking. The plugin uses AJAX-based logging to ensure seamless performance without page reloads.

Features
📌 Tracks CTA Clicks – Detects and logs clicks on elements with dms_cta class names.
🚀 AJAX-Based Logging – Ensures smooth tracking without page refreshes.
📊 Google Analytics 4 Integration – Sends event data to GA4 for engagement insights.
🔍 Debugging Tools – Includes console logs for easy troubleshooting.
🛠 WordPress Backend Logging – Stores click data for analysis.
Installation
Download the Plugin: Clone this repository or download the ZIP file.
Upload to WordPress: Go to Plugins > Add New in your WordPress admin panel and upload the ZIP file.
Activate the Plugin: Once installed, activate the plugin from the WordPress dashboard.
Ensure CTA Markup: Add dms_cta class to elements you want to track.
Usage
The plugin automatically listens for clicks on elements with classes starting with dms_cta.
Logs click events in the WordPress backend and Google Analytics 4.
Uses AJAX requests to ensure non-intrusive tracking.
Technical Details
Frontend: JavaScript (Event Listeners, Fetch API, Console Logging)
Backend: PHP (AJAX Handler, Database Logging)
Analytics: Google Analytics 4 (gtag.js)
Compatibility: WordPress 5.5+
Contributing
Contributions are welcome! Feel free to submit issues or pull requests to enhance the plugin.

License
This project is licensed under the MIT License – feel free to modify and use it.

Author
👤 Haroon Awan
💼 Web Developer | WordPress Expert | GA4 Integration Specialist

🚀 Happy Tracking!
