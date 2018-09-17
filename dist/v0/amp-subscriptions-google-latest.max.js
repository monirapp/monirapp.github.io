(self.AMP=self.AMP||[]).push({n:"amp-subscriptions-google",v:"1537224222059",f:(function(AMP,_){
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
var CSS = exports.CSS = ".swg-button,.swg-button-dark,.swg-button-light{border:0;border-radius:4px;box-sizing:border-box;outline:0;padding:11px 8px;width:240px;min-width:150px;height:40px;min-height:40px}.swg-button-dark:after,.swg-button-light:after,.swg-button:after{display:block;max-width:200px;max-height:40px;width:100%;height:100%;margin:auto;content:\"\";border:0;background-origin:content-box;background-position:50%;background-repeat:no-repeat;background-size:contain}.swg-button,.swg-button-light{background-color:#fff;box-shadow:0 1px 1px 0 rgba(60,64,67,0.3),0 1px 3px 1px rgba(60,64,67,0.15)}.swg-button-light:after,.swg-button:after{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='235' height='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M169.367 19c-5.09 0-9.367-4.265-9.367-9.5s4.277-9.5 9.367-9.5c2.818 0 4.823 1.133 6.33 2.622l-1.775 1.827c-1.082-1.04-2.55-1.857-4.555-1.857-3.72 0-6.628 3.081-6.628 6.908 0 3.827 2.907 6.908 6.628 6.908 2.411 0 3.78-1 4.664-1.898.724-.745 1.19-1.806 1.37-3.265h-6.034V8.643h8.494c.09.459.139 1.02.139 1.622 0 1.95-.516 4.357-2.183 6.072-1.627 1.734-3.691 2.663-6.45 2.663z' fill='%234285F4' fill-rule='nonzero'/%3E%3Cpath d='M192 13c0 3.456-2.69 6-6 6s-6-2.544-6-6c0-3.476 2.69-6 6-6s6 2.524 6 6zm-2.63 0c0-2.164-1.563-3.636-3.37-3.636-1.807 0-3.37 1.482-3.37 3.636 0 2.134 1.563 3.636 3.37 3.636 1.807 0 3.37-1.492 3.37-3.636z' fill='%23E94235' fill-rule='nonzero'/%3E%3Cpath d='M205 13c0 3.456-2.69 6-6 6-3.3 0-6-2.544-6-6 0-3.476 2.69-6 6-6s6 2.524 6 6zm-2.62 0c0-2.164-1.563-3.636-3.37-3.636-1.807 0-3.37 1.482-3.37 3.636 0 2.134 1.563 3.636 3.37 3.636 1.807.01 3.37-1.492 3.37-3.636z' fill='%23FABB05' fill-rule='nonzero'/%3E%3Cpath d='M217 7.362v10.53c0 4.337-2.499 6.108-5.457 6.108-2.786 0-4.452-1.908-5.083-3.465l2.192-.93c.392.96 1.35 2.085 2.891 2.085 1.896 0 3.064-1.204 3.064-3.445v-.841h-.087c-.564.714-1.656 1.33-3.025 1.33-2.872 0-5.495-2.554-5.495-5.842C206 9.584 208.633 7 211.495 7c1.37 0 2.46.626 3.025 1.311h.087v-.949H217zm-2.221 5.54c0-2.066-1.35-3.582-3.064-3.582-1.742 0-3.197 1.507-3.197 3.582 0 2.045 1.455 3.533 3.197 3.533 1.714 0 3.064-1.488 3.064-3.533z' fill='%234285F4' fill-rule='nonzero'/%3E%3Cpath fill='%2334A853' fill-rule='nonzero' d='M223 1v18h-3V1z'/%3E%3Cpath d='M232.844 14.973l2.046 1.363c-.662.981-2.256 2.664-5.014 2.664-3.42 0-5.876-2.634-5.876-6 0-3.566 2.487-6 5.585-6 3.119 0 4.643 2.474 5.144 3.816l.271.681-8.032 3.326c.612 1.202 1.574 1.823 2.918 1.823s2.276-.671 2.958-1.673zm-6.307-2.163l5.375-2.224c-.301-.751-1.184-1.272-2.237-1.272-1.343 0-3.208 1.182-3.138 3.496z' fill='%23E94235' fill-rule='nonzero'/%3E%3Cpath d='M6.576 19.384c-1.248 0-2.468-.408-3.66-1.224-1.192-.816-1.972-1.96-2.34-3.432l2.016-.816c.24.944.732 1.74 1.476 2.388.744.648 1.58.972 2.508.972.96 0 1.78-.252 2.46-.756.68-.504 1.02-1.188 1.02-2.052 0-.96-.34-1.7-1.02-2.22-.68-.52-1.756-1.004-3.228-1.452-1.52-.48-2.672-1.1-3.456-1.86-.784-.76-1.176-1.732-1.176-2.916 0-1.232.488-2.304 1.464-3.216.976-.912 2.248-1.368 3.816-1.368 1.456 0 2.64.364 3.552 1.092.912.728 1.504 1.524 1.776 2.388l-2.016.84c-.144-.544-.5-1.048-1.068-1.512-.568-.464-1.3-.696-2.196-.696-.848 0-1.572.236-2.172.708-.6.472-.9 1.06-.9 1.764 0 .64.276 1.18.828 1.62.552.44 1.364.836 2.436 1.188.848.272 1.556.536 2.124.792a9.842 9.842 0 0 1 1.728 1.02 4.065 4.065 0 0 1 1.32 1.584c.296.632.444 1.364.444 2.196 0 .832-.172 1.576-.516 2.232a4.19 4.19 0 0 1-1.368 1.56 6.875 6.875 0 0 1-3.852 1.176zM24.936 19h-2.112v-1.632h-.096c-.336.56-.848 1.036-1.536 1.428a4.345 4.345 0 0 1-2.184.588c-1.472 0-2.588-.448-3.348-1.344-.76-.896-1.14-2.096-1.14-3.6v-7.2h2.208v6.84c0 2.192.968 3.288 2.904 3.288.912 0 1.656-.368 2.232-1.104.576-.736.864-1.584.864-2.544V7.24h2.208V19zm8.904.384c-.896 0-1.7-.192-2.412-.576-.712-.384-1.244-.864-1.596-1.44h-.096V19h-2.112V1.816h2.208V7.24l-.096 1.632h.096c.352-.576.884-1.056 1.596-1.44.712-.384 1.516-.576 2.412-.576 1.52 0 2.832.6 3.936 1.8 1.104 1.2 1.656 2.688 1.656 4.464 0 1.776-.552 3.264-1.656 4.464-1.104 1.2-2.416 1.8-3.936 1.8zm-.36-2.016c1.024 0 1.904-.388 2.64-1.164.736-.776 1.104-1.804 1.104-3.084s-.368-2.308-1.104-3.084c-.736-.776-1.616-1.164-2.64-1.164-1.04 0-1.924.384-2.652 1.152-.728.768-1.092 1.8-1.092 3.096s.364 2.328 1.092 3.096c.728.768 1.612 1.152 2.652 1.152zm12.336 2.016c-1.312 0-2.396-.32-3.252-.96a5.682 5.682 0 0 1-1.884-2.4l1.968-.816c.624 1.472 1.688 2.208 3.192 2.208.688 0 1.252-.152 1.692-.456.44-.304.66-.704.66-1.2 0-.768-.536-1.288-1.608-1.56l-2.376-.576c-.752-.192-1.464-.556-2.136-1.092-.672-.536-1.008-1.26-1.008-2.172 0-1.04.46-1.884 1.38-2.532.92-.648 2.012-.972 3.276-.972 1.04 0 1.968.236 2.784.708a3.99 3.99 0 0 1 1.752 2.028l-1.92.792c-.432-1.04-1.328-1.56-2.688-1.56-.656 0-1.208.136-1.656.408-.448.272-.672.64-.672 1.104 0 .672.52 1.128 1.56 1.368l2.328.552c1.104.256 1.92.696 2.448 1.32.528.624.792 1.328.792 2.112 0 1.056-.432 1.936-1.296 2.64-.864.704-1.976 1.056-3.336 1.056zm11.928 0c-1.76 0-3.208-.596-4.344-1.788-1.136-1.192-1.704-2.684-1.704-4.476 0-1.792.568-3.284 1.704-4.476 1.136-1.192 2.584-1.788 4.344-1.788 1.312 0 2.4.32 3.264.96a5.621 5.621 0 0 1 1.896 2.424l-2.016.84c-.608-1.472-1.704-2.208-3.288-2.208-.976 0-1.836.4-2.58 1.2-.744.8-1.116 1.816-1.116 3.048s.372 2.248 1.116 3.048c.744.8 1.604 1.2 2.58 1.2 1.648 0 2.784-.736 3.408-2.208l1.968.84c-.4.96-1.044 1.764-1.932 2.412-.888.648-1.988.972-3.3.972zm9.36-.384h-2.208V7.24h2.112v1.92h.096c.224-.64.684-1.168 1.38-1.584.696-.416 1.372-.624 2.028-.624.656 0 1.208.096 1.656.288l-.84 2.064c-.288-.112-.68-.168-1.176-.168-.8 0-1.508.316-2.124.948-.616.632-.924 1.46-.924 2.484V19zm8.904-14.712a1.504 1.504 0 0 1-1.104.456c-.432 0-.8-.152-1.104-.456a1.504 1.504 0 0 1-.456-1.104c0-.432.152-.8.456-1.104a1.504 1.504 0 0 1 1.104-.456c.432 0 .8.152 1.104.456.304.304.456.672.456 1.104 0 .432-.152.8-.456 1.104zm0 14.712H73.8V7.24h2.208V19zm9.096.384c-.896 0-1.7-.192-2.412-.576-.712-.384-1.244-.864-1.596-1.44H81V19h-2.112V1.816h2.208V7.24L81 8.872h.096c.352-.576.884-1.056 1.596-1.44.712-.384 1.516-.576 2.412-.576 1.52 0 2.832.6 3.936 1.8 1.104 1.2 1.656 2.688 1.656 4.464 0 1.776-.552 3.264-1.656 4.464-1.104 1.2-2.416 1.8-3.936 1.8zm-.36-2.016c1.024 0 1.904-.388 2.64-1.164.736-.776 1.104-1.804 1.104-3.084s-.368-2.308-1.104-3.084c-.736-.776-1.616-1.164-2.64-1.164-1.04 0-1.924.384-2.652 1.152-.728.768-1.092 1.8-1.092 3.096s.364 2.328 1.092 3.096c.728.768 1.612 1.152 2.652 1.152zm13.296 2.016c-1.776 0-3.22-.592-4.332-1.776-1.112-1.184-1.668-2.68-1.668-4.488 0-1.712.54-3.184 1.62-4.416 1.08-1.232 2.46-1.848 4.14-1.848 1.744 0 3.14.568 4.188 1.704 1.048 1.136 1.572 2.656 1.572 4.56l-.024.408h-9.288c.064 1.184.46 2.12 1.188 2.808.728.688 1.58 1.032 2.556 1.032 1.584 0 2.656-.672 3.216-2.016l1.968.816c-.384.912-1.016 1.676-1.896 2.292-.88.616-1.96.924-3.24.924zm3.168-7.68c-.048-.672-.356-1.312-.924-1.92-.568-.608-1.412-.912-2.532-.912-.816 0-1.524.256-2.124.768-.6.512-1.012 1.2-1.236 2.064h6.816zM123.72 19h-2.256l-2.928-9.024L115.632 19H113.4l-3.792-11.76h2.304l2.616 8.88h.024l2.904-8.88h2.28l2.904 8.88h.024l2.592-8.88h2.256L123.72 19zm7.632-14.712a1.504 1.504 0 0 1-1.104.456c-.432 0-.8-.152-1.104-.456a1.504 1.504 0 0 1-.456-1.104c0-.432.152-.8.456-1.104a1.504 1.504 0 0 1 1.104-.456c.432 0 .8.152 1.104.456.304.304.456.672.456 1.104 0 .432-.152.8-.456 1.104zm0 14.712h-2.208V7.24h2.208V19zm7.968.192c-1.232 0-2.172-.328-2.82-.984-.648-.656-.972-1.584-.972-2.784V9.256h-2.064V7.24h2.064v-3.6h2.208v3.6h2.88v2.016h-2.88v6c0 1.28.528 1.92 1.584 1.92.4 0 .736-.064 1.008-.192l.768 1.896c-.48.208-1.072.312-1.776.312zm5.616-17.376V7.24l-.096 1.632h.096c.32-.56.824-1.036 1.512-1.428a4.389 4.389 0 0 1 2.208-.588c1.456 0 2.568.448 3.336 1.344.768.896 1.152 2.096 1.152 3.6V19h-2.208v-6.864c0-2.176-.968-3.264-2.904-3.264-.912 0-1.656.364-2.232 1.092-.576.728-.864 1.572-.864 2.532V19h-2.208V1.816h2.208z' fill='%235F6368'/%3E%3C/g%3E%3C/svg%3E\")}.swg-button-dark{background-color:#000}.swg-button-dark:after{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='235' height='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M169.367 19c-5.09 0-9.367-4.265-9.367-9.5s4.277-9.5 9.367-9.5c2.818 0 4.823 1.133 6.33 2.622l-1.775 1.827c-1.082-1.04-2.55-1.857-4.555-1.857-3.72 0-6.628 3.081-6.628 6.908 0 3.827 2.907 6.908 6.628 6.908 2.411 0 3.78-1 4.664-1.898.724-.745 1.19-1.806 1.37-3.265h-6.034V8.643h8.494c.09.459.139 1.02.139 1.622 0 1.95-.516 4.357-2.183 6.072-1.627 1.734-3.691 2.663-6.45 2.663z' fill='%234285F4' fill-rule='nonzero'/%3E%3Cpath d='M192 13c0 3.456-2.69 6-6 6s-6-2.544-6-6c0-3.476 2.69-6 6-6s6 2.524 6 6zm-2.63 0c0-2.164-1.563-3.636-3.37-3.636-1.807 0-3.37 1.482-3.37 3.636 0 2.134 1.563 3.636 3.37 3.636 1.807 0 3.37-1.492 3.37-3.636z' fill='%23E94235' fill-rule='nonzero'/%3E%3Cpath d='M205 13c0 3.456-2.69 6-6 6-3.3 0-6-2.544-6-6 0-3.476 2.69-6 6-6s6 2.524 6 6zm-2.62 0c0-2.164-1.563-3.636-3.37-3.636-1.807 0-3.37 1.482-3.37 3.636 0 2.134 1.563 3.636 3.37 3.636 1.807.01 3.37-1.492 3.37-3.636z' fill='%23FABB05' fill-rule='nonzero'/%3E%3Cpath d='M217 7.362v10.53c0 4.337-2.499 6.108-5.457 6.108-2.786 0-4.452-1.908-5.083-3.465l2.192-.93c.392.96 1.35 2.085 2.891 2.085 1.896 0 3.064-1.204 3.064-3.445v-.841h-.087c-.564.714-1.656 1.33-3.025 1.33-2.872 0-5.495-2.554-5.495-5.842C206 9.584 208.633 7 211.495 7c1.37 0 2.46.626 3.025 1.311h.087v-.949H217zm-2.221 5.54c0-2.066-1.35-3.582-3.064-3.582-1.742 0-3.197 1.507-3.197 3.582 0 2.045 1.455 3.533 3.197 3.533 1.714 0 3.064-1.488 3.064-3.533z' fill='%234285F4' fill-rule='nonzero'/%3E%3Cpath fill='%2334A853' fill-rule='nonzero' d='M223 1v18h-3V1z'/%3E%3Cpath d='M232.844 14.973l2.046 1.363c-.662.981-2.256 2.664-5.014 2.664-3.42 0-5.876-2.634-5.876-6 0-3.566 2.487-6 5.585-6 3.119 0 4.643 2.474 5.144 3.816l.271.681-8.032 3.326c.612 1.202 1.574 1.823 2.918 1.823s2.276-.671 2.958-1.673zm-6.307-2.163l5.375-2.224c-.301-.751-1.184-1.272-2.237-1.272-1.343 0-3.208 1.182-3.138 3.496z' fill='%23E94235' fill-rule='nonzero'/%3E%3Cpath d='M6.576 19.384c-1.248 0-2.468-.408-3.66-1.224-1.192-.816-1.972-1.96-2.34-3.432l2.016-.816c.24.944.732 1.74 1.476 2.388.744.648 1.58.972 2.508.972.96 0 1.78-.252 2.46-.756.68-.504 1.02-1.188 1.02-2.052 0-.96-.34-1.7-1.02-2.22-.68-.52-1.756-1.004-3.228-1.452-1.52-.48-2.672-1.1-3.456-1.86-.784-.76-1.176-1.732-1.176-2.916 0-1.232.488-2.304 1.464-3.216.976-.912 2.248-1.368 3.816-1.368 1.456 0 2.64.364 3.552 1.092.912.728 1.504 1.524 1.776 2.388l-2.016.84c-.144-.544-.5-1.048-1.068-1.512-.568-.464-1.3-.696-2.196-.696-.848 0-1.572.236-2.172.708-.6.472-.9 1.06-.9 1.764 0 .64.276 1.18.828 1.62.552.44 1.364.836 2.436 1.188.848.272 1.556.536 2.124.792a9.842 9.842 0 0 1 1.728 1.02 4.065 4.065 0 0 1 1.32 1.584c.296.632.444 1.364.444 2.196 0 .832-.172 1.576-.516 2.232a4.19 4.19 0 0 1-1.368 1.56 6.875 6.875 0 0 1-3.852 1.176zM24.936 19h-2.112v-1.632h-.096c-.336.56-.848 1.036-1.536 1.428a4.345 4.345 0 0 1-2.184.588c-1.472 0-2.588-.448-3.348-1.344-.76-.896-1.14-2.096-1.14-3.6v-7.2h2.208v6.84c0 2.192.968 3.288 2.904 3.288.912 0 1.656-.368 2.232-1.104.576-.736.864-1.584.864-2.544V7.24h2.208V19zm8.904.384c-.896 0-1.7-.192-2.412-.576-.712-.384-1.244-.864-1.596-1.44h-.096V19h-2.112V1.816h2.208V7.24l-.096 1.632h.096c.352-.576.884-1.056 1.596-1.44.712-.384 1.516-.576 2.412-.576 1.52 0 2.832.6 3.936 1.8 1.104 1.2 1.656 2.688 1.656 4.464 0 1.776-.552 3.264-1.656 4.464-1.104 1.2-2.416 1.8-3.936 1.8zm-.36-2.016c1.024 0 1.904-.388 2.64-1.164.736-.776 1.104-1.804 1.104-3.084s-.368-2.308-1.104-3.084c-.736-.776-1.616-1.164-2.64-1.164-1.04 0-1.924.384-2.652 1.152-.728.768-1.092 1.8-1.092 3.096s.364 2.328 1.092 3.096c.728.768 1.612 1.152 2.652 1.152zm12.336 2.016c-1.312 0-2.396-.32-3.252-.96a5.682 5.682 0 0 1-1.884-2.4l1.968-.816c.624 1.472 1.688 2.208 3.192 2.208.688 0 1.252-.152 1.692-.456.44-.304.66-.704.66-1.2 0-.768-.536-1.288-1.608-1.56l-2.376-.576c-.752-.192-1.464-.556-2.136-1.092-.672-.536-1.008-1.26-1.008-2.172 0-1.04.46-1.884 1.38-2.532.92-.648 2.012-.972 3.276-.972 1.04 0 1.968.236 2.784.708a3.99 3.99 0 0 1 1.752 2.028l-1.92.792c-.432-1.04-1.328-1.56-2.688-1.56-.656 0-1.208.136-1.656.408-.448.272-.672.64-.672 1.104 0 .672.52 1.128 1.56 1.368l2.328.552c1.104.256 1.92.696 2.448 1.32.528.624.792 1.328.792 2.112 0 1.056-.432 1.936-1.296 2.64-.864.704-1.976 1.056-3.336 1.056zm11.928 0c-1.76 0-3.208-.596-4.344-1.788-1.136-1.192-1.704-2.684-1.704-4.476 0-1.792.568-3.284 1.704-4.476 1.136-1.192 2.584-1.788 4.344-1.788 1.312 0 2.4.32 3.264.96a5.621 5.621 0 0 1 1.896 2.424l-2.016.84c-.608-1.472-1.704-2.208-3.288-2.208-.976 0-1.836.4-2.58 1.2-.744.8-1.116 1.816-1.116 3.048s.372 2.248 1.116 3.048c.744.8 1.604 1.2 2.58 1.2 1.648 0 2.784-.736 3.408-2.208l1.968.84c-.4.96-1.044 1.764-1.932 2.412-.888.648-1.988.972-3.3.972zm9.36-.384h-2.208V7.24h2.112v1.92h.096c.224-.64.684-1.168 1.38-1.584.696-.416 1.372-.624 2.028-.624.656 0 1.208.096 1.656.288l-.84 2.064c-.288-.112-.68-.168-1.176-.168-.8 0-1.508.316-2.124.948-.616.632-.924 1.46-.924 2.484V19zm8.904-14.712a1.504 1.504 0 0 1-1.104.456c-.432 0-.8-.152-1.104-.456a1.504 1.504 0 0 1-.456-1.104c0-.432.152-.8.456-1.104a1.504 1.504 0 0 1 1.104-.456c.432 0 .8.152 1.104.456.304.304.456.672.456 1.104 0 .432-.152.8-.456 1.104zm0 14.712H73.8V7.24h2.208V19zm9.096.384c-.896 0-1.7-.192-2.412-.576-.712-.384-1.244-.864-1.596-1.44H81V19h-2.112V1.816h2.208V7.24L81 8.872h.096c.352-.576.884-1.056 1.596-1.44.712-.384 1.516-.576 2.412-.576 1.52 0 2.832.6 3.936 1.8 1.104 1.2 1.656 2.688 1.656 4.464 0 1.776-.552 3.264-1.656 4.464-1.104 1.2-2.416 1.8-3.936 1.8zm-.36-2.016c1.024 0 1.904-.388 2.64-1.164.736-.776 1.104-1.804 1.104-3.084s-.368-2.308-1.104-3.084c-.736-.776-1.616-1.164-2.64-1.164-1.04 0-1.924.384-2.652 1.152-.728.768-1.092 1.8-1.092 3.096s.364 2.328 1.092 3.096c.728.768 1.612 1.152 2.652 1.152zm13.296 2.016c-1.776 0-3.22-.592-4.332-1.776-1.112-1.184-1.668-2.68-1.668-4.488 0-1.712.54-3.184 1.62-4.416 1.08-1.232 2.46-1.848 4.14-1.848 1.744 0 3.14.568 4.188 1.704 1.048 1.136 1.572 2.656 1.572 4.56l-.024.408h-9.288c.064 1.184.46 2.12 1.188 2.808.728.688 1.58 1.032 2.556 1.032 1.584 0 2.656-.672 3.216-2.016l1.968.816c-.384.912-1.016 1.676-1.896 2.292-.88.616-1.96.924-3.24.924zm3.168-7.68c-.048-.672-.356-1.312-.924-1.92-.568-.608-1.412-.912-2.532-.912-.816 0-1.524.256-2.124.768-.6.512-1.012 1.2-1.236 2.064h6.816zM123.72 19h-2.256l-2.928-9.024L115.632 19H113.4l-3.792-11.76h2.304l2.616 8.88h.024l2.904-8.88h2.28l2.904 8.88h.024l2.592-8.88h2.256L123.72 19zm7.632-14.712a1.504 1.504 0 0 1-1.104.456c-.432 0-.8-.152-1.104-.456a1.504 1.504 0 0 1-.456-1.104c0-.432.152-.8.456-1.104a1.504 1.504 0 0 1 1.104-.456c.432 0 .8.152 1.104.456.304.304.456.672.456 1.104 0 .432-.152.8-.456 1.104zm0 14.712h-2.208V7.24h2.208V19zm7.968.192c-1.232 0-2.172-.328-2.82-.984-.648-.656-.972-1.584-.972-2.784V9.256h-2.064V7.24h2.064v-3.6h2.208v3.6h2.88v2.016h-2.88v6c0 1.28.528 1.92 1.584 1.92.4 0 .736-.064 1.008-.192l.768 1.896c-.48.208-1.072.312-1.776.312zm5.616-17.376V7.24l-.096 1.632h.096c.32-.56.824-1.036 1.512-1.428a4.389 4.389 0 0 1 2.208-.588c1.456 0 2.568.448 3.336 1.344.768.896 1.152 2.096 1.152 3.6V19h-2.208v-6.864c0-2.176-.968-3.264-2.904-3.264-.912 0-1.656.364-2.232 1.092-.576.728-.864 1.572-.864 2.532V19h-2.208V1.816h2.208z' fill='%23FFF'/%3E%3C/g%3E%3C/svg%3E\")}.swg-button-light:hover,.swg-button:hover{background-color:#f8f8f8}.swg-button-light:focus,.swg-button:focus{box-shadow:#e8e8e8}.swg-button-light:active,.swg-button:active{background-color:#fff}.swg-button-dark:hover{background-color:#3c4043}.swg-button-dark:focus{box-shadow:#202124}.swg-button-dark:active{background-color:#5f6368}.swg-button-light:lang(ar):after,.swg-button:lang(ar):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-ar-lt.svg)}.swg-button-dark:lang(ar):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-ar-dk.svg)}.swg-button-light:lang(de):after,.swg-button:lang(de):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-de-lt.svg)}.swg-button-dark:lang(de):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-de-dk.svg)}.swg-button-light:lang(es):after,.swg-button:lang(es):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-es-lt.svg)}.swg-button-dark:lang(es):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-es-dk.svg)}.swg-button-light:lang(es-latam):after,.swg-button:lang(es-latam):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-es-latam-lt.svg)}.swg-button-dark:lang(es-latam):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-es-latam-dk.svg)}.swg-button-light:lang(es-latn):after,.swg-button:lang(es-latn):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-es-latam-lt.svg)}.swg-button-dark:lang(es-latn):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-es-latam-dk.svg)}.swg-button-light:lang(fr):after,.swg-button:lang(fr):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-fr-lt.svg)}.swg-button-dark:lang(fr):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-fr-dk.svg)}.swg-button-light:lang(hi):after,.swg-button:lang(hi):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-hi-lt.svg)}.swg-button-dark:lang(hi):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-hi-dk.svg)}.swg-button-light:lang(id):after,.swg-button:lang(id):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-id-lt.svg)}.swg-button-dark:lang(id):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-id-dk.svg)}.swg-button-light:lang(it):after,.swg-button:lang(it):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-it-lt.svg)}.swg-button-dark:lang(it):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-it-dk.svg)}.swg-button-light:lang(jp):after,.swg-button:lang(jp):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-jp-lt.svg)}.swg-button-dark:lang(jp):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-jp-dk.svg)}.swg-button-light:lang(ko):after,.swg-button:lang(ko):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-ko-lt.svg)}.swg-button-dark:lang(ko):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-ko-dk.svg)}.swg-button-light:lang(ms):after,.swg-button:lang(ms):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-ms-lt.svg)}.swg-button-dark:lang(ms):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-ms-dk.svg)}.swg-button-light:lang(nl):after,.swg-button:lang(nl):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-nl-lt.svg)}.swg-button-dark:lang(nl):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-nl-dk.svg)}.swg-button-light:lang(pl):after,.swg-button:lang(pl):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-pl-lt.svg)}.swg-button-dark:lang(pl):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-pl-dk.svg)}.swg-button-light:lang(pt):after,.swg-button:lang(pt):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-pt-lt.svg)}.swg-button-dark:lang(pt):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-pt-dk.svg)}.swg-button-light:lang(pt-br):after,.swg-button:lang(pt-br):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-pt-br-lt.svg)}.swg-button-dark:lang(pt-br):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-pt-br-dk.svg)}.swg-button-light:lang(ru):after,.swg-button:lang(ru):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-ru-lt.svg)}.swg-button-dark:lang(ru):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-ru-dk.svg)}.swg-button-light:lang(se):after,.swg-button:lang(se):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-se-lt.svg)}.swg-button-dark:lang(se):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-se-dk.svg)}.swg-button-light:lang(th):after,.swg-button:lang(th):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-th-lt.svg)}.swg-button-dark:lang(th):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-th-dk.svg)}.swg-button-light:lang(tr):after,.swg-button:lang(tr):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-tr-lt.svg)}.swg-button-dark:lang(tr):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-tr-dk.svg)}.swg-button-light:lang(uk):after,.swg-button:lang(uk):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-uk-lt.svg)}.swg-button-dark:lang(uk):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-uk-dk.svg)}.swg-button-light:lang(zh-tw):after,.swg-button:lang(zh-tw):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-zh-tw-lt.svg)}.swg-button-dark:lang(zh-tw):after{background-image:url(https://news.google.com/swg/js/v1/i18n/b-zh-tw-dk.svg)}\n/*# sourceURL=/extensions/amp-subscriptions-google/0.1/amp-subscriptions-google.css*/";

},{}],2:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GoogleSubscriptionsPlatform = exports.GoogleSubscriptionsPlatformService = undefined;

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

exports.getFetcherClassForTesting = getFetcherClassForTesting;
exports.getPageConfigClassForTesting = getPageConfigClassForTesting;
exports.getSubscribeResponseClassForTesting = getSubscribeResponseClassForTesting;

var _ampSubscriptionsGoogle = require('../../../build/amp-subscriptions-google-0.1.css');

var _swg = require('../../../third_party/subscriptions-project/swg');

var _docImpl = require('../../amp-subscriptions/0.1/doc-impl');

var _entitlement = require('../../amp-subscriptions/0.1/entitlement');

var _config = require('../../../third_party/subscriptions-project/config');

var _services = require('../../../src/services');

var _styleInstaller = require('../../../src/style-installer');

var _url = require('../../../src/url');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TAG = 'amp-subscriptions-google';
var PLATFORM_ID = 'subscribe.google.com';
var GOOGLE_DOMAIN_RE = /(^|\.)google\.(com?|[a-z]{2}|com?\.[a-z]{2}|cat)$/;

/**
 */

var GoogleSubscriptionsPlatformService = exports.GoogleSubscriptionsPlatformService = function () {
  /**
   * @param {!../../../src/service/ampdoc-impl.AmpDoc} ampdoc
   */
  function GoogleSubscriptionsPlatformService(ampdoc) {
    _classCallCheck(this, GoogleSubscriptionsPlatformService);

    /** @private {!../../../src/service/ampdoc-impl.AmpDoc} */
    this.ampdoc_ = ampdoc;
  }

  /**
   * @param {!JsonObject} platformConfig
   * @param {!../../amp-subscriptions/0.1/service-adapter.ServiceAdapter} serviceAdapter
   * @return {!GoogleSubscriptionsPlatform}
   */


  _createClass(GoogleSubscriptionsPlatformService, [{
    key: 'createPlatform',
    value: function createPlatform(platformConfig, serviceAdapter) {
      return new GoogleSubscriptionsPlatform(this.ampdoc_, platformConfig, serviceAdapter);
    }
  }]);

  return GoogleSubscriptionsPlatformService;
}();

/**
 * @implements {../../amp-subscriptions/0.1/subscription-platform.SubscriptionPlatform}
 */


var GoogleSubscriptionsPlatform = exports.GoogleSubscriptionsPlatform = function () {

  /**
   * @param {!../../../src/service/ampdoc-impl.AmpDoc} ampdoc
   * @param {!JsonObject} platformConfig
   * @param {!../../amp-subscriptions/0.1/service-adapter.ServiceAdapter} serviceAdapter
   */
  function GoogleSubscriptionsPlatform(ampdoc, platformConfig, serviceAdapter) {
    var _this = this;

    _classCallCheck(this, GoogleSubscriptionsPlatform);

    /**
     * @private @const
     * {!../../amp-subscriptions/0.1/service-adapter.ServiceAdapter}
     */
    this.serviceAdapter_ = serviceAdapter;
    /** @private @const {!ConfiguredRuntime} */
    this.runtime_ = new _swg.ConfiguredRuntime(new _docImpl.DocImpl(ampdoc), serviceAdapter.getPageConfig(), {
      fetcher: new AmpFetcher(ampdoc.win)
    });
    this.runtime_.setOnLoginRequest(function (request) {
      _this.onLoginRequest_(request && request.linkRequested);
    });
    this.runtime_.setOnLinkComplete(function () {
      _this.onLinkComplete_();
    });
    this.runtime_.setOnNativeSubscribeRequest(function () {
      _this.onNativeSubscribeRequest_();
    });
    this.runtime_.setOnSubscribeResponse(function (promise) {
      promise.then(function (response) {
        _this.onSubscribeResponse_(response);
      });
    });

    /** @const @private {!JsonObject} */
    this.serviceConfig_ = platformConfig;

    /** @private {boolean} */
    this.isGoogleViewer_ = false;
    this.resolveGoogleViewer_(_services.Services.viewerForDoc(ampdoc));

    // Install styles.
    (0, _styleInstaller.installStylesForDoc)(ampdoc, _ampSubscriptionsGoogle.CSS, function () {}, false, TAG);
  }

  /**
   * @param {boolean} linkRequested
   * @private
   */


  _createClass(GoogleSubscriptionsPlatform, [{
    key: 'onLoginRequest_',
    value: function onLoginRequest_(linkRequested) {
      if (linkRequested && this.isGoogleViewer_) {
        this.runtime_.linkAccount();
      } else {
        this.maybeComplete_(this.serviceAdapter_.delegateActionToLocal('login'));
      }
    }

    /** @private */

  }, {
    key: 'onLinkComplete_',
    value: function onLinkComplete_() {
      this.runtime_.reset();
      this.serviceAdapter_.reAuthorizePlatform(this);
    }

    /** @private */

  }, {
    key: 'onNativeSubscribeRequest_',
    value: function onNativeSubscribeRequest_() {
      this.maybeComplete_(this.serviceAdapter_.delegateActionToLocal('subscribe'));
    }

    /**
     * @param {!Promise<boolean>} promise
     * @private
     */

  }, {
    key: 'maybeComplete_',
    value: function maybeComplete_(promise) {
      var _this2 = this;

      promise.then(function (result) {
        if (result) {
          _this2.runtime_.reset();
        }
      });
    }

    /**
     * @param {!SubscribeResponse} response
     * @private
     */

  }, {
    key: 'onSubscribeResponse_',
    value: function onSubscribeResponse_(response) {
      var _this3 = this;

      response.complete().then(function () {
        _this3.runtime_.reset();
        _this3.serviceAdapter_.reAuthorizePlatform(_this3);
      });
    }

    /** @override */

  }, {
    key: 'getEntitlements',
    value: function getEntitlements() {
      return this.runtime_.getEntitlements().then(function (swgEntitlements) {
        var swgEntitlement = swgEntitlements.getEntitlementForThis();
        if (!swgEntitlement) {
          return null;
        }
        swgEntitlements.ack();
        return new _entitlement.Entitlement({
          source: swgEntitlement.source,
          raw: swgEntitlements.raw,
          service: PLATFORM_ID,
          granted: true, //swgEntitlements.getEntitlementForThis makes sure this is true.
          grantReason: _entitlement.GrantReason.SUBSCRIBER, // there is no other case of subscription for SWG as of now.
          dataObject: swgEntitlement.json()
        });
      });
    }

    /** @override */

  }, {
    key: 'getServiceId',
    value: function getServiceId() {
      return PLATFORM_ID;
    }

    /** @override */

  }, {
    key: 'activate',
    value: function activate(entitlement) {
      // Offers or abbreviated offers may need to be shown depending on
      // whether the access has been granted and whether user is a subscriber.
      if (!entitlement.granted) {
        this.runtime_.showOffers({ list: 'amp' });
      } else if (!entitlement.isSubscriber()) {
        this.runtime_.showAbbrvOffer({ list: 'amp' });
      }
    }

    /**
     * Returns if pingback is enabled for this platform
     * @return {boolean}
     */

  }, {
    key: 'isPingbackEnabled',
    value: function isPingbackEnabled() {
      return false;
    }

    /**
     * Performs the pingback to the subscription platform
     */

  }, {
    key: 'pingback',
    value: function pingback() {}

    /** @override */

  }, {
    key: 'supportsCurrentViewer',
    value: function supportsCurrentViewer() {
      return this.isGoogleViewer_;
    }

    /**
     * @param {!../../../src/service/viewer-impl.Viewer} viewer
     * @private
     */

  }, {
    key: 'resolveGoogleViewer_',
    value: function resolveGoogleViewer_(viewer) {
      var _this4 = this;

      // This is a very light veiwer resolution since there's no real security
      // implication - this only affects on-platform preferences.
      var viewerUrl = viewer.getParam('viewerUrl');
      if (viewerUrl) {
        this.isGoogleViewer_ = GOOGLE_DOMAIN_RE.test((0, _url.parseUrlDeprecated)(viewerUrl).hostname);
      } else {
        // This can only be resolved asynchronously in this case. However, the
        // action execution must be done synchronously. Thus we have to allow
        // a minimal race condition here.
        viewer.getViewerOrigin().then(function (origin) {
          if (origin) {
            _this4.isGoogleViewer_ = GOOGLE_DOMAIN_RE.test((0, _url.parseUrlDeprecated)(origin).hostname);
          }
        });
      }
    }

    /** @override */

  }, {
    key: 'getBaseScore',
    value: function getBaseScore() {
      return this.serviceConfig_['baseScore'] || 0;
    }

    /** @override */

  }, {
    key: 'executeAction',
    value: function executeAction(action) {
      if (action === 'subscribe') {
        this.runtime_.showOffers({ list: 'amp', isClosable: true });
        return Promise.resolve(true);
      }
      return Promise.resolve(false);
    }

    /** @override */

  }, {
    key: 'decorateUI',
    value: function decorateUI(element, action, options) {
      if (action === 'subscribe') {
        element.textContent = '';
        this.runtime_.attachButton(element, options, function () {});
      }
    }
  }]);

  return GoogleSubscriptionsPlatform;
}();

/**
 * Adopts fetcher protocol required for SwG to AMP fetching rules.
 * @implements {Fetcher}
 */


var AmpFetcher = function () {

  /**
   * @param {!Window} win
   */
  function AmpFetcher(win) {
    _classCallCheck(this, AmpFetcher);

    /** @const @private {!../../../src/service/xhr-impl.Xhr} */
    this.xhr_ = _services.Services.xhrFor(win);
  }

  /** @override */


  _createClass(AmpFetcher, [{
    key: 'fetchCredentialedJson',
    value: function fetchCredentialedJson(url) {
      return this.xhr_.fetchJson(url, {
        credentials: 'include'
      }).then(function (response) {
        return response.json();
      });
    }
  }]);

  return AmpFetcher;
}();

// Register the extension services.


AMP.extension(TAG, '0.1', function (AMP) {
  AMP.registerServiceForDoc('subscriptions-google', function (ampdoc) {
    var platformService = new GoogleSubscriptionsPlatformService(ampdoc);
    _services.Services.subscriptionsServiceForDoc(ampdoc).then(function (service) {
      service.registerPlatform(PLATFORM_ID, function (platformConfig, serviceAdapter) {
        return platformService.createPlatform(platformConfig, serviceAdapter);
      });
    });
    return platformService;
  });
});

/**
 * TODO(dvoytenko): remove once compiler type checking is fixed for third_party.
 * @package @visibleForTesting
 */
function getFetcherClassForTesting() {
  return _swg.Fetcher;
}

/**
 * TODO(dvoytenko): remove once compiler type checking is fixed for third_party.
 * @package @visibleForTesting
 */
function getPageConfigClassForTesting() {
  return _config.PageConfig;
}

/**
 * TODO(dvoytenko): remove once compiler type checking is fixed for third_party.
 * @package @visibleForTesting
 */
function getSubscribeResponseClassForTesting() {
  return _swg.SubscribeResponse;
}

},{"../../../build/amp-subscriptions-google-0.1.css":1,"../../../src/services":25,"../../../src/style-installer":27,"../../../src/url":32,"../../../third_party/subscriptions-project/config":37,"../../../third_party/subscriptions-project/swg":38,"../../amp-subscriptions/0.1/doc-impl":3,"../../amp-subscriptions/0.1/entitlement":4}],3:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DocImpl = undefined;

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

