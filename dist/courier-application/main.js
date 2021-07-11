(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/ac/":
/*!************************************************************!*\
  !*** ./src/app/shipments/shipments/shipments.component.ts ***!
  \************************************************************/
/*! exports provided: ShipmentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShipmentsComponent", function() { return ShipmentsComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_shared_modal_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/modal/modal.component */ "0zEo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core_services_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/store.service */ "z3Pw");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/auth.service */ "7dP1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/loader/loader.component */ "o7am");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _status_status_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../status/status.component */ "R5Xw");
/* harmony import */ var _search_filer_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../search-filer.pipe */ "1yBo");


















function ShipmentsComponent_app_loader_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-loader");
} }
function ShipmentsComponent_ng_container_4_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "user");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ShipmentsComponent_ng_container_4_ng_container_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
} }
function ShipmentsComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-form-field", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ShipmentsComponent_ng_container_4_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r10.searchValue = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, ShipmentsComponent_ng_container_4_th_8_Template, 2, 0, "th", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Tracking Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Adress");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Package size");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Package Weight");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Package Cost");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, ShipmentsComponent_ng_container_4_ng_container_26_Template, 1, 0, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](27, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r1.searchValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 5, ctx_r1.isAdmin$));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](27, 7, ctx_r1.isAdmin$))("ngIfThen", _r2)("ngIfElse", _r4);
} }
function ShipmentsComponent_ng_template_5_tbody_0_tr_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-status", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const shipment_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("status", shipment_r13.status);
} }
function ShipmentsComponent_ng_template_5_tbody_0_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "tr", 13, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "td", 15, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ShipmentsComponent_ng_template_5_tbody_0_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19); const shipment_r13 = ctx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r18.toogleInfo(shipment_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "info");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ShipmentsComponent_ng_template_5_tbody_0_Template_button_click_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19); const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](7); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r20.updateHandler($event, _r15 == null ? null : _r15.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "system_update");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ShipmentsComponent_ng_template_5_tbody_0_Template_button_click_26_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19); const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](7); const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r21.openModal($event, _r15 == null ? null : _r15.id, _r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, ShipmentsComponent_ng_template_5_tbody_0_tr_29_Template, 4, 1, "tr", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const shipment_r13 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    let tmp_0_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 9, ctx_r12.user$)) == null ? null : tmp_0_0.username) === (shipment_r13.creator == null ? null : shipment_r13.creator.username) ? "own-shipments" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](shipment_r13 == null ? null : shipment_r13.creator == null ? null : shipment_r13.creator.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", shipment_r13._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](shipment_r13._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](shipment_r13.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](shipment_r13.size);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", shipment_r13.weight, " kg.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", shipment_r13.cost, " $");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", shipment_r13.showDetails);
} }
function ShipmentsComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ShipmentsComponent_ng_template_5_tbody_0_Template, 30, 11, "tbody", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "searchFiler");
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](1, 1, ctx_r3.packages, ctx_r3.searchValue));
} }
function ShipmentsComponent_ng_template_7_tbody_0_tr_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-status", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const shipment_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("status", shipment_r23.status);
} }
function ShipmentsComponent_ng_template_7_tbody_0_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "tr", null, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td", 15, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ShipmentsComponent_ng_template_7_tbody_0_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r29); const shipment_r23 = ctx.$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r28.toogleInfo(shipment_r23); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "info");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ShipmentsComponent_ng_template_7_tbody_0_Template_button_click_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r29); const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r30.updateHandler($event, _r25 == null ? null : _r25.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "system_update");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ShipmentsComponent_ng_template_7_tbody_0_Template_button_click_23_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r29); const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4); const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r31.openModal($event, _r25 == null ? null : _r25.id, _r24); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, ShipmentsComponent_ng_template_7_tbody_0_tr_26_Template, 4, 1, "tr", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const shipment_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", shipment_r23._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](shipment_r23._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](shipment_r23.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](shipment_r23.size);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", shipment_r23.weight, " kg.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", shipment_r23.cost, " $");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", shipment_r23.showDetails);
} }
function ShipmentsComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ShipmentsComponent_ng_template_7_tbody_0_Template, 27, 7, "tbody", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "searchFiler");
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](1, 1, ctx_r5.packages, ctx_r5.searchValue));
} }
function ShipmentsComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h3", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "No shipments yet! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Make your first shipment!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class ShipmentsComponent {
    constructor(storeService, authService, router, matDialog) {
        this.storeService = storeService;
        this.authService = authService;
        this.router = router;
        this.matDialog = matDialog;
        this.isAdmin$ = this.authService.isAdmin$;
        this.user$ = this.authService.currentUser$;
        this.isLoading = false;
    }
    ngOnInit() {
        this.isLoading = true;
        this.storeService.getShipments().subscribe({
            next: (data) => {
                this.isLoading = false;
                this.packages = data;
            }
        });
    }
    ngOnChanges() {
        this.storeService.getShipments().subscribe({
            next: (data) => this.packages = data
        });
    }
    toogleInfo(shipment) {
        shipment.showDetails = !shipment.showDetails;
    }
    openModal(event, shipmentId, shipmentRow) {
        const dialogCfg = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogConfig"]();
        dialogCfg.disableClose = true;
        dialogCfg.id = "custom-modal";
        dialogCfg.data = {
            title: "Are you sure you want to delete?",
            isConfirmed: true,
        };
        const modalDialog = this.matDialog.open(src_app_shared_modal_modal_component__WEBPACK_IMPORTED_MODULE_1__["ModalComponent"], dialogCfg);
        modalDialog.afterClosed().subscribe({
            next: result => {
                if (result) {
                    this.deleteHandler(shipmentId, shipmentRow);
                }
            }
        });
    }
    deleteHandler(shipmentId, shipmentRow) {
        this.isLoading = true;
        this.storeService.deleteShipment(shipmentId).subscribe({
            next: (data) => {
                this.isLoading = false;
                shipmentRow.remove();
            }
        });
    }
    updateHandler(event, shipmentId) {
        this.router.navigateByUrl(`/shipments/${shipmentId}/edit`);
    }
}
ShipmentsComponent.ɵfac = function ShipmentsComponent_Factory(t) { return new (t || ShipmentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_store_service__WEBPACK_IMPORTED_MODULE_3__["StoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialog"])); };
ShipmentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ShipmentsComponent, selectors: [["app-shipments"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], decls: 11, vars: 3, consts: [[1, "layout"], [4, "ngIf"], [4, "ngIf", "ngIfElse"], ["isAdmin", ""], ["isUser", ""], ["class", "no-shipments"], ["noShipments", ""], ["fxLayout", "", "fxLayoutAlign", "center center"], ["fxFlex", "40%", "fxFlex.xs", "80%"], ["matInput", "", "type", "text", "placeholder", "Filter", 3, "ngModel", "ngModelChange"], [1, "table-content"], [4, "ngIf", "ngIfThen", "ngIfElse"], [4, "ngFor", "ngForOf"], [3, "ngClass"], ["shipmentRow", ""], [3, "id"], ["shipmentId", ""], ["mat-icon-button", "", "color", "accent", 3, "click"], [1, "mat-18"], ["mat-icon-button", "", "color", "warn", 3, "click"], ["colspan", "6"], [3, "status"], ["colspan", "8"], [1, "no-shipments"], ["href", "/shipments/create"]], template: function ShipmentsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ShipmentsComponent_app_loader_1_Template, 1, 0, "app-loader", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Shipments");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ShipmentsComponent_ng_container_4_Template, 28, 9, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, ShipmentsComponent_ng_template_5_Template, 2, 4, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, ShipmentsComponent_ng_template_7_Template, 2, 4, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, ShipmentsComponent_ng_template_9_Template, 4, 0, "ng-template", 5, 6, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.packages == null ? null : ctx.packages.length) > 0)("ngIfElse", _r6);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_7__["LoaderComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutAlignDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultFlexDirective"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__["DefaultClassDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIcon"], _status_status_component__WEBPACK_IMPORTED_MODULE_15__["StatusComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"], _search_filer_pipe__WEBPACK_IMPORTED_MODULE_16__["SearchFilerPipe"]], styles: ["h1[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n\r\ntable[_ngcontent-%COMP%] {\r\n    border-collapse: collapse;\r\n    margin: 15px 0;\r\n    font-size: 0.9em;\r\n    font-family: sans-serif;\r\n    min-width: 300px;\r\n    flex: 1;\r\n}\r\n\r\nthead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n    color: #adadad;\r\n    width: 100%;\r\n}\r\n\r\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\r\n    padding: 12px 15px;\r\n}\r\n\r\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    border-bottom: 1px solid #dddddd;\r\n    width: 100%;\r\n}\r\n\r\ntbody[_ngcontent-%COMP%]   tr.active-row[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n    width: 100%;\r\n}\r\n\r\ntr.own-shipments[_ngcontent-%COMP%] {\r\n    background-color: rgb(227, 234, 236);\r\n    width: 100%;\r\n}\r\n\r\ndiv.table-content[_ngcontent-%COMP%] {\r\n    overflow-x:auto;\r\n    width: 100%;\r\n    display: grid\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    margin: auto;\r\n}\r\n\r\nh3.no-shipments[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoaXBtZW50cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixPQUFPO0FBQ1g7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdDQUFnQztJQUNoQyxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztBQUNmOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1g7QUFDSjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic2hpcG1lbnRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICBtYXJnaW46IDE1cHggMDtcclxuICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgIG1pbi13aWR0aDogMzAwcHg7XHJcbiAgICBmbGV4OiAxO1xyXG59XHJcblxyXG50aGVhZCB0ciB7XHJcbiAgICBjb2xvcjogI2FkYWRhZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG50aCwgdGQge1xyXG4gICAgcGFkZGluZzogMTJweCAxNXB4O1xyXG59XHJcblxyXG50Ym9keSB0ciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZGRkZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG50Ym9keSB0ci5hY3RpdmUtcm93IHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbnRyLm93bi1zaGlwbWVudHMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNywgMjM0LCAyMzYpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmRpdi50YWJsZS1jb250ZW50IHtcclxuICAgIG92ZXJmbG93LXg6YXV0bztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZ3JpZFxyXG59XHJcblxyXG5idXR0b24ge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG5oMy5uby1zaGlwbWVudHN7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\beblo\softuni\repository\courier-application\src\main.ts */"zUnb");


/***/ }),

/***/ "0zEo":
/*!*************************************************!*\
  !*** ./src/app/shared/modal/modal.component.ts ***!
  \*************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");





function ModalComponent_section_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class ModalComponent {
    constructor(matDialogRef, data) {
        this.matDialogRef = matDialogRef;
        this.data = data;
    }
    ngOnInit() {
    }
    close() {
        this.matDialogRef.close();
    }
}
ModalComponent.ɵfac = function ModalComponent_Factory(t) { return new (t || ModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"])); };
ModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ModalComponent, selectors: [["app-modal"]], decls: 12, vars: 5, consts: [[1, "layout"], [1, "container"], [1, "title"], [4, "ngIf"], [1, "action-wrapper"], ["mat-raised-button", "", "cdkFocusInitial", "", 1, "cancel", 3, "click"], ["mat-raised-button", "", 1, "action", 3, "mat-dialog-close"], ["src", "https://img.icons8.com/ios/100/000000/sad.png", "alt", "SAD_FACE"]], template: function ModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ModalComponent_section_5_Template, 2, 0, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModalComponent_Template_button_click_8_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.data.userDelete);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.reject || "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mat-dialog-close", ctx.data.isConfirmed);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.accept || "Yes");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogClose"]], styles: [".layout[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n    display: grid;\r\n    color: black;\r\n}\r\n\r\n .mat-dialog-container {\r\n    padding: 0px !important;\r\n    margin: auto;\r\n    background-color: whitesmoke;\r\n    border-radius: 15px;\r\n    width: 450px;\r\n    height: 250px;\r\n}\r\n\r\nheader[_ngcontent-%COMP%] {\r\n    margin: auto;\r\n}\r\n\r\nsection[_ngcontent-%COMP%] {\r\n    margin: auto;\r\n}\r\n\r\n.title[_ngcontent-%COMP%] {\r\n    font-size: 22px;\r\n    text-align: center;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%] {\r\n    justify-self: right;\r\n    align-self: center;\r\n}\r\n\r\n.action-wrapper[_ngcontent-%COMP%] {\r\n    margin: 20px;\r\n}\r\n\r\n.action[_ngcontent-%COMP%] {\r\n    background-color:white;\r\n    color: black;\r\n}\r\n\r\n.cancel[_ngcontent-%COMP%] {\r\n    background-color:white;\r\n    color: black;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLDRCQUE0QjtJQUM1QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFlBQVk7QUFDaEIiLCJmaWxlIjoibW9kYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYXlvdXQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG46Om5nLWRlZXAubWF0LWRpYWxvZy1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIHdpZHRoOiA0NTBweDtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbn1cclxuXHJcbmhlYWRlciB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbnNlY3Rpb24ge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5mb290ZXIge1xyXG4gICAganVzdGlmeS1zZWxmOiByaWdodDtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxufVxyXG5cclxuLmFjdGlvbi13cmFwcGVyIHtcclxuICAgIG1hcmdpbjogMjBweDtcclxufVxyXG5cclxuLmFjdGlvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uY2FuY2VsIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "1yBo":
/*!************************************************!*\
  !*** ./src/app/shipments/search-filer.pipe.ts ***!
  \************************************************/
/*! exports provided: SearchFilerPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchFilerPipe", function() { return SearchFilerPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SearchFilerPipe {
    transform(records, searchValue) {
        if (!records || !searchValue) {
            return records;
        }
        function search() {
            const trackingFilter = records.filter(x => x._id.toString().includes(searchValue.toLocaleLowerCase()));
            const addressFilter = records.filter(x => x.address.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
            const packageFilter = records.filter(x => x.size.toString().includes(searchValue.toString()));
            const kilogramsFilter = records.filter(x => x.weight.toString() === searchValue.toLocaleLowerCase());
            const costFilter = records.filter(x => x.cost.toString() === searchValue.toLocaleLowerCase());
            return addressFilter.length > 0
                ? addressFilter
                : kilogramsFilter.length > 0
                    ? kilogramsFilter
                    : packageFilter.length > 0
                        ? packageFilter
                        : trackingFilter.length > 0
                            ? trackingFilter
                            : costFilter.length > 0
                                ? costFilter
                                : [];
        }
        return search();
    }
}
SearchFilerPipe.ɵfac = function SearchFilerPipe_Factory(t) { return new (t || SearchFilerPipe)(); };
SearchFilerPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "searchFiler", type: SearchFilerPipe, pure: true });


/***/ }),

/***/ "3a9W":
/*!*********************************************!*\
  !*** ./src/app/user/edit/edit.component.ts ***!
  \*********************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_auth_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/auth/validators */ "HqwY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/user.service */ "f4AX");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/loader/loader.component */ "o7am");
















