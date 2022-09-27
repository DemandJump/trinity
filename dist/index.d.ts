/// <reference types="react" />
import React, { MouseEventHandler, ChangeEventHandler, SVGProps } from 'react';
import { SxProps } from '@mui/system';
import PropTypes from 'prop-types';
import { FormikProps, FormikValues, FormikHelpers } from 'formik';
import { jsx } from '@emotion/react';

interface ButtonProps {
    text?: string;
    variant?: 'contained' | 'outlined' | 'text';
    color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
    sx?: SxProps;
    disabled?: boolean;
    size?: "small" | "medium" | "large";
    onClick?: MouseEventHandler<HTMLButtonElement>;
    type?: "button" | "submit" | "reset";
}

declare const Button: React.FC<ButtonProps>;

interface InputProps {
    type?: "text" | "password" | "email";
    id?: string;
    label?: string;
    error?: boolean;
    message?: string;
    success?: boolean;
    disabled?: boolean;
    placeholder?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
}

declare const Input: React.FC<InputProps>;

declare type DJTextFieldD = {
    className?: string;
    labelText?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    name: string;
    required?: boolean;
    label?: string;
    helpMessage?: string;
    formikProps?: FormikProps<any>;
    disabled?: boolean;
    id?: string;
    iconBefore?: JSX.Element;
    type: "text" | "password" | "email";
    rest?: any;
};
declare type DJFormD = {
    initialValues: FormikValues;
    enableReinitialize?: boolean;
    onSubmit: (values: object, formikHelpers: FormikHelpers<object>) => void;
    initialStatus?: string;
    initialErrors?: object;
    initialTouched?: object;
    onReset?: () => void;
    validationSchema?: object;
    validate?: (values: object) => object;
    focusInvalidField?: boolean;
    id?: string;
    innerRef?: React.Ref<any>;
    invalidInputSelectors?: string[];
    children?: React.ReactNode;
    rest?: any;
};

declare const DJForm: {
    ({ initialValues, enableReinitialize, onSubmit, initialStatus, initialErrors, initialTouched, onReset, validationSchema, validate, id, innerRef, children, ...rest }: DJFormD): JSX.Element;
    propTypes: {
        children: PropTypes.Requireable<string | number | boolean | ((...args: any[]) => any) | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        enableReinitialize: PropTypes.Requireable<boolean>;
        id: PropTypes.Requireable<string>;
        initialErrors: PropTypes.Requireable<object>;
        initialStatus: PropTypes.Requireable<any>;
        initialTouched: PropTypes.Requireable<object>;
        initialValues: PropTypes.Validator<object>;
        innerRef: PropTypes.Requireable<any>;
        onReset: PropTypes.Requireable<(...args: any[]) => any>;
        onSubmit: PropTypes.Requireable<(...args: any[]) => any>;
        validate: PropTypes.Requireable<(...args: any[]) => any>;
        validationSchema: PropTypes.Requireable<object>;
    };
    defaultProps: {
        onSubmit: () => void;
    };
};

declare const DJTextField: {
    ({ className, onChange: propsOnChange, labelText, name, required, label, helpMessage, formikProps, disabled, id, iconBefore, type, ...rest }: DJTextFieldD): jsx.JSX.Element;
    propTypes: {
        className: PropTypes.Requireable<string>;
        name: PropTypes.Validator<string>;
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
        required: PropTypes.Requireable<boolean>;
    };
    defaultProps: {
        required: boolean;
    };
};

interface FormikSelectItem {
    menuItemIcon: React.ReactNode;
    label: string;
    value: string;
}
interface FormikSelectProps {
    name: string;
    items: FormikSelectItem[];
    required?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
declare const DJSelectField: React.FC<FormikSelectProps>;

interface SVGRProps$X {
    title?: string;
    titleId?: string;
}
declare const SvgActionAdd: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$X) => JSX.Element;

interface SVGRProps$W {
    title?: string;
    titleId?: string;
}
declare const SvgActionArchive1: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$W) => JSX.Element;

interface SVGRProps$V {
    title?: string;
    titleId?: string;
}
declare const SvgActionArchive2: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$V) => JSX.Element;

interface SVGRProps$U {
    title?: string;
    titleId?: string;
}
declare const SvgActionBarchart: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$U) => JSX.Element;

interface SVGRProps$T {
    title?: string;
    titleId?: string;
}
declare const SvgActionBulletedList: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$T) => JSX.Element;

interface SVGRProps$S {
    title?: string;
    titleId?: string;
}
declare const SvgActionClose: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$S) => JSX.Element;

interface SVGRProps$R {
    title?: string;
    titleId?: string;
}
declare const SvgActionDownload: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$R) => JSX.Element;

interface SVGRProps$Q {
    title?: string;
    titleId?: string;
}
declare const SvgActionEmail: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$Q) => JSX.Element;

interface SVGRProps$P {
    title?: string;
    titleId?: string;
}
declare const SvgActionFilter1: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$P) => JSX.Element;

interface SVGRProps$O {
    title?: string;
    titleId?: string;
}
declare const SvgActionFilter2: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$O) => JSX.Element;