exports.getDocClassForTesting = getDocClassForTesting;

var _config = require('../../../third_party/subscriptions-project/config');

var _log = require('../../../src/log');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Adopts config document to ampdoc.
 * @implements {Doc}
 */
var DocImpl = exports.DocImpl = function () {

  /**
   * @param {!../../../src/service/ampdoc-impl.AmpDoc} ampdoc
   */
  function DocImpl(ampdoc) {
    _classCallCheck(this, DocImpl);

    /** @private @const {!../../../src/service/ampdoc-impl.AmpDoc} */
    this.ampdoc_ = ampdoc;
  }

  /** @override */


  _createClass(DocImpl, [{
    key: 'getWin',
    value: function getWin() {
      return this.ampdoc_.win;
    }

    /** @override */

  }, {
    key: 'getRootNode',
    value: function getRootNode() {
      return this.ampdoc_.getRootNode();
    }

    /** @override */

  }, {
    key: 'getRootElement',
    value: function getRootElement() {
      var root = this.ampdoc_.getRootNode();
      return (0, _log.dev)().assertElement(root.documentElement || root.body || root);
    }

    /** @override */

  }, {
    key: 'getHead',
    value: function getHead() {
      return (0, _log.dev)().assertElement(this.ampdoc_.getHeadNode());
    }

    /** @override */

  }, {
    key: 'getBody',
    value: function getBody() {
      return this.ampdoc_.isBodyAvailable() ? this.ampdoc_.getBody() : null;
    }

    /** @override */

  }, {
    key: 'isReady',
    value: function isReady() {
      return this.ampdoc_.isReady();
    }

    /** @override */

  }, {
    key: 'whenReady',
    value: function whenReady() {
      return this.ampdoc_.whenReady();
    }
  }]);

  return DocImpl;
}();

/** @package Visible for testing only. */


function getDocClassForTesting() {
  return _config.Doc;
}

},{"../../../src/log":12,"../../../third_party/subscriptions-project/config":37}],4:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Entitlement = exports.GrantReason = undefined;

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


var _object = require('../../../src/utils/object');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** @enum {string} */
var GrantReason = exports.GrantReason = {
  'SUBSCRIBER': 'SUBSCRIBER',
  'METERING': 'METERING'
};

/**
 * The single entitlement object.
 */

var Entitlement = exports.Entitlement = function () {
  _createClass(Entitlement, null, [{
    key: 'empty',


    /**
     * @param {string} service
     * @return {!Entitlement}
     */
    value: function empty(service) {
      return new Entitlement({
        source: '',
        raw: '',
        service: service,
        granted: false
      });
    }

    /**
     * @param {Object} input
     * @param {string} [input.source]
     * @param {string} [input.raw]
     * @param {string} [input.service]
     * @param {boolean} [input.granted]
     * @param {?GrantReason} [input.grantReason]
     * @param {?JsonObject} [input.dataObject]
     */

  }]);

  function Entitlement(_ref) {
    var source = _ref.source,
        _ref$raw = _ref.raw,
        raw = _ref$raw === undefined ? '' : _ref$raw,
        service = _ref.service,
        _ref$granted = _ref.granted,
        granted = _ref$granted === undefined ? false : _ref$granted,
        _ref$grantReason = _ref.grantReason,
        grantReason = _ref$grantReason === undefined ? '' : _ref$grantReason,
        dataObject = _ref.dataObject;

    _classCallCheck(this, Entitlement);

    /** @const {string} */
    this.raw = raw;
    /** @const {string} */
    this.source = source;
    /** {string} */
    this.service = service;
    /** @const {boolean} */
    this.granted = granted;
    /** @const {?string} */
    this.grantReason = grantReason;
    /** @const {?JsonObject} */
    this.data = dataObject;
  }

  /**
   * Returns json format of entitlements
   * @return {!JsonObject}
   */


  _createClass(Entitlement, [{
    key: 'json',
    value: function json() {
      var entitlementJson = (0, _object.dict)({
        'source': this.source,
        'service': this.service,
        'granted': this.granted,
        'grantReason': this.grantReason,
        'data': this.data
      });
      return entitlementJson;
    }

    /**
     * Returns json to be used for pingback.
     *
     * @return {!JsonObject}
     */

  }, {
    key: 'jsonForPingback',
    value: function jsonForPingback() {
      return (/** @type {!JsonObject} */Object.assign({}, { 'raw': this.raw }, this.json())
      );
    }

    /**
     * @param {?JsonObject} json
     * @param {?string} rawData
     * @return {!Entitlement}
     */

  }, {
    key: 'isSubscriber',


    /**
     * Returns if the user is a subscriber.
     * @return {boolean}
     */
    value: function isSubscriber() {
      return this.granted && this.grantReason === GrantReason.SUBSCRIBER;
    }
  }], [{
    key: 'parseFromJson',
    value: function parseFromJson(json) {
      var rawData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if (!json) {
        json = (0, _object.dict)();
      }
      var raw = rawData || JSON.stringify(json);
      var source = json['source'] || '';
      var granted = json['granted'] || false;
      var grantReason = json['grantReason'];
      var dataObject = json['data'] || null;
      return new Entitlement({ source: source, raw: raw, service: '',
        granted: granted, grantReason: grantReason, dataObject: dataObject });
    }
  }]);

  return Entitlement;
}();

},{"../../../src/utils/object":34}],5:[function(require,module,exports){
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


},{}],6:[function(require,module,exports){
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

},{}],7:[function(require,module,exports){
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

},{}],8:[function(require,module,exports){
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

},{"./config":7,"./string":26,"./url":32}],9:[function(require,module,exports){
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

},{"../third_party/css-escape/css-escape":36,"./log":12,"./string":26,"./types":29,"./utils/object":34,"./utils/promise":35}],10:[function(require,module,exports){
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

},{"./dom":9,"./log":12,"./service":24,"./types":29}],11:[function(require,module,exports){
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

},{"./cookies":8,"./url":32,"./utils/object":34}],12:[function(require,module,exports){
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

},{"./mode":14,"./mode-object":13,"./types":29}],13:[function(require,module,exports){
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

},{"./mode":14}],14:[function(require,module,exports){
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

},{"./url-parse-query-string":30}],15:[function(require,module,exports){
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

},{"./experiments":11,"./mode":14,"./polyfills/array-includes":16,"./polyfills/custom-elements":17,"./polyfills/document-contains":18,"./polyfills/domtokenlist-toggle":19,"./polyfills/math-sign":20,"./polyfills/object-assign":21,"./polyfills/promise":22,"document-register-element/build/document-register-element.patched":5}],16:[function(require,module,exports){
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

},{}],17:[function(require,module,exports){
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

},{}],18:[function(require,module,exports){
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

},{}],19:[function(require,module,exports){
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

},{}],20:[function(require,module,exports){
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

},{}],21:[function(require,module,exports){
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

},{}],22:[function(require,module,exports){
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

},{"promise-pjs/promise":6}],23:[function(require,module,exports){
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

},{"./log":12,"./service":24,"./services":25}],24:[function(require,module,exports){
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

},{"./log":12,"./polyfills":15,"./types":29,"./utils/promise":35}],25:[function(require,module,exports){
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

},{"./element-service":10,"./service":24}],26:[function(require,module,exports){
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

},{}],27:[function(require,module,exports){
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

},{"./dom":9,"./log":12,"./render-delaying-services":23,"./services":25,"./style":28,"./utils/object":34}],28:[function(require,module,exports){
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

},{"./string":26,"./utils/object.js":34}],29:[function(require,module,exports){
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

},{}],30:[function(require,module,exports){
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

},{"./url-try-decode-uri-component":31}],31:[function(require,module,exports){
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

},{}],32:[function(require,module,exports){
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

},{"./config":7,"./log":12,"./mode":14,"./string":26,"./types":29,"./url-parse-query-string":30,"./url-try-decode-uri-component":31,"./utils/lru-cache":33,"./utils/object":34}],33:[function(require,module,exports){
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

},{"../log":12}],34:[function(require,module,exports){
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

},{"../types":29}],35:[function(require,module,exports){
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

},{}],36:[function(require,module,exports){
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

},{}],37:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Copyright 2018 The Subscribe with Google Authors. All Rights Reserved.
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
/** Version: 0.1.22.23 */
/**
 * Copyright 2018 The Subscribe with Google Authors. All Rights Reserved.
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
 * @param {!Document} doc
 * @return {string}
 */
function getReadyState(doc) {
  return (/** @type {string} */doc['readyState']
  );
}

/**
 * Whether the document is ready.
 * @param {!Document} doc
 * @return {boolean}
 */
function isDocumentReady(doc) {
  var readyState = getReadyState(doc);
  return readyState != 'loading' && readyState != 'uninitialized';
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
 * Copyright 2018 The Subscribe with Google Authors. All Rights Reserved.
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
 * @interface
 */

var Doc = function () {
  function Doc() {
    _classCallCheck(this, Doc);
  }

  _createClass(Doc, [{
    key: 'getWin',


    /**
     * @return {!Window}
     */
    value: function getWin() {}

    /**
     * The `Document` node or analog.
     * @return {!Node}
     */

  }, {
    key: 'getRootNode',
    value: function getRootNode() {}

    /**
     * The `Document.documentElement` element or analog.
     * @return {!Element}
     */

  }, {
    key: 'getRootElement',
    value: function getRootElement() {}

    /**
     * The `Document.head` element or analog. Returns `null` if not available
     * yet.
     * @return {!Element}
     */

  }, {
    key: 'getHead',
    value: function getHead() {}

    /**
     * The `Document.body` element or analog. Returns `null` if not available
     * yet.
     * @return {?Element}
     */

  }, {
    key: 'getBody',
    value: function getBody() {}

    /**
     * Whether the document has been fully constructed.
     * @return {boolean}
     */

  }, {
    key: 'isReady',
    value: function isReady() {}

    /**
     * Resolved when document has been fully constructed.
     * @return {!Promise}
     */

  }, {
    key: 'whenReady',
    value: function whenReady() {}
  }]);

  return Doc;
}();

/** @implements {Doc} */


var GlobalDoc = function () {

  /**
   * @param {!Window|!Document} winOrDoc
   */
  function GlobalDoc(winOrDoc) {
    _classCallCheck(this, GlobalDoc);

    var isWin = !!winOrDoc.document;
    /** @private @const {!Window} */
    this.win_ = isWin ?
    /** @type {!Window} */winOrDoc :
    /** @type {!Window} */ /** @type {!Document} */winOrDoc.defaultView;
    /** @private @const {!Document} */
    this.doc_ = isWin ?
    /** @type {!Window} */winOrDoc.document :
    /** @type {!Document} */winOrDoc;
  }

  /** @override */


  _createClass(GlobalDoc, [{
    key: 'getWin',
    value: function getWin() {
      return this.win_;
    }

    /** @override */

  }, {
    key: 'getRootNode',
    value: function getRootNode() {
      return this.doc_;
    }

    /** @override */

  }, {
    key: 'getRootElement',
    value: function getRootElement() {
      return this.doc_.documentElement;
    }

    /** @override */

  }, {
    key: 'getHead',
    value: function getHead() {
      // `document.head` always has a chance to be parsed, at least partially.
      return (/** @type {!Element} */this.doc_.head
      );
    }

    /** @override */

  }, {
    key: 'getBody',
    value: function getBody() {
      return this.doc_.body;
    }

    /** @override */

  }, {
    key: 'isReady',
    value: function isReady() {
      return isDocumentReady(this.doc_);
    }

    /** @override */

  }, {
    key: 'whenReady',
    value: function whenReady() {
      return whenDocumentReady(this.doc_);
    }
  }]);

  return GlobalDoc;
}();

/**
 * @param {!Document|!Window|!Doc} input
 * @return {!Doc}
 */


function resolveDoc(input) {
  // Is it a `Document`
  if ( /** @type {!Document} */input.nodeType === /* DOCUMENT */9) {
    return new GlobalDoc( /** @type {!Document} */input);
  }
  // Is it a `Window`?
  if ( /** @type {!Window} */input.document) {
    return new GlobalDoc( /** @type {!Window} */input);
  }
  return (/** @type {!Doc} */input
  );
}

/**
 * Copyright 2018 The Subscribe with Google Authors. All Rights Reserved.
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
 */

var PageConfig = function () {

  /**
   * @param {string} productOrPublicationId
   * @param {boolean} locked
   */
  function PageConfig(productOrPublicationId, locked) {
    _classCallCheck(this, PageConfig);

    var publicationId = void 0,
        productId = void 0,
        label = void 0;
    var div = productOrPublicationId.indexOf(':');
    if (div != -1) {
      // The argument is a product id.
      productId = productOrPublicationId;
      publicationId = productId.substring(0, div);
      label = productId.substring(div + 1);
    } else {
      // The argument is a publication id.
      publicationId = productOrPublicationId;
      productId = null;
      label = null;
    }

    /** @private @const {string} */
    this.publicationId_ = publicationId;
    /** @private @const {?string} */
    this.productId_ = productId;
    /** @private @const {?string} */
    this.label_ = label;
    /** @private @const {boolean} */
    this.locked_ = locked;
  }

  /**
   * @return {string}
   */


  _createClass(PageConfig, [{
    key: 'getPublicationId',
    value: function getPublicationId() {
      return this.publicationId_;
    }

    /**
     * @return {?string}
     */

  }, {
    key: 'getProductId',
    value: function getProductId() {
      return this.productId_;
    }

    /**
     * @return {?string}
     */

  }, {
    key: 'getLabel',
    value: function getLabel() {
      return this.label_;
    }

    /**
     * @return {boolean}
     */

  }, {
    key: 'isLocked',
    value: function isLocked() {
      return this.locked_;
    }
  }]);

  return PageConfig;
}();

/**
 * Copyright 2018 The Subscribe with Google Authors. All Rights Reserved.
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
 * Copyright 2018 The Subscribe with Google Authors. All Rights Reserved.
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
 * Copyright 2018 The Subscribe with Google Authors. All Rights Reserved.
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
 * Copyright 2018 The Subscribe with Google Authors. All Rights Reserved.
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
 * Copyright 2018 The Subscribe with Google Authors. All Rights Reserved.
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
 * Whether the element have a next node in the document order.
 * This means either:
 *  a. The element itself has a nextSibling.
 *  b. Any of the element ancestors has a nextSibling.
 * @param {!Element} element
 * @param {?Node=} opt_stopNode
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
 * Copyright 2018 The Subscribe with Google Authors. All Rights Reserved.
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
 * Determines if value is actually an Array.
 * @param {*} value
 * @return {boolean}
 */
function isArray(value) {
  return Array.isArray(value);
}

/**
 * Copyright 2018 The Subscribe with Google Authors. All Rights Reserved.
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
 * Simple wrapper around JSON.parse that casts the return value
 * to JsonObject.
 * Create a new wrapper if an array return value is desired.
 * @param {*} json JSON string to parse
 * @return {?JsonObject|undefined} May be extend to parse arrays.
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
 * Copyright 2018 The Subscribe with Google Authors. All Rights Reserved.
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

var ALREADY_SEEN = '__SWG-SEEN__';

/**
 */

var PageConfigResolver = function () {

  /**
   * @param {!Window|!Document|!Doc} winOrDoc
   */
  function PageConfigResolver(winOrDoc) {
    var _this = this;

    _classCallCheck(this, PageConfigResolver);

    /** @private @const {!Doc} */
    this.doc_ = resolveDoc(winOrDoc);

    /** @private {?function((!PageConfig|!Promise))} */
    this.configResolver_ = null;

    /** @private @const {!Promise<!PageConfig>} */
    this.configPromise_ = new Promise(function (resolve) {
      _this.configResolver_ = resolve;
    });

    /** @private @const {!MetaParser} */
    this.metaParser_ = new MetaParser(this.doc_);
    /** @private @const {!JsonLdParser} */
    this.ldParser_ = new JsonLdParser(this.doc_);
    /** @private @const {!MicrodataParser} */
    this.microdataParser_ = new MicrodataParser(this.doc_);
  }

  /**
   * @return {!Promise<!PageConfig>}
   */


  _createClass(PageConfigResolver, [{
    key: 'resolveConfig',
    value: function resolveConfig() {
      // Try resolve the config at different times.
      Promise.resolve().then(this.check.bind(this));
      this.doc_.whenReady().then(this.check.bind(this));
      return this.configPromise_;
    }

    /**
     * @return {?PageConfig}
     */

  }, {
    key: 'check',
    value: function check() {
      // Already resolved.
      if (!this.configResolver_) {
        return null;
      }
      var config = this.metaParser_.check();
      if (!config) {
        config = this.ldParser_.check();
      }
      if (!config) {
        config = this.microdataParser_.check();
      }
      if (config) {
        // Product ID has been found: initialize the rest of the config.
        this.configResolver_(config);
        this.configResolver_ = null;
      } else if (this.doc_.isReady()) {
        this.configResolver_(Promise.reject(new Error('No config could be discovered in the page')));
        this.configResolver_ = null;
      }
      return config;
    }
  }]);

  return PageConfigResolver;
}();

var MetaParser = function () {
  /**
   * @param {!Doc} doc
   */
  function MetaParser(doc) {
    _classCallCheck(this, MetaParser);

    /** @private @const {!Doc} */
    this.doc_ = doc;
  }

  /**
   * @return {?PageConfig}
   */


  _createClass(MetaParser, [{
    key: 'check',
    value: function check() {
      if (!this.doc_.getBody()) {
        // Wait until the whole `<head>` is parsed.
        return null;
      }

      // Try to find product id.
      var productId = getMetaTag(this.doc_.getRootNode(), 'subscriptions-product-id');
      if (!productId) {
        return null;
      }

      // Is locked?
      var accessibleForFree = getMetaTag(this.doc_.getRootNode(), 'subscriptions-accessible-for-free');
      var locked = accessibleForFree && accessibleForFree.toLowerCase() == 'false' || false;

      return new PageConfig(productId, locked);
    }
  }]);

  return MetaParser;
}();

var JsonLdParser = function () {
  /**
   * @param {!Doc} doc
   */
  function JsonLdParser(doc) {
    _classCallCheck(this, JsonLdParser);

    /** @private @const {!Doc} */
    this.doc_ = doc;
  }

  /**
   * @return {?PageConfig}
   */


  _createClass(JsonLdParser, [{
    key: 'check',
    value: function check() {
      if (!this.doc_.getBody()) {
        // Wait until the whole `<head>` is parsed.
        return null;
      }

      var domReady = this.doc_.isReady();

      // type: 'application/ld+json'
      var elements = this.doc_.getRootNode().querySelectorAll('script[type="application/ld+json"]');
      for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        if (element[ALREADY_SEEN] || !element.textContent || !domReady && !hasNextNodeInDocumentOrder(element)) {
          continue;
        }
        element[ALREADY_SEEN] = true;
        if (element.textContent.indexOf('NewsArticle') == -1) {
          continue;
        }
        var possibleConfig = this.tryExtractConfig_(element);
        if (possibleConfig) {
          return possibleConfig;
        }
      }
      return null;
    }

    /**
     * @param {!Element} element
     * @return {?PageConfig}
     */

  }, {
    key: 'tryExtractConfig_',
    value: function tryExtractConfig_(element) {
      var json = tryParseJson(element.textContent);
      if (!json) {
        return null;
      }

      // Must be a NewsArticle.
      if (!this.checkType_(json, 'NewsArticle')) {
        return null;
      }

      // Must have a isPartOf[@type=Product].
      var productId = null;
      var partOfArray = this.valueArray_(json, 'isPartOf');
      if (partOfArray) {
        for (var i = 0; i < partOfArray.length; i++) {
          productId = this.discoverProductId_(partOfArray[i]);
          if (productId) {
            break;
          }
        }
      }
      if (!productId) {
        return null;
      }

      // Found product id, just check for the access flag.
      var isAccessibleForFree = this.bool_(this.singleValue_(json, 'isAccessibleForFree'),
      /* default */true);

      return new PageConfig(productId, !isAccessibleForFree);
    }

    /**
     * @param {*} value
     * @param {boolean} def
     * @return {boolean}
     */

  }, {
    key: 'bool_',
    value: function bool_(value, def) {
      if (value == null || value === '') {
        return def;
      }
      if (typeof value == 'boolean') {
        return value;
      }
      if (typeof value == 'string') {
        var lowercase = value.toLowerCase();
        if (lowercase == 'false') {
          return false;
        }
        if (lowercase == 'true') {
          return true;
        }
      }
      return def;
    }

    /**
     * @param {!Object} json
     * @return {?string}
     */

  }, {
    key: 'discoverProductId_',
    value: function discoverProductId_(json) {
      // Must have type `Product`.
      if (!this.checkType_(json, 'Product')) {
        return null;
      }
      return (/** @type {?string} */this.singleValue_(json, 'productID')
      );
    }

    /**
     * @param {!Object} json
     * @param {string} name
     * @return {?Array}
     */

  }, {
    key: 'valueArray_',
    value: function valueArray_(json, name) {
      var value = json[name];
      if (value == null || value === '') {
        return null;
      }
      return isArray(value) ? value : [value];
    }

    /**
     * @param {!Object} json
     * @param {string} name
     * @return {*}
     */

  }, {
    key: 'singleValue_',
    value: function singleValue_(json, name) {
      var valueArray = this.valueArray_(json, name);
      var value = valueArray && valueArray[0];
      return value == null || value === '' ? null : value;
    }

    /**
     * @param {!Object} json
     * @param {string} expectedType
     * @return {boolean}
     */

  }, {
    key: 'checkType_',
    value: function checkType_(json, expectedType) {
      var typeArray = this.valueArray_(json, '@type');
      if (!typeArray) {
        return false;
      }
      return typeArray.includes(expectedType) || typeArray.includes('http://schema.org/' + expectedType);
    }
  }]);

  return JsonLdParser;
}();

var MicrodataParser = function () {
  /**
   * @param {!Doc} doc
   */
  function MicrodataParser(doc) {
    _classCallCheck(this, MicrodataParser);

    /** @private @const {!Doc} */
    this.doc_ = doc;
    /** @private {?boolean} */
    this.access_ = null;
    /** @private {?string} */
    this.productId_ = null;
  }

  /**
   * Returns false if access is restricted, otherwise true
   * @param {!Element} root An element that is an item of type 'NewsArticle'
   * @return {?boolean} locked access
   * @private
   */


  _createClass(MicrodataParser, [{
    key: 'discoverAccess_',
    value: function discoverAccess_(root) {
      var ALREADY_SEEN = 'alreadySeenForAccessInfo';
      var nodeList = root.querySelectorAll("[itemprop='isAccessibleForFree']");
      for (var i = 0; nodeList[i]; i++) {
        var element = nodeList[i];
        var content = element.getAttribute('content') || element.textContent;
        if (!content) {
          continue;
        }
        if (this.isValidElement_(element, root, ALREADY_SEEN)) {
          var accessForFree = null;
          if (content.toLowerCase() == 'true') {
            accessForFree = true;
          } else if (content.toLowerCase() == 'false') {
            accessForFree = false;
          }
          return accessForFree;
        }
      }
      return null;
    }

    /**
     * Verifies if an element is valid based on the following
     * - child of an item of type 'NewsArticle'
     * - not a child of an item of any other type
     * - not seen before, marked using the alreadySeen tag
     * @param {?Element} current the element to be verified
     * @param {!Element} root the parent to track up to
     * @param {!string} alreadySeen used to tag already visited nodes
     * @return {!boolean} valid node
     * @private
     */

  }, {
    key: 'isValidElement_',
    value: function isValidElement_(current, root, alreadySeen) {
      for (var node = current; node && !node[alreadySeen]; node = node.parentNode) {
        node[alreadySeen] = true;
        if (node.hasAttribute('itemscope')) {
          /**{?string} */
          var type = node.getAttribute('itemtype');
          if (type.indexOf('http://schema.org/NewsArticle') >= 0) {
            return true;
          } else {
            return false;
          }
        }
      }
      return false;
    }

    /**
     * Obtains the product ID that meets the requirements
     * - child of an item of type 'NewsArticle'
     * - Not a child of an item of type 'Section'
     * - child of an item of type 'productID'
     * @param {!Element} root An element that is an item of type 'NewsArticle'
     * @return {?string} product ID, if found
     * @private
     */

  }, {
    key: 'discoverProductId_',
    value: function discoverProductId_(root) {
      var ALREADY_SEEN = 'alreadySeenForProductInfo';
      var nodeList = root.querySelectorAll('[itemprop="productID"]');
      for (var i = 0; nodeList[i]; i++) {
        var element = nodeList[i];
        var content = element.getAttribute('content') || element.textContent;
        var item = element.closest('[itemtype][itemscope]');
        var type = item.getAttribute('itemtype');
        if (type.indexOf('http://schema.org/Product') <= -1) {
          continue;
        }
        if (this.isValidElement_(item.parentElement, root, ALREADY_SEEN)) {
          return content;
        }
      }
      return null;
    }

    /**
     * Returns PageConfig if available
     * @return {?PageConfig} PageConfig found so far
     */

  }, {
    key: 'getPageConfig_',
    value: function getPageConfig_() {
      var locked = null;
      if (this.access_ != null) {
        locked = !this.access_;
      } else if (this.doc_.isReady()) {
        // Default to unlocked
        locked = false;
      }
      if (this.productId_ != null && locked != null) {
        return new PageConfig(this.productId_, locked);
      }
      return null;
    }

    /**
     * Extracts page config from Microdata in the DOM
     * @return {?PageConfig} PageConfig found
     */

  }, {
    key: 'tryExtractConfig_',
    value: function tryExtractConfig_() {
      var config = this.getPageConfig_();
      if (config) {
        return config;
      }
      var nodeList = this.doc_.getRootNode().querySelectorAll('[itemscope][itemtype*="http://schema.org/NewsArticle"]');
      for (var i = 0; nodeList[i] && config == null; i++) {
        var element = nodeList[i];
        if (this.access_ == null) {
          this.access_ = this.discoverAccess_(element);
        }
        if (!this.productId_) {
          this.productId_ = this.discoverProductId_(element);
        }
        config = this.getPageConfig_();
      }
      return config;
    }

    /**
     * @return {?PageConfig}
     */

  }, {
    key: 'check',
    value: function check() {
      if (!this.doc_.getBody()) {
        // Wait until the whole `<head>` is parsed.
        return null;
      }
      return this.tryExtractConfig_();
    }
  }]);

  return MicrodataParser;
}();

/**
 * Returns the value from content attribute of a meta tag with given name.
 *
 * If multiple tags are found, the first value is returned.
 *
 * @param {!Node} rootNode
 * @param {string} name The tag name to look for.
 * @return {?string} attribute value or empty string.
 * @private
 */


function getMetaTag(rootNode, name) {
  var el = rootNode.querySelector('meta[name="' + name + '"]');
  if (el) {
    return el.getAttribute('content');
  }
  return null;
}

/**
 * Copyright 2018 The Subscribe with Google Authors. All Rights Reserved.
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

exports.Doc = Doc;
exports.PageConfig = PageConfig;
exports.PageConfigResolver = PageConfigResolver;

},{}],38:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Copyright 2018 The Subscribe with Google Authors. All Rights Reserved.
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
/** Version: 0.1.22.23 */
/**
 * @license
 * Copyright 2017 The Web Activities Authors. All Rights Reserved.
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

/*eslint no-unused-vars: 0*/

/**
 * @enum {string}
 */
var ActivityMode = {
  IFRAME: 'iframe',
  POPUP: 'popup',
  REDIRECT: 'redirect'
};

/**
 * The result code used for `ActivityResult`.
 * @enum {string}
 */
var ActivityResultCode = {
  OK: 'ok',
  CANCELED: 'canceled',
  FAILED: 'failed'
};

/**
 * The result of an activity. The activity implementation returns this object
 * for a successful result, a cancelation or a failure.
 * @struct
 */

var ActivityResult =
/**
 * @param {!ActivityResultCode} code
 * @param {*} data
 * @param {!ActivityMode} mode
 * @param {string} origin
 * @param {boolean} originVerified
 * @param {boolean} secureChannel
 */
function ActivityResult(code, data, mode, origin, originVerified, secureChannel) {
  _classCallCheck(this, ActivityResult);

  /** @const {!ActivityResultCode} */
  this.code = code;
  /** @const {*} */
  this.data = code == ActivityResultCode.OK ? data : null;
  /** @const {!ActivityMode} */
  this.mode = mode;
  /** @const {string} */
  this.origin = origin;
  /** @const {boolean} */
  this.originVerified = originVerified;
  /** @const {boolean} */
  this.secureChannel = secureChannel;
  /** @const {boolean} */
  this.ok = code == ActivityResultCode.OK;
  /** @const {?Error} */
  this.error = code == ActivityResultCode.FAILED ? new Error(String(data) || '') : null;
};

/**
 * The activity request that different types of hosts can be started with.
 * @typedef {{
 *   requestId: string,
 *   returnUrl: string,
 *   args: ?Object,
 *   origin: (string|undefined),
 *   originVerified: (boolean|undefined),
 * }}
 */


var ActivityRequest = void 0;

/**
 * The activity "open" options used for popups and redirects.
 *
 * - returnUrl: override the return URL. By default, the current URL will be
 *   used.
 * - skipRequestInUrl: removes the activity request from the URL, in case
 *   redirect is used. By default, the activity request is appended to the
 *   activity URL. This option can be used if the activity request is passed
 *   to the activity by some alternative means.
 *
 * @typedef {{
 *   returnUrl: (string|undefined),
 *   skipRequestInUrl: (boolean|undefined),
 *   width: (number|undefined),
 *   height: (number|undefined),
 * }}
 */
var ActivityOpenOptions = void 0;

/**
 * Activity client-side binding. The port provides limited ways to communicate
 * with the activity and receive signals and results from it. Not every type
 * of activity exposes a port.
 *
 * @interface
 */

var ActivityPort = function () {
  function ActivityPort() {
    _classCallCheck(this, ActivityPort);
  }

  _createClass(ActivityPort, [{
    key: 'getMode',


    /**
     * Returns the mode of the activity: iframe, popup or redirect.
     * @return {!ActivityMode}
     */
    value: function getMode() {}

    /**
     * Accepts the result when ready. The client should verify the activity's
     * mode, origin, verification and secure channel flags before deciding
     * whether or not to trust the result.
     *
     * Returns the promise that yields when the activity has been completed and
     * either a result, a cancelation or a failure has been returned.
     *
     * @return {!Promise<!ActivityResult>}
     */

  }, {
    key: 'acceptResult',
    value: function acceptResult() {}
  }]);

  return ActivityPort;
}();

/** DOMException.ABORT_ERR name */