function EditComponent_app_loader_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-loader");
} }
function EditComponent_mat_hint_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Username is required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EditComponent_mat_hint_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Username must be at least 4 characters!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EditComponent_mat_hint_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Email is required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EditComponent_mat_hint_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Email is incorrect!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EditComponent_mat_hint_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Image is required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EditComponent_mat_hint_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Image URL is incorrect!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EditComponent_mat_hint_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Password is required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EditComponent_mat_hint_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Password must be at least 4 characters!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EditComponent_mat_hint_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Enter new password is required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EditComponent_mat_hint_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Enter new password must be the same as password!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class EditComponent {
    constructor(userService, fb, router) {
        this.userService = userService;
        this.fb = fb;
        this.router = router;
        this.isLoading = false;
        this.hide = true;
        this.hideRepeat = true;
        this.f = this.fb.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(4)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, src_app_auth_validators__WEBPACK_IMPORTED_MODULE_1__["emailValidator"]]],
            oldPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(4)]],
            newPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(4)]],
            gender: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, src_app_auth_validators__WEBPACK_IMPORTED_MODULE_1__["genderValidator"]]],
            image: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, src_app_auth_validators__WEBPACK_IMPORTED_MODULE_1__["imageValidator"]]]
        });
        this.userService.getUser()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])())
            .subscribe(x => this.f.patchValue(x));
    }
    ngOnInit() {
    }
    submitHandler(formData) {
        this.isLoading = true;
        this.userService.edit(formData).subscribe({
            next: (data) => {
                this.isLoading = false;
                this.router.navigateByUrl('/user/profile');
            },
            error: (err) => {
                window.alert(err.error);
                this.isLoading = false;
            }
        });
    }
}
EditComponent.ɵfac = function EditComponent_Factory(t) { return new (t || EditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
EditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: EditComponent, selectors: [["app-edit"]], decls: 62, vars: 16, consts: [[1, "container"], [4, "ngIf"], [1, "frame"], [3, "formGroup", "ngSubmit"], [1, "edit-label"], [1, "label-form"], ["appearance", "fill"], ["name", "username", "placeholder", "Gosho", "formControlName", "username", "matInput", ""], ["name", "email", "placeholder", "example@example.com", "formControlName", "email", "matInput", ""], ["name", "image", "placeholder", "http://example@example.com/image.jpg", "formControlName", "image", "matInput", ""], ["matInput", "", "name", "oldPassword", "placeholder", "******", "formControlName", "oldPassword", 3, "type"], ["mat-icon-button", "", "matSuffix", "", "type", "button", 3, "click"], ["matInput", "", "name", "newPassword", "placeholder", "******", "formControlName", "newPassword", 3, "type"], ["fxLayoutGap", "20px", "formControlName", "gender", "name", "gender"], ["value", "male"], ["value", "female"], [1, "btn-submit"], ["mat-raised-button", "", "type", "submit"]], template: function EditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, EditComponent_app_loader_1_Template, 1, 0, "app-loader", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function EditComponent_Template_form_ngSubmit_5_listener() { return ctx.submitHandler(ctx.f.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "EDIT PROFILE");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Enter username");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, EditComponent_mat_hint_14_Template, 2, 0, "mat-hint", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, EditComponent_mat_hint_15_Template, 2, 0, "mat-hint", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Enter Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, EditComponent_mat_hint_21_Template, 2, 0, "mat-hint", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, EditComponent_mat_hint_22_Template, 2, 0, "mat-hint", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Enter Image Url");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, EditComponent_mat_hint_28_Template, 2, 0, "mat-hint", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, EditComponent_mat_hint_29_Template, 2, 0, "mat-hint", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "Enter old password");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EditComponent_Template_button_click_35_listener() { return ctx.hide = !ctx.hide; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](38, EditComponent_mat_hint_38_Template, 2, 0, "mat-hint", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](39, EditComponent_mat_hint_39_Template, 2, 0, "mat-hint", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "Enter new password");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](44, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EditComponent_Template_button_click_45_listener() { return ctx.hideRepeat = !ctx.hideRepeat; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](48, EditComponent_mat_hint_48_Template, 2, 0, "mat-hint", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](49, EditComponent_mat_hint_49_Template, 2, 0, "mat-hint", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, "Gender: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](53, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "mat-radio-group", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "mat-radio-button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, "Male");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "mat-radio-button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58, "Female");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, "EDIT");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.f);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.f.get("username").touched && (ctx.f.get("username").errors == null ? null : ctx.f.get("username").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.f.get("username").touched && (ctx.f.get("username").errors == null ? null : ctx.f.get("username").errors.minlength));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.f.get("email").touched && (ctx.f.get("email").errors == null ? null : ctx.f.get("email").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.f.get("email").touched && (ctx.f.get("email").errors == null ? null : ctx.f.get("email").errors.emailValidator));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.f.get("image").touched && (ctx.f.get("image").errors == null ? null : ctx.f.get("image").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.f.get("image").touched && (ctx.f.get("image").errors == null ? null : ctx.f.get("image").errors.imageValidator));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", ctx.hide ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](!ctx.hide ? "visibility" : "visibility_off");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.f.get("oldPassword").touched && (ctx.f.get("oldPassword").errors == null ? null : ctx.f.get("oldPassword").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.f.get("oldPassword").touched && (ctx.f.get("oldPassword").errors == null ? null : ctx.f.get("oldPassword").errors.minlength));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", ctx.hideRepeat ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](!ctx.hideRepeat ? "visibility" : "visibility_off");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.f.get("newPassword").touched && (ctx.f.get("newPassword").errors == null ? null : ctx.f.get("newPassword").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.f.get("newPassword").touched && (ctx.f.get("newPassword").errors == null ? null : ctx.f.get("newPassword").errors.rePassCheck));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__["MatRadioGroup"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["DefaultLayoutGapDirective"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__["MatRadioButton"], _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_14__["LoaderComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatHint"]], styles: ["div.container[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin: auto;\r\n    display: flex;\r\n    padding-top: 5%;\r\n}\r\n\r\napp-loader[_ngcontent-%COMP%] {\r\n    z-index: 9999;\r\n}\r\n\r\nmat-label[_ngcontent-%COMP%] {\r\n    margin: 0px;\r\n    padding: 0px;\r\n    position: relative;\r\n    display: block;\r\n}\r\n\r\nmat-label.label-form[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n}\r\n\r\n.gender[_ngcontent-%COMP%]{\r\n    margin: auto;\r\n    padding: 10px;\r\n}\r\n\r\n.frame[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    display: block;\r\n    width: 100%;\r\n}\r\n\r\nmat-card[_ngcontent-%COMP%] {\r\n    margin: auto;\r\n    border-radius: 10px;\r\n    text-align: center;\r\n}\r\n\r\n.mat-card.mat-focus-indicator[_ngcontent-%COMP%] {\r\n    box-shadow: none\r\n}\r\n\r\nmat-form-field[_ngcontent-%COMP%] {\r\n    margin: auto;\r\n    width: 350px;\r\n    display: block;\r\n    position: relative;\r\n    text-align: justify;\r\n}\r\n\r\n.edit-label[_ngcontent-%COMP%] {\r\n    margin: auto;\r\n    padding: 2%;\r\n    font-size: 25px;\r\n}\r\n\r\n.btn-submit[_ngcontent-%COMP%] {\r\n    padding: 5%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2QsV0FBVztBQUNmOztBQUNBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJlZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuZGl2LmNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwYWRkaW5nLXRvcDogNSU7XHJcbn1cclxuXHJcbmFwcC1sb2FkZXIge1xyXG4gICAgei1pbmRleDogOTk5OTtcclxufVxyXG5cclxubWF0LWxhYmVsIHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbm1hdC1sYWJlbC5sYWJlbC1mb3JtIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uZ2VuZGVye1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLmZyYW1lIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxubWF0LWNhcmQge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm1hdC1jYXJkLm1hdC1mb2N1cy1pbmRpY2F0b3Ige1xyXG4gICAgYm94LXNoYWRvdzogbm9uZVxyXG59XHJcblxyXG5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB3aWR0aDogMzUwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbn1cclxuXHJcbi5lZGl0LWxhYmVsIHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBhZGRpbmc6IDIlO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcblxyXG4uYnRuLXN1Ym1pdCB7XHJcbiAgICBwYWRkaW5nOiA1JTtcclxufSJdfQ== */"] });


/***/ }),

/***/ "7UCR":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-routing.module */ "Yu5h");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../material/material.module */ "hctd");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile/profile.component */ "D5oR");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit/edit.component */ "3a9W");
/* harmony import */ var _control_view_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./control-view.directive */ "z+wL");
/* harmony import */ var _client_center_client_center_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../client-center/client-center.module */ "jayf");
/* harmony import */ var _shipments_shipments_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shipments/shipments.module */ "fTTL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "tyNb");












class UserModule {
}
UserModule.ɵfac = function UserModule_Factory(t) { return new (t || UserModule)(); };
UserModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: UserModule });
UserModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _user_routing_module__WEBPACK_IMPORTED_MODULE_1__["UserRoutingModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"],
            _client_center_client_center_module__WEBPACK_IMPORTED_MODULE_7__["ClientCenterModule"],
            _shipments_shipments_module__WEBPACK_IMPORTED_MODULE_8__["ShipmentsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](UserModule, { declarations: [_profile_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"],
        _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__["EditComponent"],
        _control_view_directive__WEBPACK_IMPORTED_MODULE_6__["ControlViewDirective"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"],
        _client_center_client_center_module__WEBPACK_IMPORTED_MODULE_7__["ClientCenterModule"],
        _shipments_shipments_module__WEBPACK_IMPORTED_MODULE_8__["ShipmentsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"]], exports: [_control_view_directive__WEBPACK_IMPORTED_MODULE_6__["ControlViewDirective"]] }); })();


/***/ }),

/***/ "7dP1":
/*!***********************************************!*\
  !*** ./src/app/core/services/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_shared_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/constants */ "s0Cq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./storage.service */ "UYTb");






class AuthService {
    constructor(http, store) {
        this.http = http;
        this.store = store;
        this._currentUser = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](undefined);
        this.currentUser$ = this._currentUser.asObservable();
        this.isLogged$ = this.currentUser$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(user => !!user));
        this.isAdmin$ = this.currentUser$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(u => (u === null || u === void 0 ? void 0 : u.role) === 'admin'));
    }
    login(data) {
        return this.http.post(src_app_shared_constants__WEBPACK_IMPORTED_MODULE_2__["constants"].baseUrl + 'auth/login', data, { withCredentials: true })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((u) => this._currentUser.next(u)));
    }
    register(data) {
        return this.http.post(src_app_shared_constants__WEBPACK_IMPORTED_MODULE_2__["constants"].baseUrl + 'auth/register', data, { withCredentials: true })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((u) => this._currentUser.next(u)));
    }
    logout(data) {
        // const { token } = this.store.getItem('auth')
        // const headers = new HttpHeaders({ [constants.authHeaderName]: token })
        return this.http.post(src_app_shared_constants__WEBPACK_IMPORTED_MODULE_2__["constants"].baseUrl + 'auth/logout', data, { withCredentials: true })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((u) => this._currentUser.next(null)));
    }
    authenticate() {
        // const token = this.store.getItem('auth')?.token
        // const headers = new HttpHeaders({ [constants.authHeaderName]: token })
        return this.http.get(src_app_shared_constants__WEBPACK_IMPORTED_MODULE_2__["constants"].baseUrl + 'auth/user', { withCredentials: true })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((u) => this._currentUser.next(u)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(() => { this._currentUser.next(null); return [null]; }));
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "7u+/":
/*!*******************************************************!*\
  !*** ./src/app/shipments/shipments-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: ShipmentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShipmentRoutingModule", function() { return ShipmentRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shipments_shipments_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shipments/shipments.component */ "/ac/");
/* harmony import */ var _create_edit_shipment_create_edit_shipment_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-edit-shipment/create-edit-shipment.component */ "hypl");



const routes = [
    {
        path: '',
        pathMatch: 'full',
        component: _shipments_shipments_component__WEBPACK_IMPORTED_MODULE_1__["ShipmentsComponent"]
    },
    {
        path: 'create',
        component: _create_edit_shipment_create_edit_shipment_component__WEBPACK_IMPORTED_MODULE_2__["CreateEditShipmentComponent"]
    },
    {
        path: ':id/edit',
        component: _create_edit_shipment_create_edit_shipment_component__WEBPACK_IMPORTED_MODULE_2__["CreateEditShipmentComponent"]
    },
];
const ShipmentRoutingModule = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "9Cpb":
/*!*******************************************************!*\
  !*** ./src/app/client-center/search-question.pipe.ts ***!
  \*******************************************************/
/*! exports provided: SearchQuestionPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchQuestionPipe", function() { return SearchQuestionPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SearchQuestionPipe {
    transform(records, searchValue) {
        if (!records || !searchValue) {
            return records;
        }
        return records.filter(x => x.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
    }
}
SearchQuestionPipe.ɵfac = function SearchQuestionPipe_Factory(t) { return new (t || SearchQuestionPipe)(); };
SearchQuestionPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "searchQuestion", type: SearchQuestionPipe, pure: true });


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_services_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/services/store.service */ "z3Pw");
/* harmony import */ var _core_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/carousel/carousel.component */ "B6Pq");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");








