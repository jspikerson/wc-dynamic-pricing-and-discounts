# WooCommerce Dynamic Pricing & Discounts

## Summary
- Maintained plugin without altering original functionality.
- Removed non-functional update/licensing mechanisms and broken external links.
- Strengthened compatibility: PHP 8.2+, WooCommerce HPOS.
- Updated metadata: WP tested 6.9; WC requires 9.0; WC tested 10.4.3.
- Assets update: Select2 updated to 4.1.0-rc.0 via CDN; jQuery UI CSS remains 1.13.2.
- UX: removed “Loading user interface” preloader on settings pages to prevent flickering.
- PHP 8.2 compatibility: avoid deprecation notices (string cast in `htmlspecialchars`), translations loading moved to the `init` hook, settings initialization also moved to `init`.
- Visual tweaks:
  - Inputs and selects on settings pages are standardized to 34px height for visual consistency.
  - Textareas kept at 46px minimum height (two lines) by default.
  - Select2/selectWoo multiple: consistent visual alignment (container 34px; inline search margin tuned; choice chip vertical offset).
- Localization fixes: date/time dropdowns in Select2 now honor user locale in AJAX responses.
- Localization fixes: datetimepicker locale normalized with safer locale resolution.
- Select2 UX: added localized messages for “input too short” and “searching”.
- Translation bundles updated for RightPress and rp_wcdpd textdomains.

## Compatibility
- WordPress 6.5+ (tested up to 6.9)
- WooCommerce 9.0+ (tested up to 10.4.3)
- PHP 8.0+ (optimized for 8.2+)
- Declared HPOS compatibility