var ABORT_ERR_NAME = 'AbortError';

/** DOMException.ABORT_ERR = 20 */
var ABORT_ERR_CODE = 20;

/** @type {?HTMLAnchorElement} */
var aResolver = void 0;

/**
 * @param {string} urlString
 * @return {!HTMLAnchorElement}
 */
function parseUrl(urlString) {
  if (!aResolver) {
    aResolver = /** @type {!HTMLAnchorElement} */document.createElement('a');
  }
  aResolver.href = urlString;
  return (/** @type {!HTMLAnchorElement} */aResolver
  );
}

/**
 * @param {!Location|!URL|!HTMLAnchorElement} loc
 * @return {string}
 */
function getOrigin(loc) {
  if (loc.origin) {
    return loc.origin;
  }
  // Make sure that the origin is normalized. Specifically on IE, host sometimes
  // includes the default port, which is not per standard.
  var protocol = loc.protocol;
  var host = loc.host;
  if (protocol == 'https:' && host.indexOf(':443') == host.length - 4) {
    host = host.replace(':443', '');
  } else if (protocol == 'http:' && host.indexOf(':80') == host.length - 3) {
    host = host.replace(':80', '');
  }
  return protocol + '//' + host;
}

/**
 * @param {string} urlString
 * @return {string}
 */
function getOriginFromUrl(urlString) {
  return getOrigin(parseUrl(urlString));
}

/**
 * @param {string} urlString
 * @return {string}
 */
function removeFragment(urlString) {
  var index = urlString.indexOf('#');
  if (index == -1) {
    return urlString;
  }
  return urlString.substring(0, index);
}

/**
 * Parses and builds Object of URL query string.
 * @param {string} query The URL query string.
 * @return {!Object<string, string>}
 */
function parseQueryString(query) {
  if (!query) {
    return {};
  }
  return (/^[?#]/.test(query) ? query.slice(1) : query).split('&').reduce(function (params, param) {
    var item = param.split('=');
    var key = decodeURIComponent(item[0] || '');
    var value = decodeURIComponent(item[1] || '');
    if (key) {
      params[key] = value;
    }
    return params;
  }, {});
}

/**
 * @param {string} queryString  A query string in the form of "a=b&c=d". Could
 *   be optionally prefixed with "?" or "#".
 * @param {string} param The param to get from the query string.
 * @return {?string}
 */
function getQueryParam(queryString, param) {
  return parseQueryString(queryString)[param];
}

/**
 * Add a query-like parameter to the fragment string.
 * @param {string} url
 * @param {string} param
 * @param {string} value
 * @return {string}
 */
function addFragmentParam(url, param, value) {
  return url + (url.indexOf('#') == -1 ? '#' : '&') + encodeURIComponent(param) + '=' + encodeURIComponent(value);
}

/**
 * @param {string} queryString  A query string in the form of "a=b&c=d". Could
 *   be optionally prefixed with "?" or "#".
 * @param {string} param The param to remove from the query string.
 * @return {?string}
 */
function removeQueryParam(queryString, param) {
  if (!queryString) {
    return queryString;
  }
  var search = encodeURIComponent(param) + '=';
  var index = -1;
  do {
    index = queryString.indexOf(search, index);
    if (index != -1) {
      var prev = index > 0 ? queryString.substring(index - 1, index) : '';
      if (prev == '' || prev == '?' || prev == '#' || prev == '&') {
        var end = queryString.indexOf('&', index + 1);
        if (end == -1) {
          end = queryString.length;
        }
        queryString = queryString.substring(0, index) + queryString.substring(end + 1);
      } else {
        index++;
      }
    }
  } while (index != -1 && index < queryString.length);
  return queryString;
}

/**
 * @param {!ActivityRequest} request
 * @return {string}
 */
function serializeRequest(request) {
  var map = {
    'requestId': request.requestId,
    'returnUrl': request.returnUrl,
    'args': request.args
  };
  if (request.origin !== undefined) {
    map['origin'] = request.origin;
  }
  if (request.originVerified !== undefined) {
    map['originVerified'] = request.originVerified;
  }
  return JSON.stringify(map);
}

/**
 * Creates or emulates a DOMException of AbortError type.
 * See https://heycam.github.io/webidl/#aborterror.
 * @param {!Window} win
 * @param {string=} opt_message
 * @return {!DOMException}
 */
function createAbortError(win, opt_message) {
  var message = 'AbortError' + (opt_message ? ': ' + opt_message : '');
  var error = null;
  if (typeof win['DOMException'] == 'function') {
    // TODO(dvoytenko): remove typecast once externs are fixed.
    var constr = /** @type {function(new:DOMException, string, string)} */win['DOMException'];
    try {
      error = new constr(message, ABORT_ERR_NAME);
    } catch (e) {
      // Ignore. In particular, `new DOMException()` fails in Edge.
    }
  }
  if (!error) {
    // TODO(dvoytenko): remove typecast once externs are fixed.
    var _constr = /** @type {function(new:DOMException, string)} */Error;
    error = new _constr(message);
    error.name = ABORT_ERR_NAME;
    error.code = ABORT_ERR_CODE;
  }
  return error;
}

/**
 * Resolves the activity result as a promise:
 *  - `OK` result is yielded as the promise's payload;
 *  - `CANCEL` result is rejected with the `AbortError`;
 *  - `FAILED` result is rejected with the embedded error.
 *
 * @param {!Window} win
 * @param {!ActivityResult} result
 * @param {function((!ActivityResult|!Promise))} resolver
 */
function resolveResult(win, result, resolver) {
  if (result.ok) {
    resolver(result);
  } else {
    var error = result.error || createAbortError(win);
    error.activityResult = result;
    resolver(Promise.reject(error));
  }
}

/**
 * @param {!Window} win
 * @return {boolean}
 */
function isIeBrowser(win) {
  // MSIE and Trident are typical user agents for IE browsers.
  var nav = win.navigator;
  return (/Trident|MSIE|IEMobile/i.test(nav && nav.userAgent)
  );
}

/**
 * @param {!Window} win
 * @return {boolean}
 */
function isEdgeBrowser(win) {
  var nav = win.navigator;
  return (/Edge/i.test(nav && nav.userAgent)
  );
}

var SENTINEL = '__ACTIVITIES__';

/**
 * The messenger helper for activity's port and host.
 */

var Messenger = function () {

  /**
   * @param {!Window} win
   * @param {!Window|function():?Window} targetOrCallback
   * @param {?string} targetOrigin
   */
  function Messenger(win, targetOrCallback, targetOrigin) {
    _classCallCheck(this, Messenger);

    /** @private @const {!Window} */
    this.win_ = win;
    /** @private @const {!Window|function():?Window} */
    this.targetOrCallback_ = targetOrCallback;

    /**
     * May start as unknown (`null`) until received in the first message.
     * @private {?string}
     */
    this.targetOrigin_ = targetOrigin;

    /** @private {?Window} */
    this.target_ = null;

    /** @private {boolean} */
    this.acceptsChannel_ = false;

    /** @private {?MessagePort} */
    this.port_ = null;

    /** @private {?function(string, ?Object)} */
    this.onCommand_ = null;

    /** @private {?function(!Object)} */
    this.onCustomMessage_ = null;

    /**
     * @private {?Object<string, !ChannelHolder>}
     */
    this.channels_ = null;

    /** @private @const */
    this.boundHandleEvent_ = this.handleEvent_.bind(this);
  }

  /**
   * Connect the port to the host or vice versa.
   * @param {function(string, ?Object)} onCommand
   */


  _createClass(Messenger, [{
    key: 'connect',
    value: function connect(onCommand) {
      if (this.onCommand_) {
        throw new Error('already connected');
      }
      this.onCommand_ = onCommand;
      this.win_.addEventListener('message', this.boundHandleEvent_);
    }

    /**
     * Disconnect messenger.
     */

  }, {
    key: 'disconnect',
    value: function disconnect() {
      if (this.onCommand_) {
        this.onCommand_ = null;
        if (this.port_) {
          closePort(this.port_);
          this.port_ = null;
        }
        this.win_.removeEventListener('message', this.boundHandleEvent_);
        if (this.channels_) {
          for (var k in this.channels_) {
            var channelObj = this.channels_[k];
            if (channelObj.port1) {
              closePort(channelObj.port1);
            }
            if (channelObj.port2) {
              closePort(channelObj.port2);
            }
          }
          this.channels_ = null;
        }
      }
    }

    /**
     * Returns whether the messenger has been connected already.
     * @return {boolean}
     */

  }, {
    key: 'isConnected',
    value: function isConnected() {
      return this.targetOrigin_ != null;
    }

    /**
     * Returns the messaging target. Only available when connection has been
     * establihsed.
     * @return {!Window}
     */

  }, {
    key: 'getTarget',
    value: function getTarget() {
      var target = this.getOptionalTarget_();
      if (!target) {
        throw new Error('not connected');
      }
      return target;
    }

    /**
     * @return {?Window}
     * @private
     */

  }, {
    key: 'getOptionalTarget_',
    value: function getOptionalTarget_() {
      if (this.onCommand_ && !this.target_) {
        if (typeof this.targetOrCallback_ == 'function') {
          this.target_ = this.targetOrCallback_();
        } else {
          this.target_ = /** @type {!Window} */this.targetOrCallback_;
        }
      }
      return this.target_;
    }

    /**
     * Returns the messaging origin. Only available when connection has been
     * establihsed.
     * @return {string}
     */

  }, {
    key: 'getTargetOrigin',
    value: function getTargetOrigin() {
      if (this.targetOrigin_ == null) {
        throw new Error('not connected');
      }
      return this.targetOrigin_;
    }

    /**
     * The host sends this message to the client to indicate that it's ready to
     * start communicating. The client is expected to respond back with the
     * "start" command. See `sendStartCommand` method.
     */

  }, {
    key: 'sendConnectCommand',
    value: function sendConnectCommand() {
      // TODO(dvoytenko): MessageChannel is critically necessary for IE/Edge,
      // since window messaging doesn't always work. It's also preferred as an API
      // for other browsers: it's newer, cleaner and arguably more secure.
      // Unfortunately, browsers currently do not propagate user gestures via
      // MessageChannel, only via window messaging. This should be re-enabled
      // once browsers fix user gesture propagation.
      // See:
      // Safari: https://bugs.webkit.org/show_bug.cgi?id=186593
      // Chrome: https://bugs.chromium.org/p/chromium/issues/detail?id=851493
      // Firefox: https://bugzilla.mozilla.org/show_bug.cgi?id=1469422
      var acceptsChannel = isIeBrowser(this.win_) || isEdgeBrowser(this.win_);
      this.sendCommand('connect', { 'acceptsChannel': acceptsChannel });
    }

    /**
     * The client sends this message to the host upon receiving the "connect"
     * message to start the main communication channel. As a payload, the message
     * will contain the provided start arguments.
     * @param {?Object} args
     */

  }, {
    key: 'sendStartCommand',
    value: function sendStartCommand(args) {
      var channel = null;
      if (this.acceptsChannel_ && typeof this.win_.MessageChannel == 'function') {
        channel = new this.win_.MessageChannel();
      }
      if (channel) {
        this.sendCommand('start', args, [channel.port2]);
        // It's critical to switch to port messaging only after "start" has been
        // sent. Otherwise, it won't be delivered.
        this.switchToChannel_(channel.port1);
      } else {
        this.sendCommand('start', args);
      }
    }

    /**
     * Sends the specified command from the port to the host or vice versa.
     * @param {string} cmd
     * @param {?Object=} opt_payload
     * @param {?Array=} opt_transfer
     */

  }, {
    key: 'sendCommand',
    value: function sendCommand(cmd, opt_payload, opt_transfer) {
      var data = {
        'sentinel': SENTINEL,
        'cmd': cmd,
        'payload': opt_payload || null
      };
      if (this.port_) {
        this.port_.postMessage(data, opt_transfer || undefined);
      } else {
        var target = this.getTarget();
        // Only "connect" command is allowed to use `targetOrigin == '*'`
        var targetOrigin = cmd == 'connect' ? this.targetOrigin_ != null ? this.targetOrigin_ : '*' : this.getTargetOrigin();
        target.postMessage(data, targetOrigin, opt_transfer || undefined);
      }
    }

    /**
     * Sends a message to the client.
     * @param {!Object} payload
     */

  }, {
    key: 'customMessage',
    value: function customMessage(payload) {
      this.sendCommand('msg', payload);
    }

    /**
     * Registers a callback to receive messages from the client.
     * @param {function(!Object)} callback
     */

  }, {
    key: 'onCustomMessage',
    value: function onCustomMessage(callback) {
      this.onCustomMessage_ = callback;
    }

    /**
     * @param {string=} opt_name
     * @return {!Promise<!MessagePort>}
     */

  }, {
    key: 'startChannel',
    value: function startChannel(opt_name) {
      var name = opt_name || '';
      var channelObj = this.getChannelObj_(name);
      if (!channelObj.port1) {
        var channel = new this.win_.MessageChannel();
        channelObj.port1 = channel.port1;
        channelObj.port2 = channel.port2;
        channelObj.resolver(channelObj.port1);
      }
      if (channelObj.port2) {
        // Not yet sent.
        this.sendCommand('cnset', { 'name': name }, [channelObj.port2]);
        channelObj.port2 = null;
      }
      return channelObj.promise;
    }

    /**
     * @param {string=} opt_name
     * @return {!Promise<!MessagePort>}
     */

  }, {
    key: 'askChannel',
    value: function askChannel(opt_name) {
      var name = opt_name || '';
      var channelObj = this.getChannelObj_(name);
      if (!channelObj.port1) {
        this.sendCommand('cnget', { 'name': name });
      }
      return channelObj.promise;
    }

    /**
     * @param {string} name
     * @param {!MessagePort} port
     * @private
     */

  }, {
    key: 'receiveChannel_',
    value: function receiveChannel_(name, port) {
      var channelObj = this.getChannelObj_(name);
      channelObj.port1 = port;
      channelObj.resolver(port);
    }

    /**
     * @param {string} name
     * @return {!ChannelHolder}
     */

  }, {
    key: 'getChannelObj_',
    value: function getChannelObj_(name) {
      if (!this.channels_) {
        this.channels_ = {};
      }
      var channelObj = this.channels_[name];
      if (!channelObj) {
        var resolver = void 0;
        var promise = new Promise(function (resolve) {
          resolver = resolve;
        });
        channelObj = {
          port1: null,
          port2: null,
          resolver: resolver,
          promise: promise
        };
        this.channels_[name] = channelObj;
      }
      return channelObj;
    }

    /**
     * @param {!MessagePort} port
     * @private
     */

  }, {
    key: 'switchToChannel_',
    value: function switchToChannel_(port) {
      var _this = this;

      if (this.port_) {
        closePort(this.port_);
      }
      this.port_ = port;
      this.port_.onmessage = function (event) {
        var data = event.data;
        var cmd = data && data['cmd'];
        var payload = data && data['payload'] || null;
        if (cmd) {
          _this.handleCommand_(cmd, payload, event);
        }
      };
      // Even though all messaging will switch to ports, the window-based message
      // listener will be preserved just in case the host is refreshed and needs
      // another connection.
    }

    /**
     * @param {!MessageEvent} event
     * @private
     */

  }, {
    key: 'handleEvent_',
    value: function handleEvent_(event) {
      var data = event.data;
      if (!data || data['sentinel'] != SENTINEL) {
        return;
      }
      var cmd = data['cmd'];
      if (this.port_ && cmd != 'connect' && cmd != 'start') {
        // Messaging channel has already taken over. However, the "connect" and
        // "start" commands are allowed to proceed in case re-connection is
        // requested.
        return;
      }
      var origin = /** @type {string} */event.origin;
      var payload = data['payload'] || null;
      if (this.targetOrigin_ == null && cmd == 'start') {
        this.targetOrigin_ = origin;
      }
      if (this.targetOrigin_ == null && event.source) {
        if (this.getOptionalTarget_() == event.source) {
          this.targetOrigin_ = origin;
        }
      }
      // Notice that event.source may differ from the target because of
      // friendly-iframe intermediaries.
      if (origin != this.targetOrigin_) {
        return;
      }
      this.handleCommand_(cmd, payload, event);
    }

    /**
     * @param {string} cmd
     * @param {?Object} payload
     * @param {!MessageEvent} event
     * @private
     */

  }, {
    key: 'handleCommand_',
    value: function handleCommand_(cmd, payload, event) {
      if (cmd == 'connect') {
        if (this.port_) {
          // In case the port has already been open - close it to reopen it
          // again later.
          closePort(this.port_);
          this.port_ = null;
        }
        this.acceptsChannel_ = payload && payload['acceptsChannel'] || false;
        this.onCommand_(cmd, payload);
      } else if (cmd == 'start') {
        var port = event.ports && event.ports[0];
        if (port) {
          this.switchToChannel_(port);
        }
        this.onCommand_(cmd, payload);
      } else if (cmd == 'msg') {
        if (this.onCustomMessage_ != null && payload != null) {
          this.onCustomMessage_(payload);
        }
      } else if (cmd == 'cnget') {
        var name = payload['name'];
        this.startChannel(name);
      } else if (cmd == 'cnset') {
        var _name = payload['name'];
        var _port = event.ports[0];
        this.receiveChannel_(_name, /** @type {!MessagePort} */_port);
      } else {
        this.onCommand_(cmd, payload);
      }
    }
  }]);

  return Messenger;
}();

/**
 * @param {!MessagePort} port
 */


function closePort(port) {
  try {
    port.close();
  } catch (e) {
    // Ignore.
  }
}

/**
 * The `ActivityPort` implementation for the iframe case. Unlike other types
 * of activities, iframe-based activities are always connected and can react
 * to size requests.
 *
 * @implements {ActivityPort}
 */

var ActivityIframePort = function () {

  /**
   * @param {!HTMLIFrameElement} iframe
   * @param {string} url
   * @param {?Object=} opt_args
   */
  function ActivityIframePort(iframe, url, opt_args) {
    var _this2 = this;

    _classCallCheck(this, ActivityIframePort);

    /** @private @const {!HTMLIFrameElement} */
    this.iframe_ = iframe;
    /** @private @const {string} */
    this.url_ = url;
    /** @private @const {?Object} */
    this.args_ = opt_args || null;

    /** @private @const {!Window} */
    this.win_ = /** @type {!Window} */this.iframe_.ownerDocument.defaultView;

    /** @private @const {string} */
    this.targetOrigin_ = getOriginFromUrl(url);

    /** @private {boolean} */
    this.connected_ = false;

    /** @private {?function()} */
    this.connectedResolver_ = null;

    /** @private @const {!Promise} */
    this.connectedPromise_ = new Promise(function (resolve) {
      _this2.connectedResolver_ = resolve;
    });

    /** @private {?function()} */
    this.readyResolver_ = null;

    /** @private @const {!Promise} */
    this.readyPromise_ = new Promise(function (resolve) {
      _this2.readyResolver_ = resolve;
    });

    /** @private {?function((!ActivityResult|!Promise))} */
    this.resultResolver_ = null;

    /** @private @const {!Promise<!ActivityResult>} */
    this.resultPromise_ = new Promise(function (resolve) {
      _this2.resultResolver_ = resolve;
    });

    /** @private {?function(number)} */
    this.onResizeRequest_ = null;

    /** @private {?number} */
    this.requestedHeight_ = null;

    /** @private @const {!Messenger} */
    this.messenger_ = new Messenger(this.win_, function () {
      return _this2.iframe_.contentWindow;
    }, this.targetOrigin_);
  }

  /** @override */


  _createClass(ActivityIframePort, [{
    key: 'getMode',
    value: function getMode() {
      return ActivityMode.IFRAME;
    }

    /**
     * Waits until the activity port is connected to the host.
     * @return {!Promise}
     */

  }, {
    key: 'connect',
    value: function connect() {
      if (!this.win_.document.documentElement.contains(this.iframe_)) {
        throw new Error('iframe must be in DOM');
      }
      this.messenger_.connect(this.handleCommand_.bind(this));
      this.iframe_.src = this.url_;
      return this.connectedPromise_;
    }

    /**
     * Disconnect the activity binding and cleanup listeners.
     */

  }, {
    key: 'disconnect',
    value: function disconnect() {
      this.connected_ = false;
      this.messenger_.disconnect();
    }

    /** @override */

  }, {
    key: 'acceptResult',
    value: function acceptResult() {
      return this.resultPromise_;
    }

    /**
     * Sends a message to the host.
     * @param {!Object} payload
     */

  }, {
    key: 'message',
    value: function message(payload) {
      this.messenger_.customMessage(payload);
    }

    /**
     * Registers a callback to receive messages from the host.
     * @param {function(!Object)} callback
     */

  }, {
    key: 'onMessage',
    value: function onMessage(callback) {
      this.messenger_.onCustomMessage(callback);
    }

    /**
     * Creates a new communication channel or returns an existing one.
     * @param {string=} opt_name
     * @return {!Promise<!MessagePort>}
     */

  }, {
    key: 'messageChannel',
    value: function messageChannel(opt_name) {
      return this.messenger_.askChannel(opt_name);
    }

    /**
     * Returns a promise that yields when the iframe is ready to be interacted
     * with.
     * @return {!Promise}
     */

  }, {
    key: 'whenReady',
    value: function whenReady() {
      return this.readyPromise_;
    }

    /**
     * Register a callback to handle resize requests. Once successfully resized,
     * ensure to call `resized()` method.
     * @param {function(number)} callback
     */

  }, {
    key: 'onResizeRequest',
    value: function onResizeRequest(callback) {
      var _this3 = this;

      this.onResizeRequest_ = callback;
      Promise.resolve().then(function () {
        if (_this3.requestedHeight_ != null) {
          callback(_this3.requestedHeight_);
        }
      });
    }

    /**
     * Signals back to the activity implementation that the client has updated
     * the activity's size.
     */

  }, {
    key: 'resized',
    value: function resized() {
      if (!this.connected_) {
        return;
      }
      var height = this.iframe_.offsetHeight;
      this.messenger_.sendCommand('resized', { 'height': height });
    }

    /**
     * @param {string} cmd
     * @param {?Object} payload
     * @private
     */

  }, {
    key: 'handleCommand_',
    value: function handleCommand_(cmd, payload) {
      if (cmd == 'connect') {
        // First ever message. Indicates that the receiver is listening.
        this.connected_ = true;
        this.messenger_.sendStartCommand(this.args_);
        this.connectedResolver_();
      } else if (cmd == 'result') {
        // The last message. Indicates that the result has been received.
        if (this.resultResolver_) {
          var code = /** @type {!ActivityResultCode} */payload['code'];
          var data = code == ActivityResultCode.FAILED ? new Error(payload['data'] || '') : payload['data'];
          var result = new ActivityResult(code, data, ActivityMode.IFRAME, this.messenger_.getTargetOrigin(),
          /* originVerified */true,
          /* secureChannel */true);
          resolveResult(this.win_, result, this.resultResolver_);
          this.resultResolver_ = null;
          this.messenger_.sendCommand('close');
          this.disconnect();
        }
      } else if (cmd == 'ready') {
        if (this.readyResolver_) {
          this.readyResolver_();
          this.readyResolver_ = null;
        }
      } else if (cmd == 'resize') {
        this.requestedHeight_ = /** @type {number} */payload['height'];
        if (this.onResizeRequest_) {
          this.onResizeRequest_(this.requestedHeight_);
        }
      }
    }
  }]);

  return ActivityIframePort;
}();

/**
 * The `ActivityPort` implementation for the standalone window activity
 * client executed as a popup.
 *
 * @implements {ActivityPort}
 */


var ActivityWindowPort = function () {

  /**
   * @param {!Window} win
   * @param {string} requestId
   * @param {string} url
   * @param {string} target
   * @param {?Object=} opt_args
   * @param {?ActivityOpenOptions=} opt_options
   */
  function ActivityWindowPort(win, requestId, url, target, opt_args, opt_options) {
    var _this4 = this;

    _classCallCheck(this, ActivityWindowPort);

    var isValidTarget = target && (target == '_blank' || target == '_top' || target[0] != '_');
    if (!isValidTarget) {
      throw new Error('The only allowed targets are "_blank", "_top"' + ' and name targets');
    }

    /** @private @const {!Window} */
    this.win_ = win;
    /** @private @const {string} */
    this.requestId_ = requestId;
    /** @private @const {string} */
    this.url_ = url;
    /** @private @const {string} */
    this.openTarget_ = target;
    /** @private @const {?Object} */
    this.args_ = opt_args || null;
    /** @private @const {?ActivityOpenOptions} */
    this.options_ = opt_options || null;

    /** @private {?function((!ActivityResult|!Promise))} */
    this.resultResolver_ = null;

    /** @private @const {!Promise<!ActivityResult>} */
    this.resultPromise_ = new Promise(function (resolve) {
      _this4.resultResolver_ = resolve;
    });

    /** @private {?Window} */
    this.targetWin_ = null;

    /** @private {?number} */
    this.heartbeatInterval_ = null;

    /** @private {?Messenger} */
    this.messenger_ = null;
  }

  /** @override */


  _createClass(ActivityWindowPort, [{
    key: 'getMode',
    value: function getMode() {
      return this.openTarget_ == '_top' ? ActivityMode.REDIRECT : ActivityMode.POPUP;
    }

    /**
     * Opens the activity in a window, either as a popup or via redirect.
     *
     * Returns the promise that will yield when the window returns or closed.
     * Notice, that this promise may never complete if "redirect" mode was used.
     *
     * @return {!Promise}
     */

  }, {
    key: 'open',
    value: function open() {
      return this.openInternal_();
    }

    /**
     * @return {?Window}
     */

  }, {
    key: 'getTargetWin',
    value: function getTargetWin() {
      return this.targetWin_;
    }

    /**
     * Disconnect the activity binding and cleanup listeners.
     */

  }, {
    key: 'disconnect',
    value: function disconnect() {
      if (this.heartbeatInterval_) {
        this.win_.clearInterval(this.heartbeatInterval_);
        this.heartbeatInterval_ = null;
      }
      if (this.messenger_) {
        this.messenger_.disconnect();
        this.messenger_ = null;
      }
      if (this.targetWin_) {
        // Try to close the popup window. The host will also try to do the same.
        try {
          this.targetWin_.close();
        } catch (e) {
          // Ignore.
        }
        this.targetWin_ = null;
      }
      this.resultResolver_ = null;
    }

    /** @override */

  }, {
    key: 'acceptResult',
    value: function acceptResult() {
      return this.resultPromise_;
    }

    /**
     * This method wraps around window's open method. It first tries to execute
     * `open` call with the provided target and if it fails, it retries the call
     * with the `_top` target. This is necessary given that in some embedding
     * scenarios, such as iOS' WKWebView, navigation to `_blank` and other targets
     * is blocked by default.
     * @return {!Promise}
     * @private
     */

  }, {
    key: 'openInternal_',
    value: function openInternal_() {
      var featuresStr = this.buildFeatures_();

      // Protectively, the URL will contain the request payload, unless explicitly
      // directed not to via `skipRequestInUrl` option.
      var url = this.url_;
      if (!(this.options_ && this.options_.skipRequestInUrl)) {
        var returnUrl = this.options_ && this.options_.returnUrl || removeFragment(this.win_.location.href);
        var requestString = serializeRequest({
          requestId: this.requestId_,
          returnUrl: returnUrl,
          args: this.args_
        });
        url = addFragmentParam(url, '__WA__', requestString);
      }

      // Open the window.
      var targetWin = void 0;
      var openTarget = this.openTarget_;
      // IE does not support CORS popups - the popup has to fallback to redirect
      // mode.
      if (openTarget != '_top') {
        if (isIeBrowser(this.win_)) {
          openTarget = '_top';
        }
      }
      // Try first with the specified target. If we're inside the WKWebView or
      // a similar environments, this method is expected to fail by default for
      // all targets except `_top`.
      try {
        targetWin = this.win_.open(url, openTarget, featuresStr);
      } catch (e) {}
      // Ignore.

      // Then try with `_top` target.
      if (!targetWin && openTarget != '_top') {
        openTarget = '_top';
        try {
          targetWin = this.win_.open(url, openTarget);
        } catch (e) {
          // Ignore.
        }
      }

      // Setup the target window.
      if (targetWin) {
        this.targetWin_ = targetWin;
        if (openTarget != '_top') {
          this.setupPopup_();
        }
      } else {
        this.disconnectWithError_(new Error('failed to open window'));
      }

      // Return result promise, even though it may never complete.
      return this.resultPromise_.catch(function () {
        // Ignore. Call to the `acceptResult()` should fail if needed.
      });
    }

    /**
     * @return {string}
     * @private
     */

  }, {
    key: 'buildFeatures_',
    value: function buildFeatures_() {
      // The max width and heights are calculated as following:
      // MaxSize = AvailSize - ControlsSize
      // ControlsSize = OuterSize - InnerSize
      var screen = this.win_.screen;
      var availWidth = screen.availWidth || screen.width;
      var availHeight = screen.availHeight || screen.height;
      var isTop = this.isTopWindow_();
      var isEdge = isEdgeBrowser(this.win_);
      // Limit controls to 100px width and height. Notice that it's only
      // possible to calculate controls size in the top window, not in iframes.
      // Notice that the Edge behavior is somewhat unique. If we can't find the
      // right width/height, it will launch in the full-screen. Other browsers
      // deal with such cases more gracefully.
      var controlsWidth = isTop && this.win_.outerWidth > this.win_.innerWidth ? Math.min(100, this.win_.outerWidth - this.win_.innerWidth) : isEdge ? 100 : 0;
      var controlsHeight = isTop && this.win_.outerHeight > this.win_.innerHeight ? Math.min(100, this.win_.outerHeight - this.win_.innerHeight) : isEdge ? 100 : 0;
      // With all the adjustments, at least 50% of the available width/height
      // should be made available to a popup.
      var maxWidth = Math.max(availWidth - controlsWidth, availWidth * 0.5);
      var maxHeight = Math.max(availHeight - controlsHeight, availHeight * 0.5);
      var w = Math.floor(Math.min(600, maxWidth * 0.9));
      var h = Math.floor(Math.min(600, maxHeight * 0.9));
      if (this.options_) {
        if (this.options_.width) {
          w = Math.min(this.options_.width, maxWidth);
        }
        if (this.options_.height) {
          h = Math.min(this.options_.height, maxHeight);
        }
      }
      var x = Math.floor((screen.width - w) / 2);
      var y = Math.floor((screen.height - h) / 2);
      var features = {
        'height': h,
        'width': w,
        'resizable': 'yes',
        'scrollbars': 'yes'
      };
      // Do not set left/top in Edge: it fails.
      if (!isEdge) {
        features['left'] = x;
        features['top'] = y;
      }
      var featuresStr = '';
      for (var f in features) {
        if (featuresStr) {
          featuresStr += ',';
        }
        featuresStr += f + '=' + features[f];
      }
      return featuresStr;
    }

    /**
     * This method only exists to make iframe/top emulation possible in tests.
     * Otherwise `window.top` cannot be overridden.
     * @return {boolean}
     * @private
     */

  }, {
    key: 'isTopWindow_',
    value: function isTopWindow_() {
      return this.win_ == this.win_.top;
    }

    /** @private */

  }, {
    key: 'setupPopup_',
    value: function setupPopup_() {
      var _this5 = this;

      // Keep alive to catch the window closing, which would indicate
      // "cancel" signal.
      this.heartbeatInterval_ = this.win_.setInterval(function () {
        _this5.check_( /* delayCancel */true);
      }, 500);

      // Start up messaging. The messaging is explicitly allowed to proceed
      // without origin check b/c all arguments have already been passed in
      // the URL and special handling is enforced when result is delivered.
      this.messenger_ = new Messenger(this.win_,
      /** @type {!Window} */this.targetWin_,
      /* targetOrigin */null);
      this.messenger_.connect(this.handleCommand_.bind(this));
    }

    /**
     * @param {boolean=} opt_delayCancel
     * @private
     */

  }, {
    key: 'check_',
    value: function check_(opt_delayCancel) {
      var _this6 = this;

      if (!this.targetWin_ || this.targetWin_.closed) {
        if (this.heartbeatInterval_) {
          this.win_.clearInterval(this.heartbeatInterval_);
          this.heartbeatInterval_ = null;
        }
        // Give a chance for the result to arrive, but otherwise consider the
        // responce to be empty.
        this.win_.setTimeout(function () {
          try {
            _this6.result_(ActivityResultCode.CANCELED, /* data */null);
          } catch (e) {
            _this6.disconnectWithError_(e);
          }
        }, opt_delayCancel ? 3000 : 0);
      }
    }

    /**
     * @param {!Error} reason
     * @private
     */

  }, {
    key: 'disconnectWithError_',
    value: function disconnectWithError_(reason) {
      if (this.resultResolver_) {
        this.resultResolver_(Promise.reject(reason));
      }
      this.disconnect();
    }

    /**
     * @param {!ActivityResultCode} code
     * @param {*} data
     * @private
     */

  }, {
    key: 'result_',
    value: function result_(code, data) {
      if (this.resultResolver_) {
        var isConnected = this.messenger_.isConnected();
        var result = new ActivityResult(code, data, ActivityMode.POPUP, isConnected ? this.messenger_.getTargetOrigin() : getOriginFromUrl(this.url_),
        /* originVerified */isConnected,
        /* secureChannel */isConnected);
        resolveResult(this.win_, result, this.resultResolver_);
        this.resultResolver_ = null;
      }
      if (this.messenger_) {
        this.messenger_.sendCommand('close');
      }
      this.disconnect();
    }

    /**
     * @param {string} cmd
     * @param {?Object} payload
     * @private
     */

  }, {
    key: 'handleCommand_',
    value: function handleCommand_(cmd, payload) {
      var _this7 = this;

      if (cmd == 'connect') {
        // First ever message. Indicates that the receiver is listening.
        this.messenger_.sendStartCommand(this.args_);
      } else if (cmd == 'result') {
        // The last message. Indicates that the result has been received.
        var code = /** @type {!ActivityResultCode} */payload['code'];
        var data = code == ActivityResultCode.FAILED ? new Error(payload['data'] || '') : payload['data'];
        this.result_(code, data);
      } else if (cmd == 'check') {
        this.win_.setTimeout(function () {
          return _this7.check_();
        }, 200);
      }
    }
  }]);

  return ActivityWindowPort;
}();

/**
 * @param {!Window} win
 * @param {string} fragment
 * @param {string} requestId
 * @return {?ActivityPort}
 */


function discoverRedirectPort(win, fragment, requestId) {
  // Try to find the result in the fragment.
  var paramName = '__WA_RES__';
  var fragmentParam = getQueryParam(fragment, paramName);
  if (!fragmentParam) {
    return null;
  }
  var response = /** @type {?Object} */JSON.parse(decodeURIComponent(fragmentParam));
  if (!response || response['requestId'] != requestId) {
    return null;
  }

  // Remove the found param from the fragment.
  var cleanFragment = removeQueryParam(win.location.hash, paramName) || '';
  if (cleanFragment != win.location.hash) {
    if (win.history && win.history.replaceState) {
      try {
        win.history.replaceState(win.history.state, '', cleanFragment);
      } catch (e) {
        // Ignore.
      }
    }
  }

  var code = response['code'];
  var data = response['data'];
  var origin = response['origin'];
  var referrerOrigin = win.document.referrer && getOriginFromUrl(win.document.referrer);
  var originVerified = origin == referrerOrigin;
  return new ActivityWindowRedirectPort(win, code, data, origin, originVerified);
}