function HomeComponent_ng_container_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-tab", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const news_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("label", news_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", news_r1.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](news_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](news_r1.description);
} }
class HomeComponent {
    constructor(location, storeService) {
        this.location = location;
        this.storeService = storeService;
        this.selectedIndex = 0;
        const index = Number(this.location.path(true).substring(1)) || 0;
        this.selectedIndex = index;
        this.location.subscribe((value) => {
            const index = Number(value.url.substring(6)) || 0;
            this.selectedIndex = value.url ? index : 0;
        });
    }
    ngOnInit() {
        this.storeService.getNews().subscribe((result) => {
            result.map((x, i) => { x['link'] = i; return x; });
            this.news = result;
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_store_service__WEBPACK_IMPORTED_MODULE_2__["StoreService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_0__["Location"], { provide: _angular_common__WEBPACK_IMPORTED_MODULE_0__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_0__["PathLocationStrategy"] }])], decls: 31, vars: 3, consts: [[1, "container"], [1, "caroucel"], [3, "banners"], [1, "row"], ["routerLink", "/client-center/services"], ["routerLink", "/shipments"], ["routerLink", "/shipments/create"], ["routerLink", "/client-center/claims"], [1, "news-title"], [1, "main-container"], [3, "selectedIndex"], [4, "ngFor", "ngForOf"], [1, "news-label", 3, "label"], [1, "news-layout"], [1, "news-image", 3, "src"], [1, "news-content"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-carousel", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "room");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Services ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "pageview");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Find Shipment ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "local_shipping");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " Create Shipment ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "content_paste");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " Report shipment ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "NEWS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "mat-tab-group", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, HomeComponent_ng_container_30_Template, 9, 4, "ng-container", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("banners", ctx.news);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selectedIndex", ctx.selectedIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.news);
    } }, directives: [_core_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_3__["CarouselComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabGroup"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTab"]], styles: ["div.container[_ngcontent-%COMP%] {\r\n    max-height: 3000px;\r\n    max-width: 4098px;\r\n    padding: 0;\r\n}\r\n\r\n.caroucel[_ngcontent-%COMP%] {\r\n    height: 500px;\r\n}\r\n\r\ndiv.row[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    display: grid;\r\n    background-color: lightgray;\r\n}\r\n\r\nul[_ngcontent-%COMP%] {\r\n    list-style-type: none;\r\n}\r\n\r\nli[_ngcontent-%COMP%] {\r\n    display:inline-block;\r\n    margin: 0 8%;    \r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n    display: block;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    color: black;\r\n}\r\n\r\nli[_ngcontent-%COMP%]:hover {\r\n    background-color: rgb(185, 185, 185);\r\n}\r\n\r\n.news-title[_ngcontent-%COMP%] {\r\n    position: relative;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n\r\nmat-tab[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    max-width: 4098px;\r\n}\r\n\r\nmat-tab-group[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    max-width: 4098px;\r\n}\r\n\r\ndiv.news-layout[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    height: 100%;\r\n    width: 100%;\r\n    \r\n}\r\n\r\ndiv.news-content[_ngcontent-%COMP%] {\r\n    display: block;\r\n    max-height: 150px;\r\n}\r\n\r\nimg.news-image[_ngcontent-%COMP%] {\r\n    width: 300px;\r\n    height: 150px;\r\n    display: flex;\r\n    margin: 10px;\r\n}\r\n\r\nh3[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    text-decoration: underline;\r\n    font-weight: bold;\r\n    font-style: italic;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n    text-align: justify;\r\n  text-justify: inter-word;\r\n    margin: 0px;\r\n    max-height: 150px;\r\n    width: 100%;\r\n    max-width: 100%;\r\n    display: block\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixXQUFXOztBQUVmOztBQUNBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsMEJBQTBCO0lBQzFCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxtQkFBbUI7RUFDckIsd0JBQXdCO0lBQ3RCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsV0FBVztJQUNYLGVBQWU7SUFDZjtBQUNKIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5kaXYuY29udGFpbmVyIHtcclxuICAgIG1heC1oZWlnaHQ6IDMwMDBweDtcclxuICAgIG1heC13aWR0aDogNDA5OHB4O1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmNhcm91Y2VsIHtcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbn1cclxuXHJcbmRpdi5yb3cge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xyXG59XHJcblxyXG51bCB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbn1cclxuXHJcbmxpIHtcclxuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luOiAwIDglOyAgICBcclxufVxyXG5cclxuYSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxubGk6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4NSwgMTg1LCAxODUpO1xyXG59XHJcblxyXG4ubmV3cy10aXRsZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxubWF0LXRhYiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogNDA5OHB4O1xyXG59XHJcblxyXG5tYXQtdGFiLWdyb3VwIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiA0MDk4cHg7XHJcbn1cclxuXHJcbmRpdi5uZXdzLWxheW91dCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBcclxufVxyXG5kaXYubmV3cy1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWF4LWhlaWdodDogMTUwcHg7XHJcbn1cclxuXHJcbmltZy5uZXdzLWltYWdlIHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG59XHJcblxyXG5oMyB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcblxyXG5wIHtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgdGV4dC1qdXN0aWZ5OiBpbnRlci13b3JkO1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAxNTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogYmxvY2tcclxufSJdfQ== */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "B6Pq":
/*!*****************************************************!*\
  !*** ./src/app/core/carousel/carousel.component.ts ***!
  \*****************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _carousel_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carousel.animation */ "mVaw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _shared_common_pipes_trim_text_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/common-pipes/trim-text.pipe */ "GzVR");






function CarouselComponent_ng_container_2_img_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CarouselComponent_ng_container_2_img_2_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r5.routSlides(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const news_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", news_r1.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("alt", news_r1.title);
} }
function CarouselComponent_ng_container_2_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "trimText");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Click here to learn More!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const news_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 2, news_r1.description));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", "/home#" + news_r1.link, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function CarouselComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CarouselComponent_ng_container_2_img_2_Template, 1, 2, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, CarouselComponent_ng_container_2_div_3_Template, 7, 4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", i_r2 === ctx_r0.current);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", i_r2 === ctx_r0.current);
} }
class CarouselComponent {
    constructor() {
        this.current = 0;
        this.cycleTime = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["interval"])(5000)
            .subscribe(() => { this.routSlides(); });
    }
    ngOnDestroy() {
        this.cycleTime.unsubscribe();
    }
    routSlides() {
        const next = this.current + 1;
        const prev = this.banners.length - 1;
        this.current = this.current === prev ? 0 : next;
        // console.log(this.current);
    }
}
CarouselComponent.ɵfac = function CarouselComponent_Factory(t) { return new (t || CarouselComponent)(); };
CarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CarouselComponent, selectors: [["app-carousel"]], inputs: { banners: "banners" }, decls: 3, vars: 1, consts: [[1, "carousel"], [1, "carousel-container"], [4, "ngFor", "ngForOf"], [1, "image-link"], ["class", "slide", 3, "src", "alt", "click", 4, "ngIf"], ["class", "container", "fxLayout", "column", "fxLayoutAlign", "end start", 4, "ngIf"], [1, "slide", 3, "src", "alt", "click"], ["fxLayout", "column", "fxLayoutAlign", "end start", 1, "container"], [1, "content-container"], [1, "content-text"], [1, "content-link", 3, "href"]], template: function CarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CarouselComponent_ng_container_2_Template, 4, 2, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.banners);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"]], pipes: [_shared_common_pipes_trim_text_pipe__WEBPACK_IMPORTED_MODULE_5__["TrimTextPipe"]], styles: ["div.carousel[_ngcontent-%COMP%] {\r\n    margin: 0px;\r\n    padding: 0px;\r\n    position: relative;\r\n    display: inline-block;\r\n    height: 100%;\r\n    max-height: 500px;\r\n    width: 100%;\r\n    overflow: hidden;\r\n}\r\n\r\ndiv.carousel-container[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\nimg.slide[_ngcontent-%COMP%] {\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    max-height: 500px;\r\n    object-fit: cover;\r\n    transition: 300ms;\r\n}\r\n\r\nimg.slide[_ngcontent-%COMP%]:hover {\r\n    transform: scale(1.010);\r\n}\r\n\r\ndiv.container[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n    left: 1%;\r\n    bottom: 5%;\r\n    width: 300px;\r\n    height: 100px;\r\n    position: absolute;\r\n    border: black;\r\n}\r\n\r\ndiv.content-container[_ngcontent-%COMP%] {\r\n    background-color: lightgray;\r\n    border-radius: 20px;\r\n    margin: 0px;\r\n    padding: 10px;\r\n    text-align: center;\r\n    display: block;\r\n    width: 100%;\r\n    max-width: 350px;\r\n    height: 100%;\r\n    max-height: 80px;\r\n    box-shadow:0 0 20px rgba(0,0,0,0.5);\r\n}\r\n\r\np.content-text[_ngcontent-%COMP%] {\r\n    color: white;\r\n    text-align: center;\r\n    font-size: 15px;\r\n    font-weight: bold;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    border-radius: 5px;\r\n    text-shadow:0 0 20px rgba(0,0,0,0.5);\r\n}\r\n\r\na.content-link[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    background-color:  rgb(131, 160, 184);\r\n    color: white;\r\n    padding: 0.2em;\r\n    border-radius: 0.5rem;\r\n    box-shadow:0 0 20px rgba(0,0,0,0.5);\r\n}\r\n\r\na.image-link[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcm91c2VsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFFBQVE7SUFDUixVQUFVO0lBQ1YsWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixtQ0FBbUM7QUFDdkM7O0FBR0E7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIseUNBQXlDO0lBQ3pDLGtCQUFrQjtJQUNsQixvQ0FBb0M7QUFDeEM7O0FBR0E7SUFDSSxxQkFBcUI7SUFDckIscUNBQXFDO0lBQ3JDLFlBQVk7SUFDWixjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoiY2Fyb3VzZWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuZGl2LmNhcm91c2VsIHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWF4LWhlaWdodDogNTAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbmRpdi5jYXJvdXNlbC1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmltZy5zbGlkZSB7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXgtaGVpZ2h0OiA1MDBweDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgdHJhbnNpdGlvbjogMzAwbXM7XHJcbn1cclxuXHJcbmltZy5zbGlkZTpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEwKTtcclxufVxyXG5cclxuZGl2LmNvbnRhaW5lciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBsZWZ0OiAxJTtcclxuICAgIGJvdHRvbTogNSU7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm9yZGVyOiBibGFjaztcclxufVxyXG5cclxuZGl2LmNvbnRlbnQtY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAzNTBweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1heC1oZWlnaHQ6IDgwcHg7XHJcbiAgICBib3gtc2hhZG93OjAgMCAyMHB4IHJnYmEoMCwwLDAsMC41KTtcclxufVxyXG5cclxuXHJcbnAuY29udGVudC10ZXh0IHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB0ZXh0LXNoYWRvdzowIDAgMjBweCByZ2JhKDAsMCwwLDAuNSk7XHJcbn1cclxuXHJcblxyXG5hLmNvbnRlbnQtbGluayB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgcmdiKDEzMSwgMTYwLCAxODQpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMC4yZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgICBib3gtc2hhZG93OjAgMCAyMHB4IHJnYmEoMCwwLDAsMC41KTtcclxufVxyXG5cclxuYS5pbWFnZS1saW5rIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXX0= */"], data: { animation: [_carousel_animation__WEBPACK_IMPORTED_MODULE_1__["carouselAnimation"]] } });


/***/ }),

/***/ "D5oR":
/*!***************************************************!*\
  !*** ./src/app/user/profile/profile.component.ts ***!
  \***************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_shared_modal_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/modal/modal.component */ "0zEo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/user.service */ "f4AX");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../edit/edit.component */ "3a9W");
/* harmony import */ var _control_view_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../control-view.directive */ "z+wL");
/* harmony import */ var _client_center_register_claim_register_claim_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../client-center/register-claim/register-claim.component */ "zkKR");
/* harmony import */ var _shipments_shipments_shipments_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shipments/shipments/shipments.component */ "/ac/");
/* harmony import */ var _shipments_create_edit_shipment_create_edit_shipment_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shipments/create-edit-shipment/create-edit-shipment.component */ "hypl");
/* harmony import */ var _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/loader/loader.component */ "o7am");
















