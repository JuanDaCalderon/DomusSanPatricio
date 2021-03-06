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
    var d = {"contentOpaque":false,"start":"this.init()","mediaActivationMode":"window","backgroundOpacity":1,"gap":10,"paddingRight":0,"scrollBarColor":"#000000","data":{"name":"Player11700","defaultLocale":"es","textToSpeechConfig":{"speechOnInfoWindow":false,"pitch":1,"speechOnQuizQuestion":false,"speechOnTooltip":false,"rate":1,"volume":1},"locales":{"es":"locale/es.txt"}},"paddingLeft":0,"horizontalAlign":"left","mouseWheelEnabled":true,"backgroundPreloadEnabled":true,"borderSize":0,"propagateClick":false,"backgroundColorRatios":[0],"mobileMipmappingEnabled":false,"layout":"absolute","width":"100%","scrollBarVisible":"rollOver","downloadEnabled":false,"borderRadius":0,"backgroundColor":["#FFFFFF"],"vrPolyfillScale":0.75,"id":"rootPlayer","class":"Player","height":"100%","backgroundColorDirection":"vertical","minHeight":20,"desktopMipmappingEnabled":false,"paddingTop":0,"definitions": [{"id":"panorama_DF2F2BCC_CB8D_A05B_41D9_6CDF26BE7FA1_camera","class":"PanoramaCamera","initialSequence":"this.sequence_DF2F481D_CB8E_6FF5_41E0_A3C7666920CD","initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"automaticZoomSpeed":10},{"id":"panorama_DF2FA998_CB8E_60FB_41C5_3E267F2C32F5_camera","class":"PanoramaCamera","initialSequence":"this.sequence_DF2F281E_CB8E_6FF7_41C5_2A0219F5A5C0","initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"automaticZoomSpeed":10},{"id":"panorama_DF2F8DBA_CB8D_A03F_41E7_6353DD8AD8EB","class":"Panorama","frames":[{"thumbnailUrl":"media/panorama_DF2F8DBA_CB8D_A03F_41E7_6353DD8AD8EB_t.jpg","class":"CubicPanoramaFrame","cube":{"levels":[{"width":12288,"class":"TiledImageResourceLevel","height":2048,"tags":"ondemand","colCount":24,"rowCount":4,"url":"media/panorama_DF2F8DBA_CB8D_A03F_41E7_6353DD8AD8EB_0/{face}/0/{row}_{column}.jpg"},{"width":6144,"class":"TiledImageResourceLevel","height":1024,"tags":"ondemand","colCount":12,"rowCount":2,"url":"media/panorama_DF2F8DBA_CB8D_A03F_41E7_6353DD8AD8EB_0/{face}/1/{row}_{column}.jpg"},{"width":3072,"class":"TiledImageResourceLevel","height":512,"tags":["ondemand","preload"],"colCount":6,"rowCount":1,"url":"media/panorama_DF2F8DBA_CB8D_A03F_41E7_6353DD8AD8EB_0/{face}/2/{row}_{column}.jpg"},{"width":9216,"class":"TiledImageResourceLevel","height":1536,"tags":"mobilevr","colCount":6,"rowCount":1,"url":"media/panorama_DF2F8DBA_CB8D_A03F_41E7_6353DD8AD8EB_0/{face}/vr/0.jpg"}],"class":"ImageResource"}}],"label":trans('panorama_DF2F8DBA_CB8D_A03F_41E7_6353DD8AD8EB.label'),"thumbnailUrl":"media/panorama_DF2F8DBA_CB8D_A03F_41E7_6353DD8AD8EB_t.jpg","vfov":180,"pitch":0,"adjacentPanoramas":[{"class":"AdjacentPanorama","distance":100,"backwardYaw":34.33,"yaw":-54.72,"select":"this.overlay_DED7ACA4_CB82_60CB_41CE_C58D85D2B74F.get('areas').forEach(function(a){ a.trigger('click') })","panorama":"this.panorama_DEDE0D93_CB8D_E0CD_41DF_4664A271B52F"},{"class":"AdjacentPanorama","distance":100,"backwardYaw":-175.78,"yaw":6.05,"select":"this.overlay_DEBFFF24_CB86_E1CB_41E0_CA1BB194248E.get('areas').forEach(function(a){ a.trigger('click') })","panorama":"this.panorama_DF2FA998_CB8E_60FB_41C5_3E267F2C32F5"},{"class":"AdjacentPanorama","distance":11.55,"backwardYaw":32.9,"yaw":14.51,"select":"this.overlay_DED35207_CB85_A3D5_41E6_4C3F5238BA04.get('areas').forEach(function(a){ a.trigger('click') })","panorama":"this.panorama_DF2F2BCC_CB8D_A05B_41D9_6CDF26BE7FA1"}],"hfov":360,"data":{"label":"Comedor"},"hfovMax":130,"partial":false,"hfovMin":"135%","overlays":["this.overlay_DED7ACA4_CB82_60CB_41CE_C58D85D2B74F","this.overlay_DED35207_CB85_A3D5_41E6_4C3F5238BA04","this.overlay_DEBFFF24_CB86_E1CB_41E0_CA1BB194248E"]},{"surfaceReticleOpacity":0.6,"subtitlesBottom":50,"surfaceReticleColor":"#FFFFFF","toolTipTextShadowBlurRadius":3,"playbackBarHeadShadowOpacity":0.7,"toolTipFontWeight":"normal","playbackBarProgressBackgroundColor":["#3399FF"],"progressBackgroundColorDirection":"vertical","subtitlesPaddingRight":5,"toolTipShadowHorizontalLength":0,"playbackBarProgressBackgroundColorRatios":[0],"borderSize":0,"propagateClick":false,"playbackBarBorderColor":"#FFFFFF","progressBarBackgroundColor":["#3399FF"],"progressBorderColor":"#000000","toolTipBackgroundColor":"#F6F6F6","playbackBarBackgroundOpacity":1,"toolTipShadowOpacity":1,"playbackBarBorderRadius":0,"subtitlesFontWeight":"normal","progressBackgroundColor":["#FFFFFF"],"playbackBarHeadBorderRadius":0,"class":"ViewerArea","playbackBarProgressBorderColor":"#000000","surfaceReticleSelectionColor":"#FFFFFF","playbackBarProgressOpacity":1,"progressBarOpacity":1,"paddingTop":0,"surfaceReticleSelectionOpacity":1,"progressBottom":0,"vrPointerColor":"#FFFFFF","progressHeight":10,"playbackBarHeadBorderColor":"#000000","paddingBottom":0,"shadow":false,"progressBarBorderRadius":0,"playbackBarBorderSize":0,"progressBorderSize":0,"progressBarBorderSize":0,"subtitlesTextShadowVerticalLength":1,"playbackBarHeadShadowHorizontalLength":0,"toolTipShadowColor":"#333333","toolTipShadowBlurRadius":3,"toolTipPaddingLeft":6,"toolTipBorderRadius":3,"subtitlesTop":0,"toolTipBorderSize":1,"toolTipPaddingTop":4,"subtitlesTextShadowColor":"#000000","playbackBarHeadShadowBlurRadius":3,"paddingLeft":0,"subtitlesPaddingBottom":5,"toolTipTextShadowColor":"#000000","subtitlesFontSize":"3vmin","paddingRight":0,"playbackBarLeft":0,"toolTipFontFamily":"Arial","transitionMode":"blending","playbackBarHeadHeight":15,"subtitlesBackgroundOpacity":0.2,"subtitlesBorderColor":"#FFFFFF","toolTipFontStyle":"normal","subtitlesPaddingLeft":5,"playbackBarHeadBackgroundColorRatios":[0,1],"subtitlesTextShadowHorizontalLength":1,"playbackBarHeadShadowColor":"#000000","subtitlesTextDecoration":"none","playbackBarHeadBorderSize":0,"displayTooltipInTouchScreens":true,"toolTipFontSize":"1.11vmin","subtitlesTextShadowBlurRadius":0,"progressBackgroundOpacity":1,"toolTipTextShadowOpacity":0,"playbackBarHeadShadow":true,"toolTipDisplayTime":600,"playbackBarHeadOpacity":1,"firstTransitionDuration":0,"progressBorderRadius":0,"subtitlesFontFamily":"Arial","subtitlesPaddingTop":5,"playbackBarOpacity":1,"width":"100%","borderRadius":0,"vrPointerSelectionColor":"#FF6600","progressBackgroundColorRatios":[0],"id":"MainViewer","subtitlesShadow":false,"playbackBarHeadBackgroundColor":["#111111","#666666"],"subtitlesOpacity":1,"playbackBarBottom":5,"subtitlesGap":0,"minHeight":50,"toolTipFontColor":"#606060","height":"100%","subtitlesBackgroundColor":"#000000","minWidth":100,"displayTooltipInSurfaceSelection":true,"progressLeft":0,"subtitlesHorizontalAlign":"center","toolTipShadowSpread":0,"playbackBarProgressBackgroundColorDirection":"vertical","progressRight":0,"progressOpacity":1,"subtitlesVerticalAlign":"bottom","toolTipPaddingBottom":4,"progressBarBackgroundColorDirection":"vertical","playbackBarHeadBackgroundColorDirection":"vertical","playbackBarHeight":10,"subtitlesBorderSize":0,"playbackBarHeadWidth":6,"vrPointerSelectionTime":2000,"playbackBarBackgroundColor":["#FFFFFF"],"playbackBarHeadShadowVerticalLength":0,"playbackBarProgressBorderSize":0,"doubleClickAction":"toggle_fullscreen","toolTipShadowVerticalLength":0,"transitionDuration":500,"progressBarBorderColor":"#000000","playbackBarBackgroundColorDirection":"vertical","subtitlesTextShadowOpacity":1,"data":{"name":"Main Viewer"},"toolTipBorderColor":"#767676","toolTipPaddingRight":6,"playbackBarRight":0,"subtitlesFontColor":"#FFFFFF","progressBarBackgroundColorRatios":[0],"playbackBarProgressBorderRadius":0,"toolTipHorizontalAlign":"center","toolTipOpacity":1},{"id":"panorama_DF2F8DBA_CB8D_A03F_41E7_6353DD8AD8EB_camera","class":"PanoramaCamera","initialSequence":"this.sequence_DF2F681D_CB8E_6FF5_41BF_68EC7C275E33","initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"automaticZoomSpeed":10},{"id":"panorama_DF2FA998_CB8E_60FB_41C5_3E267F2C32F5","class":"Panorama","frames":[{"thumbnailUrl":"media/panorama_DF2FA998_CB8E_60FB_41C5_3E267F2C32F5_t.jpg","class":"CubicPanoramaFrame","cube":{"levels":[{"width":12288,"class":"TiledImageResourceLevel","height":2048,"tags":"ondemand","colCount":24,"rowCount":4,"url":"media/panorama_DF2FA998_CB8E_60FB_41C5_3E267F2C32F5_0/{face}/0/{row}_{column}.jpg"},{"width":6144,"class":"TiledImageResourceLevel","height":1024,"tags":"ondemand","colCount":12,"rowCount":2,"url":"media/panorama_DF2FA998_CB8E_60FB_41C5_3E267F2C32F5_0/{face}/1/{row}_{column}.jpg"},{"width":3072,"class":"TiledImageResourceLevel","height":512,"tags":["ondemand","preload"],"colCount":6,"rowCount":1,"url":"media/panorama_DF2FA998_CB8E_60FB_41C5_3E267F2C32F5_0/{face}/2/{row}_{column}.jpg"},{"width":9216,"class":"TiledImageResourceLevel","height":1536,"tags":"mobilevr","colCount":6,"rowCount":1,"url":"media/panorama_DF2FA998_CB8E_60FB_41C5_3E267F2C32F5_0/{face}/vr/0.jpg"}],"class":"ImageResource"}}],"label":trans('panorama_DF2FA998_CB8E_60FB_41C5_3E267F2C32F5.label'),"thumbnailUrl":"media/panorama_DF2FA998_CB8E_60FB_41C5_3E267F2C32F5_t.jpg","vfov":180,"pitch":0,"adjacentPanoramas":[{"class":"AdjacentPanorama","distance":100,"backwardYaw":6.05,"yaw":-175.78,"select":"this.overlay_DEBB9F27_CB86_E1D5_41E7_7D61ED27A336.get('areas').forEach(function(a){ a.trigger('click') })","panorama":"this.panorama_DF2F8DBA_CB8D_A03F_41E7_6353DD8AD8EB"}],"hfov":360,"data":{"label":"Cuarto principal"},"hfovMax":130,"partial":false,"hfovMin":"135%","overlays":["this.overlay_DEBB9F27_CB86_E1D5_41E7_7D61ED27A336"]},{"id":"panorama_DF2F2BCC_CB8D_A05B_41D9_6CDF26BE7FA1","class":"Panorama","frames":[{"thumbnailUrl":"media/panorama_DF2F2BCC_CB8D_A05B_41D9_6CDF26BE7FA1_t.jpg","class":"CubicPanoramaFrame","cube":{"levels":[{"width":12288,"class":"TiledImageResourceLevel","height":2048,"tags":"ondemand","colCount":24,"rowCount":4,"url":"media/panorama_DF2F2BCC_CB8D_A05B_41D9_6CDF26BE7FA1_0/{face}/0/{row}_{column}.jpg"},{"width":6144,"class":"TiledImageResourceLevel","height":1024,"tags":"ondemand","colCount":12,"rowCount":2,"url":"media/panorama_DF2F2BCC_CB8D_A05B_41D9_6CDF26BE7FA1_0/{face}/1/{row}_{column}.jpg"},{"width":3072,"class":"TiledImageResourceLevel","height":512,"tags":["ondemand","preload"],"colCount":6,"rowCount":1,"url":"media/panorama_DF2F2BCC_CB8D_A05B_41D9_6CDF26BE7FA1_0/{face}/2/{row}_{column}.jpg"},{"width":9216,"class":"TiledImageResourceLevel","height":1536,"tags":"mobilevr","colCount":6,"rowCount":1,"url":"media/panorama_DF2F2BCC_CB8D_A05B_41D9_6CDF26BE7FA1_0/{face}/vr/0.jpg"}],"class":"ImageResource"}}],"label":trans('panorama_DF2F2BCC_CB8D_A05B_41D9_6CDF26BE7FA1.label'),"thumbnailUrl":"media/panorama_DF2F2BCC_CB8D_A05B_41D9_6CDF26BE7FA1_t.jpg","vfov":180,"pitch":0,"adjacentPanoramas":[{"class":"AdjacentPanorama","distance":100,"backwardYaw":14.51,"yaw":32.9,"select":"this.overlay_DEA87209_CB85_A3DD_41AA_7ACB85A413F8.get('areas').forEach(function(a){ a.trigger('click') })","panorama":"this.panorama_DF2F8DBA_CB8D_A03F_41E7_6353DD8AD8EB"}],"hfov":360,"data":{"label":"Cuarto 2"},"hfovMax":130,"partial":false,"hfovMin":"135%","overlays":["this.overlay_DEA87209_CB85_A3DD_41AA_7ACB85A413F8"]},{"id":"mainPlayList","class":"PlayList","items":[{"camera":"this.panorama_DEDE0D93_CB8D_E0CD_41DF_4664A271B52F_camera","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_DEDE0D93_CB8D_E0CD_41DF_4664A271B52F"},{"camera":"this.panorama_DF2F8DBA_CB8D_A03F_41E7_6353DD8AD8EB_camera","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_DF2F8DBA_CB8D_A03F_41E7_6353DD8AD8EB"},{"camera":"this.panorama_DF2F2BCC_CB8D_A05B_41D9_6CDF26BE7FA1_camera","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 3)","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_DF2F2BCC_CB8D_A05B_41D9_6CDF26BE7FA1"},{"camera":"this.panorama_DF2FA998_CB8E_60FB_41C5_3E267F2C32F5_camera","end":"this.trigger('tourEnded')","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 3, 0)","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_DF2FA998_CB8E_60FB_41C5_3E267F2C32F5"}]},{"id":"panorama_DEDE0D93_CB8D_E0CD_41DF_4664A271B52F","class":"Panorama","frames":[{"thumbnailUrl":"media/panorama_DEDE0D93_CB8D_E0CD_41DF_4664A271B52F_t.jpg","class":"CubicPanoramaFrame","cube":{"levels":[{"width":12288,"class":"TiledImageResourceLevel","height":2048,"tags":"ondemand","colCount":24,"rowCount":4,"url":"media/panorama_DEDE0D93_CB8D_E0CD_41DF_4664A271B52F_0/{face}/0/{row}_{column}.jpg"},{"width":6144,"class":"TiledImageResourceLevel","height":1024,"tags":"ondemand","colCount":12,"rowCount":2,"url":"media/panorama_DEDE0D93_CB8D_E0CD_41DF_4664A271B52F_0/{face}/1/{row}_{column}.jpg"},{"width":3072,"class":"TiledImageResourceLevel","height":512,"tags":["ondemand","preload"],"colCount":6,"rowCount":1,"url":"media/panorama_DEDE0D93_CB8D_E0CD_41DF_4664A271B52F_0/{face}/2/{row}_{column}.jpg"},{"width":9216,"class":"TiledImageResourceLevel","height":1536,"tags":"mobilevr","colCount":6,"rowCount":1,"url":"media/panorama_DEDE0D93_CB8D_E0CD_41DF_4664A271B52F_0/{face}/vr/0.jpg"}],"class":"ImageResource"}}],"label":trans('panorama_DEDE0D93_CB8D_E0CD_41DF_4664A271B52F.label'),"thumbnailUrl":"media/panorama_DEDE0D93_CB8D_E0CD_41DF_4664A271B52F_t.jpg","vfov":180,"pitch":0,"adjacentPanoramas":[{"class":"AdjacentPanorama","distance":23.76,"backwardYaw":-54.72,"yaw":34.33,"select":"this.overlay_DEDCBCA2_CB82_60CF_41C6_A8C7519B4D46.get('areas').forEach(function(a){ a.trigger('click') })","panorama":"this.panorama_DF2F8DBA_CB8D_A03F_41E7_6353DD8AD8EB"}],"hfov":360,"data":{"label":"Entrada"},"hfovMax":130,"partial":false,"hfovMin":"135%","overlays":["this.overlay_DEDCBCA2_CB82_60CF_41C6_A8C7519B4D46"]},{"id":"MainViewerPanoramaPlayer","displayPlaybackBar":true,"viewerArea":"this.MainViewer","class":"PanoramaPlayer","mouseControlMode":"drag_rotation","surfaceSelectionEnabled":false,"touchControlMode":"drag_rotation","gyroscopeVerticalDraggingEnabled":true,"zoomEnabled":true,"arrowKeysAction":"translate"},{"id":"panorama_DEDE0D93_CB8D_E0CD_41DF_4664A271B52F_camera","class":"PanoramaCamera","initialSequence":"this.sequence_DF2E881D_CB8E_6FF5_41CD_2D5BAC3F22BF","initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"automaticZoomSpeed":10},{"id":"sequence_DF2F481D_CB8E_6FF5_41E0_A3C7666920CD","restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","movements":[{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawSpeed":7.96},{"yawDelta":323,"class":"DistancePanoramaCameraMovement","easing":"linear","yawSpeed":7.96},{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawSpeed":7.96}]},{"id":"sequence_DF2F281E_CB8E_6FF7_41C5_2A0219F5A5C0","restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","movements":[{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawSpeed":7.96},{"yawDelta":323,"class":"DistancePanoramaCameraMovement","easing":"linear","yawSpeed":7.96},{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawSpeed":7.96}]},{"id":"overlay_DED7ACA4_CB82_60CB_41CE_C58D85D2B74F","class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_D1E4BAAD_CB87_A0D5_41E3_5DC799F8DCD2"],"enabledInCardboard":true,"maps":[],"items":[{"image":"this.AnimatedImageResource_D1D49761_CB83_E04D_41E6_CF0449484854","class":"HotspotPanoramaOverlayImage","pitch":-0.35,"vfov":15,"yaw":-54.72,"horizontalAlign":"center","scaleMode":"fit_inside","hfov":15,"verticalAlign":"middle","data":{"label":"IrAEntrada"},"distance":100}],"rollOverDisplay":false,"data":{"hasPanoramaAction":true,"label":"IrAEntrada"},"useHandCursor":true},{"id":"overlay_DED35207_CB85_A3D5_41E6_4C3F5238BA04","class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_DEA6620B_CB85_A3DD_41DF_24A0C06062F4"],"enabledInCardboard":true,"maps":[],"items":[{"image":"this.AnimatedImageResource_D1D4F762_CB83_E04F_41C7_AE2A44777C6D","class":"HotspotPanoramaOverlayImage","pitch":-8.37,"vfov":13.84,"yaw":14.51,"horizontalAlign":"center","scaleMode":"fit_inside","hfov":11.59,"verticalAlign":"middle","data":{"label":"IrACuarto2"},"distance":100}],"rollOverDisplay":false,"data":{"hasPanoramaAction":true,"label":"IrACuarto2"},"useHandCursor":true},{"id":"overlay_DEBFFF24_CB86_E1CB_41E0_CA1BB194248E","class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_DEB2EF29_CB86_E1DD_41B0_2944DA0DE122"],"enabledInCardboard":true,"maps":[],"items":[{"image":"this.AnimatedImageResource_D1D4D762_CB83_E04F_41D9_D937212A8CE4","class":"HotspotPanoramaOverlayImage","pitch":3.11,"vfov":10.69,"yaw":6.05,"horizontalAlign":"center","scaleMode":"fit_inside","hfov":14.98,"verticalAlign":"middle","data":{"label":"IrACuartoPrincipal"},"distance":100}],"rollOverDisplay":false,"data":{"hasPanoramaAction":true,"label":"IrACuartoPrincipal"},"useHandCursor":true},{"id":"sequence_DF2F681D_CB8E_6FF5_41BF_68EC7C275E33","restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","movements":[{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawSpeed":7.96},{"yawDelta":323,"class":"DistancePanoramaCameraMovement","easing":"linear","yawSpeed":7.96},{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawSpeed":7.96}]},{"id":"overlay_DEBB9F27_CB86_E1D5_41E7_7D61ED27A336","class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_D1E4DAAD_CB87_A0D5_41DD_3C280AC80125"],"enabledInCardboard":true,"maps":[],"items":[{"image":"this.AnimatedImageResource_D1D34765_CB83_E055_41D5_79C4D946DF92","class":"HotspotPanoramaOverlayImage","pitch":0,"vfov":15,"yaw":-175.78,"horizontalAlign":"center","scaleMode":"fit_inside","hfov":15,"verticalAlign":"middle","data":{"label":"IrAComedor"},"distance":100}],"rollOverDisplay":false,"data":{"hasPanoramaAction":true,"label":"IrAComedor"},"useHandCursor":true},{"id":"overlay_DEA87209_CB85_A3DD_41AA_7ACB85A413F8","class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_D1E4AAAD_CB87_A0D5_41C9_542756B61286"],"enabledInCardboard":true,"maps":[],"items":[{"image":"this.AnimatedImageResource_D1D31764_CB83_E04B_41E1_15FC95640EF2","class":"HotspotPanoramaOverlayImage","pitch":0,"vfov":15,"yaw":32.9,"horizontalAlign":"center","scaleMode":"fit_inside","hfov":15,"verticalAlign":"middle","data":{"label":"IrAComedor"},"distance":100}],"rollOverDisplay":false,"data":{"hasPanoramaAction":true,"label":"IrAComedor"},"useHandCursor":true},{"id":"overlay_DEDCBCA2_CB82_60CF_41C6_A8C7519B4D46","class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_DEA9CCA6_CB82_60D7_41E6_3055A1A43F26"],"enabledInCardboard":true,"maps":[],"items":[{"image":"this.AnimatedImageResource_D1D45761_CB83_E04D_41DB_FD52AA1FB0BB","class":"HotspotPanoramaOverlayImage","pitch":-4.09,"vfov":14.96,"yaw":34.33,"horizontalAlign":"center","scaleMode":"fit_inside","hfov":14.96,"verticalAlign":"middle","data":{"label":"IrAComedor"},"distance":100}],"rollOverDisplay":false,"data":{"hasPanoramaAction":true,"label":"IrAComedor"},"useHandCursor":true},{"id":"sequence_DF2E881D_CB8E_6FF5_41CD_2D5BAC3F22BF","restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","movements":[{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawSpeed":7.96},{"yawDelta":323,"class":"DistancePanoramaCameraMovement","easing":"linear","yawSpeed":7.96},{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawSpeed":7.96}]},{"id":"HotspotPanoramaOverlayArea_D1E4BAAD_CB87_A0D5_41E3_5DC799F8DCD2","click":"this.mainPlayList.set('selectedIndex', 0)","class":"HotspotPanoramaOverlayArea","mapColor":"any"},{"id":"AnimatedImageResource_D1D49761_CB83_E04D_41E6_CF0449484854","frameCount":24,"class":"AnimatedImageResource","levels":[{"width":1000,"class":"ImageResourceLevel","height":1500,"url":"media/res_D1316581_CB82_60CD_41B7_592BBA3FB0C1_0.png"}],"colCount":4,"rowCount":6,"frameDuration":41},{"id":"HotspotPanoramaOverlayArea_DEA6620B_CB85_A3DD_41DF_24A0C06062F4","click":"this.mainPlayList.set('selectedIndex', 2)","class":"HotspotPanoramaOverlayArea","mapColor":"any"},{"id":"AnimatedImageResource_D1D4F762_CB83_E04F_41C7_AE2A44777C6D","frameCount":24,"class":"AnimatedImageResource","levels":[{"width":1000,"class":"ImageResourceLevel","height":1500,"url":"media/res_D1316581_CB82_60CD_41B7_592BBA3FB0C1_0.png"}],"colCount":4,"rowCount":6,"frameDuration":41},{"id":"HotspotPanoramaOverlayArea_DEB2EF29_CB86_E1DD_41B0_2944DA0DE122","click":"this.mainPlayList.set('selectedIndex', 3)","class":"HotspotPanoramaOverlayArea","mapColor":"any"},{"id":"AnimatedImageResource_D1D4D762_CB83_E04F_41D9_D937212A8CE4","frameCount":24,"class":"AnimatedImageResource","levels":[{"width":1000,"class":"ImageResourceLevel","height":1500,"url":"media/res_D1316581_CB82_60CD_41B7_592BBA3FB0C1_0.png"}],"colCount":4,"rowCount":6,"frameDuration":41},{"id":"HotspotPanoramaOverlayArea_D1E4DAAD_CB87_A0D5_41DD_3C280AC80125","click":"this.mainPlayList.set('selectedIndex', 1)","class":"HotspotPanoramaOverlayArea","mapColor":"any"},{"id":"AnimatedImageResource_D1D34765_CB83_E055_41D5_79C4D946DF92","frameCount":24,"class":"AnimatedImageResource","levels":[{"width":1000,"class":"ImageResourceLevel","height":1500,"url":"media/res_D1316581_CB82_60CD_41B7_592BBA3FB0C1_0.png"}],"colCount":4,"rowCount":6,"frameDuration":41},{"id":"HotspotPanoramaOverlayArea_D1E4AAAD_CB87_A0D5_41C9_542756B61286","click":"this.mainPlayList.set('selectedIndex', 1)","class":"HotspotPanoramaOverlayArea","mapColor":"any"},{"id":"AnimatedImageResource_D1D31764_CB83_E04B_41E1_15FC95640EF2","frameCount":24,"class":"AnimatedImageResource","levels":[{"width":1000,"class":"ImageResourceLevel","height":1500,"url":"media/res_D1316581_CB82_60CD_41B7_592BBA3FB0C1_0.png"}],"colCount":4,"rowCount":6,"frameDuration":41},{"id":"HotspotPanoramaOverlayArea_DEA9CCA6_CB82_60D7_41E6_3055A1A43F26","click":"this.mainPlayList.set('selectedIndex', 1)","class":"HotspotPanoramaOverlayArea","mapColor":"any"},{"id":"AnimatedImageResource_D1D45761_CB83_E04D_41DB_FD52AA1FB0BB","frameCount":24,"class":"AnimatedImageResource","levels":[{"width":1000,"class":"ImageResourceLevel","height":1500,"url":"media/res_D1316581_CB82_60CD_41B7_592BBA3FB0C1_0.png"}],"colCount":4,"rowCount":6,"frameDuration":41}],"scripts":{"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"shareSocial":TDV.Tour.Script.shareSocial,"setValue":TDV.Tour.Script.setValue,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"existsKey":TDV.Tour.Script.existsKey,"initQuiz":TDV.Tour.Script.initQuiz,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"unregisterKey":TDV.Tour.Script.unregisterKey,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"initGA":TDV.Tour.Script.initGA,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"init":TDV.Tour.Script.init,"setLocale":TDV.Tour.Script.setLocale,"getComponentByName":TDV.Tour.Script.getComponentByName,"cloneCamera":TDV.Tour.Script.cloneCamera,"registerKey":TDV.Tour.Script.registerKey,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"getMainViewer":TDV.Tour.Script.getMainViewer,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"getOverlays":TDV.Tour.Script.getOverlays,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"getKey":TDV.Tour.Script.getKey,"quizShowScore":TDV.Tour.Script.quizShowScore,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"quizStart":TDV.Tour.Script.quizStart,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"historyGoForward":TDV.Tour.Script.historyGoForward,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"getPixels":TDV.Tour.Script.getPixels,"openLink":TDV.Tour.Script.openLink,"textToSpeech":TDV.Tour.Script.textToSpeech,"quizFinish":TDV.Tour.Script.quizFinish,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"historyGoBack":TDV.Tour.Script.historyGoBack,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getMediaByName":TDV.Tour.Script.getMediaByName,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"isPanorama":TDV.Tour.Script.isPanorama,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"setMapLocation":TDV.Tour.Script.setMapLocation,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"showWindow":TDV.Tour.Script.showWindow,"playAudioList":TDV.Tour.Script.playAudioList,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"showPopupImage":TDV.Tour.Script.showPopupImage,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"mixObject":TDV.Tour.Script.mixObject,"translate":TDV.Tour.Script.translate,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"clone":TDV.Tour.Script.clone,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"resumePlayers":TDV.Tour.Script.resumePlayers,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem},"minWidth":20,"children":["this.MainViewer"],"paddingBottom":0,"shadow":false,"overflow":"hidden","scrollBarOpacity":0.5,"scrollBarMargin":2,"verticalAlign":"top","toolTipHorizontalAlign":"center","defaultVRPointer":"laser","scrollBarWidth":10};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2020.5.26.js.map
//Generated with v2020.5.26, Mon Feb 22 2021