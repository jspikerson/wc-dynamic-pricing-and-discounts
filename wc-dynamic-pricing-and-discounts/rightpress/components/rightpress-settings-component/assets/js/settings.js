/**
 * RightPress Settings Scripts
 */

jQuery(document).ready(function() {

    'use strict';

    if (typeof rp_wcdpd_datetimepicker_locale !== 'undefined' && jQuery.datetimepicker && jQuery.datetimepicker.setLocale) {
        jQuery.datetimepicker.setLocale(rp_wcdpd_datetimepicker_locale.x);
    }

});