function ProfileComponent_app_loader_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-loader");
} }
function ProfileComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
} }
function ProfileComponent_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Admin ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ProfileComponent_ng_template_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Mr. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ProfileComponent_ng_template_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Mrs. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class ProfileComponent {
    constructor(userService, router, matDialog) {
        this.userService = userService;
        this.router = router;
        this.matDialog = matDialog;
        this.user$ = this.userService.user$;
        this.isAdmin$ = this.userService.isAdmin$;
        this.isLoading = false;
        this.resetControls = () => this.controls = {
            editMode: true,
            claimMode: true,
            myShipments: true,
            createShipment: true,
        };
        this.controls = this.resetControls();
        this.isVisible = false;
    }
    ngOnInit() {
        this.controls.myShipments = false;
        this.userService.getUser().subscribe({
            next: (userData) => this.userData = userData
        });
    }
    toggleView(controlsView) {
        const el = controlsView.elementRef.nativeElement.id;
        this.controls = this.resetControls();
        this.controls[el] = !this.controls[el];
    }
    openModal() {
        const dialogCfg = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogConfig"]();
        dialogCfg.disableClose = true;
        dialogCfg.id = "custom-modal";
        dialogCfg.data = {
            title: "Are you sure you want to say Goodbye?",
            isConfirmed: true,
            userDelete: true,
            accept: 'Goodbye'
        };
        const modalDialog = this.matDialog.open(src_app_shared_modal_modal_component__WEBPACK_IMPORTED_MODULE_1__["ModalComponent"], dialogCfg);
        modalDialog.afterClosed().subscribe({
            next: result => {
                if (result) {
                    this.deleteUser();
                }
            }
        });
    }
    deleteUser() {
        this.isLoading = true;
        this.userService.deleteUser().subscribe({
            next: data => {
                this.isLoading = false;
                this.router.navigateByUrl('/auth/register');
            }
        });
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialog"])); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 48, vars: 20, consts: [["fxFlex", "", "fxLayout.xs", "column", "fxLayoutAlign.xs", "space-around center", 1, "layout"], [4, "ngIf"], [1, "profile"], [1, "profile-layout"], [1, "profile-header"], [1, "profile-title"], [4, "ngIf", "ngIfThen", "ngIfElse"], [1, "profile-content"], ["mat-card-image", "", 3, "src"], [1, "profile-actions"], ["mat-button", "", 1, "edit", "btn", 3, "click"], ["mat-button", "", 1, "create", "shipment", "btn", 3, "click"], ["mat-button", "", 1, "my-shipments", "btn", 3, "click"], ["mat-button", "", 1, "register", "claim", "btn", 3, "click"], ["mat-button", "", 1, "delete-user", 3, "click"], ["fxFlex.xs", "1", 1, "container"], ["id", "editMode", 3, "appIsVisible"], ["controlView", "appIsVisible"], ["id", "claimMode", 3, "appIsVisible"], ["controlViewClaim", "appIsVisible"], ["id", "myShipments", 3, "appIsVisible"], ["controlViewShipments", "appIsVisible"], ["id", "createShipment", 3, "appIsVisible"], ["controlCreateShipment", "appIsVisible"], ["isMale", ""], ["isFemale", ""]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ProfileComponent_app_loader_1_Template, 1, 0, "app-loader", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Welcome, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, ProfileComponent_ng_container_7_Template, 1, 0, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, ProfileComponent_span_8_Template, 2, 0, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](14, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](17, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProfileComponent_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](37); return ctx.toggleView(_r3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Edit profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProfileComponent_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](43); return ctx.toggleView(_r6); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Create shipment");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProfileComponent_Template_button_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](41); return ctx.toggleView(_r5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "My shipments");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProfileComponent_Template_button_click_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](39); return ctx.toggleView(_r4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Register Claim");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProfileComponent_Template_button_click_33_listener() { return ctx.openModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Delete Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "app-edit", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "app-register-claim", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "app-shipments", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "app-create-shipment", 22, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](44, ProfileComponent_ng_template_44_Template, 2, 0, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](46, ProfileComponent_ng_template_46_Template, 2, 0, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](45);
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](47);
        let tmp_5_0 = null;
        let tmp_6_0 = null;
        let tmp_7_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.userData == null ? null : ctx.userData.gender) === "male")("ngIfThen", _r7)("ngIfElse", _r9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 12, ctx.isAdmin$));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", (tmp_5_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 14, ctx.user$)) == null ? null : tmp_5_0.username, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", (tmp_6_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](14, 16, ctx.user$)) == null ? null : tmp_6_0.image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("You have ", (tmp_7_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](17, 18, ctx.user$)) == null ? null : tmp_7_0.shipments == null ? null : tmp_7_0.shipments.length, " shipments in transit.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("appIsVisible", ctx.controls.editMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("appIsVisible", ctx.controls.claimMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("appIsVisible", ctx.controls.myShipments);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("appIsVisible", ctx.controls.createShipment);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardImage"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _edit_edit_component__WEBPACK_IMPORTED_MODULE_9__["EditComponent"], _control_view_directive__WEBPACK_IMPORTED_MODULE_10__["ControlViewDirective"], _client_center_register_claim_register_claim_component__WEBPACK_IMPORTED_MODULE_11__["RegisterClaimComponent"], _shipments_shipments_shipments_component__WEBPACK_IMPORTED_MODULE_12__["ShipmentsComponent"], _shipments_create_edit_shipment_create_edit_shipment_component__WEBPACK_IMPORTED_MODULE_13__["CreateEditShipmentComponent"], _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_14__["LoaderComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: ["div.layout[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    width: 100%;\r\n    padding: 0px;\r\n    background-color: white;\r\n    display: flex;\r\n}\r\n\r\ndiv.profile-layout[_ngcontent-%COMP%]{\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\n.profile[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    width: 350px;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.profile-title[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    font-size: 24px;\r\n    font-weight: bold;\r\n    margin: auto;\r\n    padding: 20px 0px 20px 0px;\r\n}\r\n\r\n.profile-content[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    padding: 20px 0px 20px 0px;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n    height: 150px;\r\n    width: 150px;\r\n}\r\n\r\nul[_ngcontent-%COMP%] {\r\n    padding-inline-start: 0px;\r\n}\r\n\r\nli[_ngcontent-%COMP%] {\r\n    display: block;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    color: black;\r\n}\r\n\r\nbutton.delete-user[_ngcontent-%COMP%] {\r\n    color: red;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n    min-width: 300px;\r\n    display: flex;\r\n}\r\n\r\napp-edit[_ngcontent-%COMP%], app-register-claim[_ngcontent-%COMP%], app-shipments[_ngcontent-%COMP%], app-create-shipment[_ngcontent-%COMP%] {\r\n    display: block;\r\n    width: 100%;\r\n    min-width: 300px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBR0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuZGl2LmxheW91dCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuZGl2LnByb2ZpbGUtbGF5b3V0e1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcblxyXG4ucHJvZmlsZSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMzUwcHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4ucHJvZmlsZS10aXRsZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcGFkZGluZzogMjBweCAwcHggMjBweCAwcHg7XHJcbn1cclxuXHJcbi5wcm9maWxlLWNvbnRlbnQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMjBweCAwcHggMjBweCAwcHg7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG59XHJcblxyXG51bCB7XHJcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogMHB4O1xyXG59XHJcblxyXG5saSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuYnV0dG9uLmRlbGV0ZS11c2VyIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuYXBwLWVkaXQsIGFwcC1yZWdpc3Rlci1jbGFpbSwgYXBwLXNoaXBtZW50cywgYXBwLWNyZWF0ZS1zaGlwbWVudCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLXdpZHRoOiAzMDBweDtcclxufVxyXG5cclxuIl19 */"] });


/***/ }),

/***/ "FsWP":
/*!****************************************************************************************!*\
  !*** ./src/app/client-center/questions-and-answers/questions-and-answers.component.ts ***!
  \****************************************************************************************/
/*! exports provided: QuestionsAndAnswersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsAndAnswersComponent", function() { return QuestionsAndAnswersComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_shared_modal_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/modal/modal.component */ "0zEo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core_services_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/store.service */ "z3Pw");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/auth.service */ "7dP1");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _search_question_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../search-question.pipe */ "9Cpb");














function QuestionsAndAnswersComponent_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function QuestionsAndAnswersComponent_tbody_16_td_10_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QuestionsAndAnswersComponent_tbody_16_td_10_Template_button_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r7.openModal($event, _r4 == null ? null : _r4.id, _r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function QuestionsAndAnswersComponent_tbody_16_tr_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const question_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", question_r2.description, " ");
} }
function QuestionsAndAnswersComponent_tbody_16_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "tr", null, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td", 6, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QuestionsAndAnswersComponent_tbody_16_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const question_r2 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r10.toogleInfo(question_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "info");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, QuestionsAndAnswersComponent_tbody_16_td_10_Template, 4, 0, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, QuestionsAndAnswersComponent_tbody_16_tr_12_Template, 4, 1, "tr", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const question_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", question_r2._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](question_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 4, ctx_r1.isAdmin$));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", question_r2.showDetails);
} }
class QuestionsAndAnswersComponent {
    constructor(storeService, authService, matDialog) {
        this.storeService = storeService;
        this.authService = authService;
        this.matDialog = matDialog;
        this.isAdmin$ = this.authService.isAdmin$;
        this.isLoading = false;
    }
    ngOnInit() {
        this.storeService.getQuestions().subscribe({
            next: (data) => {
                this.questions = data;
            }
        });
    }
    toogleInfo(question) {
        question.showDetails = !question.showDetails;
    }
    openModal(event, questionId, questionRow) {
        const dialogCfg = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogConfig"]();
        dialogCfg.disableClose = true;
        dialogCfg.id = "custom-modal";
        dialogCfg.data = {
            title: "Are you sure you want to delete?",
            isConfirmed: true,
        };
        const modalDialog = this.matDialog.open(src_app_shared_modal_modal_component__WEBPACK_IMPORTED_MODULE_1__["ModalComponent"], dialogCfg);
        modalDialog.afterClosed().subscribe({
            next: result => {
                if (result) {
                    this.deleteHandler(questionId, questionRow);
                }
            }
        });
    }
    deleteHandler(questionId, questionRow) {
        this.isLoading = true;
        this.storeService.deleteQuestion(questionId).subscribe({
            next: (data) => {
                this.isLoading = false;
                questionRow.remove();
            }
        });
    }
}
QuestionsAndAnswersComponent.ɵfac = function QuestionsAndAnswersComponent_Factory(t) { return new (t || QuestionsAndAnswersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_store_service__WEBPACK_IMPORTED_MODULE_3__["StoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialog"])); };
QuestionsAndAnswersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: QuestionsAndAnswersComponent, selectors: [["app-questions-and-answers"]], decls: 18, vars: 8, consts: [["fxLayout", "", "fxLayoutAlign", "center center"], ["fxFlex", "40%"], ["matInput", "", "type", "text", "placeholder", "Filter", 3, "ngModel", "ngModelChange"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["questionRow", ""], [3, "id"], ["questionId", ""], ["mat-icon-button", "", "color", "accent", 3, "click"], [1, "mat-18"], ["mat-icon-button", "", "color", "warn", 3, "click"], ["colspan", "2"]], template: function QuestionsAndAnswersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Qusetions & Answers");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function QuestionsAndAnswersComponent_Template_input_ngModelChange_5_listener($event) { return ctx.searchValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "View More");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, QuestionsAndAnswersComponent_th_14_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](15, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, QuestionsAndAnswersComponent_tbody_16_Template, 13, 6, "tbody", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](17, "searchQuestion");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.searchValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](15, 3, ctx.isAdmin$));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](17, 5, ctx.questions, ctx.searchValue));
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutAlignDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"], _search_question_pipe__WEBPACK_IMPORTED_MODULE_12__["SearchQuestionPipe"]], styles: ["h1[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n\r\ntable[_ngcontent-%COMP%] {\r\n    border-collapse: collapse;\r\n    margin: 15px 0;\r\n    font-size: 0.9em;\r\n    font-family: sans-serif;\r\n    min-width: 300px;\r\n    flex: 1;\r\n}\r\n\r\nthead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n    color: #adadad \r\n}\r\n\r\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\r\n    padding: 12px 15px;\r\n}\r\n\r\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    border-bottom: 1px solid #dddddd;\r\n}\r\n\r\ntbody[_ngcontent-%COMP%]   tr.active-row[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n}\r\n\r\nspan[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1ZXN0aW9ucy1hbmQtYW5zd2Vycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixPQUFPO0FBQ1g7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJxdWVzdGlvbnMtYW5kLWFuc3dlcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxudGFibGUge1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIG1hcmdpbjogMTVweCAwO1xyXG4gICAgZm9udC1zaXplOiAwLjllbTtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgbWluLXdpZHRoOiAzMDBweDtcclxuICAgIGZsZXg6IDE7XHJcbn1cclxuXHJcbnRoZWFkIHRyIHtcclxuICAgIGNvbG9yOiAjYWRhZGFkIFxyXG59XHJcblxyXG50aCwgdGQge1xyXG4gICAgcGFkZGluZzogMTJweCAxNXB4O1xyXG59XHJcblxyXG50Ym9keSB0ciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZGRkZDtcclxufVxyXG5cclxudGJvZHkgdHIuYWN0aXZlLXJvdyB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuc3BhbiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "FxTl":
/*!*************************************************!*\
  !*** ./src/app/core/footer/footer.component.ts ***!
  \*************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 3, vars: 0, consts: [[1, "container"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "SoftUni project with Angilar! All rights reserved! 2021\u00A9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["div.container[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    color: white;\r\n    background-color: #616161;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    width: 100%;\r\n    height: 50%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFdBQVc7QUFDZiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi5jb250YWluZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYxNjE2MTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5wIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "GzVR":
/*!*******************************************************!*\
  !*** ./src/app/shared/common-pipes/trim-text.pipe.ts ***!
  \*******************************************************/
/*! exports provided: TrimTextPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrimTextPipe", function() { return TrimTextPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class TrimTextPipe {
    transform(value) {
        return value.length > 30 ? value.substring(0, 30) + '...' : value;
    }
}
TrimTextPipe.ɵfac = function TrimTextPipe_Factory(t) { return new (t || TrimTextPipe)(); };
TrimTextPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "trimText", type: TrimTextPipe, pure: true });


/***/ }),

/***/ "HqwY":
/*!************************************!*\
  !*** ./src/app/auth/validators.ts ***!
  \************************************/
/*! exports provided: emailValidator, imageValidator, rePassCheckFn, genderValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emailValidator", function() { return emailValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imageValidator", function() { return imageValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rePassCheckFn", function() { return rePassCheckFn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "genderValidator", function() { return genderValidator; });
function emailValidator(control) {
    const value = control.value;
    if (!value) {
        return null;
    }
    const check = /^[A-Za-z0-9]+@\w+\.\w{2,3}$/g.test(value);
    return check ? null : { emailValidator: true };
}
function imageValidator(control) {
    const value = control.value;
    if (!value) {
        return null;
    }
    const check = /^https?:\/\//g.test(value);
    return check ? null : { imageValidator: true };
}
function rePassCheckFn(target) {
    return function rePassCheck(control) {
        return target.value === control.value ? null : { rePassCheck: true };
    };
}
function genderValidator(control) {
    const value = control.value;
    if (!value) {
        return null;
    }
    const check = (value === 'male') || (value === 'female') ? null : { genderValidator: true };
    return check;
}


/***/ }),

/***/ "NUQi":
/*!*******************************************!*\
  !*** ./src/app/core/guards/auth.guard.ts ***!
  \*******************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "7dP1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivateChild(childRoute, state) {
        return this.authService.currentUser$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])(user => user === undefined ? this.authService.authenticate() : [user]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(user =>  true || false), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["first"])());
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac });


/***/ }),

/***/ "NjLB":
/*!******************************************************************!*\
  !*** ./src/app/client-center/claim-list/claim-list.component.ts ***!
  \******************************************************************/
/*! exports provided: ClaimListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClaimListComponent", function() { return ClaimListComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_shared_modal_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/modal/modal.component */ "0zEo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/auth.service */ "7dP1");
/* harmony import */ var src_app_core_services_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/store.service */ "z3Pw");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/loader/loader.component */ "o7am");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _search_claim_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../search-claim.pipe */ "shqu");

