interface SVGRProps$N {
    title?: string;
    titleId?: string;
}
declare const SvgActionHide: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$N) => JSX.Element;

interface SVGRProps$M {
    title?: string;
    titleId?: string;
}
declare const SvgActionInfo: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$M) => JSX.Element;

interface SVGRProps$L {
    title?: string;
    titleId?: string;
}
declare const SvgActionMenu: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$L) => JSX.Element;

interface SVGRProps$K {
    title?: string;
    titleId?: string;
}
declare const SvgActionMore: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$K) => JSX.Element;

interface SVGRProps$J {
    title?: string;
    titleId?: string;
}
declare const SvgActionMove: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$J) => JSX.Element;

interface SVGRProps$I {
    title?: string;
    titleId?: string;
}
declare const SvgActionNumberedList: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$I) => JSX.Element;

interface SVGRProps$H {
    title?: string;
    titleId?: string;
}
declare const SvgActionRedirectOut: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$H) => JSX.Element;

interface SVGRProps$G {
    title?: string;
    titleId?: string;
}
declare const SvgActionRefresh1: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$G) => JSX.Element;

interface SVGRProps$F {
    title?: string;
    titleId?: string;
}
declare const SvgActionRefresh2: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$F) => JSX.Element;

interface SVGRProps$E {
    title?: string;
    titleId?: string;
}
declare const SvgActionSearch: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$E) => JSX.Element;

interface SVGRProps$D {
    title?: string;
    titleId?: string;
}
declare const SvgActionShow: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$D) => JSX.Element;

interface SVGRProps$C {
    title?: string;
    titleId?: string;
}
declare const SvgActionSortList: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$C) => JSX.Element;

interface SVGRProps$B {
    title?: string;
    titleId?: string;
}
declare const SvgActionTrash: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$B) => JSX.Element;

interface SVGRProps$A {
    title?: string;
    titleId?: string;
}
declare const SvgActionUpload: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$A) => JSX.Element;

interface SVGRProps$z {
    title?: string;
    titleId?: string;
}
declare const SvgDjLogoStandardSize: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$z) => JSX.Element;

interface SVGRProps$y {
    title?: string;
    titleId?: string;
}
declare const SvgIconAdmin: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$y) => JSX.Element;

interface SVGRProps$x {
    title?: string;
    titleId?: string;
}
declare const SvgIconAnalytics: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$x) => JSX.Element;

interface SVGRProps$w {
    title?: string;
    titleId?: string;
}
declare const SvgIconAttribution: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$w) => JSX.Element;

interface SVGRProps$v {
    title?: string;
    titleId?: string;
}
declare const SvgIconBookmark: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$v) => JSX.Element;

interface SVGRProps$u {
    title?: string;
    titleId?: string;
}
declare const SvgIconCompetitors: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$u) => JSX.Element;

interface SVGRProps$t {
    title?: string;
    titleId?: string;
}
declare const SvgIconCompetitorsSwords: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$t) => JSX.Element;

interface SVGRProps$s {
    title?: string;
    titleId?: string;
}
declare const SvgIconConnectors: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$s) => JSX.Element;

interface SVGRProps$r {
    title?: string;
    titleId?: string;
}
declare const SvgIconDjUniversity: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$r) => JSX.Element;

interface SVGRProps$q {
    title?: string;
    titleId?: string;
}
declare const SvgIconFileTicket: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$q) => JSX.Element;

interface SVGRProps$p {
    title?: string;
    titleId?: string;
}
declare const SvgIconGroups: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$p) => JSX.Element;

interface SVGRProps$o {
    title?: string;
    titleId?: string;
}
declare const SvgIconHelpCenter: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$o) => JSX.Element;

interface SVGRProps$n {
    title?: string;
    titleId?: string;
}
declare const SvgIconHelpCircle: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$n) => JSX.Element;

interface SVGRProps$m {
    title?: string;
    titleId?: string;
}
declare const SvgIconHome: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$m) => JSX.Element;

interface SVGRProps$l {
    title?: string;
    titleId?: string;
}
declare const SvgIconKeywordList: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$l) => JSX.Element;

interface SVGRProps$k {
    title?: string;
    titleId?: string;
}
declare const SvgIconKeywords: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$k) => JSX.Element;

interface SVGRProps$j {
    title?: string;
    titleId?: string;
}
declare const SvgIconManageContent: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$j) => JSX.Element;

interface SVGRProps$i {
    title?: string;
    titleId?: string;
}
declare const SvgIconManagePillarTopics: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$i) => JSX.Element;

interface SVGRProps$h {
    title?: string;
    titleId?: string;
}
declare const SvgIconPrimaryDomain: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$h) => JSX.Element;

interface SVGRProps$g {
    title?: string;
    titleId?: string;
}
declare const SvgIconResearchAndDiscovery: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$g) => JSX.Element;

interface SVGRProps$f {
    title?: string;
    titleId?: string;
}
declare const SvgIconSetPillarTopics: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$f) => JSX.Element;

