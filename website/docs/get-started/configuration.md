# Configuration

## File Location

### Basic

Place your `.clang-format` configuration file in the root of your project. The `clang-format` and `git-clang-format` command will automatically find it and apply the rules.

```sh {6}
my-project/
├── src/
│   ├── file1.cpp
│   ├── file2.js
│   └── ...
├── .clang-format # [!code focus]
├── package.json
└── ...
```

### Monorepo

If you are using monorepo, you can place the configuration file in the root of the monorepo.

```sh {8}
my-monorepo/
├── packages/
│   ├── package1/
│   │   ├── src/
│   │   │   ├── file1.cpp
│   │   │   ├── file2.js
│   │   │   └── ...
│   │   ├── .clang-format # [!code focus]
│   │   ├── package.json
│   │   └── ...
│   ├── package2/
│   │   ├── src/
│   │   │   ├── file1.cpp
│   │   │   ├── file2.js
│   │   │   └── ...
│   │   ├── package.json
│   │   └── ...
│   └── ...
├── package.json
└── ...
```

## File Format

> [!IMPORTANT]
>
> To see the full list of options, check the [Clang-Format Style Options](https://clang.llvm.org/docs/ClangFormatStyleOptions.html) page.

You can use the `.clang-format` file to configure the style of your code. Here is an brief example of a `.clang-format` file:

- Simple:

    ```.clang-format [.clang-format]
    BasedOnStyle: Google
    ColumnLimit: 90
    ```

- Advanced:

    ::: details Node.js project's configuration. See [Node.js repository](https://github.com/nodejs/node/blob/main/.clang-format).

    ```.clang-format [.clang-format]
    ---
    Language:        Cpp
    # BasedOnStyle:  Google
    AccessModifierOffset: -1
    AlignAfterOpenBracket: Align
    AlignConsecutiveAssignments: false
    AlignConsecutiveDeclarations: false
    AlignEscapedNewlines: Right
    AlignOperands:   true
    AlignTrailingComments: true
    AllowAllParametersOfDeclarationOnNextLine: true
    AllowShortBlocksOnASingleLine: false
    AllowShortCaseLabelsOnASingleLine: false
    AllowShortFunctionsOnASingleLine: Inline
    AllowShortIfStatementsOnASingleLine: true
    AllowShortLoopsOnASingleLine: true
    AlwaysBreakAfterDefinitionReturnType: None
    AlwaysBreakAfterReturnType: None
    AlwaysBreakBeforeMultilineStrings: false
    AlwaysBreakTemplateDeclarations: true
    BinPackArguments: false
    BinPackParameters: false
    BraceWrapping:
      AfterClass:      false
      AfterControlStatement: false
      AfterEnum:       false
      AfterFunction:   false
      AfterNamespace:  false
      AfterObjCDeclaration: false
      AfterStruct:     false
      AfterUnion:      false
      AfterExternBlock: false
      BeforeCatch:     false
      BeforeElse:      false
      IndentBraces:    false
      SplitEmptyFunction: true
      SplitEmptyRecord: true
      SplitEmptyNamespace: true
    BreakBeforeBinaryOperators: None
    BreakBeforeBraces: Attach
    BreakBeforeInheritanceComma: false
    BreakBeforeTernaryOperators: true
    BreakConstructorInitializersBeforeComma: false
    BreakConstructorInitializers: BeforeColon
    BreakAfterJavaFieldAnnotations: false
    BreakStringLiterals: true
    ColumnLimit:      80
    CommentPragmas:  '^ IWYU pragma:'
    CompactNamespaces: false
    ConstructorInitializerAllOnOneLineOrOnePerLine: true
    ConstructorInitializerIndentWidth: 4
    ContinuationIndentWidth: 4
    Cpp11BracedListStyle: true
    DerivePointerAlignment: false
    DisableFormat:   false
    ExperimentalAutoDetectBinPacking: false
    FixNamespaceComments: true
    ForEachMacros:
      - foreach
      - Q_FOREACH
      - BOOST_FOREACH
    IncludeBlocks:   Preserve
    IncludeCategories:
      - Regex:           '^<ext/.*\.h>'
        Priority:        2
      - Regex:           '^<.*\.h>'
        Priority:        1
      - Regex:           '^<.*'
        Priority:        2
      - Regex:           '.*'
        Priority:        3
    IncludeIsMainRegex: '([-_](test|unittest))?$'
    IndentCaseLabels: true
    IndentPPDirectives: None
    IndentWidth:     2
    IndentWrappedFunctionNames: false
    JavaScriptQuotes: Leave
    JavaScriptWrapImports: true
    KeepEmptyLinesAtTheStartOfBlocks: false
    MacroBlockBegin: ''
    MacroBlockEnd:   ''
    MaxEmptyLinesToKeep: 1
    NamespaceIndentation: None
    ObjCBlockIndentWidth: 2
    ObjCSpaceAfterProperty: false
    ObjCSpaceBeforeProtocolList: false
    PenaltyBreakAssignment: 2
    PenaltyBreakBeforeFirstCallParameter: 1
    PenaltyBreakComment: 300
    PenaltyBreakFirstLessLess: 120
    PenaltyBreakString: 1000
    PenaltyExcessCharacter: 1000000
    PenaltyReturnTypeOnItsOwnLine: 200
    PointerAlignment: Left
    ReflowComments:  true
    SortIncludes:    true
    SortUsingDeclarations: true
    SpaceAfterCStyleCast: false
    SpaceAfterTemplateKeyword: true
    SpaceBeforeAssignmentOperators: true
    SpaceBeforeParens: ControlStatements
    SpaceInEmptyParentheses: false
    SpacesBeforeTrailingComments: 2
    SpacesInAngles:  false
    SpacesInContainerLiterals: true
    SpacesInCStyleCastParentheses: false
    SpacesInParentheses: false
    SpacesInSquareBrackets: false
    Standard:        Auto
    TabWidth:        8
    UseTab:          Never
    ```

    :::

    ::: details Electron project's configuration. See [Electron repository](https://github.com/electron/electron/blob/main/.clang-format).

    ```.clang-format [.clang-format]
    # Defines the Chromium style for automatic reformatting.
    # http://clang.llvm.org/docs/ClangFormatStyleOptions.html
    BasedOnStyle: Chromium
    # This defaults to 'Auto'. Explicitly set it for a while, so that
    # 'vector<vector<int> >' in existing files gets formatted to
    # 'vector<vector<int>>'. ('Auto' means that clang-format will only use
    # 'int>>' if the file already contains at least one such instance.)
    Standard: Cpp11
    # Make sure code like:
    # IPC_BEGIN_MESSAGE_MAP()
    #   IPC_MESSAGE_HANDLER(WidgetHostViewHost_Update, OnUpdate)
    # IPC_END_MESSAGE_MAP()
    # gets correctly indented.
    MacroBlockBegin: "^\
    BEGIN_MSG_MAP|\
    BEGIN_MSG_MAP_EX|\
    BEGIN_SAFE_MSG_MAP_EX|\
    CR_BEGIN_MSG_MAP_EX|\
    IPC_BEGIN_MESSAGE_MAP|\
    IPC_BEGIN_MESSAGE_MAP_WITH_PARAM|\
    IPC_PROTOBUF_MESSAGE_TRAITS_BEGIN|\
    IPC_STRUCT_BEGIN|\
    IPC_STRUCT_BEGIN_WITH_PARENT|\
    IPC_STRUCT_TRAITS_BEGIN|\
    POLPARAMS_BEGIN|\
    PPAPI_BEGIN_MESSAGE_MAP$"
    MacroBlockEnd: "^\
    CR_END_MSG_MAP|\
    END_MSG_MAP|\
    IPC_END_MESSAGE_MAP|\
    IPC_PROTOBUF_MESSAGE_TRAITS_END|\
    IPC_STRUCT_END|\
    IPC_STRUCT_TRAITS_END|\
    POLPARAMS_END|\
    PPAPI_END_MESSAGE_MAP$"
    ```

    :::
