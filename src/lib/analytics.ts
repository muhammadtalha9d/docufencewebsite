// src/lib/analytics.ts

declare global {
    interface Window {
        dataLayer: Record<string, any>[];
    }
}

/**
 * Fires a distinct, explicitly-named event to DataLayer & GA4
 * @param eventName Explicit name like "hero_book_a_call_press" or "product_explore_press"
 * @param additionalParams Optional extra context like document ID or search term
 */
export function trackEvent(eventName: string, additionalParams: Record<string, any> = {}) {
    if (typeof window === "undefined") return;

    const formattedEventName = `PW | ${eventName}`;

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        event: formattedEventName,
        ...additionalParams,
    });

    if (process.env.NODE_ENV === "development") {
        console.log("[Analytics Event Fired]:", formattedEventName, additionalParams);
    }
}