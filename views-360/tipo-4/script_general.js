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
                        if (R) {
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
    var d = {"definitions": [{"id":"panorama_E50CE5AA_EFBE_5F3E_41C5_DE812C4EAC99","frames":[{"thumbnailUrl":"media/panorama_E50CE5AA_EFBE_5F3E_41C5_DE812C4EAC99_t.jpg","class":"CubicPanoramaFrame","cube":{"levels":[{"width":12288,"height":2048,"colCount":24,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":4,"url":"media/panorama_E50CE5AA_EFBE_5F3E_41C5_DE812C4EAC99_0/{face}/0/{row}_{column}.jpg"},{"width":6144,"height":1024,"colCount":12,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":2,"url":"media/panorama_E50CE5AA_EFBE_5F3E_41C5_DE812C4EAC99_0/{face}/1/{row}_{column}.jpg"},{"width":3072,"height":512,"colCount":6,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_E50CE5AA_EFBE_5F3E_41C5_DE812C4EAC99_0/{face}/2/{row}_{column}.jpg"},{"width":9216,"height":1536,"colCount":6,"tags":"mobilevr","class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_E50CE5AA_EFBE_5F3E_41C5_DE812C4EAC99_0/{face}/vr/0.jpg"}],"class":"ImageResource"}}],"hfovMin":"150%","label":trans('panorama_E50CE5AA_EFBE_5F3E_41C5_DE812C4EAC99.label'),"class":"Panorama","overlays":["this.overlay_E2E6B048_EFBA_357A_41D2_60F5519209BF"],"hfov":360,"hfovMax":130,"pitch":0,"thumbnailUrl":"media/panorama_E50CE5AA_EFBE_5F3E_41C5_DE812C4EAC99_t.jpg","data":{"label":"1"},"partial":false,"vfov":180,"adjacentPanoramas":[{"backwardYaw":94.57,"distance":39.52,"class":"AdjacentPanorama","yaw":93.6,"panorama":"this.panorama_E6F837B7_EFBE_3B16_41D2_B3C7A5CCC825","select":"this.overlay_E2E6B048_EFBA_357A_41D2_60F5519209BF.get('areas').forEach(function(a){ a.trigger('click') })"}]},{"id":"panorama_E6F862C6_EFBE_3576_41C7_74AF05D0A45A","frames":[{"thumbnailUrl":"media/panorama_E6F862C6_EFBE_3576_41C7_74AF05D0A45A_t.jpg","class":"CubicPanoramaFrame","cube":{"levels":[{"width":12288,"height":2048,"colCount":24,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":4,"url":"media/panorama_E6F862C6_EFBE_3576_41C7_74AF05D0A45A_0/{face}/0/{row}_{column}.jpg"},{"width":6144,"height":1024,"colCount":12,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":2,"url":"media/panorama_E6F862C6_EFBE_3576_41C7_74AF05D0A45A_0/{face}/1/{row}_{column}.jpg"},{"width":3072,"height":512,"colCount":6,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_E6F862C6_EFBE_3576_41C7_74AF05D0A45A_0/{face}/2/{row}_{column}.jpg"},{"width":9216,"height":1536,"colCount":6,"tags":"mobilevr","class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_E6F862C6_EFBE_3576_41C7_74AF05D0A45A_0/{face}/vr/0.jpg"}],"class":"ImageResource"}}],"hfovMin":"150%","label":trans('panorama_E6F862C6_EFBE_3576_41C7_74AF05D0A45A.label'),"class":"Panorama","overlays":["this.overlay_E20522A9_EFBA_F53A_41E6_0085E394F682"],"hfov":360,"hfovMax":130,"pitch":0,"thumbnailUrl":"media/panorama_E6F862C6_EFBE_3576_41C7_74AF05D0A45A_t.jpg","data":{"label":"3"},"partial":false,"vfov":180,"adjacentPanoramas":[{"backwardYaw":-99.92,"distance":69.25,"class":"AdjacentPanorama","yaw":107.58,"panorama":"this.panorama_E6F837B7_EFBE_3B16_41D2_B3C7A5CCC825","select":"this.overlay_E20522A9_EFBA_F53A_41E6_0085E394F682.get('areas').forEach(function(a){ a.trigger('click') })"}]},{"id":"panorama_E6FF3DC4_EFBE_2F6A_41E5_DBE149540E92_camera","initialSequence":"this.sequence_E616BCA1_EFBE_2D2A_41DD_A2BC738CB00B","initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"automaticZoomSpeed":10,"class":"PanoramaCamera"},{"id":"panorama_E6F837B7_EFBE_3B16_41D2_B3C7A5CCC825_camera","initialSequence":"this.sequence_E6177CA3_EFBE_2D2E_41DF_3EC918733C26","initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"automaticZoomSpeed":10,"class":"PanoramaCamera"},{"subtitlesTextShadowColor":"#000000","toolTipShadowVerticalLength":0,"toolTipBackgroundColor":"#F6F6F6","data":{"name":"Main Viewer"},"toolTipShadowHorizontalLength":0,"vrPointerSelectionTime":2000,"toolTipFontColor":"#606060","displayTooltipInSurfaceSelection":true,"toolTipShadowColor":"#333333","playbackBarBackgroundColorDirection":"vertical","playbackBarProgressBorderSize":0,"subtitlesBorderSize":0,"playbackBarRight":0,"playbackBarProgressBorderRadius":0,"doubleClickAction":"toggle_fullscreen","subtitlesBackgroundColor":"#000000","borderSize":0,"vrPointerColor":"#FFFFFF","playbackBarProgressBackgroundColor":["#3399FF"],"toolTipPaddingBottom":4,"progressHeight":10,"playbackBarHeadShadowOpacity":0.7,"toolTipShadowBlurRadius":3,"progressBorderSize":0,"progressBarBorderRadius":0,"playbackBarProgressBackgroundColorRatios":[0],"toolTipFontStyle":"normal","subtitlesShadow":false,"toolTipOpacity":1,"subtitlesTextShadowVerticalLength":1,"paddingTop":0,"playbackBarBorderRadius":0,"playbackBarBorderColor":"#FFFFFF","progressBackgroundColorRatios":[0],"playbackBarProgressBorderColor":"#000000","paddingBottom":0,"shadow":false,"toolTipPaddingLeft":6,"subtitlesBorderColor":"#FFFFFF","progressBarBorderSize":0,"borderRadius":0,"toolTipShadowSpread":0,"playbackBarHeadBorderRadius":0,"playbackBarHeadShadowVerticalLength":0,"progressRight":0,"toolTipFontFamily":"Arial","playbackBarProgressOpacity":1,"transitionMode":"blending","subtitlesFontFamily":"Arial","playbackBarHeadBorderColor":"#000000","progressBarBackgroundColorDirection":"vertical","subtitlesPaddingLeft":5,"toolTipFontSize":"1.11vmin","progressOpacity":1,"progressBarBorderColor":"#000000","progressBackgroundColorDirection":"vertical","playbackBarBorderSize":0,"progressBarBackgroundColorRatios":[0],"subtitlesBottom":50,"paddingLeft":0,"subtitlesTextShadowBlurRadius":0,"subtitlesTextDecoration":"none","toolTipShadowOpacity":1,"displayTooltipInTouchScreens":true,"subtitlesTextShadowHorizontalLength":1,"paddingRight":0,"toolTipDisplayTime":600,"progressBorderColor":"#000000","subtitlesFontWeight":"normal","playbackBarHeadShadowBlurRadius":3,"progressBorderRadius":0,"subtitlesPaddingBottom":5,"subtitlesOpacity":1,"playbackBarBackgroundOpacity":1,"progressLeft":0,"progressBarBackgroundColor":["#3399FF"],"playbackBarHeadHeight":15,"playbackBarLeft":0,"vrPointerSelectionColor":"#FF6600","playbackBarHeadShadowColor":"#000000","subtitlesTop":0,"subtitlesGap":0,"playbackBarHeadBorderSize":0,"firstTransitionDuration":0,"playbackBarHeadBackgroundColorRatios":[0,1],"toolTipBorderRadius":3,"subtitlesFontColor":"#FFFFFF","width":"100%","playbackBarHeadOpacity":1,"subtitlesHorizontalAlign":"center","playbackBarHeadShadow":true,"transitionDuration":500,"id":"MainViewer","surfaceReticleOpacity":0.6,"subtitlesPaddingTop":5,"toolTipBorderSize":1,"surfaceReticleColor":"#FFFFFF","toolTipFontWeight":"normal","toolTipTextShadowColor":"#000000","minHeight":50,"toolTipHorizontalAlign":"center","playbackBarHeadBackgroundColor":["#111111","#666666"],"minWidth":100,"playbackBarOpacity":1,"class":"ViewerArea","progressBackgroundColor":["#FFFFFF"],"subtitlesVerticalAlign":"bottom","toolTipBorderColor":"#767676","toolTipPaddingRight":6,"playbackBarBottom":5,"toolTipTextShadowBlurRadius":3,"playbackBarProgressBackgroundColorDirection":"vertical","progressBarOpacity":1,"subtitlesPaddingRight":5,"playbackBarHeadShadowHorizontalLength":0,"propagateClick":false,"height":"100%","toolTipTextShadowOpacity":0,"surfaceReticleSelectionColor":"#FFFFFF","progressBottom":0,"toolTipPaddingTop":4,"playbackBarHeight":10,"progressBackgroundOpacity":1,"playbackBarBackgroundColor":["#FFFFFF"],"playbackBarHeadBackgroundColorDirection":"vertical","subtitlesTextShadowOpacity":1,"subtitlesBackgroundOpacity":0.2,"playbackBarHeadWidth":6,"surfaceReticleSelectionOpacity":1,"subtitlesFontSize":"3vmin"},{"id":"mainPlayList","class":"PlayList","items":[{"camera":"this.panorama_E50CE5AA_EFBE_5F3E_41C5_DE812C4EAC99_camera","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","class":"PanoramaPlayListItem","media":"this.panorama_E50CE5AA_EFBE_5F3E_41C5_DE812C4EAC99"},{"camera":"this.panorama_E6FF3DC4_EFBE_2F6A_41E5_DBE149540E92_camera","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)","class":"PanoramaPlayListItem","media":"this.panorama_E6FF3DC4_EFBE_2F6A_41E5_DBE149540E92"},{"camera":"this.panorama_E6F862C6_EFBE_3576_41C7_74AF05D0A45A_camera","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 3)","class":"PanoramaPlayListItem","media":"this.panorama_E6F862C6_EFBE_3576_41C7_74AF05D0A45A"},{"camera":"this.panorama_E6F837B7_EFBE_3B16_41D2_B3C7A5CCC825_camera","end":"this.trigger('tourEnded')","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 3, 0)","class":"PanoramaPlayListItem","media":"this.panorama_E6F837B7_EFBE_3B16_41D2_B3C7A5CCC825"}]},{"id":"panorama_E6F837B7_EFBE_3B16_41D2_B3C7A5CCC825","frames":[{"thumbnailUrl":"media/panorama_E6F837B7_EFBE_3B16_41D2_B3C7A5CCC825_t.jpg","class":"CubicPanoramaFrame","cube":{"levels":[{"width":12288,"height":2048,"colCount":24,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":4,"url":"media/panorama_E6F837B7_EFBE_3B16_41D2_B3C7A5CCC825_0/{face}/0/{row}_{column}.jpg"},{"width":6144,"height":1024,"colCount":12,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":2,"url":"media/panorama_E6F837B7_EFBE_3B16_41D2_B3C7A5CCC825_0/{face}/1/{row}_{column}.jpg"},{"width":3072,"height":512,"colCount":6,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_E6F837B7_EFBE_3B16_41D2_B3C7A5CCC825_0/{face}/2/{row}_{column}.jpg"},{"width":9216,"height":1536,"colCount":6,"tags":"mobilevr","class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_E6F837B7_EFBE_3B16_41D2_B3C7A5CCC825_0/{face}/vr/0.jpg"}],"class":"ImageResource"}}],"hfovMin":"150%","label":trans('panorama_E6F837B7_EFBE_3B16_41D2_B3C7A5CCC825.label'),"class":"Panorama","overlays":["this.overlay_E2E3C04E_EFBA_3576_41C9_A5287AA92FB8","this.overlay_E2F2B2A6_EFBA_F536_41E6_D97D91FC4154","this.overlay_E2EB9679_EFBA_3D1A_41E3_827CFAC7218B","this.overlay_E2F0361C_EFC6_7D1A_41C3_5A3E23426593"],"hfov":360,"hfovMax":130,"pitch":0,"thumbnailUrl":"media/panorama_E6F837B7_EFBE_3B16_41D2_B3C7A5CCC825_t.jpg","data":{"label":"4"},"partial":false,"vfov":180,"adjacentPanoramas":[{"backwardYaw":93.6,"distance":100,"class":"AdjacentPanorama","yaw":94.57,"panorama":"this.panorama_E50CE5AA_EFBE_5F3E_41C5_DE812C4EAC99","select":"this.overlay_E2E3C04E_EFBA_3576_41C9_A5287AA92FB8.get('areas').forEach(function(a){ a.trigger('click') })"},{"backwardYaw":107.58,"distance":14.35,"class":"AdjacentPanorama","yaw":-99.92,"panorama":"this.panorama_E6F862C6_EFBE_3576_41C7_74AF05D0A45A","select":"this.overlay_E2F2B2A6_EFBA_F536_41E6_D97D91FC4154.get('areas').forEach(function(a){ a.trigger('click') })"},{"backwardYaw":-131.49,"distance":100,"enabledInSurfaceSelection":false,"class":"AdjacentPanorama","yaw":-103.01,"panorama":"this.panorama_E6FF3DC4_EFBE_2F6A_41E5_DBE149540E92","select":"this.overlay_E2EB9679_EFBA_3D1A_41E3_827CFAC7218B.get('areas').forEach(function(a){ a.trigger('click') })"},{"backwardYaw":-131.49,"distance":100,"class":"AdjacentPanorama","yaw":116.08,"panorama":"this.panorama_E6FF3DC4_EFBE_2F6A_41E5_DBE149540E92","select":"this.overlay_E2F0361C_EFC6_7D1A_41C3_5A3E23426593.get('areas').forEach(function(a){ a.trigger('click') })"}]},{"id":"panorama_E6F862C6_EFBE_3576_41C7_74AF05D0A45A_camera","initialSequence":"this.sequence_E6169CA3_EFBE_2D2E_41C3_C5111FD3FBDC","initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"automaticZoomSpeed":10,"class":"PanoramaCamera"},{"id":"MainViewerPanoramaPlayer","surfaceSelectionEnabled":false,"arrowKeysAction":"translate","touchControlMode":"drag_rotation","mouseControlMode":"drag_rotation","gyroscopeVerticalDraggingEnabled":true,"class":"PanoramaPlayer","viewerArea":"this.MainViewer","displayPlaybackBar":true,"zoomEnabled":true},{"id":"panorama_E6FF3DC4_EFBE_2F6A_41E5_DBE149540E92","frames":[{"thumbnailUrl":"media/panorama_E6FF3DC4_EFBE_2F6A_41E5_DBE149540E92_t.jpg","class":"CubicPanoramaFrame","cube":{"levels":[{"width":12288,"height":2048,"colCount":24,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":4,"url":"media/panorama_E6FF3DC4_EFBE_2F6A_41E5_DBE149540E92_0/{face}/0/{row}_{column}.jpg"},{"width":6144,"height":1024,"colCount":12,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":2,"url":"media/panorama_E6FF3DC4_EFBE_2F6A_41E5_DBE149540E92_0/{face}/1/{row}_{column}.jpg"},{"width":3072,"height":512,"colCount":6,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_E6FF3DC4_EFBE_2F6A_41E5_DBE149540E92_0/{face}/2/{row}_{column}.jpg"},{"width":9216,"height":1536,"colCount":6,"tags":"mobilevr","class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_E6FF3DC4_EFBE_2F6A_41E5_DBE149540E92_0/{face}/vr/0.jpg"}],"class":"ImageResource"}}],"hfovMin":"150%","label":trans('panorama_E6FF3DC4_EFBE_2F6A_41E5_DBE149540E92.label'),"class":"Panorama","overlays":["this.overlay_E2EC8677_EFBA_3D16_41B2_96027F9CE32B","this.overlay_E2FF561F_EFC6_7D16_41D7_4EC7E0D84879"],"hfov":360,"hfovMax":130,"pitch":0,"thumbnailUrl":"media/panorama_E6FF3DC4_EFBE_2F6A_41E5_DBE149540E92_t.jpg","data":{"label":"2"},"partial":false,"vfov":180,"adjacentPanoramas":[{"backwardYaw":-103.01,"distance":18.53,"class":"AdjacentPanorama","yaw":-131.49,"panorama":"this.panorama_E6F837B7_EFBE_3B16_41D2_B3C7A5CCC825","select":"this.overlay_E2EC8677_EFBA_3D16_41B2_96027F9CE32B.get('areas').forEach(function(a){ a.trigger('click') })"},{"backwardYaw":-103.01,"distance":100,"class":"AdjacentPanorama","yaw":-131.48,"panorama":"this.panorama_E6F837B7_EFBE_3B16_41D2_B3C7A5CCC825","select":"this.overlay_E2FF561F_EFC6_7D16_41D7_4EC7E0D84879.get('areas').forEach(function(a){ a.trigger('click') })"}]},{"id":"panorama_E50CE5AA_EFBE_5F3E_41C5_DE812C4EAC99_camera","initialSequence":"this.sequence_E6135C9E_EFBE_2D16_41A8_9FAF60025E3B","initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"automaticZoomSpeed":10,"class":"PanoramaCamera"},{"id":"overlay_E2E6B048_EFBA_357A_41D2_60F5519209BF","items":[{"image":"this.AnimatedImageResource_FFAC10AD_EFC9_D53A_41D5_AF345C8CD964","hfov":17.98,"class":"HotspotPanoramaOverlayImage","pitch":-2.46,"yaw":93.6,"scaleMode":"fit_inside","horizontalAlign":"center","verticalAlign":"middle","data":{"label":"IrA4"},"distance":100,"vfov":17.98}],"enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_E2EAB056_EFBA_3516_41D2_92DB4A05B46E"],"maps":[],"class":"HotspotPanoramaOverlay","data":{"label":"IrA4","hasPanoramaAction":true},"useHandCursor":true,"rollOverDisplay":false},{"id":"overlay_E20522A9_EFBA_F53A_41E6_0085E394F682","items":[{"image":"this.AnimatedImageResource_FFACD0B4_EFC9_D52A_41E4_C7B832A17CE8","hfov":17.99,"class":"HotspotPanoramaOverlayImage","pitch":-1.41,"yaw":107.58,"scaleMode":"fit_inside","horizontalAlign":"center","verticalAlign":"middle","data":{"label":"IrA4"},"distance":100,"vfov":17.99}],"enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_E1A8EF41_EFC6_2B6A_41EC_2B07CD54710A"],"maps":[],"class":"HotspotPanoramaOverlay","data":{"label":"IrA4","hasPanoramaAction":true},"useHandCursor":true,"rollOverDisplay":false},{"id":"sequence_E616BCA1_EFBE_2D2A_41DD_A2BC738CB00B","restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","movements":[{"yawDelta":18.5,"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":323,"easing":"linear","class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":18.5,"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawSpeed":7.96}]},{"id":"sequence_E6177CA3_EFBE_2D2E_41DF_3EC918733C26","restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","movements":[{"yawDelta":18.5,"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":323,"easing":"linear","class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":18.5,"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawSpeed":7.96}]},{"id":"overlay_E2E3C04E_EFBA_3576_41C9_A5287AA92FB8","items":[{"image":"this.AnimatedImageResource_FFAD10B4_EFC9_D52A_41D7_62F372ACF770","hfov":18,"class":"HotspotPanoramaOverlayImage","pitch":0,"yaw":94.57,"scaleMode":"fit_inside","horizontalAlign":"center","verticalAlign":"middle","data":{"label":"IrA1"},"distance":100,"vfov":18}],"enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_E1A8FF41_EFC6_2B6A_41E7_9DB80961419A"],"maps":[],"class":"HotspotPanoramaOverlay","data":{"label":"IrA1","hasPanoramaAction":true},"useHandCursor":true,"rollOverDisplay":false},{"id":"overlay_E2F2B2A6_EFBA_F536_41E6_D97D91FC4154","items":[{"image":"this.AnimatedImageResource_FFAD70B4_EFC9_D52A_419A_B20337B84F91","hfov":17.87,"class":"HotspotPanoramaOverlayImage","pitch":-6.76,"yaw":-99.92,"scaleMode":"fit_inside","horizontalAlign":"center","verticalAlign":"middle","data":{"label":"IrA3"},"distance":100,"vfov":17.87}],"enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_E20322AE_EFBA_F536_41B7_2B101D183684"],"maps":[],"class":"HotspotPanoramaOverlay","data":{"label":"IrA3","hasPanoramaAction":true},"useHandCursor":true,"rollOverDisplay":false},{"id":"overlay_E2EB9679_EFBA_3D1A_41E3_827CFAC7218B","enabled":false,"items":[{"image":"this.AnimatedImageResource_FFADB0B4_EFC9_D52A_41EA_65C7C2274F3E","hfov":18,"class":"HotspotPanoramaOverlayImage","pitch":-0.35,"yaw":-103.01,"scaleMode":"fit_inside","horizontalAlign":"center","verticalAlign":"middle","data":{"label":"IrA2"},"distance":100,"vfov":18}],"data":{"label":"IrA2","hasPanoramaAction":true},"useHandCursor":true,"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_E247A0B1_EFC6_552A_41EA_07423E246A9F"],"maps":[],"rollOverDisplay":false,"enabledInCardboard":true},{"id":"overlay_E2F0361C_EFC6_7D1A_41C3_5A3E23426593","items":[{"image":"this.AnimatedImageResource_FFAD90B4_EFC9_D52A_41E9_1288CF99F2F5","hfov":17.73,"class":"HotspotPanoramaOverlayImage","pitch":9.92,"yaw":116.08,"scaleMode":"fit_inside","horizontalAlign":"center","verticalAlign":"middle","data":{"label":"IrA2"},"distance":100,"vfov":17.73}],"enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_E2F85623_EFC6_7D2E_4183_B46C63E19050"],"maps":[],"class":"HotspotPanoramaOverlay","data":{"label":"IrA2","hasPanoramaAction":true},"useHandCursor":true,"rollOverDisplay":false},{"id":"sequence_E6169CA3_EFBE_2D2E_41C3_C5111FD3FBDC","restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","movements":[{"yawDelta":18.5,"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":323,"easing":"linear","class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":18.5,"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawSpeed":7.96}]},{"id":"overlay_E2EC8677_EFBA_3D16_41B2_96027F9CE32B","items":[{"image":"this.AnimatedImageResource_FFAC80B2_EFC9_D52E_41EB_8D4FA2F7F1E4","hfov":17.92,"class":"HotspotPanoramaOverlayImage","pitch":-5.24,"yaw":-131.49,"scaleMode":"fit_inside","horizontalAlign":"center","verticalAlign":"middle","data":{"label":"IrA4"},"distance":100,"vfov":17.92}],"enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_E2F0967D_EFBA_3D1A_41EC_F91AD3DB7836"],"maps":[],"class":"HotspotPanoramaOverlay","data":{"label":"IrA4","hasPanoramaAction":true},"useHandCursor":true,"rollOverDisplay":false},{"id":"overlay_E2FF561F_EFC6_7D16_41D7_4EC7E0D84879","items":[{"image":"this.AnimatedImageResource_FFACE0B4_EFC9_D52A_41CB_D329F13BB253","hfov":18,"class":"HotspotPanoramaOverlayImage","pitch":0,"yaw":-131.48,"scaleMode":"fit_inside","horizontalAlign":"center","verticalAlign":"middle","data":{"label":"IrA4"},"distance":100,"vfov":18}],"enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_E1A91F41_EFC6_2B6A_41E5_B6AF89362FC1"],"maps":[],"class":"HotspotPanoramaOverlay","data":{"label":"IrA4","hasPanoramaAction":true},"useHandCursor":true,"rollOverDisplay":false},{"id":"sequence_E6135C9E_EFBE_2D16_41A8_9FAF60025E3B","restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","movements":[{"yawDelta":18.5,"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":323,"easing":"linear","class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":18.5,"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawSpeed":7.96}]},{"id":"AnimatedImageResource_FFAC10AD_EFC9_D53A_41D5_AF345C8CD964","frameCount":24,"frameDuration":41,"levels":[{"width":1000,"class":"ImageResourceLevel","height":1500,"url":"media/res_FEF1C8BE_EFCA_7516_41EC_25E650DC2D07_0.png"}],"class":"AnimatedImageResource","rowCount":6,"colCount":4},{"id":"HotspotPanoramaOverlayArea_E2EAB056_EFBA_3516_41D2_92DB4A05B46E","click":"this.mainPlayList.set('selectedIndex', 3)","class":"HotspotPanoramaOverlayArea","mapColor":"any"},{"id":"AnimatedImageResource_FFACD0B4_EFC9_D52A_41E4_C7B832A17CE8","frameCount":24,"frameDuration":41,"levels":[{"width":1000,"class":"ImageResourceLevel","height":1500,"url":"media/res_FEF1C8BE_EFCA_7516_41EC_25E650DC2D07_0.png"}],"class":"AnimatedImageResource","rowCount":6,"colCount":4},{"id":"HotspotPanoramaOverlayArea_E1A8EF41_EFC6_2B6A_41EC_2B07CD54710A","click":"this.mainPlayList.set('selectedIndex', 3)","class":"HotspotPanoramaOverlayArea","mapColor":"any"},{"id":"AnimatedImageResource_FFAD10B4_EFC9_D52A_41D7_62F372ACF770","frameCount":24,"frameDuration":41,"levels":[{"width":1000,"class":"ImageResourceLevel","height":1500,"url":"media/res_FEF1C8BE_EFCA_7516_41EC_25E650DC2D07_0.png"}],"class":"AnimatedImageResource","rowCount":6,"colCount":4},{"id":"HotspotPanoramaOverlayArea_E1A8FF41_EFC6_2B6A_41E7_9DB80961419A","click":"this.mainPlayList.set('selectedIndex', 0)","class":"HotspotPanoramaOverlayArea","mapColor":"any"},{"id":"AnimatedImageResource_FFAD70B4_EFC9_D52A_419A_B20337B84F91","frameCount":24,"frameDuration":41,"levels":[{"width":1000,"class":"ImageResourceLevel","height":1500,"url":"media/res_FEF1C8BE_EFCA_7516_41EC_25E650DC2D07_0.png"}],"class":"AnimatedImageResource","rowCount":6,"colCount":4},{"id":"HotspotPanoramaOverlayArea_E20322AE_EFBA_F536_41B7_2B101D183684","click":"this.mainPlayList.set('selectedIndex', 2)","class":"HotspotPanoramaOverlayArea","mapColor":"any"},{"id":"AnimatedImageResource_FFADB0B4_EFC9_D52A_41EA_65C7C2274F3E","frameCount":24,"frameDuration":41,"levels":[{"width":1000,"class":"ImageResourceLevel","height":1500,"url":"media/res_FEF1C8BE_EFCA_7516_41EC_25E650DC2D07_0.png"}],"class":"AnimatedImageResource","rowCount":6,"colCount":4},{"id":"HotspotPanoramaOverlayArea_E247A0B1_EFC6_552A_41EA_07423E246A9F","click":"this.mainPlayList.set('selectedIndex', 1)","class":"HotspotPanoramaOverlayArea","mapColor":"any"},{"id":"AnimatedImageResource_FFAD90B4_EFC9_D52A_41E9_1288CF99F2F5","frameCount":24,"frameDuration":41,"levels":[{"width":1000,"class":"ImageResourceLevel","height":1500,"url":"media/res_FEF1C8BE_EFCA_7516_41EC_25E650DC2D07_0.png"}],"class":"AnimatedImageResource","rowCount":6,"colCount":4},{"id":"HotspotPanoramaOverlayArea_E2F85623_EFC6_7D2E_4183_B46C63E19050","click":"this.mainPlayList.set('selectedIndex', 1)","class":"HotspotPanoramaOverlayArea","mapColor":"any"},{"id":"AnimatedImageResource_FFAC80B2_EFC9_D52E_41EB_8D4FA2F7F1E4","frameCount":24,"frameDuration":41,"levels":[{"width":1000,"class":"ImageResourceLevel","height":1500,"url":"media/res_FEF1C8BE_EFCA_7516_41EC_25E650DC2D07_0.png"}],"class":"AnimatedImageResource","rowCount":6,"colCount":4},{"id":"HotspotPanoramaOverlayArea_E2F0967D_EFBA_3D1A_41EC_F91AD3DB7836","click":"this.mainPlayList.set('selectedIndex', 3)","class":"HotspotPanoramaOverlayArea","mapColor":"any"},{"id":"AnimatedImageResource_FFACE0B4_EFC9_D52A_41CB_D329F13BB253","frameCount":24,"frameDuration":41,"levels":[{"width":1000,"class":"ImageResourceLevel","height":1500,"url":"media/res_FEF1C8BE_EFCA_7516_41EC_25E650DC2D07_0.png"}],"class":"AnimatedImageResource","rowCount":6,"colCount":4},{"id":"HotspotPanoramaOverlayArea_E1A91F41_EFC6_2B6A_41E5_B6AF89362FC1","click":"this.mainPlayList.set('selectedIndex', 3)","class":"HotspotPanoramaOverlayArea","mapColor":"any"}],"scrollBarWidth":10,"desktopMipmappingEnabled":false,"paddingRight":0,"scripts":{"getMediaHeight":TDV.Tour.Script.getMediaHeight,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"getOverlays":TDV.Tour.Script.getOverlays,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"setValue":TDV.Tour.Script.setValue,"resumePlayers":TDV.Tour.Script.resumePlayers,"quizShowScore":TDV.Tour.Script.quizShowScore,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"registerKey":TDV.Tour.Script.registerKey,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"getMediaByName":TDV.Tour.Script.getMediaByName,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"isPanorama":TDV.Tour.Script.isPanorama,"quizStart":TDV.Tour.Script.quizStart,"existsKey":TDV.Tour.Script.existsKey,"setLocale":TDV.Tour.Script.setLocale,"quizFinish":TDV.Tour.Script.quizFinish,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"init":TDV.Tour.Script.init,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"getKey":TDV.Tour.Script.getKey,"textToSpeech":TDV.Tour.Script.textToSpeech,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getPixels":TDV.Tour.Script.getPixels,"initGA":TDV.Tour.Script.initGA,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"getComponentByName":TDV.Tour.Script.getComponentByName,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"cloneCamera":TDV.Tour.Script.cloneCamera,"setMapLocation":TDV.Tour.Script.setMapLocation,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"unregisterKey":TDV.Tour.Script.unregisterKey,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"openLink":TDV.Tour.Script.openLink,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"historyGoForward":TDV.Tour.Script.historyGoForward,"shareSocial":TDV.Tour.Script.shareSocial,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"showPopupImage":TDV.Tour.Script.showPopupImage,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"showWindow":TDV.Tour.Script.showWindow,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"playAudioList":TDV.Tour.Script.playAudioList,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"translate":TDV.Tour.Script.translate,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"clone":TDV.Tour.Script.clone,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"mixObject":TDV.Tour.Script.mixObject,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"getMainViewer":TDV.Tour.Script.getMainViewer,"initQuiz":TDV.Tour.Script.initQuiz,"historyGoBack":TDV.Tour.Script.historyGoBack,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex},"vrPolyfillScale":0.75,"children":["this.MainViewer"],"height":"100%","start":"this.init()","horizontalAlign":"left","backgroundColorRatios":[0],"contentOpaque":false,"mediaActivationMode":"window","scrollBarColor":"#000000","borderSize":0,"backgroundColorDirection":"vertical","layout":"absolute","scrollBarMargin":2,"downloadEnabled":false,"width":"100%","backgroundColor":["#FFFFFF"],"id":"rootPlayer","minHeight":20,"paddingTop":0,"toolTipHorizontalAlign":"center","mobileMipmappingEnabled":false,"minWidth":20,"class":"Player","paddingBottom":0,"shadow":false,"propagateClick":false,"mouseWheelEnabled":true,"scrollBarOpacity":0.5,"borderRadius":0,"scrollBarVisible":"rollOver","backgroundOpacity":1,"overflow":"hidden","verticalAlign":"top","gap":10,"defaultVRPointer":"laser","paddingLeft":0,"data":{"name":"Player1532","textToSpeechConfig":{"speechOnTooltip":false,"speechOnQuizQuestion":false,"rate":1,"speechOnInfoWindow":false,"pitch":1,"volume":1},"locales":{"es":"locale/es.txt"},"defaultLocale":"es"},"backgroundPreloadEnabled":true};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2020.5.27.js.map
//Generated with v2020.5.27, Mon Mar 1 2021