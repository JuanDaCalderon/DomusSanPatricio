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
    var d = {"definitions": [{"id":"panorama_FD532FEB_EFFA_6B3E_4196_2A6748B2C798","frames":[{"thumbnailUrl":"media/panorama_FD532FEB_EFFA_6B3E_4196_2A6748B2C798_t.jpg","class":"CubicPanoramaFrame","cube":{"levels":[{"width":12288,"height":2048,"colCount":24,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":4,"url":"media/panorama_FD532FEB_EFFA_6B3E_4196_2A6748B2C798_0/{face}/0/{row}_{column}.jpg"},{"width":6144,"height":1024,"colCount":12,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":2,"url":"media/panorama_FD532FEB_EFFA_6B3E_4196_2A6748B2C798_0/{face}/1/{row}_{column}.jpg"},{"width":3072,"height":512,"colCount":6,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_FD532FEB_EFFA_6B3E_4196_2A6748B2C798_0/{face}/2/{row}_{column}.jpg"},{"width":9216,"height":1536,"colCount":6,"tags":"mobilevr","class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_FD532FEB_EFFA_6B3E_4196_2A6748B2C798_0/{face}/vr/0.jpg"}],"class":"ImageResource"}}],"hfovMin":"150%","label":trans('panorama_FD532FEB_EFFA_6B3E_4196_2A6748B2C798.label'),"class":"Panorama","overlays":["this.overlay_FCDA4A12_EFC6_54EE_41E6_853E23F02DD8","this.overlay_FC38EA2E_EFC9_D536_41E5_3B7EA382E252"],"hfov":360,"hfovMax":130,"pitch":0,"thumbnailUrl":"media/panorama_FD532FEB_EFFA_6B3E_4196_2A6748B2C798_t.jpg","data":{"label":"Rooms Hall"},"partial":false,"vfov":180,"adjacentPanoramas":[{"backwardYaw":-89.31,"distance":100,"class":"AdjacentPanorama","yaw":94.92,"panorama":"this.panorama_FD535AD7_EFFA_5516_41EC_103DDCD65537","select":"this.overlay_FCDA4A12_EFC6_54EE_41E6_853E23F02DD8.get('areas').forEach(function(a){ a.trigger('click') })"},{"backwardYaw":-30.23,"distance":9.13,"class":"AdjacentPanorama","yaw":-155.24,"panorama":"this.panorama_FB0B602F_EFFA_5536_41DE_273E0A5E5183","select":"this.overlay_FC38EA2E_EFC9_D536_41E5_3B7EA382E252.get('areas').forEach(function(a){ a.trigger('click') })"}]},{"id":"panorama_FB0B602F_EFFA_5536_41DE_273E0A5E5183","frames":[{"thumbnailUrl":"media/panorama_FB0B602F_EFFA_5536_41DE_273E0A5E5183_t.jpg","class":"CubicPanoramaFrame","cube":{"levels":[{"width":12288,"height":2048,"colCount":24,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":4,"url":"media/panorama_FB0B602F_EFFA_5536_41DE_273E0A5E5183_0/{face}/0/{row}_{column}.jpg"},{"width":6144,"height":1024,"colCount":12,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":2,"url":"media/panorama_FB0B602F_EFFA_5536_41DE_273E0A5E5183_0/{face}/1/{row}_{column}.jpg"},{"width":3072,"height":512,"colCount":6,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_FB0B602F_EFFA_5536_41DE_273E0A5E5183_0/{face}/2/{row}_{column}.jpg"},{"width":9216,"height":1536,"colCount":6,"tags":"mobilevr","class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_FB0B602F_EFFA_5536_41DE_273E0A5E5183_0/{face}/vr/0.jpg"}],"class":"ImageResource"}}],"hfovMin":"150%","label":trans('panorama_FB0B602F_EFFA_5536_41DE_273E0A5E5183.label'),"class":"Panorama","overlays":["this.overlay_FC3DEA2F_EFC9_D535_41EA_DCFCFDA68A9C"],"hfov":360,"hfovMax":130,"pitch":0,"thumbnailUrl":"media/panorama_FB0B602F_EFFA_5536_41DE_273E0A5E5183_t.jpg","data":{"label":"Bedroom"},"partial":false,"vfov":180,"adjacentPanoramas":[{"backwardYaw":-155.24,"distance":100,"class":"AdjacentPanorama","yaw":-30.23,"panorama":"this.panorama_FD532FEB_EFFA_6B3E_4196_2A6748B2C798","select":"this.overlay_FC3DEA2F_EFC9_D535_41EA_DCFCFDA68A9C.get('areas').forEach(function(a){ a.trigger('click') })"}]},{"id":"panorama_FD5465C3_EFFA_5F6E_4186_E9C902F6E0F2_camera","initialSequence":"this.sequence_FD52E502_EFFA_7CEE_41EC_63D63C10E1A4","initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"automaticZoomSpeed":10,"class":"PanoramaCamera"},{"id":"panorama_FD535AD7_EFFA_5516_41EC_103DDCD65537_camera","initialSequence":"this.sequence_FD528502_EFFA_7CEE_41CE_5DBF3572A8FA","initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"automaticZoomSpeed":10,"class":"PanoramaCamera"},{"subtitlesTextShadowColor":"#000000","toolTipShadowVerticalLength":0,"toolTipBackgroundColor":"#F6F6F6","data":{"name":"Main Viewer"},"toolTipShadowHorizontalLength":0,"vrPointerSelectionTime":2000,"toolTipFontColor":"#606060","displayTooltipInSurfaceSelection":true,"toolTipShadowColor":"#333333","playbackBarBackgroundColorDirection":"vertical","playbackBarProgressBorderSize":0,"subtitlesBorderSize":0,"playbackBarRight":0,"playbackBarProgressBorderRadius":0,"doubleClickAction":"toggle_fullscreen","subtitlesBackgroundColor":"#000000","borderSize":0,"vrPointerColor":"#FFFFFF","playbackBarProgressBackgroundColor":["#3399FF"],"toolTipPaddingBottom":4,"progressHeight":10,"playbackBarHeadShadowOpacity":0.7,"toolTipShadowBlurRadius":3,"progressBorderSize":0,"progressBarBorderRadius":0,"playbackBarProgressBackgroundColorRatios":[0],"toolTipFontStyle":"normal","subtitlesShadow":false,"toolTipOpacity":1,"subtitlesTextShadowVerticalLength":1,"paddingTop":0,"playbackBarBorderRadius":0,"playbackBarBorderColor":"#FFFFFF","progressBackgroundColorRatios":[0],"playbackBarProgressBorderColor":"#000000","paddingBottom":0,"shadow":false,"toolTipPaddingLeft":6,"subtitlesBorderColor":"#FFFFFF","progressBarBorderSize":0,"borderRadius":0,"toolTipShadowSpread":0,"playbackBarHeadBorderRadius":0,"playbackBarHeadShadowVerticalLength":0,"progressRight":0,"toolTipFontFamily":"Arial","playbackBarProgressOpacity":1,"transitionMode":"blending","subtitlesFontFamily":"Arial","playbackBarHeadBorderColor":"#000000","progressBarBackgroundColorDirection":"vertical","subtitlesPaddingLeft":5,"toolTipFontSize":"1.11vmin","progressOpacity":1,"progressBarBorderColor":"#000000","progressBackgroundColorDirection":"vertical","playbackBarBorderSize":0,"progressBarBackgroundColorRatios":[0],"subtitlesBottom":50,"paddingLeft":0,"subtitlesTextShadowBlurRadius":0,"subtitlesTextDecoration":"none","toolTipShadowOpacity":1,"displayTooltipInTouchScreens":true,"subtitlesTextShadowHorizontalLength":1,"paddingRight":0,"toolTipDisplayTime":600,"progressBorderColor":"#000000","subtitlesFontWeight":"normal","playbackBarHeadShadowBlurRadius":3,"progressBorderRadius":0,"subtitlesPaddingBottom":5,"subtitlesOpacity":1,"playbackBarBackgroundOpacity":1,"progressLeft":0,"progressBarBackgroundColor":["#3399FF"],"playbackBarHeadHeight":15,"playbackBarLeft":0,"vrPointerSelectionColor":"#FF6600","playbackBarHeadShadowColor":"#000000","subtitlesTop":0,"subtitlesGap":0,"playbackBarHeadBorderSize":0,"firstTransitionDuration":0,"playbackBarHeadBackgroundColorRatios":[0,1],"toolTipBorderRadius":3,"subtitlesFontColor":"#FFFFFF","width":"100%","playbackBarHeadOpacity":1,"subtitlesHorizontalAlign":"center","playbackBarHeadShadow":true,"transitionDuration":500,"id":"MainViewer","surfaceReticleOpacity":0.6,"subtitlesPaddingTop":5,"toolTipBorderSize":1,"surfaceReticleColor":"#FFFFFF","toolTipFontWeight":"normal","toolTipTextShadowColor":"#000000","minHeight":50,"toolTipHorizontalAlign":"center","playbackBarHeadBackgroundColor":["#111111","#666666"],"minWidth":100,"playbackBarOpacity":1,"class":"ViewerArea","progressBackgroundColor":["#FFFFFF"],"subtitlesVerticalAlign":"bottom","toolTipBorderColor":"#767676","toolTipPaddingRight":6,"playbackBarBottom":5,"toolTipTextShadowBlurRadius":3,"playbackBarProgressBackgroundColorDirection":"vertical","progressBarOpacity":1,"subtitlesPaddingRight":5,"playbackBarHeadShadowHorizontalLength":0,"propagateClick":false,"height":"100%","toolTipTextShadowOpacity":0,"surfaceReticleSelectionColor":"#FFFFFF","progressBottom":0,"toolTipPaddingTop":4,"playbackBarHeight":10,"progressBackgroundOpacity":1,"playbackBarBackgroundColor":["#FFFFFF"],"playbackBarHeadBackgroundColorDirection":"vertical","subtitlesTextShadowOpacity":1,"subtitlesBackgroundOpacity":0.2,"playbackBarHeadWidth":6,"surfaceReticleSelectionOpacity":1,"subtitlesFontSize":"3vmin"},{"id":"panorama_FD5465C3_EFFA_5F6E_4186_E9C902F6E0F2","frames":[{"thumbnailUrl":"media/panorama_FD5465C3_EFFA_5F6E_4186_E9C902F6E0F2_t.jpg","class":"CubicPanoramaFrame","cube":{"levels":[{"width":12288,"height":2048,"colCount":24,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":4,"url":"media/panorama_FD5465C3_EFFA_5F6E_4186_E9C902F6E0F2_0/{face}/0/{row}_{column}.jpg"},{"width":6144,"height":1024,"colCount":12,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":2,"url":"media/panorama_FD5465C3_EFFA_5F6E_4186_E9C902F6E0F2_0/{face}/1/{row}_{column}.jpg"},{"width":3072,"height":512,"colCount":6,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_FD5465C3_EFFA_5F6E_4186_E9C902F6E0F2_0/{face}/2/{row}_{column}.jpg"},{"width":9216,"height":1536,"colCount":6,"tags":"mobilevr","class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_FD5465C3_EFFA_5F6E_4186_E9C902F6E0F2_0/{face}/vr/0.jpg"}],"class":"ImageResource"}}],"hfovMin":"150%","label":trans('panorama_FD5465C3_EFFA_5F6E_4186_E9C902F6E0F2.label'),"class":"Panorama","overlays":["this.overlay_FCC93352_EFC7_FB6E_41EC_FCAF3AF3311B"],"hfov":360,"hfovMax":130,"pitch":0,"thumbnailUrl":"media/panorama_FD5465C3_EFFA_5F6E_4186_E9C902F6E0F2_t.jpg","data":{"label":"Entrance"},"partial":false,"vfov":180,"adjacentPanoramas":[{"backwardYaw":173.63,"distance":100,"class":"AdjacentPanorama","yaw":-7.46,"panorama":"this.panorama_FD535AD7_EFFA_5516_41EC_103DDCD65537","select":"this.overlay_FCC93352_EFC7_FB6E_41EC_FCAF3AF3311B.get('areas').forEach(function(a){ a.trigger('click') })"}]},{"id":"panorama_FD532FEB_EFFA_6B3E_4196_2A6748B2C798_camera","initialSequence":"this.sequence_FD52A502_EFFA_7CEE_41D5_D37D899C50F6","initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"automaticZoomSpeed":10,"class":"PanoramaCamera"},{"id":"MainViewerPanoramaPlayer","surfaceSelectionEnabled":false,"arrowKeysAction":"translate","touchControlMode":"drag_rotation","mouseControlMode":"drag_rotation","gyroscopeVerticalDraggingEnabled":true,"class":"PanoramaPlayer","viewerArea":"this.MainViewer","displayPlaybackBar":true,"zoomEnabled":true},{"id":"panorama_FB0B602F_EFFA_5536_41DE_273E0A5E5183_camera","initialSequence":"this.sequence_FD52C501_EFFA_7CEA_41CE_A24CA0BC7E18","initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"automaticZoomSpeed":10,"class":"PanoramaCamera"},{"id":"mainPlayList","class":"PlayList","items":[{"camera":"this.panorama_FD5465C3_EFFA_5F6E_4186_E9C902F6E0F2_camera","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","class":"PanoramaPlayListItem","media":"this.panorama_FD5465C3_EFFA_5F6E_4186_E9C902F6E0F2"},{"camera":"this.panorama_FD535AD7_EFFA_5516_41EC_103DDCD65537_camera","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)","class":"PanoramaPlayListItem","media":"this.panorama_FD535AD7_EFFA_5516_41EC_103DDCD65537"},{"camera":"this.panorama_FD532FEB_EFFA_6B3E_4196_2A6748B2C798_camera","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 3)","class":"PanoramaPlayListItem","media":"this.panorama_FD532FEB_EFFA_6B3E_4196_2A6748B2C798"},{"camera":"this.panorama_FB0B602F_EFFA_5536_41DE_273E0A5E5183_camera","end":"this.trigger('tourEnded')","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 3, 0)","class":"PanoramaPlayListItem","media":"this.panorama_FB0B602F_EFFA_5536_41DE_273E0A5E5183"}]},{"id":"panorama_FD535AD7_EFFA_5516_41EC_103DDCD65537","frames":[{"thumbnailUrl":"media/panorama_FD535AD7_EFFA_5516_41EC_103DDCD65537_t.jpg","class":"CubicPanoramaFrame","cube":{"levels":[{"width":12288,"height":2048,"colCount":24,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":4,"url":"media/panorama_FD535AD7_EFFA_5516_41EC_103DDCD65537_0/{face}/0/{row}_{column}.jpg"},{"width":6144,"height":1024,"colCount":12,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":2,"url":"media/panorama_FD535AD7_EFFA_5516_41EC_103DDCD65537_0/{face}/1/{row}_{column}.jpg"},{"width":3072,"height":512,"colCount":6,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_FD535AD7_EFFA_5516_41EC_103DDCD65537_0/{face}/2/{row}_{column}.jpg"},{"width":9216,"height":1536,"colCount":6,"tags":"mobilevr","class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_FD535AD7_EFFA_5516_41EC_103DDCD65537_0/{face}/vr/0.jpg"}],"class":"ImageResource"}}],"hfovMin":"150%","label":trans('panorama_FD535AD7_EFFA_5516_41EC_103DDCD65537.label'),"class":"Panorama","overlays":["this.overlay_FCD43354_EFC7_FB6A_41EC_405E1501D2C6","this.overlay_FCDE5A10_EFC6_54EA_41E4_CD5AB01AD6F8"],"hfov":360,"hfovMax":130,"pitch":0,"thumbnailUrl":"media/panorama_FD535AD7_EFFA_5516_41EC_103DDCD65537_t.jpg","data":{"label":"Living"},"partial":false,"vfov":180,"adjacentPanoramas":[{"backwardYaw":-7.46,"distance":66.75,"class":"AdjacentPanorama","yaw":173.63,"panorama":"this.panorama_FD5465C3_EFFA_5F6E_4186_E9C902F6E0F2","select":"this.overlay_FCD43354_EFC7_FB6A_41EC_405E1501D2C6.get('areas').forEach(function(a){ a.trigger('click') })"},{"backwardYaw":94.92,"distance":14.91,"class":"AdjacentPanorama","yaw":-89.31,"panorama":"this.panorama_FD532FEB_EFFA_6B3E_4196_2A6748B2C798","select":"this.overlay_FCDE5A10_EFC6_54EA_41E4_CD5AB01AD6F8.get('areas').forEach(function(a){ a.trigger('click') })"}]},{"id":"overlay_FCDA4A12_EFC6_54EE_41E6_853E23F02DD8","items":[{"image":"this.AnimatedImageResource_FC4174C3_EFCE_3D6E_41E1_1FBBBFE0B9A2","hfov":18,"class":"HotspotPanoramaOverlayImage","pitch":-0.35,"yaw":94.92,"scaleMode":"fit_inside","horizontalAlign":"center","verticalAlign":"middle","data":{"label":"IrALiving"},"distance":100,"vfov":18}],"enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_FBF74DB7_EFCA_6F16_41B6_288DDDDBBF43"],"maps":[],"class":"HotspotPanoramaOverlay","data":{"label":"IrALiving","hasPanoramaAction":true},"useHandCursor":true,"rollOverDisplay":false},{"id":"overlay_FC38EA2E_EFC9_D536_41E5_3B7EA382E252","items":[{"image":"this.AnimatedImageResource_FC4154C3_EFCE_3D6E_41D0_69BBC0BAAA3E","hfov":17.7,"class":"HotspotPanoramaOverlayImage","pitch":-10.55,"yaw":-155.24,"scaleMode":"fit_inside","horizontalAlign":"center","verticalAlign":"middle","data":{"label":"IrABedroom"},"distance":100,"vfov":17.7}],"enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_FC349A32_EFC9_D52E_41D9_AC4892484D2F"],"maps":[],"class":"HotspotPanoramaOverlay","data":{"label":"IrABedroom","hasPanoramaAction":true},"useHandCursor":true,"rollOverDisplay":false},{"id":"overlay_FC3DEA2F_EFC9_D535_41EA_DCFCFDA68A9C","items":[{"image":"this.AnimatedImageResource_FC4124C3_EFCE_3D6E_41E3_6587E1019335","hfov":18,"class":"HotspotPanoramaOverlayImage","pitch":-0.35,"yaw":-30.23,"scaleMode":"fit_inside","horizontalAlign":"center","verticalAlign":"middle","data":{"label":"IrARoomsHall"},"distance":100,"vfov":18}],"enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_FBF7BDB7_EFCA_6F16_41EC_9F5E7304D996"],"maps":[],"class":"HotspotPanoramaOverlay","data":{"label":"IrARoomsHall","hasPanoramaAction":true},"useHandCursor":true,"rollOverDisplay":false},{"id":"sequence_FD52E502_EFFA_7CEE_41EC_63D63C10E1A4","restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","movements":[{"yawDelta":18.5,"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":323,"easing":"linear","class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":18.5,"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawSpeed":7.96}]},{"id":"sequence_FD528502_EFFA_7CEE_41CE_5DBF3572A8FA","restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","movements":[{"yawDelta":18.5,"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":323,"easing":"linear","class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":18.5,"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawSpeed":7.96}]},{"id":"overlay_FCC93352_EFC7_FB6E_41EC_FCAF3AF3311B","items":[{"image":"this.AnimatedImageResource_FC4214C2_EFCE_3D6E_41BB_6D0AF147DB39","hfov":18,"class":"HotspotPanoramaOverlayImage","pitch":0.32,"yaw":-7.46,"scaleMode":"fit_inside","horizontalAlign":"center","verticalAlign":"middle","data":{"label":"IrALiving"},"distance":100,"vfov":18}],"enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_FCDE5359_EFC7_FB1A_41E1_7CD70198C4BF"],"maps":[],"class":"HotspotPanoramaOverlay","data":{"label":"IrALiving","hasPanoramaAction":true},"useHandCursor":true,"rollOverDisplay":false},{"id":"sequence_FD52A502_EFFA_7CEE_41D5_D37D899C50F6","restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","movements":[{"yawDelta":18.5,"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":323,"easing":"linear","class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":18.5,"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawSpeed":7.96}]},{"id":"sequence_FD52C501_EFFA_7CEA_41CE_A24CA0BC7E18","restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","movements":[{"yawDelta":18.5,"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":323,"easing":"linear","class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":18.5,"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawSpeed":7.96}]},{"id":"overlay_FCD43354_EFC7_FB6A_41EC_405E1501D2C6","items":[{"image":"this.AnimatedImageResource_FC41D4C2_EFCE_3D6E_41DD_0B5F7F381034","hfov":17.99,"class":"HotspotPanoramaOverlayImage","pitch":-1.46,"yaw":173.63,"scaleMode":"fit_inside","horizontalAlign":"center","verticalAlign":"middle","data":{"label":"IrAEntrance"},"distance":100,"vfov":17.99}],"enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_FC767EB8_EFC6_ED1A_41E3_D14392B06628"],"maps":[],"class":"HotspotPanoramaOverlay","data":{"label":"IrAEntrance","hasPanoramaAction":true},"useHandCursor":true,"rollOverDisplay":false},{"id":"overlay_FCDE5A10_EFC6_54EA_41E4_CD5AB01AD6F8","items":[{"image":"this.AnimatedImageResource_FC41B4C2_EFCE_3D6E_41DD_C47EBED8CFB4","hfov":17.88,"class":"HotspotPanoramaOverlayImage","pitch":-6.51,"yaw":-89.31,"scaleMode":"fit_inside","horizontalAlign":"center","verticalAlign":"middle","data":{"label":"IrARoomsHall"},"distance":100,"vfov":17.88}],"enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_FC236A15_EFC6_54EA_41E2_FBCFE2916CA9"],"maps":[],"class":"HotspotPanoramaOverlay","data":{"label":"IrARoomsHall","hasPanoramaAction":true},"useHandCursor":true,"rollOverDisplay":false},{"id":"AnimatedImageResource_FC4174C3_EFCE_3D6E_41E1_1FBBBFE0B9A2","frameCount":24,"frameDuration":41,"levels":[{"width":1000,"class":"ImageResourceLevel","height":1500,"url":"media/res_FAADF88C_EFCA_55FA_41EB_1CCBDC444651_0.png"}],"class":"AnimatedImageResource","rowCount":6,"colCount":4},{"id":"HotspotPanoramaOverlayArea_FBF74DB7_EFCA_6F16_41B6_288DDDDBBF43","click":"this.mainPlayList.set('selectedIndex', 1)","class":"HotspotPanoramaOverlayArea","mapColor":"any"},{"id":"AnimatedImageResource_FC4154C3_EFCE_3D6E_41D0_69BBC0BAAA3E","frameCount":24,"frameDuration":41,"levels":[{"width":1000,"class":"ImageResourceLevel","height":1500,"url":"media/res_FAADF88C_EFCA_55FA_41EB_1CCBDC444651_0.png"}],"class":"AnimatedImageResource","rowCount":6,"colCount":4},{"id":"HotspotPanoramaOverlayArea_FC349A32_EFC9_D52E_41D9_AC4892484D2F","click":"this.mainPlayList.set('selectedIndex', 3)","class":"HotspotPanoramaOverlayArea","mapColor":"any"},{"id":"AnimatedImageResource_FC4124C3_EFCE_3D6E_41E3_6587E1019335","frameCount":24,"frameDuration":41,"levels":[{"width":1000,"class":"ImageResourceLevel","height":1500,"url":"media/res_FAADF88C_EFCA_55FA_41EB_1CCBDC444651_0.png"}],"class":"AnimatedImageResource","rowCount":6,"colCount":4},{"id":"HotspotPanoramaOverlayArea_FBF7BDB7_EFCA_6F16_41EC_9F5E7304D996","click":"this.mainPlayList.set('selectedIndex', 2)","class":"HotspotPanoramaOverlayArea","mapColor":"any"},{"id":"AnimatedImageResource_FC4214C2_EFCE_3D6E_41BB_6D0AF147DB39","frameCount":24,"frameDuration":41,"levels":[{"width":1000,"class":"ImageResourceLevel","height":1500,"url":"media/res_FAADF88C_EFCA_55FA_41EB_1CCBDC444651_0.png"}],"class":"AnimatedImageResource","rowCount":6,"colCount":4},{"id":"HotspotPanoramaOverlayArea_FCDE5359_EFC7_FB1A_41E1_7CD70198C4BF","click":"this.mainPlayList.set('selectedIndex', 1)","class":"HotspotPanoramaOverlayArea","mapColor":"any"},{"id":"AnimatedImageResource_FC41D4C2_EFCE_3D6E_41DD_0B5F7F381034","frameCount":24,"frameDuration":41,"levels":[{"width":1000,"class":"ImageResourceLevel","height":1500,"url":"media/res_FAADF88C_EFCA_55FA_41EB_1CCBDC444651_0.png"}],"class":"AnimatedImageResource","rowCount":6,"colCount":4},{"id":"HotspotPanoramaOverlayArea_FC767EB8_EFC6_ED1A_41E3_D14392B06628","click":"this.mainPlayList.set('selectedIndex', 0)","class":"HotspotPanoramaOverlayArea","mapColor":"any"},{"id":"AnimatedImageResource_FC41B4C2_EFCE_3D6E_41DD_C47EBED8CFB4","frameCount":24,"frameDuration":41,"levels":[{"width":1000,"class":"ImageResourceLevel","height":1500,"url":"media/res_FAADF88C_EFCA_55FA_41EB_1CCBDC444651_0.png"}],"class":"AnimatedImageResource","rowCount":6,"colCount":4},{"id":"HotspotPanoramaOverlayArea_FC236A15_EFC6_54EA_41E2_FBCFE2916CA9","click":"this.mainPlayList.set('selectedIndex', 2)","class":"HotspotPanoramaOverlayArea","mapColor":"any"}],"scrollBarWidth":10,"desktopMipmappingEnabled":false,"paddingRight":0,"scripts":{"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"getOverlays":TDV.Tour.Script.getOverlays,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"setValue":TDV.Tour.Script.setValue,"resumePlayers":TDV.Tour.Script.resumePlayers,"quizShowScore":TDV.Tour.Script.quizShowScore,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"registerKey":TDV.Tour.Script.registerKey,"getMediaByName":TDV.Tour.Script.getMediaByName,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"isPanorama":TDV.Tour.Script.isPanorama,"quizStart":TDV.Tour.Script.quizStart,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"getPixels":TDV.Tour.Script.getPixels,"quizFinish":TDV.Tour.Script.quizFinish,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"init":TDV.Tour.Script.init,"existsKey":TDV.Tour.Script.existsKey,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"textToSpeech":TDV.Tour.Script.textToSpeech,"initGA":TDV.Tour.Script.initGA,"getKey":TDV.Tour.Script.getKey,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"setLocale":TDV.Tour.Script.setLocale,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"getComponentByName":TDV.Tour.Script.getComponentByName,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"cloneCamera":TDV.Tour.Script.cloneCamera,"setMapLocation":TDV.Tour.Script.setMapLocation,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"unregisterKey":TDV.Tour.Script.unregisterKey,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"openLink":TDV.Tour.Script.openLink,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"shareSocial":TDV.Tour.Script.shareSocial,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"historyGoForward":TDV.Tour.Script.historyGoForward,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"showPopupImage":TDV.Tour.Script.showPopupImage,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"showWindow":TDV.Tour.Script.showWindow,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"playAudioList":TDV.Tour.Script.playAudioList,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"translate":TDV.Tour.Script.translate,"clone":TDV.Tour.Script.clone,"mixObject":TDV.Tour.Script.mixObject,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"getMainViewer":TDV.Tour.Script.getMainViewer,"initQuiz":TDV.Tour.Script.initQuiz,"historyGoBack":TDV.Tour.Script.historyGoBack,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex},"vrPolyfillScale":0.75,"children":["this.MainViewer"],"height":"100%","start":"this.init()","horizontalAlign":"left","backgroundColorRatios":[0],"contentOpaque":false,"mediaActivationMode":"window","scrollBarColor":"#000000","borderSize":0,"backgroundColorDirection":"vertical","layout":"absolute","scrollBarMargin":2,"downloadEnabled":false,"width":"100%","backgroundColor":["#FFFFFF"],"id":"rootPlayer","minHeight":20,"paddingTop":0,"toolTipHorizontalAlign":"center","mobileMipmappingEnabled":false,"minWidth":20,"class":"Player","paddingBottom":0,"shadow":false,"propagateClick":false,"mouseWheelEnabled":true,"scrollBarOpacity":0.5,"borderRadius":0,"scrollBarVisible":"rollOver","backgroundOpacity":1,"overflow":"hidden","verticalAlign":"top","gap":10,"defaultVRPointer":"laser","paddingLeft":0,"data":{"name":"Player6036","textToSpeechConfig":{"speechOnTooltip":false,"speechOnQuizQuestion":false,"rate":1,"speechOnInfoWindow":false,"pitch":1,"volume":1},"locales":{"es":"locale/es.txt"},"defaultLocale":"es"},"backgroundPreloadEnabled":true};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2020.5.27.js.map
//Generated with v2020.5.27, Mon Mar 1 2021