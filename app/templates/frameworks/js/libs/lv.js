// moment.js locale configuration
// locale : latvian (lv)
// author : Kristaps Karlsons : https://github.com/skakri

(function(factory) {
    if (typeof define === 'function' && define.amd) {
        define(['moment'], factory); // AMD
    } else if (typeof exports === 'object') {
        module.exports = factory(require('../moment')); // Node
    } else {
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
    }
}(function(moment) {
    var units = {
        'mm': 'minūti_minūtēm_minūte_minūtes',
        'hh': 'stundu_stundām_stunda_stundas',
        'dd': 'dienu_dienām_diena_dienas',
        'MM': 'mēnesi_mēnešiem_mēnesis_mēneši',
        'yy': 'gadu_gadiem_gads_gadi'
    };

    function format(word, number, withoutSuffix) {
        var forms = word.split('_');
        if (withoutSuffix) {
            return number % 10 === 1 && number !== 11 ? forms[2] : forms[3];
        } else {
            return number % 10 === 1 && number !== 11 ? forms[0] : forms[1];
        }
    }

    function relativeTimeWithPlural(number, withoutSuffix, key) {
        return number + ' ' + format(units[key], number, withoutSuffix);
    }

    return moment.defineLocale('lv', {
        months: 'janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris'.split('_'),
        monthsShort: 'jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec'.split('_'),
        weekdays: 'svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena'.split('_'),
        weekdaysShort: 'Sv_P_O_T_C_Pk_S'.split('_'),
        weekdaysMin: 'Sv_P_O_T_C_Pk_S'.split('_'),
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'LT:ss',
            L: 'DD.MM.YYYY',
            LL: 'YYYY. [gada] D. MMMM',
            LLL: 'YYYY. [gada] D. MMMM, LT',
            LLLL: 'YYYY. [gada] D. MMMM, dddd, LT'
        },
        calendar: {
            sameDay: '[Šodien pulksten] LT',
            nextDay: '[Rīt pulksten] LT',
            nextWeek: 'dddd [pulksten] LT',
            lastDay: '[Vakar pulksten] LT',
            lastWeek: '[Pagājušā] dddd [pulksten] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: '%s vēlāk',
            past: 'pirms %s',
            s: 'dažas sekundes',
            m: 'minūtes',
            mm: relativeTimeWithPlural,
            h: 'stundas',
            hh: relativeTimeWithPlural,
            d: 'dienas',
            dd: relativeTimeWithPlural,
            M: 'mēnešiem',
            MM: relativeTimeWithPlural,
            y: 'gada',
            yy: relativeTimeWithPlural
        },
        ordinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
            dow: 1, // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        }
    });
}));