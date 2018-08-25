/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 * Positions: top_bar, top_left, top_center, top_right, upper_third, middle_center, lower_third, bottom_left, bottom_center, bottom_right, bottom_bar, fullscreen_above
 *
 */

var config = {
    address : '0.0.0.0', // Address to listen on, can be:
    // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
    // - another specific IPv4/6 to listen on a specific interface
    // - "", "0.0.0.0", "::" to listen on any interface
    // Default, when address config is left out, is "localhost"
    port: 8080,
    ipWhitelist: [], // Set [] to allow all IP addresses
    // or add a specific IPv4 of 192.168.1.5 :
    // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
    // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
    // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

    language: "en",
    timeFormat: 12,
    units: "imperial",

    modules: [{
            module: "alert",
        },
        {
            module: "updatenotification",
            position: "top_bar"
        },
        {
            module: 'MMM-PIR-Sensor',
            config: {
                sensorPin: 4,
                powerSavingDelay: 30
                // See 'Configuration options' for more information.
            }
        },
        {
            module: 'MMM-Remote-Control'
        },
        {
            module: "clock",
            position: "top_left",
            clockBold: true,
            timezone: "America/Los_Angeles"
        },
        {
            module: 'worldclock',
            position: 'top_left', // This can be any of the regions, best results in top_left or top_right regions
            config: {
                // See 'Configuration options' for more information.
                timeFormat: 'HH:mm A', //defined in moment.js format()
                style: 'top', //predefined 4 styles; 'top', 'left','right','bottom'
                clocks: [
                    {
                        title: "Hawaii",
                        timezone: "Pacific/Honolulu",
                        flag: "us",
                    },
                    {
                        title: "Malaysia",
                        timezone: "Asia/Kuala_Lumpur",
                        flag: "my",
                    },
                    {
                        title: "New Zealand",
                        timezone: "Pacific/Auckland",
                        flag: "nz",
                    },
                ]
            }
        },
        {
            module: "calendar",
            position: "top_left",
            classes: ["calendar"],
            config: {
                displaySymbol: false,
                maximumEntries: 20,
                hideOngoing: true,
                calendars: [
                    {
                        symbol: "school",
                        color: "#00ff90",
                        maximumEntries: 1,
                        url: "https://calendar.google.com/calendar/ical/palycalendar%40gmail.com/public/basic.ics"
                    },
                    {
                        symbol: "person",
                        color: "#bfe6ff",
                        url: // url of my calendar,
                    },
                    {
                        url: // url of my calendar,
                    },
                    {
                        url: "webcal://www.calendarlabs.com/templates/ical/US-Holidays.ics"
                    },
                ]
            }
        },
        {
            module: 'MMM-darksky-hourly',
            position: 'top_right',  // This can be any of the regions.
            classes: ["small"],
            config: {
              // See 'Configuration options' for more information.
              apiKey: '', // Dark Sky API key.
              latitude:   37.4513230,
              longitude: -122.1315130,
              twentyFourHourTime: false,
              maxHoursForecast: 6
            }
        },
        {
            module: "MMM-NowPlayingOnSpotify",
            position: "top_right",
            classes: ["spotify"],
            config: {
                showCoverArt: true,
                clientID: '',
                clientSecret: '',
                accessToken: '',
                refreshToken: ''
            }
        },
        {
           module: 'MMM-History',
           position: 'top_right',
           classes: ["small"], 
           config: {
                maxWidth: "300px"  // Increase to maximum px or 100% to stretch across mirror. See Examples above.
            }
        },
        // {
        // 	module: 'DailyXKCD',
        // 	position: 'bottom_right',
        // 	config: {
        // 		invertColors: true,
        // 		showTitle: true,
        // 		titleFont: "medium light bright",
        // 		showAltText: false,
        // 		updateInterval: 600000,
        // 		randomComic: true,
        // 		limitComicHeight: 300,
        // 	}
        // 	},
    ]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") { module.exports = config; }