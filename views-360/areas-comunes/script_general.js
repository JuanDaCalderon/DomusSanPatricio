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
    var d = {"start":"this.init(); this.syncPlaylists([this.mainPlayList,this.ThumbnailList_0AA01EE2_183A_2682_41B1_96966AF60F2D_playlist])","paddingRight":0,"scrollBarColor":"#000000","mouseWheelEnabled":true,"children":["this.MainViewer","this.ThumbnailList_0AA01EE2_183A_2682_41B1_96966AF60F2D"],"definitions": [{"id":"MainViewerPanoramaPlayer","zoomEnabled":true,"mouseControlMode":"drag_rotation","gyroscopeVerticalDraggingEnabled":true,"arrowKeysAction":"translate","touchControlMode":"drag_rotation","class":"PanoramaPlayer","displayPlaybackBar":true,"surfaceSelectionEnabled":false,"viewerArea":"this.MainViewer"},{"id":"panorama_4D037E59_4661_8A4C_41C4_BA4BA63E1D6C_camera","initialSequence":"this.sequence_4CACFBCF_4666_8A44_41A4_451584DC2339","class":"PanoramaCamera","automaticZoomSpeed":10,"initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0}},{"id":"panorama_4D551078_4661_B64C_418B_0C7C35CF128E_camera","initialSequence":"this.sequence_15C90DB2_183B_EA82_41B0_59B5E366321D","class":"PanoramaCamera","automaticZoomSpeed":10,"initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0}},{"subtitlesPaddingBottom":5,"toolTipFontWeight":"normal","progressBarBorderSize":0,"subtitlesFontSize":"3vmin","subtitlesFontColor":"#FFFFFF","progressBarBorderRadius":0,"playbackBarBackgroundOpacity":1,"subtitlesBackgroundColor":"#000000","toolTipBorderRadius":3,"subtitlesBackgroundOpacity":0.2,"playbackBarLeft":0,"toolTipShadowBlurRadius":3,"playbackBarHeadHeight":15,"toolTipBorderSize":1,"playbackBarHeadShadowBlurRadius":3,"subtitlesFontWeight":"normal","subtitlesBorderColor":"#FFFFFF","toolTipTextShadowColor":"#000000","borderSize":0,"playbackBarHeadBackgroundColorRatios":[0,1],"subtitlesTextShadowBlurRadius":0,"borderRadius":0,"toolTipPaddingTop":4,"playbackBarHeadBorderSize":0,"toolTipPaddingLeft":6,"surfaceReticleSelectionColor":"#FFFFFF","playbackBarHeadShadow":true,"toolTipShadowColor":"#333333","playbackBarHeadShadowColor":"#000000","subtitlesTextDecoration":"none","playbackBarHeadOpacity":1,"propagateClick":false,"subtitlesTextShadowVerticalLength":1,"surfaceReticleSelectionOpacity":1,"toolTipFontSize":"1.11vmin","doubleClickAction":"toggle_fullscreen","toolTipTextShadowOpacity":0,"toolTipFontFamily":"Arial","playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarOpacity":1,"paddingTop":0,"firstTransitionDuration":0,"transitionDuration":500,"playbackBarBottom":5,"subtitlesPaddingLeft":5,"shadow":false,"subtitlesTextShadowHorizontalLength":1,"vrPointerColor":"#FFFFFF","paddingBottom":0,"progressBorderRadius":0,"subtitlesPaddingTop":5,"playbackBarProgressBackgroundColorDirection":"vertical","playbackBarBackgroundColor":["#FFFFFF"],"toolTipFontColor":"#606060","playbackBarHeight":10,"subtitlesShadow":false,"toolTipShadowVerticalLength":0,"playbackBarHeadBackgroundColorDirection":"vertical","subtitlesOpacity":1,"playbackBarHeadWidth":6,"progressBackgroundColorRatios":[0],"playbackBarProgressBorderSize":0,"progressBackgroundOpacity":1,"toolTipPaddingBottom":4,"playbackBarBackgroundColorDirection":"vertical","paddingLeft":0,"playbackBarRight":0,"playbackBarHeadShadowHorizontalLength":0,"displayTooltipInSurfaceSelection":true,"toolTipFontStyle":"normal","paddingRight":0,"progressRight":0,"subtitlesTextShadowOpacity":1,"playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarProgressBorderRadius":0,"playbackBarHeadShadowVerticalLength":0,"toolTipOpacity":1,"progressOpacity":1,"playbackBarHeadShadowOpacity":0.7,"toolTipBorderColor":"#767676","progressBarBackgroundColorDirection":"vertical","toolTipHorizontalAlign":"center","toolTipShadowSpread":0,"progressBarBorderColor":"#000000","playbackBarProgressBackgroundColorRatios":[0],"progressBarBackgroundColorRatios":[0],"progressLeft":0,"surfaceReticleColor":"#FFFFFF","toolTipTextShadowBlurRadius":3,"toolTipPaddingRight":6,"subtitlesPaddingRight":5,"playbackBarBorderColor":"#FFFFFF","progressBackgroundColorDirection":"vertical","playbackBarBorderRadius":0,"subtitlesBottom":50,"surfaceReticleOpacity":0.6,"playbackBarProgressBorderColor":"#000000","id":"MainViewer","width":"100%","subtitlesHorizontalAlign":"center","subtitlesFontFamily":"Arial","class":"ViewerArea","height":"100%","toolTipShadowOpacity":1,"minWidth":100,"minHeight":50,"playbackBarProgressOpacity":1,"vrPointerSelectionColor":"#FF6600","playbackBarHeadBorderRadius":0,"progressBarBackgroundColor":["#3399FF"],"playbackBarHeadBorderColor":"#000000","progressBorderColor":"#000000","toolTipBackgroundColor":"#F6F6F6","progressBarOpacity":1,"displayTooltipInTouchScreens":true,"progressBackgroundColor":["#FFFFFF"],"playbackBarBorderSize":0,"progressBottom":0,"subtitlesVerticalAlign":"bottom","subtitlesTop":0,"subtitlesTextShadowColor":"#000000","progressHeight":10,"transitionMode":"blending","toolTipShadowHorizontalLength":0,"subtitlesGap":0,"toolTipDisplayTime":600,"vrPointerSelectionTime":2000,"subtitlesBorderSize":0,"progressBorderSize":0,"data":{"name":"Main Viewer"}},{"id":"panorama_4D69634C_4661_FA45_41CB_ED8AE177AADD","thumbnailUrl":"media/panorama_4D69634C_4661_FA45_41CB_ED8AE177AADD_t.jpg","vfov":180,"label":trans('panorama_4D69634C_4661_FA45_41CB_ED8AE177AADD.label'),"class":"Panorama","data":{"label":"Cinema"},"hfovMax":130,"partial":false,"pitch":0,"hfovMin":"150%","frames":[{"thumbnailUrl":"media/panorama_4D69634C_4661_FA45_41CB_ED8AE177AADD_t.jpg","class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"width":9216,"height":1536,"class":"TiledImageResourceLevel","rowCount":3,"tags":"ondemand","colCount":18,"url":"media/panorama_4D69634C_4661_FA45_41CB_ED8AE177AADD_0/{face}/0/{row}_{column}.jpg"},{"width":6144,"height":1024,"class":"TiledImageResourceLevel","rowCount":2,"tags":"ondemand","colCount":12,"url":"media/panorama_4D69634C_4661_FA45_41CB_ED8AE177AADD_0/{face}/1/{row}_{column}.jpg"},{"width":3072,"height":512,"class":"TiledImageResourceLevel","rowCount":1,"tags":["ondemand","preload"],"colCount":6,"url":"media/panorama_4D69634C_4661_FA45_41CB_ED8AE177AADD_0/{face}/2/{row}_{column}.jpg"},{"width":9216,"height":1536,"class":"TiledImageResourceLevel","rowCount":1,"tags":"mobilevr","colCount":6,"url":"media/panorama_4D69634C_4661_FA45_41CB_ED8AE177AADD_0/{face}/vr/0.jpg"}]}}],"hfov":360},{"id":"mainPlayList","class":"PlayList","items":[{"camera":"this.panorama_4D4EC723_4663_9BFC_41C2_5F73D87112A1_camera","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_4D4EC723_4663_9BFC_41C2_5F73D87112A1"},{"camera":"this.panorama_4D77DBEC_4662_8A44_4197_B62F4068102F_camera","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_4D77DBEC_4662_8A44_4197_B62F4068102F"},{"camera":"this.panorama_4D6927A3_4662_9AFC_41CD_7906B88D6154_camera","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 3)","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_4D6927A3_4662_9AFC_41CD_7906B88D6154"},{"camera":"this.panorama_4D551078_4661_B64C_418B_0C7C35CF128E_camera","begin":"this.setEndToItemIndex(this.mainPlayList, 3, 4)","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_4D551078_4661_B64C_418B_0C7C35CF128E"},{"camera":"this.panorama_4D69634C_4661_FA45_41CB_ED8AE177AADD_camera","begin":"this.setEndToItemIndex(this.mainPlayList, 4, 5)","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_4D69634C_4661_FA45_41CB_ED8AE177AADD"},{"camera":"this.panorama_4D4B42C0_4666_9ABC_41CD_F0E1D53CC4B1_camera","begin":"this.setEndToItemIndex(this.mainPlayList, 5, 6)","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_4D4B42C0_4666_9ABC_41CD_F0E1D53CC4B1"},{"end":"this.trigger('tourEnded')","camera":"this.panorama_4D037E59_4661_8A4C_41C4_BA4BA63E1D6C_camera","begin":"this.setEndToItemIndex(this.mainPlayList, 6, 0)","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_4D037E59_4661_8A4C_41C4_BA4BA63E1D6C"}]},{"id":"panorama_4D69634C_4661_FA45_41CB_ED8AE177AADD_camera","initialSequence":"this.sequence_15C92DB2_183B_EA82_41A7_3CAEE955A5B1","class":"PanoramaCamera","automaticZoomSpeed":10,"initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0}},{"id":"panorama_4D6927A3_4662_9AFC_41CD_7906B88D6154_camera","initialSequence":"this.sequence_15CAEDB2_183B_EA82_41A5_B9D9CAA631CB","class":"PanoramaCamera","automaticZoomSpeed":10,"initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0}},{"id":"panorama_4D4B42C0_4666_9ABC_41CD_F0E1D53CC4B1","thumbnailUrl":"media/panorama_4D4B42C0_4666_9ABC_41CD_F0E1D53CC4B1_t.jpg","vfov":180,"label":trans('panorama_4D4B42C0_4666_9ABC_41CD_F0E1D53CC4B1.label'),"class":"Panorama","data":{"label":"Cafe"},"hfovMax":130,"partial":false,"pitch":0,"hfovMin":"150%","frames":[{"thumbnailUrl":"media/panorama_4D4B42C0_4666_9ABC_41CD_F0E1D53CC4B1_t.jpg","class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"width":6144,"height":1024,"class":"TiledImageResourceLevel","rowCount":2,"tags":"ondemand","colCount":12,"url":"media/panorama_4D4B42C0_4666_9ABC_41CD_F0E1D53CC4B1_0/{face}/0/{row}_{column}.jpg"},{"width":3072,"height":512,"class":"TiledImageResourceLevel","rowCount":1,"tags":["ondemand","preload"],"colCount":6,"url":"media/panorama_4D4B42C0_4666_9ABC_41CD_F0E1D53CC4B1_0/{face}/1/{row}_{column}.jpg"},{"width":6144,"height":1024,"class":"TiledImageResourceLevel","rowCount":1,"tags":"mobilevr","colCount":6,"url":"media/panorama_4D4B42C0_4666_9ABC_41CD_F0E1D53CC4B1_0/{face}/vr/0.jpg"}]}}],"hfov":360},{"id":"panorama_4D551078_4661_B64C_418B_0C7C35CF128E","thumbnailUrl":"media/panorama_4D551078_4661_B64C_418B_0C7C35CF128E_t.jpg","vfov":180,"label":trans('panorama_4D551078_4661_B64C_418B_0C7C35CF128E.label'),"class":"Panorama","data":{"label":"Co-working"},"hfovMax":130,"partial":false,"pitch":0,"hfovMin":"150%","frames":[{"thumbnailUrl":"media/panorama_4D551078_4661_B64C_418B_0C7C35CF128E_t.jpg","class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"width":9216,"height":1536,"class":"TiledImageResourceLevel","rowCount":3,"tags":"ondemand","colCount":18,"url":"media/panorama_4D551078_4661_B64C_418B_0C7C35CF128E_0/{face}/0/{row}_{column}.jpg"},{"width":6144,"height":1024,"class":"TiledImageResourceLevel","rowCount":2,"tags":"ondemand","colCount":12,"url":"media/panorama_4D551078_4661_B64C_418B_0C7C35CF128E_0/{face}/1/{row}_{column}.jpg"},{"width":3072,"height":512,"class":"TiledImageResourceLevel","rowCount":1,"tags":["ondemand","preload"],"colCount":6,"url":"media/panorama_4D551078_4661_B64C_418B_0C7C35CF128E_0/{face}/2/{row}_{column}.jpg"},{"width":9216,"height":1536,"class":"TiledImageResourceLevel","rowCount":1,"tags":"mobilevr","colCount":6,"url":"media/panorama_4D551078_4661_B64C_418B_0C7C35CF128E_0/{face}/vr/0.jpg"}]}}],"hfov":360},{"itemThumbnailShadowBlurRadius":8,"playList":"this.ThumbnailList_0AA01EE2_183A_2682_41B1_96966AF60F2D_playlist","backgroundColorDirection":"vertical","itemLabelFontFamily":"Arial","right":"2.91%","borderSize":0,"itemPaddingTop":3,"itemVerticalAlign":"middle","borderRadius":5,"itemThumbnailHeight":75,"horizontalAlign":"left","propagateClick":false,"scrollBarWidth":10,"selectedItemLabelFontWeight":"bold","itemThumbnailBorderRadius":5,"itemBorderRadius":0,"backgroundColor":["#000000"],"itemBackgroundOpacity":0,"itemPaddingBottom":3,"paddingTop":10,"itemBackgroundColor":[],"itemLabelGap":8,"itemOpacity":1,"shadow":false,"backgroundColorRatios":[0],"itemMode":"normal","scrollBarOpacity":0.5,"itemThumbnailShadowSpread":1,"paddingBottom":10,"itemBackgroundColorRatios":[],"verticalAlign":"top","backgroundOpacity":0.31,"itemThumbnailShadowOpacity":0.27,"itemThumbnailOpacity":1,"itemThumbnailWidth":100,"top":"7.58%","scrollBarColor":"#FFFFFF","rollOverItemLabelFontWeight":"bold","scrollBarVisible":"rollOver","paddingLeft":20,"itemLabelTextDecoration":"none","paddingRight":20,"itemThumbnailShadowHorizontalLength":3,"rollOverItemBackgroundOpacity":0,"itemLabelFontWeight":"normal","itemHorizontalAlign":"center","scrollBarMargin":2,"toolTipHorizontalAlign":"center","layout":"vertical","selectedItemLabelFontColor":"#FFCC00","itemLabelFontSize":14,"itemThumbnailScaleMode":"fit_outside","itemLabelPosition":"bottom","width":156,"itemLabelHorizontalAlign":"center","id":"ThumbnailList_0AA01EE2_183A_2682_41B1_96966AF60F2D","itemLabelFontColor":"#FFFFFF","itemBackgroundColorDirection":"vertical","class":"ThumbnailList","height":"83.886%","minWidth":20,"minHeight":20,"itemThumbnailShadow":true,"itemThumbnailShadowVerticalLength":3,"gap":1,"itemPaddingRight":3,"data":{"name":"ThumbnailList35762"},"itemLabelFontStyle":"normal","itemPaddingLeft":3,"itemThumbnailShadowColor":"#000000"},{"id":"panorama_4D6927A3_4662_9AFC_41CD_7906B88D6154","thumbnailUrl":"media/panorama_4D6927A3_4662_9AFC_41CD_7906B88D6154_t.jpg","vfov":180,"label":trans('panorama_4D6927A3_4662_9AFC_41CD_7906B88D6154.label'),"class":"Panorama","data":{"label":"Gym"},"hfovMax":130,"partial":false,"pitch":0,"hfovMin":"150%","frames":[{"thumbnailUrl":"media/panorama_4D6927A3_4662_9AFC_41CD_7906B88D6154_t.jpg","class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"width":9216,"height":1536,"class":"TiledImageResourceLevel","rowCount":3,"tags":"ondemand","colCount":18,"url":"media/panorama_4D6927A3_4662_9AFC_41CD_7906B88D6154_0/{face}/0/{row}_{column}.jpg"},{"width":6144,"height":1024,"class":"TiledImageResourceLevel","rowCount":2,"tags":"ondemand","colCount":12,"url":"media/panorama_4D6927A3_4662_9AFC_41CD_7906B88D6154_0/{face}/1/{row}_{column}.jpg"},{"width":3072,"height":512,"class":"TiledImageResourceLevel","rowCount":1,"tags":["ondemand","preload"],"colCount":6,"url":"media/panorama_4D6927A3_4662_9AFC_41CD_7906B88D6154_0/{face}/2/{row}_{column}.jpg"},{"width":9216,"height":1536,"class":"TiledImageResourceLevel","rowCount":1,"tags":"mobilevr","colCount":6,"url":"media/panorama_4D6927A3_4662_9AFC_41CD_7906B88D6154_0/{face}/vr/0.jpg"}]}}],"hfov":360},{"id":"panorama_4D77DBEC_4662_8A44_4197_B62F4068102F","thumbnailUrl":"media/panorama_4D77DBEC_4662_8A44_4197_B62F4068102F_t.jpg","vfov":180,"label":trans('panorama_4D77DBEC_4662_8A44_4197_B62F4068102F.label'),"class":"Panorama","data":{"label":"Lobby"},"hfovMax":130,"partial":false,"pitch":0,"hfovMin":"150%","frames":[{"thumbnailUrl":"media/panorama_4D77DBEC_4662_8A44_4197_B62F4068102F_t.jpg","class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"width":9216,"height":1536,"class":"TiledImageResourceLevel","rowCount":3,"tags":"ondemand","colCount":18,"url":"media/panorama_4D77DBEC_4662_8A44_4197_B62F4068102F_0/{face}/0/{row}_{column}.jpg"},{"width":6144,"height":1024,"class":"TiledImageResourceLevel","rowCount":2,"tags":"ondemand","colCount":12,"url":"media/panorama_4D77DBEC_4662_8A44_4197_B62F4068102F_0/{face}/1/{row}_{column}.jpg"},{"width":3072,"height":512,"class":"TiledImageResourceLevel","rowCount":1,"tags":["ondemand","preload"],"colCount":6,"url":"media/panorama_4D77DBEC_4662_8A44_4197_B62F4068102F_0/{face}/2/{row}_{column}.jpg"},{"width":9216,"height":1536,"class":"TiledImageResourceLevel","rowCount":1,"tags":"mobilevr","colCount":6,"url":"media/panorama_4D77DBEC_4662_8A44_4197_B62F4068102F_0/{face}/vr/0.jpg"}]}}],"hfov":360},{"id":"panorama_4D77DBEC_4662_8A44_4197_B62F4068102F_camera","initialSequence":"this.sequence_15CACDB2_183B_EA82_418F_E15E19AFC525","class":"PanoramaCamera","automaticZoomSpeed":10,"initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0}},{"id":"panorama_4D037E59_4661_8A4C_41C4_BA4BA63E1D6C","thumbnailUrl":"media/panorama_4D037E59_4661_8A4C_41C4_BA4BA63E1D6C_t.jpg","vfov":180,"label":trans('panorama_4D037E59_4661_8A4C_41C4_BA4BA63E1D6C.label'),"class":"Panorama","data":{"label":"Co-working 2"},"hfovMax":130,"partial":false,"pitch":0,"hfovMin":"150%","frames":[{"thumbnailUrl":"media/panorama_4D037E59_4661_8A4C_41C4_BA4BA63E1D6C_t.jpg","class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"width":6144,"height":1024,"class":"TiledImageResourceLevel","rowCount":2,"tags":"ondemand","colCount":12,"url":"media/panorama_4D037E59_4661_8A4C_41C4_BA4BA63E1D6C_0/{face}/0/{row}_{column}.jpg"},{"width":3072,"height":512,"class":"TiledImageResourceLevel","rowCount":1,"tags":["ondemand","preload"],"colCount":6,"url":"media/panorama_4D037E59_4661_8A4C_41C4_BA4BA63E1D6C_0/{face}/1/{row}_{column}.jpg"},{"width":6144,"height":1024,"class":"TiledImageResourceLevel","rowCount":1,"tags":"mobilevr","colCount":6,"url":"media/panorama_4D037E59_4661_8A4C_41C4_BA4BA63E1D6C_0/{face}/vr/0.jpg"}]}}],"hfov":360},{"id":"panorama_4D4EC723_4663_9BFC_41C2_5F73D87112A1","thumbnailUrl":"media/panorama_4D4EC723_4663_9BFC_41C2_5F73D87112A1_t.jpg","vfov":180,"label":trans('panorama_4D4EC723_4663_9BFC_41C2_5F73D87112A1.label'),"class":"Panorama","data":{"label":"Ping Pong"},"hfovMax":130,"partial":false,"pitch":0,"hfovMin":"150%","frames":[{"thumbnailUrl":"media/panorama_4D4EC723_4663_9BFC_41C2_5F73D87112A1_t.jpg","class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"width":9216,"height":1536,"class":"TiledImageResourceLevel","rowCount":3,"tags":"ondemand","colCount":18,"url":"media/panorama_4D4EC723_4663_9BFC_41C2_5F73D87112A1_0/{face}/0/{row}_{column}.jpg"},{"width":6144,"height":1024,"class":"TiledImageResourceLevel","rowCount":2,"tags":"ondemand","colCount":12,"url":"media/panorama_4D4EC723_4663_9BFC_41C2_5F73D87112A1_0/{face}/1/{row}_{column}.jpg"},{"width":3072,"height":512,"class":"TiledImageResourceLevel","rowCount":1,"tags":["ondemand","preload"],"colCount":6,"url":"media/panorama_4D4EC723_4663_9BFC_41C2_5F73D87112A1_0/{face}/2/{row}_{column}.jpg"},{"width":9216,"height":1536,"class":"TiledImageResourceLevel","rowCount":1,"tags":"mobilevr","colCount":6,"url":"media/panorama_4D4EC723_4663_9BFC_41C2_5F73D87112A1_0/{face}/vr/0.jpg"}]}}],"hfov":360},{"id":"ThumbnailList_0AA01EE2_183A_2682_41B1_96966AF60F2D_playlist","class":"PlayList","items":[{"camera":"this.panorama_4D4EC723_4663_9BFC_41C2_5F73D87112A1_camera","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_4D4EC723_4663_9BFC_41C2_5F73D87112A1"},{"camera":"this.panorama_4D77DBEC_4662_8A44_4197_B62F4068102F_camera","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_4D77DBEC_4662_8A44_4197_B62F4068102F"},{"camera":"this.panorama_4D6927A3_4662_9AFC_41CD_7906B88D6154_camera","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_4D6927A3_4662_9AFC_41CD_7906B88D6154"},{"camera":"this.panorama_4D551078_4661_B64C_418B_0C7C35CF128E_camera","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_4D551078_4661_B64C_418B_0C7C35CF128E"},{"camera":"this.panorama_4D69634C_4661_FA45_41CB_ED8AE177AADD_camera","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_4D69634C_4661_FA45_41CB_ED8AE177AADD"},{"camera":"this.panorama_4D4B42C0_4666_9ABC_41CD_F0E1D53CC4B1_camera","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_4D4B42C0_4666_9ABC_41CD_F0E1D53CC4B1"},{"camera":"this.panorama_4D037E59_4661_8A4C_41C4_BA4BA63E1D6C_camera","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_4D037E59_4661_8A4C_41C4_BA4BA63E1D6C"}]},{"id":"panorama_4D4B42C0_4666_9ABC_41CD_F0E1D53CC4B1_camera","initialSequence":"this.sequence_15C97DB2_183B_EA82_41B9_2036F7275354","class":"PanoramaCamera","automaticZoomSpeed":10,"initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0}},{"id":"panorama_4D4EC723_4663_9BFC_41C2_5F73D87112A1_camera","initialSequence":"this.sequence_15CAADB2_183B_EA82_4198_BC94FDE447B9","class":"PanoramaCamera","automaticZoomSpeed":10,"initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0}},{"id":"sequence_4CACFBCF_4666_8A44_41A4_451584DC2339","restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","movements":[{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"yawSpeed":7.96,"easing":"cubic_in"},{"class":"DistancePanoramaCameraMovement","yawDelta":323,"yawSpeed":7.96,"easing":"linear"},{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"yawSpeed":7.96,"easing":"cubic_out"}]},{"id":"sequence_15C90DB2_183B_EA82_41B0_59B5E366321D","restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","movements":[{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"yawSpeed":7.96,"easing":"cubic_in"},{"class":"DistancePanoramaCameraMovement","yawDelta":323,"yawSpeed":7.96,"easing":"linear"},{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"yawSpeed":7.96,"easing":"cubic_out"}]},{"id":"sequence_15C92DB2_183B_EA82_41A7_3CAEE955A5B1","restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","movements":[{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"yawSpeed":7.96,"easing":"cubic_in"},{"class":"DistancePanoramaCameraMovement","yawDelta":323,"yawSpeed":7.96,"easing":"linear"},{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"yawSpeed":7.96,"easing":"cubic_out"}]},{"id":"sequence_15CAEDB2_183B_EA82_41A5_B9D9CAA631CB","restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","movements":[{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"yawSpeed":7.96,"easing":"cubic_in"},{"class":"DistancePanoramaCameraMovement","yawDelta":323,"yawSpeed":7.96,"easing":"linear"},{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"yawSpeed":7.96,"easing":"cubic_out"}]},{"id":"sequence_15CACDB2_183B_EA82_418F_E15E19AFC525","restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","movements":[{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"yawSpeed":7.96,"easing":"cubic_in"},{"class":"DistancePanoramaCameraMovement","yawDelta":323,"yawSpeed":7.96,"easing":"linear"},{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"yawSpeed":7.96,"easing":"cubic_out"}]},{"id":"sequence_15C97DB2_183B_EA82_41B9_2036F7275354","restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","movements":[{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"yawSpeed":7.96,"easing":"cubic_in"},{"class":"DistancePanoramaCameraMovement","yawDelta":323,"yawSpeed":7.96,"easing":"linear"},{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"yawSpeed":7.96,"easing":"cubic_out"}]},{"id":"sequence_15CAADB2_183B_EA82_4198_BC94FDE447B9","restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","movements":[{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"yawSpeed":7.96,"easing":"cubic_in"},{"class":"DistancePanoramaCameraMovement","yawDelta":323,"yawSpeed":7.96,"easing":"linear"},{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"yawSpeed":7.96,"easing":"cubic_out"}]}],"overflow":"hidden","backgroundColorDirection":"vertical","horizontalAlign":"left","borderSize":0,"scrollBarMargin":2,"toolTipHorizontalAlign":"center","borderRadius":0,"data":{"name":"Player48428","defaultLocale":"es","locales":{"es":"locale/es.txt"},"textToSpeechConfig":{"speechOnInfoWindow":false,"speechOnTooltip":false,"pitch":1,"speechOnQuizQuestion":false,"rate":1,"volume":1}},"vrPolyfillScale":0.75,"mobileMipmappingEnabled":false,"propagateClick":false,"scrollBarWidth":10,"layout":"absolute","width":"100%","id":"rootPlayer","backgroundColor":["#FFFFFF"],"class":"Player","paddingTop":0,"height":"100%","minWidth":20,"minHeight":20,"defaultVRPointer":"laser","backgroundColorRatios":[0],"shadow":false,"paddingBottom":0,"downloadEnabled":false,"scrollBarOpacity":0.5,"backgroundOpacity":1,"mediaActivationMode":"window","contentOpaque":false,"gap":10,"scrollBarVisible":"rollOver","verticalAlign":"top","backgroundPreloadEnabled":true,"paddingLeft":0,"scripts":{"getMediaByName":TDV.Tour.Script.getMediaByName,"initGA":TDV.Tour.Script.initGA,"getMainViewer":TDV.Tour.Script.getMainViewer,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"setValue":TDV.Tour.Script.setValue,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"cloneCamera":TDV.Tour.Script.cloneCamera,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"setMapLocation":TDV.Tour.Script.setMapLocation,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"mixObject":TDV.Tour.Script.mixObject,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"unregisterKey":TDV.Tour.Script.unregisterKey,"getPixels":TDV.Tour.Script.getPixels,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"playAudioList":TDV.Tour.Script.playAudioList,"setLocale":TDV.Tour.Script.setLocale,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"init":TDV.Tour.Script.init,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"getKey":TDV.Tour.Script.getKey,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"existsKey":TDV.Tour.Script.existsKey,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"showPopupImage":TDV.Tour.Script.showPopupImage,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"shareSocial":TDV.Tour.Script.shareSocial,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"quizShowScore":TDV.Tour.Script.quizShowScore,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"openLink":TDV.Tour.Script.openLink,"getComponentByName":TDV.Tour.Script.getComponentByName,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"resumePlayers":TDV.Tour.Script.resumePlayers,"historyGoBack":TDV.Tour.Script.historyGoBack,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"quizFinish":TDV.Tour.Script.quizFinish,"getOverlays":TDV.Tour.Script.getOverlays,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"quizStart":TDV.Tour.Script.quizStart,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"textToSpeech":TDV.Tour.Script.textToSpeech,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"showWindow":TDV.Tour.Script.showWindow,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"isPanorama":TDV.Tour.Script.isPanorama,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"translate":TDV.Tour.Script.translate,"clone":TDV.Tour.Script.clone,"historyGoForward":TDV.Tour.Script.historyGoForward,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"registerKey":TDV.Tour.Script.registerKey,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"initQuiz":TDV.Tour.Script.initQuiz,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility},"desktopMipmappingEnabled":false};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2020.5.27.js.map
//Generated with v2020.5.27, Thu Mar 18 2021