/**
 * The `ActivityPort` implementation for the standalone window activity
 * client executed as a popup.
 *
 * @implements {ActivityPort}
 */

var ActivityWindowRedirectPort = function () {

  /**
   * @param {!Window} win
   * @param {!ActivityResultCode} code
   * @param {*} data
   * @param {string} targetOrigin
   * @param {boolean} targetOriginVerified
   */
  function ActivityWindowRedirectPort(win, code, data, targetOrigin, targetOriginVerified) {
    _classCallCheck(this, ActivityWindowRedirectPort);

    /** @private @const {!Window} */
    this.win_ = win;
    /** @private @const {!ActivityResultCode} */
    this.code_ = code;
    /** @private @const {*} */
    this.data_ = data;
    /** @private {string} */
    this.targetOrigin_ = targetOrigin;
    /** @private {boolean} */
    this.targetOriginVerified_ = targetOriginVerified;
  }

  /** @override */


  _createClass(ActivityWindowRedirectPort, [{
    key: 'getMode',
    value: function getMode() {
      return ActivityMode.REDIRECT;
    }

    /** @override */

  }, {
    key: 'acceptResult',
    value: function acceptResult() {
      var _this8 = this;

      var result = new ActivityResult(this.code_, this.data_, ActivityMode.REDIRECT, this.targetOrigin_, this.targetOriginVerified_,
      /* secureChannel */false);
      return new Promise(function (resolve) {
        resolveResult(_this8.win_, result, resolve);
      });
    }
  }]);

  return ActivityWindowRedirectPort;
}();

/**
 * The page-level activities manager ports. This class is intended to be used
 * as a singleton. It can start activities of all modes: iframe, popup, and
 * redirect.
 */


var ActivityPorts = function () {

  /**
   * @param {!Window} win
   */
  function ActivityPorts(win) {
    _classCallCheck(this, ActivityPorts);

    /** @const {string} */
    this.version = '1.13';

    /** @private @const {!Window} */
    this.win_ = win;

    /** @private @const {string} */
    this.fragment_ = win.location.hash;

    /**
     * @private @const {!Object<string, !Array<function(!ActivityPort)>>}
     */
    this.requestHandlers_ = {};

    /**
     * The result buffer is indexed by `requestId`.
     * @private @const {!Object<string, !ActivityPort>}
     */
    this.resultBuffer_ = {};
  }

  /**
   * Start an activity within the specified iframe.
   * @param {!HTMLIFrameElement} iframe
   * @param {string} url
   * @param {?Object=} opt_args
   * @return {!Promise<!ActivityIframePort>}
   */


  _createClass(ActivityPorts, [{
    key: 'openIframe',
    value: function openIframe(iframe, url, opt_args) {
      var port = new ActivityIframePort(iframe, url, opt_args);
      return port.connect().then(function () {
        return port;
      });
    }

    /**
     * Start an activity in a separate window. The result will be delivered
     * to the `onResult` callback.
     *
     * The activity can be opened in two modes: "popup" and "redirect". This
     * depends on the `target` value, but also on the browser/environment.
     *
     * The allowed `target` values are `_blank`, `_top` and name targets. The
     * `_self`, `_parent` and similar targets are not allowed.
     *
     * The `_top` target indicates that the activity should be opened as a
     * "redirect", while other targets indicate that the activity should be
     * opened as a popup. The activity client will try to honor the requested
     * target. However, it's not always possible. Some environments do not
     * allow popups and they either force redirect or fail the window open
     * request. In this case, the activity will try to fallback to the "redirect"
     * mode.
     *
     * @param {string} requestId
     * @param {string} url
     * @param {string} target
     * @param {?Object=} opt_args
     * @param {?ActivityOpenOptions=} opt_options
     * @return {{targetWin: ?Window}}
     */

  }, {
    key: 'open',
    value: function open(requestId, url, target, opt_args, opt_options) {
      var _this9 = this;

      var port = new ActivityWindowPort(this.win_, requestId, url, target, opt_args, opt_options);
      port.open().then(function () {
        // Await result if possible. Notice that when falling back to "redirect",
        // the result will never arrive through this port.
        _this9.consumeResultAll_(requestId, port);
      });
      return { targetWin: port.getTargetWin() };
    }

    /**
     * Registers the callback for the result of the activity opened with the
     * specified `requestId` (see the `open()` method). The callback is a
     * function that takes a single `ActivityPort` argument. The client
     * can use this object to verify the port using it's origin, verified and
     * secure channel flags. Then the client can call
     * `ActivityPort.acceptResult()` method to accept the result.
     *
     * The activity result is handled via a separate callback because of a
     * possible redirect. So use of direct callbacks and/or promises is not
     * possible in that case.
     *
     * A typical implementation would look like:
     * ```
     * ports.onResult('request1', function(port) {
     *   port.acceptResult().then(function(result) {
     *     // Only verified origins are allowed.
     *     if (result.origin == expectedOrigin &&
     *         result.originVerified &&
     *         result.secureChannel) {
     *       handleResultForRequest1(result);
     *     }
     *   });
     * })
     *
     * ports.open('request1', request1Url, '_blank');
     * ```
     *
     * @param {string} requestId
     * @param {function(!ActivityPort)} callback
     */

  }, {
    key: 'onResult',
    value: function onResult(requestId, callback) {
      var handlers = this.requestHandlers_[requestId];
      if (!handlers) {
        handlers = [];
        this.requestHandlers_[requestId] = handlers;
      }
      handlers.push(callback);

      // Consume available result.
      var availableResult = this.discoverResult_(requestId);
      if (availableResult) {
        this.consumeResult_(availableResult, callback);
      }
    }

    /**
     * @param {string} requestId
     * @return {?ActivityPort}
     * @private
     */

  }, {
    key: 'discoverResult_',
    value: function discoverResult_(requestId) {
      var port = this.resultBuffer_[requestId];
      if (!port && this.fragment_) {
        port = discoverRedirectPort(this.win_, this.fragment_, requestId);
        if (port) {
          this.resultBuffer_[requestId] = port;
        }
      }
      return port;
    }

    /**
     * @param {!ActivityPort} port
     * @param {function(!ActivityPort)} callback
     * @private
     */

  }, {
    key: 'consumeResult_',
    value: function consumeResult_(port, callback) {
      Promise.resolve().then(function () {
        callback(port);
      });
    }

    /**
     * @param {string} requestId
     * @param {!ActivityPort} port
     * @private
     */

  }, {
    key: 'consumeResultAll_',
    value: function consumeResultAll_(requestId, port) {
      var _this10 = this;

      // Find and execute handlers.
      var handlers = this.requestHandlers_[requestId];
      if (handlers) {
        handlers.forEach(function (handler) {
          _this10.consumeResult_(port, handler);
        });
      }
      // Buffer the result for callbacks that may arrive in the future.
      this.resultBuffer_[requestId] = port;
    }
  }]);

  return ActivityPorts;
}();

var activityPorts = {
  ActivityPorts: ActivityPorts,
  ActivityIframePort: ActivityIframePort,
  ActivityMode: ActivityMode,
  ActivityOpenOptions: ActivityOpenOptions,
  ActivityPort: ActivityPort,
  ActivityRequest: ActivityRequest,
  ActivityResult: ActivityResult,
  ActivityResultCode: ActivityResultCode,
  ActivityWindowPort: ActivityWindowPort
};
var activityPorts_1 = activityPorts.ActivityPorts;

/**
 * Copyright 2018 The Subscribe with Google Authors. All Rights Reserved.
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
 */
function assert(shouldBeTrueish, opt_message, var_args) {
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
    throw e;
  }
  return shouldBeTrueish;
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

function toString(val) {
  // Do check equivalent to `val instanceof Element` without cross-window bug
  if (val && val.nodeType == 1) {
    return val.tagName.toLowerCase() + (val.id ? '#' + val.id : '');
  }
  return (/** @type {string} */val
  );
}

/**
 * Copyright 2018 The Subscribe with Google Authors. All Rights Reserved.
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
 * Returns a map-like object.
 * If opt_initial is provided, copies its own properties into the
 * newly created object.
 * @param {Object=} opt_initial This should typically be an object literal.
 * @return {!Object}
 * @template T
 */
function map(opt_initial) {
  var obj = Object.create(null);
  if (opt_initial) {
    Object.assign(obj, opt_initial);
  }
  return obj;
}

/**
 * Copyright 2018 The Subscribe with Google Authors. All Rights Reserved.
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
 * Copyright 2018 The Subscribe with Google Authors. All Rights Reserved.
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

/** @type {Object<string, string>} */
var propertyNameCache = void 0;

/** @const {!Array<string>} */
var vendorPrefixes = ['Webkit', 'webkit', 'Moz', 'moz', 'ms', 'O', 'o'];

/**
 * Default styles to be set for top level friendly iframe.
 * Some attributes are not included such as height, left, margin-left; since
 * these attributes are updated by @media queries and having these values
 * defined here as !important does not work on IE/edge browsers.
 * @const {!Object<string, string|number>}
 */
