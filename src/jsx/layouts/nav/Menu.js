export const MenuList = [
  //Dashboard
  {
    title: "Home",
    to: "dashboard",
    classsChange: "mm-collapse",
    iconStyle: <i className="material-icons">grid_view</i>,
  },
  {
    title: "Withdraw",
    iconStyle: <i className="material-icons">grid_view</i>,

    content: [
      {
        title: "withdraw",
        to: "withdraw",
      },
      {
        title: "withdraw-history",
        iconStyle: <i className="material-icons"> Withdraw History</i>,
        to: "withdraw-history",
      },
    ],
  },
  {
    title: "Deposit",
    iconStyle: <i className="material-icons">grid_view</i>,
    content: [
      {
        title: "deposit",
        to: "deposit",
      },
      {
        title: "deposit History",
        iconStyle: <i className="material-icons"> Deposit </i>,
        to: "deposit-history",
      },
    ],
  },
  {
    title: "Product",
    iconStyle: <i className="material-icons"> app_registration </i>,
    hasMenu: true,
    content: [
      {
        title: "Category",
        to: "ecom-product-grid",
      },
      {
        title: "All Products",
        to: "ecom-product-list",
      },
      {
        title: "Product Details",
        to: "ecom-product-detail",
      },
    ],
  },
  //   ! Invoice

  //   ! Order

  {
    title: "Order",
    to: "ecom-product-order",
    classsChange: "mm-collapse",
    iconStyle: <i className="material-icons"> app_registration </i>,
    content: [
      {
        title: "All Orders",
        to: "ecom-product-order",
      },
      {
        title: "Pending Orders",
        to: "ecom-product-grid",
      },
      {
        title: "Completed Orders",
        to: "ecom-product-grid",
      },
    ],
  },
  //   !Customers
  {
    title: "Customers",
    to: "ecom-customers",
    classsChange: "mm-collapse",
    iconStyle: <i className="material-icons"> app_registration </i>,
    content: [
      {
        title: "All Customers",
        to: "ecom-customers",
      },
      {
        title: "Customers Groups",
        to: "edit-profile",
      },
      {
        title: "Add Customer",
        to: "ecom-checkout",
      },
    ],
  },
  //Trading
  //   {
  //     title: "Trading",
  //     classsChange: "mm-collapse",
  //     iconStyle: <i className="material-icons">trending_up</i>,
  //     content: [
  //       {
  //         title: "Market",
  //         to: "market",
  //       },
  //       {
  //         title: "ICO Listing",
  //         to: "ico-listing",
  //       },
  //       {
  //         title: "P2P",
  //         to: "p2p",
  //       },
  //       {
  //         title: "Future",
  //         to: "future",
  //       },
  //       {
  //         title: "Intraday Trading",
  //         to: "intraday-trading",
  //       },
  //     ],
  //   },

  //Crypto

  //Reports
  {
    title: "Reports",
    classsChange: "mm-collapse",
    iconStyle: <i className="material-icons">description</i>,
    content: [
      {
        title: "RechartJs",
        to: "chart-rechart",
      },
    ],
  },

  //Invoice
  {
    title: "Invoice",
    to: "ecom-invoice",
    iconStyle: <i className="material-icons"> app_registration </i>,
  },
  //Charts

  //Boosttrap
  //   {
  //     title: "Bootstrap",
  //     classsChange: "mm-collapse",
  //     iconStyle: <i className="material-icons"> favorite </i>,
  //     content: [
  //       {
  //         title: "Accordion",
  //         to: "ui-accordion",
  //       },
  //       {
  //         title: "Alert",
  //         to: "ui-alert",
  //       },
  //       {
  //         title: "Badge",
  //         to: "ui-badge",
  //       },
  //       {
  //         title: "Button",
  //         to: "ui-button",
  //       },
  //       {
  //         title: "Modal",
  //         to: "ui-modal",
  //       },
  //       {
  //         title: "Button Group",
  //         to: "ui-button-group",
  //       },
  //       {
  //         title: "List Group",
  //         to: "ui-list-group",
  //       },
  //       {
  //         title: "Cards",
  //         to: "ui-card",
  //       },
  //       {
  //         title: "Carousel",
  //         to: "ui-carousel",
  //       },
  //       {
  //         title: "Dropdown",
  //         to: "ui-dropdown",
  //       },
  //       {
  //         title: "Popover",
  //         to: "ui-popover",
  //       },
  //       {
  //         title: "Progressbar",
  //         to: "ui-progressbar",
  //       },
  //       {
  //         title: "Tab",
  //         to: "ui-tab",
  //       },
  //       {
  //         title: "Typography",
  //         to: "ui-typography",
  //       },
  //       {
  //         title: "Pagination",
  //         to: "ui-pagination",
  //       },
  //       {
  //         title: "Grid",
  //         to: "ui-grid",
  //       },
  //     ],
  //   },
  //   //plugins
  //   {
  //     title: "Plugins",
  //     classsChange: "mm-collapse",
  //     iconStyle: <i className="material-icons"> extension </i>,
  //     content: [
  //       {
  //         title: "Select 2",
  //         to: "uc-select2",
  //       },
  //       // {
  //       //     title:'Noui Slider',
  //       //     to: 'uc-noui-slider',
  //       // },
  //       {
  //         title: "Sweet Alert",
  //         to: "uc-sweetalert",
  //       },
  //       {
  //         title: "Toastr",
  //         to: "uc-toastr",
  //       },
  //       {
  //         title: "Jqv Map",
  //         to: "map-jqvmap",
  //       },
  //       {
  //         title: "Light Gallery",
  //         to: "uc-lightgallery",
  //       },
  //     ],
  //   },
  //   //Widget
  //   {
  //     title: "Widget",
  //     //classsChange: 'mm-collapse',
  //     iconStyle: <i className="bi bi-gear-wide"></i>,
  //     to: "widget-basic",
  //   },
  //   //Forms
  //   {
  //     title: "Forms",
  //     classsChange: "mm-collapse",
  //     iconStyle: <i className="material-icons"> insert_drive_file </i>,
  //     content: [
  //       {
  //         title: "Form Elements",
  //         to: "form-element",
  //       },
  //       {
  //         title: "Wizard",
  //         to: "form-wizard",
  //       },
  //       {
  //         title: "CkEditor",
  //         to: "form-ckeditor",
  //       },
  //       {
  //         title: "Pickers",
  //         to: "form-pickers",
  //       },
  //       {
  //         title: "Form Validate",
  //         to: "form-validation",
  //       },
  //     ],
  //   },
  //   //Table
  //   {
  //     title: "Table",
  //     classsChange: "mm-collapse",
  //     iconStyle: <i className="material-icons"> table_chart </i>,
  //     content: [
  //       {
  //         title: "Table Filtering",
  //         to: "table-filtering",
  //       },
  //       {
  //         title: "Table Sorting",
  //         to: "table-sorting",
  //       },
  //       {
  //         title: "Bootstrap",
  //         to: "table-bootstrap-basic",
  //       },
  //     ],
  //   },
  //   //Pages
  //   {
  //     title: "Pages",
  //     classsChange: "mm-collapse",
  //     iconStyle: <i className="material-icons">article</i>,
  //     content: [
  //       {
  //         title: "Error",
  //         hasMenu: true,
  //         content: [
  //           {
  //             title: "Error 400",
  //             to: "page-error-400",
  //           },
  //           {
  //             title: "Error 403",
  //             to: "page-error-403",
  //           },
  //           {
  //             title: "Error 404",
  //             to: "page-error-404",
  //           },
  //           {
  //             title: "Error 500",
  //             to: "page-error-500",
  //           },
  //           {
  //             title: "Error 503",
  //             to: "page-error-503",
  //           },
  //         ],
  //       },
  //       {
  //         title: "Lock Screen",
  //         to: "page-lock-screen",
  //       },
  //     ],
  //   },
];
