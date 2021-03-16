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
    var d = {"overflow":"hidden","definitions": [{"id":"panorama_32E73AD3_3B9B_DC8F_41B0_71DA2703B80B_camera","class":"PanoramaCamera","initialSequence":"this.sequence_32E9D65B_3B9B_F7BF_41BF_D701F9C79FC8","automaticZoomSpeed":10,"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0}},{"id":"panorama_32E73AD3_3B9B_DC8F_41B0_71DA2703B80B","hfovMin":"150%","class":"Panorama","label":trans('panorama_32E73AD3_3B9B_DC8F_41B0_71DA2703B80B.label'),"data":{"label":"2"},"hfov":360,"thumbnailUrl":"media/panorama_32E73AD3_3B9B_DC8F_41B0_71DA2703B80B_t.jpg","pitch":0,"partial":false,"vfov":180,"frames":[{"thumbnailUrl":"media/panorama_32E73AD3_3B9B_DC8F_41B0_71DA2703B80B_t.jpg","class":"CubicPanoramaFrame","cube":{"levels":[{"width":9216,"class":"TiledImageResourceLevel","height":1536,"colCount":18,"tags":"ondemand","rowCount":3,"url":"media/panorama_32E73AD3_3B9B_DC8F_41B0_71DA2703B80B_0/{face}/0/{row}_{column}.jpg"},{"width":6144,"class":"TiledImageResourceLevel","height":1024,"colCount":12,"tags":"ondemand","rowCount":2,"url":"media/panorama_32E73AD3_3B9B_DC8F_41B0_71DA2703B80B_0/{face}/1/{row}_{column}.jpg"},{"width":3072,"class":"TiledImageResourceLevel","height":512,"colCount":6,"tags":["ondemand","preload"],"rowCount":1,"url":"media/panorama_32E73AD3_3B9B_DC8F_41B0_71DA2703B80B_0/{face}/2/{row}_{column}.jpg"},{"width":9216,"class":"TiledImageResourceLevel","height":1536,"colCount":6,"tags":"mobilevr","rowCount":1,"url":"media/panorama_32E73AD3_3B9B_DC8F_41B0_71DA2703B80B_0/{face}/vr/0.jpg"}],"class":"ImageResource"}}],"hfovMax":130},{"id":"panorama_32D6F7ED_3B98_F49B_41CA_5136CBEAB259_camera","class":"PanoramaCamera","initialSequence":"this.sequence_32FE63FC_3B98_CC79_41BC_AC3DDEFFBCF2","automaticZoomSpeed":10,"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0}},{"id":"panorama_32E63292_3B9B_CC89_41CC_68BA3A431869_camera","class":"PanoramaCamera","initialSequence":"this.sequence_32E6165B_3B9B_F7BF_41AB_D1137E11CDED","automaticZoomSpeed":10,"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0}},{"playList":"this.ThumbnailList_355FE859_3B89_DBBB_41C5_9DB8DB884E4D_mobile_playlist","gap":0,"backgroundColorDirection":"vertical","itemLabelFontFamily":"Arial","itemPaddingTop":3,"paddingLeft":0,"right":"1.39%","borderRadius":0,"itemThumbnailHeight":75,"horizontalAlign":"left","paddingRight":0,"propagateClick":false,"itemVerticalAlign":"middle","borderSize":0,"scrollBarWidth":10,"itemBorderRadius":0,"itemBackgroundOpacity":0,"itemThumbnailBorderRadius":5,"itemPaddingBottom":3,"backgroundColor":["#000000"],"itemBackgroundColor":[],"class":"ThumbnailList","backgroundColorRatios":[0],"itemLabelGap":4,"paddingTop":0,"itemMode":"normal","scrollBarOpacity":0.5,"backgroundOpacity":0.2,"itemOpacity":1,"itemBackgroundColorRatios":[],"paddingBottom":0,"scrollBarVisible":"rollOver","itemThumbnailOpacity":1,"itemThumbnailWidth":75,"itemThumbnailShadowSpread":1,"itemThumbnailShadowOpacity":0.68,"layout":"vertical","scrollBarColor":"#FFFFFF","minHeight":1,"itemThumbnailShadowHorizontalLength":0,"verticalAlign":"top","bottom":"1.65%","itemLabelTextDecoration":"none","minWidth":1,"itemHorizontalAlign":"center","itemLabelFontWeight":"normal","scrollBarMargin":2,"toolTipHorizontalAlign":"center","itemLabelFontSize":14,"itemThumbnailScaleMode":"fit_outside","itemLabelPosition":"bottom","itemLabelHorizontalAlign":"center","width":131.05,"itemLabelFontColor":"#FFFFFF","itemBackgroundColorDirection":"vertical","id":"ThumbnailList_355FE859_3B89_DBBB_41C5_9DB8DB884E4D","itemThumbnailShadow":true,"height":"95.498%","itemThumbnailShadowVerticalLength":0,"itemThumbnailShadowColor":"#000000","itemLabelFontStyle":"normal","itemPaddingRight":3,"itemPaddingLeft":3,"data":{"name":"ThumbnailList1355"},"itemThumbnailShadowBlurRadius":4,"selectedItemLabelFontWeight":"bold","shadow":false},{"id":"panorama_32E63EBB_3B9B_D4FF_41C0_C274C67E0EA9_camera","class":"PanoramaCamera","initialSequence":"this.sequence_32E9F65B_3B9B_F7BF_41C6_D4F2DC2D4545","automaticZoomSpeed":10,"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0}},{"id":"panorama_3246D2BE_3B98_CCF9_41C4_0B8F18B3C214","hfovMin":"150%","class":"Panorama","label":trans('panorama_3246D2BE_3B98_CCF9_41C4_0B8F18B3C214.label'),"data":{"label":"1"},"hfov":360,"thumbnailUrl":"media/panorama_3246D2BE_3B98_CCF9_41C4_0B8F18B3C214_t.jpg","pitch":0,"partial":false,"vfov":180,"frames":[{"thumbnailUrl":"media/panorama_3246D2BE_3B98_CCF9_41C4_0B8F18B3C214_t.jpg","class":"CubicPanoramaFrame","cube":{"levels":[{"width":9216,"class":"TiledImageResourceLevel","height":1536,"colCount":18,"tags":"ondemand","rowCount":3,"url":"media/panorama_3246D2BE_3B98_CCF9_41C4_0B8F18B3C214_0/{face}/0/{row}_{column}.jpg"},{"width":6144,"class":"TiledImageResourceLevel","height":1024,"colCount":12,"tags":"ondemand","rowCount":2,"url":"media/panorama_3246D2BE_3B98_CCF9_41C4_0B8F18B3C214_0/{face}/1/{row}_{column}.jpg"},{"width":3072,"class":"TiledImageResourceLevel","height":512,"colCount":6,"tags":["ondemand","preload"],"rowCount":1,"url":"media/panorama_3246D2BE_3B98_CCF9_41C4_0B8F18B3C214_0/{face}/2/{row}_{column}.jpg"},{"width":9216,"class":"TiledImageResourceLevel","height":1536,"colCount":6,"tags":"mobilevr","rowCount":1,"url":"media/panorama_3246D2BE_3B98_CCF9_41C4_0B8F18B3C214_0/{face}/vr/0.jpg"}],"class":"ImageResource"}}],"hfovMax":130},{"id":"panorama_32D5AC05_3B98_FB8B_41CB_B8648D1F1D6A_camera","class":"PanoramaCamera","initialSequence":"this.sequence_32FE43FD_3B98_CC7B_41AF_DCFEF8796273","automaticZoomSpeed":10,"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0}},{"id":"panorama_31CD26AC_3B9B_D499_41CB_725931E3B91A","hfovMin":"150%","class":"Panorama","label":trans('panorama_31CD26AC_3B9B_D499_41CB_725931E3B91A.label'),"data":{"label":"1"},"hfov":360,"thumbnailUrl":"media/panorama_31CD26AC_3B9B_D499_41CB_725931E3B91A_t.jpg","pitch":0,"partial":false,"vfov":180,"frames":[{"thumbnailUrl":"media/panorama_31CD26AC_3B9B_D499_41CB_725931E3B91A_t.jpg","class":"CubicPanoramaFrame","cube":{"levels":[{"width":9216,"class":"TiledImageResourceLevel","height":1536,"colCount":18,"tags":"ondemand","rowCount":3,"url":"media/panorama_31CD26AC_3B9B_D499_41CB_725931E3B91A_0/{face}/0/{row}_{column}.jpg"},{"width":6144,"class":"TiledImageResourceLevel","height":1024,"colCount":12,"tags":"ondemand","rowCount":2,"url":"media/panorama_31CD26AC_3B9B_D499_41CB_725931E3B91A_0/{face}/1/{row}_{column}.jpg"},{"width":3072,"class":"TiledImageResourceLevel","height":512,"colCount":6,"tags":["ondemand","preload"],"rowCount":1,"url":"media/panorama_31CD26AC_3B9B_D499_41CB_725931E3B91A_0/{face}/2/{row}_{column}.jpg"},{"width":9216,"class":"TiledImageResourceLevel","height":1536,"colCount":6,"tags":"mobilevr","rowCount":1,"url":"media/panorama_31CD26AC_3B9B_D499_41CB_725931E3B91A_0/{face}/vr/0.jpg"}],"class":"ImageResource"}}],"hfovMax":130},{"id":"MainViewerPanoramaPlayer","arrowKeysAction":"translate","class":"PanoramaPlayer","displayPlaybackBar":true,"gyroscopeVerticalDraggingEnabled":true,"zoomEnabled":true,"touchControlMode":"drag_rotation","mouseControlMode":"drag_rotation","surfaceSelectionEnabled":false,"viewerArea":"this.MainViewer"},{"id":"ThumbnailList_355FE859_3B89_DBBB_41C5_9DB8DB884E4D_mobile_playlist","class":"PlayList","items":[{"camera":"this.panorama_3246D2BE_3B98_CCF9_41C4_0B8F18B3C214_camera","player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem","media":"this.panorama_3246D2BE_3B98_CCF9_41C4_0B8F18B3C214"},{"camera":"this.panorama_32D6F7ED_3B98_F49B_41CA_5136CBEAB259_camera","player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem","media":"this.panorama_32D6F7ED_3B98_F49B_41CA_5136CBEAB259"},{"camera":"this.panorama_32D5AC05_3B98_FB8B_41CB_B8648D1F1D6A_camera","player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem","media":"this.panorama_32D5AC05_3B98_FB8B_41CB_B8648D1F1D6A"},{"camera":"this.panorama_32D5FFEB_3B98_F49F_4192_EA1279DD9485_camera","player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem","media":"this.panorama_32D5FFEB_3B98_F49F_4192_EA1279DD9485"},{"camera":"this.panorama_31CD26AC_3B9B_D499_41CB_725931E3B91A_camera","player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem","media":"this.panorama_31CD26AC_3B9B_D499_41CB_725931E3B91A"},{"camera":"this.panorama_32E73AD3_3B9B_DC8F_41B0_71DA2703B80B_camera","player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem","media":"this.panorama_32E73AD3_3B9B_DC8F_41B0_71DA2703B80B"},{"camera":"this.panorama_32E63EBB_3B9B_D4FF_41C0_C274C67E0EA9_camera","player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem","media":"this.panorama_32E63EBB_3B9B_D4FF_41C0_C274C67E0EA9"},{"camera":"this.panorama_32E63292_3B9B_CC89_41CC_68BA3A431869_camera","player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem","media":"this.panorama_32E63292_3B9B_CC89_41CC_68BA3A431869"}]},{"id":"panorama_32E63292_3B9B_CC89_41CC_68BA3A431869","hfovMin":"150%","class":"Panorama","label":trans('panorama_32E63292_3B9B_CC89_41CC_68BA3A431869.label'),"data":{"label":"4"},"hfov":360,"thumbnailUrl":"media/panorama_32E63292_3B9B_CC89_41CC_68BA3A431869_t.jpg","pitch":0,"partial":false,"vfov":180,"frames":[{"thumbnailUrl":"media/panorama_32E63292_3B9B_CC89_41CC_68BA3A431869_t.jpg","class":"CubicPanoramaFrame","cube":{"levels":[{"width":9216,"class":"TiledImageResourceLevel","height":1536,"colCount":18,"tags":"ondemand","rowCount":3,"url":"media/panorama_32E63292_3B9B_CC89_41CC_68BA3A431869_0/{face}/0/{row}_{column}.jpg"},{"width":6144,"class":"TiledImageResourceLevel","height":1024,"colCount":12,"tags":"ondemand","rowCount":2,"url":"media/panorama_32E63292_3B9B_CC89_41CC_68BA3A431869_0/{face}/1/{row}_{column}.jpg"},{"width":3072,"class":"TiledImageResourceLevel","height":512,"colCount":6,"tags":["ondemand","preload"],"rowCount":1,"url":"media/panorama_32E63292_3B9B_CC89_41CC_68BA3A431869_0/{face}/2/{row}_{column}.jpg"},{"width":9216,"class":"TiledImageResourceLevel","height":1536,"colCount":6,"tags":"mobilevr","rowCount":1,"url":"media/panorama_32E63292_3B9B_CC89_41CC_68BA3A431869_0/{face}/vr/0.jpg"}],"class":"ImageResource"}}],"hfovMax":130},{"subtitlesBorderColor":"#FFFFFF","toolTipBorderRadius":3,"playbackBarLeft":0,"data":{"name":"Main Viewer"},"toolTipBorderSize":1,"playbackBarHeadShadowBlurRadius":3,"subtitlesFontWeight":"normal","borderRadius":0,"toolTipPaddingTop":4,"playbackBarHeadHeight":15,"paddingLeft":0,"subtitlesTextShadowBlurRadius":0,"toolTipTextShadowColor":"#000000","subtitlesTextDecoration":"none","playbackBarHeadBorderSize":0,"toolTipPaddingLeft":6,"surfaceReticleSelectionColor":"#FFFFFF","playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeadShadow":true,"borderSize":0,"playbackBarHeadShadowColor":"#000000","paddingRight":0,"propagateClick":false,"toolTipShadowColor":"#333333","subtitlesFontColor":"#FFFFFF","playbackBarHeadOpacity":1,"toolTipFontSize":"1.11vmin","doubleClickAction":"toggle_fullscreen","toolTipTextShadowOpacity":0,"firstTransitionDuration":0,"toolTipFontFamily":"Arial","transitionDuration":500,"playbackBarOpacity":1,"playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarBottom":5,"class":"ViewerArea","subtitlesPaddingLeft":5,"subtitlesTextShadowHorizontalLength":1,"paddingTop":0,"vrPointerColor":"#FFFFFF","toolTipFontColor":"#606060","progressBorderRadius":0,"subtitlesPaddingTop":5,"playbackBarProgressBackgroundColorDirection":"vertical","subtitlesShadow":false,"surfaceReticleSelectionOpacity":1,"paddingBottom":0,"playbackBarHeadBackgroundColorDirection":"vertical","subtitlesOpacity":1,"playbackBarHeight":10,"toolTipPaddingBottom":4,"progressBackgroundColorRatios":[0],"playbackBarBackgroundColor":["#FFFFFF"],"playbackBarProgressBorderSize":0,"minHeight":50,"playbackBarHeadWidth":6,"playbackBarBackgroundColorDirection":"vertical","minWidth":100,"toolTipShadowVerticalLength":0,"progressBackgroundOpacity":1,"playbackBarRight":0,"playbackBarHeadShadowVerticalLength":0,"displayTooltipInSurfaceSelection":true,"toolTipFontStyle":"normal","playbackBarProgressBorderRadius":0,"progressRight":0,"subtitlesTextShadowOpacity":1,"playbackBarProgressBackgroundColor":["#3399FF"],"toolTipOpacity":1,"progressOpacity":1,"playbackBarHeadShadowHorizontalLength":0,"playbackBarHeadShadowOpacity":0.7,"toolTipBorderColor":"#767676","progressBarBackgroundColorDirection":"vertical","toolTipHorizontalAlign":"center","toolTipShadowSpread":0,"progressBarBorderColor":"#000000","playbackBarProgressBackgroundColorRatios":[0],"progressBarBackgroundColorRatios":[0],"progressLeft":0,"surfaceReticleColor":"#FFFFFF","toolTipTextShadowBlurRadius":3,"toolTipPaddingRight":6,"subtitlesPaddingRight":5,"playbackBarBorderColor":"#FFFFFF","progressBackgroundColorDirection":"vertical","playbackBarBorderRadius":0,"subtitlesBottom":50,"surfaceReticleOpacity":0.6,"playbackBarProgressBorderColor":"#000000","width":"100%","subtitlesHorizontalAlign":"center","subtitlesFontFamily":"Arial","progressBorderColor":"#000000","toolTipShadowOpacity":1,"id":"MainViewer","subtitlesTextShadowVerticalLength":1,"playbackBarProgressOpacity":1,"vrPointerSelectionColor":"#FF6600","playbackBarHeadBorderRadius":0,"progressBarBackgroundColor":["#3399FF"],"playbackBarHeadBorderColor":"#000000","progressBackgroundColor":["#FFFFFF"],"height":"100%","toolTipBackgroundColor":"#F6F6F6","transitionMode":"blending","displayTooltipInTouchScreens":true,"subtitlesGap":0,"playbackBarBorderSize":0,"progressBottom":0,"progressBarOpacity":1,"subtitlesVerticalAlign":"bottom","subtitlesTop":0,"subtitlesTextShadowColor":"#000000","toolTipDisplayTime":600,"toolTipShadowHorizontalLength":0,"progressHeight":10,"vrPointerSelectionTime":2000,"shadow":false,"toolTipFontWeight":"normal","playbackBarBackgroundOpacity":1,"progressBarBorderRadius":0,"subtitlesBorderSize":0,"progressBorderSize":0,"progressBarBorderSize":0,"subtitlesFontSize":"3vmin","subtitlesBackgroundOpacity":0.2,"toolTipShadowBlurRadius":3,"subtitlesPaddingBottom":5,"subtitlesBackgroundColor":"#000000"},{"id":"panorama_32D5AC05_3B98_FB8B_41CB_B8648D1F1D6A","hfovMin":"150%","class":"Panorama","label":trans('panorama_32D5AC05_3B98_FB8B_41CB_B8648D1F1D6A.label'),"data":{"label":"3"},"hfov":360,"thumbnailUrl":"media/panorama_32D5AC05_3B98_FB8B_41CB_B8648D1F1D6A_t.jpg","pitch":0,"partial":false,"vfov":180,"frames":[{"thumbnailUrl":"media/panorama_32D5AC05_3B98_FB8B_41CB_B8648D1F1D6A_t.jpg","class":"CubicPanoramaFrame","cube":{"levels":[{"width":9216,"class":"TiledImageResourceLevel","height":1536,"colCount":18,"tags":"ondemand","rowCount":3,"url":"media/panorama_32D5AC05_3B98_FB8B_41CB_B8648D1F1D6A_0/{face}/0/{row}_{column}.jpg"},{"width":6144,"class":"TiledImageResourceLevel","height":1024,"colCount":12,"tags":"ondemand","rowCount":2,"url":"media/panorama_32D5AC05_3B98_FB8B_41CB_B8648D1F1D6A_0/{face}/1/{row}_{column}.jpg"},{"width":3072,"class":"TiledImageResourceLevel","height":512,"colCount":6,"tags":["ondemand","preload"],"rowCount":1,"url":"media/panorama_32D5AC05_3B98_FB8B_41CB_B8648D1F1D6A_0/{face}/2/{row}_{column}.jpg"},{"width":9216,"class":"TiledImageResourceLevel","height":1536,"colCount":6,"tags":"mobilevr","rowCount":1,"url":"media/panorama_32D5AC05_3B98_FB8B_41CB_B8648D1F1D6A_0/{face}/vr/0.jpg"}],"class":"ImageResource"}}],"hfovMax":130},{"id":"panorama_32D5FFEB_3B98_F49F_4192_EA1279DD9485","hfovMin":"150%","class":"Panorama","label":trans('panorama_32D5FFEB_3B98_F49F_4192_EA1279DD9485.label'),"data":{"label":"4"},"hfov":360,"thumbnailUrl":"media/panorama_32D5FFEB_3B98_F49F_4192_EA1279DD9485_t.jpg","pitch":0,"partial":false,"vfov":180,"frames":[{"thumbnailUrl":"media/panorama_32D5FFEB_3B98_F49F_4192_EA1279DD9485_t.jpg","class":"CubicPanoramaFrame","cube":{"levels":[{"width":9216,"class":"TiledImageResourceLevel","height":1536,"colCount":18,"tags":"ondemand","rowCount":3,"url":"media/panorama_32D5FFEB_3B98_F49F_4192_EA1279DD9485_0/{face}/0/{row}_{column}.jpg"},{"width":6144,"class":"TiledImageResourceLevel","height":1024,"colCount":12,"tags":"ondemand","rowCount":2,"url":"media/panorama_32D5FFEB_3B98_F49F_4192_EA1279DD9485_0/{face}/1/{row}_{column}.jpg"},{"width":3072,"class":"TiledImageResourceLevel","height":512,"colCount":6,"tags":["ondemand","preload"],"rowCount":1,"url":"media/panorama_32D5FFEB_3B98_F49F_4192_EA1279DD9485_0/{face}/2/{row}_{column}.jpg"},{"width":9216,"class":"TiledImageResourceLevel","height":1536,"colCount":6,"tags":"mobilevr","rowCount":1,"url":"media/panorama_32D5FFEB_3B98_F49F_4192_EA1279DD9485_0/{face}/vr/0.jpg"}],"class":"ImageResource"}}],"hfovMax":130},{"id":"panorama_32D6F7ED_3B98_F49B_41CA_5136CBEAB259","hfovMin":"150%","class":"Panorama","label":trans('panorama_32D6F7ED_3B98_F49B_41CA_5136CBEAB259.label'),"data":{"label":"2"},"hfov":360,"thumbnailUrl":"media/panorama_32D6F7ED_3B98_F49B_41CA_5136CBEAB259_t.jpg","pitch":0,"partial":false,"vfov":180,"frames":[{"thumbnailUrl":"media/panorama_32D6F7ED_3B98_F49B_41CA_5136CBEAB259_t.jpg","class":"CubicPanoramaFrame","cube":{"levels":[{"width":9216,"class":"TiledImageResourceLevel","height":1536,"colCount":18,"tags":"ondemand","rowCount":3,"url":"media/panorama_32D6F7ED_3B98_F49B_41CA_5136CBEAB259_0/{face}/0/{row}_{column}.jpg"},{"width":6144,"class":"TiledImageResourceLevel","height":1024,"colCount":12,"tags":"ondemand","rowCount":2,"url":"media/panorama_32D6F7ED_3B98_F49B_41CA_5136CBEAB259_0/{face}/1/{row}_{column}.jpg"},{"width":3072,"class":"TiledImageResourceLevel","height":512,"colCount":6,"tags":["ondemand","preload"],"rowCount":1,"url":"media/panorama_32D6F7ED_3B98_F49B_41CA_5136CBEAB259_0/{face}/2/{row}_{column}.jpg"},{"width":9216,"class":"TiledImageResourceLevel","height":1536,"colCount":6,"tags":"mobilevr","rowCount":1,"url":"media/panorama_32D6F7ED_3B98_F49B_41CA_5136CBEAB259_0/{face}/vr/0.jpg"}],"class":"ImageResource"}}],"hfovMax":130},{"id":"panorama_3246D2BE_3B98_CCF9_41C4_0B8F18B3C214_camera","class":"PanoramaCamera","initialSequence":"this.sequence_32FDE3F9_3B98_CC7B_41C8_E6601FE337F4","automaticZoomSpeed":10,"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0}},{"id":"mainPlayList","class":"PlayList","items":[{"begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","class":"PanoramaPlayListItem","camera":"this.panorama_3246D2BE_3B98_CCF9_41C4_0B8F18B3C214_camera","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_3246D2BE_3B98_CCF9_41C4_0B8F18B3C214"},{"begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)","class":"PanoramaPlayListItem","camera":"this.panorama_32D6F7ED_3B98_F49B_41CA_5136CBEAB259_camera","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_32D6F7ED_3B98_F49B_41CA_5136CBEAB259"},{"begin":"this.setEndToItemIndex(this.mainPlayList, 2, 3)","class":"PanoramaPlayListItem","camera":"this.panorama_32D5AC05_3B98_FB8B_41CB_B8648D1F1D6A_camera","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_32D5AC05_3B98_FB8B_41CB_B8648D1F1D6A"},{"begin":"this.setEndToItemIndex(this.mainPlayList, 3, 4)","class":"PanoramaPlayListItem","camera":"this.panorama_32D5FFEB_3B98_F49F_4192_EA1279DD9485_camera","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_32D5FFEB_3B98_F49F_4192_EA1279DD9485"},{"begin":"this.setEndToItemIndex(this.mainPlayList, 4, 5)","class":"PanoramaPlayListItem","camera":"this.panorama_31CD26AC_3B9B_D499_41CB_725931E3B91A_camera","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_31CD26AC_3B9B_D499_41CB_725931E3B91A"},{"begin":"this.setEndToItemIndex(this.mainPlayList, 5, 6)","class":"PanoramaPlayListItem","camera":"this.panorama_32E73AD3_3B9B_DC8F_41B0_71DA2703B80B_camera","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_32E73AD3_3B9B_DC8F_41B0_71DA2703B80B"},{"begin":"this.setEndToItemIndex(this.mainPlayList, 6, 7)","class":"PanoramaPlayListItem","camera":"this.panorama_32E63EBB_3B9B_D4FF_41C0_C274C67E0EA9_camera","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_32E63EBB_3B9B_D4FF_41C0_C274C67E0EA9"},{"begin":"this.setEndToItemIndex(this.mainPlayList, 7, 0)","end":"this.trigger('tourEnded')","class":"PanoramaPlayListItem","camera":"this.panorama_32E63292_3B9B_CC89_41CC_68BA3A431869_camera","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_32E63292_3B9B_CC89_41CC_68BA3A431869"}]},{"id":"panorama_32E63EBB_3B9B_D4FF_41C0_C274C67E0EA9","hfovMin":"150%","class":"Panorama","label":trans('panorama_32E63EBB_3B9B_D4FF_41C0_C274C67E0EA9.label'),"data":{"label":"3"},"hfov":360,"thumbnailUrl":"media/panorama_32E63EBB_3B9B_D4FF_41C0_C274C67E0EA9_t.jpg","pitch":0,"partial":false,"vfov":180,"frames":[{"thumbnailUrl":"media/panorama_32E63EBB_3B9B_D4FF_41C0_C274C67E0EA9_t.jpg","class":"CubicPanoramaFrame","cube":{"levels":[{"width":9216,"class":"TiledImageResourceLevel","height":1536,"colCount":18,"tags":"ondemand","rowCount":3,"url":"media/panorama_32E63EBB_3B9B_D4FF_41C0_C274C67E0EA9_0/{face}/0/{row}_{column}.jpg"},{"width":6144,"class":"TiledImageResourceLevel","height":1024,"colCount":12,"tags":"ondemand","rowCount":2,"url":"media/panorama_32E63EBB_3B9B_D4FF_41C0_C274C67E0EA9_0/{face}/1/{row}_{column}.jpg"},{"width":3072,"class":"TiledImageResourceLevel","height":512,"colCount":6,"tags":["ondemand","preload"],"rowCount":1,"url":"media/panorama_32E63EBB_3B9B_D4FF_41C0_C274C67E0EA9_0/{face}/2/{row}_{column}.jpg"},{"width":9216,"class":"TiledImageResourceLevel","height":1536,"colCount":6,"tags":"mobilevr","rowCount":1,"url":"media/panorama_32E63EBB_3B9B_D4FF_41C0_C274C67E0EA9_0/{face}/vr/0.jpg"}],"class":"ImageResource"}}],"hfovMax":130},{"id":"panorama_31CD26AC_3B9B_D499_41CB_725931E3B91A_camera","class":"PanoramaCamera","initialSequence":"this.sequence_32E9B65B_3B9B_F7BF_419F_EEB2AE7AF5C1","automaticZoomSpeed":10,"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0}},{"id":"panorama_32D5FFEB_3B98_F49F_4192_EA1279DD9485_camera","class":"PanoramaCamera","initialSequence":"this.sequence_32F9A3FD_3B98_CC7B_41B9_6D4992C68EBB","automaticZoomSpeed":10,"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0}},{"id":"sequence_32E9D65B_3B9B_F7BF_41BF_D701F9C79FC8","class":"PanoramaCameraSequence","restartMovementOnUserInteraction":false,"movements":[{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_in"},{"yawDelta":323,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"linear"},{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_out"}]},{"id":"sequence_32FE63FC_3B98_CC79_41BC_AC3DDEFFBCF2","class":"PanoramaCameraSequence","restartMovementOnUserInteraction":false,"movements":[{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_in"},{"yawDelta":323,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"linear"},{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_out"}]},{"id":"sequence_32E6165B_3B9B_F7BF_41AB_D1137E11CDED","class":"PanoramaCameraSequence","restartMovementOnUserInteraction":false,"movements":[{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_in"},{"yawDelta":323,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"linear"},{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_out"}]},{"id":"sequence_32E9F65B_3B9B_F7BF_41C6_D4F2DC2D4545","class":"PanoramaCameraSequence","restartMovementOnUserInteraction":false,"movements":[{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_in"},{"yawDelta":323,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"linear"},{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_out"}]},{"id":"sequence_32FE43FD_3B98_CC7B_41AF_DCFEF8796273","class":"PanoramaCameraSequence","restartMovementOnUserInteraction":false,"movements":[{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_in"},{"yawDelta":323,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"linear"},{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_out"}]},{"id":"sequence_32FDE3F9_3B98_CC7B_41C8_E6601FE337F4","class":"PanoramaCameraSequence","restartMovementOnUserInteraction":false,"movements":[{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_in"},{"yawDelta":323,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"linear"},{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_out"}]},{"id":"sequence_32E9B65B_3B9B_F7BF_419F_EEB2AE7AF5C1","class":"PanoramaCameraSequence","restartMovementOnUserInteraction":false,"movements":[{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_in"},{"yawDelta":323,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"linear"},{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_out"}]},{"id":"sequence_32F9A3FD_3B98_CC7B_41B9_6D4992C68EBB","class":"PanoramaCameraSequence","restartMovementOnUserInteraction":false,"movements":[{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_in"},{"yawDelta":323,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"linear"},{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_out"}]}],"backgroundColorDirection":"vertical","borderRadius":0,"scrollBarMargin":2,"paddingLeft":0,"horizontalAlign":"left","toolTipHorizontalAlign":"center","mobileMipmappingEnabled":false,"borderSize":0,"paddingRight":0,"propagateClick":false,"start":"this.init(); this.syncPlaylists([this.mainPlayList,this.ThumbnailList_355FE859_3B89_DBBB_41C5_9DB8DB884E4D_mobile_playlist])","scrollBarWidth":10,"backgroundColor":["#FFFFFF"],"id":"rootPlayer","class":"Player","height":"100%","backgroundColorRatios":[0],"downloadEnabled":false,"layout":"absolute","paddingTop":0,"defaultVRPointer":"laser","children":["this.MainViewer","this.ThumbnailList_355FE859_3B89_DBBB_41C5_9DB8DB884E4D"],"scrollBarOpacity":0.5,"backgroundOpacity":1,"width":"100%","mediaActivationMode":"window","desktopMipmappingEnabled":false,"paddingBottom":0,"scrollBarVisible":"rollOver","contentOpaque":false,"scrollBarColor":"#000000","minHeight":20,"shadow":false,"backgroundPreloadEnabled":true,"minWidth":20,"verticalAlign":"top","gap":10,"mouseWheelEnabled":true,"vrPolyfillScale":0.75,"data":{"name":"Player488","defaultLocale":"es","locales":{"es":"locale/es.txt"},"textToSpeechConfig":{"speechOnInfoWindow":false,"speechOnTooltip":false,"pitch":1,"speechOnQuizQuestion":false,"rate":1,"volume":1}},"scripts":{"getMainViewer":TDV.Tour.Script.getMainViewer,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"quizShowScore":TDV.Tour.Script.quizShowScore,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"mixObject":TDV.Tour.Script.mixObject,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"resumePlayers":TDV.Tour.Script.resumePlayers,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"initGA":TDV.Tour.Script.initGA,"historyGoForward":TDV.Tour.Script.historyGoForward,"getPixels":TDV.Tour.Script.getPixels,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"quizStart":TDV.Tour.Script.quizStart,"setLocale":TDV.Tour.Script.setLocale,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"quizFinish":TDV.Tour.Script.quizFinish,"initQuiz":TDV.Tour.Script.initQuiz,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"init":TDV.Tour.Script.init,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"getKey":TDV.Tour.Script.getKey,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"showWindow":TDV.Tour.Script.showWindow,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"getComponentByName":TDV.Tour.Script.getComponentByName,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"textToSpeech":TDV.Tour.Script.textToSpeech,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"playAudioList":TDV.Tour.Script.playAudioList,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"openLink":TDV.Tour.Script.openLink,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"cloneCamera":TDV.Tour.Script.cloneCamera,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"registerKey":TDV.Tour.Script.registerKey,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"isPanorama":TDV.Tour.Script.isPanorama,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"historyGoBack":TDV.Tour.Script.historyGoBack,"setValue":TDV.Tour.Script.setValue,"shareSocial":TDV.Tour.Script.shareSocial,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"unregisterKey":TDV.Tour.Script.unregisterKey,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"setMapLocation":TDV.Tour.Script.setMapLocation,"getMediaByName":TDV.Tour.Script.getMediaByName,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"showPopupImage":TDV.Tour.Script.showPopupImage,"clone":TDV.Tour.Script.clone,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"translate":TDV.Tour.Script.translate,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"getOverlays":TDV.Tour.Script.getOverlays,"existsKey":TDV.Tour.Script.existsKey}};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2020.5.27.js.map
//Generated with v2020.5.27, Tue Mar 16 2021