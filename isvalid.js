        isValid = {
            Time: function(timeString){
                var explodedTime = timeString.split(':');
                var h = explodedTime[0];
                var m = explodedTime[1];
                _isValidHour = ((parseInt(h) >= 0) && (parseInt(h) <= 23));
                _isValidMinutes = ((parseInt(m) >= 0) && (parseInt(m) <= 59));
                _isValidTime = (_isValidHour && _isValidMinutes);
                return _isValidTime;
            },
        }