var defaultStyles = {
  'align-content': 'normal',
  'animation': 'none',
  'align-items': 'normal',
  'align-self': 'auto',
  'alignment-baseline': 'auto',
  'backface-visibility': 'hidden',
  'background-clip': 'border-box',
  'background-image': 'none',
  'baseline-shift': '0',
  'block-size': 'auto',
  'border': 'none',
  'border-collapse': 'separate',
  'bottom': '0',
  'box-sizing': 'border-box',
  'break-after': 'auto',
  'break-before': 'auto',
  'break-inside': 'auto',
  'buffered-rendering': 'auto',
  'caption-side': 'top',
  'caret-color': 'rgb(51, 51, 51)',
  'clear': 'none',
  'color': 'rgb(51, 51, 51)',
  'color-rendering': 'auto',
  'column-count': 'auto',
  'column-fill': 'balance',
  'column-gap': 'normal',
  'column-rule-color': 'rgb(51, 51, 51)',
  'column-rule-style': 'none',
  'column-rule-width': '0',
  'column-span': 'none',
  'column-width': 'auto',
  'contain': 'none',
  'counter-increment': 'none',
  'counter-reset': 'none',
  'cursor': 'auto',
  'direction': 'inherit',
  'display': 'block',
  'empty-cells': 'show',
  'filter': 'none',
  'flex': 'none', // flex-grow, flex-shrink, and flex-basis.
  'flex-flow': 'row nowrap', // flex-direction, flex-wrap.
  'float': 'none',
  'flood-color': 'rgb(0, 0, 0)',
  'flood-opacity': '1',
  'font': 'none',
  'font-size': 'medium',
  'font-family': '',
  'height': 'auto',
  'hyphens': 'manual',
  'image-rendering': 'auto',
  'inline-size': '', // Setting to 'auto' will not allow override.
  'isolation': 'auto',
  'justify-content': 'normal',
  'justify-items': 'normal',
  'justify-self': 'auto',
  'letter-spacing': 'normal',
  'lighting-color': 'rgb(255, 255, 255)',
  'line-break': 'auto',
  'line-height': 'normal',
  'mask': 'none',
  'max-block-size': 'none',
  'max-height': 'none',
  'max-inline-size': 'none',
  'max-width': 'none',
  'min-block-size': 'none',
  'min-height': '0',
  'min-inline-size': '0',
  'min-width': '0',
  'mix-blend-mode': 'normal',
  'object-fit': 'fill', // Important for Safari browser.
  'offset-distance': 'none', // Chrome only (Experimental).
  'offset-path': 'none', // Chrome only (Experimental).
  'offset-rotate': 'auto 0deg', // Chrome only (Experimental).
  'opacity': '1',
  'order': '0',
  'orphans': '2',
  'outline': 'none',
  'overflow-anchor': 'auto',
  'overflow-wrap': 'normal',
  'overflow': 'visible',
  'padding': '0',
  'page': '',
  'perspective': 'none',
  'pointer-events': 'auto',
  'position': 'static',
  'quotes': '',
  'resize': 'none',
  'right': '0',
  'scroll-behavior': 'auto',
  'tab-size': '8', // Only Chrome, Safari (Experimental).
  'table-layout': 'auto',
  'text-align': 'start',
  'text-align-last': 'auto',
  'text-anchor': 'start',
  'text-combine-upright': 'none',
  'text-decoration': 'none',
  'text-indent': '0',
  'text-orientation': 'mixed',
  'text-overflow': 'clip',
  'text-rendering': 'auto',
  'text-shadow': 'none',
  'text-size-adjust': 'auto',
  'text-transform': 'none',
  'text-underline-position': 'auto',
  'top': 'auto',
  'touch-action': 'auto',
  'transform': 'none',
  'transition': 'none 0s ease 0s',
  'unicode-bidi': 'normal',
  'user-select': 'auto',
  'vector-effect': 'none',
  'vertical-align': 'baseline',
  'visibility': 'visible',
  'white-space': 'normal',
  'widows': '2',
  'word-break': 'normal',
  'word-spacing': '0',
  'word-wrap': 'normal',
  'writing-mode': 'horizontal-tb',
  'zoom': '1',
  'z-index': 'auto'
};

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
  if (startsWith(camelCase, '--')) {
    // CSS vars are returned as is.
    return camelCase;
  }
  if (!propertyNameCache) {
    propertyNameCache = map();
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
 * @param {!Object<string, string|number>} styles
 */
function setImportantStyles(element, styles) {
  for (var k in styles) {
    element.style.setProperty(getVendorJsPropertyName(styles, k), styles[k].toString(), 'important');
  }
}

/**
 * Sets the CSS style of the specified element with optional units, e.g. "px".
 * @param {Element} element
 * @param {string} property
 * @param {?string|number|boolean} value
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
 * Sets the CSS styles of the specified element. The styles
 * a specified as a map from CSS property names to their values.
 * @param {!Element} element
 * @param {!Object<string, ?string|number|boolean>} styles
 */
function setStyles(element, styles) {
  for (var k in styles) {
    setStyle(element, k, styles[k]);
  }
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

/**
 * Resets all the styles of an element to a given value. Defaults to null.
 * The valid values are 'inherit', 'initial', 'unset' or null.
 * @param {!Element} element
 */
function resetAllStyles(element) {
  setImportantStyles(element, defaultStyles);
}

/**
 * Copyright 2018 The Subscribe with Google Authors. All Rights Reserved.
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

/** @const {string} */
var styleType = 'text/css';

/**
 * Add attributes to an element.
 * @param {!Element} element
 * @param {!Object<string, string|number|boolean|!Object<string, string|number|boolean>>} attributes
 * @return {!Element} updated element.
 */
function addAttributesToElement(element, attributes) {
  for (var attr in attributes) {
    if (attr == 'style') {
      setStyles(element,
      /** @type !Object<string, string|boolean|number> */
      attributes[attr]);
    } else {
      element.setAttribute(attr,
      /** @type {string|boolean|number} */attributes[attr]);
    }
  }
  return element;
}

/**
 * Create a new element on document with specified tagName and attributes.
 * @param {!Document} doc
 * @param {string} tagName
 * @param {!Object<string, string>} attributes
 * @param {?(string|!Node|!ArrayLike<!Node>|!Array<!Node>)=} opt_content
 * @return {!Element} created element.
 */
function createElement(doc, tagName, attributes, opt_content) {
  var element = doc.createElement(tagName);
  addAttributesToElement(element, attributes);
  if (opt_content != null) {
    if (typeof opt_content == 'string') {
      element.textContent = opt_content;
    } else if (opt_content.nodeType) {
      element.appendChild(opt_content);
    } else if ('length' in opt_content) {
      for (var i = 0; i < opt_content.length; i++) {
        element.appendChild(opt_content[i]);
      }
    } else {
      assert(false, 'Unsupported content: %s', opt_content);
    }
  }
  return element;
}

/**
 * Removes all children from the parent element.
 * @param {!Element} parent
 */
function removeChildren(parent) {
  parent.textContent = '';
}

/**
 * Injects the provided styles in the HEAD section of the document.
 * @param {!Document} doc The document object.
 * @param {string} styleText The style string.
 * @return {!Element}
 */
function injectStyleSheet(doc, styleText) {
  var styleElement = createElement(doc, 'style', {
    'type': styleType
  });
  styleElement.textContent = styleText;
  doc.head.appendChild(styleElement);
  return styleElement;
}

/**
 * Copyright 2018 The Subscribe with Google Authors. All Rights Reserved.
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
 * @param {!Object<string, string>} map
 * @param {?string|?Element} langOrElement
 * @return {?string}
 */
function msg(map, langOrElement) {
  var lang = !langOrElement ? '' : typeof langOrElement == 'string' ? langOrElement : langOrElement.lang || langOrElement.ownerDocument && langOrElement.ownerDocument.documentElement.lang;
  var search = (lang && lang.toLowerCase() || 'en').replace(/_/g, '-');
  while (search) {
    if (search in map) {
      return map[search];
    }
    var dash = search.lastIndexOf('-');
    search = dash != -1 ? search.substring(0, dash) : '';
  }
  // "en" is always default.
  return map['en'];
}

/**
 * Copyright 2018 The Subscribe with Google Authors. All Rights Reserved.
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

/** @type {!Object<string, string>} */
var TITLE_LANG_MAP = {
  'en': 'Subscribe with Google',
  'ar': 'الاشتراك عبر Google',
  'de': 'Abonnieren mit Google',
  'es': 'Suscríbete con Google',
  'es-latam': 'Suscribirse con Google',
  'es-latn': 'Suscribirse con Google',
  'fr': 'S\'abonner avec Google',
  'hi': 'Google की सदस्यता लें',
  'id': 'Berlangganan dengan Google',
  'it': 'Abbonati con Google',
  'jp': 'Google で購読',
  'ko': 'Google 을(를) 통해 구독',
  'ms': 'Langgan dengan Google',
  'nl': 'Abonneren met Google',
  'no': 'Abonner med Google',
  'pl': 'Subskrybuj z Google',
  'pt': 'Subscrever com o Google',
  'pt-br': 'Faça sua assinatura com Google',
  'ru': 'Подпишитесь через Google',
  'se': 'Prenumerera med Google',
  'th': 'สมัครรับข้อมูลด้วย Google',
  'tr': 'Google ile abone olun',
  'uk': 'Підписатися через Google',
  'zh-tw': '透過 Google 訂閱'
};

/**
 * The button stylesheet can be found in the `/assets/swg-button.css`.
 * It's produced by the `assets:swg-button` gulp task and deployed to
 * `https://news.google.com/swg/js/v1/swg-button.css`.
 */

var ButtonApi = function () {

  /**
   * @param {!../model/doc.Doc} doc
   */
  function ButtonApi(doc) {
    _classCallCheck(this, ButtonApi);

    /** @private @const {!../model/doc.Doc} */
    this.doc_ = doc;
  }

  /**
   */


  _createClass(ButtonApi, [{
    key: 'init',
    value: function init() {
      var head = this.doc_.getHead();
      if (!head) {
        return;
      }

      var url = 'https://news.google.com/swg/js/v1/swg-button.css';
      var existing = head.querySelector('link[href="' + url + '"]');
      if (existing) {
        return;
      }

      // <link rel="stylesheet" href="..." type="text/css">
      head.appendChild(createElement(this.doc_.getWin().document, 'link', {
        'rel': 'stylesheet',
        'type': 'text/css',
        'href': url
      }));
    }

    /**
     * @param {!Object|function()} optionsOrCallback
     * @param {function()=} opt_callback
     * @return {!Element}
     */

  }, {
    key: 'create',
    value: function create(optionsOrCallback, opt_callback) {
      var button = createElement(this.doc_.getWin().document, 'button', {});
      return this.attach(button, optionsOrCallback, opt_callback);
    }

    /**
     * @param {!Element} button
     * @param {!Object|function()} optionsOrCallback
     * @param {function()=} opt_callback
     * @return {!Element}
     */

  }, {
    key: 'attach',
    value: function attach(button, optionsOrCallback, opt_callback) {
      var options = typeof optionsOrCallback != 'function' ? optionsOrCallback : null;
      var callback = /** @type {function()} */(typeof optionsOrCallback == 'function' ? optionsOrCallback : null) || opt_callback;
      var theme = options && options['theme'];
      if (theme !== 'light' && theme !== 'dark') {
        theme = 'light';
      }
      button.classList.add('swg-button-' + theme);
      button.setAttribute('role', 'button');
      if (options && options['lang']) {
        button.setAttribute('lang', options['lang']);
      }
      button.setAttribute('title', msg(TITLE_LANG_MAP, button) || '');
      button.addEventListener('click', callback);
      return button;
    }
  }]);

  return ButtonApi;
}();

var CSS = ".swg-dialog,.swg-toast{box-sizing:border-box;background-color:#fff!important}.swg-toast{position:fixed!important;bottom:0!important;max-height:46px!important;z-index:2147483647!important;border:none!important}@media (max-height:640px), (max-width:640px){.swg-dialog,.swg-toast{width:480px!important;left:-240px!important;margin-left:50vw!important;border-top-left-radius:8px!important;border-top-right-radius:8px!important;box-shadow:0 1px 1px rgba(60,64,67,.3),0 1px 4px 1px rgba(60,64,67,.15)!important}}@media (min-width:640px) and (min-height:640px){.swg-dialog{width:630px!important;left:-315px!important;margin-left:50vw!important;background-color:transparent!important;border:none!important}.swg-toast{left:0!important}}@media (max-width:480px){.swg-dialog,.swg-toast{width:100%!important;left:0!important;right:0!important;margin-left:0!important;border-top-left-radius:8px!important;border-top-right-radius:8px!important;box-shadow:0 1px 1px rgba(60,64,67,.3),0 1px 4px 1px rgba(60,64,67,.15)!important}}\n/*# sourceURL=/./src/components/dialog.css*/";

/**
 * Copyright 2018 The Subscribe with Google Authors. All Rights Reserved.
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

/** @enum {number} */
var CallbackId = {
  ENTITLEMENTS: 1,
  SUBSCRIBE_REQUEST: 2,
  SUBSCRIBE_RESPONSE: 3,
  LOGIN_REQUEST: 4,
  LINK_PROGRESS: 5,
  LINK_COMPLETE: 6,
  FLOW_STARTED: 7,
  FLOW_CANCELED: 8
};

/**
 */

var Callbacks = function () {

  /**
   */
  function Callbacks() {
    _classCallCheck(this, Callbacks);

    /** @private @const {!Object<CallbackId, function(*)>} */
    this.callbacks_ = {};
    /** @private @const {!Object<CallbackId, *>} */
    this.resultBuffer_ = {};
  }

  /**
   * @param {function(!Promise<!../api/entitlements.Entitlements>)} callback
   */


  _createClass(Callbacks, [{
    key: 'setOnEntitlementsResponse',
    value: function setOnEntitlementsResponse(callback) {
      this.setCallback_(CallbackId.ENTITLEMENTS, callback);
    }

    /**
     * @param {!Promise<!../api/entitlements.Entitlements>} promise
     */

  }, {
    key: 'triggerEntitlementsResponse',
    value: function triggerEntitlementsResponse(promise) {
      return this.trigger_(CallbackId.ENTITLEMENTS, promise.then(function (res) {
        return res.clone();
      }));
    }

    /**
     * @return {boolean}
     */

  }, {
    key: 'hasEntitlementsResponsePending',
    value: function hasEntitlementsResponsePending() {
      return !!this.resultBuffer_[CallbackId.ENTITLEMENTS];
    }

    /**
     * @param {function(!../api/subscriptions.LoginRequest)} callback
     */

  }, {
    key: 'setOnLoginRequest',
    value: function setOnLoginRequest(callback) {
      this.setCallback_(CallbackId.LOGIN_REQUEST, callback);
    }

    /**
     * @param {!../api/subscriptions.LoginRequest} request
     * @return {boolean} Whether the callback has been found.
     */

  }, {
    key: 'triggerLoginRequest',
    value: function triggerLoginRequest(request) {
      return this.trigger_(CallbackId.LOGIN_REQUEST, request);
    }

    /**
     * @param {function()} callback
     */

  }, {
    key: 'setOnLinkProgress',
    value: function setOnLinkProgress(callback) {
      this.setCallback_(CallbackId.LINK_PROGRESS, callback);
    }

    /**
     * @return {boolean} Whether the callback has been found.
     */

  }, {
    key: 'triggerLinkProgress',
    value: function triggerLinkProgress() {
      return this.trigger_(CallbackId.LINK_PROGRESS, true);
    }

    /**
     */

  }, {
    key: 'resetLinkProgress',
    value: function resetLinkProgress() {
      this.resetCallback_(CallbackId.LINK_PROGRESS);
    }

    /**
     * @param {function()} callback
     */

  }, {
    key: 'setOnLinkComplete',
    value: function setOnLinkComplete(callback) {
      this.setCallback_(CallbackId.LINK_COMPLETE, callback);
    }

    /**
     * @return {boolean} Whether the callback has been found.
     */

  }, {
    key: 'triggerLinkComplete',
    value: function triggerLinkComplete() {
      return this.trigger_(CallbackId.LINK_COMPLETE, true);
    }

    /**
     * @return {boolean}
     */

  }, {
    key: 'hasLinkCompletePending',
    value: function hasLinkCompletePending() {
      return !!this.resultBuffer_[CallbackId.LINK_COMPLETE];
    }

    /**
     * @param {function()} callback
     */

  }, {
    key: 'setOnSubscribeRequest',
    value: function setOnSubscribeRequest(callback) {
      this.setCallback_(CallbackId.SUBSCRIBE_REQUEST, callback);
    }

    /**
     * @return {boolean} Whether the callback has been found.
     */

  }, {
    key: 'triggerSubscribeRequest',
    value: function triggerSubscribeRequest() {
      return this.trigger_(CallbackId.SUBSCRIBE_REQUEST, true);
    }

    /**
     * @return {boolean}
     */

  }, {
    key: 'hasSubscribeRequestCallback',
    value: function hasSubscribeRequestCallback() {
      return !!this.callbacks_[CallbackId.SUBSCRIBE_REQUEST];
    }

    /**
     * @param {function(!Promise<!../api/subscribe-response.SubscribeResponse>)} callback
     */

  }, {
    key: 'setOnSubscribeResponse',
    value: function setOnSubscribeResponse(callback) {
      this.setCallback_(CallbackId.SUBSCRIBE_RESPONSE, callback);
    }

    /**
     * @param {!Promise<!../api/subscribe-response.SubscribeResponse>} responsePromise
     * @return {boolean} Whether the callback has been found.
     */

  }, {
    key: 'triggerSubscribeResponse',
    value: function triggerSubscribeResponse(responsePromise) {
      return this.trigger_(CallbackId.SUBSCRIBE_RESPONSE, responsePromise.then(function (res) {
        return res.clone();
      }));
    }

    /**
     * @return {boolean}
     */

  }, {
    key: 'hasSubscribeResponsePending',
    value: function hasSubscribeResponsePending() {
      return !!this.resultBuffer_[CallbackId.SUBSCRIBE_RESPONSE];
    }

    /**
     * @param {function({flow: string, data: !Object})} callback
     */

  }, {
    key: 'setOnFlowStarted',
    value: function setOnFlowStarted(callback) {
      this.setCallback_(CallbackId.FLOW_STARTED, callback);
    }

    /**
     * @param {string} flow
     * @param {!Object=} opt_data
     * @return {boolean} Whether the callback has been found.
     */

  }, {
    key: 'triggerFlowStarted',
    value: function triggerFlowStarted(flow, opt_data) {
      return this.trigger_(CallbackId.FLOW_STARTED, {
        flow: flow,
        data: opt_data || {}
      });
    }

    /**
     * @param {function({flow: string, data: !Object})} callback
     */

  }, {
    key: 'setOnFlowCanceled',
    value: function setOnFlowCanceled(callback) {
      this.setCallback_(CallbackId.FLOW_CANCELED, callback);
    }

    /**
     * @param {string} flow
     * @param {!Object=} opt_data
     * @return {boolean} Whether the callback has been found.
     */

  }, {
    key: 'triggerFlowCanceled',
    value: function triggerFlowCanceled(flow, opt_data) {
      return this.trigger_(CallbackId.FLOW_CANCELED, {
        flow: flow,
        data: opt_data || {}
      });
    }

    /**
     * @param {!CallbackId} id
     * @param {function(?)} callback
     * @private
     */

  }, {
    key: 'setCallback_',
    value: function setCallback_(id, callback) {
      this.callbacks_[id] = callback;
      // If result already exist, execute the callback right away.
      if (id in this.resultBuffer_) {
        this.executeCallback_(id, callback, this.resultBuffer_[id]);
      }
    }

    /**
     * @param {!CallbackId} id
     * @param {*} data
     * @return {boolean}
     * @private
     */

  }, {
    key: 'trigger_',
    value: function trigger_(id, data) {
      this.resultBuffer_[id] = data;
      var callback = this.callbacks_[id];
      if (callback) {
        this.executeCallback_(id, callback, data);
      }
      return !!callback;
    }

    /**
     * @param {!CallbackId} id
     * @private
     */

  }, {
    key: 'resetCallback_',
    value: function resetCallback_(id) {
      if (id in this.resultBuffer_) {
        delete this.resultBuffer_[id];
      }
    }

    /**
     * @param {!CallbackId} id
     * @param {function(*)} callback
     * @param {*} data
     * @private
     */

  }, {
    key: 'executeCallback_',
    value: function executeCallback_(id, callback, data) {
      var _this11 = this;

      // Always execute callbacks in a microtask.
      Promise.resolve().then(function () {
        callback(data);
        _this11.resetCallback_(id);
      });
    }
  }]);

  return Callbacks;
}();

/**
 * Copyright 2018 The Subscribe with Google Authors. All Rights Reserved.
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
 * abstract View Class. Used to render the content within the Dialog. The
 * extended class has actual content.
 * @abstract
 */


var View = function () {

  /**
   * Empty constructor.
   */
  function View() {
    _classCallCheck(this, View);
  }

  /**
   * Gets the iframe element.
   * @return {!Element}
   * @abstract
   */


  _createClass(View, [{
    key: 'getElement',
    value: function getElement() {}

    /**
     * @param {!./dialog.Dialog} unusedDialog
     * @return {!Promise}
     * @abstract
     */

  }, {
    key: 'init',
    value: function init(unusedDialog) {}

    /**
     * Resizes the content.
     */

  }, {
    key: 'resized',
    value: function resized() {}
    // Do nothing by default. Override if needed.


    /**
     * Accept the result.
     * @return {!Promise}
     * @abstract
     */

  }, {
    key: 'whenComplete',
    value: function whenComplete() {}

    /**
     * @return {boolean}
     * @abstract
     */

  }, {
    key: 'shouldFadeBody',
    value: function shouldFadeBody() {}
  }]);

  return View;
}();

/**
 * Copyright 2018 The Subscribe with Google Authors. All Rights Reserved.
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
 * @param {*} error
 * @return {boolean}
 */


function isCancelError(error) {
  if (!error || (typeof error === 'undefined' ? 'undefined' : _typeof(error)) != 'object') {
    return false;
  }
  return error['name'] === 'AbortError';
}

/**
 * Copyright 2018 The Subscribe with Google Authors. All Rights Reserved.
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

/** @const {!Object<string, string>} */
var iframeAttributes = {
  'frameborder': '0',
  'scrolling': 'no'
};

/**
 * Class to build and render Activity iframe view.
 */

var ActivityIframeView = function (_View) {
  _inherits(ActivityIframeView, _View);

  /**
   * @param {!Window} win
   * @param {!web-activities/activity-ports.ActivityPorts} activityPorts
   * @param {string} src
   * @param {!Object<string, ?>=} args
   * @param {boolean=} shouldFadeBody
   */
  function ActivityIframeView(win, activityPorts, src, args) {
    var shouldFadeBody = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

    _classCallCheck(this, ActivityIframeView);

    /** @private @const {!Window} */
    var _this12 = _possibleConstructorReturn(this, (ActivityIframeView.__proto__ || Object.getPrototypeOf(ActivityIframeView)).call(this));

    _this12.win_ = win;

    /** @private @const {!Document} */
    _this12.doc_ = _this12.win_.document;

    /** @private @const {!HTMLIFrameElement} */
    _this12.iframe_ =
    /** @type {!HTMLIFrameElement} */createElement(_this12.doc_, 'iframe', iframeAttributes);

    /** @private @const {!web-activities/activity-ports.ActivityPorts} */
    _this12.activityPorts_ = activityPorts;

    /** @private @const {string} */
    _this12.src_ = src;

    /** @private @const {!Object<string, ?>} */
    _this12.args_ = args || {};

    /** @private @const {boolean} */
    _this12.shouldFadeBody_ = shouldFadeBody;

    /** @private {?web-activities/activity-ports.ActivityIframePort} */
    _this12.port_ = null;

    /**
     * @private
     * {?function<!web-activities/activity-ports.ActivityIframePort|!Promise>}
     */
    _this12.portResolver_ = null;

    /**
     * @private @const
     * {!Promise<!web-activities/activity-ports.ActivityIframePort>}
     */
    _this12.portPromise_ = new Promise(function (resolve) {
      _this12.portResolver_ = resolve;
    });
    return _this12;
  }

  /** @override */


  _createClass(ActivityIframeView, [{
    key: 'getElement',
    value: function getElement() {
      return this.iframe_;
    }

    /** @override */

  }, {
    key: 'init',
    value: function init(dialog) {
      var _this13 = this;

      return this.activityPorts_.openIframe(this.iframe_, this.src_, this.args_).then(function (port) {
        return _this13.onOpenIframeResponse_(port, dialog);
      });
    }

    /**
     * Returns if document should fade for this view.
     * @return {boolean}
     */

  }, {
    key: 'shouldFadeBody',
    value: function shouldFadeBody() {
      return this.shouldFadeBody_;
    }

    /**
     * @param {!web-activities/activity-ports.ActivityIframePort} port
     * @param {!../components/dialog.Dialog} dialog
     * @return {!Promise}
     */

  }, {
    key: 'onOpenIframeResponse_',
    value: function onOpenIframeResponse_(port, dialog) {
      var _this14 = this;

      this.port_ = port;
      this.portResolver_(port);

      this.port_.onResizeRequest(function (height) {
        dialog.resizeView(_this14, height);
      });

      return this.port_.whenReady();
    }

    /**
     * @return {!Promise<!web-activities/activity-ports.ActivityIframePort>}
     */

  }, {
    key: 'port',
    value: function port() {
      return this.portPromise_;
    }

    /**
     * @param {!Object} data
     */

  }, {
    key: 'message',
    value: function message(data) {
      this.port().then(function (port) {
        port.message(data);
      });
    }

    /**
     * Handles the message received by the port.
     * @param {function(!Object<string, string|boolean>)} callback
     */

  }, {
    key: 'onMessage',
    value: function onMessage(callback) {
      this.port().then(function (port) {
        port.onMessage(callback);
      });
    }

    /**
     * Accepts results from the caller.
     * @return {!Promise<!web-activities/activity-ports.ActivityResult>}
     */

  }, {
    key: 'acceptResult',
    value: function acceptResult() {
      return this.port().then(function (port) {
        return port.acceptResult();
      });
    }

    /**
     * Completes the flow.
     * @return {!Promise}
     */

  }, {
    key: 'whenComplete',
    value: function whenComplete() {
      return this.acceptResult();
    }

    /**
     * @param {function()} callback
     */

  }, {
    key: 'onCancel',
    value: function onCancel(callback) {
      this.acceptResult().catch(function (reason) {
        if (isCancelError(reason)) {
          callback();
        }
        throw reason;
      });
    }

    /** @override */

  }, {
    key: 'resized',
    value: function resized() {
      if (this.port_) {
        this.port_.resized();
      }
    }
  }]);

  return ActivityIframeView;
}(View);

/**
 * Copyright 2018 The Subscribe with Google Authors. All Rights Reserved.
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
 * The holder of the entitlements for a service.
 */


var Entitlements = function () {

  /**
   * @param {string} service
   * @param {string} raw
   * @param {!Array<!Entitlement>} entitlements
   * @param {?string} currentProduct
   * @param {function(!Entitlements)} ackHandler
   */
  function Entitlements(service, raw, entitlements, currentProduct, ackHandler) {
    _classCallCheck(this, Entitlements);

    /** @const {string} */
    this.service = service;
    /** @const {string} */
    this.raw = raw;
    /** @const {!Array<!Entitlement>} */
    this.entitlements = entitlements;

    /** @private @const {?string} */
    this.product_ = currentProduct;
    /** @private @const {function(!Entitlements)} */
    this.ackHandler_ = ackHandler;
  }

  /**
   * @return {!Entitlements}
   */


  _createClass(Entitlements, [{
    key: 'clone',
    value: function clone() {
      return new Entitlements(this.service, this.raw, this.entitlements.map(function (ent) {
        return ent.clone();
      }), this.product_, this.ackHandler_);
    }

    /**
     * @return {!Object}
     */

  }, {
    key: 'json',
    value: function json() {
      return {
        'service': this.service,
        'entitlements': this.entitlements.map(function (item) {
          return item.json();
        })
      };
    }

    /**
     * @param {string=} opt_source
     * @return {boolean}
     */

  }, {
    key: 'enablesThis',
    value: function enablesThis(opt_source) {
      return this.enables(this.product_, opt_source);
    }

    /**
     * @param {string=} opt_source
     * @return {boolean}
     */

  }, {
    key: 'enablesAny',
    value: function enablesAny(opt_source) {
      for (var i = 0; i < this.entitlements.length; i++) {
        if (this.entitlements[i].products.length > 0 && (!opt_source || opt_source == this.entitlements[i].source)) {
          return true;
        }
      }
      return false;
    }

    /**
     * Whether these entitlements enable the specified product, optionally also
     * restricting the source.
     * @param {?string} product
     * @param {string=} opt_source
     * @return {boolean}
     */

  }, {
    key: 'enables',
    value: function enables(product, opt_source) {
      if (!product) {
        return false;
      }
      return !!this.getEntitlementFor(product, opt_source);
    }

    /**
     * Returns the first matching entitlement for the current product,
     * optionally also matching the specified source.
     * @param {string=} opt_source
     * @return {?Entitlement}
     */

  }, {
    key: 'getEntitlementForThis',
    value: function getEntitlementForThis(opt_source) {
      return this.getEntitlementFor(this.product_, opt_source);
    }

    /**
     * Returns the first matching entitlement for the specified product,
     * optionally also matching the specified source.
     * @param {?string} product
     * @param {string=} opt_source
     * @return {?Entitlement}
     */

  }, {
    key: 'getEntitlementFor',
    value: function getEntitlementFor(product, opt_source) {
      if (product && this.entitlements.length > 0) {
        for (var i = 0; i < this.entitlements.length; i++) {
          if (this.entitlements[i].enables(product) && (!opt_source || opt_source == this.entitlements[i].source)) {
            return this.entitlements[i];
          }
        }
      }
      return null;
    }

    /**
     * Returns the first matching entitlement for the specified source w/o
     * matching any specific products.
     * @param {string} source
     * @return {?Entitlement}
     */

  }, {
    key: 'getEntitlementForSource',
    value: function getEntitlementForSource(source) {
      if (this.entitlements.length > 0) {
        for (var i = 0; i < this.entitlements.length; i++) {
          if (this.entitlements[i].subscriptionToken && source == this.entitlements[i].source) {
            return this.entitlements[i];
          }
        }
      }
      return null;
    }

    /**
     * A 3p site should call this method to acknowledge that it "saw" and
     * "understood" entitlements.
     */

  }, {
    key: 'ack',
    value: function ack() {
      this.ackHandler_(this);
    }
  }]);

  return Entitlements;
}();

/**
 * The single entitlement object.
 */


var Entitlement = function () {

  /**
   * @param {string} source
   * @param {!Array<string>} products
   * @param {string} subscriptionToken
   */
  function Entitlement(source, products, subscriptionToken) {
    _classCallCheck(this, Entitlement);

    /** @const {string} */
    this.source = source;
    /** @const {!Array<string>} */
    this.products = products;
    /** @const {string} */
    this.subscriptionToken = subscriptionToken;
  }

  /**
   * @return {!Entitlement}
   */


  _createClass(Entitlement, [{
    key: 'clone',
    value: function clone() {
      return new Entitlement(this.source, this.products.slice(0), this.subscriptionToken);
    }

    /**
     * @return {!Object}
     */

  }, {
    key: 'json',
    value: function json() {
      return {
        'source': this.source,
        'products': this.products,
        'subscriptionToken': this.subscriptionToken
      };
    }

    /**
     * @param {?string} product
     * @return {boolean}
     */

  }, {
    key: 'enables',
    value: function enables(product) {
      if (!product) {
        return false;
      }
      return this.products.includes(product);
    }

    /**
     * @param {?Object} json
     * @return {!Entitlement}
     */

  }], [{
    key: 'parseFromJson',
    value: function parseFromJson(json) {
      if (!json) {
        json = {};
      }
      var source = json['source'] || '';
      var products = json['products'] || [];
      var subscriptionToken = json['subscriptionToken'];
      return new Entitlement(source, products, subscriptionToken);
    }

    /**
     * The JSON is expected in one of the forms:
     * - Single entitlement: `{products: [], ...}`.
     * - A list of entitlements: `[{products: [], ...}, {...}]`.
     * @param {!Object|!Array<!Object>} json
     * @return {!Array<!Entitlement>}
     */

  }, {
    key: 'parseListFromJson',
    value: function parseListFromJson(json) {
      var jsonList = Array.isArray(json) ?
      /** @type {!Array<Object>} */json : [json];
      return jsonList.map(function (json) {
        return Entitlement.parseFromJson(json);
      });
    }
  }]);

  return Entitlement;
}();

/**
 * Copyright 2018 The Subscribe with Google Authors. All Rights Reserved.
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
 */


var UserData = function () {

  /**
   * @param {string} idToken
   * @param {!Object} data
   */
  function UserData(idToken, data) {
    _classCallCheck(this, UserData);

    /** @const {string} */
    this.idToken = idToken;
    /** @const {!Object} */
    this.data = data;

    /** @const {string} */
    this.id = data['sub'];
    /** @const {string} */
    this.email = data['email'];
    /** @const {boolean} */
    this.emailVerified = data['email_verified'];
    /** @const {string} */
    this.name = data['name'];
    /** @const {string} */
    this.givenName = data['given_name'];
    /** @const {string} */
    this.familyName = data['family_name'];
    /** @const {string} */
    this.pictureUrl = data['picture'];
  }

  /**
   * @return {!UserData}
   */


  _createClass(UserData, [{
    key: 'clone',
    value: function clone() {
      return new UserData(this.idToken, this.data);
    }

    /**
     * @return {!Object}
     */

  }, {
    key: 'json',
    value: function json() {
      return {
        'id': this.id,
        'email': this.email,
        'emailVerified': this.emailVerified,
        'name': this.name,
        'givenName': this.givenName,
        'familyName': this.familyName,
        'pictureUrl': this.pictureUrl
      };
    }
  }]);

  return UserData;
}();

/**
 * Copyright 2018 The Subscribe with Google Authors. All Rights Reserved.
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
 */


var SubscribeResponse = function () {

  /**
   * @param {string} raw
   * @param {!PurchaseData} purchaseData
   * @param {?UserData} userData
   * @param {function():!Promise} completeHandler
   */
  function SubscribeResponse(raw, purchaseData, userData, completeHandler) {
    _classCallCheck(this, SubscribeResponse);

    /** @const {string} */
    this.raw = raw;
    /** @const {!PurchaseData} */
    this.purchaseData = purchaseData;
    /** @const {?UserData} */
    this.userData = userData;
    /** @private @const {function():!Promise} */
    this.completeHandler_ = completeHandler;
  }

  /**
   * @return {!SubscribeResponse}
   */


  _createClass(SubscribeResponse, [{
    key: 'clone',
    value: function clone() {
      return new SubscribeResponse(this.raw, this.purchaseData, this.userData, this.completeHandler_);
    }

    /**
     * @return {!Object}
     */

  }, {
    key: 'json',
    value: function json() {
      return {
        'purchaseData': this.purchaseData.json(),
        'userData': this.userData ? this.userData.json() : null
      };
    }

    /**
     * Allows the receiving site to complete/acknowledge that it registered
     * the subscription purchase. The typical action would be to create an
     * account (or match an existing one) and associated the purchase with
     * that account.
     *
     * SwG will display progress indicator until this method is called and
     * upon receiving this call will show the confirmation to the user.
     * The promise returned by this method will yield once the user closes
     * the confirmation.
     *
     * @return {!Promise}
     */

  }, {
    key: 'complete',
    value: function complete() {
      return this.completeHandler_();
    }
  }]);

  return SubscribeResponse;
}();

/**
 */


var PurchaseData = function () {

  /**
   * @param {string} raw
   * @param {string} signature
   */
  function PurchaseData(raw, signature) {
    _classCallCheck(this, PurchaseData);

    /** @const {string} */
    this.raw = raw;
    /** @const {string} */
    this.signature = signature;
  }

  /**
   * @return {!PurchaseData}
   */


  _createClass(PurchaseData, [{
    key: 'clone',
    value: function clone() {
      return new PurchaseData(this.raw, this.signature);
    }

    /**
     * @return {!Object}
     */

  }, {
    key: 'json',
    value: function json() {
      return {
        'data': this.raw,
        'signature': this.signature
      };
    }
  }]);

  return PurchaseData;
}();

/**
 * Copyright 2018 The Subscribe with Google Authors. All Rights Reserved.
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
 */


var DeferredAccountCreationResponse = function () {

  /**
   * @param {!Entitlements} entitlements
   * @param {!UserData} userData
   * @param {!PurchaseData} purchaseData
   * @param {function():!Promise} completeHandler
   */
  function DeferredAccountCreationResponse(entitlements, userData, purchaseData, completeHandler) {
    _classCallCheck(this, DeferredAccountCreationResponse);

    /** @const {!Entitlements} */
    this.entitlements = entitlements;
    /** @const {!UserData} */
    this.userData = userData;
    /** @const {!PurchaseData} */
    this.purchaseData = purchaseData;
    /** @private @const {function():!Promise} */
    this.completeHandler_ = completeHandler;
  }

  /**
   * @return {!DeferredAccountCreationResponse}
   */


  _createClass(DeferredAccountCreationResponse, [{
    key: 'clone',
    value: function clone() {
      return new DeferredAccountCreationResponse(this.entitlements, this.userData, this.purchaseData, this.completeHandler_);
    }

    /**
     * @return {!Object}
     */

  }, {
    key: 'json',
    value: function json() {
      return {
        'entitlements': this.entitlements.json(),
        'userData': this.userData.json(),
        'purchaseData': this.purchaseData.json()
      };
    }

    /**
     * Allows the receiving site to complete/acknowledge that it registered
     * the subscription info. The typical action would be to create an
     * account (or match an existing one) and associated the subscription with
     * that account.
     *
     * SwG will display progress indicator until this method is called and
     * upon receiving this call will show the confirmation to the user.
     * The promise returned by this method will yield once the user closes
     * the confirmation.
     *
     * @return {!Promise}
     */

  }, {
    key: 'complete',
    value: function complete() {
      return this.completeHandler_();
    }
  }]);

  return DeferredAccountCreationResponse;
}();

/**
 * Copyright 2018 The Subscribe with Google Authors. All Rights Reserved.
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
 * Character mapping from base64url to base64.
 * @const {!Object<string, string>}
 */


var base64UrlDecodeSubs = { '-': '+', '_': '/', '.': '=' };

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
    assert(charCode <= 255, 'Characters must be in range [0,255]');
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
 * Interpret a byte array as a UTF-8 string.
 * @param {!BufferSource} bytes
 * @return {string}
 */
function utf8DecodeSync(bytes) {
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
function utf8EncodeSync(string) {
  if (typeof TextEncoder !== 'undefined') {
    return new TextEncoder('utf-8').encode(string);
  }
  return stringToBytes(unescape(encodeURIComponent(string)));
}

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
  return stringToBytes(encoded);
}

/**
 * Copyright 2018 The Subscribe with Google Authors. All Rights Reserved.
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
 * Copyright 2018 The Subscribe with Google Authors. All Rights Reserved.
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
 * Simple wrapper around JSON.parse that casts the return value
 * to JsonObject.
 * Create a new wrapper if an array return value is desired.
 * @param {*} json JSON string to parse
 * @return {?JsonObject|undefined} May be extend to parse arrays.
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
 * Copyright 2018 The Subscribe with Google Authors. All Rights Reserved.
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
 * Provides helper methods to decode and verify JWT tokens.
 */

var JwtHelper = function () {
  function JwtHelper() {
    _classCallCheck(this, JwtHelper);
  }

  /**
   * Decodes JWT token and returns its payload.
   * @param {string} encodedToken
   * @return {?JsonObject|undefined}
   */


  _createClass(JwtHelper, [{
    key: 'decode',
    value: function decode(encodedToken) {
      return this.decodeInternal_(encodedToken).payload;
    }

    /**
     * @param {string} encodedToken
     * @return {!JwtTokenInternalDef}
     * @private
     */

  }, {
    key: 'decodeInternal_',
    value: function decodeInternal_(encodedToken) {
      // See https://jwt.io/introduction/
      /**
       * Throws error about invalid token.
       */
      function invalidToken() {
        throw new Error('Invalid token: "' + encodedToken + '"');
      }

      // Encoded token has three parts: header.payload.sig
      // Note! The padding is not allowed by JWT spec:
      // http://self-issued.info/docs/draft-goland-json-web-token-00.html#rfc.section.5
      var parts = encodedToken.split('.');
      if (parts.length != 3) {
        invalidToken();
      }
      var headerUtf8Bytes = base64UrlDecodeToBytes(parts[0]);
      var payloadUtf8Bytes = base64UrlDecodeToBytes(parts[1]);
      return {
        header: tryParseJson(utf8DecodeSync(headerUtf8Bytes), invalidToken),
        payload: tryParseJson(utf8DecodeSync(payloadUtf8Bytes), invalidToken),
        verifiable: parts[0] + '.' + parts[1],
        sig: parts[2]
      };
    }
  }]);

  return JwtHelper;
}();

/**
 * Copyright 2018 The Subscribe with Google Authors. All Rights Reserved.
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
 * Copyright 2018 The Subscribe with Google Authors. All Rights Reserved.
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

/** @enum {string} */


var SubscriptionFlows = {
  SHOW_OFFERS: 'showOffers',
  SHOW_SUBSCRIBE_OPTION: 'showSubscribeOption',
  SHOW_ABBRV_OFFER: 'showAbbrvOffer',
  SUBSCRIBE: 'subscribe',
  COMPLETE_DEFERRED_ACCOUNT_CREATION: 'completeDeferredAccountCreation',
  LINK_ACCOUNT: 'linkAccount',
  SHOW_LOGIN_PROMPT: 'showLoginPrompt',
  SHOW_LOGIN_NOTIFICATION: 'showLoginNotification'
};

/**
 * @enum {string}
 */
var WindowOpenMode = {
  AUTO: 'auto',
  REDIRECT: 'redirect'
};

/**
 * @return {!Config}
 */
function defaultConfig() {
  return {
    windowOpenMode: WindowOpenMode.AUTO
  };
}

/**
 * Copyright 2018 The Subscribe with Google Authors. All Rights Reserved.
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
 * Cached a-tag to avoid memory allocation during URL parsing.
 * @type {HTMLAnchorElement}
 */
var a = void 0;

/**
 * We cached all parsed URLs. As of now there are no use cases
 * of AMP docs that would ever parse an actual large number of URLs,
 * but we often parse the same one over and over again.
 * @type {Object<string, !LocationDef>}
 */
var cache = void 0;

/**
 * Returns a Location-like object for the given URL. If it is relative,
 * the URL gets resolved.
 * Consider the returned object immutable. This is enforced during
 * testing by freezing the object.
 * @param {string} url
 * @param {boolean=} opt_nocache
 * @return {!LocationDef}
 */
function parseUrl$1(url, opt_nocache) {
  if (!a) {
    a = /** @type {!HTMLAnchorElement} */self.document.createElement('a');
    cache = self.UrlCache || (self.UrlCache = Object.create(null));
  }

  var fromCache = cache[url];
  if (fromCache) {
    return fromCache;
  }

  var info = parseUrlWithA(a, url);

  return cache[url] = info;
}

/**
 * Returns a Location-like object for the given URL. If it is relative,
 * the URL gets resolved.
 * @param {!HTMLAnchorElement} a
 * @param {string} url
 * @return {!LocationDef}
 */
function parseUrlWithA(a, url) {
  a.href = url;

  // IE11 doesn't provide full URL components when parsing relative URLs.
  // Assigning to itself again does the trick.
  if (!a.protocol) {
    a.href = a.href;
  }

  /** @type {!LocationDef} */
  var info = {
    href: a.href,
    protocol: a.protocol,
    host: a.host,
    hostname: a.hostname,
    port: a.port == '0' ? '' : a.port,
    pathname: a.pathname,
    search: a.search,
    hash: a.hash,
    origin: '' // Set below.
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
  return info;
}

/**
 * Adds a parameter to a query string.
 * @param {string} url
 * @param {string} param
 * @param {string} value
 * @return {string}
 */
function addQueryParam(url, param, value) {
  var queryIndex = url.indexOf('?');
  var fragmentIndex = url.indexOf('#');
  var fragment = '';
  if (fragmentIndex != -1) {
    fragment = url.substring(fragmentIndex);
    url = url.substring(0, fragmentIndex);
  }
  if (queryIndex == -1) {
    url += '?';
  } else if (queryIndex < url.length - 1) {
    url += '&';
  }
  url += encodeURIComponent(param) + '=' + encodeURIComponent(value);
  return url + fragment;
}

/**
 * Copyright 2018 The Subscribe with Google Authors. All Rights Reserved.
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

/** @private @const {!Array<string>} */
var allowedMethods_ = ['GET', 'POST'];

/** @private @enum {number} Allowed fetch responses. */
var allowedFetchTypes_ = {
  document: 1,
  text: 2
};

/**
 * A class that polyfills Fetch API.
 */

var Xhr = function () {

  /**
   * @param {!Window} win
   */
  function Xhr(win) {
    _classCallCheck(this, Xhr);

    /** @const {!Window} */
    this.win = win;
  }

  /**
   * We want to call `fetch_` unbound from any context since it could
   * be either the native fetch or our polyfill.
   *
   * @param {string} input
   * @param {!FetchInitDef} init
   * @return {!Promise<!FetchResponse>|!Promise<!Response>}
   * @private
   */


  _createClass(Xhr, [{
    key: 'fetch_',
    value: function fetch_(input, init) {
      // TODO(avimehta): Should the requests go through when page is not visible?
      assert(typeof input == 'string', 'Only URL supported: %s', input);
      // In particular, Firefox does not tolerate `null` values for
      // `credentials`.
      var creds = init.credentials;
      assert(creds === undefined || creds == 'include' || creds == 'omit', 'Only credentials=include|omit support: %s', creds);
      // Fallback to xhr polyfill since `fetch` api does not support
      // responseType = 'document'. We do this so we don't have to do any parsing
      // and document construction on the UI thread which would be expensive.
      if (init.responseType == 'document') {
        return fetchPolyfill(input, init);
      }
      return (this.win.fetch || fetchPolyfill).apply(null, arguments);
    }

    /**
     * @param {string} input URL
     * @param {?FetchInitDef} opt_init Fetch options object.
     * @return {!Promise<!FetchResponse>}
     */

  }, {
    key: 'fetch',
    value: function fetch(input, opt_init) {
      // TODO (avimehta): Figure out if CORS needs be handled the way AMP does it.
      var init = setupInit(opt_init);
      return this.fetch_(input, init).then(function (response) {
        return response;
      }, function (reason) {
        var targetOrigin = parseUrl$1(input).origin;
        throw new Error('XHR Failed fetching' + (' (' + targetOrigin + '/...):'), reason && reason.message);
      }).then(function (response) {
        return assertSuccess(response);
      });
    }
  }]);

  return Xhr;
}();

/**
 * Normalized method name by uppercasing.
 * @param {string|undefined} method
 * @return {string}
 * @private
 */


function normalizeMethod_(method) {
  if (method === undefined) {
    return 'GET';
  }
  method = method.toUpperCase();

  assert(allowedMethods_.includes(method), 'Only one of %s is currently allowed. Got %s', allowedMethods_.join(', '), method);

  return method;
}

/**
 * Sets up and normalizes the FetchInitDef
 *
 * @param {?FetchInitDef=} opt_init Fetch options object.
 * @param {string=} opt_accept The HTTP Accept header value.
 * @return {!FetchInitDef}
 */
function setupInit(opt_init, opt_accept) {
  var init = opt_init || /** @type {FetchInitDef} */{};
  init.method = normalizeMethod_(init.method);
  init.headers = init.headers || {};
  if (opt_accept) {
    init.headers['Accept'] = opt_accept;
  }
  return init;
}

/**
 * A minimal polyfill of Fetch API. It only polyfills what we currently use.
 *
 * See https://developer.mozilla.org/en-US/docs/Web/API/GlobalFetch/fetch
 *
 * Notice that the "fetch" method itself is not exported as that would require
 * us to immediately support a much wide API.
 *
 * @param {string} input
 * @param {!FetchInitDef} init
 * @return {!Promise<!FetchResponse>}
 * @private Visible for testing
 */
function fetchPolyfill(input, init) {
  return new Promise(function (resolve, reject) {
    var xhr = createXhrRequest(init.method || 'GET', input);

    if (init.credentials == 'include') {
      xhr.withCredentials = true;
    }

    if (init.responseType in allowedFetchTypes_) {
      xhr.responseType = init.responseType;
    }

    if (init.headers) {
      Object.keys(init.headers).forEach(function (header) {
        xhr.setRequestHeader(header, init.headers[header]);
      });
    }

    xhr.onreadystatechange = function () {
      if (xhr.readyState < /* STATUS_RECEIVED */2) {
        return;
      }
      if (xhr.status < 100 || xhr.status > 599) {
        xhr.onreadystatechange = null;
        reject(new Error('Unknown HTTP status ' + xhr.status));
        return;
      }

      // TODO(dvoytenko): This is currently simplified: we will wait for the
      // whole document loading to complete. This is fine for the use cases
      // we have now, but may need to be reimplemented later.
      if (xhr.readyState == /* COMPLETE */4) {
        resolve(new FetchResponse(xhr));
      }
    };
    xhr.onerror = function () {
      reject(new Error('Network failure'));
    };
    xhr.onabort = function () {
      reject(new Error('Request aborted'));
    };

    if (init.method == 'POST') {
      xhr.send(init.body);
    } else {
      xhr.send();
    }
  });
}

/**
 * @param {string} method
 * @param {string} url
 * @return {!XMLHttpRequest}
 * @private
 */
function createXhrRequest(method, url) {
  var xhr = new XMLHttpRequest();
  // TODO(avimehta): IE 8/9 don't support XHR (with CORS). Use XDR instead
  // if we plan to support those browsers.
  if ('withCredentials' in xhr) {
    xhr.open(method, url, true);
  } else {
    throw new Error('CORS is not supported');
  }
  return xhr;
}

/**
 * If 415 or in the 5xx range.
 * @param {number} status
 */
function isRetriable(status) {
  return status == 415 || status >= 500 && status < 600;
}

/**
 * Returns the response if successful or otherwise throws an error.
 * @param {!FetchResponse} response
 * @return {!Promise<!FetchResponse>}
 * @private Visible for testing
 */
function assertSuccess(response) {
  return new Promise(function (resolve) {
    if (response.ok) {
      return resolve(response);
    }

    var status = response.status;

    var err = new Error('HTTP error ' + status);
    err.retriable = isRetriable(status);
    // TODO(@jridgewell, #9448): Callers who need the response should
    // skip processing.
    err.response = response;
    throw err;
  });
}

/**
 * Response object in the Fetch API.
 *
 * See https://developer.mozilla.org/en-US/docs/Web/API/GlobalFetch/fetch
 */

var FetchResponse = function () {
  /**
   * @param {!XMLHttpRequest} xhr
   */
  function FetchResponse(xhr) {
    _classCallCheck(this, FetchResponse);

    /** @private @const {!XMLHttpRequest} */
    this.xhr_ = xhr;

    /** @const {number} */
    this.status = this.xhr_.status;

    /** @const {boolean} */
    this.ok = this.status >= 200 && this.status < 300;

    /** @const {!FetchResponseHeaders} */
    this.headers = new FetchResponseHeaders(xhr);

    /** @type {boolean} */
    this.bodyUsed = false;

    /** @type {?ReadableStream} */
    this.body = null;
  }

  /**
   * Create a copy of the response and return it.
   * @return {!FetchResponse}
   */


  _createClass(FetchResponse, [{
    key: 'clone',
    value: function clone() {
      assert(!this.bodyUsed, 'Body already used');
      return new FetchResponse(this.xhr_);
    }

    /**
     * Drains the response and returns the text.
     * @return {!Promise<string>}
     * @private
     */

  }, {
    key: 'drainText_',
    value: function drainText_() {
      assert(!this.bodyUsed, 'Body already used');
      this.bodyUsed = true;
      return Promise.resolve(this.xhr_.responseText);
    }

    /**
     * Drains the response and returns a promise that resolves with the response
     * text.
     * @return {!Promise<string>}
     */

  }, {
    key: 'text',
    value: function text() {
      return this.drainText_();
    }

    /**
     * Drains the response and returns the JSON object.
     * @return {!Promise<!JsonObject>}
     */

  }, {
    key: 'json',
    value: function json() {
      return (/** @type {!Promise<!JsonObject>} */this.drainText_().then(parseJson)
      );
    }

    /**
     * Reads the xhr responseXML.
     * @return {!Promise<!Document>}
     * @private
     */

  }, {
    key: 'document_',
    value: function document_() {
      assert(!this.bodyUsed, 'Body already used');
      this.bodyUsed = true;
      assert(this.xhr_.responseXML, 'responseXML should exist. Make sure to return ' + 'Content-Type: text/html header.');
      return (/** @type {!Promise<!Document>} */Promise.resolve(assert(this.xhr_.responseXML))
      );
    }

    /**
     * Drains the response and returns a promise that resolves with the response
     * ArrayBuffer.
     * @return {!Promise<!ArrayBuffer>}
     */

  }, {
    key: 'arrayBuffer',
    value: function arrayBuffer() {
      return (/** @type {!Promise<!ArrayBuffer>} */this.drainText_().then(utf8EncodeSync)
      );
    }
  }]);

  return FetchResponse;
}();

/**
 * Provides access to the response headers as defined in the Fetch API.
 * @private Visible for testing.
 */


var FetchResponseHeaders = function () {
  /**
   * @param {!XMLHttpRequest} xhr
   */
  function FetchResponseHeaders(xhr) {
    _classCallCheck(this, FetchResponseHeaders);

    /** @private @const {!XMLHttpRequest} */
    this.xhr_ = xhr;
  }

  /**
   * @param {string} name
   * @return {string}
   */


  _createClass(FetchResponseHeaders, [{
    key: 'get',
    value: function get(name) {
      return this.xhr_.getResponseHeader(name);
    }

    /**
     * @param {string} name
     * @return {boolean}
     */

  }, {
    key: 'has',
    value: function has(name) {
      return this.xhr_.getResponseHeader(name) != null;
    }
  }]);

  return FetchResponseHeaders;
}();

/**
 * Copyright 2018 The Subscribe with Google Authors. All Rights Reserved.
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
 * Have to put these in the map to avoid compiler optimization. Due to
 * optimization issues, this map only allows property-style keys. E.g. "hr1",
 * as opposed to "1hr".
 * @type {!Object<string, number>}
 * @package Visible for testing only.
 */


var CACHE_KEYS = {
  'nocache': 1,
  'hr1': 3600000, // 1hr = 1000 * 60 * 60
  'hr12': 43200000 // 12hr = 1000 * 60 * 60 * 12
};

/**
 * @return {string}
 */
function feOrigin() {
  return parseUrl$1('https://news.google.com').origin;
}

/**
 * @param {string} url Relative URL, e.g. "/service1".
 * @return {string} The complete URL.
 */
function serviceUrl(url) {
  return 'https://news.google.com/swg/_/api/v1' + url;
}

/**
 * @param {string} url Relative URL, e.g. "/offersiframe".
 * @param {string=} prefix
 * @return {string} The complete URL.
 */
function feUrl(url) {
  var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  return feCached('https://news.google.com' + prefix + '/swg/_/ui/v1' + url);
}

/**
 * @param {string} url FE URL.
 * @return {string} The complete URL including cache params.
 */
function feCached(url) {
  return addQueryParam(url, '_', cacheParam('hr1'));
}

/**
 * @param {!Object<string, ?>} args
 * @return {!Object<string, ?>}
 */
function feArgs(args) {
  return Object.assign(args, {
    '_client': 'SwG 0.1.22.23'
  });
}

/**
 * @param {string} cacheKey
 * @return {string}
 * @package Visible for testing only.
 */
function cacheParam(cacheKey) {
  var period = CACHE_KEYS[cacheKey];
  if (period == null) {
    period = 1;
  }
  if (period === 0) {
    return '_';
  }
  var now = Date.now();
  return String(period <= 1 ? now : Math.floor(now / period));
}

/**
 * Copyright 2018 The Subscribe with Google Authors. All Rights Reserved.
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

var PAY_REQUEST_ID = 'swg-pay';

/**
 * @const {!Object<string, string>}
 * @package Visible for testing only.
 */
var PAY_ORIGIN = {
  'PRODUCTION': 'https://pay.google.com',
  'SANDBOX': 'https://pay.sandbox.google.com'
};

/** @return {string} */
function payOrigin() {
  return PAY_ORIGIN['PRODUCTION'];
}

/** @return {string} */
function payUrl() {
  return feCached(PAY_ORIGIN['PRODUCTION'] + '/gp/p/ui/pay');
}

/** @return {string} */
function payDecryptUrl() {
  return PAY_ORIGIN['PRODUCTION'] + '/gp/p/apis/buyflow/process';
}

/**
 * The flow to initiate payment process.
 */

var PayStartFlow = function () {
  _createClass(PayStartFlow, null, [{
    key: 'preconnect',


    /**
     * @param {!../utils/preconnect.Preconnect} pre
     */
    value: function preconnect(pre) {
      pre.prefetch(payUrl());
      pre.prefetch('https://payments.google.com/payments/v4/js/integrator.js?ss=md');
      pre.prefetch('https://clients2.google.com/gr/gr_full_2.0.6.js');
      pre.preconnect('https://www.gstatic.com/');
      pre.preconnect('https://fonts.googleapis.com/');
      pre.preconnect('https://www.google.com/');
    }

    /**
     * @param {!./deps.DepsDef} deps
     * @param {string} sku
     */

  }]);

  function PayStartFlow(deps, sku) {
    _classCallCheck(this, PayStartFlow);

    /** @private @const {!./deps.DepsDef} */
    this.deps_ = deps;

    /** @private @const {!web-activities/activity-ports.ActivityPorts} */
    this.activityPorts_ = deps.activities();

    /** @private @const {!../model/page-config.PageConfig} */
    this.pageConfig_ = deps.pageConfig();

    /** @private @const {!../components/dialog-manager.DialogManager} */
    this.dialogManager_ = deps.dialogManager();

    /** @private @const {string} */
    this.sku_ = sku;
  }

  /**
   * Starts the payments flow.
   * @return {!Promise}
   */


  _createClass(PayStartFlow, [{
    key: 'start',
    value: function start() {
      // Start/cancel events.
      this.deps_.callbacks().triggerFlowStarted(SubscriptionFlows.SUBSCRIBE, {
        'sku': this.sku_
      });

      // TODO(dvoytenko): switch to gpay async client.
      var forceRedirect = this.deps_.config().windowOpenMode == WindowOpenMode.REDIRECT;
      var opener = this.activityPorts_.open(PAY_REQUEST_ID, payUrl(), forceRedirect ? '_top' : '_blank', feArgs({
        'apiVersion': 1,
        'allowedPaymentMethods': ['CARD'],
        'environment': 'PRODUCTION',
        'playEnvironment': 'PROD',
        'swg': {
          'publicationId': this.pageConfig_.getPublicationId(),
          'skuId': this.sku_
        }
      }), {});
      this.dialogManager_.popupOpened(opener && opener.targetWin);
      return Promise.resolve();
    }
  }]);

  return PayStartFlow;
}();

/**
 * The flow for successful payments completion.
 */


var PayCompleteFlow = function () {
  _createClass(PayCompleteFlow, null, [{
    key: 'configurePending',


    /**
     * @param {!./deps.DepsDef} deps
     */
    value: function configurePending(deps) {
      deps.activities().onResult(PAY_REQUEST_ID, function (port) {
        deps.dialogManager().popupClosed();
        deps.entitlementsManager().blockNextNotification();
        var flow = new PayCompleteFlow(deps);
        var promise = validatePayResponse(deps.win(), port, flow.complete.bind(flow));
        deps.callbacks().triggerSubscribeResponse(promise);
        return promise.then(function (response) {
          flow.start(response);
        }, function (reason) {
          if (isCancelError(reason)) {
            deps.callbacks().triggerFlowCanceled(SubscriptionFlows.SUBSCRIBE);
          }
          throw reason;
        });
      });
    }

    /**
     * @param {!./deps.DepsDef} deps
     */

  }]);

  function PayCompleteFlow(deps) {
    _classCallCheck(this, PayCompleteFlow);

    /** @private @const {!Window} */
    this.win_ = deps.win();

    /** @private @const {!./deps.DepsDef} */
    this.deps_ = deps;

    /** @private @const {!web-activities/activity-ports.ActivityPorts} */
    this.activityPorts_ = deps.activities();

    /** @private @const {!../components/dialog-manager.DialogManager} */
    this.dialogManager_ = deps.dialogManager();

    /** @private {?ActivityIframeView} */
    this.activityIframeView_ = null;

    /** @private {?SubscribeResponse} */
    this.response_ = null;

    /** @private {?Promise} */
    this.readyPromise_ = null;
  }

  /**
   * Starts the payments completion flow.
   * @param {!SubscribeResponse} response
   * @return {!Promise}
   */


  _createClass(PayCompleteFlow, [{
    key: 'start',
    value: function start(response) {
      var _this15 = this;

      this.deps_.entitlementsManager().reset(true);
      this.response_ = response;
      this.activityIframeView_ = new ActivityIframeView(this.win_, this.activityPorts_, feUrl('/payconfirmiframe'), feArgs({
        'publicationId': this.deps_.pageConfig().getPublicationId(),
        'loginHint': response.userData && response.userData.email
      }),
      /* shouldFadeBody */true);
      this.activityIframeView_.onMessage(function (data) {
        if (data['entitlements']) {
          _this15.deps_.entitlementsManager().pushNextEntitlements(
          /** @type {string} */data['entitlements']);
          return;
        }
      });
      this.activityIframeView_.acceptResult().then(function () {
        // The flow is complete.
        _this15.dialogManager_.completeView(_this15.activityIframeView_);
      });
      this.readyPromise_ = this.dialogManager_.openView(this.activityIframeView_);
      return this.readyPromise_;
    }

    /**
     * @return {!Promise}
     */

  }, {
    key: 'complete',
    value: function complete() {
      var _this16 = this;

      this.deps_.entitlementsManager().unblockNextNotification();
      this.readyPromise_.then(function () {
        _this16.activityIframeView_.message({ 'complete': true });
      });
      return this.activityIframeView_.acceptResult().catch(function () {
        // Ignore errors.
      }).then(function () {
        _this16.deps_.entitlementsManager().setToastShown(true);
      });
    }
  }]);

  return PayCompleteFlow;
}();

/**
 * @param {!Window} win
 * @param {!web-activities/activity-ports.ActivityPort} port
 * @param {function():!Promise} completeHandler
 * @return {!Promise<!SubscribeResponse>}
 * @package Visible for testing only.
 */


function validatePayResponse(win, port, completeHandler) {
  // Do not require security immediately: it will be checked below.
  return port.acceptResult().then(function (result) {
    if (result.origin != payOrigin()) {
      throw new Error('channel mismatch');
    }
    var data = /** @type {!Object} */result.data;
    if (data['redirectEncryptedCallbackData']) {
      // Data is supplied as an encrypted blob.
      var xhr = new Xhr(win);
      var url = payDecryptUrl();
      var init = /** @type {!../utils/xhr.FetchInitDef} */{
        method: 'post',
        headers: { 'Accept': 'text/plain, application/json' },
        credentials: 'include',
        body: data['redirectEncryptedCallbackData'],
        mode: 'cors'
      };
      return xhr.fetch(url, init).then(function (response) {
        return response.json();
      });
    }
    // Data is supplied directly: must be a verified and secure channel.
    if (result.originVerified && result.secureChannel) {
      return data;
    }
    throw new Error('channel mismatch');
  }).then(function (data) {
    return parseSubscriptionResponse(data, completeHandler);
  });
}

/**
 * @param {*} data
 * @param {function():!Promise} completeHandler
 * @return {!SubscribeResponse}
 */
function parseSubscriptionResponse(data, completeHandler) {
  var swgData = null;
  var raw = null;
  if (data) {
    if (typeof data == 'string') {
      raw = /** @type {string} */data;
    } else {
      // Assume it's a json object in the format:
      // `{integratorClientCallbackData: "..."}` or `{swgCallbackData: "..."}`.
      var json = /** @type {!Object} */data;
      if ('swgCallbackData' in json) {
        swgData = /** @type {!Object} */json['swgCallbackData'];
      } else if ('integratorClientCallbackData' in json) {
        raw = json['integratorClientCallbackData'];
      }
    }
  }
  if (raw && !swgData) {
    raw = atob(raw);
    if (raw) {
      var parsed = parseJson(raw);
      swgData = parsed['swgCallbackData'];
    }
  }
  if (!swgData) {
    throw new Error('unexpected payment response');
  }
  raw = JSON.stringify( /** @type {!JsonObject} */swgData);
  return new SubscribeResponse(raw, parsePurchaseData(swgData), parseUserData(swgData), completeHandler);
}

/**
 * @param {!Object} swgData
 * @return {!PurchaseData}
 */
function parsePurchaseData(swgData) {
  var raw = swgData['purchaseData'];
  var signature = swgData['purchaseDataSignature'];
  return new PurchaseData(raw, signature);
}

/**
 * @param {!Object} swgData
 * @return {?UserData}
 * @package Visible for testing.
 */
function parseUserData(swgData) {
  var idToken = swgData['idToken'];
  if (!idToken) {
    return null;
  }
  var jwt = /** @type {!Object} */new JwtHelper().decode(idToken);
  return new UserData(idToken, jwt);
}

/**
 * Copyright 2018 The Subscribe with Google Authors. All Rights Reserved.
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
 * The flow to initiate deferred account process.
 * See `Subscriptions.completeDeferredAccountCreation` API.
 */

var DeferredAccountFlow = function () {

  /**
   * @param {!./deps.DepsDef} deps
   * @param {?../api/deferred-account-creation.DeferredAccountCreationRequest} options
   */
  function DeferredAccountFlow(deps, options) {
    _classCallCheck(this, DeferredAccountFlow);

    /** @private @const {!./deps.DepsDef} */
    this.deps_ = deps;

    /** @private @const {!Window} */
    this.win_ = deps.win();

    /** @private @const {!web-activities/activity-ports.ActivityPorts} */
    this.activityPorts_ = deps.activities();

    /** @private @const {!../components/dialog-manager.DialogManager} */
    this.dialogManager_ = deps.dialogManager();

    /** @private {?ActivityIframeView} */
    this.activityIframeView_ = null;

    /** @private {?Promise} */
    this.openPromise_ = null;

    /** @type {!../api/deferred-account-creation.DeferredAccountCreationRequest} */
    var defaultOptions = {
      entitlements: null,
      consent: true
    };
    /** @private @const {!../api/deferred-account-creation.DeferredAccountCreationRequest} */
    this.options_ = Object.assign(defaultOptions, options || {});
  }

  /**
   * Starts the deferred account flow.
   * @return {!Promise<!DeferredAccountCreationResponse>}
   */


  _createClass(DeferredAccountFlow, [{
    key: 'start',
    value: function start() {
      var _this17 = this;

      var entitlements = this.options_.entitlements;

      // For now, entitlements are required to be present and have the Google
      // token. This is strictly not required for the implementation. But it's
      // preferrable API-wise at this time.
      if (!entitlements || !entitlements.getEntitlementForSource('google')) {
        throw new Error('No entitlements with "google" source');
      }

      // Start/cancel events.
      this.deps_.callbacks().triggerFlowStarted(SubscriptionFlows.COMPLETE_DEFERRED_ACCOUNT_CREATION);

      this.activityIframeView_ = new ActivityIframeView(this.win_, this.activityPorts_, feUrl('/recoveriframe'), feArgs({
        'publicationId': this.deps_.pageConfig().getPublicationId(),
        'productId': this.deps_.pageConfig().getProductId(),
        'entitlements': entitlements && entitlements.raw || null,
        'consent': this.options_.consent
      }),
      /* shouldFadeBody */true);

      this.openPromise_ = this.dialogManager_.openView(this.activityIframeView_);
      return this.activityIframeView_.acceptResult().then(function (result) {
        // The consent part is complete.
        return _this17.handleConsentResponse_( /** @type {!Object} */result.data);
      }, function (reason) {
        if (isCancelError(reason)) {
          _this17.deps_.callbacks().triggerFlowCanceled(SubscriptionFlows.COMPLETE_DEFERRED_ACCOUNT_CREATION);
        } else {
          _this17.dialogManager_.completeView(_this17.activityIframeView_);
        }
        throw reason;
      });
    }

    /**
     * @param {!Object} data
     * @return {!DeferredAccountCreationResponse}
     * @private
     */

  }, {
    key: 'handleConsentResponse_',
    value: function handleConsentResponse_(data) {
      this.deps_.entitlementsManager().blockNextNotification();

      // Parse the response.
      var entitlementsJwt = data['entitlements'];
      var idToken = data['idToken'];
      var entitlements = this.deps_.entitlementsManager().parseEntitlements({ 'signedEntitlements': entitlementsJwt });
      var userData = new UserData(idToken,
      /** @type {!Object} */new JwtHelper().decode(idToken));
      var purchaseData = new PurchaseData(data['purchaseData'], data['purchaseDataSignature']);

      // For now, we'll use the `PayCompleteFlow` as a "creating account" flow.
      // But this can be eventually implemented by the same iframe.
      var creatingFlow = new PayCompleteFlow(this.deps_);
      var completeHandler = creatingFlow.complete.bind(creatingFlow);

      var response = new DeferredAccountCreationResponse(entitlements, userData, purchaseData, completeHandler);

      // Start the "sync" flow.
      creatingFlow.start(new SubscribeResponse('', // raw field doesn't matter in this case
      purchaseData, userData, function () {
        return Promise.resolve();
      } // completeHandler doesn't matter in this case
      ));
      return response;
    }
  }]);

  return DeferredAccountFlow;
}();

/**
 * Copyright 2018 The Subscribe with Google Authors. All Rights Reserved.
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

var CSS$1 = "body{padding:0;margin:0}swg-container,swg-loading,swg-loading-animate,swg-loading-image{display:block}swg-loading-container{width:100%!important;display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;-webkit-box-align:center!important;-ms-flex-align:center!important;align-items:center!important;-webkit-box-pack:center!important;-ms-flex-pack:center!important;justify-content:center!important;min-height:148px!important;height:100%!important;bottom:0!important;margin-top:5px!important;z-index:2147483647!important}@media (min-height:630px), (min-width:630px){swg-loading-container{width:560px!important;margin-left:35px!important;border-top-left-radius:8px!important;border-top-right-radius:8px!important;background-color:#fff!important;box-shadow:0 1px 1px rgba(60,64,67,.3),0 1px 4px 1px rgba(60,64,67,.15)!important}}swg-loading{z-index:2147483647!important;width:36px;height:36px;overflow:hidden;-webkit-animation:mspin-rotate 1568.63ms infinite linear;animation:mspin-rotate 1568.63ms infinite linear}swg-loading-animate{-webkit-animation:mspin-revrot 5332ms infinite steps(4);animation:mspin-revrot 5332ms infinite steps(4)}swg-loading-image{background-image:url('data:image/svg+xml;charset=utf-8;base64,DQo8c3ZnIHZlcnNpb249IjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxMTY2NCIgaGVpZ2h0PSIzNiIgdmlld0JveD0iMCAwIDExNjY0IDM2Ij48ZGVmcz48cGF0aCBpZD0iYSIgZmlsbD0ibm9uZSIgc3Ryb2tlLWRhc2hhcnJheT0iNTguOSIgZD0iTTE4IDUuNUExMi41IDEyLjUgMCAxIDEgNS41IDE4IiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiLz48ZyBpZD0iYiI+PHVzZSB4bGluazpocmVmPSIjYSIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjE3Ni42NiIvPjx1c2UgeGxpbms6aHJlZj0iI2EiIHN0cm9rZS1kYXNob2Zmc2V0PSIxNzYuNTgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM2KSIvPjx1c2UgeGxpbms6aHJlZj0iI2EiIHN0cm9rZS1kYXNob2Zmc2V0PSIxNzYuMzIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDcyKSIvPjx1c2UgeGxpbms6aHJlZj0iI2EiIHN0cm9rZS1kYXNob2Zmc2V0PSIxNzUuODUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwOCkiLz48dXNlIHhsaW5rOmhyZWY9IiNhIiBzdHJva2UtZGFzaG9mZnNldD0iMTc1LjE0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNDQpIi8+PHVzZSB4bGluazpocmVmPSIjYSIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjE3NC4xMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTgwKSIvPjx1c2UgeGxpbms6aHJlZj0iI2EiIHN0cm9rZS1kYXNob2Zmc2V0PSIxNzIuNzgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIxNikiLz48dXNlIHhsaW5rOmhyZWY9IiNhIiBzdHJva2UtZGFzaG9mZnNldD0iMTcxLjAxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNTIpIi8+PHVzZSB4bGluazpocmVmPSIjYSIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjE2OC43OCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjg4KSIvPjx1c2UgeGxpbms6aHJlZj0iI2EiIHN0cm9rZS1kYXNob2Zmc2V0PSIxNjYuMDIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMyNCkiLz48dXNlIHhsaW5rOmhyZWY9IiNhIiBzdHJva2UtZGFzaG9mZnNldD0iMTYyLjczIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzNjApIi8+PHVzZSB4bGluazpocmVmPSIjYSIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjE1OS4wMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzk2KSIvPjx1c2UgeGxpbms6aHJlZj0iI2EiIHN0cm9rZS1kYXNob2Zmc2V0PSIxNTUuMDQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQzMikiLz48dXNlIHhsaW5rOmhyZWY9IiNhIiBzdHJva2UtZGFzaG9mZnNldD0iMTUxLjA1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NjgpIi8+PHVzZSB4bGluazpocmVmPSIjYSIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjE0Ny4yMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTA0KSIvPjx1c2UgeGxpbms6aHJlZj0iI2EiIHN0cm9rZS1kYXNob2Zmc2V0PSIxNDMuNzEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDU0MCkiLz48dXNlIHhsaW5rOmhyZWY9IiNhIiBzdHJva2UtZGFzaG9mZnNldD0iMTQwLjU0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1NzYpIi8+PHVzZSB4bGluazpocmVmPSIjYSIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjEzNy43MiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjEyKSIvPjx1c2UgeGxpbms6aHJlZj0iI2EiIHN0cm9rZS1kYXNob2Zmc2V0PSIxMzUuMjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDY0OCkiLz48dXNlIHhsaW5rOmhyZWY9IiNhIiBzdHJva2UtZGFzaG9mZnNldD0iMTMyLjk4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2ODQpIi8+PHVzZSB4bGluazpocmVmPSIjYSIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjEzMS4wMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzIwKSIvPjx1c2UgeGxpbms6aHJlZj0iI2EiIHN0cm9rZS1kYXNob2Zmc2V0PSIxMjkuMjYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDc1NikiLz48dXNlIHhsaW5rOmhyZWY9IiNhIiBzdHJva2UtZGFzaG9mZnNldD0iMTI3LjcxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3OTIpIi8+PHVzZSB4bGluazpocmVmPSIjYSIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjEyNi4zMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoODI4KSIvPjx1c2UgeGxpbms6aHJlZj0iI2EiIHN0cm9rZS1kYXNob2Zmc2V0PSIxMjUuMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoODY0KSIvPjx1c2UgeGxpbms6aHJlZj0iI2EiIHN0cm9rZS1kYXNob2Zmc2V0PSIxMjQuMDEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDkwMCkiLz48dXNlIHhsaW5rOmhyZWY9IiNhIiBzdHJva2UtZGFzaG9mZnNldD0iMTIzLjA0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5MzYpIi8+PHVzZSB4bGluazpocmVmPSIjYSIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjEyMi4xOSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTcyKSIvPjx1c2UgeGxpbms6aHJlZj0iI2EiIHN0cm9rZS1kYXNob2Zmc2V0PSIxMjEuNDMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwMDgpIi8+PHVzZSB4bGluazpocmVmPSIjYSIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjEyMC43NyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTA0NCkiLz48dXNlIHhsaW5rOmhyZWY9IiNhIiBzdHJva2UtZGFzaG9mZnNldD0iMTIwLjE5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMDgwKSIvPjx1c2UgeGxpbms6aHJlZj0iI2EiIHN0cm9rZS1kYXNob2Zmc2V0PSIxMTkuNjkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDExMTYpIi8+PHVzZSB4bGluazpocmVmPSIjYSIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjExOS4yNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTE1MikiLz48dXNlIHhsaW5rOmhyZWY9IiNhIiBzdHJva2UtZGFzaG9mZnNldD0iMTE4Ljg5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMTg4KSIvPjx1c2UgeGxpbms6aHJlZj0iI2EiIHN0cm9rZS1kYXNob2Zmc2V0PSIxMTguNTgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyMjQpIi8+PHVzZSB4bGluazpocmVmPSIjYSIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjExOC4zMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTI2MCkiLz48dXNlIHhsaW5rOmhyZWY9IiNhIiBzdHJva2UtZGFzaG9mZnNldD0iMTE4LjEzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjk2KSIvPjx1c2UgeGxpbms6aHJlZj0iI2EiIHN0cm9rZS1kYXNob2Zmc2V0PSIxMTcuOTgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEzMzIpIi8+PHVzZSB4bGluazpocmVmPSIjYSIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjExNy44OCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTM2OCkiLz48dXNlIHhsaW5rOmhyZWY9IiNhIiBzdHJva2UtZGFzaG9mZnNldD0iMTE3LjgyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNDA0KSIvPjx1c2UgeGxpbms6aHJlZj0iI2EiIHN0cm9rZS1kYXNob2Zmc2V0PSIxMTcuOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTQ0MCkiLz48dXNlIHhsaW5rOmhyZWY9IiNhIiBzdHJva2UtZGFzaG9mZnNldD0iMTE3LjcyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNDc2KSIvPjx1c2UgeGxpbms6aHJlZj0iI2EiIHN0cm9rZS1kYXNob2Zmc2V0PSIxMTcuNDYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE1MTIpIi8+PHVzZSB4bGluazpocmVmPSIjYSIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjExNyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTU0OCkiLz48dXNlIHhsaW5rOmhyZWY9IiNhIiBzdHJva2UtZGFzaG9mZnNldD0iMTE2LjI5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNTg0KSIvPjx1c2UgeGxpbms6aHJlZj0iI2EiIHN0cm9rZS1kYXNob2Zmc2V0PSIxMTUuMjkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2MjApIi8+PHVzZSB4bGluazpocmVmPSIjYSIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjExMy45NCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTY1NikiLz48dXNlIHhsaW5rOmhyZWY9IiNhIiBzdHJva2UtZGFzaG9mZnNldD0iMTEyLjE5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNjkyKSIvPjx1c2UgeGxpbms6aHJlZj0iI2EiIHN0cm9rZS1kYXNob2Zmc2V0PSIxMDkuOTciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE3MjgpIi8+PHVzZSB4bGluazpocmVmPSIjYSIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjEwNy4yMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTc2NCkiLz48dXNlIHhsaW5rOmhyZWY9IiNhIiBzdHJva2UtZGFzaG9mZnNldD0iMTAzLjk2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxODAwKSIvPjx1c2UgeGxpbms6aHJlZj0iI2EiIHN0cm9rZS1kYXNob2Zmc2V0PSIxMDAuMjciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE4MzYpIi8+PHVzZSB4bGluazpocmVmPSIjYSIgc3Ryb2tlLWRhc2hvZmZzZXQ9Ijk2LjMyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxODcyKSIvPjx1c2UgeGxpbms6aHJlZj0iI2EiIHN0cm9rZS1kYXNob2Zmc2V0PSI5Mi4zNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTkwOCkiLz48dXNlIHhsaW5rOmhyZWY9IiNhIiBzdHJva2UtZGFzaG9mZnNldD0iODguNTYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE5NDQpIi8+PHVzZSB4bGluazpocmVmPSIjYSIgc3Ryb2tlLWRhc2hvZmZzZXQ9Ijg1LjA3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxOTgwKSIvPjx1c2UgeGxpbms6aHJlZj0iI2EiIHN0cm9rZS1kYXNob2Zmc2V0PSI4MS45MiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjAxNikiLz48dXNlIHhsaW5rOmhyZWY9IiNhIiBzdHJva2UtZGFzaG9mZnNldD0iNzkuMTEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIwNTIpIi8+PHVzZSB4bGluazpocmVmPSIjYSIgc3Ryb2tlLWRhc2hvZmZzZXQ9Ijc2LjYxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMDg4KSIvPjx1c2UgeGxpbms6aHJlZj0iI2EiIHN0cm9rZS1kYXNob2Zmc2V0PSI3NC40IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMTI0KSIvPjx1c2UgeGxpbms6aHJlZj0iI2EiIHN0cm9rZS1kYXNob2Zmc2V0PSI3Mi40NSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjE2MCkiLz48dXNlIHhsaW5rOmhyZWY9IiNhIiBzdHJva2UtZGFzaG9mZnNldD0iNzAuNzEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIxOTYpIi8+PHVzZSB4bGluazpocmVmPSIjYSIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjY5LjE2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMjMyKSIvPjx1c2UgeGxpbms6aHJlZj0iI2EiIHN0cm9rZS1kYXNob2Zmc2V0PSI2Ny43OSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjI2OCkiLz48dXNlIHhsaW5rOmhyZWY9IiNhIiBzdHJva2UtZGFzaG9mZnNldD0iNjYuNTciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIzMDQpIi8+PHVzZSB4bGluazpocmVmPSIjYSIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjY1LjQ5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMzQwKSIvPjx1c2UgeGxpbms6aHJlZj0iI2EiIHN0cm9rZS1kYXNob2Zmc2V0PSI2NC41MyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjM3NikiLz48dXNlIHhsaW5rOmhyZWY9IiNhIiBzdHJva2UtZGFzaG9mZnNldD0iNjMuNjgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI0MTIpIi8+PHVzZSB4bGluazpocmVmPSIjYSIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjYyLjkzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNDQ4KSIvPjx1c2UgeGxpbms6aHJlZj0iI2EiIHN0cm9rZS1kYXNob2Zmc2V0PSI2Mi4yNyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjQ4NCkiLz48dXNlIHhsaW5rOmhyZWY9IiNhIiBzdHJva2UtZGFzaG9mZnNldD0iNjEuNyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjUyMCkiLz48dXNlIHhsaW5rOmhyZWY9IiNhIiBzdHJva2UtZGFzaG9mZnNldD0iNjEuMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjU1NikiLz48dXNlIHhsaW5rOmhyZWY9IiNhIiBzdHJva2UtZGFzaG9mZnNldD0iNjAuNzciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI1OTIpIi8+PHVzZSB4bGluazpocmVmPSIjYSIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjYwLjQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI2MjgpIi8+PHVzZSB4bGluazpocmVmPSIjYSIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjYwLjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI2NjQpIi8+PHVzZSB4bGluazpocmVmPSIjYSIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjU5Ljg1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNzAwKSIvPjx1c2UgeGxpbms6aHJlZj0iI2EiIHN0cm9rZS1kYXNob2Zmc2V0PSI1OS42NSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjczNikiLz48dXNlIHhsaW5rOmhyZWY9IiNhIiBzdHJva2UtZGFzaG9mZnNldD0iNTkuNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjc3MikiLz48dXNlIHhsaW5rOmhyZWY9IiNhIiBzdHJva2UtZGFzaG9mZnNldD0iNTkuNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjgwOCkiLz48dXNlIHhsaW5rOmhyZWY9IiNhIiBzdHJva2UtZGFzaG9mZnNldD0iNTkuMzQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI4NDQpIi8+PHVzZSB4bGluazpocmVmPSIjYSIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjU5LjMyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyODgwKSIvPjwvZz48ZyBpZD0iYyI+PHVzZSB4bGluazpocmVmPSIjYSIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjcwLjcxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMTk2KSIgb3BhY2l0eT0iLjA1Ii8+PHVzZSB4bGluazpocmVmPSIjYSIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjY5LjE2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMjMyKSIgb3BhY2l0eT0iLjEiLz48dXNlIHhsaW5rOmhyZWY9IiNhIiBzdHJva2UtZGFzaG9mZnNldD0iNjcuNzkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIyNjgpIiBvcGFjaXR5PSIuMTUiLz48dXNlIHhsaW5rOmhyZWY9IiNhIiBzdHJva2UtZGFzaG9mZnNldD0iNjYuNTciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIzMDQpIiBvcGFjaXR5PSIuMiIvPjx1c2UgeGxpbms6aHJlZj0iI2EiIHN0cm9rZS1kYXNob2Zmc2V0PSI2NS40OSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjM0MCkiIG9wYWNpdHk9Ii4yNSIvPjx1c2UgeGxpbms6aHJlZj0iI2EiIHN0cm9rZS1kYXNob2Zmc2V0PSI2NC41MyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjM3NikiIG9wYWNpdHk9Ii4zIi8+PHVzZSB4bGluazpocmVmPSIjYSIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjYzLjY4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNDEyKSIgb3BhY2l0eT0iLjM1Ii8+PHVzZSB4bGluazpocmVmPSIjYSIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjYyLjkzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNDQ4KSIgb3BhY2l0eT0iLjQiLz48dXNlIHhsaW5rOmhyZWY9IiNhIiBzdHJva2UtZGFzaG9mZnNldD0iNjIuMjciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI0ODQpIiBvcGFjaXR5PSIuNDUiLz48dXNlIHhsaW5rOmhyZWY9IiNhIiBzdHJva2UtZGFzaG9mZnNldD0iNjEuNyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjUyMCkiIG9wYWNpdHk9Ii41Ii8+PHVzZSB4bGluazpocmVmPSIjYSIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjYxLjIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI1NTYpIiBvcGFjaXR5PSIuNTUiLz48dXNlIHhsaW5rOmhyZWY9IiNhIiBzdHJva2UtZGFzaG9mZnNldD0iNjAuNzciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI1OTIpIiBvcGFjaXR5PSIuNiIvPjx1c2UgeGxpbms6aHJlZj0iI2EiIHN0cm9rZS1kYXNob2Zmc2V0PSI2MC40IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNjI4KSIgb3BhY2l0eT0iLjY1Ii8+PHVzZSB4bGluazpocmVmPSIjYSIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjYwLjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI2NjQpIiBvcGFjaXR5PSIuNyIvPjx1c2UgeGxpbms6aHJlZj0iI2EiIHN0cm9rZS1kYXNob2Zmc2V0PSI1OS44NSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjcwMCkiIG9wYWNpdHk9Ii43NSIvPjx1c2UgeGxpbms6aHJlZj0iI2EiIHN0cm9rZS1kYXNob2Zmc2V0PSI1OS42NSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjczNikiIG9wYWNpdHk9Ii44Ii8+PHVzZSB4bGluazpocmVmPSIjYSIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjU5LjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI3NzIpIiBvcGFjaXR5PSIuODUiLz48dXNlIHhsaW5rOmhyZWY9IiNhIiBzdHJva2UtZGFzaG9mZnNldD0iNTkuNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjgwOCkiIG9wYWNpdHk9Ii45Ii8+PHVzZSB4bGluazpocmVmPSIjYSIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjU5LjM0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyODQ0KSIgb3BhY2l0eT0iLjk1Ii8+PHVzZSB4bGluazpocmVmPSIjYSIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjU5LjMyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyODgwKSIvPjwvZz48L2RlZnM+PHVzZSB4bGluazpocmVmPSIjYiIgc3Ryb2tlPSIjNDI4NWY0Ii8+PHVzZSB4bGluazpocmVmPSIjYyIgc3Ryb2tlPSIjZGI0NDM3Ii8+PHVzZSB4bGluazpocmVmPSIjYiIgc3Ryb2tlPSIjZGI0NDM3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyOTE2KSIvPjx1c2UgeGxpbms6aHJlZj0iI2MiIHN0cm9rZT0iI2Y0YjQwMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjkxNikiLz48dXNlIHhsaW5rOmhyZWY9IiNiIiBzdHJva2U9IiNmNGI0MDAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDU4MzIpIi8+PHVzZSB4bGluazpocmVmPSIjYyIgc3Ryb2tlPSIjMGY5ZDU4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1ODMyKSIvPjx1c2UgeGxpbms6aHJlZj0iI2IiIHN0cm9rZT0iIzBmOWQ1OCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoODc0OCkiLz48dXNlIHhsaW5rOmhyZWY9IiNjIiBzdHJva2U9IiM0Mjg1ZjQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDg3NDgpIi8+PC9zdmc+');background-size:100%;width:11664px;height:36px;-webkit-animation:swg-loading-film 5332ms infinite steps(324);animation:swg-loading-film 5332ms infinite steps(324)}@-webkit-keyframes swg-loading-film{0%{-webkit-transform:translateX(0);transform:translateX(0)}to{-webkit-transform:translateX(-11664px);transform:translateX(-11664px)}}@keyframes swg-loading-film{0%{-webkit-transform:translateX(0);transform:translateX(0)}to{-webkit-transform:translateX(-11664px);transform:translateX(-11664px)}}@-webkit-keyframes mspin-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes mspin-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes mspin-revrot{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(-360deg);transform:rotate(-360deg)}}@keyframes mspin-revrot{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(-360deg);transform:rotate(-360deg)}}\n/*# sourceURL=/./src/ui/ui.css*/";

/**
 * Copyright 2018 The Subscribe with Google Authors. All Rights Reserved.
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
 * Returns a promise which is resolved after the given duration of animation
 * @param {!Element} el - Element to be observed.
 * @param {!Object<string, string|number>} props - properties to be animated.
 * @param {number} durationMillis - duration of animation.
 * @param {string} curve - transition function for the animation.
 * @return {!Promise} Promise which resolves once the animation is done playing.
 */
function transition(el, props, durationMillis, curve) {
  var win = el.ownerDocument.defaultView;
  var previousTransitionValue = el.style.transition || '';
  return new Promise(function (resolve) {
    win.setTimeout(function () {
      win.setTimeout(resolve, durationMillis);
      var tr = durationMillis + 'ms ' + curve;
      setImportantStyles(el, Object.assign({
        'transition': 'transform ' + tr + ', opacity ' + tr
      }, props));
    });
  }).then(function () {
    setImportantStyles(el, {
      'transition': previousTransitionValue
    });
  });
}

/**
 * Copyright 2018 The Subscribe with Google Authors. All Rights Reserved.
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

var Graypane = function () {

  /**
   * @param {!../model/doc.Doc} doc
   * @param {number} zIndex
   */
  function Graypane(doc, zIndex) {
    _classCallCheck(this, Graypane);

    /** @private @const {!../model/doc.Doc} */
    this.doc_ = doc;

    /** @private @const {!Element} */
    this.fadeBackground_ = this.doc_.getWin().document.createElement('swg-popup-background');
    setImportantStyles(this.fadeBackground_, {
      'z-index': zIndex,
      'display': 'none',
      'position': 'fixed',
      'top': 0,
      'right': 0,
      'bottom': 0,
      'left': 0,
      'background-color': 'rgba(32, 33, 36, .6)'
    });
  }

  /**
   * @return {!Element}
   */


  _createClass(Graypane, [{
    key: 'getElement',
    value: function getElement() {
      return this.fadeBackground_;
    }

    /**
     * @return {boolean}
     */

  }, {
    key: 'isAttached',
    value: function isAttached() {
      return !!this.fadeBackground_.parentNode;
    }

    /**
     * Attaches the graypane to the document.
     */

  }, {
    key: 'attach',
    value: function attach() {
      this.doc_.getBody().appendChild(this.fadeBackground_);
    }

    /**
     * Detaches the graypane to the document.
     */

  }, {
    key: 'destroy',
    value: function destroy() {
      this.doc_.getBody().removeChild(this.fadeBackground_);
    }

    /**
     * Shows the graypane.
     * @param {boolean=} animated
     * @return {!Promise|undefined}
     */

  }, {
    key: 'show',
    value: function show() {
      var animated = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      setImportantStyles(this.fadeBackground_, {
        'display': 'block',
        'opacity': animated ? 0 : 1
      });
      if (animated) {
        return transition(this.fadeBackground_, {
          'opacity': 1
        }, 300, 'ease-out');
      }
    }

    /**
     * Hides the graypane.
     * @param {boolean=} animated
     * @return {!Promise|undefined}
     */

  }, {
    key: 'hide',
    value: function hide() {
      var _this18 = this;

      var animated = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      if (animated) {
        return transition(this.fadeBackground_, {
          'opacity': 0
        }, 300, 'ease-out').then(function () {
          setImportantStyles(_this18.fadeBackground_, { 'display': 'none' });
        });
      }
      setImportantStyles(this.fadeBackground_, { 'display': 'none' });
    }
  }]);

  return Graypane;
}();

/**
 * Copyright 2018 The Subscribe with Google Authors. All Rights Reserved.
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
 * Loading indicator class. Builds the loading indicator view to be injected in
 * parent element <iframe class="swg-dialog"> element. Provides methods to
 * show/hide loading indicator.
 */


var LoadingView = function () {

  /**
   * @param {!Document} doc
   */
  function LoadingView(doc) {
    _classCallCheck(this, LoadingView);

    /** @private @const {!Document} */
    this.doc_ = doc;

    /** @private @const {!Element} */
    this.loadingContainer_ = createElement(this.doc_, 'swg-loading-container', {});

    /** @private @const {!Element} */
    this.loading_ = createElement(this.doc_, 'swg-loading', {});
    this.loadingContainer_.appendChild(this.loading_);

    this.loadingContainer_.style.setProperty('display', 'none', 'important');

    // Build the animated loading indicator.
    this.buildLoadingIndicator_();
  }

  /**
   * Gets the populated loading container.
   * @return {!Element}
   */


  _createClass(LoadingView, [{
    key: 'getElement',
    value: function getElement() {
      return this.loadingContainer_;
    }

    /**
     * Shows the loading indicator within the container element.
     */

  }, {
    key: 'show',
    value: function show() {
      this.loadingContainer_.style.removeProperty('display');
    }

    /**
     * Hides the loading indicator within the container element.
     */

  }, {
    key: 'hide',
    value: function hide() {
      this.loadingContainer_.style.setProperty('display', 'none', 'important');
    }

    /**
     * Populates the loading indivicator. The populated element
     * can be added in any view, when required.
     * @private
     */

  }, {
    key: 'buildLoadingIndicator_',
    value: function buildLoadingIndicator_() {
      var loadingContainer = this.loading_;

      var loadingIndicatorTopContainer = createElement(this.doc_, 'swg-loading-animate', {});
      loadingContainer.appendChild(loadingIndicatorTopContainer);

      var loadingIndicatorChildContainer = createElement(this.doc_, 'swg-loading-image', {});
      loadingIndicatorTopContainer.appendChild(loadingIndicatorChildContainer);
    }
  }]);

  return LoadingView;
}();

/**
 * Copyright 2018 The Subscribe with Google Authors. All Rights Reserved.
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

/** @const {!Object<string|number>} */


var friendlyIframeAttributes = {
  'frameborder': 0,
  'scrolling': 'no',
  'src': 'about:blank'
};

/**
 * The class for building friendly iframe.
 */

var FriendlyIframe = function () {

  /**
   * @param {!Document} doc
   * @param {!Object<string, string|number>=} attrs
   */
  function FriendlyIframe(doc) {
    var _this19 = this;

    var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, FriendlyIframe);

    var mergedAttrs = Object.assign({}, friendlyIframeAttributes, attrs);

    /** @private @const {!HTMLIFrameElement} */
    this.iframe_ =
    /** @type {!HTMLIFrameElement} */createElement(doc, 'iframe', mergedAttrs);

    // Ensure that the new iframe does not inherit any CSS styles.
    resetAllStyles(this.iframe_);

    /** @private @const {!Promise} */
    this.ready_ = new Promise(function (resolve) {
      _this19.iframe_.onload = resolve;
    });
  }

  /**
   * When promise is resolved.
   * @return {!Promise}
   */


  _createClass(FriendlyIframe, [{
    key: 'whenReady',
    value: function whenReady() {
      return this.ready_;
    }

    /**
     * Gets the iframe element.
     * @return {!HTMLIFrameElement}
     */

  }, {
    key: 'getElement',
    value: function getElement() {
      return this.iframe_;
    }

    /**
     * Gets the document object of the iframe element.
     * @return {!Document}
     */

  }, {
    key: 'getDocument',
    value: function getDocument() {
      var doc = this.getElement().contentDocument || this.getElement().contentWindow && this.getElement().contentWindow.document;

      if (!doc) {
        throw new Error('not loaded');
      }
      return doc;
    }

    /**
     * Gets the body of the iframe.
     * @return {!Element}
     */

  }, {
    key: 'getBody',
    value: function getBody() {
      return (/** @type {!Element} */this.getDocument().body
      );
    }

    /**
     * Whether the iframe is connected.
     * @return {boolean}
     */

  }, {
    key: 'isConnected',
    value: function isConnected() {
      if (!this.getElement().ownerDocument) {
        return false;
      }
      return this.getElement().ownerDocument.contains(this.iframe_);
    }
  }]);

  return FriendlyIframe;
}();

/**
 * Copyright 2018 The Subscribe with Google Authors. All Rights Reserved.
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

var Z_INDEX = 2147483647;

/**
 * Default iframe important styles.
 * Note: The iframe responsiveness media query style is injected in the
 * publisher's page since style attribute can not include media query.
 * @const {!Object<string, string|number>}
 */
var rootElementImportantStyles = {
  'min-height': '50px',
  'border': 'none',
  'display': 'block',
  'position': 'fixed',
  'z-index': Z_INDEX,
  'box-sizing': 'border-box'
};

/**
 * Reset view styles.
 * @const {!Object<string, string|number>}
 */
var resetViewStyles = {
  'position': 'absolute',
  'top': '0',
  'left': '0',
  'right': '0',
  'bottom': '0',
  'opacity': 0,
  /* These lines are a work around to this issue in iOS:     */
  /* https://bugs.webkit.org/show_bug.cgi?id=155198          */
  'height': 0,
  'max-height': '100%',
  'max-width': '100%',
  'min-height': '100%',
  'min-width': '100%',
  'width': 0
};

/**
 * Position of the dialog.
 * @const @enum {string}
 */
var PositionAt = {
  BOTTOM: 'BOTTOM',
  TOP: 'TOP',
  FLOAT: 'FLOAT',
  FULL: 'FULL'
};

/**
 * The class for the top level dialog.
 * @final
 */

var Dialog = function () {

  /**
   * Create a dialog for the provided doc.
   * @param {!../model/doc.Doc} doc
   * @param {!Object<string, string|number>=} importantStyles
   * @param {!Object<string, string|number>=} styles
   */
  function Dialog(doc) {
    var importantStyles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var styles = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _classCallCheck(this, Dialog);

    /** @private @const {!../model/doc.Doc} */
    this.doc_ = doc;

    /** @private @const {!FriendlyIframe} */
    this.iframe_ = new FriendlyIframe(doc.getWin().document, { 'class': 'swg-dialog' });

    /** @private @const {!Graypane} */
    this.graypane_ = new Graypane(doc, Z_INDEX - 1);

    var modifiedImportantStyles = Object.assign({}, rootElementImportantStyles, importantStyles);
    setImportantStyles(this.iframe_.getElement(), modifiedImportantStyles);

    setStyles(this.iframe_.getElement(), styles);

    /** @private {LoadingView} */
    this.loadingView_ = null;

    /** @private {?Element} */
    this.container_ = null; // Depends on constructed document inside iframe.

    /** @private {?./view.View} */
    this.view_ = null;

    /** @private {?Promise} */
    this.animating_ = null;

    /** @private {boolean} */
    this.hidden_ = false;
  }

  /**
   * Opens the dialog and builds the iframe container.
   * @param {boolean=} hidden
   * @return {!Promise<!Dialog>}
   */


  _createClass(Dialog, [{
    key: 'open',
    value: function open() {
      var _this20 = this;

      var hidden = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      var iframe = this.iframe_;
      if (iframe.isConnected()) {
        throw new Error('already opened');
      }

      // Attach.
      this.doc_.getBody().appendChild(iframe.getElement()); // Fires onload.
      this.graypane_.attach();

      if (hidden) {
        setImportantStyles(iframe.getElement(), {
          'visibility': 'hidden',
          'opacity': 0
        });
        this.hidden_ = hidden;
      } else {
        this.show_();
      }

      return iframe.whenReady().then(function () {
        _this20.buildIframe_();
        return _this20;
      });
    }

    /**
     * Build the iframe with the styling after iframe is loaded.
     * @private
     */

  }, {
    key: 'buildIframe_',
    value: function buildIframe_() {
      var iframe = this.iframe_;
      var iframeBody = iframe.getBody();
      var iframeDoc = /** @type {!HTMLDocument} */this.iframe_.getDocument();

      // Inject Google fonts in <HEAD> section of the iframe.
      injectStyleSheet(iframeDoc, CSS$1);

      // Add Loading indicator.
      this.loadingView_ = new LoadingView(iframeDoc);
      iframeBody.appendChild(this.loadingView_.getElement());

      // Container for all dynamic content, including 3P iframe.
      this.container_ = createElement(iframeDoc, 'swg-container', {});
      iframeBody.appendChild(this.container_);
      this.setPosition_();
    }

    /**
     * Closes the dialog.
     * @param {boolean=} animated
     * @return {!Promise}
     */

  }, {
    key: 'close',
    value: function close() {
      var _this21 = this;

      var animated = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      var animating = void 0;
      if (animated) {
        animating = this.animate_(function () {
          _this21.graypane_.hide( /* animate */true);
          return transition(_this21.getElement(), {
            'transform': 'translateY(100%)'
          }, 300, 'ease-out');
        });
      } else {
        animating = Promise.resolve();
      }
      return animating.then(function () {
        _this21.doc_.getBody().removeChild(_this21.iframe_.getElement());
        _this21.removePaddingToHtml_();
        _this21.graypane_.destroy();
      });
    }

    /**
     * Gets the container within the dialog.
     * @return {!Element}
     */

  }, {
    key: 'getContainer',
    value: function getContainer() {
      if (!this.container_) {
        throw new Error('not opened yet');
      }
      return this.container_;
    }

    /**
     * Gets the attached iframe instance.
     * @return {!FriendlyIframe}
     */

  }, {
    key: 'getIframe',
    value: function getIframe() {
      return this.iframe_;
    }

    /**
     * Gets the Iframe element.
     * @return {!HTMLIFrameElement}
     */

  }, {
    key: 'getElement',
    value: function getElement() {
      return this.iframe_.getElement();
    }

    /**
     * Whether to display loading indicator.
     * @param {boolean} isLoading
     */

  }, {
    key: 'setLoading',
    value: function setLoading(isLoading) {
      if (isLoading) {
        this.loadingView_.show();
      } else {
        this.loadingView_.hide();
      }
    }

    /** @return {?./view.View} */

  }, {
    key: 'getCurrentView',
    value: function getCurrentView() {
      return this.view_;
    }

    /**
     * Opens the given view and removes existing view from the DOM if any.
     * @param {!./view.View} view
     * @return {!Promise}
     */

  }, {
    key: 'openView',
    value: function openView(view) {
      var _this22 = this;

      if (this.view_) {
        // TODO(dparikh): Maybe I need to keep it until the new one is ready.
        removeChildren(this.getContainer());
      }
      this.view_ = view;

      setImportantStyles(view.getElement(), resetViewStyles);
      this.setLoading(true);
      this.getContainer().appendChild(view.getElement());

      // If the current view should fade the parent document.
      if (view.shouldFadeBody() && !this.hidden_) {
        this.graypane_.show( /* animate */true);
      }

      return view.init(this).then(function () {
        setImportantStyles(view.getElement(), {
          'opacity': 1
        });
        if (_this22.hidden_) {
          if (view.shouldFadeBody()) {
            _this22.graypane_.show( /* animated */true);
          }
          _this22.show_();
        }
        _this22.setLoading(false);
      });
    }

    /**
     * Show the iframe
     * @private
     */

  }, {
    key: 'show_',
    value: function show_() {
      var _this23 = this;

      this.animate_(function () {
        setImportantStyles(_this23.getElement(), {
          'transform': 'translateY(100%)',
          'opactiy': 1,
          'visibility': 'visible'
        });
        return transition(_this23.getElement(), {
          'transform': 'translateY(0)',
          'opacity': 1,
          'visibility': 'visible'
        }, 300, 'ease-out');
      });
      this.hidden_ = false;
    }

    /**
     * Resizes the dialog container.
     * @param {!./view.View} view
     * @param {number} height
     * @param {boolean=} animated
     * @return {?Promise}
     */

  }, {
    key: 'resizeView',
    value: function resizeView(view, height) {
      var _this24 = this;

      var animated = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      if (this.view_ != view) {
        return null;
      }
      var newHeight = this.getMaxAllowedHeight_(height);

      var animating = void 0;
      if (animated) {
        var oldHeight = this.getElement().offsetHeight;
        if (newHeight >= oldHeight) {
          // Expand.
          animating = this.animate_(function () {
            setImportantStyles(_this24.getElement(), {
              'height': newHeight + 'px',
              'transform': 'translateY(' + (newHeight - oldHeight) + 'px)'
            });
            return transition(_this24.getElement(), {
              'transform': 'translateY(0)'
            }, 300, 'ease-out');
          });
        } else {
          // Collapse.
          animating = this.animate_(function () {
            return transition(_this24.getElement(), {
              'transform': 'translateY(' + (oldHeight - newHeight) + 'px)'
            }, 300, 'ease-out').then(function () {
              setImportantStyles(_this24.getElement(), {
                'height': newHeight + 'px',
                'transform': 'translateY(0)'
              });
            });
          });
        }
      } else {
        setImportantStyles(this.getElement(), {
          'height': newHeight + 'px'
        });
        animating = Promise.resolve();
      }
      return animating.then(function () {
        _this24.updatePaddingToHtml_(height);
        view.resized();
      });
    }

    /**
     * @param {function():!Promise} callback
     * @return {!Promise}
     * @private
     */

  }, {
    key: 'animate_',
    value: function animate_(callback) {
      var _this25 = this;

      var wait = this.animating_ || Promise.resolve();
      return this.animating_ = wait.then(function () {
        return callback();
      }, function () {
        // Ignore errors to make sure animations don't get stuck.
      }).then(function () {
        _this25.animating_ = null;
      });
    }

    /**
     * Returns maximum allowed height for current viewport.
     * @param {number} height
     * @return {number}
     * @private
     */

  }, {
    key: 'getMaxAllowedHeight_',
    value: function getMaxAllowedHeight_(height) {
      return Math.min(height, this.doc_.getWin(). /*OK*/innerHeight * 0.9);
    }

    /**
     * Gets the element's height.
     * @return {number}
     * @private
     */

  }, {
    key: 'getHeight_',
    value: function getHeight_() {
      return this.getElement().offsetHeight;
    }

    /**
     * Sets the position of the dialog. Currently 'BOTTOM' is set by default.
     */

  }, {
    key: 'setPosition_',
    value: function setPosition_() {
      setImportantStyles(this.getElement(), this.getPositionStyle_());
    }

    /**
     * Add the padding to the containing page so as to not hide the content
     * behind the popup, if rendered at the bottom.
     * @param {number} newHeight
     * @private
     */

  }, {
    key: 'updatePaddingToHtml_',
    value: function updatePaddingToHtml_(newHeight) {
      if (this.inferPosition_() == PositionAt.BOTTOM) {
        var bottomPadding = newHeight + 20; // Add some extra padding.
        var htmlElement = this.doc_.getRootElement();
        setImportantStyles(htmlElement, {
          'padding-bottom': bottomPadding + 'px'
        });
      }
    }

    /**
     * Removes previouly added bottom padding from the document.
     * @private
     */

  }, {
    key: 'removePaddingToHtml_',
    value: function removePaddingToHtml_() {
      this.doc_.getRootElement().style.removeProperty('padding-bottom');
    }

    /**
     * Calculates the position of the dialog. Currently dialog is positioned at
     * the bottom only. This could change in future to adjust the dialog position
     * based on the screen size.
     * @return {string}
     * @private
     */

  }, {
    key: 'inferPosition_',
    value: function inferPosition_() {
      return PositionAt.BOTTOM;
    }

    /**
     * Returns the styles required to postion the dialog.
     * @return {!Object<string, string|number>}
     * @private
     */

  }, {
    key: 'getPositionStyle_',
    value: function getPositionStyle_() {
      var dialogPosition = this.inferPosition_();
      switch (dialogPosition) {
        case PositionAt.BOTTOM:
          return { 'bottom': 0 };
        case PositionAt.TOP:
          return { 'top': 0 };
        case PositionAt.FLOAT:
          return {
            'position': 'fixed',
            'top': '50%',
            'left': '50%',
            'transform': 'translate(-50%, -50%)'
          };
        case PositionAt.FULL:
          return {
            'position': 'fixed',
            'height': '100%',
            'top': 0,
            'bottom': 0
          };
        default:
          return { 'bottom': 0 };
      }
    }
  }]);

  return Dialog;
}();

/**
 * Copyright 2018 The Subscribe with Google Authors. All Rights Reserved.
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

var POPUP_Z_INDEX = 2147483647;

/**
 * The class for the top level dialog.
 * @final
 */

var DialogManager = function () {

  /**
   * @param {!../model/doc.Doc} doc
   */
  function DialogManager(doc) {
    var _this26 = this;

    _classCallCheck(this, DialogManager);

    /** @private @const {!../model/doc.Doc} */
    this.doc_ = doc;

    /** @private {?Dialog} */
    this.dialog_ = null;

    /** @private {?Promise<!Dialog>} */
    this.openPromise_ = null;

    /** @private @const {!Graypane} */
    this.popupGraypane_ = new Graypane(doc, POPUP_Z_INDEX);

    /** @private {?Window} */
    this.popupWin_ = null;

    this.popupGraypane_.getElement().addEventListener('click', function () {
      if (_this26.popupWin_) {
        try {
          _this26.popupWin_.focus();
        } catch (e) {
          // Ignore error.
        }
      }
    });
  }

  /**
   * @param {boolean=} hidden
   * @return {!Promise<!Dialog>}
   */


  _createClass(DialogManager, [{
    key: 'openDialog',
    value: function openDialog() {
      var hidden = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (!this.openPromise_) {
        this.dialog_ = new Dialog(this.doc_);
        this.openPromise_ = this.dialog_.open(hidden);
      }
      return this.openPromise_;
    }

    /**
     * @param {!./view.View} view
     * @param {boolean=} hidden
     * @return {!Promise}
     */

  }, {
    key: 'openView',
    value: function openView(view) {
      var _this27 = this;

      var hidden = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      view.whenComplete().catch(function (reason) {
        if (isCancelError(reason)) {
          _this27.completeView(view);
        }
        throw reason;
      });
      return this.openDialog(hidden).then(function (dialog) {
        return dialog.openView(view);
      });
    }

    /**
     * @param {?./view.View} view
     */

  }, {
    key: 'completeView',
    value: function completeView(view) {
      var _this28 = this;

      // Give a small amount of time for another view to take over the dialog.
      setTimeout(function () {
        if (_this28.dialog_ && _this28.dialog_.getCurrentView() == view) {
          _this28.close_();
        }
      }, 100);
    }

    /**
     */

  }, {
    key: 'completeAll',
    value: function completeAll() {
      if (this.dialog_) {
        this.close_();
      }
      if (this.popupGraypane_.isAttached()) {
        this.popupGraypane_.destroy();
      }
    }

    /** @private */

  }, {
    key: 'close_',
    value: function close_() {
      this.dialog_.close();
      this.dialog_ = null;
      this.openPromise_ = null;
    }

    /**
     * @param {?Window|undefined} targetWin
     */

  }, {
    key: 'popupOpened',
    value: function popupOpened(targetWin) {
      this.popupWin_ = targetWin || null;
      if (!this.popupGraypane_.isAttached()) {
        this.popupGraypane_.attach();
      }
      this.popupGraypane_.show();
    }

    /**
     */

  }, {
    key: 'popupClosed',
    value: function popupClosed() {
      this.popupWin_ = null;
      try {
        this.popupGraypane_.hide();
      } catch (e) {
        // Ignore.
      }
    }
  }]);

  return DialogManager;
}();

/**
 * Copyright 2018 The Subscribe with Google Authors. All Rights Reserved.
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
 * @param {!Document} doc
 * @return {string}
 */


function getReadyState(doc) {
  return (/** @type {string} */doc['readyState']
  );
}

/**
 * Whether the document is ready.
 * @param {!Document} doc
 * @return {boolean}
 */
function isDocumentReady(doc) {
  var readyState = getReadyState(doc);
  return readyState != 'loading' && readyState != 'uninitialized';
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
 * Copyright 2018 The Subscribe with Google Authors. All Rights Reserved.
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

/** @implements {Doc} */

var GlobalDoc = function () {

  /**
   * @param {!Window|!Document} winOrDoc
   */
  function GlobalDoc(winOrDoc) {
    _classCallCheck(this, GlobalDoc);

    var isWin = !!winOrDoc.document;
    /** @private @const {!Window} */
    this.win_ = isWin ?
    /** @type {!Window} */winOrDoc :
    /** @type {!Window} */ /** @type {!Document} */winOrDoc.defaultView;
    /** @private @const {!Document} */
    this.doc_ = isWin ?
    /** @type {!Window} */winOrDoc.document :
    /** @type {!Document} */winOrDoc;
  }

  /** @override */


  _createClass(GlobalDoc, [{
    key: 'getWin',
    value: function getWin() {
      return this.win_;
    }

    /** @override */

  }, {
    key: 'getRootNode',
    value: function getRootNode() {
      return this.doc_;
    }

    /** @override */

  }, {
    key: 'getRootElement',
    value: function getRootElement() {
      return this.doc_.documentElement;
    }

    /** @override */

  }, {
    key: 'getHead',
    value: function getHead() {
      // `document.head` always has a chance to be parsed, at least partially.
      return (/** @type {!Element} */this.doc_.head
      );
    }

    /** @override */

  }, {
    key: 'getBody',
    value: function getBody() {
      return this.doc_.body;
    }

    /** @override */

  }, {
    key: 'isReady',
    value: function isReady() {
      return isDocumentReady(this.doc_);
    }

    /** @override */

  }, {
    key: 'whenReady',
    value: function whenReady() {
      return whenDocumentReady(this.doc_);
    }
  }]);

  return GlobalDoc;
}();

/**
 * @param {!Document|!Window|!Doc} input
 * @return {!Doc}
 */


function resolveDoc(input) {
  // Is it a `Document`
  if ( /** @type {!Document} */input.nodeType === /* DOCUMENT */9) {
    return new GlobalDoc( /** @type {!Document} */input);
  }
  // Is it a `Window`?
  if ( /** @type {!Window} */input.document) {
    return new GlobalDoc( /** @type {!Window} */input);
  }
  return (/** @type {!Doc} */input
  );
}

/**
 * Copyright 2018 The Subscribe with Google Authors. All Rights Reserved.
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

/** @const {!Object<string, string|number>} */
var toastImportantStyles = {
  'height': 0
};

/** @const {!Object<string, string>} */
var iframeAttributes$1 = {
  'frameborder': '0',
  'scrolling': 'no',
  'class': 'swg-toast'
};

/**
 * The class Notification toast.
 */

var Toast = function () {

  /**
   * @param {!../runtime/deps.DepsDef} deps
   * @param {string} src
   * @param {!Object<string, ?>} args
   */
  function Toast(deps, src, args) {
    var _this29 = this;

    _classCallCheck(this, Toast);

    /** @private @const {!../model/doc.Doc} */
    this.doc_ = deps.doc();

    /** @private @const {!web-activities/activity-ports.ActivityPorts} */
    this.activityPorts_ = deps.activities();

    /** @private @const {string} */
    this.src_ = src;

    /** @private @const {!Object<string, ?>} */
    this.args_ = args;

    /** @private {?Promise} */
    this.animating_ = null;

    /** @private @const {!HTMLIFrameElement} */
    this.iframe_ =
    /** @type {!HTMLIFrameElement} */createElement(this.doc_.getWin().document, 'iframe', iframeAttributes$1);

    setImportantStyles(this.iframe_, toastImportantStyles);

    /** @private @const {!Promise} */
    this.ready_ = new Promise(function (resolve) {
      _this29.iframe_.onload = resolve;
    });
  }

  /**
   * Returns the iframe element.
   * @return {!HTMLIFrameElement}
   */


  _createClass(Toast, [{
    key: 'getElement',
    value: function getElement() {
      return this.iframe_;
    }

    /**
     * Opens the notification toast.
     * @return {!Promise}
     */

  }, {
    key: 'open',
    value: function open() {
      this.doc_.getBody().appendChild(this.iframe_); // Fires onload.
      return this.buildToast_();
    }

    /**
     * Builds the content of the iframe. On load, animates the toast.
     */

  }, {
    key: 'buildToast_',
    value: function buildToast_() {
      var _this30 = this;

      var toastDurationSeconds = 7;
      return this.activityPorts_.openIframe(this.iframe_, this.src_, this.args_).then(function (port) {
        return port.whenReady();
      }).then(function () {
        resetStyles(_this30.iframe_, ['height']);

        _this30.animate_(function () {
          setImportantStyles(_this30.iframe_, {
            'transform': 'translateY(100%)',
            'opactiy': 1,
            'visibility': 'visible'
          });
          return transition(_this30.iframe_, {
            'transform': 'translateY(0)',
            'opacity': 1,
            'visibility': 'visible'
          }, 400, 'ease-out');
        });

        // Close the Toast after the specified duration.
        _this30.doc_.getWin().setTimeout(function () {
          _this30.close();
        }, (toastDurationSeconds + 1) * 1000);
      });
    }

    /**
     * @param {function():!Promise} callback
     * @return {!Promise}
     * @private
     */

  }, {
    key: 'animate_',
    value: function animate_(callback) {
      var _this31 = this;

      var wait = this.animating_ || Promise.resolve();
      return this.animating_ = wait.then(function () {
        return callback();
      }, function () {
        // Ignore errors to make sure animations don't get stuck.
      }).then(function () {
        _this31.animating_ = null;
      });
    }

    /**
     * Closes the toast.
     * @return {!Promise}
     */

  }, {
    key: 'close',
    value: function close() {
      var _this32 = this;

      return this.animate_(function () {
        // Remove the toast from the DOM after animation is complete.
        _this32.doc_.getWin().setTimeout(function () {
          _this32.doc_.getBody().removeChild(_this32.iframe_);
          return Promise.resolve();
        }, 500);

        return transition(_this32.iframe_, {
          'transform': 'translateY(100%)',
          'opacity': 1,
          'visibility': 'visible'
        }, 400, 'ease-out');
      });
    }
  }]);

  return Toast;
}();

/**
 * Copyright 2018 The Subscribe with Google Authors. All Rights Reserved.
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

var SERVICE_ID = 'subscribe.google.com';
var TOAST_STORAGE_KEY = 'toast';
var ENTS_STORAGE_KEY = 'ents';

/**
 */

var EntitlementsManager = function () {

  /**
   * @param {!Window} win
   * @param {!../model/page-config.PageConfig} config
   * @param {!./fetcher.Fetcher} fetcher
   * @param {!./deps.DepsDef} deps
   */
  function EntitlementsManager(win, config, fetcher, deps) {
    _classCallCheck(this, EntitlementsManager);

    /** @private @const {!Window} */
    this.win_ = win;

    /** @private @const {!../model/page-config.PageConfig} */
    this.config_ = config;

    /** @private @const {string} */
    this.publicationId_ = this.config_.getPublicationId();

    /** @private @const {!./fetcher.Fetcher} */
    this.fetcher_ = fetcher;

    /** @private @const {!./deps.DepsDef} */
    this.deps_ = deps;

    /** @private @const {!JwtHelper} */
    this.jwtHelper_ = new JwtHelper();

    /** @private {?Promise<!Entitlements>} */
    this.responsePromise_ = null;

    /** @private {number} */
    this.positiveRetries_ = 0;

    /** @private {boolean} */
    this.blockNextNotification_ = false;

    /** @private @const {!./storage.Storage} */
    this.storage_ = deps.storage();
  }

  /**
   * @param {boolean=} opt_expectPositive
   */


  _createClass(EntitlementsManager, [{
    key: 'reset',
    value: function reset(opt_expectPositive) {
      this.responsePromise_ = null;
      this.positiveRetries_ = Math.max(this.positiveRetries_, opt_expectPositive ? 3 : 0);
      if (opt_expectPositive) {
        this.storage_.remove(ENTS_STORAGE_KEY);
      }
    }

    /**
     * @return {!Promise<!Entitlements>}
     */

  }, {
    key: 'getEntitlements',
    value: function getEntitlements() {
      if (!this.responsePromise_) {
        this.responsePromise_ = this.getEntitlementsFlow_();
      }
      return this.responsePromise_;
    }

    /**
     * @param {string} raw
     * @return {boolean}
     */

  }, {
    key: 'pushNextEntitlements',
    value: function pushNextEntitlements(raw) {
      var entitlements = this.getValidJwtEntitlements_(raw, /* requireNonExpired */true);
      if (entitlements && entitlements.enablesThis()) {
        this.storage_.set(ENTS_STORAGE_KEY, raw);
        return true;
      }
      return false;
    }

    /**
     * @return {!Promise<!Entitlements>}
     * @private
     */

  }, {
    key: 'getEntitlementsFlow_',
    value: function getEntitlementsFlow_() {
      var _this33 = this;

      return this.fetchEntitlementsWithCaching_().then(function (entitlements) {
        _this33.onEntitlementsFetched_(entitlements);
        return entitlements;
      });
    }

    /**
     * @return {!Promise<!Entitlements>}
     * @private
     */

  }, {
    key: 'fetchEntitlementsWithCaching_',
    value: function fetchEntitlementsWithCaching_() {
      var _this34 = this;

      return this.storage_.get(ENTS_STORAGE_KEY).then(function (raw) {
        // Try cache first.
        if (raw) {
          var cached = _this34.getValidJwtEntitlements_(raw, /* requireNonExpired */true);
          if (cached && cached.enablesThis()) {
            // Already have a positive response.
            _this34.positiveRetries_ = 0;
            return cached;
          }
        }
        // If cache didn't match, perform fetch.
        return _this34.fetchEntitlements_().then(function (ents) {
          // If entitlements match the product, store them in cache.
          if (ents && ents.enablesThis() && ents.raw) {
            _this34.storage_.set(ENTS_STORAGE_KEY, ents.raw);
          }
          return ents;
        });
      });
    }

    /**
     * @return {!Promise<!Entitlements>}
     * @private
     */

  }, {
    key: 'fetchEntitlements_',
    value: function fetchEntitlements_() {
      var _this35 = this;

      // TODO(dvoytenko): Replace retries with consistent fetch.
      var positiveRetries = this.positiveRetries_;
      this.positiveRetries_ = 0;
      var attempt = function attempt() {
        positiveRetries--;
        return _this35.fetch_().then(function (entitlements) {
          if (entitlements.enablesThis() || positiveRetries <= 0) {
            return entitlements;
          }
          return new Promise(function (resolve) {
            _this35.win_.setTimeout(function () {
              resolve(attempt());
            }, 550);
          });
        });
      };
      return attempt();
    }

    /**
     * @param {boolean} value
     */

  }, {
    key: 'setToastShown',
    value: function setToastShown(value) {
      this.storage_.set(TOAST_STORAGE_KEY, value ? '1' : '0');
    }

    /**
     */

  }, {
    key: 'blockNextNotification',
    value: function blockNextNotification() {
      this.blockNextNotification_ = true;
    }

    /**
     */

  }, {
    key: 'unblockNextNotification',
    value: function unblockNextNotification() {
      this.blockNextNotification_ = false;
    }

    /**
     * The JSON must either contain a "signedEntitlements" with JWT, or
     * "entitlements" field with plain JSON object.
     * @param {!Object} json
     * @return {!Entitlements}
     */

  }, {
    key: 'parseEntitlements',
    value: function parseEntitlements(json) {
      var signedData = json['signedEntitlements'];
      if (signedData) {
        var entitlements = this.getValidJwtEntitlements_(signedData, /* requireNonExpired */false);
        if (entitlements) {
          return entitlements;
        }
      } else {
        var plainEntitlements = json['entitlements'];
        if (plainEntitlements) {
          return this.createEntitlements_('', plainEntitlements);
        }
      }
      // Empty response.
      return this.createEntitlements_('', []);
    }

    /**
     * @param {string} raw
     * @param {boolean} requireNonExpired
     * @return {?Entitlements}
     * @private
     */

  }, {
    key: 'getValidJwtEntitlements_',
    value: function getValidJwtEntitlements_(raw, requireNonExpired) {
      try {
        var jwt = this.jwtHelper_.decode(raw);
        if (requireNonExpired) {
          var now = Date.now();
          var exp = jwt['exp'];
          if (parseFloat(exp) * 1000 < now) {
            return null;
          }
        }
        var entitlementsClaim = jwt['entitlements'];
        return entitlementsClaim && this.createEntitlements_(raw, entitlementsClaim) || null;
      } catch (e) {
        // Ignore the error.
        this.win_.setTimeout(function () {
          throw e;
        });
      }
      return null;
    }

    /**
     * @param {string} raw
     * @param {!Object|!Array<!Object>} json
     * @return {!Entitlements}
     * @private
     */

  }, {
    key: 'createEntitlements_',
    value: function createEntitlements_(raw, json) {
      return new Entitlements(SERVICE_ID, raw, Entitlement.parseListFromJson(json), this.config_.getProductId(), this.ack_.bind(this));
    }

    /**
     * @param {!Entitlements} entitlements
     * @private
     */

  }, {
    key: 'onEntitlementsFetched_',
    value: function onEntitlementsFetched_(entitlements) {
      // Skip any notifications and toast if other flows are ongoing.
      // TODO(dvoytenko): what's the right action when pay flow was canceled?
      var blockNotification = this.blockNextNotification_;
      this.blockNextNotification_ = false;
      if (blockNotification) {
        return;
      }

      // Notify on the received entitlements.
      this.deps_.callbacks().triggerEntitlementsResponse(Promise.resolve(entitlements));

      // Show a toast if needed.
      this.maybeShowToast_(entitlements);
    }

    /**
     * @param {!Entitlements} entitlements
     * @return {!Promise}
     * @private
     */

  }, {
    key: 'maybeShowToast_',
    value: function maybeShowToast_(entitlements) {
      var _this36 = this;

      var entitlement = entitlements.getEntitlementForThis();
      if (!entitlement) {
        return Promise.resolve();
      }
      // Check if storage bit is set. It's only set by the `Entitlements.ack`
      // method.
      return this.storage_.get(TOAST_STORAGE_KEY).then(function (value) {
        if (value == '1') {
          // Already shown;
          return;
        }
        if (entitlement) {
          _this36.showToast_(entitlement);
        }
      });
    }

    /**
     * @param {!Entitlement} entitlement
     * @private
     */

  }, {
    key: 'showToast_',
    value: function showToast_(entitlement) {
      var source = entitlement.source || 'google';
      return new Toast(this.deps_, feUrl('/toastiframe'), feArgs({
        'publicationId': this.publicationId_,
        'source': source
      })).open();
    }

    /**
     * @param {!Entitlements} entitlements
     * @private
     */

  }, {
    key: 'ack_',
    value: function ack_(entitlements) {
      if (entitlements.getEntitlementForThis()) {
        this.setToastShown(true);
      }
    }

    /**
     * @return {!Promise<!Entitlements>}
     * @private
     */

  }, {
    key: 'fetch_',
    value: function fetch_() {
      var _this37 = this;

      var url = serviceUrl('/publication/' + encodeURIComponent(this.publicationId_) + '/entitlements');
      return this.fetcher_.fetchCredentialedJson(url).then(function (json) {
        return _this37.parseEntitlements(json);
      });
    }
  }]);

  return EntitlementsManager;
}();

/**
 * Copyright 2018 The Subscribe with Google Authors. All Rights Reserved.
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
 * @interface
 */


var Fetcher = function () {
  function Fetcher() {
    _classCallCheck(this, Fetcher);
  }

  _createClass(Fetcher, [{
    key: 'fetchCredentialedJson',


    /**
     * @param {string} unusedUrl
     * @return {!Promise<!Object>}
     */
    value: function fetchCredentialedJson(unusedUrl) {}
  }]);

  return Fetcher;
}();

/**
 * @implements {Fetcher}
 */


var XhrFetcher = function () {

  /**
   * @param {!Window} win
   */
  function XhrFetcher(win) {
    _classCallCheck(this, XhrFetcher);

    /** @const {!Xhr} */
    this.xhr_ = new Xhr(win);
  }

  /** @override */


  _createClass(XhrFetcher, [{
    key: 'fetchCredentialedJson',
    value: function fetchCredentialedJson(url) {
      var init = /** @type {!../utils/xhr.FetchInitDef} */{
        method: 'GET',
        headers: { 'Accept': 'text/plain, application/json' },
        credentials: 'include'
      };
      return this.xhr_.fetch(url, init).then(function (response) {
        return response.json();
      });
    }
  }]);

  return XhrFetcher;
}();

/**
 * Copyright 2018 The Subscribe with Google Authors. All Rights Reserved.
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
 * @param {!web-activities/activity-ports.ActivityPort} port
 * @param {string} requireOrigin
 * @param {boolean} requireOriginVerified
 * @param {boolean} requireSecureChannel
 * @return {!Promise<!Object>}
 */


function acceptPortResultData(port, requireOrigin, requireOriginVerified, requireSecureChannel) {
  return port.acceptResult().then(function (result) {
    if (result.origin != requireOrigin || requireOriginVerified && !result.originVerified || requireSecureChannel && !result.secureChannel) {
      throw new Error('channel mismatch');
    }
    return result.data;
  });
}

/**
 * Copyright 2018 The Subscribe with Google Authors. All Rights Reserved.
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

var LINK_REQUEST_ID = 'swg-link';

/**
 * The flow to initiate linkback flow.
 */

var LinkbackFlow = function () {

  /**
   * @param {!./deps.DepsDef} deps
   */
  function LinkbackFlow(deps) {
    _classCallCheck(this, LinkbackFlow);

    /** @private @const {!./deps.DepsDef} */
    this.deps_ = deps;

    /** @private @const {!web-activities/activity-ports.ActivityPorts} */
    this.activityPorts_ = deps.activities();

    /** @private @const {!../model/page-config.PageConfig} */
    this.pageConfig_ = deps.pageConfig();

    /** @private @const {!../components/dialog-manager.DialogManager} */
    this.dialogManager_ = deps.dialogManager();
  }

  /**
   * Starts the Link account flow.
   * @return {!Promise}
   */


  _createClass(LinkbackFlow, [{
    key: 'start',
    value: function start() {
      this.deps_.callbacks().triggerFlowStarted(SubscriptionFlows.LINK_ACCOUNT);
      var forceRedirect = this.deps_.config().windowOpenMode == WindowOpenMode.REDIRECT;
      var opener = this.activityPorts_.open(LINK_REQUEST_ID, feUrl('/linkbackstart'), forceRedirect ? '_top' : '_blank', feArgs({
        'publicationId': this.pageConfig_.getPublicationId()
      }), {});
      this.dialogManager_.popupOpened(opener && opener.targetWin);
      return Promise.resolve();
    }
  }]);

  return LinkbackFlow;
}();

/**
 * The class for Link accounts flow.
 */


var LinkCompleteFlow = function () {
  _createClass(LinkCompleteFlow, null, [{
    key: 'configurePending',


    /**
     * @param {!./deps.DepsDef} deps
     */
    value: function configurePending(deps) {
      /**
       * Handler function.
       * @param {!web-activities/activity-ports.ActivityPort} port
       */
      function handler(port) {
        deps.entitlementsManager().blockNextNotification();
        deps.callbacks().triggerLinkProgress();
        deps.dialogManager().popupClosed();
        var promise = acceptPortResultData(port, feOrigin(),
        /* requireOriginVerified */false,
        /* requireSecureChannel */false);
        return promise.then(function (response) {
          var flow = new LinkCompleteFlow(deps, response);
          flow.start();
        }, function (reason) {
          if (isCancelError(reason)) {
            deps.callbacks().triggerFlowCanceled(SubscriptionFlows.LINK_ACCOUNT);
          }
        });
      }deps.activities().onResult(LINK_REQUEST_ID, handler);
    }

    /**
     * @param {!./deps.DepsDef} deps
     * @param {?Object} response
     */

  }]);

  function LinkCompleteFlow(deps, response) {
    var _this38 = this;

    _classCallCheck(this, LinkCompleteFlow);

    /** @private @const {!Window} */
    this.win_ = deps.win();

    /** @private @const {!web-activities/activity-ports.ActivityPorts} */
    this.activityPorts_ = deps.activities();

    /** @private @const {!../components/dialog-manager.DialogManager} */
    this.dialogManager_ = deps.dialogManager();

    /** @private @const {!./entitlements-manager.EntitlementsManager} */
    this.entitlementsManager_ = deps.entitlementsManager();

    /** @private @const {!./callbacks.Callbacks} */
    this.callbacks_ = deps.callbacks();

    var index = response && response['index'] || '0';
    /** @private @const {!ActivityIframeView} */
    this.activityIframeView_ = new ActivityIframeView(this.win_, this.activityPorts_, feUrl('/linkconfirmiframe', '/u/' + index), feArgs({
      'productId': deps.pageConfig().getProductId(),
      'publicationId': deps.pageConfig().getPublicationId()
    }),
    /* shouldFadeBody */true);

    /** @private {?function()} */
    this.completeResolver_ = null;

    /** @private @const {!Promise} */
    this.completePromise_ = new Promise(function (resolve) {
      _this38.completeResolver_ = resolve;
    });
  }

  /**
   * Starts the Link account flow.
   * @return {!Promise}
   */


  _createClass(LinkCompleteFlow, [{
    key: 'start',
    value: function start() {
      var _this39 = this;

      var promise = this.activityIframeView_.port().then(function (port) {
        return acceptPortResultData(port, feOrigin(),
        /* requireOriginVerified */true,
        /* requireSecureChannel */true);
      });
      promise.then(function (response) {
        _this39.complete_(response);
      }).catch(function (reason) {
        // Rethrow async.
        setTimeout(function () {
          throw reason;
        });
      }).then(function () {
        // The flow is complete.
        _this39.dialogManager_.completeView(_this39.activityIframeView_);
      });
      return this.dialogManager_.openView(this.activityIframeView_);
    }

    /**
     * @param {?Object} response
     * @private
     */

  }, {
    key: 'complete_',
    value: function complete_(response) {
      this.callbacks_.triggerLinkComplete();
      this.callbacks_.resetLinkProgress();
      this.entitlementsManager_.setToastShown(true);
      this.entitlementsManager_.unblockNextNotification();
      this.entitlementsManager_.reset(response && response['success'] || false);
      if (response && response['entitlements']) {
        this.entitlementsManager_.pushNextEntitlements(response['entitlements']);
      }
      this.completeResolver_();
    }

    /** @return {!Promise} */

  }, {
    key: 'whenComplete',
    value: function whenComplete() {
      return this.completePromise_;
    }
  }]);

  return LinkCompleteFlow;
}();

/**
 * The flow to save subscription information.
 */


var LinkSaveFlow = function () {

  /**
   * @param {!./deps.DepsDef} deps
   * @param {!../api/subscriptions.SaveSubscriptionRequestCallback} callback
   */
  function LinkSaveFlow(deps, callback) {
    _classCallCheck(this, LinkSaveFlow);

    /** @private @const {!Window} */
    this.win_ = deps.win();

    /** @private @const {!./deps.DepsDef} */
    this.deps_ = deps;

    /** @private @const {!web-activities/activity-ports.ActivityPorts} */
    this.activityPorts_ = deps.activities();

    /** @private @const {!../components/dialog-manager.DialogManager} */
    this.dialogManager_ = deps.dialogManager();

    /** @private {!../api/subscriptions.SaveSubscriptionRequestCallback} */
    this.callback_ = callback;

    /** @private {?Promise<!../api/subscriptions.SaveSubscriptionRequest>} */
    this.requestPromise_ = null;

    /** @private {?ActivityIframeView} */
    this.activityIframeView_ = null;
  }

  /**
   * @return {?Promise<!../api/subscriptions.SaveSubscriptionRequest>}
   * @package Visible for testing.
   */


  _createClass(LinkSaveFlow, [{
    key: 'getRequestPromise',
    value: function getRequestPromise() {
      return this.requestPromise_;
    }
    /**
     * Starts the save subscription
     * @return {!Promise}
     */

  }, {
    key: 'start',
    value: function start() {
      var _this40 = this;

      var iframeArgs = {
        'publicationId': this.deps_.pageConfig().getPublicationId(),
        'isClosable': true
      };

      this.activityIframeView_ = new ActivityIframeView(this.win_, this.activityPorts_, feUrl('/linksaveiframe'), feArgs(iframeArgs),
      /* shouldFadeBody */false);
      this.activityIframeView_.onMessage(function (data) {
        if (data['getLinkingInfo']) {
          _this40.requestPromise_ = new Promise(function (resolve) {
            resolve(_this40.callback_());
          }).then(function (request) {
            var saveRequest = void 0;
            if (request && request.token) {
              if (request.authCode) {
                throw new Error('Both authCode and token are available');
              } else {
                saveRequest = { 'token': request.token };
              }
            } else if (request && request.authCode) {
              saveRequest = { 'authCode': request.authCode };
            } else {
              throw new Error('Neither token or authCode is available');
            }
            _this40.activityIframeView_.message(saveRequest);
          }).catch(function (reason) {
            // The flow is complete.
            _this40.dialogManager_.completeView(_this40.activityIframeView_);
            throw reason;
          });
        }
      });
      /** {!Promise<boolean>} */
      return this.dialogManager_.openView(this.activityIframeView_,
      /* hidden */true).then(function () {
        return _this40.activityIframeView_.port().then(function (port) {
          return acceptPortResultData(port, feOrigin(),
          /* requireOriginVerified */true,
          /* requireSecureChannel */true);
        }).then(function (result) {
          return result['linked'];
        }).catch(function () {
          return false;
        }).then(function (result) {
          // The flow is complete.
          _this40.dialogManager_.completeView(_this40.activityIframeView_);
          return result;
        });
      });
    }
  }]);

  return LinkSaveFlow;
}();

/**
 * Copyright 2018 The Subscribe with Google Authors. All Rights Reserved.
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

var LoginPromptApi = function () {
  /**
   * @param {!./deps.DepsDef} deps
   */
  function LoginPromptApi(deps) {
    _classCallCheck(this, LoginPromptApi);

    /** @private @const {!./deps.DepsDef} */
    this.deps_ = deps;

    /** @private @const {!Window} */
    this.win_ = deps.win();

    /** @private @const {!web-activities/activity-ports.ActivityPorts} */
    this.activityPorts_ = deps.activities();

    /** @private @const {!../components/dialog-manager.DialogManager} */
    this.dialogManager_ = deps.dialogManager();

    /** @private {?Promise} */
    this.openViewPromise_ = null;

    /** @private @const {!ActivityIframeView} */
    this.activityIframeView_ = new ActivityIframeView(this.win_, this.activityPorts_, feUrl('/loginiframe'), feArgs({
      publicationId: deps.pageConfig().getPublicationId(),
      productId: deps.pageConfig().getProductId(),
      // First ask the user if they want us to log them in.
      userConsent: true
      // TODO(chenshay): Pass entitlements value here.
    }),
    /* shouldFadeBody */true);
  }

  /**
   * Prompts the user to login.
   * @return {!Promise}
   */


  _createClass(LoginPromptApi, [{
    key: 'start',
    value: function start() {
      var _this41 = this;

      this.deps_.callbacks().triggerFlowStarted(SubscriptionFlows.SHOW_LOGIN_PROMPT);

      this.openViewPromise_ = this.dialogManager_.openView(this.activityIframeView_);

      return this.activityIframeView_.acceptResult().then(function () {
        // The consent part is complete.
        _this41.dialogManager_.completeView(_this41.activityIframeView_);
      }, function (reason) {
        if (isCancelError(reason)) {
          _this41.deps_.callbacks().triggerFlowCanceled(SubscriptionFlows.SHOW_LOGIN_PROMPT);
        } else {
          _this41.dialogManager_.completeView(_this41.activityIframeView_);
        }
        throw reason;
      });
    }
  }]);

  return LoginPromptApi;
}();

/**
 * Copyright 2018 The Subscribe with Google Authors. All Rights Reserved.
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

var LoginNotificationApi = function () {
  /**
   * @param {!./deps.DepsDef} deps
   */
  function LoginNotificationApi(deps) {
    _classCallCheck(this, LoginNotificationApi);

    /** @private @const {!./deps.DepsDef} */
    this.deps_ = deps;

    /** @private @const {!Window} */
    this.win_ = deps.win();

    /** @private @const {!web-activities/activity-ports.ActivityPorts} */
    this.activityPorts_ = deps.activities();

    /** @private @const {!../components/dialog-manager.DialogManager} */
    this.dialogManager_ = deps.dialogManager();

    /** @private {?Promise} */
    this.openViewPromise_ = null;

    /** @private @const {!ActivityIframeView} */
    this.activityIframeView_ = new ActivityIframeView(this.win_, this.activityPorts_, feUrl('/loginiframe'), feArgs({
      publicationId: deps.pageConfig().getPublicationId(),
      productId: deps.pageConfig().getProductId(),
      // No need to ask the user. Just tell them you're logging them in.
      userConsent: false
      // TODO(chenshay): Pass entitlements value here.
    }),
    /* shouldFadeBody */true);
  }

  /**
   * Continues the Login flow (after waiting).
   * @return {!Promise}
   */


  _createClass(LoginNotificationApi, [{
    key: 'start',
    value: function start() {
      var _this42 = this;

      this.deps_.callbacks().triggerFlowStarted(SubscriptionFlows.SHOW_LOGIN_NOTIFICATION);

      this.openViewPromise_ = this.dialogManager_.openView(this.activityIframeView_);

      return this.activityIframeView_.acceptResult().then(function () {
        // The consent part is complete.
        _this42.dialogManager_.completeView(_this42.activityIframeView_);
      }, function (reason) {
        _this42.dialogManager_.completeView(_this42.activityIframeView_);
        throw reason;
      });
    }
  }]);

  return LoginNotificationApi;
}();

