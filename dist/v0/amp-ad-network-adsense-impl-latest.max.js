(self.AMP=self.AMP||[]).push({n:"amp-ad-network-adsense-impl",v:"1537224222059",f:(function(AMP,_){
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signingServerURLs = undefined;
exports.getA4ARegistry = getA4ARegistry;

var _adsenseA4aConfig = require('../extensions/amp-ad-network-adsense-impl/0.1/adsense-a4a-config');

var _cloudflareA4aConfig = require('../extensions/amp-ad-network-cloudflare-impl/0.1/cloudflare-a4a-config');

var _gmosspA4aConfig = require('../extensions/amp-ad-network-gmossp-impl/0.1/gmossp-a4a-config');

var _object = require('../src/utils/object');

var _tripleliftA4aConfig = require('../extensions/amp-ad-network-triplelift-impl/0.1/triplelift-a4a-config');

/**
 * Registry for A4A (AMP Ads for AMPHTML pages) "is supported" predicates.
 * If an ad network, {@code ${NETWORK}}, is registered in this object, then the
 * {@code <amp-ad type="${NETWORK}">} implementation will look up its predicate
 * here. If there is a predicate and it and returns {@code true}, then
 * {@code amp-ad} will attempt to render the ad via the A4A pathway (fetch
 * ad creative via early XHR CORS request; verify that it is validated AMP;
 * and then render directly in the host page by splicing into the host DOM).
 * Otherwise, it will attempt to render the ad via the existing "3p iframe"
 * pathway (delay load into a cross-domain iframe).
 *
 * @type {!Object<string, function(!Window, !Element): boolean>}
 */
var a4aRegistry = void 0;

/**
 * Returns the a4a registry map
 * @return {Object}
 */
/**
 * Copyright 2016 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function getA4ARegistry() {
  if (!a4aRegistry) {
    a4aRegistry = (0, _object.map)({
      'adsense': _adsenseA4aConfig.adsenseIsA4AEnabled,
      'adzerk': function adzerk() {
        return true;
      },
      'doubleclick': function doubleclick() {
        return true;
      },
      'triplelift': _tripleliftA4aConfig.tripleliftIsA4AEnabled,
      'cloudflare': _cloudflareA4aConfig.cloudflareIsA4AEnabled,
      'gmossp': _gmosspA4aConfig.gmosspIsA4AEnabled,
      'fake': function fake() {
        return true;
      }
      // TODO: Add new ad network implementation "is enabled" functions here.
      // Note: if you add a function here that requires a new "import", above,
      // you'll probably also need to add a whitelist exception to
      // build-system/dep-check-config.js in the "filesMatching: 'ads/**/*.js'
      // rule.
    });
  }

  return a4aRegistry;
}

/**
 * An object mapping signing server names to their corresponding URLs.
 * @type {!Object<string, string>}
 */
var signingServerURLs = exports.signingServerURLs = {
  'google': 'https://cdn.ampproject.org/amp-ad-verifying-keyset.json',
  'google-dev': 'https://cdn.ampproject.org/amp-ad-verifying-keyset-dev.json',
  'cloudflare': 'https://amp.cloudflare.com/amp-ad-verifying-keyset.json',
  'cloudflare-dev': 'https://amp.cloudflare.com/amp-ad-verifying-keyset-dev.json'
};

},{"../extensions/amp-ad-network-adsense-impl/0.1/adsense-a4a-config":12,"../extensions/amp-ad-network-cloudflare-impl/0.1/cloudflare-a4a-config":15,"../extensions/amp-ad-network-gmossp-impl/0.1/gmossp-a4a-config":16,"../extensions/amp-ad-network-triplelift-impl/0.1/triplelift-a4a-config":17,"../src/utils/object":78}],2:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Copyright 2016 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @typedef {{
 *   prefetch: (string|undefined),
 *   preconnect: (string|undefined),
 *   renderStartImplemented: (boolean|undefined),
 *   clientIdScope: (string|undefined),
 *   clientIdCookieName: (string|undefined),
 *   consentHandlingOverride: (boolean|undefined),
 *   remoteHTMLDisabled: (boolean|undefined),
 *   fullWidthHeightRatio: (number|undefined),
 * }}
 */
var AdNetworkConfigDef = void 0;

/**
 * The config of each ad network.
 * Please keep the list alphabetic order.
 *
 * yourNetworkName: {  // This is the "type" attribute of <amp-ad>
 *
 *   // List of URLs for prefetch
 *   prefetch: string|array
 *
 *   // List of hosts for preconnect
 *   preconnect: string|array
 *
 *   // The scope used to provide CIDs to ads
 *   clientIdScope: string
 *
 *   // The cookie name to store the CID. In absence, `clientIdScope` is used.
 *   clientIdCookieName: string
 *
 *   // If the ad network is willing to override the consent handling, which
 *   // by default is blocking ad load until the consent is accepted.
 *   consentHandlingOverride: boolean
 *
 *   // Whether render-start API has been implemented
 *   // We highly recommend all networks to implement the API,
 *   // see details in the README.md
 *   renderStartImplemented: boolean
 *
 *   // The width / height ratio for full width ad units.
 *   // If absent, it means the network does not support full width ad units.
 *   // Example value: 1.2
 *   fullWidthHeightRatio: number
 * }
 *
 * @const {!Object<string, !AdNetworkConfigDef>}}
 */
var adConfig = exports.adConfig = {
  '_ping_': {
    renderStartImplemented: true,
    clientIdScope: '_PING_',
    consentHandlingOverride: true
  },

  '24smi': {
    prefetch: 'https://jsn.24smi.net/smi.js',
    preconnect: 'https://data.24smi.net'
  },

  'a8': {
    prefetch: 'https://statics.a8.net/amp/ad.js',
    renderStartImplemented: true
  },

  'a9': {
    prefetch: 'https://c.amazon-adsystem.com/aax2/assoc.js'
  },

  'accesstrade': {
    prefetch: 'https://h.accesstrade.net/js/amp/amp.js'
  },

  'adagio': {
    prefetch: 'https://js-ssl.neodatagroup.com/adagio_amp.js',
    preconnect: ['https://ad-aws-it.neodatagroup.com', 'https://tracker.neodatagroup.com'],
    renderStartImplemented: true
  },

  'adblade': {
    prefetch: 'https://web.adblade.com/js/ads/async/show.js',
    preconnect: ['https://staticd.cdn.adblade.com', 'https://static.adblade.com'],
    renderStartImplemented: true
  },

  'adbutler': {
    prefetch: 'https://servedbyadbutler.com/app.js'
  },

  'adform': {},

  'adfox': {
    prefetch: 'https://yastatic.net/pcode/adfox/loader.js',
    renderStartImplemented: true
  },

  'adgeneration': {
    prefetch: 'https://i.socdm.com/sdk/js/adg-script-loader.js'
  },

  'adhese': {
    renderStartImplemented: true
  },

  'adincube': {
    renderStartImplemented: true
  },

  'adition': {},

  'adman': {},

  'admanmedia': {
    renderStartImplemented: true
  },

  'admixer': {
    renderStartImplemented: true,
    preconnect: ['https://inv-nets.admixer.net', 'https://cdn.admixer.net']
  },

  'adocean': {},

  'adpicker': {
    renderStartImplemented: true
  },

  'adplugg': {
    prefetch: 'https://www.adplugg.com/serve/js/ad.js',
    renderStartImplemented: true
  },

  'adreactor': {},

  'adsense': {
    prefetch: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
    preconnect: 'https://googleads.g.doubleclick.net',
    clientIdScope: 'AMP_ECID_GOOGLE',
    clientIdCookieName: '_ga',
    remoteHTMLDisabled: true,
    masterFrameAccessibleType: 'google_network',
    fullWidthHeightRatio: 1.2,
    consentHandlingOverride: true
  },

  'adsnative': {
    prefetch: 'https://static.adsnative.com/static/js/render.v1.js',
    preconnect: 'https://api.adsnative.com'
  },

  'adspeed': {
    preconnect: 'https://g.adspeed.net',
    renderStartImplemented: true
  },

  'adspirit': {},

  'adstir': {
    prefetch: 'https://js.ad-stir.com/js/adstir_async.js',
    preconnect: 'https://ad.ad-stir.com'
  },

  'adtech': {
    prefetch: 'https://s.aolcdn.com/os/ads/adsWrapper3.js',
    preconnect: ['https://mads.at.atwola.com', 'https://aka-cdn.adtechus.com']
  },

  'adthrive': {
    prefetch: ['https://www.googletagservices.com/tag/js/gpt.js'],
    preconnect: ['https://partner.googleadservices.com', 'https://securepubads.g.doubleclick.net', 'https://tpc.googlesyndication.com'],
    renderStartImplemented: true
  },

  'adunity': {
    preconnect: ['https://content.adunity.com'],
    renderStartImplemented: true
  },

  'aduptech': {
    prefetch: 'https://s.d.adup-tech.com/jsapi',
    preconnect: ['https://d.adup-tech.com', 'https://m.adup-tech.com'],
    renderStartImplemented: true
  },

  'adventive': {
    preconnect: ['https://ads.adventive.com', 'https://amp.adventivedev.com'],
    renderStartImplemented: true
  },

  'adverline': {
    prefetch: 'https://ads.adverline.com/richmedias/amp.js',
    preconnect: ['https://adnext.fr'],
    renderStartImplemented: true
  },

  'adverticum': {},

  'advertserve': {
    renderStartImplemented: true
  },

  'adzerk': {},

  'affiliateb': {
    prefetch: 'https://track.affiliate-b.com/amp/a.js',
    renderStartImplemented: true
  },

  'aja': {
    renderStartImplemented: true,
    prefetch: 'https://cdn.as.amanad.adtdp.com/sdk/asot-v2.js'
  },

  'appvador': {
    prefetch: ['https://cdn.apvdr.com/js/VastAdUnit.min.js', 'https://cdn.apvdr.com/js/VideoAd.min.js', 'https://cdn.apvdr.com/js/VideoAd3PAS.min.js', 'https://cdn.apvdr.com/js/VideoAdAutoPlay.min.js', 'https://cdn.apvdr.com/js/VideoAdNative.min.js'],
    renderStartImplemented: true
  },

  'amoad': {
    prefetch: ['https://j.amoad.com/js/a.js', 'https://j.amoad.com/js/n.js'],
    preconnect: ['https://d.amoad.com', 'https://i.amoad.com', 'https://m.amoad.com', 'https://v.amoad.com']
  },

  'appnexus': {
    prefetch: 'https://acdn.adnxs.com/ast/ast.js',
    preconnect: 'https://ib.adnxs.com',
    renderStartImplemented: true
  },

  'atomx': {
    prefetch: 'https://s.ato.mx/p.js'
  },

  'beopinion': {
    prefetch: 'https://widget.beopinion.com/sdk.js',
    preconnect: ['https://t.beopinion.com', 'https://s.beopinion.com', 'https://data.beopinion.com'],
    renderStartImplemented: true
  },

  'bidtellect': {},

  'brainy': {},

  'bringhub': {
    renderStartImplemented: true,
    preconnect: ['https://static.bh-cdn.com', 'https://core-api.bringhub.io']
  },

  'broadstreetads': {
    prefetch: 'https://cdn.broadstreetads.com/init-2.min.js'
  },

  'caajainfeed': {
    prefetch: ['https://cdn.amanad.adtdp.com/sdk/ajaamp.js'],
    preconnect: ['https://ad.amanad.adtdp.com']
  },

  'capirs': {
    renderStartImplemented: true
  },

  'caprofitx': {
    prefetch: ['https://cdn.caprofitx.com/pfx.min.js', 'https://cdn.caprofitx.com/tags/amp/profitx_amp.js'],
    preconnect: 'https://ad.caprofitx.adtdp.com'
  },

  'cedato': {
    renderStartImplemented: true
  },

  'chargeads': {},

  'colombia': {
    prefetch: 'https://static.clmbtech.com/ad/commons/js/colombia-amp.js'
  },

  'connatix': {
    renderStartImplemented: true
  },

  'contentad': {},

  'criteo': {
    prefetch: 'https://static.criteo.net/js/ld/publishertag.js',
    preconnect: 'https://cas.criteo.com'
  },

  'csa': {
    prefetch: 'https://www.google.com/adsense/search/ads.js'
  },

  'dable': {
    preconnect: ['https://static.dable.io', 'https://api.dable.io', 'https://images.dable.io'],
    renderStartImplemented: true
  },

  'directadvert': {
    renderStartImplemented: true
  },

  'distroscale': {
    preconnect: ['https://c.jsrdn.com', 'https://s.jsrdn.com', 'https://i.jsrdn.com'],
    renderStartImplemented: true
  },

  'dotandads': {
    prefetch: 'https://amp.ad.dotandad.com/dotandadsAmp.js',
    preconnect: 'https://bal.ad.dotandad.com'
  },

  'eadv': {
    renderStartImplemented: true,
    clientIdScope: 'AMP_ECID_EADV',
    prefetch: ['https://www.eadv.it/track/esr.min.js', 'https://www.eadv.it/track/ead.min.js']
  },

  'eas': {
    prefetch: 'https://amp.emediate.eu/amp.v0.js',
    renderStartImplemented: true
  },

  'engageya': {},

  'epeex': {},

  'eplanning': {
    prefetch: 'https://us.img.e-planning.net/layers/epl-amp.js'
  },

  'ezoic': {
    prefetch: ['https://www.googletagservices.com/tag/js/gpt.js', 'https://g.ezoic.net/ezoic/ampad.js'],
    clientIdScope: 'AMP_ECID_EZOIC',
    consentHandlingOverride: true
  },

  'f1e': {
    prefetch: 'https://img.ak.impact-ad.jp/util/f1e_amp.min.js'
  },

  'f1h': {
    preconnect: 'https://img.ak.impact-ad.jp',
    renderStartImplemented: true
  },

  'fake': {},

  'felmat': {
    prefetch: 'https://t.felmat.net/js/fmamp.js',
    renderStartImplemented: true
  },

  'flite': {},

  'fluct': {
    preconnect: ['https://cdn-fluct.sh.adingo.jp', 'https://s.sh.adingo.jp', 'https://i.adingo.jp']
  },

  'fusion': {
    prefetch: 'https://assets.adtomafusion.net/fusion/latest/fusion-amp.min.js'
  },

  'genieessp': {
    prefetch: 'https://js.gsspcln.jp/l/amp.js'
  },

  'giraff': {
    renderStartImplemented: true
  },

  'gmossp': {
    prefetch: 'https://cdn.gmossp-sp.jp/ads/amp.js'
  },

  'gumgum': {
    prefetch: 'https://g2.gumgum.com/javascripts/ad.js',
    renderStartImplemented: true
  },

  'holder': {
    prefetch: 'https://i.holder.com.ua/js2/holder/ajax/ampv1.js',
    preconnect: 'https://h.holder.com.ua',
    renderStartImplemented: true
  },

  'ibillboard': {},

  'imedia': {
    prefetch: 'https://i.imedia.cz/js/im3.js',
    renderStartImplemented: true
  },

  'imobile': {
    prefetch: 'https://spamp.i-mobile.co.jp/script/amp.js',
    preconnect: 'https://spad.i-mobile.co.jp'
  },
  'imonomy': {
    renderStartImplemented: true
  },
  'improvedigital': {},

  'industrybrains': {
    prefetch: 'https://web.industrybrains.com/js/ads/async/show.js',
    preconnect: ['https://staticd.cdn.industrybrains.com', 'https://static.industrybrains.com'],
    renderStartImplemented: true
  },

  'inmobi': {
    prefetch: 'https://cf.cdn.inmobi.com/ad/inmobi.secure.js',
    renderStartImplemented: true
  },

  'innity': {
    prefetch: 'https://cdn.innity.net/admanager.js',
    preconnect: 'https://as.innity.com',
    renderStartImplemented: true
  },

  'ix': {
    prefetch: ['https://js-sec.indexww.com/apl/amp.js'],
    preconnect: 'https://as-sec.casalemedia.com',
    renderStartImplemented: true
  },

  'kargo': {},

  'kiosked': {
    renderStartImplemented: true
  },

  'kixer': {
    prefetch: 'https://cdn.kixer.com/ad/load.js',
    renderStartImplemented: true
  },

  'kuadio': {},

  'ligatus': {
    prefetch: 'https://ssl.ligatus.com/render/ligrend.js',
    renderStartImplemented: true
  },

  'lockerdome': {
    prefetch: 'https://cdn2.lockerdomecdn.com/_js/amp.js',
    renderStartImplemented: true
  },

  'loka': {
    prefetch: 'https://loka-cdn.akamaized.net/scene/amp.js',
    preconnect: ['https://scene-front.lokaplatform.com', 'https://loka-materials.akamaized.net'],
    renderStartImplemented: true
  },

  'mads': {
    prefetch: 'https://eu2.madsone.com/js/tags.js'
  },

  'mantis-display': {
    prefetch: 'https://assets.mantisadnetwork.com/mantodea.min.js',
    preconnect: ['https://mantodea.mantisadnetwork.com', 'https://res.cloudinary.com', 'https://resize.mantisadnetwork.com']
  },

  'mantis-recommend': {
    prefetch: 'https://assets.mantisadnetwork.com/recommend.min.js',
    preconnect: ['https://mantodea.mantisadnetwork.com', 'https://resize.mantisadnetwork.com']
  },

  'mediaimpact': {
    prefetch: 'https://ec-ns.sascdn.com/diff/251/pages/amp_default.js',
    preconnect: ['https://ww251.smartadserver.com', 'https://static.sascdn.com/'],
    renderStartImplemented: true
  },

  'medianet': {
    preconnect: 'https://contextual.media.net',
    renderStartImplemented: true
  },

  'mediavine': {
    prefetch: 'https://amp.mediavine.com/wrapper.min.js',
    preconnect: ['https://partner.googleadservices.com', 'https://securepubads.g.doubleclick.net', 'https://tpc.googlesyndication.com'],
    renderStartImplemented: true,
    consentHandlingOverride: true
  },

  'medyanet': {
    renderStartImplemented: true
  },

  'meg': {
    renderStartImplemented: true
  },

  'microad': {
    prefetch: 'https://j.microad.net/js/camp.js',
    preconnect: ['https://s-rtb.send.microad.jp', 'https://s-rtb.send.microadinc.com', 'https://cache.send.microad.jp', 'https://cache.send.microadinc.com', 'https://deb.send.microad.jp']
  },

  'miximedia': {
    renderStartImplemented: true
  },

  'mixpo': {
    prefetch: 'https://cdn.mixpo.com/js/loader.js',
    preconnect: ['https://player1.mixpo.com', 'https://player2.mixpo.com']
  },

  'monetizer101': {
    renderStartImplemented: true
  },

  'mytarget': {
    prefetch: 'https://ad.mail.ru/static/ads-async.js',
    renderStartImplemented: true
  },

  'mywidget': {
    preconnect: 'https://likemore-fe.go.mail.ru',
    prefetch: 'https://likemore-go.imgsmail.ru/widget_amp.js',
    renderStartImplemented: true
  },

  'nativo': {
    prefetch: 'https://s.ntv.io/serve/load.js'
  },

  'navegg': {
    renderStartImplemented: true
  },

  'nend': {
    prefetch: 'https://js1.nend.net/js/amp.js',
    preconnect: ['https://output.nend.net', 'https://img1.nend.net']
  },

  'netletix': {
    preconnect: ['https://call.netzathleten-media.de'],
    renderStartImplemented: true
  },

  'noddus': {
    prefetch: 'https://noddus.com/amp_loader.js',
    renderStartImplemented: true
  },

  'nokta': {
    prefetch: 'https://static.virgul.com/theme/mockups/noktaamp/ampjs.js',
    renderStartImplemented: true
  },

  'openadstream': {},

  'openx': {
    prefetch: 'https://www.googletagservices.com/tag/js/gpt.js',
    preconnect: ['https://partner.googleadservices.com', 'https://securepubads.g.doubleclick.net', 'https://tpc.googlesyndication.com'],
    renderStartImplemented: true
  },

  'outbrain': {
    renderStartImplemented: true,
    prefetch: 'https://widgets.outbrain.com/widgetAMP/outbrainAMP.min.js',
    preconnect: ['https://odb.outbrain.com'],
    consentHandlingOverride: true
  },

  'pixels': {
    prefetch: 'https://cdn.adsfactor.net/amp/pixels-amp.min.js',
    clientIdCookieName: '__AF',
    renderStartImplemented: true
  },

  'plista': {},

  'polymorphicads': {
    prefetch: 'https://www.polymorphicads.jp/js/amp.js',
    preconnect: ['https://img.polymorphicads.jp', 'https://ad.polymorphicads.jp'],
    renderStartImplemented: true
  },

  'popin': {
    renderStartImplemented: true
  },

  'postquare': {},

  'pubexchange': {},

  'pubguru': {
    renderStartImplemented: true
  },

  'pubmatic': {
    prefetch: 'https://ads.pubmatic.com/AdServer/js/amp.js'
  },

  'pubmine': {
    prefetch: ['https://s.pubmine.com/head.js', 'https://s.pubmine.com/showad.js'],
    preconnect: 'https://delivery.g.switchadhub.com',
    renderStartImplemented: true
  },

  'pulsepoint': {
    prefetch: 'https://ads.contextweb.com/TagPublish/getjs.static.js',
    preconnect: 'https://tag.contextweb.com'
  },

  'purch': {
    prefetch: 'https://ramp.purch.com/serve/creative_amp.js',
    renderStartImplemented: true
  },

  'quoraad': {
    prefetch: 'https://a.quora.com/amp_ad.js',
    preconnect: 'https://ampad.quora.com',
    renderStartImplemented: true
  },

  'realclick': {
    renderStartImplemented: true
  },

  'relap': {
    renderStartImplemented: true
  },

  'revcontent': {
    prefetch: 'https://labs-cdn.revcontent.com/build/amphtml/revcontent.amp.min.js',
    preconnect: ['https://trends.revcontent.com', 'https://cdn.revcontent.com', 'https://img.revcontent.com'],
    renderStartImplemented: true
  },

  'revjet': {
    prefetch: 'https://cdn.revjet.com/~cdn/JS/03/amp.js',
    renderStartImplemented: true
  },

  'rubicon': {},

  'sekindo': {
    renderStartImplemented: true
  },

  'sharethrough': {
    renderStartImplemented: true
  },

  'sklik': {
    prefetch: 'https://c.imedia.cz/js/amp.js'
  },

  'slimcutmedia': {
    preconnect: ['https://sb.freeskreen.com', 'https://static.freeskreen.com', 'https://video.freeskreen.com'],
    renderStartImplemented: true
  },

  'smartadserver': {
    prefetch: 'https://ec-ns.sascdn.com/diff/js/amp.v0.js',
    preconnect: 'https://static.sascdn.com',
    renderStartImplemented: true
  },

  'smartclip': {
    prefetch: 'https://cdn.smartclip.net/amp/amp.v0.js',
    preconnect: 'https://des.smartclip.net',
    renderStartImplemented: true
  },

  'smi2': {
    renderStartImplemented: true
  },

  'sogouad': {
    prefetch: 'https://theta.sogoucdn.com/wap/js/aw.js',
    renderStartImplemented: true
  },

  'sortable': {
    prefetch: 'https://www.googletagservices.com/tag/js/gpt.js',
    preconnect: ['https://tags-cdn.deployads.com', 'https://partner.googleadservices.com', 'https://securepubads.g.doubleclick.net', 'https://tpc.googlesyndication.com'],
    renderStartImplemented: true
  },

  'sovrn': {
    prefetch: 'https://ap.lijit.com/www/sovrn_amp/sovrn_ads.js'
  },

  'spotx': {
    preconnect: 'https://js.spotx.tv',
    renderStartImplemented: true
  },

  'sunmedia': {
    prefetch: 'https://vod.addevweb.com/sunmedia/amp/ads/sunmedia.js',
    preconnect: 'https://static.addevweb.com',
    renderStartImplemented: true
  },

  'swoop': {
    prefetch: 'https://www.swoop-amp.com/amp.js',
    preconnect: ['https://www.swpsvc.com', 'https://client.swpcld.com'],
    renderStartImplemented: true
  },

  'taboola': {},

  'teads': {
    prefetch: 'https://cdn.teads.tv/media/format/v3/teads-format.min.js',
    preconnect: ['https://cdn2.teads.tv', 'https://a.teads.tv', 'https://t.teads.tv', 'https://r.teads.tv'],
    consentHandlingOverride: true
  },

  'triplelift': {},

  'trugaze': {
    clientIdScope: '__tg_amp',
    renderStartImplemented: true
  },

  'uas': {
    prefetch: 'https://ads.pubmatic.com/AdServer/js/phoenix.js'
  },

  'uzou': {
    preconnect: ['https://speee-ad.akamaized.net'],
    renderStartImplemented: true
  },

  'unruly': {
    prefetch: 'https://video.unrulymedia.com/amp-demo/native-loader.js',
    renderStartImplemented: true
  },

  'valuecommerce': {
    prefetch: 'https://amp.valuecommerce.com/amp_bridge.js',
    preconnect: ['https://ad.jp.ap.valuecommerce.com', 'https://ad.omks.valuecommerce.com'],
    renderStartImplemented: true
  },

  'videointelligence': {
    preconnect: 'https://s.vi-serve.com',
    renderStartImplemented: true
  },

  'videonow': {
    renderStartImplemented: true
  },

  'viralize': {
    renderStartImplemented: true
  },

  'vmfive': {
    prefetch: 'https://man.vm5apis.com/dist/adn-web-sdk.js',
    preconnect: ['https://vawpro.vm5apis.com', 'https://vahfront.vm5apis.com'],
    renderStartImplemented: true
  },

  'webediads': {
    prefetch: 'https://eu1.wbdds.com/amp.min.js',
    preconnect: ['https://goutee.top', 'https://mediaathay.org.uk'],
    renderStartImplemented: true
  },

  'weborama-display': {
    prefetch: ['https://cstatic.weborama.fr/js/advertiserv2/adperf_launch_1.0.0_scrambled.js', 'https://cstatic.weborama.fr/js/advertiserv2/adperf_core_1.0.0_scrambled.js']
  },

  'widespace': {},

  'wisteria': {
    renderStartImplemented: true
  },

  'wpmedia': {
    prefetch: 'https://std.wpcdn.pl/wpjslib/wpjslib-amp.js',
    preconnect: ['https://www.wp.pl', 'https://v.wpimg.pl'],
    renderStartImplemented: true
  },

  'xlift': {
    prefetch: 'https://cdn.x-lift.jp/resources/common/xlift_amp.js',
    renderStartImplemented: true
  },

  'yahoo': {
    prefetch: 'https://s.yimg.com/os/ampad/display.js',
    preconnect: 'https://us.adserver.yahoo.com'
  },

  'yahoojp': {
    prefetch: ['https://s.yimg.jp/images/listing/tool/yads/ydn/amp/amp.js', 'https://yads.c.yimg.jp/js/yads.js'],
    preconnect: 'https://yads.yahoo.co.jp'
  },

  'yandex': {
    prefetch: 'https://yastatic.net/partner-code/loaders/context_amp.js',
    renderStartImplemented: true
  },

  'yengo': {
    renderStartImplemented: true
  },

  'yieldbot': {
    prefetch: ['https://cdn.yldbt.com/js/yieldbot.intent.amp.js', 'https://msg.yldbt.com/js/ybmsg.html'],
    preconnect: 'https://i.yldbt.com'
  },

  'yieldmo': {
    prefetch: 'https://static.yieldmo.com/ym.1.js',
    preconnect: ['https://s.yieldmo.com', 'https://ads.yieldmo.com'],
    renderStartImplemented: true
  },

  'yieldone': {
    prefetch: 'https://img.ak.impact-ad.jp/ic/pone/commonjs/yone-amp.js'
  },

  'yieldpro': {
    preconnect: 'https://creatives.yieldpro.eu',
    renderStartImplemented: true
  },

  'zedo': {
    prefetch: 'https://ss3.zedo.com/gecko/tag/Gecko.amp.min.js',
    renderStartImplemented: true
  },

  'zergnet': {},

  'zucks': {
    preconnect: ['https://j.zucks.net.zimg.jp', 'https://sh.zucks.net', 'https://k.zucks.net', 'https://static.zucks.net.zimg.jp']
  }

};

},{}],3:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExperimentUtils = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright 2018 The AMP HTML Authors. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * distributed under the License is distributed on an "AS-IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

exports.selectAndSetExperiments = selectAndSetExperiments;

var _experiments = require('../../../src/experiments');

var _trafficExperiments = require('./traffic-experiments');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Attempts to select into experiment and forces branch if selected.
 * @param {!Window} win
 * @param {!Element} element
 * @param {!Array<string>} branches
 * @param {string} expName
 * @param {boolean=} optAddExpIdToElement
 */
function selectAndSetExperiments(win, element, branches, expName, optAddExpIdToElement) {
  var experimentId = expUtils.maybeSelectExperiment(win, element, branches, expName);
  if (!!experimentId) {
    (0, _trafficExperiments.addExperimentIdToElement)(optAddExpIdToElement ? experimentId : undefined, element);
    (0, _experiments.forceExperimentBranch)(win, expName, experimentId);
  }
  return experimentId;
}

var ExperimentUtils = exports.ExperimentUtils = function () {
  function ExperimentUtils() {
    _classCallCheck(this, ExperimentUtils);
  }

  _createClass(ExperimentUtils, [{
    key: 'maybeSelectExperiment',

    /**
     * @param {!Window} win
     * @param {!Element} element
     * @param {!Array<string>} selectionBranches
     * @param {string} experimentName
     */
    value: function maybeSelectExperiment(win, element, selectionBranches, experimentName) {
      var experimentInfoMap =
      /** @type {!Object<string, !ExperimentInfo>} */{};
      experimentInfoMap[experimentName] = {
        isTrafficEligible: function isTrafficEligible() {
          return true;
        },
        branches: selectionBranches
      };
      (0, _experiments.randomlySelectUnsetExperiments)(win, experimentInfoMap);
      return (0, _experiments.getExperimentBranch)(win, experimentName);
    }
  }]);

  return ExperimentUtils;
}();

/**
 * ExperimentUtils singleton.
 * @type {!ExperimentUtils}
*/


var expUtils = new ExperimentUtils();

},{"../../../src/experiments":37,"./traffic-experiments":4}],4:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MANUAL_EXPERIMENT_ID = exports.A4aExperimentBranches = undefined;
exports.extractUrlExperimentId = extractUrlExperimentId;
exports.parseExperimentIds = parseExperimentIds;
exports.isInExperiment = isInExperiment;
exports.isInManualExperiment = isInManualExperiment;
exports.hasLaunched = hasLaunched;
exports.validateExperimentIds = validateExperimentIds;
exports.addExperimentIdToElement = addExperimentIdToElement;

var _utils = require('./utils');

var _experiments = require('../../../src/experiments');

var _services = require('../../../src/services');

var _url = require('../../../src/url');

/** @typedef {{
 *    control: string,
 *    experiment: string
 *  }} */
/**
 * Copyright 2016 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Machinery for doing "traffic-level" experiments.  That is, rather than
 * a single user choosing to opt-in to an experimental version of a module,
 * this framework allows you to do randomized, controlled experiments on all
 * AMP page loads to, for example, test relative performance or look for
 * impacts on click-throughs.
 */

var A4aExperimentBranches = exports.A4aExperimentBranches = void 0;

/** @type {string} @private */
var MANUAL_EXPERIMENT_ID = exports.MANUAL_EXPERIMENT_ID = '117152632';

/**
 * @param {!Window} win
 * @param {!Element} element Ad tag Element.
 * @return {?string} experiment extracted from page url.
 */
function extractUrlExperimentId(win, element) {
  var expParam = _services.Services.viewerForDoc(element).getParam('exp') || (0, _url.parseQueryString)(win.location.search)['exp'];
  if (!expParam) {
    return null;
  }
  // Allow for per type experiment control with Doubleclick key set for 'da'
  // and AdSense using 'aa'.  Fallback to 'a4a' if type specific is missing.
  var expKeys = [(element.getAttribute('type') || '').toLowerCase() == 'doubleclick' ? 'da' : 'aa', 'a4a'];
  var arg = void 0;
  var match = void 0;
  expKeys.forEach(function (key) {
    return arg = arg || (match = new RegExp('(?:^|,)' + key + ':(-?\\d+)').exec(expParam)) && match[1];
  });
  return arg || null;
}

/**
 * Sets of experiment IDs can be attached to Elements via attributes.  In
 * that case, we encode them as a string containing a comma-separated list
 * of experiment IDs.  This parses a comma-separated list from a string into
 * a list of ID strings.  If the input string is empty or null, this returns
 * the empty list.  This does no validity checking on the ID formats -- for
 * that, use validateExperimentIds.
 *
 * @param {?string} idString  String to parse.
 * @return {!Array<string>}  List of experiment IDs (possibly empty).
 * @see validateExperimentIds
 */
function parseExperimentIds(idString) {
  if (idString) {
    return idString.split(',');
  }
  return [];
}

/**
 * Checks whether the given element is a member of the given experiment branch.
 * I.e., whether the element's data-experiment-id attribute contains the id
 * value (possibly because the host page URL contains a 'exp=a4a:X' parameter
 * and #maybeSetExperimentFromUrl has added the appropriate EID).
 *
 * @param {!Element} element Element to check for membership in a specific
 *   experiment.
 * @param {?string} id Experiment ID to check for on `element`.
 * @return {boolean}
 */
function isInExperiment(element, id) {
  return parseExperimentIds(element.getAttribute(_utils.EXPERIMENT_ATTRIBUTE)).some(function (x) {
    return x === id;
  });
}

/**
 * Checks whether the given element is a member of the 'manually triggered
 * "experiment" branch'.  I.e., whether the element's data-experiment-id
 * attribute contains the MANUAL_EXPERIMENT_ID value (hopefully because the
 * user has manually specified 'exp=a4a:-1' in the host page URL and
 * #maybeSetExperimentFromUrl has added it).
 *
 * @param {!Element} element  Element to check for manual experiment membership.
 * @return {boolean}
 */
function isInManualExperiment(element) {
  return isInExperiment(element, MANUAL_EXPERIMENT_ID);
}

/**
 * Predicate to check whether A4A has launched yet or not.
 * If it has not yet launched, then the experimental branch serves A4A, and
 * control/filler do not. If it has not, then the filler and control branch do
 * serve A4A, and the experimental branch does not.
 *
 * @param {!Window} win  Host window for the ad.
 * @param {!Element} element  Element to check for pre-launch membership.
 * @return {boolean}
 */
function hasLaunched(win, element) {
  switch (element.getAttribute('type')) {
    case 'adsense':
      return (0, _experiments.isExperimentOn)(win, 'a4aFastFetchAdSenseLaunched');
    case 'doubleclick':
      return (0, _experiments.isExperimentOn)(win, 'a4aFastFetchDoubleclickLaunched');
    default:
      return false;
  }
}

/**
 * Checks that all string experiment IDs in a list are syntactically valid
 * (integer base 10).
 *
 * @param {!Array<string>} idList  List of experiment IDs.  Can be empty.
 * @return {boolean} Whether all list elements are valid experiment IDs.
 */
function validateExperimentIds(idList) {
  return idList.every(function (id) {
    return !isNaN(parseInt(id, 10));
  });
}

/**
 * Adds a single experimentID to an element iff it's a valid experiment ID.
 * No-ops if the experimentId is undefined.
 *
 * @param {string|undefined} experimentId  ID to add to the element.
 * @param {Element} element to add the experiment ID to.
 */
function addExperimentIdToElement(experimentId, element) {
  if (!experimentId) {
    return;
  }
  var currentEids = element.getAttribute(_utils.EXPERIMENT_ATTRIBUTE);
  if (currentEids && validateExperimentIds(parseExperimentIds(currentEids))) {
    element.setAttribute(_utils.EXPERIMENT_ATTRIBUTE, (0, _utils.mergeExperimentIds)([experimentId], currentEids));
  } else {
    element.setAttribute(_utils.EXPERIMENT_ATTRIBUTE, experimentId);
  }
}

},{"../../../src/experiments":37,"../../../src/services":64,"../../../src/url":72,"./utils":6}],5:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildUrl = buildUrl;
/**
 * Copyright 2016 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** @typedef {{name: string, value: (string|number|null)}} */
var QueryParameterDef = exports.QueryParameterDef = void 0;

/**
 * Builds a URL from query parameters, truncating to a maximum length if
 * necessary.
 * @param {string} baseUrl scheme, domain, and path for the URL.
 * @param {!Object<string,string|number|null>} queryParams query parameters for
 *     the URL.
 * @param {number} maxLength length to truncate the URL to if necessary.
 * @param {?QueryParameterDef=} opt_truncationQueryParam query parameter to
 *     append to the URL iff any query parameters were truncated.
 * @return {string} the fully constructed URL.
 */
function buildUrl(baseUrl, queryParams, maxLength, opt_truncationQueryParam) {
  var encodedParams = [];
  var encodedTruncationParam = opt_truncationQueryParam && !(opt_truncationQueryParam.value == null || opt_truncationQueryParam.value === '') ? encodeURIComponent(opt_truncationQueryParam.name) + '=' + encodeURIComponent(String(opt_truncationQueryParam.value)) : null;
  var capacity = maxLength - baseUrl.length;
  if (encodedTruncationParam) {
    capacity -= encodedTruncationParam.length + 1;
  }
  var keys = Object.keys(queryParams);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var value = queryParams[key];
    if (value == null || value === '') {
      continue;
    }
    var encodedNameAndSep = encodeURIComponent(key) + '=';
    var encodedValue = encodeURIComponent(String(value));
    var fullLength = encodedNameAndSep.length + encodedValue.length + 1;
    if (fullLength > capacity) {
      var truncatedValue = encodedValue.substr(0, capacity - encodedNameAndSep.length - 1)
      // Don't end with a partially truncated escape sequence
      .replace(/%\w?$/, '');
      if (truncatedValue) {
        encodedParams.push(encodedNameAndSep + truncatedValue);
      }
      if (encodedTruncationParam) {
        encodedParams.push(encodedTruncationParam);
      }
      break;
    }
    encodedParams.push(encodedNameAndSep + encodedValue);
    capacity -= fullLength;
  }
  if (!encodedParams.length) {
    return baseUrl;
  }
  return baseUrl + '?' + encodedParams.join('&');
}

},{}],6:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IdentityToken = exports.TRUNCATION_PARAM = exports.NameframeExperimentConfig = exports.AmpAnalyticsConfigDef = exports.EXPERIMENT_ATTRIBUTE = exports.QQID_HEADER = exports.ValidAdContainerTypes = undefined;
exports.isGoogleAdsA4AValidEnvironment = isGoogleAdsA4AValidEnvironment;
exports.supportsNativeCrypto = supportsNativeCrypto;
exports.isReportingEnabled = isReportingEnabled;
exports.googleBlockParameters = googleBlockParameters;
exports.groupAmpAdsByType = groupAmpAdsByType;
exports.googlePageParameters = googlePageParameters;
exports.googleAdUrl = googleAdUrl;
exports.truncAndTimeUrl = truncAndTimeUrl;
exports.extractHost = extractHost;
exports.getCorrelator = getCorrelator;
exports.additionalDimensions = additionalDimensions;
exports.getCsiAmpAnalyticsConfig = getCsiAmpAnalyticsConfig;
exports.getCsiAmpAnalyticsVariables = getCsiAmpAnalyticsVariables;
exports.extractAmpAnalyticsConfig = extractAmpAnalyticsConfig;
exports.mergeExperimentIds = mergeExperimentIds;
exports.addCsiSignalsToAmpAnalyticsConfig = addCsiSignalsToAmpAnalyticsConfig;
exports.getEnclosingContainerTypes = getEnclosingContainerTypes;
exports.maybeAppendErrorParameter = maybeAppendErrorParameter;
exports.getBinaryTypeNumericalCode = getBinaryTypeNumericalCode;
exports.getIdentityToken = getIdentityToken;
exports.getIdentityTokenRequestUrl = getIdentityTokenRequestUrl;
exports.isCdnProxy = isCdnProxy;
exports.setNameframeExperimentConfigs = setNameframeExperimentConfigs;
exports.getAmpRuntimeTypeParameter = getAmpRuntimeTypeParameter;

var _domFingerprint = require('../../../src/utils/dom-fingerprint');

var _services = require('../../../src/services');

var _urlBuilder = require('./url-builder');

var _log = require('../../../src/log');

var _object = require('../../../src/utils/object');

var _experiments = require('../../../src/experiments');

var _mode = require('../../../src/mode');

var _adCid = require('../../../src/ad-cid');

var _variableSource = require('../../../src/service/variable-source');

var _json = require('../../../src/json');

var _dom = require('../../../src/dom');

/** @type {string}  */
/**
 * Copyright 2016 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var AMP_ANALYTICS_HEADER = 'X-AmpAnalytics';

/** @const {number} */
var MAX_URL_LENGTH = 16384;

/** @enum {string} */
var AmpAdImplementation = {
  AMP_AD_XHR_TO_IFRAME: '2',
  AMP_AD_XHR_TO_IFRAME_OR_AMP: '3',
  AMP_AD_IFRAME_GET: '5'
};

/** @const {!Object} */
var ValidAdContainerTypes = exports.ValidAdContainerTypes = {
  'AMP-CAROUSEL': 'ac',
  'AMP-FX-FLYING-CARPET': 'fc',
  'AMP-LIGHTBOX': 'lb',
  'AMP-STICKY-AD': 'sa'
};

/**
 * See `VisibilityState` enum.
 * @const {!Object<string, string>}
 */
var visibilityStateCodes = {
  'visible': '1',
  'hidden': '2',
  'prerender': '3',
  'unloaded': '5'
};

/** @const {string} */
var QQID_HEADER = exports.QQID_HEADER = 'X-QQID';

/**
 * Element attribute that stores experiment IDs.
 *
 * Note: This attribute should be used only for tracking experimental
 * implementations of AMP tags, e.g., by AMPHTML implementors.  It should not be
 * added by a publisher page.
 *
 * @const {string}
 * @visibleForTesting
 */
var EXPERIMENT_ATTRIBUTE = exports.EXPERIMENT_ATTRIBUTE = 'data-experiment-id';

/** @typedef {{urls: !Array<string>}}
 */
var AmpAnalyticsConfigDef = exports.AmpAnalyticsConfigDef = void 0;

/**
 * @typedef {{instantLoad: boolean, writeInBody: boolean}}
 */
var NameframeExperimentConfig = exports.NameframeExperimentConfig = void 0;

/**
 * @const {!./url-builder.QueryParameterDef}
 * @visibleForTesting
 */
var TRUNCATION_PARAM = exports.TRUNCATION_PARAM = { name: 'trunc', value: '1' };

/** @const {Object} */
var CDN_PROXY_REGEXP = /^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org((\/.*)|($))+/;

/**
 * Returns the value of navigation start using the performance API or 0 if not
 * supported by the browser.
 * Feature detection is used for safety on browsers that do not support the
 * performance API.
 * @param {!Window} win
 * @return {number}
 */
function getNavStart(win) {
  return win['performance'] && win['performance']['timing'] && win['performance']['timing']['navigationStart'] || 0;
}

/**
 * Check whether Google Ads supports the A4A rendering pathway is valid for the
 * environment by ensuring native crypto support and page originated in the
 * {@code cdn.ampproject.org} CDN <em>or</em> we must be running in local
 * dev mode.
 *
 * @param {!Window} win  Host window for the ad.
 * @return {boolean}  Whether Google Ads should attempt to render via the A4A
 *   pathway.
 */
function isGoogleAdsA4AValidEnvironment(win) {
  return supportsNativeCrypto(win) && (!!isCdnProxy(win) || (0, _mode.getMode)(win).localDev || (0, _mode.getMode)(win).test);
}

/**
 * Checks whether native crypto is supported for win.
 * @param {!Window} win  Host window for the ad.
 * @return {boolean} Whether native crypto is supported.
 */
function supportsNativeCrypto(win) {
  return win.crypto && (win.crypto.subtle || win.crypto.webkitSubtle);
}

/**
 * @param {!AMP.BaseElement} ampElement The element on whose lifecycle this
 *    reporter will be reporting.
 * @return {boolean} whether reporting is enabled for this element
 */
function isReportingEnabled(ampElement) {
  // Carve-outs: We only want to enable profiling pingbacks when:
  //   - The ad is from one of the Google networks (AdSense or Doubleclick).
  //   - The ad slot is in the A4A-vs-3p amp-ad control branch (either via
  //     internal, client-side selection or via external, Google Search
  //     selection).
  //   - We haven't turned off profiling via the rate controls in
  //     build-system/global-config/{canary,prod}-config.json
  // If any of those fail, we use the `BaseLifecycleReporter`, which is a
  // a no-op (sends no pings).
  var type = ampElement.element.getAttribute('type');
  var win = ampElement.win;
  // In local dev mode, neither the canary nor prod config files is available,
  // so manually set the profiling rate, for testing/dev.

  if ((0, _mode.getMode)(ampElement.win).localDev && !(0, _mode.getMode)(ampElement.win).test) {
    (0, _experiments.toggleExperiment)(win, 'a4aProfilingRate', true, true);
  }
  return (type == 'doubleclick' || type == 'adsense') && (0, _experiments.isExperimentOn)(win, 'a4aProfilingRate');
}

/**
 * Has side-effect of incrementing ifi counter on window.
 * @param {!../../../extensions/amp-a4a/0.1/amp-a4a.AmpA4A} a4a
 * @param {!Array<string>=} opt_experimentIds Any experiments IDs (in addition
 *     to those specified on the ad element) that should be included in the
 *     request.
 * @return {!Object<string,null|number|string>} block level parameters
 */
function googleBlockParameters(a4a, opt_experimentIds) {
  var adElement = a4a.element,
      win = a4a.win;

  var slotRect = a4a.getPageLayoutBox();
  var iframeDepth = iframeNestingDepth(win);
  var enclosingContainers = getEnclosingContainerTypes(adElement);
  var eids = adElement.getAttribute('data-experiment-id');
  if (opt_experimentIds) {
    eids = mergeExperimentIds(opt_experimentIds, eids);
  }
  return {
    'adf': _domFingerprint.DomFingerprint.generate(adElement),
    'nhd': iframeDepth,
    'eid': eids,
    'adx': slotRect.left,
    'ady': slotRect.top,
    'oid': '2',
    'act': enclosingContainers.length ? enclosingContainers.join() : null
  };
}

/**
 * @param {!Window} win
 * @param {string} type matching typing attribute.
 * @param {function(!Element):string} groupFn
 * @return {!Promise<!Object<string,!Array<!Promise<!../../../src/base-element.BaseElement>>>>}
 */
function groupAmpAdsByType(win, type, groupFn) {
  // Look for amp-ad elements of correct type or those contained within
  // standard container type.  Note that display none containers will not be
  // included as they will never be measured.
  // TODO(keithwrightbos): what about slots that become measured due to removal
  // of display none (e.g. user resizes viewport and media selector makes
  // visible).
  var ampAdSelector = function ampAdSelector(r) {
    return r.element. /*OK*/querySelector('amp-ad[type=' + type + ']');
  };
  return _services.Services.resourcesForDoc(win.document).getMeasuredResources(win, function (r) {
    var isAmpAdType = r.element.tagName == 'AMP-AD' && r.element.getAttribute('type') == type;
    if (isAmpAdType) {
      return true;
    }
    var isAmpAdContainerElement = Object.keys(ValidAdContainerTypes).includes(r.element.tagName) && !!ampAdSelector(r);
    return isAmpAdContainerElement;
  })
  // Need to wait on any contained element resolution followed by build
  // of child ad.
  .then(function (resources) {
    return Promise.all(resources.map(function (resource) {
      if (resource.element.tagName == 'AMP-AD') {
        return resource.element;
      }
      // Must be container element so need to wait for child amp-ad to
      // be upgraded.
      return (0, _dom.whenUpgradedToCustomElement)((0, _log.dev)().assertElement(ampAdSelector(resource)));
    }));
  })
  // Group by networkId.
  .then(function (elements) {
    return elements.reduce(function (result, element) {
      var groupId = groupFn(element);
      (result[groupId] || (result[groupId] = [])).push(element.getImpl());
      return result;
    }, {});
  });
}

/**
 * @param {! ../../../extensions/amp-a4a/0.1/amp-a4a.AmpA4A} a4a
 * @param {number} startTime
 * @return {!Promise<!Object<string,null|number|string>>}
 */
function googlePageParameters(a4a, startTime) {
  var win = a4a.win;

  var ampDoc = a4a.getAmpDoc();
  return Promise.all([(0, _adCid.getOrCreateAdCid)(ampDoc, 'AMP_ECID_GOOGLE', '_ga'), _services.Services.viewerForDoc(ampDoc).getReferrerUrl()]).then(function (promiseResults) {
    var clientId = promiseResults[0];
    var documentInfo = _services.Services.documentInfoForDoc(ampDoc);
    // Read by GPT for GA/GPT integration.
    win.gaGlobal = win.gaGlobal || { cid: clientId, hid: documentInfo.pageViewId };
    var screen = win.screen;

    var viewport = _services.Services.viewportForDoc(ampDoc);
    var viewportRect = viewport.getRect();
    var viewportSize = viewport.getSize();
    var visibilityState = _services.Services.viewerForDoc(ampDoc).getVisibilityState();
    return {
      'is_amp': a4a.isXhrAllowed() ? AmpAdImplementation.AMP_AD_XHR_TO_IFRAME_OR_AMP : AmpAdImplementation.AMP_AD_IFRAME_GET,
      'amp_v': '1537224222059',
      'd_imp': '1',
      'c': getCorrelator(win, ampDoc, clientId),
      'ga_cid': win.gaGlobal.cid || null,
      'ga_hid': win.gaGlobal.hid || null,
      'dt': startTime,
      'biw': viewportRect.width,
      'bih': viewportRect.height,
      'u_aw': screen ? screen.availWidth : null,
      'u_ah': screen ? screen.availHeight : null,
      'u_cd': screen ? screen.colorDepth : null,
      'u_w': screen ? screen.width : null,
      'u_h': screen ? screen.height : null,
      'u_tz': -new Date().getTimezoneOffset(),
      'u_his': getHistoryLength(win),
      'isw': win != win.top ? viewportSize.width : null,
      'ish': win != win.top ? viewportSize.height : null,
      'art': getAmpRuntimeTypeParameter(win),
      'vis': visibilityStateCodes[visibilityState] || '0',
      'scr_x': viewport.getScrollLeft(),
      'scr_y': viewport.getScrollTop(),
      'bc': getBrowserCapabilitiesBitmap(win) || null,
      'debug_experiment_id': (/(?:#|,)deid=([\d,]+)/i.exec(win.location.hash) || [])[1] || null,
      'url': documentInfo.canonicalUrl,
      'top': win != win.top ? topWindowUrlOrDomain(win) : null,
      'loc': win.location.href == documentInfo.canonicalUrl ? null : win.location.href,
      'ref': promiseResults[1] || null
    };
  });
}

/**
 * @param {!../../../extensions/amp-a4a/0.1/amp-a4a.AmpA4A} a4a
 * @param {string} baseUrl
 * @param {number} startTime
 * @param {!Object<string,null|number|string>} parameters
 * @param {!Array<string>=} opt_experimentIds Any experiments IDs (in addition
 *     to those specified on the ad element) that should be included in the
 *     request.
 * @return {!Promise<string>}
 */
function googleAdUrl(a4a, baseUrl, startTime, parameters, opt_experimentIds) {
  // TODO: Maybe add checks in case these promises fail.
  var blockLevelParameters = googleBlockParameters(a4a, opt_experimentIds);
  return googlePageParameters(a4a, startTime).then(function (pageLevelParameters) {
    Object.assign(parameters, blockLevelParameters, pageLevelParameters);
    return truncAndTimeUrl(baseUrl, parameters, startTime);
  });
}

/**
 * @param {string} baseUrl
 * @param {!Object<string,null|number|string>} parameters
 * @param {number} startTime
 * @return {string}
 */
function truncAndTimeUrl(baseUrl, parameters, startTime) {
  return (0, _urlBuilder.buildUrl)(baseUrl, parameters, MAX_URL_LENGTH - 10, TRUNCATION_PARAM) + '&dtd=' + elapsedTimeWithCeiling(Date.now(), startTime);
}

/**
 * @param {!Window} win
 * @return {number}
 */
function iframeNestingDepth(win) {
  var w = win;
  var depth = 0;
  while (w != w.parent && depth < 100) {
    w = w.parent;
    depth++;
  }
  (0, _log.dev)().assert(w == win.top);
  return depth;
}

/**
 * @param {!Window} win
 * @return {number}
 */
function getHistoryLength(win) {
  // We have seen cases where accessing history length causes errors.
  try {
    return win.history.length;
  } catch (e) {
    return 0;
  }
}

/**
 * @param {string} url
 * @return {string} hostname portion of url
 * @visibleForTesting
 */
function extractHost(url) {
  return (/^(?:https?:\/\/)?([^\/\?:]+)/i.exec(url) || [])[1] || url;
}

/**
 * @param {!Window} win
 * @return {?string}
 */
function topWindowUrlOrDomain(win) {
  var ancestorOrigins = win.location.ancestorOrigins;

  if (ancestorOrigins) {
    var origin = win.location.origin;

    var topOrigin = ancestorOrigins[ancestorOrigins.length - 1];
    if (origin == topOrigin) {
      return win.top.location.hostname;
    }
    var secondFromTop = secondWindowFromTop(win);
    if (secondFromTop == win || origin == ancestorOrigins[ancestorOrigins.length - 2]) {
      return extractHost(secondFromTop. /*OK*/document.referrer);
    }
    return extractHost(topOrigin);
  } else {
    try {
      return win.top.location.hostname;
    } catch (e) {}
    var _secondFromTop = secondWindowFromTop(win);
    try {
      return extractHost(_secondFromTop. /*OK*/document.referrer);
    } catch (e) {}
    return null;
  }
}

/**
 * @param {!Window} win
 * @return {!Window}
 */
function secondWindowFromTop(win) {
  var secondFromTop = win;
  var depth = 0;
  while (secondFromTop.parent != secondFromTop.parent.parent && depth < 100) {
    secondFromTop = secondFromTop.parent;
    depth++;
  }
  (0, _log.dev)().assert(secondFromTop.parent == win.top);
  return secondFromTop;
}

/**
 * @param {number} time
 * @param {number} start
 * @return {(number|string)}
 */
function elapsedTimeWithCeiling(time, start) {
  var duration = time - start;
  if (duration >= 1e6) {
    return 'M';
  } else if (duration >= 0) {
    return duration;
  }
  return '-M';
}

/**
 * `nodeOrDoc` must be passed for correct behavior in shadow AMP (PWA) case.
 * @param {!Window} win
 * @param {!Element|!../../../src/service/ampdoc-impl.AmpDoc} elementOrAmpDoc
 * @param {string=} opt_cid
 * @return {number} The correlator.
 */
function getCorrelator(win, elementOrAmpDoc, opt_cid) {
  if (!win.ampAdPageCorrelator) {
    win.ampAdPageCorrelator = (0, _experiments.isExperimentOn)(win, 'exp-new-correlator') ? Math.floor(4503599627370496 * Math.random()) : makeCorrelator(_services.Services.documentInfoForDoc(elementOrAmpDoc).pageViewId, opt_cid);
  }
  return win.ampAdPageCorrelator;
}

/**
 * @param {string} pageViewId
 * @param {string=} opt_clientId
 * @return {number}
 */
function makeCorrelator(pageViewId, opt_clientId) {
  var pageViewIdNumeric = Number(pageViewId || 0);
  if (opt_clientId) {
    return pageViewIdNumeric + opt_clientId.replace(/\D/g, '') % 1e6 * 1e6;
  } else {
    // In this case, pageViewIdNumeric is only 4 digits => too low entropy
    // to be useful as a page correlator.  So synthesize one from scratch.
    // 4503599627370496 == 2^52.  The guaranteed range of JS Number is at least
    // 2^53 - 1.
    return Math.floor(4503599627370496 * Math.random());
  }
}

/**
 * Collect additional dimensions for the brdim parameter.
 * @param {!Window} win The window for which we read the browser dimensions.
 * @param {{width: number, height: number}|null} viewportSize
 * @return {string}
 * @visibleForTesting
 */
function additionalDimensions(win, viewportSize) {
  // Some browsers throw errors on some of these.
  var screenX = void 0,
      screenY = void 0,
      outerWidth = void 0,
      outerHeight = void 0,
      innerWidth = void 0,
      innerHeight = void 0;
  try {
    screenX = win.screenX;
    screenY = win.screenY;
  } catch (e) {}
  try {
    outerWidth = win.outerWidth;
    outerHeight = win.outerHeight;
  } catch (e) {}
  try {
    innerWidth = viewportSize.width;
    innerHeight = viewportSize.height;
  } catch (e) {}
  return [win.screenLeft, win.screenTop, screenX, screenY, win.screen ? win.screen.availWidth : undefined, win.screen ? win.screen.availTop : undefined, outerWidth, outerHeight, innerWidth, innerHeight].join();
}

/**
 * Returns amp-analytics config for a new CSI trigger.
 * @param {string} on The name of the analytics trigger.
 * @param {!Object<string, string>} params Params to be included on the ping.
 * @return {!JsonObject}
 */
function csiTrigger(on, params) {
  return (0, _object.dict)({
    'on': on,
    'request': 'csi',
    'sampleSpec': {
      // Pings are sampled on a per-pageview basis. A prefix is included in the
      // sampleOn spec so that the hash is orthogonal to any other sampling in
      // amp.
      'sampleOn': 'a4a-csi-${pageViewId}',
      'threshold': 1 // 1% sample
    },
    'selector': 'amp-ad',
    'selectionMethod': 'closest',
    'extraUrlParams': params
  });
}

/**
 * Returns amp-analytics config for Google ads network impls.
 * @return {!JsonObject}
 */
function getCsiAmpAnalyticsConfig() {
  return (0, _object.dict)({
    'requests': {
      'csi': 'https://csi.gstatic.com/csi?'
    },
    'transport': { 'xhrpost': false },
    'triggers': {
      'adRequestStart': csiTrigger('ad-request-start', {
        // afs => ad fetch start
        'met.a4a': 'afs_lvt.${viewerLastVisibleTime}~afs.${time}'
      }),
      'adResponseEnd': csiTrigger('ad-response-end', {
        // afe => ad fetch end
        'met.a4a': 'afe.${time}'
      }),
      'adRenderStart': csiTrigger('ad-render-start', {
        // ast => ad schedule time
        // ars => ad render start
        'met.a4a': 'ast.${scheduleTime}~ars_lvt.${viewerLastVisibleTime}~ars.${time}',
        'qqid': '${qqid}'
      }),
      'adIframeLoaded': csiTrigger('ad-iframe-loaded', {
        // ail => ad iframe loaded
        'met.a4a': 'ail.${time}'
      })
    },
    'extraUrlParams': {
      's': 'ampad',
      'ctx': '2',
      'c': '${correlator}',
      'slotId': '${slotId}',
      // Time that the beacon was actually sent. Note that there can be delays
      // between the time at which the event is fired and when ${nowMs} is
      // evaluated when the URL is built by amp-analytics.
      'puid': '${requestCount}~${timestamp}'
    }
  });
}

/**
 * Returns variables to be included in the amp-analytics event for A4A.
 * @param {string} analyticsTrigger The name of the analytics trigger.
 * @param {!AMP.BaseElement} a4a The A4A element.
 * @param {?string} qqid The query ID or null if the query ID has not been set
 *     yet.
 */
function getCsiAmpAnalyticsVariables(analyticsTrigger, a4a, qqid) {
  var win = a4a.win;

  var ampdoc = a4a.getAmpDoc();
  var viewer = _services.Services.viewerForDoc(ampdoc);
  var navStart = getNavStart(win);
  var vars = {
    'correlator': getCorrelator(win, ampdoc),
    'slotId': a4a.element.getAttribute('data-amp-slot-index'),
    'viewerLastVisibleTime': viewer.getLastVisibleTime() - navStart
  };
  if (qqid) {
    vars['qqid'] = qqid;
  }
  if (analyticsTrigger == 'ad-render-start') {
    vars['scheduleTime'] = a4a.element.layoutScheduleTime - navStart;
  }
  return vars;
}

/**
 * Extracts configuration used to build amp-analytics element for active view.
 *
 * @param {!../../../extensions/amp-a4a/0.1/amp-a4a.AmpA4A} a4a
 * @param {!../../../src/utils/xhr-utils.FetchResponseHeaders} responseHeaders
 *   XHR service FetchResponseHeaders object containing the response
 *   headers.
 * @return {?JsonObject} config or null if invalid/missing.
 */
function extractAmpAnalyticsConfig(a4a, responseHeaders) {
  if (!responseHeaders.has(AMP_ANALYTICS_HEADER)) {
    return null;
  }
  try {
    var analyticsConfig = (0, _json.parseJson)(responseHeaders.get(AMP_ANALYTICS_HEADER));
    (0, _log.dev)().assert(Array.isArray(analyticsConfig['url']));
    var urls = analyticsConfig['url'];
    if (!urls.length) {
      return null;
    }

    var config = /** @type {JsonObject}*/{
      'transport': { 'beacon': false, 'xhrpost': false },
      'triggers': {
        'continuousVisible': {
          'on': 'visible',
          'visibilitySpec': {
            'selector': 'amp-ad',
            'selectionMethod': 'closest',
            'visiblePercentageMin': 50,
            'continuousTimeMin': 1000
          }
        }
      }
    };

    // Discover and build visibility endpoints.
    var requests = (0, _object.dict)();
    for (var idx = 1; idx <= urls.length; idx++) {
      // TODO: Ensure url is valid and not freeform JS?
      requests['visibility' + idx] = '' + urls[idx - 1];
    }
    // Security review needed here.
    config['requests'] = requests;
    config['triggers']['continuousVisible']['request'] = Object.keys(requests);
    return config;
  } catch (err) {
    (0, _log.dev)().error('AMP-A4A', 'Invalid analytics', err, responseHeaders.get(AMP_ANALYTICS_HEADER));
  }
  return null;
}

/**
 * Add new experiment IDs to a (possibly empty) existing set of experiment IDs.
 * The {@code currentIdString} may be {@code null} or {@code ''}, but if it is
 * populated, it must contain a comma-separated list of integer experiment IDs
 * (per {@code parseExperimentIds()}).  Returns the new set of IDs, encoded
 * as a comma-separated list.  Does not de-duplicate ID entries.
 *
 * @param {!Array<string>} newIds IDs to merge in. Should contain stringified
 *     integer (base 10) experiment IDs.
 * @param {?string} currentIdString  If present, a string containing a
 *   comma-separated list of integer experiment IDs.
 * @return {string}  New experiment list string, including newId iff it is
 *   a valid (integer) experiment ID.
 * @see parseExperimentIds, validateExperimentIds
 */
function mergeExperimentIds(newIds, currentIdString) {
  var newIdString = newIds.filter(function (newId) {
    return Number(newId);
  }).join(',');
  currentIdString = currentIdString || '';
  return currentIdString + (currentIdString && newIdString ? ',' : '') + newIdString;
}

/**
 * Adds two CSI signals to the given amp-analytics configuration object, one
 * for render-start, and one for ini-load.
 *
 * @param {!Window} win
 * @param {!Element} element The ad slot.
 * @param {!JsonObject} config The original config object.
 * @param {?string} qqid
 * @param {boolean} isVerifiedAmpCreative
 * @return {?JsonObject} config or null if invalid/missing.
 */
function addCsiSignalsToAmpAnalyticsConfig(win, element, config, qqid, isVerifiedAmpCreative) {
  // Add CSI pingbacks.
  var correlator = getCorrelator(win, element);
  var slotId = Number(element.getAttribute('data-amp-slot-index'));
  var eids = encodeURIComponent(element.getAttribute(EXPERIMENT_ATTRIBUTE));
  var adType = element.getAttribute('type');
  var initTime = Number((0, _variableSource.getTimingDataSync)(win, 'navigationStart') || Date.now());
  var deltaTime = Math.round(win.performance && win.performance.now ? win.performance.now() : Date.now() - initTime);
  var baseCsiUrl = 'https://csi.gstatic.com/csi?s=a4a' + ('&c=' + correlator + '&slotId=' + slotId + '&qqid.' + slotId + '=' + qqid) + ('&dt=' + initTime) + (eids != 'null' ? '&e.' + slotId + '=' + eids : '') + ('&rls=1537224222059&adt.' + slotId + '=' + adType);
  var isAmpSuffix = isVerifiedAmpCreative ? 'Friendly' : 'CrossDomain';
  config['triggers']['continuousVisibleIniLoad'] = {
    'on': 'ini-load',
    'selector': 'amp-ad',
    'selectionMethod': 'closest',
    'request': 'iniLoadCsi'
  };
  config['triggers']['continuousVisibleRenderStart'] = {
    'on': 'render-start',
    'selector': 'amp-ad',
    'selectionMethod': 'closest',
    'request': 'renderStartCsi'
  };
  config['requests']['iniLoadCsi'] = baseCsiUrl + ('&met.a4a.' + slotId + '=iniLoadCsi' + isAmpSuffix + '.' + deltaTime);
  config['requests']['renderStartCsi'] = baseCsiUrl + ('&met.a4a.' + slotId + '=renderStartCsi' + isAmpSuffix + '.' + deltaTime);

  // Add CSI ping for visibility.
  config['requests']['visibilityCsi'] = baseCsiUrl + ('&met.a4a.' + slotId + '=visibilityCsi.' + deltaTime);
  config['triggers']['continuousVisible']['request'].push('visibilityCsi');
  return config;
}

/**
 * Returns an array of two-letter codes representing the amp-ad containers
 * enclosing the given ad element.
 *
 * @param {!Element} adElement
 * @return {!Array<string>}
 */
function getEnclosingContainerTypes(adElement) {
  var containerTypeSet = {};
  for (var el = adElement.parentElement, counter = 0; el && counter < 20; el = el.parentElement, counter++) {
    var tagName = el.tagName.toUpperCase();
    if (ValidAdContainerTypes[tagName]) {
      containerTypeSet[ValidAdContainerTypes[tagName]] = true;
    }
  }
  return Object.keys(containerTypeSet);
}

/**
 * Appends parameter to ad request indicating error state so long as error
 * parameter is not already present or url has been truncated.
 * @param {string} adUrl used for network request
 * @param {string} parameterValue to be appended
 * @return {string|undefined} potentially modified url, undefined
 */
function maybeAppendErrorParameter(adUrl, parameterValue) {
  (0, _log.dev)().assert(!!adUrl && !!parameterValue);
  // Add parameter indicating error so long as the url has not already been
  // truncated and error parameter is not already present.  Note that we assume
  // that added, error parameter length will be less than truncation parameter
  // so adding will not cause length to exceed maximum.
  if (new RegExp('[?|&](' + encodeURIComponent(TRUNCATION_PARAM.name) + '=' + (encodeURIComponent(String(TRUNCATION_PARAM.value)) + '|aet=[^&]*)$')).test(adUrl)) {
    return;
  }
  var modifiedAdUrl = adUrl + ('&aet=' + parameterValue);
  (0, _log.dev)().assert(modifiedAdUrl.length <= MAX_URL_LENGTH);
  return modifiedAdUrl;
}

/**
 * Returns a numerical code representing the binary type.
 * @param {string} type
 * @return {?string}
 */
function getBinaryTypeNumericalCode(type) {
  return {
    'production': '0',
    'control': '1',
    'canary': '2'
  }[type] || null;
}

/** @const {!RegExp} */
var IDENTITY_DOMAIN_REGEXP_ = /\.google\.(?:com?\.)?[a-z]{2,3}$/;

/** @typedef {{
      token: (string|undefined),
      jar: (string|undefined),
      pucrd: (string|undefined),
      freshLifetimeSecs: (number|undefined),
      validLifetimeSecs: (number|undefined),
      fetchTimeMs: (number|undefined)
   }} */
var IdentityToken = exports.IdentityToken = void 0;

/**
 * @param {!Window} win
 * @param {!Element|!../../../src/service/ampdoc-impl.AmpDoc} elementOrAmpDoc
 * @return {!Promise<!IdentityToken>}
 */
function getIdentityToken(win, elementOrAmpDoc) {
  win['goog_identity_prom'] = win['goog_identity_prom'] || executeIdentityTokenFetch(win, elementOrAmpDoc);
  return (/** @type {!Promise<!IdentityToken>} */win['goog_identity_prom']
  );
}

/**
 * @param {!Window} win
 * @param {!Element|!../../../src/service/ampdoc-impl.AmpDoc} elementOrAmpDoc
 * @param {number=} redirectsRemaining (default 1)
 * @param {string=} domain
 * @param {number=} startTime
 * @return {!Promise<!IdentityToken>}
 */
function executeIdentityTokenFetch(win, elementOrAmpDoc) {
  var redirectsRemaining = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var domain = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
  var startTime = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : Date.now();

  var url = getIdentityTokenRequestUrl(win, elementOrAmpDoc, domain);
  return _services.Services.xhrFor(win).fetchJson(url, {
    mode: 'cors',
    method: 'GET',
    ampCors: false,
    credentials: 'include'
  }).then(function (res) {
    return res.json();
  }).then(function (obj) {
    var token = obj['newToken'];
    var jar = obj['1p_jar'] || '';
    var pucrd = obj['pucrd'] || '';
    var freshLifetimeSecs = parseInt(obj['freshLifetimeSecs'] || '', 10);
    var validLifetimeSecs = parseInt(obj['validLifetimeSecs'] || '', 10);
    var altDomain = obj['altDomain'];
    var fetchTimeMs = Date.now() - startTime;
    if (IDENTITY_DOMAIN_REGEXP_.test(altDomain)) {
      if (!redirectsRemaining--) {
        // Max redirects, log?
        return { fetchTimeMs: fetchTimeMs };
      }
      return executeIdentityTokenFetch(win, elementOrAmpDoc, redirectsRemaining, altDomain, startTime);
    } else if (freshLifetimeSecs > 0 && validLifetimeSecs > 0 && typeof token == 'string') {
      return { token: token, jar: jar, pucrd: pucrd, freshLifetimeSecs: freshLifetimeSecs, validLifetimeSecs: validLifetimeSecs,
        fetchTimeMs: fetchTimeMs };
    }
    // returning empty
    return { fetchTimeMs: fetchTimeMs };
  }).catch(function (unusedErr) {
    // TODO log?
    return {};
  });
}

/**
 * @param {!Window} win
 * @param {!Element|!../../../src/service/ampdoc-impl.AmpDoc} elementOrAmpDoc
 * @param {string=} domain
 * @return {string} url
 * @visibleForTesting
 */
function getIdentityTokenRequestUrl(win, elementOrAmpDoc) {
  var domain = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;

  if (!domain && win != win.top && win.location.ancestorOrigins) {
    var matches = IDENTITY_DOMAIN_REGEXP_.exec(win.location.ancestorOrigins[win.location.ancestorOrigins.length - 1]);
    domain = matches && matches[0] || undefined;
  }
  domain = domain || '.google.com';
  var canonical = extractHost(_services.Services.documentInfoForDoc(elementOrAmpDoc).canonicalUrl);
  return 'https://adservice' + domain + '/adsid/integrator.json?domain=' + canonical;
}

/**
 * Returns whether we are running on the AMP CDN.
 * @param {!Window} win
 * @return {boolean}
 */
function isCdnProxy(win) {
  return CDN_PROXY_REGEXP.test(win.location.origin);
}

/**
 * Populates the fields of the given Nameframe experiment config object.
 * @param {!../../../src/utils/xhr-utils.FetchResponseHeaders} headers
 * @param {!NameframeExperimentConfig} nameframeConfig
 */
function setNameframeExperimentConfigs(headers, nameframeConfig) {
  var nameframeExperimentHeader = headers.get('amp-nameframe-exp');
  if (nameframeExperimentHeader) {
    nameframeExperimentHeader.split(';').forEach(function (config) {
      if (config == 'instantLoad' || config == 'writeInBody') {
        nameframeConfig[config] = true;
      }
    });
  }
}

/**
 * Enum for browser capabilities. NOTE: Since JS is 32-bit, do not add anymore
 * than 32 capabilities to this enum.
 * @enum {number}
 */
var Capability = {
  SVG_SUPPORTED: 1 << 0,
  SANDBOXING_ALLOW_TOP_NAVIGATION_BY_USER_ACTIVATION_SUPPORTED: 1 << 1,
  SANDBOXING_ALLOW_POPUPS_TO_ESCAPE_SANDBOX_SUPPORTED: 1 << 2
};

/**
 * Returns a bitmap representing what features are supported by this browser.
 * @param {!Window} win
 * @return {number}
 */
function getBrowserCapabilitiesBitmap(win) {
  var browserCapabilities = 0;
  var doc = win.document;
  if (win.SVGElement && doc.createElementNS) {
    browserCapabilities |= Capability.SVG_SUPPORTED;
  }
  var iframeEl = doc.createElement('iframe');
  if (iframeEl.sandbox && iframeEl.sandbox.supports) {
    if (iframeEl.sandbox.supports('allow-top-navigation-by-user-activation')) {
      browserCapabilities |= Capability.SANDBOXING_ALLOW_TOP_NAVIGATION_BY_USER_ACTIVATION_SUPPORTED;
    }
    if (iframeEl.sandbox.supports('allow-popups-to-escape-sandbox')) {
      browserCapabilities |= Capability.SANDBOXING_ALLOW_POPUPS_TO_ESCAPE_SANDBOX_SUPPORTED;
    }
  }
  return browserCapabilities;
}

/**
 * Returns an enum value representing the AMP binary type, or null if this is a
 * canonical page.
 * @param {!Window} win
 * @return {?string} The binary type enum.
 * @visibleForTesting
 */
function getAmpRuntimeTypeParameter(win) {
  var art = getBinaryTypeNumericalCode((0, _experiments.getBinaryType)(win));
  return isCdnProxy(win) && art != '0' ? art : null;
}

},{"../../../src/ad-cid":22,"../../../src/dom":32,"../../../src/experiments":37,"../../../src/json":43,"../../../src/log":46,"../../../src/mode":48,"../../../src/service/variable-source":63,"../../../src/services":64,"../../../src/utils/dom-fingerprint":75,"../../../src/utils/object":78,"./url-builder":5}],7:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AdSenseAmpAutoAdsHoldoutBranches = exports.ADSENSE_AMP_AUTO_ADS_HOLDOUT_EXPERIMENT_NAME = undefined;
exports.getAdSenseAmpAutoAdsExpBranch = getAdSenseAmpAutoAdsExpBranch;

var _experiments = require('../../src/experiments');

/** @const {string} */
var ADSENSE_AMP_AUTO_ADS_HOLDOUT_EXPERIMENT_NAME = exports.ADSENSE_AMP_AUTO_ADS_HOLDOUT_EXPERIMENT_NAME = 'amp-auto-ads-adsense-holdout';

/**
 * @enum {string}
 */
/**
 * Copyright 2017 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var AdSenseAmpAutoAdsHoldoutBranches = exports.AdSenseAmpAutoAdsHoldoutBranches = {
  CONTROL: '3782001', // don't run amp-auto-ads
  EXPERIMENT: '3782002' // do run amp-auto-ads
};

/** @const {!../../src/experiments.ExperimentInfo} */
var ADSENSE_AMP_AUTO_ADS_EXPERIMENT_INFO = {
  isTrafficEligible: function isTrafficEligible(win) {
    return !!win.document.querySelector('AMP-AUTO-ADS');
  },
  branches: [AdSenseAmpAutoAdsHoldoutBranches.CONTROL, AdSenseAmpAutoAdsHoldoutBranches.EXPERIMENT]
};

/**
 * This has the side-effect of selecting the page into a branch of the
 * experiment, which becomes sticky for the entire pageview.
 *
 * @param {!Window} win
 * @return {?string}
 */
function getAdSenseAmpAutoAdsExpBranch(win) {
  var experiments = /** @type {!Object<string, !ExperimentInfo>} */{};
  experiments[ADSENSE_AMP_AUTO_ADS_HOLDOUT_EXPERIMENT_NAME] = ADSENSE_AMP_AUTO_ADS_EXPERIMENT_INFO;
  (0, _experiments.randomlySelectUnsetExperiments)(win, experiments);
  return (0, _experiments.getExperimentBranch)(win, ADSENSE_AMP_AUTO_ADS_HOLDOUT_EXPERIMENT_NAME) || null;
}

},{"../../src/experiments":37}],8:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ADSENSE_RSPV_WHITELISTED_HEIGHT = undefined;
exports.getMultiSizeDimensions = getMultiSizeDimensions;

var _log = require('../../src/log');

/**
 * Approved height for AdSense full-width responsive ads.
 * @const {number}
 */
var ADSENSE_RSPV_WHITELISTED_HEIGHT = exports.ADSENSE_RSPV_WHITELISTED_HEIGHT = 320;

/**
 * Given the amp-ad data attribute containing the multi-size dimensions, and a
 * set of primary dimensions, this function will return all valid multi-size
 * [width, height] pairs in an array.
 *
 * @param {string} multiSizeDataStr The amp-ad data attribute containing the
 *   multi-size dimensions.
 * @param {number} primaryWidth The primary width of the ad slot.
 * @param {number} primaryHeight The primary height of the ad slot.
 * @param {boolean} multiSizeValidation A flag that if set to true will enforce
 *   the rule that ensures multi-size dimensions are no less than 2/3rds of
 *   their primary dimension's counterpart.
 * @param {boolean=} isFluid Indicates whether this ad slot is Fluid-enabled.
 * @return {?Array<!Array<number>>} An array of dimensions.
 */
/**
 * Copyright 2016 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function getMultiSizeDimensions(multiSizeDataStr, primaryWidth, primaryHeight, multiSizeValidation) {
  var isFluid = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;


  var dimensions = [];
  var arrayOfSizeStrs = multiSizeDataStr.split(',');

  for (var i = 0; i < arrayOfSizeStrs.length; i++) {

    var sizeStr = arrayOfSizeStrs[i];
    var size = sizeStr.split('x');

    // Make sure that each size is specified in the form WxH.
    if (size.length != 2) {
      (0, _log.user)().error('AMP-AD', 'Invalid multi-size data format \'' + sizeStr + '\'.');
      continue;
    }

    var width = Number(size[0]);
    var height = Number(size[1]);

    // Make sure that both dimensions given are positive numbers.
    if (!validateDimensions(width, height, function (w) {
      return isNaN(w) || w <= 0;
    }, function (h) {
      return isNaN(h) || h <= 0;
    }, function (badParams) {
      return badParams.map(function (badParam) {
        return 'Invalid ' + badParam.dim + ' of ' + badParam.val + ' ' + 'given for secondary size.';
      }).join(' ');
    })) {
      continue;
    }

    // Check that secondary size is not larger than primary size.
    if (!isFluid && !validateDimensions(width, height, function (w) {
      return w > primaryWidth;
    }, function (h) {
      return h > primaryHeight;
    }, function (badParams) {
      return badParams.map(function (badParam) {
        return 'Secondary ' + badParam.dim + ' ' + badParam.val + ' ' + ('can\'t be larger than the primary ' + badParam.dim + '.');
      }).join(' ');
    })) {
      continue;
    }

    // Check that if multi-size-validation is on, that the secondary sizes
    // are at least minRatio of the primary size.
    if (multiSizeValidation) {
      var _ret = function () {
        // The minimum ratio of each secondary dimension to its corresponding
        // primary dimension.
        var minRatio = 2 / 3;
        var minWidth = minRatio * primaryWidth;
        var minHeight = minRatio * primaryHeight;
        if (!validateDimensions(width, height, function (w) {
          return w < minWidth;
        }, function (h) {
          return h < minHeight;
        }, function (badParams) {
          return badParams.map(function (badParam) {
            return 'Secondary ' + badParam.dim + ' ' + badParam.val + ' is ' + ('smaller than 2/3rds of the primary ' + badParam.dim + '.');
          }).join(' ');
        })) {
          return 'continue';
        }
      }();

      if (_ret === 'continue') continue;
    }

    // Passed all checks! Push additional size to dimensions.
    dimensions.push([width, height]);
  }

  return dimensions;
}

/**
 * A helper function for determining whether a given width or height violates
 * some condition.
 *
 * Checks the width and height against their corresponding conditions. If
 * either of the conditions fail, the errorBuilder function will be called with
 * the appropriate arguments, its result will be logged to user().error, and
 * validateDimensions will return false. Otherwise, validateDimensions will
 * only return true.
 *
 * @param {(number|string)} width
 * @param {(number|string)} height
 * @param {function((number|string)): boolean} widthCond
 * @param {function((number|string)): boolean} heightCond
 * @param {function(!Array<{dim: string, val: (number|string)}>): string=} errorBuilder
 * A function that will produce an informative error message.
 * @return {boolean}
 */
function validateDimensions(width, height, widthCond, heightCond, errorBuilder) {
  var badParams = [];
  if (widthCond(width)) {
    badParams.push({ dim: 'width', val: width });
  }
  if (heightCond(height)) {
    badParams.push({ dim: 'height', val: height });
  }
  if (badParams.length) {
    (0, _log.user)().warn('AMP-AD', errorBuilder(badParams));
  }
  return !badParams.length;
}

},{"../../src/log":46}],9:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.A4AVariableSource = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _services = require('../../../src/services');

var _variableSource = require('../../../src/service/variable-source');

var _log = require('../../../src/log');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2016 The AMP HTML Authors. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS-IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var WHITELISTED_VARIABLES = ['AMPDOC_HOST', 'AMPDOC_HOSTNAME', 'AMPDOC_URL', 'AMP_VERSION', 'AVAILABLE_SCREEN_HEIGHT', 'AVAILABLE_SCREEN_WIDTH', 'BACKGROUND_STATE', 'BROWSER_LANGUAGE', 'CANONICAL_HOST', 'CANONICAL_HOSTNAME', 'CANONICAL_PATH', 'CANONICAL_URL', 'CLIENT_ID', 'COUNTER', 'DOCUMENT_CHARSET', 'DOCUMENT_REFERRER', 'FIRST_CONTENTFUL_PAINT', 'FIRST_VIEWPORT_READY', 'MAKE_BODY_VISIBLE', 'PAGE_VIEW_ID', 'RANDOM', 'SCREEN_COLOR_DEPTH', 'SCREEN_HEIGHT', 'SCREEN_WIDTH', 'SCROLL_HEIGHT', 'SCROLL_LEFT', 'SCROLL_TOP', 'SCROLL_WIDTH', 'SHARE_TRACKING_INCOMING', 'SHARE_TRACKING_OUTGOING', 'SOURCE_HOST', 'SOURCE_HOSTNAME', 'SOURCE_PATH', 'SOURCE_URL', 'TIMESTAMP', 'TIMEZONE', 'TIMEZONE_CODE', 'TITLE', 'TOTAL_ENGAGED_TIME', 'USER_AGENT', 'VARIANT', 'VARIANTS', 'VIEWER', 'VIEWPORT_HEIGHT', 'VIEWPORT_WIDTH'];

/** Provides A4A specific variable substitution. */

var A4AVariableSource = exports.A4AVariableSource = function (_VariableSource) {
  _inherits(A4AVariableSource, _VariableSource);

  /**
   * @param  {!../../../src/service/ampdoc-impl.AmpDoc} ampdoc
   * @param  {!Window} embedWin
   */
  function A4AVariableSource(ampdoc, embedWin) {
    _classCallCheck(this, A4AVariableSource);

    /** @private {VariableSource} global variable source for fallback. */
    var _this = _possibleConstructorReturn(this, (A4AVariableSource.__proto__ || Object.getPrototypeOf(A4AVariableSource)).call(this, ampdoc));

    _this.globalVariableSource_ = _services.Services.urlReplacementsForDoc(ampdoc).getVariableSource();

    /** @private {!Window} */
    _this.win_ = embedWin;
    return _this;
  }

  /** @override */


  _createClass(A4AVariableSource, [{
    key: 'initialize',
    value: function initialize() {
      var _this2 = this;

      this.set('AD_NAV_TIMING', function (startAttribute, endAttribute) {
        (0, _log.user)().assert(startAttribute, 'The first argument to AD_NAV_TIMING, the' + ' start attribute name, is required');
        return (0, _variableSource.getTimingDataSync)(_this2.win_,
        /**@type {string}*/startAttribute,
        /**@type {string}*/endAttribute);
      }).setAsync('AD_NAV_TIMING', function (startAttribute, endAttribute) {
        (0, _log.user)().assert(startAttribute, 'The first argument to AD_NAV_TIMING, the' + ' start attribute name, is required');
        return (0, _variableSource.getTimingDataAsync)(_this2.win_,
        /**@type {string}*/startAttribute,
        /**@type {string}*/endAttribute);
      });

      this.set('AD_NAV_TYPE', function () {
        return (0, _variableSource.getNavigationData)(_this2.win_, 'type');
      });

      this.set('AD_NAV_REDIRECT_COUNT', function () {
        return (0, _variableSource.getNavigationData)(_this2.win_, 'redirectCount');
      });

      this.set('HTML_ATTR',
      /** @type {function(...*)} */this.htmlAttributeBinding_.bind(this));

      for (var v = 0; v < WHITELISTED_VARIABLES.length; v++) {
        var varName = WHITELISTED_VARIABLES[v];
        var resolvers = this.globalVariableSource_.get(varName);
        this.set(varName, resolvers.sync).setAsync(varName, resolvers.async);
      }
    }

    /**
     * Provides a binding for getting attributes from the DOM.
     * Most such bindings are provided in src/service/url-replacements-impl, but
     * this one needs access to this.win_.document, which if the amp-analytics
     * tag is contained within an amp-ad tag will NOT be the parent/publisher
     * page. Hence the need to put it here.
     * @param {string} cssSelector Elements matching this selector will be
     *     included, provided they have at least one of the attributeNames
     *     set, up to a max of 10. May be URI encoded.
     * @param {...string} var_args Additional params will be the names of
     *     attributes whose values will be returned. There should be at least 1.
     * @return {string} A stringified JSON array containing one member for each
     *     matching element. Each member will contain the names and values of the
     *     specified attributes, if the corresponding element has that attribute.
     *     Note that if an element matches the cssSelected but has none of the
     *     requested attributes, then nothing will be included in the array
     *     for that element.
     */

  }, {
    key: 'htmlAttributeBinding_',
    value: function htmlAttributeBinding_(cssSelector, var_args) {
      // Generate an error if cssSelector matches more than this many elements
      var HTML_ATTR_MAX_ELEMENTS_TO_TRAVERSE = 20;

      // Of the elements matched by cssSelector, see which contain one or more
      // of the specified attributes, and return an array of at most this many.
      var HTML_ATTR_MAX_ELEMENTS_TO_RETURN = 10;

      // Only allow at most this many attributeNames to be specified.
      var HTML_ATTR_MAX_ATTRS = 10;

      var TAG = 'A4AVariableSource';

      var attributeNames = Array.prototype.slice.call(arguments, 1);
      if (!cssSelector || !attributeNames.length) {
        return '[]';
      }
      if (attributeNames.length > HTML_ATTR_MAX_ATTRS) {
        (0, _log.user)().error(TAG, 'At most ' + HTML_ATTR_MAX_ATTRS + ' may be requested.');
        return '[]';
      }
      cssSelector = decodeURI(cssSelector);
      var elements = void 0;
      try {
        elements = this.win_.document.querySelectorAll(cssSelector);
      } catch (e) {
        (0, _log.user)().error(TAG, 'Invalid selector: ' + cssSelector);
        return '[]';
      }
      if (elements.length > HTML_ATTR_MAX_ELEMENTS_TO_TRAVERSE) {
        (0, _log.user)().error(TAG, 'CSS selector may match at most ' + (HTML_ATTR_MAX_ELEMENTS_TO_TRAVERSE + ' elements.'));
        return '[]';
      }
      var result = [];
      for (var i = 0; i < elements.length && result.length < HTML_ATTR_MAX_ELEMENTS_TO_RETURN; ++i) {
        var currentResult = {};
        var foundAtLeastOneAttr = false;
        for (var j = 0; j < attributeNames.length; ++j) {
          var attributeName = attributeNames[j];
          if (elements[i].hasAttribute(attributeName)) {
            currentResult[attributeName] = elements[i].getAttribute(attributeName);
            foundAtLeastOneAttr = true;
          }
        }
        if (foundAtLeastOneAttr) {
          result.push(currentResult);
        }
      }
      return JSON.stringify(result);
    }
  }]);

  return A4AVariableSource;
}(_variableSource.VariableSource);

},{"../../../src/log":46,"../../../src/service/variable-source":63,"../../../src/services":64}],10:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AmpA4A = exports.IFRAME_SANDBOXING_FLAGS = exports.AnalyticsTrigger = exports.CreativeMetaDataDef = exports.SizeInfoDef = exports.XORIGIN_MODE = exports.IFRAME_GET = exports.INVALID_SPSA_RESPONSE = exports.NETWORK_FAILURE = exports.NO_CONTENT_RESPONSE = exports.SANDBOX_HEADER = exports.EXPERIMENT_FEATURE_HEADER_NAME = exports.SAFEFRAME_VERSION_HEADER = exports.RENDERING_TYPE_HEADER = exports.CREATIVE_SIZE_HEADER = exports.DEFAULT_SAFEFRAME_VERSION = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

exports.protectFunctionWrapper = protectFunctionWrapper;
exports.assignAdUrlToError = assignAdUrlToError;
exports.signatureVerifierFor = signatureVerifierFor;

var _a4aVariableSource = require('./a4a-variable-source');

var _consentState = require('../../../src/consent-state');

var _layout = require('../../../src/layout');

var _services = require('../../../src/services');

var _signatureVerifier = require('./signature-verifier');

var _url = require('../../../src/url');

var _error = require('../../../src/error');

var _dom = require('../../../src/dom');

var _log = require('../../../src/log');

var _object = require('../../../src/utils/object');

var _pFrame = require('../../../src/3p-frame');

var _concurrentLoad = require('../../amp-ad/0.1/concurrent-load');

var _experiments = require('../../../src/experiments');

var _utils = require('../../../ads/google/a4a/utils');

var _consent = require('../../../src/consent');

var _iframeAttributes = require('../../../src/iframe-attributes');

var _mode = require('../../../src/mode');

var _extensionAnalytics = require('../../../src/extension-analytics');

var _friendlyIframeEmbed = require('../../../src/friendly-iframe-embed');

var _urlReplacementsImpl = require('../../../src/service/url-replacements-impl');

var _adHelper = require('../../../src/ad-helper');

var _types = require('../../../src/types');

var _json = require('../../../src/json');

var _style = require('../../../src/style');

var _a4aConfig = require('../../../ads/_a4a-config');

var _analytics = require('../../../src/analytics');

var _promise = require('../../../src/utils/promise');

var _bytes = require('../../../src/utils/bytes');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2016 The AMP HTML Authors. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS-IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/** @type {Array<string>} */
var METADATA_STRINGS = ['<script amp-ad-metadata type=application/json>', '<script type="application/json" amp-ad-metadata>', '<script type=application/json amp-ad-metadata>'];

// TODO(tdrl): Temporary, while we're verifying whether SafeFrame is an
// acceptable solution to the 'Safari on iOS doesn't fetch iframe src from
// cache' issue.  See https://github.com/ampproject/amphtml/issues/5614
/** @type {string} */
var DEFAULT_SAFEFRAME_VERSION = exports.DEFAULT_SAFEFRAME_VERSION = '1-0-23';

/** @const {string} */
var CREATIVE_SIZE_HEADER = exports.CREATIVE_SIZE_HEADER = 'X-CreativeSize';

/** @type {string} @visibleForTesting */
var RENDERING_TYPE_HEADER = exports.RENDERING_TYPE_HEADER = 'X-AmpAdRender';

/** @type {string} @visibleForTesting */
var SAFEFRAME_VERSION_HEADER = exports.SAFEFRAME_VERSION_HEADER = 'X-AmpSafeFrameVersion';

/** @type {string} @visibleForTesting */
var EXPERIMENT_FEATURE_HEADER_NAME = exports.EXPERIMENT_FEATURE_HEADER_NAME = 'amp-ff-exps';

/** @type {string} @visibileForTesting */
var SANDBOX_HEADER = exports.SANDBOX_HEADER = 'amp-ff-sandbox';

/** @type {string} */
var TAG = 'amp-a4a';

/** @type {string} */
var NO_CONTENT_RESPONSE = exports.NO_CONTENT_RESPONSE = 'NO-CONTENT-RESPONSE';

/** @type {string} */
var NETWORK_FAILURE = exports.NETWORK_FAILURE = 'NETWORK-FAILURE';

/** @type {string} */
var INVALID_SPSA_RESPONSE = exports.INVALID_SPSA_RESPONSE = 'INVALID-SPSA-RESPONSE';

/** @type {string} */
var IFRAME_GET = exports.IFRAME_GET = 'IFRAME-GET';

/** @enum {string} */
var XORIGIN_MODE = exports.XORIGIN_MODE = {
  CLIENT_CACHE: 'client_cache',
  SAFEFRAME: 'safeframe',
  NAMEFRAME: 'nameframe',
  IFRAME_GET: 'iframe_get'
};

/** @type {!Object} @private */
var SHARED_IFRAME_PROPERTIES = (0, _object.dict)({
  'frameborder': '0',
  'allowfullscreen': '',
  'allowtransparency': '',
  'scrolling': 'no',
  'marginwidth': '0',
  'marginheight': '0'
});

/** @typedef {{width: number, height: number}} */
var SizeInfoDef = exports.SizeInfoDef = void 0;

/** @typedef {{
      minifiedCreative: string,
      customElementExtensions: !Array<string>,
      customStylesheets: !Array<{href: string}>,
      images: (Array<string>|undefined),
      ctaType: (string|undefined),
      ctaUrl: (string|undefined),
    }} */
var CreativeMetaDataDef = exports.CreativeMetaDataDef = void 0;

/**
 * Name of A4A lifecycle triggers.
 * @enum {string}
 */
var AnalyticsTrigger = exports.AnalyticsTrigger = {
  AD_REQUEST_START: 'ad-request-start',
  AD_RESPONSE_END: 'ad-response-end',
  AD_RENDER_START: 'ad-render-start',
  AD_RENDER_END: 'ad-render-end',
  AD_IFRAME_LOADED: 'ad-iframe-loaded',
  // This trigger is not part of the normal ads lifecycle and only fires when an
  // ad is refreshed.
  AD_REFRESH: 'ad-refresh'
};

/**
 * Maps the names of lifecycle events to analytics triggers.
 * @const {!Object<string, !AnalyticsTrigger>}
 */
var LIFECYCLE_STAGE_TO_ANALYTICS_TRIGGER = {
  'adRequestStart': AnalyticsTrigger.AD_REQUEST_START,
  'adRequestEnd': AnalyticsTrigger.AD_RESPONSE_END,
  'renderFriendlyStart': AnalyticsTrigger.AD_RENDER_START,
  'renderCrossDomainStart': AnalyticsTrigger.AD_RENDER_START,
  'renderSafeFrameStart': AnalyticsTrigger.AD_RENDER_START,
  'renderFriendlyEnd': AnalyticsTrigger.AD_RENDER_END,
  'renderCrossDomainEnd': AnalyticsTrigger.AD_RENDER_END,
  'friendlyIframeIniLoad': AnalyticsTrigger.AD_IFRAME_LOADED,
  'crossDomainIframeLoaded': AnalyticsTrigger.AD_IFRAME_LOADED
};

/**
 * The sandboxing flags to use when applying the "sandbox" attribute to ad
 * iframes. See http://go/mdn/HTML/Element/iframe#attr-sandbox.
 * @const {string} @visibleForTesting
 */
var IFRAME_SANDBOXING_FLAGS = exports.IFRAME_SANDBOXING_FLAGS = 'allow-forms allow-pointer-lock ' + 'allow-popups allow-popups-to-escape-sandbox allow-same-origin ' + 'allow-scripts allow-top-navigation-by-user-activation';

/**
 * Utility function that ensures any error thrown is handled by optional
 * onError handler (if none provided or handler throws, error is swallowed and
 * undefined is returned).
 * @param {!Function} fn to protect
 * @param {T=} inThis An optional object to use as the 'this' object
 *    when calling the function.  If not provided, undefined is bound as this
 *    when calling function.
 * @param {function(this:T, !Error, ...*):?=} onError function given error
 *    and arguments provided to function call.
 * @return {!Function} protected function
 * @template T
 * @visibleForTesting
 */
function protectFunctionWrapper(fn) {
  var inThis = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
  var onError = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;

  return function () {
    for (var _len = arguments.length, fnArgs = Array(_len), _key = 0; _key < _len; _key++) {
      fnArgs[_key] = arguments[_key];
    }

    try {
      return fn.apply(inThis, fnArgs);
    } catch (err) {
      if (onError) {
        try {
          // Ideally we could use [err, ...var_args] but linter disallows
          // spread so instead using unshift :(
          fnArgs.unshift(err);
          return onError.apply(inThis, fnArgs);
        } catch (captureErr) {
          // swallow error if error handler throws.
        }
      }
      // In the event of no optional on error function or its execution throws,
      // return undefined.
      return undefined;
    }
  };
}

/** Abstract class for AMP Ad Fast Fetch enabled networks */

var AmpA4A = exports.AmpA4A = function (_AMP$BaseElement) {
  _inherits(AmpA4A, _AMP$BaseElement);

  // TODO: Add more error handling throughout code.
  // TODO: Handle creatives that do not fill.

  /**
   * @param {!Element} element
   */
  function AmpA4A(element) {
    _classCallCheck(this, AmpA4A);

    var _this = _possibleConstructorReturn(this, (AmpA4A.__proto__ || Object.getPrototypeOf(AmpA4A)).call(this, element));

    (0, _log.dev)().assert(AMP.AmpAdUIHandler);
    (0, _log.dev)().assert(AMP.AmpAdXOriginIframeHandler);

    /** @private {?Promise<undefined>} */
    _this.keysetPromise_ = null;

    /** @private {?Promise<?CreativeMetaDataDef>} */
    _this.adPromise_ = null;

    /**
     * @private {number} unique ID of the currently executing promise to allow
     * for cancellation.
     */
    _this.promiseId_ = 0;

    /** @private {?string} */
    _this.adUrl_ = null;

    /** @private {?../../../src/friendly-iframe-embed.FriendlyIframeEmbed} */
    _this.friendlyIframeEmbed_ = null;

    /** {?AMP.AmpAdUIHandler} */
    _this.uiHandler = null;

    /** @private {?AMP.AmpAdXOriginIframeHandler} */
    _this.xOriginIframeHandler_ = null;

    /** @private {boolean} whether creative has been verified as AMP */
    _this.isVerifiedAmpCreative_ = false;

    /** @private {?ArrayBuffer} */
    _this.creativeBody_ = null;

    /**
     * Initialize this with the slot width/height attributes, and override
     * later with what the network implementation returns via extractSize.
     * Note: Either value may be 'auto' (i.e., non-numeric).
     *
     * @private {?({width, height}|../../../src/layout-rect.LayoutRectDef)}
     */
    _this.creativeSize_ = null;

    /** @private {?../../../src/layout-rect.LayoutRectDef} */
    _this.originalSlotSize_ = null;

    /**
     * Note(keithwrightbos) - ensure the default here is null so that ios
     * uses safeframe when response header is not specified.
     * @private {?XORIGIN_MODE}
     */
    _this.experimentalNonAmpCreativeRenderMethod_ = _this.getNonAmpCreativeRenderingMethod();

    /**
     * Whether or not the iframe containing the ad should be sandboxed via the
     * "sandbox" attribute.
     * @private {boolean}
     */
    _this.shouldSandbox_ = false;

    /**
     * Gets a notion of current time, in ms.  The value is not necessarily
     * absolute, so should be used only for computing deltas.  When available,
     * the performance system will be used; otherwise Date.now() will be
     * returned.
     *
     * @const {function():number}
     */
    _this.getNow_ = _this.win.performance && _this.win.performance.now ? _this.win.performance.now.bind(_this.win.performance) : Date.now;

    /** @const {string} */
    _this.sentinel = (0, _pFrame.generateSentinel)(window);

    /**
     * Used to indicate whether this slot should be collapsed or not. Marked
     * true if the ad response has status 204, is null, or has a null
     * arrayBuffer.
     * @private {boolean}
     */
    _this.isCollapsed_ = false;

    /**
     * Frame in which the creative renders (friendly if validated AMP, xdomain
     * otherwise).
     * {?HTMLIframeElement}
     */
    _this.iframe = null;

    /**
     * TODO(keithwrightbos) - remove once resume behavior is verified.
     * {boolean} whether most recent ad request was generated as part
     *    of resume callback.
     */
    _this.fromResumeCallback = false;

    /** @type {string} */
    _this.safeframeVersion = DEFAULT_SAFEFRAME_VERSION;

    /**
     * @protected {boolean} Indicates whether the ad is currently in the
     *    process of being refreshed.
     */
    _this.isRefreshing = false;

    /** @protected {boolean} */
    _this.isRelayoutNeededFlag = false;

    /**
     * Used as a signal in some of the CSI pings.
     * @private @const {string}
     */
    _this.releaseType_ = (0, _utils.getBinaryTypeNumericalCode)((0, _experiments.getBinaryType)(_this.win)) || '-1';

    /**
     * Mapping of feature name to value extracted from ad response header
     * amp-ff-exps with comma separated pairs of '=' separated key/value.
     * @type {!Object<string,string>}
     */
    _this.postAdResponseExperimentFeatures = {};

    /**
     * The configuration for amp-analytics. If null, no amp-analytics element
     * will be inserted and no analytics events will be fired.
     * This will be initialized inside of buildCallback.
     * @private {?JsonObject}
     */
    _this.a4aAnalyticsConfig_ = null;

    /**
     * The amp-analytics element that for this impl's analytics config. It will
     * be null before buildCallback() executes or if the impl does not provide
     * an analytice config.
     * @private {?Element}
     * @visibleForTesting
     */
    _this.a4aAnalyticsElement_ = null;

    /**
     * Indicates that this slot is a single page ad within an AMP story.
     * @type {boolean}
     */
    _this.isSinglePageStoryAd = false;
    return _this;
  }

  /** @override */


  _createClass(AmpA4A, [{
    key: 'getLayoutPriority',
    value: function getLayoutPriority() {
      // Priority used for scheduling preload and layout callback.  Because
      // AMP creatives will be injected as part of the promise chain created
      // within onLayoutMeasure, this is only relevant to non-AMP creatives
      // therefore we want this to match the 3p priority.
      var isPWA = !this.element.getAmpDoc().isSingleDoc();
      // give the ad higher priority if it is inside a PWA
      return isPWA ? _layout.LayoutPriority.METADATA : _layout.LayoutPriority.ADS;
    }

    /** @override */

  }, {
    key: 'isLayoutSupported',
    value: function isLayoutSupported(layout) {
      return (0, _layout.isLayoutSizeDefined)(layout);
    }

    /** @override */

  }, {
    key: 'isRelayoutNeeded',
    value: function isRelayoutNeeded() {
      return this.isRelayoutNeededFlag;
    }

    /** @override */

  }, {
    key: 'buildCallback',
    value: function buildCallback() {
      var _this2 = this;

      this.creativeSize_ = {
        width: this.element.getAttribute('width'),
        height: this.element.getAttribute('height')
      };
      var upgradeDelayMs = Math.round(this.getResource().getUpgradeDelayMs());
      (0, _log.dev)().info(TAG, 'upgradeDelay ' + this.element.getAttribute('type') + ': ' + upgradeDelayMs);

      this.uiHandler = new AMP.AmpAdUIHandler(this);

      var verifier = signatureVerifierFor(this.win);
      this.keysetPromise_ = _services.Services.viewerForDoc(this.getAmpDoc()).whenFirstVisible().then(function () {
        _this2.getSigningServiceNames().forEach(function (signingServiceName) {
          verifier.loadKeyset(signingServiceName);
        });
      });

      this.a4aAnalyticsConfig_ = this.getA4aAnalyticsConfig();
      if (this.a4aAnalyticsConfig_) {
        // TODO(warrengm): Consider having page-level singletons for networks that
        // use the same config for all ads.
        this.a4aAnalyticsElement_ = (0, _extensionAnalytics.insertAnalyticsElement)(this.element, this.a4aAnalyticsConfig_, true /* loadAnalytics */);
      }

      this.isSinglePageStoryAd = this.element.hasAttribute('amp-story');
    }

    /** @override */

  }, {
    key: 'renderOutsideViewport',
    value: function renderOutsideViewport() {
      // Ensure non-verified AMP creatives are throttled.
      if (!this.isVerifiedAmpCreative_ && (0, _concurrentLoad.is3pThrottled)(this.win) && !this.inNonAmpPreferenceExp()) {
        return false;
      }
      // Otherwise the ad is good to go.
      var elementCheck = (0, _concurrentLoad.getAmpAdRenderOutsideViewport)(this.element);
      return elementCheck !== null ? elementCheck : _get(AmpA4A.prototype.__proto__ || Object.getPrototypeOf(AmpA4A.prototype), 'renderOutsideViewport', this).call(this);
    }

    /**
     * To be overridden by network specific implementation indicating if element
     * (and environment generally) are valid for sending XHR queries.
     * @return {boolean} whether element is valid and ad request should be
     *    sent.  If false, no ad request is sent and slot will be collapsed if
     *    possible.
     */

  }, {
    key: 'isValidElement',
    value: function isValidElement() {
      return true;
    }

    /**
     * Returns the creativeSize, which is the size extracted from the ad response.
     * @return {?({width, height}|../../../src/layout-rect.LayoutRectDef)}
     */

  }, {
    key: 'getCreativeSize',
    value: function getCreativeSize() {
      return this.creativeSize_;
    }

    /**
     * @return {boolean|number} whether ad request should be delayed until
     *    renderOutsideViewport is met or if number, the amount of viewports.
     */

  }, {
    key: 'delayAdRequestEnabled',
    value: function delayAdRequestEnabled() {
      return false;
    }

    /**
     * Returns preconnect urls for A4A. Ad network should overwrite in their
     * Fast Fetch implementation and return an array of urls for the runtime to
     * preconnect to.
     * @return {!Array<string>}
     */

  }, {
    key: 'getPreconnectUrls',
    value: function getPreconnectUrls() {
      return [];
    }

    /**
     * Returns prefetch urls for A4A. Ad network should overwrite in their
     * Fast Fetch implementation and return an array of urls for the runtime to
     * prefetch.
     * @return {!Array<string>}
     */

  }, {
    key: 'getPrefetchUrls',
    value: function getPrefetchUrls() {
      return [];
    }

    /**
     * Returns true if this element was loaded from an amp-ad element.  For use by
     * network-specific implementations that don't want to allow themselves to be
     * embedded directly into a page.
     * @return {boolean}
     */

  }, {
    key: 'isAmpAdElement',
    value: function isAmpAdElement() {
      return this.element.tagName == 'AMP-AD' || this.element.tagName == 'AMP-EMBED';
    }

    /**
     * Prefetches and preconnects URLs related to the ad using adPreconnect
     * registration which assumes ad request domain used for 3p is applicable.
     * @param {boolean=} unusedOnLayout
     * @override
     */

  }, {
    key: 'preconnectCallback',
    value: function preconnectCallback(unusedOnLayout) {
      var _this3 = this;

      var preconnect = this.getPreconnectUrls();
      // NOTE(keithwrightbos): Does not take isValidElement into account so could
      // preconnect unnecessarily, however it is assumed that isValidElement
      // matches amp-ad loader predicate such that A4A impl does not load.
      if (preconnect) {
        preconnect.forEach(function (p) {
          _this3.preconnect.url(p, /*opt_preloadAs*/true);
        });
      }
    }

    /** @override */

  }, {
    key: 'resumeCallback',
    value: function resumeCallback() {
      // FIE that was not destroyed on unlayoutCallback does not require a new
      // ad request.
      if (this.friendlyIframeEmbed_) {
        return;
      }
      this.fromResumeCallback = true;
      // If layout of page has not changed, onLayoutMeasure will not be called
      // so do so explicitly.
      var resource = this.getResource();
      if (resource.hasBeenMeasured() && !resource.isMeasureRequested()) {
        this.onLayoutMeasure();
      }
    }

    /**
     * @return {!../../../src/service/resource.Resource}
     * @visibleForTesting
     */

  }, {
    key: 'getResource',
    value: function getResource() {
      return this.element.getResources().getResourceForElement(this.element);
    }

    /**
     * @return {boolean} whether adPromise was initialized (indicator of
     *    element validity).
     * @protected
     */

  }, {
    key: 'hasAdPromise',
    value: function hasAdPromise() {
      return !!this.adPromise_;
    }

    /**
     * Should only be called after XHR response headers have been processed and
     * postAdResponseExperimentFeatures is populated.
     * @return {boolean} whether in experiment giving non-AMP creatives same
     *    benefits as AMP (increased priority, no throttle)
     * @visibleForTesting
     */

  }, {
    key: 'inNonAmpPreferenceExp',
    value: function inNonAmpPreferenceExp() {
      return !!this.postAdResponseExperimentFeatures['pref_neutral_enabled'] && ['adsense', 'doubleclick'].includes(this.element.getAttribute('type'));
    }

    /**
     * @return {boolean} whether environment/element should initialize ad request
     *    promise chain.
     * @private
     */

  }, {
    key: 'shouldInitializePromiseChain_',
    value: function shouldInitializePromiseChain_() {
      var slotRect = this.getIntersectionElementLayoutBox();
      if (this.getLayout() != _layout.Layout.FLUID && (slotRect.height == 0 || slotRect.width == 0)) {
        (0, _log.dev)().fine(TAG, 'onLayoutMeasure canceled due height/width 0', this.element);
        return false;
      }
      if (!(0, _adHelper.isAdPositionAllowed)(this.element, this.win)) {
        (0, _log.user)().warn(TAG, '<' + this.element.tagName + '> is not allowed to be ' + ('placed in elements with position:fixed: ' + this.element));
        return false;
      }
      // OnLayoutMeasure can be called when page is in prerender so delay until
      // visible.  Assume that it is ok to call isValidElement as it should
      // only being looking at window, immutable properties (i.e. location) and
      // its element ancestry.
      if (!this.isValidElement()) {
        // TODO(kjwright): collapse?
        (0, _log.user)().warn(TAG, this.element.getAttribute('type'), 'Amp ad element ignored as invalid', this.element);
        return false;
      }
      return true;
    }

    /** @override */

  }, {
    key: 'onLayoutMeasure',
    value: function onLayoutMeasure() {
      this.initiateAdRequest();
    }

    /**
     * This is the entry point into the ad promise chain.
     *
     * Calling this function will initiate the following sequence of events: ad
     * url construction, ad request issuance, creative verification, and metadata
     * parsing.
     *
     * @protected
     */

  }, {
    key: 'initiateAdRequest',
    value: function initiateAdRequest() {
      var _this4 = this;

      if (this.xOriginIframeHandler_) {
        this.xOriginIframeHandler_.onLayoutMeasure();
      }
      if (this.adPromise_ || !this.shouldInitializePromiseChain_()) {
        return;
      }

      // Increment unique promise ID so that if its value changes within the
      // promise chain due to cancel from unlayout, the promise will be rejected.
      ++this.promiseId_;

      // Shorthand for: reject promise if current promise chain is out of date.
      var checkStillCurrent = this.verifyStillCurrent();

      // Return value from this chain: True iff rendering was "successful"
      // (i.e., shouldn't try to render later via iframe); false iff should
      // try to render later in iframe.
      // Cases to handle in this chain:
      //   - Everything ok  => Render; return true
      //   - Empty network response returned => Don't render; return true
      //   - Can't parse creative out of response => Don't render; return false
      //   - Can parse, but creative is empty => Don't render; return true
      //   - Validation fails => return false
      //   - Rendering fails => return false
      //   - Chain cancelled => don't return; drop error
      //   - Uncaught error otherwise => don't return; percolate error up
      this.adPromise_ = _services.Services.viewerForDoc(this.getAmpDoc()).whenFirstVisible().then(function () {
        checkStillCurrent();
        // See if experiment that delays request until slot is within
        // renderOutsideViewport. Within render outside viewport will not
        // resolve if already within viewport thus the check for already
        // meeting the definition as opposed to waiting on the promise.
        var delay = _this4.delayAdRequestEnabled();
        if (delay) {
          return _this4.getResource().whenWithinViewport(typeof delay == 'number' ? delay : _this4.renderOutsideViewport());
        }
      })
      // Possibly block on amp-consent.
      /** @return {!Promise<?CONSENT_POLICY_STATE>} */
      .then(function () {
        checkStillCurrent();
        var consentPolicyId = _get(AmpA4A.prototype.__proto__ || Object.getPrototypeOf(AmpA4A.prototype), 'getConsentPolicy', _this4).call(_this4);
        return consentPolicyId ? (0, _consent.getConsentPolicyState)(_this4.getAmpDoc(), consentPolicyId).catch(function (err) {
          (0, _log.user)().error(TAG, 'Error determining consent state', err);
          return _consentState.CONSENT_POLICY_STATE.UNKNOWN;
        }) : Promise.resolve(null);
      })
      // This block returns the ad URL, if one is available.
      /** @return {!Promise<?string>} */
      .then(function (consentState) {
        checkStillCurrent();
        return (/** @type {!Promise<?string>} */_this4.getAdUrl(consentState, _this4.tryExecuteRealTimeConfig_(consentState))
        );
      })
      // This block returns the (possibly empty) response to the XHR request.
      /** @return {!Promise<?Response>} */
      .then(function (adUrl) {
        checkStillCurrent();
        _this4.adUrl_ = adUrl;
        // If we should skip the XHR, we will instead request and render
        // by simply writing a frame into the page using
        // renderViaIframeGet
        if (!_this4.isXhrAllowed() && !!_this4.adUrl_) {
          _this4.experimentalNonAmpCreativeRenderMethod_ = XORIGIN_MODE.IFRAME_GET;
          return Promise.reject(IFRAME_GET);
        }
        return adUrl && _this4.sendXhrRequest(adUrl);
      })
      // The following block returns either the response (as a
      // {bytes, headers} object), or null if no response is available /
      // response is empty.
      /** @return {?Promise<?{bytes: !ArrayBuffer, headers: !Headers}>} */
      .then(function (fetchResponse) {
        checkStillCurrent();
        _this4.maybeTriggerAnalyticsEvent_('adRequestEnd');
        // If the response is null (can occur for non-200 responses)  or
        // arrayBuffer is null, force collapse.
        if (!fetchResponse || !fetchResponse.arrayBuffer || fetchResponse.headers.has('amp-ff-empty-creative')) {
          _this4.forceCollapse();
          return Promise.reject(NO_CONTENT_RESPONSE);
        }
        if (fetchResponse.headers && fetchResponse.headers.has(EXPERIMENT_FEATURE_HEADER_NAME)) {
          _this4.populatePostAdResponseExperimentFeatures_(fetchResponse.headers.get(EXPERIMENT_FEATURE_HEADER_NAME));
        }
        if ((0, _mode.getMode)().localDev && _this4.win.location && _this4.win.location.search) {
          // Allow for setting experiment features via query param which
          // will potentially override values returned in response.
          var match = /(?:\?|&)a4a_feat_exp=([^&]+)/.exec(_this4.win.location.search);
          if (match && match[1]) {
            (0, _log.dev)().info(TAG, 'Using debug exp features: ' + match[1]);
            _this4.populatePostAdResponseExperimentFeatures_((0, _url.tryDecodeUriComponent)(match[1]));
          }
        }
        // TODO(tdrl): Temporary, while we're verifying whether SafeFrame is
        // an acceptable solution to the 'Safari on iOS doesn't fetch
        // iframe src from cache' issue.  See
        // https://github.com/ampproject/amphtml/issues/5614
        var method = _this4.getNonAmpCreativeRenderingMethod(fetchResponse.headers.get(RENDERING_TYPE_HEADER));
        _this4.experimentalNonAmpCreativeRenderMethod_ = method;
        if (_this4.experimentalNonAmpCreativeRenderMethod_ == XORIGIN_MODE.NAMEFRAME) {
          _this4.preconnect.preload((0, _pFrame.getDefaultBootstrapBaseUrl)(_this4.win, 'nameframe'));
        }
        var browserSupportsSandbox = _this4.win.HTMLIFrameElement && 'sandbox' in _this4.win.HTMLIFrameElement.prototype;
        _this4.shouldSandbox_ = browserSupportsSandbox && fetchResponse.headers.get(SANDBOX_HEADER) == 'true';
        var safeframeVersionHeader = fetchResponse.headers.get(SAFEFRAME_VERSION_HEADER);
        if (/^[0-9-]+$/.test(safeframeVersionHeader) && safeframeVersionHeader != DEFAULT_SAFEFRAME_VERSION) {
          _this4.safeframeVersion = safeframeVersionHeader;
          _this4.preconnect.preload(_this4.getSafeframePath());
        }
        // Note: Resolving a .then inside a .then because we need to capture
        // two fields of fetchResponse, one of which is, itself, a promise,
        // and one of which isn't.  If we just return
        // fetchResponse.arrayBuffer(), the next step in the chain will
        // resolve it to a concrete value, but we'll lose track of
        // fetchResponse.headers.
        return fetchResponse.arrayBuffer().then(function (bytes) {
          if (bytes.byteLength == 0) {
            // The server returned no content. Instead of displaying a blank
            // rectangle, we collapse the slot instead.
            _this4.forceCollapse();
            return Promise.reject(NO_CONTENT_RESPONSE);
          }
          return {
            bytes: bytes,
            headers: fetchResponse.headers
          };
        });
      })
      /** @return {!Promise<?ArrayBuffer>} */
      .then(function (responseParts) {
        checkStillCurrent();
        // Keep a handle to the creative body so that we can render into
        // SafeFrame or NameFrame later, if necessary.  TODO(tdrl): Temporary,
        // while we
        // assess whether this is the right solution to the Safari+iOS iframe
        // src cache issue.  If we decide to keep a SafeFrame-like solution,
        // we should restructure the promise chain to pass this info along
        // more cleanly, without use of an object variable outside the chain.
        if (!responseParts) {
          return Promise.resolve();
        }
        var bytes = responseParts.bytes,
            headers = responseParts.headers;

        var size = _this4.extractSize(responseParts.headers);
        _this4.creativeSize_ = size || _this4.creativeSize_;
        if (_this4.experimentalNonAmpCreativeRenderMethod_ != XORIGIN_MODE.CLIENT_CACHE && bytes) {
          _this4.creativeBody_ = bytes;
        }
        return _this4.maybeValidateAmpCreative(bytes, headers);
      }).then(function (creative) {
        checkStillCurrent();
        // Need to know if creative was verified as part of render outside
        // viewport but cannot wait on promise.  Sadly, need a state a
        // variable.
        _this4.isVerifiedAmpCreative_ = !!creative;
        return creative && (0, _bytes.utf8Decode)(creative);
      })
      // This block returns CreativeMetaDataDef iff the creative was verified
      // as AMP and could be properly parsed for friendly iframe render.
      /** @return {?CreativeMetaDataDef} */
      .then(function (creativeDecoded) {
        checkStillCurrent();
        // Note: It's critical that #getAmpAdMetadata be called
        // on precisely the same creative that was validated
        // via #validateAdResponse_.  See GitHub issue
        // https://github.com/ampproject/amphtml/issues/4187
        var creativeMetaDataDef = void 0;
        if (!creativeDecoded || !(creativeMetaDataDef = _this4.getAmpAdMetadata(creativeDecoded))) {
          if (_this4.inNonAmpPreferenceExp()) {
            // Experiment to give non-AMP creatives same benefits as AMP so
            // update priority.
            _this4.updateLayoutPriority(_layout.LayoutPriority.CONTENT);
          }
          return null;
        }

        // Update priority.
        _this4.updateLayoutPriority(_layout.LayoutPriority.CONTENT);
        // Load any extensions; do not wait on their promises as this
        // is just to prefetch.
        var extensions = _services.Services.extensionsFor(_this4.win);
        creativeMetaDataDef.customElementExtensions.forEach(function (extensionId) {
          return extensions.preloadExtension(extensionId);
        });
        // Preload any fonts.
        (creativeMetaDataDef.customStylesheets || []).forEach(function (font) {
          return _this4.preconnect.preload(font.href);
        });

        var urls = _services.Services.urlForDoc(_this4.getAmpDoc());
        // Preload any AMP images.
        (creativeMetaDataDef.images || []).forEach(function (image) {
          return urls.isSecure(image) && _this4.preconnect.preload(image);
        });
        return creativeMetaDataDef;
      }).catch(function (error) {
        switch (error.message || error) {
          case IFRAME_GET:
          case NETWORK_FAILURE:
            return null;
          case INVALID_SPSA_RESPONSE:
          case NO_CONTENT_RESPONSE:
            return {
              minifiedCreative: '',
              customElementExtensions: [],
              customStylesheets: []
            };
        }
        // If error in chain occurs, report it and return null so that
        // layoutCallback can render via cross domain iframe assuming ad
        // url or creative exist.
        _this4.promiseErrorHandler_(error);
        return null;
      });
    }

    /**
     * This block returns the ad creative if it exists and validates as AMP;
     * null otherwise.
     * @param {!ArrayBuffer} bytes
     * @param {!Headers} headers
     * @return {!Promise<?ArrayBuffer>}
     */

  }, {
    key: 'maybeValidateAmpCreative',
    value: function maybeValidateAmpCreative(bytes, headers) {
      var _this5 = this;

      var checkStillCurrent = this.verifyStillCurrent();
      return this.keysetPromise_.then(function () {
        if (_this5.element.getAttribute('type') == 'fake' && !_this5.element.getAttribute('checksig')) {
          // do not verify signature for fake type ad, unless the ad
          // specfically requires via 'checksig' attribute
          return Promise.resolve(_signatureVerifier.VerificationStatus.OK);
        }
        return signatureVerifierFor(_this5.win).verify(bytes, headers);
      }).then(function (status) {
        checkStillCurrent();
        var result = null;
        switch (status) {
          case _signatureVerifier.VerificationStatus.OK:
            result = bytes;
            break;
          case _signatureVerifier.VerificationStatus.CRYPTO_UNAVAILABLE:
            result = _this5.shouldPreferentialRenderWithoutCrypto() ? bytes : null;
            break;
          // TODO(@taymonbeal, #9274): differentiate between these
          case _signatureVerifier.VerificationStatus.ERROR_KEY_NOT_FOUND:
          case _signatureVerifier.VerificationStatus.ERROR_SIGNATURE_MISMATCH:
            (0, _log.user)().error(TAG, _this5.element.getAttribute('type'), 'Signature verification failed');
          case _signatureVerifier.VerificationStatus.UNVERIFIED:
        }
        if (_this5.isSinglePageStoryAd && !result) {
          throw new Error(INVALID_SPSA_RESPONSE);
        }
        return result;
      });
    }

    /**
     * Populates object mapping of feature to value used for post ad response
     * behavior experimentation.  Assumes comma separated, = delimited key/value
     * pairs.  If key appears more than once, last value wins.
     * @param {string} input
     * @private
     */

  }, {
    key: 'populatePostAdResponseExperimentFeatures_',
    value: function populatePostAdResponseExperimentFeatures_(input) {
      var _this6 = this;

      input.split(',').forEach(function (line) {
        if (!line) {
          return;
        }
        var parts = line.split('=');
        if (parts.length != 2 || !parts[0]) {
          (0, _log.dev)().warn(TAG, 'invalid experiment feature ' + line);
          return;
        }
        _this6.postAdResponseExperimentFeatures[parts[0]] = parts[1];
      });
    }

    /**
     * Refreshes ad slot by fetching a new creative and rendering it. This leaves
     * the current creative displayed until the next one is ready.
     *
     * @param {function()} refreshEndCallback When called, this function will
     *   restart the refresh cycle.
     * @return {Promise} A promise that resolves when all asynchronous portions of
     *   the refresh function complete. This is particularly handy for testing.
     */

  }, {
    key: 'refresh',
    value: function refresh(refreshEndCallback) {
      var _this7 = this;

      (0, _log.dev)().assert(!this.isRefreshing);
      this.isRefreshing = true;
      this.tearDownSlot();
      this.initiateAdRequest();
      (0, _log.dev)().assert(this.adPromise_);
      var promiseId = this.promiseId_;
      return this.adPromise_.then(function () {
        if (!_this7.isRefreshing || promiseId != _this7.promiseId_) {
          // If this refresh cycle was canceled, such as in a no-content
          // response case, keep showing the old creative.
          refreshEndCallback();
          return;
        }
        return _this7.mutateElement(function () {
          // Fire an ad-refresh event so that 3rd parties can track when an ad
          // has changed.
          (0, _analytics.triggerAnalyticsEvent)(_this7.element, AnalyticsTrigger.AD_REFRESH);

          _this7.togglePlaceholder(true);
          // This delay provides a 1 second buffer where the ad loader is
          // displayed in between the creatives.
          return _services.Services.timerFor(_this7.win).promise(1000).then(function () {
            _this7.isRelayoutNeededFlag = true;
            _this7.getResource().layoutCanceled();
            // Only Require relayout after page visible
            _services.Services.viewerForDoc(_this7.getAmpDoc()).whenNextVisible().then(function () {
              _services.Services.resourcesForDoc(_this7.getAmpDoc()). /*OK*/requireLayout(_this7.element);
            });
          });
        });
      });
    }

    /**
     * Handles uncaught errors within promise flow.
     * @param {*} error
     * @param {boolean=} opt_ignoreStack
     * @private
     */

  }, {
    key: 'promiseErrorHandler_',
    value: function promiseErrorHandler_(error, opt_ignoreStack) {
      if ((0, _error.isCancellation)(error)) {
        // Rethrow if cancellation.
        throw error;
      }

      if (error && error.message) {
        error = (0, _log.duplicateErrorIfNecessary)( /** @type {!Error} */error);
      } else {
        error = new Error('unknown error ' + error);
      }
      if (opt_ignoreStack) {
        error.ignoreStack = opt_ignoreStack;
      }

      // Add `type` to the message. Ensure to preserve the original stack.
      var type = this.element.getAttribute('type') || 'notype';
      if (error.message.indexOf(TAG + ': ' + type + ':') != 0) {
        error.message = TAG + ': ' + type + ': ' + error.message;
      }

      // Additional arguments.
      assignAdUrlToError( /** @type {!Error} */error, this.adUrl_);

      if ((0, _mode.getMode)().development || (0, _mode.getMode)().localDev || (0, _mode.getMode)().log) {
        (0, _log.user)().error(TAG, error);
      } else {
        (0, _log.user)().warn(TAG, error);
        // Report with 1% sampling as an expected dev error.
        if (Math.random() < 0.01) {
          (0, _log.dev)().expectedError(TAG, error);
        }
      }
    }

    /** @override */

  }, {
    key: 'layoutCallback',
    value: function layoutCallback() {
      if (this.isRefreshing) {
        this.destroyFrame(true);
      }
      return this.attemptToRenderCreative();
    }

    /**
     * Attemps to render the returned creative following the resolution of the
     * adPromise.
     *
     * @return {!Promise<boolean>|!Promise<undefined>} A promise that resolves
     *   when the rendering attempt has finished.
     * @protected
     */

  }, {
    key: 'attemptToRenderCreative',
    value: function attemptToRenderCreative() {
      var _this8 = this;

      // Promise may be null if element was determined to be invalid for A4A.
      if (!this.adPromise_) {
        if (this.shouldInitializePromiseChain_()) {
          (0, _log.dev)().error(TAG, 'Null promise in layoutCallback');
        }
        return Promise.resolve();
      }
      var checkStillCurrent = this.verifyStillCurrent();
      // Promise chain will have determined if creative is valid AMP.
      return this.adPromise_.then(function (creativeMetaData) {
        checkStillCurrent();
        if (_this8.isCollapsed_) {
          return Promise.resolve();
        }
        // If this.iframe already exists, and we're not currently in the middle
        // of refreshing, bail out here. This should only happen in
        // testing context, not in production.
        if (_this8.iframe && !_this8.isRefreshing) {
          return Promise.resolve();
        }
        if (!creativeMetaData) {
          // Non-AMP creative case, will verify ad url existence.
          return _this8.renderNonAmpCreative();
        }
        // Must be an AMP creative.
        return _this8.renderAmpCreative_(creativeMetaData).catch(function (err) {
          checkStillCurrent();
          // Failed to render via AMP creative path so fallback to non-AMP
          // rendering within cross domain iframe.
          (0, _log.user)().warn(TAG, _this8.element.getAttribute('type'), 'Error injecting creative in friendly frame', err);
          return _this8.renderNonAmpCreative();
        });
      }).catch(function (error) {
        _this8.promiseErrorHandler_(error);
        throw (0, _error.cancellation)();
      });
    }

    /**
     * Returns whether or not the ad request may be sent using XHR.
     * @return {boolean}
     */

  }, {
    key: 'isXhrAllowed',
    value: function isXhrAllowed() {
      return true;
    }

    /** @override **/

  }, {
    key: 'attemptChangeSize',
    value: function attemptChangeSize(newHeight, newWidth) {
      // Store original size of slot in order to allow re-expansion on
      // unlayoutCallback so that it is reverted to original size in case
      // of resumeCallback.
      this.originalSlotSize_ = this.originalSlotSize_ || this.getLayoutBox();
      return _get(AmpA4A.prototype.__proto__ || Object.getPrototypeOf(AmpA4A.prototype), 'attemptChangeSize', this).call(this, newHeight, newWidth);
    }

    /** @override  */

  }, {
    key: 'unlayoutCallback',
    value: function unlayoutCallback() {
      this.tearDownSlot();
      return true;
    }

    /**
     * Attempts to tear down and set all state variables to initial conditions.
     * @protected
     */

  }, {
    key: 'tearDownSlot',
    value: function tearDownSlot() {
      var _this9 = this;

      // Increment promiseId to cause any pending promise to cancel.
      this.promiseId_++;
      this.uiHandler.applyUnlayoutUI();
      if (this.originalSlotSize_) {
        _get(AmpA4A.prototype.__proto__ || Object.getPrototypeOf(AmpA4A.prototype), 'attemptChangeSize', this).call(this, this.originalSlotSize_.height, this.originalSlotSize_.width).then(function () {
          _this9.originalSlotSize_ = null;
        }).catch(function (err) {
          // TODO(keithwrightbos): if we are unable to revert size, on next
          // trigger of promise chain the ad request may fail due to invalid
          // slot size.  Determine how to handle this case.
          (0, _log.dev)().warn(TAG, 'unable to revert to original size', err);
        });
      }

      this.isCollapsed_ = false;

      // Remove rendering frame, if it exists.
      this.destroyFrame();

      this.adPromise_ = null;
      this.adUrl_ = null;
      this.creativeBody_ = null;
      this.isVerifiedAmpCreative_ = false;
      this.fromResumeCallback = false;
      this.experimentalNonAmpCreativeRenderMethod_ = this.getNonAmpCreativeRenderingMethod();
      this.postAdResponseExperimentFeatures = {};
    }

    /**
     * Attempts to remove the current frame and free any associated resources.
     * This function will no-op if this ad slot is currently in the process of
     * being refreshed.
     *
     * @param {boolean=} force Forces the removal of the frame, even if
     *   this.isRefreshing is true.
     * @protected
     */

  }, {
    key: 'destroyFrame',
    value: function destroyFrame() {
      var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (!force && this.isRefreshing) {
        return;
      }
      // Allow embed to release its resources.
      if (this.friendlyIframeEmbed_) {
        this.friendlyIframeEmbed_.destroy();
        this.friendlyIframeEmbed_ = null;
      }
      if (this.iframe && this.iframe.parentElement) {
        this.iframe.parentElement.removeChild(this.iframe);
        this.iframe = null;
      }
      if (this.xOriginIframeHandler_) {
        this.xOriginIframeHandler_.freeXOriginIframe();
        this.xOriginIframeHandler_ = null;
      }
    }

    /** @override  */

  }, {
    key: 'viewportCallback',
    value: function viewportCallback(inViewport) {
      if (this.friendlyIframeEmbed_) {
        (0, _friendlyIframeEmbed.setFriendlyIframeEmbedVisible)(this.friendlyIframeEmbed_, inViewport);
      }
      if (this.xOriginIframeHandler_) {
        this.xOriginIframeHandler_.viewportCallback(inViewport);
      }
    }

    /** @override */

  }, {
    key: 'createPlaceholderCallback',
    value: function createPlaceholderCallback() {
      return this.uiHandler.createPlaceholder();
    }

    /**
     * Gets the Ad URL to send an XHR Request to.  To be implemented
     * by network.
     * @param {?CONSENT_POLICY_STATE} unusedConsentState
     * @param {Promise<!Array<rtcResponseDef>>=} opt_rtcResponsesPromise
     * @return {!Promise<string>|string}
     */

  }, {
    key: 'getAdUrl',
    value: function getAdUrl(unusedConsentState, opt_rtcResponsesPromise) {
      throw new Error('getAdUrl not implemented!');
    }

    /**
     * Resets ad url state to null, used to prevent frame get fallback if error
     * is thrown after url construction but prior to layoutCallback.
     */

  }, {
    key: 'resetAdUrl',
    value: function resetAdUrl() {
      this.adUrl_ = null;
    }

    /**
     * @return {function()} function that when called will verify if current
     *    ad retrieval is current (meaning unlayoutCallback was not executed).
     *    If not, will throw cancellation exception;
     * @throws {Error}
     */

  }, {
    key: 'verifyStillCurrent',
    value: function verifyStillCurrent() {
      var _this10 = this;

      var promiseId = this.promiseId_;
      return function () {
        if (promiseId != _this10.promiseId_) {
          throw (0, _error.cancellation)();
        }
      };
    }

    /**
     * Determine the desired size of the creative based on the HTTP response
     * headers. Must be less than or equal to the original size of the ad slot
     * along each dimension. May be overridden by network.
     *
     * @param {!../../../src/utils/xhr-utils.FetchResponseHeaders} responseHeaders
     * @return {?SizeInfoDef}
     */

  }, {
    key: 'extractSize',
    value: function extractSize(responseHeaders) {
      var headerValue = responseHeaders.get(CREATIVE_SIZE_HEADER);
      if (!headerValue) {
        return null;
      }
      var match = /^([0-9]+)x([0-9]+)$/.exec(headerValue);
      if (!match) {
        // TODO(@taymonbeal, #9274): replace this with real error reporting
        (0, _log.user)().error(TAG, 'Invalid size header: ' + headerValue);
        return null;
      }
      return (/** @type {?SizeInfoDef} */{ width: Number(match[1]), height: Number(match[2]) }
      );
    }

    /**
     * Forces the UI Handler to collapse this slot.
     * @visibleForTesting
     */

  }, {
    key: 'forceCollapse',
    value: function forceCollapse() {
      if (this.isRefreshing) {
        // If, for whatever reason, the new creative would collapse this slot,
        // stick with the old creative until the next refresh cycle.
        this.isRefreshing = false;
        return;
      }
      (0, _log.dev)().assert(this.uiHandler);
      // Store original size to allow for reverting on unlayoutCallback so that
      // subsequent pageview allows for ad request.
      this.originalSlotSize_ = this.originalSlotSize_ || this.getLayoutBox();
      this.uiHandler.applyNoContentUI();
      this.isCollapsed_ = true;
    }

    /**
     * Callback executed when creative has successfully rendered within the
     * publisher page but prior to load (or ini-load for friendly frame AMP
     * creative render).  To be overridden by network implementations as needed.
     *
     * @param {?CreativeMetaDataDef} creativeMetaData metadata if AMP creative,
     *    null otherwise.
     */

  }, {
    key: 'onCreativeRender',
    value: function onCreativeRender(creativeMetaData) {
      this.maybeTriggerAnalyticsEvent_(creativeMetaData ? 'renderFriendlyEnd' : 'renderCrossDomainEnd');
    }

    /**
     * @param {!Element} iframe that was just created.  To be overridden for
     * testing.
     * @visibleForTesting
     */

  }, {
    key: 'onCrossDomainIframeCreated',
    value: function onCrossDomainIframeCreated(iframe) {
      (0, _log.dev)().info(TAG, this.element.getAttribute('type'), 'onCrossDomainIframeCreated ' + iframe);
    }

    /**
     * Send ad request, extract the creative and signature from the response.
     * @param {string} adUrl Request URL to send XHR to.
     * @return {!Promise<?../../../src/utils/xhr-utils.FetchResponse>}
     * @protected
     */

  }, {
    key: 'sendXhrRequest',
    value: function sendXhrRequest(adUrl) {
      var _this11 = this;

      this.maybeTriggerAnalyticsEvent_('adRequestStart');
      var xhrInit = {
        mode: 'cors',
        method: 'GET',
        credentials: 'include'
      };
      return _services.Services.xhrFor(this.win).fetch(adUrl, xhrInit).catch(function (error) {
        if (error.response && error.response.status > 200) {
          // Invalid server response code so we should collapse.
          return null;
        }
        // If an error occurs, let the ad be rendered via iframe after delay.
        // TODO(taymonbeal): Figure out a more sophisticated test for deciding
        // whether to retry with an iframe after an ad request failure or just
        // give up and render the fallback content (or collapse the ad slot).
        var networkFailureHandlerResult = _this11.onNetworkFailure(error, /** @type {string} */_this11.adUrl_);
        (0, _log.dev)().assert(!!networkFailureHandlerResult);
        if (networkFailureHandlerResult.frameGetDisabled) {
          // Reset adUrl to null which will cause layoutCallback to not
          // fetch via frame GET.
          (0, _log.dev)().info(TAG, 'frame get disabled as part of network failure handler');
          _this11.resetAdUrl();
        } else {
          _this11.adUrl_ = networkFailureHandlerResult.adUrl || _this11.adUrl_;
          return Promise.reject(NETWORK_FAILURE);
        }
        return null;
      });
    }

    /**
     * Called on network failure sending XHR CORS ad request allowing for
     * modification of ad url and prevent frame GET request on layoutCallback.
     * By default, GET frame request will be executed with same ad URL as used
     * for XHR CORS request.
     * @param {*} unusedError from network failure
     * @param {string} unusedAdUrl used for network request
     * @return {!{adUrl: (string|undefined), frameGetDisabled: (boolean|undefined)}}
     */

  }, {
    key: 'onNetworkFailure',
    value: function onNetworkFailure(unusedError, unusedAdUrl) {
      return {};
    }

    /**
     * To be overridden by network specific implementation indicating which
     * signing service(s) is to be used.
     * @return {!Array<string>} A list of signing services.
     */

  }, {
    key: 'getSigningServiceNames',
    value: function getSigningServiceNames() {
      return (0, _mode.getMode)().localDev ? ['google', 'google-dev'] : ['google'];
    }

    /**
     * Render non-AMP creative within cross domain iframe.
     * @param {boolean=} throttleApplied Whether incrementLoadingAds has already
     *    been called
     * @return {Promise<boolean>} Whether the creative was successfully rendered.
     */

  }, {
    key: 'renderNonAmpCreative',
    value: function renderNonAmpCreative(throttleApplied) {
      var _this12 = this;

      if (this.element.getAttribute('disable3pfallback') == 'true') {
        (0, _log.user)().warn(TAG, this.element.getAttribute('type'), 'fallback to 3p disabled');
        return Promise.resolve(false);
      }
      // TODO(keithwrightbos): remove when no longer needed.
      (0, _log.dev)().warn(TAG, 'fallback to 3p');
      // Haven't rendered yet, so try rendering via one of our
      // cross-domain iframe solutions.
      var method = this.experimentalNonAmpCreativeRenderMethod_;
      var renderPromise = Promise.resolve(false);
      if ((method == XORIGIN_MODE.SAFEFRAME || method == XORIGIN_MODE.NAMEFRAME) && this.creativeBody_) {
        renderPromise = this.renderViaNameAttrOfXOriginIframe_(this.creativeBody_);
        this.creativeBody_ = null; // Free resources.
      } else if (this.adUrl_) {
        (0, _url.assertHttpsUrl)(this.adUrl_, this.element);
        renderPromise = this.renderViaIframeGet_(this.adUrl_);
      } else {
        // Ad URL may not exist if buildAdUrl throws error or returns empty.
        // If error occurred, it would have already been reported but let's
        // report to user in case of empty.
        (0, _log.user)().warn(TAG, this.element.getAttribute('type'), 'No creative or URL available -- A4A can\'t render any ad');
      }
      if (!throttleApplied && !this.inNonAmpPreferenceExp()) {
        (0, _concurrentLoad.incrementLoadingAds)(this.win, renderPromise);
      }
      return renderPromise.then(function (result) {
        _this12.maybeTriggerAnalyticsEvent_('crossDomainIframeLoaded');
        // Pass on the result to the next value in the promise change.
        return result;
      });
    }

    /**
     * Render a validated AMP creative directly in the parent page.
     * @param {!CreativeMetaDataDef} creativeMetaData Metadata required to render
     *     AMP creative.
     * @return {!Promise} Whether the creative was successfully rendered.
     * @private
     */

  }, {
    key: 'renderAmpCreative_',
    value: function renderAmpCreative_(creativeMetaData) {
      var _this13 = this;

      (0, _log.dev)().assert(creativeMetaData.minifiedCreative, 'missing minified creative');
      (0, _log.dev)().assert(!!this.element.ownerDocument, 'missing owner document?!');
      this.maybeTriggerAnalyticsEvent_('renderFriendlyStart');
      // Create and setup friendly iframe.
      this.iframe = /** @type {!HTMLIFrameElement} */(0, _dom.createElementWithAttributes)(
      /** @type {!Document} */this.element.ownerDocument, 'iframe', (0, _object.dict)({
        // NOTE: It is possible for either width or height to be 'auto',
        // a non-numeric value.
        'height': this.creativeSize_.height,
        'width': this.creativeSize_.width,
        'frameborder': '0',
        'allowfullscreen': '',
        'allowtransparency': '',
        'scrolling': 'no'
      }));
      this.applyFillContent(this.iframe);
      var fontsArray = [];
      if (creativeMetaData.customStylesheets) {
        creativeMetaData.customStylesheets.forEach(function (s) {
          var href = s['href'];
          if (href) {
            fontsArray.push(href);
          }
        });
      }
      var checkStillCurrent = this.verifyStillCurrent();
      return (0, _friendlyIframeEmbed.installFriendlyIframeEmbed)(this.iframe, this.element, {
        host: this.element,
        // Need to guarantee that this is no longer null
        url: /** @type {string} */this.adUrl_,
        html: creativeMetaData.minifiedCreative,
        extensionIds: creativeMetaData.customElementExtensions || [],
        fonts: fontsArray
      }, function (embedWin) {
        (0, _urlReplacementsImpl.installUrlReplacementsForEmbed)(_this13.getAmpDoc(), embedWin, new _a4aVariableSource.A4AVariableSource(_this13.getAmpDoc(), embedWin));
      }).then(function (friendlyIframeEmbed) {
        checkStillCurrent();
        _this13.friendlyIframeEmbed_ = friendlyIframeEmbed;
        (0, _friendlyIframeEmbed.setFriendlyIframeEmbedVisible)(friendlyIframeEmbed, _this13.isInViewport());
        // Ensure visibility hidden has been removed (set by boilerplate).
        var frameDoc = friendlyIframeEmbed.iframe.contentDocument || friendlyIframeEmbed.win.document;
        (0, _style.setStyle)(frameDoc.body, 'visibility', 'visible');
        protectFunctionWrapper(_this13.onCreativeRender, _this13, function (err) {
          (0, _log.dev)().error(TAG, _this13.element.getAttribute('type'), 'Error executing onCreativeRender', err);
        })(creativeMetaData);
        // It's enough to wait for "ini-load" signal because in a FIE case
        // we know that the embed no longer consumes significant resources
        // after the initial load.
        return friendlyIframeEmbed.whenIniLoaded();
      }).then(function () {
        checkStillCurrent();
        // Capture ini-load ping.
        _this13.maybeTriggerAnalyticsEvent_('friendlyIframeIniLoad');
      });
    }

    /**
     * Shared functionality for cross-domain iframe-based rendering methods.
     * @param {!JsonObject<string, string>} attributes The attributes of the iframe.
     * @return {!Promise} awaiting load event for ad frame
     * @private
     */

  }, {
    key: 'iframeRenderHelper_',
    value: function iframeRenderHelper_(attributes) {
      var _this14 = this;

      var mergedAttributes = Object.assign(attributes, (0, _object.dict)({
        'height': this.creativeSize_.height,
        'width': this.creativeSize_.width
      }));

      if (this.sentinel) {
        mergedAttributes['data-amp-3p-sentinel'] = this.sentinel;
      }
      if (this.shouldSandbox_) {
        mergedAttributes['sandbox'] = IFRAME_SANDBOXING_FLAGS;
      }
      if ((0, _experiments.isExperimentOn)(this.win, 'no-sync-xhr-in-ads')) {
        // Block synchronous XHR in ad. These are very rare, but super bad for UX
        // as they block the UI thread for the arbitrary amount of time until the
        // request completes.
        mergedAttributes['allow'] = 'sync-xhr \'none\';';
      }
      this.iframe = (0, _dom.createElementWithAttributes)(
      /** @type {!Document} */this.element.ownerDocument, 'iframe', /** @type {!JsonObject} */Object.assign(mergedAttributes, SHARED_IFRAME_PROPERTIES));
      // TODO(keithwrightbos): noContentCallback?
      this.xOriginIframeHandler_ = new AMP.AmpAdXOriginIframeHandler(this);
      // Iframe is appended to element as part of xorigin frame handler init.
      // Executive onCreativeRender after init to ensure it can get reference
      // to frame but prior to load to allow for earlier access.
      var frameLoadPromise = this.xOriginIframeHandler_.init(this.iframe, /* opt_isA4A */true);
      protectFunctionWrapper(this.onCreativeRender, this, function (err) {
        (0, _log.dev)().error(TAG, _this14.element.getAttribute('type'), 'Error executing onCreativeRender', err);
      })(null);
      return frameLoadPromise;
    }

    /**
     * Creates iframe whose src matches that of the ad URL. For standard
     * Fast Fetch running on the AMP cdn, an XHR request will typically have
     * already been sent to the same adUrl, and the response should
     * have been cached causing the browser to render without callout.  However,
     * it is possible for cache miss to occur which can be detected server-side
     * by missing ORIGIN header.
     *
     * Additionally, this method is also used in certain cases to send the only
     * request, i.e. the initial XHR is skipped.
     *
     * Note: As of 2016-10-18, the fill-from-cache assumption appears to fail on
     * Safari-on-iOS, which issues a fresh network request, even though the
     * content is already in cache.
     *
     * @param {string} adUrl  Ad request URL, as sent to #sendXhrRequest (i.e.,
     *    before any modifications that XHR module does to it.)
     * @return {!Promise} awaiting ad completed insertion.
     * @private
     */

  }, {
    key: 'renderViaIframeGet_',
    value: function renderViaIframeGet_(adUrl) {
      this.maybeTriggerAnalyticsEvent_('renderCrossDomainStart');
      return this.iframeRenderHelper_((0, _object.dict)({
        'src': _services.Services.xhrFor(this.win).getCorsUrl(this.win, adUrl),
        'name': JSON.stringify((0, _iframeAttributes.getContextMetadata)(this.win, this.element, this.sentinel))
      }));
    }

    /**
     * Render the creative via some "cross domain iframe that accepts the creative
     * in the name attribute".  This could be SafeFrame or the AMP-native
     * NameFrame.
     *
     * @param {!ArrayBuffer} creativeBody
     * @return {!Promise} awaiting load event for ad frame
     * @private
     */

  }, {
    key: 'renderViaNameAttrOfXOriginIframe_',
    value: function renderViaNameAttrOfXOriginIframe_(creativeBody) {
      var _this15 = this;

      /** @type {?string} */
      var method = this.experimentalNonAmpCreativeRenderMethod_;
      (0, _log.dev)().assert(method == XORIGIN_MODE.SAFEFRAME || method == XORIGIN_MODE.NAMEFRAME, 'Unrecognized A4A cross-domain rendering mode: %s', method);
      this.maybeTriggerAnalyticsEvent_('renderSafeFrameStart');
      var checkStillCurrent = this.verifyStillCurrent();
      return (0, _promise.tryResolve)(function () {
        return (0, _bytes.utf8Decode)(creativeBody);
      }).then(function (creative) {
        checkStillCurrent();
        var srcPath = void 0;
        var name = '';
        switch (method) {
          case XORIGIN_MODE.SAFEFRAME:
            srcPath = _this15.getSafeframePath() + '?n=0';
            break;
          case XORIGIN_MODE.NAMEFRAME:
            srcPath = (0, _pFrame.getDefaultBootstrapBaseUrl)(_this15.win, 'nameframe');
            // Name will be set for real below in nameframe case.
            break;
          default:
            // Shouldn't be able to get here, but...  Because of the assert,
            // above, we can only get here in non-dev mode, so give user feedback.
            (0, _log.user)().error('A4A', 'A4A received unrecognized cross-domain name' + ' attribute iframe rendering mode request: %s.  Unable to' + ' render a creative for' + ' slot %s.', method, _this15.element.getAttribute('id'));
            return Promise.reject('Unrecognized rendering mode request');
        }
        // TODO(bradfrizzell): change name of function and var
        var contextMetadata = (0, _iframeAttributes.getContextMetadata)(_this15.win, _this15.element, _this15.sentinel, _this15.getAdditionalContextMetadata(method == XORIGIN_MODE.SAFEFRAME));
        // TODO(bradfrizzell) Clean up name assigning.
        if (method == XORIGIN_MODE.NAMEFRAME) {
          contextMetadata['creative'] = creative;
          name = JSON.stringify(contextMetadata);
        } else if (method == XORIGIN_MODE.SAFEFRAME) {
          contextMetadata = JSON.stringify(contextMetadata);
          name = _this15.safeframeVersion + ';' + creative.length + ';' + creative + ('' + contextMetadata);
        }
        return _this15.iframeRenderHelper_((0, _object.dict)({ 'src': srcPath, 'name': name }));
      });
    }

    /**
     *
     * Throws {@code SyntaxError} if the metadata block delimiters are missing
     * or corrupted or if the metadata content doesn't parse as JSON.
     * @param {string} creative from which CSS is extracted
     * @return {?CreativeMetaDataDef} Object result of parsing JSON data blob inside
     *     the metadata markers on the ad text, or null if no metadata markers are
     *     found.
     * TODO(keithwrightbos@): report error cases
     */

  }, {
    key: 'getAmpAdMetadata',
    value: function getAmpAdMetadata(creative) {
      var metadataStart = -1;
      var metadataString = void 0;
      for (var i = 0; i < METADATA_STRINGS.length; i++) {
        metadataString = METADATA_STRINGS[i];
        metadataStart = creative.lastIndexOf(metadataString);
        if (metadataStart >= 0) {
          break;
        }
      }
      if (metadataStart < 0) {
        // Couldn't find a metadata blob.
        (0, _log.dev)().warn(TAG, this.element.getAttribute('type'), 'Could not locate start index for amp meta data in: %s', creative);
        return null;
      }
      var metadataEnd = creative.lastIndexOf('</script>');
      if (metadataEnd < 0) {
        // Couldn't find a metadata blob.
        (0, _log.dev)().warn(TAG, this.element.getAttribute('type'), 'Could not locate closing script tag for amp meta data in: %s', creative);
        return null;
      }
      try {
        var metaDataObj = (0, _json.parseJson)(creative.slice(metadataStart + metadataString.length, metadataEnd));
        var ampRuntimeUtf16CharOffsets = metaDataObj['ampRuntimeUtf16CharOffsets'];
        if (!(0, _types.isArray)(ampRuntimeUtf16CharOffsets) || ampRuntimeUtf16CharOffsets.length != 2 || typeof ampRuntimeUtf16CharOffsets[0] !== 'number' || typeof ampRuntimeUtf16CharOffsets[1] !== 'number') {
          throw new Error('Invalid runtime offsets');
        }
        var metaData = {};
        if (metaDataObj['customElementExtensions']) {
          metaData.customElementExtensions = metaDataObj['customElementExtensions'];
          if (!(0, _types.isArray)(metaData.customElementExtensions)) {
            throw new Error('Invalid extensions', metaData.customElementExtensions);
          }
        } else {
          metaData.customElementExtensions = [];
        }
        if (metaDataObj['customStylesheets']) {
          // Expect array of objects with at least one key being 'href' whose
          // value is URL.
          metaData.customStylesheets = metaDataObj['customStylesheets'];
          var errorMsg = 'Invalid custom stylesheets';
          if (!(0, _types.isArray)(metaData.customStylesheets)) {
            throw new Error(errorMsg);
          }

          var urls = _services.Services.urlForDoc(this.getAmpDoc());
          metaData.customStylesheets.forEach(function (stylesheet) {
            if (!(0, _types.isObject)(stylesheet) || !stylesheet['href'] || typeof stylesheet['href'] !== 'string' || !urls.isSecure(stylesheet['href'])) {
              throw new Error(errorMsg);
            }
          });
        }
        if ((0, _types.isArray)(metaDataObj['images'])) {
          // Load maximum of 5 images.
          metaData.images = metaDataObj['images'].splice(0, 5);
        }
        if (this.isSinglePageStoryAd) {
          if (!metaDataObj['ctaUrl'] || !metaDataObj['ctaType']) {
            throw new Error(INVALID_SPSA_RESPONSE);
          }
          this.element.setAttribute('data-vars-ctatype', metaDataObj['ctaType']);
          this.element.setAttribute('data-vars-ctaurl', metaDataObj['ctaUrl']);
        }
        // TODO(keithwrightbos): OK to assume ampRuntimeUtf16CharOffsets is before
        // metadata as its in the head?
        metaData.minifiedCreative = creative.slice(0, ampRuntimeUtf16CharOffsets[0]) + creative.slice(ampRuntimeUtf16CharOffsets[1], metadataStart) + creative.slice(metadataEnd + '</script>'.length);
        return metaData;
      } catch (err) {
        (0, _log.dev)().warn(TAG, this.element.getAttribute('type'), 'Invalid amp metadata: %s', creative.slice(metadataStart + metadataString.length, metadataEnd));
        if (this.isSinglePageStoryAd) {
          throw err;
        }
        return null;
      }
    }

    /**
     * @return {string} full url to safeframe implementation.
     */

  }, {
    key: 'getSafeframePath',
    value: function getSafeframePath() {
      return 'https://tpc.googlesyndication.com/safeframe/' + (this.safeframeVersion + '/html/container.html');
    }

    /**
     * Checks if the given lifecycle event has a corresponding amp-analytics event
     * and fires the analytics trigger if so.
     * @param {string} lifecycleStage
     * @private
     */

  }, {
    key: 'maybeTriggerAnalyticsEvent_',
    value: function maybeTriggerAnalyticsEvent_(lifecycleStage) {
      if (!this.a4aAnalyticsConfig_) {
        // No config exists that will listen to this event.
        return;
      }
      var analyticsEvent = (0, _log.dev)().assert(LIFECYCLE_STAGE_TO_ANALYTICS_TRIGGER[lifecycleStage]);
      var analyticsVars = Object.assign({ 'time': Math.round(this.getNow_()) }, this.getA4aAnalyticsVars(analyticsEvent));
      (0, _analytics.triggerAnalyticsEvent)(this.element, analyticsEvent, analyticsVars);
    }

    /**
     * Returns variables to be included on an analytics event. This can be
     * overridden by specific network implementations.
     * Note that this function is called for each time an analytics event is
     * fired.
     * @param {string} unusedAnalyticsEvent The name of the analytics event.
     * @return {!Object<string, string>}
     */

  }, {
    key: 'getA4aAnalyticsVars',
    value: function getA4aAnalyticsVars(unusedAnalyticsEvent) {
      return {};
    }

    /**
     * Returns network-specific config for amp-analytics. It should overridden
     * with network-specific configurations.
     * This function may return null. If so, no amp-analytics element will be
     * added to this A4A element and no A4A triggers will be fired.
     * @return {?JsonObject}
     */

  }, {
    key: 'getA4aAnalyticsConfig',
    value: function getA4aAnalyticsConfig() {
      return null;
    }

    /**
     * Attempts to execute Real Time Config, if the ad network has enabled it.
     * If it is not supported by the network, but the publisher has included
     * the rtc-config attribute on the amp-ad element, warn.
     * @param {?CONSENT_POLICY_STATE} consentState
     * @return {Promise<!Array<!rtcResponseDef>>|undefined}
     */

  }, {
    key: 'tryExecuteRealTimeConfig_',
    value: function tryExecuteRealTimeConfig_(consentState) {
      if (!!AMP.RealTimeConfigManager) {
        try {
          return new AMP.RealTimeConfigManager(this).maybeExecuteRealTimeConfig(this.getCustomRealTimeConfigMacros_(), consentState);
        } catch (err) {
          (0, _log.user)().error(TAG, 'Could not perform Real Time Config.', err);
        }
      } else if (this.element.getAttribute('rtc-config')) {
        (0, _log.user)().error(TAG, 'RTC not supported for ad network ' + ('' + this.element.getAttribute('type')));
      }
    }

    /**
     * To be overriden by network impl. Should return a mapping of macro keys
     * to values for substitution in publisher-specified URLs for RTC.
     * @return {!Object<string,
     *   !../../../src/service/variable-source.AsyncResolverDef>}
     */

  }, {
    key: 'getCustomRealTimeConfigMacros_',
    value: function getCustomRealTimeConfigMacros_() {
      return {};
    }

    /**
     * Whether preferential render should still be utilized if web crypto is
     * unavailable, and crypto signature header is present.
     * @return {boolean}
     */

  }, {
    key: 'shouldPreferentialRenderWithoutCrypto',
    value: function shouldPreferentialRenderWithoutCrypto() {
      return false;
    }

    /**
     * @param {string=} headerValue Method as given in header.
     */

  }, {
    key: 'getNonAmpCreativeRenderingMethod',
    value: function getNonAmpCreativeRenderingMethod(headerValue) {
      if (headerValue) {
        if (!(0, _types.isEnumValue)(XORIGIN_MODE, headerValue)) {
          (0, _log.dev)().error('AMP-A4A', 'cross-origin render mode header ' + headerValue);
        } else {
          return headerValue;
        }
      }
      return _services.Services.platformFor(this.win).isIos() ? XORIGIN_MODE.NAMEFRAME : null;
    }

    /**
     * Returns base object that will be written to cross-domain iframe name
     * attribute.
     * @param {boolean=} opt_isSafeframe Whether creative is rendering into
     *   a safeframe.
     * @return {!JsonObject|undefined}
     */

  }, {
    key: 'getAdditionalContextMetadata',
    value: function getAdditionalContextMetadata(opt_isSafeframe) {}
  }]);

  return AmpA4A;
}(AMP.BaseElement);

/**
 * Attachs query string portion of ad url to error.
 * @param {!Error} error
 * @param {?string} adUrl
 */


function assignAdUrlToError(error, adUrl) {
  if (!adUrl || error.args && error.args['au']) {
    return;
  }
  var adQueryIdx = adUrl.indexOf('?');
  if (adQueryIdx == -1) {
    return;
  }
  (error.args || (error.args = {}))['au'] = adUrl.substring(adQueryIdx + 1, adQueryIdx + 251);
}

/**
 * Returns the signature verifier for the given window. Lazily creates it if it
 * doesn't already exist.
 *
 * This ensures that only one signature verifier exists per window, which allows
 * multiple Fast Fetch ad slots on a page (even ones from different ad networks)
 * to share the same cached public keys.
 *
 * @param {!Window} win
 * @return {!SignatureVerifier}
 * @visibleForTesting
 */
function signatureVerifierFor(win) {
  var propertyName = 'AMP_FAST_FETCH_SIGNATURE_VERIFIER_';
  return win[propertyName] || (win[propertyName] = new _signatureVerifier.SignatureVerifier(win, _a4aConfig.signingServerURLs));
}

},{"../../../ads/_a4a-config":1,"../../../ads/google/a4a/utils":6,"../../../src/3p-frame":21,"../../../src/ad-helper":23,"../../../src/analytics":25,"../../../src/consent":29,"../../../src/consent-state":28,"../../../src/dom":32,"../../../src/error":34,"../../../src/experiments":37,"../../../src/extension-analytics":39,"../../../src/friendly-iframe-embed":40,"../../../src/iframe-attributes":41,"../../../src/json":43,"../../../src/layout":45,"../../../src/log":46,"../../../src/mode":48,"../../../src/service/url-replacements-impl":62,"../../../src/services":64,"../../../src/style":68,"../../../src/types":69,"../../../src/url":72,"../../../src/utils/bytes":74,"../../../src/utils/object":78,"../../../src/utils/promise":79,"../../amp-ad/0.1/concurrent-load":18,"./a4a-variable-source":9,"./signature-verifier":11}],11:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SignatureVerifier = exports.VerificationStatus = exports.AMP_SIGNATURE_HEADER = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright 2017 The AMP HTML Authors. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * distributed under the License is distributed on an "AS-IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _services = require('../../../src/services');

var _base = require('../../../src/utils/base64');

var _log = require('../../../src/log');

var _types = require('../../../src/types');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** @visibleForTesting */
var AMP_SIGNATURE_HEADER = exports.AMP_SIGNATURE_HEADER = 'AMP-Fast-Fetch-Signature';

/**
 * The result of an attempt to verify a Fast Fetch signature. The different
 * error statuses are used for reporting errors to the ad network.
 *
 * @enum {number}
 */
var VerificationStatus = exports.VerificationStatus = {

  /** The ad was successfully verified as AMP. */
  OK: 0,

  /**
   * Verification failed because of a factor beyond the ad network's control,
   * such as a network connectivity failure, unavailability of Web Cryptography
   * in the current browsing context, or a misbehaving signing service.
   */
  UNVERIFIED: 1,

  /**
   * Verification failed because the keypair ID provided by the ad network did
   * not correspond to any public key offered by the signing service.
   */
  ERROR_KEY_NOT_FOUND: 2,

  /**
   * Verification failed because the signature provided by the ad network was
   * not the correct cryptographic signature for the given creative data and
   * public key.
   */
  ERROR_SIGNATURE_MISMATCH: 3,

  /**
   * Verification failed because the page does not have web crypto available,
   * i.e. is not SSL.
   */
  CRYPTO_UNAVAILABLE: 4

};

/**
 * A window-level object that encapsulates the logic for obtaining public keys
 * from Fast Fetch signing services and cryptographically verifying signatures
 * of AMP creatives.
 *
 * Unlike an AMP service, a signature verifier is **stateful**. It maintains a
 * cache of all public keys that it has previously downloaded and imported, and
 * also keeps track of which keys and signing services have already had
 * unsuccessful download or import attempts and should not be attempted again.
 *
 * This entire class is currently dead code in production, but will soon be
 * introduced as an experiment.
 */

var SignatureVerifier = exports.SignatureVerifier = function () {

  /**
   * @param {!Window} win
   * @param {!Object<string, string>} signingServerURLs a map from the name of
   *    each trusted signing service to the URL of its public key endpoint
   */
  function SignatureVerifier(win, signingServerURLs) {
    _classCallCheck(this, SignatureVerifier);

    /** @private @const {!Window} */
    this.win_ = win;

    /** @private @const {!Object<string, string>} */
    this.signingServerURLs_ = signingServerURLs;

    /**
     * The cache where all the public keys are stored.
     *
     * This field has a lot of internal structure and its type's a little hairy,
     * so here's a rundown of what each piece means:
     *  - If Web Cryptography isn't available in the current browsing context,
     *    then the entire field is null. Since the keys are of no use, we don't
     *    fetch them.
     *  - Otherwise, it's a map-like `Object` from signing service names (as
     *    defined in the Fast Fetch config registry) to "signer" objects.
     *  - The `promise` property of each signer resolves to a boolean indicating
     *    whether the most recent attempt to fetch and import that signing
     *    service's public keys was successful. If the promise is still pending,
     *    then an attempt is currently in progress. This property is mutable;
     *    its value is replaced with a new promise when a new attempt is made.
     *    Invariant: only one attempt may be in progress at a time, so this
     *    property may not be mutated while the current promise is pending.
     *  - The `keys` property of each signer is a map-like `Object` from keypair
     *    IDs to nullable key promises. (This means that a property access on
     *    this object may evaluate to `undefined`, `null`, or a `Promise`
     *    object.) The `keys` object is internally mutable; new keys are added
     *    to it as they are fetched. Invariant: the `keys` object may be mutated
     *    only while the corresponding `promise` object is pending; this ensures
     *    that callbacks chained to `promise` may observe `keys` without being
     *    subject to race conditions.
     *  - If a key promise (i.e., the value of a property access on the `keys`
     *    object) is absent (i.e., `undefined`), then no key with that keypair
     *    ID is present (but this could be because of a stale cache). If it's
     *    null, then no key with that keypair ID could be found even after
     *    cachebusting. If it's a `Promise` that resolves to `null`, then key
     *    data for that keypair ID was found but could not be imported
     *    successfully; this most likely indicates signing service misbehavior.
     *    The success case is a `Promise` that resolves to a `CryptoKey`.
     *
     * @private @const {?Object<string, {promise: !Promise<boolean>, keys: !Object<string, ?Promise<?webCrypto.CryptoKey>>}>}
     */
    this.signers_ = _services.Services.cryptoFor(win).isPkcsAvailable() ? {} : null;

    /**
     * Gets a notion of current time, in ms.  The value is not necessarily
     * absolute, so should be used only for computing deltas.  When available,
     * the performance system will be used; otherwise Date.now() will be
     * returned.
     *
     * @private @const {function(): number}
     */
    this.getNow_ = win.performance && win.performance.now ? win.performance.now.bind(win.performance) : Date.now;
  }

  /**
   * Fetches and imports the public keyset for the named signing service,
   * without any cachebusting. Hopefully, this will hit cache in many cases
   * and not make an actual network round-trip. This method should be called
   * as early as possible, once it's known which signing service is likely to
   * be used, so that the network request and key imports can execute in
   * parallel with other operations.
   *
   * @param {string} signingServiceName
   */


  _createClass(SignatureVerifier, [{
    key: 'loadKeyset',
    value: function loadKeyset(signingServiceName) {
      if (this.signers_ && !this.signers_[signingServiceName]) {
        var keys = {};
        var promise = this.fetchAndAddKeys_(keys, signingServiceName, null);
        this.signers_[signingServiceName] = { promise: promise, keys: keys };
      }
    }

    /**
     * Extracts a cryptographic signature from `headers` and attempts to verify
     * that it's the correct cryptographic signature for `creative`.
     *
     * As a precondition, `loadKeyset(signingServiceName)` must have already been
     * called.
     *
     * @param {!ArrayBuffer} creative
     * @param {!Headers} headers
     * @return {!Promise<!VerificationStatus>}
     */

  }, {
    key: 'verify',
    value: function verify(creative, headers) {
      var signatureFormat = /^([A-Za-z0-9._-]+):([A-Za-z0-9._-]+):([A-Za-z0-9+/]{341}[AQgw]==)$/;
      if (!headers.has(AMP_SIGNATURE_HEADER)) {
        return Promise.resolve(VerificationStatus.UNVERIFIED);
      }
      var headerValue = headers.get(AMP_SIGNATURE_HEADER);
      var match = signatureFormat.exec(headerValue);
      if (!match) {
        // TODO(@taymonbeal, #9274): replace this with real error reporting
        (0, _log.user)().error('AMP-A4A', 'Invalid signature header: ' + headerValue.split(':')[0]);
        return Promise.resolve(VerificationStatus.ERROR_SIGNATURE_MISMATCH);
      }
      return this.verifyCreativeAndSignature(match[1], match[2], (0, _base.base64DecodeToBytes)(match[3]), creative);
    }

    /**
     * Verifies that `signature` is the correct cryptographic signature for
     * `creative`, with the public key from the named signing service identified
     * by `keypairId`.
     *
     * As a precondition, `loadKeyset(signingServiceName)` must have already been
     * called.
     *
     * If the keyset for the named signing service was imported successfully but
     * did not include a key for `keypairId`, this may be the result of a stale
     * browser cache. To work around this, `keypairId` is added to the public key
     * endpoint URL as a query parameter and the keyset is re-fetched. Other kinds
     * of failures, including network connectivity failures, are not retried.
     *
     * @param {string} signingServiceName
     * @param {string} keypairId
     * @param {!Uint8Array} signature
     * @param {!ArrayBuffer} creative
     * @return {!Promise<!VerificationStatus>}
     * @visibleForTesting
     */

  }, {
    key: 'verifyCreativeAndSignature',
    value: function verifyCreativeAndSignature(signingServiceName, keypairId, signature, creative) {
      var _this = this;

      if (!this.signers_) {
        // Web Cryptography isn't available.
        return Promise.resolve(VerificationStatus.CRYPTO_UNAVAILABLE);
      }
      var signer = this.signers_[signingServiceName];
      (0, _log.dev)().assert(signer, 'Keyset for service %s not loaded before verification', signingServiceName);
      return signer.promise.then(function (success) {
        if (!success) {
          // The public keyset couldn't be fetched and imported. Probably a
          // network connectivity failure.
          return VerificationStatus.UNVERIFIED;
        }
        var keyPromise = signer.keys[keypairId];
        if (keyPromise === undefined) {
          // We don't have this key, but maybe the cache is stale; try
          // cachebusting.
          signer.promise = _this.fetchAndAddKeys_(signer.keys, signingServiceName, keypairId).then(function (success) {
            if (signer.keys[keypairId] === undefined) {
              // We still don't have this key; make sure we never try
              // again.
              signer.keys[keypairId] = null;
            }
            return success;
          });
          // This "recursive" call can recurse at most once.
          return _this.verifyCreativeAndSignature(signingServiceName, keypairId, signature, creative);
        } else if (keyPromise === null) {
          // We don't have this key and we already tried cachebusting.
          return VerificationStatus.ERROR_KEY_NOT_FOUND;
        } else {
          return keyPromise.then(function (key) {
            if (!key) {
              // This particular public key couldn't be imported. Probably the
              // signing service's fault.
              return VerificationStatus.UNVERIFIED;
            }
            var crypto = _services.Services.cryptoFor(_this.win_);
            return crypto.verifyPkcs(key, signature, creative).then(function (result) {
              return result ? VerificationStatus.OK : VerificationStatus.ERROR_SIGNATURE_MISMATCH;
            }, function (err) {
              // Web Cryptography rejected the verification attempt. This
              // hopefully won't happen in the wild, but browsers can be weird
              // about this, so we need to guard against the possibility.
              // Phone home to the AMP Project so that we can understand why
              // this occurred.
              var message = err && err.message;
              (0, _log.dev)().error('AMP-A4A', 'Failed to verify signature: ' + message);
              return VerificationStatus.UNVERIFIED;
            });
          });
        }
      });
    }

    /**
     * Try to download the keyset for the named signing service and add a promise
     * for each key to the `keys` object.
     *
     * @param {!Object<string, ?Promise<?webCrypto.CryptoKey>>} keys the object to
     *     add each key promise to. This is mutated while the returned promise is
     *     pending.
     * @param {string} signingServiceName
     * @param {?string} keypairId the keypair ID to include in the query string
     *     for cachebusting purposes, or `null` if no cachebusting is needed
     * @return {!Promise<boolean>} resolves after the mutation of `keys` is
     *     complete, to `true` if the keyset was downloaded and parsed
     *     successfully (even if some keys were malformed), or `false` if a
     *     keyset-level failure occurred
     * @private
     */

  }, {
    key: 'fetchAndAddKeys_',
    value: function fetchAndAddKeys_(keys, signingServiceName, keypairId) {
      var _this2 = this;

      var url = this.signingServerURLs_[signingServiceName];
      if (keypairId != null) {
        url += '?kid=' + encodeURIComponent(keypairId);
      }
      // TODO(@taymonbeal, #11088): consider a timeout on this fetch
      return _services.Services.xhrFor(this.win_).fetchJson(url, {
        mode: 'cors',
        method: 'GET',
        // This should be cached across publisher domains, so don't append
        // __amp_source_origin to the URL.
        ampCors: false,
        credentials: 'omit'
      }).then(function (response) {
        // These are assertions on signing service behavior required by
        // the spec. However, nothing terrible happens if they aren't met
        // and there's no meaningful error recovery to be done if they
        // fail, so we don't need to do them at runtime in production.
        // They're included in dev mode as a debugging aid.
        (0, _log.dev)().assert(response.status === 200, 'Fast Fetch keyset spec requires status code 200');
        (0, _log.dev)().assert(response.headers.get('Content-Type') == 'application/jwk-set+json', 'Fast Fetch keyset spec requires Content-Type: ' + 'application/jwk-set+json');
        return response.json().then(function (jwkSet) {
          // This is supposed to be a JSON Web Key Set, as defined in
          // Section 5 of RFC 7517. However, the signing service could
          // misbehave and send an arbitrary JSON value, so we have to
          // type-check at runtime.
          if (!jwkSet || !(0, _types.isArray)(jwkSet['keys'])) {
            signingServiceError(signingServiceName, 'Key set (' + JSON.stringify(jwkSet) + ') has no "keys"');
            return false;
          }
          jwkSet['keys'].forEach(function (jwk) {
            if (!jwk || typeof jwk['kid'] != 'string') {
              signingServiceError(signingServiceName, 'Key (' + JSON.stringify(jwk) + ') has no "kid"');
            } else if (keys[jwk['kid']] === undefined) {
              // We haven't seen this keypair ID before.
              keys[jwk['kid']] = _services.Services.cryptoFor(_this2.win_).importPkcsKey(jwk).catch(function (err) {
                // Web Cryptography rejected the key
                // import attempt. Either the signing
                // service sent a malformed key or the
                // browser is doing something weird.
                var jwkData = JSON.stringify(jwk);
                var message = err && err.message;
                signingServiceError(signingServiceName, 'Failed to import key (' + jwkData + '): ' + message);
                return null;
              });
            }
          });
          return true;
        }, function (err) {
          // The signing service didn't send valid JSON.
          signingServiceError(signingServiceName, 'Failed to parse JSON: ' + (err && err.response));
          return false;
        });
      }, function (err) {
        // Some kind of error occurred during the XHR. This could be a lot
        // of things (and we have no type information), but if there's no
        // `response` it's probably a network connectivity failure, so we
        // ignore it. Unfortunately, we can't distinguish this from a CORS
        // problem.
        if (err && err.response) {
          // This probably indicates a non-2xx HTTP status code.
          signingServiceError(signingServiceName, 'Status code ' + err.response.status);
        }
        return false;
      });
    }
  }]);

  return SignatureVerifier;
}();

/**
 * Report an error caused by a signing service. Since signing services currently
 * don't have their own error logging URLs, we just send everything to the AMP
 * Project.
 *
 * @param {string} signingServiceName
 * @param {string} message
 * @private
 */


function signingServiceError(signingServiceName, message) {
  (0, _log.dev)().error('AMP-A4A', 'Signing service error for ' + signingServiceName + ': ' + message);
}

},{"../../../src/log":46,"../../../src/services":64,"../../../src/types":69,"../../../src/utils/base64":73}],12:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ADSENSE_EXP_NAMES = exports.ADSENSE_EXPERIMENTS = exports.URL_EXPERIMENT_MAPPING = exports.ADSENSE_A4A_EXPERIMENT_NAME = undefined;
exports.adsenseIsA4AEnabled = adsenseIsA4AEnabled;

var _trafficExperiments = require('../../../ads/google/a4a/traffic-experiments');

var _log = require('../../../src/log');

var _experiments = require('../../../src/experiments');

var _utils = require('../../../ads/google/a4a/utils');

var _experimentUtils = require('../../../ads/google/a4a/experiment-utils');

/** @const {string} @visibleForTesting */
var ADSENSE_A4A_EXPERIMENT_NAME = exports.ADSENSE_A4A_EXPERIMENT_NAME = 'expAdsenseA4A';

/** @type {string} */
/**
 * Copyright 2016 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Because AdSense and DoubleClick are both operated by Google and their A4A
// implementations share some behavior in common, part of the logic for this
// implementation is located in the ads/google/a4a directory rather than here.
// Most other ad networks will want to put their A4A code entirely in the
// extensions/amp-ad-network-${NETWORK_NAME}-impl directory.

var TAG = 'amp-ad-network-adsense-impl';

/** @const @type {!Object<string,?string>} */
var URL_EXPERIMENT_MAPPING = exports.URL_EXPERIMENT_MAPPING = {
  '-1': _trafficExperiments.MANUAL_EXPERIMENT_ID,
  '0': null
};

/** @const @type {!Object<string, string>} */
var ADSENSE_EXPERIMENTS = exports.ADSENSE_EXPERIMENTS = {
  UNCONDITIONED_CANONICAL_EXP: '21062154',
  UNCONDITIONED_CANONICAL_CTL: '21062155',
  CANONICAL_EXP: '21062158',
  CANONICAL_CTL: '21062159'
};

/** @const @type {!Object<string, string>} */
var ADSENSE_EXP_NAMES = exports.ADSENSE_EXP_NAMES = {
  UNCONDITIONED_CANONICAL: 'expAdsenseUnconditionedCanonical',
  CANONICAL: 'expAdsenseCanonical'
};

/**
 * Attempts to select into Adsense experiments.
 * @param {!Window} win
 * @param {!Element} element
 */
function selectExperiments(win, element) {
  (0, _experimentUtils.selectAndSetExperiments)(win, element, [ADSENSE_EXPERIMENTS.UNCONDITIONED_CANONICAL_EXP, ADSENSE_EXPERIMENTS.UNCONDITIONED_CANONICAL_CTL], ADSENSE_EXP_NAMES.UNCONDITIONED_CANONICAL, true);

  // See if in holdback control/experiment.
  var urlExperimentId = (0, _trafficExperiments.extractUrlExperimentId)(win, element);
  var experimentId = URL_EXPERIMENT_MAPPING[urlExperimentId || ''];
  if (experimentId) {
    (0, _trafficExperiments.addExperimentIdToElement)(experimentId, element);
    (0, _experiments.forceExperimentBranch)(win, ADSENSE_A4A_EXPERIMENT_NAME, experimentId);
    (0, _log.dev)().info(TAG, 'url experiment selection ' + urlExperimentId + ': ' + experimentId + '.');
  }

  // If not in the unconditioned canonical experiment, attempt to
  // select into the undiluted canonical experiment.
  var inUnconditionedCanonicalExp = !!(0, _experiments.getExperimentBranch)(win, ADSENSE_EXP_NAMES.UNCONDITIONED_CANONICAL);
  if (!inUnconditionedCanonicalExp && !(0, _utils.isCdnProxy)(win)) {
    (0, _experimentUtils.selectAndSetExperiments)(win, element, [ADSENSE_EXPERIMENTS.CANONICAL_EXP, ADSENSE_EXPERIMENTS.CANONICAL_CTL], ADSENSE_EXP_NAMES.CANONICAL, true);
  }
}

/**
 * @param {!Window} win
 * @param {!Element} element
 * @param {boolean} useRemoteHtml
 * @return {boolean}
 */
function adsenseIsA4AEnabled(win, element, useRemoteHtml) {
  if (useRemoteHtml || !element.getAttribute('data-ad-client')) {
    return false;
  }
  selectExperiments(win, element);
  return (0, _utils.isGoogleAdsA4AValidEnvironment)(win) || (0, _experiments.getExperimentBranch)(win, ADSENSE_EXP_NAMES.UNCONDITIONED_CANONICAL) == ADSENSE_EXPERIMENTS.UNCONDITIONED_CANONICAL_EXP || (0, _experiments.getExperimentBranch)(win, ADSENSE_EXP_NAMES.CANONICAL) == ADSENSE_EXPERIMENTS.CANONICAL_EXP;
}

},{"../../../ads/google/a4a/experiment-utils":3,"../../../ads/google/a4a/traffic-experiments":4,"../../../ads/google/a4a/utils":6,"../../../src/experiments":37,"../../../src/log":46}],13:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AdsenseSharedState = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright 2016 The AMP HTML Authors. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * distributed under the License is distributed on an "AS-IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _log = require('../../../src/log');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Maintains state in between different AdSense slots on the same page. This
 * class is used primarily to generate state-dependent ad request URL
 * parameters.
 */
var AdsenseSharedState = exports.AdsenseSharedState = function () {

  /**
   * Creates an instance of AdsenseSharedState.
   */
  function AdsenseSharedState() {
    _classCallCheck(this, AdsenseSharedState);

    /** @private {!Array<!{id: string, format: string, client: string, slotname: (string|undefined)}>} */
    this.previousSlots_ = [];
  }

  /**
   * Registers a new slot with the given format and client, and identified by
   * the given id.
   * Returns an object containing the state-dependent ad request URL parameters
   * relevant for this slot.
   * @param {string} format Format of the slot of form WxH.
   * @param {string} id A unique identifier for the slot.
   * @param {string} client The slot's ad client ID.
   * @param {string|undefined} slotname The slot's name if provided.
   * @return {!{prevFmts: string, prevSlotnames: string, pv: number}}
   * */


  _createClass(AdsenseSharedState, [{
    key: 'addNewSlot',
    value: function addNewSlot(format, id, client, slotname) {
      var result = { pv: 2, prevFmts: '', prevSlotnames: '' };
      this.previousSlots_.forEach(function (slot) {
        (0, _log.dev)().assert(slot.id != id);
        result.prevFmts += (result.prevFmts ? ',' : '') + slot.format;
        if (slot.slotname) {
          result.prevSlotnames += (result.prevSlotnames ? ',' : '') + slot.slotname;
        }
        if (slot.client == client) {
          result.pv = 1;
        }
      });
      this.previousSlots_.push({ id: id, format: format, client: client, slotname: slotname });
      return result;
    }

    /**
     * Removes the slot with the given ID.
     * @param {string} id The ID of the slot to be removed.
     */

  }, {
    key: 'removeSlot',
    value: function removeSlot(id) {
      this.previousSlots_ = this.previousSlots_.filter(function (slot) {
        return slot.id != id;
      });
    }

    /**
     * Resets to initial state. Currently used only in testing.
     * @visibleForTesting
     */

  }, {
    key: 'reset',
    value: function reset() {
      this.previousSlots_ = [];
    }
  }]);

  return AdsenseSharedState;
}();

},{"../../../src/log":46}],14:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AmpAdNetworkAdsenseImpl = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

exports.resetSharedState = resetSharedState;

var _utils = require('../../../ads/google/utils');

var _adsenseSharedState = require('./adsense-shared-state');

var _ampA4a = require('../../amp-a4a/0.1/amp-a4a');

var _consentState = require('../../../src/consent-state');

var _navigation = require('../../../src/service/navigation');

var _utils2 = require('../../../ads/google/a4a/utils');

var _services = require('../../../src/services');

var _trafficExperiments = require('../../../ads/google/a4a/traffic-experiments');

var _math = require('../../../src/utils/math');

var _style = require('../../../src/style');

var _log = require('../../../src/log');

var _domFingerprint = require('../../../src/utils/dom-fingerprint');

var _adsenseAmpAutoAds = require('../../../ads/google/adsense-amp-auto-ads');

var _pFrame = require('../../../src/3p-frame');

var _experiments = require('../../../src/experiments');

var _mode = require('../../../src/mode');

var _extensionAnalytics = require('../../../src/extension-analytics');

var _dom = require('../../../src/dom');

var _string = require('../../../src/string');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2016 The AMP HTML Authors. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS-IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

// Because AdSense and DoubleClick are both operated by Google and their A4A
// implementations share some behavior in common, part of the logic for this
// implementation is located in the ads/google/a4a directory rather than here.
// Most other ad networks will want to put their A4A code entirely in the
// extensions/amp-ad-network-${NETWORK_NAME}-impl directory.

/** @const {string} */
var ADSENSE_BASE_URL = 'https://googleads.g.doubleclick.net/pagead/ads';

/** @const {string} */
var TAG = 'amp-ad-network-adsense-impl';

/**
 * Shared state for AdSense ad slots. This is used primarily for ad request url
 * parameters that depend on previous slots.
 * @const {!AdsenseSharedState}
 */
var sharedState = new _adsenseSharedState.AdsenseSharedState();

/** @visibleForTesting */
function resetSharedState() {
  sharedState.reset();
}

/** @type {string} */
var FORMAT_EXP = 'as-use-attr-for-format';

/** @final */

var AmpAdNetworkAdsenseImpl = exports.AmpAdNetworkAdsenseImpl = function (_AmpA4A) {
  _inherits(AmpAdNetworkAdsenseImpl, _AmpA4A);

  /**
   * @param {!Element} element
   */
  function AmpAdNetworkAdsenseImpl(element) {
    _classCallCheck(this, AmpAdNetworkAdsenseImpl);

    /**
     * A unique identifier for this slot.
     * Not initialized until getAdUrl() is called; updated upon each invocation
     * of getAdUrl().
     * @private {?string}
     */
    var _this = _possibleConstructorReturn(this, (AmpAdNetworkAdsenseImpl.__proto__ || Object.getPrototypeOf(AmpAdNetworkAdsenseImpl)).call(this, element));

    _this.uniqueSlotId_ = null;

    /**
     * Config to generate amp-analytics element for active view reporting.
     * @type {?JsonObject}
     * @private
     */
    _this.ampAnalyticsConfig_ = null;

    /** @private {!../../../src/service/extensions-impl.Extensions} */
    _this.extensions_ = _services.Services.extensionsFor(_this.win);

    /** @private {?({width, height}|../../../src/layout-rect.LayoutRectDef)} */
    _this.size_ = null;

    /**
     * amp-analytics element generated based on this.ampAnalyticsConfig_
     * @private {?Element}
     */
    _this.ampAnalyticsElement_ = null;

    /** @private {?string} */
    _this.qqid_ = null;

    /**
     * For full-width responsive ads: whether the element has already been
     * aligned to the edges of the viewport.
     * @private {boolean}
     */
    _this.responsiveAligned_ = false;

    /**
     * The contents of the data-auto-format attribute, or empty string if the
     * attribute was not set.
     * @private {?string}
     */
    _this.autoFormat_ = null;

    /** @private {?Promise<!../../../ads/google/a4a/utils.IdentityToken>} */
    _this.identityTokenPromise_ = null;

    /**
     * @private {?boolean} whether preferential rendered AMP creative, null
     * indicates no creative render.
     */
    _this.isAmpCreative_ = null;
    return _this;
  }

  /**
   * @return {boolean}
   * @private
   */


  _createClass(AmpAdNetworkAdsenseImpl, [{
    key: 'isResponsive_',
    value: function isResponsive_() {
      return this.autoFormat_ == 'rspv';
    }

    /** @override */

  }, {
    key: 'isValidElement',
    value: function isValidElement() {
      /**
       * isValidElement used to also check that we are in a valid A4A environment,
       * however this is not necessary as that is checked by adsenseIsA4AEnabled,
       * which is always called as part of the upgrade path from an amp-ad element
       * to an amp-ad-adsense element. Thus, if we are an amp-ad, we can be sure
       * that it has been verified.
       */
      if (this.isResponsive_()) {
        if (!this.element.hasAttribute('data-full-width')) {
          (0, _log.user)().warn(TAG, 'Responsive AdSense ad units require the attribute ' + 'data-full-width.');
          return false;
        }

        var height = this.element.getAttribute('height');
        var width = this.element.getAttribute('width');
        if (height != _utils.ADSENSE_RSPV_WHITELISTED_HEIGHT) {
          (0, _log.user)().warn(TAG, 'Specified height ' + height + ' in <amp-ad> tag is not equal to the ' + ('required height of ' + _utils.ADSENSE_RSPV_WHITELISTED_HEIGHT + ' for ') + 'responsive AdSense ad units.');
          return false;
        }
        if (width != '100vw') {
          (0, _log.user)().warn(TAG, 'Invalid width ' + width + ' for full-width responsive <amp-ad> tag. ' + 'Width must be 100vw.');
          return false;
        }
      }
      return !!this.element.getAttribute('data-ad-client') && this.isAmpAdElement();
    }

    /** @override */

  }, {
    key: 'delayAdRequestEnabled',
    value: function delayAdRequestEnabled() {
      return true;
    }

    /** @override */

  }, {
    key: 'buildCallback',
    value: function buildCallback() {
      var _this2 = this;

      _get(AmpAdNetworkAdsenseImpl.prototype.__proto__ || Object.getPrototypeOf(AmpAdNetworkAdsenseImpl.prototype), 'buildCallback', this).call(this);
      this.identityTokenPromise_ = _services.Services.viewerForDoc(this.getAmpDoc()).whenFirstVisible().then(function () {
        return (0, _utils2.getIdentityToken)(_this2.win, _this2.getAmpDoc());
      });
      this.autoFormat_ = this.element.getAttribute('data-auto-format') || '';

      if (this.isResponsive_()) {
        // Attempt to resize to the correct height. The width should already be
        // 100vw, but is fixed here so that future resizes of the viewport don't
        // affect it.
        var viewportSize = this.getViewport().getSize();
        return this.attemptChangeSize(AmpAdNetworkAdsenseImpl.getResponsiveHeightForContext_(viewportSize), viewportSize.width).catch(function () {});
      }
      // This should happen last, as some diversion criteria rely on some of the
      // preceding logic (specifically responsive logic).
      this.divertExperiments();
    }

    /** @override */

  }, {
    key: 'getConsentPolicy',
    value: function getConsentPolicy() {
      // Ensure that build is not blocked by need for consent (delay will occur
      // prior to ad URL construction).
      return null;
    }

    /**
     * Selects into experiments based on url fragment and/or page level diversion.
     * @visibleForTesting
     */

  }, {
    key: 'divertExperiments',
    value: function divertExperiments() {
      var _this3 = this;

      var experimentInfoMap =
      /** @type {!Object<string,
          !../../../src/experiments.ExperimentInfo>} */_defineProperty({}, FORMAT_EXP, {
        isTrafficEligible: function isTrafficEligible() {
          return !_this3.isResponsive_() && Number(_this3.element.getAttribute('width')) > 0 && Number(_this3.element.getAttribute('height')) > 0;
        },
        branches: ['21062003', '21062004']
      });
      var setExps = (0, _experiments.randomlySelectUnsetExperiments)(this.win, experimentInfoMap);
      Object.keys(setExps).forEach(function (expName) {
        return (0, _trafficExperiments.addExperimentIdToElement)(setExps[expName], _this3.element);
      });
    }

    /** @override */

  }, {
    key: 'getAdUrl',
    value: function getAdUrl(consentState) {
      var _this4 = this;

      if (consentState == _consentState.CONSENT_POLICY_STATE.UNKNOWN && this.element.getAttribute('data-npa-on-unknown-consent') != 'true') {
        (0, _log.user)().info(TAG, 'Ad request suppressed due to unknown consent');
        return Promise.resolve('');
      }
      // TODO: Check for required and allowed parameters. Probably use
      // validateData, from 3p/3p/js, after moving it someplace common.
      var startTime = Date.now();
      var global = this.win;
      var adClientId = this.element.getAttribute('data-ad-client');
      // Ensure client id format: lower case with 'ca-' prefix.
      adClientId = adClientId.toLowerCase();
      if (adClientId.substring(0, 3) != 'ca-') {
        adClientId = 'ca-' + adClientId;
      }
      var adTestOn = this.element.getAttribute('data-adtest') || (0, _trafficExperiments.isInManualExperiment)(this.element);
      var width = Number(this.element.getAttribute('width'));
      var height = Number(this.element.getAttribute('height'));

      this.size_ = (0, _experiments.getExperimentBranch)(this.win, FORMAT_EXP) == '21062004' ? { width: width, height: height } : this.getIntersectionElementLayoutBox();
      var format = this.size_.width + 'x' + this.size_.height;
      var slotId = this.element.getAttribute('data-amp-slot-index');
      // data-amp-slot-index is set by the upgradeCallback method of amp-ad.
      // TODO(bcassels): Uncomment the assertion, fixing the tests.
      // But not all tests arrange to call upgradeCallback.
      // dev().assert(slotId != undefined);
      var adk = this.adKey_(format);
      this.uniqueSlotId_ = slotId + adk;
      var slotname = this.element.getAttribute('data-ad-slot');
      var sharedStateParams = sharedState.addNewSlot(format, this.uniqueSlotId_, adClientId, slotname);
      var viewportSize = this.getViewport().getSize();
      this.win['ampAdGoogleIfiCounter'] = this.win['ampAdGoogleIfiCounter'] || 1;
      var enclosingContainers = (0, _utils2.getEnclosingContainerTypes)(this.element);
      var pfx = enclosingContainers.includes(_utils2.ValidAdContainerTypes['AMP-FX-FLYING-CARPET']) || enclosingContainers.includes(_utils2.ValidAdContainerTypes['AMP-STICKY-AD']);
      var parameters = {
        'client': adClientId,
        format: format,
        'w': this.size_.width,
        'h': this.size_.height,
        'iu': slotname,
        'npa': consentState == _consentState.CONSENT_POLICY_STATE.INSUFFICIENT || consentState == _consentState.CONSENT_POLICY_STATE.UNKNOWN ? 1 : null,
        'adtest': adTestOn ? 'on' : null,
        adk: adk,
        'output': 'html',
        'bc': global.SVGElement && global.document.createElementNS ? '1' : null,
        'ctypes': this.getCtypes_(),
        'host': this.element.getAttribute('data-ad-host'),
        'hl': this.element.getAttribute('data-language'),
        'to': this.element.getAttribute('data-tag-origin'),
        'pv': sharedStateParams.pv,
        'channel': this.element.getAttribute('data-ad-channel'),
        'wgl': global['WebGLRenderingContext'] ? '1' : '0',
        'asnt': this.sentinel,
        'dff': (0, _style.computedStyle)(this.win, this.element)['font-family'],
        'prev_fmts': sharedStateParams.prevFmts || null,
        'prev_slotnames': sharedStateParams.prevSlotnames || null,
        'brdim': (0, _utils2.additionalDimensions)(this.win, viewportSize),
        'ifi': this.win['ampAdGoogleIfiCounter']++,
        'rc': this.fromResumeCallback ? 1 : null,
        'rafmt': this.isResponsive_() ? 13 : null,
        'pfx': pfx ? '1' : '0',
        // Matched content specific fields.
        'crui': this.element.getAttribute('data-matched-content-ui-type'),
        'cr_row': this.element.getAttribute('data-matched-content-rows-num'),
        'cr_col': this.element.getAttribute('data-matched-content-columns-num'),
        // Package code (also known as URL group) that was used to
        // create ad.
        'pwprc': this.element.getAttribute('data-package')
      };

      var experimentIds = [];
      var ampAutoAdsBranch = (0, _adsenseAmpAutoAds.getAdSenseAmpAutoAdsExpBranch)(this.win);
      if (ampAutoAdsBranch) {
        experimentIds.push(ampAutoAdsBranch);
      }
      var identityPromise = _services.Services.timerFor(this.win).timeoutPromise(1000, this.identityTokenPromise_).catch(function (unusedErr) {
        // On error/timeout, proceed.
        return (/**@type {!../../../ads/google/a4a/utils.IdentityToken}*/{}
        );
      });
      return identityPromise.then(function (identity) {
        return (0, _utils2.googleAdUrl)(_this4, ADSENSE_BASE_URL, startTime, Object.assign({
          adsid: identity.token || null,
          jar: identity.jar || null,
          pucrd: identity.pucrd || null
        }, parameters), experimentIds);
      });
    }

    /** @override */

  }, {
    key: 'onNetworkFailure',
    value: function onNetworkFailure(error, adUrl) {
      (0, _log.dev)().info(TAG, 'network error, attempt adding of error parameter', error);
      return { adUrl: (0, _utils2.maybeAppendErrorParameter)(adUrl, 'n') };
    }

    /** @override */

  }, {
    key: 'extractSize',
    value: function extractSize(responseHeaders) {
      this.ampAnalyticsConfig_ = (0, _utils2.extractAmpAnalyticsConfig)(this, responseHeaders);
      this.qqid_ = responseHeaders.get(_utils2.QQID_HEADER);
      if (this.ampAnalyticsConfig_) {
        // Load amp-analytics extensions
        this.extensions_. /*OK*/installExtensionForDoc(this.getAmpDoc(), 'amp-analytics');
      }
      return this.size_;
    }

    /**
     * @param {string} format
     * @return {string} The ad unit hash key string.
     * @private
     */

  }, {
    key: 'adKey_',
    value: function adKey_(format) {
      var element = this.element;

      var slot = element.getAttribute('data-ad-slot') || '';
      var string = slot + ':' + format + ':' + (0, _domFingerprint.domFingerprintPlain)(element);
      return (0, _string.stringHash32)(string);
    }

    /**
     * @return {?string}
     * @private
     */

  }, {
    key: 'getCtypes_',
    value: function getCtypes_() {
      if (!(0, _mode.getMode)().localDev) {
        return null;
      }
      var ctypesReMatch = /[?&]force_a4a_ctypes=([^&]+)/.exec(this.win.location.search);
      // If the RE passes, then length is necessarily > 1.
      if (ctypesReMatch) {
        return ctypesReMatch[1];
      }
      return null;
    }

    /** @override */

  }, {
    key: 'isXhrAllowed',
    value: function isXhrAllowed() {
      return (0, _utils2.isCdnProxy)(this.win) || (0, _mode.getMode)(this.win).localDev || (0, _mode.getMode)(this.win).test;
    }

    /** @override */

  }, {
    key: 'onCreativeRender',
    value: function onCreativeRender(creativeMetaData) {
      _get(AmpAdNetworkAdsenseImpl.prototype.__proto__ || Object.getPrototypeOf(AmpAdNetworkAdsenseImpl.prototype), 'onCreativeRender', this).call(this, creativeMetaData);
      this.isAmpCreative_ = !!creativeMetaData;
      if (creativeMetaData && !creativeMetaData.customElementExtensions.includes('amp-ad-exit')) {
        // Capture phase click handlers on the ad if amp-ad-exit not present
        // (assume it will handle capture).
        (0, _log.dev)().assert(this.iframe);
        _navigation.Navigation.installAnchorClickInterceptor(this.getAmpDoc(), this.iframe.contentWindow);
      }
      if (this.ampAnalyticsConfig_) {
        (0, _log.dev)().assert(!this.ampAnalyticsElement_);
        if ((0, _utils2.isReportingEnabled)(this)) {
          (0, _utils2.addCsiSignalsToAmpAnalyticsConfig)(this.win, this.element, this.ampAnalyticsConfig_, this.qqid_, !!creativeMetaData);
        }
        this.ampAnalyticsElement_ = (0, _extensionAnalytics.insertAnalyticsElement)(this.element, this.ampAnalyticsConfig_, /*loadAnalytics*/true, !!this.postAdResponseExperimentFeatures['avr_disable_immediate']);
      }

      (0, _style.setStyles)((0, _log.dev)().assertElement(this.iframe), {
        width: this.size_.width + 'px',
        height: this.size_.height + 'px'
      });
    }

    /** @override */

  }, {
    key: 'unlayoutCallback',
    value: function unlayoutCallback() {
      if (this.isAmpCreative_) {
        // Allow AMP creatives to remain in case SERP viewer swipe back.
        return false;
      }
      var superResult = _get(AmpAdNetworkAdsenseImpl.prototype.__proto__ || Object.getPrototypeOf(AmpAdNetworkAdsenseImpl.prototype), 'unlayoutCallback', this).call(this);
      this.element.setAttribute('data-amp-slot-index', this.win.ampAdSlotIdCounter++);
      if (this.uniqueSlotId_) {
        sharedState.removeSlot(this.uniqueSlotId_);
      }
      if (this.ampAnalyticsElement_) {
        (0, _dom.removeElement)(this.ampAnalyticsElement_);
        this.ampAnalyticsElement_ = null;
      }
      this.ampAnalyticsConfig_ = null;
      this.qqid_ = null;
      this.isAmpCreative_ = null;
      return superResult;
    }

    /** @override */

  }, {
    key: 'onLayoutMeasure',
    value: function onLayoutMeasure() {
      var _this5 = this;

      _get(AmpAdNetworkAdsenseImpl.prototype.__proto__ || Object.getPrototypeOf(AmpAdNetworkAdsenseImpl.prototype), 'onLayoutMeasure', this).call(this);

      if (this.isResponsive_() && !this.responsiveAligned_) {
        this.responsiveAligned_ = true;

        var layoutBox = this.getLayoutBox();

        // Nudge into the correct horizontal position by changing side margin.
        this.getVsync().run({
          measure: function measure(state) {
            // Check the parent element because amp-ad is explicitly styled to
            // have direction: ltr.
            state.direction = (0, _style.computedStyle)(_this5.win, (0, _log.dev)().assertElement(_this5.element.parentElement))['direction'];
          },
          mutate: function mutate(state) {
            if (state.direction == 'rtl') {
              (0, _style.setStyle)(_this5.element, 'marginRight', layoutBox.left, 'px');
            } else {
              (0, _style.setStyle)(_this5.element, 'marginLeft', -layoutBox.left, 'px');
            }
          }
        }, { direction: '' });
      }
    }

    /** @override */

  }, {
    key: 'getPreconnectUrls',
    value: function getPreconnectUrls() {
      this.preconnect.preload((0, _pFrame.getDefaultBootstrapBaseUrl)(this.win, 'nameframe'));
      return ['https://googleads.g.doubleclick.net'];
    }

    /** @override */

  }, {
    key: 'getA4aAnalyticsVars',
    value: function getA4aAnalyticsVars(analyticsTrigger) {
      return (0, _utils2.getCsiAmpAnalyticsVariables)(analyticsTrigger, this, this.qqid_);
    }

    /** @override */

  }, {
    key: 'getA4aAnalyticsConfig',
    value: function getA4aAnalyticsConfig() {
      return (0, _utils2.getCsiAmpAnalyticsConfig)();
    }

    /**
     * Calculates the appropriate height for a full-width responsive ad of the
     * given width.
     * @param {!{width: number, height: number}} viewportSize
     * @return {number}
     * @private
     */

  }], [{
    key: 'getResponsiveHeightForContext_',
    value: function getResponsiveHeightForContext_(viewportSize) {
      var minHeight = 100;
      var maxHeight = Math.min(300, viewportSize.height);
      // We aim for a 6:5 aspect ratio.
      var idealHeight = Math.round(viewportSize.width / 1.2);
      return (0, _math.clamp)(idealHeight, minHeight, maxHeight);
    }
  }]);

  return AmpAdNetworkAdsenseImpl;
}(_ampA4a.AmpA4A);

AMP.extension(TAG, '0.1', function (AMP) {
  AMP.registerElement(TAG, AmpAdNetworkAdsenseImpl);
});

},{"../../../ads/google/a4a/traffic-experiments":4,"../../../ads/google/a4a/utils":6,"../../../ads/google/adsense-amp-auto-ads":7,"../../../ads/google/utils":8,"../../../src/3p-frame":21,"../../../src/consent-state":28,"../../../src/dom":32,"../../../src/experiments":37,"../../../src/extension-analytics":39,"../../../src/log":46,"../../../src/mode":48,"../../../src/service/navigation":60,"../../../src/services":64,"../../../src/string":66,"../../../src/style":68,"../../../src/utils/dom-fingerprint":75,"../../../src/utils/math":77,"../../amp-a4a/0.1/amp-a4a":10,"./adsense-shared-state":13}],15:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cloudflareIsA4AEnabled = cloudflareIsA4AEnabled;
/**
 * Copyright 2016 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Determines which tags desire A4A handling
 * @param {!Window} win
 * @param {!Element} element
 * @param {boolean} useRemoteHtml
 * @return {boolean}
 */
function cloudflareIsA4AEnabled(win, element, useRemoteHtml) {
  // We assume fast fetch for all content, but this will gracefully degrade,
  // when non-a4a content is delivered
  return !useRemoteHtml;
}

},{}],16:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gmosspIsA4AEnabled = gmosspIsA4AEnabled;

var _string = require('../../../src/string');

/** @const @private {string} */
var GMOSSP_SRC_PREFIX_ = 'https://sp.gmossp-sp.jp/';

/** @const @private {string} */
/**
 * Copyright 2017 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var GMOSSP_SRC_A4A_PREFIX_ = 'https://amp.sp.gmossp-sp.jp/_a4a/';

/**
 * @param {!Window} win
 * @param {!Element} element
 * @param {boolean} useRemoteHtml
 * @return {boolean}
 */
function gmosspIsA4AEnabled(win, element, useRemoteHtml) {
  var src = void 0;
  return !useRemoteHtml && !!(src = element.getAttribute('src')) && !!element.getAttribute('data-use-a4a') && ((0, _string.startsWith)(src, GMOSSP_SRC_PREFIX_) || (0, _string.startsWith)(src, GMOSSP_SRC_A4A_PREFIX_));
}

},{"../../../src/string":66}],17:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tripleliftIsA4AEnabled = tripleliftIsA4AEnabled;
/**
 * Copyright 2016 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** @const @private {string} */
var SRC_PREFIX_ = 'https://ib.3lift.com/';
/**
 * @param {!Window} win
 * @param {!Element} element
 * @param {boolean} useRemoteHtml
 * @return {boolean}
 */
function tripleliftIsA4AEnabled(win, element, useRemoteHtml) {
  var src = void 0;
  return !useRemoteHtml && !!element.getAttribute('data-use-a4a') && !!(src = element.getAttribute('src')) && src.indexOf(SRC_PREFIX_) == 0;
}

},{}],18:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.is3pThrottled = is3pThrottled;
exports.waitFor3pThrottle = waitFor3pThrottle;
exports.getAmpAdRenderOutsideViewport = getAmpAdRenderOutsideViewport;
exports.incrementLoadingAds = incrementLoadingAds;

var _promise = require('../../../src/utils/promise');

var _services = require('../../../src/services');

var _log = require('../../../src/log');

/**
 * Store loading ads info within window to ensure it can be properly stored
 * across separately compiled binaries that share load throttling.
 * @const ID of window variable used to track 3p ads waiting to load.
 */
var LOADING_ADS_WIN_ID_ = '3pla';

/** @private {?Promise} resolves when no 3p throttle */
/* Copyright 2016 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var throttlePromise_ = null;
/** @private {?Function} resolver for throttle promise */
var throttlePromiseResolver_ = null;

/**
 * @param {!Window} win
 * @return {boolean} Whether 3p is currently throttled.
 */
function is3pThrottled(win) {
  return !!win[LOADING_ADS_WIN_ID_];
}

/** @return {!Promise} resolves when no 3p throttle */
function waitFor3pThrottle() {
  return throttlePromise_ || Promise.resolve();
}

/**
 * @param {!Element} element
 * @return {?number} number if explicit value should be used otherwise super
 *    default should be used.
 */
function getAmpAdRenderOutsideViewport(element) {
  var rawValue = element.getAttribute('data-loading-strategy');
  if (rawValue == null) {
    return null;
  }
  // Ad opts into lazier loading strategy where we only load ads that are
  // at closer given number of viewports away.
  if (rawValue == 'prefer-viewability-over-views' || rawValue == '') {
    return 1.25;
  }
  var errorMessage = 'Value of data-loading-strategy should be a float number in range ' + 'of [0, 3], but got ' + rawValue;
  var viewportNumber = (0, _log.user)().assertNumber(parseFloat(rawValue), errorMessage);
  (0, _log.user)().assert(viewportNumber >= 0 && viewportNumber <= 3, errorMessage);
  return viewportNumber;
}

/**
 * Increments loading ads count for throttling.
 * @param {!Window} win
 * @param {!Promise=} opt_loadingPromise
 */
function incrementLoadingAds(win, opt_loadingPromise) {
  if (win[LOADING_ADS_WIN_ID_] === undefined) {
    win[LOADING_ADS_WIN_ID_] = 0;
  }
  win[LOADING_ADS_WIN_ID_]++;

  if (!throttlePromise_) {
    var deferred = new _promise.Deferred();
    throttlePromise_ = deferred.promise;
    throttlePromiseResolver_ = deferred.resolve;
  }

  _services.Services.timerFor(win).timeoutPromise(1000, opt_loadingPromise).catch(function () {}).then(function () {
    if (! --win[LOADING_ADS_WIN_ID_]) {
      throttlePromiseResolver_();
      throttlePromise_ = null;
      throttlePromiseResolver_ = null;
    }
  });
}

},{"../../../src/log":46,"../../../src/services":64,"../../../src/utils/promise":79}],19:[function(require,module,exports){
/*!

Copyright (C) 2014-2016 by Andrea Giammarchi - @WebReflection

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
// global window Object
// optional polyfill info
//    'auto' used by default, everything is feature detected
//    'force' use the polyfill even if not fully needed
function installCustomElements(window, polyfill) {'use strict';

  // DO NOT USE THIS FILE DIRECTLY, IT WON'T WORK
  // THIS IS A PROJECT BASED ON A BUILD SYSTEM
  // THIS FILE IS JUST WRAPPED UP RESULTING IN
  // build/document-register-element.node.js

  var
    document = window.document,
    Object = window.Object
  ;

  var htmlClass = (function (info) {
    // (C) Andrea Giammarchi - @WebReflection - MIT Style
    var
      catchClass = /^[A-Z]+[a-z]/,
      filterBy = function (re) {
        var arr = [], tag;
        for (tag in register) {
          if (re.test(tag)) arr.push(tag);
        }
        return arr;
      },
      add = function (Class, tag) {
        tag = tag.toLowerCase();
        if (!(tag in register)) {
          register[Class] = (register[Class] || []).concat(tag);
          register[tag] = (register[tag.toUpperCase()] = Class);
        }
      },
      register = (Object.create || Object)(null),
      htmlClass = {},
      i, section, tags, Class
    ;
    for (section in info) {
      for (Class in info[section]) {
        tags = info[section][Class];
        register[Class] = tags;
        for (i = 0; i < tags.length; i++) {
          register[tags[i].toLowerCase()] =
          register[tags[i].toUpperCase()] = Class;
        }
      }
    }
    htmlClass.get = function get(tagOrClass) {
      return typeof tagOrClass === 'string' ?
        (register[tagOrClass] || (catchClass.test(tagOrClass) ? [] : '')) :
        filterBy(tagOrClass);
    };
    htmlClass.set = function set(tag, Class) {
      return (catchClass.test(tag) ?
        add(tag, Class) :
        add(Class, tag)
      ), htmlClass;
    };
    return htmlClass;
  }({
    "collections": {
      "HTMLAllCollection": [
        "all"
      ],
      "HTMLCollection": [
        "forms"
      ],
      "HTMLFormControlsCollection": [
        "elements"
      ],
      "HTMLOptionsCollection": [
        "options"
      ]
    },
    "elements": {
      "Element": [
        "element"
      ],
      "HTMLAnchorElement": [
        "a"
      ],
      "HTMLAppletElement": [
        "applet"
      ],
      "HTMLAreaElement": [
        "area"
      ],
      "HTMLAttachmentElement": [
        "attachment"
      ],
      "HTMLAudioElement": [
        "audio"
      ],
      "HTMLBRElement": [
        "br"
      ],
      "HTMLBaseElement": [
        "base"
      ],
      "HTMLBodyElement": [
        "body"
      ],
      "HTMLButtonElement": [
        "button"
      ],
      "HTMLCanvasElement": [
        "canvas"
      ],
      "HTMLContentElement": [
        "content"
      ],
      "HTMLDListElement": [
        "dl"
      ],
      "HTMLDataElement": [
        "data"
      ],
      "HTMLDataListElement": [
        "datalist"
      ],
      "HTMLDetailsElement": [
        "details"
      ],
      "HTMLDialogElement": [
        "dialog"
      ],
      "HTMLDirectoryElement": [
        "dir"
      ],
      "HTMLDivElement": [
        "div"
      ],
      "HTMLDocument": [
        "document"
      ],
      "HTMLElement": [
        "element",
        "abbr",
        "address",
        "article",
        "aside",
        "b",
        "bdi",
        "bdo",
        "cite",
        "code",
        "command",
        "dd",
        "dfn",
        "dt",
        "em",
        "figcaption",
        "figure",
        "footer",
        "header",
        "i",
        "kbd",
        "mark",
        "nav",
        "noscript",
        "rp",
        "rt",
        "ruby",
        "s",
        "samp",
        "section",
        "small",
        "strong",
        "sub",
        "summary",
        "sup",
        "u",
        "var",
        "wbr"
      ],
      "HTMLEmbedElement": [
        "embed"
      ],
      "HTMLFieldSetElement": [
        "fieldset"
      ],
      "HTMLFontElement": [
        "font"
      ],
      "HTMLFormElement": [
        "form"
      ],
      "HTMLFrameElement": [
        "frame"
      ],
      "HTMLFrameSetElement": [
        "frameset"
      ],
      "HTMLHRElement": [
        "hr"
      ],
      "HTMLHeadElement": [
        "head"
      ],
      "HTMLHeadingElement": [
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6"
      ],
      "HTMLHtmlElement": [
        "html"
      ],
      "HTMLIFrameElement": [
        "iframe"
      ],
      "HTMLImageElement": [
        "img"
      ],
      "HTMLInputElement": [
        "input"
      ],
      "HTMLKeygenElement": [
        "keygen"
      ],
      "HTMLLIElement": [
        "li"
      ],
      "HTMLLabelElement": [
        "label"
      ],
      "HTMLLegendElement": [
        "legend"
      ],
      "HTMLLinkElement": [
        "link"
      ],
      "HTMLMapElement": [
        "map"
      ],
      "HTMLMarqueeElement": [
        "marquee"
      ],
      "HTMLMediaElement": [
        "media"
      ],
      "HTMLMenuElement": [
        "menu"
      ],
      "HTMLMenuItemElement": [
        "menuitem"
      ],
      "HTMLMetaElement": [
        "meta"
      ],
      "HTMLMeterElement": [
        "meter"
      ],
      "HTMLModElement": [
        "del",
        "ins"
      ],
      "HTMLOListElement": [
        "ol"
      ],
      "HTMLObjectElement": [
        "object"
      ],
      "HTMLOptGroupElement": [
        "optgroup"
      ],
      "HTMLOptionElement": [
        "option"
      ],
      "HTMLOutputElement": [
        "output"
      ],
      "HTMLParagraphElement": [
        "p"
      ],
      "HTMLParamElement": [
        "param"
      ],
      "HTMLPictureElement": [
        "picture"
      ],
      "HTMLPreElement": [
        "pre"
      ],
      "HTMLProgressElement": [
        "progress"
      ],
      "HTMLQuoteElement": [
        "blockquote",
        "q",
        "quote"
      ],
      "HTMLScriptElement": [
        "script"
      ],
      "HTMLSelectElement": [
        "select"
      ],
      "HTMLShadowElement": [
        "shadow"
      ],
      "HTMLSlotElement": [
        "slot"
      ],
      "HTMLSourceElement": [
        "source"
      ],
      "HTMLSpanElement": [
        "span"
      ],
      "HTMLStyleElement": [
        "style"
      ],
      "HTMLTableCaptionElement": [
        "caption"
      ],
      "HTMLTableCellElement": [
        "td",
        "th"
      ],
      "HTMLTableColElement": [
        "col",
        "colgroup"
      ],
      "HTMLTableElement": [
        "table"
      ],
      "HTMLTableRowElement": [
        "tr"
      ],
      "HTMLTableSectionElement": [
        "thead",
        "tbody",
        "tfoot"
      ],
      "HTMLTemplateElement": [
        "template"
      ],
      "HTMLTextAreaElement": [
        "textarea"
      ],
      "HTMLTimeElement": [
        "time"
      ],
      "HTMLTitleElement": [
        "title"
      ],
      "HTMLTrackElement": [
        "track"
      ],
      "HTMLUListElement": [
        "ul"
      ],
      "HTMLUnknownElement": [
        "unknown",
        "vhgroupv",
        "vkeygen"
      ],
      "HTMLVideoElement": [
        "video"
      ]
    },
    "nodes": {
      "Attr": [
        "node"
      ],
      "Audio": [
        "audio"
      ],
      "CDATASection": [
        "node"
      ],
      "CharacterData": [
        "node"
      ],
      "Comment": [
        "#comment"
      ],
      "Document": [
        "#document"
      ],
      "DocumentFragment": [
        "#document-fragment"
      ],
      "DocumentType": [
        "node"
      ],
      "HTMLDocument": [
        "#document"
      ],
      "Image": [
        "img"
      ],
      "Option": [
        "option"
      ],
      "ProcessingInstruction": [
        "node"
      ],
      "ShadowRoot": [
        "#shadow-root"
      ],
      "Text": [
        "#text"
      ],
      "XMLDocument": [
        "xml"
      ]
    }
  }));
  
  
    
  // passed at runtime, configurable
  // via nodejs module
  if (!polyfill) polyfill = 'auto';
  
  var
    // V0 polyfill entry
    REGISTER_ELEMENT = 'registerElement',
  
    // IE < 11 only + old WebKit for attributes + feature detection
    EXPANDO_UID = '__' + REGISTER_ELEMENT + (window.Math.random() * 10e4 >> 0),
  
    // shortcuts and costants
    ADD_EVENT_LISTENER = 'addEventListener',
    ATTACHED = 'attached',
    CALLBACK = 'Callback',
    DETACHED = 'detached',
    EXTENDS = 'extends',
  
    ATTRIBUTE_CHANGED_CALLBACK = 'attributeChanged' + CALLBACK,
    ATTACHED_CALLBACK = ATTACHED + CALLBACK,
    CONNECTED_CALLBACK = 'connected' + CALLBACK,
    DISCONNECTED_CALLBACK = 'disconnected' + CALLBACK,
    CREATED_CALLBACK = 'created' + CALLBACK,
    DETACHED_CALLBACK = DETACHED + CALLBACK,
  
    ADDITION = 'ADDITION',
    MODIFICATION = 'MODIFICATION',
    REMOVAL = 'REMOVAL',
  
    DOM_ATTR_MODIFIED = 'DOMAttrModified',
    DOM_CONTENT_LOADED = 'DOMContentLoaded',
    DOM_SUBTREE_MODIFIED = 'DOMSubtreeModified',
  
    PREFIX_TAG = '<',
    PREFIX_IS = '=',
  
    // valid and invalid node names
    validName = /^[A-Z][A-Z0-9]*(?:-[A-Z0-9]+)+$/,
    invalidNames = [
      'ANNOTATION-XML',
      'COLOR-PROFILE',
      'FONT-FACE',
      'FONT-FACE-SRC',
      'FONT-FACE-URI',
      'FONT-FACE-FORMAT',
      'FONT-FACE-NAME',
      'MISSING-GLYPH'
    ],
  
    // registered types and their prototypes
    types = [],
    protos = [],
  
    // to query subnodes
    query = '',
  
    // html shortcut used to feature detect
    documentElement = document.documentElement,
  
    // ES5 inline helpers || basic patches
    indexOf = types.indexOf || function (v) {
      for(var i = this.length; i-- && this[i] !== v;){}
      return i;
    },
  
    // other helpers / shortcuts
    OP = Object.prototype,
    hOP = OP.hasOwnProperty,
    iPO = OP.isPrototypeOf,
  
    defineProperty = Object.defineProperty,
    empty = [],
    gOPD = Object.getOwnPropertyDescriptor,
    gOPN = Object.getOwnPropertyNames,
    gPO = Object.getPrototypeOf,
    sPO = Object.setPrototypeOf,
  
    // jshint proto: true
    hasProto = !!Object.__proto__,
  
    // V1 helpers
    fixGetClass = false,
    DRECEV1 = '__dreCEv1',
    customElements = window.customElements,
    usableCustomElements = polyfill !== 'force' && !!(
      customElements &&
      customElements.define &&
      customElements.get &&
      customElements.whenDefined
    ),
    Dict = Object.create || Object,
    Map = window.Map || function Map() {
      var K = [], V = [], i;
      return {
        get: function (k) {
          return V[indexOf.call(K, k)];
        },
        set: function (k, v) {
          i = indexOf.call(K, k);
          if (i < 0) V[K.push(k) - 1] = v;
          else V[i] = v;
        }
      };
    },
    Promise = window.Promise || function (fn) {
      var
        notify = [],
        done = false,
        p = {
          'catch': function () {
            return p;
          },
          'then': function (cb) {
            notify.push(cb);
            if (done) setTimeout(resolve, 1);
            return p;
          }
        }
      ;
      function resolve(value) {
        done = true;
        while (notify.length) notify.shift()(value);
      }
      fn(resolve);
      return p;
    },
    justCreated = false,
    constructors = Dict(null),
    waitingList = Dict(null),
    nodeNames = new Map(),
    secondArgument = function (is) {
      return is.toLowerCase();
    },
  
    // used to create unique instances
    create = Object.create || function Bridge(proto) {
      // silly broken polyfill probably ever used but short enough to work
      return proto ? ((Bridge.prototype = proto), new Bridge()) : this;
    },
  
    // will set the prototype if possible
    // or copy over all properties
    setPrototype = sPO || (
      hasProto ?
        function (o, p) {
          o.__proto__ = p;
          return o;
        } : (
      (gOPN && gOPD) ?
        (function(){
          function setProperties(o, p) {
            for (var
              key,
              names = gOPN(p),
              i = 0, length = names.length;
              i < length; i++
            ) {
              key = names[i];
              if (!hOP.call(o, key)) {
                defineProperty(o, key, gOPD(p, key));
              }
            }
          }
          return function (o, p) {
            do {
              setProperties(o, p);
            } while ((p = gPO(p)) && !iPO.call(p, o));
            return o;
          };
        }()) :
        function (o, p) {
          for (var key in p) {
            o[key] = p[key];
          }
          return o;
        }
    )),
  
    // DOM shortcuts and helpers, if any
  
    MutationObserver = window.MutationObserver ||
                       window.WebKitMutationObserver,
  
    HTMLElementPrototype = (
      window.HTMLElement ||
      window.Element ||
      window.Node
    ).prototype,
  
    IE8 = !iPO.call(HTMLElementPrototype, documentElement),
  
    safeProperty = IE8 ? function (o, k, d) {
      o[k] = d.value;
      return o;
    } : defineProperty,
  
    isValidNode = IE8 ?
      function (node) {
        return node.nodeType === 1;
      } :
      function (node) {
        return iPO.call(HTMLElementPrototype, node);
      },
  
    targets = IE8 && [],
  
    attachShadow = HTMLElementPrototype.attachShadow,
    cloneNode = HTMLElementPrototype.cloneNode,
    dispatchEvent = HTMLElementPrototype.dispatchEvent,
    getAttribute = HTMLElementPrototype.getAttribute,
    hasAttribute = HTMLElementPrototype.hasAttribute,
    removeAttribute = HTMLElementPrototype.removeAttribute,
    setAttribute = HTMLElementPrototype.setAttribute,
  
    // replaced later on
    createElement = document.createElement,
    patchedCreateElement = createElement,
  
    // shared observer for all attributes
    attributesObserver = MutationObserver && {
      attributes: true,
      characterData: true,
      attributeOldValue: true
    },
  
    // useful to detect only if there's no MutationObserver
    DOMAttrModified = MutationObserver || function(e) {
      doesNotSupportDOMAttrModified = false;
      documentElement.removeEventListener(
        DOM_ATTR_MODIFIED,
        DOMAttrModified
      );
    },
  
    // will both be used to make DOMNodeInserted asynchronous
    asapQueue,
    asapTimer = 0,
  
    // internal flags
    V0 = REGISTER_ELEMENT in document,
    setListener = true,
    justSetup = false,
    doesNotSupportDOMAttrModified = true,
    dropDomContentLoaded = true,
  
    // needed for the innerHTML helper
    notFromInnerHTMLHelper = true,
  
    // optionally defined later on
    onSubtreeModified,
    callDOMAttrModified,
    getAttributesMirror,
    observer,
    observe,
  
    // based on setting prototype capability
    // will check proto or the expando attribute
    // in order to setup the node once
    patchIfNotAlready,
    patch
  ;
  
  // only if needed
  if (!V0) {
  
    if (sPO || hasProto) {
        patchIfNotAlready = function (node, proto) {
          if (!iPO.call(proto, node)) {
            setupNode(node, proto);
          }
        };
        patch = setupNode;
    } else {
        patchIfNotAlready = function (node, proto) {
          if (!node[EXPANDO_UID]) {
            node[EXPANDO_UID] = Object(true);
            setupNode(node, proto);
          }
        };
        patch = patchIfNotAlready;
    }
  
    if (IE8) {
      doesNotSupportDOMAttrModified = false;
      (function (){
        var
          descriptor = gOPD(HTMLElementPrototype, ADD_EVENT_LISTENER),
          addEventListener = descriptor.value,
          patchedRemoveAttribute = function (name) {
            var e = new CustomEvent(DOM_ATTR_MODIFIED, {bubbles: true});
            e.attrName = name;
            e.prevValue = getAttribute.call(this, name);
            e.newValue = null;
            e[REMOVAL] = e.attrChange = 2;
            removeAttribute.call(this, name);
            dispatchEvent.call(this, e);
          },
          patchedSetAttribute = function (name, value) {
            var
              had = hasAttribute.call(this, name),
              old = had && getAttribute.call(this, name),
              e = new CustomEvent(DOM_ATTR_MODIFIED, {bubbles: true})
            ;
            setAttribute.call(this, name, value);
            e.attrName = name;
            e.prevValue = had ? old : null;
            e.newValue = value;
            if (had) {
              e[MODIFICATION] = e.attrChange = 1;
            } else {
              e[ADDITION] = e.attrChange = 0;
            }
            dispatchEvent.call(this, e);
          },
          onPropertyChange = function (e) {
            // jshint eqnull:true
            var
              node = e.currentTarget,
              superSecret = node[EXPANDO_UID],
              propertyName = e.propertyName,
              event
            ;
            if (superSecret.hasOwnProperty(propertyName)) {
              superSecret = superSecret[propertyName];
              event = new CustomEvent(DOM_ATTR_MODIFIED, {bubbles: true});
              event.attrName = superSecret.name;
              event.prevValue = superSecret.value || null;
              event.newValue = (superSecret.value = node[propertyName] || null);
              if (event.prevValue == null) {
                event[ADDITION] = event.attrChange = 0;
              } else {
                event[MODIFICATION] = event.attrChange = 1;
              }
              dispatchEvent.call(node, event);
            }
          }
        ;
        descriptor.value = function (type, handler, capture) {
          if (
            type === DOM_ATTR_MODIFIED &&
            this[ATTRIBUTE_CHANGED_CALLBACK] &&
            this.setAttribute !== patchedSetAttribute
          ) {
            this[EXPANDO_UID] = {
              className: {
                name: 'class',
                value: this.className
              }
            };
            this.setAttribute = patchedSetAttribute;
            this.removeAttribute = patchedRemoveAttribute;
            addEventListener.call(this, 'propertychange', onPropertyChange);
          }
          addEventListener.call(this, type, handler, capture);
        };
        defineProperty(HTMLElementPrototype, ADD_EVENT_LISTENER, descriptor);
      }());
    } else if (!MutationObserver) {
      documentElement[ADD_EVENT_LISTENER](DOM_ATTR_MODIFIED, DOMAttrModified);
      documentElement.setAttribute(EXPANDO_UID, 1);
      documentElement.removeAttribute(EXPANDO_UID);
      if (doesNotSupportDOMAttrModified) {
        onSubtreeModified = function (e) {
          var
            node = this,
            oldAttributes,
            newAttributes,
            key
          ;
          if (node === e.target) {
            oldAttributes = node[EXPANDO_UID];
            node[EXPANDO_UID] = (newAttributes = getAttributesMirror(node));
            for (key in newAttributes) {
              if (!(key in oldAttributes)) {
                // attribute was added
                return callDOMAttrModified(
                  0,
                  node,
                  key,
                  oldAttributes[key],
                  newAttributes[key],
                  ADDITION
                );
              } else if (newAttributes[key] !== oldAttributes[key]) {
                // attribute was changed
                return callDOMAttrModified(
                  1,
                  node,
                  key,
                  oldAttributes[key],
                  newAttributes[key],
                  MODIFICATION
                );
              }
            }
            // checking if it has been removed
            for (key in oldAttributes) {
              if (!(key in newAttributes)) {
                // attribute removed
                return callDOMAttrModified(
                  2,
                  node,
                  key,
                  oldAttributes[key],
                  newAttributes[key],
                  REMOVAL
                );
              }
            }
          }
        };
        callDOMAttrModified = function (
          attrChange,
          currentTarget,
          attrName,
          prevValue,
          newValue,
          action
        ) {
          var e = {
            attrChange: attrChange,
            currentTarget: currentTarget,
            attrName: attrName,
            prevValue: prevValue,
            newValue: newValue
          };
          e[action] = attrChange;
          onDOMAttrModified(e);
        };
        getAttributesMirror = function (node) {
          for (var
            attr, name,
            result = {},
            attributes = node.attributes,
            i = 0, length = attributes.length;
            i < length; i++
          ) {
            attr = attributes[i];
            name = attr.name;
            if (name !== 'setAttribute') {
              result[name] = attr.value;
            }
          }
          return result;
        };
      }
    }
  
    // set as enumerable, writable and configurable
    document[REGISTER_ELEMENT] = function registerElement(type, options) {
      upperType = type.toUpperCase();
      if (setListener) {
        // only first time document.registerElement is used
        // we need to set this listener
        // setting it by default might slow down for no reason
        setListener = false;
        if (MutationObserver) {
          observer = (function(attached, detached){
            function checkEmAll(list, callback) {
              for (var i = 0, length = list.length; i < length; callback(list[i++])){}
            }
            return new MutationObserver(function (records) {
              for (var
                current, node, newValue,
                i = 0, length = records.length; i < length; i++
              ) {
                current = records[i];
                if (current.type === 'childList') {
                  checkEmAll(current.addedNodes, attached);
                  checkEmAll(current.removedNodes, detached);
                } else {
                  node = current.target;
                  if (notFromInnerHTMLHelper &&
                      node[ATTRIBUTE_CHANGED_CALLBACK] &&
                      current.attributeName !== 'style') {
                    newValue = getAttribute.call(node, current.attributeName);
                    if (newValue !== current.oldValue) {
                      node[ATTRIBUTE_CHANGED_CALLBACK](
                        current.attributeName,
                        current.oldValue,
                        newValue
                      );
                    }
                  }
                }
              }
            });
          }(executeAction(ATTACHED), executeAction(DETACHED)));
          observe = function (node) {
            observer.observe(
              node,
              {
                childList: true,
                subtree: true
              }
            );
            return node;
          };
          observe(document);
          if (attachShadow) {
            HTMLElementPrototype.attachShadow = function () {
              return observe(attachShadow.apply(this, arguments));
            };
          }
        } else {
          asapQueue = [];
          document[ADD_EVENT_LISTENER]('DOMNodeInserted', onDOMNode(ATTACHED));
          document[ADD_EVENT_LISTENER]('DOMNodeRemoved', onDOMNode(DETACHED));
        }
  
        document[ADD_EVENT_LISTENER](DOM_CONTENT_LOADED, onReadyStateChange);
        document[ADD_EVENT_LISTENER]('readystatechange', onReadyStateChange);
  
        HTMLElementPrototype.cloneNode = function (deep) {
          var
            node = cloneNode.call(this, !!deep),
            i = getTypeIndex(node)
          ;
          if (-1 < i) patch(node, protos[i]);
          if (deep && query.length) loopAndSetup(node.querySelectorAll(query));
          return node;
        };
      }
  
      if (justSetup) return (justSetup = false);
  
      if (-2 < (
        indexOf.call(types, PREFIX_IS + upperType) +
        indexOf.call(types, PREFIX_TAG + upperType)
      )) {
        throwTypeError(type);
      }
  
      if (!validName.test(upperType) || -1 < indexOf.call(invalidNames, upperType)) {
        throw new Error('The type ' + type + ' is invalid');
      }
  
      var
        constructor = function () {
          return extending ?
            document.createElement(nodeName, upperType) :
            document.createElement(nodeName);
        },
        opt = options || OP,
        extending = hOP.call(opt, EXTENDS),
        nodeName = extending ? options[EXTENDS].toUpperCase() : upperType,
        upperType,
        i
      ;
  
      if (extending && -1 < (
        indexOf.call(types, PREFIX_TAG + nodeName)
      )) {
        throwTypeError(nodeName);
      }
  
      i = types.push((extending ? PREFIX_IS : PREFIX_TAG) + upperType) - 1;
  
      query = query.concat(
        query.length ? ',' : '',
        extending ? nodeName + '[is="' + type.toLowerCase() + '"]' : nodeName
      );
  
      constructor.prototype = (
        protos[i] = hOP.call(opt, 'prototype') ?
          opt.prototype :
          create(HTMLElementPrototype)
      );
  
      if (query.length) loopAndVerify(
        document.querySelectorAll(query),
        ATTACHED
      );
  
      return constructor;
    };
  
    document.createElement = (patchedCreateElement = function (localName, typeExtension) {
      var
        is = getIs(typeExtension),
        node = is ?
          createElement.call(document, localName, secondArgument(is)) :
          createElement.call(document, localName),
        name = '' + localName,
        i = indexOf.call(
          types,
          (is ? PREFIX_IS : PREFIX_TAG) +
          (is || name).toUpperCase()
        ),
        setup = -1 < i
      ;
      if (is) {
        node.setAttribute('is', is = is.toLowerCase());
        if (setup) {
          setup = isInQSA(name.toUpperCase(), is);
        }
      }
      notFromInnerHTMLHelper = !document.createElement.innerHTMLHelper;
      if (setup) patch(node, protos[i]);
      return node;
    });
  
  }
  
  function ASAP() {
    var queue = asapQueue.splice(0, asapQueue.length);
    asapTimer = 0;
    while (queue.length) {
      queue.shift().call(
        null, queue.shift()
      );
    }
  }
  
  function loopAndVerify(list, action) {
    for (var i = 0, length = list.length; i < length; i++) {
      verifyAndSetupAndAction(list[i], action);
    }
  }
  
  function loopAndSetup(list) {
    for (var i = 0, length = list.length, node; i < length; i++) {
      node = list[i];
      patch(node, protos[getTypeIndex(node)]);
    }
  }
  
  function executeAction(action) {
    return function (node) {
      if (isValidNode(node)) {
        verifyAndSetupAndAction(node, action);
        if (query.length) loopAndVerify(
          node.querySelectorAll(query),
          action
        );
      }
    };
  }
  
  function getTypeIndex(target) {
    var
      is = getAttribute.call(target, 'is'),
      nodeName = target.nodeName.toUpperCase(),
      i = indexOf.call(
        types,
        is ?
            PREFIX_IS + is.toUpperCase() :
            PREFIX_TAG + nodeName
      )
    ;
    return is && -1 < i && !isInQSA(nodeName, is) ? -1 : i;
  }
  
  function isInQSA(name, type) {
    return -1 < query.indexOf(name + '[is="' + type + '"]');
  }
  
  function onDOMAttrModified(e) {
    var
      node = e.currentTarget,
      attrChange = e.attrChange,
      attrName = e.attrName,
      target = e.target,
      addition = e[ADDITION] || 2,
      removal = e[REMOVAL] || 3
    ;
    if (notFromInnerHTMLHelper &&
        (!target || target === node) &&
        node[ATTRIBUTE_CHANGED_CALLBACK] &&
        attrName !== 'style' && (
          e.prevValue !== e.newValue ||
          // IE9, IE10, and Opera 12 gotcha
          e.newValue === '' && (
            attrChange === addition ||
            attrChange === removal
          )
    )) {
      node[ATTRIBUTE_CHANGED_CALLBACK](
        attrName,
        attrChange === addition ? null : e.prevValue,
        attrChange === removal ? null : e.newValue
      );
    }
  }
  
  function onDOMNode(action) {
    var executor = executeAction(action);
    return function (e) {
      asapQueue.push(executor, e.target);
      if (asapTimer) clearTimeout(asapTimer);
      asapTimer = setTimeout(ASAP, 1);
    };
  }
  
  function onReadyStateChange(e) {
    if (dropDomContentLoaded) {
      dropDomContentLoaded = false;
      e.currentTarget.removeEventListener(DOM_CONTENT_LOADED, onReadyStateChange);
    }
    if (query.length) loopAndVerify(
      (e.target || document).querySelectorAll(query),
      e.detail === DETACHED ? DETACHED : ATTACHED
    );
    if (IE8) purge();
  }
  
  function patchedSetAttribute(name, value) {
    // jshint validthis:true
    var self = this;
    setAttribute.call(self, name, value);
    onSubtreeModified.call(self, {target: self});
  }
  
  function setupNode(node, proto) {
    setPrototype(node, proto);
    if (observer) {
      observer.observe(node, attributesObserver);
    } else {
      if (doesNotSupportDOMAttrModified) {
        node.setAttribute = patchedSetAttribute;
        node[EXPANDO_UID] = getAttributesMirror(node);
        node[ADD_EVENT_LISTENER](DOM_SUBTREE_MODIFIED, onSubtreeModified);
      }
      node[ADD_EVENT_LISTENER](DOM_ATTR_MODIFIED, onDOMAttrModified);
    }
    if (node[CREATED_CALLBACK] && notFromInnerHTMLHelper) {
      node.created = true;
      node[CREATED_CALLBACK]();
      node.created = false;
    }
  }
  
  function purge() {
    for (var
      node,
      i = 0,
      length = targets.length;
      i < length; i++
    ) {
      node = targets[i];
      if (!documentElement.contains(node)) {
        length--;
        targets.splice(i--, 1);
        verifyAndSetupAndAction(node, DETACHED);
      }
    }
  }
  
  function throwTypeError(type) {
    throw new Error('A ' + type + ' type is already registered');
  }
  
  function verifyAndSetupAndAction(node, action) {
    var
      fn,
      i = getTypeIndex(node)
    ;
    if (-1 < i) {
      patchIfNotAlready(node, protos[i]);
      i = 0;
      if (action === ATTACHED && !node[ATTACHED]) {
        node[DETACHED] = false;
        node[ATTACHED] = true;
        i = 1;
        if (IE8 && indexOf.call(targets, node) < 0) {
          targets.push(node);
        }
      } else if (action === DETACHED && !node[DETACHED]) {
        node[ATTACHED] = false;
        node[DETACHED] = true;
        i = 1;
      }
      if (i && (fn = node[action + CALLBACK])) fn.call(node);
    }
  }
  
  
  
  // V1 in da House!
  function CustomElementRegistry() {}
  
  CustomElementRegistry.prototype = {
    constructor: CustomElementRegistry,
    // a workaround for the stubborn WebKit
    define: usableCustomElements ?
      function (name, Class, options) {
        if (options) {
          CERDefine(name, Class, options);
        } else {
          var NAME = name.toUpperCase();
          constructors[NAME] = {
            constructor: Class,
            create: [NAME]
          };
          nodeNames.set(Class, NAME);
          customElements.define(name, Class);
        }
      } :
      CERDefine,
    get: usableCustomElements ?
      function (name) {
        return customElements.get(name) || get(name);
      } :
      get,
    whenDefined: usableCustomElements ?
      function (name) {
        return Promise.race([
          customElements.whenDefined(name),
          whenDefined(name)
        ]);
      } :
      whenDefined
  };
  
  function CERDefine(name, Class, options) {
    var
      is = options && options[EXTENDS] || '',
      CProto = Class.prototype,
      proto = create(CProto),
      attributes = Class.observedAttributes || empty,
      definition = {prototype: proto}
    ;
    // TODO: is this needed at all since it's inherited?
    // defineProperty(proto, 'constructor', {value: Class});
    safeProperty(proto, CREATED_CALLBACK, {
        value: function () {
          if (justCreated) justCreated = false;
          else if (!this[DRECEV1]) {
            this[DRECEV1] = true;
            new Class(this);
            if (CProto[CREATED_CALLBACK])
              CProto[CREATED_CALLBACK].call(this);
            var info = constructors[nodeNames.get(Class)];
            if (!usableCustomElements || info.create.length > 1) {
              notifyAttributes(this);
            }
          }
      }
    });
    safeProperty(proto, ATTRIBUTE_CHANGED_CALLBACK, {
      value: function (name) {
        if (-1 < indexOf.call(attributes, name))
          CProto[ATTRIBUTE_CHANGED_CALLBACK].apply(this, arguments);
      }
    });
    if (CProto[CONNECTED_CALLBACK]) {
      safeProperty(proto, ATTACHED_CALLBACK, {
        value: CProto[CONNECTED_CALLBACK]
      });
    }
    if (CProto[DISCONNECTED_CALLBACK]) {
      safeProperty(proto, DETACHED_CALLBACK, {
        value: CProto[DISCONNECTED_CALLBACK]
      });
    }
    if (is) definition[EXTENDS] = is;
    name = name.toUpperCase();
    constructors[name] = {
      constructor: Class,
      create: is ? [is, secondArgument(name)] : [name]
    };
    nodeNames.set(Class, name);
    document[REGISTER_ELEMENT](name.toLowerCase(), definition);
    whenDefined(name);
    waitingList[name].r();
  }
  
  function get(name) {
    var info = constructors[name.toUpperCase()];
    return info && info.constructor;
  }
  
  function getIs(options) {
    return typeof options === 'string' ?
        options : (options && options.is || '');
  }
  
  function notifyAttributes(self) {
    var
      callback = self[ATTRIBUTE_CHANGED_CALLBACK],
      attributes = callback ? self.attributes : empty,
      i = attributes.length,
      attribute
    ;
    while (i--) {
      attribute =  attributes[i]; // || attributes.item(i);
      callback.call(
        self,
        attribute.name || attribute.nodeName,
        null,
        attribute.value || attribute.nodeValue
      );
    }
  }
  
  function whenDefined(name) {
    name = name.toUpperCase();
    if (!(name in waitingList)) {
      waitingList[name] = {};
      waitingList[name].p = new Promise(function (resolve) {
        waitingList[name].r = resolve;
      });
    }
    return waitingList[name].p;
  }
  
  function polyfillV1() {
    if (customElements) delete window.customElements;
    defineProperty(window, 'customElements', {
      configurable: true,
      value: new CustomElementRegistry()
    });
    defineProperty(window, 'CustomElementRegistry', {
      configurable: true,
      value: CustomElementRegistry
    });
    for (var
      patchClass = function (name) {
        var Class = window[name];
        if (Class) {
          window[name] = function CustomElementsV1(self) {
            var info, isNative;
            if (!self) self = this;
            if (!self[DRECEV1]) {
              justCreated = true;
              info = constructors[nodeNames.get(self.constructor)];
              isNative = usableCustomElements && info.create.length === 1;
              self = isNative ?
                Reflect.construct(Class, empty, info.constructor) :
                document.createElement.apply(document, info.create);
              self[DRECEV1] = true;
              justCreated = false;
              if (!isNative) notifyAttributes(self);
            }
            return self;
          };
          window[name].prototype = Class.prototype;
          try {
            Class.prototype.constructor = window[name];
          } catch(WebKit) {
            fixGetClass = true;
            defineProperty(Class, DRECEV1, {value: window[name]});
          }
        }
      },
      Classes = htmlClass.get(/^HTML[A-Z]*[a-z]/),
      i = Classes.length;
      i--;
      patchClass(Classes[i])
    ) {}
    (document.createElement = function (name, options) {
      var is = getIs(options);
      return is ?
        patchedCreateElement.call(this, name, secondArgument(is)) :
        patchedCreateElement.call(this, name);
    });
    if (!V0) {
      justSetup = true;
      document[REGISTER_ELEMENT]('');
    }
  }
  
  // if customElements is not there at all
  if (!customElements || polyfill === 'force') polyfillV1();
  else {
    // if available test extends work as expected
    try {
      (function (DRE, options, name) {
        options[EXTENDS] = 'a';
        DRE.prototype = create(HTMLAnchorElement.prototype);
        DRE.prototype.constructor = DRE;
        window.customElements.define(name, DRE, options);
        if (
          getAttribute.call(document.createElement('a', {is: name}), 'is') !== name ||
          (usableCustomElements && getAttribute.call(new DRE(), 'is') !== name)
        ) {
          throw options;
        }
      }(
        function DRE() {
          return Reflect.construct(HTMLAnchorElement, [], DRE);
        },
        {},
        'document-register-element-a'
      ));
    } catch(o_O) {
      // or force the polyfill if not
      // and keep internal original reference
      polyfillV1();
    }
  }
  
  try {
    createElement.call(document, 'a', 'a');
  } catch(FireFox) {
    secondArgument = function (is) {
      return {is: is.toLowerCase()};
    };
  }
  
}

exports.installCustomElements = installCustomElements;


},{}],20:[function(require,module,exports){
'use strict';

/**
 * Constructs a ES6/Promises A+ Promise instance.
 *
 * @constructor
 * @param {function(function(*=), function (*=))} resolver
 */
function Promise(resolver) {
  if (!(this instanceof Promise)) {
    throw new TypeError('Constructor Promise requires `new`');
  }
  if (!isFunction(resolver)) {
    throw new TypeError('Must pass resolver function');
  }

  /**
   * @type {function(this:Promise,*=,function(*=),function(*=),Deferred):!Promise}
   * @private
   */
  this._state = PendingPromise;

  /**
   * @type {*}
   * @private
   */
  this._value = [];

  /**
   * @type {boolean}
   * @private
   */
  this._isChainEnd = true;

  doResolve(
    this,
    adopter(this, FulfilledPromise),
    adopter(this, RejectedPromise),
    { then: resolver }
  );
}

/****************************
  Public Instance Methods
 ****************************/

/**
 * Creates a new promise instance that will receive the result of this promise
 * as inputs to the onFulfilled or onRejected callbacks.
 *
 * @param {function(*)} onFulfilled
 * @param {function(*)} onRejected
 */
Promise.prototype.then = function(onFulfilled, onRejected) {
  onFulfilled = isFunction(onFulfilled) ? onFulfilled : void 0;
  onRejected = isFunction(onRejected) ? onRejected : void 0;

  if (onFulfilled || onRejected) {
    this._isChainEnd = false;
  }

  return this._state(
    this._value,
    onFulfilled,
    onRejected
  );
};

/**
 * Creates a new promise that will handle the rejected state of this promise.
 *
 * @param {function(*)} onRejected
 * @returns {!Promise}
 */
Promise.prototype.catch = function(onRejected) {
  return this.then(void 0, onRejected);
};

/****************************
  Public Static Methods
 ****************************/

/**
 * Creates a fulfilled Promise of value. If value is itself a then-able,
 * resolves with the then-able's value.
 *
 * @this {!Promise}
 * @param {*=} value
 * @returns {!Promise}
 */
Promise.resolve = function(value) {
  var Constructor = this;
  var promise;

  if (isObject(value) && value instanceof this) {
    promise = value;
  } else {
    promise = new Constructor(function(resolve) {
      resolve(value);
    });
  }

  return /** @type {!Promise} */(promise);
};

/**
 * Creates a rejected Promise of reason.
 *
 * @this {!Promise}
 * @param {*=} reason
 * @returns {!Promise}
 */
Promise.reject = function(reason) {
  var Constructor = this;
  var promise = new Constructor(function(_, reject) {
    reject(reason);
  });

  return /** @type {!Promise} */(promise);
};

/**
 * Creates a Promise that will resolve with an array of the values of the
 * passed in promises. If any promise rejects, the returned promise will
 * reject.
 *
 * @this {!Promise}
 * @param {!Array<Promise|*>} promises
 * @returns {!Promise}
 */
Promise.all = function(promises) {
  var Constructor = this;
  var promise = new Constructor(function(resolve, reject) {
    var length = promises.length;
    var values = new Array(length);

    if (length === 0) {
      return resolve(values);
    }

    each(promises, function(promise, index) {
      Constructor.resolve(promise).then(function(value) {
        values[index] = value;
        if (--length === 0) {
          resolve(values);
        }
      }, reject);
    });
  });

  return /** @type {!Promise} */(promise);
};

/**
 * Creates a Promise that will resolve or reject based on the first
 * resolved or rejected promise.
 *
 * @this {!Promise}
 * @param {!Array<Promise|*>} promises
 * @returns {!Promise}
 */
Promise.race = function(promises) {
  var Constructor = this;
  var promise = new Constructor(function(resolve, reject) {
    for (var i = 0; i < promises.length; i++) {
      Constructor.resolve(promises[i]).then(resolve, reject);
    }
  });

  return /** @type {!Promise} */(promise);
};

var onPossiblyUnhandledRejection = function(reason, promise) {
  throw reason;
};

/**
 * An internal use static function.
 */
Promise._overrideUnhandledExceptionHandler = function(handler) {
  onPossiblyUnhandledRejection = handler;
};

/****************************
  Private functions
 ****************************/

/**
 * The Fulfilled Promise state. Calls onFulfilled with the resolved value of
 * this promise, creating a new promise.
 *
 * If there is no onFulfilled, returns the current promise to avoid an promise
 * instance.
 *
 * @this {!Promise} The current promise
 * @param {*=} value The current promise's resolved value.
 * @param {function(*=)=} onFulfilled
 * @param {function(*=)=} unused
 * @param {Deferred} deferred A deferred object that holds a promise and its
 *     resolve and reject functions. It IS NOT passed when called from
 *     Promise#then to save an object instance (since we may return the current
 *     promise). It IS passed in when adopting the Fulfilled state from the
 *     Pending state.
 * @returns {!Promise}
 */
function FulfilledPromise(value, onFulfilled, unused, deferred) {
  if (!onFulfilled) {
    deferredAdopt(deferred, FulfilledPromise, value);
    return this;
  }
  if (!deferred) {
    deferred = new Deferred(this.constructor);
  }
  defer(tryCatchDeferred(deferred, onFulfilled, value));
  return deferred.promise;
}

/**
 * The Rejected Promise state. Calls onRejected with the resolved value of
 * this promise, creating a new promise.
 *
 * If there is no onRejected, returns the current promise to avoid an promise
 * instance.
 *
 * @this {!Promise} The current promise
 * @param {*=} reason The current promise's rejection reason.
 * @param {function(*=)=} unused
 * @param {function(*=)=} onRejected
 * @param {Deferred} deferred A deferred object that holds a promise and its
 *     resolve and reject functions. It IS NOT passed when called from
 *     Promise#then to save an object instance (since we may return the current
 *     promise). It IS passed in when adopting the Rejected state from the
 *     Pending state.
 * @returns {!Promise}
 */
function RejectedPromise(reason, unused, onRejected, deferred) {
  if (!onRejected) {
    deferredAdopt(deferred, RejectedPromise, reason);
    return this;
  }
  if (!deferred) {
    deferred = new Deferred(this.constructor);
  }
  defer(tryCatchDeferred(deferred, onRejected, reason));
  return deferred.promise;
}

/**
 * The Pending Promise state. Eventually calls onFulfilled once the promise has
 * resolved, or onRejected once the promise rejects.
 *
 * If there is no onFulfilled and no onRejected, returns the current promise to
 * avoid an promise instance.
 *
 * @this {!Promise} The current promise
 * @param {*=} queue The current promise's pending promises queue.
 * @param {function(*=)=} onFulfilled
 * @param {function(*=)=} onRejected
 * @param {Deferred} deferred A deferred object that holds a promise and its
 *     resolve and reject functions. It IS NOT passed when called from
 *     Promise#then to save an object instance (since we may return the current
 *     promise). It IS passed in when adopting the Pending state from the
 *     Pending state of another promise.
 * @returns {!Promise}
 */
function PendingPromise(queue, onFulfilled, onRejected, deferred) {
  if (!deferred) {
    if (!onFulfilled && !onRejected) { return this; }
    deferred = new Deferred(this.constructor);
  }
  queue.push({
    deferred: deferred,
    onFulfilled: onFulfilled || deferred.resolve,
    onRejected: onRejected || deferred.reject
  });
  return deferred.promise;
}

/**
 * Constructs a deferred instance that holds a promise and its resolve and
 * reject functions.
 *
 * @constructor
 */
function Deferred(Promise) {
  var deferred = this;
  /** @type {!Promise} */
  this.promise = new Promise(function(resolve, reject) {
    /** @type {function(*=)} */
    deferred.resolve = resolve;

    /** @type {function(*=)} */
    deferred.reject = reject;
  });
  return deferred;
}

/**
 * Transitions the state of promise to another state. This is only ever called
 * on with a promise that is currently in the Pending state.
 *
 * @param {!Promise} promise
 * @param {function(this:Promise,*=,function(*=),function(*=),Deferred):!Promise} state
 * @param {*=} value
 */
function adopt(promise, state, value, adoptee) {
  var queue = promise._value;
  promise._state = state;
  promise._value = value;

  if (adoptee && state === PendingPromise) {
    adoptee._state(value, void 0, void 0, {
      promise: promise,
      resolve: void 0,
      reject: void 0
    });
  }

  for (var i = 0; i < queue.length; i++) {
    var next = queue[i];
    promise._state(
      value,
      next.onFulfilled,
      next.onRejected,
      next.deferred
    );
  }
  queue.length = 0;

  // Determine if this rejected promise will be "handled".
  if (state === RejectedPromise && promise._isChainEnd) {
    setTimeout(function() {
      if (promise._isChainEnd) {
        onPossiblyUnhandledRejection(value, promise);
      }
    }, 0);
  }
}

/**
 * A partial application of adopt.
 *
 * @param {!Promise} promise
 * @param {function(this:Promise,*=,function(*=),function(*=),Deferred):!Promise} state
 * @returns {function(*=)}
 */
function adopter(promise, state) {
  return function(value) {
    adopt(promise, state, value);
  };
}

/**
 * Updates a deferred promises state. Necessary for updating an adopting
 * promise's state when the adoptee resolves.
 *
 * @param {?Deferred} deferred
 * @param {function(this:Promise,*=,function(*=),function(*=),Deferred):!Promise} state
 * @param {*=} value
 */
function deferredAdopt(deferred, state, value) {
  if (deferred) {
    var promise = deferred.promise;
    promise._state = state;
    promise._value = value;
  }
}

/**
 * A no-op function to prevent double resolving.
 */
function noop() {}

/**
 * Tests if fn is a Function
 *
 * @param {*} fn
 * @returns {boolean}
 */
function isFunction(fn) {
  return typeof fn === 'function';
}

/**
 * Tests if fn is an Object
 *
 * @param {*} obj
 * @returns {boolean}
 */
function isObject(obj) {
  return obj === Object(obj);
}

/**
 * Iterates over each element of an array, calling the iterator with the
 * element and its index.
 *
 * @param {!Array} collection
 * @param {function(*=,number)} iterator
 */
function each(collection, iterator) {
  for (var i = 0; i < collection.length; i++) {
    iterator(collection[i], i);
  }
}

/**
 * Creates a function that will attempt to resolve the deferred with the return
 * of fn. If any error is raised, rejects instead.
 *
 * @param {!Deferred} deferred
 * @param {function(*=)} fn
 * @param {*} arg
 * @returns {function()}
 */
function tryCatchDeferred(deferred, fn, arg) {
  var promise = deferred.promise;
  var resolve = deferred.resolve;
  var reject = deferred.reject;
  return function() {
    try {
      var result = fn(arg);
      doResolve(promise, resolve, reject, result, result);
    } catch (e) {
      reject(e);
    }
  };
}

/**
 * Queues and executes multiple deferred functions on another run loop.
 */
var defer = (function() {
  /**
   * Defers fn to another run loop.
   */
  var scheduleFlush;
  if (typeof window !== 'undefined' && window.postMessage) {
    window.addEventListener('message', flush);
    scheduleFlush = function() {
      window.postMessage('macro-task', '*');
    };
  } else {
    scheduleFlush = function() {
      setTimeout(flush, 0);
    };
  }

  var queue = new Array(16);
  var length = 0;

  function flush() {
    for (var i = 0; i < length; i++) {
      var fn = queue[i];
      queue[i] = null;
      fn();
    }
    length = 0;
  }

  /**
   * @param {function()} fn
   */
  function defer(fn) {
    if (length === 0) { scheduleFlush(); }
    queue[length++] = fn;
  }

  return defer;
})();

/**
 * The Promise resolution procedure.
 * https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
 *
 * @param {!Promise} promise
 * @param {function(*=)} resolve
 * @param {function(*=)} reject
 * @param {*} value
 * @param {*=} context
 */
function doResolve(promise, resolve, reject, value, context) {
  var _reject = reject;
  var then;
  var _resolve;
  try {
    if (value === promise) {
      throw new TypeError('Cannot fulfill promise with itself');
    }
    var isObj = isObject(value);
    if (isObj && value instanceof promise.constructor) {
      adopt(promise, value._state, value._value, value);
    } else if (isObj && (then = value.then) && isFunction(then)) {
      _resolve = function(value) {
        _resolve = _reject = noop;
        doResolve(promise, resolve, reject, value, value);
      };
      _reject = function(reason) {
        _resolve = _reject = noop;
        reject(reason);
      };
      then.call(
        context,
        function(value) { _resolve(value); },
        function(reason) { _reject(reason); }
      );
    } else {
      resolve(value);
    }
  } catch (e) {
    _reject(e);
  }
}

module.exports = Promise;

},{}],21:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getIframe = getIframe;
exports.addDataAndJsonAttributes_ = addDataAndJsonAttributes_;
exports.preloadBootstrap = preloadBootstrap;
exports.getBootstrapBaseUrl = getBootstrapBaseUrl;
exports.setDefaultBootstrapBaseUrlForTesting = setDefaultBootstrapBaseUrlForTesting;
exports.resetBootstrapBaseUrlForTesting = resetBootstrapBaseUrlForTesting;
exports.getDefaultBootstrapBaseUrl = getDefaultBootstrapBaseUrl;
exports.getSubDomain = getSubDomain;
exports.getRandom = getRandom;
exports.generateSentinel = generateSentinel;
exports.resetCountForTesting = resetCountForTesting;

var _url = require('./url');

var _log = require('./log');

var _object = require('./utils/object');

var _iframeAttributes = require('../src/iframe-attributes');

var _mode = require('./mode');

var _experiments = require('./experiments');

var _style = require('./style');

var _string = require('./string');

var _json = require('./json');

var _config = require('./config');

/** @type {!Object<string,number>} Number of 3p frames on the for that type. */
/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var count = {};

/** @type {string} */
var overrideBootstrapBaseUrl = void 0;

/** @const {string} */
var TAG = '3p-frame';

/**
 * Produces the attributes for the ad template.
 * @param {!Window} parentWindow
 * @param {!AmpElement} element
 * @param {string=} opt_type
 * @param {Object=} opt_context
 * @return {!JsonObject} Contains
 *     - type, width, height, src attributes of <amp-ad> tag. These have
 *       precedence over the data- attributes.
 *     - data-* attributes of the <amp-ad> tag with the "data-" removed.
 *     - A _context object for internal use.
 */
function getFrameAttributes(parentWindow, element, opt_type, opt_context) {
  var type = opt_type || element.getAttribute('type');
  (0, _log.user)().assert(type, 'Attribute type required for <amp-ad>: %s', element);
  var sentinel = generateSentinel(parentWindow);
  var attributes = (0, _object.dict)();
  // Do these first, as the other attributes have precedence.
  addDataAndJsonAttributes_(element, attributes);
  attributes = (0, _iframeAttributes.getContextMetadata)(parentWindow, element, sentinel, attributes);
  attributes['type'] = type;
  Object.assign(attributes['_context'], opt_context);
  return attributes;
}

/**
 * Creates the iframe for the embed. Applies correct size and passes the embed
 * attributes to the frame via JSON inside the fragment.
 * @param {!Window} parentWindow
 * @param {!AmpElement} parentElement
 * @param {string=} opt_type
 * @param {Object=} opt_context
 * @param {!{
 *   disallowCustom,
 *   allowFullscreen,
 * }=} opt_options Options for the created iframe.
 * @return {!Element} The iframe.
 */
function getIframe(parentWindow, parentElement, opt_type, opt_context) {
  var _ref = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {},
      disallowCustom = _ref.disallowCustom,
      allowFullscreen = _ref.allowFullscreen;

  // Check that the parentElement is already in DOM. This code uses a new and
  // fast `isConnected` API and thus only used when it's available.
  (0, _log.dev)().assert(parentElement['isConnected'] === undefined || parentElement['isConnected'] === true, 'Parent element must be in DOM');
  var attributes = getFrameAttributes(parentWindow, parentElement, opt_type, opt_context);
  var iframe = parentWindow.document.createElement('iframe');

  if (!count[attributes['type']]) {
    count[attributes['type']] = 0;
  }
  count[attributes['type']] += 1;

  var baseUrl = getBootstrapBaseUrl(parentWindow, undefined, opt_type, disallowCustom);
  var host = (0, _url.parseUrlDeprecated)(baseUrl).hostname;
  // This name attribute may be overwritten if this frame is chosen to
  // be the master frame. That is ok, as we will read the name off
  // for our uses before that would occur.
  // @see https://github.com/ampproject/amphtml/blob/master/3p/integration.js
  var name = JSON.stringify((0, _object.dict)({
    'host': host,
    'type': attributes['type'],
    // https://github.com/ampproject/amphtml/pull/2955
    'count': count[attributes['type']],
    'attributes': attributes
  }));

  iframe.src = baseUrl;
  iframe.ampLocation = (0, _url.parseUrlDeprecated)(baseUrl);
  iframe.name = name;
  // Add the check before assigning to prevent IE throw Invalid argument error
  if (attributes['width']) {
    iframe.width = attributes['width'];
  }
  if (attributes['height']) {
    iframe.height = attributes['height'];
  }
  if (attributes['title']) {
    iframe.title = attributes['title'];
  }
  if (allowFullscreen) {
    iframe.setAttribute('allowfullscreen', 'true');
  }
  iframe.setAttribute('scrolling', 'no');
  (0, _style.setStyle)(iframe, 'border', 'none');
  /** @this {!Element} */
  iframe.onload = function () {
    // Chrome does not reflect the iframe readystate.
    this.readyState = 'complete';
  };
  if ((0, _experiments.isExperimentOn)(parentWindow, 'no-sync-xhr-in-ads')) {
    // Block synchronous XHR in ad. These are very rare, but super bad for UX
    // as they block the UI thread for the arbitrary amount of time until the
    // request completes.
    iframe.setAttribute('allow', 'sync-xhr \'none\';');
  }
  iframe.setAttribute('data-amp-3p-sentinel', attributes['_context']['sentinel']);
  return iframe;
}

/**
 * Copies data- attributes from the element into the attributes object.
 * Removes the data- from the name and capitalizes after -. If there
 * is an attribute called json, parses the JSON and adds it to the
 * attributes.
 * @param {!Element} element
 * @param {!JsonObject} attributes The destination.
 * visibleForTesting
 */
function addDataAndJsonAttributes_(element, attributes) {
  var dataset = element.dataset;

  for (var name in dataset) {
    // data-vars- is reserved for amp-analytics
    // see https://github.com/ampproject/amphtml/blob/master/extensions/amp-analytics/analytics-vars.md#variables-as-data-attribute
    if (!(0, _string.startsWith)(name, 'vars')) {
      attributes[name] = dataset[name];
    }
  }
  var json = element.getAttribute('json');
  if (json) {
    var obj = (0, _json.tryParseJson)(json);
    if (obj === undefined) {
      throw (0, _log.user)().createError('Error parsing JSON in json attribute in element %s', element);
    }
    for (var key in obj) {
      attributes[key] = obj[key];
    }
  }
}

/**
 * Preloads URLs related to the bootstrap iframe.
 * @param {!Window} win
 * @param {!./preconnect.Preconnect} preconnect
 * @param {string=} opt_type
 * @param {boolean=} opt_disallowCustom whether 3p url should not use meta tag.
 */
function preloadBootstrap(win, preconnect, opt_type, opt_disallowCustom) {
  var url = getBootstrapBaseUrl(win, undefined, opt_type, opt_disallowCustom);
  preconnect.preload(url, 'document');

  // While the URL may point to a custom domain, this URL will always be
  // fetched by it.
  var scriptUrl = (0, _mode.getMode)().localDev ? getAdsLocalhost(win) + '/dist.3p/current/integration.js' : _config.urls.thirdParty + '/1537224222059/f.js';
  preconnect.preload(scriptUrl, 'script');
}

/**
 * Returns the base URL for 3p bootstrap iframes.
 * @param {!Window} parentWindow
 * @param {boolean=} opt_strictForUnitTest
 * @param {string=} opt_type
 * @param {boolean=} opt_disallowCustom whether 3p url should not use meta tag.
 * @return {string}
 * @visibleForTesting
 */
function getBootstrapBaseUrl(parentWindow, opt_strictForUnitTest, opt_type, opt_disallowCustom) {
  // The value is cached in a global variable called `bootstrapBaseUrl`;
  var bootstrapBaseUrl = parentWindow.bootstrapBaseUrl;

  if (bootstrapBaseUrl) {
    return bootstrapBaseUrl;
  }
  return parentWindow.bootstrapBaseUrl = getCustomBootstrapBaseUrl(parentWindow, opt_strictForUnitTest, opt_type, opt_disallowCustom) || getDefaultBootstrapBaseUrl(parentWindow);
}

/**
 * @param {string} url
 */
function setDefaultBootstrapBaseUrlForTesting(url) {
  overrideBootstrapBaseUrl = url;
}

/**
 * @param {*} win
 */
function resetBootstrapBaseUrlForTesting(win) {
  win.bootstrapBaseUrl = undefined;
  win.defaultBootstrapSubDomain = undefined;
}

/**
 * Returns the default base URL for 3p bootstrap iframes.
 * @param {!Window} parentWindow
 * @param {string=} opt_srcFileBasename
 * @return {string}
 */
function getDefaultBootstrapBaseUrl(parentWindow, opt_srcFileBasename) {
  var srcFileBasename = opt_srcFileBasename || 'frame';
  if ((0, _mode.getMode)().localDev || (0, _mode.getMode)().test) {
    return overrideBootstrapBaseUrl || getAdsLocalhost(parentWindow) + '/dist.3p/' + ((0, _mode.getMode)().minified ? '1537224222059/' + srcFileBasename : 'current/' + srcFileBasename + '.max') + '.html';
  }
  // Ensure same sub-domain is used despite potentially different file.
  parentWindow.defaultBootstrapSubDomain = parentWindow.defaultBootstrapSubDomain || getSubDomain(parentWindow);
  return 'https://' + parentWindow.defaultBootstrapSubDomain + ('.' + _config.urls.thirdPartyFrameHost + '/1537224222059/') + (srcFileBasename + '.html');
}

/**
 * @param {!Window} win
 * @return {string}
 */
function getAdsLocalhost(win) {
  var adsUrl = _config.urls.thirdParty; // local dev with a non-localhost server
  if (adsUrl.indexOf('ampproject.net') > -1) {
    adsUrl = 'http://ads.localhost'; // local dev with a localhost server
  }
  return adsUrl + ':' + (win.location.port || win.parent.location.port);
}

/**
 * Sub domain on which the 3p iframe will be hosted.
 * Because we only calculate the URL once per page, this function is only
 * called once and hence all frames on a page use the same URL.
 * @param {!Window} win
 * @return {string}
 * @visibleForTesting
 */
function getSubDomain(win) {
  return 'd-' + getRandom(win);
}

/**
 * Generates a random non-negative integer.
 * @param {!Window} win
 * @return {string}
 */
function getRandom(win) {
  var rand = void 0;
  if (win.crypto && win.crypto.getRandomValues) {
    // By default use 2 32 bit integers.
    var uint32array = new Uint32Array(2);
    win.crypto.getRandomValues(uint32array);
    rand = String(uint32array[0]) + uint32array[1];
  } else {
    // Fall back to Math.random.
    rand = String(win.Math.random()).substr(2) + '0';
  }
  return rand;
}

/**
 * Returns the custom base URL for 3p bootstrap iframes if it exists.
 * Otherwise null.
 * @param {!Window} parentWindow
 * @param {boolean=} opt_strictForUnitTest
 * @param {string=} opt_type
 * @param {boolean=} opt_disallowCustom whether 3p url should not use meta tag.
 * @return {?string}
 */
function getCustomBootstrapBaseUrl(parentWindow, opt_strictForUnitTest, opt_type, opt_disallowCustom) {
  var meta = parentWindow.document.querySelector('meta[name="amp-3p-iframe-src"]');
  if (!meta) {
    return null;
  }
  if (opt_disallowCustom) {
    (0, _log.user)().error(TAG, '3p iframe url disabled for ' + (opt_type || 'unknown'));
    return null;
  }
  var url = (0, _url.assertHttpsUrl)(meta.getAttribute('content'), meta);
  (0, _log.user)().assert(url.indexOf('?') == -1, '3p iframe url must not include query string %s in element %s.', url, meta);
  // This is not a security primitive, we just don't want this to happen in
  // practice. People could still redirect to the same origin, but they cannot
  // redirect to the proxy origin which is the important one.
  var parsed = (0, _url.parseUrlDeprecated)(url);
  (0, _log.user)().assert(parsed.hostname == 'localhost' && !opt_strictForUnitTest || parsed.origin != (0, _url.parseUrlDeprecated)(parentWindow.location.href).origin, '3p iframe url must not be on the same origin as the current document ' + '%s (%s) in element %s. See https://github.com/ampproject/amphtml' + '/blob/master/spec/amp-iframe-origin-policy.md for details.', url, parsed.origin, meta);
  return url + '?1537224222059';
}

/**
 * Returns a randomized sentinel value for 3p iframes.
 * The format is "%d-%d" with the first value being the depth of current
 * window in the window hierarchy and the second a random integer.
 * @param {!Window} parentWindow
 * @return {string}
 * @visibleForTesting
 */
function generateSentinel(parentWindow) {
  var windowDepth = 0;
  for (var win = parentWindow; win && win != win.parent; win = win.parent) {
    windowDepth++;
  }
  return String(windowDepth) + '-' + getRandom(parentWindow);
}

/**
 * Resets the count of each 3p frame type
 * @visibleForTesting
 */
function resetCountForTesting() {
  count = {};
}

},{"../src/iframe-attributes":41,"./config":27,"./experiments":37,"./json":43,"./log":46,"./mode":48,"./string":66,"./style":68,"./url":72,"./utils/object":78}],22:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAdCid = getAdCid;
exports.getOrCreateAdCid = getOrCreateAdCid;

var _services = require('./services');

var _config = require('../ads/_config');

var _log = require('../src/log');

/**
 * @param {AMP.BaseElement} adElement
 * @return {!Promise<string|undefined>} A promise for a CID or undefined if
 *     - the ad network does not request one or
 *     - `amp-analytics` which provides the CID service was not installed.
 */
function getAdCid(adElement) {
  var config = _config.adConfig[adElement.element.getAttribute('type')];
  if (!config || !config.clientIdScope) {
    return Promise.resolve();
  }
  return getOrCreateAdCid(adElement.getAmpDoc(), config.clientIdScope, config.clientIdCookieName);
}

/**
 * @param {!./service/ampdoc-impl.AmpDoc} ampDoc
 * @param {string} clientIdScope
 * @param {string=} opt_clientIdCookieName
 * @param {number=} opt_timeout
 * @return {!Promise<string|undefined>} A promise for a CID or undefined.
 */
/**
 * Copyright 2016 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function getOrCreateAdCid(ampDoc, clientIdScope, opt_clientIdCookieName, opt_timeout) {
  var timeout = isNaN(opt_timeout) || opt_timeout == null ? 1000 : opt_timeout;
  var cidPromise = _services.Services.cidForDoc(ampDoc).then(function (cidService) {
    if (!cidService) {
      return;
    }
    return cidService.get({
      scope: (0, _log.dev)().assertString(clientIdScope),
      createCookieIfNotPresent: true,
      cookieName: opt_clientIdCookieName
    }, Promise.resolve(undefined)).catch(function (error) {
      // Not getting a CID is not fatal.
      (0, _log.dev)().error('AD-CID', error);
      return undefined;
    });
  });
  // The CID should never be crucial for an ad. If it does not come within
  // 1 second, assume it will never arrive.
  return _services.Services.timerFor(ampDoc.win).timeoutPromise(timeout, cidPromise, 'cid timeout').catch(function (error) {
    // Timeout is not fatal.
    (0, _log.dev)().warn('AD-CID', error);
    return undefined;
  });
}

},{"../ads/_config":2,"../src/log":46,"./services":64}],23:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isAdPositionAllowed = isAdPositionAllowed;
exports.getAdContainer = getAdContainer;
exports.getAmpAdResourceId = getAmpAdResourceId;

var _style = require('./style');

var _log = require('./log');

var _service = require('./service');

var AD_CONTAINER_PROP = '__AMP__AD_CONTAINER';

/**
 * Tags that are allowed to have fixed positioning
 * @const {!Object<string, boolean>}
 */
/**
 * Copyright 2016 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var CONTAINERS = {
  'AMP-FX-FLYING-CARPET': true,
  'AMP-LIGHTBOX': true,
  'AMP-STICKY-AD': true,
  'AMP-LIGHTBOX-GALLERY': true
};

/**
 * Determines if an element is fixed-positioned.
 * OK to use, because it's only called from onLayoutMeasure
 * @param {!Element} el
 * @param {!Window} win
 * @return {boolean}
 */
function isPositionFixed(el, win) {
  var _computedStyle = (0, _style.computedStyle)(win, el),
      position = _computedStyle.position;
  // We consider sticky positions as fixed, since they can be fixed.


  return position == 'fixed' || position == 'sticky';
}

/**
 * @param {!Element} element
 * @param {!Window} win
 * @return {boolean} whether the element position is allowed. If the element
 * belongs to CONTAINERS, it is allowed to be position fixed.
 * If the element has a position fixed ancestor, it is not allowed.
 * This should only be called when a layout on the page was just forced
 * anyway.
 */
function isAdPositionAllowed(element, win) {
  var hasFixedAncestor = false;
  var containers = 0;
  var el = element;
  do {
    if (CONTAINERS[el.tagName]) {
      // The containers must not themselves be contained in a fixed-position
      // element. Continue the search.
      containers++;
      hasFixedAncestor = false;
    } else if (isPositionFixed((0, _log.dev)().assertElement(el), win)) {
      // Because certain blessed elements may contain a position fixed
      // container (which contain an ad), we continue to search the
      // ancestry tree.
      hasFixedAncestor = true;
    }
    el = el.parentElement;
  } while (el && el.tagName != 'BODY');
  return !hasFixedAncestor && containers <= 1;
}

/**
 * Returns the blessed container element tagName if the ad is contained by one.
 * This is called during layout measure.
 * @param {!Element} element
 * @return {?string}
 */
function getAdContainer(element) {
  if (element[AD_CONTAINER_PROP] === undefined) {
    var el = element.parentElement;
    while (el && el.tagName != 'BODY') {
      if (CONTAINERS[el.tagName]) {
        return element[AD_CONTAINER_PROP] = el.tagName;
      }
      el = el.parentElement;
    }
    element[AD_CONTAINER_PROP] = null;
  }
  return element[AD_CONTAINER_PROP];
}

/**
 * Gets the resource ID of the amp-ad element containing the passed node.
 * If there is no containing amp-ad tag, then null will be returned.
 * TODO(jonkeller): Investigate whether non-A4A use case is needed. Issue 11436
 * @param {!Element} node
 * @param {!Window} topWin
 * @return {?string}
 */
function getAmpAdResourceId(node, topWin) {
  try {
    var frameParent = (0, _service.getParentWindowFrameElement)(node, topWin).parentElement;
    if (frameParent.nodeName == 'AMP-AD') {
      return String(frameParent.getResourceId());
    }
  } catch (e) {}
  // Whether we entered the catch above (e.g. due to attempt to access
  // across xdomain boundary), or failed to enter the if further above, the
  // node is not within a friendly amp-ad tag. So, there is no amp-ad
  // resource ID. How to handle that is up to the caller, but see TODO above.
  return null;
}

},{"./log":46,"./service":59,"./style":68}],24:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Copyright 2017 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Common AMP events.
 * @enum {string}
 */
var AmpEvents = exports.AmpEvents = {
  BUILT: 'amp:built',
  DOM_UPDATE: 'amp:dom-update',
  VISIBILITY_CHANGE: 'amp:visibilitychange', // https://github.com/ampproject/amphtml/blob/master/ads/README.md#page-visibility
  // The following codes are only used for testing.
  // TODO(choumx): Move these to a separate enum so they can be DCE'd.
  ATTACHED: 'amp:attached',
  STUBBED: 'amp:stubbed',
  LOAD_START: 'amp:load:start',
  LOAD_END: 'amp:load:end',
  ERROR: 'amp:error'
};

},{}],25:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.triggerAnalyticsEvent = triggerAnalyticsEvent;

var _services = require('./services');

/**
 * Helper method to trigger analytics event if amp-analytics is available.
 * TODO: Do not expose this function
 * @param {!Element} target
 * @param {string} eventType
 * @param {!Object<string, string>=} opt_vars A map of vars and their values.
 */
function triggerAnalyticsEvent(target, eventType, opt_vars) {
  _services.Services.analyticsForDocOrNull(target).then(function (analytics) {
    if (!analytics) {
      return;
    }
    analytics.triggerEventForTarget(target, eventType, opt_vars);
  });
} /**
   * Copyright 2016 The AMP HTML Authors. All Rights Reserved.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS-IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

},{"./services":64}],26:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Copyright 2017 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Commonly used signals across different elements and documents.
 * @enum {string}
 */
var CommonSignals = exports.CommonSignals = {

  /**
   * The element has been built.
   */
  BUILT: 'built',

  /**
   * The initial contents of an element/document/embed have been loaded.
   */
  INI_LOAD: 'ini-load',

  /**
   * The element has been loaded.
   */
  LOAD_END: 'load-end',

  /**
   * The element has started loading.
   */
  LOAD_START: 'load-start',

  /**
   * Rendering has been confirmed to have been started.
   */
  RENDER_START: 'render-start',

  /**
   * The element has been unlaid out.
   */
  UNLOAD: 'unload'
};

},{}],27:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Copyright 2016 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Allows for runtime configuration. Internally, the runtime should
 * use the src/config.js module for various constants. We can use the
 * AMP_CONFIG global to translate user-defined configurations to this
 * module.
 * @type {!Object<string, string>}
 */
var env = self.AMP_CONFIG || {};

var thirdPartyFrameRegex = typeof env['thirdPartyFrameRegex'] == 'string' ? new RegExp(env['thirdPartyFrameRegex']) : env['thirdPartyFrameRegex'];

var cdnProxyRegex = typeof env['cdnProxyRegex'] == 'string' ? new RegExp(env['cdnProxyRegex']) : env['cdnProxyRegex'];

/** @type {!Object<string, string|boolean|RegExp>} */
var urls = exports.urls = {
  thirdParty: env['thirdPartyUrl'] || 'https://3p.ampproject.net',
  thirdPartyFrameHost: env['thirdPartyFrameHost'] || 'ampproject.net',
  thirdPartyFrameRegex: thirdPartyFrameRegex || /^d-\d+\.ampproject\.net$/,
  cdn: env['cdnUrl'] || 'https://cdn.ampproject.org',
  /* Note that cdnProxyRegex is only ever checked against origins
   * (proto://host[:port]) so does not need to consider path
   */
  cdnProxyRegex: cdnProxyRegex || /^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/,
  localhostRegex: /^https?:\/\/localhost(:\d+)?$/,
  errorReporting: env['errorReportingUrl'] || 'https://amp-error-reporting.appspot.com/r',
  localDev: env['localDev'] || false
};

var config = exports.config = {
  urls: urls
};

},{}],28:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Copyright 2018 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// This file will be imported by 3P scripts.

/**
 * Possible consent policy state to proceed with.
 * @enum {number}
 */
var CONSENT_POLICY_STATE = exports.CONSENT_POLICY_STATE = {
  // Enum value has external dependency. Please do not change existing value.
  // If new values are added, please notify the AMP for Ads team to assure
  // correct Real Time Config behavior is maintained for Fast Fetch.
  SUFFICIENT: 1,
  INSUFFICIENT: 2,
  UNKNOWN_NOT_REQUIRED: 3,
  UNKNOWN: 4
};

},{}],29:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getConsentPolicyState = getConsentPolicyState;
exports.getConsentPolicySharedData = getConsentPolicySharedData;

var _consentState = require('./consent-state');

var _services = require('./services');

/**
 * Returns a promise that resolve when all consent state the policy wait
 * for resolve. Or if consent service is not available.
 * @param {!./service/ampdoc-impl.AmpDoc} ampdoc
 * @param {string} policyId
 * @return {!Promise<?CONSENT_POLICY_STATE>}
 */
/**
 * Copyright 2018 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function getConsentPolicyState(ampdoc, policyId) {
  return _services.Services.consentPolicyServiceForDocOrNull(ampdoc).then(function (consentPolicy) {
    if (!consentPolicy) {
      return null;
    }
    return consentPolicy.whenPolicyResolved(
    /** @type {string} */policyId);
  });
}

/**
 * Returns a promise that resolves to a sharedData retrieved from consent
 * remote endpoint.
 * @param {!./service/ampdoc-impl.AmpDoc} ampdoc
 * @param {string} policyId
 * @return {!Promise<?Object>}
 */
function getConsentPolicySharedData(ampdoc, policyId) {
  return _services.Services.consentPolicyServiceForDocOrNull(ampdoc).then(function (consentPolicy) {
    if (!consentPolicy) {
      return null;
    }
    return consentPolicy.getMergedSharedData(
    /** @type {string} */policyId);
  });
}

},{"./consent-state":28,"./services":64}],30:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCookie = getCookie;
exports.setCookie = setCookie;

var _string = require('./string');

var _url = require('./url');

var _config = require('./config');

/**
 * Returns the value of the cookie. The cookie access is restricted and must
 * go through the privacy review. Before using this method please file a
 * GitHub issue with "Privacy Review" label.
 *
 * Returns the cookie's value or `null`.
 *
 * @param {!Window} win
 * @param {string} name
 * @return {?string}
 */
function getCookie(win, name) {
  var cookieString = tryGetDocumentCookieNoInline(win);
  if (!cookieString) {
    return null;
  }
  var cookies = cookieString.split(';');
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i].trim();
    var eq = cookie.indexOf('=');
    if (eq == -1) {
      continue;
    }
    if ((0, _url.tryDecodeUriComponent)(cookie.substring(0, eq).trim()) == name) {
      var value = cookie.substring(eq + 1).trim();
      return (0, _url.tryDecodeUriComponent)(value, value);
    }
  }
  return null;
}

/**
 * This method should not be inlined to prevent TryCatch deoptimization.
 * NoInline keyword at the end of function name also prevents Closure compiler
 * from inlining the function.
 * @param {!Window} win
 * @return {string}
 */
/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function tryGetDocumentCookieNoInline(win) {
  try {
    return win.document.cookie;
  } catch (e) {
    // Act as if no cookie is available. Exceptions can be thrown when
    // AMP docs are opened on origins that do not allow setting
    // cookies such as null origins.
    return '';
  }
}

/**
 * Sets the value of the cookie. The cookie access is restricted and must
 * go through the privacy review. Before using this method please file a
 * GitHub issue with "Privacy Review" label.
 *
 * @param {!Window} win
 * @param {string} name
 * @param {string} value
 * @param {time} expirationTime
 * @param {{
 *   highestAvailableDomain:(boolean|undefined),
 *   domain:(string|undefined)
 * }=} opt_options
 *     - highestAvailableDomain: If true, set the cookie at the widest domain
 *       scope allowed by the browser. E.g. on example.com if we are currently
 *       on www.example.com.
 *     - domain: Explicit domain to set.
 *     - allowOnProxyOrigin: Allow setting a cookie on the AMP Cache.
 */
function setCookie(win, name, value, expirationTime, opt_options) {
  checkOriginForSettingCookie(win, opt_options, name);
  if (opt_options && opt_options.highestAvailableDomain) {
    var parts = win.location.hostname.split('.');
    var _domain = parts[parts.length - 1];
    for (var i = parts.length - 2; i >= 0; i--) {
      _domain = parts[i] + '.' + _domain;
      trySetCookie(win, name, value, expirationTime, _domain);
      if (getCookie(win, name) == value) {
        return;
      }
    }
  }
  var domain = undefined;
  if (opt_options && opt_options.domain) {
    domain = opt_options.domain;
  }
  trySetCookie(win, name, value, expirationTime, domain);
}

/**
 * Attempt to set a cookie with the given params.
 *
 * @param {!Window} win
 * @param {string} name
 * @param {string} value
 * @param {time} expirationTime
 * @param {string|undefined} domain
 */
function trySetCookie(win, name, value, expirationTime, domain) {
  // We do not allow setting cookies on the domain that contains both
  // the cdn. and www. hosts.
  if (domain == 'ampproject.org') {
    // Actively delete them.
    value = 'delete';
    expirationTime = 0;
  }
  var cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value) + '; path=/' + (domain ? '; domain=' + domain : '') + '; expires=' + new Date(expirationTime).toUTCString();
  try {
    win.document.cookie = cookie;
  } catch (ignore) {
    // Do not throw if setting the cookie failed Exceptions can be thrown
    // when AMP docs are opened on origins that do not allow setting
    // cookies such as null origins.
  }
}

/**
 * Throws if a given cookie should not be set on the given origin.
 * This is a defense-in-depth. Callers should never run into this.
 *
 * @param {!Window} win
 * @param {!Object|undefined} options
 * @param {string} name For the error message.
 */
function checkOriginForSettingCookie(win, options, name) {
  if (options && options.allowOnProxyOrigin) {
    return;
  }
  if ((0, _url.isProxyOrigin)(win.location.href)) {
    throw new Error('Should never attempt to set cookie on proxy origin: ' + name);
  }

  var current = (0, _url.parseUrlDeprecated)(win.location.href).hostname.toLowerCase();
  var proxy = (0, _url.parseUrlDeprecated)(_config.urls.cdn).hostname.toLowerCase();
  if (current == proxy || (0, _string.endsWith)(current, '.' + proxy)) {
    throw new Error('Should never attempt to set cookie on proxy origin.' + ' (in depth check): ' + name);
  }
}

},{"./config":27,"./string":66,"./url":72}],31:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isDocumentReady = isDocumentReady;
exports.onDocumentReady = onDocumentReady;
exports.whenDocumentReady = whenDocumentReady;
exports.whenDocumentComplete = whenDocumentComplete;
/**
 * Copyright 2016 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Whether the document is ready.
 * @param {!Document} doc
 * @return {boolean}
 */
function isDocumentReady(doc) {
  return doc.readyState != 'loading' && doc.readyState != 'uninitialized';
}

/**
 * Whether the document has loaded all the css and sub-resources.
 * @param {!Document} doc
 * @return {boolean}
 */
function isDocumentComplete(doc) {
  return doc.readyState == 'complete';
}

/**
 * Calls the callback when document is ready.
 * @param {!Document} doc
 * @param {function(!Document)} callback
 */
function onDocumentReady(doc, callback) {
  onDocumentState(doc, isDocumentReady, callback);
}

/**
 * Calls the callback when document's state satisfies the stateFn.
 * @param {!Document} doc
 * @param {function(!Document):boolean} stateFn
 * @param {function(!Document)} callback
 */
function onDocumentState(doc, stateFn, callback) {
  var ready = stateFn(doc);
  if (ready) {
    callback(doc);
  } else {
    var readyListener = function readyListener() {
      if (stateFn(doc)) {
        if (!ready) {
          ready = true;
          callback(doc);
        }
        doc.removeEventListener('readystatechange', readyListener);
      }
    };
    doc.addEventListener('readystatechange', readyListener);
  }
}

/**
 * Returns a promise that is resolved when document is ready.
 * @param {!Document} doc
 * @return {!Promise<!Document>}
 */
function whenDocumentReady(doc) {
  return new Promise(function (resolve) {
    onDocumentReady(doc, resolve);
  });
}

/**
 * Returns a promise that is resolved when document is complete.
 * @param {!Document} doc
 * @return {!Promise<!Document>}
 */
function whenDocumentComplete(doc) {
  return new Promise(function (resolve) {
    onDocumentState(doc, isDocumentComplete, resolve);
  });
}

},{}],32:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UPGRADE_TO_CUSTOMELEMENT_RESOLVER = exports.UPGRADE_TO_CUSTOMELEMENT_PROMISE = undefined;
exports.waitForChild = waitForChild;
exports.waitForChildPromise = waitForChildPromise;
exports.waitForBody = waitForBody;
exports.waitForBodyPromise = waitForBodyPromise;
exports.removeElement = removeElement;
exports.removeChildren = removeChildren;
exports.copyChildren = copyChildren;
exports.insertAfterOrAtStart = insertAfterOrAtStart;
exports.addAttributesToElement = addAttributesToElement;
exports.createElementWithAttributes = createElementWithAttributes;
exports.isConnectedNode = isConnectedNode;
exports.rootNodeFor = rootNodeFor;
exports.closest = closest;
exports.closestNode = closestNode;
exports.closestByTag = closestByTag;
exports.closestBySelector = closestBySelector;
exports.matches = matches;
exports.elementByTag = elementByTag;
exports.childElement = childElement;
exports.childElements = childElements;
exports.lastChildElement = lastChildElement;
exports.childNodes = childNodes;
exports.setScopeSelectorSupportedForTesting = setScopeSelectorSupportedForTesting;
exports.childElementByAttr = childElementByAttr;
exports.lastChildElementByAttr = lastChildElementByAttr;
exports.childElementsByAttr = childElementsByAttr;
exports.childElementByTag = childElementByTag;
exports.childElementsByTag = childElementsByTag;
exports.scopedQuerySelector = scopedQuerySelector;
exports.scopedQuerySelectorAll = scopedQuerySelectorAll;
exports.getDataParamsFromAttributes = getDataParamsFromAttributes;
exports.hasNextNodeInDocumentOrder = hasNextNodeInDocumentOrder;
exports.ancestorElements = ancestorElements;
exports.ancestorElementsByTag = ancestorElementsByTag;
exports.templateContentClone = templateContentClone;
exports.iterateCursor = iterateCursor;
exports.openWindowDialog = openWindowDialog;
exports.isJsonScriptTag = isJsonScriptTag;
exports.isJsonLdScriptTag = isJsonLdScriptTag;
exports.isRTL = isRTL;
exports.escapeCssSelectorIdent = escapeCssSelectorIdent;
exports.escapeCssSelectorNth = escapeCssSelectorNth;
exports.escapeHtml = escapeHtml;
exports.tryFocus = tryFocus;
exports.isIframed = isIframed;
exports.isAmpElement = isAmpElement;
exports.whenUpgradedToCustomElement = whenUpgradedToCustomElement;
exports.fullscreenEnter = fullscreenEnter;
exports.fullscreenExit = fullscreenExit;
exports.isFullscreenElement = isFullscreenElement;
exports.isEnabled = isEnabled;

var _promise = require('./utils/promise');

var _cssEscape = require('../third_party/css-escape/css-escape');

var _log = require('./log');

var _object = require('./utils/object');

var _string = require('./string');

var _types = require('./types');

/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var HTML_ESCAPE_CHARS = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#x27;',
  '`': '&#x60;'
};
var HTML_ESCAPE_REGEX = /(&|<|>|"|'|`)/g;

/** @const {string} */
var UPGRADE_TO_CUSTOMELEMENT_PROMISE = exports.UPGRADE_TO_CUSTOMELEMENT_PROMISE = '__AMP_UPG_PRM';

/** @const {string} */
var UPGRADE_TO_CUSTOMELEMENT_RESOLVER = exports.UPGRADE_TO_CUSTOMELEMENT_RESOLVER = '__AMP_UPG_RES';

/**
 * Waits until the child element is constructed. Once the child is found, the
 * callback is executed.
 * @param {!Element} parent
 * @param {function(!Element):boolean} checkFunc
 * @param {function()} callback
 */
function waitForChild(parent, checkFunc, callback) {
  if (checkFunc(parent)) {
    callback();
    return;
  }
  /** @const {!Window} */
  var win = (0, _types.toWin)(parent.ownerDocument.defaultView);
  if (win.MutationObserver) {
    /** @const {MutationObserver} */
    var observer = new win.MutationObserver(function () {
      if (checkFunc(parent)) {
        observer.disconnect();
        callback();
      }
    });
    observer.observe(parent, { childList: true });
  } else {
    /** @const {number} */
    var interval = win.setInterval(function () {
      if (checkFunc(parent)) {
        win.clearInterval(interval);
        callback();
      }
    }, /* milliseconds */5);
  }
}

/**
 * Waits until the child element is constructed. Once the child is found, the
 * promise is resolved.
 * @param {!Element} parent
 * @param {function(!Element):boolean} checkFunc
 * @return {!Promise}
 */
function waitForChildPromise(parent, checkFunc) {
  return new Promise(function (resolve) {
    waitForChild(parent, checkFunc, resolve);
  });
}

/**
 * Waits for document's body to be available.
 * Will be deprecated soon; use {@link AmpDoc#whenBodyAvailable} or
 * @{link DocumentState#onBodyAvailable} instead.
 * @param {!Document} doc
 * @param {function()} callback
 */
function waitForBody(doc, callback) {
  waitForChild(doc.documentElement, function () {
    return !!doc.body;
  }, callback);
}

/**
 * Waits for document's body to be available.
 * @param {!Document} doc
 * @return {!Promise}
 */
function waitForBodyPromise(doc) {
  return new Promise(function (resolve) {
    waitForBody(doc, resolve);
  });
}

/**
 * Removes the element.
 * @param {!Element} element
 */
function removeElement(element) {
  if (element.parentElement) {
    element.parentElement.removeChild(element);
  }
}

/**
 * Removes all child nodes of the specified element.
 * @param {!Element} parent
 */
function removeChildren(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

/**
 * Copies all children nodes of element "from" to element "to". Child nodes
 * are deeply cloned. Notice, that this method should be used with care and
 * preferably on smaller subtrees.
 * @param {!Element} from
 * @param {!Element|!DocumentFragment} to
 */
function copyChildren(from, to) {
  var frag = to.ownerDocument.createDocumentFragment();
  for (var n = from.firstChild; n; n = n.nextSibling) {
    frag.appendChild(n.cloneNode(true));
  }
  to.appendChild(frag);
}

/**
 * Insert the element in the root after the element named after or
 * if that is null at the beginning.
 * @param {!Element|!ShadowRoot} root
 * @param {!Element} element
 * @param {?Node} after
 */
function insertAfterOrAtStart(root, element, after) {
  var before = after ? after.nextSibling : root.firstChild;
  root.insertBefore(element, before);
}

/**
 * Add attributes to an element.
 * @param {!Element} element
 * @param {!JsonObject<string, string>} attributes
 * @return {!Element} created element
 */
function addAttributesToElement(element, attributes) {
  for (var attr in attributes) {
    element.setAttribute(attr, attributes[attr]);
  }
  return element;
}

/**
 * Create a new element on document with specified tagName and attributes.
 * @param {!Document} doc
 * @param {string} tagName
 * @param {!JsonObject<string, string>} attributes
 * @return {!Element} created element
 */
function createElementWithAttributes(doc, tagName, attributes) {
  var element = doc.createElement(tagName);
  return addAttributesToElement(element, attributes);
}

/**
 * Returns true if node is connected (attached).
 * @param {!Node} node
 * @return {boolean}
 * @see https://dom.spec.whatwg.org/#connected
 */
function isConnectedNode(node) {
  var connected = node.isConnected;
  if (connected !== undefined) {
    return connected;
  }

  // "An element is connected if its shadow-including root is a document."
  var n = node;
  do {
    n = rootNodeFor(n);
    if (n.host) {
      n = n.host;
    } else {
      break;
    }
  } while (true);
  return n.nodeType === Node.DOCUMENT_NODE;
}

/**
 * Returns the root for a given node. Does not cross shadow DOM boundary.
 * @param {!Node} node
 * @return {!Node}
 */
function rootNodeFor(node) {
  if (Node.prototype.getRootNode) {
    // Type checker says `getRootNode` may return null.
    return node.getRootNode() || node;
  }
  var n = void 0;
  for (n = node; !!n.parentNode; n = n.parentNode) {}
  return n;
}

/**
 * Finds the closest element that satisfies the callback from this element
 * up the DOM subtree.
 * @param {!Element} element
 * @param {function(!Element):boolean} callback
 * @param {Element=} opt_stopAt optional elemnt to stop the search at.
 * @return {?Element}
 */
function closest(element, callback, opt_stopAt) {
  for (var el = element; el && el !== opt_stopAt; el = el.parentElement) {
    if (callback(el)) {
      return el;
    }
  }
  return null;
}

/**
 * Finds the closest node that satisfies the callback from this node
 * up the DOM subtree.
 * @param {!Node} node
 * @param {function(!Node):boolean} callback
 * @return {?Node}
 */
function closestNode(node, callback) {
  for (var n = node; n; n = n.parentNode) {
    if (callback(n)) {
      return n;
    }
  }
  return null;
}

/**
 * Finds the closest element with the specified name from this element
 * up the DOM subtree.
 * @param {!Element} element
 * @param {string} tagName
 * @return {?Element}
 */
function closestByTag(element, tagName) {
  if (element.closest) {
    return element.closest(tagName);
  }
  tagName = tagName.toUpperCase();
  return closest(element, function (el) {
    return el.tagName == tagName;
  });
}

/**
 * Finds the closest element with the specified selector from this element
 * @param {!Element} element
 * @param {string} selector
 * @return {?Element} closest ancestor if found.
 */
function closestBySelector(element, selector) {
  if (element.closest) {
    return element.closest(selector);
  }

  return closest(element, function (el) {
    return matches(el, selector);
  });
}

/**
 * Checks if the given element matches the selector
 * @param  {!Element} el The element to verify
 * @param  {string} selector The selector to check against
 * @return {boolean} True if the element matched the selector. False otherwise.
 */
function matches(el, selector) {
  var matcher = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector || el.oMatchesSelector;
  if (matcher) {
    return matcher.call(el, selector);
  }
  return false; // IE8 always returns false.
}

/**
 * Finds the first descendant element with the specified name.
 * @param {!Element|!Document|!ShadowRoot} element
 * @param {string} tagName
 * @return {?Element}
 */
function elementByTag(element, tagName) {
  var elements = void 0;
  // getElementsByTagName() is not supported on ShadowRoot.
  if (typeof element.getElementsByTagName === 'function') {
    elements = element.getElementsByTagName(tagName);
  } else {
    elements = element. /*OK*/querySelectorAll(tagName);
  }
  return elements && elements[0] || null;
}

/**
 * Finds the first child element that satisfies the callback.
 * @param {!Element} parent
 * @param {function(!Element):boolean} callback
 * @return {?Element}
 */
function childElement(parent, callback) {
  for (var child = parent.firstElementChild; child; child = child.nextElementSibling) {
    if (callback(child)) {
      return child;
    }
  }
  return null;
}

/**
 * Finds all child elements that satisfy the callback.
 * @param {!Element} parent
 * @param {function(!Element):boolean} callback
 * @return {!Array<!Element>}
 */
function childElements(parent, callback) {
  var children = [];
  for (var child = parent.firstElementChild; child; child = child.nextElementSibling) {
    if (callback(child)) {
      children.push(child);
    }
  }
  return children;
}

/**
 * Finds the last child element that satisfies the callback.
 * @param {!Element} parent
 * @param {function(!Element):boolean} callback
 * @return {?Element}
 */
function lastChildElement(parent, callback) {
  for (var child = parent.lastElementChild; child; child = child.previousElementSibling) {
    if (callback(child)) {
      return child;
    }
  }
  return null;
}

/**
 * Finds all child nodes that satisfy the callback.
 * These nodes can include Text, Comment and other child nodes.
 * @param {!Node} parent
 * @param {function(!Node):boolean} callback
 * @return {!Array<!Node>}
 */
function childNodes(parent, callback) {
  var nodes = [];
  for (var child = parent.firstChild; child; child = child.nextSibling) {
    if (callback(child)) {
      nodes.push(child);
    }
  }
  return nodes;
}

/**
 * @type {boolean|undefined}
 * @visibleForTesting
 */
var scopeSelectorSupported = void 0;

/**
 * @param {boolean|undefined} val
 * @visibleForTesting
 */
function setScopeSelectorSupportedForTesting(val) {
  scopeSelectorSupported = val;
}

/**
 * Test that the :scope selector is supported and behaves correctly.
 * @param {!Element} parent
 * @return {boolean}
 */
function isScopeSelectorSupported(parent) {
  var doc = parent.ownerDocument;
  try {
    var testElement = doc.createElement('div');
    var testChild = doc.createElement('div');
    testElement.appendChild(testChild);
    // NOTE(cvializ, #12383): Firefox's implementation is incomplete,
    // therefore we test actual functionality of`:scope` as well.
    return testElement. /*OK*/querySelector(':scope div') === testChild;
  } catch (e) {
    return false;
  }
}

/**
 * Finds the first child element that has the specified attribute.
 * @param {!Element} parent
 * @param {string} attr
 * @return {?Element}
 */
function childElementByAttr(parent, attr) {
  return scopedQuerySelector /*OK*/(parent, '> [' + attr + ']');
}

/**
 * Finds the last child element that has the specified attribute.
 * @param {!Element} parent
 * @param {string} attr
 * @return {?Element}
 */
function lastChildElementByAttr(parent, attr) {
  return lastChildElement(parent, function (el) {
    return el.hasAttribute(attr);
  });
}

/**
 * Finds all child elements that has the specified attribute.
 * @param {!Element} parent
 * @param {string} attr
 * @return {!NodeList<!Element>}
 */
function childElementsByAttr(parent, attr) {
  return scopedQuerySelectorAll /*OK*/(parent, '> [' + attr + ']');
}

/**
 * Finds the first child element that has the specified tag name.
 * @param {!Element} parent
 * @param {string} tagName
 * @return {?Element}
 */
function childElementByTag(parent, tagName) {
  return scopedQuerySelector /*OK*/(parent, '> ' + tagName);
}

/**
 * Finds all child elements with the specified tag name.
 * @param {!Element} parent
 * @param {string} tagName
 * @return {!NodeList<!Element>}
 */
function childElementsByTag(parent, tagName) {
  return scopedQuerySelectorAll /*OK*/(parent, '> ' + tagName);
}

/**
 * Finds the first element that matches `selector`, scoped inside `root`.
 * Note: in IE, this causes a quick mutation of the element's class list.
 * @param {!Element} root
 * @param {string} selector
 * @return {?Element}
 */
function scopedQuerySelector(root, selector) {
  if (scopeSelectorSupported == null) {
    scopeSelectorSupported = isScopeSelectorSupported(root);
  }
  if (scopeSelectorSupported) {
    return root. /*OK*/querySelector(':scope ' + selector);
  }

  // Only IE.
  var unique = 'i-amphtml-scoped';
  root.classList.add(unique);
  var element = root. /*OK*/querySelector('.' + unique + ' ' + selector);
  root.classList.remove(unique);
  return element;
}

/**
 * Finds the every element that matches `selector`, scoped inside `root`.
 * Note: in IE, this causes a quick mutation of the element's class list.
 * @param {!Element} root
 * @param {string} selector
 * @return {!NodeList<!Element>}
 */
function scopedQuerySelectorAll(root, selector) {
  if (scopeSelectorSupported == null) {
    scopeSelectorSupported = isScopeSelectorSupported(root);
  }
  if (scopeSelectorSupported) {
    return root. /*OK*/querySelectorAll(':scope ' + selector);
  }

  // Only IE.
  var unique = 'i-amphtml-scoped';
  root.classList.add(unique);
  var elements = root. /*OK*/querySelectorAll('.' + unique + ' ' + selector);
  root.classList.remove(unique);
  return elements;
}

/**
 * Returns element data-param- attributes as url parameters key-value pairs.
 * e.g. data-param-some-attr=value -> {someAttr: value}.
 * @param {!Element} element
 * @param {function(string):string=} opt_computeParamNameFunc to compute the
 *    parameter name, get passed the camel-case parameter name.
 * @param {!RegExp=} opt_paramPattern Regex pattern to match data attributes.
 * @return {!JsonObject}
 */
function getDataParamsFromAttributes(element, opt_computeParamNameFunc, opt_paramPattern) {
  var computeParamNameFunc = opt_computeParamNameFunc || function (key) {
    return key;
  };
  var dataset = element.dataset;

  var params = (0, _object.dict)();
  var paramPattern = opt_paramPattern ? opt_paramPattern : /^param(.+)/;
  for (var key in dataset) {
    var _matches = key.match(paramPattern);
    if (_matches) {
      var param = _matches[1][0].toLowerCase() + _matches[1].substr(1);
      params[computeParamNameFunc(param)] = dataset[key];
    }
  }
  return params;
}

/**
 * Whether the element have a next node in the document order.
 * This means either:
 *  a. The element itself has a nextSibling.
 *  b. Any of the element ancestors has a nextSibling.
 * @param {!Element} element
 * @param {?Node} opt_stopNode
 * @return {boolean}
 */
function hasNextNodeInDocumentOrder(element, opt_stopNode) {
  var currentElement = element;
  do {
    if (currentElement.nextSibling) {
      return true;
    }
  } while ((currentElement = currentElement.parentNode) && currentElement != opt_stopNode);
  return false;
}

/**
 * Finds all ancestor elements that satisfy predicate.
 * @param {!Element} child
 * @param {function(!Element):boolean} predicate
 * @return {!Array<!Element>}
 */
function ancestorElements(child, predicate) {
  var ancestors = [];
  for (var ancestor = child.parentElement; ancestor; ancestor = ancestor.parentElement) {
    if (predicate(ancestor)) {
      ancestors.push(ancestor);
    }
  }
  return ancestors;
}

/**
 * Finds all ancestor elements that has the specified tag name.
 * @param {!Element} child
 * @param {string} tagName
 * @return {!Array<!Element>}
 */
function ancestorElementsByTag(child, tagName) {
  tagName = tagName.toUpperCase();
  return ancestorElements(child, function (el) {
    return el.tagName == tagName;
  });
}

/**
 * Returns a clone of the content of a template element.
 *
 * Polyfill to replace .content access for browsers that do not support
 * HTMLTemplateElements natively.
 *
 * @param {!HTMLTemplateElement|!Element} template
 * @return {!DocumentFragment}
 */
function templateContentClone(template) {
  if ('content' in template) {
    return template.content.cloneNode(true);
  } else {
    var content = template.ownerDocument.createDocumentFragment();
    copyChildren(template, content);
    return content;
  }
}

/**
 * Iterate over an array-like. Some collections like NodeList are
 * lazily evaluated in some browsers, and accessing `length` forces full
 * evaluation. We can improve performance by iterating until an element is
 * `undefined` to avoid checking the `length` property.
 * Test cases: https://jsperf.com/iterating-over-collections-of-elements
 * @param {!IArrayLike<T>} iterable
 * @param {function(T, number)} cb
 * @template T
 */
function iterateCursor(iterable, cb) {
  for (var i = 0, value; (value = iterable[i]) !== undefined; i++) {
    cb(value, i);
  }
}

/**
 * This method wraps around window's open method. It first tries to execute
 * `open` call with the provided target and if it fails, it retries the call
 * with the `_top` target. This is necessary given that in some embedding
 * scenarios, such as iOS' WKWebView, navigation to `_blank` and other targets
 * is blocked by default.
 *
 * @param {!Window} win
 * @param {string} url
 * @param {string} target
 * @param {string=} opt_features
 * @return {?Window}
 */
function openWindowDialog(win, url, target, opt_features) {
  // Try first with the specified target. If we're inside the WKWebView or
  // a similar environments, this method is expected to fail by default for
  // all targets except `_top`.
  var res = void 0;
  try {
    res = win.open(url, target, opt_features);
  } catch (e) {
    (0, _log.dev)().error('DOM', 'Failed to open url on target: ', target, e);
  }

  // Then try with `_top` target.
  if (!res && target != '_top') {
    res = win.open(url, '_top');
  }
  return res;
}

/**
 * Whether the element is a script tag with application/json type.
 * @param {!Element} element
 * @return {boolean}
 */
function isJsonScriptTag(element) {
  return element.tagName == 'SCRIPT' && element.getAttribute('type').toUpperCase() == 'APPLICATION/JSON';
}

/**
 * Whether the element is a script tag with application/json type.
 * @param {!Element} element
 * @return {boolean}
 */
function isJsonLdScriptTag(element) {
  return element.tagName == 'SCRIPT' && element.getAttribute('type').toUpperCase() == 'APPLICATION/LD+JSON';
}

/**
 * Whether the page's direction is right to left or not.
 * @param {!Document} doc
 * @return {boolean}
 */
function isRTL(doc) {
  var dir = doc.body.getAttribute('dir') || doc.documentElement.getAttribute('dir') || 'ltr';
  return dir == 'rtl';
}

/**
 * Escapes an ident (ID or a class name) to be used as a CSS selector.
 *
 * See https://drafts.csswg.org/cssom/#serialize-an-identifier.
 *
 * @param {string} ident
 * @return {string}
 */
function escapeCssSelectorIdent(ident) {
  return (0, _cssEscape.cssEscape)(ident);
}

/**
 * Escapes an ident in a way that can be used by :nth-child() psuedo-class.
 *
 * See https://github.com/w3c/csswg-drafts/issues/2306.
 *
 * @param {string|number} ident
 * @return {string}
 */
function escapeCssSelectorNth(ident) {
  var escaped = String(ident);
  // Ensure it doesn't close the nth-child psuedo class.
  (0, _log.dev)().assert(escaped.indexOf(')') === -1);
  return escaped;
}

/**
 * Escapes `<`, `>` and other HTML charcaters with their escaped forms.
 * @param {string} text
 * @return {string}
 */
function escapeHtml(text) {
  if (!text) {
    return text;
  }
  return text.replace(HTML_ESCAPE_REGEX, escapeHtmlChar);
}

/**
 * @param {string} c
 * @return {string}
 */
function escapeHtmlChar(c) {
  return HTML_ESCAPE_CHARS[c];
}

/**
 * Tries to focus on the given element; fails silently if browser throws an
 * exception.
 * @param {!Element} element
 */
function tryFocus(element) {
  try {
    element. /*OK*/focus();
  } catch (e) {
    // IE <= 7 may throw exceptions when focusing on hidden items.
  }
}

/**
 * Whether the given window is in an iframe or not.
 * @param {!Window} win
 * @return {boolean}
 */
function isIframed(win) {
  return win.parent && win.parent != win;
}

/**
 * Determines if this element is an AMP element
 * @param {!Element} element
 * @return {boolean}
 */
function isAmpElement(element) {
  var tag = element.tagName;
  // Use prefix to recognize AMP element. This is necessary because stub
  // may not be attached yet.
  return (0, _string.startsWith)(tag, 'AMP-') &&
  // Some "amp-*" elements are not really AMP elements. :smh:
  !(tag == 'AMP-STICKY-AD-TOP-PADDING' || tag == 'AMP-BODY');
}

/**
 * Return a promise that resolve when an AMP element upgrade from HTMLElement
 * to CustomElement
 * @param {!Element} element
 * @return {!Promise<!Element>}
 */
function whenUpgradedToCustomElement(element) {
  (0, _log.dev)().assert(isAmpElement(element), 'element is not AmpElement');
  if (element.createdCallback) {
    // Element already is CustomElement;
    return Promise.resolve(element);
  }
  // If Element is still HTMLElement, wait for it to upgrade to customElement
  // Note: use pure string to avoid obfuscation between versions.
  if (!element[UPGRADE_TO_CUSTOMELEMENT_PROMISE]) {
    var deferred = new _promise.Deferred();
    element[UPGRADE_TO_CUSTOMELEMENT_PROMISE] = deferred.promise;
    element[UPGRADE_TO_CUSTOMELEMENT_RESOLVER] = deferred.resolve;
  }

  return element[UPGRADE_TO_CUSTOMELEMENT_PROMISE];
}

/**
 * Replacement for `Element.requestFullscreen()` method.
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/requestFullscreen
 * @param {!Element} element
 */
function fullscreenEnter(element) {
  var requestFs = element.requestFullscreen || element.requestFullScreen || element.webkitRequestFullscreen || element.webkitRequestFullScreen || element.webkitEnterFullscreen || element.webkitEnterFullScreen || element.msRequestFullscreen || element.msRequestFullScreen || element.mozRequestFullscreen || element.mozRequestFullScreen;
  if (requestFs) {
    requestFs.call(element);
  }
}

/**
 * Replacement for `Document.exitFullscreen()` method.
 * https://developer.mozilla.org/en-US/docs/Web/API/Document/exitFullscreen
 * @param {!Element} element
 */
function fullscreenExit(element) {
  var exitFs = element.cancelFullScreen || element.exitFullscreen || element.exitFullScreen || element.webkitExitFullscreen || element.webkitExitFullScreen || element.webkitCancelFullScreen || element.mozCancelFullScreen || element.msExitFullscreen;
  if (exitFs) {
    exitFs.call(element);
    return;
  }
  if (element.ownerDocument) {
    exitFs = element.ownerDocument.cancelFullScreen || element.ownerDocument.exitFullscreen || element.ownerDocument.exitFullScreen || element.ownerDocument.webkitExitFullscreen || element.ownerDocument.webkitExitFullScreen || element.ownerDocument.webkitCancelFullScreen || element.ownerDocument.mozCancelFullScreen || element.ownerDocument.msExitFullscreen;
  }
  if (exitFs) {
    exitFs.call(element.ownerDocument);
    return;
  }
}

/**
 * Replacement for `Document.fullscreenElement`.
 * https://developer.mozilla.org/en-US/docs/Web/API/Document/fullscreenElement
 * @param {!Element} element
 * @return {boolean}
 */
function isFullscreenElement(element) {
  var isFullscreen = element.webkitDisplayingFullscreen;
  if (isFullscreen) {
    return true;
  }
  if (element.ownerDocument) {
    var fullscreenElement = element.ownerDocument.fullscreenElement || element.ownerDocument.webkitFullscreenElement || element.ownerDocument.mozFullScreenElement || element.webkitCurrentFullScreenElement;
    if (fullscreenElement == element) {
      return true;
    }
  }
  return false;
}

/**
 * Returns true if node is not disabled.
 *
 * IE8 can return false positives, see {@link matches}.
 * @param {!Element} element
 * @return {boolean}
 * @see https://www.w3.org/TR/html5/forms.html#concept-fe-disabled
 */
function isEnabled(element) {
  return !(element.disabled || matches(element, ':disabled'));
}

},{"../third_party/css-escape/css-escape":82,"./log":46,"./string":66,"./types":69,"./utils/object":78,"./utils/promise":79}],33:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getElementService = getElementService;
exports.getElementServiceIfAvailable = getElementServiceIfAvailable;
exports.getElementServiceForDoc = getElementServiceForDoc;
exports.getElementServiceIfAvailableForDoc = getElementServiceIfAvailableForDoc;
exports.getElementServiceIfAvailableForDocInEmbedScope = getElementServiceIfAvailableForDocInEmbedScope;
exports.extensionScriptsInNode = extensionScriptsInNode;
exports.isExtensionScriptInNode = isExtensionScriptInNode;

var _dom = require('./dom');

var dom = _interopRequireWildcard(_dom);

var _service = require('./service');

var _types = require('./types');

var _log = require('./log');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Returns a promise for a service for the given id and window. Also expects an
 * element that has the actual implementation. The promise resolves when the
 * implementation loaded. Users should typically wrap this as a special purpose
 * function (e.g. Services.viewportForDoc(...)) for type safety and because the
 * factory should not be passed around.
 * @param {!Window} win
 * @param {string} id of the service.
 * @param {string} extension Name of the custom extension that provides the
 *     implementation of this service.
 * @param {boolean=} opt_element Whether this service is provided by an element,
 *     not the extension.
 * @return {!Promise<*>}
 */
/**
 * Copyright 2016 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function getElementService(win, id, extension, opt_element) {
  return getElementServiceIfAvailable(win, id, extension, opt_element).then(function (service) {
    return assertService(service, id, extension);
  });
}

/**
 * Same as getElementService but produces null if the given element is not
 * actually available on the current page.
 * @param {!Window} win
 * @param {string} id of the service.
 * @param {string} extension Name of the custom extension that provides the
 *     implementation of this service.
 * @param {boolean=} opt_element Whether this service is provided by an
 *     element, not the extension.
 * @return {!Promise<?Object>}
 */
function getElementServiceIfAvailable(win, id, extension, opt_element) {
  var s = (0, _service.getServicePromiseOrNull)(win, id);
  if (s) {
    return (/** @type {!Promise<?Object>} */s
    );
  }
  return getElementServicePromiseOrNull(win, id, extension, opt_element);
}

/**
 * @param {!Window} win
 * @param {string} elementName Name of an extended custom element.
 * @return {boolean} Whether this element is scheduled to be loaded.
 */
function isElementScheduled(win, elementName) {
  // Set in custom-element.js
  if (!win.ampExtendedElements) {
    return false;
  }
  return !!win.ampExtendedElements[elementName];
}

/**
 * Returns a promise for a service for the given id and window. Also expects an
 * element that has the actual implementation. The promise resolves when the
 * implementation loaded. Users should typically wrap this as a special purpose
 * function (e.g. Services.viewportForDoc(...)) for type safety and because the
 * factory should not be passed around.
 * @param {!Element|!./service/ampdoc-impl.AmpDoc} elementOrAmpDoc
 * @param {string} id of the service.
 * @param {string} extension Name of the custom extension that provides the
 *     implementation of this service.
 * @param {boolean=} opt_element Whether this service is provided by an element,
 *     not the extension.
 * @return {!Promise<*>}
 */
function getElementServiceForDoc(elementOrAmpDoc, id, extension, opt_element) {
  return getElementServiceIfAvailableForDoc(elementOrAmpDoc, id, extension, opt_element).then(function (service) {
    return assertService(service, id, extension);
  });
}

/**
 * Same as getElementService but produces null if the given element is not
 * actually available on the current page.
 * @param {!Element|!./service/ampdoc-impl.AmpDoc} elementOrAmpDoc
 * @param {string} id of the service.
 * @param {string} extension Name of the custom extension that provides the
 *     implementation of this service.
 * @param {boolean=} opt_element Whether this service is provided by an
 *     element, not the extension.
 * @return {!Promise<?Object>}
 */
function getElementServiceIfAvailableForDoc(elementOrAmpDoc, id, extension, opt_element) {
  var ampdoc = (0, _service.getAmpdoc)(elementOrAmpDoc);
  var s = (0, _service.getServicePromiseOrNullForDoc)(elementOrAmpDoc, id);
  if (s) {
    return (/** @type {!Promise<?Object>} */s
    );
  }

  return ampdoc.whenBodyAvailable().then(function () {
    return waitForExtensionIfPresent(ampdoc.win, extension, ampdoc.getHeadNode());
  }).then(function () {
    // If this service is provided by an element, then we can't depend on
    // the service (they may not use the element).
    if (opt_element) {
      return (0, _service.getServicePromiseOrNullForDoc)(elementOrAmpDoc, id);
    } else if (isElementScheduled(ampdoc.win, extension)) {
      return (0, _service.getServicePromiseForDoc)(elementOrAmpDoc, id);
    }
    return null;
  });
}

/**
 * Returns a promise for service for the given id in the embed scope of
 * a given node, if it exists. Otherwise, falls back to ampdoc scope IFF
 * the given node is in the top-level window.
 * @param {!Element|!./service/ampdoc-impl.AmpDoc} elementOrAmpDoc
 * @param {string} id of the service.
 * @param {string} extension Name of the custom element that provides
 *     the implementation of this service.
 * @return {!Promise<?Object>}
 */
function getElementServiceIfAvailableForDocInEmbedScope(elementOrAmpDoc, id, extension) {
  var s = (0, _service.getExistingServiceForDocInEmbedScope)(elementOrAmpDoc, id);
  if (s) {
    return (/** @type {!Promise<?Object>} */Promise.resolve(s)
    );
  }
  // Return embed-scope element service promise if scheduled.
  if (elementOrAmpDoc.nodeType) {
    var win = (0, _types.toWin)(elementOrAmpDoc.ownerDocument.defaultView);
    var topWin = (0, _service.getTopWindow)(win);
    // In embeds, doc-scope services are window-scope. But make sure to
    // only do this for embeds (not the top window), otherwise we'd grab
    // a promise from the wrong service holder which would never resolve.
    if (win !== topWin) {
      return getElementServicePromiseOrNull(win, id, extension);
    } else {
      // Fallback to ampdoc IFF the given node is _not_ FIE.
      return getElementServiceIfAvailableForDoc(elementOrAmpDoc, id, extension);
    }
  }
  return (/** @type {!Promise<?Object>} */Promise.resolve(null)
  );
}

/**
 * Throws user error if `service` is null.
 * @param {Object} service
 * @param {string} id
 * @param {string} extension
 * @return {!Object}
 * @private
 */
function assertService(service, id, extension) {
  return (/** @type {!Object} */(0, _log.user)().assert(service, 'Service %s was requested to be provided through %s, ' + 'but %s is not loaded in the current page. To fix this ' + 'problem load the JavaScript file for %s in this page.', id, extension, extension, extension)
  );
}

/**
 * Get list of all the extension JS files
 * @param {HTMLHeadElement|Element|ShadowRoot} head
 * @return {!Array<string>}
 */
function extensionScriptsInNode(head) {
  // ampdoc.getHeadNode() can return null
  if (!head) {
    return [];
  }
  var scripts = [];
  var list = head.querySelectorAll('script[custom-element]');
  for (var i = 0; i < list.length; i++) {
    scripts.push(list[i].getAttribute('custom-element'));
  }
  return scripts;
}

/**
 * Waits for body to be present then verifies that an extension script is
 * present in head for installation.
 * @param {!./service/ampdoc-impl.AmpDoc} ampdoc
 * @param {string} extensionId
 * @return {!Promise<boolean>}
 */
function isExtensionScriptInNode(ampdoc, extensionId) {
  return ampdoc.whenBodyAvailable().then(function () {
    return extensionScriptInNode(ampdoc.getHeadNode(), extensionId);
  });
}

/**
 * Verifies that an extension script is present in head for
 * installation.
 * @param {HTMLHeadElement|Element|ShadowRoot} head
 * @param {string} extensionId
 * @private
 */
function extensionScriptInNode(head, extensionId) {
  return extensionScriptsInNode(head).includes(extensionId);
}

/**
 * Waits for an extension if its script is present
 * @param {!Window} win
 * @param {string} extension
 * @param {HTMLHeadElement|Element|ShadowRoot} head
 * @return {!Promise}
 * @private
 */
function waitForExtensionIfPresent(win, extension, head) {
  /**
   * If there is an extension script wait for it to load before trying
   * to get the service. Prevents a race condition when everything but
   * the extensions is in cache. If there is no script then it's either
   * not present, or the service was defined by a test. In those cases
   * we don't wait around for an extension that does not exist.
   */

  // TODO(jpettitt) investigate registerExtension to short circuit
  // the dom call in extensionScriptsInNode()
  if (!extensionScriptInNode(head, extension)) {
    return Promise.resolve();
  }

  var extensions = (0, _service.getService)(win, 'extensions');
  return (/** @type {!Promise<?Object>} */extensions.waitForExtension(win, extension)
  );
}

/**
 * Returns the promise for service with `id` on the given window if available.
 * Otherwise, resolves with null (service was not registered).
 * @param {!Window} win
 * @param {string} id
 * @param {string} extension
 * @param {boolean=} opt_element
 * @return {!Promise<Object>}
 * @private
 */
function getElementServicePromiseOrNull(win, id, extension, opt_element) {
  return dom.waitForBodyPromise(win.document).then(function () {
    return waitForExtensionIfPresent(win, extension, win.document.head);
  }).then(function () {
    // If this service is provided by an element, then we can't depend on
    // the service (they may not use the element).
    if (opt_element) {
      return (0, _service.getServicePromiseOrNull)(win, id);
    } else if (isElementScheduled(win, extension)) {
      return (0, _service.getServicePromise)(win, id);
    }
    return null;
  });
}

},{"./dom":32,"./log":46,"./service":59,"./types":69}],34:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reportErrorForWin = reportErrorForWin;
exports.reportError = reportError;
exports.cancellation = cancellation;
exports.isCancellation = isCancellation;
exports.blockedByConsentError = blockedByConsentError;
exports.isBlockedByConsent = isBlockedByConsent;
exports.installErrorReporting = installErrorReporting;
exports.maybeReportErrorToViewer = maybeReportErrorToViewer;
exports.getErrorReportData = getErrorReportData;
exports.detectNonAmpJs = detectNonAmpJs;
exports.resetAccumulatedErrorMessagesForTesting = resetAccumulatedErrorMessagesForTesting;
exports.detectJsEngineFromStack = detectJsEngineFromStack;
exports.reportErrorToAnalytics = reportErrorToAnalytics;

var _ampEvents = require('./amp-events');

var _services = require('./services');

var _log = require('./log');

var _experiments = require('./experiments');

var _exponentialBackoff = require('./exponential-backoff');

var _mode = require('./mode');

var _eventHelper = require('./event-helper');

var _url = require('./url');

var _styleInstaller = require('./style-installer');

var _string = require('./string');

var _analytics = require('./analytics');

var _config = require('./config');

/**
 * @const {string}
 */
var CANCELLED = 'CANCELLED';

/**
 * @const {string}
 */
/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var BLOCK_BY_CONSENT = 'BLOCK_BY_CONSENT';

/**
 * The threshold for errors throttled because nothing can be done about
 * them, but we'd still like to report the rough number.
 * @const {number}
 */
var NON_ACTIONABLE_ERROR_THROTTLE_THRESHOLD = 0.001;

/**
 * The threshold for errors throttled because nothing can be done about
 * them, but we'd still like to report the rough number.
 * @const {number}
 */
var USER_ERROR_THROTTLE_THRESHOLD = 0.1;

/**
 * Collects error messages, so they can be included in subsequent reports.
 * That allows identifying errors that might be caused by previous errors.
 */
var accumulatedErrorMessages = self.AMPErrors || [];
// Use a true global, to avoid multi-module inclusion issues.
self.AMPErrors = accumulatedErrorMessages;

/**
 * Pushes element into array, keeping at most the most recent limit elements
 *
 * @param {!Array<T>} array
 * @param {T} element
 * @param {number} limit
 * @template T
 */
function pushLimit(array, element, limit) {
  if (array.length >= limit) {
    array.splice(0, array.length - limit + 1);
  }
  array.push(element);
}

/**
 * A wrapper around our exponentialBackoff, to lazy initialize it to avoid an
 * un-DCE'able side-effect.
 * @param {function()} work the function to execute after backoff
 * @return {number} the setTimeout id
 */
var _reportingBackoff = function reportingBackoff(work) {
  // Set reportingBackoff as the lazy-created function. JS Vooodoooo.
  _reportingBackoff = (0, _exponentialBackoff.exponentialBackoff)(1.5);
  return _reportingBackoff(work);
};

/**
 * Attempts to stringify a value, falling back to String.
 * @param {*} value
 * @return {string}
 */
function tryJsonStringify(value) {
  try {
    // Cast is fine, because we really don't care here. Just trying.
    return JSON.stringify( /** @type {!JsonObject} */value);
  } catch (e) {
    return String(value);
  }
}

/**
 * The true JS engine, as detected by inspecting an Error stack. This should be
 * used with the userAgent to tell definitely. I.e., Chrome on iOS is really a
 * Safari JS engine.
 */
var detectedJsEngine = void 0;

/**
 * @param {!Window} win
 * @param {*} error
 * @param {!Element=} opt_associatedElement
 */
function reportErrorForWin(win, error, opt_associatedElement) {
  reportError(error, opt_associatedElement);
  if (error && !!win && (0, _log.isUserErrorMessage)(error.message) && !(0, _log.isUserErrorEmbed)(error.message)) {
    reportErrorToAnalytics( /** @type {!Error} */error, win);
  }
}

/**
 * Reports an error. If the error has an "associatedElement" property
 * the element is marked with the `i-amphtml-element-error` and displays
 * the message itself. The message is always send to the console.
 * If the error has a "messageArray" property, that array is logged.
 * This way one gets the native fidelity of the console for things like
 * elements instead of stringification.
 * @param {*} error
 * @param {!Element=} opt_associatedElement
 * @return {!Error}
 */
function reportError(error, opt_associatedElement) {
  try {
    // Convert error to the expected type.
    var isValidError = void 0;
    if (error) {
      if (error.message !== undefined) {
        error = (0, _log.duplicateErrorIfNecessary)( /** @type {!Error} */error);
        isValidError = true;
      } else {
        var origError = error;
        error = new Error(tryJsonStringify(origError));
        error.origError = origError;
      }
    } else {
      error = new Error('Unknown error');
    }
    // Report if error is not an expected type.
    if (!isValidError && (0, _mode.getMode)().localDev && !(0, _mode.getMode)().test) {
      setTimeout(function () {
        var rethrow = new Error('_reported_ Error reported incorrectly: ' + error);
        throw rethrow;
      });
    }

    if (error.reported) {
      return (/** @type {!Error} */error
      );
    }
    error.reported = true;

    // Update element.
    var element = opt_associatedElement || error.associatedElement;
    if (element && element.classList) {
      element.classList.add('i-amphtml-error');
      if ((0, _mode.getMode)().development) {
        element.classList.add('i-amphtml-element-error');
        element.setAttribute('error-message', error.message);
      }
    }

    // Report to console.
    if (self.console) {
      var output = console.error || console.log;
      if (error.messageArray) {
        output.apply(console, error.messageArray);
      } else {
        if (element) {
          output.call(console, error.message, element);
        } else if (!(0, _mode.getMode)().minified) {
          output.call(console, error.stack);
        } else {
          output.call(console, error.message);
        }
      }
    }
    if (element && element.dispatchCustomEventForTesting) {
      element.dispatchCustomEventForTesting(_ampEvents.AmpEvents.ERROR, error.message);
    }

    // 'call' to make linter happy. And .call to make compiler happy
    // that expects some @this.
    reportErrorToServer['call'](undefined, undefined, undefined, undefined, undefined, error);
  } catch (errorReportingError) {
    setTimeout(function () {
      throw errorReportingError;
    });
  }
  return (/** @type {!Error} */error
  );
}

/**
 * Returns an error for a cancellation of a promise.
 * @return {!Error}
 */
function cancellation() {
  return new Error(CANCELLED);
}

/**
 * @param {*} errorOrMessage
 * @return {boolean}
 */
function isCancellation(errorOrMessage) {
  if (!errorOrMessage) {
    return false;
  }
  if (typeof errorOrMessage == 'string') {
    return (0, _string.startsWith)(errorOrMessage, CANCELLED);
  }
  if (typeof errorOrMessage.message == 'string') {
    return (0, _string.startsWith)(errorOrMessage.message, CANCELLED);
  }
  return false;
}

/**
 * Returns an error for component blocked by consent
 * @return {!Error}
 */
function blockedByConsentError() {
  return new Error(BLOCK_BY_CONSENT);
}

/**
 * @param {*} errorOrMessage
 * @return {boolean}
 */
function isBlockedByConsent(errorOrMessage) {
  if (!errorOrMessage) {
    return false;
  }
  if (typeof errorOrMessage == 'string') {
    return (0, _string.startsWith)(errorOrMessage, BLOCK_BY_CONSENT);
  }
  if (typeof errorOrMessage.message == 'string') {
    return (0, _string.startsWith)(errorOrMessage.message, BLOCK_BY_CONSENT);
  }
  return false;
}

/**
 * Install handling of global unhandled exceptions.
 * @param {!Window} win
 */
function installErrorReporting(win) {
  win.onerror = /** @type {!Function} */reportErrorToServer;
  win.addEventListener('unhandledrejection', function (event) {
    if (event.reason && (event.reason.message === CANCELLED || event.reason.message === BLOCK_BY_CONSENT)) {
      event.preventDefault();
      return;
    }
    reportError(event.reason || new Error('rejected promise ' + event));
  });
}

/**
 * Signature designed, so it can work with window.onerror
 * @param {string|undefined} message
 * @param {string|undefined} filename
 * @param {string|undefined} line
 * @param {string|undefined} col
 * @param {*|undefined} error
 * @this {!Window|undefined}
 */
function reportErrorToServer(message, filename, line, col, error) {
  // Make an attempt to unhide the body.
  if (this && this.document) {
    (0, _styleInstaller.makeBodyVisible)(this.document);
  }
  if ((0, _mode.getMode)().localDev || (0, _mode.getMode)().development || (0, _mode.getMode)().test) {
    return;
  }
  var hasNonAmpJs = false;
  try {
    hasNonAmpJs = detectNonAmpJs(self);
  } catch (ignore) {
    // Ignore errors during error report generation.
  }
  if (hasNonAmpJs && Math.random() > 0.01) {
    // Only report 1% of errors on pages with non-AMP JS.
    // These errors can almost never be acted upon, but spikes such as
    // due to buggy browser extensions may be helpful to notify authors.
    return;
  }
  var data = getErrorReportData(message, filename, line, col, error, hasNonAmpJs);
  if (data) {
    // Report the error to viewer if it has the capability. The data passed
    // to the viewer is exactly the same as the data passed to the server
    // below.
    maybeReportErrorToViewer(this, data);
    _reportingBackoff(function () {
      var xhr = new XMLHttpRequest();
      xhr.open('POST', _config.urls.errorReporting, true);
      xhr.send(JSON.stringify(data));
    });
  }
}

/**
 * Passes the given error data to the viewer if the following criteria is met:
 * - The viewer is a trusted viewer
 * - The viewer has the `errorReporter` capability
 * - The AMP doc is in single doc mode
 * - The AMP doc is opted-in for error interception (`<html>` tag has the
 *   `report-errors-to-viewer` attribute)
 *
 * @param {!Window} win
 * @param {!JsonObject} data Data from `getErrorReportData`.
 * @return {!Promise<boolean>} `Promise<True>` if the error was sent to the
 *     viewer, `Promise<False>` otherwise.
 * @visibleForTesting
 */
function maybeReportErrorToViewer(win, data) {
  var ampdocService = _services.Services.ampdocServiceFor(win);
  if (!ampdocService.isSingleDoc()) {
    return Promise.resolve(false);
  }
  var ampdocSingle = ampdocService.getAmpDoc();
  var htmlElement = ampdocSingle.getRootNode().documentElement;
  var docOptedIn = htmlElement.hasAttribute('report-errors-to-viewer');
  if (!docOptedIn) {
    return Promise.resolve(false);
  }

  var viewer = _services.Services.viewerForDoc(ampdocSingle);
  if (!viewer.hasCapability('errorReporter')) {
    return Promise.resolve(false);
  }

  return viewer.isTrustedViewer().then(function (viewerTrusted) {
    if (!viewerTrusted) {
      return false;
    }
    viewer.sendMessage('error', data);
    return true;
  });
}

/**
 * Signature designed, so it can work with window.onerror
 * @param {string|undefined} message
 * @param {string|undefined} filename
 * @param {string|undefined} line
 * @param {string|undefined} col
 * @param {*|undefined} error
 * @param {boolean} hasNonAmpJs
 * @return {!JsonObject|undefined} The data to post
 * visibleForTesting
 */
function getErrorReportData(message, filename, line, col, error, hasNonAmpJs) {
  var expected = false;
  if (error) {
    if (error.message) {
      message = error.message;
    } else {
      // This should never be a string, but sometimes it is.
      message = String(error);
    }
    // An "expected" error is still an error, i.e. some features are disabled
    // or not functioning fully because of it. However, it's an expected
    // error. E.g. as is the case with some browser API missing (storage).
    // Thus, the error can be classified differently by log aggregators.
    // The main goal is to monitor that an "expected" error doesn't deteriorate
    // over time. It's impossible to completely eliminate it.
    if (error.expected) {
      expected = true;
    }
  }
  if (!message) {
    message = 'Unknown error';
  }
  if (/_reported_/.test(message)) {
    return;
  }
  if (message == CANCELLED) {
    return;
  }

  var detachedWindow = !(self && self.window);
  var throttleBase = Math.random();

  // We throttle load errors and generic "Script error." errors
  // that have no information and thus cannot be acted upon.
  if ((0, _eventHelper.isLoadErrorMessage)(message) ||
  // See https://github.com/ampproject/amphtml/issues/7353
  // for context.
  message == 'Script error.' ||
  // Window has become detached, really anything can happen
  // at this point.
  detachedWindow) {
    expected = true;

    if (throttleBase > NON_ACTIONABLE_ERROR_THROTTLE_THRESHOLD) {
      return;
    }
  }

  var isUserError = (0, _log.isUserErrorMessage)(message);

  // Only report a subset of user errors.
  if (isUserError && throttleBase > USER_ERROR_THROTTLE_THRESHOLD) {
    return;
  }

  // This is the App Engine app in
  // https://github.com/ampproject/error-tracker
  // It stores error reports via https://cloud.google.com/error-reporting/
  // for analyzing production issues.
  var data = /** @type {!JsonObject} */Object.create(null);
  data['v'] = (0, _mode.getMode)().rtvVersion;
  data['noAmp'] = hasNonAmpJs ? '1' : '0';
  data['m'] = message.replace(_log.USER_ERROR_SENTINEL, '');
  data['a'] = isUserError ? '1' : '0';

  // Errors are tagged with "ex" ("expected") label to allow loggers to
  // classify these errors as benchmarks and not exceptions.
  data['ex'] = expected ? '1' : '0';
  data['dw'] = detachedWindow ? '1' : '0';

  var runtime = '1p';
  if (self.context && self.context.location) {
    data['3p'] = '1';
    runtime = '3p';
  } else if ((0, _mode.getMode)().runtime) {
    runtime = (0, _mode.getMode)().runtime;
  }
  data['rt'] = runtime;

  // TODO(erwinm): Remove ca when all systems read `bt` instead of `ca` to
  // identify js binary type.
  data['ca'] = (0, _experiments.isCanary)(self) ? '1' : '0';

  // Pass binary type.
  data['bt'] = (0, _experiments.getBinaryType)(self);

  if (self.location.ancestorOrigins && self.location.ancestorOrigins[0]) {
    data['or'] = self.location.ancestorOrigins[0];
  }
  if (self.viewerState) {
    data['vs'] = self.viewerState;
  }
  // Is embedded?
  if (self.parent && self.parent != self) {
    data['iem'] = '1';
  }

  if (self.AMP && self.AMP.viewer) {
    var resolvedViewerUrl = self.AMP.viewer.getResolvedViewerUrl();
    var messagingOrigin = self.AMP.viewer.maybeGetMessagingOrigin();
    if (resolvedViewerUrl) {
      data['rvu'] = resolvedViewerUrl;
    }
    if (messagingOrigin) {
      data['mso'] = messagingOrigin;
    }
  }

  if (!detectedJsEngine) {
    detectedJsEngine = detectJsEngineFromStack();
  }
  data['jse'] = detectedJsEngine;

  var exps = [];
  var experiments = (0, _experiments.experimentTogglesOrNull)(self);
  for (var exp in experiments) {
    var on = experiments[exp];
    exps.push(exp + '=' + (on ? '1' : '0'));
  }
  data['exps'] = exps.join(',');

  if (error) {
    var tagName = error.associatedElement ? error.associatedElement.tagName : 'u'; // Unknown
    data['el'] = tagName;

    if (error.args) {
      data['args'] = JSON.stringify(error.args);
    }

    if (!isUserError && !error.ignoreStack && error.stack) {
      data['s'] = error.stack;
    }

    error.message += ' _reported_';
  } else {
    data['f'] = filename || '';
    data['l'] = line || '';
    data['c'] = col || '';
  }
  data['r'] = self.document.referrer;
  data['ae'] = accumulatedErrorMessages.join(',');
  data['fr'] = self.location.originalHash || self.location.hash;

  pushLimit(accumulatedErrorMessages, message, 25);

  return data;
}

/**
 * Returns true if it appears like there is non-AMP JS on the
 * current page.
 * @param {!Window} win
 * @return {boolean}
 * @visibleForTesting
 */
function detectNonAmpJs(win) {
  var scripts = win.document.querySelectorAll('script[src]');
  for (var i = 0; i < scripts.length; i++) {
    if (!(0, _url.isProxyOrigin)(scripts[i].src.toLowerCase())) {
      return true;
    }
  }
  return false;
}

/**
 * Resets accumulated error messages for testing
 */
function resetAccumulatedErrorMessagesForTesting() {
  accumulatedErrorMessages = [];
}

/**
 * Does a series of checks on the stack of an thrown error to determine the
 * JS engine that is currently running. This gives a bit more information than
 * just the UserAgent, since browsers often allow overriding it to "emulate"
 * mobile.
 * @return {string}
 * @visibleForTesting
 */
function detectJsEngineFromStack() {
  /** @constructor */
  function Fn() {}
  Fn.prototype.t = function () {
    throw new Error('message');
  };
  var object = new Fn();
  try {
    object.t();
  } catch (e) {
    var stack = e.stack;

    // Safari only mentions the method name.

    if ((0, _string.startsWith)(stack, 't@')) {
      return 'Safari';
    }

    // Firefox mentions "prototype".
    if (stack.indexOf('.prototype.t@') > -1) {
      return 'Firefox';
    }

    // IE looks like Chrome, but includes a context for the base stack line.
    // Explicitly, we're looking for something like:
    // "    at Global code (https://example.com/app.js:1:200)" or
    // "    at Anonymous function (https://example.com/app.js:1:200)"
    // vs Chrome which has:
    // "    at https://example.com/app.js:1:200"
    var last = stack.split('\n').pop();
    if (/\bat .* \(/i.test(last)) {
      return 'IE';
    }

    // Finally, chrome includes the error message in the stack.
    if ((0, _string.startsWith)(stack, 'Error: message')) {
      return 'Chrome';
    }
  }

  return 'unknown';
}

/**
 * @param {!Error} error
 * @param {!Window} win
 */
function reportErrorToAnalytics(error, win) {
  if ((0, _experiments.isExperimentOn)(win, 'user-error-reporting')) {
    var vars = {
      'errorName': error.name,
      'errorMessage': error.message
    };
    (0, _analytics.triggerAnalyticsEvent)(getRootElement_(win), 'user-error', vars);
  }
}

/**
 * @param {!Window} win
 * @return {!Element}
 * @private
 */
function getRootElement_(win) {
  var root = _services.Services.ampdocServiceFor(win).getAmpDoc().getRootNode();
  return (0, _log.dev)().assertElement(root.documentElement || root.body || root);
}

},{"./amp-events":24,"./analytics":25,"./config":27,"./event-helper":36,"./experiments":37,"./exponential-backoff":38,"./log":46,"./mode":48,"./services":64,"./string":66,"./style-installer":67,"./url":72}],35:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.internalListenImplementation = internalListenImplementation;
exports.detectEvtListenerOptsSupport = detectEvtListenerOptsSupport;
exports.resetEvtListenerOptsSupportForTesting = resetEvtListenerOptsSupportForTesting;
/**
 * Copyright 2017 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
  * Whether addEventListener supports options or only takes capture as a boolean
  * @type {boolean|undefined}
  * @visibleForTesting
  */
var optsSupported = void 0;

/**
 * Listens for the specified event on the element.
 *
 * Do not use this directly. This method is implemented as a shared
 * dependency. Use `listen()` in either `event-helper` or `3p-frame-messaging`,
 * depending on your use case.
 *
 * @param {!EventTarget} element
 * @param {string} eventType
 * @param {function(!Event)} listener
 * @param {Object=} opt_evtListenerOpts
 * @return {!UnlistenDef}
 */
function internalListenImplementation(element, eventType, listener, opt_evtListenerOpts) {
  var localElement = element;
  var localListener = listener;
  /**
   * @type {?Function}
   */
  var wrapped = void 0;

  wrapped = function wrapped(event) {
    try {
      return localListener(event);
    } catch (e) {
      // reportError is installed globally per window in the entry point.
      self.reportError(e);
      throw e;
    }
  };
  var optsSupported = detectEvtListenerOptsSupport();
  var capture = false;
  if (opt_evtListenerOpts) {
    capture = opt_evtListenerOpts.capture;
  }
  localElement.addEventListener(eventType, wrapped, optsSupported ? opt_evtListenerOpts : capture);
  return function () {
    if (localElement) {
      localElement.removeEventListener(eventType, wrapped, optsSupported ? opt_evtListenerOpts : capture);
    }
    // Ensure these are GC'd
    localListener = null;
    localElement = null;
    wrapped = null;
  };
}

/**
 * Tests whether the browser supports options as an argument of addEventListener
 * or not.
 *
 * @return {boolean}
 */
function detectEvtListenerOptsSupport() {
  // Only run the test once
  if (optsSupported !== undefined) {
    return optsSupported;
  }

  optsSupported = false;
  try {
    // Test whether browser supports EventListenerOptions or not
    var options = {
      get capture() {
        optsSupported = true;
      }
    };
    self.addEventListener('test-options', null, options);
    self.removeEventListener('test-options', null, options);
  } catch (err) {
    // EventListenerOptions are not supported
  }
  return optsSupported;
}

/**
  * Resets the test for whether addEventListener supports options or not.
  */
function resetEvtListenerOptsSupportForTesting() {
  optsSupported = undefined;
}

},{}],36:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createCustomEvent = createCustomEvent;
exports.listen = listen;
exports.getData = getData;
exports.getDetail = getDetail;
exports.listenOnce = listenOnce;
exports.listenOncePromise = listenOncePromise;
exports.isLoaded = isLoaded;
exports.loadPromise = loadPromise;
exports.isLoadErrorMessage = isLoadErrorMessage;

var _eventHelperListen = require('./event-helper-listen');

var _log = require('./log');

/** @const {string}  */
/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var LOAD_FAILURE_PREFIX = 'Failed to load:';

/**
 * Returns a CustomEvent with a given type and detail; supports fallback for IE.
 * @param {!Window} win
 * @param {string} type
 * @param {!JsonObject|string|undefined|null} detail
 * @param {EventInit=} opt_eventInit
 * @return {!Event}
 */
function createCustomEvent(win, type, detail, opt_eventInit) {
  var eventInit = /** @type {!CustomEventInit} */{ detail: detail };
  Object.assign(eventInit, opt_eventInit);
  // win.CustomEvent is a function on Edge, Chrome, FF, Safari but
  // is an object on IE 11.
  if (typeof win.CustomEvent == 'function') {
    return new win.CustomEvent(type, eventInit);
  } else {
    // Deprecated fallback for IE.
    var e = win.document.createEvent('CustomEvent');
    e.initCustomEvent(type, !!eventInit.bubbles, !!eventInit.cancelable, detail);
    return e;
  }
}

/**
 * Listens for the specified event on the element.
 * @param {!EventTarget} element
 * @param {string} eventType
 * @param {function(!Event)} listener
 * @param {Object=} opt_evtListenerOpts
 * @return {!UnlistenDef}
 */
function listen(element, eventType, listener, opt_evtListenerOpts) {
  return (0, _eventHelperListen.internalListenImplementation)(element, eventType, listener, opt_evtListenerOpts);
}

/**
 * Returns the data property of an event with the correct type.
 * @param {!Event|{data: !JsonObject}} event
 * @return {?JsonObject|string|undefined}
 */
function getData(event) {
  return (/** @type {?JsonObject|string|undefined} */event.data
  );
}

/**
 * Returns the detail property of an event with the correct type.
 * @param {!Event|{detail: !JsonObject}} event
 * @return {?JsonObject|string|undefined}
 */
function getDetail(event) {
  return (/** @type {?JsonObject|string|undefined} */event.detail
  );
}

/**
 * Listens for the specified event on the element and removes the listener
 * as soon as event has been received.
 * @param {!EventTarget} element
 * @param {string} eventType
 * @param {function(!Event)} listener
 * @param {Object=} opt_evtListenerOpts
 * @return {!UnlistenDef}
 */
function listenOnce(element, eventType, listener, opt_evtListenerOpts) {
  var localListener = listener;
  var unlisten = (0, _eventHelperListen.internalListenImplementation)(element, eventType, function (event) {
    try {
      localListener(event);
    } finally {
      // Ensure listener is GC'd
      localListener = null;
      unlisten();
    }
  }, opt_evtListenerOpts);
  return unlisten;
}

/**
 * Returns  a promise that will resolve as soon as the specified event has
 * fired on the element.
 * @param {!EventTarget} element
 * @param {string} eventType
 * @param {Object=} opt_evtListenerOpts
 * @param {function(!UnlistenDef)=} opt_cancel An optional function that, when
 *     provided, will be called with the unlistener. This gives the caller
 *     access to the unlistener, so it may be called manually when necessary.
 * @return {!Promise<!Event>}
 */
function listenOncePromise(element, eventType, opt_evtListenerOpts, opt_cancel) {
  var unlisten = void 0;
  var eventPromise = new Promise(function (resolve) {
    unlisten = listenOnce(element, eventType, resolve, opt_evtListenerOpts);
  });
  eventPromise.then(unlisten, unlisten);
  if (opt_cancel) {
    opt_cancel(unlisten);
  }
  return eventPromise;
}

/**
 * Whether the specified element/window has been loaded already.
 * @param {!Element|!Window} eleOrWindow
 * @return {boolean}
 */
function isLoaded(eleOrWindow) {
  return !!(eleOrWindow.complete || eleOrWindow.readyState == 'complete'
  // If the passed in thing is a Window, infer loaded state from
  //
  || eleOrWindow.document && eleOrWindow.document.readyState == 'complete');
}

/**
 * Returns a promise that will resolve or fail based on the eleOrWindow's 'load'
 * and 'error' events. Optionally this method takes a timeout, which will reject
 * the promise if the resource has not loaded by then.
 * @param {T} eleOrWindow Supports both Elements and as a special case Windows.
 * @return {!Promise<T>}
 * @template T
 */
function loadPromise(eleOrWindow) {
  var unlistenLoad = void 0;
  var unlistenError = void 0;
  if (isLoaded(eleOrWindow)) {
    return Promise.resolve(eleOrWindow);
  }
  var loadingPromise = new Promise(function (resolve, reject) {
    // Listen once since IE 5/6/7 fire the onload event continuously for
    // animated GIFs.
    var tagName = eleOrWindow.tagName;

    if (tagName === 'AUDIO' || tagName === 'VIDEO') {
      unlistenLoad = listenOnce(eleOrWindow, 'loadstart', resolve);
    } else {
      unlistenLoad = listenOnce(eleOrWindow, 'load', resolve);
    }
    // For elements, unlisten on error (don't for Windows).
    if (tagName) {
      unlistenError = listenOnce(eleOrWindow, 'error', reject);
    }
  });

  return loadingPromise.then(function () {
    if (unlistenError) {
      unlistenError();
    }
    return eleOrWindow;
  }, function () {
    if (unlistenLoad) {
      unlistenLoad();
    }
    failedToLoad(eleOrWindow);
  });
}

/**
 * Emit error on load failure.
 * @param {!Element|!Window} eleOrWindow Supports both Elements and as a special
 *     case Windows.
 */
function failedToLoad(eleOrWindow) {
  // Report failed loads as user errors so that they automatically go
  // into the "document error" bucket.
  var target = eleOrWindow;
  if (target && target.src) {
    target = target.src;
  }
  throw (0, _log.user)().createError(LOAD_FAILURE_PREFIX, target);
}

/**
 * Returns true if this error message is was created for a load error.
 * @param {string} message An error message
 * @return {boolean}
 */
function isLoadErrorMessage(message) {
  return message.indexOf(LOAD_FAILURE_PREFIX) != -1;
}

},{"./event-helper-listen":35,"./log":46}],37:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RANDOM_NUMBER_GENERATORS = exports.ExperimentInfo = undefined;
exports.isCanary = isCanary;
exports.getBinaryType = getBinaryType;
exports.isExperimentOn = isExperimentOn;
exports.toggleExperiment = toggleExperiment;
exports.experimentToggles = experimentToggles;
exports.experimentTogglesOrNull = experimentTogglesOrNull;
exports.getExperimentToglesFromCookieForTesting = getExperimentToglesFromCookieForTesting;
exports.resetExperimentTogglesForTesting = resetExperimentTogglesForTesting;
exports.randomlySelectUnsetExperiments = randomlySelectUnsetExperiments;
exports.getExperimentBranch = getExperimentBranch;
exports.forceExperimentBranch = forceExperimentBranch;

var _cookies = require('./cookies');

var _object = require('./utils/object');

var _url = require('./url');

/** @const {string} */
var COOKIE_NAME = 'AMP_EXP';

/** @const {number} */
/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Experiments system allows a developer to opt-in to test
 * features that are not yet fully tested.
 *
 * Experiments page: https://cdn.ampproject.org/experiments.html *
 */

var COOKIE_MAX_AGE_DAYS = 180; // 6 month

/** @const {time} */
var COOKIE_EXPIRATION_INTERVAL = COOKIE_MAX_AGE_DAYS * 24 * 60 * 60 * 1000;

/** @const {string} */
var TOGGLES_WINDOW_PROPERTY = '__AMP__EXPERIMENT_TOGGLES';

/**
 * @typedef {{
 *   isTrafficEligible: function(!Window):boolean,
 *   branches: !Array<string>
 * }}
 */
var ExperimentInfo = exports.ExperimentInfo = void 0;

/**
 * Whether we are in canary.
 * @param {!Window} win
 * @return {boolean}
 */
function isCanary(win) {
  return !!(win.AMP_CONFIG && win.AMP_CONFIG.canary);
}

/**
 * Returns binary type, e.g., canary, control, or production.
 * @param {!Window} win
 * @return {string}
 */
function getBinaryType(win) {
  return win.AMP_CONFIG && win.AMP_CONFIG.type ? win.AMP_CONFIG.type : 'unknown';
}

/**
 * Whether the specified experiment is on or off.
 * @param {!Window} win
 * @param {string} experimentId
 * @return {boolean}
 */
function isExperimentOn(win, experimentId) {
  var toggles = experimentToggles(win);
  return !!toggles[experimentId];
}

/**
 * Toggles the experiment on or off. Returns the actual value of the experiment
 * after toggling is done.
 * @param {!Window} win
 * @param {string} experimentId
 * @param {boolean=} opt_on
 * @param {boolean=} opt_transientExperiment  Whether to toggle the
 *     experiment state "transiently" (i.e., for this page load only) or
 *     durably (by saving the experiment IDs to the cookie after toggling).
 *     Default: false (save durably).
 * @return {boolean} New state for experimentId.
 */
function toggleExperiment(win, experimentId, opt_on, opt_transientExperiment) {
  var currentlyOn = isExperimentOn(win, /*OK*/experimentId);
  var on = !!(opt_on !== undefined ? opt_on : !currentlyOn);
  if (on != currentlyOn) {
    var toggles = experimentToggles(win);
    toggles[experimentId] = on;

    if (!opt_transientExperiment) {
      var cookieToggles = getExperimentTogglesFromCookie(win);
      cookieToggles[experimentId] = on;
      saveExperimentTogglesToCookie(win, cookieToggles);
    }
  }
  return on;
}

/**
 * Calculate whether the experiment is on or off based off of the
 * cookieFlag or the global config frequency given.
 * @param {!Window} win
 * @return {!Object<string, boolean>}
 */
function experimentToggles(win) {
  if (win[TOGGLES_WINDOW_PROPERTY]) {
    return win[TOGGLES_WINDOW_PROPERTY];
  }
  win[TOGGLES_WINDOW_PROPERTY] = Object.create(null);
  var toggles = win[TOGGLES_WINDOW_PROPERTY];

  // Read the default config of this build.
  if (win.AMP_CONFIG) {
    for (var experimentId in win.AMP_CONFIG) {
      var frequency = win.AMP_CONFIG[experimentId];
      if (typeof frequency === 'number' && frequency >= 0 && frequency <= 1) {
        toggles[experimentId] = Math.random() < frequency;
      }
    }
  }
  // Read document level override from meta tag.
  if (win.AMP_CONFIG && Array.isArray(win.AMP_CONFIG['allow-doc-opt-in']) && win.AMP_CONFIG['allow-doc-opt-in'].length > 0) {
    var allowed = win.AMP_CONFIG['allow-doc-opt-in'];
    var meta = win.document.head.querySelector('meta[name="amp-experiments-opt-in"]');
    if (meta) {
      var optedInExperiments = meta.getAttribute('content').split(',');
      for (var i = 0; i < optedInExperiments.length; i++) {
        if (allowed.indexOf(optedInExperiments[i]) != -1) {
          toggles[optedInExperiments[i]] = true;
        }
      }
    }
  }

  Object.assign(toggles, getExperimentTogglesFromCookie(win));

  if (win.AMP_CONFIG && Array.isArray(win.AMP_CONFIG['allow-url-opt-in']) && win.AMP_CONFIG['allow-url-opt-in'].length > 0) {
    var _allowed = win.AMP_CONFIG['allow-url-opt-in'];
    var hash = win.location.originalHash || win.location.hash;
    var params = (0, _url.parseQueryString)(hash);
    for (var _i = 0; _i < _allowed.length; _i++) {
      var param = params['e-' + _allowed[_i]];
      if (param == '1') {
        toggles[_allowed[_i]] = true;
      }
      if (param == '0') {
        toggles[_allowed[_i]] = false;
      }
    }
  }
  return toggles;
}

/**
 * Returns the cached experiments toggles, or null if they have not been
 * computed yet.
 * @param {!Window} win
 * @return {Object<string, boolean>}
 */
function experimentTogglesOrNull(win) {
  return win[TOGGLES_WINDOW_PROPERTY] || null;
}

/**
 * Returns a set of experiment IDs currently on.
 * @param {!Window} win
 * @return {!Object<string, boolean>}
 */
function getExperimentTogglesFromCookie(win) {
  var experimentCookie = (0, _cookies.getCookie)(win, COOKIE_NAME);
  var tokens = experimentCookie ? experimentCookie.split(/\s*,\s*/g) : [];

  var toggles = Object.create(null);
  for (var i = 0; i < tokens.length; i++) {
    if (tokens[i].length == 0) {
      continue;
    }
    if (tokens[i][0] == '-') {
      toggles[tokens[i].substr(1)] = false;
    } else {
      toggles[tokens[i]] = true;
    }
  }

  return toggles;
}

/**
 * Saves a set of experiment IDs currently on.
 * @param {!Window} win
 * @param {!Object<string, boolean>} toggles
 */
function saveExperimentTogglesToCookie(win, toggles) {
  var experimentIds = [];
  for (var experiment in toggles) {
    experimentIds.push((toggles[experiment] === false ? '-' : '') + experiment);
  }

  (0, _cookies.setCookie)(win, COOKIE_NAME, experimentIds.join(','), Date.now() + COOKIE_EXPIRATION_INTERVAL, {
    // Set explicit domain, so the cookie gets send to sub domains.
    domain: win.location.hostname,
    allowOnProxyOrigin: true
  });
}

/**
 * See getExperimentTogglesFromCookie().
 * @param {!Window} win
 * @return {!Object<string, boolean>}
 * @visibleForTesting
 */
function getExperimentToglesFromCookieForTesting(win) {
  return getExperimentTogglesFromCookie(win);
}

/**
 * Resets the experimentsToggle cache for testing purposes.
 * @param {!Window} win
 * @visibleForTesting
 */
function resetExperimentTogglesForTesting(win) {
  (0, _cookies.setCookie)(win, COOKIE_NAME, '', 0, {
    domain: win.location.hostname
  });
  win[TOGGLES_WINDOW_PROPERTY] = null;
}

/**
 * In some browser implementations of Math.random(), sequential calls of
 * Math.random() are correlated and can cause a bias.  In particular,
 * if the previous random() call was < 0.001 (as it will be if we select
 * into an experiment), the next value could be less than 0.5 more than
 * 50.7% of the time.  This provides an implementation that roots down into
 * the crypto API, when available, to produce less biased samples.
 *
 * @return {number} Pseudo-random floating-point value on the range [0, 1).
 */
function slowButAccuratePrng() {
  // TODO(tdrl): Implement.
  return Math.random();
}

/**
 * Container for alternate random number generator implementations.  This
 * allows us to set an "accurate" PRNG for branch selection, but to mock it
 * out easily in tests.
 *
 * @visibleForTesting
 * @const {!{accuratePrng: function():number}}
 */
var RANDOM_NUMBER_GENERATORS = exports.RANDOM_NUMBER_GENERATORS = {
  accuratePrng: slowButAccuratePrng
};

/**
 * Selects, uniformly at random, a single item from the array.
 * @param {!Array<string>} arr Object to select from.
 * @return {?string} Single item from arr or null if arr was empty.
 */
function selectRandomItem(arr) {
  var rn = RANDOM_NUMBER_GENERATORS.accuratePrng();
  return arr[Math.floor(rn * arr.length)] || null;
}

/**
 * Selects which page-level experiment branches are enabled. If a given
 * experiment name is already set (including to the null / no branches selected
 * state), this won't alter its state.
 *
 * Check whether a given experiment is set using isExperimentOn(win,
 * experimentName) and, if it is on, look for which branch is selected in
 * win.experimentBranches[experimentName].
 *
 * @param {!Window} win Window context on which to save experiment
 *     selection state.
 * @param {!Object<string, !ExperimentInfo>} experiments  Set of experiments to
 *     configure for this page load.
 * @return {!Object<string, string>} Map of experiment names to selected
 *     branches.
 */
function randomlySelectUnsetExperiments(win, experiments) {
  win.experimentBranches = win.experimentBranches || {};
  var selectedExperiments = {};
  for (var experimentName in experiments) {
    // Skip experimentName if it is not a key of experiments object or if it
    // has already been populated by some other property.
    if (!(0, _object.hasOwn)(experiments, experimentName)) {
      continue;
    }
    if ((0, _object.hasOwn)(win.experimentBranches, experimentName)) {
      selectedExperiments[experimentName] = win.experimentBranches[experimentName];
      continue;
    }

    if (!experiments[experimentName].isTrafficEligible || !experiments[experimentName].isTrafficEligible(win)) {
      win.experimentBranches[experimentName] = null;
      continue;
    }

    // If we're in the experiment, but we haven't already forced a specific
    // experiment branch (e.g., via a test setup), then randomize the branch
    // choice.
    if (!win.experimentBranches[experimentName] && isExperimentOn(win, /*OK*/experimentName)) {
      var branches = experiments[experimentName].branches;

      win.experimentBranches[experimentName] = selectRandomItem(branches);
      selectedExperiments[experimentName] = win.experimentBranches[experimentName];
    }
  }
  return selectedExperiments;
}

/**
 * Returns the experiment branch enabled for the given experiment ID.
 * For example, 'control' or 'experiment'.
 *
 * @param {!Window} win Window context to check for experiment state.
 * @param {string} experimentName Name of the experiment to check.
 * @return {?string} Active experiment branch ID for experimentName (possibly
 *     null if experimentName has been tested but no branch was enabled).
 */
function getExperimentBranch(win, experimentName) {
  return win.experimentBranches ? win.experimentBranches[experimentName] : null;
}

/**
 * Force enable (or disable) a specific branch of a given experiment name.
 * Disables the experiment name altogether if branchId is falseish.
 *
 * @param {!Window} win Window context to check for experiment state.
 * @param {string} experimentName Name of the experiment to check.
 * @param {?string} branchId ID of branch to force or null to disable
 *     altogether.
 * @visibleForTesting
 */
function forceExperimentBranch(win, experimentName, branchId) {
  win.experimentBranches = win.experimentBranches || {};
  toggleExperiment(win, experimentName, !!branchId, true);
  win.experimentBranches[experimentName] = branchId;
}

},{"./cookies":30,"./url":72,"./utils/object":78}],38:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.exponentialBackoff = exponentialBackoff;
exports.exponentialBackoffClock = exponentialBackoffClock;
exports.getJitter = getJitter;
/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @param {number=} opt_base Exponential base. Defaults to 2.
 * @return {function(function()): number} Function that when invoked will
 *     call the passed in function. On every invocation the next
 *     invocation of the passed in function will be exponentially
 *     later. Returned function returns timeout id.
 */
function exponentialBackoff(opt_base) {
  var getTimeout = exponentialBackoffClock(opt_base);
  return function (work) {
    return setTimeout(work, getTimeout());
  };
}

/**
 * @param {number=} opt_base Exponential base. Defaults to 2.
 * @return {function(): number} Function that when invoked will return
 *    a number that exponentially grows per invocation.
 */
function exponentialBackoffClock(opt_base) {
  var base = opt_base || 2;
  var count = 0;
  return function () {
    var wait = Math.pow(base, count++);
    wait += getJitter(wait);
    return wait * 1000;
  };
}

/**
 * Add jitter to avoid the thundering herd. This can e.g. happen when
 * we poll a backend and it fails for everyone at the same time.
 * We add up to 30% (default) longer or shorter than the given time.
 *
 * @param {number} wait the amount if base milliseconds
 * @param {number=} opt_perc the min/max percentage to add or sutract
 * @return {number}
 */
function getJitter(wait, opt_perc) {
  opt_perc = opt_perc || .3;
  var jitter = wait * opt_perc * Math.random();
  if (Math.random() > .5) {
    jitter *= -1;
  }
  return jitter;
}

},{}],39:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomEventReporterBuilder = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright 2016 The AMP HTML Authors. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * distributed under the License is distributed on an "AS-IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

exports.insertAnalyticsElement = insertAnalyticsElement;
exports.useAnalyticsInSandbox = useAnalyticsInSandbox;

var _commonSignals = require('./common-signals');

var _services = require('./services');

var _dom = require('./dom');

var _log = require('./log');

var _object = require('./utils/object');

var _types = require('./types');

var _analytics = require('./analytics');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Method to create scoped analytics element for any element.
 * TODO: Make this function private
 * @param {!Element} parentElement
 * @param {!JsonObject} config
 * @param {boolean=} loadAnalytics
 * @param {boolean=} disableImmediate
 * @return {!Element} created analytics element
 */
function insertAnalyticsElement(parentElement, config) {
  var loadAnalytics = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var disableImmediate = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  var doc = /** @type {!Document} */parentElement.ownerDocument;
  var analyticsElem = (0, _dom.createElementWithAttributes)(doc, 'amp-analytics', (0, _object.dict)({
    'sandbox': 'true',
    'trigger': disableImmediate ? '' : 'immediate'
  }));
  var scriptElem = (0, _dom.createElementWithAttributes)(doc, 'script', (0, _object.dict)({
    'type': 'application/json'
  }));
  scriptElem.textContent = JSON.stringify(config);
  analyticsElem.appendChild(scriptElem);
  analyticsElem.CONFIG = config;

  // Force load analytics extension if script not included in page.
  if (loadAnalytics) {
    // Get Extensions service and force load analytics extension.
    var extensions = _services.Services.extensionsFor((0, _types.toWin)(parentElement.ownerDocument.defaultView));
    var ampdoc = _services.Services.ampdoc(parentElement);
    extensions. /*OK*/installExtensionForDoc(ampdoc, 'amp-analytics');
  } else {
    _services.Services.analyticsForDocOrNull(parentElement).then(function (analytics) {
      (0, _log.dev)().assert(analytics);
    });
  }
  parentElement.appendChild(analyticsElem);
  return analyticsElem;
}

/**
 * A class that handles customEvent reporting of extension element through
 * amp-analytics. This class is not exposed to extension element directly to
 * restrict the genration of the config Please use CustomEventReporterBuilder to
 * build a CustomEventReporter instance.
 */

var CustomEventReporter = function () {
  /**
   * @param {!Element} parent
   * @param {!JsonObject} config
   */
  function CustomEventReporter(parent, config) {
    var _this = this;

    _classCallCheck(this, CustomEventReporter);

    (0, _log.dev)().assert(config['triggers'], 'Config must have triggers defined');
    /** @private {string} */
    this.id_ = parent.getResourceId();

    /** @private {!AmpElement} */
    this.parent_ = parent;

    /** @private {JsonObject} */
    this.config_ = config;

    for (var event in config['triggers']) {
      var eventType = config['triggers'][event]['on'];
      (0, _log.dev)().assert(eventType, 'CustomEventReporter config must specify trigger eventType');
      var newEventType = this.getEventTypeInSandbox_(eventType);
      config['triggers'][event]['on'] = newEventType;
    }

    this.parent_.signals().whenSignal(_commonSignals.CommonSignals.LOAD_START).then(function () {
      insertAnalyticsElement(_this.parent_, config, false);
    });
  }

  /**
   * @param {string} eventType
   * @param {!Object<string, string>=} opt_vars A map of vars and their values.
   */


  _createClass(CustomEventReporter, [{
    key: 'trigger',
    value: function trigger(eventType, opt_vars) {
      (0, _log.dev)().assert(this.config_['triggers'][eventType], 'Cannot trigger non initiated eventType');
      (0, _analytics.triggerAnalyticsEvent)(this.parent_, this.getEventTypeInSandbox_(eventType), opt_vars);
    }
    /**
     * @param {string} eventType
     * @return {string}
     */

  }, {
    key: 'getEventTypeInSandbox_',
    value: function getEventTypeInSandbox_(eventType) {
      return 'sandbox-' + this.id_ + '-' + eventType;
    }
  }]);

  return CustomEventReporter;
}();

/**
 * A builder class that enable extension elements to easily build and get a
 * CustomEventReporter instance. Its constructor requires the parent AMP
 * element. It provides two methods #track() and #build() to build the
 * CustomEventReporter instance.
 */


var CustomEventReporterBuilder = exports.CustomEventReporterBuilder = function () {
  /** @param {!AmpElement} parent */
  function CustomEventReporterBuilder(parent) {
    _classCallCheck(this, CustomEventReporterBuilder);

    /** @private {!AmpElement} */
    this.parent_ = parent;

    /** @private {?JsonObject} */
    this.config_ = /** @type {JsonObject} */{
      'requests': {},
      'triggers': {}
    };
  }

  /**
   * The #track() method takes in a unique custom-event name, and the
   * corresponding request url (or an array of request urls). One can call
   * #track() multiple times with different eventType name (order doesn't
   * matter) before #build() is called.
   * @param {string} eventType
   * @param {string|!Array<string>} request
   */


  _createClass(CustomEventReporterBuilder, [{
    key: 'track',
    value: function track(eventType, request) {
      request = (0, _types.isArray)(request) ? request : [request];
      (0, _log.dev)().assert(!this.config_['triggers'][eventType], 'customEventReporterBuilder should not track same eventType twice');
      var requestList = [];
      for (var i = 0; i < request.length; i++) {
        var requestName = eventType + '-request-' + i;
        this.config_['requests'][requestName] = request[i];
        requestList.push(requestName);
      }
      this.config_['triggers'][eventType] = {
        'on': eventType,
        'request': requestList
      };
      return this;
    }

    /**
     * Call the #build() method to build and get the CustomEventReporter instance.
     * One CustomEventReporterBuilder instance can only build one reporter, which
     * means #build() should only be called once after all eventType are added.
     */

  }, {
    key: 'build',
    value: function build() {
      (0, _log.dev)().assert(this.config_, 'CustomEventReporter already built');
      var report = new CustomEventReporter(this.parent_, /** @type {!JsonObject} */this.config_);
      this.config_ = null;
      return report;
    }
  }]);

  return CustomEventReporterBuilder;
}();

/**
 * A helper method that should be used by all extension elements to add their
 * sandbox analytics tracking. This method takes care of insert and remove the
 * analytics tracker at the right time of the element lifecycle.
 * @param {!AmpElement} element
 * @param {!Promise<!JsonObject>} promise
 */


function useAnalyticsInSandbox(element, promise) {
  var analyticsElement = null;
  var configPromise = promise;
  // Listener to LOAD_START signal. Insert analytics element on LOAD_START
  element.signals().whenSignal(_commonSignals.CommonSignals.LOAD_START).then(function () {
    if (analyticsElement || !configPromise) {
      return;
    }
    configPromise.then(function (config) {
      if (!configPromise) {
        // If config promise resolve after unload, do nothing.
        return;
      }
      configPromise = null;
      analyticsElement = insertAnalyticsElement(element, config, false);
    });
  });

  // Listener to UNLOAD signal. Destroy remove element on UNLOAD
  element.signals().whenSignal(_commonSignals.CommonSignals.UNLOAD).then(function () {
    configPromise = null;
    if (analyticsElement) {
      (0, _dom.removeElement)(analyticsElement);
      analyticsElement = null;
    }
  });
}

},{"./analytics":25,"./common-signals":26,"./dom":32,"./log":46,"./services":64,"./types":69,"./utils/object":78}],40:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FriendlyIframeEmbed = exports.FriendlyIframeSpec = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright 2016 The AMP HTML Authors. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * distributed under the License is distributed on an "AS-IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

exports.setSrcdocSupportedForTesting = setSrcdocSupportedForTesting;
exports.setFriendlyIframeEmbedVisible = setFriendlyIframeEmbedVisible;
exports.getFriendlyIframeEmbedOptional = getFriendlyIframeEmbedOptional;
exports.installFriendlyIframeEmbed = installFriendlyIframeEmbed;
exports.mergeHtmlForTesting = mergeHtmlForTesting;
exports.whenContentIniLoad = whenContentIniLoad;
exports.isInFie = isInFie;

var _commonSignals = require('./common-signals');

var _observable = require('./observable');

var _services = require('./services');

var _signals = require('./utils/signals');

var _dom = require('./dom');

var _log = require('./log');

var _service = require('./service');

var _documentReady = require('./document-ready');

var _layoutRect = require('./layout-rect');

var _eventHelper = require('./event-helper');

var _style = require('./style');

var _types = require('./types');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** @const {string} */
var EMBED_PROP = '__AMP_EMBED__';

/** @const {!Array<string>} */
var EXCLUDE_INI_LOAD = ['AMP-AD', 'AMP-ANALYTICS', 'AMP-PIXEL', 'AMP-AD-EXIT'];

/**
 * Parameters used to create the new "friendly iframe" embed.
 * - html: The complete content of an AMP embed, which is itself an AMP
 *   document. Can include whatever is normally allowed in an AMP document,
 *   except for AMP `<script>` declarations. Those should be passed as an
 *   array of `extensionIds`.
 * - extensionsIds: An optional array of AMP extension IDs used in this embed.
 * - fonts: An optional array of fonts used in this embed.
 *
 * @typedef {{
 *   host: (?AmpElement|undefined),
 *   url: string,
 *   html: string,
 *   extensionIds: (?Array<string>|undefined),
 *   fonts: (?Array<string>|undefined),
 * }}
 */
var FriendlyIframeSpec = exports.FriendlyIframeSpec = void 0;

/**
 * @type {boolean|undefined}
 * @visibleForTesting
 */
var srcdocSupported = void 0;

/**
 * @param {boolean|undefined} val
 * @visibleForTesting
 */
function setSrcdocSupportedForTesting(val) {
  srcdocSupported = val;
}

/**
 * Returns `true` if the Friendly Iframes are supported.
 * @return {boolean}
 */
function isSrcdocSupported() {
  if (srcdocSupported === undefined) {
    srcdocSupported = 'srcdoc' in HTMLIFrameElement.prototype;
  }
  return srcdocSupported;
}

/**
 * Sets whether the embed is currently visible. The interpretation of visibility
 * is up to the embed parent. However, most of typical cases would rely on
 * whether the embed is currently in the viewport.
 * @param {!FriendlyIframeEmbed} embed
 * @param {boolean} visible
 * TODO(dvoytenko): Re-evaluate and probably drop once layers are ready.
 */
function setFriendlyIframeEmbedVisible(embed, visible) {
  embed.setVisible_(visible);
}

/**
 * Returns the embed created using `installFriendlyIframeEmbed` or `null`.
 * Caution: This will only return the FIE after the iframe has 'loaded'. If you
 * are checking before this signal you may be in a race condition that returns
 * null.
 * @param {!HTMLIFrameElement} iframe
 * @return {?FriendlyIframeEmbed}
 */
function getFriendlyIframeEmbedOptional(iframe) {
  return (/** @type {?FriendlyIframeEmbed} */iframe[EMBED_PROP]
  );
}

/**
 * Creates the requested "friendly iframe" embed. Returns the promise that
 * will be resolved as soon as the embed is available. The actual
 * initialization of the embed will start as soon as the `iframe` is added
 * to the DOM.
 * @param {!HTMLIFrameElement} iframe
 * @param {!Element} container
 * @param {!FriendlyIframeSpec} spec
 * @param {function(!Window)=} opt_preinstallCallback
 * @return {!Promise<!FriendlyIframeEmbed>}
 */
function installFriendlyIframeEmbed(iframe, container, spec, opt_preinstallCallback) {
  /** @const {!Window} */
  var win = (0, _service.getTopWindow)((0, _types.toWin)(iframe.ownerDocument.defaultView));
  /** @const {!./service/extensions-impl.Extensions} */
  var extensions = _services.Services.extensionsFor(win);

  (0, _style.setStyle)(iframe, 'visibility', 'hidden');
  iframe.setAttribute('referrerpolicy', 'unsafe-url');

  // Pre-load extensions.
  if (spec.extensionIds) {
    spec.extensionIds.forEach(function (extensionId) {
      return extensions.preloadExtension(extensionId);
    });
  }

  var html = mergeHtml(spec);

  // Receive the signal when iframe is ready: it's document is formed.
  iframe.onload = function () {
    // Chrome does not reflect the iframe readystate.
    iframe.readyState = 'complete';
  };
  var registerViolationListener = function registerViolationListener() {
    iframe.contentWindow.addEventListener('securitypolicyviolation', function (violationEvent) {
      (0, _log.dev)().warn('FIE', 'security policy violation', violationEvent);
    });
  };
  var loadedPromise = void 0;
  if (isSrcdocSupported()) {
    iframe.srcdoc = html;
    loadedPromise = (0, _eventHelper.loadPromise)(iframe);
    container.appendChild(iframe);
    registerViolationListener();
  } else {
    iframe.src = 'about:blank';
    container.appendChild(iframe);
    var childDoc = iframe.contentWindow.document;
    childDoc.open();
    registerViolationListener();
    childDoc.write(html);
    // With document.write, `iframe.onload` arrives almost immediately, thus
    // we need to wait for child's `window.onload`.
    loadedPromise = (0, _eventHelper.loadPromise)(iframe.contentWindow);
    childDoc.close();
  }

  // Wait for document ready signal.
  // This is complicated due to crbug.com/649201 on Chrome and a similar issue
  // on Safari where newly created document's `readyState` immediately equals
  // `complete`, even though the document itself is not yet available. There's
  // no other reliable signal for `readyState` in a child window and thus
  // we have to fallback to polling.
  var readyPromise = void 0;
  if (isIframeReady(iframe)) {
    readyPromise = Promise.resolve();
  } else {
    readyPromise = new Promise(function (resolve) {
      /** @const {number} */
      var interval = win.setInterval(function () {
        if (isIframeReady(iframe)) {
          resolve();
          win.clearInterval(interval);
        }
      }, /* milliseconds */5);

      // For safety, make sure we definitely stop polling when child doc is
      // loaded.
      loadedPromise.catch(function (error) {
        (0, _log.rethrowAsync)(error);
      }).then(function () {
        resolve();
        win.clearInterval(interval);
      });
    });
  }

  return readyPromise.then(function () {
    var embed = new FriendlyIframeEmbed(iframe, spec, loadedPromise);
    iframe[EMBED_PROP] = embed;

    var childWin = /** @type {!Window} */iframe.contentWindow;
    // Add extensions.
    extensions.installExtensionsInChildWindow(childWin, spec.extensionIds || [], opt_preinstallCallback);
    // Ready to be shown.
    embed.startRender_();
    return embed;
  });
}

/**
 * Returns `true` when iframe is ready.
 * @param {!HTMLIFrameElement} iframe
 * @return {boolean}
 */
function isIframeReady(iframe) {
  // This is complicated due to crbug.com/649201 on Chrome and a similar issue
  // on Safari where newly created document's `readyState` immediately equals
  // `complete`, even though the document itself is not yet available. There's
  // no other reliable signal for `readyState` in a child window and thus
  // the best way to check is to see the contents of the body.
  var childDoc = iframe.contentWindow && iframe.contentWindow.document;
  return !!(childDoc && (0, _documentReady.isDocumentReady)(childDoc) && childDoc.body && childDoc.body.firstChild);
}

/**
 * Merges base and fonts into html document.
 * @param {!FriendlyIframeSpec} spec
 */
function mergeHtml(spec) {
  var originalHtml = spec.html;
  var originalHtmlUp = originalHtml.toUpperCase();

  // Find the insertion point.
  var ip = originalHtmlUp.indexOf('<HEAD');
  if (ip != -1) {
    ip = originalHtmlUp.indexOf('>', ip + 1) + 1;
  }
  if (ip == -1) {
    ip = originalHtmlUp.indexOf('<BODY');
  }
  if (ip == -1) {
    ip = originalHtmlUp.indexOf('<HTML');
    if (ip != -1) {
      ip = originalHtmlUp.indexOf('>', ip + 1) + 1;
    }
  }

  var result = [];

  // Preambule.
  if (ip > 0) {
    result.push(originalHtml.substring(0, ip));
  }

  // Add <BASE> tag.
  result.push('<base href="' + (0, _dom.escapeHtml)(spec.url) + '">');

  // Load fonts.
  if (spec.fonts) {
    spec.fonts.forEach(function (font) {
      result.push('<link href="' + (0, _dom.escapeHtml)(font) + '" rel="stylesheet" type="text/css">');
    });
  }

  // Load CSP
  result.push('<meta http-equiv=Content-Security-Policy ' + 'content="script-src \'none\';object-src \'none\';child-src \'none\'">');

  // Postambule.
  if (ip > 0) {
    result.push(originalHtml.substring(ip));
  } else {
    result.push(originalHtml);
  }

  return result.join('');
}

/**
 * Exposes `mergeHtml` for testing purposes.
 * @param {!FriendlyIframeSpec} spec
 * @visibleForTesting
 */
function mergeHtmlForTesting(spec) {
  return mergeHtml(spec);
}

/**
 * A "friendly iframe" embed. This is the iframe that's fully accessible to
 * the AMP runtime. It's similar to Shadow DOM in many respects, but it also
 * provides iframe/viewport measurements and enables the use of `vh`, `vw` and
 * `@media` CSS.
 *
 * The friendly iframe is managed by the top-level AMP Runtime. When it's
 * destroyed, the `destroy` method must be called to free up the shared
 * resources.
 */

var FriendlyIframeEmbed = exports.FriendlyIframeEmbed = function () {

  /**
   * @param {!HTMLIFrameElement} iframe
   * @param {!FriendlyIframeSpec} spec
   * @param {!Promise} loadedPromise
   */
  function FriendlyIframeEmbed(iframe, spec, loadedPromise) {
    _classCallCheck(this, FriendlyIframeEmbed);

    /** @const {!HTMLIFrameElement} */
    this.iframe = iframe;

    /** @const {!Window} */
    this.win = /** @type{!Window} */iframe.contentWindow;

    /** @const {!FriendlyIframeSpec} */
    this.spec = spec;

    /** @const {?AmpElement} */
    this.host = spec.host || null;

    /** @const @private {time} */
    this.startTime_ = Date.now();

    /**
     * Starts out as invisible. The interpretation of this flag is up to
     * the emded parent.
     * @private {boolean}
     */
    this.visible_ = false;

    /** @private {!Observable<boolean>} */
    this.visibilityObservable_ = new _observable.Observable();

    /** @private @const */
    this.signals_ = this.host ? this.host.signals() : new _signals.Signals();

    /** @private @const {!Promise} */
    this.winLoadedPromise_ = Promise.all([loadedPromise, this.whenReady()]);
  }

  /**
   * Ensures that all resources from this iframe have been released.
   */


  _createClass(FriendlyIframeEmbed, [{
    key: 'destroy',
    value: function destroy() {
      _services.Services.resourcesForDoc(this.iframe).removeForChildWindow(this.win);
      (0, _service.disposeServicesForEmbed)(this.win);
    }

    /**
     * @return {time}
     */

  }, {
    key: 'getStartTime',
    value: function getStartTime() {
      return this.startTime_;
    }

    /**
     * Returns the base URL for the embedded document.
     * @return {string}
     */

  }, {
    key: 'getUrl',
    value: function getUrl() {
      return this.spec.url;
    }

    /** @return {!Signals} */

  }, {
    key: 'signals',
    value: function signals() {
      return this.signals_;
    }

    /**
     * Returns a promise that will resolve when the embed document is ready.
     * Notice that this signal coincides with the embed's `render-start`.
     * @return {!Promise}
     */

  }, {
    key: 'whenReady',
    value: function whenReady() {
      return this.signals_.whenSignal(_commonSignals.CommonSignals.RENDER_START);
    }

    /**
     * Returns a promise that will resolve when the child window's `onload` event
     * has been emitted. In friendly iframes this typically only includes font
     * loading.
     * @return {!Promise}
     */

  }, {
    key: 'whenWindowLoaded',
    value: function whenWindowLoaded() {
      return this.winLoadedPromise_;
    }

    /**
     * Returns a promise that will resolve when the initial load  of the embed's
     * content has been completed.
     * @return {!Promise}
     */

  }, {
    key: 'whenIniLoaded',
    value: function whenIniLoaded() {
      return this.signals_.whenSignal(_commonSignals.CommonSignals.INI_LOAD);
    }

    /**
     * @private
     * @restricted
     */

  }, {
    key: 'startRender_',
    value: function startRender_() {
      var _this = this;

      if (this.host) {
        this.host.renderStarted();
      } else {
        this.signals_.signal(_commonSignals.CommonSignals.RENDER_START);
      }
      (0, _style.setStyle)(this.iframe, 'visibility', '');
      if (this.win.document && this.win.document.body) {
        this.win.document.documentElement.classList.add('i-amphtml-fie');
        (0, _style.setStyles)((0, _log.dev)().assertElement(this.win.document.body), {
          opacity: 1,
          visibility: 'visible',
          animation: 'none'
        });
      }

      // Initial load signal signal.
      var rect = void 0;
      if (this.host) {
        rect = this.host.getLayoutBox();
      } else {
        rect = (0, _layoutRect.layoutRectLtwh)(0, 0, this.win. /*OK*/innerWidth, this.win. /*OK*/innerHeight);
      }
      Promise.all([this.whenReady(), whenContentIniLoad(this.iframe, this.win, rect)]).then(function () {
        _this.signals_.signal(_commonSignals.CommonSignals.INI_LOAD);
      });
    }

    /**
     * Whether the embed is currently visible. The interpretation of visibility
     * is up to the embed parent. However, most of typical cases would rely on
     * whether the embed is currently in the viewport.
     * @return {boolean}
     * TODO(dvoytenko): Re-evaluate and probably drop once layers are ready.
     */

  }, {
    key: 'isVisible',
    value: function isVisible() {
      return this.visible_;
    }

    /**
     * See `isVisible` for more info.
     * @param {function(boolean)} handler
     * @return {!UnlistenDef}
     */

  }, {
    key: 'onVisibilityChanged',
    value: function onVisibilityChanged(handler) {
      return this.visibilityObservable_.add(handler);
    }

    /**
     * @param {boolean} visible
     * @private
     * @restricted
     */

  }, {
    key: 'setVisible_',
    value: function setVisible_(visible) {
      if (this.visible_ != visible) {
        this.visible_ = visible;
        this.visibilityObservable_.fire(this.visible_);
      }
    }

    /**
     * @return {!HTMLBodyElement}
     * @visibleForTesting
     */

  }, {
    key: 'getBodyElement',
    value: function getBodyElement() {
      return (/** @type {!HTMLBodyElement} */(this.iframe.contentDocument || this.iframe.contentWindow.document).body
      );
    }

    /**
     * @return {!./service/resources-impl.Resources}
     * @private
     */

  }, {
    key: 'getResources_',
    value: function getResources_() {
      return _services.Services.resourcesForDoc(this.iframe);
    }

    /**
     * Runs a measure/mutate cycle ensuring that the iframe change is propagated
     * to the resource manager.
     * @param {{measure: (function()|undefined), mutate: function()}} task
     * @return {!Promise}
     * @private
     */

  }, {
    key: 'measureMutate_',
    value: function measureMutate_(task) {
      return this.getResources_().measureMutateElement(this.iframe, task.measure || null, task.mutate);
    }

    /**
     * @return {!Promise}
     */

  }, {
    key: 'enterFullOverlayMode',
    value: function enterFullOverlayMode() {
      var _this2 = this;

      var ampAdParent = (0, _log.dev)().assertElement(this.iframe.parentNode);

      // Security assertion. Otherwise any 3p frame could request lighbox mode.
      (0, _log.user)().assert(ampAdParent.tagName.toLowerCase() == 'amp-ad', 'Only <amp-ad> is allowed to enter lightbox mode.');

      var bodyStyle = {
        'background': 'transparent',
        'position': 'absolute',
        'bottom': 'auto',
        'right': 'auto',

        // Set for replacing with vsync values.
        'top': '',
        'left': '',
        'width': '',
        'height': ''
      };

      var iframeStyle = {
        'position': 'fixed',
        'left': 0,
        'right': 0,
        'bottom': 0,
        'width': '100vw',
        'top': 0,
        'height': '100vh'
      };

      return this.measureMutate_({
        measure: function measure() {
          var rect = _this2.host ? _this2.host.getLayoutBox() : _this2.iframe. /*OK*/getBoundingClientRect();

          // Offset by scroll top as iframe will be position: fixed.
          var dy = -_services.Services.viewportForDoc(_this2.iframe).getScrollTop();

          var _moveLayoutRect = (0, _layoutRect.moveLayoutRect)(rect, /* dx */0, dy),
              top = _moveLayoutRect.top,
              left = _moveLayoutRect.left,
              width = _moveLayoutRect.width,
              height = _moveLayoutRect.height;

          // Offset body by header height to prevent visual jump.


          Object.assign(bodyStyle, {
            'top': (0, _style.px)(top),
            'left': (0, _style.px)(left),
            'width': (0, _style.px)(width),
            'height': (0, _style.px)(height)
          });
        },
        mutate: function mutate() {
          // !important to prevent abuse e.g. box @ ltwh = 0, 0, 0, 0
          (0, _style.setImportantStyles)(_this2.iframe, iframeStyle);

          // We need to override runtime-level !important rules
          (0, _style.setImportantStyles)(_this2.getBodyElement(), bodyStyle);
        }
      });
    }

    /**
     * @return {!Promise}
     */

  }, {
    key: 'leaveFullOverlayMode',
    value: function leaveFullOverlayMode() {
      var _this3 = this;

      return this.measureMutate_({
        mutate: function mutate() {
          (0, _style.resetStyles)(_this3.iframe, ['position', 'left', 'right', 'top', 'bottom', 'width', 'height']);

          // we're not resetting background here as we need to set it to
          // transparent permanently.
          (0, _style.resetStyles)(_this3.getBodyElement(), ['position', 'top', 'left', 'width', 'height', 'bottom', 'right']);
        }
      });
    }
  }]);

  return FriendlyIframeEmbed;
}();

/**
 * Returns the promise that will be resolved when all content elements
 * have been loaded in the initially visible set.
 * @param {!Element|!./service/ampdoc-impl.AmpDoc} elementOrAmpDoc
 * @param {!Window} hostWin
 * @param {!./layout-rect.LayoutRectDef} rect
 * @return {!Promise}
 */


function whenContentIniLoad(elementOrAmpDoc, hostWin, rect) {
  return _services.Services.resourcesForDoc(elementOrAmpDoc).getResourcesInRect(hostWin, rect).then(function (resources) {
    var promises = [];
    resources.forEach(function (r) {
      if (!EXCLUDE_INI_LOAD.includes(r.element.tagName)) {
        promises.push(r.loadedOnce());
      }
    });
    return Promise.all(promises);
  });
}

/**
 * @param {!Element} element
 * @return {boolean}
 */
function isInFie(element) {
  return !!(0, _dom.closestBySelector)(element, '.i-amphtml-fie');
}

},{"./common-signals":26,"./document-ready":31,"./dom":32,"./event-helper":36,"./layout-rect":44,"./log":46,"./observable":49,"./service":59,"./services":64,"./style":68,"./types":69,"./utils/signals":80}],41:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getContextMetadata = getContextMetadata;

var _domFingerprint = require('./utils/dom-fingerprint');

var _services = require('./services');

var _object = require('./utils/object.js');

var _experiments = require('./experiments');

var _layout = require('./layout');

var _modeObject = require('./mode-object');

var _config = require('./config');

/**
 * Produces the attributes for the ad template.
 * @param {!Window} parentWindow
 * @param {!AmpElement} element
 * @param {string} sentinel
 * @param {!JsonObject=} attributes
 * @return {!JsonObject}
 */
function getContextMetadata(parentWindow, element, sentinel, attributes) {
  var startTime = Date.now();
  var width = element.getAttribute('width');
  var height = element.getAttribute('height');
  attributes = attributes ? attributes : (0, _object.dict)();
  attributes['width'] = (0, _layout.getLengthNumeral)(width);
  attributes['height'] = (0, _layout.getLengthNumeral)(height);
  if (element.getAttribute('title')) {
    attributes['title'] = element.getAttribute('title');
  }
  var locationHref = parentWindow.location.href;
  // This is really only needed for tests, but whatever. Children
  // see us as the logical origin, so telling them we are about:srcdoc
  // will fail ancestor checks.
  if (locationHref == 'about:srcdoc') {
    locationHref = parentWindow.parent.location.href;
  }

  var docInfo = _services.Services.documentInfoForDoc(element);
  var viewer = _services.Services.viewerForDoc(element);
  var referrer = viewer.getUnconfirmedReferrerUrl();

  // TODO(alanorozco): Redesign data structure so that fields not exposed by
  // AmpContext are not part of this object.
  var layoutRect = element.getPageLayoutBox();
  attributes['_context'] = (0, _object.dict)({
    'ampcontextVersion': '1537224222059',
    'ampcontextFilepath': _config.urls.thirdParty + '/1537224222059' + '/ampcontext-v0.js',
    'sourceUrl': docInfo.sourceUrl,
    'referrer': referrer,
    'canonicalUrl': docInfo.canonicalUrl,
    'pageViewId': docInfo.pageViewId,
    'location': {
      'href': locationHref
    },
    'startTime': startTime,
    'tagName': element.tagName,
    'mode': (0, _modeObject.getModeObject)(),
    'canary': (0, _experiments.isCanary)(parentWindow),
    'hidden': !viewer.isVisible(),
    'initialLayoutRect': layoutRect ? {
      'left': layoutRect.left,
      'top': layoutRect.top,
      'width': layoutRect.width,
      'height': layoutRect.height
    } : null,
    'initialIntersection': element.getIntersectionChangeEntry(),
    'domFingerprint': _domFingerprint.DomFingerprint.generate(element),
    'experimentToggles': (0, _experiments.experimentToggles)(parentWindow),
    'sentinel': sentinel
  });
  var adSrc = element.getAttribute('src');
  if (adSrc) {
    attributes['src'] = adSrc;
  }
  return attributes;
} /**
   * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS-IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

},{"./config":27,"./experiments":37,"./layout":45,"./mode-object":47,"./services":64,"./utils/dom-fingerprint":75,"./utils/object.js":78}],42:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                               * Copyright 2016 The AMP HTML Authors. All Rights Reserved.
                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                               * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                               * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                               * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                               *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                               * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                               * distributed under the License is distributed on an "AS-IS" BASIS,
                                                                                                                                                                                                                                                                               * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                               * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                               * limitations under the License.
                                                                                                                                                                                                                                                                               */

exports.getTrackImpressionPromise = getTrackImpressionPromise;
exports.resetTrackImpressionPromiseForTesting = resetTrackImpressionPromiseForTesting;
exports.maybeTrackImpression = maybeTrackImpression;
exports.doNotTrackImpression = doNotTrackImpression;
exports.shouldAppendExtraParams = shouldAppendExtraParams;
exports.getExtraParamsUrl = getExtraParamsUrl;

var _promise = require('./utils/promise');

var _services = require('./services');

var _url = require('./url');

var _log = require('./log');

var _mode = require('./mode');

var _experiments = require('./experiments');

var TIMEOUT_VALUE = 8000;

var trackImpressionPromise = null;

var DEFAULT_APPEND_URL_PARAM = ['gclid', 'gclsrc'];

/**
 * A function to get the trackImpressionPromise;
 * @return {!Promise}
 */
function getTrackImpressionPromise() {
  return (0, _log.dev)().assert(trackImpressionPromise);
}

/**
 * Function that reset the trackImpressionPromise only for testing
 * @visibleForTesting
 */
function resetTrackImpressionPromiseForTesting() {
  trackImpressionPromise = null;
}

/**
 * Emit a HTTP request to a destination defined on the incoming URL.
 * Launched for trusted viewer. Otherwise guarded by experiment.
 * @param {!Window} win
 */
function maybeTrackImpression(win) {
  var deferred = new _promise.Deferred();
  var promise = deferred.promise,
      resolveImpression = deferred.resolve;


  trackImpressionPromise = _services.Services.timerFor(win).timeoutPromise(TIMEOUT_VALUE, promise, 'TrackImpressionPromise timeout').catch(function (error) {
    (0, _log.dev)().warn('IMPRESSION', error);
  });

  var viewer = _services.Services.viewerForDoc(win.document);
  var isTrustedViewerPromise = viewer.isTrustedViewer();
  var isTrustedReferrerPromise = viewer.isTrustedReferrer();
  Promise.all([isTrustedViewerPromise, isTrustedReferrerPromise]).then(function (results) {
    var isTrustedViewer = results[0];
    var isTrustedReferrer = results[1];
    // Currently this feature is launched for trusted viewer and trusted
    // referrer, but still experiment guarded for all AMP docs.
    if (!isTrustedViewer && !isTrustedReferrer && !(0, _experiments.isExperimentOn)(win, 'alp')) {
      resolveImpression();
      return;
    }

    var replaceUrlPromise = handleReplaceUrl(win);
    var clickUrlPromise = handleClickUrl(win);

    Promise.all([replaceUrlPromise, clickUrlPromise]).then(function () {
      resolveImpression();
    }, function () {});
  });
}

/**
 * Signal that impression tracking is not relevant in this environment.
 */
function doNotTrackImpression() {
  trackImpressionPromise = Promise.resolve();
}

/**
 * Handle the getReplaceUrl and return a promise when url is replaced Only
 * handles replaceUrl when viewer indicates AMP to do so. Viewer should indicate
 * by setting the legacy replaceUrl init param and add `replaceUrl` to its
 * capability param. Future plan is to change the type of legacy init replaceUrl
 * param from url string to boolean value. Please NOTE replaceUrl and adLocation
 * will never arrive at same time, so there is no race condition on the order of
 * handling url replacement.
 * @param {!Window} win
 * @return {!Promise}
 */
function handleReplaceUrl(win) {
  var viewer = _services.Services.viewerForDoc(win.document);

  // ReplaceUrl substitution doesn't have to wait until the document is visible
  if (!viewer.getParam('replaceUrl')) {
    // The init replaceUrl param serve as a signal on whether replaceUrl is
    // required for this doc.
    return Promise.resolve();
  }

  if (!viewer.hasCapability('replaceUrl')) {
    // If Viewer is not capability of providing async replaceUrl, use the legacy
    // init replaceUrl param.
    viewer.replaceUrl(viewer.getParam('replaceUrl') || null);
    return Promise.resolve();
  }

  // request async replaceUrl is viewer support getReplaceUrl.
  return viewer.sendMessageAwaitResponse('getReplaceUrl', /* data */undefined).then(function (response) {
    if (!response || (typeof response === 'undefined' ? 'undefined' : _typeof(response)) != 'object') {
      (0, _log.dev)().warn('IMPRESSION', 'get invalid replaceUrl response');
      return;
    }
    viewer.replaceUrl(response['replaceUrl'] || null);
  }, function (err) {
    (0, _log.dev)().warn('IMPRESSION', 'Error request replaceUrl from viewer', err);
  });
}

/**
 * Perform the impression request if it has been provided via
 * the click param in the viewer arguments. Returns a promise.
 * @param {!Window} win
 * @return {!Promise}
 */
function handleClickUrl(win) {
  var viewer = _services.Services.viewerForDoc(win.document);
  /** @const {string|undefined} */
  var clickUrl = viewer.getParam('click');

  if (!clickUrl) {
    return Promise.resolve();
  }

  if (clickUrl.indexOf('https://') != 0) {
    (0, _log.user)().warn('IMPRESSION', 'click fragment param should start with https://. Found ', clickUrl);
    return Promise.resolve();
  }

  if (win.location.hash) {
    // This is typically done using replaceState inside the viewer.
    // If for some reason it failed, get rid of the fragment here to
    // avoid duplicate tracking.
    win.location.hash = '';
  }

  // TODO(@zhouyx) need test with a real response.
  return viewer.whenFirstVisible().then(function () {
    return invoke(win, (0, _log.dev)().assertString(clickUrl));
  }).then(function (response) {
    applyResponse(win, response);
  }).catch(function (err) {
    (0, _log.user)().warn('IMPRESSION', 'Error on request clickUrl: ', err);
  });
}

/**
 * Send the url to ad server and wait for its response
 * @param {!Window} win
 * @param {string} clickUrl
 * @return {!Promise<?JsonObject>}
 */
function invoke(win, clickUrl) {
  if ((0, _mode.getMode)().localDev && !(0, _mode.getMode)().test) {
    clickUrl = 'http://localhost:8000/impression-proxy?url=' + clickUrl;
  }
  return _services.Services.xhrFor(win).fetchJson(clickUrl, {
    credentials: 'include',
    // All origins are allows to send these requests.
    requireAmpResponseSourceOrigin: false
  }).then(function (res) {
    // Treat 204 no content response specially
    if (res.status == 204) {
      return null;
    }
    return res.json();
  });
}

/**
 * parse the response back from ad server
 * Set for analytics purposes
 * @param {!Window} win
 * @param {?JsonObject} response
 */
function applyResponse(win, response) {
  if (!response) {
    return;
  }

  var adLocation = response['location'];
  var adTracking = response['tracking_url'];

  // If there is a tracking_url, need to track it
  // Otherwise track the location
  var trackUrl = adTracking || adLocation;

  if (trackUrl && !(0, _url.isProxyOrigin)(trackUrl)) {
    // To request the provided trackUrl for tracking purposes.
    new Image().src = trackUrl;
  }

  // Replace the location href params with new location params we get (if any).
  if (adLocation) {
    if (!win.history.replaceState) {
      return;
    }

    var viewer = _services.Services.viewerForDoc(win.document);
    var currentHref = win.location.href;
    var url = (0, _url.parseUrlDeprecated)(adLocation);
    var params = (0, _url.parseQueryString)(url.search);
    var newHref = (0, _url.addParamsToUrl)(currentHref, params);
    // TODO: Avoid overwriting the fragment parameter.
    win.history.replaceState(null, '', newHref);
    viewer.maybeUpdateFragmentForCct();
  }
}

/**
 * Return a promise that whether appending extra url params to outgoing link is
 * required.
 * @param {!./service/ampdoc-impl.AmpDoc} ampdoc
 * @return {!Promise<boolean>}
 */
function shouldAppendExtraParams(ampdoc) {
  return ampdoc.whenReady().then(function () {
    return !!ampdoc.getBody().querySelector('amp-analytics[type=googleanalytics]');
  });
}

/**
 * Return the extra url params string that should be appended to outgoing link
 * @param {!Window} win
 * @param {!Element} target
 * @return {string}
 */
function getExtraParamsUrl(win, target) {
  // Get an array with extra params that needs to append.
  var url = (0, _url.parseUrlDeprecated)(win.location.href);
  var params = (0, _url.parseQueryString)(url.search);
  var appendParams = [];
  for (var i = 0; i < DEFAULT_APPEND_URL_PARAM.length; i++) {
    var param = DEFAULT_APPEND_URL_PARAM[i];
    if (typeof params[param] !== 'undefined') {
      appendParams.push(param);
    }
  }

  // Check if the param already exists
  var additionalUrlParams = target.getAttribute('data-amp-addparams');
  var href = target.href;

  if (additionalUrlParams) {
    href = (0, _url.addParamsToUrl)(href, (0, _url.parseQueryString)(additionalUrlParams));
  }
  var loc = (0, _url.parseUrlDeprecated)(href);
  var existParams = (0, _url.parseQueryString)(loc.search);
  for (var _i = appendParams.length - 1; _i >= 0; _i--) {
    var _param = appendParams[_i];
    if (typeof existParams[_param] !== 'undefined') {
      appendParams.splice(_i, 1);
    }
  }
  return getQueryParamUrl(appendParams);
}

/**
 * Helper method to convert an query param array to string
 * @param {!Array<string>} params
 * @return {string}
 */
function getQueryParamUrl(params) {
  var url = '';
  for (var i = 0; i < params.length; i++) {
    var param = params[i];
    url += i == 0 ? param + '=QUERY_PARAM(' + param + ')' : '&' + param + '=QUERY_PARAM(' + param + ')';
  }
  return url;
}

},{"./experiments":37,"./log":46,"./mode":48,"./services":64,"./url":72,"./utils/promise":79}],43:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                               * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                               * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                               * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                               * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                               *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                               * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                               * distributed under the License is distributed on an "AS-IS" BASIS,
                                                                                                                                                                                                                                                                               * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                               * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                               * limitations under the License.
                                                                                                                                                                                                                                                                               */

/**
 * @fileoverview This module declares JSON types as defined in the
 * {@link http://json.org/}.
 */

exports.recreateNonProtoObject = recreateNonProtoObject;
exports.getValueForExpr = getValueForExpr;
exports.parseJson = parseJson;
exports.tryParseJson = tryParseJson;
exports.recursiveEquals = recursiveEquals;

var _types = require('./types');

// NOTE Type are changed to {*} because of
// https://github.com/google/closure-compiler/issues/1999

/**
 * JSON scalar. It's either string, number or boolean.
 * @typedef {*} should be string|number|boolean
 */
var JSONScalarDef = void 0;

/**
 * JSON object. It's a map with string keys and JSON values.
 * @typedef {*} should be !Object<string, ?JSONValueDef>
 */
var JSONObjectDef = void 0;

/**
 * JSON array. It's an array with JSON values.
 * @typedef {*} should be !Array<?JSONValueDef>
 */
var JSONArrayDef = void 0;

/**
 * JSON value. It's either a scalar, an object or an array.
 * @typedef {*} should be !JSONScalarDef|!JSONObjectDef|!JSONArrayDef
 */
var JSONValueDef = void 0;

/**
 * Recreates objects with prototype-less copies.
 * @param {!JsonObject} obj
 * @return {!JsonObject}
 */
function recreateNonProtoObject(obj) {
  var copy = Object.create(null);
  for (var k in obj) {
    if (!hasOwnProperty(obj, k)) {
      continue;
    }
    var v = obj[k];
    copy[k] = (0, _types.isObject)(v) ? recreateNonProtoObject(v) : v;
  }
  return (/** @type {!JsonObject} */copy
  );
}

/**
 * Returns a value from an object for a field-based expression. The expression
 * is a simple nested dot-notation of fields, such as `field1.field2`. If any
 * field in a chain does not exist or is not an object or array, the returned
 * value will be `undefined`.
 *
 * @param {!JsonObject} obj
 * @param {string} expr
 * @return {*}
 */
function getValueForExpr(obj, expr) {
  // The `.` indicates "the object itself".
  if (expr == '.') {
    return obj;
  }
  // Otherwise, navigate via properties.
  var parts = expr.split('.');
  var value = obj;
  for (var i = 0; i < parts.length; i++) {
    var part = parts[i];
    if (part && value && value[part] !== undefined && hasOwnProperty(value, part)) {
      value = value[part];
      continue;
    }
    value = undefined;
    break;
  }
  return value;
}

/**
 * Simple wrapper around JSON.parse that casts the return value
 * to JsonObject.
 * Create a new wrapper if an array return value is desired.
 * @param {*} json JSON string to parse
 * @return {?JsonObject} May be extend to parse arrays.
 */
function parseJson(json) {
  return (/** @type {?JsonObject} */JSON.parse( /** @type {string} */json)
  );
}

/**
 * Parses the given `json` string without throwing an exception if not valid.
 * Returns `undefined` if parsing fails.
 * Returns the `Object` corresponding to the JSON string when parsing succeeds.
 * @param {*} json JSON string to parse
 * @param {function(!Error)=} opt_onFailed Optional function that will be called
 *     with the error if parsing fails.
 * @return {?JsonObject|undefined} May be extend to parse arrays.
 */
function tryParseJson(json, opt_onFailed) {
  try {
    return parseJson(json);
  } catch (e) {
    if (opt_onFailed) {
      opt_onFailed(e);
    }
    return undefined;
  }
}

/**
 * Recursively checks strict equality of items in nested arrays and objects.
 *
 * @param {JSONValueDef} a
 * @param {JSONValueDef} b
 * @param {number} depth The maximum recursion depth. Must be finite.
 * @return {boolean}
 * @throws {Error} If depth argument is not finite.
 */
function recursiveEquals(a, b) {
  var depth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;

  if (!isFinite(depth)) {
    throw new Error('depth arg must be finite: ' + depth);
  }
  if (a === b) {
    return true;
  }
  // Only check shallow equality for depth < 1.
  if (depth < 1) {
    return false;
  }
  if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) !== (typeof b === 'undefined' ? 'undefined' : _typeof(b))) {
    return false;
  }
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) {
      return false;
    }
    for (var i = 0; i < a.length; i++) {
      if (!recursiveEquals(a[i], b[i], depth - 1)) {
        return false;
      }
    }
    return true;
  }
  if (a && b && (typeof a === 'undefined' ? 'undefined' : _typeof(a)) === 'object' && (typeof b === 'undefined' ? 'undefined' : _typeof(b)) === 'object') {
    var keysA = Object.keys( /** @type {!Object} */a);
    var keysB = Object.keys( /** @type {!Object} */b);
    if (keysA.length !== keysB.length) {
      return false;
    }
    for (var _i = 0; _i < keysA.length; _i++) {
      var keyA = keysA[_i];
      var valueA = a[keyA];
      var valueB = b[keyA];
      if (!recursiveEquals(valueA, valueB, depth - 1)) {
        return false;
      }
    }
    return true;
  }
  return false;
}

/**
 * @param {*} obj
 * @param {string} key
 * @return {boolean}
 */
function hasOwnProperty(obj, key) {
  if (obj == null || (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) != 'object') {
    return false;
  }
  return Object.prototype.hasOwnProperty.call(
  /** @type {!Object} */obj, key);
}

},{"./types":69}],44:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.layoutRectLtwh = layoutRectLtwh;
exports.layoutRectFromDomRect = layoutRectFromDomRect;
exports.layoutRectsOverlap = layoutRectsOverlap;
exports.rectIntersection = rectIntersection;
exports.layoutRectsRelativePos = layoutRectsRelativePos;
exports.expandLayoutRect = expandLayoutRect;
exports.moveLayoutRect = moveLayoutRect;
exports.areMarginsChanged = areMarginsChanged;
exports.layoutRectSizeEquals = layoutRectSizeEquals;
exports.layoutRectEquals = layoutRectEquals;
exports.cloneLayoutMarginsChangeDef = cloneLayoutMarginsChangeDef;
/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * The structure that combines position and size for an element. The exact
 * interpretation of position and size depends on the use case.
 *
 * @typedef {{
 *   top: number,
 *   bottom: number,
 *   left: number,
 *   right: number,
 *   width: number,
 *   height: number,
 *   x: number,
 *   y: number
 * }}
 */
var LayoutRectDef = exports.LayoutRectDef = void 0;

/**
 * The structure that represents the margins of an Element.
 *
 * @typedef {{
 *   top: number,
 *   right: number,
 *   bottom: number,
 *   left: number
 * }}
 */
var LayoutMarginsDef = exports.LayoutMarginsDef = void 0;

/**
 * The structure that represents a requested change to the margins of an
 * Element. Any new values specified will replace existing ones (rather than
 * being additive).
 *
 * @typedef {{
 *   top: (number|undefined),
 *   right: (number|undefined),
 *   bottom: (number|undefined),
 *   left: (number|undefined)
 * }}
 */
var LayoutMarginsChangeDef = exports.LayoutMarginsChangeDef = void 0;

/**
* RelativePositions
*
* Describes the relative position of an element to another (whether the
* first is inside the second, on top of the second or on the bottom
* @enum {string}
*/
var RelativePositions = exports.RelativePositions = {
  INSIDE: 'inside',
  TOP: 'top',
  BOTTOM: 'bottom'
};

/**
 * Creates a layout rect based on the left, top, width and height parameters
 * in that order.
 * @param {number} left
 * @param {number} top
 * @param {number} width
 * @param {number} height
 * @return {!LayoutRectDef}
 */
function layoutRectLtwh(left, top, width, height) {
  return {
    left: left,
    top: top,
    width: width,
    height: height,
    bottom: top + height,
    right: left + width,
    x: left,
    y: top
  };
}

/**
 * Creates a layout rect based on the DOMRect, e.g. obtained from calling
 * getBoundingClientRect.
 * @param {!ClientRect} rect
 * @return {!LayoutRectDef}
 */
function layoutRectFromDomRect(rect) {
  return layoutRectLtwh(Number(rect.left), Number(rect.top), Number(rect.width), Number(rect.height));
}

/**
 * Returns true if the specified two rects overlap by a single pixel.
 * @param {!LayoutRectDef} r1
 * @param {!LayoutRectDef} r2
 * @return {boolean}
 */
function layoutRectsOverlap(r1, r2) {
  return r1.top <= r2.bottom && r2.top <= r1.bottom && r1.left <= r2.right && r2.left <= r1.right;
}

/**
 * Returns the intersection between a, b or null if there is none.
 * @param {...?LayoutRectDef|undefined} var_args
 * @return {?LayoutRectDef}
 */
function rectIntersection(var_args) {
  var x0 = -Infinity;
  var x1 = Infinity;
  var y0 = -Infinity;
  var y1 = Infinity;
  for (var i = 0; i < arguments.length; i++) {
    var current = arguments[i];
    if (!current) {
      continue;
    }
    x0 = Math.max(x0, current.left);
    x1 = Math.min(x1, current.left + current.width);
    y0 = Math.max(y0, current.top);
    y1 = Math.min(y1, current.top + current.height);
    if (x1 < x0 || y1 < y0) {
      return null;
    }
  }
  if (x1 == Infinity) {
    return null;
  }
  return layoutRectLtwh(x0, y0, x1 - x0, y1 - y0);
}

/**
 * Returns the position of r2 relative to r1
 * @param {!LayoutRectDef} r1
 * @param {!LayoutRectDef} r2
 * @return {RelativePositions}
 */
function layoutRectsRelativePos(r1, r2) {
  if (r1.top < r2.top) {
    return RelativePositions.TOP;
  } else if (r1.bottom > r2.bottom) {
    return RelativePositions.BOTTOM;
  } else {
    return RelativePositions.INSIDE;
  }
}

/**
 * Expand the layout rect using multiples of width and height.
 * @param {!LayoutRectDef} rect Original rect.
 * @param {number} dw Expansion in width, specified as a multiple of width.
 * @param {number} dh Expansion in height, specified as a multiple of height.
 * @return {!LayoutRectDef}
 */
function expandLayoutRect(rect, dw, dh) {
  return layoutRectLtwh(rect.left - rect.width * dw, rect.top - rect.height * dh, rect.width * (1 + dw * 2), rect.height * (1 + dh * 2));
}

/**
 * Moves the layout rect using dx and dy.
 * @param {!LayoutRectDef} rect Original rect.
 * @param {number} dx Move horizontally with this value.
 * @param {number} dy Move vertically with this value.
 * @return {!LayoutRectDef}
 */
function moveLayoutRect(rect, dx, dy) {
  if (dx == 0 && dy == 0 || rect.width == 0 && rect.height == 0) {
    return rect;
  }
  return layoutRectLtwh(rect.left + dx, rect.top + dy, rect.width, rect.height);
}

/**
 * @param {!LayoutMarginsDef} margins
 * @param {!LayoutMarginsChangeDef} change
 * @return {boolean}
 */
function areMarginsChanged(margins, change) {
  return change.top !== undefined && change.top != margins.top || change.right !== undefined && change.right != margins.right || change.bottom !== undefined && change.bottom != margins.bottom || change.left !== undefined && change.left != margins.left;
}

/**
 * @param {!LayoutRectDef} from
 * @param {!LayoutRectDef} to
 * @return {boolean}
 */
function layoutRectSizeEquals(from, to) {
  return from.width == to.width && from.height === to.height;
}

/**
 * @param {?LayoutRectDef} r1
 * @param {?LayoutRectDef} r2
 * @return {boolean}
 */
function layoutRectEquals(r1, r2) {
  if (!r1 || !r2) {
    return false;
  }
  return r1.left == r2.left && r1.top == r2.top && r1.width == r2.width && r1.height == r2.height;
}

/**
 * @param {LayoutMarginsChangeDef|undefined} marginsChange
 * @return {LayoutMarginsChangeDef|undefined}
 */
function cloneLayoutMarginsChangeDef(marginsChange) {
  if (!marginsChange) {
    return marginsChange;
  }
  return {
    top: marginsChange.top,
    bottom: marginsChange.bottom,
    left: marginsChange.left,
    right: marginsChange.right
  };
}

},{}],45:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LOADING_ELEMENTS_ = exports.naturalDimensions_ = exports.LengthDef = exports.LayoutPriority = exports.Layout = undefined;

var _templateObject = _taggedTemplateLiteral(['\n      <i-amphtml-sizer class="i-amphtml-sizer">\n        <img class="i-amphtml-intrinsic-sizer" />\n      </i-amphtml-sizer>'], ['\n      <i-amphtml-sizer class="i-amphtml-sizer">\n        <img class="i-amphtml-intrinsic-sizer" />\n      </i-amphtml-sizer>']);

exports.parseLayout = parseLayout;
exports.getLayoutClass = getLayoutClass;
exports.isLayoutSizeDefined = isLayoutSizeDefined;
exports.isInternalElement = isInternalElement;
exports.parseLength = parseLength;
exports.assertLength = assertLength;
exports.assertLengthOrPercent = assertLengthOrPercent;
exports.getLengthUnits = getLengthUnits;
exports.getLengthNumeral = getLengthNumeral;
exports.hasNaturalDimensions = hasNaturalDimensions;
exports.getNaturalDimensions = getNaturalDimensions;
exports.isLoadingAllowed = isLoadingAllowed;
exports.applyStaticLayout = applyStaticLayout;

var _log = require('./log');

var _staticTemplate = require('./static-template');

var _types = require('./types');

var _style = require('./style');

var _string = require('./string');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /**
                                                                                                                                                   * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
                                                                                                                                                   *
                                                                                                                                                   * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                   * you may not use this file except in compliance with the License.
                                                                                                                                                   * You may obtain a copy of the License at
                                                                                                                                                   *
                                                                                                                                                   *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                   *
                                                                                                                                                   * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                   * distributed under the License is distributed on an "AS-IS" BASIS,
                                                                                                                                                   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                   * See the License for the specific language governing permissions and
                                                                                                                                                   * limitations under the License.
                                                                                                                                                   */

/**
 * @fileoverview Implements element layout. See https://goo.gl/9avXuT for
 * details.
 */

/**
 * @enum {string}
 */
var Layout = exports.Layout = {
  NODISPLAY: 'nodisplay',
  FIXED: 'fixed',
  FIXED_HEIGHT: 'fixed-height',
  RESPONSIVE: 'responsive',
  CONTAINER: 'container',
  FILL: 'fill',
  FLEX_ITEM: 'flex-item',
  FLUID: 'fluid',
  INTRINSIC: 'intrinsic'
};

/**
 * Layout priorities to use with BaseElement#getLayoutPriority() and
 * BaseElement#updateLayoutPriority().
 * @enum {number}
 */
var LayoutPriority = exports.LayoutPriority = {
  CONTENT: 0,
  METADATA: 1,
  ADS: 2,
  BACKGROUND: 3
};

/**
 * CSS Length type. E.g. "1px" or "20vh".
 * @typedef {string}
 */
var LengthDef = exports.LengthDef = void 0;

/**
 * @typedef {{
 *   width: string,
 *   height: string
 * }}
 */
var DimensionsDef = void 0;

/**
 * The set of elements with natural dimensions, that is, elements
 * which have a known dimension either based on their value specified here,
 * or, if the value is null, a dimension specific to the browser.
 * `hasNaturalDimensions` checks for membership in this set.
 * `getNaturalDimensions` determines the dimensions for an element in the
 *    set and caches it.
 * @type {!Object<string, ?DimensionsDef>}
 * @private  Visible for testing only!
 */
var naturalDimensions_ = exports.naturalDimensions_ = {
  'AMP-PIXEL': { width: '0px', height: '0px' },
  'AMP-ANALYTICS': { width: '1px', height: '1px' },
  // TODO(dvoytenko): audio should have width:auto.
  'AMP-AUDIO': null,
  'AMP-SOCIAL-SHARE': { width: '60px', height: '44px' }
};

/**
 * Elements that the progess can be shown for. This set has to be externalized
 * since the element's implementation may not be downloaded yet.
 * @enum {boolean}
 * @private  Visible for testing only!
 */
var LOADING_ELEMENTS_ = exports.LOADING_ELEMENTS_ = {
  'AMP-ANIM': true,
  'AMP-BRIGHTCOVE': true,
  'AMP-GOOGLE-DOCUMENT-EMBED': true,
  'AMP-EMBED': true,
  'AMP-FACEBOOK': true,
  'AMP-FACEBOOK-COMMENTS': true,
  'AMP-FACEBOOK-LIKE': true,
  'AMP-FACEBOOK-PAGE': true,
  'AMP-IFRAME': true,
  'AMP-IMG': true,
  'AMP-INSTAGRAM': true,
  'AMP-LIST': true,
  'AMP-OOYALA-PLAYER': true,
  'AMP-PINTEREST': true,
  'AMP-PLAYBUZZ': true,
  'AMP-VIDEO': true,
  'AMP-YOUTUBE': true
};

/**
 * @param {string} s
 * @return {Layout|undefined} Returns undefined in case of failure to parse
 *   the layout string.
 */
function parseLayout(s) {
  for (var k in Layout) {
    if (Layout[k] == s) {
      return Layout[k];
    }
  }
  return undefined;
}

/**
 * @param {!Layout} layout
 * @return {string}
 */
function getLayoutClass(layout) {
  return 'i-amphtml-layout-' + layout;
}

/**
 * Whether an element with this layout inherently defines the size.
 * @param {!Layout} layout
 * @return {boolean}
 */
function isLayoutSizeDefined(layout) {
  return layout == Layout.FIXED || layout == Layout.FIXED_HEIGHT || layout == Layout.RESPONSIVE || layout == Layout.FILL || layout == Layout.FLEX_ITEM || layout == Layout.FLUID || layout == Layout.INTRINSIC;
}

/**
 * Whether the tag is an internal (service) AMP tag.
 * @param {!Node|string} tag
 * @return {boolean}
 */
function isInternalElement(tag) {
  var tagName = typeof tag == 'string' ? tag : tag.tagName;
  return tagName && (0, _string.startsWith)(tagName.toLowerCase(), 'i-');
}

/**
 * Parses the CSS length value. If no units specified, the assumed value is
 * "px". Returns undefined in case of parsing error.
 * @param {string|undefined|null} s
 * @return {!LengthDef|undefined}
 */
function parseLength(s) {
  if (typeof s == 'number') {
    return s + 'px';
  }
  if (!s) {
    return undefined;
  }
  if (!/^\d+(\.\d+)?(px|em|rem|vh|vw|vmin|vmax|cm|mm|q|in|pc|pt)?$/.test(s)) {
    return undefined;
  }
  if (/^\d+(\.\d+)?$/.test(s)) {
    return s + 'px';
  }
  return s;
}

/**
 * Asserts that the supplied value is a non-percent CSS Length value.
 * @param {!LengthDef|string|null|undefined} length
 * @return {!LengthDef}
 */
function assertLength(length) {
  (0, _log.user)().assert(/^\d+(\.\d+)?(px|em|rem|vh|vw|vmin|vmax|cm|mm|q|in|pc|pt)$/.test(length), 'Invalid length value: %s', length);
  return (/** @type {!LengthDef} */length
  );
}

/**
 * Asserts that the supplied value is a CSS Length value
 * (including percent unit).
 * @param {!LengthDef|string} length
 * @return {!LengthDef}
 */
function assertLengthOrPercent(length) {
  (0, _log.user)().assert(/^\d+(\.\d+)?(px|em|rem|vh|vw|vmin|vmax|%)$/.test(length), 'Invalid length or percent value: %s', length);
  return length;
}

/**
 * Returns units from the CSS length value.
 * @param {!LengthDef|string|null|undefined} length
 * @return {string}
 */
function getLengthUnits(length) {
  assertLength(length);
  (0, _log.dev)().assertString(length);
  var m = (0, _log.user)().assert(length.match(/[a-z]+/i), 'Failed to read units from %s', length);
  return m[0];
}

/**
 * Returns the numeric value of a CSS length value.
 * @param {!LengthDef|string|null|undefined} length
 * @return {number|undefined}
 */
function getLengthNumeral(length) {
  var res = parseFloat(length);
  return (0, _types.isFiniteNumber)(res) ? res : undefined;
}

/**
 * Determines whether the tagName is a known element that has natural dimensions
 * in our runtime or the browser.
 * @param {string} tagName The element tag name.
 * @return {boolean}
 */
function hasNaturalDimensions(tagName) {
  tagName = tagName.toUpperCase();
  return naturalDimensions_[tagName] !== undefined;
}

/**
 * Determines the default dimensions for an element which could vary across
 * different browser implementations, like <audio> for instance.
 * This operation can only be completed for an element whitelisted by
 * `hasNaturalDimensions`.
 * @param {!Element} element
 * @return {DimensionsDef}
 */
function getNaturalDimensions(element) {
  var tagName = element.tagName.toUpperCase();
  (0, _log.dev)().assert(naturalDimensions_[tagName] !== undefined);
  if (!naturalDimensions_[tagName]) {
    var doc = element.ownerDocument;
    var naturalTagName = tagName.replace(/^AMP\-/, '');
    var temp = doc.createElement(naturalTagName);
    // For audio, should no-op elsewhere.
    temp.controls = true;
    (0, _style.setStyles)(temp, {
      position: 'absolute',
      visibility: 'hidden'
    });
    doc.body.appendChild(temp);
    naturalDimensions_[tagName] = {
      width: (temp. /*OK*/offsetWidth || 1) + 'px',
      height: (temp. /*OK*/offsetHeight || 1) + 'px'
    };
    doc.body.removeChild(temp);
  }
  return (/** @type {DimensionsDef} */naturalDimensions_[tagName]
  );
}

/**
 * Whether the loading can be shown for the specified elemeent. This set has
 * to be externalized since the element's implementation may not be
 * downloaded yet.
 * @param {!Element} element
 * @return {boolean}
 */
function isLoadingAllowed(element) {
  var tagName = element.tagName.toUpperCase();
  if (tagName == 'AMP-AD' || tagName == 'AMP-EMBED') {
    return true;
  }
  return LOADING_ELEMENTS_[tagName] || false;
}

/**
 * Applies layout to the element. Visible for testing only.
 *
 * \   \  /  \  /   / /   \     |   _  \     |  \ |  | |  | |  \ |  |  / _____|
 *  \   \/    \/   / /  ^  \    |  |_)  |    |   \|  | |  | |   \|  | |  |  __
 *   \            / /  /_\  \   |      /     |  . `  | |  | |  . `  | |  | |_ |
 *    \    /\    / /  _____  \  |  |\  \----.|  |\   | |  | |  |\   | |  |__| |
 *     \__/  \__/ /__/     \__\ | _| `._____||__| \__| |__| |__| \__|  \______|
 *
 * The equivalent of this method is used for server-side rendering (SSR) and
 * any changes made to it must be made in coordination with caches that
 * implement SSR. For more information on SSR see bit.ly/amp-ssr.
 *
 * @param {!Element} element
 * @return {!Layout}
 */
function applyStaticLayout(element) {
  // Check if the layout has already been done by server-side rendering. The
  // document may be visible to the user if the boilerplate was removed so
  // please take care in making changes here.
  var completedLayoutAttr = element.getAttribute('i-amphtml-layout');
  if (completedLayoutAttr) {
    var _layout = /** @type {!Layout} */(0, _log.dev)().assert(parseLayout(completedLayoutAttr));
    if ((_layout == Layout.RESPONSIVE || _layout == Layout.INTRINSIC) && element.firstElementChild) {
      // Find sizer, but assume that it might not have been parsed yet.
      element.sizerElement = element.querySelector('i-amphtml-sizer') || undefined;
    } else if (_layout == Layout.NODISPLAY) {
      applyNoDisplayLayout(element);
    }
    return _layout;
  }

  // If the layout was already done by server-side rendering (SSR), then the
  // code below will not run. Any changes below will necessitate a change to SSR
  // and must be coordinated with caches that implement SSR. See bit.ly/amp-ssr.

  // Parse layout from the element.
  var layoutAttr = element.getAttribute('layout');
  var widthAttr = element.getAttribute('width');
  var heightAttr = element.getAttribute('height');
  var sizesAttr = element.getAttribute('sizes');
  var heightsAttr = element.getAttribute('heights');

  // Input layout attributes.
  var inputLayout = layoutAttr ? parseLayout(layoutAttr) : null;
  (0, _log.user)().assert(inputLayout !== undefined, 'Unknown layout: %s', layoutAttr);
  /** @const {string|null|undefined} */
  var inputWidth = widthAttr && widthAttr != 'auto' ? parseLength(widthAttr) : widthAttr;
  (0, _log.user)().assert(inputWidth !== undefined, 'Invalid width value: %s', widthAttr);
  /** @const {string|null|undefined} */
  var inputHeight = heightAttr && heightAttr != 'fluid' ? parseLength(heightAttr) : heightAttr;
  (0, _log.user)().assert(inputHeight !== undefined, 'Invalid height value: %s', heightAttr);

  // Effective layout attributes. These are effectively constants.
  var width = void 0;
  var height = void 0;
  var layout = void 0;

  // Calculate effective width and height.
  if ((!inputLayout || inputLayout == Layout.FIXED || inputLayout == Layout.FIXED_HEIGHT) && (!inputWidth || !inputHeight) && hasNaturalDimensions(element.tagName)) {
    // Default width and height: handle elements that do not specify a
    // width/height and are defined to have natural browser dimensions.
    var dimensions = getNaturalDimensions(element);
    width = inputWidth || inputLayout == Layout.FIXED_HEIGHT ? inputWidth : dimensions.width;
    height = inputHeight || dimensions.height;
  } else {
    width = inputWidth;
    height = inputHeight;
  }

  // Calculate effective layout.
  if (inputLayout) {
    layout = inputLayout;
  } else if (!width && !height) {
    layout = Layout.CONTAINER;
  } else if (height == 'fluid') {
    layout = Layout.FLUID;
  } else if (height && (!width || width == 'auto')) {
    layout = Layout.FIXED_HEIGHT;
  } else if (height && width && (sizesAttr || heightsAttr)) {
    layout = Layout.RESPONSIVE;
  } else {
    layout = Layout.FIXED;
  }

  // Verify layout attributes.
  if (layout == Layout.FIXED || layout == Layout.FIXED_HEIGHT || layout == Layout.RESPONSIVE || layout == Layout.INTRINSIC) {
    (0, _log.user)().assert(height, 'Expected height to be available: %s', heightAttr);
  }
  if (layout == Layout.FIXED_HEIGHT) {
    (0, _log.user)().assert(!width || width == 'auto', 'Expected width to be either absent or equal "auto" ' + 'for fixed-height layout: %s', widthAttr);
  }
  if (layout == Layout.FIXED || layout == Layout.RESPONSIVE || layout == Layout.INTRINSIC) {
    (0, _log.user)().assert(width && width != 'auto', 'Expected width to be available and not equal to "auto": %s', widthAttr);
  }

  if (layout == Layout.RESPONSIVE || layout == Layout.INTRINSIC) {
    (0, _log.user)().assert(getLengthUnits(width) == getLengthUnits(height), 'Length units should be the same for width and height: %s, %s', widthAttr, heightAttr);
  } else {
    (0, _log.user)().assert(heightsAttr === null, 'Unexpected "heights" attribute for none-responsive layout');
  }

  // Apply UI.
  element.classList.add(getLayoutClass(layout));
  if (isLayoutSizeDefined(layout)) {
    element.classList.add('i-amphtml-layout-size-defined');
  }
  if (layout == Layout.NODISPLAY) {
    // CSS defines layout=nodisplay automatically with `display:none`. Thus
    // no additional styling is needed.
    applyNoDisplayLayout(element);
  } else if (layout == Layout.FIXED) {
    (0, _style.setStyles)(element, {
      width: (0, _log.dev)().assertString(width),
      height: (0, _log.dev)().assertString(height)
    });
  } else if (layout == Layout.FIXED_HEIGHT) {
    (0, _style.setStyle)(element, 'height', (0, _log.dev)().assertString(height));
  } else if (layout == Layout.RESPONSIVE) {
    var sizer = element.ownerDocument.createElement('i-amphtml-sizer');
    (0, _style.setStyles)(sizer, {
      display: 'block',
      paddingTop: getLengthNumeral(height) / getLengthNumeral(width) * 100 + '%'
    });
    element.insertBefore(sizer, element.firstChild);
    element.sizerElement = sizer;
  } else if (layout == Layout.INTRINSIC) {
    // Intrinsic uses an svg inside the sizer element rather than the padding
    // trick Note a naked svg won't work becasue other thing expect the
    // i-amphtml-sizer element
    var _sizer = (0, _staticTemplate.htmlFor)(element)(_templateObject);
    var intrinsicSizer = _sizer.firstElementChild;
    intrinsicSizer.setAttribute('src', 'data:image/svg+xml;charset=utf-8,<svg height="' + height + '" width="' + width + '" xmlns="http://www.w3.org/2000/svg" version="1.1"/>');
    element.insertBefore(_sizer, element.firstChild);
    // TODO(jpettitt): sizer is leaked and can't be cleaned up.
    element.sizerElement = intrinsicSizer;
  } else if (layout == Layout.FILL) {
    // Do nothing.
  } else if (layout == Layout.CONTAINER) {
    // Do nothing. Elements themselves will check whether the supplied
    // layout value is acceptable. In particular container is only OK
    // sometimes.
  } else if (layout == Layout.FLEX_ITEM) {
    // Set height and width to a flex item if they exist.
    // The size set to a flex item could be overridden by `display: flex` later.
    if (width) {
      (0, _style.setStyle)(element, 'width', width);
    }
    if (height) {
      (0, _style.setStyle)(element, 'height', height);
    }
  } else if (layout == Layout.FLUID) {
    element.classList.add('i-amphtml-layout-awaiting-size');
    if (width) {
      (0, _style.setStyle)(element, 'width', width);
    }
    (0, _style.setStyle)(element, 'height', 0);
  }
  return layout;
}

/**
 * @param {!Element} element
 */
function applyNoDisplayLayout(element) {
  // TODO(dvoytenko, #9353): once `toggleLayoutDisplay` API has been deployed
  // everywhere, switch all relevant elements to this API. In the meantime,
  // simply unblock display toggling via `style="display: ..."`.
  (0, _style.setStyle)(element, 'display', 'none');
  element.classList.add('i-amphtml-display');
}

},{"./log":46,"./static-template":65,"./string":66,"./style":68,"./types":69}],46:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Log = exports.LogLevel = exports.USER_ERROR_EMBED_SENTINEL = exports.USER_ERROR_SENTINEL = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * distributed under the License is distributed on an "AS-IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

exports.isUserErrorMessage = isUserErrorMessage;
exports.isUserErrorEmbed = isUserErrorEmbed;
exports.setReportError = setReportError;
exports.overrideLogLevel = overrideLogLevel;
exports.duplicateErrorIfNecessary = duplicateErrorIfNecessary;
exports.createErrorVargs = createErrorVargs;
exports.rethrowAsync = rethrowAsync;
exports.initLogConstructor = initLogConstructor;
exports.resetLogConstructorForTesting = resetLogConstructorForTesting;
exports.user = user;
exports.dev = dev;
exports.isFromEmbed = isFromEmbed;

var _mode = require('./mode');

var _modeObject = require('./mode-object');

var _types = require('./types');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Triple zero width space.
 *
 * This is added to user error messages, so that we can later identify
 * them, when the only thing that we have is the message. This is the
 * case in many browsers when the global exception handler is invoked.
 *
 * @const {string}
 */
var USER_ERROR_SENTINEL = exports.USER_ERROR_SENTINEL = '\u200B\u200B\u200B';

/**
 * Four zero width space.
 *
 * @const {string}
 */
var USER_ERROR_EMBED_SENTINEL = exports.USER_ERROR_EMBED_SENTINEL = '\u200B\u200B\u200B\u200B';

/**
 * @param {string} message
 * @return {boolean} Whether this message was a user error.
 */
function isUserErrorMessage(message) {
  return message.indexOf(USER_ERROR_SENTINEL) >= 0;
}

/**
 * @param {string} message
 * @return {boolean} Whether this message was a a user error from an iframe embed.
 */
function isUserErrorEmbed(message) {
  return message.indexOf(USER_ERROR_EMBED_SENTINEL) >= 0;
}

/**
 * @enum {number}
 * @private Visible for testing only.
 */
var LogLevel = exports.LogLevel = {
  OFF: 0,
  ERROR: 1,
  WARN: 2,
  INFO: 3,
  FINE: 4
};

/**
 * Sets reportError function. Called from error.js to break cyclic
 * dependency.
 * @param {function(*, !Element=)|undefined} fn
 */
function setReportError(fn) {
  self.reportError = fn;
}

/**
 * @type {!LogLevel|undefined}
 * @private
 */
var levelOverride_ = undefined;

/**
 * @param {!LogLevel} level
 */
function overrideLogLevel(level) {
  levelOverride_ = level;
}

/**
 * Logging class. Use of sentinel string instead of a boolean to check user/dev
 * errors because errors could be rethrown by some native code as a new error,
 * and only a message would survive. Also, some browser don’t support a 5th
 * error object argument in window.onerror. List of supporting browser can be
 * found here:
 * https://blog.sentry.io/2016/01/04/client-javascript-reporting-window-onerror.html
 * @final
 * @private Visible for testing only.
 */

var Log = exports.Log = function () {
  /**
   * opt_suffix will be appended to error message to identify the type of the
   * error message. We can't rely on the error object to pass along the type
   * because some browsers do not have this param in its window.onerror API.
   * See:
   * https://blog.sentry.io/2016/01/04/client-javascript-reporting-window-onerror.html
   *
   * @param {!Window} win
   * @param {function(!./mode.ModeDef):!LogLevel} levelFunc
   * @param {string=} opt_suffix
   */
  function Log(win, levelFunc, opt_suffix) {
    _classCallCheck(this, Log);

    /**
     * In tests we use the main test window instead of the iframe where
     * the tests runs because only the former is relayed to the console.
     * @const {!Window}
     */
    this.win = (0, _mode.getMode)().test && win.AMP_TEST_IFRAME ? win.parent : win;

    /** @private @const {function(!./mode.ModeDef):!LogLevel} */
    this.levelFunc_ = levelFunc;

    /** @private @const {!LogLevel} */
    this.level_ = this.defaultLevel_();

    /** @private @const {string} */
    this.suffix_ = opt_suffix || '';
  }

  /**
   * @return {!LogLevel}
   * @private
   */


  _createClass(Log, [{
    key: 'getLevel_',
    value: function getLevel_() {
      return levelOverride_ !== undefined ? levelOverride_ : this.level_;
    }

    /**
     * @return {!LogLevel}
     * @private
     */

  }, {
    key: 'defaultLevel_',
    value: function defaultLevel_() {
      // No console - can't enable logging.
      if (!this.win.console || !this.win.console.log) {
        return LogLevel.OFF;
      }

      // Logging has been explicitly disabled.
      if ((0, _mode.getMode)().log == '0') {
        return LogLevel.OFF;
      }

      // Logging is enabled for tests directly.
      if ((0, _mode.getMode)().test && this.win.ENABLE_LOG) {
        return LogLevel.FINE;
      }

      // LocalDev by default allows INFO level, unless overriden by `#log`.
      if ((0, _mode.getMode)().localDev && !(0, _mode.getMode)().log) {
        return LogLevel.INFO;
      }

      // Delegate to the specific resolver.
      return this.levelFunc_((0, _modeObject.getModeObject)());
    }

    /**
     * @param {string} tag
     * @param {string} level
     * @param {!Array} messages
     */

  }, {
    key: 'msg_',
    value: function msg_(tag, level, messages) {
      if (this.getLevel_() != LogLevel.OFF) {
        var fn = this.win.console.log;
        if (level == 'ERROR') {
          fn = this.win.console.error || fn;
        } else if (level == 'INFO') {
          fn = this.win.console.info || fn;
        } else if (level == 'WARN') {
          fn = this.win.console.warn || fn;
        }
        if ((0, _mode.getMode)().localDev) {
          messages.unshift('[' + tag + ']');
        }
        fn.apply(this.win.console, messages);
      }
    }

    /**
     * Whether the logging is enabled.
     * @return {boolean}
     */

  }, {
    key: 'isEnabled',
    value: function isEnabled() {
      return this.getLevel_() != LogLevel.OFF;
    }

    /**
     * Reports a fine-grained message.
     * @param {string} tag
     * @param {...*} var_args
     */

  }, {
    key: 'fine',
    value: function fine(tag, var_args) {
      if (this.getLevel_() >= LogLevel.FINE) {
        this.msg_(tag, 'FINE', Array.prototype.slice.call(arguments, 1));
      }
    }

    /**
     * Reports a informational message.
     * @param {string} tag
     * @param {...*} var_args
     */

  }, {
    key: 'info',
    value: function info(tag, var_args) {
      if (this.getLevel_() >= LogLevel.INFO) {
        this.msg_(tag, 'INFO', Array.prototype.slice.call(arguments, 1));
      }
    }

    /**
     * Reports a warning message.
     * @param {string} tag
     * @param {...*} var_args
     */

  }, {
    key: 'warn',
    value: function warn(tag, var_args) {
      if (this.getLevel_() >= LogLevel.WARN) {
        this.msg_(tag, 'WARN', Array.prototype.slice.call(arguments, 1));
      }
    }

    /**
     * Reports an error message. If the logging is disabled, the error is rethrown
     * asynchronously.
     * @param {string} tag
     * @param {...*} var_args
     * @return {!Error|undefined}
     * @private
     */

  }, {
    key: 'error_',
    value: function error_(tag, var_args) {
      if (this.getLevel_() >= LogLevel.ERROR) {
        this.msg_(tag, 'ERROR', Array.prototype.slice.call(arguments, 1));
      } else {
        var error = createErrorVargs.apply(null, Array.prototype.slice.call(arguments, 1));
        this.prepareError_(error);
        return error;
      }
    }

    /**
     * Reports an error message.
     * @param {string} tag
     * @param {...*} var_args
     */

  }, {
    key: 'error',
    value: function error(tag, var_args) {
      var error = this.error_.apply(this, arguments);
      if (error) {
        error.name = tag || error.name;
        // reportError is installed globally per window in the entry point.
        self.reportError(error);
      }
    }

    /**
     * Reports an error message and marks with an expected property. If the
     * logging is disabled, the error is rethrown asynchronously.
     * @param {string} unusedTag
     * @param {...*} var_args
     */

  }, {
    key: 'expectedError',
    value: function expectedError(unusedTag, var_args) {
      var error = this.error_.apply(this, arguments);
      if (error) {
        error.expected = true;
        // reportError is installed globally per window in the entry point.
        self.reportError(error);
      }
    }

    /**
     * Creates an error object.
     * @param {...*} var_args
     * @return {!Error}
     */

  }, {
    key: 'createError',
    value: function createError(var_args) {
      var error = createErrorVargs.apply(null, arguments);
      this.prepareError_(error);
      return error;
    }

    /**
     * Creates an error object with its expected property set to true.
     * @param {...*} var_args
     * @return {!Error}
     */

  }, {
    key: 'createExpectedError',
    value: function createExpectedError(var_args) {
      var error = createErrorVargs.apply(null, arguments);
      this.prepareError_(error);
      error.expected = true;
      return error;
    }

    /**
     * Throws an error if the first argument isn't trueish.
     *
     * Supports argument substitution into the message via %s placeholders.
     *
     * Throws an error object that has two extra properties:
     * - associatedElement: This is the first element provided in the var args.
     *   It can be used for improved display of error messages.
     * - messageArray: The elements of the substituted message as non-stringified
     *   elements in an array. When e.g. passed to console.error this yields
     *   native displays of things like HTML elements.
     *
     * @param {T} shouldBeTrueish The value to assert. The assert fails if it does
     *     not evaluate to true.
     * @param {string=} opt_message The assertion message
     * @param {...*} var_args Arguments substituted into %s in the message.
     * @return {T} The value of shouldBeTrueish.
     * @template T
     * eslint "google-camelcase/google-camelcase": 0
     */

  }, {
    key: 'assert',
    value: function assert(shouldBeTrueish, opt_message, var_args) {
      var firstElement = void 0;
      if (!shouldBeTrueish) {
        var message = opt_message || 'Assertion failed';
        var splitMessage = message.split('%s');
        var first = splitMessage.shift();
        var formatted = first;
        var messageArray = [];
        pushIfNonEmpty(messageArray, first);
        for (var i = 2; i < arguments.length; i++) {
          var val = arguments[i];
          if (val && val.tagName) {
            firstElement = val;
          }
          var nextConstant = splitMessage.shift();
          messageArray.push(val);
          pushIfNonEmpty(messageArray, nextConstant.trim());
          formatted += toString(val) + nextConstant;
        }
        var e = new Error(formatted);
        e.fromAssert = true;
        e.associatedElement = firstElement;
        e.messageArray = messageArray;
        this.prepareError_(e);
        // reportError is installed globally per window in the entry point.
        self.reportError(e);
        throw e;
      }
      return shouldBeTrueish;
    }

    /**
     * Throws an error if the first argument isn't an Element
     *
     * Otherwise see `assert` for usage
     *
     * @param {*} shouldBeElement
     * @param {string=} opt_message The assertion message
     * @return {!Element} The value of shouldBeTrueish.
     * @template T
     * eslint "google-camelcase/google-camelcase": 2
     */

  }, {
    key: 'assertElement',
    value: function assertElement(shouldBeElement, opt_message) {
      var shouldBeTrueish = shouldBeElement && shouldBeElement.nodeType == 1;
      this.assert(shouldBeTrueish, (opt_message || 'Element expected') + ': %s', shouldBeElement);
      return (/** @type {!Element} */shouldBeElement
      );
    }

    /**
     * Throws an error if the first argument isn't a string. The string can
     * be empty.
     *
     * For more details see `assert`.
     *
     * @param {*} shouldBeString
     * @param {string=} opt_message The assertion message
     * @return {string} The string value. Can be an empty string.
     * eslint "google-camelcase/google-camelcase": 2
     */

  }, {
    key: 'assertString',
    value: function assertString(shouldBeString, opt_message) {
      this.assert(typeof shouldBeString == 'string', (opt_message || 'String expected') + ': %s', shouldBeString);
      return (/** @type {string} */shouldBeString
      );
    }

    /**
     * Throws an error if the first argument isn't a number. The allowed values
     * include `0` and `NaN`.
     *
     * For more details see `assert`.
     *
     * @param {*} shouldBeNumber
     * @param {string=} opt_message The assertion message
     * @return {number} The number value. The allowed values include `0`
     *   and `NaN`.
     */

  }, {
    key: 'assertNumber',
    value: function assertNumber(shouldBeNumber, opt_message) {
      this.assert(typeof shouldBeNumber == 'number', (opt_message || 'Number expected') + ': %s', shouldBeNumber);
      return (/** @type {number} */shouldBeNumber
      );
    }

    /**
     * Throws an error if the first argument isn't a boolean.
     *
     * For more details see `assert`.
     *
     * @param {*} shouldBeBoolean
     * @param {string=} opt_message The assertion message
     * @return {boolean} The boolean value.
     */

  }, {
    key: 'assertBoolean',
    value: function assertBoolean(shouldBeBoolean, opt_message) {
      this.assert(!!shouldBeBoolean === shouldBeBoolean, (opt_message || 'Boolean expected') + ': %s', shouldBeBoolean);
      return (/** @type {boolean} */shouldBeBoolean
      );
    }

    /**
     * Asserts and returns the enum value. If the enum doesn't contain such a
     * value, the error is thrown.
     *
     * @param {!Object<T>} enumObj
     * @param {string} s
     * @param {string=} opt_enumName
     * @return {T}
     * @template T
     * eslint "google-camelcase/google-camelcase": 2
     */

  }, {
    key: 'assertEnumValue',
    value: function assertEnumValue(enumObj, s, opt_enumName) {
      if ((0, _types.isEnumValue)(enumObj, s)) {
        return s;
      }
      this.assert(false, 'Unknown %s value: "%s"', opt_enumName || 'enum', s);
    }

    /**
     * @param {!Error} error
     * @private
     */

  }, {
    key: 'prepareError_',
    value: function prepareError_(error) {
      error = duplicateErrorIfNecessary(error);
      if (this.suffix_) {
        if (!error.message) {
          error.message = this.suffix_;
        } else if (error.message.indexOf(this.suffix_) == -1) {
          error.message += this.suffix_;
        }
      } else if (isUserErrorMessage(error.message)) {
        error.message = error.message.replace(USER_ERROR_SENTINEL, '');
      }
    }
  }]);

  return Log;
}();

/**
 * @param {string|!Element} val
 * @return {string}
 */


function toString(val) {
  // Do check equivalent to `val instanceof Element` without cross-window bug
  if (val && val.nodeType == 1) {
    return val.tagName.toLowerCase() + (val.id ? '#' + val.id : '');
  }
  return (/** @type {string} */val
  );
}

/**
 * @param {!Array} array
 * @param {*} val
 */
function pushIfNonEmpty(array, val) {
  if (val != '') {
    array.push(val);
  }
}

/**
 * Some exceptions (DOMException, namely) have read-only message.
 * @param {!Error} error
 * @return {!Error};
 */
function duplicateErrorIfNecessary(error) {
  var message = error.message;

  var test = String(Math.random());
  error.message = test;

  if (error.message === test) {
    error.message = message;
    return error;
  }

  var e = new Error(error.message);
  // Copy all the extraneous things we attach.
  for (var prop in error) {
    e[prop] = error[prop];
  }
  // Ensure these are copied.
  e.stack = error.stack;
  return e;
}

/**
 * @param {...*} var_args
 * @return {!Error}
 * @visibleForTesting
 */
function createErrorVargs(var_args) {
  var error = null;
  var message = '';
  for (var i = 0; i < arguments.length; i++) {
    var arg = arguments[i];
    if (arg instanceof Error && !error) {
      error = duplicateErrorIfNecessary(arg);
    } else {
      if (message) {
        message += ' ';
      }
      message += arg;
    }
  }

  if (!error) {
    error = new Error(message);
  } else if (message) {
    error.message = message + ': ' + error.message;
  }
  return error;
}

/**
 * Rethrows the error without terminating the current context. This preserves
 * whether the original error designation is a user error or a dev error.
 * @param {...*} var_args
 */
function rethrowAsync(var_args) {
  var error = createErrorVargs.apply(null, arguments);
  setTimeout(function () {
    // reportError is installed globally per window in the entry point.
    self.reportError(error);
    throw error;
  });
}

/**
 * Cache for logs. We do not use a Service since the service module depends
 * on Log and closure literally can't even.
 * @type {{user: ?Log, dev: ?Log, userForEmbed: ?Log}}
 */
self.log = self.log || {
  user: null,
  dev: null,
  userForEmbed: null
};

var logs = self.log;

/**
 * Eventually holds a constructor for Log objects. Lazily initialized, so we
 * can avoid ever referencing the real constructor except in JS binaries
 * that actually want to include the implementation.
 * @type {?Function}
 */
var logConstructor = null;

/**
 * Initializes log contructor.
 */
function initLogConstructor() {
  logConstructor = Log;
  // Initialize instances for use. If a binary (an extension for example) that
  // does not call `initLogConstructor` invokes `dev()` or `user()` earlier than
  // the binary that does call `initLogConstructor` (amp.js), the extension will
  // throw an error as that extension will never be able to initialize the log
  // instances and we also don't want it to call `initLogConstructor` either
  // (since that will cause the Log implementation to be bundled into that
  // binary). So we must initialize the instances eagerly so that they are ready
  // for use (stored globally) after the main binary calls `initLogConstructor`.
  dev();
  user();
}

/**
 * Resets log contructor for testing.
 */
function resetLogConstructorForTesting() {
  logConstructor = null;
}

/**
 * Publisher level log.
 *
 * Enabled in the following conditions:
 *  1. Not disabled using `#log=0`.
 *  2. Development mode is enabled via `#development=1` or logging is explicitly
 *     enabled via `#log=D` where D >= 1.
 *  3. AMP.setLogLevel(D) is called, where D >= 1.
 *
 * @param {!Element=} opt_element
 * @return {!Log}
 */
function user(opt_element) {
  if (!logs.user) {
    logs.user = getUserLogger(USER_ERROR_SENTINEL);
  }
  if (!isFromEmbed(logs.user.win, opt_element)) {
    return logs.user;
  } else {
    if (logs.userForEmbed) {
      return logs.userForEmbed;
    }
    return logs.userForEmbed = getUserLogger(USER_ERROR_EMBED_SENTINEL);
  }
}

/**
 * Getter for user logger
 * @param {string=} suffix
 * @return {!Log}
 */
function getUserLogger(suffix) {
  if (!logConstructor) {
    throw new Error('failed to call initLogConstructor');
  }
  return new logConstructor(self, function (mode) {
    var logNum = parseInt(mode.log, 10);
    if (mode.development || logNum >= 1) {
      return LogLevel.FINE;
    }
    return LogLevel.WARN;
  }, suffix);
}

/**
 * AMP development log. Calls to `devLog().assert` and `dev.fine` are stripped
 * in the PROD binary. However, `devLog().assert` result is preserved in either
 * case.
 *
 * Enabled in the following conditions:
 *  1. Not disabled using `#log=0`.
 *  2. Logging is explicitly enabled via `#log=D`, where D >= 2.
 *  3. AMP.setLogLevel(D) is called, where D >= 2.
 *
 * @return {!Log}
 */
function dev() {
  if (logs.dev) {
    return logs.dev;
  }
  if (!logConstructor) {
    throw new Error('failed to call initLogConstructor');
  }
  return logs.dev = new logConstructor(self, function (mode) {
    var logNum = parseInt(mode.log, 10);
    if (logNum >= 3) {
      return LogLevel.FINE;
    }
    if (logNum >= 2) {
      return LogLevel.INFO;
    }
    return LogLevel.OFF;
  });
}

/**
 * @param {!Window} win
 * @param {!Element=} opt_element
 * @return {boolean} isEmbed
 */
function isFromEmbed(win, opt_element) {
  if (!opt_element) {
    return false;
  }
  return opt_element.ownerDocument.defaultView != win;
}

},{"./mode":48,"./mode-object":47,"./types":69}],47:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getModeObject = getModeObject;

var _mode = require('./mode');

/**
 * Provides info about the current app. This return value may be cached and
 * passed around as it will always be DCE'd.
 * @param {?Window=} opt_win
 * @return {!./mode.ModeDef}
 */
function getModeObject(opt_win) {
  return {
    localDev: (0, _mode.getMode)(opt_win).localDev,
    development: (0, _mode.getMode)(opt_win).development,
    filter: (0, _mode.getMode)(opt_win).filter,
    minified: (0, _mode.getMode)(opt_win).minified,
    lite: (0, _mode.getMode)(opt_win).lite,
    test: (0, _mode.getMode)(opt_win).test,
    log: (0, _mode.getMode)(opt_win).log,
    version: (0, _mode.getMode)(opt_win).version,
    rtvVersion: (0, _mode.getMode)(opt_win).rtvVersion
  };
} /**
   * Copyright 2016 The AMP HTML Authors. All Rights Reserved.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS-IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

},{"./mode":48}],48:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModeDef = undefined;
exports.getMode = getMode;
exports.getRtvVersionForTesting = getRtvVersionForTesting;
exports.resetRtvVersionForTesting = resetRtvVersionForTesting;

var _urlParseQueryString = require('./url-parse-query-string');

/**
 * @typedef {{
 *   localDev: boolean,
 *   development: boolean,
 *   filter: (string|undefined),
 *   minified: boolean,
 *   lite: boolean,
 *   test: boolean,
 *   log: (string|undefined),
 *   version: string,
 *   rtvVersion: string,
 * }}
 */
var ModeDef = exports.ModeDef = void 0;

/** @type {string} */
/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var version = '1537224222059';

/**
 * `rtvVersion` is the prefixed version we serve off of the cdn.
 * The prefix denotes canary(00) or prod(01) or an experiment version ( > 01).
 * @type {string}
 */
var rtvVersion = '';

/**
 * Provides info about the current app.
 * @param {?Window=} opt_win
 * @return {!ModeDef}
 */
function getMode(opt_win) {
  var win = opt_win || self;
  if (win.AMP_MODE) {
    return win.AMP_MODE;
  }
  return win.AMP_MODE = getMode_(win);
}

/**
 * Provides info about the current app.
 * @param {!Window} win
 * @return {!ModeDef}
 */
function getMode_(win) {
  // Magic constants that are replaced by closure compiler.
  // IS_MINIFIED is always replaced with true when closure compiler is used
  // while IS_DEV is only replaced when `gulp dist` is called without the
  // --fortesting flag.
  var IS_DEV = true;
  var IS_MINIFIED = false;

  var localDevEnabled = !!(self.AMP_CONFIG && self.AMP_CONFIG.localDev);
  var runningTests = IS_DEV && !!(win.AMP_TEST || win.__karma__);
  var isLocalDev = IS_DEV && (localDevEnabled || runningTests);
  var hashQuery = (0, _urlParseQueryString.parseQueryString_)(
  // location.originalHash is set by the viewer when it removes the fragment
  // from the URL.
  win.location.originalHash || win.location.hash);

  var searchQuery = (0, _urlParseQueryString.parseQueryString_)(win.location.search);

  if (!rtvVersion) {
    rtvVersion = getRtvVersion(win, isLocalDev);
  }

  // The `minified`, `test` and `localDev` properties are replaced
  // as boolean literals when we run `gulp dist` without the `--fortesting`
  // flags. This improved DCE on the production file we deploy as the code
  // paths for localhost/testing/development are eliminated.
  return {
    localDev: isLocalDev,
    // Triggers validation or enable pub level logging. Validation can be
    // bypassed via #validate=0.
    // Note that AMP_DEV_MODE flag is used for testing purposes.
    development: !!(hashQuery['development'] == '1' || win.AMP_DEV_MODE),
    examiner: hashQuery['development'] == '2',
    // Allows filtering validation errors by error category. For the
    // available categories, see ErrorCategory in validator/validator.proto.
    filter: hashQuery['filter'],
    // amp-geo override
    geoOverride: hashQuery['amp-geo'],
    minified: IS_MINIFIED,
    // Whether document is in an amp-lite viewer. It signal that the user
    // would prefer to use less bandwidth.
    lite: searchQuery['amp_lite'] != undefined,
    test: runningTests,
    log: hashQuery['log'],
    version: version,
    rtvVersion: rtvVersion
  };
}

/**
 * Retrieve the `rtvVersion` which will have a numeric prefix
 * denoting canary/prod/experiment (unless `isLocalDev` is true).
 *
 * @param {!Window} win
 * @param {boolean} isLocalDev
 * @return {string}
 */
function getRtvVersion(win, isLocalDev) {
  // If it's local dev then we won't actually have a full version so
  // just use the version.
  if (isLocalDev) {
    return version;
  }

  if (win.AMP_CONFIG && win.AMP_CONFIG.v) {
    return win.AMP_CONFIG.v;
  }

  // Currently `1537224222059` and thus `mode.version` contain only
  // major version. The full version however must also carry the minor version.
  // We will default to production default `01` minor version for now.
  // TODO(erwinmombay): decide whether 1537224222059 should contain
  // minor version.
  return '01' + version;
}

/**
 * @param {!Window} win
 * @param {boolean} isLocalDev
 * @return {string}
 * @visibleForTesting
 */
function getRtvVersionForTesting(win, isLocalDev) {
  return getRtvVersion(win, isLocalDev);
}

/** @visibleForTesting */
function resetRtvVersionForTesting() {
  rtvVersion = '';
}

},{"./url-parse-query-string":70}],49:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * This class helps to manage observers. Observers can be added, removed or
 * fired through and instance of this class.
 * @template TYPE
 */
var Observable = exports.Observable = function () {

  /**
   * Creates an instance of Observable.
   */
  function Observable() {
    _classCallCheck(this, Observable);

    /** @type {?Array<function(TYPE)>} */
    this.handlers_ = null;
  }

  /**
   * Adds the observer to this instance.
   * @param {function(TYPE)} handler Observer's handler.
   * @return {!UnlistenDef}
   */


  _createClass(Observable, [{
    key: "add",
    value: function add(handler) {
      var _this = this;

      if (!this.handlers_) {
        this.handlers_ = [];
      }
      this.handlers_.push(handler);
      return function () {
        _this.remove(handler);
      };
    }

    /**
     * Removes the observer from this instance.
     * @param {function(TYPE)} handler Observer's instance.
     */

  }, {
    key: "remove",
    value: function remove(handler) {
      if (!this.handlers_) {
        return;
      }
      var index = this.handlers_.indexOf(handler);
      if (index > -1) {
        this.handlers_.splice(index, 1);
      }
    }

    /**
     * Removes all observers.
     */

  }, {
    key: "removeAll",
    value: function removeAll() {
      if (!this.handlers_) {
        return;
      }
      this.handlers_.length = 0;
    }

    /**
     * Fires an event. All observers are called.
     * @param {TYPE=} opt_event
     */

  }, {
    key: "fire",
    value: function fire(opt_event) {
      if (!this.handlers_) {
        return;
      }
      var handlers = this.handlers_;
      for (var i = 0; i < handlers.length; i++) {
        var handler = handlers[i];
        handler(opt_event);
      }
    }

    /**
     * Returns number of handlers. Mostly needed for tests.
     * @return {number}
     */

  }, {
    key: "getHandlerCount",
    value: function getHandlerCount() {
      if (!this.handlers_) {
        return 0;
      }
      return this.handlers_.length;
    }
  }]);

  return Observable;
}();

},{}],50:[function(require,module,exports){
var _mode = require('./mode');

var _arrayIncludes = require('./polyfills/array-includes');

var _customElements = require('./polyfills/custom-elements');

var _domtokenlistToggle = require('./polyfills/domtokenlist-toggle');

var _documentContains = require('./polyfills/document-contains');

var _mathSign = require('./polyfills/math-sign');

var _objectAssign = require('./polyfills/object-assign');

var _promise = require('./polyfills/promise');

var _documentRegisterElement = require('document-register-element/build/document-register-element.patched');

var _experiments = require('./experiments');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                           * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
                                                                                                                                                           *
                                                                                                                                                           * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                           * you may not use this file except in compliance with the License.
                                                                                                                                                           * You may obtain a copy of the License at
                                                                                                                                                           *
                                                                                                                                                           *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                           *
                                                                                                                                                           * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                           * distributed under the License is distributed on an "AS-IS" BASIS,
                                                                                                                                                           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                           * See the License for the specific language governing permissions and
                                                                                                                                                           * limitations under the License.
                                                                                                                                                           */

if ((0, _experiments.isExperimentOn)(self, 'custom-elements-v1') || (0, _mode.getMode)().test) {
  (0, _customElements.install)(self, function () {
    function _class() {
      _classCallCheck(this, _class);
    }

    return _class;
  }());
} else {
  (0, _documentRegisterElement.installCustomElements)(self, 'auto');
}
(0, _domtokenlistToggle.install)(self);
(0, _mathSign.install)(self);
(0, _objectAssign.install)(self);
(0, _promise.install)(self);
(0, _documentContains.install)(self);
(0, _arrayIncludes.install)(self);

},{"./experiments":37,"./mode":48,"./polyfills/array-includes":51,"./polyfills/custom-elements":52,"./polyfills/document-contains":53,"./polyfills/domtokenlist-toggle":54,"./polyfills/math-sign":55,"./polyfills/object-assign":56,"./polyfills/promise":57,"document-register-element/build/document-register-element.patched":19}],51:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.install = install;
/**
 * Copyright 2016 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Returns true if the element is in the array and false otherwise.
 *
 * @param {*} value
 * @param {number=} opt_fromIndex
 * @return {boolean}
 * @this {Array}
 */
function includes(value, opt_fromIndex) {
  var fromIndex = opt_fromIndex || 0;
  var len = this.length;
  var i = fromIndex >= 0 ? fromIndex : Math.max(len + fromIndex, 0);
  for (; i < len; i++) {
    var other = this[i];
    // If value has been found OR (value is NaN AND other is NaN)
    /*eslint "no-self-compare": 0*/
    if (other === value || value !== value && other !== other) {
      return true;
    }
  }
  return false;
}

/**
* Sets the Array.contains polyfill if it does not exist.
* @param {!Window} win
*/
function install(win) {
  if (!win.Array.prototype.includes) {
    win.Object.defineProperty(Array.prototype, 'includes', {
      enumerable: false,
      configurable: true,
      writable: true,
      value: includes
    });
  }
}

},{}],52:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.install = install;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Copyright 2018 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @typedef {{
 *   promise: !Promise<undefined>,
 *   resolve: function(),
 * }}
 */
var DeferredDef = void 0;

/**
 * @typedef {!Function}
 */
var CustomElementConstructorDef = void 0;

/**
 * @typedef {{
 *  name: string,
 *  ctor: !CustomElementConstructorDef,
 * }}
 */
var CustomElementDef = void 0;

/**
 * Validates the custom element's name.
 * This intentionally ignores "valid" higher Unicode Code Points.
 * https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name
 */
var VALID_NAME = /^[a-z][a-z0-9._]*-[a-z0-9._-]*$/;
var INVALID_NAMES = ['annotation-xml', 'color-profile', 'font-face', 'font-face-src', 'font-face-uri', 'font-face-format', 'font-face-name', 'missing-glyph'];

/**
 * Asserts that the custom element name conforms to the spec.
 *
 * @param {!Function} SyntaxError
 * @param {string} name
 */
function assertValidName(SyntaxError, name) {
  if (!VALID_NAME.test(name) || INVALID_NAMES.indexOf(name) >= 0) {
    throw new SyntaxError('invalid custom element name "' + name + '"');
  }
}

/**
 * Does win have a full Custom Elements registry?
 *
 * @param {!Window} win
 * @return {boolean}
 */
function hasCustomElements(win) {
  var customElements = win.customElements;


  return !!(customElements && customElements.define && customElements.get && customElements.whenDefined);
}

/**
 * Was HTMLElement already patched for this window?
 *
 * @param {!Window} win
 * @return {boolean}
 */
function isPatched(win) {
  var tag = win.HTMLElement.toString();
  return tag.indexOf('[native code]') === -1;
}

/**
 * The public Custom Elements API.
 */

var CustomElementRegistry = function () {
  /**
   * @param {!Window} win
   * @param {!Registry} registry
   */
  function CustomElementRegistry(win, registry) {
    _classCallCheck(this, CustomElementRegistry);

    /**
     * @const @private
     */
    this.win_ = win;

    /**
     * @const @private
     */
    this.registry_ = registry;

    /**
     * @type {!Object<string, DeferredDef>}
     * @private
     * @const
     */
    this.pendingDefines_ = this.win_.Object.create(null);
  }

  /**
   * Register the custom element.
   *
   * @param {string} name
   * @param {!CustomElementConstructorDef} ctor
   * @param {!Object=} options
   */


  _createClass(CustomElementRegistry, [{
    key: 'define',
    value: function define(name, ctor, options) {
      this.registry_.define(name, ctor, options);

      // If anyone is waiting for this custom element to be defined, resolve
      // their promise.
      var pending = this.pendingDefines_;
      var deferred = pending[name];
      if (deferred) {
        deferred.resolve();
        delete pending[name];
      }
    }

    /**
     * Get the constructor of the (already defined) custom element.
     *
     * @param {string} name
     * @return {!CustomElementConstructorDef|undefined}
     */

  }, {
    key: 'get',
    value: function get(name) {
      var def = this.registry_.getByName(name);
      if (def) {
        return def.ctor;
      }
    }

    /**
     * Returns a promise that waits until the custom element is defined.
     * If the custom element is already defined, returns a resolved promise.
     *
     * @param {string} name
     * @return {!Promise<undefined>}
     */

  }, {
    key: 'whenDefined',
    value: function whenDefined(name) {
      var _win_ = this.win_,
          Promise = _win_.Promise,
          SyntaxError = _win_.SyntaxError;

      assertValidName(SyntaxError, name);

      if (this.registry_.getByName(name)) {
        return Promise.resolve();
      }

      var pending = this.pendingDefines_;
      var deferred = pending[name];
      if (deferred) {
        return deferred.promise;
      }

      var resolve = void 0;
      var promise = new /*OK*/Promise(function (res) {
        return resolve = res;
      });
      pending[name] = {
        promise: promise,
        resolve: resolve
      };

      return promise;
    }

    /**
     * Upgrade all custom elements inside root.
     *
     * @param {!Node} root
     */

  }, {
    key: 'upgrade',
    value: function upgrade(root) {
      this.registry_.upgrade(root);
    }
  }]);

  return CustomElementRegistry;
}();

/**
 * This internal APIs necessary to run the CustomElementRegistry.
 * Since Registry is never exposed externally, all methods are actually
 * available on the instance.
 */


var Registry = function () {
  /**
   * @param {!Window} win
   */
  function Registry(win) {
    _classCallCheck(this, Registry);

    /**
     * @private @const
     */
    this.win_ = win;

    /**
     * @private @const
     */
    this.doc_ = win.document;

    /**
     * @type {!Object<string, !CustomElementDef>}
     * @private
     * @const
     */
    this.definitions_ = win.Object.create(null);

    /**
     * A up-to-date DOM selector for all custom elements.
     * @type {string}
     */
    this.query_ = '';

    /**
     * The currently upgrading element.
     * @private {Element}
     */
    this.current_ = null;
  }

  /**
   * The currently-being-upgraded custom element.
   *
   * When an already created (through the DOM parsing APIs, or innerHTML)
   * custom element node is being upgraded, we can't just create a new node
   * (it's illegal in the spec). But we still need to run the custom element's
   * constructor code on the node. We avoid this conundrum by running the
   * constructor while returning this current node in the HTMLElement
   * class constructor (the base class of all custom elements).
   *
   * @return {Element}
   */


  _createClass(Registry, [{
    key: 'current',
    value: function current() {
      var current = this.current_;
      this.current_ = null;
      return current;
    }

    /**
     * Finds the custom element definition by name.
     *
     * @param {string} name
     * @return {CustomElementDef|undefined}
     */

  }, {
    key: 'getByName',
    value: function getByName(name) {
      var definition = this.definitions_[name];
      if (definition) {
        return definition;
      }
    }

    /**
     * Finds the custom element definition by constructor instance.
     *
     * @param {CustomElementConstructorDef} ctor
     * @return {CustomElementDef|undefined}
     */

  }, {
    key: 'getByConstructor',
    value: function getByConstructor(ctor) {
      var definitions = this.definitions_;

      for (var name in definitions) {
        var def = definitions[name];
        if (def.ctor === ctor) {
          return def;
        }
      }
    }

    /**
     * Registers the custom element definition, and upgrades all elements by that
     * name in the root document.
     *
     * @param {string} name
     * @param {!CustomElementConstructorDef} ctor
     * @param {!Object|undefined} options
     */

  }, {
    key: 'define',
    value: function define(name, ctor, options) {
      var _win_2 = this.win_,
          Error = _win_2.Error,
          SyntaxError = _win_2.SyntaxError;


      if (options) {
        throw new Error('Extending native custom elements is not supported');
      }

      assertValidName(SyntaxError, name);

      if (this.getByName(name) || this.getByConstructor(ctor)) {
        throw new Error('duplicate definition "' + name + '"');
      }

      // TODO(jridgewell): Record connectedCallback, disconnectedCallback,
      // adoptedCallback, attributeChangedCallback, and observedAttributes.
      // TODO(jridgewell): If attributeChangedCallback, gather observedAttributes
      this.definitions_[name] = {
        name: name,
        ctor: ctor
      };

      this.observe_(name);
      this.upgrade(this.doc_, name);
    }

    /**
     * Upgrades custom elements descendants of root (but not including root).
     *
     * When called with an opt_query, it both upgrades and connects the custom
     * elements (this is used during the custom element define algorithm).
     *
     * @param {!Node} root
     * @param {string=} opt_query
     */

  }, {
    key: 'upgrade',
    value: function upgrade(root, opt_query) {
      // Only CustomElementRegistry.p.define provides a query (the newly defined
      // custom element). In this case, we are both upgrading _and_ connecting
      // the custom elements.
      var newlyDefined = !!opt_query;
      var query = opt_query || this.query_;
      var upgradeCandidates = this.queryAll_(root, query);

      for (var i = 0; i < upgradeCandidates.length; i++) {
        var candidate = upgradeCandidates[i];
        if (newlyDefined) {
          this.connectedCallback_(candidate);
        } else {
          this.upgradeSelf(candidate);
        }
      }
    }

    /**
     * Upgrades the custom element node, if a custom element has been registered
     * by this name.
     *
     * @param {!Node} node
     */

  }, {
    key: 'upgradeSelf',
    value: function upgradeSelf(node) {
      var def = this.getByName(node.localName);
      if (!def) {
        return;
      }

      this.upgradeSelf_( /** @type {!Element} */node, def);
    }

    /**
     * @param {!Node} root
     * @param {string} query
     * @return {!Array|!NodeList}
     */

  }, {
    key: 'queryAll_',
    value: function queryAll_(root, query) {
      if (!query || !root.querySelectorAll) {
        // Nothing to do...
        return [];
      }

      return root.querySelectorAll(query);
    }

    /**
     * Upgrades the (already created via DOM parsing) custom element.
     *
     * @param {!Element} node
     * @param {!CustomElementDef} def
     */

  }, {
    key: 'upgradeSelf_',
    value: function upgradeSelf_(node, def) {
      var ctor = def.ctor;

      if (node instanceof ctor) {
        return;
      }

      // Despite how it looks, this is not a useless construction.
      // HTMLElementPolyfill (the base class of all custom elements) will return
      // the current node, allowing the custom element's subclass constructor to
      // run on the node. The node itself is already constructed, so the return
      // value is just the node.
      this.current_ = node;
      var el = new ctor();

      if (el !== node) {
        throw new this.win_.Error('Constructor illegally returned a different instance.');
      }
    }

    /**
     * Fires connectedCallback on the custom element, if it has one.
     * This also upgrades the custom element, since it may not have been
     * accessible via the root document before (a detached DOM tree).
     *
     * @param {!Node} node
     */

  }, {
    key: 'connectedCallback_',
    value: function connectedCallback_(node) {
      var def = this.getByName(node.localName);
      if (!def) {
        return;
      }
      this.upgradeSelf_( /** @type {!Element} */node, def);
      // TODO(jridgewell): It may be appropriate to adoptCallback, if the node
      // used to be in another doc.
      // TODO(jridgewell): I should be calling the definitions connectedCallback
      // with node as the context.
      if (node.connectedCallback) {
        node.connectedCallback();
      }
    }

    /**
     * Fires disconnectedCallback on the custom element, if it has one.
     *
     * @param {!Node} node
     */

  }, {
    key: 'disconnectedCallback_',
    value: function disconnectedCallback_(node) {
      // TODO(jridgewell): I should be calling the definitions connectedCallback
      // with node as the context.
      if (node.disconnectedCallback) {
        node.disconnectedCallback();
      }
    }

    /**
     * Records name as a registered custom element to observe.
     *
     * Starts the Mutation Observer if this is the first registered custom
     * element. This is deferred until the first custom element is defined to
     * speed up initial rendering of the page.
     *
     * Mutation Observers are conveniently available in every browser we care
     * about. When a node is connected to the root document, all custom
     * elements (including that node iteself) will be upgraded and call
     * connectedCallback. When a node is disconnectedCallback from the root
     * document, all custom elements will call disconnectedCallback.
     *
     * @param {string} name
     */

  }, {
    key: 'observe_',
    value: function observe_(name) {
      var _this = this;

      if (this.query_) {
        this.query_ += ',' + name;
        return;
      }

      this.query_ = name;

      // The first registered name starts the mutation observer.
      var observer = new this.win_.MutationObserver(function (records) {
        if (records) {
          _this.handleRecords_(records);
        }
      });
      observer.observe(this.doc_, {
        childList: true,
        subtree: true
      });
    }

    /**
     * Handle all the Mutation Observer's Mutation Records.
     * All added custom elements will be upgraded (if not already) and call
     * connectedCallback. All removed custom elements will call
     * disconnectedCallback.
     *
     * @param {!Array<!MutationRecord>} records
     */

  }, {
    key: 'handleRecords_',
    value: function handleRecords_(records) {
      for (var i = 0; i < records.length; i++) {
        var record = records[i];
        if (!record) {
          continue;
        }

        var addedNodes = record.addedNodes,
            removedNodes = record.removedNodes;

        for (var _i = 0; _i < addedNodes.length; _i++) {
          var node = addedNodes[_i];
          var connectedCandidates = this.queryAll_(node, this.query_);
          this.connectedCallback_(node);
          for (var _i2 = 0; _i2 < connectedCandidates.length; _i2++) {
            this.connectedCallback_(connectedCandidates[_i2]);
          }
        }

        for (var _i3 = 0; _i3 < removedNodes.length; _i3++) {
          var _node = removedNodes[_i3];
          var disconnectedCandidates = this.queryAll_(_node, this.query_);
          this.disconnectedCallback_(_node);
          for (var _i4 = 0; _i4 < disconnectedCandidates.length; _i4++) {
            this.disconnectedCallback_(disconnectedCandidates[_i4]);
          }
        }
      }
    }
  }]);

  return Registry;
}();

/**
 * Does the polyfilling.
 * @param {!Window} win
 */


function polyfill(win) {
  var HTMLElement = win.HTMLElement,
      Element = win.Element,
      Node = win.Node,
      Document = win.Document,
      Object = win.Object,
      document = win.document;
  var createElement = document.createElement,
      cloneNode = document.cloneNode,
      importNode = document.importNode;


  var registry = new Registry(win);
  var customElements = new CustomElementRegistry(win, registry);

  // Expose the custom element registry.
  // Object.getOwnPropertyDescriptor(window, 'customElements')
  // {get: ƒ, set: undefined, enumerable: true, configurable: true}
  Object.defineProperty(win, 'customElements', {
    enumerable: true,
    configurable: true,
    // writable: false,
    value: customElements
  });

  // Patch createElement to immediately upgrade the custom element.
  // This has the added benefit that it avoids the "already created but needs
  // constructor code run" chicken-and-egg problem.
  Document.prototype.createElement = function createElementPolyfill(name) {
    var def = registry.getByName(name);
    if (def) {
      return new def.ctor();
    }
    return createElement.apply(this, arguments);
  };

  // Patch importNode to immediately upgrade custom elements.
  // TODO(jridgewell): Can fire adoptedCallback for cross doc imports.
  Document.prototype.importNode = function importNodePolyfill() {
    var imported = importNode.apply(this, arguments);
    if (imported) {
      registry.upgradeSelf(imported);
      registry.upgrade(imported);
    }
    return imported;
  };

  // Patch cloneNode to immediately upgrade custom elements.
  Node.prototype.cloneNode = function cloneNodePolyfill() {
    var cloned = cloneNode.apply(this, arguments);
    registry.upgradeSelf(cloned);
    registry.upgrade(cloned);
    return cloned;
  };

  // Patch the innerHTML setter to immediately upgrade custom elements.
  // Note, this could technically fire connectedCallbacks if this node was
  // connected, but we leave that to the Mutation Observer.
  var innerHTMLDesc = Object.getOwnPropertyDescriptor(Element.prototype, 'innerHTML');
  var innerHTMLSetter = innerHTMLDesc.set;
  innerHTMLDesc.set = function (html) {
    innerHTMLSetter.call(this, html);
    registry.upgrade(this);
  };
  Object.defineProperty(Element.prototype, 'innerHTML', innerHTMLDesc);

  /**
   * You can't use the real HTMLElement constructor, because you can't subclass
   * it without using native classes. So, mock its approximation using
   * createElement.
   */
  function HTMLElementPolyfill() {
    var constructor = this.constructor;

    // If we're upgrading an already created custom element, we can't create
    // another new node (by the spec, it must be the same node).

    var el = registry.current();

    // If there's not a already created custom element, we're being invoked via
    // `new`ing the constructor.
    //
    // Technically, we could get here via createElement, but we patched that.
    // If it the custom element was registered, the patch turned it into a
    // `new` call.
    // If it was not registered, the native createElement is used. And if
    // native createElement is being used and we got to this code, we're really
    // in an infinite loop (a native createElement call just below) so we've
    // got bigger problems.
    //
    // So just take my word we got here via `new`.
    if (!el) {
      // The custom element definition is an invariant. If the custom element
      // is registered, everything works. If it's not, it throws in the member
      // property access (only defined custom elements can be directly
      // constructed via `new`).
      var def = registry.getByConstructor(constructor);
      el = createElement.call(document, def.name);
    }

    // Finally, if the node was already constructed, we need to reset it's
    // prototype to the custom element prototype. And if it wasn't already
    // constructed, we created a new node via native createElement, and we need
    // to reset it's prototype. Basically always reset the prototype.
    Object.setPrototypeOf(el, constructor.prototype);
    return el;
  }
  subClass(Object, HTMLElement, HTMLElementPolyfill);

  // Expose the polyfilled HTMLElement constructor for everyone to extend from.
  win.HTMLElement = HTMLElementPolyfill;
}

/**
 * Wraps HTMLElement in a Reflect.construct constructor, so that transpiled
 * classes can `_this = superClass.call(this)` during their construction.
 *
 * This is only used when Custom Elements v1 is already available _and_ we're
 * using transpiled classes (which use ES5 construction idioms).
 *
 * @param {!Window} win
 */
function wrapHTMLElement(win) {
  var HTMLElement = win.HTMLElement,
      Reflect = win.Reflect,
      Object = win.Object;
  /**
   */

  function HTMLElementWrapper() {
    var ctor = /** @type {function(...?):?|undefined} */
    /** @type {!HTMLElement} */this.constructor;

    // Reflect.construct allows us to construct a new HTMLElement without using
    // `new` (which will always fail because native HTMLElement is a restricted
    // constructor).
    return Reflect.construct(HTMLElement, [], ctor);
  }
  subClass(Object, HTMLElement, HTMLElementWrapper);

  // Expose the wrapped HTMLElement constructor for everyone to extend from.
  win.HTMLElement = HTMLElementWrapper;
}

/**
 * Setups up prototype inheritance
 *
 * @param {!Object} Object
 * @param {!Function} superClass
 * @param {!Function} subClass
 */
function subClass(Object, superClass, subClass) {
  // Object.getOwnPropertyDescriptor(superClass.prototype, 'constructor')
  // {value: ƒ, writable: true, enumerable: false, configurable: true}
  subClass.prototype = Object.create(superClass.prototype, {
    constructor: {
      // enumerable: false,
      configurable: true,
      writable: true,
      value: subClass
    }
  });
}

/**
 * Polyfills Custom Elements v1 API. This has 4 modes:
 *
 * 1. Custom elements v1 already supported, using native classes
 * 2. Custom elements v1 already supported, using transpiled classes
 * 3. Custom elements v1 not supported, using native classes
 * 4. Custom elements v1 not supported, using transpiled classes
 *
 * In mode 1, nothing is done. In mode 2, a minimal polyfill is used to support
 * extending the HTMLElement base class. In mode 3 and 4, a full polyfill is
 * done.
 *
 * @param {!Window} win
 * @param {!Function} ctor
 */
function install(win, ctor) {
  if (isPatched(win)) {
    return;
  }

  var install = true;
  var installWrapper = false;

  if (hasCustomElements(win)) {
    // If ctor is constructable without new, it's a function. That means it was
    // compiled down, and we need to do the minimal polyfill because all you
    // cannot extend HTMLElement without native classes.
    try {
      var _Object = win.Object,
          _Reflect = win.Reflect;

      // "Construct" ctor using ES5 idioms

      var instance = _Object.create(ctor.prototype);
      ctor.call(instance);

      // If that succeeded, we're in a transpiled environment
      // Let's find out if we can wrap HTMLElement and avoid a full patch.
      installWrapper = !!(_Reflect && _Reflect.construct);
    } catch (e) {

      // The ctor threw when we constructed is via ES5, so it's a real class.
      // We're ok to not install the polyfill.
      install = false;
    }
  }

  if (installWrapper) {
    wrapHTMLElement(win);
  } else if (install) {
    polyfill(win);
  }
}

},{}],53:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.install = install;
/**
 * Copyright 2016 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Polyfill for `document.contains()` method. Notice that according to spec
 * `document.contains` is inclusionary.
 * See https://developer.mozilla.org/en-US/docs/Web/API/Node/contains
 * @param {?Node} node
 * @return {boolean}
 * @this {Node}
 */
function documentContainsPolyfill(node) {
  // Per spec, "contains" method is inclusionary
  // i.e. `node.contains(node) == true`. However, we still need to test
  // equality to the document itself.
  return node == this || this.documentElement.contains(node);
}

/**
 * Polyfills `HTMLDocument.contains` API.
 * @param {!Window} win
 */
function install(win) {
  // HTMLDocument is undefined in Internet Explorer 10, but it has Document,
  // so we use that as a fallback.
  var documentClass = win.HTMLDocument || win.Document;
  if (!documentClass.prototype.contains) {
    win.Object.defineProperty(documentClass.prototype, 'contains', {
      enumerable: false,
      configurable: true,
      writable: true,
      value: documentContainsPolyfill
    });
  }
}

},{}],54:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.install = install;
/**
 * Copyright 2016 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Polyfill for `DOMTokenList.prototype.toggle(token, opt_force)` method. This
 * is specially important because IE does not support `opt_force` attribute. See
 * https://goo.gl/hgKNYY for details.
 * @param {string} token
 * @param {boolean=} opt_force
 * @this {DOMTokenList}
 * @return {boolean}
 */
function domTokenListTogglePolyfill(token, opt_force) {
  var remove = opt_force === undefined ? this.contains(token) : !opt_force;
  if (remove) {
    this.remove(token);
    return false;
  } else {
    this.add(token);
    return true;
  }
}

/**
 * Polyfills `DOMTokenList.prototype.toggle` API in IE.
 * @param {!Window} win
 */
function install(win) {
  if (isIe(win) && win.DOMTokenList) {
    win.Object.defineProperty(win.DOMTokenList.prototype, 'toggle', {
      enumerable: false,
      configurable: true,
      writable: true,
      value: domTokenListTogglePolyfill
    });
  }
}

/**
 * Whether the current browser is a IE browser.
 * @param {!Window} win
 * @return {boolean}
 */
function isIe(win) {
  return (/Trident|MSIE|IEMobile/i.test(win.navigator.userAgent)
  );
}

},{}],55:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sign = sign;
exports.install = install;
/**
 * Copyright 2016 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Parses the number x and returns its sign. For positive x returns 1, for
 * negative, -1. For 0 and -0, returns 0 and -0 respectively. For any number
 * that parses to NaN, returns NaN.
 *
 * @param {number} x
 * @return {number}
 */
function sign(x) {
  x = Number(x);

  // If x is 0, -0, or NaN, return it.
  if (!x) {
    return x;
  }

  return x > 0 ? 1 : -1;
}

/**
 * Sets the Math.sign polyfill if it does not exist.
 * @param {!Window} win
 */
function install(win) {
  if (!win.Math.sign) {
    win.Object.defineProperty(win.Math, 'sign', {
      enumerable: false,
      configurable: true,
      writable: true,
      value: sign
    });
  }
}

},{}],56:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assign = assign;
exports.install = install;
/**
 * Copyright 2016 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * Copies values of all enumerable own properties from one or more source
 * objects (provided as extended arguments to the function) to a target object.
 *
 * @param {!Object} target
 * @param {...Object} var_args
 * @return {!Object}
 */

function assign(target, var_args) {
  if (target == null) {
    throw new TypeError('Cannot convert undefined or null to object');
  }

  var output = Object(target);
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    if (source != null) {
      for (var key in source) {
        if (hasOwnProperty.call(source, key)) {
          output[key] = source[key];
        }
      }
    }
  }
  return output;
}

/**
 * Sets the Object.assign polyfill if it does not exist.
 * @param {!Window} win
 */
function install(win) {
  if (!win.Object.assign) {
    win.Object.defineProperty(win.Object, 'assign', {
      enumerable: false,
      configurable: true,
      writable: true,
      value: assign
    });
  }
}

},{}],57:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.install = install;

var _promise = require('promise-pjs/promise');

var Promise = _interopRequireWildcard(_promise);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Sets the Promise polyfill if it does not exist.
 * @param {!Window} win
 */
function install(win) {
  if (!win.Promise) {
    win.Promise = /** @type {?} */Promise;
    // In babel the * export is an Object with a default property.
    // In closure compiler it is the Promise function itself.
    if (Promise.default) {
      win.Promise = Promise.default;
    }
    // We copy the individual static methods, because closure
    // compiler flattens the polyfill namespace.
    win.Promise.resolve = Promise.resolve;
    win.Promise.reject = Promise.reject;
    win.Promise.all = Promise.all;
    win.Promise.race = Promise.race;
  }
} /**
   * Copyright 2016 The AMP HTML Authors. All Rights Reserved.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS-IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

},{"promise-pjs/promise":20}],58:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.waitForServices = waitForServices;
exports.hasRenderDelayingServices = hasRenderDelayingServices;
exports.includedServices = includedServices;

var _services = require('./services');

var _log = require('./log');

var _service = require('./service');

/**
 * A map of services that delay rendering. The key is the name of the service
 * and the value is a DOM query which is used to check if the service is needed
 * in the current document.
 * Do not add a service unless absolutely necessary.
 *
 * \   \  /  \  /   / /   \     |   _  \     |  \ |  | |  | |  \ |  |  / _____|
 *  \   \/    \/   / /  ^  \    |  |_)  |    |   \|  | |  | |   \|  | |  |  __
 *   \            / /  /_\  \   |      /     |  . `  | |  | |  . `  | |  | |_ |
 *    \    /\    / /  _____  \  |  |\  \----.|  |\   | |  | |  |\   | |  |__| |
 *     \__/  \__/ /__/     \__\ | _| `._____||__| \__| |__| |__| \__|  \______|
 *
 * The equivalent of this list is used for server-side rendering (SSR) and any
 * changes made to it must be made in coordination with caches that implement
 * SSR. For more information on SSR see bit.ly/amp-ssr.
 *
 * @const {!Object<string, string>}
 */
var SERVICES = {
  'amp-dynamic-css-classes': '[custom-element=amp-dynamic-css-classes]',
  'variant': 'amp-experiment',
  'amp-story': 'amp-story[standalone]'
};

/**
 * Maximum milliseconds to wait for all extensions to load before erroring.
 * @const
 */
/**
 * Copyright 2016 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var LOAD_TIMEOUT = 3000;

/**
 * Detects any render delaying services that are required on the page, and
 * returns a promise with a timeout.
 * @param {!Window} win
 * @return {!Promise<!Array<*>>} resolves to an Array that has the same length
 *     as the detected render delaying services
 */
function waitForServices(win) {
  var promises = includedServices(win).map(function (service) {
    return _services.Services.timerFor(win).timeoutPromise(LOAD_TIMEOUT, (0, _service.getServicePromise)(win, service), 'Render timeout waiting for service ' + service + ' to be ready.');
  });
  return Promise.all(promises);
}

/**
 * Returns true if the page has a render delaying service.
 * @param {!Window} win
 * @return {boolean}
 */
function hasRenderDelayingServices(win) {
  return includedServices(win).length > 0;
}

/**
 * Detects which, if any, render-delaying extensions are included on the page.
 * @param {!Window} win
 * @return {!Array<string>}
 */
function includedServices(win) {
  /** @const {!Document} */
  var doc = win.document;
  (0, _log.dev)().assert(doc.body);

  return Object.keys(SERVICES).filter(function (service) {
    return doc.querySelector(SERVICES[service]);
  });
}

},{"./log":46,"./service":59,"./services":64}],59:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmbeddableService = exports.Disposable = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * distributed under the License is distributed on an "AS-IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

/**
 * @fileoverview Registration and getter functions for AMP services.
 *
 * Invariant: Service getters never return null for registered services.
 */

// src/polyfills.js must be the first import.
// eslint-disable-line sort-imports-es6-autofix/sort-imports-es6

exports.getExistingServiceInEmbedScope = getExistingServiceInEmbedScope;
exports.getExistingServiceForDocInEmbedScope = getExistingServiceForDocInEmbedScope;
exports.installServiceInEmbedScope = installServiceInEmbedScope;
exports.registerServiceBuilder = registerServiceBuilder;
exports.registerServiceBuilderForDoc = registerServiceBuilderForDoc;
exports.getService = getService;
exports.getServicePromise = getServicePromise;
exports.getExistingServiceOrNull = getExistingServiceOrNull;
exports.getServicePromiseOrNull = getServicePromiseOrNull;
exports.getServiceForDoc = getServiceForDoc;
exports.getServiceForDocDeprecated = getServiceForDocDeprecated;
exports.getServicePromiseForDoc = getServicePromiseForDoc;
exports.getServicePromiseOrNullForDoc = getServicePromiseOrNullForDoc;
exports.setParentWindow = setParentWindow;
exports.getParentWindow = getParentWindow;
exports.getTopWindow = getTopWindow;
exports.getParentWindowFrameElement = getParentWindowFrameElement;
exports.getAmpdoc = getAmpdoc;
exports.isDisposable = isDisposable;
exports.assertDisposable = assertDisposable;
exports.disposeServicesForDoc = disposeServicesForDoc;
exports.disposeServicesForEmbed = disposeServicesForEmbed;
exports.isEmbeddable = isEmbeddable;
exports.adoptServiceForEmbed = adoptServiceForEmbed;
exports.adoptServiceForEmbedIfEmbeddable = adoptServiceForEmbedIfEmbeddable;
exports.resetServiceForTesting = resetServiceForTesting;

require('./polyfills');

var _promise = require('./utils/promise');

var _log = require('./log');

var _types = require('./types');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Holds info about a service.
 * - obj: Actual service implementation when available.
 * - promise: Promise for the obj.
 * - resolve: Function to resolve the promise with the object.
 * - context: Argument for ctor, either a window or an ampdoc.
 * - ctor: Function that constructs and returns the service.
 * @typedef {{
 *   obj: (?Object),
 *   promise: (?Promise),
 *   resolve: (?function(!Object)),
 *   context: (?Window|?./service/ampdoc-impl.AmpDoc),
 *   ctor: (?function(new:Object, !Window)|
 *          ?function(new:Object, !./service/ampdoc-impl.AmpDoc)),
 * }}
 */
var ServiceHolderDef = void 0;

/**
 * This interface provides a `dispose` method that will be called by
 * runtime when a service needs to be disposed of.
 * @interface
 */

var Disposable = exports.Disposable = function () {
  function Disposable() {
    _classCallCheck(this, Disposable);
  }

  _createClass(Disposable, [{
    key: 'dispose',


    /**
     * Instructs the service to release any resources it might be holding. Can
     * be called only once in the lifecycle of a service.
     */
    value: function dispose() {}
  }]);

  return Disposable;
}();

/**
 * This interface provides a `adoptEmbedWindow` method that will be called by
 * runtime for a new embed window.
 * @interface
 */


var EmbeddableService = exports.EmbeddableService = function () {
  function EmbeddableService() {
    _classCallCheck(this, EmbeddableService);
  }

  _createClass(EmbeddableService, [{
    key: 'adoptEmbedWindow',


    /**
     * Instructs the service to adopt the embed window and add any necessary
     * listeners and resources.
     * @param {!Window} unusedEmbedWin
     */
    value: function adoptEmbedWindow(unusedEmbedWin) {}
  }]);

  return EmbeddableService;
}();

/**
 * Returns a service with the given id. Assumes that it has been registered
 * already.
 * @param {!Window} win
 * @param {string} id
 * @param {boolean=} opt_fallbackToTopWin
 * @return {Object} The service.
 */


function getExistingServiceInEmbedScope(win, id, opt_fallbackToTopWin) {
  // First, try to resolve via local (embed) window.
  var local = getLocalExistingServiceForEmbedWinOrNull(win, id);
  if (local) {
    return local;
  }
  if (opt_fallbackToTopWin) {
    return getService(win, id);
  }
  return null;
}

/**
 * Returns a service with the given id. Assumes that it has been constructed
 * already.
 *
 * Unlike most service getters, passing `Node` is necessary for some FIE-scope
 * services since sometimes we only have the FIE Document for context.
 *
 * @param {!Node|!./service/ampdoc-impl.AmpDoc} nodeOrDoc
 * @param {string} id
 * @param {boolean=} opt_fallbackToTopWin
 * @return {Object} The service.
 */
function getExistingServiceForDocInEmbedScope(nodeOrDoc, id, opt_fallbackToTopWin) {
  // First, try to resolve via local (embed) window.
  if (nodeOrDoc.nodeType) {
    // If a node is passed, try to resolve via this node.
    var win = (0, _types.toWin)( /** @type {!Document} */(nodeOrDoc.ownerDocument || nodeOrDoc).defaultView);
    var local = getLocalExistingServiceForEmbedWinOrNull(win, id);
    if (local) {
      return local;
    }
  }
  // If an ampdoc is passed or fallback is allowed, continue resolving.
  if (!nodeOrDoc.nodeType || opt_fallbackToTopWin) {
    return getServiceForDocDeprecated(nodeOrDoc, id);
  }
  return null;
}

/**
 * Installs a service override on amp-doc level.
 * @param {!Window} embedWin
 * @param {string} id
 * @param {!Object} service The service.
 */
function installServiceInEmbedScope(embedWin, id, service) {
  var topWin = getTopWindow(embedWin);
  (0, _log.dev)().assert(embedWin != topWin, 'Service override can only be installed in embed window: %s', id);
  (0, _log.dev)().assert(!getLocalExistingServiceForEmbedWinOrNull(embedWin, id), 'Service override has already been installed: %s', id);
  registerServiceInternal(embedWin, embedWin, id, function () {
    return service;
  });
  getServiceInternal(embedWin, id); // Force service to build.
}

/**
 * @param {!Window} embedWin
 * @param {string} id
 * @return {?Object}
 */
function getLocalExistingServiceForEmbedWinOrNull(embedWin, id) {
  // Note that this method currently only resolves against the given window.
  // It does not try to go all the way up the parent window chain. We can change
  // this in the future, but for now this gives us a better performance.
  var topWin = getTopWindow(embedWin);
  if (embedWin != topWin && isServiceRegistered(embedWin, id)) {
    return getServiceInternal(embedWin, id);
  } else {
    return null;
  }
}

/**
 * Registers a service given a class to be used as implementation.
 * @param {!Window} win
 * @param {string} id of the service.
 * @param {function(new:Object, !Window)} constructor
 * @param {boolean=} opt_instantiate Whether to immediately create the service
 */
function registerServiceBuilder(win, id, constructor, opt_instantiate) {
  win = getTopWindow(win);
  registerServiceInternal(win, win, id, constructor);
  if (opt_instantiate) {
    getServiceInternal(win, id);
  }
}

/**
 * Returns a service and registers it given a class to be used as
 * implementation.
 * @param {!Node|!./service/ampdoc-impl.AmpDoc} nodeOrDoc
 * @param {string} id of the service.
 * @param {function(new:Object, !./service/ampdoc-impl.AmpDoc)} constructor
 * @param {boolean=} opt_instantiate Whether to immediately create the service
 */
function registerServiceBuilderForDoc(nodeOrDoc, id, constructor, opt_instantiate) {
  var ampdoc = getAmpdoc(nodeOrDoc);
  var holder = getAmpdocServiceHolder(ampdoc);
  registerServiceInternal(holder, ampdoc, id, constructor);
  if (opt_instantiate) {
    getServiceInternal(holder, id);
  }
}

/**
 * Returns a service for the given id and window (a per-window singleton). Users
 * should typically wrap this as a special purpose function (e.g.
 * `Services.vsyncFor(win)`) for type safety and because the factory should not
 * be passed around.
 * @param {!Window} win
 * @param {string} id of the service.
 * @template T
 * @return {T}
 */
function getService(win, id) {
  win = getTopWindow(win);
  return getServiceInternal(win, id);
}

/**
 * Returns a promise for a service for the given id and window. Also expects an
 * element that has the actual implementation. The promise resolves when the
 * implementation loaded. Users should typically wrap this as a special purpose
 * function (e.g. `Services.vsyncFor(win)`) for type safety and because the
 * factory should not be passed around.
 * @param {!Window} win
 * @param {string} id of the service.
 * @return {!Promise<!Object>}
 */
function getServicePromise(win, id) {
  return getServicePromiseInternal(win, id);
}

/**
 * Returns a service or null with the given id.
 * @param {!Window} win
 * @param {string} id
 * @return {?Object} The service.
 */
function getExistingServiceOrNull(win, id) {
  win = getTopWindow(win);
  if (isServiceRegistered(win, id)) {
    return getServiceInternal(win, id);
  } else {
    return null;
  }
}

/**
 * Like getServicePromise but returns null if the service was never registered.
 * @param {!Window} win
 * @param {string} id
 * @return {?Promise<!Object>}
 */
function getServicePromiseOrNull(win, id) {
  return getServicePromiseOrNullInternal(win, id);
}

/**
 * Returns a service for the given id and ampdoc (a per-ampdoc singleton).
 * Expects service `id` to be registered.
 * @param {!Element|!./service/ampdoc-impl.AmpDoc} elementOrAmpDoc
 * @param {string} id
 * @return {T}
 * @template T
 */
function getServiceForDoc(elementOrAmpDoc, id) {
  var ampdoc = getAmpdoc(elementOrAmpDoc);
  var holder = getAmpdocServiceHolder(ampdoc);
  return getServiceInternal(holder, id);
}

/**
 * tl;dr -- Use getServiceForDoc() instead of this.
 *
 * Privileged variant of getServiceForDoc() that accepts non-element params,
 * e.g. window.document. This is currently necessary for doc-level services
 * used in startup, e.g. Chunks. Eventually we want to remove this function
 * and have callers find the appropriate AmpDoc and use getServiceForDoc().
 *
 * @param {!Node|!./service/ampdoc-impl.AmpDoc} nodeOrDoc
 * @param {string} id
 * @return {T}
 * @template T
 */
function getServiceForDocDeprecated(nodeOrDoc, id) {
  var ampdoc = getAmpdoc(nodeOrDoc);
  var holder = getAmpdocServiceHolder(ampdoc);
  return getServiceInternal(holder, id);
}

/**
 * Returns a promise for a service for the given id and ampdoc. Also expects
 * a service that has the actual implementation. The promise resolves when
 * the implementation loaded.
 * @param {!Element|!./service/ampdoc-impl.AmpDoc} elementOrAmpDoc
 * @param {string} id
 * @return {!Promise<!Object>}
 */
function getServicePromiseForDoc(elementOrAmpDoc, id) {
  return getServicePromiseInternal(getAmpdocServiceHolder(elementOrAmpDoc), id);
}

/**
 * Like getServicePromiseForDoc but returns null if the service was never
 * registered for this ampdoc.
 * @param {!Element|!./service/ampdoc-impl.AmpDoc} elementOrAmpDoc
 * @param {string} id
 * @return {?Promise<!Object>}
 */
function getServicePromiseOrNullForDoc(elementOrAmpDoc, id) {
  return getServicePromiseOrNullInternal(getAmpdocServiceHolder(elementOrAmpDoc), id);
}

/**
 * Set the parent and top windows on a child window (friendly iframe).
 * @param {!Window} win
 * @param {!Window} parentWin
 */
function setParentWindow(win, parentWin) {
  win.__AMP_PARENT = parentWin;
  win.__AMP_TOP = getTopWindow(parentWin);
}

/**
 * Returns the parent window for a child window (friendly iframe).
 * @param {!Window} win
 * @return {!Window}
 */
function getParentWindow(win) {
  return win.__AMP_PARENT || win;
}

/**
 * Returns the top window where AMP Runtime is installed for a child window
 * (friendly iframe).
 * @param {!Window} win
 * @return {!Window}
 */
function getTopWindow(win) {
  return win.__AMP_TOP || win;
}

/**
 * Returns the parent "friendly" iframe if the node belongs to a child window.
 * @param {!Node} node
 * @param {!Window} topWin
 * @return {?HTMLIFrameElement}
 */
function getParentWindowFrameElement(node, topWin) {
  var childWin = (node.ownerDocument || node).defaultView;
  if (childWin && childWin != topWin && getTopWindow(childWin) == topWin) {
    try {
      return (/** @type {?HTMLIFrameElement} */childWin.frameElement
      );
    } catch (e) {
      // Ignore the error.
    }
  }
  return null;
}

/**
 * @param {!Node|!./service/ampdoc-impl.AmpDoc} nodeOrDoc
 * @return {!./service/ampdoc-impl.AmpDoc}
 */
function getAmpdoc(nodeOrDoc) {
  if (nodeOrDoc.nodeType) {
    var win = (0, _types.toWin)( /** @type {!Document} */(nodeOrDoc.ownerDocument || nodeOrDoc).defaultView);
    return getAmpdocService(win).getAmpDoc( /** @type {!Node} */nodeOrDoc);
  }
  return (/** @type {!./service/ampdoc-impl.AmpDoc} */nodeOrDoc
  );
}

/**
 * @param {!Node|!./service/ampdoc-impl.AmpDoc} nodeOrDoc
 * @return {!./service/ampdoc-impl.AmpDoc|!Window}
 */
function getAmpdocServiceHolder(nodeOrDoc) {
  var ampdoc = getAmpdoc(nodeOrDoc);
  return ampdoc.isSingleDoc() ? ampdoc.win : ampdoc;
}

/**
 * This is essentially a duplicate of `ampdoc.js`, but necessary to avoid
 * circular dependencies.
 * @param {!Window} win
 * @return {!./service/ampdoc-impl.AmpDocService}
 */
function getAmpdocService(win) {
  return (/** @type {!./service/ampdoc-impl.AmpDocService} */getService(win, 'ampdoc')
  );
}

/**
 * Get service `id` from `holder`. Assumes the service
 * has already been registered.
 * @param {!Object} holder Object holding the service instance.
 * @param {string} id of the service.
 * @return {Object}
 * @template T
 */
function getServiceInternal(holder, id) {
  (0, _log.dev)().assert(isServiceRegistered(holder, id), 'Expected service ' + id + ' to be registered');
  var services = getServices(holder);
  var s = services[id];
  if (!s.obj) {
    (0, _log.dev)().assert(s.ctor, 'Service ' + id + ' registered without ctor nor impl.');
    (0, _log.dev)().assert(s.context, 'Service ' + id + ' registered without context.');
    s.obj = new s.ctor(s.context);
    (0, _log.dev)().assert(s.obj, 'Service ' + id + ' constructed to null.');
    s.ctor = null;
    s.context = null;
    // The service may have been requested already, in which case we have a
    // pending promise we need to fulfill.
    if (s.resolve) {
      s.resolve(s.obj);
    }
  }
  return s.obj;
}

/**
 * @param {!Object} holder Object holding the service instance.
 * @param {!Window|!./service/ampdoc-impl.AmpDoc} context Win or AmpDoc.
 * @param {string} id of the service.
 * @param {?function(new:Object, !Window)|?function(new:Object, !./service/ampdoc-impl.AmpDoc)} ctor Constructor function to new the service. Called with context.
 */
function registerServiceInternal(holder, context, id, ctor) {
  var services = getServices(holder);
  var s = services[id];

  if (!s) {
    s = services[id] = {
      obj: null,
      promise: null,
      resolve: null,
      context: null,
      ctor: null
    };
  }

  if (s.ctor || s.obj) {
    // Service already registered.
    return;
  }

  s.ctor = ctor;
  s.context = context;

  // The service may have been requested already, in which case there is a
  // pending promise that needs to fulfilled.
  if (s.resolve) {
    // getServiceInternal will resolve the promise.
    getServiceInternal(holder, id);
  }
}

/**
 * @param {!Object} holder
 * @param {string} id of the service.
 * @return {!Promise<!Object>}
 */
function getServicePromiseInternal(holder, id) {
  var cached = getServicePromiseOrNullInternal(holder, id);
  if (cached) {
    return cached;
  }
  // Service is not registered.

  // TODO(@cramforce): Add a check that if the element is eventually registered
  // that the service is actually provided and this promise resolves.
  var deferred = new _promise.Deferred();
  var promise = deferred.promise,
      resolve = deferred.resolve;


  var services = getServices(holder);
  services[id] = {
    obj: null,
    promise: promise,
    resolve: resolve,
    context: null,
    ctor: null
  };
  return promise;
}

/**
 * Returns a promise for service `id` if the service has been registered
 * on `holder`.
 * @param {!Object} holder
 * @param {string} id of the service.
 * @return {?Promise<!Object>}
 */
function getServicePromiseOrNullInternal(holder, id) {
  var services = getServices(holder);
  var s = services[id];
  if (s) {
    if (s.promise) {
      return s.promise;
    } else {
      // Instantiate service if not already instantiated.
      getServiceInternal(holder, id);
      return s.promise = Promise.resolve( /** @type {!Object} */s.obj);
    }
  }
  return null;
}

/**
 * Returns the object that holds the services registered in a holder.
 * @param {!Object} holder
 * @return {!Object<string,!ServiceHolderDef>}
 */
function getServices(holder) {
  var services = holder.services;

  if (!services) {
    services = holder.services = {};
  }
  return services;
}

/**
 * Whether the specified service implements `Disposable` interface.
 * @param {!Object} service
 * @return {boolean}
 */
function isDisposable(service) {
  return typeof service.dispose == 'function';
}

/**
 * Asserts that the specified service implements `Disposable` interface and
 * typecasts the instance to `Disposable`.
 * @param {!Object} service
 * @return {!Disposable}
 */
function assertDisposable(service) {
  (0, _log.dev)().assert(isDisposable(service), 'required to implement Disposable');
  return (/** @type {!Disposable} */service
  );
}

/**
 * Disposes all disposable (implements `Disposable` interface) services in
 * ampdoc scope.
 * @param {!./service/ampdoc-impl.AmpDoc} ampdoc
 */
function disposeServicesForDoc(ampdoc) {
  disposeServicesInternal(ampdoc);
}

/**
 * Disposes all disposable (implements `Disposable` interface) services in
 * embed scope.
 * @param {!Window} embedWin
 */
function disposeServicesForEmbed(embedWin) {
  disposeServicesInternal(embedWin);
}

/**
 * @param {!Object} holder Object holding the service instances.
 */
function disposeServicesInternal(holder) {
  // TODO(dvoytenko): Consider marking holder as destroyed for later-arriving
  // service to be canceled automatically.
  var services = getServices(holder);

  var _loop = function _loop(id) {
    if (!Object.prototype.hasOwnProperty.call(services, id)) {
      return 'continue';
    }
    var serviceHolder = services[id];
    if (serviceHolder.obj) {
      disposeServiceInternal(id, serviceHolder.obj);
    } else if (serviceHolder.promise) {
      serviceHolder.promise.then(function (instance) {
        return disposeServiceInternal(id, instance);
      });
    }
  };

  for (var id in services) {
    var _ret = _loop(id);

    if (_ret === 'continue') continue;
  }
}

/**
 * @param {string} id
 * @param {!Object} service
 */
function disposeServiceInternal(id, service) {
  if (!isDisposable(service)) {
    return;
  }
  try {
    assertDisposable(service).dispose();
  } catch (e) {
    // Ensure that a failure to dispose a service does not disrupt other
    // services.
    (0, _log.dev)().error('SERVICE', 'failed to dispose service', id, e);
  }
}

/**
 * Whether the specified service implements `EmbeddableService` interface.
 * @param {!Object} service
 * @return {boolean}
 */
function isEmbeddable(service) {
  return typeof service.adoptEmbedWindow == 'function';
}

/**
 * Adopts an embeddable (implements `EmbeddableService` interface) service
 * in embed scope.
 * @param {!Window} embedWin
 * @param {string} serviceId
 */
function adoptServiceForEmbed(embedWin, serviceId) {
  var adopted = adoptServiceForEmbedIfEmbeddable(embedWin, serviceId);
  (0, _log.dev)().assert(adopted, 'Service ' + serviceId + ' not found on parent ' + 'or doesn\'t implement EmbeddableService.');
}

/**
 * Adopts an embeddable (implements `EmbeddableService` interface) service
 * in embed scope.
 * @param {!Window} embedWin
 * @param {string} serviceId
 * @return {boolean}
 */
function adoptServiceForEmbedIfEmbeddable(embedWin, serviceId) {
  var frameElement = /** @type {!Node} */(0, _log.dev)().assert(embedWin.frameElement, 'frameElement not found for embed');
  var ampdoc = getAmpdoc(frameElement);
  var holder = getAmpdocServiceHolder(ampdoc);
  if (!isServiceRegistered(holder, serviceId)) {
    return false;
  }
  var service = getServiceForDocDeprecated(frameElement, serviceId);
  if (!isEmbeddable(service)) {
    return false;
  }
  service.adoptEmbedWindow(embedWin);
  return true;
}

/**
 * Resets a single service, so it gets recreated on next getService invocation.
 * @param {!Object} holder
 * @param {string} id of the service.
 */
function resetServiceForTesting(holder, id) {
  if (holder.services) {
    holder.services[id] = null;
  }
}

/**
 * @param {!Object} holder Object holding the service instance.
 * @param {string} id of the service.
 * @return {boolean}
 */
function isServiceRegistered(holder, id) {
  var service = holder.services && holder.services[id];
  // All registered services must have an implementation or a constructor.
  return !!(service && (service.ctor || service.obj));
}

},{"./log":46,"./polyfills":50,"./types":69,"./utils/promise":79}],60:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Navigation = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * distributed under the License is distributed on an "AS-IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

exports.installGlobalNavigationHandlerForDoc = installGlobalNavigationHandlerForDoc;
exports.maybeExpandUrlParamsForTesting = maybeExpandUrlParamsForTesting;

var _services = require('../services');

var _dom = require('../dom');

var _log = require('../log');

var _impression = require('../impression');

var _mode = require('../mode');

var _service = require('../service');

var _types = require('../types');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TAG = 'navigation';
/** @private @const {string} */
var EVENT_TYPE_CLICK = 'click';
/** @private @const {string} */
var EVENT_TYPE_CONTEXT_MENU = 'contextmenu';

/** @private @const {string} */
var ORIG_HREF_ATTRIBUTE = 'data-a4a-orig-href';

/**
 * Install navigation service for ampdoc, which handles navigations from anchor
 * tag clicks and other runtime features like AMP.navigateTo().
 *
 * Immediately instantiates the service.
 *
 * @param {!./ampdoc-impl.AmpDoc} ampdoc
 */
function installGlobalNavigationHandlerForDoc(ampdoc) {
  (0, _service.registerServiceBuilderForDoc)(ampdoc, TAG, Navigation,
  /* opt_instantiate */true);
}

/**
 * @param {!./ampdoc-impl.AmpDoc} ampdoc
 * @param {!Event} e
 * @visibleForTesting
 */
function maybeExpandUrlParamsForTesting(ampdoc, e) {
  maybeExpandUrlParams(ampdoc, e);
}

/**
 * Intercept any click on the current document and prevent any
 * linking to an identifier from pushing into the history stack.
 * @implements {../service.EmbeddableService}
 * @visibleForTesting
 */

var Navigation = exports.Navigation = function () {
  /**
   * @param {!./ampdoc-impl.AmpDoc} ampdoc
   * @param {(!Document|!ShadowRoot)=} opt_rootNode
   */
  function Navigation(ampdoc, opt_rootNode) {
    var _this = this;

    _classCallCheck(this, Navigation);

    /** @const {!./ampdoc-impl.AmpDoc} */
    this.ampdoc = ampdoc;

    /** @private @const {!Document|!ShadowRoot} */
    this.rootNode_ = opt_rootNode || ampdoc.getRootNode();

    /** @private @const {!./viewport/viewport-impl.Viewport} */
    this.viewport_ = _services.Services.viewportForDoc(this.ampdoc);

    /** @private @const {!./viewer-impl.Viewer} */
    this.viewer_ = _services.Services.viewerForDoc(this.ampdoc);

    /** @private @const {!./history-impl.History} */
    this.history_ = _services.Services.historyForDoc(this.ampdoc);

    var platform = _services.Services.platformFor(this.ampdoc.win);
    /** @private @const {boolean} */
    this.isIosSafari_ = platform.isIos() && platform.isSafari();

    /** @private @const {boolean} */
    this.isIframed_ = (0, _dom.isIframed)(this.ampdoc.win) && this.viewer_.isOvertakeHistory();

    /** @private @const {boolean} */
    this.isEmbed_ = this.rootNode_ != this.ampdoc.getRootNode();

    /** @private @const {boolean} */
    this.isInABox_ = (0, _mode.getMode)(this.ampdoc.win).runtime == 'inabox';

    /** @private @const {!function(!Event)|undefined} */
    this.boundHandle_ = this.handle_.bind(this);
    this.rootNode_.addEventListener(EVENT_TYPE_CLICK, this.boundHandle_);
    this.rootNode_.addEventListener(EVENT_TYPE_CONTEXT_MENU, this.boundHandle_);
    /** @private {boolean} */
    this.appendExtraParams_ = false;
    (0, _impression.shouldAppendExtraParams)(this.ampdoc).then(function (res) {
      _this.appendExtraParams_ = res;
    });

    /**
     * Lazy-generated list of A2A-enabled navigation features.
     * @private {?Array<string>}
     */
    this.a2aFeatures_ = null;
  }

  /**
   * Registers a handler that performs URL replacement on the href
   * of an ad click.
   * @param {!./ampdoc-impl.AmpDoc} ampdoc
   * @param {!Window} win
   */


  _createClass(Navigation, [{
    key: 'adoptEmbedWindow',


    /** @override */
    value: function adoptEmbedWindow(embedWin) {
      (0, _service.installServiceInEmbedScope)(embedWin, TAG, new Navigation(this.ampdoc, embedWin.document));
    }

    /**
     * Removes all event listeners.
     */

  }, {
    key: 'cleanup',
    value: function cleanup() {
      if (this.boundHandle_) {
        this.rootNode_.removeEventListener(EVENT_TYPE_CLICK, this.boundHandle_);
        this.rootNode_.removeEventListener(EVENT_TYPE_CONTEXT_MENU, this.boundHandle_);
      }
    }

    /**
     * Navigates a window to a URL.
     *
     * If opt_requestedBy matches a feature name in a <meta> tag with attribute
     * name="amp-to-amp-navigation", then treats the URL as an AMP URL (A2A).
     *
     * @param {!Window} win
     * @param {string} url
     * @param {string=} opt_requestedBy
     */

  }, {
    key: 'navigateTo',
    value: function navigateTo(win, url, opt_requestedBy) {
      var urlService = _services.Services.urlForDoc(this.ampdoc);
      if (!urlService.isProtocolValid(url)) {
        (0, _log.user)().error(TAG, 'Cannot navigate to invalid protocol: ' + url);
        return;
      }

      // If this redirect was requested by a feature that opted into A2A,
      // try to ask the viewer to navigate this AMP URL.
      if (opt_requestedBy) {
        if (!this.a2aFeatures_) {
          this.a2aFeatures_ = this.queryA2AFeatures_();
        }
        if (this.a2aFeatures_.includes(opt_requestedBy)) {
          if (this.viewer_.navigateToAmpUrl(url, opt_requestedBy)) {
            return;
          }
        }
      }

      // Otherwise, perform normal behavior of navigating the top frame.
      win.top.location.href = url;
    }

    /**
     * @return {!Array<string>}
     * @private
     */

  }, {
    key: 'queryA2AFeatures_',
    value: function queryA2AFeatures_() {
      var meta = this.rootNode_.querySelector('meta[name="amp-to-amp-navigation"]');
      if (meta && meta.hasAttribute('content')) {
        return meta.getAttribute('content').split(',').map(function (s) {
          return s.trim();
        });
      }
      return [];
    }

    /**
     * Intercept any click on the current document and prevent any
     * linking to an identifier from pushing into the history stack.
     *
     * This also handles custom protocols (e.g. whatsapp://) when iframed
     * on iOS Safari.
     *
     * @param {!Event} e
     * @private
     */

  }, {
    key: 'handle_',
    value: function handle_(e) {
      if (e.defaultPrevented) {
        return;
      }
      var target = (0, _dom.closestByTag)((0, _log.dev)().assertElement(e.target), 'A');
      if (!target || !target.href) {
        return;
      }
      if (e.type == EVENT_TYPE_CLICK) {
        this.handleClick_(target, e);
      } else if (e.type == EVENT_TYPE_CONTEXT_MENU) {
        // Handles contextmenu click. Note that currently this only deals
        // with url variable substitution and expansion, as there is
        // straightforward way of determining what the user clicked in the
        // context menu, required for A2A navigation and custom link protocol
        // handling.
        // TODO(alabiaga): investigate fix for handling A2A and custom link
        // protocols.
        this.expandVarsForAnchor_(target);
      }
    }

    /**
     * @param {!Element} target
     * @param {!Event} e
     * @private
     */

  }, {
    key: 'handleClick_',
    value: function handleClick_(target, e) {
      this.expandVarsForAnchor_(target);

      var location = this.parseUrl_(target.href);

      // Handle AMP-to-AMP navigation if rel=amphtml.
      if (this.handleA2AClick_(e, target, location)) {
        return;
      }

      // Handle navigating to custom protocol if applicable.
      if (this.handleCustomProtocolClick_(e, target, location)) {
        return;
      }

      // Finally, handle normal click-navigation behavior.
      this.handleNavClick_(e, target, location);
    }

    /**
     * @param {!Element} el
     * @private
     */

  }, {
    key: 'expandVarsForAnchor_',
    value: function expandVarsForAnchor_(el) {
      // First check if need to handle external link decoration.
      var defaultExpandParamsUrl = null;
      if (this.appendExtraParams_ && !this.isEmbed_) {
        // Only decorate outgoing link when needed to and is not in FIE.
        defaultExpandParamsUrl = (0, _impression.getExtraParamsUrl)(this.ampdoc.win, el);
      }

      var urlReplacements = _services.Services.urlReplacementsForDoc(el);
      urlReplacements.maybeExpandLink(el, defaultExpandParamsUrl);
    }

    /**
     * Handles clicking on a custom protocol link.
     * Returns true if the navigation was handled. Otherwise, returns false.
     * @param {!Event} e
     * @param {!Element} target
     * @param {!Location} location
     * @return {boolean}
     * @private
     */

  }, {
    key: 'handleCustomProtocolClick_',
    value: function handleCustomProtocolClick_(e, target, location) {
      // Handle custom protocols only if the document is iframed.
      if (!this.isIframed_) {
        return false;
      }

      /** @const {!Window} */
      var win = (0, _types.toWin)(target.ownerDocument.defaultView);
      var url = target.href;
      var protocol = location.protocol;

      // On Safari iOS, custom protocol links will fail to open apps when the
      // document is iframed - in order to go around this, we set the top.location
      // to the custom protocol href.

      var isFTP = protocol == 'ftp:';

      // In case of FTP Links in embedded documents always open then in _blank.
      if (isFTP) {
        (0, _dom.openWindowDialog)(win, url, '_blank');
        e.preventDefault();
        return true;
      }

      var isNormalProtocol = /^(https?|mailto):$/.test(protocol);
      if (this.isIosSafari_ && !isNormalProtocol) {
        (0, _dom.openWindowDialog)(win, url, '_top');
        // Without preventing default the page would should an alert error twice
        // in the case where there's no app to handle the custom protocol.
        e.preventDefault();
        return true;
      }

      return false;
    }

    /**
     * Handles clicking on an AMP link.
     * Returns true if the navigation was handled. Otherwise, returns false.
     * @param {!Event} e
     * @param {!Element} target
     * @param {!Location} location
     * @return {boolean}
     * @private
     */

  }, {
    key: 'handleA2AClick_',
    value: function handleA2AClick_(e, target, location) {
      if (!target.hasAttribute('rel')) {
        return false;
      }
      var relations = target.getAttribute('rel').split(' ').map(function (s) {
        return s.trim();
      });
      if (!relations.includes('amphtml')) {
        return false;
      }
      // The viewer may not support the capability for navigating AMP links.
      if (this.viewer_.navigateToAmpUrl(location.href, '<a rel=amphtml>')) {
        e.preventDefault();
        return true;
      }
      return false;
    }

    /**
     * Handles clicking on a link with hash navigation.
     * @param {!Event} e
     * @param {!Element} target
     * @param {!Location} tgtLoc
     * @private
     */

  }, {
    key: 'handleNavClick_',
    value: function handleNavClick_(e, target, tgtLoc) {
      var _this2 = this;

      // In test mode, we're not able to properly fix the anchor tag's base URL.
      // So, we have to use the (mocked) window's location instead.
      var baseHref = (0, _mode.getMode)().test && !this.isEmbed_ ? this.ampdoc.win.location.href : '';
      var curLoc = this.parseUrl_(baseHref);
      var tgtHref = '' + tgtLoc.origin + tgtLoc.pathname + tgtLoc.search;
      var curHref = '' + curLoc.origin + curLoc.pathname + curLoc.search;

      // If the current target anchor link is the same origin + path
      // as the current document then we know we are just linking to an
      // identifier in the document. Otherwise, it's an external navigation.
      if (!tgtLoc.hash || tgtHref != curHref) {
        if (this.isEmbed_ || this.isInABox_) {
          // Target in the embed must be either _top or _blank. If none specified,
          // force to _blank.
          var targetAttr = (target.getAttribute('target') || '').toLowerCase();
          if (targetAttr != '_top' && targetAttr != '_blank') {
            target.setAttribute('target', '_blank');
          }
        }
        return;
      }

      // We prevent default so that the current click does not push
      // into the history stack as this messes up the external documents
      // history which contains the amp document.
      e.preventDefault();

      // For an embed, do not perform scrolling or global history push - both have
      // significant UX and browser problems.
      if (this.isEmbed_) {
        return;
      }

      // Look for the referenced element.
      var hash = tgtLoc.hash.slice(1);
      var elem = null;
      if (hash) {
        var escapedHash = (0, _dom.escapeCssSelectorIdent)(hash);
        elem = this.rootNode_.getElementById(hash) ||
        // Fallback to anchor[name] if element with id is not found.
        // Linking to an anchor element with name is obsolete in html5.
        this.rootNode_. /*OK*/querySelector('a[name="' + escapedHash + '"]');
      }

      // If possible do update the URL with the hash. As explained above
      // we do `replace` to avoid messing with the container's history.
      if (tgtLoc.hash != curLoc.hash) {
        this.history_.replaceStateForTarget(tgtLoc.hash).then(function () {
          _this2.scrollToElement_(elem, hash);
        });
      } else {
        // If the hash did not update just scroll to the element.
        this.scrollToElement_(elem, hash);
      }
    }

    /**
     * Scrolls the page to the given element.
     * @param {?Element} elem
     * @param {string} hash
     * @private
     */

  }, {
    key: 'scrollToElement_',
    value: function scrollToElement_(elem, hash) {
      var _this3 = this;

      // Scroll to the element if found.
      if (elem) {
        // The first call to scrollIntoView overrides browsers' default scrolling
        // behavior. The second call insides setTimeout allows us to scroll to
        // that element properly. Without doing this, the viewport will not catch
        // the updated scroll position on iOS Safari and hence calculate the wrong
        // scrollTop for the scrollbar jumping the user back to the top for
        // failing to calculate the new jumped offset. Without the first call
        // there will be a visual jump due to browser scroll. See
        // https://github.com/ampproject/amphtml/issues/5334 for more details.
        this.viewport_. /*OK*/scrollIntoView(elem);
        _services.Services.timerFor(this.ampdoc.win).delay(function () {
          return _this3.viewport_. /*OK*/scrollIntoView((0, _log.dev)().assertElement(elem));
        }, 1);
      } else {
        (0, _log.dev)().warn(TAG, 'failed to find element with id=' + hash + ' or a[name=' + hash + ']');
      }
    }

    /**
     * @param {string} url
     * @return {!Location}
     * @private
     */

  }, {
    key: 'parseUrl_',
    value: function parseUrl_(url) {
      // Must use URL parsing scoped to this.rootNode_ for correct FIE behavior.
      return _services.Services.urlForDoc(this.rootNode_).parse(url);
    }
  }], [{
    key: 'installAnchorClickInterceptor',
    value: function installAnchorClickInterceptor(ampdoc, win) {
      win.document.documentElement.addEventListener('click', maybeExpandUrlParams.bind(null, ampdoc), /* capture */true);
    }
  }]);

  return Navigation;
}();

/**
 * Handle click on links and replace variables in the click URL.
 * The function changes the actual href value and stores the
 * template in the ORIGINAL_HREF_ATTRIBUTE attribute
 * @param {!./ampdoc-impl.AmpDoc} ampdoc
 * @param {!Event} e
 */


function maybeExpandUrlParams(ampdoc, e) {
  var target = (0, _dom.closestByTag)((0, _log.dev)().assertElement(e.target), 'A');
  if (!target || !target.href) {
    // Not a click on a link.
    return;
  }
  var hrefToExpand = target.getAttribute(ORIG_HREF_ATTRIBUTE) || target.getAttribute('href');
  if (!hrefToExpand) {
    return;
  }
  var vars = {
    'CLICK_X': function CLICK_X() {
      return e.pageX;
    },
    'CLICK_Y': function CLICK_Y() {
      return e.pageY;
    }
  };
  var newHref = _services.Services.urlReplacementsForDoc(ampdoc).expandUrlSync(hrefToExpand, vars, undefined, /* opt_whitelist */{
    // For now we only allow to replace the click location vars
    // and nothing else.
    // NOTE: Addition to this whitelist requires additional review.
    'CLICK_X': true,
    'CLICK_Y': true
  });
  if (newHref != hrefToExpand) {
    // Store original value so that later clicks can be processed with
    // freshest values.
    if (!target.getAttribute(ORIG_HREF_ATTRIBUTE)) {
      target.setAttribute(ORIG_HREF_ATTRIBUTE, hrefToExpand);
    }
    target.setAttribute('href', newHref);
  }
}

},{"../dom":32,"../impression":42,"../log":46,"../mode":48,"../service":59,"../services":64,"../types":69}],61:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Expander = exports.NOENCODE_WHITELIST = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright 2018 The AMP HTML Authors. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * distributed under the License is distributed on an "AS-IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _object = require('../../utils/object');

var _log = require('../../log');

var _promise = require('../../utils/promise');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** @private @const {string} */
var PARSER_IGNORE_FLAG = '`';

/** @private @const {string} */
var TAG = 'Expander';

/** A whitelist for replacements whose values should not be %-encoded. */
/** @const {Object<string, boolean>} */
var NOENCODE_WHITELIST = exports.NOENCODE_WHITELIST = { 'ANCESTOR_ORIGIN': true };

/** Rudamentary parser to handle nested Url replacement. */

var Expander = exports.Expander = function () {

  /**
   * Link this instance of parser to the calling UrlReplacment
   * @param {!../variable-source.VariableSource|null} variableSource the keywords to replace
   */
  function Expander(variableSource) {
    _classCallCheck(this, Expander);

    this.variableSource_ = variableSource;
  }

  /**
   * take the template url and return a promise of its evaluated value
   * @param {string} url url to be substituted
   * @param {!Object<string, *>=} opt_bindings additional one-off bindings
   * @param {!Object<string, *>=} opt_collectVars Object passed in to collect
   *   variable resolutions.
   * @param {boolean=} opt_sync If the method should resolve syncronously.
   * @param {!Object<string, boolean>=} opt_whiteList Optional white list of names
   *   that can be substituted.
   * @return {!Promise<string>|string}
   */


  _createClass(Expander, [{
    key: 'expand',
    value: function expand(url, opt_bindings, opt_collectVars, opt_sync, opt_whiteList) {
      if (!url.length) {
        return opt_sync ? url : Promise.resolve(url);
      }
      var expr = this.variableSource_.getExpr(opt_bindings, /*opt_ignoreArgs */true, opt_whiteList);

      var matches = this.findMatches_(url, expr);
      // if no keywords move on
      if (!matches.length) {
        return opt_sync ? url : Promise.resolve(url);
      }
      return this.parseUrlRecursively_(url, matches, opt_bindings, opt_collectVars, opt_sync);
    }

    /**
     * Structures the regex matching into the desired format
     * @param {string} url url to be substituted
     * @param {RegExp} expression regex containing all keywords
     * @return {Array<Object<string, string|number>>} array of objects representing
     *  matching keywords
     */

  }, {
    key: 'findMatches_',
    value: function findMatches_(url, expression) {
      var matches = [];
      url.replace(expression, function (match, name, startPosition) {
        var length = match.length;

        var stopPosition = length + startPosition - 1;
        var info = {
          start: startPosition,
          stop: stopPosition,
          name: name,
          length: length
        };
        matches.push(info);
      });
      return matches;
    }

    /**
     * @param {string} url
     * @param {!Array<Object<string, string|number>>} matches Array of objects
     *   representing matching keywords.
     * @param {!Object<string, *>=} opt_bindings Additional one-off bindings.
     * @param {!Object<string, *>=} opt_collectVars Object passed in to collect
     *   variable resolutions.
     * @param {boolean=} opt_sync
     * @return {!Promise<string>|string}
     */

  }, {
    key: 'parseUrlRecursively_',
    value: function parseUrlRecursively_(url, matches, opt_bindings, opt_collectVars, opt_sync) {
      var _this = this;

      var stack = [];
      var urlIndex = 0;
      var matchIndex = 0;
      var match = matches[matchIndex];
      var numOfPendingCalls = 0;
      var ignoringChars = false;
      var nextArgShouldBeRaw = false;

      var evaluateNextLevel = function evaluateNextLevel() {
        var builder = '';
        var results = [];

        while (urlIndex < url.length && matchIndex <= matches.length) {
          if (match && urlIndex === match.start) {
            var binding = void 0;
            // find out where this keyword is coming from
            if (opt_bindings && (0, _object.hasOwn)(opt_bindings, match.name)) {
              // the optional bindings
              binding = {
                // This construction helps us save the match name and determine
                // precedence of resolution choices in #expandBinding_ later.
                name: match.name,
                prioritized: opt_bindings[match.name]
              };
            } else {
              // or the global source
              binding = _this.variableSource_.get(match.name);
              binding.name = match.name;
            }

            urlIndex = match.stop + 1;
            match = matches[++matchIndex];

            if (url[urlIndex] === '(') {
              // if we hit a left parenthesis we still need to get args
              urlIndex++;
              numOfPendingCalls++;
              stack.push(binding);
              // trim space in between args
              if (builder.trim().length) {
                results.push(builder);
              }
              results.push(evaluateNextLevel());
            } else {
              if (builder.length) {
                results.push(builder);
              }
              results.push(_this.evaluateBinding_(binding,
              /* opt_args */undefined, opt_collectVars, opt_sync));
            }

            builder = '';
          } else if (url[urlIndex] === PARSER_IGNORE_FLAG) {
            if (!ignoringChars) {
              ignoringChars = true;
              nextArgShouldBeRaw = true;
              (0, _log.user)().assert(builder.trim() === '', 'The substring "' + builder + '" was lost during url-replacement. ' + 'Please ensure the url syntax is correct');
              builder = '';
            } else {
              ignoringChars = false;
            }
            urlIndex++;
          } else if (numOfPendingCalls && url[urlIndex] === ',' && !ignoringChars) {
            if (builder.length) {
              var nextArg = nextArgShouldBeRaw ? builder : builder.trim();
              results.push(nextArg);
              nextArgShouldBeRaw = false;
            }
            // support existing two comma format
            // eg CLIENT_ID(__ga,,ga-url)
            if (url[urlIndex + 1] === ',') {
              results.push(''); // TODO(ccordry): may want this to be undefined at some point
              urlIndex++;
            }
            builder = '';
            urlIndex++;
          }

          // Invoke a function on every right parenthesis unless the stack is
          // empty.
          else if (numOfPendingCalls && url[urlIndex] === ')' && !ignoringChars) {
              urlIndex++;
              numOfPendingCalls--;
              var _binding = stack.pop();
              var _nextArg = nextArgShouldBeRaw ? builder : builder.trim();
              results.push(_nextArg);
              nextArgShouldBeRaw = false;
              var value = _this.evaluateBinding_(_binding, /* opt_args */results, opt_collectVars, opt_sync);
              return value;
            } else {
              builder += url[urlIndex];
              urlIndex++;
            }

          //capture trailing characters
          if (urlIndex === url.length && builder.length) {
            results.push(builder);
          }
        }

        if (opt_sync) {
          return results.join('');
        }

        return Promise.all(results).then(function (promiseArray) {
          return promiseArray.join('');
        }).catch(function (e) {
          (0, _log.rethrowAsync)(e);
          return '';
        });
      };

      return evaluateNextLevel();
    }

    /**
     * Called when a binding is ready to be resolved. Determines which version of
     * binding to use and if syncronous or asyncronous version should be called.
     * @param {Object<string, *>} bindingInfo An object containing the name of macro
     *   and value to be resolved.
     * @param {Array=} opt_args Arguments passed to the macro.
     * @param {!Object<string, *>=} opt_collectVars Object passed in to collect
     *   variable resolutions.
     * @param {*=} opt_sync Whether the binding should be resolved synchronously.
     */

  }, {
    key: 'evaluateBinding_',
    value: function evaluateBinding_(bindingInfo, opt_args, opt_collectVars, opt_sync) {
      var name = bindingInfo.name;

      var binding = void 0;
      if (bindingInfo.prioritized) {
        // If a binding is passed in through opt_bindings it always takes
        // precedence.
        binding = bindingInfo.prioritized;
      } else if (opt_sync && bindingInfo.sync) {
        // Use the sync resolution if avaliable when called synchronously.
        binding = bindingInfo.sync;
      } else if (opt_sync) {
        // If there is no sync resolution we can not wait.
        (0, _log.user)().error(TAG, 'ignoring async replacement key: ', bindingInfo.name);
        binding = '';
      } else {
        // Prefer the async over the sync but it may not exist.
        binding = bindingInfo.async || bindingInfo.sync;
      }
      return opt_sync ? this.evaluateBindingSync_(binding, name, opt_args, opt_collectVars) : this.evaluateBindingAsync_(binding, name, opt_args, opt_collectVars);
    }

    /**
     * Resolves binding to value to be substituted asyncronously.
     * @param {*} binding Container for sync/async resolutions.
     * @param {string} name
     * @param {?Array=} opt_args Arguments to be passed if binding is function.
     * @param {!Object<string, *>=} opt_collectVars Object passed in to collect
     *   variable resolutions.
     * @return {!Promise<string>} Resolved value.
     */

  }, {
    key: 'evaluateBindingAsync_',
    value: function evaluateBindingAsync_(binding, name, opt_args, opt_collectVars) {
      var value = void 0;
      try {
        if (typeof binding === 'function') {
          if (opt_args) {
            value = Promise.all(opt_args).then(function (args) {
              return binding.apply(null, args);
            });
          } else {
            value = (0, _promise.tryResolve)(binding);
          }
        } else {
          value = Promise.resolve(binding);
        }
        return value.then(function (val) {
          var result = void 0;

          if (val == null) {
            result = '';
          } else {
            result = NOENCODE_WHITELIST[name] ? val : encodeURIComponent(val);
          }

          if (opt_collectVars) {
            opt_collectVars[name] = result;
          }
          return result;
        }).catch(function (e) {
          (0, _log.rethrowAsync)(e);
          if (opt_collectVars) {
            opt_collectVars[name] = '';
          }
          return Promise.resolve('');
        });
      } catch (e) {
        // Report error, but do not disrupt URL replacement. This will
        // interpolate as the empty string.
        (0, _log.rethrowAsync)(e);
        if (opt_collectVars) {
          opt_collectVars[name] = '';
        }
        return Promise.resolve('');
      }
    }

    /**
     * Resolves binding to value to be substituted asyncronously.
     * @param {*} binding Container for sync/async resolutions.
     * @param {string} name
     * @param {?Array=} opt_args Arguments to be passed if binding is function.
     * @param {!Object<string, *>=} opt_collectVars Object passed in to collect
     *   variable resolutions.
     * @return {string} Resolved value.
     */

  }, {
    key: 'evaluateBindingSync_',
    value: function evaluateBindingSync_(binding, name, opt_args, opt_collectVars) {
      try {
        var value = typeof binding === 'function' ? binding.apply(null, opt_args) : binding;

        var result = void 0;

        if (value && value.then) {
          // If binding is passed in as opt_binding we try to resolve it and it
          // may return a promise.
          (0, _log.user)().error(TAG, 'ignoring async macro resolution');
          result = '';
        } else if (typeof value === 'string' || typeof value === 'number') {
          // Normal case.
          result = NOENCODE_WHITELIST[name] ? value.toString() : encodeURIComponent( /** @type {string} */value);
        } else {
          // Most likely a broken binding gets us here.
          result = '';
        }

        if (opt_collectVars) {
          opt_collectVars[name] = result;
        }

        return result;
      } catch (e) {
        // Report error, but do not disrupt URL replacement. This will
        // interpolate as the empty string.
        (0, _log.rethrowAsync)(e);
        if (opt_collectVars) {
          opt_collectVars[name] = '';
        }
        return '';
      }
    }
  }]);

  return Expander;
}();

},{"../../log":46,"../../utils/object":78,"../../utils/promise":79}],62:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UrlReplacements = exports.GlobalVariableSource = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.extractClientIdFromGaCookie = extractClientIdFromGaCookie;
exports.installUrlReplacementsServiceForDoc = installUrlReplacementsServiceForDoc;
exports.installUrlReplacementsForEmbed = installUrlReplacementsForEmbed;

var _variableSource = require('./variable-source');

var _expander = require('./url-expander/expander');

var _services = require('../services');

var _windowInterface = require('../window-interface');

var _url = require('../url');

var _log = require('../log');

var _impression = require('../impression.js');

var _object = require('../utils/object');

var _service = require('../service');

var _experiments = require('../experiments');

var _promise = require('../utils/promise');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS-IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/** @private @const {string} */
var TAG = 'UrlReplacements';
var EXPERIMENT_DELIMITER = '!';
var VARIANT_DELIMITER = '.';
var GEO_DELIM = ',';
var ORIGINAL_HREF_PROPERTY = 'amp-original-href';
var ORIGINAL_VALUE_PROPERTY = 'amp-original-value';

/**
 * Returns a encoded URI Component, or an empty string if the value is nullish.
 * @param {*} val
 * @return {string}
 */
function encodeValue(val) {
  if (val == null) {
    return '';
  }
  return encodeURIComponent( /** @type {string} */val);
}

/**
 * Returns a function that executes method on a new Date instance. This is a
 * byte saving hack.
 *
 * @param {string} method
 * @return {!SyncResolverDef}
 */
function dateMethod(method) {
  return function () {
    return new Date()[method]();
  };
}

/**
 * Returns a function that returns property of screen. This is a byte saving
 * hack.
 *
 * @param {!Screen} screen
 * @param {string} property
 * @return {!SyncResolverDef}
 */
function screenProperty(screen, property) {
  return function () {
    return screen[property];
  };
}

/**
 * Class to provide variables that pertain to top level AMP window.
 */

var GlobalVariableSource = exports.GlobalVariableSource = function (_VariableSource) {
  _inherits(GlobalVariableSource, _VariableSource);

  /**
   * @param {!./ampdoc-impl.AmpDoc} ampdoc
   */
  function GlobalVariableSource(ampdoc) {
    _classCallCheck(this, GlobalVariableSource);

    /** @private {?Promise<?Object<string, string>>} */
    var _this = _possibleConstructorReturn(this, (GlobalVariableSource.__proto__ || Object.getPrototypeOf(GlobalVariableSource)).call(this, ampdoc));

    _this.variants_ = null;

    /** @private {?Promise<?ShareTrackingFragmentsDef>} */
    _this.shareTrackingFragments_ = null;
    return _this;
  }

  /**
   * Utility function for setting resolver for timing data that supports
   * sync and async.
   * @param {string} varName
   * @param {string} startEvent
   * @param {string=} endEvent
   * @return {!VariableSource}
   * @private
   */


  _createClass(GlobalVariableSource, [{
    key: 'setTimingResolver_',
    value: function setTimingResolver_(varName, startEvent, endEvent) {
      var _this2 = this;

      return this.setBoth(varName, function () {
        return (0, _variableSource.getTimingDataSync)(_this2.ampdoc.win, startEvent, endEvent);
      }, function () {
        return (0, _variableSource.getTimingDataAsync)(_this2.ampdoc.win, startEvent, endEvent);
      });
    }

    /** @override */

  }, {
    key: 'initialize',
    value: function initialize() {
      var _this3 = this;

      /** @const {!./viewport/viewport-impl.Viewport} */
      var viewport = _services.Services.viewportForDoc(this.ampdoc);

      // Returns a random value for cache busters.
      this.set('RANDOM', function () {
        return Math.random();
      });

      // Provides a counter starting at 1 per given scope.
      var counterStore = Object.create(null);
      this.set('COUNTER', function (scope) {
        return counterStore[scope] = (counterStore[scope] | 0) + 1;
      });

      // Returns the canonical URL for this AMP document.
      this.set('CANONICAL_URL', this.getDocInfoUrl_('canonicalUrl'));

      // Returns the host of the canonical URL for this AMP document.
      this.set('CANONICAL_HOST', this.getDocInfoUrl_('canonicalUrl', 'host'));

      // Returns the hostname of the canonical URL for this AMP document.
      this.set('CANONICAL_HOSTNAME', this.getDocInfoUrl_('canonicalUrl', 'hostname'));

      // Returns the path of the canonical URL for this AMP document.
      this.set('CANONICAL_PATH', this.getDocInfoUrl_('canonicalUrl', 'pathname'));

      // Returns the referrer URL.
      this.setAsync('DOCUMENT_REFERRER', /** @type {AsyncResolverDef} */function () {
        return _services.Services.viewerForDoc(_this3.ampdoc).getReferrerUrl();
      });

      // Like DOCUMENT_REFERRER, but returns null if the referrer is of
      // same domain or the corresponding CDN proxy.
      this.setAsync('EXTERNAL_REFERRER', /** @type {AsyncResolverDef} */function () {
        return _services.Services.viewerForDoc(_this3.ampdoc).getReferrerUrl().then(function (referrer) {
          if (!referrer) {
            return null;
          }
          var referrerHostname = (0, _url.parseUrlDeprecated)((0, _url.getSourceUrl)(referrer)).hostname;
          var currentHostname = _windowInterface.WindowInterface.getHostname(_this3.ampdoc.win);
          return referrerHostname === currentHostname ? null : referrer;
        });
      });

      // Returns the title of this AMP document.
      this.set('TITLE', function () {
        // The environment may override the title and set originalTitle. Prefer
        // that if available.
        return _this3.ampdoc.win.document['originalTitle'] || _this3.ampdoc.win.document.title;
      });

      // Returns the URL for this AMP document.
      this.set('AMPDOC_URL', function () {
        return (0, _url.removeFragment)(_this3.addReplaceParamsIfMissing_(_this3.ampdoc.win.location.href));
      });

      // Returns the host of the URL for this AMP document.
      this.set('AMPDOC_HOST', function () {
        var url = (0, _url.parseUrlDeprecated)(_this3.ampdoc.win.location.href);
        return url && url.host;
      });

      // Returns the hostname of the URL for this AMP document.
      this.set('AMPDOC_HOSTNAME', function () {
        var url = (0, _url.parseUrlDeprecated)(_this3.ampdoc.win.location.href);
        return url && url.hostname;
      });

      // Returns the Source URL for this AMP document.
      var expandSourceUrl = function expandSourceUrl() {
        var docInfo = _services.Services.documentInfoForDoc(_this3.ampdoc);
        return (0, _url.removeFragment)(_this3.addReplaceParamsIfMissing_(docInfo.sourceUrl));
      };
      this.setBoth('SOURCE_URL', function () {
        return expandSourceUrl();
      }, function () {
        return (0, _impression.getTrackImpressionPromise)().then(function () {
          return expandSourceUrl();
        });
      });

      // Returns the host of the Source URL for this AMP document.
      this.set('SOURCE_HOST', this.getDocInfoUrl_('sourceUrl', 'host'));

      // Returns the hostname of the Source URL for this AMP document.
      this.set('SOURCE_HOSTNAME', this.getDocInfoUrl_('sourceUrl', 'hostname'));

      // Returns the path of the Source URL for this AMP document.
      this.set('SOURCE_PATH', this.getDocInfoUrl_('sourceUrl', 'pathname'));

      // Returns a random string that will be the constant for the duration of
      // single page view. It should have sufficient entropy to be unique for
      // all the page views a single user is making at a time.
      this.set('PAGE_VIEW_ID', this.getDocInfoUrl_('pageViewId'));

      this.setBoth('QUERY_PARAM', function (param) {
        var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

        return _this3.getQueryParamData_(param, defaultValue);
      }, function (param) {
        var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

        return (0, _impression.getTrackImpressionPromise)().then(function () {
          return _this3.getQueryParamData_(param, defaultValue);
        });
      });

      // Returns the value of the given field name in the fragment query string.
      // Second parameter is an optional default value.
      // For example, if location is 'pub.com/amp.html?x=1#y=2' then
      // FRAGMENT_PARAM(y) returns '2' and FRAGMENT_PARAM(z, 3) returns 3.
      this.setAsync('FRAGMENT_PARAM', this.getViewerIntegrationValue_('fragmentParam', 'FRAGMENT_PARAM'));

      // Returns the first item in the ancestorOrigins array, if available.
      this.setAsync('ANCESTOR_ORIGIN', this.getViewerIntegrationValue_('ancestorOrigin', 'ANCESTOR_ORIGIN'));

      /**
       * Stores client ids that were generated during this page view
       * indexed by scope.
       * @type {?Object<string, string>}
       */
      var clientIds = null;
      // Synchronous alternative. Only works for scopes that were previously
      // requested using the async method.
      this.setBoth('CLIENT_ID', function (scope) {
        if (!clientIds) {
          return null;
        }
        return clientIds[(0, _log.dev)().assertString(scope)];
      }, function (scope, opt_userNotificationId, opt_cookieName) {
        (0, _log.user)().assertString(scope, 'The first argument to CLIENT_ID, the fallback' +
        /*OK*/' Cookie name, is required');
        var consent = Promise.resolve();

        // If no `opt_userNotificationId` argument is provided then
        // assume consent is given by default.
        if (opt_userNotificationId) {
          consent = _services.Services.userNotificationManagerForDoc(_this3.ampdoc).then(function (service) {
            return service.get(opt_userNotificationId);
          });
        }
        return _services.Services.cidForDoc(_this3.ampdoc).then(function (cid) {
          return cid.get({
            scope: (0, _log.dev)().assertString(scope),
            createCookieIfNotPresent: true,
            cookieName: opt_cookieName
          }, consent);
        }).then(function (cid) {
          if (!clientIds) {
            clientIds = Object.create(null);
          }

          // A temporary work around to extract Client ID from _ga cookie. #5761
          // TODO: replace with "filter" when it's in place. #2198
          var cookieName = opt_cookieName || scope;
          if (cid && cookieName == '_ga') {
            if (typeof cid === 'string') {
              cid = extractClientIdFromGaCookie(cid);
            } else {
              // TODO(@jridgewell, #11120): remove once #11120 is figured out.
              // Do not log the CID directly, that's PII.
              (0, _log.dev)().error(TAG, 'non-string cid, what is it?', Object.keys(cid));
            }
          }

          clientIds[scope] = cid;
          return cid;
        });
      });

      // Returns assigned variant name for the given experiment.
      this.setAsync('VARIANT', /** @type {AsyncResolverDef} */function (experiment) {
        return _this3.getVariantsValue_(function (variants) {
          var variant = variants[/** @type {string} */experiment];
          (0, _log.user)().assert(variant !== undefined, 'The value passed to VARIANT() is not a valid experiment name:' + experiment);
          // When no variant assigned, use reserved keyword 'none'.
          return variant === null ? 'none' : /** @type {string} */variant;
        }, 'VARIANT');
      });

      // Returns all assigned experiment variants in a serialized form.
      this.setAsync('VARIANTS', /** @type {AsyncResolverDef} */function () {
        return _this3.getVariantsValue_(function (variants) {
          var experiments = [];
          for (var experiment in variants) {
            var variant = variants[experiment];
            experiments.push(experiment + VARIANT_DELIMITER + (variant || 'none'));
          }
          return experiments.join(EXPERIMENT_DELIMITER);
        }, 'VARIANTS');
      });

      // Returns assigned geo value for geoType or all groups.
      this.setAsync('AMP_GEO', /** @type {AsyncResolverDef} */function (geoType) {
        return _this3.getGeo_(function (geos) {
          if (geoType) {
            (0, _log.user)().assert(geoType === 'ISOCountry', 'The value passed to AMP_GEO() is not valid name:' + geoType);
            return (/** @type {string} */geos[geoType] || 'unknown'
            );
          }
          return (/** @type {string} */geos.ISOCountryGroups.join(GEO_DELIM)
          );
        }, 'AMP_GEO');
      });

      // Returns incoming share tracking fragment.
      this.setAsync('SHARE_TRACKING_INCOMING', /** @type {AsyncResolverDef} */function () {
        return _this3.getShareTrackingValue_(function (fragments) {
          return fragments.incomingFragment;
        }, 'SHARE_TRACKING_INCOMING');
      });

      // Returns outgoing share tracking fragment.
      this.setAsync('SHARE_TRACKING_OUTGOING', /** @type {AsyncResolverDef} */function () {
        return _this3.getShareTrackingValue_(function (fragments) {
          return fragments.outgoingFragment;
        }, 'SHARE_TRACKING_OUTGOING');
      });

      // Returns the number of milliseconds since 1 Jan 1970 00:00:00 UTC.
      this.set('TIMESTAMP', dateMethod('getTime'));

      // Returns the human readable timestamp in format of
      // 2011-01-01T11:11:11.612Z.
      this.set('TIMESTAMP_ISO', dateMethod('toISOString'));

      // Returns the user's time-zone offset from UTC, in minutes.
      this.set('TIMEZONE', dateMethod('getTimezoneOffset'));

      // Returns the IANA timezone code
      this.set('TIMEZONE_CODE', function () {
        var tzCode = void 0;
        if ('Intl' in _this3.ampdoc.win && 'DateTimeFormat' in _this3.ampdoc.win.Intl) {
          // It could be undefined (i.e. IE11)
          tzCode = new Intl.DateTimeFormat().resolvedOptions().timeZone;
        }

        return tzCode || '';
      });

      // Returns a promise resolving to viewport.getScrollTop.
      this.set('SCROLL_TOP', function () {
        return viewport.getScrollTop();
      });

      // Returns a promise resolving to viewport.getScrollLeft.
      this.set('SCROLL_LEFT', function () {
        return viewport.getScrollLeft();
      });

      // Returns a promise resolving to viewport.getScrollHeight.
      this.set('SCROLL_HEIGHT', function () {
        return viewport.getScrollHeight();
      });

      // Returns a promise resolving to viewport.getScrollWidth.
      this.set('SCROLL_WIDTH', function () {
        return viewport.getScrollWidth();
      });

      // Returns the viewport height.
      this.set('VIEWPORT_HEIGHT', function () {
        return viewport.getHeight();
      });

      // Returns the viewport width.
      this.set('VIEWPORT_WIDTH', function () {
        return viewport.getWidth();
      });

      var screen = this.ampdoc.win.screen;
      // Returns screen.width.

      this.set('SCREEN_WIDTH', screenProperty(screen, 'width'));

      // Returns screen.height.
      this.set('SCREEN_HEIGHT', screenProperty(screen, 'height'));

      // Returns screen.availHeight.
      this.set('AVAILABLE_SCREEN_HEIGHT', screenProperty(screen, 'availHeight'));

      // Returns screen.availWidth.
      this.set('AVAILABLE_SCREEN_WIDTH', screenProperty(screen, 'availWidth'));

      // Returns screen.ColorDepth.
      this.set('SCREEN_COLOR_DEPTH', screenProperty(screen, 'colorDepth'));

      // Returns document characterset.
      this.set('DOCUMENT_CHARSET', function () {
        var doc = _this3.ampdoc.win.document;
        return doc.characterSet || doc.charset;
      });

      // Returns the browser language.
      this.set('BROWSER_LANGUAGE', function () {
        var nav = _this3.ampdoc.win.navigator;
        return (nav.language || nav.userLanguage || nav.browserLanguage || '').toLowerCase();
      });

      // Returns the user agent.
      this.set('USER_AGENT', function () {
        var nav = _this3.ampdoc.win.navigator;
        return nav.userAgent;
      });

      // Returns the time it took to load the whole page. (excludes amp-* elements
      // that are not rendered by the system yet.)
      this.setTimingResolver_('PAGE_LOAD_TIME', 'navigationStart', 'loadEventStart');

      // Returns the time it took to perform DNS lookup for the domain.
      this.setTimingResolver_('DOMAIN_LOOKUP_TIME', 'domainLookupStart', 'domainLookupEnd');

      // Returns the time it took to connect to the server.
      this.setTimingResolver_('TCP_CONNECT_TIME', 'connectStart', 'connectEnd');

      // Returns the time it took for server to start sending a response to the
      // request.
      this.setTimingResolver_('SERVER_RESPONSE_TIME', 'requestStart', 'responseStart');

      // Returns the time it took to download the page.
      this.setTimingResolver_('PAGE_DOWNLOAD_TIME', 'responseStart', 'responseEnd');

      // Returns the time it took for redirects to complete.
      this.setTimingResolver_('REDIRECT_TIME', 'navigationStart', 'fetchStart');

      // Returns the time it took for DOM to become interactive.
      this.setTimingResolver_('DOM_INTERACTIVE_TIME', 'navigationStart', 'domInteractive');

      // Returns the time it took for content to load.
      this.setTimingResolver_('CONTENT_LOAD_TIME', 'navigationStart', 'domContentLoadedEventStart');

      // Access: Reader ID.
      this.setAsync('ACCESS_READER_ID', /** @type {AsyncResolverDef} */function () {
        return _this3.getAccessValue_(function (accessService) {
          return accessService.getAccessReaderId();
        }, 'ACCESS_READER_ID');
      });

      // Access: data from the authorization response.
      this.setAsync('AUTHDATA', /** @type {AsyncResolverDef} */function (field) {
        (0, _log.user)().assert(field, 'The first argument to AUTHDATA, the field, is required');
        return _this3.getAccessValue_(function (accessService) {
          return accessService.getAuthdataField(field);
        }, 'AUTHDATA');
      });

      // Returns an identifier for the viewer.
      this.setAsync('VIEWER', function () {
        return _services.Services.viewerForDoc(_this3.ampdoc).getViewerOrigin().then(function (viewer) {
          return viewer == undefined ? '' : viewer;
        });
      });

      // Returns the total engaged time since the content became viewable.
      this.setAsync('TOTAL_ENGAGED_TIME', function () {
        return _services.Services.activityForDoc(_this3.ampdoc).then(function (activity) {
          return activity.getTotalEngagedTime();
        });
      });

      // Returns the incremental engaged time since the last push under the
      // same name.
      this.setAsync('INCREMENTAL_ENGAGED_TIME', function (name, reset) {
        return _services.Services.activityForDoc(_this3.ampdoc).then(function (activity) {
          return activity.getIncrementalEngagedTime(name, reset !== 'false');
        });
      });

      this.set('NAV_TIMING', function (startAttribute, endAttribute) {
        (0, _log.user)().assert(startAttribute, 'The first argument to NAV_TIMING, the ' + 'start attribute name, is required');
        return (0, _variableSource.getTimingDataSync)(_this3.ampdoc.win,
        /**@type {string}*/startAttribute,
        /**@type {string}*/endAttribute);
      });
      this.setAsync('NAV_TIMING', function (startAttribute, endAttribute) {
        (0, _log.user)().assert(startAttribute, 'The first argument to NAV_TIMING, the ' + 'start attribute name, is required');
        return (0, _variableSource.getTimingDataAsync)(_this3.ampdoc.win,
        /**@type {string}*/startAttribute,
        /**@type {string}*/endAttribute);
      });

      this.set('NAV_TYPE', function () {
        return (0, _variableSource.getNavigationData)(_this3.ampdoc.win, 'type');
      });

      this.set('NAV_REDIRECT_COUNT', function () {
        return (0, _variableSource.getNavigationData)(_this3.ampdoc.win, 'redirectCount');
      });

      // returns the AMP version number
      this.set('AMP_VERSION', function () {
        return '1537224222059';
      });

      this.set('BACKGROUND_STATE', function () {
        return _services.Services.viewerForDoc(_this3.ampdoc).isVisible() ? '0' : '1';
      });

      this.setAsync('VIDEO_STATE', function (id, property) {
        var root = _this3.ampdoc.getRootNode();
        var video = (0, _log.user)().assertElement(root.getElementById( /** @type {string} */id), 'Could not find an element with id="' + id + '" for VIDEO_STATE');
        return _services.Services.videoManagerForDoc(_this3.ampdoc).getAnalyticsDetails(video).then(function (details) {
          return details ? details[property] : '';
        });
      });

      this.setAsync('STORY_PAGE_INDEX', this.getStoryValue_('pageIndex', 'STORY_PAGE_INDEX'));

      this.setAsync('STORY_PAGE_ID', this.getStoryValue_('pageId', 'STORY_PAGE_ID'));

      this.setAsync('FIRST_CONTENTFUL_PAINT', function () {
        return (0, _promise.tryResolve)(function () {
          return _services.Services.performanceFor(_this3.ampdoc.win).getFirstContentfulPaint();
        });
      });

      this.setAsync('FIRST_VIEWPORT_READY', function () {
        return (0, _promise.tryResolve)(function () {
          return _services.Services.performanceFor(_this3.ampdoc.win).getFirstViewportReady();
        });
      });

      this.setAsync('MAKE_BODY_VISIBLE', function () {
        return (0, _promise.tryResolve)(function () {
          return _services.Services.performanceFor(_this3.ampdoc.win).getMakeBodyVisible();
        });
      });

      this.setAsync('AMP_STATE', function (key) {
        return _services.Services.bindForDocOrNull(_this3.ampdoc).then(function (bind) {
          if (!bind) {
            return '';
          }
          return bind.getStateValue( /** @type {string} */key);
        });
      });
    }

    /**
     * Merges any replacement parameters into a given URL's query string,
     * preferring values set in the original query string.
     * @param {string} orig The original URL
     * @return {string} The resulting URL
     * @private
     */

  }, {
    key: 'addReplaceParamsIfMissing_',
    value: function addReplaceParamsIfMissing_(orig) {
      var _Services$documentInf =
      /** @type {!Object} */_services.Services.documentInfoForDoc(this.ampdoc),
          replaceParams = _Services$documentInf.replaceParams;

      var url = (0, _url.parseUrlDeprecated)((0, _url.removeAmpJsParamsFromUrl)(orig));
      var params = (0, _url.parseQueryString)(url.search);
      return (0, _url.addParamsToUrl)((0, _url.removeSearch)(orig),
      /** @type {!JsonObject} **/Object.assign({}, replaceParams, params));
    }

    /**
     * Resolves the value via one of document info's urls.
     * @param {string} field A field on the docInfo
     * @param {string=} opt_urlProp A subproperty of the field
     * @return {T}
     * @template T
     */

  }, {
    key: 'getDocInfoUrl_',
    value: function getDocInfoUrl_(field, opt_urlProp) {
      var _this4 = this;

      return function () {
        var docInfo = _services.Services.documentInfoForDoc(_this4.ampdoc);
        var value = docInfo[field];
        return opt_urlProp ? (0, _url.parseUrlDeprecated)(value)[opt_urlProp] : value;
      };
    }

    /**
     * Resolves the value via access service. If access service is not configured,
     * the resulting value is `null`.
     * @param {function(!../../extensions/amp-access/0.1/access-vars.AccessVars):(T|!Promise<T>)} getter
     * @param {string} expr
     * @return {T|null}
     * @template T
     * @private
     */

  }, {
    key: 'getAccessValue_',
    value: function getAccessValue_(getter, expr) {
      return Promise.all([_services.Services.accessServiceForDocOrNull(this.ampdoc), _services.Services.subscriptionsServiceForDocOrNull(this.ampdoc)]).then(function (services) {
        var service = /** @type {?../../extensions/amp-access/0.1/access-vars.AccessVars} */services[0] || services[1];
        if (!service) {
          // Access/subscriptions service is not installed.
          (0, _log.user)().error(TAG, 'Access or subsciptions service is not installed to access: ', expr);
          return null;
        }
        return getter(service);
      });
    }

    /**
     * Return the QUERY_PARAM from the current location href
     * @param {*} param
     * @param {string} defaultValue
     * @return {string}
     * @private
     */

  }, {
    key: 'getQueryParamData_',
    value: function getQueryParamData_(param, defaultValue) {
      (0, _log.user)().assert(param, 'The first argument to QUERY_PARAM, the query string ' + 'param is required');
      var url = (0, _url.parseUrlDeprecated)((0, _url.removeAmpJsParamsFromUrl)(this.ampdoc.win.location.href));
      var params = (0, _url.parseQueryString)(url.search);
      var key = (0, _log.user)().assertString(param);

      var _Services$documentInf2 = _services.Services.documentInfoForDoc(this.ampdoc),
          replaceParams = _Services$documentInf2.replaceParams;

      if (typeof params[key] !== 'undefined') {
        return params[key];
      }
      if (typeof replaceParams[key] !== 'undefined') {
        return (/** @type {string} */replaceParams[key]
        );
      }
      return defaultValue;
    }

    /**
     * Resolves the value via amp-experiment's variants service.
     * @param {function(!Object<string, string>):(?string)} getter
     * @param {string} expr
     * @return {!Promise<?string>}
     * @template T
     * @private
     */

  }, {
    key: 'getVariantsValue_',
    value: function getVariantsValue_(getter, expr) {
      if (!this.variants_) {
        this.variants_ = _services.Services.variantForOrNull(this.ampdoc.win);
      }
      return this.variants_.then(function (variants) {
        (0, _log.user)().assert(variants, 'To use variable %s, amp-experiment should be configured', expr);
        return getter(variants);
      });
    }

    /**
     * Resolves the value via geo service.
     * @param {function(Object<string, string>)} getter
     * @param {string} expr
     * @return {!Promise<Object<string,(string|Array<string>)>>}
     * @template T
     * @private
     */

  }, {
    key: 'getGeo_',
    value: function getGeo_(getter, expr) {
      return _services.Services.geoForDocOrNull(this.ampdoc).then(function (geo) {
        (0, _log.user)().assert(geo, 'To use variable %s, amp-geo should be configured', expr);
        return getter(geo);
      });
    }

    /**
     * Resolves the value via amp-share-tracking's service.
     * @param {function(!ShareTrackingFragmentsDef):T} getter
     * @param {string} expr
     * @return {!Promise<T>}
     * @template T
     * @private
     */

  }, {
    key: 'getShareTrackingValue_',
    value: function getShareTrackingValue_(getter, expr) {
      if (!this.shareTrackingFragments_) {
        this.shareTrackingFragments_ = _services.Services.shareTrackingForOrNull(this.ampdoc.win);
      }
      return this.shareTrackingFragments_.then(function (fragments) {
        (0, _log.user)().assert(fragments, 'To use variable %s, ' + 'amp-share-tracking should be configured', expr);
        return getter( /** @type {!ShareTrackingFragmentsDef} */fragments);
      });
    }

    /**
     * Resolves the value via amp-story's service.
     * @param {string} property
     * @param {string} name
     * @return {!AsyncResolverDef}
     * @private
     */

  }, {
    key: 'getStoryValue_',
    value: function getStoryValue_(property, name) {
      var _this5 = this;

      return function () {
        var service = _services.Services.storyVariableServiceForOrNull(_this5.ampdoc.win);
        return service.then(function (storyVariables) {
          (0, _log.user)().assert(storyVariables, 'To use variable %s amp-story should be configured', name);
          return storyVariables[property];
        });
      };
    }

    /**
     * Resolves the value via amp-viewer-integration's service.
     * @param {string} property
     * @param {string} name
     * @return {!AsyncResolverDef}
     * @private
     */

  }, {
    key: 'getViewerIntegrationValue_',
    value: function getViewerIntegrationValue_(property, name) {
      var _this6 = this;

      return (/** @type {!AsyncResolverDef} */function (param) {
          var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

          var service = _services.Services.viewerIntegrationVariableServiceForOrNull(_this6.ampdoc.win);
          return service.then(function (viewerIntegrationVariables) {
            (0, _log.user)().assert(viewerIntegrationVariables, 'To use variable %s ' + 'amp-viewer-integration must be installed', name);
            return viewerIntegrationVariables[property](param, defaultValue);
          });
        }
      );
    }
  }]);

  return GlobalVariableSource;
}(_variableSource.VariableSource);

/**
 * This class replaces substitution variables with their values.
 * Document new values in ../spec/amp-var-substitutions.md
 * @package For export
 */


var UrlReplacements = exports.UrlReplacements = function () {
  /**
   * @param {!./ampdoc-impl.AmpDoc} ampdoc
   * @param {!VariableSource} variableSource
   */
  function UrlReplacements(ampdoc, variableSource) {
    _classCallCheck(this, UrlReplacements);

    /** @const {!./ampdoc-impl.AmpDoc} */
    this.ampdoc = ampdoc;

    /** @type {VariableSource} */
    this.variableSource_ = variableSource;

    /** @type {!Expander} */
    this.expander_ = new _expander.Expander(this.variableSource_);
  }

  /**
   * Synchronously expands the provided source by replacing all known variables
   * with their resolved values. Optional `opt_bindings` can be used to add new
   * variables or override existing ones.  Any async bindings are ignored.
   * @param {string} source
   * @param {!Object<string, (ResolverReturnDef|!SyncResolverDef)>=} opt_bindings
   * @param {!Object<string, ResolverReturnDef>=} opt_collectVars
   * @param {!Object<string, boolean>=} opt_whiteList Optional white list of
   *     names that can be substituted.
   * @return {string}
   */


  _createClass(UrlReplacements, [{
    key: 'expandStringSync',
    value: function expandStringSync(source, opt_bindings, opt_collectVars, opt_whiteList) {
      return (/** @type {string} */this.expand_(source, opt_bindings, opt_collectVars, /* opt_sync */true, opt_whiteList)
      );
    }

    /**
     * Expands the provided source by replacing all known variables with their
     * resolved values. Optional `opt_bindings` can be used to add new variables
     * or override existing ones.
     * @param {string} source
     * @param {!Object<string, *>=} opt_bindings
     * @return {!Promise<string>}
     */

  }, {
    key: 'expandStringAsync',
    value: function expandStringAsync(source, opt_bindings) {
      return (/** @type {!Promise<string>} */this.expand_(source, opt_bindings)
      );
    }

    /**
     * Synchronously expands the provided URL by replacing all known variables
     * with their resolved values. Optional `opt_bindings` can be used to add new
     * variables or override existing ones.  Any async bindings are ignored.
     * @param {string} url
     * @param {!Object<string, (ResolverReturnDef|!SyncResolverDef)>=} opt_bindings
     * @param {!Object<string, ResolverReturnDef>=} opt_collectVars
     * @param {!Object<string, boolean>=} opt_whiteList Optional white list of
     *     names that can be substituted.
     * @return {string}
     */

  }, {
    key: 'expandUrlSync',
    value: function expandUrlSync(url, opt_bindings, opt_collectVars, opt_whiteList) {
      return this.ensureProtocolMatches_(url, /** @type {string} */this.expand_(url, opt_bindings, opt_collectVars, /* opt_sync */true, opt_whiteList));
    }

    /**
     * Expands the provided URL by replacing all known variables with their
     * resolved values. Optional `opt_bindings` can be used to add new variables
     * or override existing ones.
     * @param {string} url
     * @param {!Object<string, *>=} opt_bindings
     * @param {!Object<string, boolean>=} opt_whiteList Optional white list of names
     *     that can be substituted.
     * @return {!Promise<string>}
     */

  }, {
    key: 'expandUrlAsync',
    value: function expandUrlAsync(url, opt_bindings, opt_whiteList) {
      var _this7 = this;

      return (/** @type {!Promise<string>} */this.expand_(url, opt_bindings, undefined, undefined, opt_whiteList).then(function (replacement) {
          return _this7.ensureProtocolMatches_(url, replacement);
        })
      );
    }

    /**
     * Expands an input element value attribute with variable substituted.
     * @param {!HTMLInputElement} element
     * @return {!Promise<string>}
     */

  }, {
    key: 'expandInputValueAsync',
    value: function expandInputValueAsync(element) {
      return (/** @type {!Promise<string>} */this.expandInputValue_(element, /*opt_sync*/false)
      );
    }

    /**
     * Expands an input element value attribute with variable substituted.
     * @param {!HTMLInputElement} element
     * @return {string} Replaced string for testing
     */

  }, {
    key: 'expandInputValueSync',
    value: function expandInputValueSync(element) {
      return (/** @type {string} */this.expandInputValue_(element, /*opt_sync*/true)
      );
    }

    /**
     * Expands in input element value attribute with variable substituted.
     * @param {!HTMLInputElement} element
     * @param {boolean=} opt_sync
     * @return {string|!Promise<string>}
     */

  }, {
    key: 'expandInputValue_',
    value: function expandInputValue_(element, opt_sync) {
      (0, _log.dev)().assert(element.tagName == 'INPUT' && (element.getAttribute('type') || '').toLowerCase() == 'hidden', 'Input value expansion only works on hidden input fields: %s', element);

      var whitelist = this.getWhitelistForElement_(element);
      if (!whitelist) {
        return opt_sync ? element.value : Promise.resolve(element.value);
      }
      if (element[ORIGINAL_VALUE_PROPERTY] === undefined) {
        element[ORIGINAL_VALUE_PROPERTY] = element.value;
      }
      var result = this.expand_(element[ORIGINAL_VALUE_PROPERTY] || element.value,
      /* opt_bindings */undefined,
      /* opt_collectVars */undefined,
      /* opt_sync */opt_sync,
      /* opt_whitelist */whitelist);

      if (opt_sync) {
        return element.value = result;
      }
      return result.then(function (newValue) {
        element.value = newValue;
        return newValue;
      });
    }

    /**
     * Returns a replacement whitelist from elements' data-amp-replace attribute.
     * @param {!Element} element
     * @param {!Object<string, boolean>=} opt_supportedReplacement Optional supported
     * replacement that filters whitelist to a subset.
     * @return {!Object<string, boolean>|undefined}
     */

  }, {
    key: 'getWhitelistForElement_',
    value: function getWhitelistForElement_(element, opt_supportedReplacement) {
      var whitelist = element.getAttribute('data-amp-replace');
      if (!whitelist) {
        return;
      }
      var requestedReplacements = {};
      whitelist.trim().split(/\s+/).forEach(function (replacement) {
        if (!opt_supportedReplacement || (0, _object.hasOwn)(opt_supportedReplacement, replacement)) {
          requestedReplacements[replacement] = true;
        } else {
          (0, _log.user)().warn('URL', 'Ignoring unsupported replacement', replacement);
        }
      });
      return requestedReplacements;
    }

    /**
      * Returns whether variable substitution is allowed for given url.
      * @param {!Location} url
      * @return {boolean}
      */

  }, {
    key: 'isAllowedOrigin_',
    value: function isAllowedOrigin_(url) {
      var docInfo = _services.Services.documentInfoForDoc(this.ampdoc);
      if (url.origin == (0, _url.parseUrlDeprecated)(docInfo.canonicalUrl).origin || url.origin == (0, _url.parseUrlDeprecated)(docInfo.sourceUrl).origin) {
        return true;
      }

      var meta = this.ampdoc.getRootNode().querySelector('meta[name=amp-link-variable-allowed-origin]');

      if (meta && meta.hasAttribute('content')) {
        var whitelist = meta.getAttribute('content').trim().split(/\s+/);
        for (var i = 0; i < whitelist.length; i++) {
          if (url.origin == (0, _url.parseUrlDeprecated)(whitelist[i]).origin) {
            return true;
          }
        }
      }

      return false;
    }

    /**
     * Replaces values in the link of an anchor tag if
     * - the link opts into it (via data-amp-replace argument)
     * - the destination is the source or canonical origin of this doc.
     * @param {!Element} element An anchor element.
     * @param {?string} defaultUrlParams to expand link if caller request.
     * @return {string|undefined} Replaced string for testing
     */

  }, {
    key: 'maybeExpandLink',
    value: function maybeExpandLink(element, defaultUrlParams) {
      (0, _log.dev)().assert(element.tagName == 'A');
      var supportedReplacements = {
        'CLIENT_ID': true,
        'QUERY_PARAM': true
      };
      var additionalUrlParameters = element.getAttribute('data-amp-addparams') || '';
      var whitelist = this.getWhitelistForElement_(element, supportedReplacements);

      if (!whitelist && !additionalUrlParameters && !defaultUrlParams) {
        return;
      }
      // ORIGINAL_HREF_PROPERTY has the value of the href "pre-replacement".
      // We set this to the original value before doing any work and use it
      // on subsequent replacements, so that each run gets a fresh value.
      var href = (0, _log.dev)().assertString(element[ORIGINAL_HREF_PROPERTY] || element.getAttribute('href'));
      var url = (0, _url.parseUrlDeprecated)(href);
      if (element[ORIGINAL_HREF_PROPERTY] == null) {
        element[ORIGINAL_HREF_PROPERTY] = href;
      }
      if (additionalUrlParameters) {
        href = (0, _url.addParamsToUrl)(href, (0, _url.parseQueryString)(additionalUrlParameters));
      }

      var isAllowedOrigin = this.isAllowedOrigin_(url);
      if (!isAllowedOrigin) {
        if (whitelist) {
          (0, _log.user)().warn('URL', 'Ignoring link replacement', href, ' because the link does not go to the document\'s' + ' source, canonical, or whitelisted origin.');
        }
        return element.href = href;
      }

      // Note that defaultUrlParams is treated differently than
      // additionalUrlParameters in two ways #1: If the outgoing url origin is not
      // whitelisted: additionalUrlParameters are always appended by not expanded,
      // defaultUrlParams will not be appended. #2: If the expansion function is
      // not whitelisted: additionalUrlParamters will not be expanded,
      // defaultUrlParams will by default support QUERY_PARAM, and will still be
      // expanded.
      if (defaultUrlParams) {
        if (!whitelist || !whitelist['QUERY_PARAM']) {
          // override whitelist and expand defaultUrlParams;
          var overrideWhitelist = { 'QUERY_PARAM': true };
          defaultUrlParams = this.expandUrlSync(defaultUrlParams,
          /* opt_bindings */undefined,
          /* opt_collectVars */undefined,
          /* opt_whitelist */overrideWhitelist);
        }
        href = (0, _url.addParamsToUrl)(href, (0, _url.parseQueryString)(defaultUrlParams));
      }

      if (whitelist) {
        href = this.expandUrlSync(href,
        /* opt_bindings */undefined,
        /* opt_collectVars */undefined,
        /* opt_whitelist */whitelist);
      }

      return element.href = href;
    }

    /**
     * @param {string} url
     * @param {!Object<string, *>=} opt_bindings
     * @param {!Object<string, *>=} opt_collectVars
     * @param {boolean=} opt_sync
     * @param {!Object<string, boolean>=} opt_whiteList Optional white list of names
     *     that can be substituted.
     * @return {!Promise<string>|string}
     * @private
     */

  }, {
    key: 'expand_',
    value: function expand_(url, opt_bindings, opt_collectVars, opt_sync, opt_whiteList) {
      var _this8 = this;

      var isV2ExperimentOn = (0, _experiments.isExperimentOn)(this.ampdoc.win, 'url-replacement-v2');
      if (isV2ExperimentOn) {
        // TODO(ccordy) support opt_collectVars && opt_whitelist
        return this.expander_. /*OK*/expand(url, opt_bindings, opt_collectVars, opt_sync, opt_whiteList);
      }

      // existing parsing method
      var expr = this.variableSource_.getExpr(opt_bindings);
      var replacementPromise = void 0;
      var replacement = url.replace(expr, function (match, name, opt_strargs) {
        var args = [];
        if (typeof opt_strargs == 'string') {
          args = opt_strargs.split(/,\s*/);
        }
        if (opt_whiteList && !opt_whiteList[name]) {
          // Do not perform substitution and just return back the original
          // match, so that the string doesn't change.
          return match;
        }
        var binding = void 0;
        if (opt_bindings && name in opt_bindings) {
          binding = opt_bindings[name];
        } else if (binding = _this8.variableSource_.get(name)) {
          if (opt_sync) {
            binding = binding.sync;
            if (!binding) {
              (0, _log.user)().error(TAG, 'ignoring async replacement key: ', name);
              return '';
            }
          } else {
            binding = binding.async || binding.sync;
          }
        }
        var val = void 0;
        try {
          val = typeof binding == 'function' ? binding.apply(null, args) : binding;
        } catch (e) {
          // Report error, but do not disrupt URL replacement. This will
          // interpolate as the empty string.
          if (opt_sync) {
            val = '';
          }
          (0, _log.rethrowAsync)(e);
        }
        // In case the produced value is a promise, we don't actually
        // replace anything here, but do it again when the promise resolves.
        if (val && val.then) {
          if (opt_sync) {
            (0, _log.user)().error(TAG, 'ignoring promise value for key: ', name);
            return '';
          }
          /** @const {Promise<string>} */
          var p = val.catch(function (err) {
            // Report error, but do not disrupt URL replacement. This will
            // interpolate as the empty string.
            (0, _log.rethrowAsync)(err);
          }).then(function (v) {
            replacement = replacement.replace(match, _expander.NOENCODE_WHITELIST[match] ? v : encodeValue(v));
            if (opt_collectVars) {
              opt_collectVars[match] = v;
            }
          });
          if (replacementPromise) {
            replacementPromise = replacementPromise.then(function () {
              return p;
            });
          } else {
            replacementPromise = p;
          }
          return match;
        }
        if (opt_collectVars) {
          opt_collectVars[match] = val;
        }
        return _expander.NOENCODE_WHITELIST[match] ? val : encodeValue(val);
      });

      if (replacementPromise) {
        replacementPromise = replacementPromise.then(function () {
          return replacement;
        });
      }

      if (opt_sync) {
        return replacement;
      }
      return replacementPromise || Promise.resolve(replacement);
    }

    /**
     * Collects all substitutions in the provided URL and expands them to the
     * values for known variables. Optional `opt_bindings` can be used to add
     * new variables or override existing ones.
     * @param {string} url
     * @param {!Object<string, *>=} opt_bindings
     * @return {!Promise<!Object<string, *>>}
     */

  }, {
    key: 'collectVars',
    value: function collectVars(url, opt_bindings) {
      var vars = Object.create(null);
      return this.expand_(url, opt_bindings, vars).then(function () {
        return vars;
      });
    }

    /**
     * Collects substitutions in the `src` attribute of the given element
     * that are _not_ whitelisted via `data-amp-replace` opt-in attribute.
     * @param {!Element} element
     * @return {!Array<string>}
     */

  }, {
    key: 'collectUnwhitelistedVarsSync',
    value: function collectUnwhitelistedVarsSync(element) {
      var url = element.getAttribute('src');
      var vars = Object.create(null);
      this.expandStringSync(url, /* opt_bindings */undefined, vars);
      var varNames = Object.keys(vars);

      var whitelist = this.getWhitelistForElement_(element);
      if (whitelist) {
        return varNames.filter(function (v) {
          return !whitelist[v];
        });
      } else {
        // All vars are unwhitelisted if the element has no whitelist.
        return varNames;
      }
    }

    /**
     * Ensures that the protocol of the original url matches the protocol of the
     * replacement url. Returns the replacement if they do, the original if they
     * do not.
     * @param {string} url
     * @param {string} replacement
     * @return {string}
     */

  }, {
    key: 'ensureProtocolMatches_',
    value: function ensureProtocolMatches_(url, replacement) {
      var newProtocol = (0, _url.parseUrlDeprecated)(replacement, /* opt_nocache */true).protocol;
      var oldProtocol = (0, _url.parseUrlDeprecated)(url, /* opt_nocache */true).protocol;
      if (newProtocol != oldProtocol) {
        (0, _log.user)().error(TAG, 'Illegal replacement of the protocol: ', url);
        return url;
      }
      (0, _log.user)().assert((0, _url.isProtocolValid)(replacement), 'The replacement url has invalid protocol: %s', replacement);

      return replacement;
    }

    /**
     * @return {VariableSource}
     */

  }, {
    key: 'getVariableSource',
    value: function getVariableSource() {
      return this.variableSource_;
    }
  }]);

  return UrlReplacements;
}();

/**
 * Extracts client ID from a _ga cookie.
 * https://developers.google.com/analytics/devguides/collection/analyticsjs/cookies-user-id
 * @param {string} gaCookie
 * @return {string}
 */


function extractClientIdFromGaCookie(gaCookie) {
  return gaCookie.replace(/^(GA1|1)\.[\d-]+\./, '');
}

/**
 * @param {!./ampdoc-impl.AmpDoc} ampdoc
 */
function installUrlReplacementsServiceForDoc(ampdoc) {
  (0, _service.registerServiceBuilderForDoc)(ampdoc, 'url-replace', function (doc) {
    return new UrlReplacements(doc, new GlobalVariableSource(doc));
  });
}

/**
 * @param {!./ampdoc-impl.AmpDoc} ampdoc
 * @param {!Window} embedWin
 * @param {!VariableSource} varSource
 */
function installUrlReplacementsForEmbed(ampdoc, embedWin, varSource) {
  (0, _service.installServiceInEmbedScope)(embedWin, 'url-replace', new UrlReplacements(ampdoc, varSource));
}

/**
 * @typedef {{incomingFragment: string, outgoingFragment: string}}
 */
var ShareTrackingFragmentsDef = void 0;

},{"../experiments":37,"../impression.js":42,"../log":46,"../service":59,"../services":64,"../url":72,"../utils/object":78,"../utils/promise":79,"../window-interface":81,"./url-expander/expander":61,"./variable-source":63}],63:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VariableSource = exports.AsyncResolverDef = exports.SyncResolverDef = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright 2016 The AMP HTML Authors. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * distributed under the License is distributed on an "AS-IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


exports.getTimingDataAsync = getTimingDataAsync;
exports.getTimingDataSync = getTimingDataSync;
exports.getNavigationData = getNavigationData;

var _log = require('../log');

var _types = require('../types');

var _eventHelper = require('../event-helper');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** @typedef {string|number|boolean|undefined|null} */
var ResolverReturnDef = void 0;

/** @typedef {function(...*):ResolverReturnDef} */
var SyncResolverDef = exports.SyncResolverDef = void 0;

/** @typedef {function(...*):!Promise<ResolverReturnDef>} */
var AsyncResolverDef = exports.AsyncResolverDef = void 0;

/** @typedef {{sync: SyncResolverDef, async: AsyncResolverDef}} */
var ReplacementDef = void 0;

/**
 * Returns navigation timing information based on the start and end events.
 * The data for the timing events is retrieved from performance.timing API.
 * If start and end events are both given, the result is the difference between
 * the two. If only start event is given, the result is the timing value at
 * start event.
 * @param {!Window} win
 * @param {string} startEvent
 * @param {string=} endEvent
 * @return {!Promise<ResolverReturnDef>}
 */
function getTimingDataAsync(win, startEvent, endEvent) {
  return (0, _eventHelper.loadPromise)(win).then(function () {
    return getTimingDataSync(win, startEvent, endEvent);
  });
}

/**
 * Returns navigation timing information based on the start and end events.
 * The data for the timing events is retrieved from performance.timing API.
 * If start and end events are both given, the result is the difference between
 * the two. If only start event is given, the result is the timing value at
 * start event. Enforces synchronous evaluation.
 * @param {!Window} win
 * @param {string} startEvent
 * @param {string=} endEvent
 * @return {ResolverReturnDef} undefined if API is not available, empty string
 *    if it is not yet available, or value as string
 */
function getTimingDataSync(win, startEvent, endEvent) {
  var timingInfo = win['performance'] && win['performance']['timing'];
  if (!timingInfo || timingInfo['navigationStart'] == 0) {
    // Navigation timing API is not supported.
    return;
  }

  var metric = endEvent === undefined ? timingInfo[startEvent] : timingInfo[endEvent] - timingInfo[startEvent];

  if (!(0, _types.isFiniteNumber)(metric) || metric < 0) {
    // The metric is not supported.
    return;
  } else {
    return metric;
  }
}

/**
 * Returns navigation information from the current browsing context.
 * @param {!Window} win
 * @param {string} attribute
 * @return {ResolverReturnDef}
 * @private
 */
function getNavigationData(win, attribute) {
  var navigationInfo = win['performance'] && win['performance']['navigation'];
  if (!navigationInfo || navigationInfo[attribute] === undefined) {
    // PerformanceNavigation interface is not supported or attribute is not
    // implemented.
    return;
  }
  return navigationInfo[attribute];
}

/**
 * A class to provide variable substitution related features. Extend this class
 * and override initialize() to add more supported variables.
 */

var VariableSource = exports.VariableSource = function () {
  /**
   * @param {!./ampdoc-impl.AmpDoc} ampdoc
   */
  function VariableSource(ampdoc) {
    _classCallCheck(this, VariableSource);

    /** @protected @const {!./ampdoc-impl.AmpDoc} */
    this.ampdoc = ampdoc;

    /** @private {!RegExp|undefined} */
    this.replacementExpr_ = undefined;

    /** @private {!RegExp|undefined} */
    this.replacementExprV2_ = undefined;

    /** @private @const {!Object<string, !ReplacementDef>} */
    this.replacements_ = Object.create(null);

    /** @private {boolean} */
    this.initialized_ = false;

    this.getUrlMacroWhitelist_();
  }

  /**
   * Lazily initialize the default replacements.
   * @private
   */


  _createClass(VariableSource, [{
    key: 'initialize_',
    value: function initialize_() {
      this.initialize();
      this.initialized_ = true;
    }

    /**
     * Override this method to set all the variables supported by derived class.
     */

  }, {
    key: 'initialize',
    value: function initialize() {}
    // Needs to be implemented by derived classes.


    /**
     * Method exists to assist stubbing in tests.
     * @param {string} name
     * @return {!ReplacementDef}
     */

  }, {
    key: 'get',
    value: function get(name) {
      if (!this.initialized_) {
        this.initialize_();
      }

      return this.replacements_[name];
    }

    /**
     * Sets a synchronous value resolver for the variable with the specified name.
     * The value resolver may optionally take an extra parameter.
     * Can be called in conjunction with setAsync to allow for additional
     * asynchronous resolver where expand will use async and expandSync the sync
     * version.
     * @param {string} varName
     * @param {!SyncResolverDef} syncResolver
     * @return {!VariableSource}
     */

  }, {
    key: 'set',
    value: function set(varName, syncResolver) {
      (0, _log.dev)().assert(varName.indexOf('RETURN') == -1);
      this.replacements_[varName] = this.replacements_[varName] || { sync: undefined, async: undefined };
      this.replacements_[varName].sync = syncResolver;
      this.replacementExpr_ = undefined;
      this.replacementExprV2_ = undefined;
      return this;
    }

    /**
     * Sets an async value resolver for the variable with the specified name.
     * The value resolver may optionally take an extra parameter.
     * Can be called in conjuction with setAsync to allow for additional
     * asynchronous resolver where expand will use async and expandSync the sync
     * version.
     * @param {string} varName
     * @param {!AsyncResolverDef} asyncResolver
     * @return {!VariableSource}
     */

  }, {
    key: 'setAsync',
    value: function setAsync(varName, asyncResolver) {
      (0, _log.dev)().assert(varName.indexOf('RETURN') == -1);
      this.replacements_[varName] = this.replacements_[varName] || { sync: undefined, async: undefined };
      this.replacements_[varName].async = asyncResolver;
      this.replacementExpr_ = undefined;
      this.replacementExprV2_ = undefined;
      return this;
    }

    /**
     * Helper method to set both sync and async resolvers.
     * @param {string} varName
     * @param {!SyncResolverDef} syncResolver
     * @param {!AsyncResolverDef} asyncResolver
     * @return {!VariableSource}
     */

  }, {
    key: 'setBoth',
    value: function setBoth(varName, syncResolver, asyncResolver) {
      return this.set(varName, syncResolver).setAsync(varName, asyncResolver);
    }

    /**
     * Returns a Regular expression that can be used to detect all the variables
     * in a template.
     * @param {!Object<string, *>=} opt_bindings
     * @param {boolean=} isV2 Flag to ignore capture of args.
     * @param {!Object<string, boolean>=} opt_whiteList Optional white list of names
     *   that can be substituted.
     */

  }, {
    key: 'getExpr',
    value: function getExpr(opt_bindings, isV2, opt_whiteList) {
      var _this = this;

      if (!this.initialized_) {
        this.initialize_();
      }

      var additionalKeys = opt_bindings ? Object.keys(opt_bindings) : null;
      if (additionalKeys && additionalKeys.length > 0) {
        var allKeys = Object.keys(this.replacements_);
        additionalKeys.forEach(function (key) {
          if (_this.replacements_[key] === undefined) {
            allKeys.push(key);
          }
        });
        return this.buildExpr_(allKeys, isV2, opt_whiteList);
      }
      if (!this.replacementExpr_ && !isV2) {
        this.replacementExpr_ = this.buildExpr_(Object.keys(this.replacements_));
      }
      // sometimes the v1 expand will be called before the v2
      // so we need to cache both versions
      if (!this.replacementExprV2_ && isV2) {
        this.replacementExprV2_ = this.buildExpr_(Object.keys(this.replacements_), isV2, opt_whiteList);
      }

      return isV2 ? this.replacementExprV2_ : this.replacementExpr_;
    }

    /**
     * @param {!Array<string>} keys
     * @param {boolean=} isV2 flag to ignore capture of args
     * @param {!Object<string, boolean>=} opt_whiteList Optional white list of names
     *   that can be substituted.
     * @return {!RegExp}
     * @private
     */

  }, {
    key: 'buildExpr_',
    value: function buildExpr_(keys, isV2, opt_whiteList) {
      var _this2 = this;

      // If a whitelist is present, the keys must belong to the whitelist.
      // We filter the keys one last time to ensure no unwhitelisted key is
      // allowed.
      if (this.getUrlMacroWhitelist_()) {
        keys = keys.filter(function (key) {
          return _this2.getUrlMacroWhitelist_().includes(key);
        });
      }
      // If a whitelist is passed into the call to GlobalVariableSource.expand_
      // then we only resolve values contained in the whitelist.
      if (opt_whiteList) {
        keys = keys.filter(function (key) {
          return opt_whiteList[key];
        });
      }
      // The keys must be sorted to ensure that the longest keys are considered
      // first. This avoids a problem where a RANDOM conflicts with RANDOM_ONE.
      keys.sort(function (s1, s2) {
        return s2.length - s1.length;
      });
      // Keys that start with a `$` need to be escaped so that they do not
      // interfere with the regex that is constructed.
      var escaped = keys.map(function (key) {
        if (key[0] === '$') {
          return '\\' + key;
        }
        return key;
      });

      var all = escaped.join('|');
      // Match the given replacement patterns, as well as optionally
      // arguments to the replacement behind it in parentheses.
      // Example string that match
      // FOO_BAR
      // FOO_BAR(arg1)
      // FOO_BAR(arg1,arg2)
      // FOO_BAR(arg1, arg2)
      var regexStr = '\\$?(' + all + ')';
      // ignore the capturing of arguments in new parser
      if (!isV2) {
        regexStr += '(?:\\(((?:\\s*[0-9a-zA-Z-_.]*\\s*(?=,|\\)),?)*)\\s*\\))?';
      }
      return new RegExp(regexStr, 'g');
    }

    /**
     * @return {?Array<string>} The whitelist of allowed AMP variables. (if provided in
     *     a meta tag).
     * @private
     */

  }, {
    key: 'getUrlMacroWhitelist_',
    value: function getUrlMacroWhitelist_() {
      if (this.variableWhitelist_) {
        return this.variableWhitelist_;
      }

      var _ampdoc$getRootNode = this.ampdoc.getRootNode(),
          head = _ampdoc$getRootNode.head;

      if (!head) {
        return null;
      }

      // A meta[name="amp-allowed-url-macros"] tag, if present,
      // contains, in its content attribute, a whitelist of variable substitution.
      var meta = head.querySelector('meta[name="amp-allowed-url-macros"]');
      if (!meta) {
        return null;
      }

      /**
       * The whitelist of variables allowed for variable substitution.
       * @private {?Array<string>}
       */
      this.variableWhitelist_ = meta.getAttribute('content').split(',').map(function (variable) {
        return variable.trim();
      });
      return this.variableWhitelist_;
    }
  }]);

  return VariableSource;
}();

},{"../event-helper":36,"../log":46,"../types":69}],64:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Services = exports.SubscriptionService = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright 2017 The AMP HTML Authors. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * distributed under the License is distributed on an "AS-IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _service = require('./service');

var _elementService = require('./element-service');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** @typedef {!../extensions/amp-subscriptions/0.1/amp-subscriptions.SubscriptionService} */
var SubscriptionService = exports.SubscriptionService = void 0;

var Services = exports.Services = function () {
  function Services() {
    _classCallCheck(this, Services);
  }

  _createClass(Services, null, [{
    key: 'accessServiceForDoc',

    /**
     * Hint: Add extensions folder path to compile.js with
     * warnings cannot find modules.
     */

    /**
     * Returns a promise for the Access service.
     * @param {!Element|!./service/ampdoc-impl.AmpDoc} elementOrAmpDoc
     * @return {!Promise<!../extensions/amp-access/0.1/amp-access.AccessService>}
     */
    value: function accessServiceForDoc(elementOrAmpDoc) {
      return (/** @type {!Promise<!../extensions/amp-access/0.1/amp-access.AccessService>} */(0, _elementService.getElementServiceForDoc)(elementOrAmpDoc, 'access', 'amp-access')
      );
    }

    /**
     * Returns a promise for the Access service or a promise for null if the
     * service is not available on the current page.
     * @param {!Element|!./service/ampdoc-impl.AmpDoc} elementOrAmpDoc
     * @return {!Promise<?../extensions/amp-access/0.1/amp-access.AccessService>}
     */

  }, {
    key: 'accessServiceForDocOrNull',
    value: function accessServiceForDocOrNull(elementOrAmpDoc) {
      return (/** @type {!Promise<?../extensions/amp-access/0.1/amp-access.AccessService>} */(0, _elementService.getElementServiceIfAvailableForDoc)(elementOrAmpDoc, 'access', 'amp-access')
      );
    }

    /**
     * Returns a promise for the Subscriptions service.
     * @param {!Element|!./service/ampdoc-impl.AmpDoc} elementOrAmpDoc
     * @return {!Promise<!SubscriptionService>}
     */

  }, {
    key: 'subscriptionsServiceForDoc',
    value: function subscriptionsServiceForDoc(elementOrAmpDoc) {
      return (/** @type {!Promise<!SubscriptionService>} */(0, _elementService.getElementServiceForDoc)(elementOrAmpDoc, 'subscriptions', 'amp-subscriptions')
      );
    }

    /**
     * Returns a promise for the Subscriptions service.
     * @param {!Element|!./service/ampdoc-impl.AmpDoc} elementOrAmpDoc
     * @return {!Promise<?SubscriptionService>}
     */

  }, {
    key: 'subscriptionsServiceForDocOrNull',
    value: function subscriptionsServiceForDocOrNull(elementOrAmpDoc) {
      return (/** @type {!Promise<?SubscriptionService>} */(0, _elementService.getElementServiceIfAvailableForDoc)(elementOrAmpDoc, 'subscriptions', 'amp-subscriptions')
      );
    }

    /**
     * Unlike most service getters, passing `Node` is necessary for some FIE-scope
     * services since sometimes we only have the FIE Document for context.
     * @param {!Node|!./service/ampdoc-impl.AmpDoc} nodeOrDoc
     * @return {!./service/action-impl.ActionService}
     */

  }, {
    key: 'actionServiceForDoc',
    value: function actionServiceForDoc(nodeOrDoc) {
      return (/** @type {!./service/action-impl.ActionService} */(0, _service.getExistingServiceForDocInEmbedScope)(nodeOrDoc, 'action', /* opt_fallbackToTopWin */true)
      );
    }

    /**
     * @param {!Element|!./service/ampdoc-impl.AmpDoc} elementOrAmpDoc
     * @return {!Promise<!Activity>}
     */

  }, {
    key: 'activityForDoc',
    value: function activityForDoc(elementOrAmpDoc) {
      return (/** @type {!Promise<!Activity>} */(0, _elementService.getElementServiceForDoc)(elementOrAmpDoc, 'activity', 'amp-analytics')
      );
    }

    /**
     * Returns the global instance of the `AmpDocService` service that can be
     * used to resolve an ampdoc for any node: either in the single-doc or
     * shadow-doc environment.
     * @param {!Window} window
     * @return {!./service/ampdoc-impl.AmpDocService}
     */

  }, {
    key: 'ampdocServiceFor',
    value: function ampdocServiceFor(window) {
      return (/** @type {!./service/ampdoc-impl.AmpDocService} */(0, _service.getService)(window, 'ampdoc')
      );
    }

    /**
     * Returns the AmpDoc for the specified context node.
     * @param {!Element|!./service/ampdoc-impl.AmpDoc} elementOrAmpDoc
     * @return {!./service/ampdoc-impl.AmpDoc}
     */

  }, {
    key: 'ampdoc',
    value: function ampdoc(elementOrAmpDoc) {
      return (0, _service.getAmpdoc)(elementOrAmpDoc);
    }

    /**
     * @param {!Element|!./service/ampdoc-impl.AmpDoc} elementOrAmpDoc
     * @param {boolean=} loadAnalytics
     * @return {!Promise<!../extensions/amp-analytics/0.1/instrumentation.InstrumentationService>}
     */

  }, {
    key: 'analyticsForDoc',
    value: function analyticsForDoc(elementOrAmpDoc) {
      var loadAnalytics = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (loadAnalytics) {
        // Get Extensions service and force load analytics extension.
        var ampdoc = (0, _service.getAmpdoc)(elementOrAmpDoc);
        Services.extensionsFor(ampdoc.win). /*OK*/installExtensionForDoc(ampdoc, 'amp-analytics');
      }
      return (/** @type {!Promise<!../extensions/amp-analytics/0.1/instrumentation.InstrumentationService>} */(0, _elementService.getElementServiceForDoc)(elementOrAmpDoc, 'amp-analytics-instrumentation', 'amp-analytics')
      );
    }

    /**
     * @param {!Element|!./service/ampdoc-impl.AmpDoc} elementOrAmpDoc
     * @return {!Promise<?../extensions/amp-analytics/0.1/instrumentation.InstrumentationService>}
     */

  }, {
    key: 'analyticsForDocOrNull',
    value: function analyticsForDocOrNull(elementOrAmpDoc) {
      return (/** @type {!Promise<?../extensions/amp-analytics/0.1/instrumentation.InstrumentationService>} */(0, _elementService.getElementServiceIfAvailableForDoc)(elementOrAmpDoc, 'amp-analytics-instrumentation', 'amp-analytics')
      );
    }

    /**
     * @param {!Window} window
     * @return {!./service/batched-xhr-impl.BatchedXhr}
     */

  }, {
    key: 'batchedXhrFor',
    value: function batchedXhrFor(window) {
      return (/** @type {!./service/batched-xhr-impl.BatchedXhr} */(0, _service.getService)(window, 'batched-xhr')
      );
    }

    /**
     * @param {!Element|!./service/ampdoc-impl.AmpDoc} elementOrAmpDoc
     * @return {!Promise<?../extensions/amp-bind/0.1/bind-impl.Bind>}
     */

  }, {
    key: 'bindForDocOrNull',
    value: function bindForDocOrNull(elementOrAmpDoc) {
      return (/** @type {!Promise<?../extensions/amp-bind/0.1/bind-impl.Bind>} */(0, _elementService.getElementServiceIfAvailableForDocInEmbedScope)(elementOrAmpDoc, 'bind', 'amp-bind')
      );
    }

    /**
     * @param {!Element|!./service/ampdoc-impl.AmpDoc} elementOrAmpDoc
     * @return {!Promise<!./service/cid-impl.Cid>}
     */

  }, {
    key: 'cidForDoc',
    value: function cidForDoc(elementOrAmpDoc) {
      return (/** @type {!Promise<!./service/cid-impl.Cid>} */(0, _service.getServicePromiseForDoc)(elementOrAmpDoc, 'cid')
      );
    }

    /**
     * @param {!Element|!./service/ampdoc-impl.AmpDoc} elementOrAmpDoc
     * @return {!./service/navigation.Navigation}
     */

  }, {
    key: 'navigationForDoc',
    value: function navigationForDoc(elementOrAmpDoc) {
      return (/** @type {!./service/navigation.Navigation} */(0, _service.getServiceForDoc)(elementOrAmpDoc, 'navigation')
      );
    }

    /**
     * @param {!Window} window
     * @return {!./service/crypto-impl.Crypto}
     */

  }, {
    key: 'cryptoFor',
    value: function cryptoFor(window) {
      return (/** @type {!./service/crypto-impl.Crypto} */(0, _service.getService)(window, 'crypto')
      );
    }

    /**
     * @param {!Element|!./service/ampdoc-impl.AmpDoc} elementOrAmpDoc
     * @return {!./service/document-info-impl.DocumentInfoDef} Info about the doc
     */

  }, {
    key: 'documentInfoForDoc',
    value: function documentInfoForDoc(elementOrAmpDoc) {
      return (/** @type {!./service/document-info-impl.DocInfo} */(0, _service.getServiceForDoc)(elementOrAmpDoc, 'documentInfo').get()
      );
    }

    /**
     * @param {!Window} window
     * @return {!./service/document-state.DocumentState}
     */

  }, {
    key: 'documentStateFor',
    value: function documentStateFor(window) {
      return (0, _service.getService)(window, 'documentState');
    }

    /**
     * @param {!Window} window
     * @return {!./service/extensions-impl.Extensions}
     */

  }, {
    key: 'extensionsFor',
    value: function extensionsFor(window) {
      return (/** @type {!./service/extensions-impl.Extensions} */(0, _service.getService)(window, 'extensions')
      );
    }

    /**
     * Returns service implemented in service/history-impl.
     * @param {!Element|!./service/ampdoc-impl.AmpDoc} elementOrAmpDoc
     * @return {!./service/history-impl.History}
     */

  }, {
    key: 'historyForDoc',
    value: function historyForDoc(elementOrAmpDoc) {
      return (/** @type {!./service/history-impl.History} */(0, _service.getServiceForDoc)(elementOrAmpDoc, 'history')
      );
    }

    /**
     * @param {!Window} win
     * @return {!./input.Input}
     */

  }, {
    key: 'inputFor',
    value: function inputFor(win) {
      return (0, _service.getService)(win, 'input');
    }

    /**
     * @param {!Element|!./service/ampdoc-impl.AmpDoc} elementOrAmpDoc
     * @return {!./service/layers-impl.LayoutLayers}
     */

  }, {
    key: 'layersForDoc',
    value: function layersForDoc(elementOrAmpDoc) {
      return (/** @type {!./service/layers-impl.LayoutLayers} */(0, _service.getServiceForDoc)(elementOrAmpDoc, 'layers')
      );
    }

    /**
     * @param {!Window} window
     * @return {!./service/performance-impl.Performance}
     */

  }, {
    key: 'performanceFor',
    value: function performanceFor(window) {
      return (/** @type {!./service/performance-impl.Performance}*/(0, _service.getService)(window, 'performance')
      );
    }

    /**
     * @param {!Window} window
     * @return {!./service/performance-impl.Performance}
     */

  }, {
    key: 'performanceForOrNull',
    value: function performanceForOrNull(window) {
      return (/** @type {!./service/performance-impl.Performance}*/(0, _service.getExistingServiceOrNull)(window, 'performance')
      );
    }

    /**
     * @param {!Window} window
     * @return {!./service/platform-impl.Platform}
     */

  }, {
    key: 'platformFor',
    value: function platformFor(window) {
      return (/** @type {!./service/platform-impl.Platform} */(0, _service.getService)(window, 'platform')
      );
    }

    /**
     * Uses getServiceForDocDeprecated() since Resources is a startup service.
     * @param {!Node|!./service/ampdoc-impl.AmpDoc} nodeOrDoc
     * @return {!./service/resources-impl.Resources}
     */

  }, {
    key: 'resourcesForDoc',
    value: function resourcesForDoc(nodeOrDoc) {
      return (/** @type {!./service/resources-impl.Resources} */(0, _service.getServiceForDocDeprecated)(nodeOrDoc, 'resources')
      );
    }

    /**
     * @param {!Window} win
     * @return {?Promise<?{incomingFragment: string, outgoingFragment: string}>}
     */

  }, {
    key: 'shareTrackingForOrNull',
    value: function shareTrackingForOrNull(win) {
      return (/** @type {!Promise<?{incomingFragment: string, outgoingFragment: string}>} */(0, _elementService.getElementServiceIfAvailable)(win, 'share-tracking', 'amp-share-tracking', true)
      );
    }

    /**
     * @param {!Window} win
     * @return {?Promise<?../extensions/amp-story/1.0/variable-service.StoryVariableDef>}
     */

  }, {
    key: 'storyVariableServiceForOrNull',
    value: function storyVariableServiceForOrNull(win) {
      return (
        /** @type {!Promise<?../extensions/amp-story/1.0/variable-service.StoryVariableDef>} */
        (0, _elementService.getElementServiceIfAvailable)(win, 'story-variable', 'amp-story', true)
      );
    }

    /**
     * Version of the story store service depends on which version of amp-story
     * the publisher is loading. They all have the same implementation.
     * @param {!Window} win
     * @return {?Promise<?../extensions/amp-story/1.0/amp-story-store-service.AmpStoryStoreService|?../extensions/amp-story/0.1/amp-story-store-service.AmpStoryStoreService>}
     */

  }, {
    key: 'storyStoreServiceForOrNull',
    value: function storyStoreServiceForOrNull(win) {
      return (
        /** @type {!Promise<?../extensions/amp-story/1.0/amp-story-store-service.AmpStoryStoreService|?../extensions/amp-story/0.1/amp-story-store-service.AmpStoryStoreService>} */
        (0, _elementService.getElementServiceIfAvailable)(win, 'story-store', 'amp-story')
      );
    }

    /**
     * @param {!Window} win
     * @return {?../extensions/amp-story/1.0/amp-story-store-service.AmpStoryStoreService}
     */

  }, {
    key: 'storyStoreService',
    value: function storyStoreService(win) {
      return (/** @type {?../extensions/amp-story/1.0/amp-story-store-service.AmpStoryStoreService} */
        (0, _service.getExistingServiceOrNull)(win, 'story-store')
      );
    }

    /**
     * @param {!Window} win
     * @return {?../extensions/amp-story/1.0/amp-story-request-service.AmpStoryRequestService}
     */

  }, {
    key: 'storyRequestService',
    value: function storyRequestService(win) {
      return (/** @type {?../extensions/amp-story/1.0/amp-story-request-service.AmpStoryRequestService} */
        (0, _service.getExistingServiceOrNull)(win, 'story-request')
      );
    }

    /**
     * @param {!Window} win
     * @return {!Promise<?../extensions/amp-story/1.0/localization.LocalizationService>}
     */

  }, {
    key: 'localizationServiceForOrNull',
    value: function localizationServiceForOrNull(win) {
      return (
        /** @type {!Promise<?../extensions/amp-story/1.0/localization.LocalizationService>} */
        (0, _elementService.getElementServiceIfAvailable)(win, 'localization', 'amp-story', true)
      );
    }

    /**
     * @param {!Window} win
     * @return {!../extensions/amp-story/1.0/localization.LocalizationService}
     */

  }, {
    key: 'localizationService',
    value: function localizationService(win) {
      return (0, _service.getService)(win, 'localization');
    }

    /**
     * TODO(#14357): Remove this when amp-story:0.1 is deprecated.
     * @param {!Window} win
     * @return {!../extensions/amp-story/0.1/amp-story-store-service.AmpStoryStoreService}
     */

  }, {
    key: 'storyStoreServiceV01',
    value: function storyStoreServiceV01(win) {
      return (0, _service.getService)(win, 'story-store');
    }

    /**
     * TODO(#14357): Remove this when amp-story:0.1 is deprecated.
     * @param {!Window} win
     * @return {!../extensions/amp-story/0.1/amp-story-request-service.AmpStoryRequestService}
     */

  }, {
    key: 'storyRequestServiceV01',
    value: function storyRequestServiceV01(win) {
      return (0, _service.getService)(win, 'story-request-v01');
    }

    /**
     * TODO(#14357): Remove this when amp-story:0.1 is deprecated.
     * @param {!Window} win
     * @return {!Promise<?../extensions/amp-story/0.1/localization.LocalizationService>}
     */

  }, {
    key: 'localizationServiceForOrNullV01',
    value: function localizationServiceForOrNullV01(win) {
      return (
        /** @type {!Promise<?../extensions/amp-story/0.1/localization.LocalizationService>} */
        (0, _elementService.getElementServiceIfAvailable)(win, 'localization-v01', 'amp-story', true)
      );
    }

    /**
     * TODO(#14357): Remove this when amp-story:0.1 is deprecated.
     * @param {!Window} win
     * @return {!../extensions/amp-story/0.1/localization.LocalizationService}
     */

  }, {
    key: 'localizationServiceV01',
    value: function localizationServiceV01(win) {
      return (0, _service.getService)(win, 'localization-v01');
    }

    /**
     * @param {!Window} win
     * @return {?Promise<?../extensions/amp-viewer-integration/0.1/variable-service.ViewerIntegrationVariableDef>}
     */

  }, {
    key: 'viewerIntegrationVariableServiceForOrNull',
    value: function viewerIntegrationVariableServiceForOrNull(win) {
      return (
        /** @type {!Promise<?../extensions/amp-viewer-integration/0.1/variable-service.ViewerIntegrationVariableDef>} */
        (0, _elementService.getElementServiceIfAvailable)(win, 'viewer-integration-variable', 'amp-viewer-integration', true)
      );
    }

    /**
     * @param {!Element|!./service/ampdoc-impl.AmpDoc} elementOrAmpDoc
     * @return {!Promise<!../extensions/amp-animation/0.1/web-animation-service.WebAnimationService>}
     */

  }, {
    key: 'webAnimationServiceFor',
    value: function webAnimationServiceFor(elementOrAmpDoc) {
      return (/** @type {!Promise<!../extensions/amp-animation/0.1/web-animation-service.WebAnimationService>} */
        (0, _elementService.getElementServiceForDoc)(elementOrAmpDoc, 'web-animation', 'amp-animation')
      );
    }

    /**
     * @param {!Element|!./service/ampdoc-impl.AmpDoc} elementOrAmpDoc
     * @return {!Promise<!./service/storage-impl.Storage>}
     */

  }, {
    key: 'storageForDoc',
    value: function storageForDoc(elementOrAmpDoc) {
      return (/** @type {!Promise<!./service/storage-impl.Storage>} */(0, _service.getServicePromiseForDoc)(elementOrAmpDoc, 'storage')
      );
    }

    /**
     * @param {!Window} window
     * @return {!./service/template-impl.Templates}
     */

  }, {
    key: 'templatesFor',
    value: function templatesFor(window) {
      return (/** @type {!./service/template-impl.Templates} */(0, _service.getService)(window, 'templates')
      );
    }

    /**
     * @param {!Window} window
     * @return {!./service/timer-impl.Timer}
     */

  }, {
    key: 'timerFor',
    value: function timerFor(window) {
      return (/** @type {!./service/timer-impl.Timer} */(0, _service.getService)(window, 'timer')
      );
    }

    /**
     * Unlike most service getters, passing `Node` is necessary for some FIE-scope
     * services since sometimes we only have the FIE Document for context.
     * @param {!Node|!./service/ampdoc-impl.AmpDoc} nodeOrDoc
     * @return {!./service/url-replacements-impl.UrlReplacements}
     */

  }, {
    key: 'urlReplacementsForDoc',
    value: function urlReplacementsForDoc(nodeOrDoc) {
      return (/** @type {!./service/url-replacements-impl.UrlReplacements} */(0, _service.getExistingServiceForDocInEmbedScope)(nodeOrDoc, 'url-replace', /* opt_fallbackToTopWin */true)
      );
    }

    /**
     * @param {!Element|!./service/ampdoc-impl.AmpDoc} elementOrAmpDoc
     * @return {!Promise<!../extensions/amp-user-notification/0.1/amp-user-notification.UserNotificationManager>}
     */

  }, {
    key: 'userNotificationManagerForDoc',
    value: function userNotificationManagerForDoc(elementOrAmpDoc) {
      return (/** @type {!Promise<!../extensions/amp-user-notification/0.1/amp-user-notification.UserNotificationManager>} */
        (0, _elementService.getElementServiceForDoc)(elementOrAmpDoc, 'userNotificationManager', 'amp-user-notification')
      );
    }

    /**
     * Returns a promise for the consentPolicy Service or a promise for null if
     * the service is not available on the current page.
     * @param {!Element|!./service/ampdoc-impl.AmpDoc} elementOrAmpDoc
     * @return {!Promise<?../extensions/amp-consent/0.1/consent-policy-manager.ConsentPolicyManager>}
     */

  }, {
    key: 'consentPolicyServiceForDocOrNull',
    value: function consentPolicyServiceForDocOrNull(elementOrAmpDoc) {
      return (/** @type {!Promise<?../extensions/amp-consent/0.1/consent-policy-manager.ConsentPolicyManager>} */
        (0, _elementService.getElementServiceIfAvailableForDoc)(elementOrAmpDoc, 'consentPolicyManager', 'amp-consent')
      );
    }

    /**
     * Returns a promise for the geo service or a promise for null if
     * the service is not available on the current page.
     * @param {!Element|!./service/ampdoc-impl.AmpDoc} elementOrAmpDoc
     * @return {!Promise<?../extensions/amp-geo/0.1/amp-geo.GeoDef>}
     */

  }, {
    key: 'geoForDocOrNull',
    value: function geoForDocOrNull(elementOrAmpDoc) {
      return (/** @type {!Promise<?../extensions/amp-geo/0.1/amp-geo.GeoDef>} */(0, _elementService.getElementServiceIfAvailableForDoc)(elementOrAmpDoc, 'geo', 'amp-geo', true)
      );
    }

    /**
     * Unlike most service getters, passing `Node` is necessary for some FIE-scope
     * services since sometimes we only have the FIE Document for context.
     * @param {!Node|!./service/ampdoc-impl.AmpDoc} nodeOrDoc
     * @return {!./service/url-impl.Url}
     */

  }, {
    key: 'urlForDoc',
    value: function urlForDoc(nodeOrDoc) {
      return (/** @type {!./service/url-impl.Url} */(0, _service.getExistingServiceForDocInEmbedScope)(nodeOrDoc, 'url', /* opt_fallbackToTopWin */true)
      );
    }

    /**
     * Returns a promise for the experiment variants or a promise for null if it
     * is not available on the current page.
     * @param {!Window} win
     * @return {!Promise<?Object<string>>}
     */

  }, {
    key: 'variantForOrNull',
    value: function variantForOrNull(win) {
      return (/** @type {!Promise<?Object<string>>} */(0, _elementService.getElementServiceIfAvailable)(win, 'variant', 'amp-experiment', true)
      );
    }

    /**
     * @param {!Element|!./service/ampdoc-impl.AmpDoc} elementOrAmpDoc
     * @return {!./service/video-service-interface.VideoServiceInterface}
     */

  }, {
    key: 'videoManagerForDoc',
    value: function videoManagerForDoc(elementOrAmpDoc) {
      return (
        /** @type {!./service/video-service-interface.VideoServiceInterface} */(0, _service.getServiceForDoc)(elementOrAmpDoc, 'video-manager')
      );
    }

    /**
     * Uses getServiceForDocDeprecated() since Viewer is a startup service.
     * @param {!Node|!./service/ampdoc-impl.AmpDoc} nodeOrDoc
     * @return {!./service/viewer-impl.Viewer}
     */

  }, {
    key: 'viewerForDoc',
    value: function viewerForDoc(nodeOrDoc) {
      return (/** @type {!./service/viewer-impl.Viewer} */(0, _service.getServiceForDocDeprecated)(nodeOrDoc, 'viewer')
      );
    }

    /**
     * Returns promise for the viewer. This is an unusual case and necessary only
     * for services that need reference to the viewer before it has been
     * initialized. Most of the code, however, just should use `viewerForDoc`.
     * @param {!Element|!./service/ampdoc-impl.AmpDoc} elementOrAmpDoc
     * @return {!Promise<!./service/viewer-impl.Viewer>}
     */

  }, {
    key: 'viewerPromiseForDoc',
    value: function viewerPromiseForDoc(elementOrAmpDoc) {
      return (/** @type {!Promise<!./service/viewer-impl.Viewer>} */(0, _service.getServicePromiseForDoc)(elementOrAmpDoc, 'viewer')
      );
    }

    /**
     * @param {!Window} window
     * @return {!./service/vsync-impl.Vsync}
     */

  }, {
    key: 'vsyncFor',
    value: function vsyncFor(window) {
      return (/** @type {!./service/vsync-impl.Vsync} */(0, _service.getService)(window, 'vsync')
      );
    }

    /**
     * Uses getServiceForDocDeprecated() since Viewport is a startup service.
     * @param {!Node|!./service/ampdoc-impl.AmpDoc} nodeOrDoc
     * @return {!./service/viewport/viewport-impl.Viewport}
     */

  }, {
    key: 'viewportForDoc',
    value: function viewportForDoc(nodeOrDoc) {
      return (/** @type {!./service/viewport/viewport-impl.Viewport} */(0, _service.getServiceForDocDeprecated)(nodeOrDoc, 'viewport')
      );
    }

    /**
     * @param {!Window} window
     * @return {!./service/xhr-impl.Xhr}
     */

  }, {
    key: 'xhrFor',
    value: function xhrFor(window) {
      return (/** @type {!./service/xhr-impl.Xhr} */(0, _service.getService)(window, 'xhr')
      );
    }
  }]);

  return Services;
}();

},{"./element-service":33,"./service":59}],65:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.htmlFor = htmlFor;
exports.htmlRefs = htmlRefs;

var _log = require('./log');

var _object = require('./utils/object.js');

/**
 * Copyright 2018 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var container = void 0;

/**
 * Creates the html helper for the doc.
 *
 * @param {!Element|!Document} nodeOrDoc
 * @return {function(!Array<string>):!Element}
 */
function htmlFor(nodeOrDoc) {
  var doc = nodeOrDoc.ownerDocument || nodeOrDoc;
  if (!container || container.ownerDocument !== doc) {
    container = doc.createElement('div');
  }

  return html;
}

/**
 * A tagged template literal helper to generate static DOM trees.
 * This must be used as a tagged template, ie
 *
 * ```
 * const div = html`<div><span></span></div>`;
 * ```
 *
 * Only the root element and its subtree will be returned. DO NOT use this to
 * render subtree's with dynamic content, it WILL result in an error!
 *
 * @param {!Array<string>} strings
 * @return {!Element}
 */
function html(strings) {
  (0, _log.dev)().assert(strings.length === 1, 'Improper html template tag usage.');
  container. /*OK*/innerHTML = strings[0];

  var el = container.firstElementChild;
  (0, _log.dev)().assert(el, 'No elements in template');
  (0, _log.dev)().assert(!el.nextElementSibling, 'Too many root elements in template');

  // Clear to free memory.
  container. /*OK*/innerHTML = '';

  return el;
}

/**
 * Queries an element for all elements with a "ref" attribute, removing
 * the attribute afterwards.
 * Returns a named map of all ref elements.
 *
 * @param {!Element} root
 * @return {!Object<string, !Element>}
 */
function htmlRefs(root) {
  var elements = root.querySelectorAll('[ref]');
  var refs = (0, _object.map)();

  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var ref = (0, _log.dev)().assert(element.getAttribute('ref'), 'Empty ref attr');
    element.removeAttribute('ref');
    (0, _log.dev)().assert(refs[ref] === undefined, 'Duplicate ref');
    refs[ref] = element;
  }

  return refs;
}

},{"./log":46,"./utils/object.js":78}],66:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dashToCamelCase = dashToCamelCase;
exports.camelCaseToDash = camelCaseToDash;
exports.dashToUnderline = dashToUnderline;
exports.endsWith = endsWith;
exports.startsWith = startsWith;
exports.expandTemplate = expandTemplate;
exports.stringHash32 = stringHash32;
/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @param {string} _match
 * @param {string} character
 * @return {string}
 */
function toUpperCase(_match, character) {
  return character.toUpperCase();
}

/**
 * @param {string} match
 * @return {string}
 */
function prependDashAndToLowerCase(match) {
  return '-' + match.toLowerCase();
}

/**
 * @param {string} name Attribute name containing dashes.
 * @return {string} Dashes removed and successive character sent to upper case.
 * visibleForTesting
 */
function dashToCamelCase(name) {
  return name.replace(/-([a-z])/g, toUpperCase);
}

/**
 * Converts a string that is in camelCase to one that is in dash-case.
 *
 * @param {string} string The string to convert.
 * @return {string} The string in dash-case.
 */
function camelCaseToDash(string) {
  return string.replace(/(?!^)[A-Z]/g, prependDashAndToLowerCase);
}

/**
 * @param {string} name Attribute name with dashes
 * @return {string} Dashes replaced by underlines.
 */
function dashToUnderline(name) {
  return name.replace('-', '_');
}

/**
 * Polyfill for String.prototype.endsWith.
 * @param {string} string
 * @param {string} suffix
 * @return {boolean}
 */
function endsWith(string, suffix) {
  var index = string.length - suffix.length;
  return index >= 0 && string.indexOf(suffix, index) == index;
}

/**
 * Polyfill for String.prototype.startsWith.
 * @param {string} string
 * @param {string} prefix
 * @return {boolean}
 */
function startsWith(string, prefix) {
  if (prefix.length > string.length) {
    return false;
  }
  return string.lastIndexOf(prefix, 0) == 0;
}

/**
 * Expands placeholders in a given template string with values.
 *
 * Placeholders use ${key-name} syntax and are replaced with the value
 * returned from the given getter function.
 *
 * @param {string} template The template string to expand.
 * @param {function(string):*} getter Function used to retrieve a value for a
 *   placeholder. Returns values will be coerced into strings.
 * @param {number=} opt_maxIterations Number of times to expand the template.
 *   Defaults to 1, but should be set to a larger value your placeholder tokens
 *   can be expanded to other placeholder tokens. Take caution with large values
 *   as recursively expanding a string can be exponentially expensive.
 */
function expandTemplate(template, getter, opt_maxIterations) {
  var maxIterations = opt_maxIterations || 1;

  var _loop = function _loop(i) {
    var matches = 0;
    template = template.replace(/\${([^}]*)}/g, function (_a, b) {
      matches++;
      return getter(b);
    });
    if (!matches) {
      return 'break';
    }
  };

  for (var i = 0; i < maxIterations; i++) {
    var _ret = _loop(i);

    if (_ret === 'break') break;
  }
  return template;
}

/**
 * Hash function djb2a
 * This is intended to be a simple, fast hashing function using minimal code.
 * It does *not* have good cryptographic properties.
 * @param {string} str
 * @return {string} 32-bit unsigned hash of the string
 */
function stringHash32(str) {
  var length = str.length;

  var hash = 5381;
  for (var i = 0; i < length; i++) {
    hash = hash * 33 ^ str.charCodeAt(i);
  }
  // Convert from 32-bit signed to unsigned.
  return String(hash >>> 0);
}

},{}],67:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.installStylesForDoc = installStylesForDoc;
exports.installStylesLegacy = installStylesLegacy;
exports.installCssTransformer = installCssTransformer;
exports.makeBodyVisible = makeBodyVisible;
exports.bodyAlwaysVisible = bodyAlwaysVisible;

var _services = require('./services');

var _log = require('./log');

var _dom = require('./dom');

var _object = require('./utils/object');

var _style = require('./style');

var _renderDelayingServices = require('./render-delaying-services');

/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var TRANSFORMER_PROP = '__AMP_CSS_TR';
var STYLE_MAP_PROP = '__AMP_CSS_SM';
var bodyVisibleSentinel = '__AMP_BODY_VISIBLE';

/**
 * Adds the given css text to the given ampdoc.
 *
 * The style tags will be at the beginning of the head before all author
 * styles. One element can be the main runtime CSS. This is guaranteed
 * to always be the first stylesheet in the doc.
 *
 * @param {!./service/ampdoc-impl.AmpDoc} ampdoc The ampdoc that should get the new styles.
 * @param {string} cssText
 * @param {?function(!Element)|undefined} cb Called when the new styles are available.
 *     Not using a promise, because this is synchronous when possible.
 *     for better performance.
 * @param {boolean=} opt_isRuntimeCss If true, this style tag will be inserted
 *     as the first element in head and all style elements will be positioned
 *     after.
 * @param {string=} opt_ext
 * @return {!Element}
 */
function installStylesForDoc(ampdoc, cssText, cb, opt_isRuntimeCss, opt_ext) {
  var cssRoot = ampdoc.getHeadNode();
  var style = insertStyleElement(cssRoot, maybeTransform(cssRoot, cssText), opt_isRuntimeCss || false, opt_ext || null);

  if (cb) {
    var rootNode = ampdoc.getRootNode();
    // Styles aren't always available synchronously. E.g. if there is a
    // pending style download, it will have to finish before the new
    // style is visible.
    // For this reason we poll until the style becomes available.
    // Sync case.
    if (styleLoaded(rootNode, style)) {
      cb(style);
      return style;
    }
    // Poll until styles are available.
    var interval = setInterval(function () {
      if (styleLoaded(rootNode, style)) {
        clearInterval(interval);
        cb(style);
      }
    }, 4);
  }
  return style;
}

/**
 * Adds the given css text to the given document.
 * TODO(dvoytenko, #10705): Remove this method once FIE/ampdoc migration is
 * done.
 *
 * @param {!Document} doc The document that should get the new styles.
 * @param {string} cssText
 * @param {?function(!Element)|undefined} cb Called when the new styles are
 *     available. Not using a promise, because this is synchronous when
 *     possible. for better performance.
 * @param {boolean=} opt_isRuntimeCss If true, this style tag will be inserted
 *     as the first element in head and all style elements will be positioned
 *     after.
 * @param {string=} opt_ext
 * @return {!Element}
 */
function installStylesLegacy(doc, cssText, cb, opt_isRuntimeCss, opt_ext) {
  var style = insertStyleElement((0, _log.dev)().assertElement(doc.head), cssText, opt_isRuntimeCss || false, opt_ext || null);

  if (cb) {
    // Styles aren't always available synchronously. E.g. if there is a
    // pending style download, it will have to finish before the new
    // style is visible.
    // For this reason we poll until the style becomes available.
    // Sync case.
    if (styleLoaded(doc, style)) {
      cb(style);
      return style;
    }
    // Poll until styles are available.
    var interval = setInterval(function () {
      if (styleLoaded(doc, style)) {
        clearInterval(interval);
        cb(style);
      }
    }, 4);
  }
  return style;
}

/**
 * Creates the properly configured style element.
 * @param {!Element|!ShadowRoot} cssRoot
 * @param {string} cssText
 * @param {boolean} isRuntimeCss
 * @param {?string} ext
 * @return {!Element}
 */
function insertStyleElement(cssRoot, cssText, isRuntimeCss, ext) {
  var styleMap = cssRoot[STYLE_MAP_PROP];
  if (!styleMap) {
    styleMap = cssRoot[STYLE_MAP_PROP] = (0, _object.map)();
  }

  var isExtCss = !isRuntimeCss && ext && ext != 'amp-custom' && ext != 'amp-keyframes';
  var key = isRuntimeCss ? 'amp-runtime' : isExtCss ? 'amp-extension=' + ext : null;

  // Check if it has already been created or discovered.
  if (key) {
    var existing = getExistingStyleElement(cssRoot, styleMap, key);
    if (existing) {
      return existing;
    }
  }

  // Create the new style element and append to cssRoot.
  var doc = cssRoot.ownerDocument || cssRoot;
  var style = doc.createElement('style');
  style. /*OK*/textContent = cssText;
  var afterElement = null;
  // Make sure that we place style tags after the main runtime CSS. Otherwise
  // the order is random.
  if (isRuntimeCss) {
    style.setAttribute('amp-runtime', '');
  } else if (isExtCss) {
    style.setAttribute('amp-extension', ext || '');
    afterElement = (0, _log.dev)().assertElement(getExistingStyleElement(cssRoot, styleMap, 'amp-runtime'));
  } else {
    if (ext) {
      style.setAttribute(ext, '');
    }
    afterElement = cssRoot.lastChild;
  }
  (0, _dom.insertAfterOrAtStart)(cssRoot, style, afterElement);
  if (key) {
    styleMap[key] = style;
  }
  return style;
}

/**
 * @param {!Element|!ShadowRoot} cssRoot
 * @param {!Object<string, !Element>} styleMap
 * @param {string} key
 * @return {?Element}
 */
function getExistingStyleElement(cssRoot, styleMap, key) {
  // Already cached.
  if (styleMap[key]) {
    return styleMap[key];
  }
  // Check if the style has already been added by the server layout.
  var existing = cssRoot. /*OK*/querySelector('style[' + key + ']');
  if (existing) {
    styleMap[key] = existing;
    return existing;
  }
  // Nothing found.
  return null;
}

/**
 * Applies a transformer to the CSS text if it has been registered.
 * @param {!Element|!ShadowRoot} cssRoot
 * @param {function(string):string} transformer
 */
function installCssTransformer(cssRoot, transformer) {
  cssRoot[TRANSFORMER_PROP] = transformer;
}

/**
 * Applies a transformer to the CSS text if it has been registered.
 * @param {!Element|!ShadowRoot} cssRoot
 * @param {string} cssText
 * @return {string}
 */
function maybeTransform(cssRoot, cssText) {
  var transformer = cssRoot[TRANSFORMER_PROP];
  return transformer ? transformer(cssText) : cssText;
}

/**
 * Sets the document's body opacity to 1.
 * If the body is not yet available (because our script was loaded
 * synchronously), polls until it is.
 * @param {!Document} doc The document who's body we should make visible.
 * @param {boolean=} opt_waitForServices Whether the body visibility should
 *     be blocked on key services being loaded.
 */
function makeBodyVisible(doc, opt_waitForServices) {
  (0, _log.dev)().assert(doc.defaultView, 'Passed in document must have a defaultView');
  var win = /** @type {!Window} */doc.defaultView;
  if (win[bodyVisibleSentinel]) {
    return;
  }
  var set = function set() {
    win[bodyVisibleSentinel] = true;
    (0, _style.setStyles)((0, _log.dev)().assertElement(doc.body), {
      opacity: 1,
      visibility: 'visible',
      'animation': 'none'
    });
    renderStartedNoInline(doc);
  };
  try {
    (0, _dom.waitForBody)(doc, function () {
      if (win[bodyVisibleSentinel]) {
        return;
      }
      win[bodyVisibleSentinel] = true;
      if (opt_waitForServices) {
        (0, _renderDelayingServices.waitForServices)(win).catch(function (reason) {
          (0, _log.rethrowAsync)(reason);
          return [];
        }).then(function (services) {
          set();
          if (services.length > 0) {
            _services.Services.resourcesForDoc(doc). /*OK*/schedulePass(1, /* relayoutAll */true);
          }
          try {
            var perf = _services.Services.performanceFor(win);
            perf.tick('mbv');
            perf.flush();
          } catch (e) {}
        });
      } else {
        set();
      }
    });
  } catch (e) {
    // If there was an error during the logic above (such as service not
    // yet installed, definitely try to make the body visible.
    set();
    // Avoid errors in the function to break execution flow as this is
    // often called as a last resort.
    (0, _log.rethrowAsync)(e);
  }
}

/**
 * @param {!Document} doc
 */
function renderStartedNoInline(doc) {
  try {
    _services.Services.resourcesForDoc(doc).renderStarted();
  } catch (e) {
    // `makeBodyVisible` is called in the error-processing cycle and thus
    // could be triggered when runtime's initialization is incomplete which
    // would cause unrelated errors to be thrown here.
  }
}

/**
 * Indicates that the body is always visible. For instance, in case of PWA.
 * @param {!Window} win
 */
function bodyAlwaysVisible(win) {
  win[bodyVisibleSentinel] = true;
}

/**
 * Checks whether a style element was registered in the DOM.
 * @param {!Document|!ShadowRoot} doc
 * @param {!Element} style
 * @return {boolean}
 */
function styleLoaded(doc, style) {
  var sheets = doc.styleSheets;
  for (var i = 0; i < sheets.length; i++) {
    var sheet = sheets[i];
    if (sheet.ownerNode == style) {
      return true;
    }
  }
  return false;
}

},{"./dom":32,"./log":46,"./render-delaying-services":58,"./services":64,"./style":68,"./utils/object":78}],68:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.camelCaseToTitleCase = camelCaseToTitleCase;
exports.getVendorJsPropertyName = getVendorJsPropertyName;
exports.setImportantStyles = setImportantStyles;
exports.setStyle = setStyle;
exports.getStyle = getStyle;
exports.setStyles = setStyles;
exports.toggle = toggle;
exports.px = px;
exports.deg = deg;
exports.translateX = translateX;
exports.translate = translate;
exports.scale = scale;
exports.rotate = rotate;
exports.removeAlphaFromColor = removeAlphaFromColor;
exports.computedStyle = computedStyle;
exports.resetStyles = resetStyles;

var _object = require('./utils/object.js');

var _string = require('./string');

/** @type {Object<string, string>} */
/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Note: loaded by 3p system. Cannot rely on babel polyfills.
var propertyNameCache = void 0;

/** @const {!Array<string>} */
var vendorPrefixes = ['Webkit', 'webkit', 'Moz', 'moz', 'ms', 'O', 'o'];

/**
 * @export
 * @param {string} camelCase camel cased string
 * @return {string} title cased string
 */
function camelCaseToTitleCase(camelCase) {
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
}

/**
 * Checks the style if a prefixed version of a property exists and returns
 * it or returns an empty string.
 * @private
 * @param {!Object} style
 * @param {string} titleCase the title case version of a css property name
 * @return {string} the prefixed property name or null.
 */
function getVendorJsPropertyName_(style, titleCase) {
  for (var i = 0; i < vendorPrefixes.length; i++) {
    var propertyName = vendorPrefixes[i] + titleCase;
    if (style[propertyName] !== undefined) {
      return propertyName;
    }
  }
  return '';
}

/**
 * Returns the possibly prefixed JavaScript property name of a style property
 * (ex. WebkitTransitionDuration) given a camelCase'd version of the property
 * (ex. transitionDuration).
 * @export
 * @param {!Object} style
 * @param {string} camelCase the camel cased version of a css property name
 * @param {boolean=} opt_bypassCache bypass the memoized cache of property
 *   mapping
 * @return {string}
 */
function getVendorJsPropertyName(style, camelCase, opt_bypassCache) {
  if ((0, _string.startsWith)(camelCase, '--')) {
    // CSS vars are returned as is.
    return camelCase;
  }
  if (!propertyNameCache) {
    propertyNameCache = (0, _object.map)();
  }
  var propertyName = propertyNameCache[camelCase];
  if (!propertyName || opt_bypassCache) {
    propertyName = camelCase;
    if (style[camelCase] === undefined) {
      var titleCase = camelCaseToTitleCase(camelCase);
      var prefixedPropertyName = getVendorJsPropertyName_(style, titleCase);

      if (style[prefixedPropertyName] !== undefined) {
        propertyName = prefixedPropertyName;
      }
    }
    if (!opt_bypassCache) {
      propertyNameCache[camelCase] = propertyName;
    }
  }
  return propertyName;
}

/**
 * Sets the CSS styles of the specified element with !important. The styles
 * are specified as a map from CSS property names to their values.
 * @param {!Element} element
 * @param {!Object<string, *>} styles
 */
function setImportantStyles(element, styles) {
  for (var k in styles) {
    element.style.setProperty(getVendorJsPropertyName(styles, k), styles[k].toString(), 'important');
  }
}

/**
 * Sets the CSS style of the specified element with optional units, e.g. "px".
 * @param {?Element} element
 * @param {string} property
 * @param {*} value
 * @param {string=} opt_units
 * @param {boolean=} opt_bypassCache
 */
function setStyle(element, property, value, opt_units, opt_bypassCache) {
  var propertyName = getVendorJsPropertyName(element.style, property, opt_bypassCache);
  if (propertyName) {
    element.style[propertyName] =
    /** @type {string} */opt_units ? value + opt_units : value;
  }
}

/**
 * Returns the value of the CSS style of the specified element.
 * @param {!Element} element
 * @param {string} property
 * @param {boolean=} opt_bypassCache
 * @return {*}
 */
function getStyle(element, property, opt_bypassCache) {
  var propertyName = getVendorJsPropertyName(element.style, property, opt_bypassCache);
  if (!propertyName) {
    return undefined;
  }
  return element.style[propertyName];
}

/**
 * Sets the CSS styles of the specified element. The styles
 * a specified as a map from CSS property names to their values.
 * @param {!Element} element
 * @param {!Object<string, *>} styles
 */
function setStyles(element, styles) {
  for (var k in styles) {
    setStyle(element, k, styles[k]);
  }
}

/**
 * Shows or hides the specified element.
 * @param {!Element} element
 * @param {boolean=} opt_display
 */
function toggle(element, opt_display) {
  if (opt_display === undefined) {
    opt_display = getStyle(element, 'display') == 'none';
  }
  setStyle(element, 'display', opt_display ? '' : 'none');
}

/**
 * Returns a pixel value.
 * @param {number} value
 * @return {string}
 */
function px(value) {
  return value + 'px';
}

/**
 * Returns a degree value.
 * @param {number} value
 * @return {string}
 */
function deg(value) {
  return value + 'deg';
}

/**
 * Returns a "translateX" for CSS "transform" property.
 * @param {number|string} value
 * @return {string}
 */
function translateX(value) {
  if (typeof value == 'string') {
    return 'translateX(' + value + ')';
  }
  return 'translateX(' + px(value) + ')';
}

/**
 * Returns a "translateX" for CSS "transform" property.
 * @param {number|string} x
 * @param {(number|string)=} opt_y
 * @return {string}
 */
function translate(x, opt_y) {
  if (typeof x == 'number') {
    x = px(x);
  }
  if (opt_y === undefined) {
    return 'translate(' + x + ')';
  }
  if (typeof opt_y == 'number') {
    opt_y = px(opt_y);
  }
  return 'translate(' + x + ', ' + opt_y + ')';
}

/**
 * Returns a "scale" for CSS "transform" property.
 * @param {number|string} value
 * @return {string}
 */
function scale(value) {
  return 'scale(' + value + ')';
}

/**
 * Returns a "rotate" for CSS "transform" property.
 * @param {number|string} value
 * @return {string}
 */
function rotate(value) {
  if (typeof value == 'number') {
    value = deg(value);
  }
  return 'rotate(' + value + ')';
}

/**
 * Remove alpha value from a rgba color value.
 * Return the new color property with alpha equals if has the alpha value.
 * Caller needs to make sure the input color value is a valid rgba/rgb value
 * @param {string} rgbaColor
 * @return {string}
 */
function removeAlphaFromColor(rgbaColor) {
  return rgbaColor.replace(/\(([^,]+),([^,]+),([^,)]+),[^)]+\)/g, '($1,$2,$3, 1)');
}

/**
 * Gets the computed style of the element. The helper is necessary to enforce
 * the possible `null` value returned by a buggy Firefox.
 *
 * @param {!Window} win
 * @param {!Element} el
 * @return {!Object<string, string>}
 */
function computedStyle(win, el) {
  var style = /** @type {?CSSStyleDeclaration} */win.getComputedStyle(el);
  return (/** @type {!Object<string, string>} */style || (0, _object.map)()
  );
}

/**
 * Resets styles that were set dynamically (i.e. inline)
 * @param {!Element} element
 * @param {!Array<string>} properties
 */
function resetStyles(element, properties) {
  var styleObj = {};
  properties.forEach(function (prop) {
    styleObj[prop] = null;
  });
  setStyles(element, styleObj);
}

},{"./string":66,"./utils/object.js":78}],69:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isArray = isArray;
exports.toArray = toArray;
exports.isObject = isObject;
exports.isFiniteNumber = isFiniteNumber;
exports.isEnumValue = isEnumValue;
exports.toWin = toWin;
/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* @const */
var toString_ = Object.prototype.toString;

/**
 * Returns the ECMA [[Class]] of a value
 * @param {*} value
 * @return {string}
 */
function toString(value) {
  return toString_.call(value);
}

/**
 * Determines if value is actually an Array.
 * @param {*} value
 * @return {boolean}
 */
function isArray(value) {
  return Array.isArray(value);
}

/**
 * Converts an array-like object to an array.
 * @param {?IArrayLike<T>|string} arrayLike
 * @return {!Array<T>}
 * @template T
 */
function toArray(arrayLike) {
  if (!arrayLike) {
    return [];
  }
  var array = new Array(arrayLike.length);
  for (var i = 0; i < arrayLike.length; i++) {
    array[i] = arrayLike[i];
  }
  return array;
}

/**
 * Determines if value is actually an Object.
 * @param {*} value
 * @return {boolean}
 */
function isObject(value) {
  return toString(value) === '[object Object]';
}

/**
 * Determines if value is of number type and finite.
 * NaN and Infinity are not considered a finite number.
 * String numbers are not considered numbers.
 * @param {*} value
 * @return {boolean}
 */
function isFiniteNumber(value) {
  return typeof value === 'number' && isFinite(value);
}

/**
 * Checks whether `s` is a valid value of `enumObj`.
 *
 * @param {!Object<T>} enumObj
 * @param {T} s
 * @return {boolean}
 * @template T
 */
function isEnumValue(enumObj, s) {
  for (var k in enumObj) {
    if (enumObj[k] === s) {
      return true;
    }
  }
  return false;
}

/**
 * Externs declare that access `defaultView` from `document` or
 * `ownerDocument` is of type `(Window|null)` but most of our parameter types
 * assume that it is never null. This is OK in practice as we ever only get
 * null on disconnected documents or old IE.
 * This helper function casts it into just a simple Window return type.
 *
 * @param {!Window|null} winOrNull
 * @return {!Window}
 */
function toWin(winOrNull) {
  return (/** @type {!Window} */winOrNull
  );
}

},{}],70:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseQueryString_ = parseQueryString_;

var _urlTryDecodeUriComponent = require('./url-try-decode-uri-component');

var regex = /(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;

/**
 * Parses the query string of an URL. This method returns a simple key/value
 * map. If there are duplicate keys the latest value is returned.
 *
 * DO NOT import the function from this file. Instead, import parseQueryString
 * from `src/url.js`.
 *
 * @param {string} queryString
 * @return {!JsonObject}
 */
/**
 * Copyright 2017 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function parseQueryString_(queryString) {
  var params = /** @type {!JsonObject} */Object.create(null);
  if (!queryString) {
    return params;
  }

  var match = void 0;
  while (match = regex.exec(queryString)) {
    var name = (0, _urlTryDecodeUriComponent.tryDecodeUriComponent_)(match[1], match[1]);
    var value = match[2] ? (0, _urlTryDecodeUriComponent.tryDecodeUriComponent_)(match[2], match[2]) : '';
    params[name] = value;
  }
  return params;
}

},{"./url-try-decode-uri-component":71}],71:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tryDecodeUriComponent_ = tryDecodeUriComponent_;
/**
 * Copyright 2017 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Tries to decode a URI component, falling back to opt_fallback (or an empty
 * string)
 *
 * DO NOT import the function from this file. Instead, import
 * tryDecodeUriComponent from `src/url.js`.
 *
 * @param {string} component
 * @param {string=} fallback
 * @return {string}
 */
function tryDecodeUriComponent_(component) {
  var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  try {
    return decodeURIComponent(component);
  } catch (e) {
    return fallback;
  }
}

},{}],72:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SOURCE_ORIGIN_PARAM = undefined;
exports.getWinOrigin = getWinOrigin;
exports.parseUrlDeprecated = parseUrlDeprecated;
exports.parseUrlWithA = parseUrlWithA;
exports.appendEncodedParamStringToUrl = appendEncodedParamStringToUrl;
exports.addParamToUrl = addParamToUrl;
exports.addParamsToUrl = addParamsToUrl;
exports.serializeQueryString = serializeQueryString;
exports.isSecureUrlDeprecated = isSecureUrlDeprecated;
exports.assertHttpsUrl = assertHttpsUrl;
exports.assertAbsoluteHttpOrHttpsUrl = assertAbsoluteHttpOrHttpsUrl;
exports.parseQueryString = parseQueryString;
exports.removeFragment = removeFragment;
exports.getFragment = getFragment;
exports.isProxyOrigin = isProxyOrigin;
exports.getProxyServingType = getProxyServingType;
exports.isLocalhostOrigin = isLocalhostOrigin;
exports.isProtocolValid = isProtocolValid;
exports.removeAmpJsParamsFromUrl = removeAmpJsParamsFromUrl;
exports.removeSearch = removeSearch;
exports.getSourceUrl = getSourceUrl;
exports.getSourceOrigin = getSourceOrigin;
exports.resolveRelativeUrl = resolveRelativeUrl;
exports.resolveRelativeUrlFallback_ = resolveRelativeUrlFallback_;
exports.getCorsUrl = getCorsUrl;
exports.checkCorsUrl = checkCorsUrl;
exports.tryDecodeUriComponent = tryDecodeUriComponent;

var _lruCache = require('./utils/lru-cache');

var _object = require('./utils/object');

var _string = require('./string');

var _mode = require('./mode');

var _types = require('./types');

var _urlParseQueryString = require('./url-parse-query-string');

var _urlTryDecodeUriComponent = require('./url-try-decode-uri-component');

var _config = require('./config');

var _log = require('./log');

/**
 * @type {!JsonObject}
 */
var SERVING_TYPE_PREFIX = (0, _object.dict)({
  // No viewer
  'c': true,
  // In viewer
  'v': true,
  // Ad landing page
  'a': true,
  // Ad
  'ad': true
});

/**
 * Cached a-tag to avoid memory allocation during URL parsing.
 * @type {HTMLAnchorElement}
 */
/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var a = void 0;

/**
 * We cached all parsed URLs. As of now there are no use cases
 * of AMP docs that would ever parse an actual large number of URLs,
 * but we often parse the same one over and over again.
 * @type {LruCache}
 */
var cache = void 0;

/** @private @const Matches amp_js_* parameters in query string. */
var AMP_JS_PARAMS_REGEX = /[?&]amp_js[^&]*/;

/** @private @const Matches amp_gsa parameters in query string. */
var AMP_GSA_PARAMS_REGEX = /[?&]amp_gsa[^&]*/;

/** @private @const Matches amp_r parameters in query string. */
var AMP_R_PARAMS_REGEX = /[?&]amp_r[^&]*/;

/** @private @const Matches usqp parameters from goog experiment in query string. */
var GOOGLE_EXPERIMENT_PARAMS_REGEX = /[?&]usqp[^&]*/;

var INVALID_PROTOCOLS = [
/*eslint no-script-url: 0*/'javascript:',
/*eslint no-script-url: 0*/'data:',
/*eslint no-script-url: 0*/'vbscript:'];

/** @const {string} */
var SOURCE_ORIGIN_PARAM = exports.SOURCE_ORIGIN_PARAM = '__amp_source_origin';

/**
 * Returns the correct origin for a given window.
 * @param {!Window} win
 * @return {string} origin
 */
function getWinOrigin(win) {
  return win.origin || parseUrlDeprecated(win.location.href).origin;
}

/**
 * Returns a Location-like object for the given URL. If it is relative,
 * the URL gets resolved.
 * Consider the returned object immutable. This is enforced during
 * testing by freezing the object.
 * @param {string} url
 * @param {boolean=} opt_nocache
 * @return {!Location}
 */
function parseUrlDeprecated(url, opt_nocache) {
  if (!a) {
    a = /** @type {!HTMLAnchorElement} */self.document.createElement('a');
    cache = self.UrlCache || (self.UrlCache = new _lruCache.LruCache(100));
  }

  return parseUrlWithA(a, url, opt_nocache ? null : cache);
}

/**
 * Returns a Location-like object for the given URL. If it is relative,
 * the URL gets resolved.
 * Consider the returned object immutable. This is enforced during
 * testing by freezing the object.
 * @param {!HTMLAnchorElement} a
 * @param {string} url
 * @param {LruCache=} opt_cache
 * @return {!Location}
 * @restricted
 */
function parseUrlWithA(a, url, opt_cache) {
  if (opt_cache && opt_cache.has(url)) {
    return opt_cache.get(url);
  }

  a.href = url;

  // IE11 doesn't provide full URL components when parsing relative URLs.
  // Assigning to itself again does the trick #3449.
  if (!a.protocol) {
    a.href = a.href;
  }

  var info = /** @type {!Location} */{
    href: a.href,
    protocol: a.protocol,
    host: a.host,
    hostname: a.hostname,
    port: a.port == '0' ? '' : a.port,
    pathname: a.pathname,
    search: a.search,
    hash: a.hash,
    origin: null // Set below.
  };

  // Some IE11 specific polyfills.
  // 1) IE11 strips out the leading '/' in the pathname.
  if (info.pathname[0] !== '/') {
    info.pathname = '/' + info.pathname;
  }

  // 2) For URLs with implicit ports, IE11 parses to default ports while
  // other browsers leave the port field empty.
  if (info.protocol == 'http:' && info.port == 80 || info.protocol == 'https:' && info.port == 443) {
    info.port = '';
    info.host = info.hostname;
  }

  // For data URI a.origin is equal to the string 'null' which is not useful.
  // We instead return the actual origin which is the full URL.
  if (a.origin && a.origin != 'null') {
    info.origin = a.origin;
  } else if (info.protocol == 'data:' || !info.host) {
    info.origin = info.href;
  } else {
    info.origin = info.protocol + '//' + info.host;
  }

  // Freeze during testing to avoid accidental mutation.
  var frozen = (0, _mode.getMode)().test && Object.freeze ? Object.freeze(info) : info;

  if (opt_cache) {
    opt_cache.put(url, frozen);
  }

  return frozen;
}

/**
 * Appends the string just before the fragment part (or optionally
 * to the front of the query string) of the URL.
 * @param {string} url
 * @param {string} paramString
 * @param {boolean=} opt_addToFront
 * @return {string}
 */
function appendEncodedParamStringToUrl(url, paramString, opt_addToFront) {
  if (!paramString) {
    return url;
  }
  var mainAndFragment = url.split('#', 2);
  var mainAndQuery = mainAndFragment[0].split('?', 2);

  var newUrl = mainAndQuery[0] + (mainAndQuery[1] ? opt_addToFront ? '?' + paramString + '&' + mainAndQuery[1] : '?' + mainAndQuery[1] + '&' + paramString : '?' + paramString);
  newUrl += mainAndFragment[1] ? '#' + mainAndFragment[1] : '';
  return newUrl;
}
/**
 * Appends a query string field and value to a url. `key` and `value`
 * will be ran through `encodeURIComponent` before appending.
 * @param {string} url
 * @param {string} key
 * @param {string} value
 * @param {boolean=} opt_addToFront
 * @return {string}
 */
function addParamToUrl(url, key, value, opt_addToFront) {
  var field = encodeURIComponent(key) + '=' + encodeURIComponent(value);
  return appendEncodedParamStringToUrl(url, field, opt_addToFront);
}

/**
 * Appends query string fields and values to a url. The `params` objects'
 * `key`s and `value`s will be transformed into query string keys/values.
 * @param {string} url
 * @param {!JsonObject<string, string|!Array<string>>} params
 * @return {string}
 */
function addParamsToUrl(url, params) {
  return appendEncodedParamStringToUrl(url, serializeQueryString(params));
}

/**
 * Serializes the passed parameter map into a query string with both keys
 * and values encoded.
 * @param {!JsonObject<string, string|!Array<string>>} params
 * @return {string}
 */
function serializeQueryString(params) {
  var s = [];
  for (var k in params) {
    var v = params[k];
    if (v == null) {
      continue;
    } else if ((0, _types.isArray)(v)) {
      for (var i = 0; i < v.length; i++) {
        var sv = /** @type {string} */v[i];
        s.push(encodeURIComponent(k) + '=' + encodeURIComponent(sv));
      }
    } else {
      var _sv = /** @type {string} */v;
      s.push(encodeURIComponent(k) + '=' + encodeURIComponent(_sv));
    }
  }
  return s.join('&');
}

/**
 * Returns `true` if the URL is secure: either HTTPS or localhost (for testing).
 * @param {string|!Location} url
 * @return {boolean}
 */
function isSecureUrlDeprecated(url) {
  if (typeof url == 'string') {
    url = parseUrlDeprecated(url);
  }
  return url.protocol == 'https:' || url.hostname == 'localhost' || (0, _string.endsWith)(url.hostname, '.localhost');
}

/**
 * Asserts that a given url is HTTPS or protocol relative. It's a user-level
 * assert.
 *
 * Provides an exception for localhost.
 *
 * @param {?string|undefined} urlString
 * @param {!Element|string} elementContext Element where the url was found.
 * @param {string=} sourceName Used for error messages.
 * @return {string}
 */
function assertHttpsUrl(urlString, elementContext) {
  var sourceName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'source';

  (0, _log.user)().assert(urlString != null, '%s %s must be available', elementContext, sourceName);
  // (erwinm, #4560): type cast necessary until #4560 is fixed.
  var theUrlString = /** @type {string} */urlString;
  (0, _log.user)().assert(isSecureUrlDeprecated(theUrlString) || /^(\/\/)/.test(theUrlString), '%s %s must start with ' + '"https://" or "//" or be relative and served from ' + 'either https or from localhost. Invalid value: %s', elementContext, sourceName, theUrlString);
  return theUrlString;
}

/**
 * Asserts that a given url is an absolute HTTP or HTTPS URL.
 * @param {string} urlString
 * @return {string}
 */
function assertAbsoluteHttpOrHttpsUrl(urlString) {
  (0, _log.user)().assert(/^https?\:/i.test(urlString), 'URL must start with "http://" or "https://". Invalid value: %s', urlString);
  return parseUrlDeprecated(urlString).href;
}

/**
 * Parses the query string of an URL. This method returns a simple key/value
 * map. If there are duplicate keys the latest value is returned.
 *
 * This function is implemented in a separate file to avoid a circular
 * dependency.
 *
 * @param {string} queryString
 * @return {!JsonObject}
 */
function parseQueryString(queryString) {
  return (0, _urlParseQueryString.parseQueryString_)(queryString);
}

/**
 * Returns the URL without fragment. If URL doesn't contain fragment, the same
 * string is returned.
 * @param {string} url
 * @return {string}
 */
function removeFragment(url) {
  var index = url.indexOf('#');
  if (index == -1) {
    return url;
  }
  return url.substring(0, index);
}

/**
 * Returns the fragment from the URL. If the URL doesn't contain fragment,
 * the empty string is returned.
 * @param {string} url
 * @return {string}
 */
function getFragment(url) {
  var index = url.indexOf('#');
  if (index == -1) {
    return '';
  }
  return url.substring(index);
}

/**
 * Returns whether the URL has the origin of a proxy.
 * @param {string|!Location} url URL of an AMP document.
 * @return {boolean}
 */
function isProxyOrigin(url) {
  if (typeof url == 'string') {
    url = parseUrlDeprecated(url);
  }
  return _config.urls.cdnProxyRegex.test(url.origin);
}

/**
 * For proxy-origin URLs, returns the serving type. Otherwise, returns null.
 * E.g., 'https://amp-com.cdn.ampproject.org/a/s/amp.com/amp_document.html'
 * returns 'a'.
 * @param {string|!Location} url URL of an AMP document.
 * @return {?string}
 */
function getProxyServingType(url) {
  if (typeof url == 'string') {
    url = parseUrlDeprecated(url);
  }
  if (!isProxyOrigin(url)) {
    return null;
  }
  var path = url.pathname.split('/', 2);
  return path[1];
}

/**
 * Returns whether the URL origin is localhost.
 * @param {string|!Location} url URL of an AMP document.
 * @return {boolean}
 */
function isLocalhostOrigin(url) {
  if (typeof url == 'string') {
    url = parseUrlDeprecated(url);
  }
  return _config.urls.localhostRegex.test(url.origin);
}

/**
 * Returns whether the URL has valid protocol.
 * Deep link protocol is valid, but not javascript etc.
 * @param {string|!Location} url
 * @return {boolean}
 */
function isProtocolValid(url) {
  if (!url) {
    return true;
  }
  if (typeof url == 'string') {
    url = parseUrlDeprecated(url);
  }
  return !INVALID_PROTOCOLS.includes(url.protocol);
}

/**
 * Returns a URL without AMP JS parameters.
 * @param {string} url
 * @return {string}
 */
function removeAmpJsParamsFromUrl(url) {
  var parsed = parseUrlDeprecated(url);
  var search = removeAmpJsParamsFromSearch(parsed.search);
  return parsed.origin + parsed.pathname + search + parsed.hash;
}

/**
 * Returns a URL without a query string.
 * @param {string} url
 * @return {string}
 */
function removeSearch(url) {
  var index = url.indexOf('?');
  if (index == -1) {
    return url;
  }
  var fragment = getFragment(url);
  return url.substring(0, index) + fragment;
}

/**
 * Removes parameters that start with amp js parameter pattern and returns the
 * new search string.
 * @param {string} urlSearch
 * @return {string}
 */
function removeAmpJsParamsFromSearch(urlSearch) {
  if (!urlSearch || urlSearch == '?') {
    return '';
  }
  var search = urlSearch.replace(AMP_JS_PARAMS_REGEX, '').replace(AMP_GSA_PARAMS_REGEX, '').replace(AMP_R_PARAMS_REGEX, '').replace(GOOGLE_EXPERIMENT_PARAMS_REGEX, '').replace(/^[?&]/, ''); // Removes first ? or &.
  return search ? '?' + search : '';
}

/**
 * Returns the source URL of an AMP document for documents served
 * on a proxy origin or directly.
 * @param {string|!Location} url URL of an AMP document.
 * @return {string}
 */
function getSourceUrl(url) {
  if (typeof url == 'string') {
    url = parseUrlDeprecated(url);
  }

  // Not a proxy URL - return the URL itself.
  if (!isProxyOrigin(url)) {
    return url.href;
  }

  // A proxy URL.
  // Example path that is being matched here.
  // https://cdn.ampproject.org/c/s/www.origin.com/foo/
  // The /s/ is optional and signals a secure origin.
  var path = url.pathname.split('/');
  var prefix = path[1];
  (0, _log.user)().assert(SERVING_TYPE_PREFIX[prefix], 'Unknown path prefix in url %s', url.href);
  var domainOrHttpsSignal = path[2];
  var origin = domainOrHttpsSignal == 's' ? 'https://' + decodeURIComponent(path[3]) : 'http://' + decodeURIComponent(domainOrHttpsSignal);
  // Sanity test that what we found looks like a domain.
  (0, _log.user)().assert(origin.indexOf('.') > 0, 'Expected a . in origin %s', origin);
  path.splice(1, domainOrHttpsSignal == 's' ? 3 : 2);
  return origin + path.join('/') + removeAmpJsParamsFromSearch(url.search) + (url.hash || '');
}

/**
 * Returns the source origin of an AMP document for documents served
 * on a proxy origin or directly.
 * @param {string|!Location} url URL of an AMP document.
 * @return {string} The source origin of the URL.
 */
function getSourceOrigin(url) {
  return parseUrlDeprecated(getSourceUrl(url)).origin;
}

/**
 * Returns absolute URL resolved based on the relative URL and the base.
 * @param {string} relativeUrlString
 * @param {string|!Location} baseUrl
 * @return {string}
 */
function resolveRelativeUrl(relativeUrlString, baseUrl) {
  if (typeof baseUrl == 'string') {
    baseUrl = parseUrlDeprecated(baseUrl);
  }
  if (typeof URL == 'function') {
    return new URL(relativeUrlString, baseUrl.href).toString();
  }
  return resolveRelativeUrlFallback_(relativeUrlString, baseUrl);
}

/**
 * Fallback for URL resolver when URL class is not available.
 * @param {string} relativeUrlString
 * @param {string|!Location} baseUrl
 * @return {string}
 * @private Visible for testing.
 */
function resolveRelativeUrlFallback_(relativeUrlString, baseUrl) {
  if (typeof baseUrl == 'string') {
    baseUrl = parseUrlDeprecated(baseUrl);
  }
  relativeUrlString = relativeUrlString.replace(/\\/g, '/');
  var relativeUrl = parseUrlDeprecated(relativeUrlString);

  // Absolute URL.
  if ((0, _string.startsWith)(relativeUrlString.toLowerCase(), relativeUrl.protocol)) {
    return relativeUrl.href;
  }

  // Protocol-relative URL.
  if ((0, _string.startsWith)(relativeUrlString, '//')) {
    return baseUrl.protocol + relativeUrlString;
  }

  // Absolute path.
  if ((0, _string.startsWith)(relativeUrlString, '/')) {
    return baseUrl.origin + relativeUrlString;
  }

  // Relative path.
  return baseUrl.origin + baseUrl.pathname.replace(/\/[^/]*$/, '/') + relativeUrlString;
}

/**
 * Add "__amp_source_origin" query parameter to the URL.
 * @param {!Window} win
 * @param {string} url
 * @return {string}
 */
function getCorsUrl(win, url) {
  checkCorsUrl(url);
  var sourceOrigin = getSourceOrigin(win.location.href);
  return addParamToUrl(url, SOURCE_ORIGIN_PARAM, sourceOrigin);
}

/**
 * Checks if the url has __amp_source_origin and throws if it does.
 * @param {string} url
 */
function checkCorsUrl(url) {
  var parsedUrl = parseUrlDeprecated(url);
  var query = parseQueryString(parsedUrl.search);
  (0, _log.user)().assert(!(SOURCE_ORIGIN_PARAM in query), 'Source origin is not allowed in %s', url);
}

/**
 * Tries to decode a URI component, falling back to opt_fallback (or an empty
 * string)
 *
 * @param {string} component
 * @param {string=} opt_fallback
 * @return {string}
 */
function tryDecodeUriComponent(component, opt_fallback) {
  return (0, _urlTryDecodeUriComponent.tryDecodeUriComponent_)(component, opt_fallback);
}

},{"./config":27,"./log":46,"./mode":48,"./string":66,"./types":69,"./url-parse-query-string":70,"./url-try-decode-uri-component":71,"./utils/lru-cache":76,"./utils/object":78}],73:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.base64UrlDecodeToBytes = base64UrlDecodeToBytes;
exports.base64DecodeToBytes = base64DecodeToBytes;
exports.base64UrlEncodeFromBytes = base64UrlEncodeFromBytes;
exports.base64UrlEncodeFromString = base64UrlEncodeFromString;
exports.base64EncodeFromBytes = base64EncodeFromBytes;

var _bytes = require('./bytes');

/**
 * Character mapping from base64url to base64.
 * @const {!Object<string, string>}
 */
var base64UrlDecodeSubs = { '-': '+', '_': '/', '.': '=' };

/**
 * Character mapping from base64 to base64url.
 * @const {!Object<string, string>}
 */
/**
 * Copyright 2016 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var base64UrlEncodeSubs = { '+': '-', '/': '_', '=': '.' };

/**
 * Converts a string which is in base64url encoding into a Uint8Array
 * containing the decoded value.
 * @param {string} str
 * @return {!Uint8Array}
 */
function base64UrlDecodeToBytes(str) {
  var encoded = atob(str.replace(/[-_.]/g, function (ch) {
    return base64UrlDecodeSubs[ch];
  }));
  return (0, _bytes.stringToBytes)(encoded);
}

/**
 * Converts a string which is in base64 encoding into a Uint8Array
 * containing the decoded value.
 * @param {string} str
 * @return {!Uint8Array}
 */
function base64DecodeToBytes(str) {
  return (0, _bytes.stringToBytes)(atob(str));
}

/**
 * Converts a bytes array into base64url encoded string.
 * base64url is defined in RFC 4648. It is sometimes referred to as "web safe".
 * @param {!Uint8Array} bytes
 * @return {string}
 */
function base64UrlEncodeFromBytes(bytes) {
  var str = (0, _bytes.bytesToString)(bytes);
  return btoa(str).replace(/[+/=]/g, function (ch) {
    return base64UrlEncodeSubs[ch];
  });
}

/**
 * Converts a string into base64url encoded string.
 * base64url is defined in RFC 4648. It is sometimes referred to as "web safe".
 * @param {string} str
 * @return {string}
 */
function base64UrlEncodeFromString(str) {
  var bytes = (0, _bytes.utf8Encode)(str);
  return base64UrlEncodeFromBytes(bytes);
}

/**
 * Converts a bytes array into base64 encoded string.
 * @param {!Uint8Array} bytes
 * @return {string}
 */
function base64EncodeFromBytes(bytes) {
  return btoa((0, _bytes.bytesToString)(bytes));
}

},{"./bytes":74}],74:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.utf8Decode = utf8Decode;
exports.utf8Encode = utf8Encode;
exports.stringToBytes = stringToBytes;
exports.bytesToString = bytesToString;
exports.bytesToUInt32 = bytesToUInt32;
exports.getCryptoRandomBytesArray = getCryptoRandomBytesArray;

var _log = require('../log');

/**
 * Interpret a byte array as a UTF-8 string.
 * @param {!BufferSource} bytes
 * @return {string}
 */
function utf8Decode(bytes) {
  if (typeof TextDecoder !== 'undefined') {
    return new TextDecoder('utf-8').decode(bytes);
  }
  var asciiString = bytesToString(new Uint8Array(bytes.buffer || bytes));
  return decodeURIComponent(escape(asciiString));
}

/**
 * Turn a string into UTF-8 bytes.
 * @param {string} string
 * @return {!Uint8Array}
 */
/**
 * Copyright 2016 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function utf8Encode(string) {
  if (typeof TextEncoder !== 'undefined') {
    return new TextEncoder('utf-8').encode(string);
  }
  return stringToBytes(unescape(encodeURIComponent(string)));
}

/**
 * Converts a string which holds 8-bit code points, such as the result of atob,
 * into a Uint8Array with the corresponding bytes.
 * If you have a string of characters, you probably want to be using utf8Encode.
 * @param {string} str
 * @return {!Uint8Array}
 */
function stringToBytes(str) {
  var bytes = new Uint8Array(str.length);
  for (var i = 0; i < str.length; i++) {
    var charCode = str.charCodeAt(i);
    (0, _log.dev)().assert(charCode <= 255, 'Characters must be in range [0,255]');
    bytes[i] = charCode;
  }
  return bytes;
}

/**
 * Converts a 8-bit bytes array into a string
 * @param {!Uint8Array} bytes
 * @return {string}
 */
function bytesToString(bytes) {
  // Intentionally avoids String.fromCharCode.apply so we don't suffer a
  // stack overflow. #10495, https://jsperf.com/bytesToString-2
  var array = new Array(bytes.length);
  for (var i = 0; i < bytes.length; i++) {
    array[i] = String.fromCharCode(bytes[i]);
  }
  return array.join('');
}

/**
 * Converts a 4-item byte array to an unsigned integer.
 * Assumes bytes are big endian.
 * @param {!Uint8Array} bytes
 * @return {number}
 */
function bytesToUInt32(bytes) {
  if (bytes.length != 4) {
    throw new Error('Received byte array with length != 4');
  }
  var val = (bytes[0] & 0xFF) << 24 | (bytes[1] & 0xFF) << 16 | (bytes[2] & 0xFF) << 8 | bytes[3] & 0xFF;
  // Convert to unsigned.
  return val >>> 0;
}

/**
 * Generate a random bytes array with specific length using
 * win.crypto.getRandomValues. Return null if it is not available.
 * @param {!Window} win
 * @param {number} length
 * @return {?Uint8Array}
 */
function getCryptoRandomBytesArray(win, length) {
  if (!win.crypto || !win.crypto.getRandomValues) {
    return null;
  }

  // Widely available in browsers we support:
  // http://caniuse.com/#search=getRandomValues
  var uint8array = new Uint8Array(length);
  win.crypto.getRandomValues(uint8array);
  return uint8array;
}

},{"../log":46}],75:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DomFingerprint = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright 2016 The AMP HTML Authors. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * distributed under the License is distributed on an "AS-IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

exports.domFingerprintPlain = domFingerprintPlain;

var _string = require('../string');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Gets a string of concatenated element names and relative positions
 * of the DOM element and its parentElement's (up to 25).  Relative position
 * is the index of nodes with this tag within the parent's children.
 * The order is from the inner to outer nodes in DOM hierarchy.
 *
 * If a DOM hierarchy is the following:
 *
 * <div id='id1' ...>
 *   <div id='id2' ...>
 *     <table ...>       // table:0
 *       <tr>            // tr:0
 *         <td>...</td>  // td:0
 *         <td>          // td:1
 *           <amp-ad ...></amp-ad>
 *         </td>
 *       </tr>
 *       <tr>...</tr>    // tr:1
 *     </table>
 *   </div>
 * </div>
 *
 * With the amp-ad element passed in:
 * 'amp-ad.0,td.1,tr.0,table.0,div/id2.0,div/id1.0'
 *
 * Note: 25 is chosen arbitrarily.
 *
 * @param {?Element} element DOM node from which to get fingerprint.
 * @return {string} Concatenated element ids.
 */
function domFingerprintPlain(element) {
  var ids = [];
  var level = 0;
  while (element && element.nodeType == /* element */1 && level < 25) {
    var id = '';
    if (element.id) {
      id = '/' + element.id;
    }
    var nodeName = element.nodeName.toLowerCase();
    ids.push('' + nodeName + id + indexWithinParent(element));
    level++;
    element = element.parentElement;
  }
  return ids.join();
}

var DomFingerprint = exports.DomFingerprint = function () {
  function DomFingerprint() {
    _classCallCheck(this, DomFingerprint);
  }

  _createClass(DomFingerprint, null, [{
    key: 'generate',

    /**
     * Calculates ad slot DOM fingerprint.  This key is intended to
     * identify "same" ad unit across many page views. This is
     * based on where the ad appears within the page's DOM structure.
     *
     * @param {?Element} element The DOM element from which to collect
     *     the DOM chain element IDs.  If null, DOM chain element IDs are not
     *     included in the hash.
     * @return {string} The ad unit hash key string.
     */
    value: function generate(element) {
      return (0, _string.stringHash32)(domFingerprintPlain(element));
    }
  }]);

  return DomFingerprint;
}();

/**
 * Gets a string showing the index of an element within
 * the children of its parent, counting only nodes with the same tag.
 * Stop at 25, just to have a limit.
 * @param {!Element} element DOM node to get index of.
 * @return {string} '.<index>' or ''.
 */


function indexWithinParent(element) {
  var nodeName = element.nodeName;
  // Find my index within my parent's children

  var i = 0;
  var count = 0;
  var sibling = element.previousElementSibling;
  // Different browsers have different children.
  // So count only nodes with the same tag.
  // Use a limit for the tags, so that different browsers get the same
  // count. So 25 and higher all return no index.
  while (sibling && count < 25 && i < 100) {
    if (sibling.nodeName == nodeName) {
      count++;
    }
    i++;
    sibling = sibling.previousElementSibling;
  }
  // If we got to the end, then the count is accurate; otherwise skip count.
  return count < 25 && i < 100 ? '.' + count : '';
}

},{"../string":66}],76:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LruCache = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright 2018 The AMP HTML Authors. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * distributed under the License is distributed on an "AS-IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _log = require('../log');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** @const {string} */
var TAG = 'lru-cache';

/**
 * @template T
 */

var LruCache = exports.LruCache = function () {
  /**
   * @param {number} capacity
   */
  function LruCache(capacity) {
    _classCallCheck(this, LruCache);

    /** @private @const {number} */
    this.capacity_ = capacity;

    /** @private {number} */
    this.size_ = 0;

    /**
     * An incrementing counter to define the last access.
     * @private {number}
     */
    this.access_ = 0;

    /** @private {!Object<(number|string), {payload: T, access: number}>} */
    this.cache_ = Object.create(null);
  }

  /**
   * Returns whether key is cached.
   *
   * @param {number|string} key
   * @return {boolean}
   */


  _createClass(LruCache, [{
    key: 'has',
    value: function has(key) {
      return !!this.cache_[key];
    }

    /**
     * @param {number|string} key
     * @return {T} The cached payload.
     */

  }, {
    key: 'get',
    value: function get(key) {
      var cacheable = this.cache_[key];
      if (cacheable) {
        cacheable.access = ++this.access_;
        return cacheable.payload;
      }
      return undefined;
    }

    /**
     * @param {number|string} key
     * @param {T} payload The payload to cache.
     */

  }, {
    key: 'put',
    value: function put(key, payload) {
      if (!this.has(key)) {
        this.size_++;
      }
      this.cache_[key] = { payload: payload, access: this.access_ };
      this.evict_();
    }

    /**
     * Evicts the oldest cache entry, if we've exceeded capacity.
     */

  }, {
    key: 'evict_',
    value: function evict_() {
      if (this.size_ <= this.capacity_) {
        return;
      }

      (0, _log.dev)().warn(TAG, 'Trimming LRU cache');
      var cache = this.cache_;
      var oldest = this.access_ + 1;
      var oldestKey = void 0;
      for (var key in cache) {
        var access = cache[key].access;

        if (access < oldest) {
          oldest = access;
          oldestKey = key;
        }
      }

      if (oldestKey !== undefined) {
        delete cache[oldestKey];
        this.size_--;
      }
    }
  }]);

  return LruCache;
}();

},{"../log":46}],77:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapRange = mapRange;
exports.mod = mod;
exports.clamp = clamp;
/**
 * Copyright 2016 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Maps a value in a first range to its equivalent in a second range
 * Ex.: 5 in the range [0,10] gives 60 in the range[40,80]
 *
 * NOTE: lower/upper bounds on the source range are detected automatically,
 * however the bounds on the target range are not altered (thus the target
 * range could be decreasing).
 * Ex1: 8 in the range [0, 10] gives 2 in the range [10, 0]
 * Ex2: also, 8 in the range [10, 0] gives 2 in the range [10, 0]
 *
 * NOTE: Input value is enforced to be bounded inside the source range
 * Ex1: -2 in the range [0, 10] is interpreted as 0 and thus gives 40 in [40,80]
 * Ex2: 19 in the range [0, 5] is interpreted as 5 and thus gives 80 in [40,80]
 *
 * @param {number} val the value in the source range
 * @param {number} min1 the lower bound of the source range
 * @param {number} max1 the upper bound of the source range
 * @param {number} min2 the lower bound of the target range
 * @param {number} max2 the upper bound of the target range
 * @return {number} the equivalent value in the target range
 */
function mapRange(val, min1, max1, min2, max2) {

  var max1Bound = max1;
  var min1Bound = min1;
  if (min1 > max1) {
    max1Bound = min1;
    min1Bound = max1;
  }

  if (val < min1Bound) {
    val = min1Bound;
  } else if (val > max1Bound) {
    val = max1Bound;
  }

  return (val - min1) * (max2 - min2) / (max1 - min1) + min2;
}

/**
 * Computes the modulus of values `a` and `b`.
 *
 * This is needed because the % operator in JavaScript doesn't implement
 * modulus behaviour as can be seen by the spec here:
 * http://www.ecma-international.org/ecma-262/5.1/#sec-11.5.3.
 * It instead is used to obtain the remainder of a division.
 * This function uses the remainder (%) operator to determine the modulus.
 * Derived from here:
 * https://stackoverflow.com/questions/25726760/javascript-modular-arithmetic/47354356#47354356
 *
 * @param {number} a
 * @param {number} b
 * @return {number} returns the modulus of the two numbers.
 * @example
 *
 * _.min(10, 5);
 * // => 0
 *
 * _.mod(-1, 5);
 * // => 4
 */
function mod(a, b) {
  return a > 0 && b > 0 ? a % b : (a % b + b) % b;
}

/**
 * Restricts a number to be in the given min/max range.
 *
 * Examples:
 * clamp(0.5, 0, 1) -> 0.5
 * clamp(1.5, 0, 1) -> 1
 * clamp(-0.5, 0, 1) -> 0
 *
 * @param {number} val the value to clamp.
 * @param {number} min the lower bound.
 * @param {number} max the upper bound.
 * @return {number} the clamped value.
 */
function clamp(val, min, max) {
  return Math.min(Math.max(val, min), max);
}

},{}],78:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.map = map;
exports.dict = dict;
exports.hasOwn = hasOwn;
exports.ownProperty = ownProperty;
exports.deepMerge = deepMerge;
exports.omit = omit;

var _types = require('../types');

/* @const */
var hasOwn_ = Object.prototype.hasOwnProperty;

/**
 * Returns a map-like object.
 * If opt_initial is provided, copies its own properties into the
 * newly created object.
 * @param {T=} opt_initial This should typically be an object literal.
 * @return {T}
 * @template T
 */
/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function map(opt_initial) {
  var obj = Object.create(null);
  if (opt_initial) {
    Object.assign(obj, opt_initial);
  }
  return obj;
}

/**
 * Return an empty JsonObject or makes the passed in object literal
 * an JsonObject.
 * The JsonObject type is just a simple object that is at-dict.
 * See
 * https://github.com/google/closure-compiler/wiki/@struct-and-@dict-Annotations
 * for what a dict is type-wise.
 * The linter enforces that the argument is, in fact, at-dict like.
 * @param {!Object=} opt_initial
 * @return {!JsonObject}
 */
function dict(opt_initial) {
  // We do not copy. The linter enforces that the passed in object is a literal
  // and thus the caller cannot have a reference to it.
  return (/** @type {!JsonObject} */opt_initial || {}
  );
}

/**
 * Checks if the given key is a property in the map.
 *
 * @param {T}  obj a map like property.
 * @param {string}  key
 * @return {boolean}
 * @template T
 */
function hasOwn(obj, key) {
  return hasOwn_.call(obj, key);
}

/**
 * Returns obj[key] iff key is obj's own property (is not inherited).
 * Otherwise, returns undefined.
 *
 * @param {Object} obj
 * @param {string} key
 * @return {*}
 */
function ownProperty(obj, key) {
  if (hasOwn(obj, key)) {
    return obj[key];
  } else {
    return undefined;
  }
}

/**
 * Deep merges source into target.
 *
 * @param {!Object} target
 * @param {!Object} source
 * @param {number} depth The maximum merge depth. If exceeded, Object.assign
 *                       will be used instead.
 * @return {!Object}
 * @throws {Error} If source contains a circular reference.
 * Note: Only nested objects are deep-merged, primitives and arrays are not.
 */
function deepMerge(target, source) {
  var depth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;

  // Keep track of seen objects to detect recursive references.
  var seen = [];

  /** @type {!Array<{t: !Object, s: !Object, d: number}>} */
  var queue = [];
  queue.push({ t: target, s: source, d: 0 });

  // BFS to ensure objects don't have recursive references at shallower depths.

  var _loop = function _loop() {
    var _queue$shift = queue.shift(),
        t = _queue$shift.t,
        s = _queue$shift.s,
        d = _queue$shift.d;

    if (seen.includes(s)) {
      throw new Error('Source object has a circular reference.');
    }
    seen.push(s);
    if (t === s) {
      return 'continue';
    }
    if (d > depth) {
      Object.assign(t, s);
      return 'continue';
    }
    Object.keys(s).forEach(function (key) {
      var newValue = s[key];
      // Perform a deep merge IFF both target and source have the same key
      // whose corresponding values are objects.
      if (hasOwn(t, key)) {
        var oldValue = t[key];
        if ((0, _types.isObject)(newValue) && (0, _types.isObject)(oldValue)) {
          queue.push({ t: oldValue, s: newValue, d: d + 1 });
          return;
        }
      }
      t[key] = newValue;
    });
  };

  while (queue.length > 0) {
    var _ret = _loop();

    if (_ret === 'continue') continue;
  }
  return target;
}

/**
 * @param {!Object} o An object to remove properties from
 * @param {!Array<string>} props A list of properties to remove from the Object
 * @return {!Object} An object with the given properties removed
 */
function omit(o, props) {
  return Object.keys(o).reduce(function (acc, key) {
    if (!props.includes(key)) {
      acc[key] = o[key];
    }
    return acc;
  }, {});
}

},{"../types":69}],79:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.tryResolve = tryResolve;
exports.some = some;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Copyright 2016 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Returns a Deferred struct, which holds a pending promise and its associated
 * resolve and reject functions.
 *
 * This is preferred instead of creating a Promise instance to extract the
 * resolve/reject functions yourself:
 *
 * ```
 * // Avoid doing
 * let resolve;
 * const promise = new Promise(res => {
 *   resolve = res;
 * });
 *
 * // Good
 * const deferred = new Deferred();
 * const { promise, resolve } = deferred;
 * ```
 *
 * @template T
 */
var Deferred =
/**
 * Creates an instance of Deferred.
 */
exports.Deferred = function Deferred() {
  _classCallCheck(this, Deferred);

  var resolve = void 0,
      reject = void 0;

  /**
   * @const {!Promise<T>}
   */
  this.promise = new /*OK*/Promise(function (res, rej) {
    resolve = res;
    reject = rej;
  });

  /**
   * @const {function(T=)}
   */
  this.resolve = resolve;

  /**
   * @const {function(*=)}
   */
  this.reject = reject;
};

/**
 * Creates a promise resolved to the return value of fn.
 * If fn sync throws, it will cause the promise to reject.
 *
 * @param {function():T} fn
 * @return {!Promise<T>}
 * @template T
 */


function tryResolve(fn) {
  return new Promise(function (resolve) {
    resolve(fn());
  });
}

/**
 * Returns a promise which resolves if a threshold amount of the given promises
 * resolve, and rejects otherwise.
 * @param {!Array<!Promise>} promises The array of promises to test.
 * @param {number} count The number of promises that must resolve for the
 *     returned promise to resolve.
 * @return {!Promise} A promise that resolves if any of the given promises
 *     resolve, and which rejects otherwise.
 */
function some(promises) {
  var count = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  return new Promise(function (resolve, reject) {
    count = Math.max(count, 0);
    var extra = promises.length - count;
    if (extra < 0) {
      reject(new Error('not enough promises to resolve'));
    }
    if (promises.length == 0) {
      resolve([]);
    }
    var values = [];
    var reasons = [];

    var onFulfilled = function onFulfilled(value) {
      if (values.length < count) {
        values.push(value);
      }
      if (values.length == count) {
        resolve(values);
      }
    };
    var onRejected = function onRejected(reason) {
      if (reasons.length <= extra) {
        reasons.push(reason);
      }
      if (reasons.length > extra) {
        reject(reasons);
      }
    };
    for (var i = 0; i < promises.length; i++) {
      Promise.resolve(promises[i]).then(onFulfilled, onRejected);
    }
  });
}

/**
 * Resolves with the result of the last promise added.
 * @implements {IThenable}
 */

var LastAddedResolver = exports.LastAddedResolver = function () {
  /**
   * @param {!Array<!Promise>=} opt_promises
   */
  function LastAddedResolver(opt_promises) {
    _classCallCheck(this, LastAddedResolver);

    var resolve_ = void 0,
        reject_ = void 0;
    /** @private @const {!Promise} */
    this.promise_ = new Promise(function (resolve, reject) {
      resolve_ = resolve;
      reject_ = reject;
    });

    /** @private */
    this.resolve_ = resolve_;

    /** @private */
    this.reject_ = reject_;

    /** @private */
    this.count_ = 0;

    if (opt_promises) {
      for (var i = 0; i < opt_promises.length; i++) {
        this.add(opt_promises[i]);
      }
    }
  }

  /**
   * Add a promise to possibly be resolved.
   * @param {!Promise} promise
   * @return {!Promise}
   */


  _createClass(LastAddedResolver, [{
    key: 'add',
    value: function add(promise) {
      var _this = this;

      var countAtAdd = ++this.count_;
      Promise.resolve(promise).then(function (result) {
        if (_this.count_ === countAtAdd) {
          _this.resolve_(result);
        }
      }, function (error) {
        // Don't follow behavior of Promise.all and Promise.race error so that
        // this will only reject when most recently added promise fails.
        if (_this.count_ === countAtAdd) {
          _this.reject_(error);
        }
      });
      return this.promise_;
    }

    /** @override */

  }, {
    key: 'then',
    value: function then(opt_resolve, opt_reject) {
      return this.promise_.then(opt_resolve, opt_reject);
    }
  }]);

  return LastAddedResolver;
}();

},{}],80:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Signals = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright 2017 The AMP HTML Authors. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * distributed under the License is distributed on an "AS-IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _promise2 = require('./promise');

var _object = require('./object');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * This object tracts signals and allows blocking until a signal has been
 * received.
 */
var Signals = exports.Signals = function () {

  /**
   * Creates an instance of Signals.
   */
  function Signals() {
    _classCallCheck(this, Signals);

    /**
     * A mapping from a signal name to the signal response: either time or
     * an error.
     * @private @const {!Object<string, (time|!Error)>}
     */
    this.map_ = (0, _object.map)();

    /**
     * A mapping from a signal name to the signal promise, resolve and reject.
     * Only allocated when promise has been requested.
     * @private {?Object<string, {
     *   promise: !Promise,
     *   resolve: (function(time)|undefined),
     *   reject: (function(!Error)|undefined)
     * }>}
     */
    this.promiseMap_ = null;
  }

  /**
   * Returns the current known value of the signal. If signal is not yet
   * available, `null` is returned.
   * @param {string} name
   * @return {number|!Error|null}
   */


  _createClass(Signals, [{
    key: 'get',
    value: function get(name) {
      return this.map_[name] || null;
    }

    /**
     * Returns the promise that's resolved when the signal is triggered. The
     * resolved value is the time of the signal.
     * @param {string} name
     * @return {!Promise<time>}
     */

  }, {
    key: 'whenSignal',
    value: function whenSignal(name) {
      var promiseStruct = this.promiseMap_ && this.promiseMap_[name];
      if (!promiseStruct) {
        var result = this.map_[name];
        if (result != null) {
          // Immediately resolve signal.
          var promise = typeof result == 'number' ? Promise.resolve(result) : Promise.reject(result);
          promiseStruct = { promise: promise };
        } else {
          // Allocate the promise/resolver for when the signal arrives in the
          // future.
          var deferred = new _promise2.Deferred();
          var _promise = deferred.promise,
              resolve = deferred.resolve,
              reject = deferred.reject;


          promiseStruct = { promise: _promise, resolve: resolve, reject: reject };
        }
        if (!this.promiseMap_) {
          this.promiseMap_ = (0, _object.map)();
        }
        this.promiseMap_[name] = promiseStruct;
      }
      return promiseStruct.promise;
    }

    /**
     * Triggers the signal with the specified name on the element. The time is
     * optional; if not provided, the current time is used. The associated
     * promise is resolved with the resulting time.
     * @param {string} name
     * @param {time=} opt_time
     */

  }, {
    key: 'signal',
    value: function signal(name, opt_time) {
      if (this.map_[name] != null) {
        // Do not duplicate signals.
        return;
      }
      var time = opt_time || Date.now();
      this.map_[name] = time;
      var promiseStruct = this.promiseMap_ && this.promiseMap_[name];
      if (promiseStruct && promiseStruct.resolve) {
        promiseStruct.resolve(time);
        promiseStruct.resolve = undefined;
        promiseStruct.reject = undefined;
      }
    }

    /**
     * Rejects the signal. Indicates that the signal will never succeed. The
     * associated signal is rejected.
     * @param {string} name
     * @param {!Error} error
     */

  }, {
    key: 'rejectSignal',
    value: function rejectSignal(name, error) {
      if (this.map_[name] != null) {
        // Do not duplicate signals.
        return;
      }
      this.map_[name] = error;
      var promiseStruct = this.promiseMap_ && this.promiseMap_[name];
      if (promiseStruct && promiseStruct.reject) {
        promiseStruct.reject(error);
        promiseStruct.resolve = undefined;
        promiseStruct.reject = undefined;
      }
    }

    /**
     * Resets all signals.
     * @param {string} name
     */

  }, {
    key: 'reset',
    value: function reset(name) {
      if (this.map_[name]) {
        delete this.map_[name];
      }
      // Reset promise it has already been resolved.
      var promiseStruct = this.promiseMap_ && this.promiseMap_[name];
      if (promiseStruct && !promiseStruct.resolve) {
        delete this.promiseMap_[name];
      }
    }
  }]);

  return Signals;
}();

},{"./object":78,"./promise":79}],81:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Copyright 2017 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * An interface to interact with browser window object.
 * Mainly used to mock out read only APIs in test.
 * See test-helper.js#mockWindowInterface
 */
var WindowInterface = exports.WindowInterface = function () {
  function WindowInterface() {
    _classCallCheck(this, WindowInterface);
  }

  _createClass(WindowInterface, null, [{
    key: "getDocumentReferrer",


    /**
     * @static
     * @param {!Window} win
     * @return {string}
     */
    value: function getDocumentReferrer(win) {
      return win.document.referrer;
    }

    /**
     * @static
     * @param {!Window} win
     * @return {string}
     */

  }, {
    key: "getHostname",
    value: function getHostname(win) {
      return win.location.hostname;
    }
  }]);

  return WindowInterface;
}();

},{}],82:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cssEscape = cssEscape;
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */

/**
 * This regex consists of 4 matching capture groups and one (non-matching) fallback:
 *
 * - (\0), catch the null terminator character so it may be replaced by UTF
 *   Replacement Char
 * - ^(-)$, catch a solitary dash char, so that it may be backslash escaped.
 *   This is a separate capture group so that the legal-chars (group 4) doesn't
 *   capture it first, since that group doesn't need to escape its dash.
 * - ([\x01-\x1f\x7f]|^-?[0-9]), catch a UTF control char, or any leading
 *   number (with an optional leading dash). The control or the number (but not
 *   the leading dash) must be hex-escaped,.
 * - ([\x80-\uffff0-9a-zA-Z_-]+), catch legal-chars, with the exception of a
 *   solitary dash, which will already have matched in group 1.
 * - [^], finally, a catch-all that allows us to backslash escape the char.
 *
 * Together, this matches everything necessary for CSS.escape.
 */
var regex = /(\0)|^(-)$|([\x01-\x1f\x7f]|^-?[0-9])|([\x80-\uffff0-9a-zA-Z_-]+)|[^]/g;

function escaper(match, nil, dash, hexEscape, chars) {
  // Chars is the legal-chars (group 4) capture
  if (chars) {
    return chars;
  }
  // Nil is the null terminator (group 1) capture
  if (nil) {
    return '\uFFFD';
  }
  // Both UTF control chars, and leading numbers (with optional leading dash)
  // (group 3) must be backslash escaped with a trailing space.  Funnily, the
  // leading dash must not be escaped, but the number. :shrug:
  if (hexEscape) {
    return match.slice(0, -1) + '\\' + match.slice(-1).charCodeAt(0).toString(16) + ' ';
  }
  // Finally, the solitary dash and the catch-all chars require backslash
  // escaping.
  return '\\' + match;
}

/**
 * https://drafts.csswg.org/cssom/#serialize-an-identifier
 * @param {string} value
 * @return {string}
 */
function cssEscape(value) {
  return String(value).replace(regex, escaper);
}

},{}]},{},[14])


})});//# sourceMappingURL=amp-ad-network-adsense-impl-0.1.max.js.map
