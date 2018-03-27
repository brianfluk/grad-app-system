import React, { Component } from 'react';
import './App.css';

var UserProfile = (function() {
    var type = "";

    var getType = function() {
        return type;
    };

    var setType = function(user_type) {
        type = user_type;
    };

    return {
        getType: getType,
        setType: setType
    }
})();

export default UserProfile;