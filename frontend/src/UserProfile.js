import './App.css';

var UserProfile = (function() {
    var type = "not_logged";

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