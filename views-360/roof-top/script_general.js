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
    var d = {"start":"this.init(); this.syncPlaylists([this.mainPlayList,this.ThumbnailList_355FE859_3B89_DBBB_41C5_9DB8DB884E4D_mobile_playlist])","gap":10,"scrollBarMargin":2,"children":["this.MainViewer","this.ThumbnailList_355FE859_3B89_DBBB_41C5_9DB8DB884E4D"],"defaultVRPointer":"laser","paddingLeft":0,"horizontalAlign":"left","backgroundPreloadEnabled":true,"data":{"name":"Player488","textToSpeechConfig":{"rate":1,"speechOnInfoWindow":false,"pitch":1,"speechOnQuizQuestion":false,"stopBackgroundAudio":false,"volume":1,"speechOnTooltip":false},"locales":{"es":"locale/es.txt"},"defaultLocale":"es"},"borderSize":0,"backgroundColorDirection":"vertical","paddingRight":0,"backgroundOpacity":1,"contentOpaque":false,"definitions": [{"toolTipHorizontalAlign":"center","itemThumbnailShadow":true,"paddingLeft":0,"right":"1.39%","itemPaddingTop":3,"itemVerticalAlign":"middle","horizontalAlign":"left","borderSize":0,"backgroundColorDirection":"vertical","paddingRight":0,"itemLabelFontWeight":"normal","itemLabelTextDecoration":"none","backgroundColorRatios":[0],"itemThumbnailScaleMode":"fit_outside","itemLabelFontSize":14,"itemLabelPosition":"bottom","backgroundColor":["#000000"],"class":"ThumbnailList","itemThumbnailShadowVerticalLength":0,"layout":"vertical","paddingTop":0,"itemPaddingBottom":3,"itemThumbnailOpacity":1,"scrollBarOpacity":0.5,"paddingBottom":0,"itemThumbnailHeight":75,"scrollBarVisible":"rollOver","itemBackgroundColorDirection":"vertical","itemPaddingRight":3,"verticalAlign":"top","minHeight":1,"bottom":"1.65%","itemBackgroundOpacity":0,"minWidth":1,"itemLabelFontStyle":"normal","itemHorizontalAlign":"center","itemThumbnailShadowColor":"#000000","itemMode":"normal","scrollBarMargin":2,"itemBorderRadius":0,"itemThumbnailWidth":75,"itemThumbnailShadowHorizontalLength":0,"itemThumbnailShadowBlurRadius":4,"backgroundOpacity":0.2,"itemLabelFontFamily":"Arial","width":131.05,"itemOpacity":1,"itemThumbnailShadowOpacity":0.68,"id":"ThumbnailList_355FE859_3B89_DBBB_41C5_9DB8DB884E4D","itemPaddingLeft":3,"itemBackgroundColor":[],"propagateClick":false,"height":"95.498%","scrollBarWidth":10,"itemBackgroundColorRatios":[],"itemLabelFontColor":"#FFFFFF","playList":"this.ThumbnailList_355FE859_3B89_DBBB_41C5_9DB8DB884E4D_mobile_playlist","itemLabelHorizontalAlign":"center","data":{"name":"ThumbnailList1355"},"selectedItemLabelFontWeight":"bold","borderRadius":0,"shadow":false,"scrollBarColor":"#FFFFFF","itemThumbnailBorderRadius":5,"itemLabelGap":4,"itemThumbnailShadowSpread":1,"gap":0},{"id":"panorama_68DCA21F_6642_0942_41D3_9183B4EBB447_camera","class":"PanoramaCamera","initialSequence":"this.sequence_32E9D65B_3B9B_F7BF_41BF_D701F9C79FC8","automaticZoomSpeed":10,"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0}},{"id":"MainViewerPanoramaPlayer","arrowKeysAction":"translate","class":"PanoramaPlayer","viewerArea":"this.MainViewer","displayPlaybackBar":true,"surfaceSelectionEnabled":false,"zoomEnabled":true,"gyroscopeVerticalDraggingEnabled":true,"mouseControlMode":"drag_rotation","touchControlMode":"drag_rotation"},{"id":"panorama_68290706_6642_1742_41BB_65B6D5E44A21_camera","class":"PanoramaCamera","initialSequence":"this.sequence_32E6165B_3B9B_F7BF_41AB_D1137E11CDED","automaticZoomSpeed":10,"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0}},{"id":"panorama_68DCA21F_6642_0942_41D3_9183B4EBB447","hfovMax":130,"hfov":360,"class":"Panorama","label":trans('panorama_68DCA21F_6642_0942_41D3_9183B4EBB447.label'),"hfovMin":"150%","vfov":180,"data":{"label":"2"},"partial":false,"pitch":0,"thumbnailUrl":"media/panorama_68DCA21F_6642_0942_41D3_9183B4EBB447_t.jpg","frames":[{"thumbnailUrl":"media/panorama_68DCA21F_6642_0942_41D3_9183B4EBB447_t.jpg","class":"CubicPanoramaFrame","cube":{"levels":[{"width":6144,"colCount":12,"class":"TiledImageResourceLevel","height":1024,"rowCount":2,"url":"media/panorama_68DCA21F_6642_0942_41D3_9183B4EBB447_0/{face}/0/{row}_{column}.jpg","tags":"ondemand"},{"width":3072,"colCount":6,"class":"TiledImageResourceLevel","height":512,"rowCount":1,"url":"media/panorama_68DCA21F_6642_0942_41D3_9183B4EBB447_0/{face}/1/{row}_{column}.jpg","tags":["ondemand","preload"]},{"width":6144,"colCount":6,"class":"TiledImageResourceLevel","height":1024,"rowCount":1,"url":"media/panorama_68DCA21F_6642_0942_41D3_9183B4EBB447_0/{face}/vr/0.jpg","tags":"mobilevr"}],"class":"ImageResource"}}]},{"id":"panorama_68D00CA5_6642_1946_4173_7A6D20A33AB0_camera","class":"PanoramaCamera","initialSequence":"this.sequence_32E9F65B_3B9B_F7BF_41C6_D4F2DC2D4545","automaticZoomSpeed":10,"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0}},{"id":"panorama_68D94C5C_6642_19C6_41D4_5BD2BEA35E1C","hfovMax":130,"hfov":360,"class":"Panorama","label":trans('panorama_68D94C5C_6642_19C6_41D4_5BD2BEA35E1C.label'),"hfovMin":"150%","vfov":180,"data":{"label":"1"},"partial":false,"pitch":0,"thumbnailUrl":"media/panorama_68D94C5C_6642_19C6_41D4_5BD2BEA35E1C_t.jpg","frames":[{"thumbnailUrl":"media/panorama_68D94C5C_6642_19C6_41D4_5BD2BEA35E1C_t.jpg","class":"CubicPanoramaFrame","cube":{"levels":[{"width":6144,"colCount":12,"class":"TiledImageResourceLevel","height":1024,"rowCount":2,"url":"media/panorama_68D94C5C_6642_19C6_41D4_5BD2BEA35E1C_0/{face}/0/{row}_{column}.jpg","tags":"ondemand"},{"width":3072,"colCount":6,"class":"TiledImageResourceLevel","height":512,"rowCount":1,"url":"media/panorama_68D94C5C_6642_19C6_41D4_5BD2BEA35E1C_0/{face}/1/{row}_{column}.jpg","tags":["ondemand","preload"]},{"width":6144,"colCount":6,"class":"TiledImageResourceLevel","height":1024,"rowCount":1,"url":"media/panorama_68D94C5C_6642_19C6_41D4_5BD2BEA35E1C_0/{face}/vr/0.jpg","tags":"mobilevr"}],"class":"ImageResource"}}]},{"id":"ThumbnailList_355FE859_3B89_DBBB_41C5_9DB8DB884E4D_mobile_playlist","class":"PlayList","items":[{"camera":"this.panorama_68D94C5C_6642_19C6_41D4_5BD2BEA35E1C_camera","player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem","media":"this.panorama_68D94C5C_6642_19C6_41D4_5BD2BEA35E1C"},{"camera":"this.panorama_68DCA21F_6642_0942_41D3_9183B4EBB447_camera","player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem","media":"this.panorama_68DCA21F_6642_0942_41D3_9183B4EBB447"},{"camera":"this.panorama_68D00CA5_6642_1946_4173_7A6D20A33AB0_camera","player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem","media":"this.panorama_68D00CA5_6642_1946_4173_7A6D20A33AB0"},{"camera":"this.panorama_68290706_6642_1742_41BB_65B6D5E44A21_camera","player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem","media":"this.panorama_68290706_6642_1742_41BB_65B6D5E44A21"}]},{"id":"panorama_68D00CA5_6642_1946_4173_7A6D20A33AB0","hfovMax":130,"hfov":360,"class":"Panorama","label":trans('panorama_68D00CA5_6642_1946_4173_7A6D20A33AB0.label'),"hfovMin":"150%","vfov":180,"data":{"label":"3"},"partial":false,"pitch":0,"thumbnailUrl":"media/panorama_68D00CA5_6642_1946_4173_7A6D20A33AB0_t.jpg","frames":[{"thumbnailUrl":"media/panorama_68D00CA5_6642_1946_4173_7A6D20A33AB0_t.jpg","class":"CubicPanoramaFrame","cube":{"levels":[{"width":6144,"colCount":12,"class":"TiledImageResourceLevel","height":1024,"rowCount":2,"url":"media/panorama_68D00CA5_6642_1946_4173_7A6D20A33AB0_0/{face}/0/{row}_{column}.jpg","tags":"ondemand"},{"width":3072,"colCount":6,"class":"TiledImageResourceLevel","height":512,"rowCount":1,"url":"media/panorama_68D00CA5_6642_1946_4173_7A6D20A33AB0_0/{face}/1/{row}_{column}.jpg","tags":["ondemand","preload"]},{"width":6144,"colCount":6,"class":"TiledImageResourceLevel","height":1024,"rowCount":1,"url":"media/panorama_68D00CA5_6642_1946_4173_7A6D20A33AB0_0/{face}/vr/0.jpg","tags":"mobilevr"}],"class":"ImageResource"}}]},{"id":"mainPlayList","class":"PlayList","items":[{"camera":"this.panorama_68D94C5C_6642_19C6_41D4_5BD2BEA35E1C_camera","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_68D94C5C_6642_19C6_41D4_5BD2BEA35E1C"},{"camera":"this.panorama_68DCA21F_6642_0942_41D3_9183B4EBB447_camera","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_68DCA21F_6642_0942_41D3_9183B4EBB447"},{"camera":"this.panorama_68D00CA5_6642_1946_4173_7A6D20A33AB0_camera","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 3)","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_68D00CA5_6642_1946_4173_7A6D20A33AB0"},{"camera":"this.panorama_68290706_6642_1742_41BB_65B6D5E44A21_camera","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 3, 0)","end":"this.trigger('tourEnded')","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_68290706_6642_1742_41BB_65B6D5E44A21"}]},{"id":"panorama_68290706_6642_1742_41BB_65B6D5E44A21","hfovMax":130,"hfov":360,"class":"Panorama","label":trans('panorama_68290706_6642_1742_41BB_65B6D5E44A21.label'),"hfovMin":"150%","vfov":180,"data":{"label":"4"},"partial":false,"pitch":0,"thumbnailUrl":"media/panorama_68290706_6642_1742_41BB_65B6D5E44A21_t.jpg","frames":[{"thumbnailUrl":"media/panorama_68290706_6642_1742_41BB_65B6D5E44A21_t.jpg","class":"CubicPanoramaFrame","cube":{"levels":[{"width":6144,"colCount":12,"class":"TiledImageResourceLevel","height":1024,"rowCount":2,"url":"media/panorama_68290706_6642_1742_41BB_65B6D5E44A21_0/{face}/0/{row}_{column}.jpg","tags":"ondemand"},{"width":3072,"colCount":6,"class":"TiledImageResourceLevel","height":512,"rowCount":1,"url":"media/panorama_68290706_6642_1742_41BB_65B6D5E44A21_0/{face}/1/{row}_{column}.jpg","tags":["ondemand","preload"]},{"width":6144,"colCount":6,"class":"TiledImageResourceLevel","height":1024,"rowCount":1,"url":"media/panorama_68290706_6642_1742_41BB_65B6D5E44A21_0/{face}/vr/0.jpg","tags":"mobilevr"}],"class":"ImageResource"}}]},{"id":"panorama_68D94C5C_6642_19C6_41D4_5BD2BEA35E1C_camera","class":"PanoramaCamera","initialSequence":"this.sequence_32E9B65B_3B9B_F7BF_419F_EEB2AE7AF5C1","automaticZoomSpeed":10,"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0}},{"toolTipHorizontalAlign":"center","progressBarBackgroundColorRatios":[0],"playbackBarHeadBackgroundColor":["#111111","#666666"],"data":{"name":"Main Viewer"},"playbackBarOpacity":1,"progressBackgroundColorDirection":"vertical","subtitlesGap":0,"subtitlesEnabled":true,"surfaceReticleSelectionOpacity":1,"firstTransitionDuration":0,"displayTooltipInSurfaceSelection":true,"paddingLeft":0,"subtitlesBackgroundColor":"#000000","subtitlesTextShadowVerticalLength":1,"playbackBarBottom":5,"playbackBarProgressBackgroundColorDirection":"vertical","toolTipShadowColor":"#333333","subtitlesFontColor":"#FFFFFF","borderSize":0,"paddingRight":0,"toolTipFontStyle":"normal","vrPointerSelectionColor":"#FF6600","toolTipPaddingBottom":4,"playbackBarHeadShadowVerticalLength":0,"playbackBarBackgroundColor":["#FFFFFF"],"transitionDuration":500,"playbackBarHeight":10,"playbackBarHeadWidth":6,"playbackBarHeadBackgroundColorDirection":"vertical","subtitlesBorderSize":0,"toolTipBorderColor":"#767676","playbackBarProgressBorderSize":0,"subtitlesHorizontalAlign":"center","toolTipTextShadowBlurRadius":3,"class":"ViewerArea","toolTipBackgroundColor":"#F6F6F6","playbackBarProgressBorderRadius":0,"playbackBarRight":0,"subtitlesBackgroundOpacity":0.2,"paddingTop":0,"playbackBarBackgroundColorDirection":"vertical","subtitlesBottom":50,"progressBorderColor":"#000000","displayTooltipInTouchScreens":true,"playbackBarProgressBackgroundColor":["#3399FF"],"paddingBottom":0,"subtitlesFontFamily":"Arial","subtitlesTextShadowHorizontalLength":1,"playbackBarHeadShadowOpacity":0.7,"subtitlesVerticalAlign":"bottom","subtitlesBorderColor":"#FFFFFF","progressBarBackgroundColor":["#3399FF"],"progressBackgroundColor":["#FFFFFF"],"subtitlesPaddingRight":5,"vrPointerColor":"#FFFFFF","playbackBarProgressBackgroundColorRatios":[0],"minWidth":100,"toolTipShadowBlurRadius":3,"minHeight":50,"playbackBarBorderColor":"#FFFFFF","toolTipFontColor":"#606060","playbackBarBorderRadius":0,"playbackBarProgressBorderColor":"#000000","toolTipBorderSize":1,"playbackBarHeadBorderRadius":0,"subtitlesTop":0,"subtitlesFontSize":"3vmin","progressBarOpacity":1,"toolTipPaddingLeft":6,"playbackBarHeadBorderColor":"#000000","playbackBarBackgroundOpacity":1,"playbackBarProgressOpacity":1,"progressBottom":0,"playbackBarBorderSize":0,"toolTipShadowSpread":0,"subtitlesPaddingBottom":5,"progressHeight":10,"subtitlesTextDecoration":"none","progressBackgroundColorRatios":[0],"subtitlesPaddingTop":5,"width":"100%","transitionMode":"blending","toolTipOpacity":1,"toolTipShadowVerticalLength":0,"progressBorderSize":0,"progressRight":0,"subtitlesShadow":false,"toolTipPaddingTop":4,"id":"MainViewer","playbackBarHeadShadowHorizontalLength":0,"toolTipShadowOpacity":1,"toolTipFontSize":"1.11vmin","progressBarBorderRadius":0,"toolTipBorderRadius":3,"propagateClick":false,"progressBarBorderSize":0,"progressBarBackgroundColorDirection":"vertical","progressBarBorderColor":"#000000","toolTipDisplayTime":600,"playbackBarHeadShadowBlurRadius":3,"toolTipTextShadowColor":"#000000","surfaceReticleColor":"#FFFFFF","toolTipTextShadowOpacity":0,"vrPointerSelectionTime":2000,"progressOpacity":1,"playbackBarLeft":0,"playbackBarHeadShadowColor":"#000000","height":"100%","playbackBarHeadHeight":15,"toolTipPaddingRight":6,"playbackBarHeadBackgroundColorRatios":[0,1],"toolTipShadowHorizontalLength":0,"surfaceReticleOpacity":0.6,"subtitlesOpacity":1,"playbackBarHeadBorderSize":0,"progressBorderRadius":0,"subtitlesTextShadowBlurRadius":0,"progressLeft":0,"playbackBarHeadShadow":true,"doubleClickAction":"toggle_fullscreen","toolTipFontFamily":"Arial","playbackBarHeadOpacity":1,"subtitlesFontWeight":"normal","shadow":false,"subtitlesTextShadowColor":"#000000","subtitlesPaddingLeft":5,"borderRadius":0,"progressBackgroundOpacity":1,"toolTipFontWeight":"normal","subtitlesTextShadowOpacity":1,"surfaceReticleSelectionColor":"#FFFFFF"},{"id":"sequence_32E9D65B_3B9B_F7BF_41BF_D701F9C79FC8","class":"PanoramaCameraSequence","movements":[{"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5},{"easing":"linear","class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":323},{"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5}],"restartMovementOnUserInteraction":false},{"id":"sequence_32E6165B_3B9B_F7BF_41AB_D1137E11CDED","class":"PanoramaCameraSequence","movements":[{"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5},{"easing":"linear","class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":323},{"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5}],"restartMovementOnUserInteraction":false},{"id":"sequence_32E9F65B_3B9B_F7BF_41C6_D4F2DC2D4545","class":"PanoramaCameraSequence","movements":[{"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5},{"easing":"linear","class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":323},{"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5}],"restartMovementOnUserInteraction":false},{"id":"sequence_32E9B65B_3B9B_F7BF_419F_EEB2AE7AF5C1","class":"PanoramaCameraSequence","movements":[{"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5},{"easing":"linear","class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":323},{"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5}],"restartMovementOnUserInteraction":false}],"backgroundColorRatios":[0],"width":"100%","vrPolyfillScale":0.75,"backgroundColor":["#FFFFFF"],"desktopMipmappingEnabled":false,"id":"rootPlayer","class":"Player","mobileMipmappingEnabled":false,"overflow":"hidden","propagateClick":false,"layout":"absolute","paddingTop":0,"height":"100%","paddingBottom":0,"scrollBarVisible":"rollOver","mouseWheelEnabled":true,"mediaActivationMode":"window","scrollBarWidth":10,"scrollBarOpacity":0.5,"shadow":false,"scrollBarColor":"#000000","scripts":{"getPlayListItems":TDV.Tour.Script.getPlayListItems,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"initQuiz":TDV.Tour.Script.initQuiz,"registerKey":TDV.Tour.Script.registerKey,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"setMapLocation":TDV.Tour.Script.setMapLocation,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"setLocale":TDV.Tour.Script.setLocale,"init":TDV.Tour.Script.init,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getPixels":TDV.Tour.Script.getPixels,"getKey":TDV.Tour.Script.getKey,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"historyGoForward":TDV.Tour.Script.historyGoForward,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"textToSpeech":TDV.Tour.Script.textToSpeech,"getMainViewer":TDV.Tour.Script.getMainViewer,"quizFinish":TDV.Tour.Script.quizFinish,"showPopupImage":TDV.Tour.Script.showPopupImage,"quizStart":TDV.Tour.Script.quizStart,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"getMediaByName":TDV.Tour.Script.getMediaByName,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"resumePlayers":TDV.Tour.Script.resumePlayers,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"quizShowScore":TDV.Tour.Script.quizShowScore,"openLink":TDV.Tour.Script.openLink,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"existsKey":TDV.Tour.Script.existsKey,"mixObject":TDV.Tour.Script.mixObject,"getOverlays":TDV.Tour.Script.getOverlays,"showWindow":TDV.Tour.Script.showWindow,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"playAudioList":TDV.Tour.Script.playAudioList,"cloneCamera":TDV.Tour.Script.cloneCamera,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"setValue":TDV.Tour.Script.setValue,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"initAnalytics":TDV.Tour.Script.initAnalytics,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"isPanorama":TDV.Tour.Script.isPanorama,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"shareSocial":TDV.Tour.Script.shareSocial,"unregisterKey":TDV.Tour.Script.unregisterKey,"historyGoBack":TDV.Tour.Script.historyGoBack,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"translate":TDV.Tour.Script.translate,"clone":TDV.Tour.Script.clone,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"getComponentByName":TDV.Tour.Script.getComponentByName,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion},"minWidth":20,"borderRadius":0,"minHeight":20,"downloadEnabled":false,"toolTipHorizontalAlign":"center","verticalAlign":"top"};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2021.0.4.js.map
//Generated with v2021.0.4, Thu Mar 25 2021