/**
 * Copyright 2018 The Subscribe with Google Authors. All Rights Reserved.
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

var WaitForSubscriptionLookupApi = function () {
  /**
   * @param {!./deps.DepsDef} deps
   * @param {?Promise} accountPromise
   */
  function WaitForSubscriptionLookupApi(deps, accountPromise) {
    _classCallCheck(this, WaitForSubscriptionLookupApi);

    /** @private @const {!./deps.DepsDef} */
    this.deps_ = deps;

    /** @private @const {!Window} */
    this.win_ = deps.win();

    /** @private @const {!web-activities/activity-ports.ActivityPorts} */
    this.activityPorts_ = deps.activities();

    /** @private @const {!../components/dialog-manager.DialogManager} */
    this.dialogManager_ = deps.dialogManager();

    /** @private {?Promise} */
    this.openViewPromise_ = null;

    /** @private {?Promise} */
    this.accountPromise_ = accountPromise || null;

    /** @private @const {!ActivityIframeView} */
    this.activityIframeView_ = new ActivityIframeView(this.win_, this.activityPorts_, feUrl('/waitforsubscriptionlookupiframe'), feArgs({
      publicationId: deps.pageConfig().getPublicationId(),
      productId: deps.pageConfig().getProductId()
    }),
    /* shouldFadeBody */true);
  }

  /**
   * Starts the Login Flow.
   * @return {!Promise}
   */


  _createClass(WaitForSubscriptionLookupApi, [{
    key: 'start',
    value: function start() {
      var _this43 = this;

      this.openViewPromise_ = this.dialogManager_.openView(this.activityIframeView_);

      return this.accountPromise_.then(function (account) {
        // Account was found.
        _this43.dialogManager_.completeView(_this43.activityIframeView_);
        return account;
      }, function (reason) {
        _this43.dialogManager_.completeView(_this43.activityIframeView_);
        throw reason;
      });
    }
  }]);

  return WaitForSubscriptionLookupApi;
}();

