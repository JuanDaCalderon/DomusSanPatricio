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
    var d = {"contentOpaque":false,"start":"this.init()","mediaActivationMode":"window","backgroundOpacity":1,"gap":10,"paddingRight":0,"scrollBarColor":"#000000","data":{"name":"Player9858","defaultLocale":"es","textToSpeechConfig":{"speechOnInfoWindow":false,"pitch":1,"speechOnQuizQuestion":false,"speechOnTooltip":false,"rate":1,"volume":1},"locales":{"es":"locale/es.txt"}},"paddingLeft":0,"horizontalAlign":"left","mouseWheelEnabled":true,"backgroundPreloadEnabled":true,"borderSize":0,"propagateClick":false,"backgroundColorRatios":[0],"mobileMipmappingEnabled":false,"layout":"absolute","width":"100%","scrollBarVisible":"rollOver","downloadEnabled":true,"borderRadius":0,"backgroundColor":["#FFFFFF"],"vrPolyfillScale":0.75,"id":"rootPlayer","class":"Player","height":"100%","backgroundColorDirection":"vertical","minHeight":20,"desktopMipmappingEnabled":false,"paddingTop":0,"definitions": [{"id":"panorama_DB820E86_CB85_E0D7_41E1_8D603CC45895_camera","class":"PanoramaCamera","initialSequence":"this.sequence_DB800A4F_CB85_E055_41D6_96A96A813F23","initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"automaticZoomSpeed":10},{"id":"mainPlayList","class":"PlayList","items":[{"camera":"this.panorama_DCE5C8AC_CB85_E0DB_41DC_85EA061BF928_camera","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_DCE5C8AC_CB85_E0DB_41DC_85EA061BF928"},{"camera":"this.panorama_DB820E86_CB85_E0D7_41E1_8D603CC45895_camera","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_DB820E86_CB85_E0D7_41E1_8D603CC45895"},{"camera":"this.panorama_DB80F24C_CB85_E05B_41E6_5B4A07B846DF_camera","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 3)","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_DB80F24C_CB85_E05B_41E6_5B4A07B846DF"},{"camera":"this.panorama_DB80C668_CB85_E05B_41AA_59EA1C847556_camera","end":"this.trigger('tourEnded')","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 3, 0)","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_DB80C668_CB85_E05B_41AA_59EA1C847556"}]},{"id":"panorama_DB820E86_CB85_E0D7_41E1_8D603CC45895","class":"Panorama","frames":[{"thumbnailUrl":"media/panorama_DB820E86_CB85_E0D7_41E1_8D603CC45895_t.jpg","class":"CubicPanoramaFrame","cube":{"levels":[{"width":6144,"class":"TiledImageResourceLevel","height":1024,"tags":"ondemand","colCount":12,"rowCount":2,"url":"media/panorama_DB820E86_CB85_E0D7_41E1_8D603CC45895_0/{face}/0/{row}_{column}.jpg"},{"width":3072,"class":"TiledImageResourceLevel","height":512,"tags":["ondemand","preload"],"colCount":6,"rowCount":1,"url":"media/panorama_DB820E86_CB85_E0D7_41E1_8D603CC45895_0/{face}/1/{row}_{column}.jpg"},{"width":6144,"class":"TiledImageResourceLevel","height":1024,"tags":"mobilevr","colCount":6,"rowCount":1,"url":"media/panorama_DB820E86_CB85_E0D7_41E1_8D603CC45895_0/{face}/vr/0.jpg"}],"class":"ImageResource"}}],"label":trans('panorama_DB820E86_CB85_E0D7_41E1_8D603CC45895.label'),"thumbnailUrl":"media/panorama_DB820E86_CB85_E0D7_41E1_8D603CC45895_t.jpg","vfov":180,"pitch":0,"adjacentPanoramas":[{"class":"AdjacentPanorama","distance":100,"backwardYaw":67.95,"yaw":-112.7,"select":"this.overlay_DAED29CE_CBBE_6057_41E5_95FF221DF29C.get('areas').forEach(function(a){ a.trigger('click') })","panorama":"this.panorama_DCE5C8AC_CB85_E0DB_41DC_85EA061BF928"},{"class":"AdjacentPanorama","distance":100,"backwardYaw":-88.85,"yaw":-5.44,"select":"this.overlay_DAE22EE3_CBBD_A04D_41C0_C9A9F6AF93FE.get('areas').forEach(function(a){ a.trigger('click') })","panorama":"this.panorama_DB80F24C_CB85_E05B_41E6_5B4A07B846DF"}],"hfov":360,"data":{"label":"Corredor"},"hfovMax":130,"partial":false,"hfovMin":"150%","overlays":["this.overlay_DAED29CE_CBBE_6057_41E5_95FF221DF29C","this.overlay_DAE22EE3_CBBD_A04D_41C0_C9A9F6AF93FE"]},{"id":"panorama_DCE5C8AC_CB85_E0DB_41DC_85EA061BF928","class":"Panorama","frames":[{"thumbnailUrl":"media/panorama_DCE5C8AC_CB85_E0DB_41DC_85EA061BF928_t.jpg","class":"CubicPanoramaFrame","cube":{"levels":[{"width":6144,"class":"TiledImageResourceLevel","height":1024,"tags":"ondemand","colCount":12,"rowCount":2,"url":"media/panorama_DCE5C8AC_CB85_E0DB_41DC_85EA061BF928_0/{face}/0/{row}_{column}.jpg"},{"width":3072,"class":"TiledImageResourceLevel","height":512,"tags":["ondemand","preload"],"colCount":6,"rowCount":1,"url":"media/panorama_DCE5C8AC_CB85_E0DB_41DC_85EA061BF928_0/{face}/1/{row}_{column}.jpg"},{"width":6144,"class":"TiledImageResourceLevel","height":1024,"tags":"mobilevr","colCount":6,"rowCount":1,"url":"media/panorama_DCE5C8AC_CB85_E0DB_41DC_85EA061BF928_0/{face}/vr/0.jpg"}],"class":"ImageResource"}}],"label":trans('panorama_DCE5C8AC_CB85_E0DB_41DC_85EA061BF928.label'),"thumbnailUrl":"media/panorama_DCE5C8AC_CB85_E0DB_41DC_85EA061BF928_t.jpg","vfov":180,"pitch":0,"adjacentPanoramas":[{"class":"AdjacentPanorama","distance":100,"backwardYaw":-112.7,"yaw":67.95,"select":"this.overlay_DAE939CB_CBBE_605D_41E3_A67DC04F82E0.get('areas').forEach(function(a){ a.trigger('click') })","panorama":"this.panorama_DB820E86_CB85_E0D7_41E1_8D603CC45895"}],"hfov":360,"data":{"label":"Sala"},"hfovMax":130,"partial":false,"hfovMin":"150%","overlays":["this.overlay_DAE939CB_CBBE_605D_41E3_A67DC04F82E0"]},{"surfaceReticleOpacity":0.6,"subtitlesBottom":50,"surfaceReticleColor":"#FFFFFF","toolTipTextShadowBlurRadius":3,"playbackBarHeadShadowOpacity":0.7,"toolTipFontWeight":"normal","playbackBarProgressBackgroundColor":["#3399FF"],"progressBackgroundColorDirection":"vertical","subtitlesPaddingRight":5,"toolTipShadowHorizontalLength":0,"playbackBarProgressBackgroundColorRatios":[0],"borderSize":0,"propagateClick":false,"playbackBarBorderColor":"#FFFFFF","progressBarBackgroundColor":["#3399FF"],"progressBorderColor":"#000000","toolTipBackgroundColor":"#F6F6F6","playbackBarBackgroundOpacity":1,"toolTipShadowOpacity":1,"playbackBarBorderRadius":0,"subtitlesFontWeight":"normal","progressBackgroundColor":["#FFFFFF"],"playbackBarHeadBorderRadius":0,"class":"ViewerArea","playbackBarProgressBorderColor":"#000000","surfaceReticleSelectionColor":"#FFFFFF","playbackBarProgressOpacity":1,"progressBarOpacity":1,"paddingTop":0,"surfaceReticleSelectionOpacity":1,"progressBottom":0,"vrPointerColor":"#FFFFFF","progressHeight":10,"playbackBarHeadBorderColor":"#000000","paddingBottom":0,"shadow":false,"progressBarBorderRadius":0,"playbackBarBorderSize":0,"progressBorderSize":0,"progressBarBorderSize":0,"subtitlesTextShadowVerticalLength":1,"playbackBarHeadShadowHorizontalLength":0,"toolTipShadowColor":"#333333","toolTipShadowBlurRadius":3,"toolTipPaddingLeft":6,"toolTipBorderRadius":3,"subtitlesTop":0,"toolTipBorderSize":1,"toolTipPaddingTop":4,"subtitlesTextShadowColor":"#000000","playbackBarHeadShadowBlurRadius":3,"paddingLeft":0,"subtitlesPaddingBottom":5,"toolTipTextShadowColor":"#000000","subtitlesFontSize":"3vmin","paddingRight":0,"playbackBarLeft":0,"toolTipFontFamily":"Arial","transitionMode":"blending","playbackBarHeadHeight":15,"subtitlesBackgroundOpacity":0.2,"subtitlesBorderColor":"#FFFFFF","toolTipFontStyle":"normal","subtitlesPaddingLeft":5,"playbackBarHeadBackgroundColorRatios":[0,1],"subtitlesTextShadowHorizontalLength":1,"playbackBarHeadShadowColor":"#000000","subtitlesTextDecoration":"none","playbackBarHeadBorderSize":0,"displayTooltipInTouchScreens":true,"toolTipFontSize":"1.11vmin","subtitlesTextShadowBlurRadius":0,"progressBackgroundOpacity":1,"toolTipTextShadowOpacity":0,"playbackBarHeadShadow":true,"toolTipDisplayTime":600,"playbackBarHeadOpacity":1,"firstTransitionDuration":0,"progressBorderRadius":0,"subtitlesFontFamily":"Arial","subtitlesPaddingTop":5,"playbackBarOpacity":1,"width":"100%","borderRadius":0,"vrPointerSelectionColor":"#FF6600","progressBackgroundColorRatios":[0],"id":"MainViewer","subtitlesShadow":false,"playbackBarHeadBackgroundColor":["#111111","#666666"],"subtitlesOpacity":1,"playbackBarBottom":5,"subtitlesGap":0,"minHeight":50,"toolTipFontColor":"#606060","height":"100%","subtitlesBackgroundColor":"#000000","minWidth":100,"displayTooltipInSurfaceSelection":true,"progressLeft":0,"subtitlesHorizontalAlign":"center","toolTipShadowSpread":0,"playbackBarProgressBackgroundColorDirection":"vertical","progressRight":0,"progressOpacity":1,"subtitlesVerticalAlign":"bottom","toolTipPaddingBottom":4,"progressBarBackgroundColorDirection":"vertical","playbackBarHeadBackgroundColorDirection":"vertical","playbackBarHeight":10,"subtitlesBorderSize":0,"playbackBarHeadWidth":6,"vrPointerSelectionTime":2000,"playbackBarBackgroundColor":["#FFFFFF"],"playbackBarHeadShadowVerticalLength":0,"playbackBarProgressBorderSize":0,"doubleClickAction":"toggle_fullscreen","toolTipShadowVerticalLength":0,"transitionDuration":500,"progressBarBorderColor":"#000000","playbackBarBackgroundColorDirection":"vertical","subtitlesTextShadowOpacity":1,"data":{"name":"Main Viewer"},"toolTipBorderColor":"#767676","toolTipPaddingRight":6,"playbackBarRight":0,"subtitlesFontColor":"#FFFFFF","progressBarBackgroundColorRatios":[0],"playbackBarProgressBorderRadius":0,"toolTipHorizontalAlign":"center","toolTipOpacity":1},{"id":"panorama_DB80C668_CB85_E05B_41AA_59EA1C847556","class":"Panorama","frames":[{"thumbnailUrl":"media/panorama_DB80C668_CB85_E05B_41AA_59EA1C847556_t.jpg","class":"CubicPanoramaFrame","cube":{"levels":[{"width":6144,"class":"TiledImageResourceLevel","height":1024,"tags":"ondemand","colCount":12,"rowCount":2,"url":"media/panorama_DB80C668_CB85_E05B_41AA_59EA1C847556_0/{face}/0/{row}_{column}.jpg"},{"width":3072,"class":"TiledImageResourceLevel","height":512,"tags":["ondemand","preload"],"colCount":6,"rowCount":1,"url":"media/panorama_DB80C668_CB85_E05B_41AA_59EA1C847556_0/{face}/1/{row}_{column}.jpg"},{"width":6144,"class":"TiledImageResourceLevel","height":1024,"tags":"mobilevr","colCount":6,"rowCount":1,"url":"media/panorama_DB80C668_CB85_E05B_41AA_59EA1C847556_0/{face}/vr/0.jpg"}],"class":"ImageResource"}}],"label":trans('panorama_DB80C668_CB85_E05B_41AA_59EA1C847556.label'),"thumbnailUrl":"media/panorama_DB80C668_CB85_E05B_41AA_59EA1C847556_t.jpg","vfov":180,"pitch":0,"adjacentPanoramas":[{"class":"AdjacentPanorama","distance":100,"backwardYaw":-13.53,"yaw":-1.49,"select":"this.overlay_DAEE9821_CB82_AFCD_41B3_7D339726F483.get('areas').forEach(function(a){ a.trigger('click') })","panorama":"this.panorama_DB80F24C_CB85_E05B_41E6_5B4A07B846DF"},{"class":"AdjacentPanorama","select":"this.overlay_DAE9AC2A_CB82_67DF_41DF_9215E1E626F1.get('areas').forEach(function(a){ a.trigger('click') })","yaw":68.07,"distance":100,"panorama":"this.panorama_DCE5C8AC_CB85_E0DB_41DC_85EA061BF928"}],"hfov":360,"data":{"label":"Cuarto vista 2"},"hfovMax":130,"partial":false,"hfovMin":"150%","overlays":["this.overlay_DAEE9821_CB82_AFCD_41B3_7D339726F483","this.overlay_DAE9AC2A_CB82_67DF_41DF_9215E1E626F1"]},{"id":"panorama_DCE5C8AC_CB85_E0DB_41DC_85EA061BF928_camera","class":"PanoramaCamera","initialSequence":"this.sequence_DB802A4F_CB85_E055_41E4_6F06F8BB64A7","initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"automaticZoomSpeed":10},{"id":"panorama_DB80F24C_CB85_E05B_41E6_5B4A07B846DF","class":"Panorama","frames":[{"thumbnailUrl":"media/panorama_DB80F24C_CB85_E05B_41E6_5B4A07B846DF_t.jpg","class":"CubicPanoramaFrame","cube":{"levels":[{"width":6144,"class":"TiledImageResourceLevel","height":1024,"tags":"ondemand","colCount":12,"rowCount":2,"url":"media/panorama_DB80F24C_CB85_E05B_41E6_5B4A07B846DF_0/{face}/0/{row}_{column}.jpg"},{"width":3072,"class":"TiledImageResourceLevel","height":512,"tags":["ondemand","preload"],"colCount":6,"rowCount":1,"url":"media/panorama_DB80F24C_CB85_E05B_41E6_5B4A07B846DF_0/{face}/1/{row}_{column}.jpg"},{"width":6144,"class":"TiledImageResourceLevel","height":1024,"tags":"mobilevr","colCount":6,"rowCount":1,"url":"media/panorama_DB80F24C_CB85_E05B_41E6_5B4A07B846DF_0/{face}/vr/0.jpg"}],"class":"ImageResource"}}],"label":trans('panorama_DB80F24C_CB85_E05B_41E6_5B4A07B846DF.label'),"thumbnailUrl":"media/panorama_DB80F24C_CB85_E05B_41E6_5B4A07B846DF_t.jpg","vfov":180,"pitch":0,"adjacentPanoramas":[{"class":"AdjacentPanorama","distance":100,"backwardYaw":-5.44,"yaw":-88.85,"select":"this.overlay_DAE1FEE6_CBBD_A057_41D7_59A857373955.get('areas').forEach(function(a){ a.trigger('click') })","panorama":"this.panorama_DB820E86_CB85_E0D7_41E1_8D603CC45895"},{"class":"AdjacentPanorama","distance":100,"backwardYaw":-1.49,"yaw":-13.53,"select":"this.overlay_DAE5B81E_CB82_AFF7_41E6_CF619A5224F4.get('areas').forEach(function(a){ a.trigger('click') })","panorama":"this.panorama_DB80C668_CB85_E05B_41AA_59EA1C847556"}],"hfov":360,"data":{"label":"Cuarto vista 1"},"hfovMax":130,"partial":false,"hfovMin":"150%","overlays":["this.overlay_DAE1FEE6_CBBD_A057_41D7_59A857373955","this.overlay_DAE5B81E_CB82_AFF7_41E6_CF619A5224F4"]},{"id":"MainViewerPanoramaPlayer","displayPlaybackBar":true,"viewerArea":"this.MainViewer","class":"PanoramaPlayer","mouseControlMode":"drag_rotation","surfaceSelectionEnabled":false,"touchControlMode":"drag_rotation","gyroscopeVerticalDraggingEnabled":true,"zoomEnabled":true,"arrowKeysAction":"translate"},{"id":"panorama_DB80F24C_CB85_E05B_41E6_5B4A07B846DF_camera","class":"PanoramaCamera","initialSequence":"this.sequence_DB806A50_CB85_E04B_41E5_494D9D39AC16","initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"automaticZoomSpeed":10},{"id":"panorama_DB80C668_CB85_E05B_41AA_59EA1C847556_camera","class":"PanoramaCamera","initialSequence":"this.sequence_DB804A50_CB85_E04B_41E4_9B845D75462D","initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"automaticZoomSpeed":10},{"id":"sequence_DB800A4F_CB85_E055_41D6_96A96A813F23","restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","movements":[{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawSpeed":7.96},{"yawDelta":323,"class":"DistancePanoramaCameraMovement","easing":"linear","yawSpeed":7.96},{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawSpeed":7.96}]},{"id":"overlay_DAED29CE_CBBE_6057_41E5_95FF221DF29C","class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_DAF818EA_CBBE_E05F_41D8_93F542B4D579"],"enabledInCardboard":true,"maps":[],"items":[{"image":"this.AnimatedImageResource_DCB6431E_CB85_E1F7_41E5_092069DED19F","class":"HotspotPanoramaOverlayImage","pitch":2.44,"vfov":16.01,"yaw":-112.7,"horizontalAlign":"center","scaleMode":"fit_inside","hfov":18.78,"verticalAlign":"middle","data":{"label":"IrATest1"},"distance":100}],"rollOverDisplay":false,"data":{"hasPanoramaAction":true,"label":"IrATest1"},"useHandCursor":true},{"id":"overlay_DAE22EE3_CBBD_A04D_41C0_C9A9F6AF93FE","class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_DAE8FEE9_CBBD_A05D_41E2_AD300A8FC747"],"enabledInCardboard":true,"maps":[],"items":[{"image":"this.AnimatedImageResource_DCB6A31F_CB85_E1F5_41D3_9C5A9E597362","class":"HotspotPanoramaOverlayImage","pitch":6.82,"vfov":16.16,"yaw":-5.44,"horizontalAlign":"center","scaleMode":"fit_inside","hfov":18.42,"verticalAlign":"middle","data":{"label":"IrATest3"},"distance":100}],"rollOverDisplay":false,"data":{"hasPanoramaAction":true,"label":"IrATest3"},"useHandCursor":true},{"id":"overlay_DAE939CB_CBBE_605D_41E3_A67DC04F82E0","class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_DAF209D2_CBBE_604F_41D3_9802594C9D69"],"enabledInCardboard":true,"maps":[],"items":[{"image":"this.AnimatedImageResource_DCB6131E_CB85_E1F7_41DD_19C23F0699C9","class":"HotspotPanoramaOverlayImage","pitch":2.65,"vfov":14.49,"yaw":67.95,"horizontalAlign":"center","scaleMode":"fit_inside","hfov":15.25,"verticalAlign":"middle","data":{"label":"IrATest2"},"distance":100}],"rollOverDisplay":false,"data":{"hasPanoramaAction":true,"label":"IrATest2"},"useHandCursor":true},{"id":"overlay_DAEE9821_CB82_AFCD_41B3_7D339726F483","class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_DACE21F5_CB83_A035_41E3_60FF69DE7129"],"enabledInCardboard":true,"maps":[],"items":[{"image":"this.AnimatedImageResource_DCB71320_CB85_E1CB_41D7_C248AD1119FF","class":"HotspotPanoramaOverlayImage","pitch":8.48,"vfov":15.1,"yaw":-1.49,"horizontalAlign":"center","scaleMode":"fit_inside","hfov":16.35,"verticalAlign":"middle","data":{"label":"IrATest3"},"distance":100}],"rollOverDisplay":false,"data":{"hasPanoramaAction":true,"label":"IrATest3"},"useHandCursor":true},{"id":"overlay_DAE9AC2A_CB82_67DF_41DF_9215E1E626F1","class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_DAF68C2E_CB82_67D7_41D3_C7CC4F63DB10"],"enabledInCardboard":true,"maps":[],"items":[{"image":"this.AnimatedImageResource_DCB76320_CB85_E1CB_41A2_DF398F2E931A","class":"HotspotPanoramaOverlayImage","pitch":5.81,"vfov":16.19,"yaw":68.07,"horizontalAlign":"center","scaleMode":"fit_inside","hfov":17.95,"verticalAlign":"middle","data":{"label":"IrATest1"},"distance":100}],"rollOverDisplay":false,"data":{"hasPanoramaAction":true,"label":"IrATest1"},"useHandCursor":true},{"id":"sequence_DB802A4F_CB85_E055_41E4_6F06F8BB64A7","restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","movements":[{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawSpeed":7.96},{"yawDelta":323,"class":"DistancePanoramaCameraMovement","easing":"linear","yawSpeed":7.96},{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawSpeed":7.96}]},{"id":"overlay_DAE1FEE6_CBBD_A057_41D7_59A857373955","class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_DA6F0C36_CBBD_A037_41DF_12CD8D268A29"],"enabledInCardboard":true,"maps":[],"items":[{"image":"this.AnimatedImageResource_DCB6E31F_CB85_E1F5_41E1_4DAB8FC0CEBD","class":"HotspotPanoramaOverlayImage","pitch":6.04,"vfov":15.18,"yaw":-88.85,"horizontalAlign":"center","scaleMode":"fit_inside","hfov":21.71,"verticalAlign":"middle","data":{"label":"IrATest2"},"distance":100}],"rollOverDisplay":false,"data":{"hasPanoramaAction":true,"label":"IrATest2"},"useHandCursor":true},{"id":"overlay_DAE5B81E_CB82_AFF7_41E6_CF619A5224F4","class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_DAF15825_CB82_AFD5_41D2_35D198329E23"],"enabledInCardboard":true,"maps":[],"items":[{"image":"this.AnimatedImageResource_DCB6C31F_CB85_E1F5_41E6_A298FF2DA301","class":"HotspotPanoramaOverlayImage","pitch":2.02,"vfov":13.24,"yaw":-13.53,"horizontalAlign":"center","scaleMode":"fit_inside","hfov":19.04,"verticalAlign":"middle","data":{"label":"IrATest4"},"distance":100}],"rollOverDisplay":false,"data":{"hasPanoramaAction":true,"label":"IrATest4"},"useHandCursor":true},{"id":"sequence_DB806A50_CB85_E04B_41E5_494D9D39AC16","restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","movements":[{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawSpeed":7.96},{"yawDelta":323,"class":"DistancePanoramaCameraMovement","easing":"linear","yawSpeed":7.96},{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawSpeed":7.96}]},{"id":"sequence_DB804A50_CB85_E04B_41E4_9B845D75462D","restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","movements":[{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawSpeed":7.96},{"yawDelta":323,"class":"DistancePanoramaCameraMovement","easing":"linear","yawSpeed":7.96},{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawSpeed":7.96}]},{"id":"HotspotPanoramaOverlayArea_DAF818EA_CBBE_E05F_41D8_93F542B4D579","click":"this.mainPlayList.set('selectedIndex', 0)","class":"HotspotPanoramaOverlayArea","mapColor":"any"},{"id":"AnimatedImageResource_DCB6431E_CB85_E1F7_41E5_092069DED19F","frameCount":24,"class":"AnimatedImageResource","levels":[{"width":400,"class":"ImageResourceLevel","height":600,"url":"media/res_DD2B97AA_CB86_60DF_41BD_AC39724A43E2_0.png"}],"colCount":4,"rowCount":6,"frameDuration":41},{"id":"HotspotPanoramaOverlayArea_DAE8FEE9_CBBD_A05D_41E2_AD300A8FC747","click":"this.mainPlayList.set('selectedIndex', 2)","class":"HotspotPanoramaOverlayArea","mapColor":"any"},{"id":"AnimatedImageResource_DCB6A31F_CB85_E1F5_41D3_9C5A9E597362","frameCount":24,"class":"AnimatedImageResource","levels":[{"width":400,"class":"ImageResourceLevel","height":600,"url":"media/res_DD2B97AA_CB86_60DF_41BD_AC39724A43E2_0.png"}],"colCount":4,"rowCount":6,"frameDuration":41},{"id":"HotspotPanoramaOverlayArea_DAF209D2_CBBE_604F_41D3_9802594C9D69","click":"this.mainPlayList.set('selectedIndex', 1)","class":"HotspotPanoramaOverlayArea","mapColor":"any"},{"id":"AnimatedImageResource_DCB6131E_CB85_E1F7_41DD_19C23F0699C9","frameCount":24,"class":"AnimatedImageResource","levels":[{"width":400,"class":"ImageResourceLevel","height":600,"url":"media/res_DD2B97AA_CB86_60DF_41BD_AC39724A43E2_0.png"}],"colCount":4,"rowCount":6,"frameDuration":41},{"id":"HotspotPanoramaOverlayArea_DACE21F5_CB83_A035_41E3_60FF69DE7129","click":"this.mainPlayList.set('selectedIndex', 2)","class":"HotspotPanoramaOverlayArea","mapColor":"any"},{"id":"AnimatedImageResource_DCB71320_CB85_E1CB_41D7_C248AD1119FF","frameCount":24,"class":"AnimatedImageResource","levels":[{"width":400,"class":"ImageResourceLevel","height":600,"url":"media/res_DD2B97AA_CB86_60DF_41BD_AC39724A43E2_0.png"}],"colCount":4,"rowCount":6,"frameDuration":41},{"id":"HotspotPanoramaOverlayArea_DAF68C2E_CB82_67D7_41D3_C7CC4F63DB10","click":"this.mainPlayList.set('selectedIndex', 0)","class":"HotspotPanoramaOverlayArea","mapColor":"any"},{"id":"AnimatedImageResource_DCB76320_CB85_E1CB_41A2_DF398F2E931A","frameCount":24,"class":"AnimatedImageResource","levels":[{"width":400,"class":"ImageResourceLevel","height":600,"url":"media/res_DD2B97AA_CB86_60DF_41BD_AC39724A43E2_0.png"}],"colCount":4,"rowCount":6,"frameDuration":41},{"id":"HotspotPanoramaOverlayArea_DA6F0C36_CBBD_A037_41DF_12CD8D268A29","click":"this.mainPlayList.set('selectedIndex', 1)","class":"HotspotPanoramaOverlayArea","mapColor":"any"},{"id":"AnimatedImageResource_DCB6E31F_CB85_E1F5_41E1_4DAB8FC0CEBD","frameCount":24,"class":"AnimatedImageResource","levels":[{"width":400,"class":"ImageResourceLevel","height":600,"url":"media/res_DD2B97AA_CB86_60DF_41BD_AC39724A43E2_0.png"}],"colCount":4,"rowCount":6,"frameDuration":41},{"id":"HotspotPanoramaOverlayArea_DAF15825_CB82_AFD5_41D2_35D198329E23","click":"this.mainPlayList.set('selectedIndex', 3)","class":"HotspotPanoramaOverlayArea","mapColor":"any"},{"id":"AnimatedImageResource_DCB6C31F_CB85_E1F5_41E6_A298FF2DA301","frameCount":24,"class":"AnimatedImageResource","levels":[{"width":400,"class":"ImageResourceLevel","height":600,"url":"media/res_DD2B97AA_CB86_60DF_41BD_AC39724A43E2_0.png"}],"colCount":4,"rowCount":6,"frameDuration":41}],"scripts":{"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"shareSocial":TDV.Tour.Script.shareSocial,"setValue":TDV.Tour.Script.setValue,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"existsKey":TDV.Tour.Script.existsKey,"initQuiz":TDV.Tour.Script.initQuiz,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"unregisterKey":TDV.Tour.Script.unregisterKey,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"initGA":TDV.Tour.Script.initGA,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"init":TDV.Tour.Script.init,"setLocale":TDV.Tour.Script.setLocale,"getComponentByName":TDV.Tour.Script.getComponentByName,"cloneCamera":TDV.Tour.Script.cloneCamera,"registerKey":TDV.Tour.Script.registerKey,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"getMainViewer":TDV.Tour.Script.getMainViewer,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"getOverlays":TDV.Tour.Script.getOverlays,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"getKey":TDV.Tour.Script.getKey,"quizShowScore":TDV.Tour.Script.quizShowScore,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"quizStart":TDV.Tour.Script.quizStart,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"historyGoForward":TDV.Tour.Script.historyGoForward,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"getPixels":TDV.Tour.Script.getPixels,"openLink":TDV.Tour.Script.openLink,"textToSpeech":TDV.Tour.Script.textToSpeech,"quizFinish":TDV.Tour.Script.quizFinish,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"historyGoBack":TDV.Tour.Script.historyGoBack,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getMediaByName":TDV.Tour.Script.getMediaByName,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"isPanorama":TDV.Tour.Script.isPanorama,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"setMapLocation":TDV.Tour.Script.setMapLocation,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"showWindow":TDV.Tour.Script.showWindow,"playAudioList":TDV.Tour.Script.playAudioList,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"showPopupImage":TDV.Tour.Script.showPopupImage,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"mixObject":TDV.Tour.Script.mixObject,"translate":TDV.Tour.Script.translate,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"clone":TDV.Tour.Script.clone,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"resumePlayers":TDV.Tour.Script.resumePlayers,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem},"minWidth":20,"children":["this.MainViewer"],"paddingBottom":0,"shadow":false,"overflow":"hidden","scrollBarOpacity":0.5,"scrollBarMargin":2,"verticalAlign":"top","toolTipHorizontalAlign":"center","defaultVRPointer":"laser","scrollBarWidth":10};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2020.5.26.js.map
//Generated with v2020.5.26, Mon Feb 22 2021