interface SVGRProps$e {
    title?: string;
    titleId?: string;
}
declare const SvgIconSettings: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$e) => JSX.Element;

interface SVGRProps$d {
    title?: string;
    titleId?: string;
}
declare const SvgIconSinglePillar: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$d) => JSX.Element;

interface SVGRProps$c {
    title?: string;
    titleId?: string;
}
declare const SvgIconSubscription: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$c) => JSX.Element;

interface SVGRProps$b {
    title?: string;
    titleId?: string;
}
declare const SvgIconSupport: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$b) => JSX.Element;

interface SVGRProps$a {
    title?: string;
    titleId?: string;
}
declare const SvgIconTrackKeywords: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$a) => JSX.Element;

interface SVGRProps$9 {
    title?: string;
    titleId?: string;
}
declare const SvgIconTrackTicket: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$9) => JSX.Element;

interface SVGRProps$8 {
    title?: string;
    titleId?: string;
}
declare const SvgIconUserProfile: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$8) => JSX.Element;

interface SVGRProps$7 {
    title?: string;
    titleId?: string;
}
declare const SvgIconUsers: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$7) => JSX.Element;

interface SVGRProps$6 {
    title?: string;
    titleId?: string;
}
declare const SvgNavigationArrowBack: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$6) => JSX.Element;

interface SVGRProps$5 {
    title?: string;
    titleId?: string;
}
declare const SvgNavigationArrowDown: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$5) => JSX.Element;

interface SVGRProps$4 {
    title?: string;
    titleId?: string;
}
declare const SvgNavigationArrowLeft: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$4) => JSX.Element;

interface SVGRProps$3 {
    title?: string;
    titleId?: string;
}
declare const SvgNavigationArrowRight: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$3) => JSX.Element;

interface SVGRProps$2 {
    title?: string;
    titleId?: string;
}
declare const SvgNavigationArrowUp: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$2) => JSX.Element;

interface SVGRProps$1 {
    title?: string;
    titleId?: string;
}
declare const SvgNavigationCollapse: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$1) => JSX.Element;

interface SVGRProps {
    title?: string;
    titleId?: string;
}
declare const SvgNavigationExpand: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => JSX.Element;

export { SvgActionAdd as ActionAdd, SvgActionArchive1 as ActionArchive1, SvgActionArchive2 as ActionArchive2, SvgActionBarchart as ActionBarchart, SvgActionBulletedList as ActionBulletedList, SvgActionClose as ActionClose, SvgActionDownload as ActionDownload, SvgActionEmail as ActionEmail, SvgActionFilter1 as ActionFilter1, SvgActionFilter2 as ActionFilter2, SvgActionHide as ActionHide, SvgActionInfo as ActionInfo, SvgActionMenu as ActionMenu, SvgActionMore as ActionMore, SvgActionMove as ActionMove, SvgActionNumberedList as ActionNumberedList, SvgActionRedirectOut as ActionRedirectOut, SvgActionRefresh1 as ActionRefresh1, SvgActionRefresh2 as ActionRefresh2, SvgActionSearch as ActionSearch, SvgActionShow as ActionShow, SvgActionSortList as ActionSortList, SvgActionTrash as ActionTrash, SvgActionUpload as ActionUpload, Button, DJForm, DJSelectField, DJTextField, SvgDjLogoStandardSize as DjLogoStandardSize, SvgIconAdmin as IconAdmin, SvgIconAnalytics as IconAnalytics, SvgIconAttribution as IconAttribution, SvgIconBookmark as IconBookmark, SvgIconCompetitors as IconCompetitors, SvgIconCompetitorsSwords as IconCompetitorsSwords, SvgIconConnectors as IconConnectors, SvgIconDjUniversity as IconDjUniversity, SvgIconFileTicket as IconFileTicket, SvgIconGroups as IconGroups, SvgIconHelpCenter as IconHelpCenter, SvgIconHelpCircle as IconHelpCircle, SvgIconHome as IconHome, SvgIconKeywordList as IconKeywordList, SvgIconKeywords as IconKeywords, SvgIconManageContent as IconManageContent, SvgIconManagePillarTopics as IconManagePillarTopics, SvgIconPrimaryDomain as IconPrimaryDomain, SvgIconResearchAndDiscovery as IconResearchAndDiscovery, SvgIconSetPillarTopics as IconSetPillarTopics, SvgIconSettings as IconSettings, SvgIconSinglePillar as IconSinglePillar, SvgIconSubscription as IconSubscription, SvgIconSupport as IconSupport, SvgIconTrackKeywords as IconTrackKeywords, SvgIconTrackTicket as IconTrackTicket, SvgIconUserProfile as IconUserProfile, SvgIconUsers as IconUsers, Input, SvgNavigationArrowBack as NavigationArrowBack, SvgNavigationArrowDown as NavigationArrowDown, SvgNavigationArrowLeft as NavigationArrowLeft, SvgNavigationArrowRight as NavigationArrowRight, SvgNavigationArrowUp as NavigationArrowUp, SvgNavigationCollapse as NavigationCollapse, SvgNavigationExpand as NavigationExpand };
