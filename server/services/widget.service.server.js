module.exports = function(app) {
    // Create Widget
    app.post('/api/widget', createWidget);

    // Find All Widgets For Page
    app.get('/api/page/:pid/widget', findAllWidgetsForPage);

    // Find Widget By Id
    app.get('/api/widget/:wgid', findWidgetById);

    // Update Widget
    app.put('/api/widget', updateWidget);

    // Delete Widget
    app.delete('/api/widget/:wgid', deleteWidget);

    widgets = [
        {
        _id: "123",
        widgetType: "HEADING",
        pageId: "321",
        size: 2,
        text: "GIZMODO"
        },
        {
        _id: "234",
        widgetType: "HEADING",
        pageId: "321",
        size: 4,
        text: "Lorem ipsum"
        },
        {
        _id: "345",
        widgetType: "IMAGE",
        pageId: "321",
        width: "50%",
        url: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BBKHUZJ.img?h=416&w=624&m=6&q=60&u=t&o=f&l=f&x=1733&y=1447"
        },
        {
        _id: "567",
         widgetType: "HEADING",
         pageId: "321",
         size: 4,
         text: "Lorem ipsum"
        },
        {
        _id: "678",
        widgetType: "YOUTUBE",
        pageId: "321",
        width: "60%",
        url: "https://youtu.be/AM2Ivdi9c4E"
        },
    ];

    function createWidget(req, res) {
        const widget = req.body;
        widget._id = Math.random().toString();
        widgets.push(widget);
        res.json(widget);
    }

    function findAllWidgetsForPage(req, res) {
        let result = [];
        const pid = req.params['pid'];
        for (let i = 0; i < widgets.length; i++) {
            if (widgets[i].pageId === pid) {
                result.push(widgets[i]);
            }
        }
        res.json(result);
    }

    function findWidgetById(req, res) {
        const wgid = req.params['wgid'];
        const widget = selectWidgetById(wgid);
        res.json(widget);
    }

    function selectWidgetById(wgid) {
        for (let i = 0; i < widgets.length; i++) {
            if (widgets[i]._id === wgid) {
                return widgets[i];
            }
        }
    }

    function updateWidget(req, res) {
        const widget = req.body;
        const oldWidget = selectWidgetById(widget._id);
        const index = widgets.indexOf(oldWidget);
        widgets[index] = widget;
        res.json(widget);
    }

    function deleteWidget(req, res) {
        const wgid = req.params['wgid'];
        const widget = selectWidgetById(wgid);
        const index = widgets.indexOf(widget);
        widgets.splice(index, 1);
        res.json(widgets);
    }
}