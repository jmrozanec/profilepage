function loadcontent(){
    initi18n();
    var refresh = function(user){
            loadnav(user);
            loaddocuments(user, 1, 10);
            loadfooter(user);
        }
    execauthenticated(refresh, {});
}

function initi18n(){
    $(document).ready(function () {
        i18n.init({
            "lng": 'si',
            "fallbackLng" : 'en'
        }, function (t) {
            $(document).i18n();
        });

        $('.lang').click(function () {
            var lang = $(this).attr('data-lang');
            i18n.init({
                lng: lang
            }, function (t) {
                $(document).i18n();
            });
        });
    });
}