/**
 * Copyright 2018 The Subscribe with Google Authors. All Rights Reserved.
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

var OffersApi = function () {

  /**
   * @param {!../model/page-config.PageConfig} config
   * @param {!./fetcher.Fetcher} fetcher
   */
  function OffersApi(config, fetcher) {
    _classCallCheck(this, OffersApi);

    /** @private @const {!../model/page-config.PageConfig} */
    this.config_ = config;

    /** @private @const {!./fetcher.Fetcher} */
    this.fetcher_ = fetcher;
  }

  /**
   * @param {string=} opt_productId
   * @return {!Promise<!Array<!../api/offer.Offer>>}
   */


  _createClass(OffersApi, [{
    key: 'getOffers',
    value: function getOffers(opt_productId) {
      var productId = opt_productId || this.config_.getProductId();
      if (!productId) {
        throw new Error('getOffers requires productId in config or arguments');
      }
      return this.fetch_(productId);
    }

    /**
     * @param {string} productId
     * @return {!Promise<!Array<!../api/offer.Offer>>}
     * @private
     */

  }, {
    key: 'fetch_',
    value: function fetch_(productId) {
      var url = serviceUrl('/publication/' + encodeURIComponent(this.config_.getPublicationId()) + '/offers' + '?label=' + encodeURIComponent(productId));
      // TODO(dvoytenko): switch to a non-credentialed request after launch.
      return this.fetcher_.fetchCredentialedJson(url).then(function (json) {
        return json['offers'] || [];
      });
    }
  }]);

  return OffersApi;
}();

