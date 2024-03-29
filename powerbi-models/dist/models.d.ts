/*! powerbi-models v1.0.5 | (c) 2016 Microsoft Corporation MIT */
export declare const Validators: any;
export declare type KeyValuePair = {
    key: string;
    value: string;
};
export interface ITechnicalDetails {
    requestId?: string;
    errorInfo?: KeyValuePair[];
}
export interface IError {
    message: string;
    detailedMessage?: string;
    errorCode?: string;
    technicalDetails?: ITechnicalDetails;
}
export declare enum PageSizeType {
    Widescreen = 0,
    Standard = 1,
    Cortana = 2,
    Letter = 3,
    Custom = 4,
}
export declare enum DisplayOption {
    FitToPage = 0,
    FitToWidth = 1,
    ActualSize = 2,
}
export declare enum BackgroundType {
    Default = 0,
    Transparent = 1,
}
export interface IPageSize {
    type: PageSizeType;
}
export interface ICustomPageSize extends IPageSize {
    width?: number;
    height?: number;
}
export declare type PagesLayout = {
    [key: string]: IPageLayout;
};
export declare type VisualsLayout = {
    [key: string]: IVisualLayout;
};
export interface IPageLayout {
    defaultLayout?: IVisualLayout;
    visualsLayout: VisualsLayout;
}
export declare enum VisualContainerDisplayMode {
    Visible = 0,
    Hidden = 1,
}
export declare enum LayoutType {
    Master = 0,
    Custom = 1,
    MobilePortrait = 2,
    MobileLandscape = 3,
}
export interface IVisualLayout {
    x?: number;
    y?: number;
    z?: number;
    width?: number;
    height?: number;
    displayState?: IVisualContainerDisplayState;
}
export interface IVisualContainerDisplayState {
    mode: VisualContainerDisplayMode;
}
export interface ICustomLayout {
    pageSize?: IPageSize;
    displayOption?: DisplayOption;
    pagesLayout?: PagesLayout;
}
export interface IReport {
    id: string;
    displayName: string;
}
export declare enum SectionVisibility {
    AlwaysVisible = 0,
    HiddenInViewMode = 1,
}
export interface IPage {
    name: string;
    displayName: string;
    isActive?: boolean;
    visibility?: SectionVisibility;
    defaultSize?: ICustomPageSize;
    defaultDisplayOption?: DisplayOption;
}
export interface IVisual {
    name: string;
    title: string;
    type: string;
    layout?: IVisualLayout;
}
export declare enum Permissions {
    Read = 0,
    ReadWrite = 1,
    Copy = 2,
    Create = 4,
    All = 7,
}
export declare enum ViewMode {
    View = 0,
    Edit = 1,
}
export declare enum TokenType {
    Aad = 0,
    Embed = 1,
}
export declare type PageView = "fitToWidth" | "oneColumn" | "actualSize";
export interface IQnaVisualRenderedEvent {
    question: string;
    normalizedQuestion?: string;
}
export interface IVisualCustomCommandEvent {
    visualName: string;
    command: string;
}
export interface ISelection {
    visual: IVisual;
    page: IPage;
    report: IReport;
    dataPoints: IIdentityValue<IEqualsDataReference>[];
    regions: IIdentityValue<IEqualsDataReference | IBetweenDataReference>[];
    filters: IFilter[];
}
export interface ISwipeEvent {
    currentPosition: IPosition;
    startPosition: IPosition;
}
export interface IPosition {
    x: number;
    y: number;
}
export declare type Extensions = IExtension[];
export interface IExtension {
    command?: ICommandExtension;
}
export interface IExtensionItem {
    name: string;
    extend: IExtensionPoints;
}
export interface ICommandExtension extends IExtensionItem {
    title: string;
    icon?: string;
}
export interface IExtensionPoints {
    visualContextMenu?: IMenuExtension;
    visualOptionsMenu?: IMenuExtension;
}
export interface IExtensionPoint {
}
export interface IMenuExtension extends IExtensionPoint {
    title?: string;
    icon?: string;
}
export interface IBaseFilterTarget {
    table: string;
}
export interface IFilterColumnTarget extends IBaseFilterTarget {
    column: string;
    aggregationFunction?: string;
}
export interface IFilterKeyColumnsTarget extends IFilterColumnTarget {
    keys: string[];
}
export interface IFilterKeyHierarchyTarget extends IFilterHierarchyTarget {
    keys: string[];
}
export interface IFilterHierarchyTarget extends IBaseFilterTarget {
    hierarchy: string;
    hierarchyLevel: string;
    aggregationFunction?: string;
}
export interface INotSupportedFilterTarget extends IBaseFilterTarget {
}
export interface IFilterMeasureTarget extends IBaseFilterTarget {
    measure: string;
}
export declare type IFilterKeyTarget = (IFilterKeyColumnsTarget | IFilterKeyHierarchyTarget);
export declare type IFilterTarget = (IFilterColumnTarget | IFilterHierarchyTarget | IFilterMeasureTarget | INotSupportedFilterTarget);
export interface IFilter {
    $schema: string;
    target: IFilterTarget;
    filterType: FilterType;
}
export interface INotSupportedFilter extends IFilter {
    message: string;
    notSupportedTypeName: string;
}
export interface IIncludeExcludeFilter extends IFilter {
    values: (string | number | boolean)[];
    isExclude: boolean;
}
export interface ITopNFilter extends IFilter {
    operator: TopNFilterOperators;
    itemCount: number;
}
export interface IRelativeDateFilter extends IFilter {
    operator: RelativeDateOperators;
    timeUnitsCount: number;
    timeUnitType: RelativeDateFilterTimeUnit;
    includeToday: boolean;
}
export interface IBasicFilter extends IFilter {
    operator: BasicFilterOperators;
    values: (string | number | boolean)[];
}
export interface IBasicFilterWithKeys extends IBasicFilter {
    target: IFilterKeyTarget;
    keyValues: (string | number | boolean)[][];
}
export declare type ReportLevelFilters = IBasicFilter | IBasicFilterWithKeys | IAdvancedFilter | IRelativeDateFilter;
export declare type PageLevelFilters = IBasicFilter | IBasicFilterWithKeys | IAdvancedFilter | IRelativeDateFilter;
export declare type VisualLevelFilters = IBasicFilter | IBasicFilterWithKeys | IAdvancedFilter | IRelativeDateFilter | ITopNFilter | IIncludeExcludeFilter;
export declare type ISlicerFilter = IBasicFilter | IBasicFilterWithKeys | IAdvancedFilter | IRelativeDateFilter;
export declare type TopNFilterOperators = "Top" | "Bottom";
export declare type BasicFilterOperators = "In" | "NotIn" | "All";
export declare type AdvancedFilterLogicalOperators = "And" | "Or";
export declare type AdvancedFilterConditionOperators = "None" | "LessThan" | "LessThanOrEqual" | "GreaterThan" | "GreaterThanOrEqual" | "Contains" | "DoesNotContain" | "StartsWith" | "DoesNotStartWith" | "Is" | "IsNot" | "IsBlank" | "IsNotBlank";
export interface IAdvancedFilterCondition {
    value: (string | number | boolean);
    operator: AdvancedFilterConditionOperators;
}
export interface IAdvancedFilter extends IFilter {
    logicalOperator: AdvancedFilterLogicalOperators;
    conditions: IAdvancedFilterCondition[];
}
export declare enum FilterType {
    Advanced = 0,
    Basic = 1,
    Unknown = 2,
    IncludeExclude = 3,
    RelativeDate = 4,
    TopN = 5,
}
export declare enum RelativeDateFilterTimeUnit {
    Days = 0,
    Weeks = 1,
    CalendarWeeks = 2,
    Months = 3,
    CalendarMonths = 4,
    Years = 5,
    CalendarYears = 6,
}
export declare enum RelativeDateOperators {
    InLast = 0,
    InThis = 1,
    InNext = 2,
}
export declare abstract class Filter {
    static schema: string;
    protected static schemaUrl: string;
    target: IFilterTarget;
    filterType: FilterType;
    protected schemaUrl: string;
    constructor(target: IFilterTarget, filterType: FilterType);
    toJSON(): IFilter;
}
export declare class NotSupportedFilter extends Filter {
    static schemaUrl: string;
    message: string;
    notSupportedTypeName: string;
    constructor(target: IFilterTarget, message: string, notSupportedTypeName: string);
    toJSON(): INotSupportedFilter;
}
export declare class IncludeExcludeFilter extends Filter {
    static schemaUrl: string;
    values: (string | number | boolean)[];
    isExclude: boolean;
    constructor(target: IFilterTarget, isExclude: boolean, values: (string | number | boolean)[]);
    toJSON(): IIncludeExcludeFilter;
}
export declare class TopNFilter extends Filter {
    static schemaUrl: string;
    operator: TopNFilterOperators;
    itemCount: number;
    constructor(target: IFilterTarget, operator: TopNFilterOperators, itemCount: number);
    toJSON(): ITopNFilter;
}
export declare class RelativeDateFilter extends Filter {
    static schemaUrl: string;
    operator: RelativeDateOperators;
    timeUnitsCount: number;
    timeUnitType: RelativeDateFilterTimeUnit;
    includeToday: boolean;
    constructor(target: IFilterTarget, operator: RelativeDateOperators, timeUnitsCount: number, timeUnitType: RelativeDateFilterTimeUnit, includeToday: boolean);
    toJSON(): IRelativeDateFilter;
}
export declare class BasicFilter extends Filter {
    static schemaUrl: string;
    operator: BasicFilterOperators;
    values: (string | number | boolean)[];
    keyValues: (string | number | boolean)[][];
    constructor(target: IFilterTarget, operator: BasicFilterOperators, ...values: ((string | number | boolean) | (string | number | boolean)[])[]);
    toJSON(): IBasicFilter;
}
export declare class BasicFilterWithKeys extends BasicFilter {
    keyValues: (string | number | boolean)[][];
    target: IFilterKeyTarget;
    constructor(target: IFilterKeyTarget, operator: BasicFilterOperators, values: ((string | number | boolean) | (string | number | boolean)[]), keyValues: (string | number | boolean)[][]);
    toJSON(): IBasicFilter;
}
export declare class AdvancedFilter extends Filter {
    static schemaUrl: string;
    logicalOperator: AdvancedFilterLogicalOperators;
    conditions: IAdvancedFilterCondition[];
    constructor(target: IFilterTarget, logicalOperator: AdvancedFilterLogicalOperators, ...conditions: (IAdvancedFilterCondition | IAdvancedFilterCondition[])[]);
    toJSON(): IAdvancedFilter;
}
export interface IDataReference {
    target: IFilterTarget;
}
export interface IEqualsDataReference extends IDataReference {
    equals: string | boolean | number | Date;
}
export interface IBetweenDataReference extends IDataReference {
    between: (string | boolean | number)[];
}
export interface IValueDataReference extends IDataReference {
    value: string | boolean | number | Date;
    formattedValue: string;
}
export interface IIdentityValue<T extends IDataReference> {
    identity: T[];
    values: IValueDataReference[];
}
export declare function isFilterKeyColumnsTarget(target: IFilterTarget): boolean;
export declare function isBasicFilterWithKeys(filter: IFilter): boolean;
export declare function getFilterType(filter: IFilter): FilterType;
export declare function isMeasure(arg: any): arg is IFilterMeasureTarget;
export declare function isColumn(arg: any): arg is IFilterColumnTarget;
export declare function isHierarchy(arg: any): arg is IFilterHierarchyTarget;
export interface IReportLoadConfiguration {
    accessToken: string;
    id: string;
    groupId?: string;
    settings?: ISettings;
    pageName?: string;
    filters?: ReportLevelFilters[];
    permissions?: Permissions;
    viewMode?: ViewMode;
    tokenType?: TokenType;
    bookmark?: IApplyBookmarkRequest;
}
export interface IReportCreateConfiguration {
    accessToken: string;
    datasetId: string;
    groupId?: string;
    settings?: ISettings;
    tokenType?: TokenType;
}
export interface IDashboardLoadConfiguration {
    accessToken: string;
    id: string;
    groupId?: string;
    pageView?: PageView;
    tokenType?: TokenType;
}
export interface ITileLoadConfiguration {
    accessToken: string;
    id: string;
    dashboardId: string;
    groupId?: string;
    tokenType?: TokenType;
    width?: number;
    height?: number;
}
export interface ISettings {
    background?: BackgroundType;
    bookmarksPaneEnabled?: boolean;
    customLayout?: ICustomLayout;
    extensions?: Extensions;
    filterPaneEnabled?: boolean;
    layoutType?: LayoutType;
    navContentPaneEnabled?: boolean;
    useCustomSaveAsDialog?: boolean;
}
export interface ISaveAsParameters {
    name: string;
}
export interface IQnaSettings {
    filterPaneEnabled?: boolean;
}
export interface ILoadQnaConfiguration {
    accessToken: string;
    datasetIds: string[];
    groupId?: string;
    question?: string;
    viewMode?: QnaMode;
    settings?: IQnaSettings;
    tokenType?: TokenType;
}
export declare enum QnaMode {
    Interactive = 0,
    ResultOnly = 1,
}
export declare enum ExportDataType {
    Summarized = 0,
    Underlying = 1,
}
export declare enum BookmarksPlayMode {
    Off = 0,
    Presentation = 1,
}
export interface IQnaInterpretInputData {
    question: string;
    datasetIds?: string[];
}
export interface IReportBookmark {
    name: string;
    displayName: string;
    state: string;
}
export interface IPlayBookmarkRequest {
    playMode: BookmarksPlayMode;
}
export interface IAddBookmarkRequest {
    state?: string;
    displayName?: string;
    apply?: boolean;
}
export declare type IApplyBookmarkRequest = IApplyBookmarkStateRequest | IApplyBookmarkByNameRequest;
export interface IApplyBookmarkStateRequest {
    state: string;
}
export interface IApplyBookmarkByNameRequest {
    name: string;
}
export interface IExportDataRequest {
    rows?: number;
    exportDataType?: ExportDataType;
}
export declare function validatePlayBookmarkRequest(input: any): IError[];
export declare function validateAddBookmarkRequest(input: any): IError[];
export declare function validateApplyBookmarkByNameRequest(input: any): IError[];
export declare function validateApplyBookmarkStateRequest(input: any): IError[];
export declare function validateSettings(input: any): IError[];
export declare function validateCustomPageSize(input: any): IError[];
export declare function validateExtension(input: any): IError[];
export declare function validateReportLoad(input: any): IError[];
export declare function validateCreateReport(input: any): IError[];
export declare function validateDashboardLoad(input: any): IError[];
export declare function validateTileLoad(input: any): IError[];
export declare function validatePage(input: any): IError[];
export declare function validateFilter(input: any): IError[];
export declare function validateSaveAsParameters(input: any): IError[];
export declare function validateLoadQnaConfiguration(input: any): IError[];
export declare function validateQnaInterpretInputData(input: any): IError[];
export declare function validateExportDataRequest(input: any): IError[];
