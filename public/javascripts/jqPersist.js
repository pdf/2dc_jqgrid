/*
 * jqPersist - Extension to jqGrid to persist paramData in localStorage 
 * see: http://dev.w3.org/html5/webstorage/
 *
 * Copyright (c) 2010 Petrica Ghiurca <petrica@ghiurca.net>, http://petrica.ghiurca.net
 * Licensed under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 */

var persistGridState = function(postData) {
    if (localStorage) {
        var key = 'jqGrid-' + this.id;
        if (!this.p.pageLoaded) {
            for (var i = 0; i < localStorage.length; i++) {
                var localKey = localStorage.key(i);
                if (localKey.substr(key)) {
                    var paramKey = localKey.replace(key, '');
                    postData[paramKey] = localStorage[localKey]
                }
            }
            this.p.pageLoaded = true;
        } else {
            for (var e in postData) {
                localStorage[key + e] = postData[e];
            }
        }
    }
    return postData;
}