/**
 * Copyright 2018 The Subscribe with Google Authors. All Rights Reserved.
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
 * Offers view is closable when request was originated from 'AbbrvOfferFlow'
 * or from 'SubscribeOptionFlow'.
 */


var OFFERS_VIEW_CLOSABLE = true;

/**
 * The class for Offers flow.
 */

var OffersFlow = function () {

  /**
   * @param {!./deps.DepsDef} deps
   * @param {!../api/subscriptions.OffersRequest|undefined} options
   */
  function OffersFlow(deps, options) {
    _classCallCheck(this, OffersFlow);

    /** @private @const {!./deps.DepsDef} */
    this.deps_ = deps;

    /** @private @const {!Window} */
    this.win_ = deps.win();

    /** @private @const {!web-activities/activity-ports.ActivityPorts} */
    this.activityPorts_ = deps.activities();

    /** @private @const {!../components/dialog-manager.DialogManager} */
    this.dialogManager_ = deps.dialogManager();

    var isClosable = options && options.isClosable;
    if (isClosable == undefined) {
      isClosable = false; // Default is to hide Close button.
    }

    /** @private @const {!ActivityIframeView} */
    this.activityIframeView_ = new ActivityIframeView(this.win_, this.activityPorts_, feUrl('/offersiframe'), feArgs({
      'productId': deps.pageConfig().getProductId(),
      'publicationId': deps.pageConfig().getPublicationId(),
      'showNative': deps.callbacks().hasSubscribeRequestCallback(),
      'list': options && options.list || 'default',
      'skus': options && options.skus || null,
      'isClosable': isClosable
    }),
    /* shouldFadeBody */true);
  }

  /**
   * Starts the offers flow or alreadySubscribed flow.
   * @return {!Promise}
   */


  _createClass(OffersFlow, [{
    key: 'start',
    value: function start() {
      var _this44 = this;

      // Start/cancel events.
      this.deps_.callbacks().triggerFlowStarted(SubscriptionFlows.SHOW_OFFERS);
      this.activityIframeView_.onCancel(function () {
        _this44.deps_.callbacks().triggerFlowCanceled(SubscriptionFlows.SHOW_OFFERS);
      });

      // If result is due to OfferSelection, redirect to payments.
      this.activityIframeView_.onMessage(function (result) {
        if (result['alreadySubscribed']) {
          _this44.deps_.callbacks().triggerLoginRequest({
            linkRequested: !!result['linkRequested']
          });
          return;
        }
        if (result['sku']) {
          new PayStartFlow(_this44.deps_,
          /** @type {string} */result['sku']).start();
          return;
        }
        if (result['native']) {
          _this44.deps_.callbacks().triggerSubscribeRequest();
          return;
        }
      });

      return this.dialogManager_.openView(this.activityIframeView_);
    }
  }]);

  return OffersFlow;
}();

/**
 * The class for subscribe option flow.
 */


var SubscribeOptionFlow = function () {

  /**
   * @param {!./deps.DepsDef} deps
   * @param {!../api/subscriptions.OffersRequest|undefined} options
   */
  function SubscribeOptionFlow(deps, options) {
    _classCallCheck(this, SubscribeOptionFlow);

    /** @private @const {!./deps.DepsDef} */
    this.deps_ = deps;

    /** @private @const {!../api/subscriptions.OffersRequest|undefined} */
    this.options_ = options;

    /** @private @const {!web-activities/activity-ports.ActivityPorts} */
    this.activityPorts_ = deps.activities();

    /** @private @const {!../components/dialog-manager.DialogManager} */
    this.dialogManager_ = deps.dialogManager();

    /** @private @const {!ActivityIframeView} */
    this.activityIframeView_ = new ActivityIframeView(deps.win(), this.activityPorts_, feUrl('/optionsiframe'), feArgs({
      'publicationId': deps.pageConfig().getPublicationId(),
      'productId': deps.pageConfig().getProductId(),
      'list': options && options.list || 'default',
      'skus': options && options.skus || null,
      'isClosable': true
    }),
    /* shouldFadeBody */false);
  }

  /**
   * Starts the offers flow or alreadySubscribed flow.
   * @return {!Promise}
   */


  _createClass(SubscribeOptionFlow, [{
    key: 'start',
    value: function start() {
      var _this45 = this;

      // Start/cancel events.
      this.deps_.callbacks().triggerFlowStarted(SubscriptionFlows.SHOW_SUBSCRIBE_OPTION);
      this.activityIframeView_.onCancel(function () {
        _this45.deps_.callbacks().triggerFlowCanceled(SubscriptionFlows.SHOW_SUBSCRIBE_OPTION);
      });

      this.activityIframeView_.onMessage(function (data) {
        _this45.maybeOpenOffersFlow_(data);
      });
      this.activityIframeView_.acceptResult().then(function (result) {
        _this45.maybeOpenOffersFlow_(result.data);
      }, function (reason) {
        _this45.dialogManager_.completeView(_this45.activityIframeView_);
        throw reason;
      });
      return this.dialogManager_.openView(this.activityIframeView_);
    }

    /**
     * @param {*} data
     * @private
     */

  }, {
    key: 'maybeOpenOffersFlow_',
    value: function maybeOpenOffersFlow_(data) {
      if (data && data['subscribe']) {
        var options = this.options_ || {};
        if (options.isClosable == undefined) {
          options.isClosable = OFFERS_VIEW_CLOSABLE;
        }
        new OffersFlow(this.deps_, options).start();
      }
    }
  }]);

  return SubscribeOptionFlow;
}();

/**
 * The class for Abbreviated Offer flow.
 *
 */


var AbbrvOfferFlow = function () {

  /**
   * @param {!./deps.DepsDef} deps
   * @param {!../api/subscriptions.OffersRequest=} options
   */
  function AbbrvOfferFlow(deps) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, AbbrvOfferFlow);

    /** @private @const {!./deps.DepsDef} */
    this.deps_ = deps;

    /** @private @const {!../api/subscriptions.OffersRequest|undefined} */
    this.options_ = options;

    /** @private @const {!Window} */
    this.win_ = deps.win();

    /** @private @const {!web-activities/activity-ports.ActivityPorts} */
    this.activityPorts_ = deps.activities();

    /** @private @const {!../components/dialog-manager.DialogManager} */
    this.dialogManager_ = deps.dialogManager();

    /** @private @const {!ActivityIframeView} */
    this.activityIframeView_ = new ActivityIframeView(this.win_, this.activityPorts_, feUrl('/abbrvofferiframe'), feArgs({
      'publicationId': deps.pageConfig().getPublicationId(),
      'productId': deps.pageConfig().getProductId(),
      'showNative': deps.callbacks().hasSubscribeRequestCallback(),
      'list': options && options.list || 'default',
      'skus': options && options.skus || null,
      'isClosable': true
    }),
    /* shouldFadeBody */false);
  }

  /**
   * Starts the offers flow
   * @return {!Promise}
   */


  _createClass(AbbrvOfferFlow, [{
    key: 'start',
    value: function start() {
      var _this46 = this;

      // Start/cancel events.
      this.deps_.callbacks().triggerFlowStarted(SubscriptionFlows.SHOW_ABBRV_OFFER);
      this.activityIframeView_.onCancel(function () {
        _this46.deps_.callbacks().triggerFlowCanceled(SubscriptionFlows.SHOW_ABBRV_OFFER);
      });

      // If the user is already subscribed, trigger login flow
      this.activityIframeView_.onMessage(function (data) {
        if (data['alreadySubscribed']) {
          _this46.deps_.callbacks().triggerLoginRequest({
            linkRequested: !!data['linkRequested']
          });
          return;
        }
      });
      // If result is due to requesting offers, redirect to offers flow
      this.activityIframeView_.acceptResult().then(function (result) {
        if (result.data['viewOffers']) {
          var options = _this46.options_ || {};
          if (options.isClosable == undefined) {
            options.isClosable = OFFERS_VIEW_CLOSABLE;
          }
          new OffersFlow(_this46.deps_, options).start();
          return;
        }
        if (result.data['native']) {
          _this46.deps_.callbacks().triggerSubscribeRequest();
          // The flow is complete.
          _this46.dialogManager_.completeView(_this46.activityIframeView_);
          return;
        }
      });

      return this.dialogManager_.openView(this.activityIframeView_);
    }
  }]);

  return AbbrvOfferFlow;
}();

/**
 * Copyright 2018 The Subscribe with Google Authors. All Rights Reserved.
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
 * Copyright 2018 The Subscribe with Google Authors. All Rights Reserved.
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
 * Copyright 2018 The Subscribe with Google Authors. All Rights Reserved.
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

var Preconnect = function () {

  /**
   * @param {!Document} doc
   */
  function Preconnect(doc) {
    _classCallCheck(this, Preconnect);

    /** @private @const {!Document} */
    this.doc_ = doc;
  }

  /**
   * @param {string} url
   */


  _createClass(Preconnect, [{
    key: 'preconnect',
    value: function preconnect(url) {
      this.pre_(url, 'preconnect');
    }

    /**
     * @param {string} url
     */

  }, {
    key: 'dnsPrefetch',
    value: function dnsPrefetch(url) {
      this.pre_(url, 'dns-prefetch');
    }

    /**
     * @param {string} url
     */

  }, {
    key: 'prefetch',
    value: function prefetch(url) {
      this.pre_(url, 'preconnect prefetch');
    }

    /**
     * @param {string} url
     * @param {string} as
     */

  }, {
    key: 'preload',
    value: function preload(url, as) {
      this.pre_(url, 'preconnect preload', as);
    }

    /**
     * @param {string} url
     * @param {string} rel
     * @param {?string=} opt_as
     * @private
     */

  }, {
    key: 'pre_',
    value: function pre_(url, rel, opt_as) {
      // <link rel="prefetch" href="..." as="">
      var linkEl = createElement(this.doc_, 'link', {
        'rel': rel,
        'href': url
      });
      if (opt_as) {
        linkEl.setAttribute('as', opt_as);
      }
      this.doc_.head.appendChild(linkEl);
    }
  }]);

  return Preconnect;
}();

/**
 * Copyright 2018 The Subscribe with Google Authors. All Rights Reserved.
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

var PREFIX = 'subscribe.google.com';

var Storage = function () {

  /**
   * @param {!Window} win
   */
  function Storage(win) {
    _classCallCheck(this, Storage);

    /** @private @const {!Window} */
    this.win_ = win;

    /** @private @const {!Object<string, !Promise<?string>>} */
    this.values_ = {};
  }

  /**
   * @param {string} key
   * @return {!Promise<?string>}
   */


  _createClass(Storage, [{
    key: 'get',
    value: function get(key) {
      var _this47 = this;

      if (!this.values_[key]) {
        this.values_[key] = new Promise(function (resolve) {
          if (_this47.win_.sessionStorage) {
            try {
              resolve(_this47.win_.sessionStorage.getItem(storageKey(key)));
            } catch (e) {
              // Ignore error.
              resolve(null);
            }
          } else {
            resolve(null);
          }
        });
      }
      return this.values_[key];
    }

    /**
     * @param {string} key
     * @param {string} value
     * @return {!Promise}
     */

  }, {
    key: 'set',
    value: function set(key, value) {
      var _this48 = this;

      this.values_[key] = Promise.resolve(value);
      return new Promise(function (resolve) {
        if (_this48.win_.sessionStorage) {
          try {
            _this48.win_.sessionStorage.setItem(storageKey(key), value);
          } catch (e) {
            // Ignore error.
          }
        }
        resolve();
      });
    }

    /**
     * @param {string} key
     * @return {!Promise}
     */

  }, {
    key: 'remove',
    value: function remove(key) {
      var _this49 = this;

      delete this.values_[key];
      return new Promise(function (resolve) {
        if (_this49.win_.sessionStorage) {
          try {
            _this49.win_.sessionStorage.removeItem(storageKey(key));
          } catch (e) {
            // Ignore error.
          }
        }
        resolve();
      });
    }
  }]);

  return Storage;
}();

/**
 * @param {string} key
 * @return {string}
 */


function storageKey(key) {
  return PREFIX + ':' + key;
}

/**
 * Copyright 2018 The Subscribe with Google Authors. All Rights Reserved.
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
 * @implements {DepsDef}
 * @implements {Subscriptions}
 */

var ConfiguredRuntime = function () {

  /**
   * @param {!Window|!Document|!Doc} winOrDoc
   * @param {!../model/page-config.PageConfig} pageConfig
   * @param {{
   *     fetcher: (!Fetcher|undefined),
   *   }=} opt_integr
   */
  function ConfiguredRuntime(winOrDoc, pageConfig, opt_integr) {
    _classCallCheck(this, ConfiguredRuntime);

    /** @private @const {!Doc} */
    this.doc_ = resolveDoc(winOrDoc);

    /** @private @const {!Window} */
    this.win_ = this.doc_.getWin();

    /** @private @const {!../api/subscriptions.Config} */
    this.config_ = defaultConfig();

    /** @private @const {!../model/page-config.PageConfig} */
    this.pageConfig_ = pageConfig;

    /** @private @const {!Promise} */
    this.documentParsed_ = this.doc_.whenReady();

    /** @private @const {!Fetcher} */
    this.fetcher_ = opt_integr && opt_integr.fetcher || new XhrFetcher(this.win_);

    /** @private @const {!Storage} */
    this.storage_ = new Storage(this.win_);

    /** @private @const {!DialogManager} */
    this.dialogManager_ = new DialogManager(this.doc_);

    /** @private @const {!web-activities/activity-ports.ActivityPorts} */
    this.activityPorts_ = new activityPorts_1(this.win_);

    /** @private @const {!Callbacks} */
    this.callbacks_ = new Callbacks();

    /** @private @const {!EntitlementsManager} */
    this.entitlementsManager_ = new EntitlementsManager(this.win_, this.pageConfig_, this.fetcher_, this);

    /** @private @const {!OffersApi} */
    this.offersApi_ = new OffersApi(this.pageConfig_, this.fetcher_);

    /** @private @const {!ButtonApi} */
    this.buttonApi_ = new ButtonApi(this.doc_);

    var preconnect = new Preconnect(this.win_.document);

    LinkCompleteFlow.configurePending(this);
    PayCompleteFlow.configurePending(this);
    PayStartFlow.preconnect(preconnect);

    injectStyleSheet(this.win_.document, CSS);
  }

  /** @override */


  _createClass(ConfiguredRuntime, [{
    key: 'doc',
    value: function doc() {
      return this.doc_;
    }

    /** @override */

  }, {
    key: 'win',
    value: function win() {
      return this.win_;
    }

    /** @override */

  }, {
    key: 'pageConfig',
    value: function pageConfig() {
      return this.pageConfig_;
    }

    /** @override */

  }, {
    key: 'activities',
    value: function activities() {
      return this.activityPorts_;
    }

    /** @override */

  }, {
    key: 'dialogManager',
    value: function dialogManager() {
      return this.dialogManager_;
    }

    /** @override */

  }, {
    key: 'entitlementsManager',
    value: function entitlementsManager() {
      return this.entitlementsManager_;
    }

    /** @override */

  }, {
    key: 'callbacks',
    value: function callbacks() {
      return this.callbacks_;
    }

    /** @override */

  }, {
    key: 'storage',
    value: function storage() {
      return this.storage_;
    }

    /** @override */

  }, {
    key: 'init',
    value: function init() {}
    // Implemented by the `Runtime` class.


    /** @override */

  }, {
    key: 'configure',
    value: function configure(config) {
      // Validate first.
      var error = null;
      for (var k in config) {
        var v = config[k];
        if (k == 'windowOpenMode') {
          if (v != WindowOpenMode.AUTO && v != WindowOpenMode.REDIRECT) {
            error = 'Unknown windowOpenMode: ' + v;
          }
        } else {
          error = 'Unknown config property: ' + k;
        }
      }
      if (error) {
        throw new Error(error);
      }
      // Assign.
      Object.assign(this.config_, config);
    }

    /** @override */

  }, {
    key: 'config',
    value: function config() {
      return this.config_;
    }

    /** @override */

  }, {
    key: 'reset',
    value: function reset() {
      this.entitlementsManager_.reset();
      this.dialogManager_.completeAll();
    }

    /** @override */

  }, {
    key: 'start',
    value: function start() {
      // No need to run entitlements without a product or for an unlocked page.
      if (!this.pageConfig_.getProductId() || !this.pageConfig_.isLocked()) {
        return Promise.resolve();
      }
      this.getEntitlements();
    }

    /** @override */

  }, {
    key: 'getEntitlements',
    value: function getEntitlements() {
      return this.entitlementsManager_.getEntitlements().then(function (entitlements) {
        return entitlements.clone();
      });
    }

    /** @override */

  }, {
    key: 'setOnEntitlementsResponse',
    value: function setOnEntitlementsResponse(callback) {
      this.callbacks_.setOnEntitlementsResponse(callback);
    }

    /** @override */

  }, {
    key: 'getOffers',
    value: function getOffers(opt_options) {
      return this.offersApi_.getOffers(opt_options && opt_options.productId);
    }

    /** @override */

  }, {
    key: 'showOffers',
    value: function showOffers(opt_options) {
      var _this50 = this;

      return this.documentParsed_.then(function () {
        var flow = new OffersFlow(_this50, opt_options);
        return flow.start();
      });
    }

    /** @override */

  }, {
    key: 'showSubscribeOption',
    value: function showSubscribeOption(opt_options) {
      var _this51 = this;

      return this.documentParsed_.then(function () {
        var flow = new SubscribeOptionFlow(_this51, opt_options);
        return flow.start();
      });
    }

    /** @override */

  }, {
    key: 'showAbbrvOffer',
    value: function showAbbrvOffer(opt_options) {
      var _this52 = this;

      return this.documentParsed_.then(function () {
        var flow = new AbbrvOfferFlow(_this52, opt_options);
        return flow.start();
      });
    }

    /** @override */

  }, {
    key: 'showSubscriptionLookupProgress',
    value: function showSubscriptionLookupProgress(accountPromise) {
      var _this53 = this;

      return this.documentParsed_.then(function () {
        var wait = new WaitForSubscriptionLookupApi(_this53, accountPromise);
        return wait.start();
      });
    }

    /** @override */

  }, {
    key: 'setOnLoginRequest',
    value: function setOnLoginRequest(callback) {
      this.callbacks_.setOnLoginRequest(callback);
    }

    /** @override */

  }, {
    key: 'setOnLinkComplete',
    value: function setOnLinkComplete(callback) {
      this.callbacks_.setOnLinkComplete(callback);
    }

    /** @override */

  }, {
    key: 'linkAccount',
    value: function linkAccount() {
      var _this54 = this;

      return this.documentParsed_.then(function () {
        return new LinkbackFlow(_this54).start();
      });
    }

    /** @override */

  }, {
    key: 'saveSubscription',
    value: function saveSubscription(saveSubscriptionRequestCallback) {
      var _this55 = this;

      return this.documentParsed_.then(function () {
        return new LinkSaveFlow(_this55, saveSubscriptionRequestCallback).start();
      });
    }

    /** @override */

  }, {
    key: 'showLoginPrompt',
    value: function showLoginPrompt() {
      var _this56 = this;

      return this.documentParsed_.then(function () {
        return new LoginPromptApi(_this56).start();
      });
    }

    /** @override */

  }, {
    key: 'showLoginNotification',
    value: function showLoginNotification() {
      var _this57 = this;

      return this.documentParsed_.then(function () {
        return new LoginNotificationApi(_this57).start();
      });
    }

    /** @override */

  }, {
    key: 'setOnNativeSubscribeRequest',
    value: function setOnNativeSubscribeRequest(callback) {
      this.callbacks_.setOnSubscribeRequest(callback);
    }

    /** @override */

  }, {
    key: 'setOnSubscribeResponse',
    value: function setOnSubscribeResponse(callback) {
      this.callbacks_.setOnSubscribeResponse(callback);
    }

    /** @override */

  }, {
    key: 'subscribe',
    value: function subscribe(sku) {
      var _this58 = this;

      return this.documentParsed_.then(function () {
        return new PayStartFlow(_this58, sku).start();
      });
    }

    /** @override */

  }, {
    key: 'completeDeferredAccountCreation',
    value: function completeDeferredAccountCreation(opt_options) {
      var _this59 = this;

      return this.documentParsed_.then(function () {
        return new DeferredAccountFlow(_this59, opt_options || null).start();
      });
    }

    /** @override */

  }, {
    key: 'setOnFlowStarted',
    value: function setOnFlowStarted(callback) {
      this.callbacks_.setOnFlowStarted(callback);
    }

    /** @override */

  }, {
    key: 'setOnFlowCanceled',
    value: function setOnFlowCanceled(callback) {
      this.callbacks_.setOnFlowCanceled(callback);
    }

    /** @override */

  }, {
    key: 'createButton',
    value: function createButton(optionsOrCallback, opt_callback) {
      // This is a minor duplication to allow this code to be sync.
      return this.buttonApi_.create(optionsOrCallback, opt_callback);
    }

    /** @override */

  }, {
    key: 'attachButton',
    value: function attachButton(button, optionsOrCallback, opt_callback) {
      // This is a minor duplication to allow this code to be sync.
      this.buttonApi_.attach(button, optionsOrCallback, opt_callback);
    }
  }]);

  return ConfiguredRuntime;
}();

/**
 * Copyright 2018 The Subscribe with Google Authors. All Rights Reserved.
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

exports.ConfiguredRuntime = ConfiguredRuntime;
exports.Entitlements = Entitlements;
exports.Entitlement = Entitlement;
exports.Fetcher = Fetcher;
exports.SubscribeResponse = SubscribeResponse;

},{}]},{},[2])


})});//# sourceMappingURL=amp-subscriptions-google-0.1.max.js.map
