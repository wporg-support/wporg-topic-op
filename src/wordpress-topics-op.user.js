// ==UserScript==
// @name         WordPress.org Topics OP
// @namespace    https://www.clorith.net
// @version      0.1.1
// @description  Mark topic OP on their replies for easy recognition.
// @author       Clorith
// @match        https://wordpress.org/support/topic/*
// @match        https://*.wordpress.org/support/topic/*
// @updateURL    https://github.com/wporg-support/topic-op/raw/master/src/wordpress-topics-op.user.js
// @downloadURL  https://github.com/wporg-support/topic-op/raw/master/src/wordpress-topics-op.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var op_topic,
        replies,
        username,
        reply_username,
        op_block = "<span style='background-color: #3383fb; color: #fff; padding: 2px 6px; border-radius: 6px; margin-left: 10px;'>OP</span>";

    op_topic = document.getElementsByClassName( 'bbp-lead-topic' )[0];
    username = op_topic.getElementsByClassName( 'bbp-user-nicename' )[0].innerHTML;

    replies = document.querySelectorAll( '.reply' );

    replies.forEach( function( element ) {
        reply_username = element.getElementsByClassName( 'bbp-user-nicename' );

        if ( reply_username[0].innerHTML !== username ) {
            return;
        }

        reply_username[0].innerHTML = reply_username[0].innerHTML + op_block;
    } );
})();
