(function () {
    var c = {};
    function trans(e, f) {
        var g = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
        c[g[0x0]] = g;
        return '';
    }
    function regTextVar(h, i) {
        var j = ![];
        i = i['toLowerCase']();
        var k = function () {
            var t = this['get']('data');
            t['updateText'](t['translateObjs'][h]);
        };
        var l = function (u) {
            var v = u['data']['nextSelectedIndex'];
            if (v >= 0x0) {
                var w = u['source']['get']('items')[v];
                var x = function () {
                    w['unbind']('begin', x, this);
                    k['call'](this);
                };
                w['bind']('begin', x, this);
            } else
                k['call'](this);
        };
        var m = function (y) {
            return function (z) {
                if (y in z) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var n = function (A, B) {
            return function (C, D) {
                if (A == C && B in D) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var o = function (E, F, G) {
            for (var H = 0x0; H < E['length']; ++H) {
                var I = E[H];
                var J = I['get']('selectedIndex');
                if (J >= 0x0) {
                    var K = F['split']('.');
                    var L = I['get']('items')[J];
                    if (G !== undefined && !G['call'](this, L))
                        continue;
                    for (var M = 0x0; M < K['length']; ++M) {
                        if (L == undefined)
                            return '';
                        L = 'get' in L ? L['get'](K[M]) : L[K[M]];
                    }
                    return L;
                }
            }
            return '';
        };
        var p = function (N) {
            var O = N['get']('player');
            return O !== undefined && O['get']('viewerArea') == this['getMainViewer']();
        };
        switch (i) {
        case 'title':
        case 'subtitle':
            var r = function () {
                switch (i) {
                case 'title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                }
            }();
            if (r) {
                return function () {
                    var P = this['_getPlayListsWithViewer'](this['getMainViewer']());
                    if (!j) {
                        for (var Q = 0x0; Q < P['length']; ++Q) {
                            P[Q]['bind']('changing', l, this);
                        }
                        j = !![];
                    }
                    return o['call'](this, P, r, p);
                };
            }
            break;
        default:
            if (i['startsWith']('quiz.') && 'Quiz' in TDV) {
                var s = undefined;
                var r = function () {
                    switch (i) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var R = /quiz\.([\w_]+)\.(.+)/['exec'](i);
                        if (R !== undefined) {
                            s = R[0x1];
                            switch ('quiz.' + R[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (r) {
                    return function () {
                        var S = this['get']('data')['quiz'];
                        if (S) {
                            if (!j) {
                                if (s != undefined)
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, W[Y]['id'], r), this);
                                        }
                                    } else {
                                        S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, s, r), this);
                                    }
                                else
                                    S['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], m['call'](this, r), this);
                                j = !![];
                            }
                            try {
                                var a1 = 0x0;
                                if (s != undefined) {
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            a1 += S['getObjective'](W[Y]['id'], r);
                                        }
                                    } else {
                                        a1 = S['getObjective'](s, r);
                                    }
                                } else {
                                    a1 = S['get'](r);
                                    if (r == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        a1 += 0x1;
                                }
                                return a1;
                            } catch (a2) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return '';
    }
    function createQuizConfig(player, a3) {
        var a4 = {};
        a4['player'] = player;
        a4['playList'] = a3;
        function a5(a8) {
            for (var a9 = 0x0; a9 < a8['length']; ++a9) {
                var aa = a8[a9];
                if ('id' in aa)
                    player[aa['id']] = aa;
            }
        }
        if (a4['questions']) {
            a5(a4['questions']);
            for (var a6 = 0x0; a6 < a4['questions']['length']; ++a6) {
                var a7 = a4['questions'][a6];
                a5(a7['options']);
            }
        }
        if (a4['objectives']) {
            a5(a4['objectives']);
        }
        if (a4['califications']) {
            a5(a4['califications']);
        }
        if (a4['score']) {
            player[a4['score']['id']] = a4['score'];
        }
        if (a4['question']) {
            player[a4['question']['id']] = a4['question'];
        }
        if (a4['timeout']) {
            player[a4['timeout']['id']] = a4['timeout'];
        }
        player['get']('data')['translateObjs'] = c;
        return a4;
    }
    var d = {"contentOpaque":false,"start":"this.init()","mediaActivationMode":"window","backgroundOpacity":1,"gap":10,"paddingRight":0,"scrollBarColor":"#000000","data":{"name":"Player516","defaultLocale":"es","textToSpeechConfig":{"speechOnInfoWindow":false,"pitch":1,"speechOnQuizQuestion":false,"speechOnTooltip":false,"rate":1,"volume":1},"locales":{"es":"locale/es.txt"}},"paddingLeft":0,"horizontalAlign":"left","mouseWheelEnabled":true,"backgroundPreloadEnabled":true,"borderSize":0,"propagateClick":false,"backgroundColorRatios":[0],"mobileMipmappingEnabled":false,"layout":"absolute","width":"100%","scrollBarVisible":"rollOver","downloadEnabled":false,"borderRadius":0,"backgroundColor":["#333333"],"vrPolyfillScale":0.75,"id":"rootPlayer","class":"Player","height":"100%","backgroundColorDirection":"vertical","minHeight":20,"desktopMipmappingEnabled":false,"paddingTop":0,"definitions": [{"id":"panorama_C0A06154_CB82_A04B_418C_4D67E7B4E112_camera","class":"PanoramaCamera","initialSequence":"this.sequence_C08448D5_CB82_A075_41D8_38C518540167","initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"automaticZoomSpeed":10},{"id":"mainPlayList","class":"PlayList","items":[{"camera":"this.panorama_C01696A3_CB82_E0CC_41BE_20924946F873_camera","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_C01696A3_CB82_E0CC_41BE_20924946F873"},{"camera":"this.panorama_C0AF3DD1_CB82_E04C_41E1_4D138079670C_camera","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_C0AF3DD1_CB82_E04C_41E1_4D138079670C"},{"camera":"this.panorama_C0A06154_CB82_A04B_418C_4D67E7B4E112_camera","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 3)","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_C0A06154_CB82_A04B_418C_4D67E7B4E112"},{"camera":"this.panorama_C0A024C9_CB82_A05D_41D4_DB6BE767264E_camera","end":"this.trigger('tourEnded')","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 3, 0)","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_C0A024C9_CB82_A05D_41D4_DB6BE767264E"}]},{"id":"panorama_C0AF3DD1_CB82_E04C_41E1_4D138079670C","class":"Panorama","frames":[{"thumbnailUrl":"media/panorama_C0AF3DD1_CB82_E04C_41E1_4D138079670C_t.jpg","class":"CubicPanoramaFrame","cube":{"levels":[{"width":6144,"class":"TiledImageResourceLevel","height":1024,"tags":"ondemand","colCount":12,"rowCount":2,"url":"media/panorama_C0AF3DD1_CB82_E04C_41E1_4D138079670C_0/{face}/0/{row}_{column}.jpg"},{"width":3072,"class":"TiledImageResourceLevel","height":512,"tags":["ondemand","preload"],"colCount":6,"rowCount":1,"url":"media/panorama_C0AF3DD1_CB82_E04C_41E1_4D138079670C_0/{face}/1/{row}_{column}.jpg"},{"width":6144,"class":"TiledImageResourceLevel","height":1024,"tags":"mobilevr","colCount":6,"rowCount":1,"url":"media/panorama_C0AF3DD1_CB82_E04C_41E1_4D138079670C_0/{face}/vr/0.jpg"}],"class":"ImageResource"}}],"label":trans('panorama_C0AF3DD1_CB82_E04C_41E1_4D138079670C.label'),"thumbnailUrl":"media/panorama_C0AF3DD1_CB82_E04C_41E1_4D138079670C_t.jpg","vfov":180,"pitch":0,"adjacentPanoramas":[{"class":"AdjacentPanorama","distance":100,"backwardYaw":38.9,"yaw":-135.31,"select":"this.overlay_C444D8F5_CB86_A035_41E9_07220BD11C89.get('areas').forEach(function(a){ a.trigger('click') })","panorama":"this.panorama_C01696A3_CB82_E0CC_41BE_20924946F873"},{"class":"AdjacentPanorama","distance":100,"backwardYaw":-92.75,"yaw":-4.18,"select":"this.overlay_C7AE38B2_CB82_60CF_41DF_3997681F53C3.get('areas').forEach(function(a){ a.trigger('click') })","panorama":"this.panorama_C0A06154_CB82_A04B_418C_4D67E7B4E112"}],"hfov":360,"data":{"label":"Corredor"},"hfovMax":130,"partial":false,"hfovMin":"150%","overlays":["this.overlay_C444D8F5_CB86_A035_41E9_07220BD11C89","this.overlay_C7AE38B2_CB82_60CF_41DF_3997681F53C3"]},{"id":"panorama_C01696A3_CB82_E0CC_41BE_20924946F873","class":"Panorama","frames":[{"thumbnailUrl":"media/panorama_C01696A3_CB82_E0CC_41BE_20924946F873_t.jpg","class":"CubicPanoramaFrame","cube":{"levels":[{"width":6144,"class":"TiledImageResourceLevel","height":1024,"tags":"ondemand","colCount":12,"rowCount":2,"url":"media/panorama_C01696A3_CB82_E0CC_41BE_20924946F873_0/{face}/0/{row}_{column}.jpg"},{"width":3072,"class":"TiledImageResourceLevel","height":512,"tags":["ondemand","preload"],"colCount":6,"rowCount":1,"url":"media/panorama_C01696A3_CB82_E0CC_41BE_20924946F873_0/{face}/1/{row}_{column}.jpg"},{"width":6144,"class":"TiledImageResourceLevel","height":1024,"tags":"mobilevr","colCount":6,"rowCount":1,"url":"media/panorama_C01696A3_CB82_E0CC_41BE_20924946F873_0/{face}/vr/0.jpg"}],"class":"ImageResource"}}],"label":trans('panorama_C01696A3_CB82_E0CC_41BE_20924946F873.label'),"thumbnailUrl":"media/panorama_C01696A3_CB82_E0CC_41BE_20924946F873_t.jpg","vfov":180,"pitch":0,"adjacentPanoramas":[{"class":"AdjacentPanorama","distance":100,"backwardYaw":-135.31,"yaw":38.9,"select":"this.overlay_C73D47F0_CB86_604B_41A0_25BD23210B38.get('areas').forEach(function(a){ a.trigger('click') })","panorama":"this.panorama_C0AF3DD1_CB82_E04C_41E1_4D138079670C"}],"hfov":360,"data":{"label":"Sala"},"hfovMax":130,"partial":false,"hfovMin":"150%","overlays":["this.overlay_C73D47F0_CB86_604B_41A0_25BD23210B38"]},{"id":"panorama_C0AF3DD1_CB82_E04C_41E1_4D138079670C_camera","class":"PanoramaCamera","initialSequence":"this.sequence_C084A8D5_CB82_A075_41E0_CB5F2E660F21","initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"automaticZoomSpeed":10},{"id":"panorama_C0A06154_CB82_A04B_418C_4D67E7B4E112","class":"Panorama","frames":[{"thumbnailUrl":"media/panorama_C0A06154_CB82_A04B_418C_4D67E7B4E112_t.jpg","class":"CubicPanoramaFrame","cube":{"levels":[{"width":6144,"class":"TiledImageResourceLevel","height":1024,"tags":"ondemand","colCount":12,"rowCount":2,"url":"media/panorama_C0A06154_CB82_A04B_418C_4D67E7B4E112_0/{face}/0/{row}_{column}.jpg"},{"width":3072,"class":"TiledImageResourceLevel","height":512,"tags":["ondemand","preload"],"colCount":6,"rowCount":1,"url":"media/panorama_C0A06154_CB82_A04B_418C_4D67E7B4E112_0/{face}/1/{row}_{column}.jpg"},{"width":6144,"class":"TiledImageResourceLevel","height":1024,"tags":"mobilevr","colCount":6,"rowCount":1,"url":"media/panorama_C0A06154_CB82_A04B_418C_4D67E7B4E112_0/{face}/vr/0.jpg"}],"class":"ImageResource"}}],"label":trans('panorama_C0A06154_CB82_A04B_418C_4D67E7B4E112.label'),"thumbnailUrl":"media/panorama_C0A06154_CB82_A04B_418C_4D67E7B4E112_t.jpg","vfov":180,"pitch":0,"adjacentPanoramas":[{"class":"AdjacentPanorama","distance":100,"backwardYaw":-4.18,"yaw":-92.75,"select":"this.overlay_C7AA68B4_CB82_60CB_41C4_C9FA879D785F.get('areas').forEach(function(a){ a.trigger('click') })","panorama":"this.panorama_C0AF3DD1_CB82_E04C_41E1_4D138079670C"},{"class":"AdjacentPanorama","distance":100,"backwardYaw":-12,"yaw":-29.44,"select":"this.overlay_C7A4E54E_CB83_E057_41E8_783785D9226F.get('areas').forEach(function(a){ a.trigger('click') })","panorama":"this.panorama_C0A024C9_CB82_A05D_41D4_DB6BE767264E"}],"hfov":360,"data":{"label":"Cuarto vista 1"},"hfovMax":130,"partial":false,"hfovMin":"150%","overlays":["this.overlay_C7AA68B4_CB82_60CB_41C4_C9FA879D785F","this.overlay_C7A4E54E_CB83_E057_41E8_783785D9226F"]},{"surfaceReticleOpacity":0.6,"subtitlesBottom":50,"surfaceReticleColor":"#FFFFFF","toolTipTextShadowBlurRadius":3,"playbackBarHeadShadowOpacity":0.7,"toolTipFontWeight":"normal","playbackBarProgressBackgroundColor":["#3399FF"],"progressBackgroundColorDirection":"vertical","subtitlesPaddingRight":5,"toolTipShadowHorizontalLength":0,"playbackBarProgressBackgroundColorRatios":[0],"borderSize":0,"propagateClick":false,"playbackBarBorderColor":"#FFFFFF","progressBarBackgroundColor":["#3399FF"],"progressBorderColor":"#000000","toolTipBackgroundColor":"#F6F6F6","playbackBarBackgroundOpacity":1,"toolTipShadowOpacity":1,"playbackBarBorderRadius":0,"subtitlesFontWeight":"normal","progressBackgroundColor":["#FFFFFF"],"playbackBarHeadBorderRadius":0,"class":"ViewerArea","playbackBarProgressBorderColor":"#000000","surfaceReticleSelectionColor":"#FFFFFF","playbackBarProgressOpacity":1,"progressBarOpacity":1,"paddingTop":0,"surfaceReticleSelectionOpacity":1,"progressBottom":0,"vrPointerColor":"#FFFFFF","progressHeight":10,"playbackBarHeadBorderColor":"#000000","paddingBottom":0,"shadow":false,"progressBarBorderRadius":0,"playbackBarBorderSize":0,"progressBorderSize":0,"progressBarBorderSize":0,"subtitlesTextShadowVerticalLength":1,"playbackBarHeadShadowHorizontalLength":0,"toolTipShadowColor":"#333333","toolTipShadowBlurRadius":3,"toolTipPaddingLeft":6,"toolTipBorderRadius":3,"subtitlesTop":0,"toolTipBorderSize":1,"toolTipPaddingTop":4,"subtitlesTextShadowColor":"#000000","playbackBarHeadShadowBlurRadius":3,"paddingLeft":0,"subtitlesPaddingBottom":5,"toolTipTextShadowColor":"#000000","subtitlesFontSize":"3vmin","paddingRight":0,"playbackBarLeft":0,"toolTipFontFamily":"Arial","transitionMode":"blending","playbackBarHeadHeight":15,"subtitlesBackgroundOpacity":0.2,"subtitlesBorderColor":"#FFFFFF","toolTipFontStyle":"normal","subtitlesPaddingLeft":5,"playbackBarHeadBackgroundColorRatios":[0,1],"subtitlesTextShadowHorizontalLength":1,"playbackBarHeadShadowColor":"#000000","subtitlesTextDecoration":"none","playbackBarHeadBorderSize":0,"displayTooltipInTouchScreens":true,"toolTipFontSize":"1.11vmin","subtitlesTextShadowBlurRadius":0,"progressBackgroundOpacity":1,"toolTipTextShadowOpacity":0,"playbackBarHeadShadow":true,"toolTipDisplayTime":600,"playbackBarHeadOpacity":1,"firstTransitionDuration":0,"progressBorderRadius":0,"subtitlesFontFamily":"Arial","subtitlesPaddingTop":5,"playbackBarOpacity":1,"width":"100%","borderRadius":0,"vrPointerSelectionColor":"#FF6600","progressBackgroundColorRatios":[0],"id":"MainViewer","subtitlesShadow":false,"playbackBarHeadBackgroundColor":["#111111","#666666"],"subtitlesOpacity":1,"playbackBarBottom":5,"subtitlesGap":0,"minHeight":50,"toolTipFontColor":"#606060","height":"100%","subtitlesBackgroundColor":"#000000","minWidth":100,"displayTooltipInSurfaceSelection":true,"progressLeft":0,"subtitlesHorizontalAlign":"center","toolTipShadowSpread":0,"playbackBarProgressBackgroundColorDirection":"vertical","progressRight":0,"progressOpacity":1,"subtitlesVerticalAlign":"bottom","toolTipPaddingBottom":4,"progressBarBackgroundColorDirection":"vertical","playbackBarHeadBackgroundColorDirection":"vertical","playbackBarHeight":10,"subtitlesBorderSize":0,"playbackBarHeadWidth":6,"vrPointerSelectionTime":2000,"playbackBarBackgroundColor":["#FFFFFF"],"playbackBarHeadShadowVerticalLength":0,"playbackBarProgressBorderSize":0,"doubleClickAction":"toggle_fullscreen","toolTipShadowVerticalLength":0,"transitionDuration":500,"progressBarBorderColor":"#000000","playbackBarBackgroundColorDirection":"vertical","subtitlesTextShadowOpacity":1,"data":{"name":"Main Viewer"},"toolTipBorderColor":"#767676","toolTipPaddingRight":6,"playbackBarRight":0,"subtitlesFontColor":"#FFFFFF","progressBarBackgroundColorRatios":[0],"playbackBarProgressBorderRadius":0,"toolTipHorizontalAlign":"center","toolTipOpacity":1},{"id":"MainViewerPanoramaPlayer","displayPlaybackBar":true,"viewerArea":"this.MainViewer","class":"PanoramaPlayer","mouseControlMode":"drag_rotation","surfaceSelectionEnabled":false,"touchControlMode":"drag_rotation","gyroscopeVerticalDraggingEnabled":true,"zoomEnabled":true,"arrowKeysAction":"translate"},{"id":"panorama_C0A024C9_CB82_A05D_41D4_DB6BE767264E","class":"Panorama","frames":[{"thumbnailUrl":"media/panorama_C0A024C9_CB82_A05D_41D4_DB6BE767264E_t.jpg","class":"CubicPanoramaFrame","cube":{"levels":[{"width":6144,"class":"TiledImageResourceLevel","height":1024,"tags":"ondemand","colCount":12,"rowCount":2,"url":"media/panorama_C0A024C9_CB82_A05D_41D4_DB6BE767264E_0/{face}/0/{row}_{column}.jpg"},{"width":3072,"class":"TiledImageResourceLevel","height":512,"tags":["ondemand","preload"],"colCount":6,"rowCount":1,"url":"media/panorama_C0A024C9_CB82_A05D_41D4_DB6BE767264E_0/{face}/1/{row}_{column}.jpg"},{"width":6144,"class":"TiledImageResourceLevel","height":1024,"tags":"mobilevr","colCount":6,"rowCount":1,"url":"media/panorama_C0A024C9_CB82_A05D_41D4_DB6BE767264E_0/{face}/vr/0.jpg"}],"class":"ImageResource"}}],"label":trans('panorama_C0A024C9_CB82_A05D_41D4_DB6BE767264E.label'),"thumbnailUrl":"media/panorama_C0A024C9_CB82_A05D_41D4_DB6BE767264E_t.jpg","vfov":180,"pitch":0,"adjacentPanoramas":[{"class":"AdjacentPanorama","distance":100,"backwardYaw":-29.44,"yaw":-12,"select":"this.overlay_C79F8550_CB83_E04B_41D8_CE247B6EA885.get('areas').forEach(function(a){ a.trigger('click') })","panorama":"this.panorama_C0A06154_CB82_A04B_418C_4D67E7B4E112"},{"class":"AdjacentPanorama","select":"this.overlay_C7F46C73_CBFD_A04D_41BB_8CEB89B33FB9.get('areas').forEach(function(a){ a.trigger('click') })","yaw":71.23,"distance":100,"panorama":"this.panorama_C01696A3_CB82_E0CC_41BE_20924946F873"}],"hfov":360,"data":{"label":"Cuarto vista 2"},"hfovMax":130,"partial":false,"hfovMin":"150%","overlays":["this.overlay_C79F8550_CB83_E04B_41D8_CE247B6EA885","this.overlay_C7F46C73_CBFD_A04D_41BB_8CEB89B33FB9"]},{"surfaceReticleOpacity":0.6,"subtitlesBottom":10,"surfaceReticleColor":"#FFFFFF","toolTipTextShadowBlurRadius":3,"playbackBarHeadShadowOpacity":0.7,"toolTipFontWeight":"normal","playbackBarProgressBackgroundColor":["#3399FF"],"right":"0.24%","subtitlesPaddingRight":5,"toolTipShadowHorizontalLength":0,"progressBackgroundColorDirection":"vertical","playbackBarProgressBackgroundColorRatios":[0],"borderSize":0,"propagateClick":false,"playbackBarBorderColor":"#FFFFFF","progressBarBackgroundColor":["#3399FF"],"progressBorderColor":"#000000","toolTipBackgroundColor":"#F6F6F6","playbackBarBackgroundOpacity":1,"toolTipShadowOpacity":1,"playbackBarBorderRadius":0,"subtitlesFontWeight":"normal","progressBackgroundColor":["#FFFFFF"],"playbackBarHeadBorderRadius":0,"class":"ViewerArea","playbackBarProgressBorderColor":"#000000","surfaceReticleSelectionColor":"#FFFFFF","playbackBarProgressOpacity":1,"progressBarOpacity":1,"paddingTop":0,"surfaceReticleSelectionOpacity":1,"progressBottom":2,"vrPointerColor":"#FFFFFF","progressHeight":10,"playbackBarHeadBorderColor":"#000000","paddingBottom":0,"shadow":false,"progressBarBorderRadius":0,"playbackBarBorderSize":0,"progressBorderSize":0,"progressBarBorderSize":0,"subtitlesTextShadowVerticalLength":1,"playbackBarHeadShadowHorizontalLength":0,"toolTipShadowColor":"#333333","toolTipShadowBlurRadius":3,"toolTipPaddingLeft":6,"toolTipBorderRadius":3,"subtitlesTop":0,"toolTipBorderSize":1,"top":"0.55%","toolTipPaddingTop":4,"subtitlesTextShadowColor":"#000000","playbackBarHeadShadowBlurRadius":3,"paddingLeft":0,"subtitlesPaddingBottom":5,"toolTipTextShadowColor":"#000000","subtitlesFontSize":"3vmin","paddingRight":0,"playbackBarLeft":0,"toolTipFontFamily":"Arial","transitionMode":"blending","playbackBarHeadHeight":15,"subtitlesBackgroundOpacity":0.2,"subtitlesBorderColor":"#FFFFFF","toolTipFontStyle":"normal","subtitlesPaddingLeft":5,"playbackBarHeadBackgroundColorRatios":[0,1],"subtitlesTextShadowHorizontalLength":1,"playbackBarHeadShadowColor":"#000000","subtitlesTextDecoration":"none","playbackBarHeadBorderSize":0,"displayTooltipInTouchScreens":true,"toolTipFontSize":"1.11vmin","subtitlesTextShadowBlurRadius":0,"progressBackgroundOpacity":1,"toolTipTextShadowOpacity":0,"playbackBarHeadShadow":true,"toolTipDisplayTime":600,"playbackBarHeadOpacity":1,"firstTransitionDuration":0,"progressBorderRadius":0,"subtitlesFontFamily":"Arial","subtitlesPaddingTop":5,"playbackBarOpacity":1,"width":"9.7%","borderRadius":0,"vrPointerSelectionColor":"#FF6600","progressBackgroundColorRatios":[0],"id":"MapViewer","subtitlesShadow":false,"playbackBarHeadBackgroundColor":["#111111","#666666"],"subtitlesOpacity":1,"playbackBarBottom":0,"subtitlesGap":0,"minHeight":1,"toolTipFontColor":"#606060","height":"11.752%","subtitlesBackgroundColor":"#000000","minWidth":1,"displayTooltipInSurfaceSelection":true,"progressLeft":0,"subtitlesHorizontalAlign":"center","toolTipShadowSpread":0,"playbackBarProgressBackgroundColorDirection":"vertical","progressRight":0,"playbackBarBackgroundColor":["#FFFFFF"],"progressOpacity":1,"subtitlesVerticalAlign":"bottom","progressBarBackgroundColorDirection":"vertical","playbackBarHeadBackgroundColorDirection":"vertical","playbackBarHeight":10,"subtitlesBorderSize":0,"playbackBarHeadWidth":6,"vrPointerSelectionTime":2000,"toolTipPaddingBottom":4,"playbackBarHeadShadowVerticalLength":0,"playbackBarProgressBorderSize":0,"doubleClickAction":"toggle_fullscreen","toolTipShadowVerticalLength":0,"transitionDuration":500,"progressBarBorderColor":"#000000","playbackBarBackgroundColorDirection":"vertical","subtitlesTextShadowOpacity":1,"data":{"name":"Floorplan Viewer"},"toolTipBorderColor":"#767676","toolTipPaddingRight":6,"playbackBarRight":0,"subtitlesFontColor":"#FFFFFF","progressBarBackgroundColorRatios":[0],"playbackBarProgressBorderRadius":0,"toolTipHorizontalAlign":"center","toolTipOpacity":1},{"id":"panorama_C01696A3_CB82_E0CC_41BE_20924946F873_camera","class":"PanoramaCamera","initialSequence":"this.sequence_C099C8D2_CB82_A04F_41E5_EEB8CE87B6BE","initialPosition":{"yaw":43.2,"class":"PanoramaCameraPosition","pitch":-4.54},"automaticZoomSpeed":10},{"id":"panorama_C0A024C9_CB82_A05D_41D4_DB6BE767264E_camera","class":"PanoramaCamera","initialSequence":"this.sequence_C08468D5_CB82_A075_41D3_1F49CEA1A66B","initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"automaticZoomSpeed":10},{"id":"sequence_C08448D5_CB82_A075_41D8_38C518540167","restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","movements":[{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawSpeed":7.96},{"yawDelta":323,"class":"DistancePanoramaCameraMovement","easing":"linear","yawSpeed":7.96},{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawSpeed":7.96}]},{"id":"overlay_C444D8F5_CB86_A035_41E9_07220BD11C89","class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_C7B8490B_CB86_A1DC_41D5_52857BDED9C1"],"enabledInCardboard":true,"maps":[],"items":[{"image":"this.AnimatedImageResource_D8734680_CB9D_A0CB_41D9_921823FF188D","class":"HotspotPanoramaOverlayImage","pitch":0,"vfov":14.96,"yaw":-135.31,"horizontalAlign":"center","scaleMode":"fit_inside","hfov":27.77,"verticalAlign":"middle","data":{"label":"IrATest1"},"distance":50}],"rollOverDisplay":false,"data":{"hasPanoramaAction":true,"label":"IrATest1"},"useHandCursor":true},{"id":"overlay_C7AE38B2_CB82_60CF_41DF_3997681F53C3","class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_C7A568B8_CB82_603B_41E4_28EBBAF0CD1A"],"enabledInCardboard":true,"maps":[],"items":[{"image":"this.AnimatedImageResource_D8739680_CB9D_A0CB_41CA_BE886D865EE5","class":"HotspotPanoramaOverlayImage","pitch":8.72,"vfov":16.34,"yaw":-4.18,"horizontalAlign":"center","scaleMode":"fit_inside","hfov":26.83,"verticalAlign":"middle","data":{"label":"IrATest3"},"distance":100}],"rollOverDisplay":false,"data":{"hasPanoramaAction":true,"label":"IrATest3"},"useHandCursor":true},{"id":"overlay_C73D47F0_CB86_604B_41A0_25BD23210B38","class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_C7375806_CB86_6FD7_41D9_4C33906ABAA5"],"enabledInCardboard":true,"maps":[],"items":[{"image":"this.AnimatedImageResource_D872E67F_CB9D_A035_41D3_9AC4A07376F9","class":"HotspotPanoramaOverlayImage","pitch":0.37,"vfov":11.42,"yaw":38.9,"horizontalAlign":"center","scaleMode":"fit_inside","hfov":13.37,"verticalAlign":"middle","data":{"label":"IrATest2"},"distance":50}],"rollOverDisplay":false,"data":{"hasPanoramaAction":true,"label":"IrATest2"},"useHandCursor":true},{"id":"sequence_C084A8D5_CB82_A075_41E0_CB5F2E660F21","restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","movements":[{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawSpeed":7.96},{"yawDelta":323,"class":"DistancePanoramaCameraMovement","easing":"linear","yawSpeed":7.96},{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawSpeed":7.96}]},{"id":"overlay_C7AA68B4_CB82_60CB_41C4_C9FA879D785F","class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_C69834DB_CB82_A07D_41AE_A92B6B0A3241"],"enabledInCardboard":true,"maps":[],"items":[{"image":"this.AnimatedImageResource_D873A680_CB9D_A0CB_41E2_266F9FF1611F","class":"HotspotPanoramaOverlayImage","pitch":7.97,"vfov":14.62,"yaw":-92.75,"horizontalAlign":"center","scaleMode":"fit_inside","hfov":24.62,"verticalAlign":"middle","data":{"label":"IrATest2"},"distance":100}],"rollOverDisplay":false,"data":{"hasPanoramaAction":true,"label":"IrATest2"},"useHandCursor":true},{"id":"overlay_C7A4E54E_CB83_E057_41E8_783785D9226F","class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_C799E552_CB83_E04F_41C9_049C1F8B4048"],"enabledInCardboard":true,"maps":[],"items":[{"image":"this.AnimatedImageResource_D873C681_CB9D_A0CD_41E5_5461E64C02B9","class":"HotspotPanoramaOverlayImage","pitch":4.8,"vfov":14.71,"yaw":-29.44,"horizontalAlign":"center","scaleMode":"fit_inside","hfov":15.97,"verticalAlign":"middle","data":{"label":"IrATest4"},"distance":100}],"rollOverDisplay":false,"data":{"hasPanoramaAction":true,"label":"IrATest4"},"useHandCursor":true},{"id":"overlay_C79F8550_CB83_E04B_41D8_CE247B6EA885","class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_C7FA4E6A_CB83_A05F_41E5_87955FF052C0"],"enabledInCardboard":true,"maps":[],"items":[{"image":"this.AnimatedImageResource_D8700681_CB9D_A0CD_41E2_27AAF6208EBA","class":"HotspotPanoramaOverlayImage","pitch":4.43,"vfov":16.73,"yaw":-12,"horizontalAlign":"center","scaleMode":"fit_inside","hfov":14.46,"verticalAlign":"middle","data":{"label":"IrATest3"},"distance":100}],"rollOverDisplay":false,"data":{"hasPanoramaAction":true,"label":"IrATest3"},"useHandCursor":true},{"id":"overlay_C7F46C73_CBFD_A04D_41BB_8CEB89B33FB9","class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_C78D2C7F_CBFD_A035_41DD_3B643C2A581A"],"enabledInCardboard":true,"maps":[],"items":[{"image":"this.AnimatedImageResource_D8705681_CB9D_A0CD_41B5_6688AE605C47","class":"HotspotPanoramaOverlayImage","pitch":12,"vfov":24.57,"yaw":71.23,"horizontalAlign":"center","scaleMode":"fit_inside","hfov":12.95,"verticalAlign":"middle","data":{"label":"IrATest1"},"distance":100}],"rollOverDisplay":false,"data":{"hasPanoramaAction":true,"label":"IrATest1"},"useHandCursor":true},{"id":"sequence_C099C8D2_CB82_A04F_41E5_EEB8CE87B6BE","restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","movements":[{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawSpeed":7.96},{"yawDelta":323,"class":"DistancePanoramaCameraMovement","easing":"linear","yawSpeed":7.96},{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawSpeed":7.96}]},{"id":"sequence_C08468D5_CB82_A075_41D3_1F49CEA1A66B","restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","movements":[{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawSpeed":7.96},{"yawDelta":323,"class":"DistancePanoramaCameraMovement","easing":"linear","yawSpeed":7.96},{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawSpeed":7.96}]},{"id":"HotspotPanoramaOverlayArea_C7B8490B_CB86_A1DC_41D5_52857BDED9C1","click":"this.mainPlayList.set('selectedIndex', 0)","class":"HotspotPanoramaOverlayArea","mapColor":"any"},{"id":"AnimatedImageResource_D8734680_CB9D_A0CB_41D9_921823FF188D","frameCount":24,"class":"AnimatedImageResource","levels":[{"width":400,"class":"ImageResourceLevel","height":600,"url":"media/res_C74EB377_CB82_E035_41E4_8DBE45C87DBD_0.png"}],"colCount":4,"rowCount":6,"frameDuration":41},{"id":"HotspotPanoramaOverlayArea_C7A568B8_CB82_603B_41E4_28EBBAF0CD1A","click":"this.mainPlayList.set('selectedIndex', 2)","class":"HotspotPanoramaOverlayArea","mapColor":"any"},{"id":"AnimatedImageResource_D8739680_CB9D_A0CB_41CA_BE886D865EE5","frameCount":24,"class":"AnimatedImageResource","levels":[{"width":400,"class":"ImageResourceLevel","height":600,"url":"media/res_C74EB377_CB82_E035_41E4_8DBE45C87DBD_0.png"}],"colCount":4,"rowCount":6,"frameDuration":41},{"id":"HotspotPanoramaOverlayArea_C7375806_CB86_6FD7_41D9_4C33906ABAA5","click":"this.mainPlayList.set('selectedIndex', 1)","class":"HotspotPanoramaOverlayArea","mapColor":"any"},{"id":"AnimatedImageResource_D872E67F_CB9D_A035_41D3_9AC4A07376F9","frameCount":24,"class":"AnimatedImageResource","levels":[{"width":400,"class":"ImageResourceLevel","height":600,"url":"media/res_C74EB377_CB82_E035_41E4_8DBE45C87DBD_0.png"}],"colCount":4,"rowCount":6,"frameDuration":41},{"id":"HotspotPanoramaOverlayArea_C69834DB_CB82_A07D_41AE_A92B6B0A3241","click":"this.mainPlayList.set('selectedIndex', 1)","class":"HotspotPanoramaOverlayArea","mapColor":"any"},{"id":"AnimatedImageResource_D873A680_CB9D_A0CB_41E2_266F9FF1611F","frameCount":24,"class":"AnimatedImageResource","levels":[{"width":400,"class":"ImageResourceLevel","height":600,"url":"media/res_C74EB377_CB82_E035_41E4_8DBE45C87DBD_0.png"}],"colCount":4,"rowCount":6,"frameDuration":41},{"id":"HotspotPanoramaOverlayArea_C799E552_CB83_E04F_41C9_049C1F8B4048","click":"this.mainPlayList.set('selectedIndex', 3)","class":"HotspotPanoramaOverlayArea","mapColor":"any"},{"id":"AnimatedImageResource_D873C681_CB9D_A0CD_41E5_5461E64C02B9","frameCount":24,"class":"AnimatedImageResource","levels":[{"width":400,"class":"ImageResourceLevel","height":600,"url":"media/res_C74EB377_CB82_E035_41E4_8DBE45C87DBD_0.png"}],"colCount":4,"rowCount":6,"frameDuration":41},{"id":"HotspotPanoramaOverlayArea_C7FA4E6A_CB83_A05F_41E5_87955FF052C0","click":"this.mainPlayList.set('selectedIndex', 2)","class":"HotspotPanoramaOverlayArea","mapColor":"any"},{"id":"AnimatedImageResource_D8700681_CB9D_A0CD_41E2_27AAF6208EBA","frameCount":24,"class":"AnimatedImageResource","levels":[{"width":400,"class":"ImageResourceLevel","height":600,"url":"media/res_C74EB377_CB82_E035_41E4_8DBE45C87DBD_0.png"}],"colCount":4,"rowCount":6,"frameDuration":41},{"id":"HotspotPanoramaOverlayArea_C78D2C7F_CBFD_A035_41DD_3B643C2A581A","click":"this.mainPlayList.set('selectedIndex', 0)","class":"HotspotPanoramaOverlayArea","mapColor":"any"},{"id":"AnimatedImageResource_D8705681_CB9D_A0CD_41B5_6688AE605C47","frameCount":24,"class":"AnimatedImageResource","levels":[{"width":400,"class":"ImageResourceLevel","height":600,"url":"media/res_C74EB377_CB82_E035_41E4_8DBE45C87DBD_0.png"}],"colCount":4,"rowCount":6,"frameDuration":41}],"scripts":{"resumePlayers":TDV.Tour.Script.resumePlayers,"shareSocial":TDV.Tour.Script.shareSocial,"setValue":TDV.Tour.Script.setValue,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"existsKey":TDV.Tour.Script.existsKey,"initQuiz":TDV.Tour.Script.initQuiz,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"unregisterKey":TDV.Tour.Script.unregisterKey,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"initGA":TDV.Tour.Script.initGA,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"getPixels":TDV.Tour.Script.getPixels,"init":TDV.Tour.Script.init,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"cloneCamera":TDV.Tour.Script.cloneCamera,"getKey":TDV.Tour.Script.getKey,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"getMainViewer":TDV.Tour.Script.getMainViewer,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getComponentByName":TDV.Tour.Script.getComponentByName,"getOverlays":TDV.Tour.Script.getOverlays,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"quizShowScore":TDV.Tour.Script.quizShowScore,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"quizFinish":TDV.Tour.Script.quizFinish,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"quizStart":TDV.Tour.Script.quizStart,"setLocale":TDV.Tour.Script.setLocale,"openLink":TDV.Tour.Script.openLink,"textToSpeech":TDV.Tour.Script.textToSpeech,"historyGoForward":TDV.Tour.Script.historyGoForward,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"registerKey":TDV.Tour.Script.registerKey,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"historyGoBack":TDV.Tour.Script.historyGoBack,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getMediaByName":TDV.Tour.Script.getMediaByName,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"isPanorama":TDV.Tour.Script.isPanorama,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"setMapLocation":TDV.Tour.Script.setMapLocation,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"showWindow":TDV.Tour.Script.showWindow,"playAudioList":TDV.Tour.Script.playAudioList,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"showPopupImage":TDV.Tour.Script.showPopupImage,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"mixObject":TDV.Tour.Script.mixObject,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"translate":TDV.Tour.Script.translate,"clone":TDV.Tour.Script.clone,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem},"minWidth":20,"children":["this.MainViewer","this.MapViewer"],"paddingBottom":0,"shadow":false,"overflow":"hidden","scrollBarOpacity":0.5,"scrollBarMargin":2,"verticalAlign":"top","toolTipHorizontalAlign":"center","defaultVRPointer":"laser","scrollBarWidth":10};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2020.5.26.js.map
//Generated with v2020.5.26, Mon Feb 22 2021