function ClaimListComponent_app_loader_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-loader");
} }
function ClaimListComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div");
} }
function ClaimListComponent_ng_template_6_ng_container_4_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "user");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ClaimListComponent_ng_template_6_ng_container_4_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} }
function ClaimListComponent_ng_template_6_ng_container_4_tbody_20_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const claim_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](claim_r10 == null ? null : claim_r10.creator == null ? null : claim_r10.creator.username);
} }
function ClaimListComponent_ng_template_6_ng_container_4_tbody_20_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ClaimListComponent_ng_template_6_ng_container_4_tbody_20_ng_container_16_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19); const claim_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r17.toogleInfo(claim_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "info");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ClaimListComponent_ng_template_6_ng_container_4_tbody_20_ng_container_16_Template_button_click_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19); _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](7); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r20.updateHandler($event, _r13 == null ? null : _r13.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "system_update");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ClaimListComponent_ng_template_6_ng_container_4_tbody_20_ng_container_16_Template_button_click_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19); _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](7); const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r21.openModal($event, _r13 == null ? null : _r13.id, _r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} }
function ClaimListComponent_ng_template_6_ng_container_4_tbody_20_tr_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const claim_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", claim_r10.description, " ");
} }
function ClaimListComponent_ng_template_6_ng_container_4_tbody_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "tr", 12, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ClaimListComponent_ng_template_6_ng_container_4_tbody_20_td_4_Template, 2, 1, "td", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "td", 14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, ClaimListComponent_ng_template_6_ng_container_4_tbody_20_ng_container_16_Template, 13, 0, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](17, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](18, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, ClaimListComponent_ng_template_6_ng_container_4_tbody_20_tr_19_Template, 4, 1, "tr", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const claim_r10 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    let tmp_0_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", (claim_r10 == null ? null : claim_r10.creator == null ? null : claim_r10.creator.username) === ((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 9, ctx_r9.user$)) == null ? null : tmp_0_0.username) ? "own-claims" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 11, ctx_r9.isAdmin$));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", claim_r10._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](claim_r10._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 13, claim_r10.createdAt));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](claim_r10.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](claim_r10 == null ? null : claim_r10.trackingNumber == null ? null : claim_r10.trackingNumber._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](17, 15, ctx_r9.user$)._id == claim_r10.creator._id || _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](18, 17, ctx_r9.isAdmin$));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", claim_r10.showDetails);
} }
function ClaimListComponent_ng_template_6_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-form-field", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ClaimListComponent_ng_template_6_ng_container_4_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r23.searchValue = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, ClaimListComponent_ng_template_6_ng_container_4_th_8_Template, 2, 0, "th", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Claim number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Created At");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Package tracking number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, ClaimListComponent_ng_template_6_ng_container_4_ng_container_18_Template, 7, 0, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](19, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, ClaimListComponent_ng_template_6_ng_container_4_tbody_20_Template, 20, 19, "tbody", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](21, "searchClaim");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r6.searchValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 4, ctx_r6.isAdmin$));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](19, 6, ctx_r6.isLogged$));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](21, 8, ctx_r6.claims, ctx_r6.searchValue));
} }
function ClaimListComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Register Claim");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ClaimListComponent_ng_template_6_ng_container_4_Template, 22, 11, "ng-container", 1);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.claims);
} }
function ClaimListComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "You are not logged in! Click here ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "LOGIN");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " !");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class ClaimListComponent {
    constructor(authService, storeService, router, matDialog) {
        this.authService = authService;
        this.storeService = storeService;
        this.router = router;
        this.matDialog = matDialog;
        this.isLogged$ = this.authService.isLogged$;
        this.isAdmin$ = this.authService.isAdmin$;
        this.user$ = this.authService.currentUser$;
        this.isLoading = false;
    }
    ngOnInit() {
        this.isLoading = true;
        this.storeService.getClaims().subscribe({
            next: (data) => {
                this.isLoading = false;
                this.claims = data;
            }
        });
    }
    toogleInfo(question) {
        question.showDetails = !question.showDetails;
    }
    openModal(event, claimId, claimRow) {
        const dialogCfg = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogConfig"]();
        dialogCfg.disableClose = true;
        dialogCfg.id = "custom-modal";
        dialogCfg.data = {
            title: "Are you sure you want to delete?",
            isConfirmed: true,
        };
        const modalDialog = this.matDialog.open(src_app_shared_modal_modal_component__WEBPACK_IMPORTED_MODULE_1__["ModalComponent"], dialogCfg);
        modalDialog.afterClosed().subscribe({
            next: result => {
                if (result) {
                    this.deleteHandler(claimId, claimRow);
                }
            }
        });
    }
    deleteHandler(claimId, claimRow) {
        this.isLoading = true;
        this.storeService.deleteClaim(claimId).subscribe({
            next: (data) => {
                this.isLoading = false;
                claimRow.remove();
            }
        });
    }
    updateHandler(event, claimId) {
        this.router.navigateByUrl(`/client-center/claims/${claimId}/edit`);
    }
}
ClaimListComponent.ɵfac = function ClaimListComponent_Factory(t) { return new (t || ClaimListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_store_service__WEBPACK_IMPORTED_MODULE_4__["StoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialog"])); };
ClaimListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ClaimListComponent, selectors: [["app-claim-list"]], decls: 10, vars: 6, consts: [[1, "layout"], [4, "ngIf"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["logged", ""], ["logout", ""], [1, "register-content"], ["routerLink", "/client-center/claims/register", 1, "register-link"], ["fxLayout", "", "fxLayoutAlign", "center center"], ["fxFlex", "40%", "fxFlex.xs", "80%"], ["matInput", "", "type", "text", "placeholder", "Filter", 3, "ngModel", "ngModelChange"], [1, "table-content"], [4, "ngFor", "ngForOf"], [3, "ngClass"], ["claimRow", ""], [3, "id"], ["claimId", ""], ["mat-icon-button", "", "color", "accent", 3, "click"], [1, "mat-18"], ["mat-icon-button", "", "color", "warn", 3, "click"], ["colspan", "6"], ["routerLink", "/auth/login"]], template: function ClaimListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ClaimListComponent_app_loader_1_Template, 1, 0, "app-loader", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "CLAIMS");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ClaimListComponent_div_4_Template, 1, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, ClaimListComponent_ng_template_6_Template, 5, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, ClaimListComponent_ng_template_8_Template, 6, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](7);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 4, ctx.isLogged$))("ngIfThen", _r2)("ngIfElse", _r4);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_7__["LoaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutAlignDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultFlexDirective"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__["DefaultClassDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIcon"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"], _search_claim_pipe__WEBPACK_IMPORTED_MODULE_15__["SearchClaimPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]], styles: ["h1[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n\r\ntable[_ngcontent-%COMP%] {\r\n    border-collapse: collapse;\r\n    margin: 15px 0;\r\n    font-size: 0.9em;\r\n    font-family: sans-serif;\r\n    min-width: 300px;\r\n    flex: 1;\r\n}\r\n\r\nthead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n    color: #adadad \r\n}\r\n\r\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\r\n    padding: 12px 15px;\r\n}\r\n\r\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    border-bottom: 1px solid #dddddd;\r\n}\r\n\r\ntbody[_ngcontent-%COMP%]   tr.active-row[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n}\r\n\r\na.register-link[_ngcontent-%COMP%] {\r\n    color: black;\r\n    text-align: center;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    text-decoration: none;\r\n    border-radius: 5px;\r\n    text-shadow:0 0 20px rgba(0,0,0,0.5);\r\n}\r\n\r\ndiv.register-content[_ngcontent-%COMP%] {\r\n    background-color: lightgray;\r\n    border-radius: 20px;\r\n    margin: auto;\r\n    text-align: center;\r\n    width: 100%;\r\n    max-width: 250px;\r\n    height: 100%;\r\n    max-height: 30px;\r\n    box-shadow:0 0 20px rgba(0,0,0,0.5);\r\n}\r\n\r\ntr.own-claims[_ngcontent-%COMP%] {\r\n    background-color: rgb(227, 234, 236);\r\n}\r\n\r\ndiv.table-content[_ngcontent-%COMP%] {\r\n    overflow-x:auto;\r\n    width: 100%;\r\n    display: grid\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsYWltLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsT0FBTztBQUNYOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIseUNBQXlDO0lBQ3pDLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYO0FBQ0oiLCJmaWxlIjoiY2xhaW0tbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgbWFyZ2luOiAxNXB4IDA7XHJcbiAgICBmb250LXNpemU6IDAuOWVtO1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xyXG4gICAgZmxleDogMTtcclxufVxyXG5cclxudGhlYWQgdHIge1xyXG4gICAgY29sb3I6ICNhZGFkYWQgXHJcbn1cclxuXHJcbnRoLCB0ZCB7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDE1cHg7XHJcbn1cclxuXHJcbnRib2R5IHRyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkZGRkO1xyXG59XHJcblxyXG50Ym9keSB0ci5hY3RpdmUtcm93IHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5hLnJlZ2lzdGVyLWxpbmsge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHRleHQtc2hhZG93OjAgMCAyMHB4IHJnYmEoMCwwLDAsMC41KTtcclxufVxyXG5cclxuZGl2LnJlZ2lzdGVyLWNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAyNTBweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1heC1oZWlnaHQ6IDMwcHg7XHJcbiAgICBib3gtc2hhZG93OjAgMCAyMHB4IHJnYmEoMCwwLDAsMC41KTtcclxufVxyXG5cclxudHIub3duLWNsYWltcyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI3LCAyMzQsIDIzNik7XHJcbn1cclxuXHJcbmRpdi50YWJsZS1jb250ZW50IHtcclxuICAgIG92ZXJmbG93LXg6YXV0bztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZ3JpZFxyXG59Il19 */"] });


/***/ }),

/***/ "OLCm":
/*!*********************************************!*\
  !*** ./src/app/shared/common-validators.ts ***!
  \*********************************************/
/*! exports provided: shipmentTypeValidator, shipmentSize, shipmentWeight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shipmentTypeValidator", function() { return shipmentTypeValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shipmentSize", function() { return shipmentSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shipmentWeight", function() { return shipmentWeight; });
function shipmentTypeValidator(control) {
    const value = control.value;
    if (!value) {
        return null;
    }
    const check = (value === 'economy') || (value === 'express') ? null : { shipmentValidator: true };
    return check;
}
function shipmentSize(control) {
    const value = control.value;
    if (!value) {
        return null;
    }
    const check = /\d{2,3}\/\d{2,3}\/\d{2,3}/g.test(value) ? null : { shipmentSize: true };
    return check;
}
function shipmentWeight(control) {
    const value = control.value;
    if (!value) {
        return null;
    }
    const check = /[0-9]{1,3}/g.test(value) ? null : { shipmentSize: true };
    return check;
}


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../material/material.module */ "hctd");
/* harmony import */ var _common_pipes_trim_text_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common-pipes/trim-text.pipe */ "GzVR");
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loader/loader.component */ "o7am");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal/modal.component */ "0zEo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_1__["MaterialModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_common_pipes_trim_text_pipe__WEBPACK_IMPORTED_MODULE_2__["TrimTextPipe"],
        _loader_loader_component__WEBPACK_IMPORTED_MODULE_3__["LoaderComponent"], _modal_modal_component__WEBPACK_IMPORTED_MODULE_4__["ModalComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _material_material_module__WEBPACK_IMPORTED_MODULE_1__["MaterialModule"]], exports: [_common_pipes_trim_text_pipe__WEBPACK_IMPORTED_MODULE_2__["TrimTextPipe"],
        _loader_loader_component__WEBPACK_IMPORTED_MODULE_3__["LoaderComponent"]] }); })();


/***/ }),

/***/ "R5Xw":
/*!******************************************************!*\
  !*** ./src/app/shipments/status/status.component.ts ***!
  \******************************************************/
/*! exports provided: StatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusComponent", function() { return StatusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");


const _c0 = ["statusBar"];
class StatusComponent {
    constructor(render) {
        this.render = render;
        this.statuses = {
            created: 2,
            transit: 50,
            completed: 100
        };
    }
    ngAfterViewInit() {
        this.render.setStyle(this.statusBar.nativeElement, 'width', `${this.statuses[this.status]}%`);
    }
    ngOnInit() { }
}
StatusComponent.ɵfac = function StatusComponent_Factory(t) { return new (t || StatusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
StatusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StatusComponent, selectors: [["app-status"]], viewQuery: function StatusComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.statusBar = _t.first);
    } }, inputs: { status: "status" }, decls: 21, vars: 0, consts: [[1, "container"], [1, "titles"], [1, "title"], [1, "progress"], [1, "progress-bar-nok"], [1, "progress-bar"], ["statusBar", ""]], template: function StatusComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "place");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Created");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "place");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "In transit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "place");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIcon"]], styles: [".container[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\n.progress-bar[_ngcontent-%COMP%] {\r\n    border: 3px solid rgb(150, 224, 39);\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\n.progress-bar-nok[_ngcontent-%COMP%] {\r\n    background-color: rgb(216, 43, 43);\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\n.progress[_ngcontent-%COMP%] {\r\n    border: 1px solid lightgrey;\r\n    display: flex;\r\n}\r\n\r\n.title[_ngcontent-%COMP%] {\r\n    display: flex;\r\n}\r\n\r\n.titles[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXR1cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQyxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEMiLCJmaWxlIjoic3RhdHVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ucHJvZ3Jlc3MtYmFyIHtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHJnYigxNTAsIDIyNCwgMzkpO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5wcm9ncmVzcy1iYXItbm9rIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTYsIDQzLCA0Myk7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnByb2dyZXNzIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4udGl0bGVzIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufSJdfQ== */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _core_sidenavigation_sidenavigation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/sidenavigation/sidenavigation.component */ "gOJm");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _core_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/navigation/navigation.component */ "bh3X");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/footer/footer.component */ "FxTl");







class AppComponent {
    constructor() {
        this.title = 'courier-application';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 11, vars: 0, consts: [["mode", "push", "role", "navigation"], ["sidenav", ""], [3, "sidenavClose"], ["fxLayout", "column"], ["role", "navigation"], [3, "sidenavToggle"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-sidenavigation", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sidenavClose", function AppComponent_Template_app_sidenavigation_sidenavClose_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r0.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-sidenav-content", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "header", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-navigation", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sidenavToggle", function AppComponent_Template_app_navigation_sidenavToggle_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenav"], _core_sidenavigation_sidenavigation_component__WEBPACK_IMPORTED_MODULE_2__["SidenavigationComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenavContent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _core_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_4__["NavigationComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"], _core_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]], styles: ["mat-sidenav-container[_ngcontent-%COMP%], mat-sidenav-content[_ngcontent-%COMP%], mat-sidenav[_ngcontent-%COMP%] {\r\n    background-color: white;\r\n    height: 100%;\r\n    max-height: 861px;\r\n}\r\n\r\n\r\nmat-sidenav[_ngcontent-%COMP%] {\r\n    width: 300px;\r\n}\r\n\r\n\r\nfooter[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    flex: 1;\r\n    bottom: 0;\r\n\r\n    height: 100%;\r\n    max-height: 70px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7OztBQUdBO0lBQ0ksWUFBWTtBQUNoQjs7O0FBR0E7SUFDSSxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLFNBQVM7O0lBRVQsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1zaWRlbmF2LWNvbnRhaW5lciwgbWF0LXNpZGVuYXYtY29udGVudCwgbWF0LXNpZGVuYXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXgtaGVpZ2h0OiA4NjFweDtcclxufVxyXG5cclxuXHJcbm1hdC1zaWRlbmF2IHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxufVxyXG5cclxuXHJcbmZvb3RlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgYm90dG9tOiAwO1xyXG5cclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1heC1oZWlnaHQ6IDcwcHg7XHJcbn1cclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ "UYTb":
/*!**************************************************!*\
  !*** ./src/app/core/services/storage.service.ts ***!
  \**************************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class StorageService {
    constructor() {
        this.localStorage = localStorage;
    }
    setItem(key, data) {
        this.localStorage.setItem(key, JSON.stringify(data));
        return data;
    }
    getItem(key) {
        const item = this.localStorage.getItem(key);
        return typeof key === 'string' ? JSON.parse(item) : true;
    }
    removeItem(key) {
        this.localStorage.removeItem(key);
    }
}
StorageService.ɵfac = function StorageService_Factory(t) { return new (t || StorageService)(); };
StorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StorageService, factory: StorageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "XR5o":
/*!***************************************************************!*\
  !*** ./src/app/client-center/client-center-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ClientCenterRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientCenterRoutingModule", function() { return ClientCenterRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _claim_list_claim_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./claim-list/claim-list.component */ "NjLB");
/* harmony import */ var _questions_and_answers_questions_and_answers_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./questions-and-answers/questions-and-answers.component */ "FsWP");
/* harmony import */ var _client_services_client_services_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./client-services/client-services.component */ "dYhH");
/* harmony import */ var _register_claim_register_claim_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register-claim/register-claim.component */ "zkKR");





const routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/services'
    },
    {
        path: 'claims',
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: _claim_list_claim_list_component__WEBPACK_IMPORTED_MODULE_1__["ClaimListComponent"],
            },
            {
                path: 'register',
                pathMatch: 'full',
                component: _register_claim_register_claim_component__WEBPACK_IMPORTED_MODULE_4__["RegisterClaimComponent"]
            },
            {
                path: ':id/edit',
                pathMatch: 'full',
                component: _register_claim_register_claim_component__WEBPACK_IMPORTED_MODULE_4__["RegisterClaimComponent"]
            },
        ]
    },
    {
        path: 'q&a',
        component: _questions_and_answers_questions_and_answers_component__WEBPACK_IMPORTED_MODULE_2__["QuestionsAndAnswersComponent"]
    },
    {
        path: 'services',
        component: _client_services_client_services_component__WEBPACK_IMPORTED_MODULE_3__["ClientServicesComponent"]
    }
];
const ClientCenterRoutingModule = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "Yu5h":
/*!*********************************************!*\
  !*** ./src/app/user/user-routing.module.ts ***!
  \*********************************************/
/*! exports provided: UserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function() { return UserRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile/profile.component */ "D5oR");


const routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: ''
    },
    {
        path: 'profile',
        component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_1__["ProfileComponent"]
    }
];
const UserRoutingModule = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/core.module */ "pKmL");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./material/material.module */ "hctd");
/* harmony import */ var _user_user_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user/user.module */ "7UCR");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/shared.module */ "PCNd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shipments_shipments_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shipments/shipments.module */ "fTTL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "fXoL");















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
            _user_user_module__WEBPACK_IMPORTED_MODULE_8__["UserModule"],
            _shipments_shipments_module__WEBPACK_IMPORTED_MODULE_11__["ShipmentsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_12__["StoreModule"].forRoot({}, {})
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
        _user_user_module__WEBPACK_IMPORTED_MODULE_8__["UserModule"],
        _shipments_shipments_module__WEBPACK_IMPORTED_MODULE_11__["ShipmentsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _material_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_12__["StoreRootModule"]] }); })();


/***/ }),

/***/ "bh3X":
/*!*********************************************************!*\
  !*** ./src/app/core/navigation/navigation.component.ts ***!
  \*********************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "7dP1");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/storage.service */ "UYTb");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/menu */ "STbY");













function NavigationComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function NavigationComponent_ng_template_15_li_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Admin Panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavigationComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-list-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Client Center");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-menu", null, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Claims");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Q&A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Services");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-list-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Shipments");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-menu", null, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Create Shipment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "My shipments");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, NavigationComponent_ng_template_15_li_26_Template, 4, 0, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_ng_template_15_Template_a_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 3, ctx_r2.isAdmin$));
} }
function NavigationComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-list-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Client Center");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-menu", null, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Q&A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Services");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r10);
} }
class NavigationComponent {
    constructor(router, authService, storage) {
        this.router = router;
        this.authService = authService;
        this.storage = storage;
        this.sidenavToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isLogged$ = this.authService.currentUser$;
        this.isAdmin$ = this.authService.isAdmin$;
        this.toggle = () => {
            // console.log(this.sidenavToggle);
            this.sidenavToggle.emit();
        };
        this.logout = () => {
            this.user = this.storage.getItem('auth');
            this.authService.logout(this.user).subscribe({
                next: () => {
                    this.user = undefined;
                    this.storage.removeItem('auth');
                    this.router.navigateByUrl('/');
                },
                error: (err) => {
                    window.alert(err.message);
                }
            });
        };
    }
    ngOnInit() { }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
NavigationComponent.ɵfac = function NavigationComponent_Factory(t) { return new (t || NavigationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"])); };
NavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavigationComponent, selectors: [["app-navigation"]], outputs: { sidenavToggle: "sidenavToggle" }, decls: 19, vars: 5, consts: [["color", "primary"], ["fxHide.gt-xs", ""], ["mat-icon-button", "", 3, "click"], ["fxFlex", "", "fxLayout", "", "fxLayoutAlign", "start"], ["routerLink", "/home"], [1, "home-link"], ["fxLayoutAlign", "end", "fxHide.xs", ""], ["fxLayout", "", "fxLayoutGap", "25px", 1, "navigation"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["isLoggedIn", ""], ["isNotLoggedIn", ""], [3, "matMenuTriggerFor"], ["mat-list-item", ""], ["clientMenu", "matMenu"], ["mat-menu-item", "", "routerLink", "/client-center/claims", 1, "menu-items"], ["mat-menu-item", "", "routerLink", "/client-center/q&a", 1, "menu-items"], ["mat-menu-item", "", "routerLink", "/client-center/services", 1, "menu-items"], ["shipments", "matMenu"], ["mat-menu-item", "", "routerLink", "/shipments/create", 1, "menu-items"], ["mat-menu-item", "", "routerLink", "/shipments", 1, "menu-items"], ["mat-list-item", "", "routerLink", "/user/profile"], [4, "ngIf"], [3, "click"], ["mat-list-item", "", "routerLink", "/admin"], ["routerLink", "/auth/login"], ["routerLink", "/auth/register"]], template: function NavigationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_Template_button_click_2_listener() { return ctx.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "local_shipping");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Courier EXPRESS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, NavigationComponent_ng_container_13_Template, 1, 0, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, NavigationComponent_ng_template_15_Template, 31, 5, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, NavigationComponent_ng_template_17_Template, 16, 1, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 3, ctx.isLogged$))("ngIfThen", _r1)("ngIfElse", _r3);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__["DefaultShowHideDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutAlignDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutGapDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListItem"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuItem"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"]], styles: ["mat-icon[_ngcontent-%COMP%] {\r\n    font-size: 25px;\r\n    justify-content: center;\r\n    margin:  10px 10px 0px 5px;\r\n}\r\n\r\nmat-list-item[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n}\r\n\r\na[_ngcontent-%COMP%]{\r\n    text-decoration: none;\r\n    color: white;\r\n}\r\n\r\na[_ngcontent-%COMP%]:hover, a[_ngcontent-%COMP%]:active{\r\n    cursor: pointer;\r\n    color: lightgray;\r\n}\r\n\r\n.navigation[_ngcontent-%COMP%]{\r\n    margin: auto;\r\n    padding: 0;\r\n    list-style-type: none;\r\n}\r\n\r\na.menu-items[_ngcontent-%COMP%]{\r\n    color: gray;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmlnYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFHQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0FBQ2hCOztBQUNBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1YscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6Im5hdmlnYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAgMTBweCAxMHB4IDBweCA1cHg7XHJcbn1cclxuXHJcbm1hdC1saXN0LWl0ZW0ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5cclxuYXtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5hOmhvdmVyLCBhOmFjdGl2ZXtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiBsaWdodGdyYXk7XHJcbn1cclxuLm5hdmlnYXRpb257XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG59XHJcblxyXG5hLm1lbnUtaXRlbXN7XHJcbiAgICBjb2xvcjogZ3JheTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "dYhH":
/*!****************************************************************************!*\
  !*** ./src/app/client-center/client-services/client-services.component.ts ***!
  \****************************************************************************/
/*! exports provided: ClientServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientServicesComponent", function() { return ClientServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ClientServicesComponent {
    constructor() { }
    ngOnInit() {
    }
}
ClientServicesComponent.ɵfac = function ClientServicesComponent_Factory(t) { return new (t || ClientServicesComponent)(); };
ClientServicesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClientServicesComponent, selectors: [["app-client-services"]], decls: 7, vars: 0, consts: [[1, "layout"], ["src", "../../../assets/images/customer-support.jpg"], [1, "row"], [1, "container"]], template: function ClientServicesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["img[_ngcontent-%COMP%] {\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    max-height: 190px;\r\n    object-fit: contain;\r\n}\r\n\r\nheader[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    position: relative;\r\n    display: flex;\r\n    width: 100%;\r\n\r\n}\r\n\r\ndiv.row[_ngcontent-%COMP%] {\r\n\r\n    position: absolute;\r\n    display: flex;\r\n    margin: auto;\r\n    bottom: 0;\r\n    width: 100%;\r\n    \r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    color: white;\r\n    background-color: rgb(131, 160, 184, 0.5);\r\n    padding: 0.5em;\r\n    width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC1zZXJ2aWNlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixXQUFXOztBQUVmOztBQUVBOztJQUVJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsWUFBWTtJQUNaLFNBQVM7SUFDVCxXQUFXOztBQUVmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWix5Q0FBeUM7SUFDekMsY0FBYztJQUNkLFdBQVc7QUFDZiIsImZpbGUiOiJjbGllbnQtc2VydmljZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXgtaGVpZ2h0OiAxOTBweDtcclxuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbn1cclxuXHJcbmhlYWRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG59XHJcblxyXG5kaXYucm93IHtcclxuXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBcclxufVxyXG5cclxuaDEge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzMSwgMTYwLCAxODQsIDAuNSk7XHJcbiAgICBwYWRkaW5nOiAwLjVlbTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59Il19 */"] });


/***/ }),

/***/ "f4AX":
/*!***********************************************!*\
  !*** ./src/app/core/services/user.service.ts ***!
  \***********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_shared_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/constants */ "s0Cq");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./storage.service */ "UYTb");






class UserService {
    constructor(http, store) {
        this.http = http;
        this.store = store;
        this._user = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](undefined);
        this.user$ = this._user.asObservable();
        this.isAdmin$ = this.user$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(u => (u === null || u === void 0 ? void 0 : u.role) === 'admin'));
    }
    getUser() {
        const { _id } = this.store.getItem('auth');
        // const headers = new HttpHeaders({ [constants.authHeaderName]: token })
        return this.http.get(src_app_shared_constants__WEBPACK_IMPORTED_MODULE_1__["constants"].baseUrl + 'users/' + _id, { withCredentials: true })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((u) => this._user.next(u)));
    }
    edit(data) {
        const { _id } = this.store.getItem('auth');
        return this.http.put(src_app_shared_constants__WEBPACK_IMPORTED_MODULE_1__["constants"].baseUrl + 'users/' + _id, data, { withCredentials: true });
    }
    deleteUser() {
        const { _id } = this.store.getItem('auth');
        return this.http.put(src_app_shared_constants__WEBPACK_IMPORTED_MODULE_1__["constants"].baseUrl + 'users/' + _id, { withCredentials: true });
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "fTTL":
/*!***********************************************!*\
  !*** ./src/app/shipments/shipments.module.ts ***!
  \***********************************************/
/*! exports provided: ShipmentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShipmentsModule", function() { return ShipmentsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shipments_shipments_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shipments/shipments.component */ "/ac/");
/* harmony import */ var _shipments_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shipments-routing.module */ "7u+/");
/* harmony import */ var _create_edit_shipment_create_edit_shipment_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-edit-shipment/create-edit-shipment.component */ "hypl");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../material/material.module */ "hctd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _search_filer_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search-filer.pipe */ "1yBo");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var _status_status_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./status/status.component */ "R5Xw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");











class ShipmentsModule {
}
ShipmentsModule.ɵfac = function ShipmentsModule_Factory(t) { return new (t || ShipmentsModule)(); };
ShipmentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: ShipmentsModule });
ShipmentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
            _shipments_routing_module__WEBPACK_IMPORTED_MODULE_2__["ShipmentRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](ShipmentsModule, { declarations: [_shipments_shipments_component__WEBPACK_IMPORTED_MODULE_1__["ShipmentsComponent"],
        _create_edit_shipment_create_edit_shipment_component__WEBPACK_IMPORTED_MODULE_3__["CreateEditShipmentComponent"],
        _search_filer_pipe__WEBPACK_IMPORTED_MODULE_6__["SearchFilerPipe"],
        _status_status_component__WEBPACK_IMPORTED_MODULE_8__["StatusComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]], exports: [_shipments_shipments_component__WEBPACK_IMPORTED_MODULE_1__["ShipmentsComponent"],
        _create_edit_shipment_create_edit_shipment_component__WEBPACK_IMPORTED_MODULE_3__["CreateEditShipmentComponent"]] }); })();


/***/ }),

/***/ "gOJm":
/*!*****************************************************************!*\
  !*** ./src/app/core/sidenavigation/sidenavigation.component.ts ***!
  \*****************************************************************/
/*! exports provided: SidenavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavigationComponent", function() { return SidenavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "7dP1");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/storage.service */ "UYTb");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/menu */ "STbY");









function SidenavigationComponent_a_6_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "supervised_user_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-list-item", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Client Center");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-menu", null, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavigationComponent_a_6_Template_a_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Claims");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavigationComponent_a_6_Template_a_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Q&A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavigationComponent_a_6_Template_a_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Services");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r9);
} }
function SidenavigationComponent_a_8_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "assignment_ind");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-list-item", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-menu", null, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavigationComponent_a_8_Template_a_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavigationComponent_a_8_Template_a_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Create Shipment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavigationComponent_a_8_Template_a_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "My shipments");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r14);
} }
function SidenavigationComponent_a_10_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavigationComponent_a_10_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "admin_panel_settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Admin Panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SidenavigationComponent_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function SidenavigationComponent_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavigationComponent_ng_template_21_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.logout(); })("click", function SidenavigationComponent_ng_template_21_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SidenavigationComponent_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavigationComponent_ng_template_23_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavigationComponent_ng_template_23_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SidenavigationComponent {
    constructor(router, authService, storage) {
        this.router = router;
        this.authService = authService;
        this.storage = storage;
        this.sidenavClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isLogged$ = this.authService.currentUser$;
        this.isAdmin$ = this.authService.isAdmin$;
        this.close = () => this.sidenavClose.emit();
        this.logout = () => {
            this.authService.logout(this.user).subscribe({
                next: (data) => {
                    this.user = undefined;
                    this.storage.removeItem('user');
                    this.storage.removeItem('auth');
                    this.router.navigateByUrl('/');
                },
                error: (err) => {
                    window.alert(err.message);
                }
            });
        };
    }
    ngOnChanges() {
        this.user = this.storage.getItem('user');
    }
}
SidenavigationComponent.ɵfac = function SidenavigationComponent_Factory(t) { return new (t || SidenavigationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"])); };
SidenavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidenavigationComponent, selectors: [["app-sidenavigation"]], outputs: { sidenavClose: "sidenavClose" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 25, vars: 15, consts: [["mat-list-item", "", "routerLink", "/home", 3, "click"], [1, "nav-caption"], ["mat-list-item", "", 4, "ngIf"], ["mat-list-item", "", "routerLink", "/admin", 3, "click", 4, "ngIf"], [3, "matMenuTriggerFor"], ["matline", ""], ["menu", "matMenu"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["isLoggedIn", ""], ["isNotLoggedIn", ""], ["mat-list-item", ""], ["clientMenu", "matMenu"], ["mat-menu-item", "", "routerLink", "/client-center/claims", 1, "menu-items", 3, "click"], ["mat-menu-item", "", "routerLink", "/client-center/q&a", 1, "menu-items", 3, "click"], ["mat-menu-item", "", "routerLink", "/client-center/services", 1, "menu-items", 3, "click"], ["userMenu", "matMenu"], ["mat-menu-item", "", "routerLink", "/user/profile", 1, "menu-items", 3, "click"], ["mat-menu-item", "", "routerLink", "/shipments/create", 1, "menu-items", 3, "click"], ["mat-menu-item", "", "routerLink", "/shipments", 1, "menu-items", 3, "click"], ["mat-list-item", "", "routerLink", "/admin", 3, "click"], ["mat-menu-item", "", 3, "click"], ["mat-menu-item", "", "routerLink", "/auth/login", 3, "click"], ["mat-menu-item", "", "routerLink", "/auth/register", 3, "click"]], template: function SidenavigationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavigationComponent_Template_a_click_1_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SidenavigationComponent_a_6_Template, 14, 1, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SidenavigationComponent_a_8_Template, 14, 1, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SidenavigationComponent_a_10_Template, 5, 0, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-list-item", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "line_weight");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-menu", null, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, SidenavigationComponent_ng_container_19_Template, 1, 0, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, SidenavigationComponent_ng_template_21_Template, 2, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, SidenavigationComponent_ng_template_23_Template, 4, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 7, ctx.isLogged$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 9, ctx.isLogged$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 11, ctx.isAdmin$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 13, ctx.isLogged$))("ngIfThen", _r5)("ngIfElse", _r7);
    } }, directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuItem"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: ["a[_ngcontent-%COMP%]{\r\n    text-decoration: none;\r\n    color: white;\r\n}\r\na.menu-items[_ngcontent-%COMP%]{\r\n    color: gray;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGVuYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNpZGVuYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhe1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbmEubWVudS1pdGVtc3tcclxuICAgIGNvbG9yOiBncmF5O1xyXG59Il19 */"] });


/***/ }),

/***/ "hctd":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ "fXoL");


















class MaterialModule {
}
MaterialModule.ɵfac = function MaterialModule_Factory(t) { return new (t || MaterialModule)(); };
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__["MatRadioModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__["MatSortModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"]
        ], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__["MatRadioModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__["MatSortModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__["MatRadioModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__["MatSortModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"]], exports: [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__["MatRadioModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__["MatSortModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"]] }); })();


/***/ }),

/***/ "hypl":
/*!**********************************************************************************!*\
  !*** ./src/app/shipments/create-edit-shipment/create-edit-shipment.component.ts ***!
  \**********************************************************************************/
/*! exports provided: CreateEditShipmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEditShipmentComponent", function() { return CreateEditShipmentComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_shared_common_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/common-validators */ "OLCm");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core_services_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/store.service */ "z3Pw");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/auth.service */ "7dP1");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ "FKr1");

















function CreateEditShipmentComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0);
} }
function CreateEditShipmentComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Create Shipment");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CreateEditShipmentComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Edit Shipment");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CreateEditShipmentComponent_mat_hint_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Delivery address is required !");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CreateEditShipmentComponent_mat_hint_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Delivery address must be at least 10 characters !");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CreateEditShipmentComponent_mat_hint_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Package size is required !");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CreateEditShipmentComponent_mat_hint_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Package size should looks like 120/80/45 !");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CreateEditShipmentComponent_mat_hint_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Package weight is required !");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CreateEditShipmentComponent_mat_hint_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Package weight must be at least 2 kg !");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CreateEditShipmentComponent_mat_hint_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Package weight must be a number !");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CreateEditShipmentComponent_mat_form_field_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-select", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Created");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "In Transit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CreateEditShipmentComponent_mat_hint_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Shipment Type is required !");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CreateEditShipmentComponent_mat_hint_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Shipment Type must be economy or express !");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class CreateEditShipmentComponent {
    constructor(storeService, route, fb, router, authService) {
        this.storeService = storeService;
        this.route = route;
        this.fb = fb;
        this.router = router;
        this.authService = authService;
        this.isAdmin$ = this.authService.isAdmin$;
    }
    ngOnInit() {
        this.id = this.route.snapshot.params['id'];
        this.isCreateMode = !this.id;
        this.f = this.fb.group({
            address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(10)]],
            size: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, src_app_shared_common_validators__WEBPACK_IMPORTED_MODULE_1__["shipmentSize"]]],
            weight: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].min(2), src_app_shared_common_validators__WEBPACK_IMPORTED_MODULE_1__["shipmentWeight"]]],
            shipmentType: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, src_app_shared_common_validators__WEBPACK_IMPORTED_MODULE_1__["shipmentTypeValidator"]]],
            status: ['']
        });
        if (!this.isCreateMode) {
            this.storeService.getShipment(this.id)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])())
                .subscribe(x => this.f.patchValue(x));
        }
    }
    shipmentHandler(formData) {
        if (this.f.invalid) {
            return;
        }
        if (this.isCreateMode) {
            this.createShipment(formData);
        }
        else {
            this.editShipment(formData);
        }
    }
    createShipment(formData) {
        this.storeService.postShipment(formData).subscribe(data => {
            this.router.navigateByUrl('/shipments');
        });
    }
    editShipment(formData) {
        this.storeService.editShipment(this.id, formData).subscribe(data => {
            this.router.navigateByUrl('/shipments');
        });
    }
}
CreateEditShipmentComponent.ɵfac = function CreateEditShipmentComponent_Factory(t) { return new (t || CreateEditShipmentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_store_service__WEBPACK_IMPORTED_MODULE_4__["StoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"])); };
CreateEditShipmentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CreateEditShipmentComponent, selectors: [["app-create-shipment"]], decls: 49, vars: 16, consts: [[1, "container"], [1, "frame"], [3, "formGroup", "ngSubmit"], [1, "label"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["createMode", ""], ["editMode", ""], ["appearance", "fill"], [4, "ngIf"], ["type", "text", "name", "address", "placeholder", "Sofia, Krasna Polyana, 47", "formControlName", "address", "matInput", ""], ["type", "text", "name", "size", "placeholder", "120/80/45", "formControlName", "size", "matInput", ""], ["type", "text", "name", "weight", "placeholder", "45kg", "formControlName", "weight", "matInput", ""], ["appearance", "fill", 4, "ngIf"], ["fxLayoutGap", "20px", "formControlName", "shipmentType", "name", "shipmentType"], ["value", "economy"], ["value", "express"], [1, "btn-submit"], ["mat-raised-button", "", "type", "submit"], [1, "label-form"], ["name", "status", "formControlName", "status"], ["value", "created"], ["value", "transit"], ["value", "completed"]], template: function CreateEditShipmentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function CreateEditShipmentComponent_Template_form_ngSubmit_4_listener() { return ctx.shipmentHandler(ctx.f.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, CreateEditShipmentComponent_ng_container_6_Template, 1, 0, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, CreateEditShipmentComponent_ng_template_7_Template, 2, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, CreateEditShipmentComponent_ng_template_9_Template, 2, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Delivery address");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, CreateEditShipmentComponent_mat_hint_15_Template, 2, 0, "mat-hint", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, CreateEditShipmentComponent_mat_hint_16_Template, 2, 0, "mat-hint", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Package size");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, CreateEditShipmentComponent_mat_hint_22_Template, 2, 0, "mat-hint", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, CreateEditShipmentComponent_mat_hint_23_Template, 2, 0, "mat-hint", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Package weight");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, CreateEditShipmentComponent_mat_hint_29_Template, 2, 0, "mat-hint", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, CreateEditShipmentComponent_mat_hint_30_Template, 2, 0, "mat-hint", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, CreateEditShipmentComponent_mat_hint_31_Template, 2, 0, "mat-hint", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](33, CreateEditShipmentComponent_mat_form_field_33_Template, 10, 0, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](34, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "Shipment Type: Economy cost: 20$ , Express cost: 40$ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "mat-radio-group", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "mat-radio-button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "Economy");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "mat-radio-button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "Express");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](43, CreateEditShipmentComponent_mat_hint_43_Template, 2, 0, "mat-hint", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](44, CreateEditShipmentComponent_mat_hint_44_Template, 2, 0, "mat-hint", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](45, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](8);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.f);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isCreateMode)("ngIfThen", _r1)("ngIfElse", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.f.get("address").touched && (ctx.f.get("address").errors == null ? null : ctx.f.get("address").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.f.get("address").touched && (ctx.f.get("address").errors == null ? null : ctx.f.get("address").errors.minlength));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.f.get("size").touched && (ctx.f.get("size").errors == null ? null : ctx.f.get("size").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.f.get("size").touched && (ctx.f.get("size").errors == null ? null : ctx.f.get("size").errors.shipmentSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.f.get("weight").touched && (ctx.f.get("weight").errors == null ? null : ctx.f.get("weight").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.f.get("weight").touched && (ctx.f.get("weight").errors == null ? null : ctx.f.get("weight").errors.min));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.f.get("weight").touched && (ctx.f.get("weight").errors == null ? null : ctx.f.get("weight").errors.shipmentWeight));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](34, 14, ctx.isAdmin$) && !ctx.isCreateMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.f.get("shipmentType").touched && (ctx.f.get("shipmentType").errors == null ? null : ctx.f.get("shipmentType").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.f.get("shipmentType").touched && (ctx.f.get("shipmentType").errors == null ? null : ctx.f.get("shipmentType").errors.shipmentTypeValidator));
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioGroup"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutGapDirective"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatHint"], _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatOption"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]], styles: ["div.container[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    max-width: 600px;\r\n    margin: auto;\r\n    display: flex;\r\n    padding-top: 5%;\r\n}\r\n\r\nmat-card[_ngcontent-%COMP%] {\r\n    margin: auto;\r\n    border-radius: 10px;\r\n    text-align: center;\r\n}\r\n\r\nmat-label.label-form[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n}\r\n\r\n.label[_ngcontent-%COMP%] {\r\n    margin: auto;\r\n    padding: 2%;\r\n    font-size: 25px;\r\n}\r\n\r\ndiv.btn-submit[_ngcontent-%COMP%]{\r\n    margin: 0;\r\n    position: relative;\r\n    text-align: center;\r\n}\r\n\r\ntextarea[_ngcontent-%COMP%] {\r\n    width: 300px;\r\n    height: 170px;\r\n}\r\n\r\n.mat-card.mat-focus-indicator[_ngcontent-%COMP%] {\r\n    box-shadow: none\r\n}\r\n\r\nmat-form-field[_ngcontent-%COMP%] {\r\n    margin: auto;\r\n    padding: 5px;\r\n    width: 350px;\r\n    display: block;\r\n    position: relative;\r\n    text-align: justify;\r\n}\r\n\r\n.frame[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    width: 100%;\r\n    max-width: 800px;\r\n}\r\n\r\nmat-radio-group[_ngcontent-%COMP%] {\r\n    margin: 15px;\r\n    display: block;\r\n}\r\n\r\nmat-hint[_ngcontent-%COMP%] {\r\n    font-size: 15px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1lZGl0LXNoaXBtZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osYUFBYTtJQUNiLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBQ1osY0FBYztJQUNkLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJjcmVhdGUtZWRpdC1zaGlwbWVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmRpdi5jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmctdG9wOiA1JTtcclxufVxyXG5cclxubWF0LWNhcmQge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxubWF0LWxhYmVsLmxhYmVsLWZvcm0ge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5sYWJlbCB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBwYWRkaW5nOiAyJTtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG5cclxuZGl2LmJ0bi1zdWJtaXR7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbnRleHRhcmVhIHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGhlaWdodDogMTcwcHg7XHJcbn1cclxuXHJcbi5tYXQtY2FyZC5tYXQtZm9jdXMtaW5kaWNhdG9yIHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmVcclxufVxyXG5cclxubWF0LWZvcm0tZmllbGQge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59XHJcblxyXG4uZnJhbWUge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xyXG59XHJcblxyXG5tYXQtcmFkaW8tZ3JvdXAge1xyXG4gICAgbWFyZ2luOiAxNXB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbm1hdC1oaW50IHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxufSJdfQ== */"] });


/***/ }),

/***/ "jayf":
/*!*******************************************************!*\
  !*** ./src/app/client-center/client-center.module.ts ***!
  \*******************************************************/
/*! exports provided: ClientCenterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientCenterModule", function() { return ClientCenterModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _questions_and_answers_questions_and_answers_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./questions-and-answers/questions-and-answers.component */ "FsWP");
/* harmony import */ var _client_center_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./client-center-routing.module */ "XR5o");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../material/material.module */ "hctd");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var _claim_list_claim_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./claim-list/claim-list.component */ "NjLB");
/* harmony import */ var _register_claim_register_claim_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register-claim/register-claim.component */ "zkKR");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _search_claim_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./search-claim.pipe */ "shqu");
/* harmony import */ var _search_question_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./search-question.pipe */ "9Cpb");
/* harmony import */ var _client_services_client_services_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./client-services/client-services.component */ "dYhH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "tyNb");













class ClientCenterModule {
}
ClientCenterModule.ɵfac = function ClientCenterModule_Factory(t) { return new (t || ClientCenterModule)(); };
ClientCenterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: ClientCenterModule });
ClientCenterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _client_center_routing_module__WEBPACK_IMPORTED_MODULE_2__["ClientCenterRoutingModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](ClientCenterModule, { declarations: [_questions_and_answers_questions_and_answers_component__WEBPACK_IMPORTED_MODULE_1__["QuestionsAndAnswersComponent"],
        _claim_list_claim_list_component__WEBPACK_IMPORTED_MODULE_5__["ClaimListComponent"],
        _register_claim_register_claim_component__WEBPACK_IMPORTED_MODULE_6__["RegisterClaimComponent"],
        _search_claim_pipe__WEBPACK_IMPORTED_MODULE_8__["SearchClaimPipe"],
        _search_question_pipe__WEBPACK_IMPORTED_MODULE_9__["SearchQuestionPipe"],
        _client_services_client_services_component__WEBPACK_IMPORTED_MODULE_10__["ClientServicesComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]], exports: [_claim_list_claim_list_component__WEBPACK_IMPORTED_MODULE_5__["ClaimListComponent"],
        _register_claim_register_claim_component__WEBPACK_IMPORTED_MODULE_6__["RegisterClaimComponent"]] }); })();


/***/ }),

/***/ "mVaw":
/*!*****************************************************!*\
  !*** ./src/app/core/carousel/carousel.animation.ts ***!
  \*****************************************************/
/*! exports provided: carouselAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "carouselAnimation", function() { return carouselAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");

const fadeInAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(300, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }))
]);
const fadeOutAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(300, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }))
]);
const carouselAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('triggerAnimation', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["useAnimation"])(fadeInAnimation)]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => void', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["useAnimation"])(fadeOutAnimation)])
]);


/***/ }),

/***/ "o7am":
/*!***************************************************!*\
  !*** ./src/app/shared/loader/loader.component.ts ***!
  \***************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class LoaderComponent {
    constructor() { }
    ngOnInit() { }
}
LoaderComponent.ɵfac = function LoaderComponent_Factory(t) { return new (t || LoaderComponent)(); };
LoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoaderComponent, selectors: [["app-loader"]], decls: 7, vars: 0, consts: [[1, "container"], [1, "overlay"], [1, "loader"], [1, "spinner"]], template: function LoaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container[_ngcontent-%COMP%] {\r\n    background-color: rgba(150, 150, 150, 0.1) !important;\r\n    position: fixed;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 7%;\r\n}\r\n\r\n.loader[_ngcontent-%COMP%] {\r\n    top: 45%;\r\n    margin: auto;\r\n    position: relative;\r\n    transform: translate(-20%, 10%);\r\n    width: 100%;\r\n    height: 100%;\r\n    max-width: 80px;\r\n    max-height: 80px;\r\n    z-index: 9999;\r\n}\r\n\r\n.overlay[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    -webkit-backdrop-filter: blur(8px);\r\n            backdrop-filter: blur(8px);\r\n    z-index: 9998;\r\n    background-color: rgba(150, 150, 150, 0.5);\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n\r\n.spinner[_ngcontent-%COMP%] {\r\n    padding: 3px;\r\n    width: calc(100% - 0px);\r\n    height: calc(100% - 0px);\r\n    border: 3px solid rgba(150, 150, 150, 0.5);\r\n    border-radius: 50%;\r\n    border-bottom: 3px solid white;\r\n    border-top: 3px solid white;\r\n    animation: rotate 4s linear infinite;\r\n}\r\n\r\n@keyframes rotate {\r\n    100% { transform: rotate(360deg);}\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLHFEQUFxRDtJQUNyRCxlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7SUFDWixPQUFPO0FBQ1g7O0FBRUE7SUFDSSxRQUFRO0lBQ1IsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQiwrQkFBK0I7SUFDL0IsV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0NBQTBCO1lBQTFCLDBCQUEwQjtJQUMxQixhQUFhO0lBQ2IsMENBQTBDO0lBQzFDLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7O0FBRUY7SUFDSSxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLHdCQUF3QjtJQUN4QiwwQ0FBMEM7SUFDMUMsa0JBQWtCO0lBQ2xCLDhCQUE4QjtJQUM5QiwyQkFBMkI7SUFDM0Isb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksT0FBTyx5QkFBeUIsQ0FBQztBQUNyQyIsImZpbGUiOiJsb2FkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTUwLCAxNTAsIDE1MCwgMC4xKSAhaW1wb3J0YW50O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0b3A6IDclO1xyXG59XHJcblxyXG4ubG9hZGVyIHtcclxuICAgIHRvcDogNDUlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTIwJSwgMTAlKTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiA4MHB4O1xyXG4gICAgbWF4LWhlaWdodDogODBweDtcclxuICAgIHotaW5kZXg6IDk5OTk7XHJcbn1cclxuXHJcbi5vdmVybGF5IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xyXG4gICAgei1pbmRleDogOTk5ODtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTUwLCAxNTAsIDE1MCwgMC41KTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuXHJcbi5zcGlubmVyIHtcclxuICAgIHBhZGRpbmc6IDNweDtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAwcHgpO1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAwcHgpO1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgcmdiYSgxNTAsIDE1MCwgMTUwLCAwLjUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHdoaXRlO1xyXG4gICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkIHdoaXRlO1xyXG4gICAgYW5pbWF0aW9uOiByb3RhdGUgNHMgbGluZWFyIGluZmluaXRlO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XHJcbiAgICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTt9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ "pKmL":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../material/material.module */ "hctd");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigation/navigation.component */ "bh3X");
/* harmony import */ var _sidenavigation_sidenavigation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sidenavigation/sidenavigation.component */ "gOJm");
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./carousel/carousel.component */ "B6Pq");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "FxTl");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/auth.service */ "7dP1");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./guards/auth.guard */ "NUQi");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");











