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
    var d = {"overflow":"hidden","definitions": [{"id":"panorama_15C94396_183B_FE82_41A4_54FD30EF8042","partial":false,"hfovMin":"150%","frames":[{"thumbnailUrl":"media/panorama_15C94396_183B_FE82_41A4_54FD30EF8042_t.jpg","class":"CubicPanoramaFrame","cube":{"levels":[{"width":12288,"height":2048,"colCount":24,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":4,"url":"media/panorama_15C94396_183B_FE82_41A4_54FD30EF8042_0/{face}/0/{row}_{column}.jpg"},{"width":6144,"height":1024,"colCount":12,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":2,"url":"media/panorama_15C94396_183B_FE82_41A4_54FD30EF8042_0/{face}/1/{row}_{column}.jpg"},{"width":3072,"height":512,"colCount":6,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_15C94396_183B_FE82_41A4_54FD30EF8042_0/{face}/2/{row}_{column}.jpg"},{"width":9216,"height":1536,"colCount":6,"tags":"mobilevr","class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_15C94396_183B_FE82_41A4_54FD30EF8042_0/{face}/vr/0.jpg"}],"class":"ImageResource"}}],"hfov":360,"label":trans('panorama_15C94396_183B_FE82_41A4_54FD30EF8042.label'),"class":"Panorama","thumbnailUrl":"media/panorama_15C94396_183B_FE82_41A4_54FD30EF8042_t.jpg","vfov":180,"hfovMax":130,"pitch":0,"data":{"label":"Cinema"}},{"id":"mainPlayList","class":"PlayList","items":[{"camera":"this.panorama_15FE3DAF_183A_2A82_41B4_C27B4B61065B_camera","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","class":"PanoramaPlayListItem","media":"this.panorama_15FE3DAF_183A_2A82_41B4_C27B4B61065B"},{"camera":"this.panorama_15C932F1_183B_DE9E_41A5_D7BA36162938_camera","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)","class":"PanoramaPlayListItem","media":"this.panorama_15C932F1_183B_DE9E_41A5_D7BA36162938"},{"camera":"this.panorama_15C9495A_183B_EB82_41B8_5767562E39FA_camera","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 3)","class":"PanoramaPlayListItem","media":"this.panorama_15C9495A_183B_EB82_41B8_5767562E39FA"},{"camera":"this.panorama_15C98E5C_183B_E986_41B1_C6EB2006770A_camera","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 3, 4)","class":"PanoramaPlayListItem","media":"this.panorama_15C98E5C_183B_E986_41B1_C6EB2006770A"},{"camera":"this.panorama_15C94396_183B_FE82_41A4_54FD30EF8042_camera","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 4, 5)","class":"PanoramaPlayListItem","media":"this.panorama_15C94396_183B_FE82_41A4_54FD30EF8042"},{"camera":"this.panorama_15C98897_183B_EA82_4191_B0E178414806_camera","end":"this.trigger('tourEnded')","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 5, 0)","class":"PanoramaPlayListItem","media":"this.panorama_15C98897_183B_EA82_4191_B0E178414806"}]},{"id":"panorama_15FE3DAF_183A_2A82_41B4_C27B4B61065B_camera","initialSequence":"this.sequence_15CAADB2_183B_EA82_4198_BC94FDE447B9","initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"class":"PanoramaCamera","automaticZoomSpeed":10},{"id":"panorama_15C932F1_183B_DE9E_41A5_D7BA36162938","partial":false,"hfovMin":"150%","frames":[{"thumbnailUrl":"media/panorama_15C932F1_183B_DE9E_41A5_D7BA36162938_t.jpg","class":"CubicPanoramaFrame","cube":{"levels":[{"width":12288,"height":2048,"colCount":24,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":4,"url":"media/panorama_15C932F1_183B_DE9E_41A5_D7BA36162938_0/{face}/0/{row}_{column}.jpg"},{"width":6144,"height":1024,"colCount":12,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":2,"url":"media/panorama_15C932F1_183B_DE9E_41A5_D7BA36162938_0/{face}/1/{row}_{column}.jpg"},{"width":3072,"height":512,"colCount":6,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_15C932F1_183B_DE9E_41A5_D7BA36162938_0/{face}/2/{row}_{column}.jpg"},{"width":9216,"height":1536,"colCount":6,"tags":"mobilevr","class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_15C932F1_183B_DE9E_41A5_D7BA36162938_0/{face}/vr/0.jpg"}],"class":"ImageResource"}}],"hfov":360,"label":trans('panorama_15C932F1_183B_DE9E_41A5_D7BA36162938.label'),"class":"Panorama","thumbnailUrl":"media/panorama_15C932F1_183B_DE9E_41A5_D7BA36162938_t.jpg","vfov":180,"hfovMax":130,"pitch":0,"data":{"label":"Lobby"}},{"id":"panorama_15C98E5C_183B_E986_41B1_C6EB2006770A_camera","initialSequence":"this.sequence_15C90DB2_183B_EA82_41B0_59B5E366321D","initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"class":"PanoramaCamera","automaticZoomSpeed":10},{"id":"panorama_15C94396_183B_FE82_41A4_54FD30EF8042_camera","initialSequence":"this.sequence_15C92DB2_183B_EA82_41A7_3CAEE955A5B1","initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"class":"PanoramaCamera","automaticZoomSpeed":10},{"id":"panorama_15C98897_183B_EA82_4191_B0E178414806","partial":false,"hfovMin":"150%","frames":[{"thumbnailUrl":"media/panorama_15C98897_183B_EA82_4191_B0E178414806_t.jpg","class":"CubicPanoramaFrame","cube":{"levels":[{"width":12288,"height":2048,"colCount":24,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":4,"url":"media/panorama_15C98897_183B_EA82_4191_B0E178414806_0/{face}/0/{row}_{column}.jpg"},{"width":6144,"height":1024,"colCount":12,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":2,"url":"media/panorama_15C98897_183B_EA82_4191_B0E178414806_0/{face}/1/{row}_{column}.jpg"},{"width":3072,"height":512,"colCount":6,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_15C98897_183B_EA82_4191_B0E178414806_0/{face}/2/{row}_{column}.jpg"},{"width":9216,"height":1536,"colCount":6,"tags":"mobilevr","class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_15C98897_183B_EA82_4191_B0E178414806_0/{face}/vr/0.jpg"}],"class":"ImageResource"}}],"hfov":360,"label":trans('panorama_15C98897_183B_EA82_4191_B0E178414806.label'),"class":"Panorama","thumbnailUrl":"media/panorama_15C98897_183B_EA82_4191_B0E178414806_t.jpg","vfov":180,"hfovMax":130,"pitch":0,"data":{"label":"Cafe"}},{"itemMode":"normal","data":{"name":"ThumbnailList35762"},"itemOpacity":1,"itemThumbnailWidth":100,"itemBackgroundOpacity":0,"itemThumbnailShadowSpread":1,"right":"2.91%","itemThumbnailBorderRadius":5,"itemThumbnailOpacity":1,"horizontalAlign":"left","borderSize":0,"itemBackgroundColor":[],"itemBackgroundColorRatios":[],"itemPaddingBottom":3,"rollOverItemLabelFontWeight":"bold","itemHorizontalAlign":"center","scrollBarMargin":2,"backgroundColor":["#000000"],"itemLabelFontWeight":"normal","paddingTop":10,"itemPaddingRight":3,"itemThumbnailShadowBlurRadius":8,"playList":"this.ThumbnailList_0AA01EE2_183A_2682_41B1_96966AF60F2D_playlist","paddingBottom":10,"shadow":false,"itemLabelFontSize":14,"borderRadius":5,"itemLabelTextDecoration":"none","itemLabelHorizontalAlign":"center","verticalAlign":"top","itemThumbnailScaleMode":"fit_outside","paddingLeft":20,"scrollBarOpacity":0.5,"top":"7.58%","paddingRight":20,"itemBackgroundColorDirection":"vertical","itemLabelFontColor":"#FFFFFF","itemLabelGap":8,"backgroundColorRatios":[0],"itemPaddingLeft":3,"itemThumbnailShadowColor":"#000000","scrollBarColor":"#FFFFFF","backgroundColorDirection":"vertical","layout":"vertical","itemThumbnailShadowOpacity":0.27,"width":156,"itemLabelFontStyle":"normal","itemThumbnailHeight":75,"selectedItemLabelFontColor":"#FFCC00","id":"ThumbnailList_0AA01EE2_183A_2682_41B1_96966AF60F2D","itemVerticalAlign":"middle","selectedItemLabelFontWeight":"bold","minHeight":20,"itemThumbnailShadowVerticalLength":3,"toolTipHorizontalAlign":"center","class":"ThumbnailList","scrollBarVisible":"rollOver","itemThumbnailShadow":true,"minWidth":20,"itemPaddingTop":3,"itemLabelFontFamily":"Arial","itemLabelPosition":"bottom","itemBorderRadius":0,"rollOverItemBackgroundOpacity":0,"backgroundOpacity":0.31,"height":"83.886%","propagateClick":false,"scrollBarWidth":10,"gap":1,"itemThumbnailShadowHorizontalLength":3},{"id":"panorama_15C98897_183B_EA82_4191_B0E178414806_camera","initialSequence":"this.sequence_15C97DB2_183B_EA82_41B9_2036F7275354","initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"class":"PanoramaCamera","automaticZoomSpeed":10},{"id":"panorama_15FE3DAF_183A_2A82_41B4_C27B4B61065B","partial":false,"hfovMin":"150%","frames":[{"thumbnailUrl":"media/panorama_15FE3DAF_183A_2A82_41B4_C27B4B61065B_t.jpg","class":"CubicPanoramaFrame","cube":{"levels":[{"width":12288,"height":2048,"colCount":24,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":4,"url":"media/panorama_15FE3DAF_183A_2A82_41B4_C27B4B61065B_0/{face}/0/{row}_{column}.jpg"},{"width":6144,"height":1024,"colCount":12,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":2,"url":"media/panorama_15FE3DAF_183A_2A82_41B4_C27B4B61065B_0/{face}/1/{row}_{column}.jpg"},{"width":3072,"height":512,"colCount":6,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_15FE3DAF_183A_2A82_41B4_C27B4B61065B_0/{face}/2/{row}_{column}.jpg"},{"width":9216,"height":1536,"colCount":6,"tags":"mobilevr","class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_15FE3DAF_183A_2A82_41B4_C27B4B61065B_0/{face}/vr/0.jpg"}],"class":"ImageResource"}}],"hfov":360,"label":trans('panorama_15FE3DAF_183A_2A82_41B4_C27B4B61065B.label'),"class":"Panorama","thumbnailUrl":"media/panorama_15FE3DAF_183A_2A82_41B4_C27B4B61065B_t.jpg","vfov":180,"hfovMax":130,"pitch":0,"data":{"label":"Ping Pong"}},{"id":"panorama_15C9495A_183B_EB82_41B8_5767562E39FA","partial":false,"hfovMin":"150%","frames":[{"thumbnailUrl":"media/panorama_15C9495A_183B_EB82_41B8_5767562E39FA_t.jpg","class":"CubicPanoramaFrame","cube":{"levels":[{"width":12288,"height":2048,"colCount":24,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":4,"url":"media/panorama_15C9495A_183B_EB82_41B8_5767562E39FA_0/{face}/0/{row}_{column}.jpg"},{"width":6144,"height":1024,"colCount":12,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":2,"url":"media/panorama_15C9495A_183B_EB82_41B8_5767562E39FA_0/{face}/1/{row}_{column}.jpg"},{"width":3072,"height":512,"colCount":6,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_15C9495A_183B_EB82_41B8_5767562E39FA_0/{face}/2/{row}_{column}.jpg"},{"width":9216,"height":1536,"colCount":6,"tags":"mobilevr","class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_15C9495A_183B_EB82_41B8_5767562E39FA_0/{face}/vr/0.jpg"}],"class":"ImageResource"}}],"hfov":360,"label":trans('panorama_15C9495A_183B_EB82_41B8_5767562E39FA.label'),"class":"Panorama","thumbnailUrl":"media/panorama_15C9495A_183B_EB82_41B8_5767562E39FA_t.jpg","vfov":180,"hfovMax":130,"pitch":0,"data":{"label":"Gym"}},{"id":"panorama_15C932F1_183B_DE9E_41A5_D7BA36162938_camera","initialSequence":"this.sequence_15CACDB2_183B_EA82_418F_E15E19AFC525","initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"class":"PanoramaCamera","automaticZoomSpeed":10},{"id":"MainViewerPanoramaPlayer","displayPlaybackBar":true,"touchControlMode":"drag_rotation","viewerArea":"this.MainViewer","gyroscopeVerticalDraggingEnabled":true,"class":"PanoramaPlayer","mouseControlMode":"drag_rotation","arrowKeysAction":"translate","zoomEnabled":true,"surfaceSelectionEnabled":false},{"subtitlesTextShadowColor":"#000000","toolTipBackgroundColor":"#F6F6F6","data":{"name":"Main Viewer"},"toolTipFontColor":"#606060","toolTipShadowColor":"#333333","playbackBarBackgroundColorDirection":"vertical","playbackBarProgressBorderSize":0,"subtitlesBorderSize":0,"playbackBarRight":0,"playbackBarProgressBorderRadius":0,"doubleClickAction":"toggle_fullscreen","subtitlesBackgroundColor":"#000000","borderSize":0,"vrPointerColor":"#FFFFFF","displayTooltipInSurfaceSelection":true,"playbackBarProgressBackgroundColor":["#3399FF"],"toolTipPaddingBottom":4,"progressHeight":10,"subtitlesTextShadowVerticalLength":1,"playbackBarHeadShadowOpacity":0.7,"toolTipShadowBlurRadius":3,"progressBorderSize":0,"progressBarBorderRadius":0,"playbackBarProgressBackgroundColorRatios":[0],"subtitlesShadow":false,"toolTipFontStyle":"normal","toolTipOpacity":1,"paddingTop":0,"playbackBarBorderRadius":0,"playbackBarBorderColor":"#FFFFFF","toolTipPaddingLeft":6,"playbackBarProgressBorderColor":"#000000","transitionMode":"blending","shadow":false,"progressBackgroundColorRatios":[0],"playbackBarBackgroundOpacity":1,"progressBarBorderSize":0,"paddingBottom":0,"playbackBarHeadBorderRadius":0,"progressRight":0,"toolTipFontFamily":"Arial","playbackBarProgressOpacity":1,"borderRadius":0,"progressOpacity":1,"subtitlesFontFamily":"Arial","playbackBarHeadBorderColor":"#000000","progressBarBackgroundColorDirection":"vertical","subtitlesPaddingLeft":5,"progressBarBackgroundColorRatios":[0],"toolTipFontSize":"1.11vmin","progressBarBorderColor":"#000000","progressBackgroundColorDirection":"vertical","playbackBarBorderSize":0,"toolTipShadowSpread":0,"subtitlesBorderColor":"#FFFFFF","paddingLeft":0,"subtitlesTextShadowBlurRadius":0,"subtitlesTextDecoration":"none","toolTipShadowOpacity":1,"displayTooltipInTouchScreens":true,"paddingRight":0,"toolTipDisplayTime":600,"progressBorderColor":"#000000","subtitlesFontWeight":"normal","subtitlesBottom":50,"playbackBarHeadShadowBlurRadius":3,"progressBorderRadius":0,"subtitlesPaddingBottom":5,"subtitlesOpacity":1,"playbackBarLeft":0,"progressLeft":0,"progressBarBackgroundColor":["#3399FF"],"playbackBarHeadHeight":15,"playbackBarHeadShadowHorizontalLength":0,"vrPointerSelectionColor":"#FF6600","playbackBarHeadShadowColor":"#000000","subtitlesTop":0,"playbackBarHeadBackgroundColorRatios":[0,1],"subtitlesGap":0,"playbackBarHeadBorderSize":0,"width":"100%","subtitlesHorizontalAlign":"center","toolTipBorderRadius":3,"firstTransitionDuration":0,"subtitlesFontColor":"#FFFFFF","subtitlesTextShadowHorizontalLength":1,"surfaceReticleColor":"#FFFFFF","playbackBarHeadShadow":true,"transitionDuration":500,"id":"MainViewer","surfaceReticleOpacity":0.6,"playbackBarHeadOpacity":1,"toolTipShadowHorizontalLength":0,"toolTipBorderSize":1,"subtitlesPaddingRight":5,"toolTipTextShadowColor":"#000000","minHeight":50,"subtitlesPaddingTop":5,"toolTipHorizontalAlign":"center","playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipFontWeight":"normal","playbackBarOpacity":1,"class":"ViewerArea","progressBackgroundColor":["#FFFFFF"],"subtitlesVerticalAlign":"bottom","minWidth":100,"toolTipBorderColor":"#767676","toolTipPaddingRight":6,"playbackBarBottom":5,"toolTipTextShadowBlurRadius":3,"playbackBarProgressBackgroundColorDirection":"vertical","progressBarOpacity":1,"progressBottom":0,"subtitlesFontSize":"3vmin","height":"100%","toolTipTextShadowOpacity":0,"surfaceReticleSelectionColor":"#FFFFFF","toolTipPaddingTop":4,"playbackBarHeight":10,"playbackBarHeadShadowVerticalLength":0,"surfaceReticleSelectionOpacity":1,"propagateClick":false,"toolTipShadowVerticalLength":0,"playbackBarHeadBackgroundColorDirection":"vertical","subtitlesTextShadowOpacity":1,"progressBackgroundOpacity":1,"subtitlesBackgroundOpacity":0.2,"playbackBarHeadWidth":6,"playbackBarBackgroundColor":["#FFFFFF"],"vrPointerSelectionTime":2000},{"id":"ThumbnailList_0AA01EE2_183A_2682_41B1_96966AF60F2D_playlist","class":"PlayList","items":[{"camera":"this.panorama_15FE3DAF_183A_2A82_41B4_C27B4B61065B_camera","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_15FE3DAF_183A_2A82_41B4_C27B4B61065B"},{"camera":"this.panorama_15C932F1_183B_DE9E_41A5_D7BA36162938_camera","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_15C932F1_183B_DE9E_41A5_D7BA36162938"},{"camera":"this.panorama_15C9495A_183B_EB82_41B8_5767562E39FA_camera","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_15C9495A_183B_EB82_41B8_5767562E39FA"},{"camera":"this.panorama_15C98E5C_183B_E986_41B1_C6EB2006770A_camera","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_15C98E5C_183B_E986_41B1_C6EB2006770A"},{"camera":"this.panorama_15C94396_183B_FE82_41A4_54FD30EF8042_camera","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_15C94396_183B_FE82_41A4_54FD30EF8042"},{"camera":"this.panorama_15C98897_183B_EA82_4191_B0E178414806_camera","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_15C98897_183B_EA82_4191_B0E178414806"}]},{"id":"panorama_15C9495A_183B_EB82_41B8_5767562E39FA_camera","initialSequence":"this.sequence_15CAEDB2_183B_EA82_41A5_B9D9CAA631CB","initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"class":"PanoramaCamera","automaticZoomSpeed":10},{"id":"panorama_15C98E5C_183B_E986_41B1_C6EB2006770A","partial":false,"hfovMin":"150%","frames":[{"thumbnailUrl":"media/panorama_15C98E5C_183B_E986_41B1_C6EB2006770A_t.jpg","class":"CubicPanoramaFrame","cube":{"levels":[{"width":12288,"height":2048,"colCount":24,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":4,"url":"media/panorama_15C98E5C_183B_E986_41B1_C6EB2006770A_0/{face}/0/{row}_{column}.jpg"},{"width":6144,"height":1024,"colCount":12,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":2,"url":"media/panorama_15C98E5C_183B_E986_41B1_C6EB2006770A_0/{face}/1/{row}_{column}.jpg"},{"width":3072,"height":512,"colCount":6,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_15C98E5C_183B_E986_41B1_C6EB2006770A_0/{face}/2/{row}_{column}.jpg"},{"width":9216,"height":1536,"colCount":6,"tags":"mobilevr","class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_15C98E5C_183B_E986_41B1_C6EB2006770A_0/{face}/vr/0.jpg"}],"class":"ImageResource"}}],"hfov":360,"label":trans('panorama_15C98E5C_183B_E986_41B1_C6EB2006770A.label'),"class":"Panorama","thumbnailUrl":"media/panorama_15C98E5C_183B_E986_41B1_C6EB2006770A_t.jpg","vfov":180,"hfovMax":130,"pitch":0,"data":{"label":"Co-working"}},{"id":"sequence_15CAADB2_183B_EA82_4198_BC94FDE447B9","restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","movements":[{"yawSpeed":7.96,"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawDelta":18.5},{"yawSpeed":7.96,"easing":"linear","class":"DistancePanoramaCameraMovement","yawDelta":323},{"yawSpeed":7.96,"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawDelta":18.5}]},{"id":"sequence_15C90DB2_183B_EA82_41B0_59B5E366321D","restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","movements":[{"yawSpeed":7.96,"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawDelta":18.5},{"yawSpeed":7.96,"easing":"linear","class":"DistancePanoramaCameraMovement","yawDelta":323},{"yawSpeed":7.96,"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawDelta":18.5}]},{"id":"sequence_15C92DB2_183B_EA82_41A7_3CAEE955A5B1","restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","movements":[{"yawSpeed":7.96,"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawDelta":18.5},{"yawSpeed":7.96,"easing":"linear","class":"DistancePanoramaCameraMovement","yawDelta":323},{"yawSpeed":7.96,"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawDelta":18.5}]},{"id":"sequence_15C97DB2_183B_EA82_41B9_2036F7275354","restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","movements":[{"yawSpeed":7.96,"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawDelta":18.5},{"yawSpeed":7.96,"easing":"linear","class":"DistancePanoramaCameraMovement","yawDelta":323},{"yawSpeed":7.96,"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawDelta":18.5}]},{"id":"sequence_15CACDB2_183B_EA82_418F_E15E19AFC525","restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","movements":[{"yawSpeed":7.96,"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawDelta":18.5},{"yawSpeed":7.96,"easing":"linear","class":"DistancePanoramaCameraMovement","yawDelta":323},{"yawSpeed":7.96,"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawDelta":18.5}]},{"id":"sequence_15CAEDB2_183B_EA82_41A5_B9D9CAA631CB","restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","movements":[{"yawSpeed":7.96,"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawDelta":18.5},{"yawSpeed":7.96,"easing":"linear","class":"DistancePanoramaCameraMovement","yawDelta":323},{"yawSpeed":7.96,"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawDelta":18.5}]}],"start":"this.init(); this.syncPlaylists([this.mainPlayList,this.ThumbnailList_0AA01EE2_183A_2682_41B1_96966AF60F2D_playlist])","data":{"name":"Player48428","textToSpeechConfig":{"speechOnTooltip":false,"speechOnQuizQuestion":false,"rate":1,"speechOnInfoWindow":false,"pitch":1,"volume":1},"locales":{"es":"locale/es.txt"},"defaultLocale":"es"},"paddingRight":0,"scripts":{"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"quizShowScore":TDV.Tour.Script.quizShowScore,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"setValue":TDV.Tour.Script.setValue,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"isPanorama":TDV.Tour.Script.isPanorama,"quizStart":TDV.Tour.Script.quizStart,"quizFinish":TDV.Tour.Script.quizFinish,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"getMediaByName":TDV.Tour.Script.getMediaByName,"getPixels":TDV.Tour.Script.getPixels,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"init":TDV.Tour.Script.init,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"setLocale":TDV.Tour.Script.setLocale,"getKey":TDV.Tour.Script.getKey,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"textToSpeech":TDV.Tour.Script.textToSpeech,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"setMapLocation":TDV.Tour.Script.setMapLocation,"getOverlays":TDV.Tour.Script.getOverlays,"unregisterKey":TDV.Tour.Script.unregisterKey,"registerKey":TDV.Tour.Script.registerKey,"getComponentByName":TDV.Tour.Script.getComponentByName,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"openLink":TDV.Tour.Script.openLink,"playAudioList":TDV.Tour.Script.playAudioList,"existsKey":TDV.Tour.Script.existsKey,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"shareSocial":TDV.Tour.Script.shareSocial,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"showPopupImage":TDV.Tour.Script.showPopupImage,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"historyGoBack":TDV.Tour.Script.historyGoBack,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"historyGoForward":TDV.Tour.Script.historyGoForward,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"resumePlayers":TDV.Tour.Script.resumePlayers,"showWindow":TDV.Tour.Script.showWindow,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"cloneCamera":TDV.Tour.Script.cloneCamera,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"mixObject":TDV.Tour.Script.mixObject,"initGA":TDV.Tour.Script.initGA,"clone":TDV.Tour.Script.clone,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"initQuiz":TDV.Tour.Script.initQuiz,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"translate":TDV.Tour.Script.translate,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"getMainViewer":TDV.Tour.Script.getMainViewer},"scrollBarWidth":10,"backgroundPreloadEnabled":true,"horizontalAlign":"left","backgroundColorRatios":[0],"scrollBarColor":"#000000","mediaActivationMode":"window","borderSize":0,"backgroundColorDirection":"vertical","layout":"absolute","downloadEnabled":false,"width":"100%","scrollBarMargin":2,"contentOpaque":false,"backgroundColor":["#FFFFFF"],"id":"rootPlayer","minHeight":20,"paddingTop":0,"toolTipHorizontalAlign":"center","class":"Player","mobileMipmappingEnabled":false,"scrollBarVisible":"rollOver","paddingBottom":0,"minWidth":20,"shadow":false,"mouseWheelEnabled":true,"vrPolyfillScale":0.75,"backgroundOpacity":1,"children":["this.MainViewer","this.ThumbnailList_0AA01EE2_183A_2682_41B1_96966AF60F2D"],"height":"100%","desktopMipmappingEnabled":false,"borderRadius":0,"verticalAlign":"top","propagateClick":false,"defaultVRPointer":"laser","paddingLeft":0,"gap":10,"scrollBarOpacity":0.5};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2020.5.27.js.map
//Generated with v2020.5.27, Tue Mar 9 2021