var IqraConfig = {
    Text: {
        Branch:'Mirpur-DOHS',
        Title: 'Iqrasys Solutions LTD.',
        Address: 'House 470, Road 06, Avenue 06, Mirpur DOHS, Dhaka',
        Phone: 'Phone : 01778-772327'
    }
};

IqraConfig = {
    Version: '1.17',
    BaseUrl: '',
    Url: {
        Js: {
            Grid: '/js/IqraService/Js/Grid.js',
            GridEditor: '/js/IqraService/Js/GridEditor.js',
            //Grid: '/js/Js/Grid.js',
            ListController: '/js/IqraService/Js/ListController.js',
            AddController: '/js/IqraService/Js/AddController.js',
            AddFormController: '/js/IqraService/Js/AddFormController.js',
            WarningController: '/js/IqraService/Js/WarningController.js',
            DatePicker: '/js/IqraService/Js/DatePicker.js',
            DropDown: '/js/IqraService/Js/DropDown.js',
            DetailsWithGrid: '/js/IqraService/Js/OnDetailsWithGrid.js',
            OnDetailsWithTab: '/js/IqraService/Js/OnDetailsWithTab.js',
            AutoComplete: '/js/IqraService/Js/AutoComplete.js',
            MultiSelect: '/js/IqraService/Js/MultiSelect.js',
            LineChart: '/js/IqraService/Js/LineChart.js',
        },
        Css: {
            Grid: '/js/IqraService/Css/Grid.css',
            Window: '/js/IqraService/Css/Window.css',
            Datepicker: '/js/IqraService/Css/DatePicker.css',
            DropDown: '/js/IqraService/Css/DropDown.css',
        },
        Img: {
            Loading: '/js/IqraService/Img/loading_line.gif'
        }
    },
    Grid: {
        Responsive: true,
        selector: {},
        Printable: {
            Container: '.button_container',
            //html: '<a class="btn btn-default btn-round btn_add_print pull-right"><span class="glyphicon glyphicon-print"></span> Print </a>',
            html: '<a class="btn btn-default btn-round btn_add_print pull-right"><span class="glyphicon glyphicon-print"></span> Print </a>',
            header: `<div style="text-align:center; margin-bottom:20px;">
                        <div style="border: 1px solid silver;">
                            <div style="margin: 0px; border-top: medium none; border-bottom: medium none;min-height: 50px;">
                                <div style="font-size:2em;"> `+ IqraConfig.Text.Title + ` </div>
                                <div> `+ IqraConfig.Text.Address + ` </div>
                                <div> `+ IqraConfig.Text.Phone + ` </div>
                            </div>
                        </div>
                        <div class="report_title" style="font-size:2em; margin-top:10px;"></div>
                    </div>`,
            reportTitle: function (model) {
                var text = '';
                return (model.title || model.name || document.title)+' Report';
            },
            summaryTitle: () => '',
            summaryFooter: () => '',
            gridTitle: () => '',
            gridFooter: () => {
                return '';
            },
            gridPageFooter: (model) => {
                var time = '<div style="">';
                if (model.DataLoadedAt && model.DataLoadedAt.getDate()) {
                    time += '<div style="float:left;"> Report Generated At : ' + model.DataLoadedAt.format('yyyy-MM-dd hh:mm') + '</div>';
                    time += '<div style="float:right;"> Printed At : ' + new Date().format('yyyy-MM-dd hh:mm') + '</div>';
                }
                time += '</div>';
                //console.log(['time', time]);
                return time;
            },
            footer: function (model) {
                //var text = '', time = '<div><div style="position:fixed;bottom:0;border-top: 1px solid black; width:100%;">';
                var text = '';
                if (model.footer && model.footer.showingInfo && model.footer.showingInfo.html) {
                    text = model.footer.showingInfo.html();
                }
                //.DataLoadedAt
                return '<div style="text-align: right; font-size: 1.5em; font-weight: bold; padding-top: 5px;">' + text + '</div>';
            }
        },
        setting: {
            url: function (model) {
                return '/IqraGridArea/IqraGrid/GetById?Id=' + model.Id;
            },
            save: function (model) {
                return '/IqraGridArea/IqraGrid/Add';
            },
            remove: function (model) {
                return '/IqraGridArea/IqraGrid/Remove';
            },
        },
        resizable: true,
        Operation: 6,
        Pagger: {
            PageSize: [5, 10, 20, 50, 100, 200, 300, 400, 500, 1000],
            Selected: 10
        },
        FixedHeader: true,
    },
    DropDown: {
        ValuField: 'value',
        TextField: 'text'
    },
    AutoComplete: {
        ValuField: 'Id',
        TextField: 'Name',
        Operation: 6,
        Page: { "PageNumber": 1, "PageSize": 20, filter: [] }
    },
    MultiSelect: {
        ValuField: 'Id',
        TextField: 'Name',
        Operation: 6,
        Page: {
            "PageNumber": 1, "PageSize": 30
        }
    },
    Text: IqraConfig.Text
};