class CoreModule {
}
CoreModule.ɵfac = function CoreModule_Factory(t) { return new (t || CoreModule)(); };
CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ providers: [
        _guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](CoreModule, { declarations: [_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__["NavigationComponent"],
        _sidenavigation_sidenavigation_component__WEBPACK_IMPORTED_MODULE_4__["SidenavigationComponent"],
        _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_5__["CarouselComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
        _material_material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"]], exports: [_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__["NavigationComponent"],
        _sidenavigation_sidenavigation_component__WEBPACK_IMPORTED_MODULE_4__["SidenavigationComponent"],
        _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_5__["CarouselComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]] }); })();


/***/ }),

/***/ "s0Cq":
/*!*************************************!*\
  !*** ./src/app/shared/constants.ts ***!
  \*************************************/
/*! exports provided: constants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "constants", function() { return constants; });
const constants = {
    baseUrl: 'https://lit-sea-01538.herokuapp.com/api/v1/',
    authHeaderName: 'x-auth',
};


/***/ }),

/***/ "shqu":
/*!****************************************************!*\
  !*** ./src/app/client-center/search-claim.pipe.ts ***!
  \****************************************************/
/*! exports provided: SearchClaimPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchClaimPipe", function() { return SearchClaimPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SearchClaimPipe {
    transform(records, searchValue) {
        if (!records || !searchValue) {
            return records;
        }
        function search() {
            const trackingFilter = records.filter(x => x.trackingNumber._id.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
            const titleFilter = records.filter(x => x.title.includes(searchValue.toLocaleLowerCase()));
            const dateFilter = records.filter(x => x.createdAt.toString().includes(searchValue));
            const descriptionFilter = records.filter(x => x.description.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
            return trackingFilter.length > 0
                ? trackingFilter
                : titleFilter.length > 0
                    ? titleFilter
                    : dateFilter.length > 0
                        ? dateFilter
                        : descriptionFilter.length > 0
                            ? descriptionFilter
                            : [];
        }
        return search();
    }
}
SearchClaimPipe.ɵfac = function SearchClaimPipe_Factory(t) { return new (t || SearchClaimPipe)(); };
SearchClaimPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "searchClaim", type: SearchClaimPipe, pure: true });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/guards/auth.guard */ "NUQi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    {
        path: '',
        canActivateChild: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: '/home'
            },
            {
                path: 'home',
                component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"],
            },
            {
                path: 'user',
                loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./user/user.module */ "7UCR")).then(m => m.UserModule)
            },
            {
                path: 'client-center',
                loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./client-center/client-center.module */ "jayf")).then(m => m.ClientCenterModule)
            },
            {
                path: 'shipments',
                loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./shipments/shipments.module */ "fTTL")).then(m => m.ShipmentsModule)
            },
            {
                path: 'auth',
                loadChildren: () => __webpack_require__.e(/*! import() | auth-auth-module */ "auth-auth-module").then(__webpack_require__.bind(null, /*! ./auth/auth.module */ "Yj9t")).then(m => m.AuthModule)
            },
            {
                path: 'admin',
                pathMatch: 'full',
                loadChildren: () => __webpack_require__.e(/*! import() | admin-admin-module */ "admin-admin-module").then(__webpack_require__.bind(null, /*! ./admin/admin.module */ "jkDv")).then(m => m.AdminModule)
            }
        ]
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "z+wL":
/*!************************************************!*\
  !*** ./src/app/user/control-view.directive.ts ***!
  \************************************************/
/*! exports provided: ControlViewDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlViewDirective", function() { return ControlViewDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ControlViewDirective {
    constructor(elementRef, render) {
        this.elementRef = elementRef;
        this.render = render;
    }
    get isVisible() {
        return this.appIsVisible;
    }
    onMouseClick(e) {
        this.appIsVisible = !this.appIsVisible;
        this.ngChangeVisibility();
    }
    ngChangeVisibility() {
        this.render.setStyle(this.elementRef.nativeElement, 'display', this.appIsVisible ? 'none' : 'block');
    }
    ngOnChanges() {
        this.ngChangeVisibility();
    }
}
ControlViewDirective.ɵfac = function ControlViewDirective_Factory(t) { return new (t || ControlViewDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
ControlViewDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ControlViewDirective, selectors: [["", "appIsVisible", ""]], hostVars: 2, hostBindings: function ControlViewDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseclick", function ControlViewDirective_mouseclick_HostBindingHandler($event) { return ctx.onMouseClick($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-visible", ctx.isVisible);
    } }, inputs: { appIsVisible: "appIsVisible" }, exportAs: ["appIsVisible"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });


/***/ }),

/***/ "z3Pw":
/*!************************************************!*\
  !*** ./src/app/core/services/store.service.ts ***!
  \************************************************/
/*! exports provided: StoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreService", function() { return StoreService; });
/* harmony import */ var src_app_shared_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/constants */ "s0Cq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class StoreService {
    constructor(http) {
        this.http = http;
    }
    getNews() {
        return this.http.get(src_app_shared_constants__WEBPACK_IMPORTED_MODULE_0__["constants"].baseUrl + 'news', { withCredentials: true });
    }
    postNews(data) {
        return this.http.post(src_app_shared_constants__WEBPACK_IMPORTED_MODULE_0__["constants"].baseUrl + 'news', data, { withCredentials: true });
    }
    getQuestions() {
        return this.http.get(src_app_shared_constants__WEBPACK_IMPORTED_MODULE_0__["constants"].baseUrl + 'question-and-answers', { withCredentials: true });
    }
    postQuestions(data) {
        return this.http.post(src_app_shared_constants__WEBPACK_IMPORTED_MODULE_0__["constants"].baseUrl + 'question-and-answers', data, { withCredentials: true });
    }
    deleteQuestion(id) {
        return this.http.delete(src_app_shared_constants__WEBPACK_IMPORTED_MODULE_0__["constants"].baseUrl + 'question-and-answers/' + id, { withCredentials: true });
    }
    getShipments() {
        return this.http.get(src_app_shared_constants__WEBPACK_IMPORTED_MODULE_0__["constants"].baseUrl + 'shipments', { withCredentials: true });
    }
    getShipment(id) {
        return this.http.get(src_app_shared_constants__WEBPACK_IMPORTED_MODULE_0__["constants"].baseUrl + 'shipments/' + id, { withCredentials: true });
    }
    postShipment(data) {
        return this.http.post(src_app_shared_constants__WEBPACK_IMPORTED_MODULE_0__["constants"].baseUrl + 'shipments', data, { withCredentials: true });
    }
    editShipment(id, data) {
        return this.http.put(src_app_shared_constants__WEBPACK_IMPORTED_MODULE_0__["constants"].baseUrl + 'shipments/' + id, data, { withCredentials: true });
    }
    deleteShipment(id) {
        return this.http.delete(src_app_shared_constants__WEBPACK_IMPORTED_MODULE_0__["constants"].baseUrl + 'shipments/' + id, { withCredentials: true });
    }
    getClaims() {
        return this.http.get(src_app_shared_constants__WEBPACK_IMPORTED_MODULE_0__["constants"].baseUrl + 'claims', { withCredentials: true });
    }
    getClaim(id) {
        return this.http.get(src_app_shared_constants__WEBPACK_IMPORTED_MODULE_0__["constants"].baseUrl + 'claims/' + id, { withCredentials: true });
    }
    postClaim(data) {
        return this.http.post(src_app_shared_constants__WEBPACK_IMPORTED_MODULE_0__["constants"].baseUrl + 'claims', data, { withCredentials: true });
    }
    editClaim(id, data) {
        return this.http.put(src_app_shared_constants__WEBPACK_IMPORTED_MODULE_0__["constants"].baseUrl + 'claims/' + id, data, { withCredentials: true });
    }
    deleteClaim(id) {
        return this.http.delete(src_app_shared_constants__WEBPACK_IMPORTED_MODULE_0__["constants"].baseUrl + 'claims/' + id, { withCredentials: true });
    }
}
StoreService.ɵfac = function StoreService_Factory(t) { return new (t || StoreService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
StoreService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: StoreService, factory: StoreService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zkKR":
/*!**************************************************************************!*\
  !*** ./src/app/client-center/register-claim/register-claim.component.ts ***!
  \**************************************************************************/
/*! exports provided: RegisterClaimComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterClaimComponent", function() { return RegisterClaimComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core_services_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/store.service */ "z3Pw");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/loader/loader.component */ "o7am");












function RegisterClaimComponent_app_loader_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-loader");
} }
function RegisterClaimComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
} }
function RegisterClaimComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Register Claim");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegisterClaimComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Edit Claim");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegisterClaimComponent_mat_hint_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Tacking number is required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegisterClaimComponent_mat_hint_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Tacking number must be at least 24 characters!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegisterClaimComponent_mat_hint_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Title is required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegisterClaimComponent_mat_hint_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Title must be at least 5 characters!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegisterClaimComponent_mat_hint_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Description is required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegisterClaimComponent_mat_hint_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Description must be at least 10 characters!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class RegisterClaimComponent {
    constructor(storeService, route, fb, router) {
        this.storeService = storeService;
        this.route = route;
        this.fb = fb;
        this.router = router;
        this.isLoading = false;
    }
    ngOnInit() {
        this.id = this.route.snapshot.params['id'];
        this.isCreateMode = !this.id;
        this.f = this.fb.group({
            trackingNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(24)]],
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(5)]],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(5)]],
        });
        if (!this.isCreateMode) {
            this.storeService.getClaim(this.id)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])())
                .subscribe(x => this.f.patchValue(x));
        }
    }
    claimHandler(formData) {
        if (this.f.invalid) {
            return;
        }
        if (this.isCreateMode) {
            this.createClaim(formData);
        }
        else {
            this.editClaim(formData);
        }
    }
    createClaim(formData) {
        this.isLoading = true;
        this.storeService.postClaim(formData).subscribe({
            next: data => {
                this.isLoading = false;
                this.router.navigateByUrl('/client-center/claims');
            }
        });
    }
    editClaim(formData) {
        this.isLoading = true;
        this.storeService.editClaim(this.id, formData).subscribe({
            next: data => {
                this.isLoading = false;
                this.router.navigateByUrl('/client-center/claims');
            }
        });
    }
}
RegisterClaimComponent.ɵfac = function RegisterClaimComponent_Factory(t) { return new (t || RegisterClaimComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_store_service__WEBPACK_IMPORTED_MODULE_3__["StoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
RegisterClaimComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: RegisterClaimComponent, selectors: [["app-register-claim"]], decls: 36, vars: 11, consts: [[1, "container"], [4, "ngIf"], [1, "frame"], [3, "formGroup", "ngSubmit"], [1, "claim-label"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["createMode", ""], ["editMode", ""], ["appearance", "fill"], ["type", "text", "name", "trackingNumber", "placeholder", "15sv34gfs5489", "formControlName", "trackingNumber", "matInput", ""], ["type", "text", "name", "title", "placeholder", "The package does not arrive.", "formControlName", "title", "matInput", ""], ["type", "text", "name", "description", "placeholder", "More info about the problem", "formControlName", "description", "matInput", ""], [1, "btn-submit"], ["mat-raised-button", "", "type", "submit"], [1, "label-form"]], template: function RegisterClaimComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, RegisterClaimComponent_app_loader_1_Template, 1, 0, "app-loader", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function RegisterClaimComponent_Template_form_ngSubmit_5_listener() { return ctx.claimHandler(ctx.f.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, RegisterClaimComponent_ng_container_7_Template, 1, 0, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, RegisterClaimComponent_ng_template_8_Template, 2, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, RegisterClaimComponent_ng_template_10_Template, 2, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Tacking number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, RegisterClaimComponent_mat_hint_16_Template, 2, 0, "mat-hint", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, RegisterClaimComponent_mat_hint_17_Template, 2, 0, "mat-hint", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, RegisterClaimComponent_mat_hint_23_Template, 2, 0, "mat-hint", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, RegisterClaimComponent_mat_hint_24_Template, 2, 0, "mat-hint", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Describe your problem");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, RegisterClaimComponent_mat_hint_30_Template, 2, 0, "mat-hint", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, RegisterClaimComponent_mat_hint_31_Template, 2, 0, "mat-hint", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "textarea", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](9);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.f);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isCreateMode)("ngIfThen", _r2)("ngIfElse", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.f.get("trackingNumber").touched && (ctx.f.get("trackingNumber").errors == null ? null : ctx.f.get("trackingNumber").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.f.get("trackingNumber").touched && (ctx.f.get("trackingNumber").errors == null ? null : ctx.f.get("trackingNumber").errors.minlength));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.f.get("title").touched && (ctx.f.get("title").errors == null ? null : ctx.f.get("title").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.f.get("title").touched && (ctx.f.get("title").errors == null ? null : ctx.f.get("title").errors.minlength));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.f.get("description").touched && (ctx.f.get("description").errors == null ? null : ctx.f.get("description").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.f.get("description").touched && (ctx.f.get("description").errors == null ? null : ctx.f.get("description").errors.minlength));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_10__["LoaderComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatHint"]], styles: ["div.container[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    max-width: 600px;\r\n    margin: auto;\r\n    padding-top: 5%;\r\n    display: flex;\r\n}\r\n\r\nmat-card[_ngcontent-%COMP%] {\r\n    margin: auto;\r\n    border-radius: 10px;\r\n    text-align: center;\r\n}\r\n\r\nmat-label.label-form[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n}\r\n\r\n.claim-label[_ngcontent-%COMP%] {\r\n    margin: auto;\r\n    padding: 2%;\r\n    font-size: 25px;\r\n}\r\n\r\ndiv.btn-submit[_ngcontent-%COMP%]{\r\n    margin: auto;\r\n    padding: 5px;\r\n    position: relative;\r\n    text-align: center;\r\n}\r\n\r\ntextarea[_ngcontent-%COMP%] {\r\n    width: 300px;\r\n    height: 170px;\r\n}\r\n\r\n.mat-card.mat-focus-indicator[_ngcontent-%COMP%] {\r\n    box-shadow: none\r\n}\r\n\r\nmat-form-field[_ngcontent-%COMP%] {\r\n    margin: auto;\r\n    padding: 5px;\r\n    width: 350px;\r\n    display: block;\r\n    position: relative;\r\n    text-align: justify;\r\n}\r\n\r\n.frame[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    width: 100%;\r\n    max-width: 800px;\r\n}\r\n\r\nmat-hint[_ngcontent-%COMP%] {\r\n    font-size: 15px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLWNsYWltLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osZUFBZTtJQUNmLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InJlZ2lzdGVyLWNsYWltLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuZGl2LmNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBwYWRkaW5nLXRvcDogNSU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG5tYXQtY2FyZCB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5tYXQtbGFiZWwubGFiZWwtZm9ybSB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmNsYWltLWxhYmVsIHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBhZGRpbmc6IDIlO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcblxyXG5kaXYuYnRuLXN1Ym1pdHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxudGV4dGFyZWEge1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgaGVpZ2h0OiAxNzBweDtcclxufVxyXG5cclxuLm1hdC1jYXJkLm1hdC1mb2N1cy1pbmRpY2F0b3Ige1xyXG4gICAgYm94LXNoYWRvdzogbm9uZVxyXG59XHJcblxyXG5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICB3aWR0aDogMzUwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbn1cclxuXHJcbi5mcmFtZSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogODAwcHg7XHJcbn1cclxuXHJcbm1hdC1oaW50IHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxufSJdfQ== */"] });


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map