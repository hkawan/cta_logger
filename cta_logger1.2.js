document.addEventListener("DOMContentLoaded", function () {
    // Attach click listeners to elements with classes starting with "dms_cta"
    function attachClickListeners() {
        const ctaElements = document.querySelectorAll('[class*="dms_cta"]');

        ctaElements.forEach((element) => {
            if (element.dataset.listenerAttached === "true") {
                return; // Skip if listener already attached
            }

            element.addEventListener("click", function () {
                const dmsClass = Array.from(element.classList).find((cls) =>
                    cls.startsWith("dms_cta")
                );

                if (!dmsClass) {
                    console.warn("No valid dms_cta class found.");
                    return;
                }

                console.log("Clicked:", dmsClass);

                // Log the click via AJAX
                fetch(dms_cta_ajax.ajax_url, {
                    method: "POST",
                    headers: { "Content-Type": "application/x-www-form-urlencoded" },
                    body: new URLSearchParams({
                        action: "dms_cta_log_click",
                        clicked_element: dmsClass,
                        nonce: dms_cta_ajax.nonce,
                    }),
                })
                    .then((response) => response.json())
                    .then((data) => {
                        if (data.success) {
                            console.log("Click logged successfully:", dmsClass);
                        } else {
                            console.error("Failed to log click:", data);
                        }
                    })
                    .catch((error) => {
                        console.error("AJAX error:", error);
                    });

                // Send click event to Google Analytics 4
                if (typeof gtag === "function") {
                    gtag("event", dmsClass, {
                        event_category: "engagement",
                        event_label: `Clicked: ${dmsClass}`,
                        value: 1,
                    });
                    console.log("GA4 event sent for:", dmsClass);
                } else {
                    console.warn("GA4 gtag function is not available.");
                }
            });

            // Mark this element as having a listener attached
            element.dataset.listenerAttached = "true";
        });
    }

    // Attach listeners to existing elements
    attachClickListeners();

    // Observe for dynamically added elements
    const observer = new MutationObserver(() => {
        attachClickListeners();
    });

    observer.observe(document.body, { childList: true, subtree: true });
});
