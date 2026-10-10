/**
 * Note: Hashes and tags are simulated presentation metadata
 * designed to provide an authentic retro Git CLI aesthetic in the terminal.
 * They do not represent real repository commits or Git tags.
 */

const MONTH_MAP = {
    jan: "01", january: "01",
    feb: "02", february: "02",
    mar: "03", march: "03",
    apr: "04", april: "04",
    may: "05",
    jun: "06", june: "06",
    jul: "07", july: "07",
    aug: "08", august: "08",
    sep: "09", sept: "09", september: "09",
    oct: "10", october: "10",
    nov: "11", november: "11",
    dec: "12", december: "12",
};

/**
 * Deterministic 7-character hexadecimal display hash generator
 * derived from stable career fields (id, role, organization, period).
 */
export function getSimulatedCommitHash(item) {
    const seed = `${item?.id || ""}:${item?.role || ""}:${item?.organization || ""}:${item?.period || ""}`;
    let hash = 0x811c9dc5;
    for (let i = 0; i < seed.length; i++) {
        hash ^= seed.charCodeAt(i);
        hash = Math.imul(hash, 0x01000193);
    }
    const unsigned = hash >>> 0;
    return unsigned.toString(16).padStart(8, "0").slice(0, 7);
}

/**
 * Deterministic career tag generator in career-YYYY.MM format.
 * If careerData does not provide a reliably parseable structured date,
 * uses a centralized fallback derivation based on index.
 */
export function getSimulatedCareerTag(item, index = 0) {
    if (item?.tag) {
        return item.tag;
    }
    const period = String(item?.period || "");
    const yearMatch = period.match(/\b(19\d\d|20\d\d)\b/);
    const monthMatch = period.match(
        /\b(jan(?:uary)?|feb(?:ruary)?|mar(?:ch)?|apr(?:il)?|may|jun(?:e)?|jul(?:y)?|aug(?:ust)?|sep(?:tember)?|oct(?:ober)?|nov(?:ember)?|dec(?:ember)?)\b/i,
    );

    if (yearMatch) {
        const year = yearMatch[1];
        let month = "01";
        if (monthMatch) {
            const matchedKey = monthMatch[1].toLowerCase();
            month = MONTH_MAP[matchedKey] || "01";
        }
        return `career-${year}.${month}`;
    }

    // Centralized deterministic fallback when no 4-digit year is extractable
    const fallbackYear = 2024 + index;
    return `career-${fallbackYear}.01`;
}
