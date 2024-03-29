/*! powerbi-models v1.0.5 | (c) 2016 Microsoft Corporation MIT */
declare const Validators: any;
declare type KeyValuePair = {
    key: string;
    value: string;
};
interface ITechnicalDetails {
    requestId?: string;
    errorInfo?: KeyValuePair[];
}
interface IError {
    message: string;
    detailedMessage?: string;
    errorCode?: string;
    technicalDetails?: ITechnicalDetails;
}
declare enum PageSizeType {
    Widescreen = 0,
    Standard = 1,
    Cortana = 2,
    Letter = 3,
    Custom = 4,
}
declare enum DisplayOption {
    FitToPage = 0,
    FitToWidth = 1,
    ActualSize = 2,
}
declare enum BackgroundType {
    Default = 0,
    Transparent = 1,
}
interface IPageSize {
    type: PageSizeType;
}
interface ICustomPageSize extends IPageSize {
    width?: number;
    height?: number;
}
declare type PagesLayout = {
    [key: string]: IPageLayout;
};
declare type VisualsLayout = {
    [key: string]: IVisualLayout;
};
interface IPageLayout {
    defaultLayout?: IVisualLayout;
    visualsLayout: VisualsLayout;
}
declare enum VisualContainerDisplayMode {
    Visible = 0,
    Hidden = 1,
}
declare enum LayoutType {
    Master = 0,
    Custom = 1,
    MobilePortrait = 2,
    MobileLandscape = 3,
}
interface IVisualLayout {
    x?: number;
    y?: number;
    z?: number;
    width?: number;
    height?: number;
    displayState?: IVisualContainerDisplayState;
}
interface IVisualContainerDisplayState {
    mode: VisualContainerDisplayMode;
}
interface ICustomLayout {
    pageSize?: IPageSize;
    displayOption?: DisplayOption;
    pagesLayout?: PagesLayout;
}
interface IReport {
    id: string;
    displayName: string;
}
declare enum SectionVisibility {
    AlwaysVisible = 0,
    HiddenInViewMode = 1,
}
interface IPage {
    name: string;
    displayName: string;
    isActive?: boolean;
    visibility?: SectionVisibility;
    defaultSize?: ICustomPageSize;
    defaultDisplayOption?: DisplayOption;
}
interface IVisual {
    name: string;
    title: string;
    type: string;
    layout?: IVisualLayout;
}
declare enum Permissions {
    Read = 0,
    ReadWrite = 1,
    Copy = 2,
    Create = 4,
    All = 7,
}
declare enum ViewMode {
    View = 0,
    Edit = 1,
}
declare enum TokenType {
    Aad = 0,
    Embed = 1,
}
declare type PageView = "fitToWidth" | "oneColumn" | "actualSize";
interface IQnaVisualRenderedEvent {
    question: string;
    normalizedQuestion?: string;
}
interface IVisualCustomCommandEvent {
    visualName: string;
    command: string;
}
interface ISelection {
    visual: IVisual;
    page: IPage;
    report: IReport;
    dataPoints: IIdentityValue<IEqualsDataReference>[];
    regions: IIdentityValue<IEqualsDataReference | IBetweenDataReference>[];
    filters: IFilter[];
}
interface ISwipeEvent {
    currentPosition: IPosition;
    startPosition: IPosition;
}
interface IPosition {
    x: number;
    y: number;
}
declare type Extensions = IExtension[];
interface IExtension {
    command?: ICommandExtension;
}
interface IExtensionItem {
    name: string;
    extend: IExtensionPoints;
}
interface ICommandExtension extends IExtensionItem {
    title: string;
    icon?: string;
}
interface IExtensionPoints {
    visualContextMenu?: IMenuExtension;
    visualOptionsMenu?: IMenuExtension;
}
interface IExtensionPoint {
}
interface IMenuExtension extends IExtensionPoint {
    title?: string;
    icon?: string;
}
interface IBaseFilterTarget {
    table: string;
}
interface IFilterColumnTarget extends IBaseFilterTarget {
    column: string;
    aggregationFunction?: string;
}
interface IFilterKeyColumnsTarget extends IFilterColumnTarget {
    keys: string[];
}
interface IFilterKeyHierarchyTarget extends IFilterHierarchyTarget {
    keys: string[];
}
interface IFilterHierarchyTarget extends IBaseFilterTarget {
    hierarchy: string;
    hierarchyLevel: string;
    aggregationFunction?: string;
}
interface INotSupportedFilterTarget extends IBaseFilterTarget {
}
interface IFilterMeasureTarget extends IBaseFilterTarget {
    measure: string;
}
declare type IFilterKeyTarget = (IFilterKeyColumnsTarget | IFilterKeyHierarchyTarget);
declare type IFilterTarget = (IFilterColumnTarget | IFilterHierarchyTarget | IFilterMeasureTarget | INotSupportedFilterTarget);
interface IFilter {
    $schema: string;
    target: IFilterTarget;
    filterType: FilterType;
}
interface INotSupportedFilter extends IFilter {
    message: string;
    notSupportedTypeName: string;
}
interface IIncludeExcludeFilter extends IFilter {
    values: (string | number | boolean)[];
    isExclude: boolean;
}
interface ITopNFilter extends IFilter {
    operator: TopNFilterOperators;
    itemCount: number;
}
interface IRelativeDateFilter extends IFilter {
    operator: RelativeDateOperators;
    timeUnitsCount: number;
    timeUnitType: RelativeDateFilterTimeUnit;
    includeToday: boolean;
}
interface IBasicFilter extends IFilter {
    operator: BasicFilterOperators;
    values: (string | number | boolean)[];
}
interface IBasicFilterWithKeys extends IBasicFilter {
    target: IFilterKeyTarget;
    keyValues: (string | number | boolean)[][];
}
declare type ReportLevelFilters = IBasicFilter | IBasicFilterWithKeys | IAdvancedFilter | IRelativeDateFilter;
declare type PageLevelFilters = IBasicFilter | IBasicFilterWithKeys | IAdvancedFilter | IRelativeDateFilter;
declare type VisualLevelFilters = IBasicFilter | IBasicFilterWithKeys | IAdvancedFilter | IRelativeDateFilter | ITopNFilter | IIncludeExcludeFilter;
declare type ISlicerFilter = IBasicFilter | IBasicFilterWithKeys | IAdvancedFilter | IRelativeDateFilter;
declare type TopNFilterOperators = "Top" | "Bottom";
declare type BasicFilterOperators = "In" | "NotIn" | "All";
declare type AdvancedFilterLogicalOperators = "And" | "Or";
declare type AdvancedFilterConditionOperators = "None" | "LessThan" | "LessThanOrEqual" | "GreaterThan" | "GreaterThanOrEqual" | "Contains" | "DoesNotContain" | "StartsWith" | "DoesNotStartWith" | "Is" | "IsNot" | "IsBlank" | "IsNotBlank";
interface IAdvancedFilterCondition {
    value: (string | number | boolean);
    operator: AdvancedFilterConditionOperators;
}
interface IAdvancedFilter extends IFilter {
    logicalOperator: AdvancedFilterLogicalOperators;
    conditions: IAdvancedFilterCondition[];
}
declare enum FilterType {
    Advanced = 0,
    Basic = 1,
    Unknown = 2,
    IncludeExclude = 3,
    RelativeDate = 4,
    TopN = 5,
}
declare enum RelativeDateFilterTimeUnit {
    Days = 0,
    Weeks = 1,
    CalendarWeeks = 2,
    Months = 3,
    CalendarMonths = 4,
    Years = 5,
    CalendarYears = 6,
}
declare enum RelativeDateOperators {
    InLast = 0,
    InThis = 1,
    InNext = 2,
}
declare abstract class Filter {
    static schema: string;
    protected static schemaUrl: string;
    target: IFilterTarget;
    filterType: FilterType;
    protected schemaUrl: string;
    constructor(target: IFilterTarget, filterType: FilterType);
    toJSON(): IFilter;
}
declare class NotSupportedFilter extends Filter {
    static schemaUrl: string;
    message: string;
    notSupportedTypeName: string;
    constructor(target: IFilterTarget, message: string, notSupportedTypeName: string);
    toJSON(): INotSupportedFilter;
}
declare class IncludeExcludeFilter extends Filter {
    static schemaUrl: string;
    values: (string | number | boolean)[];
    isExclude: boolean;
    constructor(target: IFilterTarget, isExclude: boolean, values: (string | number | boolean)[]);
    toJSON(): IIncludeExcludeFilter;
}
declare class TopNFilter extends Filter {
    static schemaUrl: string;
    operator: TopNFilterOperators;
    itemCount: number;
    constructor(target: IFilterTarget, operator: TopNFilterOperators, itemCount: number);
    toJSON(): ITopNFilter;
}
declare class RelativeDateFilter extends Filter {
    static schemaUrl: string;
    operator: RelativeDateOperators;
    timeUnitsCount: number;
    timeUnitType: RelativeDateFilterTimeUnit;
    includeToday: boolean;
    constructor(target: IFilterTarget, operator: RelativeDateOperators, timeUnitsCount: number, timeUnitType: RelativeDateFilterTimeUnit, includeToday: boolean);
    toJSON(): IRelativeDateFilter;
}
declare class BasicFilter extends Filter {
    static schemaUrl: string;
    operator: BasicFilterOperators;
    values: (string | number | boolean)[];
    keyValues: (string | number | boolean)[][];
    constructor(target: IFilterTarget, operator: BasicFilterOperators, ...values: ((string | number | boolean) | (string | number | boolean)[])[]);
    toJSON(): IBasicFilter;
}
declare class BasicFilterWithKeys extends BasicFilter {
    keyValues: (string | number | boolean)[][];
    target: IFilterKeyTarget;
    constructor(target: IFilterKeyTarget, operator: BasicFilterOperators, values: ((string | number | boolean) | (string | number | boolean)[]), keyValues: (string | number | boolean)[][]);
    toJSON(): IBasicFilter;
}
declare class AdvancedFilter extends Filter {
    static schemaUrl: string;
    logicalOperator: AdvancedFilterLogicalOperators;
    conditions: IAdvancedFilterCondition[];
    constructor(target: IFilterTarget, logicalOperator: AdvancedFilterLogicalOperators, ...conditions: (IAdvancedFilterCondition | IAdvancedFilterCondition[])[]);
    toJSON(): IAdvancedFilter;
}
interface IDataReference {
    target: IFilterTarget;
}
interface IEqualsDataReference extends IDataReference {
    equals: string | boolean | number | Date;
}
interface IBetweenDataReference extends IDataReference {
    between: (string | boolean | number)[];
}
interface IValueDataReference extends IDataReference {
    value: string | boolean | number | Date;
    formattedValue: string;
}
interface IIdentityValue<T extends IDataReference> {
    identity: T[];
    values: IValueDataReference[];
}
declare function isFilterKeyColumnsTarget(target: IFilterTarget): boolean;
declare function isBasicFilterWithKeys(filter: IFilter): boolean;
declare function getFilterType(filter: IFilter): FilterType;
declare function isMeasure(arg: any): arg is IFilterMeasureTarget;
declare function isColumn(arg: any): arg is IFilterColumnTarget;
declare function isHierarchy(arg: any): arg is IFilterHierarchyTarget;
interface IReportLoadConfiguration {
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
interface IReportCreateConfiguration {
    accessToken: string;
    datasetId: string;
    groupId?: string;
    settings?: ISettings;
    tokenType?: TokenType;
}
interface IDashboardLoadConfiguration {
    accessToken: string;
    id: string;
    groupId?: string;
    pageView?: PageView;
    tokenType?: TokenType;
}
interface ITileLoadConfiguration {
    accessToken: string;
    id: string;
    dashboardId: string;
    groupId?: string;
    tokenType?: TokenType;
    width?: number;
    height?: number;
}
interface ISettings {
    background?: BackgroundType;
    bookmarksPaneEnabled?: boolean;
    customLayout?: ICustomLayout;
    extensions?: Extensions;
    filterPaneEnabled?: boolean;
    layoutType?: LayoutType;
    navContentPaneEnabled?: boolean;
    useCustomSaveAsDialog?: boolean;
}
interface ISaveAsParameters {
    name: string;
}
interface IQnaSettings {
    filterPaneEnabled?: boolean;
}
interface ILoadQnaConfiguration {
    accessToken: string;
    datasetIds: string[];
    groupId?: string;
    question?: string;
    viewMode?: QnaMode;
    settings?: IQnaSettings;
    tokenType?: TokenType;
}
declare enum QnaMode {
    Interactive = 0,
    ResultOnly = 1,
}
declare enum ExportDataType {
    Summarized = 0,
    Underlying = 1,
}
declare enum BookmarksPlayMode {
    Off = 0,
    Presentation = 1,
}
interface IQnaInterpretInputData {
    question: string;
    datasetIds?: string[];
}
interface IReportBookmark {
    name: string;
    displayName: string;
    state: string;
}
interface IPlayBookmarkRequest {
    playMode: BookmarksPlayMode;
}
interface IAddBookmarkRequest {
    state?: string;
    displayName?: string;
    apply?: boolean;
}
declare type IApplyBookmarkRequest = IApplyBookmarkStateRequest | IApplyBookmarkByNameRequest;
interface IApplyBookmarkStateRequest {
    state: string;
}
interface IApplyBookmarkByNameRequest {
    name: string;
}
interface IExportDataRequest {
    rows?: number;
    exportDataType?: ExportDataType;
}
declare function validatePlayBookmarkRequest(input: any): IError[];
declare function validateAddBookmarkRequest(input: any): IError[];
declare function validateApplyBookmarkByNameRequest(input: any): IError[];
declare function validateApplyBookmarkStateRequest(input: any): IError[];
declare function validateSettings(input: any): IError[];
declare function validateCustomPageSize(input: any): IError[];
declare function validateExtension(input: any): IError[];
declare function validateReportLoad(input: any): IError[];
declare function validateCreateReport(input: any): IError[];
declare function validateDashboardLoad(input: any): IError[];
declare function validateTileLoad(input: any): IError[];
declare function validatePage(input: any): IError[];
declare function validateFilter(input: any): IError[];
declare function validateSaveAsParameters(input: any): IError[];
declare function validateLoadQnaConfiguration(input: any): IError[];
declare function validateQnaInterpretInputData(input: any): IError[];
declare function validateExportDataRequest(input: any): IError[];
