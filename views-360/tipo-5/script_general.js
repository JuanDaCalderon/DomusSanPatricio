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
    var d = {"overflow":"hidden","definitions": [{"id":"mainPlayList","class":"PlayList","items":[{"camera":"this.panorama_152AFEAE_182E_2682_41B3_D8F2ED82E80D_camera","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","class":"PanoramaPlayListItem","media":"this.panorama_152AFEAE_182E_2682_41B3_D8F2ED82E80D"},{"camera":"this.panorama_1535F99A_182E_2A82_4199_BEDA5D12F3B8_camera","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)","class":"PanoramaPlayListItem","media":"this.panorama_1535F99A_182E_2A82_4199_BEDA5D12F3B8"},{"camera":"this.panorama_0A8A2440_182E_39FE_41A6_A1EB6C3AF67C_camera","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 3)","class":"PanoramaPlayListItem","media":"this.panorama_0A8A2440_182E_39FE_41A6_A1EB6C3AF67C"},{"camera":"this.panorama_152AA3C2_182E_5E82_41B3_A8F8090E2121_camera","end":"this.trigger('tourEnded')","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 3, 0)","class":"PanoramaPlayListItem","media":"this.panorama_152AA3C2_182E_5E82_41B3_A8F8090E2121"}]},{"id":"panorama_152AFEAE_182E_2682_41B3_D8F2ED82E80D","frames":[{"thumbnailUrl":"media/panorama_152AFEAE_182E_2682_41B3_D8F2ED82E80D_t.jpg","class":"CubicPanoramaFrame","cube":{"levels":[{"width":12288,"height":2048,"colCount":24,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":4,"url":"media/panorama_152AFEAE_182E_2682_41B3_D8F2ED82E80D_0/{face}/0/{row}_{column}.jpg"},{"width":6144,"height":1024,"colCount":12,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":2,"url":"media/panorama_152AFEAE_182E_2682_41B3_D8F2ED82E80D_0/{face}/1/{row}_{column}.jpg"},{"width":3072,"height":512,"colCount":6,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_152AFEAE_182E_2682_41B3_D8F2ED82E80D_0/{face}/2/{row}_{column}.jpg"},{"width":9216,"height":1536,"colCount":6,"tags":"mobilevr","class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_152AFEAE_182E_2682_41B3_D8F2ED82E80D_0/{face}/vr/0.jpg"}],"class":"ImageResource"}}],"hfovMin":"150%","label":trans('panorama_152AFEAE_182E_2682_41B3_D8F2ED82E80D.label'),"class":"Panorama","overlays":["this.overlay_0A28C45D_182A_D986_417E_08CD3EC19524"],"hfov":360,"partial":false,"hfovMax":130,"pitch":0,"thumbnailUrl":"media/panorama_152AFEAE_182E_2682_41B3_D8F2ED82E80D_t.jpg","data":{"label":"Entrance"},"vfov":180,"adjacentPanoramas":[{"backwardYaw":178.74,"distance":6.47,"class":"AdjacentPanorama","yaw":-5.18,"panorama":"this.panorama_1535F99A_182E_2A82_4199_BEDA5D12F3B8","select":"this.overlay_0A28C45D_182A_D986_417E_08CD3EC19524.get('areas').forEach(function(a){ a.trigger('click') })"}]},{"id":"panorama_0A8A2440_182E_39FE_41A6_A1EB6C3AF67C_camera","initialSequence":"this.sequence_152B5904_182E_6B86_4178_31A219BFA9DC","initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"class":"PanoramaCamera","automaticZoomSpeed":10},{"id":"panorama_152AA3C2_182E_5E82_41B3_A8F8090E2121","frames":[{"thumbnailUrl":"media/panorama_152AA3C2_182E_5E82_41B3_A8F8090E2121_t.jpg","class":"CubicPanoramaFrame","cube":{"levels":[{"width":12288,"height":2048,"colCount":24,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":4,"url":"media/panorama_152AA3C2_182E_5E82_41B3_A8F8090E2121_0/{face}/0/{row}_{column}.jpg"},{"width":6144,"height":1024,"colCount":12,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":2,"url":"media/panorama_152AA3C2_182E_5E82_41B3_A8F8090E2121_0/{face}/1/{row}_{column}.jpg"},{"width":3072,"height":512,"colCount":6,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_152AA3C2_182E_5E82_41B3_A8F8090E2121_0/{face}/2/{row}_{column}.jpg"},{"width":9216,"height":1536,"colCount":6,"tags":"mobilevr","class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_152AA3C2_182E_5E82_41B3_A8F8090E2121_0/{face}/vr/0.jpg"}],"class":"ImageResource"}}],"hfovMin":"150%","label":trans('panorama_152AA3C2_182E_5E82_41B3_A8F8090E2121.label'),"class":"Panorama","overlays":["this.overlay_0B2692B4_1825_DE86_4179_E37E6F9B361E"],"hfov":360,"partial":false,"hfovMax":130,"pitch":0,"thumbnailUrl":"media/panorama_152AA3C2_182E_5E82_41B3_A8F8090E2121_t.jpg","data":{"label":"Bedroom"},"vfov":180,"adjacentPanoramas":[{"backwardYaw":-155,"distance":9.73,"class":"AdjacentPanorama","yaw":-24.89,"panorama":"this.panorama_0A8A2440_182E_39FE_41A6_A1EB6C3AF67C","select":"this.overlay_0B2692B4_1825_DE86_4179_E37E6F9B361E.get('areas').forEach(function(a){ a.trigger('click') })"}]},{"id":"MainViewerPanoramaPlayer","displayPlaybackBar":true,"touchControlMode":"drag_rotation","viewerArea":"this.MainViewer","gyroscopeVerticalDraggingEnabled":true,"class":"PanoramaPlayer","mouseControlMode":"drag_rotation","arrowKeysAction":"translate","zoomEnabled":true,"surfaceSelectionEnabled":false},{"id":"panorama_152AA3C2_182E_5E82_41B3_A8F8090E2121_camera","initialSequence":"this.sequence_152B3904_182E_6B86_41A7_BEB441D3986B","initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"class":"PanoramaCamera","automaticZoomSpeed":10},{"id":"panorama_1535F99A_182E_2A82_4199_BEDA5D12F3B8","frames":[{"thumbnailUrl":"media/panorama_1535F99A_182E_2A82_4199_BEDA5D12F3B8_t.jpg","class":"CubicPanoramaFrame","cube":{"levels":[{"width":12288,"height":2048,"colCount":24,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":4,"url":"media/panorama_1535F99A_182E_2A82_4199_BEDA5D12F3B8_0/{face}/0/{row}_{column}.jpg"},{"width":6144,"height":1024,"colCount":12,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":2,"url":"media/panorama_1535F99A_182E_2A82_4199_BEDA5D12F3B8_0/{face}/1/{row}_{column}.jpg"},{"width":3072,"height":512,"colCount":6,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_1535F99A_182E_2A82_4199_BEDA5D12F3B8_0/{face}/2/{row}_{column}.jpg"},{"width":9216,"height":1536,"colCount":6,"tags":"mobilevr","class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_1535F99A_182E_2A82_4199_BEDA5D12F3B8_0/{face}/vr/0.jpg"}],"class":"ImageResource"}}],"hfovMin":"150%","label":trans('panorama_1535F99A_182E_2A82_4199_BEDA5D12F3B8.label'),"class":"Panorama","overlays":["this.overlay_0BB59B51_182B_EF9E_41B6_5D11B25A2456","this.overlay_0BD0A6E2_182A_6682_41AA_909DEAB2E896"],"hfov":360,"partial":false,"hfovMax":130,"pitch":0,"thumbnailUrl":"media/panorama_1535F99A_182E_2A82_4199_BEDA5D12F3B8_t.jpg","data":{"label":"Living"},"vfov":180,"adjacentPanoramas":[{"backwardYaw":-5.18,"distance":10.7,"class":"AdjacentPanorama","yaw":178.74,"panorama":"this.panorama_152AFEAE_182E_2682_41B3_D8F2ED82E80D","select":"this.overlay_0BB59B51_182B_EF9E_41B6_5D11B25A2456.get('areas').forEach(function(a){ a.trigger('click') })"},{"distance":4.57,"select":"this.overlay_0BD0A6E2_182A_6682_41AA_909DEAB2E896.get('areas').forEach(function(a){ a.trigger('click') })","class":"AdjacentPanorama","yaw":-87.54,"panorama":"this.panorama_0A8A2440_182E_39FE_41A6_A1EB6C3AF67C"}]},{"id":"panorama_1535F99A_182E_2A82_4199_BEDA5D12F3B8_camera","initialSequence":"this.sequence_152B7904_182E_6B86_4172_4ABE56F70078","initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"class":"PanoramaCamera","automaticZoomSpeed":10},{"subtitlesTextShadowColor":"#000000","toolTipBackgroundColor":"#F6F6F6","data":{"name":"Main Viewer"},"toolTipFontColor":"#606060","toolTipShadowColor":"#333333","playbackBarBackgroundColorDirection":"vertical","playbackBarProgressBorderSize":0,"subtitlesBorderSize":0,"playbackBarRight":0,"playbackBarProgressBorderRadius":0,"doubleClickAction":"toggle_fullscreen","subtitlesBackgroundColor":"#000000","borderSize":0,"vrPointerColor":"#FFFFFF","displayTooltipInSurfaceSelection":true,"playbackBarProgressBackgroundColor":["#3399FF"],"toolTipPaddingBottom":4,"progressHeight":10,"subtitlesTextShadowVerticalLength":1,"playbackBarHeadShadowOpacity":0.7,"toolTipShadowBlurRadius":3,"progressBorderSize":0,"progressBarBorderRadius":0,"playbackBarProgressBackgroundColorRatios":[0],"subtitlesShadow":false,"toolTipFontStyle":"normal","toolTipOpacity":1,"paddingTop":0,"playbackBarBorderRadius":0,"playbackBarBorderColor":"#FFFFFF","toolTipPaddingLeft":6,"playbackBarProgressBorderColor":"#000000","transitionMode":"blending","shadow":false,"progressBackgroundColorRatios":[0],"playbackBarBackgroundOpacity":1,"progressBarBorderSize":0,"paddingBottom":0,"playbackBarHeadBorderRadius":0,"progressRight":0,"toolTipFontFamily":"Arial","playbackBarProgressOpacity":1,"borderRadius":0,"progressOpacity":1,"subtitlesFontFamily":"Arial","playbackBarHeadBorderColor":"#000000","progressBarBackgroundColorDirection":"vertical","subtitlesPaddingLeft":5,"progressBarBackgroundColorRatios":[0],"toolTipFontSize":"1.11vmin","progressBarBorderColor":"#000000","progressBackgroundColorDirection":"vertical","playbackBarBorderSize":0,"toolTipShadowSpread":0,"subtitlesBorderColor":"#FFFFFF","paddingLeft":0,"subtitlesTextShadowBlurRadius":0,"subtitlesTextDecoration":"none","toolTipShadowOpacity":1,"displayTooltipInTouchScreens":true,"paddingRight":0,"toolTipDisplayTime":600,"progressBorderColor":"#000000","subtitlesFontWeight":"normal","subtitlesBottom":50,"playbackBarHeadShadowBlurRadius":3,"progressBorderRadius":0,"subtitlesPaddingBottom":5,"subtitlesOpacity":1,"playbackBarLeft":0,"progressLeft":0,"progressBarBackgroundColor":["#3399FF"],"playbackBarHeadHeight":15,"playbackBarHeadShadowHorizontalLength":0,"vrPointerSelectionColor":"#FF6600","playbackBarHeadShadowColor":"#000000","subtitlesTop":0,"playbackBarHeadBackgroundColorRatios":[0,1],"subtitlesGap":0,"playbackBarHeadBorderSize":0,"width":"100%","subtitlesHorizontalAlign":"center","toolTipBorderRadius":3,"firstTransitionDuration":0,"subtitlesFontColor":"#FFFFFF","subtitlesTextShadowHorizontalLength":1,"surfaceReticleColor":"#FFFFFF","playbackBarHeadShadow":true,"transitionDuration":500,"id":"MainViewer","surfaceReticleOpacity":0.6,"playbackBarHeadOpacity":1,"toolTipShadowHorizontalLength":0,"toolTipBorderSize":1,"subtitlesPaddingRight":5,"toolTipTextShadowColor":"#000000","minHeight":50,"subtitlesPaddingTop":5,"toolTipHorizontalAlign":"center","playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipFontWeight":"normal","playbackBarOpacity":1,"class":"ViewerArea","progressBackgroundColor":["#FFFFFF"],"subtitlesVerticalAlign":"bottom","minWidth":100,"toolTipBorderColor":"#767676","toolTipPaddingRight":6,"playbackBarBottom":5,"toolTipTextShadowBlurRadius":3,"playbackBarProgressBackgroundColorDirection":"vertical","progressBarOpacity":1,"progressBottom":0,"subtitlesFontSize":"3vmin","height":"100%","toolTipTextShadowOpacity":0,"surfaceReticleSelectionColor":"#FFFFFF","toolTipPaddingTop":4,"playbackBarHeight":10,"playbackBarHeadShadowVerticalLength":0,"surfaceReticleSelectionOpacity":1,"propagateClick":false,"toolTipShadowVerticalLength":0,"playbackBarHeadBackgroundColorDirection":"vertical","subtitlesTextShadowOpacity":1,"progressBackgroundOpacity":1,"subtitlesBackgroundOpacity":0.2,"playbackBarHeadWidth":6,"playbackBarBackgroundColor":["#FFFFFF"],"vrPointerSelectionTime":2000},{"id":"panorama_152AFEAE_182E_2682_41B3_D8F2ED82E80D_camera","initialSequence":"this.sequence_152B1904_182E_6B86_417C_A3438C61529E","initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"class":"PanoramaCamera","automaticZoomSpeed":10},{"id":"panorama_0A8A2440_182E_39FE_41A6_A1EB6C3AF67C","frames":[{"thumbnailUrl":"media/panorama_0A8A2440_182E_39FE_41A6_A1EB6C3AF67C_t.jpg","class":"CubicPanoramaFrame","cube":{"levels":[{"width":12288,"height":2048,"colCount":24,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":4,"url":"media/panorama_0A8A2440_182E_39FE_41A6_A1EB6C3AF67C_0/{face}/0/{row}_{column}.jpg"},{"width":6144,"height":1024,"colCount":12,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":2,"url":"media/panorama_0A8A2440_182E_39FE_41A6_A1EB6C3AF67C_0/{face}/1/{row}_{column}.jpg"},{"width":3072,"height":512,"colCount":6,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_0A8A2440_182E_39FE_41A6_A1EB6C3AF67C_0/{face}/2/{row}_{column}.jpg"},{"width":9216,"height":1536,"colCount":6,"tags":"mobilevr","class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_0A8A2440_182E_39FE_41A6_A1EB6C3AF67C_0/{face}/vr/0.jpg"}],"class":"ImageResource"}}],"hfovMin":"150%","label":trans('panorama_0A8A2440_182E_39FE_41A6_A1EB6C3AF67C.label'),"class":"Panorama","overlays":["this.overlay_0B1905A4_182A_5A86_4193_99B20436D153"],"hfov":360,"partial":false,"hfovMax":130,"pitch":0,"thumbnailUrl":"media/panorama_0A8A2440_182E_39FE_41A6_A1EB6C3AF67C_t.jpg","data":{"label":"Rooms Hall"},"vfov":180,"adjacentPanoramas":[{"backwardYaw":-24.89,"distance":49.94,"class":"AdjacentPanorama","yaw":-155,"panorama":"this.panorama_152AA3C2_182E_5E82_41B3_A8F8090E2121","select":"this.overlay_0B1905A4_182A_5A86_4193_99B20436D153.get('areas').forEach(function(a){ a.trigger('click') })"}]},{"id":"overlay_0A28C45D_182A_D986_417E_08CD3EC19524","enabledInCardboard":true,"items":[{"scaleMode":"fit_inside","image":"this.res_0BDCB48B_1826_7A82_41B2_BA3EAE4A586F","data":{"label":"IrALiving"},"hfov":13.23,"class":"HotspotPanoramaOverlayImage","verticalAlign":"middle","distance":50,"pitch":-14.72,"vfov":5.13,"yaw":-5.18,"horizontalAlign":"center"}],"areas":["this.HotspotPanoramaOverlayArea_15E7F4C0_182A_DAFE_41B2_22C2865B6C0E"],"maps":[],"class":"HotspotPanoramaOverlay","data":{"label":"IrALiving","hasPanoramaAction":true},"useHandCursor":true,"rollOverDisplay":false},{"id":"sequence_152B5904_182E_6B86_4178_31A219BFA9DC","restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","movements":[{"yawSpeed":7.96,"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawDelta":18.5},{"yawSpeed":7.96,"easing":"linear","class":"DistancePanoramaCameraMovement","yawDelta":323},{"yawSpeed":7.96,"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawDelta":18.5}]},{"id":"overlay_0B2692B4_1825_DE86_4179_E37E6F9B361E","enabledInCardboard":true,"items":[{"scaleMode":"fit_inside","image":"this.res_0BDC048B_1826_7A82_418B_49C4792194A3","data":{"label":"IrARoomsHall"},"hfov":19.02,"class":"HotspotPanoramaOverlayImage","verticalAlign":"middle","distance":50,"pitch":-9.91,"vfov":19.77,"yaw":-24.89,"horizontalAlign":"center"}],"areas":["this.HotspotPanoramaOverlayArea_159EC31C_1825_DF86_41B0_968B2EBE6A1D"],"maps":[],"class":"HotspotPanoramaOverlay","data":{"label":"IrARoomsHall","hasPanoramaAction":true},"useHandCursor":true,"rollOverDisplay":false},{"id":"sequence_152B3904_182E_6B86_41A7_BEB441D3986B","restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","movements":[{"yawSpeed":7.96,"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawDelta":18.5},{"yawSpeed":7.96,"easing":"linear","class":"DistancePanoramaCameraMovement","yawDelta":323},{"yawSpeed":7.96,"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawDelta":18.5}]},{"id":"overlay_0BB59B51_182B_EF9E_41B6_5D11B25A2456","enabledInCardboard":true,"items":[{"scaleMode":"fit_inside","image":"this.res_0BDC448B_1826_7A82_41A7_5D2A3AA68428","data":{"label":"IrAEntrance"},"hfov":13.58,"class":"HotspotPanoramaOverlayImage","verticalAlign":"middle","distance":50,"pitch":-9.03,"vfov":13.58,"yaw":178.74,"horizontalAlign":"center"}],"areas":["this.HotspotPanoramaOverlayArea_15A72B7A_182B_EF82_41B3_EADC1BE73394"],"maps":[],"class":"HotspotPanoramaOverlay","data":{"label":"IrAEntrance","hasPanoramaAction":true},"useHandCursor":true,"rollOverDisplay":false},{"id":"overlay_0BD0A6E2_182A_6682_41AA_909DEAB2E896","enabledInCardboard":true,"items":[{"scaleMode":"fit_inside","image":"this.res_0BDC748B_1826_7A82_41A1_CBBBC2212A73","data":{"label":"IrARoomsHall"},"hfov":20.87,"class":"HotspotPanoramaOverlayImage","verticalAlign":"middle","distance":50,"pitch":-20.4,"vfov":7.1,"yaw":-87.54,"horizontalAlign":"center"}],"areas":["this.HotspotPanoramaOverlayArea_159F0709_182A_678E_41B5_C8EAA6C1677A"],"maps":[],"class":"HotspotPanoramaOverlay","data":{"label":"IrARoomsHall","hasPanoramaAction":true},"useHandCursor":true,"rollOverDisplay":false},{"id":"sequence_152B7904_182E_6B86_4172_4ABE56F70078","restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","movements":[{"yawSpeed":7.96,"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawDelta":18.5},{"yawSpeed":7.96,"easing":"linear","class":"DistancePanoramaCameraMovement","yawDelta":323},{"yawSpeed":7.96,"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawDelta":18.5}]},{"id":"sequence_152B1904_182E_6B86_417C_A3438C61529E","restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","movements":[{"yawSpeed":7.96,"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawDelta":18.5},{"yawSpeed":7.96,"easing":"linear","class":"DistancePanoramaCameraMovement","yawDelta":323},{"yawSpeed":7.96,"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawDelta":18.5}]},{"id":"overlay_0B1905A4_182A_5A86_4193_99B20436D153","enabledInCardboard":true,"items":[{"scaleMode":"fit_inside","image":"this.res_0BDC648B_1826_7A82_41AD_09A4279D2659","data":{"label":"IrABedroom"},"hfov":23.84,"class":"HotspotPanoramaOverlayImage","verticalAlign":"middle","distance":50,"pitch":-1.95,"vfov":21.32,"yaw":-155,"horizontalAlign":"center"}],"areas":["this.HotspotPanoramaOverlayArea_1596C60B_182A_5982_41B1_52CE5CA5A996"],"maps":[],"class":"HotspotPanoramaOverlay","data":{"label":"IrABedroom","hasPanoramaAction":true},"useHandCursor":true,"rollOverDisplay":false},{"id":"res_0BDCB48B_1826_7A82_41B2_BA3EAE4A586F","levels":[{"width":190,"class":"ImageResourceLevel","height":65,"url":"media/res_0BDCB48B_1826_7A82_41B2_BA3EAE4A586F_0.png"}],"class":"ImageResource"},{"id":"HotspotPanoramaOverlayArea_15E7F4C0_182A_DAFE_41B2_22C2865B6C0E","click":"this.mainPlayList.set('selectedIndex', 1)","class":"HotspotPanoramaOverlayArea","mapColor":"any"},{"id":"res_0BDC048B_1826_7A82_418B_49C4792194A3","levels":[{"width":191,"class":"ImageResourceLevel","height":191,"url":"media/res_0BDC048B_1826_7A82_418B_49C4792194A3_0.png"}],"class":"ImageResource"},{"id":"HotspotPanoramaOverlayArea_159EC31C_1825_DF86_41B0_968B2EBE6A1D","click":"this.mainPlayList.set('selectedIndex', 2)","class":"HotspotPanoramaOverlayArea","mapColor":"any"},{"id":"res_0BDC448B_1826_7A82_41A7_5D2A3AA68428","levels":[{"width":191,"class":"ImageResourceLevel","height":191,"url":"media/res_0BDC448B_1826_7A82_41A7_5D2A3AA68428_0.png"}],"class":"ImageResource"},{"id":"HotspotPanoramaOverlayArea_15A72B7A_182B_EF82_41B3_EADC1BE73394","click":"this.mainPlayList.set('selectedIndex', 0)","class":"HotspotPanoramaOverlayArea","mapColor":"any"},{"id":"res_0BDC748B_1826_7A82_41A1_CBBBC2212A73","levels":[{"width":191,"class":"ImageResourceLevel","height":65,"url":"media/res_0BDC748B_1826_7A82_41A1_CBBBC2212A73_0.png"}],"class":"ImageResource"},{"id":"HotspotPanoramaOverlayArea_159F0709_182A_678E_41B5_C8EAA6C1677A","click":"this.mainPlayList.set('selectedIndex', 2)","class":"HotspotPanoramaOverlayArea","mapColor":"any"},{"id":"res_0BDC648B_1826_7A82_41AD_09A4279D2659","levels":[{"width":191,"class":"ImageResourceLevel","height":191,"url":"media/res_0BDC648B_1826_7A82_41AD_09A4279D2659_0.png"}],"class":"ImageResource"},{"id":"HotspotPanoramaOverlayArea_1596C60B_182A_5982_41B1_52CE5CA5A996","click":"this.mainPlayList.set('selectedIndex', 3)","class":"HotspotPanoramaOverlayArea","mapColor":"any"}],"start":"this.init()","data":{"name":"Player44193","textToSpeechConfig":{"speechOnTooltip":false,"speechOnQuizQuestion":false,"rate":1,"speechOnInfoWindow":false,"pitch":1,"volume":1},"locales":{"es":"locale/es.txt"},"defaultLocale":"es"},"paddingRight":0,"scripts":{"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"quizShowScore":TDV.Tour.Script.quizShowScore,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"setValue":TDV.Tour.Script.setValue,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"isPanorama":TDV.Tour.Script.isPanorama,"quizStart":TDV.Tour.Script.quizStart,"quizFinish":TDV.Tour.Script.quizFinish,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"getMediaByName":TDV.Tour.Script.getMediaByName,"getPixels":TDV.Tour.Script.getPixels,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"init":TDV.Tour.Script.init,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"setLocale":TDV.Tour.Script.setLocale,"getKey":TDV.Tour.Script.getKey,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"textToSpeech":TDV.Tour.Script.textToSpeech,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"setMapLocation":TDV.Tour.Script.setMapLocation,"getOverlays":TDV.Tour.Script.getOverlays,"unregisterKey":TDV.Tour.Script.unregisterKey,"registerKey":TDV.Tour.Script.registerKey,"getComponentByName":TDV.Tour.Script.getComponentByName,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"openLink":TDV.Tour.Script.openLink,"playAudioList":TDV.Tour.Script.playAudioList,"existsKey":TDV.Tour.Script.existsKey,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"shareSocial":TDV.Tour.Script.shareSocial,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"showPopupImage":TDV.Tour.Script.showPopupImage,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"historyGoBack":TDV.Tour.Script.historyGoBack,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"historyGoForward":TDV.Tour.Script.historyGoForward,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"resumePlayers":TDV.Tour.Script.resumePlayers,"showWindow":TDV.Tour.Script.showWindow,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"cloneCamera":TDV.Tour.Script.cloneCamera,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"mixObject":TDV.Tour.Script.mixObject,"initGA":TDV.Tour.Script.initGA,"clone":TDV.Tour.Script.clone,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"initQuiz":TDV.Tour.Script.initQuiz,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"translate":TDV.Tour.Script.translate,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"getMainViewer":TDV.Tour.Script.getMainViewer},"scrollBarWidth":10,"backgroundPreloadEnabled":true,"horizontalAlign":"left","backgroundColorRatios":[0],"scrollBarColor":"#000000","mediaActivationMode":"window","borderSize":0,"backgroundColorDirection":"vertical","layout":"absolute","downloadEnabled":false,"width":"100%","scrollBarMargin":2,"contentOpaque":false,"backgroundColor":["#FFFFFF"],"id":"rootPlayer","minHeight":20,"paddingTop":0,"toolTipHorizontalAlign":"center","class":"Player","mobileMipmappingEnabled":false,"scrollBarVisible":"rollOver","paddingBottom":0,"minWidth":20,"shadow":false,"mouseWheelEnabled":true,"vrPolyfillScale":0.75,"backgroundOpacity":1,"children":["this.MainViewer"],"height":"100%","desktopMipmappingEnabled":false,"borderRadius":0,"verticalAlign":"top","propagateClick":false,"defaultVRPointer":"laser","paddingLeft":0,"gap":10,"scrollBarOpacity":0.5};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2020.5.27.js.map
//Generated with v2020.5.27, Tue Mar 9 2021