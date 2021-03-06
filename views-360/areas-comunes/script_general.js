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
    var d = {"definitions": [{"id":"panorama_FCD52039_EFCA_351A_41BF_8F69C296A933_camera","initialSequence":"this.sequence_FCD53B2B_EFCA_2B3E_41D1_7C289BF3FD29","initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"automaticZoomSpeed":10,"class":"PanoramaCamera"},{"id":"panorama_FCD6912F_EFCA_5736_41A3_4BCB30870FB2_camera","initialSequence":"this.sequence_FCD4AB2B_EFCA_2B3E_41CC_3199D3C924EB","initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"automaticZoomSpeed":10,"class":"PanoramaCamera"},{"id":"panorama_FCD5E645_EFCA_3D6A_41DE_4D1A7AD54450","hfovMin":"150%","frames":[{"thumbnailUrl":"media/panorama_FCD5E645_EFCA_3D6A_41DE_4D1A7AD54450_t.jpg","class":"CubicPanoramaFrame","cube":{"levels":[{"width":12288,"height":2048,"colCount":24,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":4,"url":"media/panorama_FCD5E645_EFCA_3D6A_41DE_4D1A7AD54450_0/{face}/0/{row}_{column}.jpg"},{"width":6144,"height":1024,"colCount":12,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":2,"url":"media/panorama_FCD5E645_EFCA_3D6A_41DE_4D1A7AD54450_0/{face}/1/{row}_{column}.jpg"},{"width":3072,"height":512,"colCount":6,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_FCD5E645_EFCA_3D6A_41DE_4D1A7AD54450_0/{face}/2/{row}_{column}.jpg"},{"width":9216,"height":1536,"colCount":6,"tags":"mobilevr","class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_FCD5E645_EFCA_3D6A_41DE_4D1A7AD54450_0/{face}/vr/0.jpg"}],"class":"ImageResource"}}],"hfov":360,"label":trans('panorama_FCD5E645_EFCA_3D6A_41DE_4D1A7AD54450.label'),"class":"Panorama","thumbnailUrl":"media/panorama_FCD5E645_EFCA_3D6A_41DE_4D1A7AD54450_t.jpg","vfov":180,"hfovMax":130,"partial":false,"pitch":0,"data":{"label":"Ping Pong"}},{"id":"ThumbnailList_FBEE32E2_EFC6_552E_41E2_38A83D8E1EA7_playlist","class":"PlayList","items":[{"camera":"this.panorama_FAE80BCD_EFCA_6B7A_4185_E7D4118DCC44_camera","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_FAE80BCD_EFCA_6B7A_4185_E7D4118DCC44"},{"camera":"this.panorama_FCD6912F_EFCA_5736_41A3_4BCB30870FB2_camera","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_FCD6912F_EFCA_5736_41A3_4BCB30870FB2"},{"camera":"this.panorama_FCD50620_EFCA_5D2A_41E1_90315500AE5C_camera","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_FCD50620_EFCA_5D2A_41E1_90315500AE5C"},{"camera":"this.panorama_FCD5DB45_EFCA_2B6A_41EC_AB569194B504_camera","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_FCD5DB45_EFCA_2B6A_41EC_AB569194B504"},{"camera":"this.panorama_FCD52039_EFCA_351A_41BF_8F69C296A933_camera","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_FCD52039_EFCA_351A_41BF_8F69C296A933"},{"camera":"this.panorama_FCD5E645_EFCA_3D6A_41DE_4D1A7AD54450_camera","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_FCD5E645_EFCA_3D6A_41DE_4D1A7AD54450"}]},{"id":"panorama_FCD52039_EFCA_351A_41BF_8F69C296A933","hfovMin":"150%","frames":[{"thumbnailUrl":"media/panorama_FCD52039_EFCA_351A_41BF_8F69C296A933_t.jpg","class":"CubicPanoramaFrame","cube":{"levels":[{"width":12288,"height":2048,"colCount":24,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":4,"url":"media/panorama_FCD52039_EFCA_351A_41BF_8F69C296A933_0/{face}/0/{row}_{column}.jpg"},{"width":6144,"height":1024,"colCount":12,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":2,"url":"media/panorama_FCD52039_EFCA_351A_41BF_8F69C296A933_0/{face}/1/{row}_{column}.jpg"},{"width":3072,"height":512,"colCount":6,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_FCD52039_EFCA_351A_41BF_8F69C296A933_0/{face}/2/{row}_{column}.jpg"},{"width":9216,"height":1536,"colCount":6,"tags":"mobilevr","class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_FCD52039_EFCA_351A_41BF_8F69C296A933_0/{face}/vr/0.jpg"}],"class":"ImageResource"}}],"hfov":360,"label":trans('panorama_FCD52039_EFCA_351A_41BF_8F69C296A933.label'),"class":"Panorama","thumbnailUrl":"media/panorama_FCD52039_EFCA_351A_41BF_8F69C296A933_t.jpg","vfov":180,"hfovMax":130,"partial":false,"pitch":0,"data":{"label":"Lobby"}},{"id":"panorama_FCD5DB45_EFCA_2B6A_41EC_AB569194B504_camera","initialSequence":"this.sequence_FCD56B2B_EFCA_2B3E_41D4_B1E43AF0429C","initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"automaticZoomSpeed":10,"class":"PanoramaCamera"},{"id":"panorama_FCD50620_EFCA_5D2A_41E1_90315500AE5C_camera","initialSequence":"this.sequence_FCD48B2B_EFCA_2B3E_41E1_8E3052752B20","initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"automaticZoomSpeed":10,"class":"PanoramaCamera"},{"id":"mainPlayList","class":"PlayList","items":[{"camera":"this.panorama_FAE80BCD_EFCA_6B7A_4185_E7D4118DCC44_camera","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","class":"PanoramaPlayListItem","media":"this.panorama_FAE80BCD_EFCA_6B7A_4185_E7D4118DCC44"},{"camera":"this.panorama_FCD6912F_EFCA_5736_41A3_4BCB30870FB2_camera","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)","class":"PanoramaPlayListItem","media":"this.panorama_FCD6912F_EFCA_5736_41A3_4BCB30870FB2"},{"camera":"this.panorama_FCD50620_EFCA_5D2A_41E1_90315500AE5C_camera","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 3)","class":"PanoramaPlayListItem","media":"this.panorama_FCD50620_EFCA_5D2A_41E1_90315500AE5C"},{"camera":"this.panorama_FCD5DB45_EFCA_2B6A_41EC_AB569194B504_camera","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 3, 4)","class":"PanoramaPlayListItem","media":"this.panorama_FCD5DB45_EFCA_2B6A_41EC_AB569194B504"},{"camera":"this.panorama_FCD52039_EFCA_351A_41BF_8F69C296A933_camera","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 4, 5)","class":"PanoramaPlayListItem","media":"this.panorama_FCD52039_EFCA_351A_41BF_8F69C296A933"},{"camera":"this.panorama_FCD5E645_EFCA_3D6A_41DE_4D1A7AD54450_camera","end":"this.trigger('tourEnded')","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 5, 0)","class":"PanoramaPlayListItem","media":"this.panorama_FCD5E645_EFCA_3D6A_41DE_4D1A7AD54450"}]},{"id":"panorama_FCD6912F_EFCA_5736_41A3_4BCB30870FB2","hfovMin":"150%","frames":[{"thumbnailUrl":"media/panorama_FCD6912F_EFCA_5736_41A3_4BCB30870FB2_t.jpg","class":"CubicPanoramaFrame","cube":{"levels":[{"width":12288,"height":2048,"colCount":24,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":4,"url":"media/panorama_FCD6912F_EFCA_5736_41A3_4BCB30870FB2_0/{face}/0/{row}_{column}.jpg"},{"width":6144,"height":1024,"colCount":12,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":2,"url":"media/panorama_FCD6912F_EFCA_5736_41A3_4BCB30870FB2_0/{face}/1/{row}_{column}.jpg"},{"width":3072,"height":512,"colCount":6,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_FCD6912F_EFCA_5736_41A3_4BCB30870FB2_0/{face}/2/{row}_{column}.jpg"},{"width":9216,"height":1536,"colCount":6,"tags":"mobilevr","class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_FCD6912F_EFCA_5736_41A3_4BCB30870FB2_0/{face}/vr/0.jpg"}],"class":"ImageResource"}}],"hfov":360,"label":trans('panorama_FCD6912F_EFCA_5736_41A3_4BCB30870FB2.label'),"class":"Panorama","thumbnailUrl":"media/panorama_FCD6912F_EFCA_5736_41A3_4BCB30870FB2_t.jpg","vfov":180,"hfovMax":130,"partial":false,"pitch":0,"data":{"label":"Cinema"}},{"id":"panorama_FAE80BCD_EFCA_6B7A_4185_E7D4118DCC44_camera","initialSequence":"this.sequence_FCD4CB2A_EFCA_2B3E_41D0_7DAD90EC0D30","initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"automaticZoomSpeed":10,"class":"PanoramaCamera"},{"id":"MainViewerPanoramaPlayer","surfaceSelectionEnabled":false,"arrowKeysAction":"translate","touchControlMode":"drag_rotation","mouseControlMode":"drag_rotation","gyroscopeVerticalDraggingEnabled":true,"class":"PanoramaPlayer","viewerArea":"this.MainViewer","displayPlaybackBar":true,"zoomEnabled":true},{"id":"panorama_FCD5E645_EFCA_3D6A_41DE_4D1A7AD54450_camera","initialSequence":"this.sequence_FCD51B2B_EFCA_2B3E_41E5_D4206A108E4C","initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"automaticZoomSpeed":10,"class":"PanoramaCamera"},{"subtitlesTextShadowColor":"#000000","toolTipShadowVerticalLength":0,"toolTipBackgroundColor":"#F6F6F6","data":{"name":"Main Viewer"},"toolTipShadowHorizontalLength":0,"vrPointerSelectionTime":2000,"toolTipFontColor":"#606060","displayTooltipInSurfaceSelection":true,"toolTipShadowColor":"#333333","playbackBarBackgroundColorDirection":"vertical","playbackBarProgressBorderSize":0,"subtitlesBorderSize":0,"playbackBarRight":0,"playbackBarProgressBorderRadius":0,"doubleClickAction":"toggle_fullscreen","subtitlesBackgroundColor":"#000000","borderSize":0,"vrPointerColor":"#FFFFFF","playbackBarProgressBackgroundColor":["#3399FF"],"toolTipPaddingBottom":4,"progressHeight":10,"playbackBarHeadShadowOpacity":0.7,"toolTipShadowBlurRadius":3,"progressBorderSize":0,"progressBarBorderRadius":0,"playbackBarProgressBackgroundColorRatios":[0],"toolTipFontStyle":"normal","subtitlesShadow":false,"toolTipOpacity":1,"subtitlesTextShadowVerticalLength":1,"paddingTop":0,"playbackBarBorderRadius":0,"playbackBarBorderColor":"#FFFFFF","progressBackgroundColorRatios":[0],"playbackBarProgressBorderColor":"#000000","paddingBottom":0,"shadow":false,"toolTipPaddingLeft":6,"subtitlesBorderColor":"#FFFFFF","progressBarBorderSize":0,"borderRadius":0,"toolTipShadowSpread":0,"playbackBarHeadBorderRadius":0,"playbackBarHeadShadowVerticalLength":0,"progressRight":0,"toolTipFontFamily":"Arial","playbackBarProgressOpacity":1,"transitionMode":"blending","subtitlesFontFamily":"Arial","playbackBarHeadBorderColor":"#000000","progressBarBackgroundColorDirection":"vertical","subtitlesPaddingLeft":5,"toolTipFontSize":"1.11vmin","progressOpacity":1,"progressBarBorderColor":"#000000","progressBackgroundColorDirection":"vertical","playbackBarBorderSize":0,"progressBarBackgroundColorRatios":[0],"subtitlesBottom":50,"paddingLeft":0,"subtitlesTextShadowBlurRadius":0,"subtitlesTextDecoration":"none","toolTipShadowOpacity":1,"displayTooltipInTouchScreens":true,"subtitlesTextShadowHorizontalLength":1,"paddingRight":0,"toolTipDisplayTime":600,"progressBorderColor":"#000000","subtitlesFontWeight":"normal","playbackBarHeadShadowBlurRadius":3,"progressBorderRadius":0,"subtitlesPaddingBottom":5,"subtitlesOpacity":1,"playbackBarBackgroundOpacity":1,"progressLeft":0,"progressBarBackgroundColor":["#3399FF"],"playbackBarHeadHeight":15,"playbackBarLeft":0,"vrPointerSelectionColor":"#FF6600","playbackBarHeadShadowColor":"#000000","subtitlesTop":0,"subtitlesGap":0,"playbackBarHeadBorderSize":0,"firstTransitionDuration":0,"playbackBarHeadBackgroundColorRatios":[0,1],"toolTipBorderRadius":3,"subtitlesFontColor":"#FFFFFF","width":"100%","playbackBarHeadOpacity":1,"subtitlesHorizontalAlign":"center","playbackBarHeadShadow":true,"transitionDuration":500,"id":"MainViewer","surfaceReticleOpacity":0.6,"subtitlesPaddingTop":5,"toolTipBorderSize":1,"surfaceReticleColor":"#FFFFFF","toolTipFontWeight":"normal","toolTipTextShadowColor":"#000000","minHeight":50,"toolTipHorizontalAlign":"center","playbackBarHeadBackgroundColor":["#111111","#666666"],"minWidth":100,"playbackBarOpacity":1,"class":"ViewerArea","progressBackgroundColor":["#FFFFFF"],"subtitlesVerticalAlign":"bottom","toolTipBorderColor":"#767676","toolTipPaddingRight":6,"playbackBarBottom":5,"toolTipTextShadowBlurRadius":3,"playbackBarProgressBackgroundColorDirection":"vertical","progressBarOpacity":1,"subtitlesPaddingRight":5,"playbackBarHeadShadowHorizontalLength":0,"propagateClick":false,"height":"100%","toolTipTextShadowOpacity":0,"surfaceReticleSelectionColor":"#FFFFFF","progressBottom":0,"toolTipPaddingTop":4,"playbackBarHeight":10,"progressBackgroundOpacity":1,"playbackBarBackgroundColor":["#FFFFFF"],"playbackBarHeadBackgroundColorDirection":"vertical","subtitlesTextShadowOpacity":1,"subtitlesBackgroundOpacity":0.2,"playbackBarHeadWidth":6,"surfaceReticleSelectionOpacity":1,"subtitlesFontSize":"3vmin"},{"id":"panorama_FAE80BCD_EFCA_6B7A_4185_E7D4118DCC44","hfovMin":"150%","frames":[{"thumbnailUrl":"media/panorama_FAE80BCD_EFCA_6B7A_4185_E7D4118DCC44_t.jpg","class":"CubicPanoramaFrame","cube":{"levels":[{"width":12288,"height":2048,"colCount":24,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":4,"url":"media/panorama_FAE80BCD_EFCA_6B7A_4185_E7D4118DCC44_0/{face}/0/{row}_{column}.jpg"},{"width":6144,"height":1024,"colCount":12,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":2,"url":"media/panorama_FAE80BCD_EFCA_6B7A_4185_E7D4118DCC44_0/{face}/1/{row}_{column}.jpg"},{"width":3072,"height":512,"colCount":6,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_FAE80BCD_EFCA_6B7A_4185_E7D4118DCC44_0/{face}/2/{row}_{column}.jpg"},{"width":9216,"height":1536,"colCount":6,"tags":"mobilevr","class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_FAE80BCD_EFCA_6B7A_4185_E7D4118DCC44_0/{face}/vr/0.jpg"}],"class":"ImageResource"}}],"hfov":360,"label":trans('panorama_FAE80BCD_EFCA_6B7A_4185_E7D4118DCC44.label'),"class":"Panorama","thumbnailUrl":"media/panorama_FAE80BCD_EFCA_6B7A_4185_E7D4118DCC44_t.jpg","vfov":180,"hfovMax":130,"partial":false,"pitch":0,"data":{"label":"Cafe"}},{"id":"panorama_FCD50620_EFCA_5D2A_41E1_90315500AE5C","hfovMin":"150%","frames":[{"thumbnailUrl":"media/panorama_FCD50620_EFCA_5D2A_41E1_90315500AE5C_t.jpg","class":"CubicPanoramaFrame","cube":{"levels":[{"width":12288,"height":2048,"colCount":24,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":4,"url":"media/panorama_FCD50620_EFCA_5D2A_41E1_90315500AE5C_0/{face}/0/{row}_{column}.jpg"},{"width":6144,"height":1024,"colCount":12,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":2,"url":"media/panorama_FCD50620_EFCA_5D2A_41E1_90315500AE5C_0/{face}/1/{row}_{column}.jpg"},{"width":3072,"height":512,"colCount":6,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_FCD50620_EFCA_5D2A_41E1_90315500AE5C_0/{face}/2/{row}_{column}.jpg"},{"width":9216,"height":1536,"colCount":6,"tags":"mobilevr","class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_FCD50620_EFCA_5D2A_41E1_90315500AE5C_0/{face}/vr/0.jpg"}],"class":"ImageResource"}}],"hfov":360,"label":trans('panorama_FCD50620_EFCA_5D2A_41E1_90315500AE5C.label'),"class":"Panorama","thumbnailUrl":"media/panorama_FCD50620_EFCA_5D2A_41E1_90315500AE5C_t.jpg","vfov":180,"hfovMax":130,"partial":false,"pitch":0,"data":{"label":"Co-working"}},{"id":"panorama_FCD5DB45_EFCA_2B6A_41EC_AB569194B504","hfovMin":"150%","frames":[{"thumbnailUrl":"media/panorama_FCD5DB45_EFCA_2B6A_41EC_AB569194B504_t.jpg","class":"CubicPanoramaFrame","cube":{"levels":[{"width":12288,"height":2048,"colCount":24,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":4,"url":"media/panorama_FCD5DB45_EFCA_2B6A_41EC_AB569194B504_0/{face}/0/{row}_{column}.jpg"},{"width":6144,"height":1024,"colCount":12,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":2,"url":"media/panorama_FCD5DB45_EFCA_2B6A_41EC_AB569194B504_0/{face}/1/{row}_{column}.jpg"},{"width":3072,"height":512,"colCount":6,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_FCD5DB45_EFCA_2B6A_41EC_AB569194B504_0/{face}/2/{row}_{column}.jpg"},{"width":9216,"height":1536,"colCount":6,"tags":"mobilevr","class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_FCD5DB45_EFCA_2B6A_41EC_AB569194B504_0/{face}/vr/0.jpg"}],"class":"ImageResource"}}],"hfov":360,"label":trans('panorama_FCD5DB45_EFCA_2B6A_41EC_AB569194B504.label'),"class":"Panorama","thumbnailUrl":"media/panorama_FCD5DB45_EFCA_2B6A_41EC_AB569194B504_t.jpg","vfov":180,"hfovMax":130,"partial":false,"pitch":0,"data":{"label":"Gym"}},{"itemThumbnailWidth":75,"itemThumbnailShadowHorizontalLength":0,"right":"0.85%","itemOpacity":1,"itemBackgroundColorRatios":[],"itemThumbnailShadowBlurRadius":4,"horizontalAlign":"left","borderSize":0,"itemPaddingBottom":3,"scrollBarMargin":2,"itemHorizontalAlign":"center","itemBackgroundColor":[],"backgroundColor":["#000000"],"itemLabelFontWeight":"normal","paddingTop":10,"itemLabelFontSize":"12px","playList":"this.ThumbnailList_FBEE32E2_EFC6_552E_41E2_38A83D8E1EA7_playlist","paddingBottom":10,"shadow":false,"borderRadius":0,"itemLabelHorizontalAlign":"center","itemLabelGap":5,"itemLabelTextDecoration":"none","verticalAlign":"top","scrollBarOpacity":0.5,"paddingLeft":20,"itemThumbnailScaleMode":"fit_outside","top":"4.9%","paddingRight":20,"selectedItemLabelFontWeight":"bold","itemBackgroundColorDirection":"vertical","itemThumbnailShadowOpacity":0.8,"itemLabelFontColor":"#FFFFFF","scrollBarColor":"#FFFFFF","backgroundColorRatios":[0],"itemThumbnailShadowColor":"#000000","itemThumbnailShadow":true,"itemPaddingLeft":3,"backgroundColorDirection":"vertical","layout":"vertical","itemVerticalAlign":"middle","width":131,"itemThumbnailHeight":75,"itemLabelFontStyle":"normal","id":"ThumbnailList_FBEE32E2_EFC6_552E_41E2_38A83D8E1EA7","itemThumbnailOpacity":1,"minHeight":1,"itemThumbnailBorderRadius":4,"minWidth":1,"itemLabelPosition":"bottom","class":"ThumbnailList","toolTipHorizontalAlign":"center","itemThumbnailShadowVerticalLength":0,"itemLabelFontFamily":"Arial","itemPaddingTop":3,"scrollBarVisible":"rollOver","propagateClick":false,"itemBackgroundOpacity":0,"itemBorderRadius":0,"backgroundOpacity":0.2,"scrollBarWidth":9,"height":"87.117%","itemPaddingRight":3,"gap":10,"itemThumbnailShadowSpread":1,"itemMode":"normal","data":{"name":"ThumbnailList1355"}},{"id":"sequence_FCD53B2B_EFCA_2B3E_41D1_7C289BF3FD29","restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","movements":[{"yawDelta":18.5,"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":323,"easing":"linear","class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":18.5,"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawSpeed":7.96}]},{"id":"sequence_FCD4AB2B_EFCA_2B3E_41CC_3199D3C924EB","restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","movements":[{"yawDelta":18.5,"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":323,"easing":"linear","class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":18.5,"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawSpeed":7.96}]},{"id":"sequence_FCD56B2B_EFCA_2B3E_41D4_B1E43AF0429C","restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","movements":[{"yawDelta":18.5,"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":323,"easing":"linear","class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":18.5,"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawSpeed":7.96}]},{"id":"sequence_FCD48B2B_EFCA_2B3E_41E1_8E3052752B20","restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","movements":[{"yawDelta":18.5,"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":323,"easing":"linear","class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":18.5,"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawSpeed":7.96}]},{"id":"sequence_FCD4CB2A_EFCA_2B3E_41D0_7DAD90EC0D30","restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","movements":[{"yawDelta":18.5,"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":323,"easing":"linear","class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":18.5,"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawSpeed":7.96}]},{"id":"sequence_FCD51B2B_EFCA_2B3E_41E5_D4206A108E4C","restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","movements":[{"yawDelta":18.5,"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":323,"easing":"linear","class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":18.5,"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawSpeed":7.96}]}],"scrollBarWidth":10,"desktopMipmappingEnabled":false,"paddingRight":0,"scripts":{"getMediaHeight":TDV.Tour.Script.getMediaHeight,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"getOverlays":TDV.Tour.Script.getOverlays,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"setValue":TDV.Tour.Script.setValue,"resumePlayers":TDV.Tour.Script.resumePlayers,"quizShowScore":TDV.Tour.Script.quizShowScore,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"registerKey":TDV.Tour.Script.registerKey,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"getMediaByName":TDV.Tour.Script.getMediaByName,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"isPanorama":TDV.Tour.Script.isPanorama,"quizStart":TDV.Tour.Script.quizStart,"existsKey":TDV.Tour.Script.existsKey,"setLocale":TDV.Tour.Script.setLocale,"quizFinish":TDV.Tour.Script.quizFinish,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"init":TDV.Tour.Script.init,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"getKey":TDV.Tour.Script.getKey,"textToSpeech":TDV.Tour.Script.textToSpeech,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getPixels":TDV.Tour.Script.getPixels,"initGA":TDV.Tour.Script.initGA,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"getComponentByName":TDV.Tour.Script.getComponentByName,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"cloneCamera":TDV.Tour.Script.cloneCamera,"setMapLocation":TDV.Tour.Script.setMapLocation,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"unregisterKey":TDV.Tour.Script.unregisterKey,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"openLink":TDV.Tour.Script.openLink,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"historyGoForward":TDV.Tour.Script.historyGoForward,"shareSocial":TDV.Tour.Script.shareSocial,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"showPopupImage":TDV.Tour.Script.showPopupImage,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"showWindow":TDV.Tour.Script.showWindow,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"playAudioList":TDV.Tour.Script.playAudioList,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"translate":TDV.Tour.Script.translate,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"clone":TDV.Tour.Script.clone,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"mixObject":TDV.Tour.Script.mixObject,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"getMainViewer":TDV.Tour.Script.getMainViewer,"initQuiz":TDV.Tour.Script.initQuiz,"historyGoBack":TDV.Tour.Script.historyGoBack,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex},"vrPolyfillScale":0.75,"children":["this.MainViewer","this.ThumbnailList_FBEE32E2_EFC6_552E_41E2_38A83D8E1EA7"],"height":"100%","start":"this.init(); this.syncPlaylists([this.mainPlayList,this.ThumbnailList_FBEE32E2_EFC6_552E_41E2_38A83D8E1EA7_playlist])","horizontalAlign":"left","backgroundColorRatios":[0],"contentOpaque":false,"mediaActivationMode":"window","scrollBarColor":"#000000","borderSize":0,"backgroundColorDirection":"vertical","layout":"absolute","scrollBarMargin":2,"downloadEnabled":false,"width":"100%","backgroundColor":["#FFFFFF"],"id":"rootPlayer","minHeight":20,"paddingTop":0,"toolTipHorizontalAlign":"center","mobileMipmappingEnabled":false,"minWidth":20,"class":"Player","paddingBottom":0,"shadow":false,"propagateClick":false,"mouseWheelEnabled":true,"scrollBarOpacity":0.5,"borderRadius":0,"scrollBarVisible":"rollOver","backgroundOpacity":1,"overflow":"hidden","verticalAlign":"top","gap":10,"defaultVRPointer":"laser","paddingLeft":0,"data":{"name":"Player7891","textToSpeechConfig":{"speechOnTooltip":false,"speechOnQuizQuestion":false,"rate":1,"speechOnInfoWindow":false,"pitch":1,"volume":1},"locales":{"es":"locale/es.txt"},"defaultLocale":"es"},"backgroundPreloadEnabled":true};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2020.5.27.js.map
//Generated with v2020.5.27, Mon Mar 1 2021